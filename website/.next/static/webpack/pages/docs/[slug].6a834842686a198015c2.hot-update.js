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
})(["display:grid;grid-template-columns:1fr 1.5fr 1fr;@media (max-width:48rem){grid-template-columns:1fr;h2{text-align:center;}}@media (max-width:70rem){}.hljs{background:var(--surface4);color:var(--text2);border-radius:0.5rem;}h1,h2{margin:1rem 0;}h3,h4{margin:0.8rem 0;}h5,h6{margin:0.6rem 0;}p{margin-bottom:0.5rem;}"]);
_c = GridDocs;
var GraphContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "slug__GraphContent",
  componentId: "sc-mk2jr0-1"
})(["height:calc(100vh - 4rem);@media (max-width:48rem){height:auto;position:initial;}@media (max-width:70rem){}width:100%;padding:1rem;position:sticky;top:4rem;display:flex;flex-direction:column;"]);
_c2 = GraphContent;
var DocContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "slug__DocContent",
  componentId: "sc-mk2jr0-2"
})(["margin:1rem;"]);
_c3 = DocContent;
var DataContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "slug__DataContent",
  componentId: "sc-mk2jr0-3"
})(["margin:1rem 2rem 1rem 1rem;@media (max-width:48rem){margin:1rem;}.tg{border-collapse:collapse;border-spacing:0;width:100%;}.tg td{border-color:var(--surface4);border-style:solid;border-width:1px;overflow:hidden;padding:10px 5px;word-break:normal;}.tg th{border-color:var(--surface4);background-color:var(--surface3);border-style:solid;border-width:1px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}.tg .tg-0lax{text-align:left;vertical-align:top;}"]);
_c4 = DataContent;

var test = function test(_ref) {
  _s();

  var doc = _ref.doc,
      locale = _ref.locale;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  console.log(doc.meta.chartInfo.data, Object.keys(doc.meta.chartInfo.data[0]));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: ["Beautiful design | Docs | ", doc.meta.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "alternate",
        hrefLang: locale,
        href: locale === "fr" ? router.asPath : "/en".concat(router.asPath)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GridDocs, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GraphContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: doc.meta.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_GraphsComponents__WEBPACK_IMPORTED_MODULE_4__.default, {
          val: doc.meta.chartInfo.chartComponent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DocContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__.MDXRemote, _objectSpread({}, doc.source), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DataContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
          children: "Data"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
          children: "Inputs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
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
                lineNumber: 128,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                className: "tg-0lax",
                children: "Effectifs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "Impressions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "12000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "Add To Cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "5700"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                className: "tg-0lax",
                children: "360"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uNmE4MzQ4NDI2ODZhMTk4MDE1YzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTU0sUUFBUSxHQUFHSCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxrVUFBZDtLQUFNRztBQWdDTixJQUFNRSxZQUFZLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVNQUFsQjtNQUFNSztBQWdCTixJQUFNQyxVQUFVLEdBQUdOLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9CQUFoQjtNQUFNTTtBQUdOLElBQU1DLFdBQVcsR0FBR1AscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ2VBQWpCO01BQU1POztBQWtDTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFzRDtBQUFBOztBQUFBLE1BQW5EQyxHQUFtRCxRQUFuREEsR0FBbUQ7QUFBQSxNQUE5Q0MsTUFBOEMsUUFBOUNBLE1BQThDO0FBQ2pFLE1BQU1DLE1BQU0sR0FBR1Qsc0RBQVMsRUFBeEI7QUFDQVUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTQyxTQUFULENBQW1CQyxJQUEvQixFQUFxQ0MsTUFBTSxDQUFDQyxJQUFQLENBQVlULEdBQUcsQ0FBQ0ssSUFBSixDQUFTQyxTQUFULENBQW1CQyxJQUFuQixDQUF3QixDQUF4QixDQUFaLENBQXJDO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUEsaURBQWtDUCxHQUFHLENBQUNLLElBQUosQ0FBU0ssS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLFdBQUcsRUFBQyxXQUROO0FBRUUsZ0JBQVEsRUFBRVQsTUFGWjtBQUdFLFlBQUksRUFBRUEsTUFBTSxLQUFLLElBQVgsR0FBa0JDLE1BQU0sQ0FBQ1MsTUFBekIsZ0JBQXdDVCxNQUFNLENBQUNTLE1BQS9DO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBU0UsOERBQUMsUUFBRDtBQUFBLDhCQUNFLDhEQUFDLFlBQUQ7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLWCxHQUFHLENBQUNLLElBQUosQ0FBU0s7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsaUVBQUQ7QUFBaUIsYUFBRyxFQUFFVixHQUFHLENBQUNLLElBQUosQ0FBU0MsU0FBVCxDQUFtQk07QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FLDhEQUFDLFVBQUQ7QUFBQSwrQkFDRSw4REFBQyxzREFBRCxvQkFBZVosR0FBRyxDQUFDYSxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBU0UsOERBQUMsV0FBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFPLG1CQUFTLEVBQUMsSUFBakI7QUFBQSxrQ0FDRTtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBSSx5QkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFJLHlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0U7QUFBQSxvQ0FDRTtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSSx5QkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBS0U7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUkseUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQVNFO0FBQUEsc0NBQ0U7QUFBSSx5QkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFJLHlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBLGtCQURGO0FBZ0RELENBbkREOztHQUFNZDtVQUNXTjs7OztBQW9EakIsK0RBQWVNLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGxvY2FsZSwgTURYRG9jIH0gZnJvbSBcIi4uLy4uL0B0eXBlcy9pbnRlcmZhY2VcIlxyXG5pbXBvcnQgeyBnZXREb2NGcm9tU2x1ZywgZ2V0U2x1Z3MgfSBmcm9tIFwiLi4vLi4vbGliL21keFwiXHJcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCB7IE1EWFJlbW90ZSB9IGZyb20gXCJuZXh0LW1keC1yZW1vdGVcIlxyXG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tIFwicmVoeXBlLXNsdWdcIlxyXG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tIFwicmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzXCJcclxuaW1wb3J0IHJlaHlwZUhpZ2hsaWdodCBmcm9tIFwicmVoeXBlLWhpZ2hsaWdodFwiXHJcbmltcG9ydCBcImhpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtZGFyay5jc3NcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBHcmFwaHNDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JhcGhzQ29tcG9uZW50c1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmNvbnN0IEdyaWREb2NzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDFmcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgaDIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MHJlbSkge1xyXG4gIH1cclxuICAuaGxqcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIH1cclxuICBoMSxcclxuICBoMiB7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICB9XHJcbiAgaDMsXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luOiAwLjhyZW0gMDtcclxuICB9XHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiAwLjZyZW0gMDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEdyYXBoQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgIC8vbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwcmVtKSB7XHJcbiAgfVxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gXHJcbmNvbnN0IERvY0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMXJlbTtcclxuYFxyXG5jb25zdCBEYXRhQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAxcmVtIDJyZW0gMXJlbSAxcmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gIH1cclxuICAudGcge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50ZyB0ZCB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN1cmZhY2U0KTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICB9XHJcbiAgLnRnIHRoIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3VyZmFjZTQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZTMpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICB9XHJcbiAgLnRnIC50Zy0wbGF4IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgdGVzdCA9ICh7IGRvYywgbG9jYWxlIH06IHsgZG9jOiBNRFhEb2M7IGxvY2FsZTogbG9jYWxlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnNvbGUubG9nKGRvYy5tZXRhLmNoYXJ0SW5mby5kYXRhLCBPYmplY3Qua2V5cyhkb2MubWV0YS5jaGFydEluZm8uZGF0YVswXSkpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5CZWF1dGlmdWwgZGVzaWduIHwgRG9jcyB8IHtkb2MubWV0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJhbHRlcm5hdGVcIlxyXG4gICAgICAgICAgaHJlZkxhbmc9e2xvY2FsZX1cclxuICAgICAgICAgIGhyZWY9e2xvY2FsZSA9PT0gXCJmclwiID8gcm91dGVyLmFzUGF0aCA6IGAvZW4ke3JvdXRlci5hc1BhdGh9YH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxHcmlkRG9jcz5cclxuICAgICAgICA8R3JhcGhDb250ZW50PlxyXG4gICAgICAgICAgPGgyPntkb2MubWV0YS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPEdyYXBoc0NvbXBvbmVudCB2YWw9e2RvYy5tZXRhLmNoYXJ0SW5mby5jaGFydENvbXBvbmVudH0gLz5cclxuICAgICAgICA8L0dyYXBoQ29udGVudD5cclxuXHJcbiAgICAgICAgPERvY0NvbnRlbnQ+XHJcbiAgICAgICAgICA8TURYUmVtb3RlIHsuLi5kb2Muc291cmNlfSAvPlxyXG4gICAgICAgIDwvRG9jQ29udGVudD5cclxuICAgICAgICA8RGF0YUNvbnRlbnQ+XHJcbiAgICAgICAgICA8aDQ+RGF0YTwvaDQ+XHJcbiAgICAgICAgICA8aDY+SW5wdXRzPC9oNj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0Z1wiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRnLTBsYXhcIj5MYWJlbHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRnLTBsYXhcIj5FZmZlY3RpZnM8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGctMGxheFwiPkltcHJlc3Npb25zPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0Zy0wbGF4XCI+MTIwMDA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRnLTBsYXhcIj5BZGQgVG8gQ2FydDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGctMGxheFwiPjU3MDA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRnLTBsYXhcIj5CdXk8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRnLTBsYXhcIj4zNjA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvRGF0YUNvbnRlbnQ+XHJcbiAgICAgIDwvR3JpZERvY3M+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3RcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMsIGxvY2FsZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXMgYXMgeyBzbHVnOiBzdHJpbmcgfVxyXG4gIGNvbnN0IHsgY29udGVudCwgbWV0YSB9ID0gZ2V0RG9jRnJvbVNsdWcoc2x1ZywgbG9jYWxlIGFzIFwiZnJcIiB8IFwiZW5cIilcclxuICBjb25zdCBtZHhTb3VyY2UgPSBhd2FpdCBzZXJpYWxpemUoY29udGVudCwge1xyXG4gICAgbWR4T3B0aW9uczoge1xyXG4gICAgICByZWh5cGVQbHVnaW5zOiBbXHJcbiAgICAgICAgcmVoeXBlU2x1ZyxcclxuICAgICAgICBbcmVoeXBlQXV0b2xpbmtIZWFkaW5ncywgeyBiZWhhdmlvcjogXCJ3cmFwXCIgfV0sXHJcbiAgICAgICAgcmVoeXBlSGlnaGxpZ2h0LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9KVxyXG4gIHJldHVybiB7IHByb3BzOiB7IGRvYzogeyBzb3VyY2U6IG1keFNvdXJjZSwgbWV0YSB9LCBsb2NhbGUgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoeyBsb2NhbGVzIH0pID0+IHtcclxuICBsZXQgcGF0aHM6IGFueSA9IFtdXHJcbiAgY29uc3Qgc2x1Z3MgPSBnZXRTbHVncyhcImZyXCIpXHJcbiAgc2x1Z3MuZm9yRWFjaChzbHVnID0+IHtcclxuICAgIGZvciAoY29uc3QgbG9jYWxlIG9mIGxvY2FsZXMhKSB7XHJcbiAgICAgIHBhdGhzLnB1c2goe1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2x1ZyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIk1EWFJlbW90ZSIsInN0eWxlZCIsIkdyYXBoc0NvbXBvbmVudCIsInVzZVJvdXRlciIsIkdyaWREb2NzIiwiZGl2IiwiR3JhcGhDb250ZW50IiwiRG9jQ29udGVudCIsIkRhdGFDb250ZW50IiwidGVzdCIsImRvYyIsImxvY2FsZSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJtZXRhIiwiY2hhcnRJbmZvIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJ0aXRsZSIsImFzUGF0aCIsImNoYXJ0Q29tcG9uZW50Iiwic291cmNlIl0sInNvdXJjZVJvb3QiOiIifQ==