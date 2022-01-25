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
})(["height:calc(100vh - 4rem);@media (max-width:48rem){height:auto;position:initial;margin-bottom:1rem;}@media (max-width:70rem){}width:100%;padding:1rem;position:sticky;top:4rem;display:flex;justify-content:center;"]);
_c2 = GraphContent;
var DocContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "slug__DocContent",
  componentId: "sc-mk2jr0-2"
})(["margin:1rem;h1,h2{margin:1rem 0;}h3,h4{margin:0.8rem 0;}h5,h6{margin:0.6rem 0;}p{margin-bottom:0.5rem;}"]);
_c3 = DocContent;
var DataContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "slug__DataContent",
  componentId: "sc-mk2jr0-3"
})(["margin:1rem;.tg{border-collapse:collapse;border-spacing:0;width:100%;}.tg td{border-color:var(--surface4);border-style:solid;border-width:1px;overflow:hidden;padding:10px 5px;word-break:normal;}.tg th{border-color:var(--surface4);background-color:var(--surface3);border-style:solid;border-width:1px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}.tg .tg-0lax{text-align:left;vertical-align:top;}"]);
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
        lineNumber: 101,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "alternate",
        hrefLang: locale,
        href: locale === "fr" ? router.asPath : "/en".concat(router.asPath)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GridDocs, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GraphContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_GraphsComponents__WEBPACK_IMPORTED_MODULE_4__.default, {
          val: doc.meta.chartInfo.chartComponent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DocContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
          children: doc.meta.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__.MDXRemote, _objectSpread({}, doc.source), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DataContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
          children: "Data"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
          children: "Inputs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("table", {
          className: "tg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                className: "tg-0lax",
                children: "Labels"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                className: "tg-0lax",
                children: "Effectifs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "Impressions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "12000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "Add To Cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "5700"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "360"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uZjUyM2MyMDY2YjYxNDM0Y2NhMzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTU0sUUFBUSxHQUFHSCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxpTkFBZDtLQUFNRztBQWNOLElBQU1FLFlBQVksR0FBR0wscUVBQUg7QUFBQTtBQUFBO0FBQUEsMk5BQWxCO01BQU1LO0FBZ0JOLElBQU1DLFVBQVUsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsK0dBQWhCO01BQU1NO0FBbUJOLElBQU1DLFdBQVcsR0FBR1AscUVBQUg7QUFBQTtBQUFBO0FBQUEsMmFBQWpCO01BQU1POztBQStCTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFzRDtBQUFBOztBQUFBLE1BQW5EQyxHQUFtRCxRQUFuREEsR0FBbUQ7QUFBQSxNQUE5Q0MsTUFBOEMsUUFBOUNBLE1BQThDO0FBQ2pFLE1BQU1DLE1BQU0sR0FBR1Qsc0RBQVMsRUFBeEI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxpREFBa0NPLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsV0FBRyxFQUFDLFdBRE47QUFFRSxnQkFBUSxFQUFFSCxNQUZaO0FBR0UsWUFBSSxFQUFFQSxNQUFNLEtBQUssSUFBWCxHQUFrQkMsTUFBTSxDQUFDRyxNQUF6QixnQkFBd0NILE1BQU0sQ0FBQ0csTUFBL0M7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRSw4REFBQyxRQUFEO0FBQUEsOEJBQ0UsOERBQUMsWUFBRDtBQUFBLCtCQUNFLDhEQUFDLGlFQUFEO0FBQWlCLGFBQUcsRUFBRUwsR0FBRyxDQUFDRyxJQUFKLENBQVNHLFNBQVQsQ0FBbUJDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRSw4REFBQyxVQUFEO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS1AsR0FBRyxDQUFDRyxJQUFKLENBQVNDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLHNEQUFELG9CQUFlSixHQUFHLENBQUNRLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFTRSw4REFBQyxXQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQU8sbUJBQVMsRUFBQyxJQUFqQjtBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUkseUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRTtBQUFBLG9DQUNFO0FBQUEsc0NBQ0U7QUFBSSx5QkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFJLHlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSSx5QkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGLGVBU0U7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUkseUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUEsa0JBREY7QUFnREQsQ0FuREQ7O0dBQU1UO1VBQ1dOOzs7O0FBb0RqQiwrREFBZU0sSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kb2NzL1tzbHVnXS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgbG9jYWxlLCBNRFhEb2MgfSBmcm9tIFwiLi4vLi4vQHR5cGVzL2ludGVyZmFjZVwiXHJcbmltcG9ydCB7IGdldERvY0Zyb21TbHVnLCBnZXRTbHVncyB9IGZyb20gXCIuLi8uLi9saWIvbWR4XCJcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZS9zZXJpYWxpemVcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZVwiXHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gXCJyZWh5cGUtc2x1Z1wiXHJcbmltcG9ydCByZWh5cGVBdXRvbGlua0hlYWRpbmdzIGZyb20gXCJyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3NcIlxyXG5pbXBvcnQgcmVoeXBlSGlnaGxpZ2h0IGZyb20gXCJyZWh5cGUtaGlnaGxpZ2h0XCJcclxuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzc1wiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IEdyYXBoc0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmFwaHNDb21wb25lbnRzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuY29uc3QgR3JpZERvY3MgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciAxZnIgMWZyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MHJlbSkge1xyXG4gIH1cclxuICAuaGxqcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIH1cclxuYFxyXG5jb25zdCBHcmFwaENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzByZW0pIHtcclxuICB9XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogNHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmNvbnN0IERvY0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMXJlbTtcclxuXHJcbiAgaDEsXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgfVxyXG4gIGgzLFxyXG4gIGg0IHtcclxuICAgIG1hcmdpbjogMC44cmVtIDA7XHJcbiAgfVxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogMC42cmVtIDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuYFxyXG5jb25zdCBEYXRhQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIC50ZyB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRnIHRkIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3VyZmFjZTQpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gIH1cclxuICAudGcgdGgge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlMyk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gIH1cclxuICAudGcgLnRnLTBsYXgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCB0ZXN0ID0gKHsgZG9jLCBsb2NhbGUgfTogeyBkb2M6IE1EWERvYzsgbG9jYWxlOiBsb2NhbGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmVhdXRpZnVsIGRlc2lnbiB8IERvY3MgfCB7ZG9jLm1ldGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcclxuICAgICAgICAgIGhyZWZMYW5nPXtsb2NhbGV9XHJcbiAgICAgICAgICBocmVmPXtsb2NhbGUgPT09IFwiZnJcIiA/IHJvdXRlci5hc1BhdGggOiBgL2VuJHtyb3V0ZXIuYXNQYXRofWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8R3JpZERvY3M+XHJcbiAgICAgICAgPEdyYXBoQ29udGVudD5cclxuICAgICAgICAgIDxHcmFwaHNDb21wb25lbnQgdmFsPXtkb2MubWV0YS5jaGFydEluZm8uY2hhcnRDb21wb25lbnR9IC8+XHJcbiAgICAgICAgPC9HcmFwaENvbnRlbnQ+XHJcblxyXG4gICAgICAgIDxEb2NDb250ZW50PlxyXG4gICAgICAgICAgPGgxPntkb2MubWV0YS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPE1EWFJlbW90ZSB7Li4uZG9jLnNvdXJjZX0gLz5cclxuICAgICAgICA8L0RvY0NvbnRlbnQ+XHJcbiAgICAgICAgPERhdGFDb250ZW50PlxyXG4gICAgICAgICAgPGgxPkRhdGE8L2gxPlxyXG4gICAgICAgICAgPGg2PklucHV0czwvaDY+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGdcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0Zy0wbGF4XCI+TGFiZWxzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0Zy0wbGF4XCI+RWZmZWN0aWZzPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRnLTBsYXhcIj5JbXByZXNzaW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGctMGxheFwiPjEyMDAwPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0Zy0wbGF4XCI+QWRkIFRvIENhcnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRnLTBsYXhcIj41NzAwPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0Zy0wbGF4XCI+QnV5PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0Zy0wbGF4XCI+MzYwPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L0RhdGFDb250ZW50PlxyXG4gICAgICA8L0dyaWREb2NzPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXN0XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zLCBsb2NhbGUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zIGFzIHsgc2x1Zzogc3RyaW5nIH1cclxuICBjb25zdCB7IGNvbnRlbnQsIG1ldGEgfSA9IGdldERvY0Zyb21TbHVnKHNsdWcsIGxvY2FsZSBhcyBcImZyXCIgfCBcImVuXCIpXHJcbiAgY29uc3QgbWR4U291cmNlID0gYXdhaXQgc2VyaWFsaXplKGNvbnRlbnQsIHtcclxuICAgIG1keE9wdGlvbnM6IHtcclxuICAgICAgcmVoeXBlUGx1Z2luczogW1xyXG4gICAgICAgIHJlaHlwZVNsdWcsXHJcbiAgICAgICAgW3JlaHlwZUF1dG9saW5rSGVhZGluZ3MsIHsgYmVoYXZpb3I6IFwid3JhcFwiIH1dLFxyXG4gICAgICAgIHJlaHlwZUhpZ2hsaWdodCxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSlcclxuICByZXR1cm4geyBwcm9wczogeyBkb2M6IHsgc291cmNlOiBtZHhTb3VyY2UsIG1ldGEgfSwgbG9jYWxlIH0gfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKHsgbG9jYWxlcyB9KSA9PiB7XHJcbiAgbGV0IHBhdGhzOiBhbnkgPSBbXVxyXG4gIGNvbnN0IHNsdWdzID0gZ2V0U2x1Z3MoXCJmclwiKVxyXG4gIHNsdWdzLmZvckVhY2goc2x1ZyA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGxvY2FsZSBvZiBsb2NhbGVzISkge1xyXG4gICAgICBwYXRocy5wdXNoKHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNsdWcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2NhbGUsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJNRFhSZW1vdGUiLCJzdHlsZWQiLCJHcmFwaHNDb21wb25lbnQiLCJ1c2VSb3V0ZXIiLCJHcmlkRG9jcyIsImRpdiIsIkdyYXBoQ29udGVudCIsIkRvY0NvbnRlbnQiLCJEYXRhQ29udGVudCIsInRlc3QiLCJkb2MiLCJsb2NhbGUiLCJyb3V0ZXIiLCJtZXRhIiwidGl0bGUiLCJhc1BhdGgiLCJjaGFydEluZm8iLCJjaGFydENvbXBvbmVudCIsInNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=