"use strict";
exports.__esModule = true;
exports.LOCAL = void 0;
var dscc_1 = require("@google/dscc");
var dayjs = require("dayjs");
var local = require("./localMessage");
var d3 = require("d3v4");
var quarterOfYear = require("dayjs/plugin/quarterOfYear");
var weekOfYear = require("dayjs/plugin/weekOfYear");
var millify_1 = require("millify");
dayjs.extend(quarterOfYear);
dayjs.extend(weekOfYear);
exports.LOCAL = false;
window.onresize = function () {
    location.reload();
};
//Global constiables
var dateFormat = "%Y%m%d";
var minCardHeight = 40;
var minCardWidth = 62;
var maxNumberCards = 8;
var borderRadius = 8;
var drawViz = function (vizData) {
    //check size of the visualisation
    if ((0, dscc_1.getWidth)() < 150 || (0, dscc_1.getHeight)() < 150) {
        throw new Error("This visualization deserves more space!");
    }
    console.log(vizData, "vizData");
    //init variables
    //kpi
    var compactNumber = styleVal(vizData, "compactNumber");
    var decimalPrecisionMetric = styleVal(vizData, "decimalPrecisionMetric") || 1;
    var decimalPrecisionChangePercent = styleVal(vizData, "decimalPrecisionChangePercent") || 1;
    var currency = styleVal(vizData, "currency") || "€";
    var missingData = styleVal(vizData, "missingData") || "-";
    //colorBars
    var colorHeader = styleVal(vizData, "colorHeader") || "#4682b4";
    var colorBackg = styleVal(vizData, "colorBackg") || "#D3D3D3";
    //General style
    var horizontalGap = styleVal(vizData, "horizontalGap") || 15;
    var verticalGap = styleVal(vizData, "verticalGap") || 10;
    var borderSize = styleVal(vizData, "addBorder") ? 1 : 0;
    var fontSize = styleVal(vizData, "fontSize") || 12;
    //list of variables
    var listVarsMetric = Object.keys(vizData.tables.DEFAULT[0]).filter(function (x) { return x !== "date"; });
    //const listVarsMetric = ["effectif", "effectif", "effectif", "effectif"];
    var nbCardToCreate = listVarsMetric.length;
    var widthCard = evalLength((0, dscc_1.getWidth)(), horizontalGap, maxNumberCards, minCardWidth, nbCardToCreate);
    var heightCard = evalLength((0, dscc_1.getHeight)(), verticalGap, maxNumberCards, minCardHeight, nbCardToCreate);
    var stopCardLine = evalLength((0, dscc_1.getWidth)(), horizontalGap, maxNumberCards, minCardWidth, nbCardToCreate, true);
    console.log(listVarsMetric, nbCardToCreate, stopCardLine, "stopCardLine listVarsMetric");
    //check if comparison table exists
    var hasCompareTables = vizData.tables.hasOwnProperty("COMPARISON");
    //Get data and check and sort
    var dataset = transformData(vizData.tables.DEFAULT, verifData);
    // Reset all elements of the page
    resetAllElements(vizData);
    //Define style
    var styles = getStyle(vizData);
    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    //create wrapper div
    var wrapper = d3
        .select("body")
        .append("div")
        .attr("class", "wrapper")
        .attr("style", "width:".concat((0, dscc_1.getWidth)(), "px; height: ").concat((0, dscc_1.getHeight)(), "px; gap: ").concat(verticalGap, "px ").concat(horizontalGap, "px; border-radius:").concat(borderRadius, "px "));
    //create cards
    listVarsMetric.map(function (metric) {
        var metricName = vizData.fields[metric][0].name;
        var sumTotalEffectifs = dataset.reduce(function (prev, curr) {
            return prev + curr[metric];
        }, 0);
        //console.log(sumTotalEffectifs, "sumTotalEffectifs");
        var card = wrapper
            .append("div")
            .attr("class", "cardWrapper")
            .attr("style", "position: relative; width:".concat(widthCard < minCardWidth ? minCardWidth : widthCard, "px; height: ").concat(heightCard < minCardHeight ? minCardHeight : heightCard, "px;border-radius:").concat(borderRadius, "px ;"));
        var header = card
            .append("div")
            .attr("class", "cardHeader")
            .attr("style", "border-radius:".concat(borderRadius, "px ").concat(borderRadius, "px 0 0; height: 20%; font-size:").concat(widthCard / 20, "px; background-color:").concat(colorHeader, "; border-right:solid ").concat(borderSize, "px ").concat(colorHeader, "; border-left:solid ").concat(borderSize, "px ").concat(colorHeader, " "));
        header.node().innerHTML = metricName;
        var contentCard = card
            .append("div")
            .attr("class", "cardContent")
            .attr("style", "border-radius: 0 0 ".concat(borderRadius, "px ").concat(borderRadius, "px; background-color:").concat(colorBackg, "; padding: 5px 0; border-left:solid ").concat(borderSize, "px ").concat(colorHeader, "; border-right:solid ").concat(borderSize, "px ").concat(colorHeader, "; border-bottom:solid ").concat(borderSize, "px ").concat(colorHeader));
        var margin = { top: 1.5, right: 5, bottom: 3, left: 7 };
        var svgWidth = +widthCard - margin.left - margin.right;
        var svgHeight = +(widthCard * 2) / 5 - margin.top - margin.bottom;
        var svg = contentCard
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g");
        var textSvgSum = svg
            .append("text")
            .attr("text-anchor", "middle")
            .attr("font-size", fontSize);
        textSvgSum.attr("dx", svgWidth / 3).attr("dy", svgHeight - 20);
        textSvgSum.node().innerHTML =
            (isNaN(sumTotalEffectifs) || sumTotalEffectifs === 0
                ? missingData
                : compactNumber === true
                    ? (0, millify_1["default"])(sumTotalEffectifs, { precision: decimalPrecisionMetric })
                    : sumTotalEffectifs) + " ".concat(currency);
        var x = d3
            .scaleBand()
            .range([0, svgWidth / 2])
            .padding(0.1), y = d3.scaleLinear().range([svgHeight, 0]);
        x.domain(dataset.map(function (d) {
            return d.date;
        }));
        y.domain([
            0,
            d3.max(dataset, function (d) {
                return d[metric];
            }),
        ]);
        svg
            .selectAll(".bar")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
            return x(d.date) + svgWidth / 2;
        })
            .attr("width", x.bandwidth())
            .attr("y", function (d) {
            return y(d[metric]);
        })
            .attr("height", function (d) {
            return svgHeight - y(d[metric]);
        });
    });
    createSlider(vizData);
};
function evalLength(maxLength, space, maxCards, minCardLength, nbVars, stop) {
    console.log(maxLength, space, maxCards, minCardLength, nbVars);
    if (nbVars <= maxCards) {
        var length_1 = (maxLength - space * (nbVars - 1)) / nbVars;
        for (var i = nbVars; i > 0; i--) {
            /*+ space * (i === 1 ? 0 : 1)*/
            console.log(length_1, "length");
            if (length_1 * i <= maxLength) {
                // if (length <= minCardLength) {
                //   throw new Error("Cards are too small");
                // }
                if (stop) {
                    return i;
                }
                return length_1;
            }
        }
    }
    else {
        throw new Error("Too many metrics : Limit 8");
    }
}
function resetAllElements(vizData) {
    if (document.querySelector(".error")) {
        var oldError = document.querySelector(".error");
        oldError.parentNode.removeChild(oldError);
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
function verifData(datasetSource) {
    var hasData = datasetSource.length > 0;
    if (!hasData) {
        throw new Error("No Data");
    }
    datasetSource.map(function (lineData, lineNumber) {
        if (lineData.date.length === 0 || lineData.effectif.length === 0) {
            throw new Error("Dimension or Metric should not be empty: line ".concat(lineNumber));
        }
        if (lineData.date[0].length !== 8 ||
            (lineData.date[0].slice(0, 1) !== "1" &&
                lineData.date[0].slice(0, 1) !== "2")) {
            throw new Error("Dimension should be a date : line ".concat(lineNumber, " does not have the correct format (yyyymmdd)"));
        }
        if (isNaN(lineData.effectif[0])) {
            throw new Error("Metric should be a number : line ".concat(lineNumber, " does not have a number"));
        }
    });
}
function getInfoPeriode(start, end) {
    var startVal = dayjs(start, "YYYYMMDD");
    var endVal = dayjs(end, "YYYYMMDD");
    var day = endVal.diff(startVal, "day");
    var week = endVal.diff(startVal, "week");
    var month = endVal.diff(startVal, "month");
    var quarter = endVal.diff(startVal, "quarter");
    var year = endVal.diff(startVal, "year");
    //dateDiff(start, end).day;
    return { day: day, week: week, month: month, quarter: quarter, year: year };
}
function evalValToKeep(year, week, month, quarter, date, parameter) {
    if (parameter.day <= 12)
        return date;
    if (parameter.week <= 12)
        return "".concat(year, "_").concat(week < 10 ? "0" + week : week);
    if (parameter.month <= 12)
        return "".concat(year, "_").concat(month < 10 ? "0" + month : month);
    if (parameter.quarter <= 12)
        return "".concat(year, "_").concat(quarter);
    return year;
}
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        // Add object to list for given key's value
        acc[key].push(obj);
        return acc;
    }, {});
}
function groupByAndSum(objectArray, date, effectif) {
    var result = [];
    objectArray.reduce(function (res, value) {
        var val = {};
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
function transformData(datasetSource, checkDataFn) {
    var parseDate = d3.timeParse(dateFormat);
    checkDataFn(datasetSource);
    // const newData = datasetSource.map((e, i) => {
    //   return {
    //     date: e.date[0],
    //     effectif: e.effectif[0] === "" ? 0 : e.effectif[0],
    //   };
    // });
    datasetSource.sort(compareDate(parseDate));
    var infos = getInfoPeriode(datasetSource[0].date[0], datasetSource[datasetSource.length - 1].date[0]);
    var newData2 = datasetSource.map(function (e, i) {
        var year = dayjs(e.date[0], "YYYYMMDD").year();
        var week = dayjs(e.date[0], "YYYYMMDD").week();
        var month = dayjs(e.date[0], "YYYYMMDD").month() + 1;
        var quarter = dayjs(e.date[0], "YYYYMMDD").quarter();
        var valTokeep = evalValToKeep(year, week, month, quarter, e.date[0], infos);
        return {
            date: valTokeep,
            effectif: e.effectif[0] === "" ? 0 : e.effectif[0]
        };
    });
    var valGroupByAndSum = groupByAndSum(newData2, "date", "effectif");
    return valGroupByAndSum;
}
function getStyle(vizData) {
    var fontFamily = styleVal(vizData, "fontFamily") || "Open Sans";
    var color = styleVal(vizData, "colorText") || "#808080"; //#00838F
    var colorBar = styleVal(vizData, "colorBar") || "#4682b4"; //#E64A19
    var colorValueBack = styleVal(vizData, "colorValueBack") || "#999999";
    var colorValueCross = styleVal(vizData, "colorValueCross") || "#fff";
    var colorValueInfoBack = styleVal(vizData, "colorValueInfoBack") || "#fff";
    var topPositionButton = styleVal(vizData, "topPositionButton") || 2;
    return "\n    body{\n      font-family: ".concat(fontFamily, ", sans-serif;\n      overflow: hidden;\n    }\n    .bar { \n      fill: ").concat(colorBar, ";\n      opacity: 0.5;\n    }\n    svg {\n      position: relative;\n      user-select: none\n    }\n\n\n    .info {\n      position: fixed;\n      top: ").concat(topPositionButton, "rem;\n      right:1rem;\n      width: 2rem;\n      border-radius: 50%;\n      height:2rem;\n      background-color: ").concat(colorValueBack, ";\n      color:").concat(color, ",\n      backdrop-filter: blur(4px);\n      z-index: 1;\n      cursor: pointer;\n    }\n\n    #infoContent {\n      font-family: ").concat(fontFamily, ";\n      position: fixed;\n      top: 0;\n      right:0;\n      width: 100%;\n      height:100%;\n      transform:translateX(100%);\n      transition: transform 300ms ease-in;\n      \n    }\n\n    #content {display: flex;\n      align-items: center;\n      justify-content: center;\n      height:100%;\n      transform:translateX(100%);\n      transition: transform 300ms ease-out;\n      backdrop-filter: blur(10px);\n      width:100%;\n    }\n\n    #contentInside {\n      height:100%;\n      width:100%;\n      background: ").concat(colorValueInfoBack, ";\n      opacity:0.5;\n      padding: 2em;\n    }\n\n    #line-wrapper {\n      position:relative;\n      transition: transform 300ms ease-out;\n      transform: rotate(0deg);\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .horizontal,\n    .vertical {\n      width: 50%;\n      height: 2px;\n      background-color: ").concat(colorValueCross, ";\n    }\n    .vertical {\n      position: relative;\n      bottom: 2px;\n      transform: rotate(90deg);\n    }\n  ");
}
function compareDate(parseDate) {
    return function (a, b) {
        return parseDate(a.date) - parseDate(b.date);
    };
}
var styleVal = function (message, styleId) {
    var _a;
    if (!message.style || !message.style[styleId])
        return null;
    if (typeof ((_a = message.style[styleId]) === null || _a === void 0 ? void 0 : _a.defaultValue) === "object") {
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
var createSlider = function (vizData) {
    var TitleText = styleVal(vizData, "TitleText") || "Add a title in style";
    var DescText = styleVal(vizData, "DescText") || "Add a description in style";
    var BlockInfo = d3.select("body").append("div").attr("class", "info");
    var clicked = false;
    var BlockContent = d3
        .select("body")
        .append("div")
        .attr("id", "infoContent");
    var Button = BlockInfo.append("div")
        .attr("id", "line-wrapper")
        .on("click", function () {
        if (!clicked) {
            this.style.transform = "rotate(135deg)";
            document.getElementById("content").style.transform = "translateX(0%)";
            document.getElementById("infoContent").style.transform =
                "translateX(0%)";
            clicked = true;
        }
        else {
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
        "<h3>".concat(TitleText, "</h3>"),
        "<p>".concat(DescText, "</p>"),
    ].join("\n");
};
var handleDrawViz = function (vizData) {
    try {
        drawViz(vizData);
    }
    catch (error) {
        displayError("<h3>".concat(error.message, "</h3>"));
    }
};
if (exports.LOCAL) {
    handleDrawViz(local.message);
}
else {
    (0, dscc_1.subscribeToData)(handleDrawViz, {
        transform: dscc_1.objectTransform
    });
}
