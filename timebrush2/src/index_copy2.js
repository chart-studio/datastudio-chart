const dscc = require("@google/dscc");
const viz = require("@google/dscc-scripts/viz/initialViz.js");
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

  let positionAnchor = 50;
  let positionText = 5;
  let color = styleVal(vizData, "colorText") || "grey";
  let colorBar = styleVal(vizData, "colorBar") || "steelblue";
  const dateFormat = "%Y%m%d";

  var styles = `
  body{
    overflow-y: hidden;
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
      background-color: 	hsla(210, 9%, 91%,0.6);
      backdrop-filter: blur(4px);
      z-index: 1;
      cursor: pointer;
    }

    #infoContent {
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
      display: flex;
      align-items: center;
      justify-content: center;
      height:100%;
      width:100%;
      background: slategrey;
      opacity:0.5;
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
    background-color: slategrey;
  }
  .vertical {
    position: relative;
    bottom: 2px;
    transform: rotate(90deg);
  }

  svg text {
    font-size: 12px;
  }
  `;

  window.onresize = function () {
    location.reload();
  };
  const datasetSource = vizData.tables.DEFAULT;

  const dataset = datasetSource.map((e, i) => {
    return {
      date: e.date[0],
      effectif: e.effectif[0],
    };
  });

  console.log(dataset);

  const svgWidth = dscc.getWidth();
  const svgHeight = dscc.getHeight();
  const margin2 = { top: 15, right: 50, bottom: 30, left: 70 };
  const width = +svgWidth - margin2.left - margin2.right;
  const height2 = +svgHeight - margin2.top - margin2.bottom;

  var interactionData = {
    //array of dimensions Ids
    concepts: [],
    //Array of array of values
    values: [],
  };

  //https://www.w3schools.com/colors/colors_converter.asp

  var parseDate = d3.timeParse(dateFormat);
  var formatDate = d3.timeFormat("%Y-%m-%d");
  dataset.sort(compareDate);
  const periode = alldays(dataset).day;

  var styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  var x2 = d3.scaleTime().range([0, width]),
    y2 = d3.scaleLinear().range([height2, 0]);

  const factorBand = 0.7;
  let xBand = d3
    .scaleBand()
    .domain(d3.range(-1, dataset.length))
    //.domain(d3.range(-1, periode))
    .range([0, width])
    .padding(0.2);

  let yAxis = d3.axisLeft(y2);

  var xAxis2 = d3.axisBottom(x2);

  const extent = d3.extent(dataset, function (d) {
    return parseDate(d.date);
  });
  x2.domain(extent);
  y2.domain([
    0,
    d3.max(dataset, function (d) {
      return d.effectif;
    }),
  ]);

  var brush = d3
    .brushX()
    .handleSize(8)
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("start brush end", brushed);

  d3.select("body").selectAll("svg").remove();

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("viewBox", [0, 0, svgWidth, svgHeight]);

  var context = svg
    .append("g")
    .attr("class", "context")
    .attr("transform", `translate(${margin2.left}, ${margin2.top})`);

  context
    .selectAll(".subBar")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "subBar")
    .attr("x", (d, i) => {
      return x2(parseDate(d.date));
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
    .call(xAxis2);

  context.append("g").attr("class", "axis axis--y").call(yAxis);

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
    .attr("text-anchor", (d) => {
      return "middle";
    })
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
    const s0 = d3.event.selection
      ? d3.event.selection
      : [1, 2].fill(d3.event.sourceEvent.offsetX);

    let s1 = s0;

    const d0 = filteredDomain(xBand, ...s0);

    if (s0 == null) {
      handle.attr("display", "none");
    } else {
      handle.attr("display", null).attr("transform", function (d, i) {
        return "translate(" + s0[i] + "," + -positionAnchor + ")";
      });
    }

    if (d3.event.sourceEvent && d3.event.type === "end") {
      s1 = snappedSelection(xBand, d0);
      d3.select(this).transition().call(d3.event.target.move, s1);
    }
    d3.selectAll("g.handles")
      .selectAll("text")
      .attr("dx", d0.length > 1 ? 0 : 6)
      .text((d, i) => {
        let year;
        if (d0.length > 1) {
          //console.log(d0, "d0");
          year =
            d.type === "w"
              ? formatDate(parseDate(dataset[d3.min(d0) + 1].date))
              : formatDate(parseDate(dataset[d3.max(d0)].date));
        } else {
          year =
            d.type === "w"
              ? formatDate(parseDate(dataset[d3.min(d0) + 1].date))
              : "";
        }
        return year;
      });
  }

  function compareDate(a, b) {
    return parseDate(a.date) - parseDate(b.date);
  }

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
  const BlockContent = d3
    .select("body")
    .append("div")
    .attr("id", "infoContent");
  const Button = BlockInfo.append("div").attr("id", "line-wrapper");
  Button.append("div").attr("class", "horizontal");
  Button.append("div").attr("class", "vertical");
  const Info = BlockContent.append("div")
    .attr("id", "content")
    .append("div")
    .attr("id", "contentInside")
    .html("Info");

  //
  let clicked = false;
  document.getElementById("line-wrapper").addEventListener("click", (e) => {
    if (!clicked) {
      e.currentTarget.style.transform = "rotate(135deg)";
      document.getElementById("content").style.transform = "translateX(0%)";
      document.getElementById("infoContent").style.transform = "translateX(0%)";
      clicked = true;
    } else {
      e.currentTarget.style.transform = "rotate(0deg)";
      document.getElementById("content").style.transform = null;
      document.getElementById("infoContent").style.transform = null;
      clicked = false;
    }
  });
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
}
