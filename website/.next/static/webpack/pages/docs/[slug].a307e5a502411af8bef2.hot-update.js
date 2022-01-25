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
})(["display:grid;grid-template-columns:1.5fr 1fr 1fr;@media (max-width:48rem){grid-template-columns:1fr;}@media (max-width:70rem){}.hljs{background:var(--surface4);color:var(--text2);border-radius:0.5rem;}"]);
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
var DataContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "slug__DataContent",
  componentId: "sc-mk2jr0-3"
})(["margin:1rem;"]);
_c4 = DataContent;

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
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "alternate",
        hrefLang: locale,
        href: locale === "fr" ? router.asPath : "/en".concat(router.asPath)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GridDocs, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GraphContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_GraphsComponents__WEBPACK_IMPORTED_MODULE_4__.default, {
          val: doc.meta.chartInfo.chartComponent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DocContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
          children: doc.meta.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__.MDXRemote, _objectSpread({}, doc.source), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DataContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("table", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Labels"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Effectifs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: "Impressions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: "12000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: "Add To Cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: "5700"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                children: "360"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(test, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (test);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "GridDocs");
$RefreshReg$(_c2, "GraphContent");
$RefreshReg$(_c3, "DocContent");
$RefreshReg$(_c4, "DataContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uYTMwN2U1YTUwMjQxMWFmOGJlZjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTU0sUUFBUSxHQUFHSCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxpTkFBZDtLQUFNRztBQWNOLElBQU1FLFlBQVksR0FBR0wscUVBQUg7QUFBQTtBQUFBO0FBQUEsdUxBQWxCO01BQU1LO0FBY04sSUFBTUMsVUFBVSxHQUFHTixxRUFBSDtBQUFBO0FBQUE7QUFBQSxvQkFBaEI7TUFBTU07QUFHTixJQUFNQyxXQUFXLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9CQUFqQjtNQUFNTzs7QUFJTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFzRDtBQUFBOztBQUFBLE1BQW5EQyxHQUFtRCxRQUFuREEsR0FBbUQ7QUFBQSxNQUE5Q0MsTUFBOEMsUUFBOUNBLE1BQThDO0FBQ2pFLE1BQU1DLE1BQU0sR0FBR1Qsc0RBQVMsRUFBeEI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxpREFBa0NPLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsV0FBRyxFQUFDLFdBRE47QUFFRSxnQkFBUSxFQUFFSCxNQUZaO0FBR0UsWUFBSSxFQUFFQSxNQUFNLEtBQUssSUFBWCxHQUFrQkMsTUFBTSxDQUFDRyxNQUF6QixnQkFBd0NILE1BQU0sQ0FBQ0csTUFBL0M7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRSw4REFBQyxRQUFEO0FBQUEsOEJBQ0UsOERBQUMsWUFBRDtBQUFBLCtCQUNFLDhEQUFDLGlFQUFEO0FBQWlCLGFBQUcsRUFBRUwsR0FBRyxDQUFDRyxJQUFKLENBQVNHLFNBQVQsQ0FBbUJDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRSw4REFBQyxVQUFEO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS1AsR0FBRyxDQUFDRyxJQUFKLENBQVNDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLHNEQUFELG9CQUFlSixHQUFHLENBQUNRLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFTRSw4REFBQyxXQUFEO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0U7QUFBQSxvQ0FDRTtBQUFBLHNDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBS0U7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQVNFO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBLGtCQURGO0FBOENELENBakREOztHQUFNVDtVQUNXTjs7OztBQWtEakIsK0RBQWVNLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGxvY2FsZSwgTURYRG9jIH0gZnJvbSBcIi4uLy4uL0B0eXBlcy9pbnRlcmZhY2VcIlxyXG5pbXBvcnQgeyBnZXREb2NGcm9tU2x1ZywgZ2V0U2x1Z3MgfSBmcm9tIFwiLi4vLi4vbGliL21keFwiXHJcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCB7IE1EWFJlbW90ZSB9IGZyb20gXCJuZXh0LW1keC1yZW1vdGVcIlxyXG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tIFwicmVoeXBlLXNsdWdcIlxyXG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tIFwicmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzXCJcclxuaW1wb3J0IHJlaHlwZUhpZ2hsaWdodCBmcm9tIFwicmVoeXBlLWhpZ2hsaWdodFwiXHJcbmltcG9ydCBcImhpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtZGFyay5jc3NcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBHcmFwaHNDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JhcGhzQ29tcG9uZW50c1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmNvbnN0IEdyaWREb2NzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgMWZyIDFmcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzByZW0pIHtcclxuICB9XHJcbiAgLmhsanMge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZTQpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB9XHJcbmBcclxuY29uc3QgR3JhcGhDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwcmVtKSB7XHJcbiAgfVxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBEb2NDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDFyZW07XHJcbmBcclxuY29uc3QgRGF0YUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMXJlbTtcclxuYFxyXG5cclxuY29uc3QgdGVzdCA9ICh7IGRvYywgbG9jYWxlIH06IHsgZG9jOiBNRFhEb2M7IGxvY2FsZTogbG9jYWxlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkJlYXV0aWZ1bCBkZXNpZ24gfCBEb2NzIHwge2RvYy5tZXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImFsdGVybmF0ZVwiXHJcbiAgICAgICAgICBocmVmTGFuZz17bG9jYWxlfVxyXG4gICAgICAgICAgaHJlZj17bG9jYWxlID09PSBcImZyXCIgPyByb3V0ZXIuYXNQYXRoIDogYC9lbiR7cm91dGVyLmFzUGF0aH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdyaWREb2NzPlxyXG4gICAgICAgIDxHcmFwaENvbnRlbnQ+XHJcbiAgICAgICAgICA8R3JhcGhzQ29tcG9uZW50IHZhbD17ZG9jLm1ldGEuY2hhcnRJbmZvLmNoYXJ0Q29tcG9uZW50fSAvPlxyXG4gICAgICAgIDwvR3JhcGhDb250ZW50PlxyXG5cclxuICAgICAgICA8RG9jQ29udGVudD5cclxuICAgICAgICAgIDxoMT57ZG9jLm1ldGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDxNRFhSZW1vdGUgey4uLmRvYy5zb3VyY2V9IC8+XHJcbiAgICAgICAgPC9Eb2NDb250ZW50PlxyXG4gICAgICAgIDxEYXRhQ29udGVudD5cclxuICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5MYWJlbHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkVmZmVjdGlmczwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5JbXByZXNzaW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+MTIwMDA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPkFkZCBUbyBDYXJ0PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD41NzAwPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5CdXk8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjM2MDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9EYXRhQ29udGVudD5cclxuICAgICAgPC9HcmlkRG9jcz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVzdFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcywgbG9jYWxlIH0pID0+IHtcclxuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcyBhcyB7IHNsdWc6IHN0cmluZyB9XHJcbiAgY29uc3QgeyBjb250ZW50LCBtZXRhIH0gPSBnZXREb2NGcm9tU2x1ZyhzbHVnLCBsb2NhbGUgYXMgXCJmclwiIHwgXCJlblwiKVxyXG4gIGNvbnN0IG1keFNvdXJjZSA9IGF3YWl0IHNlcmlhbGl6ZShjb250ZW50LCB7XHJcbiAgICBtZHhPcHRpb25zOiB7XHJcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtcclxuICAgICAgICByZWh5cGVTbHVnLFxyXG4gICAgICAgIFtyZWh5cGVBdXRvbGlua0hlYWRpbmdzLCB7IGJlaGF2aW9yOiBcIndyYXBcIiB9XSxcclxuICAgICAgICByZWh5cGVIaWdobGlnaHQsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZG9jOiB7IHNvdXJjZTogbWR4U291cmNlLCBtZXRhIH0sIGxvY2FsZSB9IH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICh7IGxvY2FsZXMgfSkgPT4ge1xyXG4gIGxldCBwYXRoczogYW55ID0gW11cclxuICBjb25zdCBzbHVncyA9IGdldFNsdWdzKFwiZnJcIilcclxuICBzbHVncy5mb3JFYWNoKHNsdWcgPT4ge1xyXG4gICAgZm9yIChjb25zdCBsb2NhbGUgb2YgbG9jYWxlcyEpIHtcclxuICAgICAgcGF0aHMucHVzaCh7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzbHVnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9jYWxlLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiTURYUmVtb3RlIiwic3R5bGVkIiwiR3JhcGhzQ29tcG9uZW50IiwidXNlUm91dGVyIiwiR3JpZERvY3MiLCJkaXYiLCJHcmFwaENvbnRlbnQiLCJEb2NDb250ZW50IiwiRGF0YUNvbnRlbnQiLCJ0ZXN0IiwiZG9jIiwibG9jYWxlIiwicm91dGVyIiwibWV0YSIsInRpdGxlIiwiYXNQYXRoIiwiY2hhcnRJbmZvIiwiY2hhcnRDb21wb25lbnQiLCJzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9