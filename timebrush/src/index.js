const dscc = require("@google/dscc");
const local = require("./localMessage.js");
import * as d3 from "d3v4";
// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

// write viz code here
const drawViz = (vizData) => {
  const styleVal = (message, styleId) => {
    if (!message.style) return null;
    if (typeof message.style[styleId].defaultValue === "object") {
      return message.style[styleId].value.color !== undefined
        ? message.style[styleId].value.color
        : message.style[styleId].value.defaultValue.color;
    }
    return message.style[styleId].value !== undefined
      ? message.style[styleId].value
      : message.style[styleId].defaultValue;
  };

  let fontFamily = styleVal(vizData, "fontFamily") || "Open Sans";
  let color = styleVal(vizData, "colorText") || "#808080"; //#00838F
  let colorBar = styleVal(vizData, "colorBar") || "#4682b4"; //#E64A19
  let colorSubBar = styleVal(vizData, "colorSubBar") || "#808080"; //#E64A19

  let TitleText = styleVal(vizData, "TitleText") || "Add a title in style";
  let DescText = styleVal(vizData, "DescText") || "Add a description in style";
  let colorValueBack = styleVal(vizData, "colorValueBack") || "#999999";
  let colorValueCross = styleVal(vizData, "colorValueCross") || "#fff";
  let colorValueInfoBack = styleVal(vizData, "colorValueInfoBack") || "#fff";

  const dateFormat = "%Y%m%d";
  let positionAnchor = 10;
  let positionText = 5;

  var styles = `
  body{
    overflow-y: hidden;
    font-family: ${fontFamily}, sans-serif;
  }
    .bar {
      fill: ${colorBar};
      clip-path: url(#clip);
    }
    .subBar { 
      fill: ${colorSubBar};
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
  window.onresize = function () {
    location.reload();
  };
  //https://www.w3schools.com/colors/colors_converter.asp
  const datasetSource = vizData.tables.DEFAULT;

  const dataset = datasetSource.map((e, i) => {
    return {
      date: e.date[0],
      effectif: e.effectif[0],
    };
  });

  /*const svgWidth = dscc.getWidth() - 100;
  const svgHeight = dscc.getHeight();
  const margin = { top: 20, right: 50, bottom: 130, left: 70 };
  const margin2 = { top: 720, right: 50, bottom: 30, left: 70 };
  const width = +svgWidth - margin.left - margin.right;
  //const height = +svgHeight - margin.top - margin.bottom;
  const height = +svgHeight - svgHeight * (50 / 800) - svgHeight * (130 / 800);
  //const height2 = +svgHeight - margin2.top - margin2.bottom;
  const height2 = +svgHeight - svgHeight * (710 / 800) - svgHeight * (50 / 800);*/

  const svgWidth = dscc.getWidth();
  const svgHeight = dscc.getHeight();
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

  var parseDate = d3.timeParse(dateFormat);
  var formatDate = d3.timeFormat("%Y-%m-%d");
  var formatDate2 = d3.timeFormat("%Y%m%d");
  dataset.sort(compareDate);
  const periode = alldays(dataset).day;

  var styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  var x = d3.scaleTime().range([0, width]),
    x2 = d3.scaleTime().range([0, width]),
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
    d3.extent(dataset, function (d) {
      return parseDate(d.date);
    })
  );
  y.domain([
    0,
    d3.max(dataset, function (d) {
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
    .attr("x", (d, i) => {
      return x(parseDate(d.date));
    })
    .attr("y", (d, i) => {
      return y(d.effectif);
    })
    .attr("width", function (d) {
      return xBand.bandwidth() * factorBand;
    })
    .attr("height", (d) => {
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
    .attr("x", (d, i) => {
      return x(parseDate(d.date));
    })
    .attr("y", (d, i) => y2(d.effectif))
    .attr("width", xBand.bandwidth() * factorBand)
    .attr("height", (d) => {
      return height2 - y2(d.effectif);
    });

  context
    .append("g")
    .attr("class", "axis2")
    .attr("transform", `translate(0,${height2})`)
    .call(xAxis);

  var gBrush = context.append("g").attr("class", "brush").call(brush);

  var brushResizePath = function (d) {
    var e = +(d.type == "e"),
      x = e ? 1 : -1,
      y = height2 / 2;
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
    var s = d3.event.selection || x2.range();
    let s1 = s;
    x.domain(s.map(x2.invert, x2));
    focus.select(".axis").call(xAxis);
    focus.selectAll(".bar").attr("x", (d, i) => {
      return x(parseDate(d.date));
    });

    //Positionner les ancres pour slider
    if (s == null) {
      handle.attr("display", "none");
    } else {
      handle.attr("display", null).attr("transform", function (d, i) {
        return "translate(" + s[i] + "," + -positionAnchor + ")";
      });
    }
    const d0 = filteredDomain(xBand, ...s);
    d3.selectAll("g.handles")
      .selectAll("text")
      .attr("dx", d0.length > 1 ? 0 : 6)
      .text((d, i) => {
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
      const bornes = Array.prototype.map.call(bornesNodes, (d) =>
        d.innerHTML.replaceAll("-", "")
      );
      handleInteraction(
        "filterZones",
        generateSelectedDate(bornes[0], bornes[1]),
        vizData
      );
      s1 = snappedSelection(xBand, d0);
      d3.select(this).transition().call(d3.event.target.move, s1);
    }
  }

  function compareDate(a, b) {
    return parseDate(a.date) - parseDate(b.date);
  }
  const generateSelectedDate = (min, max) => {
    let val = [];
    let nbjours = dateDiff(parseDate(min), parseDate(max)).day;
    let newMin = new Date(parseDate(min));
    for (let i = 0; i < nbjours; i++) {
      const date = formatDate2(new Date(newMin.setDate(newMin.getDate() + 1)));
      val = [...val, [date]];
    }
    return val;
  };
  function dateDiff(start, end) {
    var diff = {}; // Initialisation du retour
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

  function alldays(array) {
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

  function snappedSelection(bandScale, domain) {
    const min = d3.min(domain),
      max = d3.max(domain);
    return [bandScale(min), bandScale(max) + bandScale.bandwidth()];
  }

  function filteredDomain(scale, min, max) {
    let dif = scale(d3.min(scale.domain())) - scale.range()[0],
      iMin = min - dif < 0 ? 0 : Math.round((min - dif) / xBand.step()),
      iMax = Math.round((max - dif) / xBand.step());
    if (iMax == iMin) --iMin;
    return scale.domain().slice(iMin, iMax);
  }

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
  //.html("Info");
  BlockContent.append("div")
    .attr("id", "content")
    .append("div")
    .attr("id", "contentInside");

  document.querySelector("#contentInside").innerHTML = [
    `<h3>${TitleText}</h3>`,
    `<p>${DescText}</p>`,
  ].join("\n");
};

const handleInteraction = (interactionId, value, vizData) => {
  const FILTER = dscc.InteractionType.FILTER;
  let interactionData = {
    concepts: [vizData.fields.date[0].id],
    values: value,
  };
  dscc.sendInteraction(interactionId, FILTER, interactionData);
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
}
