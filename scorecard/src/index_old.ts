import {
  subscribeToData,
  objectTransform,
  tableTransform,
  getWidth,
  getHeight,
  ObjectFormat,
  ObjectRow,
} from "@google/dscc";
import * as dayjs from "dayjs";
import * as local from "./localMessage";
import * as d3 from "d3v4";
export const LOCAL = true;
import * as quarterOfYear from "dayjs/plugin/quarterOfYear";
import * as weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.extend(quarterOfYear);
dayjs.extend(weekOfYear);

window.onresize = function () {
  location.reload();
};
//Global constiables
const dateFormat = "%Y%m%d";

const minCardHeight = 40;
const minCardWidth = 62;
const maxNumberCards = 8;
const borderRadius = 8;
const borderSize = 0;
const borderColor = "red";
const cardBackground = "lightgray";

let marginLeft = 15;
let marginTop = 10;

function evalLength(
  maxLength: number,
  space: number,
  maxCards: number,
  minCardLength: number,
  nbVars: number,
  stop?: boolean
) {
  console.log(maxLength, space, maxCards, minCardLength, nbVars);
  if (nbVars <= maxCards) {
    let length = (maxLength - space * (nbVars - 1)) / nbVars;
    for (let i = nbVars; i > 0; i--) {
      /*+ space * (i === 1 ? 0 : 1)*/
      console.log(length, "length");
      if (length * i <= maxLength) {
        // if (length <= minCardLength) {
        //   throw new Error("Cards are too small");
        // }
        if (stop) {
          return i;
        }
        return length;
      }
    }
  } else {
    throw new Error("Too many metrics : Limit 8");
  }
}

const drawViz = (vizData: ObjectFormat) => {
  //check size of the visualisation
  if (getWidth() < 150 || getHeight() < 150) {
    throw new Error("This visualization deserves more space!");
  }
  console.log(vizData, "vizData");

  //list of variables
  const listVarsMetric = Object.keys(vizData.tables.DEFAULT[0]).filter(
    (x) => x !== "date"
  );
  const nbCardToCreate = listVarsMetric.length;
  const widthCard = evalLength(
    getWidth(),
    marginLeft,
    maxNumberCards,
    minCardWidth,
    nbCardToCreate
  );
  const heightCard = evalLength(
    getHeight(),
    marginTop,
    maxNumberCards,
    minCardHeight,
    nbCardToCreate
  );

  const stopCardLine = evalLength(
    getWidth(),
    marginLeft,
    maxNumberCards,
    minCardWidth,
    nbCardToCreate,
    true
  );

  //getWidth() / nbCardToCreate - marginLeft * (nbCardToCreate - 1);
  //const heightCard = (widthCard * 2) / 3;
  //const heightCard =
  //getHeight() / nbCardToCreate - marginTop * (nbCardToCreate - 1);

  console.log(
    listVarsMetric,
    nbCardToCreate,
    stopCardLine,
    "stopCardLine listVarsMetric"
  );

  //check if comparison table exists
  const hasCompareTables = (vizData.tables as Object).hasOwnProperty(
    "COMPARISON"
  );

  //Get data and check and sort
  const dataset = transformData(vizData.tables.DEFAULT, verifData);

  // Reset all elements of the page
  resetAllElements(vizData);

  //Define style
  const styles = getStyle(vizData);
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  //create wrapper div
  const wrapper = d3
    .select("body")
    .append("div")
    .attr("class", "wrapper")
    .attr(
      "style",
      `width:${getWidth()}px; height: ${getHeight()}px; gap: ${marginTop}px ${marginLeft}px; border-radius:${borderRadius}px ; border: solid ${borderSize}px ${borderColor};`
    );

  listVarsMetric.map((metric) => {
    const card = wrapper
      .append("div")
      .attr("class", "cardWrapper")
      .attr(
        "style",
        `position: relative; width:${
          widthCard < minCardWidth ? minCardWidth : widthCard
        }px; height: ${
          heightCard < minCardHeight ? minCardHeight : heightCard
        }px;border-radius:${borderRadius}px ;`
      );

    const header = card
      .append("div")
      .attr("class", "cardHeader")
      .attr(
        "style",
        `border-radius:${borderRadius}px ${borderRadius}px 0 0; height: 12%;`
      );
    header.node().innerHTML = "test";
    const contentCard = card
      .append("div")
      .attr("class", "cardContent")
      .attr(
        "style",
        `border-radius: 0 0 ${borderRadius}px ${borderRadius}px; background-color:${cardBackground}; padding: 5px 0`
      );

    const margin = { top: 1.5, right: 5, bottom: 3, left: 7 };
    const svgWidth = +widthCard - margin.left - margin.right;
    const svgHeight = +(widthCard * 2) / 5 - margin.top - margin.bottom;

    const svg = contentCard
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g");
    const textSvgSum = svg.append("text").attr("text-anchor", "end");
    textSvgSum.attr("dx", svgWidth / 2).attr("dy", svgHeight - 20);
    textSvgSum.node().innerHTML = "test";

    const x = d3
        .scaleBand()
        .range([0, svgWidth / 2])
        .padding(0.1),
      y = d3.scaleLinear().range([svgHeight, 0]);
    x.domain(
      dataset.map(function (d) {
        return d.date;
      })
    );
    y.domain([
      0,
      d3.max(dataset, function (d: any) {
        return d[metric];
      }),
    ]);

    svg
      .selectAll(".bar")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d: any) {
        return x(d.date) + svgWidth / 2;
      })
      .attr("width", x.bandwidth())
      .attr("y", function (d: any) {
        return y(d[metric]);
      })
      .attr("height", function (d: any) {
        return svgHeight - y(d[metric]);
      });
  });

  //Create SVG
  // const svgWidth = getWidth();
  // const svgHeight = getHeight();
  // const margin = { top: 15, right: 50, bottom: 30, left: 70 };
  // const width = +svgWidth - margin.left - margin.right;
  // const height = +svgHeight - margin.top - margin.bottom;

  // const x = d3.scaleBand().range([0, width]).padding(0.1),
  //   y = d3.scaleLinear().range([height, 0]);

  // const svg = d3
  //   .select("body")
  //   .append("svg")
  //   .attr("width", svgWidth)
  //   .attr("height", svgHeight)
  //   .append("g");
  // //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // x.domain(
  //   dataset.map(function (d) {
  //     return d.date;
  //   })
  // );
  // y.domain([
  //   0,
  //   d3.max(dataset, function (d: any) {
  //     return d.effectif;
  //   }),
  // ]);

  // svg
  //   .selectAll(".bar")
  //   .data(dataset)
  //   .enter()
  //   .append("rect")
  //   .attr("class", "bar")
  //   .attr("x", function (d: any) {
  //     return x(d.date);
  //   })
  //   .attr("width", x.bandwidth())
  //   .attr("y", function (d: any) {
  //     return y(d.effectif);
  //   })
  //   .attr("height", function (d: any) {
  //     return height - y(d.effectif) > 0 ? height - y(d.effectif) : 0;
  //   });

  createSlider(vizData);
};

function resetAllElements(vizData: ObjectFormat) {
  if (document.querySelector(".error")) {
    let oldError = document.querySelector(".error");
    oldError.parentNode.removeChild(oldError);
  }
  if (document.querySelector("svg")) {
    //Reset svg when the date range change
    let oldSvg = document.querySelector("svg");
    oldSvg.parentNode.removeChild(oldSvg);
    d3.select("body").selectAll("svg").remove();
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

function getInfoPeriode(start: string, end: string) {
  const startVal = dayjs(start, "YYYYMMDD");
  const endVal = dayjs(end, "YYYYMMDD");
  const day = endVal.diff(startVal, "day");
  const week = endVal.diff(startVal, "week");
  const month = endVal.diff(startVal, "month");
  const quarter = endVal.diff(startVal, "quarter");
  const year = endVal.diff(startVal, "year");
  //dateDiff(start, end).day;
  return { day, week, month, quarter, year };
}
function evalValToKeep(
  year: number,
  week: number,
  month: number,
  quarter: number,
  date: string,
  parameter: {
    day: number;
    week: number;
    month: number;
    quarter: number;
    year: number;
  }
) {
  if (parameter.day <= 12) return date;
  if (parameter.week <= 12) return `${year}_${week < 10 ? "0" + week : week}`;
  if (parameter.month <= 12)
    return `${year}_${month < 10 ? "0" + month : month}`;
  if (parameter.quarter <= 12) return `${year}_${quarter}`;
  return year;
}

function groupBy(objectArray: { [x: string]: any }[], property: string) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    // Add object to list for given key's value
    acc[key].push(obj);
    return acc;
  }, {});
}

function groupByAndSum(
  objectArray: { [x: string]: any }[],
  date: string,
  effectif: string
) {
  var result: { [x: string]: any }[] = [];
  objectArray.reduce(function (res, value) {
    let val: { [x: string]: any } = {};
    if (!res[value[date]]) {
      val[date] = value[date];
      val[effectif] = 0;
      res[value[date]] = val;
      result.push(res[value[date]]);
    }
    res[value[date]][effectif] += value[effectif];
    return res;
  }, []);
  return result;
}

function transformData(datasetSource: ObjectRow[], checkDataFn: Function) {
  const parseDate = d3.timeParse(dateFormat);
  checkDataFn(datasetSource);
  // const newData = datasetSource.map((e, i) => {
  //   return {
  //     date: e.date[0],
  //     effectif: e.effectif[0] === "" ? 0 : e.effectif[0],
  //   };
  // });

  datasetSource.sort(compareDate(parseDate));
  const infos = getInfoPeriode(
    datasetSource[0].date[0] as string,
    datasetSource[datasetSource.length - 1].date[0] as string
  );

  const newData2 = datasetSource.map((e, i) => {
    const year = dayjs(e.date[0] as string, "YYYYMMDD").year();
    const week = dayjs(e.date[0] as string, "YYYYMMDD").week();
    const month = dayjs(e.date[0] as string, "YYYYMMDD").month() + 1;
    const quarter = dayjs(e.date[0] as string, "YYYYMMDD").quarter();
    const valTokeep = evalValToKeep(
      year,
      week,
      month,
      quarter,
      e.date[0] as string,
      infos
    );
    return {
      date: valTokeep,
      effectif: e.effectif[0] === "" ? 0 : e.effectif[0],
    };
  });

  let valGroupByAndSum = groupByAndSum(newData2, "date", "effectif");
  return valGroupByAndSum;
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
      font-family: ${fontFamily}, sans-serif;
    }
    .bar { 
      fill: ${colorBar};
      opacity: 0.5;
    }
    svg {
      position: relative;
      user-select: none
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
  `;
}

function compareDate(parseDate: any) {
  return (a: any, b: any) => {
    return parseDate(a.date) - parseDate(b.date);
  };
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

function displayError(msg: string) {
  document.body.innerHTML = "";
  let msgDiv = document.createElement("div");
  msgDiv.className = "error";
  let msgDivContainer = document.createElement("div");
  msgDivContainer.id = "contentError";
  msgDivContainer.innerHTML = `<h2>Error : </h2><div>${msg}</div>`;
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
