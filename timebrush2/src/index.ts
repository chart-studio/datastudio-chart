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
} from "@google/dscc";
import * as local from "./localMessage";
import * as d3 from "d3v4";
export const LOCAL = true;

//Global constiables
let startDate: string = "";
let endDate: string = "";

window.onresize = function () {
  location.reload();
};

const drawViz = (vizData: ObjectFormat) => {
  //constants
  const positionAnchor = 50;
  const positionText = 5;
  const dateFormat = "%Y%m%d";
  const parseDate = d3.timeParse(dateFormat);
  const formatDate = d3.timeFormat("%Y-%m-%d");
  const formatDate2 = d3.timeFormat("%Y%m%d");
  // iniialize date
  if (startDate === "" && endDate === "") {
    startDate = vizData.dateRanges?.DEFAULT?.start || "";
    endDate = vizData.dateRanges?.DEFAULT?.end || "";
  }
  // Reset all elements of the page
  resetAllElements(vizData);

  //Define style
  const styles = getStyle(vizData);
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  //Get data and check
  const dataset = transformData(vizData.tables.DEFAULT, verifData);
  dataset.sort(compareDate(parseDate));
  const periode = alldays(dataset, parseDate).day;

  //Create SVG
  const svgWidth = getWidth();
  const svgHeight = getHeight();
  const margin2 = { top: 15, right: 50, bottom: 30, left: 70 };
  const width = +svgWidth - margin2.left - margin2.right;
  const height2 = +svgHeight - margin2.top - margin2.bottom;

  const x2 = d3.scaleTime().range([0, width]),
    y2 = d3.scaleLinear().range([height2, 0]);

  const factorBand = 0.7;
  let xBand = d3
    .scaleBand()
    .domain(d3.range(-2, periode + 2))
    .range([0, width])
    .padding(0.2);

  let yAxis = d3.axisLeft(y2);

  const xAxis2 = d3.axisBottom(x2);
  //.tickFormat(formatDate);

  const extent = d3.extent(dataset, function (d: any) {
    return parseDate(d.date);
  });
  //use an offset to include the first and last date
  x2.domain([
    d3.timeDay.offset(extent[0], -1),
    d3.timeDay.offset(extent[1], 1),
  ]);
  y2.domain([
    0,
    d3.max(dataset, function (d: any) {
      return d.effectif;
    }),
  ]);

  const brush = d3
    .brushX()
    .handleSize(8)
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("start brush end", brushed);

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("viewBox", [0, 0, svgWidth, svgHeight]);

  const context = svg
    .append("g")
    .attr("class", "context")
    .attr("transform", `translate(${margin2.left}, ${margin2.top})`);

  context
    .selectAll(".subBar")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "subBar")
    .attr("x", (d: any, i: any) => {
      return x2(parseDate(d.date)); // (pour centrer)- (xBand.bandwidth() * factorBand) / 2;
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
    .call(xAxis2);

  context.append("g").attr("class", "axis axis--y").call(yAxis);

  const gBrush = context.append("g").attr("class", "brush").call(brush);

  const brushResizePath = createBrushResize(height2);

  const handle = gBrush
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

  gBrush.call(brush.move, x2.range());

  function brushed() {
    if (!d3.event.selection && !d3.event.sourceEvent) return;
    const s0: [min: any, max: any] = d3.event.selection
      ? d3.event.selection
      : [1, 2].fill(d3.event.sourceEvent.offsetX);

    let s1 = s0;

    const d0 = filteredDomain(xBand, ...s0);

    //Positionner les ancres pour slider
    if (s0 == null) {
      handle.attr("display", "none");
    } else {
      handle.attr("display", null).attr("transform", function (d: any, i: any) {
        return "translate(" + s0[i] + "," + -positionAnchor + ")";
      });
    }

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
      s1 = snappedSelection(xBand, d0) as [min: any, max: any];
      d3.select(this).transition().call(d3.event.target.move, s1);
    }
    d3.selectAll("g.handles")
      .selectAll("text")
      .attr("dx", d0.length > 1 ? 0 : 6)
      .text((d: any, i: any) => {
        let min = new Date(parseDate(alldays(dataset, parseDate).min));
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
  }
  createSlider(vizData);
};
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
function verifData(datasetSource: ObjectRow[]) {
  const hasData: boolean = datasetSource.length > 0;
  if (!hasData) {
    throw new Error("No Data");
  }
  datasetSource.map((lineData, lineNumber) => {
    if (lineData.date.length === 0 || lineData.effectif.length === 0) {
      throw new Error(
        `Dimension or Metric should not be empty: line ${lineNumber}`
      );
    }
    if (
      (lineData.date[0] as string).length !== 8 ||
      ((lineData.date[0] as string).slice(0, 1) !== "1" &&
        (lineData.date[0] as string).slice(0, 1) !== "2")
    ) {
      throw new Error(
        `Dimension should be a date : line ${lineNumber} does not have the correct format (yyyymmdd)`
      );
    }
    if (isNaN(lineData.effectif[0] as number)) {
      throw new Error(
        `Metric should be a number : line ${lineNumber} does not have a number`
      );
    }
  });
}

function transformData(datasetSource: ObjectRow[], checkDataFn: Function) {
  checkDataFn(datasetSource);
  const newData = datasetSource.map((e, i) => {
    return {
      date: e.date[0],
      effectif: e.effectif[0] === "" ? 0 : e.effectif[0],
    };
  });
  return newData;
}

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

function getStyle(vizData: ObjectFormat) {
  let fontFamily = styleVal(vizData, "fontFamily") || "Open Sans";
  let color = styleVal(vizData, "colorText") || "#808080"; //#00838F
  let colorBar = styleVal(vizData, "colorBar") || "#4682b4"; //#E64A19
  let colorValueBack = styleVal(vizData, "colorValueBack") || "#999999";
  let colorValueCross = styleVal(vizData, "colorValueCross") || "#fff";
  let colorValueInfoBack = styleVal(vizData, "colorValueInfoBack") || "#fff";

  return `
    body{
      overflow: hidden;
      font-family: ${fontFamily}, sans-serif;
    }
    .subBar { 
      fill: ${colorBar};
      opacity: 0.5;
    }
    svg {
      position: relative;
      user-select: none
    }
    text {
      fill : ${color};
    }
    
    path, line {
      stroke: ${color};
    }

    .info {
      position: fixed;
      top: 2rem;
      right:1rem;
      width: 2rem;
      border-radius: 50%;
      height:2rem;
      background-color: ${colorValueBack};
      color:${color},
      backdrop-filter: blur(4px);
      z-index: 1;
      cursor: pointer;
    }

    #infoContent {
      font-family: ${fontFamily};
      position: fixed;
      top: 0;
      right:0;
      width: 100%;
      height:100%;
      transform:translateX(100%);
      transition: transform 300ms ease-in;
      
    }

    #content {display: flex;
      align-items: center;
      justify-content: center;
      height:100%;
      transform:translateX(100%);
      transition: transform 300ms ease-out;
      backdrop-filter: blur(10px);
      width:100%;
    }

    #contentInside {
      height:100%;
      width:100%;
      background: ${colorValueInfoBack};
      opacity:0.5;
      padding: 2em;
    }

    #line-wrapper {
      position:relative;
      transition: transform 300ms ease-out;
      transform: rotate(0deg);
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    .horizontal,
    .vertical {
      width: 50%;
      height: 2px;
      background-color: ${colorValueCross};
    }
    .vertical {
      position: relative;
      bottom: 2px;
      transform: rotate(90deg);
    }

    svg text {
      font-size: 12px;
      font-family: ${fontFamily}, sans-serif;
    }
  `;
}

function compareDate(parseDate: any) {
  return (a: any, b: any) => {
    return parseDate(a.date) - parseDate(b.date);
  };
}
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

function alldays(array: any[], parseDate: any) {
  let end = array.reduce(function (prev, current) {
    return parseDate(prev.date) > parseDate(current.date) ? prev : current;
  });
  let begin = array.reduce(function (prev, current) {
    return parseDate(prev.date) < parseDate(current.date) ? prev : current;
  });
  return {
    day: dateDiff(parseDate(begin.date), parseDate(end.date)).day,
    min: begin.date,
    max: end.date,
  };
}

function dateDiff(start: any, end: any) {
  const diff: any = {}; // Initialisation du retour
  let tmp = end - start;

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
function snappedSelection(bandScale: any, domain: any) {
  const min = d3.min(domain),
    max = d3.max(domain);
  return [bandScale(min), bandScale(max) + bandScale.bandwidth()];
}

function filteredDomain(scale: any, min: any, max: any) {
  let dif = scale(d3.min(scale.domain())) - scale.range()[0],
    iMin = min - dif < 0 ? 0 : Math.round((min - dif) / scale.step()),
    iMax = Math.round((max - dif) / scale.step());
  if (iMax == iMin) --iMin;
  return scale.domain().slice(iMin, iMax);
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

const handleInteraction = (interactionId: any, value: any, vizData: any) => {
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

const createSlider = (vizData: ObjectFormat) => {
  let TitleText = styleVal(vizData, "TitleText") || "Add a title in style";
  let DescText = styleVal(vizData, "DescText") || "Add a description in style";
  const BlockInfo = d3.select("body").append("div").attr("class", "info");
  let clicked = false;
  const BlockContent = d3
    .select("body")
    .append("div")
    .attr("id", "infoContent");
  const Button = BlockInfo.append("div")
    .attr("id", "line-wrapper")
    .on("click", function () {
      if (!clicked) {
        this.style.transform = "rotate(135deg)";
        document.getElementById("content").style.transform = "translateX(0%)";
        document.getElementById("infoContent").style.transform =
          "translateX(0%)";
        clicked = true;
      } else {
        this.style.transform = "rotate(0deg)";
        document.getElementById("content").style.transform = null;
        document.getElementById("infoContent").style.transform = null;
        clicked = false;
      }
    });
  Button.append("div").attr("class", "horizontal");
  Button.append("div").attr("class", "vertical");
  BlockContent.append("div")
    .attr("id", "content")
    .append("div")
    .attr("id", "contentInside");
  document.querySelector("#contentInside").innerHTML = [
    `<h3>${TitleText}</h3>`,
    `<p>${DescText}</p>`,
  ].join("\n");
};

const handleDrawViz = (vizData: any) => {
  try {
    drawViz(vizData);
  } catch (error) {
    displayError(`<h3>${error.message}</h3>`);
  }
};

if (LOCAL) {
  handleDrawViz(local.message);
} else {
  subscribeToData(handleDrawViz, {
    transform: objectTransform,
  });
}
