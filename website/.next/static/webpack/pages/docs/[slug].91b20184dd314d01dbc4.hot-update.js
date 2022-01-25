"use strict";
self["webpackHotUpdate_N_E"]("pages/docs/[slug]",{

/***/ "./components/GraphsComponents/funnel-chart1.tsx":
/*!*******************************************************!*\
  !*** ./components/GraphsComponents/funnel-chart1.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ "./node_modules/next/script.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\GraphsComponents\\funnel-chart1.tsx",
    _this = undefined;






var colorValue = "gray"; //#00838F

var colorTitle = "#55b1a5"; //#00838F

var colorPercent = "var(--surface3)"; //#E64A19

var colorTextPercent = "var(--text2)"; //#E64A19

var SvgContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "funnel-chart1__SvgContainer",
  componentId: "sc-htr68v-0"
})([".svg-funnel-js{display:inline-block;position:relative;}.svg-funnel-js svg{display:block;}.svg-funnel-js .svg-funnel-js__labels{position:absolute;display:flex;width:100%;height:100%;top:0;left:0;}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__labels{flex-direction:column;}.svg-funnel-js{font-family:inherit;}.svg-funnel-js .svg-funnel-js__container{width:100%;height:100%;}.svg-funnel-js .svg-funnel-js__labels{width:100%;box-sizing:border-box;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label{flex:1 1 0;position:relative;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__value{font-size:24px;color:", ";line-height:18px;margin-bottom:6px;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__title{font-size:12px;font-weight:bold;color:", ";}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__percentage{font-size:16px;font-weight:bold;color:", ";}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages{position:absolute;top:50%;transform:translateY(-50%);width:100%;left:0;padding:8px 24px;box-sizing:border-box;background-color:rgba(8,7,48,0.8);margin-top:24px;opacity:0;transition:opacity 0.1s ease;cursor:default;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages ul{margin:0;padding:0;list-style-type:none;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages ul li{font-size:13px;line-height:16px;color:#fff;margin:18px 0;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages ul li .percentage__list-label{font-weight:bold;color:#05df9d;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label:hover .label__segment-percentages{opacity:1;}.svg-funnel-js:not(.svg-funnel-js--vertical){padding-top:64px;padding-bottom:16px;}.svg-funnel-js:not(.svg-funnel-js--vertical) .svg-funnel-js__label{padding-left:24px;}.svg-funnel-js:not(.svg-funnel-js--vertical) .svg-funnel-js__label:not(:first-child){border-left:1px solid ", ";}.svg-funnel-js.svg-funnel-js--vertical{padding-left:120px;padding-right:16px;}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label{padding-top:24px;}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label:not(:first-child){border-top:1px solid ", ";}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label .label__segment-percentages{margin-top:0;margin-left:106px;width:calc(100% - 106px);}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label .label__segment-percentages .segment-percentage__list{display:flex;justify-content:space-around;}.svg-funnel-js .svg-funnel-js__subLabels{display:flex;justify-content:center;margin-top:24px;position:absolute;width:100%;left:0;}.svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel{display:flex;font-size:12px;color:", ";line-height:16px;}.svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel:not(:first-child){margin-left:16px;}.svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel .svg-funnel-js__subLabel--color{width:12px;height:12px;border-radius:50%;margin:2px 8px 2px 0;}.info{position:fixed;top:2rem;right:1rem;width:2rem;border-radius:50%;height:2rem;background-color:hsla(210,9%,91%,0.6);backdrop-filter:blur(4px);z-index:1;cursor:pointer;}#infoContent{position:fixed;top:0;right:0;width:100%;height:100%;transform:translateX(100%);transition:transform 300ms ease-in;}#content{display:flex;align-items:center;justify-content:center;height:100%;transform:translateX(100%);transition:transform 300ms ease-out;backdrop-filter:blur(10px);width:100%;}#contentInside{height:100%;width:100%;background:slategrey;opacity:0.5;padding:2em;}#line-wrapper{position:relative;transition:transform 300ms ease-out;transform:rotate(0deg);display:flex;flex-direction:column;height:100%;align-items:center;justify-content:center;}.horizontal,.vertical{width:50%;height:2px;background-color:slategrey;}.vertical{position:relative;bottom:2px;transform:rotate(90deg);}.flex{display:flex;}svg{width:50em;height:50vh;}padding:1rem;"], colorValue, colorTitle, colorTextPercent, colorPercent, colorPercent, colorValue);
_c = SvgContainer;

var FunnelChart1 = function FunnelChart1() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/funnel-graph-js@1.3.9/dist/css/main.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/funnel-graph-js@1.3.9/dist/css/theme.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
        src: "https://unpkg.com/funnel-graph-js@1.3.9/dist/js/funnel-graph.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SvgContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "funnelTest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "../scripts/funnel-chart.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c2 = FunnelChart1;
/* harmony default export */ __webpack_exports__["default"] = (FunnelChart1);

var _c, _c2;

$RefreshReg$(_c, "SvgContainer");
$RefreshReg$(_c2, "FunnelChart1");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uOTFiMjAxODRkZDMxNGQwMWRiYzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQUlHLFVBQVUsR0FBRyxNQUFqQixFQUF3Qjs7QUFDeEIsSUFBSUMsVUFBVSxHQUFHLFNBQWpCLEVBQTJCOztBQUMzQixJQUFJQyxZQUFZLEdBQUcsaUJBQW5CLEVBQXFDOztBQUNyQyxJQUFJQyxnQkFBZ0IsR0FBRyxjQUF2QixFQUFzQzs7QUFFdEMsSUFBTUMsWUFBWSxHQUFHTixxRUFBSDtBQUFBO0FBQUE7QUFBQSwyK0hBcUNMRSxVQXJDSyxFQTRDTEMsVUE1Q0ssRUFvRExFLGdCQXBESyxFQW9IV0QsWUFwSFgsRUErSFVBLFlBL0hWLEVBMEpMRixVQTFKSyxDQUFsQjtLQUFNSTs7QUF5UE4sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsWUFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsWUFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBWUU7QUFBUSxXQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFlRSw4REFBQyxZQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRixlQWtCRSw4REFBQyxvREFBRDtBQUFRLFNBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQSxrQkFERjtBQXNCRCxDQXZCRDs7TUFBTUE7QUF5Qk4sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaHNDb21wb25lbnRzL2Z1bm5lbC1jaGFydDEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCJcclxuXHJcbmxldCBjb2xvclZhbHVlID0gXCJncmF5XCIgLy8jMDA4MzhGXHJcbmxldCBjb2xvclRpdGxlID0gXCIjNTViMWE1XCIgLy8jMDA4MzhGXHJcbmxldCBjb2xvclBlcmNlbnQgPSBcInZhcigtLXN1cmZhY2UzKVwiIC8vI0U2NEExOVxyXG5sZXQgY29sb3JUZXh0UGVyY2VudCA9IFwidmFyKC0tdGV4dDIpXCIgLy8jRTY0QTE5XHJcblxyXG5jb25zdCBTdmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5zdmctZnVubmVsLWpzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanMgc3ZnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcyAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzLnN2Zy1mdW5uZWwtanMtLXZlcnRpY2FsIC5zdmctZnVubmVsLWpzX19sYWJlbHMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5zdmctZnVubmVsLWpzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcyAuc3ZnLWZ1bm5lbC1qc19fY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcyAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanMgLnN2Zy1mdW5uZWwtanNfX2xhYmVscyAuc3ZnLWZ1bm5lbC1qc19fbGFiZWwge1xyXG4gICAgZmxleDogMSAxIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzIC5zdmctZnVubmVsLWpzX19sYWJlbHMgLnN2Zy1mdW5uZWwtanNfX2xhYmVsIC5sYWJlbF9fdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICR7Y29sb3JWYWx1ZX07XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanMgLnN2Zy1mdW5uZWwtanNfX2xhYmVscyAuc3ZnLWZ1bm5lbC1qc19fbGFiZWwgLmxhYmVsX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke2NvbG9yVGl0bGV9O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX2xhYmVsc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX2xhYmVsXHJcbiAgICAubGFiZWxfX3BlcmNlbnRhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJHtjb2xvclRleHRQZXJjZW50fTtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanNcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbHNcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbFxyXG4gICAgLmxhYmVsX19zZWdtZW50LXBlcmNlbnRhZ2VzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA3LCA0OCwgMC44KTtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2U7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxcclxuICAgIC5sYWJlbF9fc2VnbWVudC1wZXJjZW50YWdlc1xyXG4gICAgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanNcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbHNcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbFxyXG4gICAgLmxhYmVsX19zZWdtZW50LXBlcmNlbnRhZ2VzXHJcbiAgICB1bFxyXG4gICAgbGkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMThweCAwO1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX2xhYmVsc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX2xhYmVsXHJcbiAgICAubGFiZWxfX3NlZ21lbnQtcGVyY2VudGFnZXNcclxuICAgIHVsXHJcbiAgICBsaVxyXG4gICAgLnBlcmNlbnRhZ2VfX2xpc3QtbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzA1ZGY5ZDtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanNcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbHNcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbDpob3ZlclxyXG4gICAgLmxhYmVsX19zZWdtZW50LXBlcmNlbnRhZ2VzIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzOm5vdCguc3ZnLWZ1bm5lbC1qcy0tdmVydGljYWwpIHtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzOm5vdCguc3ZnLWZ1bm5lbC1qcy0tdmVydGljYWwpIC5zdmctZnVubmVsLWpzX19sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzOm5vdCguc3ZnLWZ1bm5lbC1qcy0tdmVydGljYWwpXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWw6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke2NvbG9yUGVyY2VudH07XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzLnN2Zy1mdW5uZWwtanMtLXZlcnRpY2FsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcy5zdmctZnVubmVsLWpzLS12ZXJ0aWNhbCAuc3ZnLWZ1bm5lbC1qc19fbGFiZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzLnN2Zy1mdW5uZWwtanMtLXZlcnRpY2FsXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWw6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Y29sb3JQZXJjZW50fTtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanMuc3ZnLWZ1bm5lbC1qcy0tdmVydGljYWxcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbFxyXG4gICAgLmxhYmVsX19zZWdtZW50LXBlcmNlbnRhZ2VzIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTA2cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTA2cHgpO1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcy5zdmctZnVubmVsLWpzLS12ZXJ0aWNhbFxyXG4gICAgLnN2Zy1mdW5uZWwtanNfX2xhYmVsXHJcbiAgICAubGFiZWxfX3NlZ21lbnQtcGVyY2VudGFnZXNcclxuICAgIC5zZWdtZW50LXBlcmNlbnRhZ2VfX2xpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcyAuc3ZnLWZ1bm5lbC1qc19fc3ViTGFiZWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzIC5zdmctZnVubmVsLWpzX19zdWJMYWJlbHMgLnN2Zy1mdW5uZWwtanNfX3N1YkxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogJHtjb2xvclZhbHVlfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX3N1YkxhYmVsc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX3N1YkxhYmVsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX3N1YkxhYmVsc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX3N1YkxhYmVsXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fc3ViTGFiZWwtLWNvbG9yIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAycHggOHB4IDJweCAwO1xyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjEwLCA5JSwgOTElLCAwLjYpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgI2luZm9Db250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbjtcclxuICB9XHJcblxyXG4gICNjb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1vdXQ7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNjb250ZW50SW5zaWRlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogc2xhdGVncmV5O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gIH1cclxuXHJcbiAgI2xpbmUtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmhvcml6b250YWwsXHJcbiAgLnZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JleTtcclxuICB9XHJcbiAgLnZlcnRpY2FsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMnB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogNTBlbTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICB9XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuYFxyXG5cclxuY29uc3QgRnVubmVsQ2hhcnQxID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL2Z1bm5lbC1ncmFwaC1qc0AxLjMuOS9kaXN0L2Nzcy9tYWluLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9mdW5uZWwtZ3JhcGgtanNAMS4zLjkvZGlzdC9jc3MvdGhlbWUubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9mdW5uZWwtZ3JhcGgtanNAMS4zLjkvZGlzdC9qcy9mdW5uZWwtZ3JhcGgubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFN2Z0NvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bm5lbFRlc3RcIj48L2Rpdj5cclxuICAgICAgPC9TdmdDb250YWluZXI+XHJcbiAgICAgIDxTY3JpcHQgc3JjPVwiLi4vc2NyaXB0cy9mdW5uZWwtY2hhcnQuanNcIj48L1NjcmlwdD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVubmVsQ2hhcnQxXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVkIiwiU2NyaXB0IiwiY29sb3JWYWx1ZSIsImNvbG9yVGl0bGUiLCJjb2xvclBlcmNlbnQiLCJjb2xvclRleHRQZXJjZW50IiwiU3ZnQ29udGFpbmVyIiwiZGl2IiwiRnVubmVsQ2hhcnQxIl0sInNvdXJjZVJvb3QiOiIifQ==