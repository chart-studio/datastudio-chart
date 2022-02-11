import {
  subscribeToData,
  objectTransform,
  getWidth,
  getHeight,
  ObjectFormat,
  ObjectRow,
} from "@google/dscc";
import * as dayjs from "dayjs";
import * as local from "./localMessage";
import * as d3 from "d3v4";
import * as quarterOfYear from "dayjs/plugin/quarterOfYear";
import * as weekOfYear from "dayjs/plugin/weekOfYear";
import millify from "millify";
dayjs.extend(quarterOfYear);
dayjs.extend(weekOfYear);

export const LOCAL = false;

window.onresize = function () {
  location.reload();
};

//Global constiables
const dateFormat = "%Y%m%d";
const borderRadius = 8;

const drawViz = (vizData: ObjectFormat) => {
  //check size of the visualisation
  if (getWidth() < 150 || getHeight() < 150) {
    throw new Error("This visualization deserves more space!");
  }
  console.log(vizData, "vizData");

  //init variables
  //kpi
  let compactNumber = styleVal(vizData, "compactNumber");
  let decimalPrecisionMetric = styleVal(vizData, "decimalPrecisionMetric") || 1;
  let decimalPrecisionChangePercent =
    styleVal(vizData, "decimalPrecisionChangePercent") || 2;
  let currency = styleVal(vizData, "currency") || "€";
  let missingData = styleVal(vizData, "missingData") || "-";
  let colorSumRecap = styleVal(vizData, "colorSumRecap") || "#222222";
  let fontSizeSumRecap = styleVal(vizData, "fontSizeSumRecap") || 25;
  let boldNumber = styleVal(vizData, "boldNumber");

  //colorBars
  let colorHeader = styleVal(vizData, "colorHeader") || "#4682b4";
  let colorBackg = styleVal(vizData, "colorBackg") || "#D3D3D3";
  //General style
  let horizontalGap = styleVal(vizData, "horizontalGap") || 15;
  let verticalGap = styleVal(vizData, "verticalGap") || 10;
  const borderSize = styleVal(vizData, "addBorder") ? 1 : 0;
  let colorTitleDim = styleVal(vizData, "colorTitleDim") || "#ffffff";
  //others
  let fontFamily = styleVal(vizData, "fontFamily") || "Arial";
  let colorInfoBoxText = styleVal(vizData, "colorInfoBoxText") || "#808080"; //#00838F
  let colorBar = styleVal(vizData, "colorBar") || "#D3D3D3"; //#E64A19
  let colorValueBack = styleVal(vizData, "colorValueBack") || "#999999";
  let colorValueCross = styleVal(vizData, "colorValueCross") || "#fff";
  let colorValueInfoBack = styleVal(vizData, "colorValueInfoBack") || "#fff";
  let topPositionButton = styleVal(vizData, "topPositionButton") || 2;

  //comparison val
  let fillSvgNeg = styleVal(vizData, "fillSvgNeg") || "#b30000";
  let fillSvgPositiv = styleVal(vizData, "fillSvgPositiv") || "#00b300";
  let textToIllustrate =
    styleVal(vizData, "textToIllustrate") || "Last period 30days";
  let positionTextStartToIllustrate = styleVal(
    vizData,
    "positionTextStartToIllustrate"
  );
  let fontSizeTextToIllustrate =
    styleVal(vizData, "fontSizeTextToIllustrate") || 20;
  let colorTextToIllustrate =
    styleVal(vizData, "colorTextToIllustrate") || "#222222";
  const gap = {
    h: horizontalGap,
    v: verticalGap,
  };
  const listVarsMetric = vizData.fields.effectif;
  const nbDims = listVarsMetric.length;

  //check if comparison table exists
  const hasCompareTables = (vizData.tables as Object).hasOwnProperty(
    "COMPARISON"
  );
  const allDatasetCompare = hasCompareTables
    ? vizData.tables.COMPARISON.length === 0
      ? null
      : transformData(vizData.tables.COMPARISON, nbDims)
    : null;

  //Get data and check and sort
  const allDataset = transformData(vizData.tables.DEFAULT, nbDims, verifData);

  // Reset all elements of the page
  resetAllElements();

  //insert svg icon sprite
  d3.select("body").node().innerHTML = `
  <svg style="display:none">
    <symbol id="trending_up" viewBox="0 0 256 256">
      <path d="M240.00244,56.00513V120a8,8,0,0,1-16,0V75.314l-82.34277,82.34278a8.00122,8.00122,0,0,1-11.31446,0L96.00244,123.314,29.65967,189.65674a8.00018,8.00018,0,0,1-11.31446-11.31348l72-72a8.00122,8.00122,0,0,1,11.31446,0L136.00244,140.686,212.68848,64h-44.686a8,8,0,0,1,0-16h64c.02979,0,.0586.00415.08838.00439.2334.00269.46631.01246.69824.0354.12891.01246.25391.03638.38086.05494.13135.01928.26319.03418.39356.06006.14013.02783.27685.06591.41455.10107.11474.0293.23047.0542.34424.08862.13427.04053.26367.09058.395.13794.11523.04151.231.07935.34472.12647.1211.05.23682.10864.35449.16455.11914.05615.23926.10888.356.17138.11133.05957.21729.12745.3252.19214.11621.06934.23388.135.34668.2107.11718.07812.227.16552.33984.24951.09668.07226.1958.13965.28955.21679.18652.15284.36426.31519.53565.48389.01611.01611.03417.0293.05029.04541.02051.02051.0376.04321.05762.064.16357.167.32177.33935.47021.52026.083.10059.15527.20654.23193.31006.07862.10571.16065.20874.23438.31836.08057.1206.15088.24585.22461.36987.05957.1001.12207.19751.17724.30029.06788.126.125.25538.18506.384.05078.1084.10547.2146.15137.32568.05127.12476.09326.252.13867.37842.04248.11987.08887.238.126.36059.03857.12769.06738.25757.09912.38672.03125.124.06592.2461.09131.37256.02978.15088.04785.30322.06933.45532.01465.10645.03516.21094.0459.31861Q240.002,55.60571,240.00244,56.00513Z"/>
    </symbol>  
    <symbol id="trending_down" viewBox="0 0 256 256">
        <path d="M233.14111,207.90967c-.1167.01672-.231.03882-.34912.05041-.2622.02588-.52588.03992-.78955.03992h-64a8,8,0,1,1,0-16h44.686l-76.686-76.686-34.34277,34.34278a8.00122,8.00122,0,0,1-11.31446,0l-72-72A8.00018,8.00018,0,1,1,29.65967,66.34326L96.00244,132.686l34.34277-34.34278a8.00122,8.00122,0,0,1,11.31446,0L224.00244,180.686V136a8,8,0,0,1,16,0v63.99487q0,.39918-.04.79712c-.01074.10767-.03125.21216-.0459.31861-.02148.1521-.03955.30456-.06933.45544-.02539.12622-.06006.24841-.09131.37244-.03174.12915-.06055.259-.09912.38672-.03711.12255-.0835.24072-.126.36059-.04541.12647-.0874.25379-.13867.37842-.0459.11108-.10059.21728-.15137.32568-.06006.12866-.11718.25806-.18506.384-.05517.10278-.11767.20019-.17724.30029-.07373.124-.144.24927-.22461.36987-.07373.10974-.15576.21265-.23438.31836-.07666.10352-.14892.20947-.23193.31006-.14844.18091-.30664.35327-.47021.52026-.02.02076-.03711.04346-.05762.064-.01612.01611-.03418.0293-.05029.04529-.17139.16882-.34913.33117-.53565.48413-.09424.07751-.19385.145-.291.21765-.11181.08374-.22167.17053-.33789.24853-.11474.07679-.23388.14331-.35156.21363-.10644.06347-.21045.13012-.31933.18872-.12012.06421-.24366.11865-.36622.17627-.11425.05395-.22656.11084-.34375.15942-.11816.04907-.23876.0885-.35888.13147-.12647.04553-.25147.09387-.38037.13318-.12012.03613-.2417.06262-.36231.093-.13183.03332-.2622.07031-.39648.09692C233.42529,207.8728,233.28271,207.8894,233.14111,207.90967Z"/>
    </symbol>
  </svg>
  `;

  //create wrapper div
  const wrapper = d3
    .select("body")
    .attr("id", "body")
    .append("div")
    .attr("class", "wrapper")
    .attr(
      "style",
      `width:${getWidth()}px; height: ${getHeight()}px; border-radius:${borderRadius}px `
    );

  //Get some params
  const maxDimensions = getMaxDimensions("body");
  const grid = calculGrid(
    maxDimensions,
    nbDims,
    1,
    maxDimensions.direction === "vertical" ? 3 : 4,
    maxDimensions.direction === "vertical" ? 4 : 3
  );
  const cardSize = calculObjectSize(
    maxDimensions,
    grid,
    {
      x: maxDimensions.direction === "vertical" ? 3 : 4,
      y: maxDimensions.direction === "vertical" ? 4 : 3,
    },
    gap
  );

  let gapBreak = getGapBreak(cardSize.w, cardSize.h, maxDimensions, gap);

  //create cards
  listVarsMetric.map((metric, i) => {
    const metricName = metric.name;
    let dataset = allDataset[i];
    const sumTotalEffectifs = dataset.reduce((prev, curr) => {
      return prev + curr["effectif" + (i === 0 ? "" : i)];
    }, 0);
    const card = wrapper
      .append("div")
      .attr("class", "cardWrapper")
      .attr(
        "style",
        `font-family: ${fontFamily}, sans-serif; position: relative; width:${
          cardSize.w
        }px; height: ${cardSize.h}px;border-radius:${borderRadius}px; ${
          i !== 0 && i % gapBreak.col !== 0 ? `margin-left:${gap.h}px` : ""
        };${i >= gapBreak.col ? `margin-top:${gap.v}px` : ""}`
      );
    const header = card
      .append("div")
      .attr("class", "cardHeader")
      .attr(
        "style",
        `border-radius:${borderRadius}px ${borderRadius}px 0 0; height: ${
          (cardSize.h * 3) / 5
        }px; font-size:${
          cardSize.h / 12
        }px; background-color:${colorHeader}; border-right:solid ${borderSize}px ${colorHeader}; border-left:solid ${borderSize}px ${colorHeader} `
      );
    const marginDiv = cardSize.w / 30;
    const titleDiv = header
      .append("div")
      .attr("class", "title")
      .attr(
        "style",
        `height:${
          (cardSize.h * 1) / 5
        }px; width:100%; margin-left:${marginDiv}px; display: flex;
        align-items: center;color : ${colorTitleDim}`
      )
      .append("span");
    titleDiv.node().innerHTML = metricName;
    const contentHeight = (cardSize.h * 2) / 5;
    const contentCard = card
      .append("div")
      .attr("class", "cardContent")
      .attr(
        "style",
        `border-radius: 0 0 ${borderRadius}px ${borderRadius}px; 
        background-color:${colorBackg};
        border-left:solid ${borderSize}px ${colorHeader}; 
        border-right:solid ${borderSize}px ${colorHeader}; 
        border-bottom:solid ${borderSize}px ${colorHeader};
        height:${contentHeight}px;
        `
      );

    const textSum = contentCard
      .append("div")
      .attr("class", "textSum")
      .attr(
        "style",
        `height: ${(cardSize.h * 1.5) / 5}px; display: flex;
        align-items: center; justify-content: ${
          positionTextStartToIllustrate ? "space-between" : "flex-end"
        }; margin: 0 ${marginDiv}px`
      );

    if (hasCompareTables) {
      if (vizData.tables.COMPARISON.length !== 0) {
        textSum
          .append("span")
          .attr(
            "style",
            `align-self: end;margin-right: ${marginDiv}px; font-size:${fontSizeTextToIllustrate}px; color: ${colorTextToIllustrate} `
          )
          .node().innerHTML = `${textToIllustrate}`;
      }
    }

    const textSumSpan = textSum.append("span");
    textSumSpan.attr(
      "style",
      `${
        boldNumber ? "font-weight: bold" : ""
      };font-size:${fontSizeSumRecap}px; color:${colorSumRecap}`
    );
    textSumSpan.node().innerHTML =
      (isNaN(sumTotalEffectifs) || sumTotalEffectifs === 0
        ? missingData
        : compactNumber === true
        ? millify(sumTotalEffectifs, { precision: decimalPrecisionMetric })
        : sumTotalEffectifs) + ` ${currency}`;
    const textVarChange = contentCard
      .append("div")
      .attr("class", "textChange")
      .attr(
        "style",
        `height: ${
          (cardSize.h * 0.5) / 5
        }px; display:flex;justify-content: flex-end;align-items: center`
      );

    if (allDatasetCompare) {
      createBlockChange(
        allDatasetCompare[i],
        textVarChange,
        marginDiv,
        i,
        sumTotalEffectifs,
        decimalPrecisionChangePercent,
        (cardSize.h * 0.5) / 5,
        fillSvgNeg,
        fillSvgPositiv
      );
    }

    //create svg Graph

    const margin = { top: 1.5, right: 5, bottom: 3, left: 7 };
    const svgWidth = +cardSize.w - margin.left - margin.right;
    const svgHeight = +contentHeight - margin.top - margin.bottom;

    const svg = header
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g");

    const x = d3.scaleBand().range([0, svgWidth]).padding(0.1),
      y = d3.scaleLinear().range([svgHeight, 0]);
    x.domain(
      dataset.map(function (d) {
        return d.date;
      })
    );
    y.domain([
      0,
      d3.max(dataset, function (d: any) {
        return d["effectif" + (i === 0 ? "" : i)];
      }),
    ]);

    svg
      .selectAll(".bar")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("style", `fill: ${colorBar};`)
      .attr("x", function (d: any) {
        return x(d.date);
      })
      .attr("width", x.bandwidth())
      .attr("y", function (d: any) {
        return y(d["effectif" + (i === 0 ? "" : i)]);
      })
      .attr("height", function (d: any) {
        return svgHeight - y(d["effectif" + (i === 0 ? "" : i)]);
      });
  });
  createSlider(
    vizData,
    colorValueCross,
    colorValueInfoBack,
    fontFamily,
    colorInfoBoxText,
    topPositionButton,
    colorValueBack
  );
};
type GetMaxDims = {
  w: number;
  h: number;
  max: number;
  direction: string;
};
function createBlockChange(
  datasetCompare: {
    [x: string]: any;
  }[],
  textVarChange: any,
  marginDiv: number,
  i: number,
  sumTotal: number,
  decimalPrecisionChangePercent: number,
  heightSvg: number,
  fillSvgNeg: string,
  fillSvgPositiv: string
) {
  if (datasetCompare) {
    const sumTotalCompare = datasetCompare.reduce((prev, curr) => {
      return prev + curr["effectif" + (i === 0 ? "" : i)];
    }, 0);
    let ecart = (100 * (sumTotal - sumTotalCompare)) / sumTotalCompare;
    textVarChange
      .append("svg")
      .attr(
        "style",
        `height: ${heightSvg}px; width: ${heightSvg}px; fill: ${
          ecart < 0 ? fillSvgNeg : fillSvgPositiv
        }`
      )
      .attr("class", "icon")
      .append("use")
      .attr("xlink:href", `${ecart < 0 ? "#trending_down" : "#trending_up"}`);
    const spanText = textVarChange
      .append("span")
      .attr(
        "style",
        `margin: 0 ${marginDiv}px; color: ${
          ecart < 0 ? fillSvgNeg : fillSvgPositiv
        }`
      );
    spanText.node().innerHTML = `${Number(ecart).toFixed(
      decimalPrecisionChangePercent
    )}%`;
  }
}

function getGapBreak(
  cardSizeW: number,
  cardSizeH: number,
  maxDimensions: GetMaxDims,
  gap: {
    h: number;
    v: number;
  }
) {
  const breakp = {} as { col: number; lines: number };
  const ratioNbCardLines = maxDimensions.h / (cardSizeH + gap.h);
  const ratioNbCardCols = maxDimensions.w / (cardSizeW + gap.v);
  breakp.lines = ratioNbCardLines > 1 ? Math.trunc(ratioNbCardLines) : 1;
  breakp.col = ratioNbCardCols > 1 ? Math.trunc(ratioNbCardCols) : 1;
  return breakp;
}

function calculGrid(
  canvas: GetMaxDims,
  metricLength: number,
  dimensionLength: number,
  ratioX: number,
  ratioY: number
) {
  const a = {} as { col: number; row: number },
    i = ratioY / ratioX;

  if (metricLength > 1 || dimensionLength > 1) {
    const n = (canvas.w / canvas.h) * i;
    const o = dimensionLength > 1 ? dimensionLength : metricLength;
    let s = o;
    for (let e = 1; e <= o; e += 1) {
      let r = o / e;
      const t = o % e;
      t >= 1 ? (r = Math.floor(r) + t / t) : (r += 0);
      const i = e / r,
        l = Math.abs(n - i);
      l < s && (e / 2 <= t || 0 === t) && ((s = l), (a.col = e), (a.row = r));
    }
  } else (a.col = 1), (a.row = 1);
  return a;
}

function calculObjectSize(
  canvas: GetMaxDims,
  grid: {
    col: number;
    row: number;
  },
  ratio: { x: number; y: number },
  gap: {
    h: number;
    v: number;
  }
) {
  const o = Math.floor((canvas.h - (grid.row - 1) * gap.v) / grid.row),
    a = Math.floor((canvas.w - (grid.col - 1) * gap.h) / grid.col),
    i = o / a,
    s = ratio.y / ratio.x,
    l = {} as { w: number; h: number; max: number };
  return (
    (l.w = Math.round(i > s ? a : o / s)),
    (l.h = Math.round(i > s ? a * s : o)),
    l.w >= l.h ? (l.max = Math.floor(l.h)) : (l.max = Math.floor(l.w)),
    l
  );
}

function getMaxDimensions(idElement: string) {
  let r = {} as GetMaxDims,
    t = document.getElementById(idElement);
  r.h = t.offsetHeight;
  r.w = t.offsetWidth;
  r.max = r.w >= r.h ? r.h : r.w;
  r.direction = r.w >= r.h ? "horizontal" : "vertical";
  return r;
}

function evalLength(
  maxLength: number,
  space: number,
  maxCards: number,
  minCardLength: number,
  nbVars: number,
  stop?: boolean
) {
  if (nbVars <= maxCards) {
    let length = (maxLength - space * (nbVars - 1)) / nbVars;
    for (let i = nbVars; i > 0; i--) {
      /*+ space * (i === 1 ? 0 : 1)*/
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

function resetAllElements() {
  if (document.querySelector(".error")) {
    let oldError = document.querySelector(".error");
    oldError.parentNode.removeChild(oldError);
  }
  if (document.querySelector("svg")) {
    let oldError = document.querySelector("svg");
    oldError.parentNode.removeChild(oldError);
  }
  if (document.querySelector(".wrapper")) {
    //Reset svg when the date range change
    let oldSvg = document.querySelector(".wrapper");
    oldSvg.parentNode.removeChild(oldSvg);
    //d3.select("body").selectAll("svg").remove();
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

function transformData(
  datasetSource: ObjectRow[],
  nbDims: number,
  checkDataFn?: Function
) {
  const parseDate = d3.timeParse(dateFormat);
  checkDataFn && checkDataFn(datasetSource);
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
    let res = {} as { [x: string]: any };
    res.date = valTokeep;
    e.effectif.map((v, i) => {
      res["effectif" + (i === 0 ? "" : i)] = e.effectif[i];
    });
    return res;
  });

  let allData = Array.from({ length: nbDims }, (v, k) => {
    let valGroupByAndSum = groupByAndSum(
      newData2,
      "date",
      "effectif" + (k === 0 ? "" : k)
    );
    return valGroupByAndSum;
  });
  return allData;
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

const createSlider = (
  vizData: ObjectFormat,
  colorValueCross: string,
  colorValueInfoBack: string,
  fontFamily: string,
  colorInfoBoxText: string,
  topPositionButton: number,
  colorValueBack: string
) => {
  let TitleText = styleVal(vizData, "TitleText") || "Add a title in style";
  let DescText = styleVal(vizData, "DescText") || "Add a description in style";
  const BlockInfo = d3
    .select("body")
    .append("div")
    .attr("class", "info")
    .attr(
      "style",
      `top: ${topPositionButton}rem;background-color: ${colorValueBack};`
    );
  let clicked = false;
  const BlockContent = d3
    .select("body")
    .append("div")
    .attr("id", "infoContent")
    .attr("style", `font-family: ${fontFamily};color:${colorInfoBoxText};`);
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

  Button.append("div")
    .attr("class", "horizontal")
    .attr(
      "style",
      `width: 50%;height: 2px;background-color: ${colorValueCross}`
    );
  Button.append("div")
    .attr("class", "vertical")
    .attr(
      "style",
      `width: 50%;height: 2px;background-color: ${colorValueCross}`
    );

  BlockContent.append("div")
    .attr("id", "content")
    .append("div")
    .attr("id", "contentInside")
    .attr(
      "style",
      `height:100%;
      width:100%;
      background: ${colorValueInfoBack};
      opacity:0.5;
      padding: 2em;`
    );
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
