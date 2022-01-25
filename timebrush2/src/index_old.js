const dscc = require("@google/dscc");
const viz = require("@google/dscc-scripts/viz/initialViz.js");
const local = require("./localMessage.js");
import * as d3 from "d3v4";
// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

// write viz code here
const drawViz = (vizData) => {
  const dataset = vizData.tables.DEFAULT;
  console.log(dataset);

  const svgWidth = dscc.getWidth();
  const svgHeight = dscc.getHeight();
  const margin = { top: 20, right: 20, bottom: 110, left: 70 };
  const margin2 = { top: 720, right: 20, bottom: 30, left: 70 };
  const width = +svgWidth - margin.left - margin.right;
  const height = +svgHeight - margin.top - margin.bottom;
  const height2 = +svgHeight - margin2.top - margin2.bottom;

  var styles = `
    .bar {
      fill: steelblue;
      clip-path: url(#clip);
    }
    .subBar { 
      fill: gray;
      opacity: 0.5;
    }
    .axis path,
    .axis line {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }

    .brush .extent {
      stroke: #fff;
      fill: steelblue;
      fill-opacity: .25;
      shape-rendering: crispEdges;
    }
  `;

  var parseDate = d3.timeParse("%Y%m%d");

  var styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  var x = d3.scaleTime().range([0, width]),
    x2 = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]);

  let xBand = d3
    .scaleBand()
    .domain(d3.range(-1, dataset.length))
    .range([0, width]);

  var xAxis = d3.axisBottom(x),
    xAxis2 = d3.axisBottom(x2),
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

  var brush = d3.brushX().extent([
    [0, 0],
    [width, height2],
  ]);
  //.on("brush", brushed);
  //.on("brush end", brushed);

  d3.select("body").selectAll("svg").remove();

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("viewBox", [0, 0, svgWidth, svgHeight]);

  // svg
  //   .append("defs")
  //   .append("clipPath")
  //   .attr("id", "clip")
  //   .append("rect")
  //   .attr("width", width)
  //   .attr("height", height);

  var focus = svg
    .append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var context = svg
    .append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  // x2.domain(x.domain());
  // y2.domain(y.domain());

  focus
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  focus.append("g").attr("class", "y axis").call(yAxis);

  enter(dataset);
  updateScale(dataset);

  // focus
  //   .append("g")
  //   .selectAll("rect")
  //   .data(dataset)
  //   .enter()
  //   .append("rect")
  //   .attr("x", (d) => x(parseDate(d.date)) + 1)
  //   .attr("width", (d) => 5)
  //   .attr("y", (d) => y(d.effectif))
  //   .attr("height", (d) => y(0) - y(d.effectif));

  // focus
  //   .append("g")
  //   .attr("class", "axis axis--x")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(xAxis);

  //focus.append("g").attr("class", "axis axis--y").call(yAxis);

  var subBars = context.selectAll(".subBar").data(dataset);

  subBars
    .enter()
    .append("rect")
    .classed("subBar", true)
    .attr("height", (d) => height2 - y2(d.effectif))
    .attr("width", (d) => width / dataset.length - 2)
    .attr("x", (d) => x2(parseDate(d.date)))
    .attr("y", (d) => y2(d.effectif));

  context
    .append("g")
    .attr("class", "axis x")
    .attr("transform", "translate(0," + height2 + ")")
    .call(xAxis2);

  context
    .append("g")
    .attr("class", "x brush")
    .call(brush)
    .call(brush.move, x.range());
  // .selectAll("rect")
  // .attr("y", -6)
  // .attr("height", height2 + 7);

  function brushed() {
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    focus.select(".axis").call(xAxis);
    focus.selectAll(".bar").attr("x", (d, i) => {
      return x(i) - (xBand.bandwidth() * 0.9) / 2;
    });

    /*var selected = null;
    selected = x2.domain().filter(function (d) {
      return brush.extent()[0] <= x2(d) && x2(d) <= brush.extent()[1];
    });

    var start;
    var end;

    if (brush.extent()[0] != brush.extent()[1]) {
      start = selected[0];
      end = selected[selected.length - 1] + 1;
    } else {
      start = 0;
      end = dataset.length;
    }

    var updatedData = dataset.slice(start, end);
    console.log(start, end, "start end updatedData");
    update(updatedData);
    enter(updatedData);
    exit(updatedData);
    updateScale(updatedData);*/
  }

  function updateScale(data) {
    var tickScale = d3
      .scalePow()
      .range([data.length / 10, 0])
      .domain([data.length, 0])
      .exponent(0.5);

    var brushValue = brush.extent()[1] - brush.extent()[0];
    if (brushValue === 0) {
      brushValue = width;
    }

    var tickValueMultiplier = Math.ceil(Math.abs(tickScale(brushValue)));
    var filteredTickValues = data
      .filter(function (d, i) {
        return i % tickValueMultiplier === 0;
      })
      .map(function (d) {
        return d.date;
      });

    console.log(filteredTickValues, "filteredTickValues");

    focus.select(".x.axis").call(xAxis.tickValues(filteredTickValues));
    focus.select(".y.axis").call(yAxis);
  }

  function update(data) {
    x.domain(
      d3.extent(data, function (d) {
        return parseDate(d.date);
      })
    );
    y.domain([
      0,
      d3.max(data, function (d) {
        return d.effectif;
      }),
    ]);

    var bars = focus.selectAll(".bar").data(data);
    bars
      .attr("height", (d) => height - y(d.effectif))
      .attr("width", () => width / data.length)
      .attr("x", (d) => x(parseDate(d.date)))
      // .attr("y", (d) => {
      //   console.log(y(d.effectif), y, d.effectif, "enter");
      //   return y(d.effectif);
      // });
      .attr("y", (d) => y(d.effectif));
  }

  function exit(data) {
    var bars = focus.selectAll(".bar").data(data);
    bars.exit().remove();
  }

  function enter(data) {
    x.domain(
      d3.extent(data, function (d) {
        return parseDate(d.date);
      })
    );
    y.domain([
      0,
      d3.max(data, function (d) {
        return d.effectif;
      }),
    ]);

    var bars = focus.selectAll(".bar").data(data);
    bars
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("height", (d) => height - y(d.effectif))
      .attr("width", () => width / data.length)
      .attr("x", (d) => x(parseDate(d.date)))
      // .attr("y", (d) => {
      //   console.log(y(d.effectif), y, d.effectif, "enter");
      //   return y(d.effectif);
      // });
      .attr("y", (d) => y(d.effectif));
  }
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
}
