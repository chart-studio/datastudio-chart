import {
  subscribeToData,
  objectTransform,
  getWidth,
  getHeight,
  ObjectFormat,
} from "@google/dscc";
import * as local from "./localMessage";
import * as FunnelGraph from "funnel-graph-js";

//when compiling some error due to FieldType not updated

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

const svgWidth = getWidth();
const svgHeight = (getHeight() * 85) / 100;

// write viz code here
const drawViz = (vizData: ObjectFormat) => {
  let colorValue = styleVal(vizData, "colorValue") || "#00838F"; //#00838F
  let colorTitle = styleVal(vizData, "colorTitle") || "#21ffa2"; //#00838F
  let colorPercent = styleVal(vizData, "colorPercent") || "#9896dc"; //#E64A19
  let fontFamily = styleVal(vizData, "fontFamily") || "Open Sans";
  let TitleText = styleVal(vizData, "TitleText") || "Add a title in style";
  let DescText = styleVal(vizData, "DescText") || "Add a description in style";

  let colorValueBack = styleVal(vizData, "colorValueBack") || "#999999";
  let colorValueCross = styleVal(vizData, "colorValueCross") || "#fff";
  let colorValueInfoBack = styleVal(vizData, "colorValueInfoBack") || "#fff";

  let colorFunnel1 = styleVal(vizData, "colorFunnel1") || "#FFB178";
  let colorFunnel2 = styleVal(vizData, "colorFunnel2") || "#FFA500";
  let colorFunnel3 = styleVal(vizData, "colorFunnel3") || "#FF0000";
  let colorFunnel4 = styleVal(vizData, "colorFunnel4") || "#A52A2A";

  // Reset all elements of the page
  resetAllElements();

  const listColor = [colorFunnel1, colorFunnel2, colorFunnel3, colorFunnel4];

  const body = document.querySelector("body");
  body.setAttribute("style", `font-family: ${fontFamily}, sans-serif;`);

  window.onresize = function () {
    location.reload();
  };

  if (vizData.fields.labels.length === 0) {
    throw new Error(`Dimension not selected: please enter a value (string)`);
  }
  if (vizData.fields.labels[0].type !== "TEXT") {
    throw new Error(`Dimension is not a text: please enter a value (string)`);
  }
  if (vizData.fields.sublabels) {
    if (vizData.fields.sublabels.length !== 0) {
      if (vizData.fields.sublabels[0].type !== "TEXT") {
        throw new Error(
          `SubLabels is not a text: please enter a value (string)`
        );
      }
    }
  }
  if (vizData.fields.effectif.length === 0) {
    throw new Error(`Metric not selected: please enter a value (number)`);
  }
  if (vizData.fields.effectif[0].type !== "NUMBER") {
    throw new Error(`Metric is not a number: please select a value (number)`);
  }

  const datasetSourceWithSubLabel = groupByAndSum2(
    vizData.tables.DEFAULT,
    "labels",
    "effectif",
    "sublabels"
  );

  const labels = uniqueArray(
    datasetSourceWithSubLabel.map((e, i) => e.labels[0])
  );
  const sublabels = uniqueArray(
    datasetSourceWithSubLabel.map((e, i) => e.sublabels[0])
  );

  if (labels.length > 4) {
    throw new Error(`Too many labels: Limit 4 ${labels.toString}`);
  }
  if (sublabels.length > 4) {
    throw new Error(`Too many sublabels: Limit 4 ${sublabels.toString}`);
  }

  const valuesWithSub = getvalueWithSub(
    labels,
    sublabels,
    datasetSourceWithSubLabel
  );

  const wrapperSvg = document.createElement("div");
  wrapperSvg.setAttribute("class", "flex");

  const containerSvg = document.createElement("div");
  containerSvg.setAttribute("class", "funnel");
  document
    .querySelector("body")
    .appendChild(wrapperSvg.appendChild(containerSvg));
  const data = {
    labels,
    subLabels: sublabels,
    colors: getColorList(listColor, sublabels.length),
    values: valuesWithSub,
  };

  var graph = new FunnelGraph({
    container: ".funnel",
    gradientDirection: "horizontal",
    data,
    displayPercent: true,
    direction: "horizontal",
    width: svgWidth,
    height: svgHeight,
  });

  graph.draw();

  const svgFunnel = document.querySelector<HTMLElement>(".svg-funnel-js");
  svgFunnel.style.setProperty("--borderColor", colorPercent);
  const SvgFunnelTextLabelValue = document.querySelectorAll(
    ".svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__value"
  );
  const SvgFunnelTextLabelTitle = document.querySelectorAll(
    ".svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__title"
  );
  const SvgFunnelTextLabelPercent = document.querySelectorAll(
    ".svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__percentage"
  );
  const SvgFunnelTextSubLabel = document.querySelectorAll(
    ".svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel"
  );
  SvgFunnelTextLabelValue.forEach((e: HTMLElement) => {
    e.style.color = colorValue;
  });
  SvgFunnelTextLabelTitle.forEach((e: HTMLElement) => {
    e.style.color = colorTitle;
  });
  SvgFunnelTextLabelPercent.forEach((e: HTMLElement) => {
    e.style.color = colorPercent;
  });
  SvgFunnelTextSubLabel.forEach((e: HTMLElement) => {
    e.style.color = colorValue;
  });

  const info = document.createElement("div");
  info.setAttribute("class", "info");
  info.style.backgroundColor = colorValueBack;
  info.style.color = colorValue;
  const infoContent = document.createElement("div");
  infoContent.setAttribute("id", "infoContent");
  infoContent.style.fontFamily = fontFamily;

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

const getvalueWithSub = (
  labels: string[],
  sublabels: string[],
  dataSource: {
    [x: string]: any;
  }[]
) => {
  if (sublabels.length <= 1) {
    return dataSource.map((e, i) => e.effectif);
  }
  const value = new Array(labels.length);

  for (let i = 0; i < value.length; i++) {
    const valueSubs = new Array(sublabels.length);
    const listValuePerlabel = dataSource.filter(
      (e) => e.labels[0] === labels[i]
    );

    for (let v = 0; v < valueSubs.length; v++) {
      const listValuePerLabelSubs = listValuePerlabel.filter(
        (e) => e.sublabels[0] === sublabels[v]
      );
      if (listValuePerLabelSubs[0] && listValuePerLabelSubs[0]["effectif"]) {
        valueSubs[v] = listValuePerLabelSubs[0]["effectif"];
      } else {
        valueSubs[v] = 0;
      }
    }
    value[i] = valueSubs;
  }
  return value;
};

const uniqueArray = (array: string[]) => {
  const uniqueAr = array.filter(function (item, pos) {
    return array.indexOf(item) == pos && item !== "none";
  });
  return uniqueAr;
};

const getColorList = (colorList: string[], nbSubLabels: number) => {
  let colorsToKeep: string[];
  if (nbSubLabels === 0) {
    colorsToKeep = [colorList[0]];
    return colorsToKeep;
  }
  colorsToKeep = new Array(nbSubLabels);
  for (let i = 0; i < colorsToKeep.length; i++) {
    colorsToKeep[i] = colorList[i];
  }
  return colorsToKeep;
};

const styleVal = (message: ObjectFormat, styleId: string) => {
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

function compare(a: any, b: any) {
  if (a.effectif[0] < b.effectif[0]) {
    return 1;
  }
  if (a.effectif[0] > b.effectif[0]) {
    return -1;
  }
  return 0;
}

function groupByAndSum2(
  objectArray: { [x: string]: any }[],
  label: string,
  effectif: string,
  sublabels: string
) {
  var result: { [x: string]: any }[] = [];
  objectArray.sort(compare);
  objectArray.reduce(function (res, value, i) {
    let val: { [x: string]: any } = {};
    if (!res[`${value[label]}_${value[sublabels]}`]) {
      val[label] = value[label];
      val[sublabels] = value[sublabels] ?? ["none"];
      val[effectif] = 0;
      res[`${value[label]}_${value[sublabels]}`] = val;
      result.push(res[`${value[label]}_${value[sublabels]}`]);
    }
    res[`${value[label]}_${value[sublabels]}`][effectif] += value[effectif][0];
    return res;
  }, []);
  return result;
}
function resetAllElements() {
  if (document.querySelector(".error")) {
    let oldError = document.querySelector(".error");
    oldError.parentNode.removeChild(oldError);
  }
  if (document.querySelector("svg")) {
    let oldSvg = document.querySelector("svg");
    oldSvg.parentNode.removeChild(oldSvg);
  }
  if (document.querySelector(".svg-funnel-js__subLabels")) {
    let oldLabel = document.querySelector(".svg-funnel-js__subLabels");
    oldLabel.parentNode.removeChild(oldLabel);
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
  subscribeToData(handleDrawViz, { transform: objectTransform });
}
