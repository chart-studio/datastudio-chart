"use strict";
exports.__esModule = true;
exports.LOCAL = void 0;
var dscc_1 = require("@google/dscc");
var local = require("./localMessage");
var FunnelGraph = require("funnel-graph-js");
//when compiling some error due to FieldType enum not updated
// change this to 'true' for local development
// change this to 'false' before deploying
exports.LOCAL = false;
var svgWidth = (0, dscc_1.getWidth)();
var svgHeight = ((0, dscc_1.getHeight)() * 85) / 100;
// write viz code here
var drawViz = function (vizData) {
    var colorValue = styleVal(vizData, "colorValue") || "#00838F"; //#00838F
    var colorTitle = styleVal(vizData, "colorTitle") || "#21ffa2"; //#00838F
    var colorPercent = styleVal(vizData, "colorPercent") || "#9896dc"; //#E64A19
    var fontFamily = styleVal(vizData, "fontFamily") || "Open Sans";
    var TitleText = styleVal(vizData, "TitleText") || "Add a title in style";
    var DescText = styleVal(vizData, "DescText") || "Add a description in style";
    var colorValueBack = styleVal(vizData, "colorValueBack") || "#999999";
    var colorValueCross = styleVal(vizData, "colorValueCross") || "#fff";
    var colorValueInfoBack = styleVal(vizData, "colorValueInfoBack") || "#fff";
    var colorFunnel1 = styleVal(vizData, "colorFunnel1") || "#FFB178";
    var colorFunnel2 = styleVal(vizData, "colorFunnel2") || "#FFA500";
    var colorFunnel3 = styleVal(vizData, "colorFunnel3") || "#FF0000";
    var colorFunnel4 = styleVal(vizData, "colorFunnel4") || "#A52A2A";
    resetAllElements();
    var listColor = [colorFunnel1, colorFunnel2, colorFunnel3, colorFunnel4];
    // Reset all elements of the page
    var body = document.querySelector("body");
    body.setAttribute("style", "font-family: ".concat(fontFamily, ", sans-serif;"));
    window.onresize = function () {
        location.reload();
    };
    if (vizData.fields.labels.length === 0) {
        throw new Error("Dimension not selected: please enter a value (string)");
    }
    if (vizData.fields.labels[0].type !== "TEXT") {
        throw new Error("Dimension is not a text: please enter a value (string)");
    }
    if (vizData.fields.sublabels) {
        if (vizData.fields.sublabels.length !== 0) {
            if (vizData.fields.sublabels[0].type !== "TEXT") {
                throw new Error("SubLabels is not a text: please enter a value (string)");
            }
        }
    }
    if (vizData.fields.effectif.length === 0) {
        throw new Error("Metric not selected: please enter a value (number)");
    }
    if (vizData.fields.effectif[0].type !== "NUMBER") {
        throw new Error("Metric is not a number: please select a value (number)");
    }
    var datasetSourceWithSubLabel = groupByAndSum2(vizData.tables.DEFAULT, "labels", "effectif", "sublabels");
    var labels = uniqueArray(datasetSourceWithSubLabel.map(function (e, i) { return e.labels[0]; }));
    var sublabels = uniqueArray(datasetSourceWithSubLabel.map(function (e, i) { return e.sublabels[0]; }));
    if (labels.length > 4) {
        throw new Error("Too many labels: Limit 4 ".concat(labels.toString));
    }
    if (sublabels.length > 4) {
        throw new Error("Too many sublabels: Limit 4 ".concat(sublabels.toString));
    }
    var valuesWithSub = getvalueWithSub(labels, sublabels, datasetSourceWithSubLabel);
    var wrapperSvg = document.createElement("div");
    wrapperSvg.setAttribute("class", "flex");
    var containerSvg = document.createElement("div");
    containerSvg.setAttribute("class", "funnel");
    document
        .querySelector("body")
        .appendChild(wrapperSvg.appendChild(containerSvg));
    var data = {
        labels: labels,
        subLabels: sublabels,
        colors: getColorList(listColor, sublabels.length),
        values: valuesWithSub
    };
    var graph = new FunnelGraph({
        container: ".funnel",
        gradientDirection: "horizontal",
        data: data,
        displayPercent: true,
        direction: "horizontal",
        width: svgWidth,
        height: svgHeight
    });
    graph.draw();
    var svgFunnel = document.querySelector(".svg-funnel-js");
    svgFunnel.style.setProperty("--borderColor", colorPercent);
    var SvgFunnelTextLabelValue = document.querySelectorAll(".svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__value");
    var SvgFunnelTextLabelTitle = document.querySelectorAll(".svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__title");
    var SvgFunnelTextLabelPercent = document.querySelectorAll(".svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__percentage");
    var SvgFunnelTextSubLabel = document.querySelectorAll(".svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel");
    SvgFunnelTextLabelValue.forEach(function (e) {
        e.style.color = colorValue;
    });
    SvgFunnelTextLabelTitle.forEach(function (e) {
        e.style.color = colorTitle;
    });
    SvgFunnelTextLabelPercent.forEach(function (e) {
        e.style.color = colorPercent;
    });
    SvgFunnelTextSubLabel.forEach(function (e) {
        e.style.color = colorValue;
    });
    var info = document.createElement("div");
    info.setAttribute("class", "info");
    info.style.backgroundColor = colorValueBack;
    info.style.color = colorValue;
    var infoContent = document.createElement("div");
    infoContent.setAttribute("id", "infoContent");
    infoContent.style.fontFamily = fontFamily;
    var BlockInfo = document.querySelector("body").appendChild(info);
    var BlockContent = document.querySelector("body").appendChild(infoContent);
    var clicked = false;
    var lineWrapper = document.createElement("div");
    lineWrapper.setAttribute("id", "line-wrapper");
    var horizontal = document.createElement("div");
    horizontal.setAttribute("class", "horizontal");
    horizontal.setAttribute("style", "background-color: ".concat(colorValueCross, ";"));
    var vertical = document.createElement("div");
    vertical.setAttribute("class", "vertical");
    vertical.setAttribute("style", "background-color: ".concat(colorValueCross, ";"));
    var Button = BlockInfo.appendChild(lineWrapper);
    Button.appendChild(horizontal);
    Button.appendChild(vertical);
    var content = document.createElement("div");
    content.setAttribute("id", "content");
    var contentInside = document.createElement("div");
    contentInside.setAttribute("id", "contentInside");
    contentInside.style.background = colorValueInfoBack;
    var BlockContentAdd = BlockContent.appendChild(content);
    BlockContentAdd.appendChild(contentInside);
    document.querySelector("#contentInside").innerHTML = [
        "<h3>".concat(TitleText, "</h3>"),
        "<p>".concat(DescText, "</p>"),
    ].join("\n");
    lineWrapper.addEventListener("click", function (ev) {
        if (!clicked) {
            this.style.transform = "rotate(135deg)";
            document.getElementById("content").style.transform = "translateX(0%)";
            document.getElementById("infoContent").style.transform = "translateX(0%)";
            clicked = true;
        }
        else {
            this.style.transform = "rotate(0deg)";
            document.getElementById("content").style.transform = null;
            document.getElementById("infoContent").style.transform = null;
            clicked = false;
        }
    });
};
var getvalueWithSub = function (labels, sublabels, dataSource) {
    if (sublabels.length <= 1) {
        return dataSource.map(function (e, i) { return e.effectif; });
    }
    var value = new Array(labels.length);
    var _loop_1 = function (i) {
        var valueSubs = new Array(sublabels.length);
        var listValuePerlabel = dataSource.filter(function (e) { return e.labels[0] === labels[i]; });
        var _loop_2 = function (v) {
            var listValuePerLabelSubs = listValuePerlabel.filter(function (e) { return e.sublabels[0] === sublabels[v]; });
            if (listValuePerLabelSubs[0] && listValuePerLabelSubs[0]["effectif"]) {
                valueSubs[v] = listValuePerLabelSubs[0]["effectif"];
            }
            else {
                valueSubs[v] = 0;
            }
        };
        for (var v = 0; v < valueSubs.length; v++) {
            _loop_2(v);
        }
        value[i] = valueSubs;
    };
    for (var i = 0; i < value.length; i++) {
        _loop_1(i);
    }
    return value;
};
var uniqueArray = function (array) {
    var uniqueAr = array.filter(function (item, pos) {
        return array.indexOf(item) == pos && item !== "none";
    });
    return uniqueAr;
};
var getColorList = function (colorList, nbSubLabels) {
    var colorsToKeep;
    if (nbSubLabels === 0) {
        colorsToKeep = [colorList[0]];
        return colorsToKeep;
    }
    colorsToKeep = new Array(nbSubLabels);
    for (var i = 0; i < colorsToKeep.length; i++) {
        colorsToKeep[i] = colorList[i];
    }
    return colorsToKeep;
};
var styleVal = function (message, styleId) {
    if (!message.style)
        return null;
    if (typeof message.style[styleId].defaultValue === "object") {
        return message.style[styleId].value.color !== undefined
            ? message.style[styleId].value.color
            : message.style[styleId].value.defaultValue.color;
    }
    return message.style[styleId].value !== undefined
        ? message.style[styleId].value
        : message.style[styleId].defaultValue;
};
function displayError(msg) {
    document.body.innerHTML = "";
    var msgDiv = document.createElement("div");
    msgDiv.className = "error";
    var msgDivContainer = document.createElement("div");
    msgDivContainer.id = "contentError";
    msgDivContainer.innerHTML = "<h2>Error : </h2><div>".concat(msg, "</div>");
    msgDiv.appendChild(msgDivContainer);
    document.body.appendChild(msgDiv);
}
function compare(a, b) {
    if (a.effectif[0] < b.effectif[0]) {
        return 1;
    }
    if (a.effectif[0] > b.effectif[0]) {
        return -1;
    }
    return 0;
}
function groupByAndSum2(objectArray, label, effectif, sublabels) {
    var result = [];
    objectArray.sort(compare);
    objectArray.reduce(function (res, value, i) {
        var _a;
        var val = {};
        if (!res["".concat(value[label], "_").concat(value[sublabels])]) {
            val[label] = value[label];
            val[sublabels] = (_a = value[sublabels]) !== null && _a !== void 0 ? _a : ["none"];
            val[effectif] = 0;
            res["".concat(value[label], "_").concat(value[sublabels])] = val;
            result.push(res["".concat(value[label], "_").concat(value[sublabels])]);
        }
        res["".concat(value[label], "_").concat(value[sublabels])][effectif] += value[effectif][0];
        return res;
    }, []);
    return result;
}
function resetAllElements() {
    if (document.querySelector(".error")) {
        var oldError = document.querySelector(".error");
        oldError.parentNode.removeChild(oldError);
    }
    if (document.querySelector("svg")) {
        var oldSvg = document.querySelector("svg");
        oldSvg.parentNode.removeChild(oldSvg);
    }
    if (document.querySelector(".svg-funnel-js__subLabels")) {
        var oldLabel = document.querySelector(".svg-funnel-js__subLabels");
        oldLabel.parentNode.removeChild(oldLabel);
    }
    if (document.querySelector(".wrapper")) {
        //Reset svg when the date range change
        var oldSvg = document.querySelector(".wrapper");
        oldSvg.parentNode.removeChild(oldSvg);
        //d3.select("body").selectAll("svg").remove();
        //Reset Info Box
        if (document.querySelector(".info")) {
            var oldInfo = document.querySelector(".info");
            oldInfo.parentNode.removeChild(oldInfo);
        }
        if (document.querySelector("#infoContent")) {
            var oldContent = document.querySelector("#infoContent");
            oldContent.parentNode.removeChild(oldContent);
        }
    }
}
var handleDrawViz = function (vizData) {
    try {
        drawViz(vizData);
    }
    catch (error) {
        displayError("<h3>".concat(error.message, "</h3>"));
    }
};
// renders locally
if (exports.LOCAL) {
    handleDrawViz(local.message);
}
else {
    (0, dscc_1.subscribeToData)(handleDrawViz, { transform: dscc_1.objectTransform });
}
