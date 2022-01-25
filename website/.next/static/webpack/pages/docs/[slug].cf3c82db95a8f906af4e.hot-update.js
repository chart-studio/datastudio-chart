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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\GraphsComponents\\funnel-chart1.tsx",
    _this = undefined;





var colorValue = "gray"; //#00838F

var colorTitle = "#55b1a5"; //#00838F

var colorPercent = "var(--surface3)"; //#E64A19

var colorTextPercent = "var(--text2)"; //#E64A19

var SvgContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "funnel-chart1__SvgContainer",
  componentId: "sc-htr68v-0"
})(["svg{width:50em;height:50vh;}padding:1rem;"]);
_c = SvgContainer;

var FunnelChart1 = function FunnelChart1() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/funnel-graph-js@1.3.9/dist/css/main.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/funnel-graph-js@1.3.9/dist/css/theme.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("script", {
        src: "https://unpkg.com/funnel-graph-js@1.3.9/dist/js/funnel-graph.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SvgContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "funnelTest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; //<Script src="../scripts/funnel-chart.js"></Script>


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uY2YzYzgyZGI5NWE4ZjkwNmFmNGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0EsSUFBSUUsVUFBVSxHQUFHLE1BQWpCLEVBQXdCOztBQUN4QixJQUFJQyxVQUFVLEdBQUcsU0FBakIsRUFBMkI7O0FBQzNCLElBQUlDLFlBQVksR0FBRyxpQkFBbkIsRUFBcUM7O0FBQ3JDLElBQUlDLGdCQUFnQixHQUFHLGNBQXZCLEVBQXNDOztBQUV0QyxJQUFNQyxZQUFZLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlEQUFsQjtLQUFNSzs7QUFTTixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUNFLFdBQUcsRUFBQyxZQUROO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxZQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUNFLFdBQUcsRUFBQyxZQUROO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxZQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFZRTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWVFLDhEQUFDLFlBQUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUEsa0JBREY7QUFxQkQsQ0F0QkQsRUF1QkE7OztNQXZCTUE7QUF3Qk4sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaHNDb21wb25lbnRzL2Z1bm5lbC1jaGFydDEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCJcclxuXHJcbmxldCBjb2xvclZhbHVlID0gXCJncmF5XCIgLy8jMDA4MzhGXHJcbmxldCBjb2xvclRpdGxlID0gXCIjNTViMWE1XCIgLy8jMDA4MzhGXHJcbmxldCBjb2xvclBlcmNlbnQgPSBcInZhcigtLXN1cmZhY2UzKVwiIC8vI0U2NEExOVxyXG5sZXQgY29sb3JUZXh0UGVyY2VudCA9IFwidmFyKC0tdGV4dDIpXCIgLy8jRTY0QTE5XHJcblxyXG5jb25zdCBTdmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogNTBlbTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICB9XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuYFxyXG5cclxuY29uc3QgRnVubmVsQ2hhcnQxID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL2Z1bm5lbC1ncmFwaC1qc0AxLjMuOS9kaXN0L2Nzcy9tYWluLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9mdW5uZWwtZ3JhcGgtanNAMS4zLjkvZGlzdC9jc3MvdGhlbWUubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9mdW5uZWwtZ3JhcGgtanNAMS4zLjkvZGlzdC9qcy9mdW5uZWwtZ3JhcGgubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFN2Z0NvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bm5lbFRlc3RcIj48L2Rpdj5cclxuICAgICAgPC9TdmdDb250YWluZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuLy88U2NyaXB0IHNyYz1cIi4uL3NjcmlwdHMvZnVubmVsLWNoYXJ0LmpzXCI+PC9TY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IEZ1bm5lbENoYXJ0MVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlZCIsImNvbG9yVmFsdWUiLCJjb2xvclRpdGxlIiwiY29sb3JQZXJjZW50IiwiY29sb3JUZXh0UGVyY2VudCIsIlN2Z0NvbnRhaW5lciIsImRpdiIsIkZ1bm5lbENoYXJ0MSJdLCJzb3VyY2VSb290IjoiIn0=