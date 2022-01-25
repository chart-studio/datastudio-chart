const dscc = require("@google/dscc");
const viz = require("@google/dscc-scripts/viz/initialViz.js");
const local = require("./localMessage.js");
import * as FunnelGraph from "funnel-graph-js";

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

const svgWidth = dscc.getWidth();
const svgHeight = (dscc.getHeight() * 85) / 100;

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

  let colorValue = styleVal(vizData, "colorValue") || "gray"; //#00838F
  let colorTitle = styleVal(vizData, "colorTitle") || "#21ffa2"; //#00838F
  let colorPercent = styleVal(vizData, "colorPercent") || "#9896dc"; //#E64A19
  let fontFamily = styleVal(vizData, "fontFamily") || "Open Sans";
  let TitleText = styleVal(vizData, "TitleText") || "Add a title";
  let DescText = styleVal(vizData, "DescText") || "Add a description";

  var styles = `
  body{
    overflow-y: hidden;
  }
    .svg-funnel-js {
      display: inline-block;
      position: relative;
    }
    .svg-funnel-js svg {
      display: block;
    }
    .svg-funnel-js .svg-funnel-js__labels {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__labels {
      flex-direction: column;
    }

    .svg-funnel-js {
      font-family: ${fontFamily}, sans-serif;
    }
    .svg-funnel-js .svg-funnel-js__container {
      width: 100%;
      height: 100%;
    }
    .svg-funnel-js .svg-funnel-js__labels {
      width: 100%;
      box-sizing: border-box;
    }
    .svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label {
      flex: 1 1 0;
      position: relative;
    }
    .svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__value {
      font-size: 24px;
      color: ${colorValue};
      line-height: 18px;
      margin-bottom: 6px;
    }
    .svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__title {
      font-size: 12px;
      font-weight: bold;
      color: ${colorTitle};
    }
    .svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__percentage {
      font-size: 16px;
      font-weight: bold;
      color: ${colorPercent};
    }
    .svg-funnel-js
      .svg-funnel-js__labels
      .svg-funnel-js__label
      .label__segment-percentages {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      left: 0;
      padding: 8px 24px;
      box-sizing: border-box;
      background-color: rgba(8, 7, 48, 0.8);
      margin-top: 24px;
      opacity: 0;
      transition: opacity 0.1s ease;
      cursor: default;
    }
    .svg-funnel-js
      .svg-funnel-js__labels
      .svg-funnel-js__label
      .label__segment-percentages
      ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    .svg-funnel-js
      .svg-funnel-js__labels
      .svg-funnel-js__label
      .label__segment-percentages
      ul
      li {
      font-size: 13px;
      line-height: 16px;
      color: #fff;
      margin: 18px 0;
    }
    .svg-funnel-js
      .svg-funnel-js__labels
      .svg-funnel-js__label
      .label__segment-percentages
      ul
      li
      .percentage__list-label {
      font-weight: bold;
      color: #05df9d;
    }
    .svg-funnel-js
      .svg-funnel-js__labels
      .svg-funnel-js__label:hover
      .label__segment-percentages {
      opacity: 1;
    }
    .svg-funnel-js:not(.svg-funnel-js--vertical) {
      padding-top: 64px;
      padding-bottom: 16px;
    }
    .svg-funnel-js:not(.svg-funnel-js--vertical) .svg-funnel-js__label {
      padding-left: 24px;
    }
    .svg-funnel-js:not(.svg-funnel-js--vertical)
      .svg-funnel-js__label:not(:first-child) {
      border-left: 1px solid ${colorPercent};
    }
    .svg-funnel-js.svg-funnel-js--vertical {
      padding-left: 120px;
      padding-right: 16px;
    }
    .svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label {
      padding-top: 24px;
    }
    .svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label:not(:first-child) {
      border-top: 1px solid ${colorPercent};
    }
    .svg-funnel-js.svg-funnel-js--vertical
      .svg-funnel-js__label
      .label__segment-percentages {
      margin-top: 0;
      margin-left: 106px;
      width: calc(100% - 106px);
    }
    .svg-funnel-js.svg-funnel-js--vertical
      .svg-funnel-js__label
      .label__segment-percentages
      .segment-percentage__list {
      display: flex;
      justify-content: space-around;
    }
    .svg-funnel-js .svg-funnel-js__subLabels {
      display: flex;
      justify-content: center;
      margin-top: 24px;
      position: absolute;
      width: 100%;
      left: 0;
    }
    .svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel {
      display: flex;
      font-size: 12px;
      color: ${colorValue};
      line-height: 16px;
    }
    .svg-funnel-js
      .svg-funnel-js__subLabels
      .svg-funnel-js__subLabel:not(:first-child) {
      margin-left: 16px;
    }
    .svg-funnel-js
      .svg-funnel-js__subLabels
      .svg-funnel-js__subLabel
      .svg-funnel-js__subLabel--color {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 2px 8px 2px 0;
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
      height:100%;
      width:100%;
      background: slategrey;
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
    background-color: slategrey;
  }
  .vertical {
    position: relative;
    bottom: 2px;
    transform: rotate(90deg);
  }

  .flex {
    display: flex;
  }

  svg {
    width : ${svgWidth}px;
    height : ${svgHeight}px
  }
  `;

  var styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  window.onresize = function () {
    location.reload();
  };

  //https://www.w3schools.com/colors/colors_converter.asp
  const datasetSource = vizData.tables.DEFAULT;

  const labels = datasetSource.map((e, i) => e.labels[0]);
  const values = datasetSource.map((e, i) => e.effectif[0]);

  const wrapperSvg = document.createElement("div");
  wrapperSvg.setAttribute("class", "flex");

  const containerSvg = document.createElement("div");
  containerSvg.setAttribute("class", "funnel");
  document
    .querySelector("body")
    .appendChild(wrapperSvg.appendChild(containerSvg));
  const data = {
    labels,
    colors: ["orange", "red"],
    values,
  };

  var graph = new FunnelGraph({
    container: ".funnel",
    gradientDirection: "horizontal",
    data,
    displayPercent: true,
    direction: "horizontal",
  });

  graph.draw();

  const info = document.createElement("div");
  info.setAttribute("class", "info");
  const infoContent = document.createElement("div");
  infoContent.setAttribute("id", "infoContent");

  const BlockInfo = document.querySelector("body").appendChild(info);
  const BlockContent = document.querySelector("body").appendChild(infoContent);

  let clicked = false;
  const lineWrapper = document.createElement("div");
  lineWrapper.setAttribute("id", "line-wrapper");

  const horizontal = document.createElement("div");
  horizontal.setAttribute("class", "horizontal");
  const vertical = document.createElement("div");
  vertical.setAttribute("class", "vertical");

  const Button = BlockInfo.appendChild(lineWrapper);

  console.log(lineWrapper, "lineWrapper");

  Button.appendChild(horizontal);
  Button.appendChild(vertical);

  const content = document.createElement("div");
  content.setAttribute("id", "content");
  const contentInside = document.createElement("div");
  contentInside.setAttribute("id", "contentInside");

  const BlockContentAdd = BlockContent.appendChild(content);
  BlockContentAdd.appendChild(contentInside);

  document.querySelector("#contentInside").innerHTML = [
    `<h3>${TitleText}</h3>`,
    `<p>${DescText}</p>`,
  ].join("\n");

  lineWrapper.onclick = function () {
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
  };
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
}
