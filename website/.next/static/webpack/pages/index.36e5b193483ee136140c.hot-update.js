"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_layout_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Container */ "./components/layout/Container.tsx");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var _components_sections_Section1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sections/Section1 */ "./components/sections/Section1.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../locales/fr */ "./locales/fr/index.ts");
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locales/en */ "./locales/en/index.ts");
/* harmony import */ var _components_elements_VizCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/elements/VizCard */ "./components/elements/VizCard.tsx");
/* harmony import */ var _components_elements_RecapAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/elements/RecapAccount */ "./components/elements/RecapAccount.tsx");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _firebaseAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebaseAuth */ "./firebaseAuth/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();













var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)(_firebaseAuth__WEBPACK_IMPORTED_MODULE_9__.firebaseApp);
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.div.withConfig({
  displayName: "pages__Grid",
  componentId: "sc-19lelw9-0"
})(["display:grid;grid-template-columns:repeat(3,1fr);@media (max-width:48rem){grid-template-columns:1fr;gap:1rem;}gap:2rem;padding:0 0 0.5rem 0;"]);
_c = Grid;

var HomePage = function HomePage(_ref) {
  _s();

  var docs = _ref.docs,
      locale = _ref.locale;
  console.log(docs);

  var _useAuthState = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(auth),
      _useAuthState2 = (0,C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useAuthState, 3),
      user = _useAuthState2[0],
      loading = _useAuthState2[1],
      error = _useAuthState2[2];

  var t = locale === "fr" ? _locales_fr__WEBPACK_IMPORTED_MODULE_4__.default : _locales_en__WEBPACK_IMPORTED_MODULE_5__.default;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_sections_Section1__WEBPACK_IMPORTED_MODULE_3__.default, {
      t: t
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_elements_RecapAccount__WEBPACK_IMPORTED_MODULE_7__.default, {
      t: t,
      connected: user ? true : false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_layout_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Grid, {
        children: docs.map(function (val, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_elements_VizCard__WEBPACK_IMPORTED_MODULE_6__.default, {
            tool: val.meta.chartInfo.vizTool,
            desc: val.meta.chartInfo.desc,
            link: "/docs/".concat(val.meta.slug),
            link_image: val.meta.chartInfo.link_image,
            title: val.meta.chartInfo.name,
            addDate: val.meta.chartInfo.addedAt,
            t: t
          }, val.meta.chartInfo.id, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(HomePage, "VbhIZxmY9zZheJ6pmP2vZ+FB3Jc=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState];
});

_c2 = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c, _c2;

$RefreshReg$(_c, "Grid");
$RefreshReg$(_c2, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzZlNWIxOTM0ODNlZTEzNjE0MGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUEsSUFBTVUsSUFBSSxHQUFHRixzREFBTyxDQUFDQyxzREFBRCxDQUFwQjtBQUNBLElBQU1FLElBQUksR0FBR1Isc0VBQUg7QUFBQTtBQUFBO0FBQUEsb0pBQVY7S0FBTVE7O0FBV04sSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNkQ7QUFBQTs7QUFBQSxNQUExREMsSUFBMEQsUUFBMURBLElBQTBEO0FBQUEsTUFBcERDLE1BQW9ELFFBQXBEQSxNQUFvRDtBQUM1RUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7O0FBQ0Esc0JBQStCYix1RUFBWSxDQUFDUyxJQUFELENBQTNDO0FBQUE7QUFBQSxNQUFPUSxJQUFQO0FBQUEsTUFBYUMsT0FBYjtBQUFBLE1BQXNCQyxLQUF0Qjs7QUFDQSxNQUFNQyxDQUFDLEdBQUdOLE1BQU0sS0FBSyxJQUFYLEdBQWtCWCxnREFBbEIsR0FBdUJDLGdEQUFqQztBQUNBLHNCQUNFO0FBQUEsNEJBQ0UsK0RBQUMsa0VBQUQ7QUFBVSxPQUFDLEVBQUVnQjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLCtEQUFDLHNFQUFEO0FBQWMsT0FBQyxFQUFFQSxDQUFqQjtBQUFvQixlQUFTLEVBQUVILElBQUksR0FBRyxJQUFILEdBQVU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsK0RBQUMsaUVBQUQ7QUFBQSw2QkFDRSwrREFBQyxJQUFEO0FBQUEsa0JBQ0dKLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTjtBQUFBLDhCQUNSLCtEQUFDLGlFQUFEO0FBQ0UsZ0JBQUksRUFBRUQsR0FBRyxDQUFDRSxJQUFKLENBQVNDLFNBQVQsQ0FBbUJDLE9BRDNCO0FBRUUsZ0JBQUksRUFBRUosR0FBRyxDQUFDRSxJQUFKLENBQVNDLFNBQVQsQ0FBbUJFLElBRjNCO0FBR0UsZ0JBQUksa0JBQVdMLEdBQUcsQ0FBQ0UsSUFBSixDQUFTSSxJQUFwQixDQUhOO0FBSUUsc0JBQVUsRUFBRU4sR0FBRyxDQUFDRSxJQUFKLENBQVNDLFNBQVQsQ0FBbUJJLFVBSmpDO0FBS0UsaUJBQUssRUFBRVAsR0FBRyxDQUFDRSxJQUFKLENBQVNDLFNBQVQsQ0FBbUJLLElBTDVCO0FBTUUsbUJBQU8sRUFBRVIsR0FBRyxDQUFDRSxJQUFKLENBQVNDLFNBQVQsQ0FBbUJNLE9BTjlCO0FBUUUsYUFBQyxFQUFFWDtBQVJMLGFBT09FLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxTQUFULENBQW1CTyxFQVAxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQSxrQkFERjtBQXNCRCxDQTFCRDs7R0FBTXBCO1VBRTJCWjs7O01BRjNCWTs7QUE0Qk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0NvbnRhaW5lclwiXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCJcclxuaW1wb3J0IFNlY3Rpb24xIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL1NlY3Rpb24xXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgZnIgZnJvbSBcIi4uL2xvY2FsZXMvZnJcIlxyXG5pbXBvcnQgZW4gZnJvbSBcIi4uL2xvY2FsZXMvZW5cIlxyXG5pbXBvcnQgVml6Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9lbGVtZW50cy9WaXpDYXJkXCJcclxuaW1wb3J0IFJlY2FwQWNjb3VudCBmcm9tIFwiLi4vY29tcG9uZW50cy9lbGVtZW50cy9SZWNhcEFjY291bnRcIlxyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxyXG5pbXBvcnQgeyBmaXJlYmFzZUFwcCB9IGZyb20gXCIuLi9maXJlYmFzZUF1dGhcIlxyXG5pbXBvcnQgeyBnZXRBbGxEb2NzIH0gZnJvbSBcIi4uL2xpYi9tZHhcIlxyXG5pbXBvcnQgeyBJbnRlckRvY3MsIGxvY2FsZSB9IGZyb20gXCIuLi9AdHlwZXMvaW50ZXJmYWNlXCJcclxuXHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGZpcmViYXNlQXBwKVxyXG5jb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmc6IDAgMCAwLjVyZW0gMDtcclxuYFxyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoeyBkb2NzLCBsb2NhbGUgfTogeyBkb2NzOiBJbnRlckRvY3NbXTsgbG9jYWxlOiBsb2NhbGUgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRvY3MpXHJcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gIGNvbnN0IHQgPSBsb2NhbGUgPT09IFwiZnJcIiA/IGZyIDogZW5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlY3Rpb24xIHQ9e3R9IC8+XHJcbiAgICAgIDxSZWNhcEFjY291bnQgdD17dH0gY29ubmVjdGVkPXt1c2VyID8gdHJ1ZSA6IGZhbHNlfSAvPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAge2RvY3MubWFwKCh2YWwsIGkpID0+IChcclxuICAgICAgICAgICAgPFZpekNhcmRcclxuICAgICAgICAgICAgICB0b29sPXt2YWwubWV0YS5jaGFydEluZm8udml6VG9vbH1cclxuICAgICAgICAgICAgICBkZXNjPXt2YWwubWV0YS5jaGFydEluZm8uZGVzY31cclxuICAgICAgICAgICAgICBsaW5rPXtgL2RvY3MvJHt2YWwubWV0YS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgbGlua19pbWFnZT17dmFsLm1ldGEuY2hhcnRJbmZvLmxpbmtfaW1hZ2V9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3ZhbC5tZXRhLmNoYXJ0SW5mby5uYW1lfVxyXG4gICAgICAgICAgICAgIGFkZERhdGU9e3ZhbC5tZXRhLmNoYXJ0SW5mby5hZGRlZEF0fVxyXG4gICAgICAgICAgICAgIGtleT17dmFsLm1ldGEuY2hhcnRJbmZvLmlkfVxyXG4gICAgICAgICAgICAgIHQ9e3R9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgbG9jYWxlIH06IHsgbG9jYWxlOiBsb2NhbGUgfSkge1xyXG4gIGNvbnN0IGRvY3MgPSBnZXRBbGxEb2NzKGxvY2FsZSlcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZG9jcywgbG9jYWxlIH0sXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJ1c2VBdXRoU3RhdGUiLCJTZWN0aW9uMSIsInN0eWxlZCIsImZyIiwiZW4iLCJWaXpDYXJkIiwiUmVjYXBBY2NvdW50IiwiZ2V0QXV0aCIsImZpcmViYXNlQXBwIiwiYXV0aCIsIkdyaWQiLCJkaXYiLCJIb21lUGFnZSIsImRvY3MiLCJsb2NhbGUiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInQiLCJtYXAiLCJ2YWwiLCJpIiwibWV0YSIsImNoYXJ0SW5mbyIsInZpelRvb2wiLCJkZXNjIiwic2x1ZyIsImxpbmtfaW1hZ2UiLCJuYW1lIiwiYWRkZWRBdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==