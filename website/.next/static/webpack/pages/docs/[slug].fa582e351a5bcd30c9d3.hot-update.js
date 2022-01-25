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

var colorPercent = "#9896dc"; //#E64A19

var SvgContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "funnel-chart1__SvgContainer",
  componentId: "sc-htr68v-0"
})([".svg-funnel-js{display:inline-block;position:relative;}.svg-funnel-js svg{display:block;}.svg-funnel-js .svg-funnel-js__labels{position:absolute;display:flex;width:100%;height:100%;top:0;left:0;}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__labels{flex-direction:column;}.svg-funnel-js{font-family:inherit;}.svg-funnel-js .svg-funnel-js__container{width:100%;height:100%;}.svg-funnel-js .svg-funnel-js__labels{width:100%;box-sizing:border-box;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label{flex:1 1 0;position:relative;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__value{font-size:24px;color:", ";line-height:18px;margin-bottom:6px;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__title{font-size:12px;font-weight:bold;color:", ";}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__percentage{font-size:16px;font-weight:bold;color:", ";}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages{position:absolute;top:50%;transform:translateY(-50%);width:100%;left:0;padding:8px 24px;box-sizing:border-box;background-color:rgba(8,7,48,0.8);margin-top:24px;opacity:0;transition:opacity 0.1s ease;cursor:default;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages ul{margin:0;padding:0;list-style-type:none;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages ul li{font-size:13px;line-height:16px;color:#fff;margin:18px 0;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages ul li .percentage__list-label{font-weight:bold;color:#05df9d;}.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label:hover .label__segment-percentages{opacity:1;}.svg-funnel-js:not(.svg-funnel-js--vertical){padding-top:64px;padding-bottom:16px;}.svg-funnel-js:not(.svg-funnel-js--vertical) .svg-funnel-js__label{padding-left:24px;}.svg-funnel-js:not(.svg-funnel-js--vertical) .svg-funnel-js__label:not(:first-child){border-left:1px solid ", ";}.svg-funnel-js.svg-funnel-js--vertical{padding-left:120px;padding-right:16px;}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label{padding-top:24px;}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label:not(:first-child){border-top:1px solid ", ";}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label .label__segment-percentages{margin-top:0;margin-left:106px;width:calc(100% - 106px);}.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label .label__segment-percentages .segment-percentage__list{display:flex;justify-content:space-around;}.svg-funnel-js .svg-funnel-js__subLabels{display:flex;justify-content:center;margin-top:24px;position:absolute;width:100%;left:0;}.svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel{display:flex;font-size:12px;color:", ";line-height:16px;}.svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel:not(:first-child){margin-left:16px;}.svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel .svg-funnel-js__subLabel--color{width:12px;height:12px;border-radius:50%;margin:2px 8px 2px 0;}.info{position:fixed;top:2rem;right:1rem;width:2rem;border-radius:50%;height:2rem;background-color:hsla(210,9%,91%,0.6);backdrop-filter:blur(4px);z-index:1;cursor:pointer;}#infoContent{position:fixed;top:0;right:0;width:100%;height:100%;transform:translateX(100%);transition:transform 300ms ease-in;}#content{display:flex;align-items:center;justify-content:center;height:100%;transform:translateX(100%);transition:transform 300ms ease-out;backdrop-filter:blur(10px);width:100%;}#contentInside{height:100%;width:100%;background:slategrey;opacity:0.5;padding:2em;}#line-wrapper{position:relative;transition:transform 300ms ease-out;transform:rotate(0deg);display:flex;flex-direction:column;height:100%;align-items:center;justify-content:center;}.horizontal,.vertical{width:50%;height:2px;background-color:slategrey;}.vertical{position:relative;bottom:2px;transform:rotate(90deg);}.flex{display:flex;}svg{width:60em;height:50vh;}background-color:var(--surface4);padding:1rem;"], colorValue, colorTitle, colorPercent, colorPercent, colorPercent, colorValue);
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
        lineNumber: 262,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/funnel-graph-js@1.3.9/dist/css/theme.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("script", {
        src: "https://unpkg.com/funnel-graph-js@1.3.9/dist/js/funnel-graph.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SvgContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "funnelTest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "../scripts/funnel-chart.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uZmE1ODJlMzUxYTViY2QzMGM5ZDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQUlHLFVBQVUsR0FBRyxNQUFqQixFQUF3Qjs7QUFDeEIsSUFBSUMsVUFBVSxHQUFHLFNBQWpCLEVBQTJCOztBQUMzQixJQUFJQyxZQUFZLEdBQUcsU0FBbkIsRUFBNkI7O0FBRTdCLElBQU1DLFlBQVksR0FBR0wscUVBQUg7QUFBQTtBQUFBO0FBQUEsNGdJQXFDTEUsVUFyQ0ssRUE0Q0xDLFVBNUNLLEVBb0RMQyxZQXBESyxFQW9IV0EsWUFwSFgsRUErSFVBLFlBL0hWLEVBMEpMRixVQTFKSyxDQUFsQjtLQUFNRzs7QUF5UE4sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsWUFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsWUFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBWUU7QUFBUSxXQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFlRSw4REFBQyxZQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRixlQWtCRSw4REFBQyxvREFBRDtBQUFRLFNBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQSxrQkFERjtBQXNCRCxDQXZCRDs7TUFBTUE7QUF5Qk4sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaHNDb21wb25lbnRzL2Z1bm5lbC1jaGFydDEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCJcclxuXHJcbmxldCBjb2xvclZhbHVlID0gXCJncmF5XCIgLy8jMDA4MzhGXHJcbmxldCBjb2xvclRpdGxlID0gXCIjNTViMWE1XCIgLy8jMDA4MzhGXHJcbmxldCBjb2xvclBlcmNlbnQgPSBcIiM5ODk2ZGNcIiAvLyNFNjRBMTlcclxuXHJcbmNvbnN0IFN2Z0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLnN2Zy1mdW5uZWwtanMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcyBzdmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzIC5zdmctZnVubmVsLWpzX19sYWJlbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanMuc3ZnLWZ1bm5lbC1qcy0tdmVydGljYWwgLnN2Zy1mdW5uZWwtanNfX2xhYmVscyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnN2Zy1mdW5uZWwtanMge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzIC5zdmctZnVubmVsLWpzX19jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzIC5zdmctZnVubmVsLWpzX19sYWJlbHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcyAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxzIC5zdmctZnVubmVsLWpzX19sYWJlbCB7XHJcbiAgICBmbGV4OiAxIDEgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanMgLnN2Zy1mdW5uZWwtanNfX2xhYmVscyAuc3ZnLWZ1bm5lbC1qc19fbGFiZWwgLmxhYmVsX192YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogJHtjb2xvclZhbHVlfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcyAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxzIC5zdmctZnVubmVsLWpzX19sYWJlbCAubGFiZWxfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICR7Y29sb3JUaXRsZX07XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxcclxuICAgIC5sYWJlbF9fcGVyY2VudGFnZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke2NvbG9yUGVyY2VudH07XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxcclxuICAgIC5sYWJlbF9fc2VnbWVudC1wZXJjZW50YWdlcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgNywgNDgsIDAuOCk7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX2xhYmVsc1xyXG4gICAgLnN2Zy1mdW5uZWwtanNfX2xhYmVsXHJcbiAgICAubGFiZWxfX3NlZ21lbnQtcGVyY2VudGFnZXNcclxuICAgIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxcclxuICAgIC5sYWJlbF9fc2VnbWVudC1wZXJjZW50YWdlc1xyXG4gICAgdWxcclxuICAgIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDE4cHggMDtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanNcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbHNcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbFxyXG4gICAgLmxhYmVsX19zZWdtZW50LXBlcmNlbnRhZ2VzXHJcbiAgICB1bFxyXG4gICAgbGlcclxuICAgIC5wZXJjZW50YWdlX19saXN0LWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwNWRmOWQ7XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxzXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWw6aG92ZXJcclxuICAgIC5sYWJlbF9fc2VnbWVudC1wZXJjZW50YWdlcyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qczpub3QoLnN2Zy1mdW5uZWwtanMtLXZlcnRpY2FsKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qczpub3QoLnN2Zy1mdW5uZWwtanMtLXZlcnRpY2FsKSAuc3ZnLWZ1bm5lbC1qc19fbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qczpub3QoLnN2Zy1mdW5uZWwtanMtLXZlcnRpY2FsKVxyXG4gICAgLnN2Zy1mdW5uZWwtanNfX2xhYmVsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHtjb2xvclBlcmNlbnR9O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcy5zdmctZnVubmVsLWpzLS12ZXJ0aWNhbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanMuc3ZnLWZ1bm5lbC1qcy0tdmVydGljYWwgLnN2Zy1mdW5uZWwtanNfX2xhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcy5zdmctZnVubmVsLWpzLS12ZXJ0aWNhbFxyXG4gICAgLnN2Zy1mdW5uZWwtanNfX2xhYmVsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAke2NvbG9yUGVyY2VudH07XHJcbiAgfVxyXG4gIC5zdmctZnVubmVsLWpzLnN2Zy1mdW5uZWwtanMtLXZlcnRpY2FsXHJcbiAgICAuc3ZnLWZ1bm5lbC1qc19fbGFiZWxcclxuICAgIC5sYWJlbF9fc2VnbWVudC1wZXJjZW50YWdlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwNnB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwNnB4KTtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanMuc3ZnLWZ1bm5lbC1qcy0tdmVydGljYWxcclxuICAgIC5zdmctZnVubmVsLWpzX19sYWJlbFxyXG4gICAgLmxhYmVsX19zZWdtZW50LXBlcmNlbnRhZ2VzXHJcbiAgICAuc2VnbWVudC1wZXJjZW50YWdlX19saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanMgLnN2Zy1mdW5uZWwtanNfX3N1YkxhYmVscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAuc3ZnLWZ1bm5lbC1qcyAuc3ZnLWZ1bm5lbC1qc19fc3ViTGFiZWxzIC5zdmctZnVubmVsLWpzX19zdWJMYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICR7Y29sb3JWYWx1ZX07XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanNcclxuICAgIC5zdmctZnVubmVsLWpzX19zdWJMYWJlbHNcclxuICAgIC5zdmctZnVubmVsLWpzX19zdWJMYWJlbDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICB9XHJcbiAgLnN2Zy1mdW5uZWwtanNcclxuICAgIC5zdmctZnVubmVsLWpzX19zdWJMYWJlbHNcclxuICAgIC5zdmctZnVubmVsLWpzX19zdWJMYWJlbFxyXG4gICAgLnN2Zy1mdW5uZWwtanNfX3N1YkxhYmVsLS1jb2xvciB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMnB4IDhweCAycHggMDtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIxMCwgOSUsIDkxJSwgMC42KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICNpbmZvQ29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAjY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjY29udGVudEluc2lkZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHNsYXRlZ3JleTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcblxyXG4gICNsaW5lLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ob3Jpem9udGFsLFxyXG4gIC52ZXJ0aWNhbCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyZXk7XHJcbiAgfVxyXG4gIC52ZXJ0aWNhbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB9XHJcblxyXG4gIC5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDYwZW07XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgfVxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2U0KTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5gXHJcblxyXG5jb25zdCBGdW5uZWxDaGFydDEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vZnVubmVsLWdyYXBoLWpzQDEuMy45L2Rpc3QvY3NzL21haW4ubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL2Z1bm5lbC1ncmFwaC1qc0AxLjMuOS9kaXN0L2Nzcy90aGVtZS5taW4uY3NzXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2Z1bm5lbC1ncmFwaC1qc0AxLjMuOS9kaXN0L2pzL2Z1bm5lbC1ncmFwaC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8U3ZnQ29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVubmVsVGVzdFwiPjwvZGl2PlxyXG4gICAgICA8L1N2Z0NvbnRhaW5lcj5cclxuICAgICAgPFNjcmlwdCBzcmM9XCIuLi9zY3JpcHRzL2Z1bm5lbC1jaGFydC5qc1wiPjwvU2NyaXB0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5uZWxDaGFydDFcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZWQiLCJTY3JpcHQiLCJjb2xvclZhbHVlIiwiY29sb3JUaXRsZSIsImNvbG9yUGVyY2VudCIsIlN2Z0NvbnRhaW5lciIsImRpdiIsIkZ1bm5lbENoYXJ0MSJdLCJzb3VyY2VSb290IjoiIn0=