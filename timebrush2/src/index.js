"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.LOCAL = void 0;
var dscc_1 = require("@google/dscc");
var local = require("./localMessage");
var d3 = require("d3v4");
exports.LOCAL = false;
//Global constiables
var startDate = "";
var endDate = "";
window.onresize = function () {
    location.reload();
};
var drawViz = function (vizData) {
    var _a, _b, _c, _d;
    //constants
    var positionAnchor = 50;
    var positionText = 5;
    var dateFormat = "%Y%m%d";
    var parseDate = d3.timeParse(dateFormat);
    var formatDate = d3.timeFormat("%Y-%m-%d");
    var formatDate2 = d3.timeFormat("%Y%m%d");
    // iniialize date
    if (startDate === "" && endDate === "") {
        startDate = ((_b = (_a = vizData.dateRanges) === null || _a === void 0 ? void 0 : _a.DEFAULT) === null || _b === void 0 ? void 0 : _b.start) || "";
        endDate = ((_d = (_c = vizData.dateRanges) === null || _c === void 0 ? void 0 : _c.DEFAULT) === null || _d === void 0 ? void 0 : _d.end) || "";
    }
    // Reset all elements of the page
    resetAllElements(vizData);
    //Define style
    var styles = getStyle(vizData);
    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    //Get data and check
    var dataset = transformData(vizData.tables.DEFAULT, verifData);
    dataset.sort(compareDate(parseDate));
    var periode = alldays(dataset, parseDate).day;
    //Create SVG
    var svgWidth = (0, dscc_1.getWidth)();
    var svgHeight = (0, dscc_1.getHeight)();
    var margin2 = { top: 15, right: 50, bottom: 30, left: 70 };
    var width = +svgWidth - margin2.left - margin2.right;
    var height2 = +svgHeight - margin2.top - margin2.bottom;
    var x2 = d3.scaleTime().range([0, width]), y2 = d3.scaleLinear().range([height2, 0]);
    var factorBand = 0.7;
    var xBand = d3
        .scaleBand()
        .domain(d3.range(-2, periode + 2))
        .range([0, width])
        .padding(0.2);
    var yAxis = d3.axisLeft(y2);
    var xAxis2 = d3.axisBottom(x2);
    //.tickFormat(formatDate);
    var extent = d3.extent(dataset, function (d) {
        return parseDate(d.date);
    });
    //use an offset to include the first and last date
    x2.domain([
        d3.timeDay.offset(extent[0], -1),
        d3.timeDay.offset(extent[1], 1),
    ]);
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
    var svg = d3
        .select("body")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr("viewBox", [0, 0, svgWidth, svgHeight]);
    var context = svg
        .append("g")
        .attr("class", "context")
        .attr("transform", "translate(".concat(margin2.left, ", ").concat(margin2.top, ")"));
    context
        .selectAll(".subBar")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class", "subBar")
        .attr("x", function (d, i) {
        return x2(parseDate(d.date)); // (pour centrer)- (xBand.bandwidth() * factorBand) / 2;
    })
        .attr("y", function (d, i) { return y2(d.effectif); })
        .attr("width", xBand.bandwidth() * factorBand)
        .attr("height", function (d) {
        return height2 - y2(d.effectif);
    });
    context
        .append("g")
        .attr("class", "axis2")
        .attr("transform", "translate(0,".concat(height2, ")"))
        .call(xAxis2);
    context.append("g").attr("class", "axis axis--y").call(yAxis);
    var gBrush = context.append("g").attr("class", "brush").call(brush);
    var brushResizePath = createBrushResize(height2);
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
    gBrush.call(brush.move, x2.range());
    function brushed() {
        if (!d3.event.selection && !d3.event.sourceEvent)
            return;
        var s0 = d3.event.selection
            ? d3.event.selection
            : [1, 2].fill(d3.event.sourceEvent.offsetX);
        var s1 = s0;
        var d0 = filteredDomain.apply(void 0, __spreadArray([xBand], s0, false));
        //Positionner les ancres pour slider
        if (s0 == null) {
            handle.attr("display", "none");
        }
        else {
            handle.attr("display", null).attr("transform", function (d, i) {
                return "translate(" + s0[i] + "," + -positionAnchor + ")";
            });
        }
        if (d3.event.sourceEvent && d3.event.type === "end") {
            //interactions
            var bornesNodes = document.querySelectorAll(".textDate");
            var bornes = Array.prototype.map.call(bornesNodes, function (d) {
                return d.innerHTML.replaceAll("-", "");
            });
            handleInteraction("filterZones", generateSelectedDate(bornes[0], bornes[1], parseDate, formatDate2), vizData);
            s1 = snappedSelection(xBand, d0);
            d3.select(this).transition().call(d3.event.target.move, s1);
        }
        d3.selectAll("g.handles")
            .selectAll("text")
            .attr("dx", d0.length > 1 ? 0 : 6)
            .text(function (d, i) {
            var min = new Date(parseDate(alldays(dataset, parseDate).min));
            var year;
            if (d0.length > 1) {
                year =
                    d.type === "w"
                        ? formatDate(new Date(min.setDate(min.getDate() + d3.min(d0) + 1)))
                        : formatDate(new Date(min.setDate(min.getDate() + d3.max(d0))));
            }
            else {
                year =
                    d.type === "w"
                        ? formatDate(new Date(min.setDate(min.getDate() + d3.min(d0) + 1)))
                        : "";
            }
            return year;
        });
    }
    createSlider(vizData);
};
function resetAllElements(vizData) {
    if (document.querySelector(".error")) {
        var oldError = document.querySelector(".error");
        oldError.parentNode.removeChild(oldError);
    }
    if (document.querySelector("svg")) {
        //Reset svg when the date range change
        if (startDate !== vizData.dateRanges.DEFAULT.start ||
            endDate !== vizData.dateRanges.DEFAULT.end) {
            var FILTER = dscc_1.InteractionType.FILTER;
            (0, dscc_1.clearInteraction)("filterZones", FILTER, undefined);
            var oldSvg = document.querySelector("svg");
            oldSvg.parentNode.removeChild(oldSvg);
            d3.select("body").selectAll("svg").remove();
            startDate = vizData.dateRanges.DEFAULT.start;
            endDate = vizData.dateRanges.DEFAULT.end;
        }
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
function transformData(datasetSource, checkDataFn) {
    checkDataFn(datasetSource);
    var newData = datasetSource.map(function (e, i) {
        return {
            date: e.date[0],
            effectif: e.effectif[0] === "" ? 0 : e.effectif[0]
        };
    });
    return newData;
}
function createBrushResize(height) {
    return function brushResizePath(d) {
        var e = +(d.type == "e"), x = e ? 1 : -1, y = height / 2;
        return ("M" +
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
            (2 * y - 8));
    };
}
function getStyle(vizData) {
    var fontFamily = styleVal(vizData, "fontFamily") || "Open Sans";
    var color = styleVal(vizData, "colorText") || "#808080"; //#00838F
    var colorBar = styleVal(vizData, "colorBar") || "#4682b4"; //#E64A19
    var colorValueBack = styleVal(vizData, "colorValueBack") || "#999999";
    var colorValueCross = styleVal(vizData, "colorValueCross") || "#fff";
    var colorValueInfoBack = styleVal(vizData, "colorValueInfoBack") || "#fff";
    return "\n    body{\n      overflow: hidden;\n      font-family: ".concat(fontFamily, ", sans-serif;\n    }\n    .subBar { \n      fill: ").concat(colorBar, ";\n      opacity: 0.5;\n    }\n    svg {\n      position: relative;\n      user-select: none\n    }\n    text {\n      fill : ").concat(color, ";\n    }\n    \n    path, line {\n      stroke: ").concat(color, ";\n    }\n\n    .info {\n      position: fixed;\n      top: 2rem;\n      right:1rem;\n      width: 2rem;\n      border-radius: 50%;\n      height:2rem;\n      background-color: ").concat(colorValueBack, ";\n      color:").concat(color, ",\n      backdrop-filter: blur(4px);\n      z-index: 1;\n      cursor: pointer;\n    }\n\n    #infoContent {\n      font-family: ").concat(fontFamily, ";\n      position: fixed;\n      top: 0;\n      right:0;\n      width: 100%;\n      height:100%;\n      transform:translateX(100%);\n      transition: transform 300ms ease-in;\n      \n    }\n\n    #content {display: flex;\n      align-items: center;\n      justify-content: center;\n      height:100%;\n      transform:translateX(100%);\n      transition: transform 300ms ease-out;\n      backdrop-filter: blur(10px);\n      width:100%;\n    }\n\n    #contentInside {\n      height:100%;\n      width:100%;\n      background: ").concat(colorValueInfoBack, ";\n      opacity:0.5;\n      padding: 2em;\n    }\n\n    #line-wrapper {\n      position:relative;\n      transition: transform 300ms ease-out;\n      transform: rotate(0deg);\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .horizontal,\n    .vertical {\n      width: 50%;\n      height: 2px;\n      background-color: ").concat(colorValueCross, ";\n    }\n    .vertical {\n      position: relative;\n      bottom: 2px;\n      transform: rotate(90deg);\n    }\n\n    svg text {\n      font-size: 12px;\n      font-family: ").concat(fontFamily, ", sans-serif;\n    }\n  ");
}
function compareDate(parseDate) {
    return function (a, b) {
        return parseDate(a.date) - parseDate(b.date);
    };
}
var generateSelectedDate = function (min, max, parseDate, formatDate2) {
    var val = [];
    var nbjours = dateDiff(parseDate(min), parseDate(max)).day;
    var newMin = new Date(parseDate(min));
    for (var i = 0; i < nbjours; i++) {
        var date = formatDate2(new Date(newMin.setDate(newMin.getDate() + 1)));
        val = __spreadArray(__spreadArray([], val, true), [[date]], false);
    }
    return val;
};
function alldays(array, parseDate) {
    var end = array.reduce(function (prev, current) {
        return parseDate(prev.date) > parseDate(current.date) ? prev : current;
    });
    var begin = array.reduce(function (prev, current) {
        return parseDate(prev.date) < parseDate(current.date) ? prev : current;
    });
    return {
        day: dateDiff(parseDate(begin.date), parseDate(end.date)).day,
        min: begin.date,
        max: end.date
    };
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
function snappedSelection(bandScale, domain) {
    var min = d3.min(domain), max = d3.max(domain);
    return [bandScale(min), bandScale(max) + bandScale.bandwidth()];
}
function filteredDomain(scale, min, max) {
    var dif = scale(d3.min(scale.domain())) - scale.range()[0], iMin = min - dif < 0 ? 0 : Math.round((min - dif) / scale.step()), iMax = Math.round((max - dif) / scale.step());
    if (iMax == iMin)
        --iMin;
    return scale.domain().slice(iMin, iMax);
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
var handleInteraction = function (interactionId, value, vizData) {
    var FILTER = dscc_1.InteractionType.FILTER;
    var interactionData = {
        concepts: [vizData.fields.date[0].id],
        values: value
    };
    (0, dscc_1.sendInteraction)(interactionId, FILTER, interactionData);
};
function displayError(msg) {
    document.body.innerHTML = "";
    var msgDiv = document.createElement("div");
    msgDiv.className = "error";
    var msgDivContainer = document.createElement("div");
    msgDivContainer.id = "contentError";
    msgDivContainer.innerHTML = msg;
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
