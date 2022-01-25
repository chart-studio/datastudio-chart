"use strict";
self["webpackHotUpdate_N_E"]("pages/docs/[slug]",{

/***/ "./pages/docs/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/docs/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-mdx-remote */ "./node_modules/next-mdx-remote/index.js");
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark.css */ "./node_modules/highlight.js/styles/atom-one-dark.css");
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_GraphsComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/GraphsComponents */ "./components/GraphsComponents/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\pages\\docs\\[slug].tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var GridDocs = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "slug__GridDocs",
  componentId: "sc-mk2jr0-0"
})(["display:grid;grid-template-columns:1fr 1fr;@media (max-width:48rem){grid-template-columns:1fr;}@media (max-width:70rem){}.hljs{background:var(--surface4);color:var(--text2);border-radius:0.5rem;}"]);
_c = GridDocs;
var GraphContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "slug__GraphContent",
  componentId: "sc-mk2jr0-1"
})(["height:calc(100vh - 4rem);@media (max-width:48rem){height:auto;}@media (max-width:70rem){}width:100%;padding:1rem;position:sticky;top:4rem;display:flex;justify-content:center;"]);
_c2 = GraphContent;
var DocContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "slug__DocContent",
  componentId: "sc-mk2jr0-2"
})(["margin:1rem;"]);
_c3 = DocContent;

var test = function test(_ref) {
  _s();

  var doc = _ref.doc,
      locale = _ref.locale;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: ["Beautiful design | Docs | ", doc.meta.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "alternate",
        hrefLang: locale,
        href: locale === "fr" ? router.asPath : "/en".concat(router.asPath)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GridDocs, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GraphContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_GraphsComponents__WEBPACK_IMPORTED_MODULE_4__.default, {
          val: doc.meta.chartInfo.chartComponent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DocContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
          children: doc.meta.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__.MDXRemote, _objectSpread({}, doc.source), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(test, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (test);

var _c, _c2, _c3;

$RefreshReg$(_c, "GridDocs");
$RefreshReg$(_c2, "GraphContent");
$RefreshReg$(_c3, "DocContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uNDczNWQyNmViY2QzYjQzYjhlOWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTU0sUUFBUSxHQUFHSCxxRUFBSDtBQUFBO0FBQUE7QUFBQSwyTUFBZDtLQUFNRztBQWNOLElBQU1FLFlBQVksR0FBR0wscUVBQUg7QUFBQTtBQUFBO0FBQUEsdUxBQWxCO01BQU1LO0FBY04sSUFBTUMsVUFBVSxHQUFHTixxRUFBSDtBQUFBO0FBQUE7QUFBQSxvQkFBaEI7TUFBTU07O0FBR04sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBc0Q7QUFBQTs7QUFBQSxNQUFuREMsR0FBbUQsUUFBbkRBLEdBQW1EO0FBQUEsTUFBOUNDLE1BQThDLFFBQTlDQSxNQUE4QztBQUNqRSxNQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQXhCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUEsaURBQWtDTSxHQUFHLENBQUNHLElBQUosQ0FBU0MsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLFdBQUcsRUFBQyxXQUROO0FBRUUsZ0JBQVEsRUFBRUgsTUFGWjtBQUdFLFlBQUksRUFBRUEsTUFBTSxLQUFLLElBQVgsR0FBa0JDLE1BQU0sQ0FBQ0csTUFBekIsZ0JBQXdDSCxNQUFNLENBQUNHLE1BQS9DO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBU0UsOERBQUMsUUFBRDtBQUFBLDhCQUNFLDhEQUFDLFlBQUQ7QUFBQSwrQkFDRSw4REFBQyxpRUFBRDtBQUFpQixhQUFHLEVBQUVMLEdBQUcsQ0FBQ0csSUFBSixDQUFTRyxTQUFULENBQW1CQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0UsOERBQUMsVUFBRDtBQUFBLGdDQUNFO0FBQUEsb0JBQUtQLEdBQUcsQ0FBQ0csSUFBSixDQUFTQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxzREFBRCxvQkFBZUosR0FBRyxDQUFDUSxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUEsa0JBREY7QUFzQkQsQ0F6QkQ7O0dBQU1UO1VBQ1dMOzs7O0FBMEJqQiwrREFBZUssSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kb2NzL1tzbHVnXS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgbG9jYWxlLCBNRFhEb2MgfSBmcm9tIFwiLi4vLi4vQHR5cGVzL2ludGVyZmFjZVwiXHJcbmltcG9ydCB7IGdldERvY0Zyb21TbHVnLCBnZXRTbHVncyB9IGZyb20gXCIuLi8uLi9saWIvbWR4XCJcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZS9zZXJpYWxpemVcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZVwiXHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gXCJyZWh5cGUtc2x1Z1wiXHJcbmltcG9ydCByZWh5cGVBdXRvbGlua0hlYWRpbmdzIGZyb20gXCJyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3NcIlxyXG5pbXBvcnQgcmVoeXBlSGlnaGxpZ2h0IGZyb20gXCJyZWh5cGUtaGlnaGxpZ2h0XCJcclxuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzc1wiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IEdyYXBoc0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmFwaHNDb21wb25lbnRzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuY29uc3QgR3JpZERvY3MgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MHJlbSkge1xyXG4gIH1cclxuICAuaGxqcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIH1cclxuYFxyXG5jb25zdCBHcmFwaENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzByZW0pIHtcclxuICB9XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogNHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmNvbnN0IERvY0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMXJlbTtcclxuYFxyXG5jb25zdCB0ZXN0ID0gKHsgZG9jLCBsb2NhbGUgfTogeyBkb2M6IE1EWERvYzsgbG9jYWxlOiBsb2NhbGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmVhdXRpZnVsIGRlc2lnbiB8IERvY3MgfCB7ZG9jLm1ldGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcclxuICAgICAgICAgIGhyZWZMYW5nPXtsb2NhbGV9XHJcbiAgICAgICAgICBocmVmPXtsb2NhbGUgPT09IFwiZnJcIiA/IHJvdXRlci5hc1BhdGggOiBgL2VuJHtyb3V0ZXIuYXNQYXRofWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8R3JpZERvY3M+XHJcbiAgICAgICAgPEdyYXBoQ29udGVudD5cclxuICAgICAgICAgIDxHcmFwaHNDb21wb25lbnQgdmFsPXtkb2MubWV0YS5jaGFydEluZm8uY2hhcnRDb21wb25lbnR9IC8+XHJcbiAgICAgICAgPC9HcmFwaENvbnRlbnQ+XHJcblxyXG4gICAgICAgIDxEb2NDb250ZW50PlxyXG4gICAgICAgICAgPGgxPntkb2MubWV0YS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPE1EWFJlbW90ZSB7Li4uZG9jLnNvdXJjZX0gLz5cclxuICAgICAgICA8L0RvY0NvbnRlbnQ+XHJcbiAgICAgIDwvR3JpZERvY3M+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3RcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMsIGxvY2FsZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXMgYXMgeyBzbHVnOiBzdHJpbmcgfVxyXG4gIGNvbnN0IHsgY29udGVudCwgbWV0YSB9ID0gZ2V0RG9jRnJvbVNsdWcoc2x1ZywgbG9jYWxlIGFzIFwiZnJcIiB8IFwiZW5cIilcclxuICBjb25zdCBtZHhTb3VyY2UgPSBhd2FpdCBzZXJpYWxpemUoY29udGVudCwge1xyXG4gICAgbWR4T3B0aW9uczoge1xyXG4gICAgICByZWh5cGVQbHVnaW5zOiBbXHJcbiAgICAgICAgcmVoeXBlU2x1ZyxcclxuICAgICAgICBbcmVoeXBlQXV0b2xpbmtIZWFkaW5ncywgeyBiZWhhdmlvcjogXCJ3cmFwXCIgfV0sXHJcbiAgICAgICAgcmVoeXBlSGlnaGxpZ2h0LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9KVxyXG4gIHJldHVybiB7IHByb3BzOiB7IGRvYzogeyBzb3VyY2U6IG1keFNvdXJjZSwgbWV0YSB9LCBsb2NhbGUgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoeyBsb2NhbGVzIH0pID0+IHtcclxuICBsZXQgcGF0aHM6IGFueSA9IFtdXHJcbiAgY29uc3Qgc2x1Z3MgPSBnZXRTbHVncyhcImZyXCIpXHJcbiAgc2x1Z3MuZm9yRWFjaChzbHVnID0+IHtcclxuICAgIGZvciAoY29uc3QgbG9jYWxlIG9mIGxvY2FsZXMhKSB7XHJcbiAgICAgIHBhdGhzLnB1c2goe1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2x1ZyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIk1EWFJlbW90ZSIsInN0eWxlZCIsIkdyYXBoc0NvbXBvbmVudCIsInVzZVJvdXRlciIsIkdyaWREb2NzIiwiZGl2IiwiR3JhcGhDb250ZW50IiwiRG9jQ29udGVudCIsInRlc3QiLCJkb2MiLCJsb2NhbGUiLCJyb3V0ZXIiLCJtZXRhIiwidGl0bGUiLCJhc1BhdGgiLCJjaGFydEluZm8iLCJjaGFydENvbXBvbmVudCIsInNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=