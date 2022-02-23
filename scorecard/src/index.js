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
//Global variables
var dateFormat = "%Y%m%d";
var borderRadius = 8;
var drawViz = function (vizData) {
    console.log(vizData, vizData.fields.effectif.length, "vizData");
    //check size of the visualisation
    if (!vizData.fields.date) {
        throw new Error("No date field!");
    }
    if (!vizData.fields.effectif) {
        throw new Error("No effectif field!");
    }
    if (vizData.fields.date.length === 0 ||
        vizData.fields.effectif.length === 0) {
        throw new Error("No data!");
    }
    if (vizData.fields.date[0].type !== "YEAR_MONTH_DAY") {
        throw new Error("Date must be a valid format (YYYYMMDD)");
    }
    if ((0, dscc_1.getWidth)() < 150 || (0, dscc_1.getHeight)() < 150) {
        throw new Error("This visualization deserves more space!");
    }
    //init variables
    //kpi
    var compactNumber = styleVal(vizData, "compactNumber");
    var decimalPrecisionMetric = styleVal(vizData, "decimalPrecisionMetric") || 1;
    var decimalPrecisionChangePercent = styleVal(vizData, "decimalPrecisionChangePercent") || 2;
    var currency = styleVal(vizData, "currency") || "€";
    var missingData = styleVal(vizData, "missingData") || "-";
    var colorSumRecap = styleVal(vizData, "colorSumRecap") || "#222222";
    var fontSizeSumRecap = styleVal(vizData, "fontSizeSumRecap") || 25;
    var boldNumber = styleVal(vizData, "boldNumber");
    //colorBars
    var colorHeader = styleVal(vizData, "colorHeader") || "#4682b4";
    var colorBackg = styleVal(vizData, "colorBackg") || "#D3D3D3";
    //General style
    var horizontalGap = styleVal(vizData, "horizontalGap") || 15;
    var verticalGap = styleVal(vizData, "verticalGap") || 10;
    var borderSize = styleVal(vizData, "addBorder") ? 1 : 0;
    var colorTitleDim = styleVal(vizData, "colorTitleDim") || "#ffffff";
    //others
    var fontFamily = styleVal(vizData, "fontFamily") || "Arial";
    var colorInfoBoxText = styleVal(vizData, "colorInfoBoxText") || "#808080"; //#00838F
    var colorBar = styleVal(vizData, "colorBar") || "#D3D3D3"; //#E64A19
    var colorValueBack = styleVal(vizData, "colorValueBack") || "#999999";
    var colorValueCross = styleVal(vizData, "colorValueCross") || "#fff";
    var colorValueInfoBack = styleVal(vizData, "colorValueInfoBack") || "#fff";
    var topPositionButton = styleVal(vizData, "topPositionButton") || 2;
    //comparison val
    var fillSvgNeg = styleVal(vizData, "fillSvgNeg") || "#b30000";
    var fillSvgPositiv = styleVal(vizData, "fillSvgPositiv") || "#00b300";
    var textToIllustrate = styleVal(vizData, "textToIllustrate") || "Last period 30days";
    var positionTextStartToIllustrate = styleVal(vizData, "positionTextStartToIllustrate");
    var fontSizeTextToIllustrate = styleVal(vizData, "fontSizeTextToIllustrate") || 20;
    var colorTextToIllustrate = styleVal(vizData, "colorTextToIllustrate") || "#222222";
    var gap = {
        h: horizontalGap,
        v: verticalGap
    };
    var listVarsMetric = vizData.fields.effectif;
    var nbDims = listVarsMetric.length;
    //check if comparison table exists
    var hasCompareTables = vizData.tables.hasOwnProperty("COMPARISON");
    var allDatasetCompare = hasCompareTables
        ? vizData.tables.COMPARISON.length === 0
            ? null
            : transformData(vizData.tables.COMPARISON, nbDims)
        : null;
    //Get data and check and sort
    var allDataset = transformData(vizData.tables.DEFAULT, nbDims, verifData);
    // Reset all elements of the page
    resetAllElements();
    //insert svg icon sprite
    d3.select("body").node().innerHTML = "\n  <svg style=\"display:none\">\n    <symbol id=\"trending_up\" viewBox=\"0 0 256 256\">\n      <path d=\"M240.00244,56.00513V120a8,8,0,0,1-16,0V75.314l-82.34277,82.34278a8.00122,8.00122,0,0,1-11.31446,0L96.00244,123.314,29.65967,189.65674a8.00018,8.00018,0,0,1-11.31446-11.31348l72-72a8.00122,8.00122,0,0,1,11.31446,0L136.00244,140.686,212.68848,64h-44.686a8,8,0,0,1,0-16h64c.02979,0,.0586.00415.08838.00439.2334.00269.46631.01246.69824.0354.12891.01246.25391.03638.38086.05494.13135.01928.26319.03418.39356.06006.14013.02783.27685.06591.41455.10107.11474.0293.23047.0542.34424.08862.13427.04053.26367.09058.395.13794.11523.04151.231.07935.34472.12647.1211.05.23682.10864.35449.16455.11914.05615.23926.10888.356.17138.11133.05957.21729.12745.3252.19214.11621.06934.23388.135.34668.2107.11718.07812.227.16552.33984.24951.09668.07226.1958.13965.28955.21679.18652.15284.36426.31519.53565.48389.01611.01611.03417.0293.05029.04541.02051.02051.0376.04321.05762.064.16357.167.32177.33935.47021.52026.083.10059.15527.20654.23193.31006.07862.10571.16065.20874.23438.31836.08057.1206.15088.24585.22461.36987.05957.1001.12207.19751.17724.30029.06788.126.125.25538.18506.384.05078.1084.10547.2146.15137.32568.05127.12476.09326.252.13867.37842.04248.11987.08887.238.126.36059.03857.12769.06738.25757.09912.38672.03125.124.06592.2461.09131.37256.02978.15088.04785.30322.06933.45532.01465.10645.03516.21094.0459.31861Q240.002,55.60571,240.00244,56.00513Z\"/>\n    </symbol>  \n    <symbol id=\"trending_down\" viewBox=\"0 0 256 256\">\n        <path d=\"M233.14111,207.90967c-.1167.01672-.231.03882-.34912.05041-.2622.02588-.52588.03992-.78955.03992h-64a8,8,0,1,1,0-16h44.686l-76.686-76.686-34.34277,34.34278a8.00122,8.00122,0,0,1-11.31446,0l-72-72A8.00018,8.00018,0,1,1,29.65967,66.34326L96.00244,132.686l34.34277-34.34278a8.00122,8.00122,0,0,1,11.31446,0L224.00244,180.686V136a8,8,0,0,1,16,0v63.99487q0,.39918-.04.79712c-.01074.10767-.03125.21216-.0459.31861-.02148.1521-.03955.30456-.06933.45544-.02539.12622-.06006.24841-.09131.37244-.03174.12915-.06055.259-.09912.38672-.03711.12255-.0835.24072-.126.36059-.04541.12647-.0874.25379-.13867.37842-.0459.11108-.10059.21728-.15137.32568-.06006.12866-.11718.25806-.18506.384-.05517.10278-.11767.20019-.17724.30029-.07373.124-.144.24927-.22461.36987-.07373.10974-.15576.21265-.23438.31836-.07666.10352-.14892.20947-.23193.31006-.14844.18091-.30664.35327-.47021.52026-.02.02076-.03711.04346-.05762.064-.01612.01611-.03418.0293-.05029.04529-.17139.16882-.34913.33117-.53565.48413-.09424.07751-.19385.145-.291.21765-.11181.08374-.22167.17053-.33789.24853-.11474.07679-.23388.14331-.35156.21363-.10644.06347-.21045.13012-.31933.18872-.12012.06421-.24366.11865-.36622.17627-.11425.05395-.22656.11084-.34375.15942-.11816.04907-.23876.0885-.35888.13147-.12647.04553-.25147.09387-.38037.13318-.12012.03613-.2417.06262-.36231.093-.13183.03332-.2622.07031-.39648.09692C233.42529,207.8728,233.28271,207.8894,233.14111,207.90967Z\"/>\n    </symbol>\n  </svg>\n  ";
    //create wrapper div
    var wrapper = d3
        .select("body")
        .attr("id", "body")
        .append("div")
        .attr("class", "wrapper")
        .attr("style", "width:".concat((0, dscc_1.getWidth)(), "px; height: ").concat((0, dscc_1.getHeight)(), "px; border-radius:").concat(borderRadius, "px "));
    //Get some params
    var maxDimensions = getMaxDimensions("body");
    var grid = calculGrid(maxDimensions, nbDims, 1, maxDimensions.direction === "vertical" ? 3 : 4, maxDimensions.direction === "vertical" ? 4 : 3);
    var cardSize = calculObjectSize(maxDimensions, grid, {
        x: maxDimensions.direction === "vertical" ? 3 : 4,
        y: maxDimensions.direction === "vertical" ? 4 : 3
    }, gap);
    var gapBreak = getGapBreak(cardSize.w, cardSize.h, maxDimensions, gap);
    //create cards
    listVarsMetric.map(function (metric, i) {
        var metricName = metric.name;
        var dataset = allDataset[i];
        var sumTotalEffectifs = dataset.reduce(function (prev, curr) {
            return prev + curr["effectif" + (i === 0 ? "" : i)];
        }, 0);
        var card = wrapper
            .append("div")
            .attr("class", "cardWrapper")
            .attr("style", "font-family: ".concat(fontFamily, ", sans-serif; position: relative; width:").concat(cardSize.w, "px; height: ").concat(cardSize.h, "px;border-radius:").concat(borderRadius, "px; ").concat(i !== 0 && i % gapBreak.col !== 0 ? "margin-left:".concat(gap.h, "px") : "", ";").concat(i >= gapBreak.col ? "margin-top:".concat(gap.v, "px") : ""));
        var header = card
            .append("div")
            .attr("class", "cardHeader")
            .attr("style", "border-radius:".concat(borderRadius, "px ").concat(borderRadius, "px 0 0; height: ").concat((cardSize.h * 3) / 5, "px; font-size:").concat(cardSize.h / 12, "px; background-color:").concat(colorHeader, "; border-right:solid ").concat(borderSize, "px ").concat(colorHeader, "; border-left:solid ").concat(borderSize, "px ").concat(colorHeader, " "));
        var marginDiv = cardSize.w / 30;
        var titleDiv = header
            .append("div")
            .attr("class", "title")
            .attr("style", "height:".concat((cardSize.h * 1) / 5, "px; width:100%; margin-left:").concat(marginDiv, "px; display: flex;\n        align-items: center;color : ").concat(colorTitleDim))
            .append("span");
        titleDiv.node().innerHTML = metricName;
        var contentHeight = (cardSize.h * 2) / 5;
        var contentCard = card
            .append("div")
            .attr("class", "cardContent")
            .attr("style", "border-radius: 0 0 ".concat(borderRadius, "px ").concat(borderRadius, "px; \n        background-color:").concat(colorBackg, ";\n        border-left:solid ").concat(borderSize, "px ").concat(colorHeader, "; \n        border-right:solid ").concat(borderSize, "px ").concat(colorHeader, "; \n        border-bottom:solid ").concat(borderSize, "px ").concat(colorHeader, ";\n        height:").concat(contentHeight, "px;\n        "));
        var textSum = contentCard
            .append("div")
            .attr("class", "textSum")
            .attr("style", "height: ".concat((cardSize.h * 1.5) / 5, "px; display: flex;\n        align-items: center; justify-content: ").concat(positionTextStartToIllustrate ? "space-between" : "flex-end", "; margin: 0 ").concat(marginDiv, "px"));
        if (hasCompareTables) {
            if (vizData.tables.COMPARISON.length !== 0) {
                textSum
                    .append("span")
                    .attr("style", "align-self: end;margin-right: ".concat(marginDiv, "px; font-size:").concat(fontSizeTextToIllustrate, "px; color: ").concat(colorTextToIllustrate, " "))
                    .node().innerHTML = "".concat(textToIllustrate);
            }
        }
        var textSumSpan = textSum.append("span");
        textSumSpan.attr("style", "".concat(boldNumber ? "font-weight: bold" : "", ";font-size:").concat(fontSizeSumRecap, "px; color:").concat(colorSumRecap));
        textSumSpan.node().innerHTML =
            (isNaN(sumTotalEffectifs) || sumTotalEffectifs === 0
                ? missingData
                : compactNumber === true
                    ? (0, millify_1["default"])(sumTotalEffectifs, { precision: decimalPrecisionMetric })
                    : sumTotalEffectifs) + " ".concat(currency);
        var textVarChange = contentCard
            .append("div")
            .attr("class", "textChange")
            .attr("style", "height: ".concat((cardSize.h * 0.5) / 5, "px; display:flex;justify-content: flex-end;align-items: center"));
        if (allDatasetCompare) {
            createBlockChange(allDatasetCompare[i], textVarChange, marginDiv, i, sumTotalEffectifs, decimalPrecisionChangePercent, (cardSize.h * 0.5) / 5, fillSvgNeg, fillSvgPositiv);
        }
        //create svg Graph
        var margin = { top: 1.5, right: 5, bottom: 3, left: 7 };
        var svgWidth = +cardSize.w - margin.left - margin.right;
        var svgHeight = +contentHeight - margin.top - margin.bottom;
        var svg = header
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g");
        var x = d3.scaleBand().range([0, svgWidth]).padding(0.1), y = d3.scaleLinear().range([svgHeight, 0]);
        x.domain(dataset.map(function (d) {
            return d.date;
        }));
        y.domain([
            0,
            d3.max(dataset, function (d) {
                return d["effectif" + (i === 0 ? "" : i)];
            }),
        ]);
        svg
            .selectAll(".bar")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("style", "fill: ".concat(colorBar, ";"))
            .attr("x", function (d) {
            return x(d.date);
        })
            .attr("width", x.bandwidth())
            .attr("y", function (d) {
            return y(d["effectif" + (i === 0 ? "" : i)]);
        })
            .attr("height", function (d) {
            return svgHeight - y(d["effectif" + (i === 0 ? "" : i)]);
        });
    });
    createSlider(vizData, colorValueCross, colorValueInfoBack, fontFamily, colorInfoBoxText, topPositionButton, colorValueBack);
};
function createBlockChange(datasetCompare, textVarChange, marginDiv, i, sumTotal, decimalPrecisionChangePercent, heightSvg, fillSvgNeg, fillSvgPositiv) {
    if (datasetCompare) {
        var sumTotalCompare = datasetCompare.reduce(function (prev, curr) {
            return prev + curr["effectif" + (i === 0 ? "" : i)];
        }, 0);
        var ecart = (100 * (sumTotal - sumTotalCompare)) / sumTotalCompare;
        textVarChange
            .append("svg")
            .attr("style", "height: ".concat(heightSvg, "px; width: ").concat(heightSvg, "px; fill: ").concat(ecart < 0 ? fillSvgNeg : fillSvgPositiv))
            .attr("class", "icon")
            .append("use")
            .attr("xlink:href", "".concat(ecart < 0 ? "#trending_down" : "#trending_up"));
        var spanText = textVarChange
            .append("span")
            .attr("style", "margin: 0 ".concat(marginDiv, "px; color: ").concat(ecart < 0 ? fillSvgNeg : fillSvgPositiv));
        spanText.node().innerHTML = "".concat(Number(ecart).toFixed(decimalPrecisionChangePercent), "%");
    }
}
function getGapBreak(cardSizeW, cardSizeH, maxDimensions, gap) {
    var breakp = {};
    var ratioNbCardLines = maxDimensions.h / (cardSizeH + gap.h);
    var ratioNbCardCols = maxDimensions.w / (cardSizeW + gap.v);
    breakp.lines = ratioNbCardLines > 1 ? Math.trunc(ratioNbCardLines) : 1;
    breakp.col = ratioNbCardCols > 1 ? Math.trunc(ratioNbCardCols) : 1;
    return breakp;
}
function calculGrid(canvas, metricLength, dimensionLength, ratioX, ratioY) {
    var a = {}, i = ratioY / ratioX;
    if (metricLength > 1 || dimensionLength > 1) {
        var n = (canvas.w / canvas.h) * i;
        var o = dimensionLength > 1 ? dimensionLength : metricLength;
        var s = o;
        for (var e = 1; e <= o; e += 1) {
            var r = o / e;
            var t = o % e;
            t >= 1 ? (r = Math.floor(r) + t / t) : (r += 0);
            var i_1 = e / r, l = Math.abs(n - i_1);
            l < s && (e / 2 <= t || 0 === t) && ((s = l), (a.col = e), (a.row = r));
        }
    }
    else
        (a.col = 1), (a.row = 1);
    return a;
}
function calculObjectSize(canvas, grid, ratio, gap) {
    var o = Math.floor((canvas.h - (grid.row - 1) * gap.v) / grid.row), a = Math.floor((canvas.w - (grid.col - 1) * gap.h) / grid.col), i = o / a, s = ratio.y / ratio.x, l = {};
    return ((l.w = Math.round(i > s ? a : o / s)),
        (l.h = Math.round(i > s ? a * s : o)),
        l.w >= l.h ? (l.max = Math.floor(l.h)) : (l.max = Math.floor(l.w)),
        l);
}
function getMaxDimensions(idElement) {
    var r = {}, t = document.getElementById(idElement);
    r.h = t.offsetHeight;
    r.w = t.offsetWidth;
    r.max = r.w >= r.h ? r.h : r.w;
    r.direction = r.w >= r.h ? "horizontal" : "vertical";
    return r;
}
function evalLength(maxLength, space, maxCards, minCardLength, nbVars, stop) {
    if (nbVars <= maxCards) {
        var length_1 = (maxLength - space * (nbVars - 1)) / nbVars;
        for (var i = nbVars; i > 0; i--) {
            /*+ space * (i === 1 ? 0 : 1)*/
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
function resetAllElements() {
    if (document.querySelector(".error")) {
        var oldError = document.querySelector(".error");
        oldError.parentNode.removeChild(oldError);
    }
    if (document.querySelector("svg")) {
        var oldError = document.querySelector("svg");
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
function transformData(datasetSource, nbDims, checkDataFn) {
    var parseDate = d3.timeParse(dateFormat);
    checkDataFn && checkDataFn(datasetSource);
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
        var res = {};
        res.date = valTokeep;
        e.effectif.map(function (v, i) {
            res["effectif" + (i === 0 ? "" : i)] = e.effectif[i];
        });
        return res;
    });
    var allData = Array.from({ length: nbDims }, function (v, k) {
        var valGroupByAndSum = groupByAndSum(newData2, "date", "effectif" + (k === 0 ? "" : k));
        return valGroupByAndSum;
    });
    return allData;
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
var createSlider = function (vizData, colorValueCross, colorValueInfoBack, fontFamily, colorInfoBoxText, topPositionButton, colorValueBack) {
    var TitleText = styleVal(vizData, "TitleText") || "Add a title in style";
    var DescText = styleVal(vizData, "DescText") || "Add a description in style";
    var BlockInfo = d3
        .select("body")
        .append("div")
        .attr("class", "info")
        .attr("style", "top: ".concat(topPositionButton, "rem;background-color: ").concat(colorValueBack, ";"));
    var clicked = false;
    var BlockContent = d3
        .select("body")
        .append("div")
        .attr("id", "infoContent")
        .attr("style", "font-family: ".concat(fontFamily, ";color:").concat(colorInfoBoxText, ";"));
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
    Button.append("div")
        .attr("class", "horizontal")
        .attr("style", "width: 50%;height: 2px;background-color: ".concat(colorValueCross));
    Button.append("div")
        .attr("class", "vertical")
        .attr("style", "width: 50%;height: 2px;background-color: ".concat(colorValueCross));
    BlockContent.append("div")
        .attr("id", "content")
        .append("div")
        .attr("id", "contentInside")
        .attr("style", "height:100%;\n      width:100%;\n      background: ".concat(colorValueInfoBack, ";\n      opacity:0.5;\n      padding: 2em;"));
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
