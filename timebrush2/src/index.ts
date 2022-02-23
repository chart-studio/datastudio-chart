import {
  subscribeToData,
  objectTransform,
  getWidth,
  getHeight,
  InteractionType,
  sendInteraction,
  ObjectFormat,
  clearInteraction,
  ObjectRow,
  RowEntry,
} from "@google/dscc";
import * as local from "./localMessage";
import * as d3 from "d3v4";
// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

//Global variables
let startDate: string = "";
let endDate: string = "";
const dateFormat = "%Y%m%d";
let positionAnchor = 10;
let positionText = 5;
var parseDate = d3.timeParse(dateFormat);

window.onresize = function () {
  location.reload();
};

// write viz code here
const drawViz = (vizData: ObjectFormat) => {
  resetAllElements(vizData);
  let fontFamily = styleVal(vizData, "fontFamily") || "Open Sans";
  let color = styleVal(vizData, "colorText") || "#808080"; //#00838F
  let colorBar = styleVal(vizData, "colorBar") || "#4682b4"; //#E64A19
  let colorSubBar = styleVal(vizData, "colorSubBar") || "#808080"; //#E64A19
  const body = document.querySelector("body");
  body.setAttribute("style", `font-family: ${fontFamily}, sans-serif;`);

  //https://www.w3schools.com/colors/colors_converter.asp
  const datasetSource = vizData.tables.DEFAULT;

  const dataset = datasetSource.map((e, i) => {
    return {
      date: e.date[0],
      effectif: e.effectif[0],
    };
  });

  const svgWidth = getWidth();
  const svgHeight = getHeight();
  const margin = {
    top: (svgHeight * 6) / 100,
    right: 50,
    left: 70,
  };
  const margin2 = {
    top: (svgHeight * 82) / 100,
    right: 50,
    left: 70,
  };
  const width = +svgWidth - margin.left - margin.right;
  //const height = +svgHeight - margin.top - margin.bottom;
  const height = (+svgHeight * 70) / 100;
  //const height2 = +svgHeight - margin2.top - margin2.bottom;
  const height2 = (+svgHeight * 10) / 100;

  var formatDate = d3.timeFormat("%Y-%m-%d");
  var formatDate2 = d3.timeFormat("%Y%m%d");
  dataset.sort(compareDate);
  const periode = alldays(dataset).day;

  var x = d3.scaleTime().range([0, width]) as any,
    x2 = d3.scaleTime().range([0, width]) as any,
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]);

  const factorBand = 0.7;
  let xBand = d3
    .scaleBand()
    //.domain(d3.range(-2, dataset.length + 2))
    .domain(d3.range(-2, periode + 2))
    .range([0, width])
    .padding(0.2);

  var xAxis = d3.axisBottom(x),
    yAxis = d3.axisLeft(y);

  x.domain(
    d3.extent(dataset, function (d: { date: RowEntry; effectif: RowEntry }) {
      return parseDate(d.date);
    })
  );
  y.domain([
    0,
    d3.max(dataset, function (d: { date: RowEntry; effectif: RowEntry }) {
      return d.effectif;
    }),
  ]);
  x2.domain(x.domain());
  y2.domain(y.domain());

  var brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("start brush end", brushed);

  //d3.select("body").selectAll("svg").remove();

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("viewBox", [0, 0, svgWidth, svgHeight]);

  var focus = svg
    .append("g")
    .attr("class", "focus")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  var context = svg
    .append("g")
    .attr("class", "context")
    .attr("transform", `translate(${margin2.left}, ${margin2.top})`);

  focus
    .append("g")
    .attr("clip-path", "url(#my-clip-path)")
    .selectAll(".bar")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d: any, i: any) => {
      return x(parseDate(d.date));
    })
    .attr("y", (d: any, i: any) => {
      return y(d.effectif);
    })
    .attr("width", function (d: any) {
      return xBand.bandwidth() * factorBand;
    })
    .attr("height", (d: any) => {
      return y(0) - y(d.effectif);
    });

  focus
    .append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis);
  focus.append("g").attr("class", "axis axis--y").call(yAxis);
  let defs = focus.append("defs");
  defs
    .append("clipPath")
    .attr("id", "my-clip-path")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

  context
    .selectAll(".subBar")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "subBar")
    .attr("x", (d: any, i: any) => {
      return x(parseDate(d.date));
    })
    .attr("y", (d: any, i: any) => y2(d.effectif))
    .attr("width", xBand.bandwidth() * factorBand)
    .attr("height", (d: any) => {
      return height2 - y2(d.effectif);
    });

  context
    .append("g")
    .attr("class", "axis2")
    .attr("transform", `translate(0,${height2})`)
    .call(xAxis);

  var gBrush = context.append("g").attr("class", "brush").call(brush);

  const brushResizePath = createBrushResize(height2);

  var handle = gBrush
    .selectAll(".handles")
    .data([{ type: "w" }, { type: "e" }])
    .enter()
    .append("g")
    .attr("class", "handles");

  handle
    .append("text")
    .attr("text-anchor", "middle")
    .attr("class", "textDate")
    .attr("dx", "0")
    .attr("dy", positionAnchor - positionText);
  handle
    .append("path")
    .attr("class", "handle--custom")
    .attr("stroke", "#000")
    .attr("stroke-width", 0.9)
    .attr("cursor", "ew-resize")
    .attr("d", brushResizePath);

  gBrush.call(brush.move, x.range());

  function brushed() {
    var s = (d3.event.selection || x2.range()) as [any, any];
    let s1 = s as any;
    x.domain(s.map(x2.invert, x2));
    focus.select(".axis").call(xAxis);
    focus.selectAll(".bar").attr("x", (d: any, i: any) => {
      return x(parseDate(d.date));
    });

    //Positionner les ancres pour slider
    if (s == null) {
      handle.attr("display", "none");
    } else {
      handle.attr("display", null).attr("transform", function (d: any, i: any) {
        return "translate(" + s[i] + "," + -positionAnchor + ")";
      });
    }
    const d0 = filteredDomain(xBand, ...s);
    d3.selectAll("g.handles")
      .selectAll("text")
      .attr("dx", d0.length > 1 ? 0 : 6)
      .text((d: any, i: any) => {
        let min = new Date(parseDate(alldays(dataset).min));
        let year;
        if (d0.length > 1) {
          year =
            d.type === "w"
              ? formatDate(
                  new Date(min.setDate(min.getDate() + d3.min(d0) + 1))
                )
              : formatDate(new Date(min.setDate(min.getDate() + d3.max(d0))));
        } else {
          year =
            d.type === "w"
              ? formatDate(
                  new Date(min.setDate(min.getDate() + d3.min(d0) + 1))
                )
              : "";
        }
        return year;
      });

    if (d3.event.sourceEvent && d3.event.type === "end") {
      //interactions
      const bornesNodes = document.querySelectorAll(".textDate");
      const bornes = Array.prototype.map.call(bornesNodes, (d: any) =>
        d.innerHTML.replaceAll("-", "")
      );
      handleInteraction(
        "filterZones",
        generateSelectedDate(bornes[0], bornes[1], parseDate, formatDate2),
        vizData
      );
      s1 = snappedSelection(xBand, d0);
      d3.select(this).transition().call(d3.event.target.move, s1);
    }
  }

  function alldays(array: any) {
    let end = array.reduce(function (prev: any, current: any) {
      return parseDate(prev.date) > parseDate(current.date) ? prev : current;
    });
    let begin = array.reduce(function (prev: any, current: any) {
      return parseDate(prev.date) < parseDate(current.date) ? prev : current;
    });
    return {
      day: dateDiff(parseDate(begin.date), parseDate(end.date)).day,
      min: begin.date,
      max: end.date,
    };
  }

  function snappedSelection(bandScale: any, domain: any) {
    const min = d3.min(domain),
      max = d3.max(domain);
    return [bandScale(min), bandScale(max) + bandScale.bandwidth()];
  }

  function filteredDomain(scale: any, min: any, max: any) {
    let dif = scale(d3.min(scale.domain())) - scale.range()[0],
      iMin = min - dif < 0 ? 0 : Math.round((min - dif) / xBand.step()),
      iMax = Math.round((max - dif) / xBand.step());
    if (iMax == iMin) --iMin;
    return scale.domain().slice(iMin, iMax);
  }

  const allBars = document.getElementsByClassName(
    "bar"
  ) as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < allBars.length; i++) {
    const element = allBars[i];
    element.style.fill = colorBar;
  }

  const subBars = document.getElementsByClassName(
    "subBar"
  ) as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < subBars.length; i++) {
    const element = subBars[i];
    element.style.fill = colorSubBar;
  }

  const allSVGText = document.querySelectorAll("text");
  const allSVGTextArr = Array.from(allSVGText);
  for (let i = 0; i < allSVGTextArr.length; i++) {
    const element = allSVGTextArr[i];
    element.style.fill = color;
    element.style.fontFamily = fontFamily;
  }

  const allPathText = document.querySelectorAll("path");
  const allPathTextArr = Array.from(allPathText);
  for (let i = 0; i < allPathTextArr.length; i++) {
    const element = allPathTextArr[i];
    element.style.stroke = color;
  }

  const allSVGLine = document.querySelectorAll("line");
  const allSVGLineArr = Array.from(allSVGLine);
  for (let i = 0; i < allSVGLineArr.length; i++) {
    const element = allSVGLineArr[i];
    element.style.stroke = color;
  }

  createSlider(vizData);
};

function createBrushResize(height: any) {
  return function brushResizePath(d: any) {
    const e = +(d.type == "e"),
      x = e ? 1 : -1,
      y = height / 2;
    return (
      "M" +
      0.5 * x +
      "," +
      y +
      "A6,6 0 0 " +
      e +
      " " +
      6.5 * x +
      "," +
      (y + 6) +
      "V" +
      (2 * y - 6) +
      "A6,6 0 0 " +
      e +
      " " +
      0.5 * x +
      "," +
      2 * y +
      "Z" +
      "M" +
      2.5 * x +
      "," +
      (y + 8) +
      "V" +
      (2 * y - 8) +
      "M" +
      4.5 * x +
      "," +
      (y + 8) +
      "V" +
      (2 * y - 8)
    );
  };
}

const createSlider = (vizData: ObjectFormat) => {
  let TitleText = styleVal(vizData, "TitleText") || "Add a title in style";
  let DescText = styleVal(vizData, "DescText") || "Add a description in style";
  let colorValueCross = styleVal(vizData, "colorValueCross") || "#fff";
  let colorValueInfoBack = styleVal(vizData, "colorValueInfoBack") || "#fff";
  let color = styleVal(vizData, "colorText") || "#808080"; //#00838F
  let colorValueBack = styleVal(vizData, "colorValueBack") || "#999999";

  const info = document.createElement("div");
  info.setAttribute("class", "info");
  info.style.backgroundColor = colorValueBack;
  info.style.color = color;
  const infoContent = document.createElement("div");
  infoContent.setAttribute("id", "infoContent");

  const BlockInfo = document.querySelector("body").appendChild(info);
  const BlockContent = document.querySelector("body").appendChild(infoContent);
  let clicked = false;
  const lineWrapper = document.createElement("div");
  lineWrapper.setAttribute("id", "line-wrapper");

  const horizontal = document.createElement("div");
  horizontal.setAttribute("class", "horizontal");
  horizontal.setAttribute("style", `background-color: ${colorValueCross};`);

  const vertical = document.createElement("div");
  vertical.setAttribute("class", "vertical");
  vertical.setAttribute("style", `background-color: ${colorValueCross};`);

  const Button = BlockInfo.appendChild(lineWrapper);
  Button.appendChild(horizontal);
  Button.appendChild(vertical);

  const content = document.createElement("div");
  content.setAttribute("id", "content");
  const contentInside = document.createElement("div");
  contentInside.setAttribute("id", "contentInside");
  contentInside.style.background = colorValueInfoBack;
  const BlockContentAdd = BlockContent.appendChild(content);
  BlockContentAdd.appendChild(contentInside);

  document.querySelector("#contentInside").innerHTML = [
    `<h3>${TitleText}</h3>`,
    `<p>${DescText}</p>`,
  ].join("\n");
  lineWrapper.addEventListener("click", function (this, ev) {
    if (!clicked) {
      this.style.transform = "rotate(135deg)";
      document.getElementById("content").style.transform = "translateX(0%)";
      document.getElementById("infoContent").style.transform = "translateX(0%)";
      clicked = true;
    } else {
      this.style.transform = "rotate(0deg)";
      document.getElementById("content").style.transform = null;
      document.getElementById("infoContent").style.transform = null;
      clicked = false;
    }
  });
};
const generateSelectedDate = (
  min: any,
  max: any,
  parseDate: any,
  formatDate2: any
) => {
  let val: any = [];
  let nbjours = dateDiff(parseDate(min), parseDate(max)).day;
  let newMin = new Date(parseDate(min));
  for (let i = 0; i < nbjours; i++) {
    const date = formatDate2(new Date(newMin.setDate(newMin.getDate() + 1)));
    val = [...val, [date]];
  }
  return val;
};
function dateDiff(start: any, end: any) {
  var diff = {} as { sec: number; min: number; hour: number; day: number }; // Initialisation du retour
  var tmp = end - start;

  tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
  diff.sec = tmp % 60; // Extraction du nombre de secondes

  tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
  diff.min = tmp % 60; // Extraction du nombre de minutes

  tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
  diff.hour = tmp % 24; // Extraction du nombre d'heures

  tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
  diff.day = tmp;

  return diff;
}
function resetAllElements(vizData: ObjectFormat) {
  if (document.querySelector(".error")) {
    let oldError = document.querySelector(".error");
    oldError.parentNode.removeChild(oldError);
  }
  if (document.querySelector("svg")) {
    //Reset svg when the date range change
    if (
      startDate !== vizData.dateRanges.DEFAULT.start ||
      endDate !== vizData.dateRanges.DEFAULT.end
    ) {
      const FILTER = InteractionType.FILTER;
      clearInteraction("filterZones", FILTER, undefined);
      let oldSvg = document.querySelector("svg");
      oldSvg.parentNode.removeChild(oldSvg);
      d3.select("body").selectAll("svg").remove();
      startDate = vizData.dateRanges.DEFAULT.start;
      endDate = vizData.dateRanges.DEFAULT.end;
    }
    //Reset Info Box
    if (document.querySelector(".info")) {
      let oldInfo = document.querySelector(".info");
      oldInfo.parentNode.removeChild(oldInfo);
    }
    if (document.querySelector("#infoContent")) {
      let oldContent = document.querySelector("#infoContent");
      oldContent.parentNode.removeChild(oldContent);
    }
  }
}
function compareDate(a: any, b: any) {
  return parseDate(a.date) - parseDate(b.date);
}

const styleVal = (message: ObjectFormat, styleId: string) => {
  if (!message.style || !message.style[styleId]) return null;
  if (typeof message.style[styleId]?.defaultValue === "object") {
    return message.style[styleId].value.color !== undefined
      ? message.style[styleId].value.color
      : message.style[styleId].value.defaultValue.color;
  }
  return message.style[styleId].value !== undefined
    ? message.style[styleId].value
    : message.style[styleId].defaultValue;
};
const handleInteraction = (
  interactionId: string,
  value: any,
  vizData: ObjectFormat
) => {
  const FILTER = InteractionType.FILTER;
  let interactionData = {
    concepts: [vizData.fields.date[0].id],
    values: value,
  };
  sendInteraction(interactionId, FILTER, interactionData);
};
function displayError(msg: string) {
  document.body.innerHTML = "";
  let msgDiv = document.createElement("div");
  msgDiv.className = "error";
  let msgDivContainer = document.createElement("div");
  msgDivContainer.id = "contentError";
  msgDivContainer.innerHTML = msg;
  msgDiv.appendChild(msgDivContainer);
  document.body.appendChild(msgDiv);
}

const handleDrawViz = (vizData: any) => {
  try {
    drawViz(vizData);
  } catch (error) {
    displayError(`<h3>${error.message}</h3>`);
  }
};

// renders locally
if (LOCAL) {
  handleDrawViz(local.message);
} else {
  subscribeToData(handleDrawViz, {
    transform: objectTransform,
  });
}
