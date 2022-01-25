(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./Data/common.ts":
/*!************************!*\
  !*** ./Data/common.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBar": () => (/* binding */ navBar),
/* harmony export */   "seo": () => (/* binding */ seo),
/* harmony export */   "hero_section": () => (/* binding */ hero_section),
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "tooltip": () => (/* binding */ tooltip),
/* harmony export */   "autreText": () => (/* binding */ autreText),
/* harmony export */   "recap": () => (/* binding */ recap),
/* harmony export */   "charts": () => (/* binding */ charts)
/* harmony export */ });
const navBar = {
  link1: {
    fr: "Accueil",
    en: "Home"
  },
  link2: {
    fr: "Tarifs",
    en: "Pricing"
  },
  link3: {
    fr: "A propos",
    en: "About"
  },
  link4: {
    fr: "Contact",
    en: "Contact"
  }
};
const seo = {
  name: "Beautiful Dashboards",
  title: {
    fr: "Donnez plus de percutant à vos dashboards",
    en: "Make your data shine with beautiful designs"
  }
};
const hero_section = {
  title: "Beautiful Dashboards",
  option1: {
    fr: "Designs exceptionnels",
    en: "Exceptional designs"
  },
  option2: {
    fr: "Graphes paramétrables",
    en: "Customable graph"
  },
  option3: {
    fr: "30 credits à utiliser gratuitement*",
    en: "30 credits free to use*"
  }
};
const button = {
  doc: {
    fr: "Lire",
    en: "Read"
  },
  essai: {
    fr: "Essayer",
    en: "Try"
  },
  sousc: {
    fr: "Souscrire",
    en: "Subscribe"
  },
  share: {
    fr: "Partager",
    en: "Share"
  },
  account: {
    fr: "Se connecter avec google",
    en: "Connect with google"
  }
};
const tooltip = {
  doc: {
    fr: "Lire la documentation",
    en: "Read the documentation"
  },
  essai: {
    fr: "Utiliser les crédits",
    en: "Use credits"
  }
};
const autreText = {
  add: {
    fr: "Ajouté le ",
    en: "Add on "
  }
};
const recap = {
  credit: {
    fr: "crédits",
    en: "credits"
  },
  subsc: {
    fr: "souscriptions",
    en: "subscriptions"
  }
}; //{fr:"",en:""}

const charts = [{
  id: "1",
  name: {
    fr: "Graphique en entonnoir",
    en: "Funnel chart"
  },
  link_image: "/images/Beautiful-SVG-Funnel.png",
  desc: {
    fr: "Le graphique en entonnoir vous aide à voir rapidement où existent les taux d'abandon et les taux de conversion globaux dans votre tunnel.",
    en: "Funnel visualizations help you quickly see where drop-off rates and overall conversion rates in your stepped process exist."
  },
  addedAt: "2022-01-23",
  link_page: "/",
  vizTool: "Data Studio",
  chartComponent: "FunnelChart1"
}];

/***/ }),

/***/ "./components/elements/RecapAccount.tsx":
/*!**********************************************!*\
  !*** ./components/elements/RecapAccount.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_signIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/signIn */ "./helpers/signIn.ts");
/* harmony import */ var _icon_Google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/Google */ "./components/icon/Google.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\RecapAccount.tsx";






const BlockRecap = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RecapAccount__BlockRecap",
  componentId: "sc-n7iin4-0"
})(["position:sticky;top:4rem;backdrop-filter:blur(20px);padding:1rem;z-index:1;margin:0 0 2rem 0;display:flex;justify-content:center;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "RecapAccount__Button",
  componentId: "sc-n7iin4-1"
})(["background-color:var(--brand);border:none;border-radius:0.25rem;width:13rem;outline:none;&:hover{opacity:0.8;}padding:0.5rem;cursor:pointer;display:flex;align-items:center;justify-content:center;letter-spacing:0.9px;"]);
const ConnectContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RecapAccount__ConnectContainer",
  componentId: "sc-n7iin4-2"
})(["display:flex;width:16rem;justify-content:space-between;"]);
const EssayWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RecapAccount__EssayWrapper",
  componentId: "sc-n7iin4-3"
})(["display:flex;align-items:center;"]);
const SubsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RecapAccount__SubsWrapper",
  componentId: "sc-n7iin4-4"
})(["display:flex;align-items:center;"]);
const Boule = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RecapAccount__Boule",
  componentId: "sc-n7iin4-5"
})(["width:0.6rem;height:0.6rem;border-radius:50%;background-color:", ";"], props => props.theme.val === "essay" ? "var(--warning)" : "var(--secondary-fg)");
const Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RecapAccount__Text",
  componentId: "sc-n7iin4-6"
})(["margin-left:0.5rem;span{color:var(--text2);}"]);

const RecapAccount = ({
  t,
  connected
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    locale
  } = router;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(BlockRecap, {
    children: connected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ConnectContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(EssayWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Boule, {
          theme: {
            val: "essay"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Text, {
          children: ["00 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            children: ["/ 30 ", t.recap.credit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 18
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SubsWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Boule, {
          theme: {
            val: "subsc"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Text, {
          children: ["0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            children: t.recap.subsc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Button, {
      onClick: () => (0,_helpers_signIn__WEBPACK_IMPORTED_MODULE_3__.signIn)(locale),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_icon_Google__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, undefined), t.button.account]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecapAccount);

/***/ }),

/***/ "./components/elements/ToolTipWrapper.tsx":
/*!************************************************!*\
  !*** ./components/elements/ToolTipWrapper.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["children", "tooltiptext", "posRelativBottomPercent", "posRelativLeftPixel", "positionArrowPercent", "widthTooltip", "classNameTooltip"];
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\ToolTipWrapper.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const displayTooltip = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["0%{opacity:0;}25%{opacity:1;}80%{opacity:1;}100%{opacity:0;}"]);
const Div = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ToolTipWrapper__Div",
  componentId: "sc-1f6yje8-0"
})(["cursor:pointer;&:hover{.", "{visibility:visible;animation-name:", ";animation-duration:1.2s;animation-iteration-count:1;}}position:relative;user-select:none;display:inline-block;display:flex;align-items:center;justify-content:center;.", "{width:", ";font-size:11px;visibility:hidden;background-color:var(--text2);color:var(--surface2);text-align:center;padding:5px 10px;border-radius:6px;position:absolute;z-index:1;bottom:", ";left:70%;margin-left:", ";opacity:0;transition:opacity 0.3s;&::after{content:\"\";position:absolute;top:100%;left:", ";margin-left:-5px;border-width:5px;border-style:solid;border-color:var(--text2) transparent transparent transparent;}}"], props => props.theme.classNameTooltip, displayTooltip, props => props.theme.classNameTooltip, props => props.theme.widthTooltip, props => props.theme.posRelativBottomPercent, props => props.theme.posRelativLeftPixel, props => props.theme.positionArrowPercent);

const ToolTipWrapper = _ref => {
  let {
    children,
    tooltiptext,
    posRelativBottomPercent,
    posRelativLeftPixel,
    positionArrowPercent,
    widthTooltip,
    classNameTooltip
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Div, _objectSpread(_objectSpread({}, props), {}, {
    theme: {
      posRelativLeftPixel,
      positionArrowPercent,
      widthTooltip,
      classNameTooltip,
      posRelativBottomPercent
    },
    children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      className: classNameTooltip,
      children: tooltiptext
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, undefined);
}; //<span className="tooltiptext">{tooltiptext}</span>


ToolTipWrapper.defaultProps = {
  tooltiptext: "Modifier",
  posRelativBottomPercent: "125%",
  posRelativLeftPixel: "-43px",
  positionArrowPercent: "60%",
  widthTooltip: null,
  classNameTooltip: "tooltiptext"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolTipWrapper);

/***/ }),

/***/ "./components/elements/VizCard.tsx":
/*!*****************************************!*\
  !*** ./components/elements/VizCard.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_Info_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/Info_icon */ "./components/icon/Info_icon.tsx");
/* harmony import */ var _icon_Book_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/Book_icon */ "./components/icon/Book_icon.tsx");
/* harmony import */ var _ToolTipWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToolTipWrapper */ "./components/elements/ToolTipWrapper.tsx");
/* harmony import */ var _icon_Share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/Share */ "./components/icon/Share.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\VizCard.tsx";







const VizContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "VizCard__VizContainer",
  componentId: "sc-aqfnfv-0"
})(["width:100%;background-color:var(--surface3);border-radius:12px;position:relative;padding-bottom:0.5rem;border:solid 1px var(--surface2);padding:1rem;display:flex;flex-direction:column;"]);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "VizCard__Img",
  componentId: "sc-aqfnfv-1"
})(["height:13rem;width:100%;border-radius:8px;object-fit:cover;"]);
const Date = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "VizCard__Date",
  componentId: "sc-aqfnfv-2"
})(["margin:0.8rem 0.25rem;display:flex;align-items:center;justify-content:space-between;"]);
const DescText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "VizCard__DescText",
  componentId: "sc-aqfnfv-3"
})(["margin:0.5rem 0rem;"]);
const BlockButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "VizCard__BlockButton",
  componentId: "sc-aqfnfv-4"
})(["display:flex;justify-content:space-between;text-align:center;margin-top:1rem;"]);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "VizCard__ButtonContainer",
  componentId: "sc-aqfnfv-5"
})(["display:flex;align-items:center;width:30%;border:solid 1px var(--surface4);background-color:var(--surface2);border-radius:5px;justify-content:center;cursor:pointer;font-size:12px;span{margin-left:0.5rem;}:hover{opacity:0.9;}"]);
const ButtonContainerInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "VizCard__ButtonContainerInfo",
  componentId: "sc-aqfnfv-6"
})(["display:flex;align-items:center;width:30%;border:solid 1px var(--surface4);background-color:var(--warning);border-radius:5px;justify-content:center;cursor:pointer;font-size:12px;span{margin-left:0.5rem;}:hover{opacity:0.9;}"]);
const ButtonContainerSub = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "VizCard__ButtonContainerSub",
  componentId: "sc-aqfnfv-7"
})(["display:flex;align-items:center;width:32%;border:solid 1px var(--surface4);background-color:var(--secondary-fg);border-radius:5px;justify-content:center;cursor:pointer;font-size:12px;span{margin-left:0.5rem;}:hover{opacity:0.9;}"]);
const Space = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "VizCard__Space",
  componentId: "sc-aqfnfv-8"
})(["margin-top:auto;"]);
const Tool = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "VizCard__Tool",
  componentId: "sc-aqfnfv-9"
})(["position:absolute;right:1.5rem;top:1.5rem;padding:0.25rem 0.5rem;border-radius:6px;border:solid 1px var(--surface4);user-select:none;background-color:var(--surface2);opacity:0.95;"]);

const VizCard = ({
  link,
  link_image,
  title,
  desc,
  addDate,
  t,
  tool
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(VizContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Tool, {
      children: tool
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Img, {
      src: link_image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Date, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ToolTipWrapper__WEBPACK_IMPORTED_MODULE_4__.default, {
        classNameTooltip: "ShareTooltip",
        tooltiptext: t.button.share,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icon_Share__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          children: t.autreText.add
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("time", {
          dateTime: addDate,
          children: addDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DescText, {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Space, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(BlockButton, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: link,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ButtonContainer, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
            rel: "noopener noreferrer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ToolTipWrapper__WEBPACK_IMPORTED_MODULE_4__.default, {
              classNameTooltip: "DocTootip",
              posRelativLeftPixel: "-66px",
              tooltiptext: t.tooltip.doc,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icon_Book_icon__WEBPACK_IMPORTED_MODULE_3__.default, {
                width: "0.8rem"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                children: t.button.doc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 46
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ButtonContainerInfo, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ToolTipWrapper__WEBPACK_IMPORTED_MODULE_4__.default, {
          tooltiptext: t.tooltip.essai,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_icon_Info_icon__WEBPACK_IMPORTED_MODULE_2__.default, {
            width: "0.8rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: t.button.essai
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 42
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ButtonContainerSub, {
        children: t.button.sousc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VizCard);

/***/ }),

/***/ "./components/icon/Book_icon.tsx":
/*!***************************************!*\
  !*** ./components/icon/Book_icon.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\icon\\Book_icon.tsx";


const SVG = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "Book_icon__SVG",
  componentId: "sc-sw6x11-0"
})(["fill:var(--text2);cursor:pointer;"]);
const Path = styled_components__WEBPACK_IMPORTED_MODULE_0___default().path.withConfig({
  displayName: "Book_icon__Path",
  componentId: "sc-sw6x11-1"
})(["fill:var(--text2);"]);

const Book_icon = ({
  width,
  height
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    "enable-background": "new 0 0 512 512",
    viewBox: "0 0 512 512",
    width: width,
    height: height,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "M52.655 360.043c37.609 3.443 76.534 13.048 115.294 28.813V429.4L9 401.127V64.931l43.655 7.758V360.043zM255.904 436.516v8.526l-31.946-5.684v-23.275c10.714 6.078 21.345 12.643 31.883 19.686v.83C255.862 436.568 255.883 436.547 255.904 436.516z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "M257.099 117.709v318.893l-.598-.105-.344-.06-.179-.03-.075-.015-.06-.015V119.205c.015-.03.045-.06.06-.09v-1.616l.09.015.165.03.344.06.404.075L257.099 117.709zM83.761 326.553c24.644-.529 54.349 7.883 84.189 25.235v37.069c-38.76-15.765-77.686-25.37-115.294-28.813V41.159c10.279.933 20.661 2.344 31.105 4.211C83.761 45.37 83.761 326.553 83.761 326.553zM255.841 434.701v1.068c-10.538-7.043-21.169-13.608-31.883-19.686v-20.194C235.17 407.391 245.905 420.335 255.841 434.701z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "\r M257.099,117.709v318.893c-0.09-0.06-0.165-0.119-0.254-0.165c-0.119-0.09-0.224-0.165-0.344-0.24\r c-0.09-0.06-0.179-0.119-0.27-0.165c-0.105-0.09-0.224-0.165-0.329-0.224c-0.015-0.015-0.045-0.03-0.06-0.045V119.205\r c0.015-0.03,0.045-0.06,0.06-0.09v-1.721c-0.195-0.3-0.389-0.598-0.613-0.883c0.21,0.119,0.403,0.254,0.613,0.403\r c0.194,0.119,0.403,0.254,0.598,0.389c0.119,0.075,0.224,0.149,0.344,0.24c0.03,0.015,0.075,0.045,0.105,0.06\r C256.995,117.65,257.055,117.68,257.099,117.709z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "\r M255.904,117.392v1.722c-0.021,0.031-0.041,0.062-0.062,0.093V434.7c-9.936-14.365-20.671-27.309-31.883-38.812\r c-17.871-18.338-36.966-33.045-56.008-44.101c-29.84-17.352-59.545-25.764-84.189-25.235V9.151\r c47.949-1.006,115.076,31.811,165.1,98.44c2.178,2.904,4.335,5.881,6.431,8.92C255.509,116.801,255.707,117.092,255.904,117.392z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "\r M257.16,119.205v317.396c-0.015-0.03-0.045-0.06-0.06-0.09c-0.03-0.03-0.045-0.075-0.075-0.105\r c-0.09-0.119-0.165-0.254-0.254-0.374c-0.09-0.135-0.179-0.254-0.27-0.374c-0.195-0.299-0.389-0.583-0.598-0.868\r c0-0.03-0.03-0.06-0.06-0.09V119.205c0.015-0.03,0.045-0.06,0.06-0.09v-1.721c0.045,0.045,0.075,0.075,0.09,0.119\r c0.03,0.03,0.045,0.06,0.06,0.09c0.03,0.03,0.045,0.045,0.045,0.075c0.149,0.195,0.284,0.389,0.403,0.584\r c0.21,0.284,0.403,0.568,0.598,0.853C257.114,119.145,257.144,119.175,257.16,119.205z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "\r M504,64.927V401.13l-246.901,43.91v-8.528c0.015,0.03,0.045,0.06,0.06,0.09v-0.838c66.397-44.389,136.848-69.643,203.185-75.717\r V72.691L504,64.927z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "\r M257.16,119.205v317.172l-0.06,0.015l-0.075,0.015l-0.179,0.03l-0.344,0.06l-0.598,0.105V117.709l0.194-0.03l0.403-0.075\r l0.344-0.06l0.165-0.03l0.09-0.015v1.616C257.114,119.145,257.144,119.175,257.16,119.205z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "\r M460.344,41.154v318.893c-66.337,6.074-136.788,31.328-203.185,75.717v-1.062c50.598-73.174,121.857-109.215,172.081-108.153\r V45.373C439.683,43.503,450.066,42.096,460.344,41.154z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "\r M257.099,119.115c0.015,0.03,0.045,0.06,0.06,0.09v316.558c-0.015,0.015-0.045,0.03-0.06,0.045\r c-0.105,0.06-0.224,0.135-0.329,0.224c-0.09,0.045-0.179,0.105-0.27,0.165c-0.119,0.075-0.224,0.149-0.344,0.24\r c-0.09,0.045-0.165,0.105-0.254,0.165V117.709c0.045-0.03,0.105-0.06,0.149-0.105c0.03-0.015,0.075-0.045,0.105-0.06\r c0.119-0.09,0.224-0.165,0.344-0.24c0.195-0.135,0.403-0.27,0.598-0.389c0.21-0.149,0.404-0.284,0.613-0.403\r c-0.224,0.284-0.419,0.583-0.613,0.883v1.72H257.099z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "10",
      d: "M429.24 9.152v317.396c-50.224-1.062-121.483 34.978-172.081 108.153V119.205c-.015-.03-.045-.06-.06-.09v-1.721c.195-.3.389-.598.613-.883 2.11-3.037 4.249-6.015 6.448-8.917C314.175 40.96 381.291 8.15 429.24 9.152zM223.958 395.889v107.982l-28.004-28.004-28.004 28.004V351.787C186.993 362.844 206.087 377.551 223.958 395.889z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

Book_icon.defaultProps = {
  width: "1.6rem",
  height: "1.6rem"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book_icon);

/***/ }),

/***/ "./components/icon/CheckMark_icon.tsx":
/*!********************************************!*\
  !*** ./components/icon/CheckMark_icon.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["width", "height"];
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\icon\\CheckMark_icon.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const SVG = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "CheckMark_icon__SVG",
  componentId: "sc-11xpw27-0"
})(["fill:url(#gradient);cursor:pointer;"]);

const CheckMark_icon = _ref => {
  let {
    width,
    height
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SVG, {
    width: width,
    height: height,
    viewBox: "0 0 64 64",
    xmlSpace: "preserve",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("linearGradient", {
        id: "gradient",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: "0%",
          stopColor: "#05a"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("stop", {
          offset: "100%",
          stopColor: "#0a5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("use", {
      href: "#checkmark-icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

CheckMark_icon.defaultProps = {
  width: "1.6rem",
  height: "1.6rem"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckMark_icon);

/***/ }),

/***/ "./components/icon/Google.tsx":
/*!************************************!*\
  !*** ./components/icon/Google.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\icon\\Google.tsx";


const SVG = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "Google__SVG",
  componentId: "sc-103t0ig-0"
})([".st0{fill:#1a73e8;}.st1{fill:#ea4335;}.st2{fill:#4285f4;}.st3{fill:#fbbc04;}.st4{fill:#34a853;}.st5{fill:#4caf50;}.st6{fill:#1e88e5;}.st7{fill:#e53935;}.st8{fill:#c62828;}.st9{fill:#fbc02d;}.st10{fill:#1565c0;}.st11{fill:#2e7d32;}.st12{fill:#f6b704;}.st13{fill:#e54335;}.st14{fill:#4280ef;}.st15{fill:#34a353;}.st16{clip-path:url(#SVGID_2_);}.st17{fill:#188038;}.st18{opacity:0.2;fill:#ffffff;enable-background:new;}.st19{opacity:0.3;fill:#0d652d;enable-background:new;}.st20{clip-path:url(#SVGID_4_);}.st21{opacity:0.3;fill:url(#_45_shadow_1_);enable-background:new;}.st22{clip-path:url(#SVGID_6_);}.st23{fill:#fa7b17;}.st24{opacity:0.3;fill:#174ea6;enable-background:new;}.st25{opacity:0.3;fill:#a50e0e;enable-background:new;}.st26{opacity:0.3;fill:#e37400;enable-background:new;}.st27{fill:url(#Finish_mask_1_);}.st28{fill:#ffffff;}.st29{fill:#0c9d58;}.st30{opacity:0.2;fill:#004d40;enable-background:new;}.st31{opacity:0.2;fill:#3e2723;enable-background:new;}.st32{fill:#ffc107;}.st33{opacity:0.2;fill:#1a237e;enable-background:new;}.st34{opacity:0.2;}.st35{fill:#1a237e;}.st36{fill:url(#SVGID_7_);}.st37{fill:#fbbc05;}.st38{clip-path:url(#SVGID_9_);fill:#e53935;}.st39{clip-path:url(#SVGID_11_);fill:#fbc02d;}.st40{clip-path:url(#SVGID_13_);fill:#e53935;}.st41{clip-path:url(#SVGID_15_);fill:#fbc02d;}enable-background:new 0 0 150 150;cursor:pointer;margin-right:0.25rem;"]);

const Google = ({
  width,
  height
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SVG, {
    id: "Capa_1",
    version: "1.1",
    viewBox: "0 0 150 150",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width,
    height: height,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        className: "st14",
        d: "M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5   C115,101.8,120,90,120,76.1L120,76.1z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        className: "st15",
        d: "M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9   L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        className: "st12",
        d: "M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        className: "st13",
        d: "M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3   l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 165,
    columnNumber: 5
  }, undefined);
};

Google.defaultProps = {
  width: "1.6rem",
  height: "1.6rem"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Google);

/***/ }),

/***/ "./components/icon/Info_icon.tsx":
/*!***************************************!*\
  !*** ./components/icon/Info_icon.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["width", "height"];
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\icon\\Info_icon.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const SVG = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "Info_icon__SVG",
  componentId: "sc-1dl77ar-0"
})(["cursor:pointer;"]);
const Path = styled_components__WEBPACK_IMPORTED_MODULE_0___default().path.withConfig({
  displayName: "Info_icon__Path",
  componentId: "sc-1dl77ar-1"
})(["line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;white-space:normal;isolation:auto;mix-blend-mode:normal;fill:var(--text2);"]);

const Info_icon = _ref => {
  let {
    width,
    height
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
      d: "M 8.5058594 1 C 4.6457884 1 1.5058594 4.14 1.5058594 8 C 1.5058594 11.8601 4.6457884 15 8.5058594 15 C 12.36593 15 15.505859 11.8601 15.505859 8 C 15.505859 4.14 12.36593 1 8.5058594 1 z M 8.5058594 2 C 11.82549 2 14.505859 4.6804 14.505859 8 C 14.505859 11.3197 11.82549 14 8.5058594 14 C 5.1862286 14 2.5058594 11.3197 2.5058594 8 C 2.5058594 4.6804 5.1862286 2 8.5058594 2 z M 8.0058594 4 L 8.0058594 5 L 9.0058594 5 L 9.0058594 4 L 8.0058594 4 z M 8.0058594 6 L 8.0058594 12 L 9.0058594 12 L 9.0058594 6 L 8.0058594 6 z ",
      color: "#000",
      "enable-background": "accumulate",
      "font-family": "sans-serif",
      "font-weight": "400",
      overflow: "visible"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

Info_icon.defaultProps = {
  width: "1.6rem",
  height: "1.6rem"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info_icon);

/***/ }),

/***/ "./components/icon/Share.tsx":
/*!***********************************!*\
  !*** ./components/icon/Share.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\icon\\Share.tsx";


const SVG = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "Share__SVG",
  componentId: "sc-38m8vo-0"
})(["fill:var(--text2);cursor:pointer;:hover{polyline,path{fill:var(--brand);}}"]);
const Path = styled_components__WEBPACK_IMPORTED_MODULE_0___default().path.withConfig({
  displayName: "Share__Path",
  componentId: "sc-38m8vo-1"
})(["fill:var(--text2);"]);
const Polyline = styled_components__WEBPACK_IMPORTED_MODULE_0___default().polyline.withConfig({
  displayName: "Share__Polyline",
  componentId: "sc-38m8vo-2"
})(["fill:var(--text2);"]);

const Share = ({
  width,
  height
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    "enable-background": "new 0 0 64 64",
    viewBox: "0 0 64 64",
    width: width,
    height: height,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      transform: "translate(280 380)",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {
        d: "M-264.2-339.9c-4.4 0-7.9-3.5-7.9-7.9 0-4.4 3.5-7.9 7.9-7.9 4.4 0 7.9 3.5 7.9 7.9C-256.3-343.5-259.8-339.9-264.2-339.9L-264.2-339.9zM-264.2-352.8c-2.7 0-4.9 2.2-4.9 4.9 0 2.7 2.2 4.9 4.9 4.9 2.7 0 4.9-2.2 4.9-4.9C-259.3-350.5-261.5-352.8-264.2-352.8L-264.2-352.8zM-232.1-356c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9S-227.8-356-232.1-356L-232.1-356zM-232.1-368.8c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9S-229.4-368.8-232.1-368.8L-232.1-368.8zM-232.1-323.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9S-227.8-323.9-232.1-323.9L-232.1-323.9zM-232.1-336.7c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9S-229.4-336.7-232.1-336.7L-232.1-336.7z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Polyline, {
        points: "-238.6 -333.2 -259.2 -343.5 -257.8 -346.4 -237.1 -336.1 -238.6 -333.2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Polyline, {
        points: "-257.8 -349.3 -259.2 -352.1 -238.6 -362.4 -237.1 -359.6 -257.8 -349.3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

Share.defaultProps = {
  width: "1.6rem",
  height: "1.6rem"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Share);

/***/ }),

/***/ "./components/layout/Container.tsx":
/*!*****************************************!*\
  !*** ./components/layout/Container.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\layout\\Container.tsx";


const Container = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./components/sections/Section1.tsx":
/*!******************************************!*\
  !*** ./components/sections/Section1.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_CheckMark_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/CheckMark_icon */ "./components/icon/CheckMark_icon.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\sections\\Section1.tsx";



const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "Section1__Section",
  componentId: "sc-12yb8bz-0"
})(["height:72vh;display:flex;text-align:center;align-items:center;justify-content:center;h1{margin:auto auto 1rem auto;}li{display:flex;align-items:center;font-size:1.2rem;span{margin-left:0.8rem;}margin:0.5rem 0;}ul{@media (max-width:48rem){&{padding:0;}}}"]);

const Section1 = ({
  t
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Section, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: t.hero_section.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_icon_CheckMark_icon__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: t.hero_section.option1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_icon_CheckMark_icon__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: t.hero_section.option2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_icon_CheckMark_icon__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: t.hero_section.option3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section1);

/***/ }),

/***/ "./firebaseAuth/index.tsx":
/*!********************************!*\
  !*** ./firebaseAuth/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseApp": () => (/* binding */ firebaseApp),
/* harmony export */   "dbStore": () => (/* binding */ dbStore),
/* harmony export */   "storage": () => (/* binding */ storage),
/* harmony export */   "collection": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection),
/* harmony export */   "addDoc": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfig = {
  apiKey: "AIzaSyCIdDVFQQffH-pi_aITWppVJNOEx0C54mM",
  authDomain: "beautiful-dashboard-b7332.firebaseapp.com",
  projectId: "beautiful-dashboard-b7332",
  storageBucket: "beautiful-dashboard-b7332.appspot.com",
  messagingSenderId: "234219442204",
  appId: "1:234219442204:web:52f400915bbeeac8024fd9"
};
const firebaseApp = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
const dbStore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();


/***/ }),

/***/ "./helpers/signIn.ts":
/*!***************************!*\
  !*** ./helpers/signIn.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signIn": () => (/* binding */ signIn)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebaseAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebaseAuth */ "./firebaseAuth/index.tsx");


const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_firebaseAuth__WEBPACK_IMPORTED_MODULE_1__.firebaseApp);
const signIn = (locale = "en") => {
  auth.languageCode = locale;
  const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider(); //ne fonctionne pas car ferme la page de next
  // signInWithRedirect(auth, provider)
  // getRedirectResult(auth)
  //   .then(result => {
  //     const credential = GoogleAuthProvider.credentialFromResult(result!)
  //     const token = credential!.accessToken
  //     const userCredentials = result!.user
  //     console.log(userCredentials, typeof userCredentials)
  //   })
  //   .catch(error => {
  //     // Handle Errors here.
  //     const errorCode = error.code
  //     const errorMessage = error.message
  //     // The email of the user's account used.
  //     const email = error.email
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error)
  //     // ...
  //   })

  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(auth, provider).then(async result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken; // The signed-in user info.

    const userCredentials = result.user; // console.log(userCredentials, typeof userCredentials)

    const docUser = await (0,_firebaseAuth__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,_firebaseAuth__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebaseAuth__WEBPACK_IMPORTED_MODULE_1__.dbStore, "user"), {
      uid: userCredentials.uid,
      email: userCredentials.email,
      name: userCredentials.displayName,
      provider: userCredentials.providerData[0].providerId,
      photoUrl: userCredentials.photoURL,
      phoneNumber: userCredentials.phoneNumber
    });
    console.log("Document written with ID: ", docUser.id);
  }).catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message; // The email of the user's account used.

    const email = error.email; // The AuthCredential type that was used.

    const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider.credentialFromError(error); // ...

    console.log(errorCode, errorMessage, email, credential, auth);
  });
};

/***/ }),

/***/ "./lib/mdx.ts":
/*!********************!*\
  !*** ./lib/mdx.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllDocs": () => (/* binding */ getAllDocs),
/* harmony export */   "getSlugs": () => (/* binding */ getSlugs),
/* harmony export */   "getDocFromSlug": () => (/* binding */ getDocFromSlug)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! glob */ "glob");
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(glob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../locales/fr */ "./locales/fr/index.ts");
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locales/en */ "./locales/en/index.ts");






const postDir = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "/Data/Docs");
const getAllDocs = (locale = "fr") => {
  const posts = getSlugs(locale).map(slug => getDocFromSlug(slug, locale)).sort((a, b) => {
    if (a.meta.publishedAt > b.meta.publishedAt) return -1;
    if (a.meta.publishedAt < b.meta.publishedAt) return 1;
    return 0;
  });
  return posts;
};
const getSlugs = (locale = "fr") => {
  const paths = (0,glob__WEBPACK_IMPORTED_MODULE_3__.sync)(`${postDir}/*.${locale}.mdx`);
  return paths.map(path => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, locale, _ext] = fileName.split(".");
    return slug;
  });
};
const getDocFromSlug = (slug, locale = "fr") => {
  var _data$title, _data$tags, _data$publishedAt;

  const postPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(postDir, `${slug}.${locale}.mdx`);
  const source = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(postPath);
  const {
    content,
    data
  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(source);
  const t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_5__.default : _locales_fr__WEBPACK_IMPORTED_MODULE_4__.default;
  return {
    content,
    meta: {
      slug,
      title: (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : slug,
      tags: ((_data$tags = data.tags) !== null && _data$tags !== void 0 ? _data$tags : []).sort(),
      publishedAt: ((_data$publishedAt = data.publishedAt) !== null && _data$publishedAt !== void 0 ? _data$publishedAt : new Date()).toString(),
      chartInfo: t.charts.find(chart => chart.id === data.graphId)
    }
  };
};

/***/ }),

/***/ "./locales/en/index.ts":
/*!*****************************!*\
  !*** ./locales/en/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Data_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Data/common */ "./Data/common.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  button: {
    doc: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.doc.en,
    essai: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.essai.en,
    sousc: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.sousc.en,
    account: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.account.en,
    share: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.share.en
  },
  tooltip: {
    doc: _Data_common__WEBPACK_IMPORTED_MODULE_0__.tooltip.doc.en,
    essai: _Data_common__WEBPACK_IMPORTED_MODULE_0__.tooltip.essai.en
  },
  autreText: {
    add: _Data_common__WEBPACK_IMPORTED_MODULE_0__.autreText.add.en
  },
  navbar: {
    link1: _Data_common__WEBPACK_IMPORTED_MODULE_0__.navBar.link1.en,
    link2: _Data_common__WEBPACK_IMPORTED_MODULE_0__.navBar.link2.en,
    link3: _Data_common__WEBPACK_IMPORTED_MODULE_0__.navBar.link3.en,
    link4: _Data_common__WEBPACK_IMPORTED_MODULE_0__.navBar.link4.en
  },
  recap: {
    credit: _Data_common__WEBPACK_IMPORTED_MODULE_0__.recap.credit.en,
    subsc: _Data_common__WEBPACK_IMPORTED_MODULE_0__.recap.subsc.en
  },
  seo: {
    name: _Data_common__WEBPACK_IMPORTED_MODULE_0__.seo.name,
    title: _Data_common__WEBPACK_IMPORTED_MODULE_0__.seo.title.en
  },
  hero_section: {
    title: _Data_common__WEBPACK_IMPORTED_MODULE_0__.hero_section.title,
    option1: _Data_common__WEBPACK_IMPORTED_MODULE_0__.hero_section.option1.en,
    option2: _Data_common__WEBPACK_IMPORTED_MODULE_0__.hero_section.option2.en,
    option3: _Data_common__WEBPACK_IMPORTED_MODULE_0__.hero_section.option3.en
  },
  charts: _Data_common__WEBPACK_IMPORTED_MODULE_0__.charts.map(val => {
    return _objectSpread(_objectSpread({}, val), {}, {
      name: val.name["en"],
      desc: val.desc["en"]
    });
  })
});

/***/ }),

/***/ "./locales/fr/index.ts":
/*!*****************************!*\
  !*** ./locales/fr/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Data_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Data/common */ "./Data/common.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  button: {
    doc: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.doc.fr,
    essai: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.essai.fr,
    sousc: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.sousc.fr,
    account: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.account.fr,
    share: _Data_common__WEBPACK_IMPORTED_MODULE_0__.button.share.fr
  },
  tooltip: {
    doc: _Data_common__WEBPACK_IMPORTED_MODULE_0__.tooltip.doc.fr,
    essai: _Data_common__WEBPACK_IMPORTED_MODULE_0__.tooltip.essai.fr
  },
  autreText: {
    add: _Data_common__WEBPACK_IMPORTED_MODULE_0__.autreText.add.fr
  },
  navbar: {
    link1: _Data_common__WEBPACK_IMPORTED_MODULE_0__.navBar.link1.fr,
    link2: _Data_common__WEBPACK_IMPORTED_MODULE_0__.navBar.link2.fr,
    link3: _Data_common__WEBPACK_IMPORTED_MODULE_0__.navBar.link3.fr,
    link4: _Data_common__WEBPACK_IMPORTED_MODULE_0__.navBar.link4.fr
  },
  recap: {
    credit: _Data_common__WEBPACK_IMPORTED_MODULE_0__.recap.credit.fr,
    subsc: _Data_common__WEBPACK_IMPORTED_MODULE_0__.recap.subsc.fr
  },
  seo: {
    name: _Data_common__WEBPACK_IMPORTED_MODULE_0__.seo.name,
    title: _Data_common__WEBPACK_IMPORTED_MODULE_0__.seo.title.fr
  },
  hero_section: {
    title: _Data_common__WEBPACK_IMPORTED_MODULE_0__.hero_section.title,
    option1: _Data_common__WEBPACK_IMPORTED_MODULE_0__.hero_section.option1.fr,
    option2: _Data_common__WEBPACK_IMPORTED_MODULE_0__.hero_section.option2.fr,
    option3: _Data_common__WEBPACK_IMPORTED_MODULE_0__.hero_section.option3.fr
  },
  charts: _Data_common__WEBPACK_IMPORTED_MODULE_0__.charts.map(val => {
    return _objectSpread(_objectSpread({}, val), {}, {
      name: val.name["fr"],
      desc: val.desc["fr"]
    });
  })
});

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (true) {
  detectDomainLocale = __webpack_require__(/*! ../i18n/detect-domain-locale */ "../i18n/detect-domain-locale").detectDomainLocale;
}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    locale = locale || (0, _normalizeLocalePath).normalizeLocalePath(path, locales).detectedLocale;
    const detectedDomain = detectDomainLocale(domainLocales, undefined, locale);

    if (detectedDomain) {
      return `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${basePath || ''}${locale === detectedDomain.defaultLocale ? '' : `/${locale}`}${path}`;
    }

    return false;
  } else {}
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && locale !== defaultLocale && !pathLower.startsWith('/' + localeLower + '/') && pathLower !== '/' + localeLower ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && (pathLower.startsWith('/' + localeLower + '/') || pathLower === '/' + localeLower) ? (pathname.length === locale.length + 1 ? '/' : '') + path.substr(locale.length + 1) : path;
  }

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (true) {
      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        parsedAs.pathname = addBasePath(parsedAs.pathname);
        as = (0, _utils).formatWithValidation(parsedAs);
        url = addBasePath((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
      }

      let didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        var ref; // if the locale isn't configured hard navigate to show 404 page

        if (!((ref = this.locales) === null || ref === void 0 ? void 0 : ref.includes(this.locale))) {
          parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
          window.location.href = (0, _utils).formatWithValidation(parsedAs); // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      const detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        // if we are navigating to a domain locale ensure we redirect to the
        // correct domain
        if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
          const asNoBasePath = delBasePath(as);
          window.location.href = `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${addBasePath(`${this.locale === detectedDomain.defaultLocale ? '' : `/${this.locale}`}${asNoBasePath === '/' ? '' : asNoBasePath}` || '/')}`; // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      if (didNavigate) {
        return new Promise(() => {});
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (true) {
      if (options.locale === false) {
        pathname2 = (0, _normalizeLocalePath).normalizeLocalePath(pathname2, this.locales).pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
        let parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
        const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils).formatWithValidation(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_layout_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/Container */ "./components/layout/Container.tsx");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-firebase-hooks/auth */ "react-firebase-hooks/auth");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sections_Section1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sections/Section1 */ "./components/sections/Section1.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../locales/fr */ "./locales/fr/index.ts");
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locales/en */ "./locales/en/index.ts");
/* harmony import */ var _components_elements_VizCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/elements/VizCard */ "./components/elements/VizCard.tsx");
/* harmony import */ var _components_elements_RecapAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/elements/RecapAccount */ "./components/elements/RecapAccount.tsx");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebaseAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebaseAuth */ "./firebaseAuth/index.tsx");
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/mdx */ "./lib/mdx.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\pages\\index.tsx";













const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)(_firebaseAuth__WEBPACK_IMPORTED_MODULE_9__.firebaseApp);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "pages__Grid",
  componentId: "sc-19lelw9-0"
})(["display:grid;grid-template-columns:repeat(3,1fr);@media (max-width:48rem){grid-template-columns:1fr;gap:1rem;}gap:2rem;padding:0 0 0.5rem 0;"]);

const HomePage = ({
  docs,
  locale
}) => {
  console.log(docs);
  const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthState)(auth);
  const t = locale === "fr" ? _locales_fr__WEBPACK_IMPORTED_MODULE_4__.default : _locales_en__WEBPACK_IMPORTED_MODULE_5__.default;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_sections_Section1__WEBPACK_IMPORTED_MODULE_2__.default, {
      t: t
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_elements_RecapAccount__WEBPACK_IMPORTED_MODULE_7__.default, {
      t: t,
      connected: user ? true : false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_layout_Container__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Grid, {
        children: docs.map((val, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_elements_VizCard__WEBPACK_IMPORTED_MODULE_6__.default, {
          tool: val.meta.chartInfo.vizTool,
          desc: val.meta.chartInfo.desc,
          link: `/docs/${val.meta.slug}`,
          link_image: val.meta.chartInfo.link_image,
          title: val.meta.chartInfo.name,
          addDate: val.meta.chartInfo.addedAt,
          t: t
        }, val.meta.chartInfo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);
async function getStaticProps({
  locale
}) {
  const docs = (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_10__.getAllDocs)(locale);
  return {
    props: {
      docs,
      locale
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/storage");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "glob":
/*!***********************!*\
  !*** external "glob" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("glob");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/detect-domain-locale":
/*!********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/detect-domain-locale.js" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vRGF0YS9jb21tb24udHMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvZWxlbWVudHMvUmVjYXBBY2NvdW50LnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9lbGVtZW50cy9Ub29sVGlwV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvZWxlbWVudHMvVml6Q2FyZC50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvaWNvbi9Cb29rX2ljb24udHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9jb21wb25lbnRzL2ljb24vQ2hlY2tNYXJrX2ljb24udHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9jb21wb25lbnRzL2ljb24vR29vZ2xlLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9pY29uL0luZm9faWNvbi50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvaWNvbi9TaGFyZS50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvbGF5b3V0L0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvc2VjdGlvbnMvU2VjdGlvbjEudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9maXJlYmFzZUF1dGgvaW5kZXgudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9oZWxwZXJzL3NpZ25Jbi50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbGliL21keC50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbG9jYWxlcy9lbi9pbmRleC50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbG9jYWxlcy9mci9pbmRleC50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJnbG9iXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvaWdub3JlZHxDOlxcVXNlcnNcXFl2ZVpcXGdpdGh1Yi5jb21cXHZpc3VhbGlzYXRpb25cXHdlYnNpdGVcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5hdkJhciA9IHtcclxuICBsaW5rMTogeyBmcjogXCJBY2N1ZWlsXCIsIGVuOiBcIkhvbWVcIiB9LFxyXG4gIGxpbmsyOiB7IGZyOiBcIlRhcmlmc1wiLCBlbjogXCJQcmljaW5nXCIgfSxcclxuICBsaW5rMzogeyBmcjogXCJBIHByb3Bvc1wiLCBlbjogXCJBYm91dFwiIH0sXHJcbiAgbGluazQ6IHsgZnI6IFwiQ29udGFjdFwiLCBlbjogXCJDb250YWN0XCIgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbyA9IHtcclxuICBuYW1lOiBcIkJlYXV0aWZ1bCBEYXNoYm9hcmRzXCIsXHJcbiAgdGl0bGU6IHtcclxuICAgIGZyOiBcIkRvbm5leiBwbHVzIGRlIHBlcmN1dGFudCDDoCB2b3MgZGFzaGJvYXJkc1wiLFxyXG4gICAgZW46IFwiTWFrZSB5b3VyIGRhdGEgc2hpbmUgd2l0aCBiZWF1dGlmdWwgZGVzaWduc1wiLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoZXJvX3NlY3Rpb24gPSB7XHJcbiAgdGl0bGU6IFwiQmVhdXRpZnVsIERhc2hib2FyZHNcIixcclxuICBvcHRpb24xOiB7IGZyOiBcIkRlc2lnbnMgZXhjZXB0aW9ubmVsc1wiLCBlbjogXCJFeGNlcHRpb25hbCBkZXNpZ25zXCIgfSxcclxuICBvcHRpb24yOiB7IGZyOiBcIkdyYXBoZXMgcGFyYW3DqXRyYWJsZXNcIiwgZW46IFwiQ3VzdG9tYWJsZSBncmFwaFwiIH0sXHJcbiAgb3B0aW9uMzoge1xyXG4gICAgZnI6IFwiMzAgY3JlZGl0cyDDoCB1dGlsaXNlciBncmF0dWl0ZW1lbnQqXCIsXHJcbiAgICBlbjogXCIzMCBjcmVkaXRzIGZyZWUgdG8gdXNlKlwiLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBidXR0b24gPSB7XHJcbiAgZG9jOiB7IGZyOiBcIkxpcmVcIiwgZW46IFwiUmVhZFwiIH0sXHJcbiAgZXNzYWk6IHsgZnI6IFwiRXNzYXllclwiLCBlbjogXCJUcnlcIiB9LFxyXG4gIHNvdXNjOiB7IGZyOiBcIlNvdXNjcmlyZVwiLCBlbjogXCJTdWJzY3JpYmVcIiB9LFxyXG4gIHNoYXJlOiB7IGZyOiBcIlBhcnRhZ2VyXCIsIGVuOiBcIlNoYXJlXCIgfSxcclxuICBhY2NvdW50OiB7IGZyOiBcIlNlIGNvbm5lY3RlciBhdmVjIGdvb2dsZVwiLCBlbjogXCJDb25uZWN0IHdpdGggZ29vZ2xlXCIgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvb2x0aXAgPSB7XHJcbiAgZG9jOiB7IGZyOiBcIkxpcmUgbGEgZG9jdW1lbnRhdGlvblwiLCBlbjogXCJSZWFkIHRoZSBkb2N1bWVudGF0aW9uXCIgfSxcclxuICBlc3NhaTogeyBmcjogXCJVdGlsaXNlciBsZXMgY3LDqWRpdHNcIiwgZW46IFwiVXNlIGNyZWRpdHNcIiB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXV0cmVUZXh0ID0ge1xyXG4gIGFkZDogeyBmcjogXCJBam91dMOpIGxlIFwiLCBlbjogXCJBZGQgb24gXCIgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY2FwID0ge1xyXG4gIGNyZWRpdDogeyBmcjogXCJjcsOpZGl0c1wiLCBlbjogXCJjcmVkaXRzXCIgfSxcclxuICBzdWJzYzogeyBmcjogXCJzb3VzY3JpcHRpb25zXCIsIGVuOiBcInN1YnNjcmlwdGlvbnNcIiB9LFxyXG59XHJcbi8ve2ZyOlwiXCIsZW46XCJcIn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFydHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogeyBmcjogXCJHcmFwaGlxdWUgZW4gZW50b25ub2lyXCIsIGVuOiBcIkZ1bm5lbCBjaGFydFwiIH0sXHJcbiAgICBsaW5rX2ltYWdlOiBcIi9pbWFnZXMvQmVhdXRpZnVsLVNWRy1GdW5uZWwucG5nXCIsXHJcbiAgICBkZXNjOiB7XHJcbiAgICAgIGZyOiBcIkxlIGdyYXBoaXF1ZSBlbiBlbnRvbm5vaXIgdm91cyBhaWRlIMOgIHZvaXIgcmFwaWRlbWVudCBvw7kgZXhpc3RlbnQgbGVzIHRhdXggZCdhYmFuZG9uIGV0IGxlcyB0YXV4IGRlIGNvbnZlcnNpb24gZ2xvYmF1eCBkYW5zIHZvdHJlIHR1bm5lbC5cIixcclxuICAgICAgZW46IFwiRnVubmVsIHZpc3VhbGl6YXRpb25zIGhlbHAgeW91IHF1aWNrbHkgc2VlIHdoZXJlIGRyb3Atb2ZmIHJhdGVzIGFuZCBvdmVyYWxsIGNvbnZlcnNpb24gcmF0ZXMgaW4geW91ciBzdGVwcGVkIHByb2Nlc3MgZXhpc3QuXCIsXHJcbiAgICB9LFxyXG4gICAgYWRkZWRBdDogXCIyMDIyLTAxLTIzXCIsXHJcbiAgICBsaW5rX3BhZ2U6IFwiL1wiLFxyXG4gICAgdml6VG9vbDogXCJEYXRhIFN0dWRpb1wiLFxyXG4gICAgY2hhcnRDb21wb25lbnQ6IFwiRnVubmVsQ2hhcnQxXCIsXHJcbiAgfSxcclxuXVxyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyByb3V0ZXJEaXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9yb3V0ZXJEaXJcIlxyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwiLi4vLi4vaGVscGVycy9zaWduSW5cIlxyXG5pbXBvcnQgZnIgZnJvbSBcIi4uLy4uL2xvY2FsZXMvZnJcIlxyXG5pbXBvcnQgR29vZ2xlIGZyb20gXCIuLi9pY29uL0dvb2dsZVwiXHJcblxyXG5jb25zdCBCbG9ja1JlY2FwID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogNHJlbTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlMik7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB3aWR0aDogMTNyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xyXG5gXHJcblxyXG5jb25zdCBDb25uZWN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxNnJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgRXNzYXlXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgU3Vic1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBCb3VsZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDAuNnJlbTtcclxuICBoZWlnaHQ6IDAuNnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMudGhlbWUudmFsID09PSBcImVzc2F5XCIgPyBcInZhcigtLXdhcm5pbmcpXCIgOiBcInZhcigtLXNlY29uZGFyeS1mZylcIn07XHJcbmBcclxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0Mik7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFJlY2FwQWNjb3VudCA9ICh7XHJcbiAgdCxcclxuICBjb25uZWN0ZWQsXHJcbn06IHtcclxuICB0OiB0eXBlb2YgZnJcclxuICBjb25uZWN0ZWQ6IGJvb2xlYW5cclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHJvdXRlclxyXG4gIHJldHVybiAoXHJcbiAgICA8QmxvY2tSZWNhcD5cclxuICAgICAge2Nvbm5lY3RlZCA/IChcclxuICAgICAgICA8Q29ubmVjdENvbnRhaW5lcj5cclxuICAgICAgICAgIDxFc3NheVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxCb3VsZSB0aGVtZT17eyB2YWw6IFwiZXNzYXlcIiB9fSAvPlxyXG4gICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAwMCA8c3Bhbj4vIDMwIHt0LnJlY2FwLmNyZWRpdH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvRXNzYXlXcmFwcGVyPlxyXG4gICAgICAgICAgPFN1YnNXcmFwcGVyPlxyXG4gICAgICAgICAgICA8Qm91bGUgdGhlbWU9e3sgdmFsOiBcInN1YnNjXCIgfX0gLz5cclxuICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgMCA8c3Bhbj57dC5yZWNhcC5zdWJzY308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvU3Vic1dyYXBwZXI+XHJcbiAgICAgICAgPC9Db25uZWN0Q29udGFpbmVyPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKGxvY2FsZSl9PlxyXG4gICAgICAgICAgPEdvb2dsZSAvPlxyXG4gICAgICAgICAge3QuYnV0dG9uLmFjY291bnR9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L0Jsb2NrUmVjYXA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNhcEFjY291bnRcclxuIiwiaW1wb3J0IHsgRkMsIElucHV0SFRNTEF0dHJpYnV0ZXMsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmNvbnN0IGRpc3BsYXlUb29sdGlwID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAyNSUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5gXHJcblxyXG5pbnRlcmZhY2UgVG9vdFRpcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG4gIHRvb2x0aXB0ZXh0Pzogc3RyaW5nXHJcbiAgcG9zUmVsYXRpdkJvdHRvbVBlcmNlbnQ/OiBzdHJpbmdcclxuICBwb3NSZWxhdGl2TGVmdFBpeGVsPzogc3RyaW5nXHJcbiAgcG9zaXRpb25BcnJvd1BlcmNlbnQ/OiBzdHJpbmdcclxuICB3aWR0aFRvb2x0aXA/OiBzdHJpbmcgfCBudWxsXHJcbiAgY2xhc3NOYW1lVG9vbHRpcD86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIC4ke3Byb3BzID0+IHByb3BzLnRoZW1lLmNsYXNzTmFtZVRvb2x0aXB9IHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgLy9vcGFjaXR5OiAxO1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogJHtkaXNwbGF5VG9vbHRpcH07XHJcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLiR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2xhc3NOYW1lVG9vbHRpcH0ge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUud2lkdGhUb29sdGlwfTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1zdXJmYWNlMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucG9zUmVsYXRpdkJvdHRvbVBlcmNlbnR9O1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucG9zUmVsYXRpdkxlZnRQaXhlbH07XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wb3NpdGlvbkFycm93UGVyY2VudH07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0MikgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBUb29sVGlwV3JhcHBlcjogRkM8VG9vdFRpcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICB0b29sdGlwdGV4dCxcclxuICBwb3NSZWxhdGl2Qm90dG9tUGVyY2VudCxcclxuICBwb3NSZWxhdGl2TGVmdFBpeGVsLFxyXG4gIHBvc2l0aW9uQXJyb3dQZXJjZW50LFxyXG4gIHdpZHRoVG9vbHRpcCxcclxuICBjbGFzc05hbWVUb29sdGlwLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPERpdlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHRoZW1lPXt7XHJcbiAgICAgICAgcG9zUmVsYXRpdkxlZnRQaXhlbCxcclxuICAgICAgICBwb3NpdGlvbkFycm93UGVyY2VudCxcclxuICAgICAgICB3aWR0aFRvb2x0aXAsXHJcbiAgICAgICAgY2xhc3NOYW1lVG9vbHRpcCxcclxuICAgICAgICBwb3NSZWxhdGl2Qm90dG9tUGVyY2VudCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZVRvb2x0aXB9Pnt0b29sdGlwdGV4dH08L3NwYW4+XHJcbiAgICA8L0Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHRcIj57dG9vbHRpcHRleHR9PC9zcGFuPlxyXG5cclxuVG9vbFRpcFdyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRvb2x0aXB0ZXh0OiBcIk1vZGlmaWVyXCIsXHJcbiAgcG9zUmVsYXRpdkJvdHRvbVBlcmNlbnQ6IFwiMTI1JVwiLFxyXG4gIHBvc1JlbGF0aXZMZWZ0UGl4ZWw6IFwiLTQzcHhcIixcclxuICBwb3NpdGlvbkFycm93UGVyY2VudDogXCI2MCVcIixcclxuICB3aWR0aFRvb2x0aXA6IG51bGwsXHJcbiAgY2xhc3NOYW1lVG9vbHRpcDogXCJ0b29sdGlwdGV4dFwiLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sVGlwV3JhcHBlclxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgSW5mb19pY29uIGZyb20gXCIuLi9pY29uL0luZm9faWNvblwiXHJcbmltcG9ydCBCb29rX2ljb24gZnJvbSBcIi4uL2ljb24vQm9va19pY29uXCJcclxuaW1wb3J0IFRvb2xUaXBXcmFwcGVyIGZyb20gXCIuL1Rvb2xUaXBXcmFwcGVyXCJcclxuaW1wb3J0IGZyIGZyb20gXCIuLi8uLi9sb2NhbGVzL2ZyXCJcclxuaW1wb3J0IFNoYXJlIGZyb20gXCIuLi9pY29uL1NoYXJlXCJcclxuXHJcbnR5cGUgQ2FyZCA9IHtcclxuICBsaW5rOiBzdHJpbmdcclxuICBsaW5rX2ltYWdlOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZGVzYzogc3RyaW5nXHJcbiAgYWRkRGF0ZTogc3RyaW5nXHJcbiAgdG9vbDogc3RyaW5nXHJcbiAgdDogdHlwZW9mIGZyXHJcbn1cclxuY29uc3QgVml6Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zdXJmYWNlMik7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuXHJcbmNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiAxM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbmBcclxuY29uc3QgRGF0ZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwLjhyZW0gMC4yNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcbmNvbnN0IERlc2NUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAuNXJlbSAwcmVtO1xyXG5gXHJcblxyXG5jb25zdCBCbG9ja0J1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbmBcclxuY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZTIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcbiAgOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbmBcclxuY29uc3QgQnV0dG9uQ29udGFpbmVySW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc3VyZmFjZTQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcbiAgOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbmBcclxuY29uc3QgQnV0dG9uQ29udGFpbmVyU3ViID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMyJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZnKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgfVxyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFNwYWNlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG5gXHJcblxyXG5jb25zdCBUb29sID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEuNXJlbTtcclxuICB0b3A6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc3VyZmFjZTQpO1xyXG4gIC8vYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UyKTtcclxuICBvcGFjaXR5OiAwLjk1O1xyXG5gXHJcblxyXG5jb25zdCBWaXpDYXJkID0gKHsgbGluaywgbGlua19pbWFnZSwgdGl0bGUsIGRlc2MsIGFkZERhdGUsIHQsIHRvb2wgfTogQ2FyZCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Vml6Q29udGFpbmVyPlxyXG4gICAgICA8VG9vbD57dG9vbH08L1Rvb2w+XHJcbiAgICAgIDxJbWcgc3JjPXtsaW5rX2ltYWdlfSAvPlxyXG4gICAgICA8RGF0ZT5cclxuICAgICAgICA8VG9vbFRpcFdyYXBwZXJcclxuICAgICAgICAgIGNsYXNzTmFtZVRvb2x0aXA9XCJTaGFyZVRvb2x0aXBcIlxyXG4gICAgICAgICAgdG9vbHRpcHRleHQ9e3QuYnV0dG9uLnNoYXJlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTaGFyZSAvPlxyXG4gICAgICAgIDwvVG9vbFRpcFdyYXBwZXI+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57dC5hdXRyZVRleHQuYWRkfTwvc3Bhbj5cclxuICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXthZGREYXRlfT57YWRkRGF0ZX08L3RpbWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRGF0ZT5cclxuICAgICAgPGg2Pnt0aXRsZX08L2g2PlxyXG4gICAgICA8RGVzY1RleHQgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPHA+e2Rlc2N9PC9wPlxyXG4gICAgICA8L0Rlc2NUZXh0PlxyXG5cclxuICAgICAgPFNwYWNlIC8+XHJcbiAgICAgIDxCbG9ja0J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cclxuICAgICAgICAgIDxCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICA8VG9vbFRpcFdyYXBwZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVRvb2x0aXA9XCJEb2NUb290aXBcIlxyXG4gICAgICAgICAgICAgICAgcG9zUmVsYXRpdkxlZnRQaXhlbD1cIi02NnB4XCJcclxuICAgICAgICAgICAgICAgIHRvb2x0aXB0ZXh0PXt0LnRvb2x0aXAuZG9jfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCb29rX2ljb24gd2lkdGg9XCIwLjhyZW1cIiAvPiA8c3Bhbj57dC5idXR0b24uZG9jfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2xUaXBXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxCdXR0b25Db250YWluZXJJbmZvPlxyXG4gICAgICAgICAgPFRvb2xUaXBXcmFwcGVyIHRvb2x0aXB0ZXh0PXt0LnRvb2x0aXAuZXNzYWl9PlxyXG4gICAgICAgICAgICA8SW5mb19pY29uIHdpZHRoPVwiMC44cmVtXCIgLz4gPHNwYW4+e3QuYnV0dG9uLmVzc2FpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvVG9vbFRpcFdyYXBwZXI+XHJcbiAgICAgICAgPC9CdXR0b25Db250YWluZXJJbmZvPlxyXG4gICAgICAgIDxCdXR0b25Db250YWluZXJTdWI+e3QuYnV0dG9uLnNvdXNjfTwvQnV0dG9uQ29udGFpbmVyU3ViPlxyXG4gICAgICA8L0Jsb2NrQnV0dG9uPlxyXG4gICAgPC9WaXpDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaXpDYXJkXHJcbiIsImltcG9ydCB7IElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG50eXBlIEljb24gPSB7XHJcbiAgd2lkdGg/OiBzdHJpbmdcclxuICBoZWlnaHQ/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgU1ZHID0gc3R5bGVkLnN2Z2BcclxuICBmaWxsOiB2YXIoLS10ZXh0Mik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5jb25zdCBQYXRoID0gc3R5bGVkLnBhdGhgXHJcbiAgLy9zdHJva2U6IHZhcigtLXRleHQxKTtcclxuICBmaWxsOiB2YXIoLS10ZXh0Mik7XHJcbmBcclxuXHJcbmNvbnN0IEJvb2tfaWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSWNvbikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U1ZHXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICA+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgZD1cIk01Mi42NTUgMzYwLjA0M2MzNy42MDkgMy40NDMgNzYuNTM0IDEzLjA0OCAxMTUuMjk0IDI4LjgxM1Y0MjkuNEw5IDQwMS4xMjdWNjQuOTMxbDQzLjY1NSA3Ljc1OFYzNjAuMDQzek0yNTUuOTA0IDQzNi41MTZ2OC41MjZsLTMxLjk0Ni01LjY4NHYtMjMuMjc1YzEwLjcxNCA2LjA3OCAyMS4zNDUgMTIuNjQzIDMxLjg4MyAxOS42ODZ2LjgzQzI1NS44NjIgNDM2LjU2OCAyNTUuODgzIDQzNi41NDcgMjU1LjkwNCA0MzYuNTE2elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgZD1cIk0yNTcuMDk5IDExNy43MDl2MzE4Ljg5M2wtLjU5OC0uMTA1LS4zNDQtLjA2LS4xNzktLjAzLS4wNzUtLjAxNS0uMDYtLjAxNVYxMTkuMjA1Yy4wMTUtLjAzLjA0NS0uMDYuMDYtLjA5di0xLjYxNmwuMDkuMDE1LjE2NS4wMy4zNDQuMDYuNDA0LjA3NUwyNTcuMDk5IDExNy43MDl6TTgzLjc2MSAzMjYuNTUzYzI0LjY0NC0uNTI5IDU0LjM0OSA3Ljg4MyA4NC4xODkgMjUuMjM1djM3LjA2OWMtMzguNzYtMTUuNzY1LTc3LjY4Ni0yNS4zNy0xMTUuMjk0LTI4LjgxM1Y0MS4xNTljMTAuMjc5LjkzMyAyMC42NjEgMi4zNDQgMzEuMTA1IDQuMjExQzgzLjc2MSA0NS4zNyA4My43NjEgMzI2LjU1MyA4My43NjEgMzI2LjU1M3pNMjU1Ljg0MSA0MzQuNzAxdjEuMDY4Yy0xMC41MzgtNy4wNDMtMjEuMTY5LTEzLjYwOC0zMS44ODMtMTkuNjg2di0yMC4xOTRDMjM1LjE3IDQwNy4zOTEgMjQ1LjkwNSA0MjAuMzM1IDI1NS44NDEgNDM0LjcwMXpcIlxyXG4gICAgICAvPlxyXG4gICAgICA8UGF0aFxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMTBcIlxyXG4gICAgICAgIGQ9XCJcclxuXHRcdFx0TTI1Ny4wOTksMTE3LjcwOXYzMTguODkzYy0wLjA5LTAuMDYtMC4xNjUtMC4xMTktMC4yNTQtMC4xNjVjLTAuMTE5LTAuMDktMC4yMjQtMC4xNjUtMC4zNDQtMC4yNFxyXG5cdFx0XHRjLTAuMDktMC4wNi0wLjE3OS0wLjExOS0wLjI3LTAuMTY1Yy0wLjEwNS0wLjA5LTAuMjI0LTAuMTY1LTAuMzI5LTAuMjI0Yy0wLjAxNS0wLjAxNS0wLjA0NS0wLjAzLTAuMDYtMC4wNDVWMTE5LjIwNVxyXG5cdFx0XHRjMC4wMTUtMC4wMywwLjA0NS0wLjA2LDAuMDYtMC4wOXYtMS43MjFjLTAuMTk1LTAuMy0wLjM4OS0wLjU5OC0wLjYxMy0wLjg4M2MwLjIxLDAuMTE5LDAuNDAzLDAuMjU0LDAuNjEzLDAuNDAzXHJcblx0XHRcdGMwLjE5NCwwLjExOSwwLjQwMywwLjI1NCwwLjU5OCwwLjM4OWMwLjExOSwwLjA3NSwwLjIyNCwwLjE0OSwwLjM0NCwwLjI0YzAuMDMsMC4wMTUsMC4wNzUsMC4wNDUsMC4xMDUsMC4wNlxyXG5cdFx0XHRDMjU2Ljk5NSwxMTcuNjUsMjU3LjA1NSwxMTcuNjgsMjU3LjA5OSwxMTcuNzA5elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgZD1cIlxyXG5cdFx0XHRNMjU1LjkwNCwxMTcuMzkydjEuNzIyYy0wLjAyMSwwLjAzMS0wLjA0MSwwLjA2Mi0wLjA2MiwwLjA5M1Y0MzQuN2MtOS45MzYtMTQuMzY1LTIwLjY3MS0yNy4zMDktMzEuODgzLTM4LjgxMlxyXG5cdFx0XHRjLTE3Ljg3MS0xOC4zMzgtMzYuOTY2LTMzLjA0NS01Ni4wMDgtNDQuMTAxYy0yOS44NC0xNy4zNTItNTkuNTQ1LTI1Ljc2NC04NC4xODktMjUuMjM1VjkuMTUxXHJcblx0XHRcdGM0Ny45NDktMS4wMDYsMTE1LjA3NiwzMS44MTEsMTY1LjEsOTguNDRjMi4xNzgsMi45MDQsNC4zMzUsNS44ODEsNi40MzEsOC45MkMyNTUuNTA5LDExNi44MDEsMjU1LjcwNywxMTcuMDkyLDI1NS45MDQsMTE3LjM5MnpcIlxyXG4gICAgICAvPlxyXG4gICAgICA8UGF0aFxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMTBcIlxyXG4gICAgICAgIGQ9XCJcclxuXHRcdFx0TTI1Ny4xNiwxMTkuMjA1djMxNy4zOTZjLTAuMDE1LTAuMDMtMC4wNDUtMC4wNi0wLjA2LTAuMDljLTAuMDMtMC4wMy0wLjA0NS0wLjA3NS0wLjA3NS0wLjEwNVxyXG5cdFx0XHRjLTAuMDktMC4xMTktMC4xNjUtMC4yNTQtMC4yNTQtMC4zNzRjLTAuMDktMC4xMzUtMC4xNzktMC4yNTQtMC4yNy0wLjM3NGMtMC4xOTUtMC4yOTktMC4zODktMC41ODMtMC41OTgtMC44NjhcclxuXHRcdFx0YzAtMC4wMy0wLjAzLTAuMDYtMC4wNi0wLjA5VjExOS4yMDVjMC4wMTUtMC4wMywwLjA0NS0wLjA2LDAuMDYtMC4wOXYtMS43MjFjMC4wNDUsMC4wNDUsMC4wNzUsMC4wNzUsMC4wOSwwLjExOVxyXG5cdFx0XHRjMC4wMywwLjAzLDAuMDQ1LDAuMDYsMC4wNiwwLjA5YzAuMDMsMC4wMywwLjA0NSwwLjA0NSwwLjA0NSwwLjA3NWMwLjE0OSwwLjE5NSwwLjI4NCwwLjM4OSwwLjQwMywwLjU4NFxyXG5cdFx0XHRjMC4yMSwwLjI4NCwwLjQwMywwLjU2OCwwLjU5OCwwLjg1M0MyNTcuMTE0LDExOS4xNDUsMjU3LjE0NCwxMTkuMTc1LDI1Ny4xNiwxMTkuMjA1elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgZD1cIlxyXG5cdFx0XHRNNTA0LDY0LjkyN1Y0MDEuMTNsLTI0Ni45MDEsNDMuOTF2LTguNTI4YzAuMDE1LDAuMDMsMC4wNDUsMC4wNiwwLjA2LDAuMDl2LTAuODM4YzY2LjM5Ny00NC4zODksMTM2Ljg0OC02OS42NDMsMjAzLjE4NS03NS43MTdcclxuXHRcdFx0VjcyLjY5MUw1MDQsNjQuOTI3elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgZD1cIlxyXG5cdFx0XHRNMjU3LjE2LDExOS4yMDV2MzE3LjE3MmwtMC4wNiwwLjAxNWwtMC4wNzUsMC4wMTVsLTAuMTc5LDAuMDNsLTAuMzQ0LDAuMDZsLTAuNTk4LDAuMTA1VjExNy43MDlsMC4xOTQtMC4wM2wwLjQwMy0wLjA3NVxyXG5cdFx0XHRsMC4zNDQtMC4wNmwwLjE2NS0wLjAzbDAuMDktMC4wMTV2MS42MTZDMjU3LjExNCwxMTkuMTQ1LDI1Ny4xNDQsMTE5LjE3NSwyNTcuMTYsMTE5LjIwNXpcIlxyXG4gICAgICAvPlxyXG4gICAgICA8UGF0aFxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMTBcIlxyXG4gICAgICAgIGQ9XCJcclxuXHRcdFx0TTQ2MC4zNDQsNDEuMTU0djMxOC44OTNjLTY2LjMzNyw2LjA3NC0xMzYuNzg4LDMxLjMyOC0yMDMuMTg1LDc1LjcxN3YtMS4wNjJjNTAuNTk4LTczLjE3NCwxMjEuODU3LTEwOS4yMTUsMTcyLjA4MS0xMDguMTUzXHJcblx0XHRcdFY0NS4zNzNDNDM5LjY4Myw0My41MDMsNDUwLjA2Niw0Mi4wOTYsNDYwLjM0NCw0MS4xNTR6XCJcclxuICAgICAgLz5cclxuICAgICAgPFBhdGhcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEwXCJcclxuICAgICAgICBkPVwiXHJcblx0XHRcdE0yNTcuMDk5LDExOS4xMTVjMC4wMTUsMC4wMywwLjA0NSwwLjA2LDAuMDYsMC4wOXYzMTYuNTU4Yy0wLjAxNSwwLjAxNS0wLjA0NSwwLjAzLTAuMDYsMC4wNDVcclxuXHRcdFx0Yy0wLjEwNSwwLjA2LTAuMjI0LDAuMTM1LTAuMzI5LDAuMjI0Yy0wLjA5LDAuMDQ1LTAuMTc5LDAuMTA1LTAuMjcsMC4xNjVjLTAuMTE5LDAuMDc1LTAuMjI0LDAuMTQ5LTAuMzQ0LDAuMjRcclxuXHRcdFx0Yy0wLjA5LDAuMDQ1LTAuMTY1LDAuMTA1LTAuMjU0LDAuMTY1VjExNy43MDljMC4wNDUtMC4wMywwLjEwNS0wLjA2LDAuMTQ5LTAuMTA1YzAuMDMtMC4wMTUsMC4wNzUtMC4wNDUsMC4xMDUtMC4wNlxyXG5cdFx0XHRjMC4xMTktMC4wOSwwLjIyNC0wLjE2NSwwLjM0NC0wLjI0YzAuMTk1LTAuMTM1LDAuNDAzLTAuMjcsMC41OTgtMC4zODljMC4yMS0wLjE0OSwwLjQwNC0wLjI4NCwwLjYxMy0wLjQwM1xyXG5cdFx0XHRjLTAuMjI0LDAuMjg0LTAuNDE5LDAuNTgzLTAuNjEzLDAuODgzdjEuNzJIMjU3LjA5OXpcIlxyXG4gICAgICAvPlxyXG4gICAgICA8UGF0aFxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMTBcIlxyXG4gICAgICAgIGQ9XCJNNDI5LjI0IDkuMTUydjMxNy4zOTZjLTUwLjIyNC0xLjA2Mi0xMjEuNDgzIDM0Ljk3OC0xNzIuMDgxIDEwOC4xNTNWMTE5LjIwNWMtLjAxNS0uMDMtLjA0NS0uMDYtLjA2LS4wOXYtMS43MjFjLjE5NS0uMy4zODktLjU5OC42MTMtLjg4MyAyLjExLTMuMDM3IDQuMjQ5LTYuMDE1IDYuNDQ4LTguOTE3QzMxNC4xNzUgNDAuOTYgMzgxLjI5MSA4LjE1IDQyOS4yNCA5LjE1MnpNMjIzLjk1OCAzOTUuODg5djEwNy45ODJsLTI4LjAwNC0yOC4wMDQtMjguMDA0IDI4LjAwNFYzNTEuNzg3QzE4Ni45OTMgMzYyLjg0NCAyMDYuMDg3IDM3Ny41NTEgMjIzLjk1OCAzOTUuODg5elwiXHJcbiAgICAgIC8+XHJcbiAgICA8L1NWRz5cclxuICApXHJcbn1cclxuXHJcbkJvb2tfaWNvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6IFwiMS42cmVtXCIsXHJcbiAgaGVpZ2h0OiBcIjEuNnJlbVwiLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rX2ljb25cclxuIiwiaW1wb3J0IHsgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmludGVyZmFjZSBJY29uIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xyXG4gIHdpZHRoPzogc3RyaW5nXHJcbiAgaGVpZ2h0Pzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFNWRyA9IHN0eWxlZC5zdmdgXHJcbiAgZmlsbDogdXJsKCNncmFkaWVudCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5jb25zdCBDaGVja01hcmtfaWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQsIC4uLnByb3BzIH06IEljb24pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNWRyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIHgxPVwiMCVcIiB5MT1cIjAlXCIgeDI9XCIxMDAlXCIgeTI9XCIwJVwiPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjMDVhXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjMGE1XCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDx1c2UgaHJlZj1cIiNjaGVja21hcmstaWNvblwiIC8+XHJcbiAgICA8L1NWRz5cclxuICApXHJcbn1cclxuXHJcbkNoZWNrTWFya19pY29uLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogXCIxLjZyZW1cIixcclxuICBoZWlnaHQ6IFwiMS42cmVtXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrTWFya19pY29uXHJcbiIsImltcG9ydCB7IElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG50eXBlIEljb24gPSB7XHJcbiAgd2lkdGg/OiBzdHJpbmdcclxuICBoZWlnaHQ/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgU1ZHID0gc3R5bGVkLnN2Z2BcclxuICAuc3QwIHtcclxuICAgIGZpbGw6ICMxYTczZTg7XHJcbiAgfVxyXG4gIC5zdDEge1xyXG4gICAgZmlsbDogI2VhNDMzNTtcclxuICB9XHJcbiAgLnN0MiB7XHJcbiAgICBmaWxsOiAjNDI4NWY0O1xyXG4gIH1cclxuICAuc3QzIHtcclxuICAgIGZpbGw6ICNmYmJjMDQ7XHJcbiAgfVxyXG4gIC5zdDQge1xyXG4gICAgZmlsbDogIzM0YTg1MztcclxuICB9XHJcbiAgLnN0NSB7XHJcbiAgICBmaWxsOiAjNGNhZjUwO1xyXG4gIH1cclxuICAuc3Q2IHtcclxuICAgIGZpbGw6ICMxZTg4ZTU7XHJcbiAgfVxyXG4gIC5zdDcge1xyXG4gICAgZmlsbDogI2U1MzkzNTtcclxuICB9XHJcbiAgLnN0OCB7XHJcbiAgICBmaWxsOiAjYzYyODI4O1xyXG4gIH1cclxuICAuc3Q5IHtcclxuICAgIGZpbGw6ICNmYmMwMmQ7XHJcbiAgfVxyXG4gIC5zdDEwIHtcclxuICAgIGZpbGw6ICMxNTY1YzA7XHJcbiAgfVxyXG4gIC5zdDExIHtcclxuICAgIGZpbGw6ICMyZTdkMzI7XHJcbiAgfVxyXG4gIC5zdDEyIHtcclxuICAgIGZpbGw6ICNmNmI3MDQ7XHJcbiAgfVxyXG4gIC5zdDEzIHtcclxuICAgIGZpbGw6ICNlNTQzMzU7XHJcbiAgfVxyXG4gIC5zdDE0IHtcclxuICAgIGZpbGw6ICM0MjgwZWY7XHJcbiAgfVxyXG4gIC5zdDE1IHtcclxuICAgIGZpbGw6ICMzNGEzNTM7XHJcbiAgfVxyXG4gIC5zdDE2IHtcclxuICAgIGNsaXAtcGF0aDogdXJsKCNTVkdJRF8yXyk7XHJcbiAgfVxyXG4gIC5zdDE3IHtcclxuICAgIGZpbGw6ICMxODgwMzg7XHJcbiAgfVxyXG4gIC5zdDE4IHtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGZpbGw6ICNmZmZmZmY7XHJcbiAgICBlbmFibGUtYmFja2dyb3VuZDogbmV3O1xyXG4gIH1cclxuICAuc3QxOSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBmaWxsOiAjMGQ2NTJkO1xyXG4gICAgZW5hYmxlLWJhY2tncm91bmQ6IG5ldztcclxuICB9XHJcbiAgLnN0MjAge1xyXG4gICAgY2xpcC1wYXRoOiB1cmwoI1NWR0lEXzRfKTtcclxuICB9XHJcbiAgLnN0MjEge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgZmlsbDogdXJsKCNfNDVfc2hhZG93XzFfKTtcclxuICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7XHJcbiAgfVxyXG4gIC5zdDIyIHtcclxuICAgIGNsaXAtcGF0aDogdXJsKCNTVkdJRF82Xyk7XHJcbiAgfVxyXG4gIC5zdDIzIHtcclxuICAgIGZpbGw6ICNmYTdiMTc7XHJcbiAgfVxyXG4gIC5zdDI0IHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIGZpbGw6ICMxNzRlYTY7XHJcbiAgICBlbmFibGUtYmFja2dyb3VuZDogbmV3O1xyXG4gIH1cclxuICAuc3QyNSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBmaWxsOiAjYTUwZTBlO1xyXG4gICAgZW5hYmxlLWJhY2tncm91bmQ6IG5ldztcclxuICB9XHJcbiAgLnN0MjYge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgZmlsbDogI2UzNzQwMDtcclxuICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7XHJcbiAgfVxyXG4gIC5zdDI3IHtcclxuICAgIGZpbGw6IHVybCgjRmluaXNoX21hc2tfMV8pO1xyXG4gIH1cclxuICAuc3QyOCB7XHJcbiAgICBmaWxsOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuc3QyOSB7XHJcbiAgICBmaWxsOiAjMGM5ZDU4O1xyXG4gIH1cclxuICAuc3QzMCB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBmaWxsOiAjMDA0ZDQwO1xyXG4gICAgZW5hYmxlLWJhY2tncm91bmQ6IG5ldztcclxuICB9XHJcbiAgLnN0MzEge1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgZmlsbDogIzNlMjcyMztcclxuICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7XHJcbiAgfVxyXG4gIC5zdDMyIHtcclxuICAgIGZpbGw6ICNmZmMxMDc7XHJcbiAgfVxyXG4gIC5zdDMzIHtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGZpbGw6ICMxYTIzN2U7XHJcbiAgICBlbmFibGUtYmFja2dyb3VuZDogbmV3O1xyXG4gIH1cclxuICAuc3QzNCB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgfVxyXG4gIC5zdDM1IHtcclxuICAgIGZpbGw6ICMxYTIzN2U7XHJcbiAgfVxyXG4gIC5zdDM2IHtcclxuICAgIGZpbGw6IHVybCgjU1ZHSURfN18pO1xyXG4gIH1cclxuICAuc3QzNyB7XHJcbiAgICBmaWxsOiAjZmJiYzA1O1xyXG4gIH1cclxuICAuc3QzOCB7XHJcbiAgICBjbGlwLXBhdGg6IHVybCgjU1ZHSURfOV8pO1xyXG4gICAgZmlsbDogI2U1MzkzNTtcclxuICB9XHJcbiAgLnN0Mzkge1xyXG4gICAgY2xpcC1wYXRoOiB1cmwoI1NWR0lEXzExXyk7XHJcbiAgICBmaWxsOiAjZmJjMDJkO1xyXG4gIH1cclxuICAuc3Q0MCB7XHJcbiAgICBjbGlwLXBhdGg6IHVybCgjU1ZHSURfMTNfKTtcclxuICAgIGZpbGw6ICNlNTM5MzU7XHJcbiAgfVxyXG4gIC5zdDQxIHtcclxuICAgIGNsaXAtcGF0aDogdXJsKCNTVkdJRF8xNV8pO1xyXG4gICAgZmlsbDogI2ZiYzAyZDtcclxuICB9XHJcbiAgZW5hYmxlLWJhY2tncm91bmQ6IG5ldyAwIDAgMTUwIDE1MDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG5gXHJcblxyXG5jb25zdCBHb29nbGUgPSAoeyB3aWR0aCwgaGVpZ2h0IH06IEljb24pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNWR1xyXG4gICAgICBpZD1cIkNhcGFfMVwiXHJcbiAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIlxyXG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgID5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0MTRcIlxyXG4gICAgICAgICAgZD1cIk0xMjAsNzYuMWMwLTMuMS0wLjMtNi4zLTAuOC05LjNINzUuOXYxNy43aDI0LjhjLTEsNS43LTQuMywxMC43LTkuMiwxMy45bDE0LjgsMTEuNSAgIEMxMTUsMTAxLjgsMTIwLDkwLDEyMCw3Ni4xTDEyMCw3Ni4xelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3QxNVwiXHJcbiAgICAgICAgICBkPVwiTTc1LjksMTIwLjljMTIuNCwwLDIyLjgtNC4xLDMwLjQtMTEuMUw5MS41LDk4LjRjLTQuMSwyLjgtOS40LDQuNC0xNS42LDQuNGMtMTIsMC0yMi4xLTguMS0yNS44LTE4LjkgICBMMzQuOSw5NS42QzQyLjcsMTExLjEsNTguNSwxMjAuOSw3NS45LDEyMC45elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3QxMlwiXHJcbiAgICAgICAgICBkPVwiTTUwLjEsODMuOGMtMS45LTUuNy0xLjktMTEuOSwwLTE3LjZMMzQuOSw1NC40Yy02LjUsMTMtNi41LDI4LjMsMCw0MS4yTDUwLjEsODMuOHpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0MTNcIlxyXG4gICAgICAgICAgZD1cIk03NS45LDQ3LjNjNi41LTAuMSwxMi45LDIuNCwxNy42LDYuOUwxMDYuNiw0MUM5OC4zLDMzLjIsODcuMywyOSw3NS45LDI5LjFjLTE3LjQsMC0zMy4yLDkuOC00MSwyNS4zICAgbDE1LjIsMTEuOEM1My44LDU1LjMsNjMuOSw0Ny4zLDc1LjksNDcuM3pcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvU1ZHPlxyXG4gIClcclxufVxyXG5cclxuR29vZ2xlLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogXCIxLjZyZW1cIixcclxuICBoZWlnaHQ6IFwiMS42cmVtXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZVxyXG4iLCJpbXBvcnQgeyBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuaW50ZXJmYWNlIEljb24gZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XHJcbiAgd2lkdGg/OiBzdHJpbmdcclxuICBoZWlnaHQ/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgU1ZHID0gc3R5bGVkLnN2Z2BcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFBhdGggPSBzdHlsZWQucGF0aGBcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtaW5kZW50OiAwO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgaXNvbGF0aW9uOiBhdXRvO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgZmlsbDogdmFyKC0tdGV4dDIpO1xyXG5gXHJcblxyXG5jb25zdCBJbmZvX2ljb24gPSAoeyB3aWR0aCwgaGVpZ2h0LCAuLi5wcm9wcyB9OiBJY29uKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTVkdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgPlxyXG4gICAgICA8UGF0aFxyXG4gICAgICAgIGQ9XCJNIDguNTA1ODU5NCAxIEMgNC42NDU3ODg0IDEgMS41MDU4NTk0IDQuMTQgMS41MDU4NTk0IDggQyAxLjUwNTg1OTQgMTEuODYwMSA0LjY0NTc4ODQgMTUgOC41MDU4NTk0IDE1IEMgMTIuMzY1OTMgMTUgMTUuNTA1ODU5IDExLjg2MDEgMTUuNTA1ODU5IDggQyAxNS41MDU4NTkgNC4xNCAxMi4zNjU5MyAxIDguNTA1ODU5NCAxIHogTSA4LjUwNTg1OTQgMiBDIDExLjgyNTQ5IDIgMTQuNTA1ODU5IDQuNjgwNCAxNC41MDU4NTkgOCBDIDE0LjUwNTg1OSAxMS4zMTk3IDExLjgyNTQ5IDE0IDguNTA1ODU5NCAxNCBDIDUuMTg2MjI4NiAxNCAyLjUwNTg1OTQgMTEuMzE5NyAyLjUwNTg1OTQgOCBDIDIuNTA1ODU5NCA0LjY4MDQgNS4xODYyMjg2IDIgOC41MDU4NTk0IDIgeiBNIDguMDA1ODU5NCA0IEwgOC4wMDU4NTk0IDUgTCA5LjAwNTg1OTQgNSBMIDkuMDA1ODU5NCA0IEwgOC4wMDU4NTk0IDQgeiBNIDguMDA1ODU5NCA2IEwgOC4wMDU4NTk0IDEyIEwgOS4wMDU4NTk0IDEyIEwgOS4wMDU4NTk0IDYgTCA4LjAwNTg1OTQgNiB6IFwiXHJcbiAgICAgICAgY29sb3I9XCIjMDAwXCJcclxuICAgICAgICBlbmFibGUtYmFja2dyb3VuZD1cImFjY3VtdWxhdGVcIlxyXG4gICAgICAgIGZvbnQtZmFtaWx5PVwic2Fucy1zZXJpZlwiXHJcbiAgICAgICAgZm9udC13ZWlnaHQ9XCI0MDBcIlxyXG4gICAgICAgIG92ZXJmbG93PVwidmlzaWJsZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L1NWRz5cclxuICApXHJcbn1cclxuXHJcbkluZm9faWNvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6IFwiMS42cmVtXCIsXHJcbiAgaGVpZ2h0OiBcIjEuNnJlbVwiLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvX2ljb25cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxudHlwZSBJY29uID0ge1xyXG4gIHdpZHRoPzogc3RyaW5nXHJcbiAgaGVpZ2h0Pzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFNWRyA9IHN0eWxlZC5zdmdgXHJcbiAgZmlsbDogdmFyKC0tdGV4dDIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6aG92ZXIge1xyXG4gICAgcG9seWxpbmUsXHJcbiAgICBwYXRoIHtcclxuICAgICAgZmlsbDogdmFyKC0tYnJhbmQpO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgUGF0aCA9IHN0eWxlZC5wYXRoYFxyXG4gIGZpbGw6IHZhcigtLXRleHQyKTtcclxuYFxyXG5jb25zdCBQb2x5bGluZSA9IHN0eWxlZC5wb2x5bGluZWBcclxuICBmaWxsOiB2YXIoLS10ZXh0Mik7XHJcbmBcclxuXHJcbmNvbnN0IFNoYXJlID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJY29uKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTVkdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA2NCA2NFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjQgNjRcIlxyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgPlxyXG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjgwIDM4MClcIj5cclxuICAgICAgICA8UGF0aCBkPVwiTS0yNjQuMi0zMzkuOWMtNC40IDAtNy45LTMuNS03LjktNy45IDAtNC40IDMuNS03LjkgNy45LTcuOSA0LjQgMCA3LjkgMy41IDcuOSA3LjlDLTI1Ni4zLTM0My41LTI1OS44LTMzOS45LTI2NC4yLTMzOS45TC0yNjQuMi0zMzkuOXpNLTI2NC4yLTM1Mi44Yy0yLjcgMC00LjkgMi4yLTQuOSA0LjkgMCAyLjcgMi4yIDQuOSA0LjkgNC45IDIuNyAwIDQuOS0yLjIgNC45LTQuOUMtMjU5LjMtMzUwLjUtMjYxLjUtMzUyLjgtMjY0LjItMzUyLjhMLTI2NC4yLTM1Mi44ek0tMjMyLjEtMzU2Yy00LjQgMC03LjktMy41LTcuOS03LjlzMy41LTcuOSA3LjktNy45IDcuOSAzLjUgNy45IDcuOVMtMjI3LjgtMzU2LTIzMi4xLTM1NkwtMjMyLjEtMzU2ek0tMjMyLjEtMzY4LjhjLTIuNyAwLTQuOSAyLjItNC45IDQuOXMyLjIgNC45IDQuOSA0LjkgNC45LTIuMiA0LjktNC45Uy0yMjkuNC0zNjguOC0yMzIuMS0zNjguOEwtMjMyLjEtMzY4Ljh6TS0yMzIuMS0zMjMuOWMtNC40IDAtNy45LTMuNS03LjktNy45czMuNS03LjkgNy45LTcuOSA3LjkgMy41IDcuOSA3LjlTLTIyNy44LTMyMy45LTIzMi4xLTMyMy45TC0yMzIuMS0zMjMuOXpNLTIzMi4xLTMzNi43Yy0yLjcgMC00LjkgMi4yLTQuOSA0LjlzMi4yIDQuOSA0LjkgNC45IDQuOS0yLjIgNC45LTQuOVMtMjI5LjQtMzM2LjctMjMyLjEtMzM2LjdMLTIzMi4xLTMzNi43elwiIC8+XHJcbiAgICAgICAgPFBvbHlsaW5lIHBvaW50cz1cIi0yMzguNiAtMzMzLjIgLTI1OS4yIC0zNDMuNSAtMjU3LjggLTM0Ni40IC0yMzcuMSAtMzM2LjEgLTIzOC42IC0zMzMuMlwiIC8+XHJcbiAgICAgICAgPFBvbHlsaW5lIHBvaW50cz1cIi0yNTcuOCAtMzQ5LjMgLTI1OS4yIC0zNTIuMSAtMjM4LjYgLTM2Mi40IC0yMzcuMSAtMzU5LjYgLTI1Ny44IC0zNDkuM1wiIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvU1ZHPlxyXG4gIClcclxufVxyXG5cclxuU2hhcmUuZGVmYXVsdFByb3BzID0ge1xyXG4gIHdpZHRoOiBcIjEuNnJlbVwiLFxyXG4gIGhlaWdodDogXCIxLjZyZW1cIixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcmVcclxuIiwiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW48e30+KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgZnIgZnJvbSBcIi4uLy4uL2xvY2FsZXMvZnJcIlxyXG5pbXBvcnQgQ2hlY2tNYXJrX2ljb24gZnJvbSBcIi4uL2ljb24vQ2hlY2tNYXJrX2ljb25cIlxyXG5cclxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGhlaWdodDogNzJ2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIDFyZW0gYXV0bztcclxuICB9XHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICB9XHJcbiAgdWwge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XHJcbiAgICAgICYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFNlY3Rpb24xID0gKHsgdCB9OiB7IHQ6IHR5cGVvZiBmciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT57dC5oZXJvX3NlY3Rpb24udGl0bGV9PC9oMT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxDaGVja01hcmtfaWNvbiAvPlxyXG4gICAgICAgICAgICA8c3Bhbj57dC5oZXJvX3NlY3Rpb24ub3B0aW9uMX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8Q2hlY2tNYXJrX2ljb24gLz5cclxuICAgICAgICAgICAgPHNwYW4+e3QuaGVyb19zZWN0aW9uLm9wdGlvbjJ9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPENoZWNrTWFya19pY29uIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt0Lmhlcm9fc2VjdGlvbi5vcHRpb24zfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uMVxyXG4iLCJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHAsIGdldEFwcHMgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCJcclxuaW1wb3J0IHsgYWRkRG9jLCBjb2xsZWN0aW9uLCBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCJcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCxcclxufVxyXG5cclxuY29uc3QgZmlyZWJhc2VBcHAgPSAhZ2V0QXBwcygpLmxlbmd0aCA/IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogZ2V0QXBwKClcclxuY29uc3QgZGJTdG9yZSA9IGdldEZpcmVzdG9yZSgpXHJcbmNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKClcclxuXHJcbmV4cG9ydCB7IGZpcmViYXNlQXBwLCBkYlN0b3JlLCBzdG9yYWdlLCBjb2xsZWN0aW9uLCBhZGREb2MgfVxyXG4iLCJpbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgc2lnbkluV2l0aFBvcHVwLFxyXG4gIHNpZ25JbldpdGhSZWRpcmVjdCxcclxuICBHb29nbGVBdXRoUHJvdmlkZXIsXHJcbiAgZ2V0UmVkaXJlY3RSZXN1bHQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxyXG5pbXBvcnQgeyBmaXJlYmFzZUFwcCwgZGJTdG9yZSwgY29sbGVjdGlvbiwgYWRkRG9jIH0gZnJvbSBcIi4uL2ZpcmViYXNlQXV0aFwiXHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGZpcmViYXNlQXBwKVxyXG5leHBvcnQgY29uc3Qgc2lnbkluID0gKGxvY2FsZTogc3RyaW5nID0gXCJlblwiKSA9PiB7XHJcbiAgYXV0aC5sYW5ndWFnZUNvZGUgPSBsb2NhbGVcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKVxyXG4gIC8vbmUgZm9uY3Rpb25uZSBwYXMgY2FyIGZlcm1lIGxhIHBhZ2UgZGUgbmV4dFxyXG4gIC8vIHNpZ25JbldpdGhSZWRpcmVjdChhdXRoLCBwcm92aWRlcilcclxuICAvLyBnZXRSZWRpcmVjdFJlc3VsdChhdXRoKVxyXG4gIC8vICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAvLyAgICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbVJlc3VsdChyZXN1bHQhKVxyXG4gIC8vICAgICBjb25zdCB0b2tlbiA9IGNyZWRlbnRpYWwhLmFjY2Vzc1Rva2VuXHJcbiAgLy8gICAgIGNvbnN0IHVzZXJDcmVkZW50aWFscyA9IHJlc3VsdCEudXNlclxyXG4gIC8vICAgICBjb25zb2xlLmxvZyh1c2VyQ3JlZGVudGlhbHMsIHR5cGVvZiB1c2VyQ3JlZGVudGlhbHMpXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAvLyAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gIC8vICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlXHJcbiAgLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcclxuICAvLyAgICAgLy8gVGhlIGVtYWlsIG9mIHRoZSB1c2VyJ3MgYWNjb3VudCB1c2VkLlxyXG4gIC8vICAgICBjb25zdCBlbWFpbCA9IGVycm9yLmVtYWlsXHJcbiAgLy8gICAgIC8vIFRoZSBBdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgLy8gICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcilcclxuICAvLyAgICAgLy8gLi4uXHJcbiAgLy8gICB9KVxyXG5cclxuICBzaWduSW5XaXRoUG9wdXAoYXV0aCwgcHJvdmlkZXIpXHJcbiAgICAudGhlbihhc3luYyByZXN1bHQgPT4ge1xyXG4gICAgICAvLyBUaGlzIGdpdmVzIHlvdSBhIEdvb2dsZSBBY2Nlc3MgVG9rZW4uIFlvdSBjYW4gdXNlIGl0IHRvIGFjY2VzcyB0aGUgR29vZ2xlIEFQSS5cclxuICAgICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbVJlc3VsdChyZXN1bHQpXHJcbiAgICAgIGNvbnN0IHRva2VuID0gY3JlZGVudGlhbCEuYWNjZXNzVG9rZW5cclxuICAgICAgLy8gVGhlIHNpZ25lZC1pbiB1c2VyIGluZm8uXHJcbiAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFscyA9IHJlc3VsdC51c2VyXHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyQ3JlZGVudGlhbHMsIHR5cGVvZiB1c2VyQ3JlZGVudGlhbHMpXHJcblxyXG4gICAgICBjb25zdCBkb2NVc2VyID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGJTdG9yZSwgXCJ1c2VyXCIpLCB7XHJcbiAgICAgICAgdWlkOiB1c2VyQ3JlZGVudGlhbHMudWlkLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyQ3JlZGVudGlhbHMuZW1haWwsXHJcbiAgICAgICAgbmFtZTogdXNlckNyZWRlbnRpYWxzLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgIHByb3ZpZGVyOiB1c2VyQ3JlZGVudGlhbHMucHJvdmlkZXJEYXRhWzBdLnByb3ZpZGVySWQsXHJcbiAgICAgICAgcGhvdG9Vcmw6IHVzZXJDcmVkZW50aWFscy5waG90b1VSTCxcclxuICAgICAgICBwaG9uZU51bWJlcjogdXNlckNyZWRlbnRpYWxzLnBob25lTnVtYmVyLFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCB3cml0dGVuIHdpdGggSUQ6IFwiLCBkb2NVc2VyLmlkKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZVxyXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlXHJcbiAgICAgIC8vIFRoZSBlbWFpbCBvZiB0aGUgdXNlcidzIGFjY291bnQgdXNlZC5cclxuICAgICAgY29uc3QgZW1haWwgPSBlcnJvci5lbWFpbFxyXG4gICAgICAvLyBUaGUgQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxyXG4gICAgICBjb25zdCBjcmVkZW50aWFsID0gR29vZ2xlQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWxGcm9tRXJyb3IoZXJyb3IpXHJcbiAgICAgIC8vIC4uLlxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvckNvZGUsIGVycm9yTWVzc2FnZSwgZW1haWwsIGNyZWRlbnRpYWwsIGF1dGgpXHJcbiAgICB9KVxyXG59XHJcbiIsImltcG9ydCBmcyBmcm9tIFwiZnNcIlxyXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiXHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCJcclxuaW1wb3J0IHJlYWRpbmdUaW1lIGZyb20gXCJyZWFkaW5nLXRpbWVcIlxyXG5pbXBvcnQgeyBzeW5jIH0gZnJvbSBcImdsb2JcIlxyXG5pbXBvcnQgeyBJbnRlckRvY3MgfSBmcm9tIFwiLi4vQHR5cGVzL2ludGVyZmFjZVwiXHJcbmltcG9ydCBmciBmcm9tIFwiLi4vbG9jYWxlcy9mclwiXHJcbmltcG9ydCBlbiBmcm9tIFwiLi4vbG9jYWxlcy9lblwiXHJcblxyXG5jb25zdCBwb3N0RGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiL0RhdGEvRG9jc1wiKVxyXG5leHBvcnQgY29uc3QgZ2V0QWxsRG9jcyA9IChsb2NhbGU6IFwiZnJcIiB8IFwiZW5cIiA9IFwiZnJcIikgPT4ge1xyXG4gIGNvbnN0IHBvc3RzID0gZ2V0U2x1Z3MobG9jYWxlKVxyXG4gICAgLm1hcChzbHVnID0+IGdldERvY0Zyb21TbHVnKHNsdWcsIGxvY2FsZSkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYS5tZXRhLnB1Ymxpc2hlZEF0ID4gYi5tZXRhLnB1Ymxpc2hlZEF0KSByZXR1cm4gLTFcclxuICAgICAgaWYgKGEubWV0YS5wdWJsaXNoZWRBdCA8IGIubWV0YS5wdWJsaXNoZWRBdCkgcmV0dXJuIDFcclxuICAgICAgcmV0dXJuIDBcclxuICAgIH0pXHJcbiAgcmV0dXJuIHBvc3RzXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTbHVncyA9IChsb2NhbGU6IFwiZnJcIiB8IFwiZW5cIiA9IFwiZnJcIikgPT4ge1xyXG4gIGNvbnN0IHBhdGhzID0gc3luYyhgJHtwb3N0RGlyfS8qLiR7bG9jYWxlfS5tZHhgKVxyXG4gIHJldHVybiBwYXRocy5tYXAocGF0aCA9PiB7XHJcbiAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoXCIvXCIpXHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdXHJcbiAgICBjb25zdCBbc2x1ZywgbG9jYWxlLCBfZXh0XSA9IGZpbGVOYW1lLnNwbGl0KFwiLlwiKVxyXG4gICAgcmV0dXJuIHNsdWdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RG9jRnJvbVNsdWcgPSAoXHJcbiAgc2x1Zzogc3RyaW5nLFxyXG4gIGxvY2FsZTogXCJmclwiIHwgXCJlblwiID0gXCJmclwiXHJcbik6IEludGVyRG9jcyA9PiB7XHJcbiAgY29uc3QgcG9zdFBhdGggPSBwYXRoLmpvaW4ocG9zdERpciwgYCR7c2x1Z30uJHtsb2NhbGV9Lm1keGApXHJcbiAgY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKHBvc3RQYXRoKVxyXG4gIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSlcclxuICBjb25zdCB0ID0gbG9jYWxlID09PSBcImVuXCIgPyBlbiA6IGZyXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbnRlbnQsXHJcbiAgICBtZXRhOiB7XHJcbiAgICAgIHNsdWcsXHJcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlID8/IHNsdWcsXHJcbiAgICAgIHRhZ3M6IChkYXRhLnRhZ3MgPz8gW10pLnNvcnQoKSxcclxuICAgICAgcHVibGlzaGVkQXQ6IChkYXRhLnB1Ymxpc2hlZEF0ID8/IG5ldyBEYXRlKCkpLnRvU3RyaW5nKCksXHJcbiAgICAgIGNoYXJ0SW5mbzogdC5jaGFydHMuZmluZChjaGFydCA9PiBjaGFydC5pZCA9PT0gZGF0YS5ncmFwaElkKSEsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGhlcm9fc2VjdGlvbixcclxuICBuYXZCYXIsXHJcbiAgc2VvLFxyXG4gIGNoYXJ0cyxcclxuICBidXR0b24sXHJcbiAgdG9vbHRpcCxcclxuICBhdXRyZVRleHQsXHJcbiAgcmVjYXAsXHJcbn0gZnJvbSBcIi4uLy4uL0RhdGEvY29tbW9uXCJcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgZG9jOiBidXR0b24uZG9jW1wiZW5cIl0sXHJcbiAgICBlc3NhaTogYnV0dG9uLmVzc2FpW1wiZW5cIl0sXHJcbiAgICBzb3VzYzogYnV0dG9uLnNvdXNjW1wiZW5cIl0sXHJcbiAgICBhY2NvdW50OiBidXR0b24uYWNjb3VudFtcImVuXCJdLFxyXG4gICAgc2hhcmU6IGJ1dHRvbi5zaGFyZVtcImVuXCJdLFxyXG4gIH0sXHJcbiAgdG9vbHRpcDoge1xyXG4gICAgZG9jOiB0b29sdGlwLmRvY1tcImVuXCJdLFxyXG4gICAgZXNzYWk6IHRvb2x0aXAuZXNzYWlbXCJlblwiXSxcclxuICB9LFxyXG4gIGF1dHJlVGV4dDoge1xyXG4gICAgYWRkOiBhdXRyZVRleHQuYWRkW1wiZW5cIl0sXHJcbiAgfSxcclxuICBuYXZiYXI6IHtcclxuICAgIGxpbmsxOiBuYXZCYXIubGluazFbXCJlblwiXSxcclxuICAgIGxpbmsyOiBuYXZCYXIubGluazJbXCJlblwiXSxcclxuICAgIGxpbmszOiBuYXZCYXIubGluazNbXCJlblwiXSxcclxuICAgIGxpbms0OiBuYXZCYXIubGluazRbXCJlblwiXSxcclxuICB9LFxyXG4gIHJlY2FwOiB7XHJcbiAgICBjcmVkaXQ6IHJlY2FwLmNyZWRpdFtcImVuXCJdLFxyXG4gICAgc3Vic2M6IHJlY2FwLnN1YnNjW1wiZW5cIl0sXHJcbiAgfSxcclxuICBzZW86IHtcclxuICAgIG5hbWU6IHNlby5uYW1lLFxyXG4gICAgdGl0bGU6IHNlby50aXRsZVtcImVuXCJdLFxyXG4gIH0sXHJcbiAgaGVyb19zZWN0aW9uOiB7XHJcbiAgICB0aXRsZTogaGVyb19zZWN0aW9uLnRpdGxlLFxyXG4gICAgb3B0aW9uMTogaGVyb19zZWN0aW9uLm9wdGlvbjFbXCJlblwiXSxcclxuICAgIG9wdGlvbjI6IGhlcm9fc2VjdGlvbi5vcHRpb24yW1wiZW5cIl0sXHJcbiAgICBvcHRpb24zOiBoZXJvX3NlY3Rpb24ub3B0aW9uM1tcImVuXCJdLFxyXG4gIH0sXHJcbiAgY2hhcnRzOiBjaGFydHMubWFwKHZhbCA9PiB7XHJcbiAgICByZXR1cm4geyAuLi52YWwsIG5hbWU6IHZhbC5uYW1lW1wiZW5cIl0sIGRlc2M6IHZhbC5kZXNjW1wiZW5cIl0gfVxyXG4gIH0pLFxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaGVyb19zZWN0aW9uLFxyXG4gIG5hdkJhcixcclxuICBzZW8sXHJcbiAgY2hhcnRzLFxyXG4gIGJ1dHRvbixcclxuICB0b29sdGlwLFxyXG4gIGF1dHJlVGV4dCxcclxuICByZWNhcCxcclxufSBmcm9tIFwiLi4vLi4vRGF0YS9jb21tb25cIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBkb2M6IGJ1dHRvbi5kb2NbXCJmclwiXSxcclxuICAgIGVzc2FpOiBidXR0b24uZXNzYWlbXCJmclwiXSxcclxuICAgIHNvdXNjOiBidXR0b24uc291c2NbXCJmclwiXSxcclxuICAgIGFjY291bnQ6IGJ1dHRvbi5hY2NvdW50W1wiZnJcIl0sXHJcbiAgICBzaGFyZTogYnV0dG9uLnNoYXJlW1wiZnJcIl0sXHJcbiAgfSxcclxuICB0b29sdGlwOiB7XHJcbiAgICBkb2M6IHRvb2x0aXAuZG9jW1wiZnJcIl0sXHJcbiAgICBlc3NhaTogdG9vbHRpcC5lc3NhaVtcImZyXCJdLFxyXG4gIH0sXHJcbiAgYXV0cmVUZXh0OiB7XHJcbiAgICBhZGQ6IGF1dHJlVGV4dC5hZGRbXCJmclwiXSxcclxuICB9LFxyXG4gIG5hdmJhcjoge1xyXG4gICAgbGluazE6IG5hdkJhci5saW5rMVtcImZyXCJdLFxyXG4gICAgbGluazI6IG5hdkJhci5saW5rMltcImZyXCJdLFxyXG4gICAgbGluazM6IG5hdkJhci5saW5rM1tcImZyXCJdLFxyXG4gICAgbGluazQ6IG5hdkJhci5saW5rNFtcImZyXCJdLFxyXG4gIH0sXHJcbiAgcmVjYXA6IHtcclxuICAgIGNyZWRpdDogcmVjYXAuY3JlZGl0W1wiZnJcIl0sXHJcbiAgICBzdWJzYzogcmVjYXAuc3Vic2NbXCJmclwiXSxcclxuICB9LFxyXG4gIHNlbzoge1xyXG4gICAgbmFtZTogc2VvLm5hbWUsXHJcbiAgICB0aXRsZTogc2VvLnRpdGxlW1wiZnJcIl0sXHJcbiAgfSxcclxuICBoZXJvX3NlY3Rpb246IHtcclxuICAgIHRpdGxlOiBoZXJvX3NlY3Rpb24udGl0bGUsXHJcbiAgICBvcHRpb24xOiBoZXJvX3NlY3Rpb24ub3B0aW9uMVtcImZyXCJdLFxyXG4gICAgb3B0aW9uMjogaGVyb19zZWN0aW9uLm9wdGlvbjJbXCJmclwiXSxcclxuICAgIG9wdGlvbjM6IGhlcm9fc2VjdGlvbi5vcHRpb24zW1wiZnJcIl0sXHJcbiAgfSxcclxuICBjaGFydHM6IGNoYXJ0cy5tYXAodmFsID0+IHtcclxuICAgIHJldHVybiB7IC4uLnZhbCwgbmFtZTogdmFsLm5hbWVbXCJmclwiXSwgZGVzYzogdmFsLmRlc2NbXCJmclwiXSB9XHJcbiAgfSksXHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvQ29udGFpbmVyXCJcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIlxyXG5pbXBvcnQgU2VjdGlvbjEgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvU2VjdGlvbjFcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBmciBmcm9tIFwiLi4vbG9jYWxlcy9mclwiXHJcbmltcG9ydCBlbiBmcm9tIFwiLi4vbG9jYWxlcy9lblwiXHJcbmltcG9ydCBWaXpDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2VsZW1lbnRzL1ZpekNhcmRcIlxyXG5pbXBvcnQgUmVjYXBBY2NvdW50IGZyb20gXCIuLi9jb21wb25lbnRzL2VsZW1lbnRzL1JlY2FwQWNjb3VudFwiXHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXHJcbmltcG9ydCB7IGZpcmViYXNlQXBwIH0gZnJvbSBcIi4uL2ZpcmViYXNlQXV0aFwiXHJcbmltcG9ydCB7IGdldEFsbERvY3MgfSBmcm9tIFwiLi4vbGliL21keFwiXHJcbmltcG9ydCB7IEludGVyRG9jcywgbG9jYWxlIH0gZnJvbSBcIi4uL0B0eXBlcy9pbnRlcmZhY2VcIlxyXG5cclxuY29uc3QgYXV0aCA9IGdldEF1dGgoZmlyZWJhc2VBcHApXHJcbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuICBnYXA6IDJyZW07XHJcbiAgcGFkZGluZzogMCAwIDAuNXJlbSAwO1xyXG5gXHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICh7IGRvY3MsIGxvY2FsZSB9OiB7IGRvY3M6IEludGVyRG9jc1tdOyBsb2NhbGU6IGxvY2FsZSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZG9jcylcclxuICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXHJcbiAgY29uc3QgdCA9IGxvY2FsZSA9PT0gXCJmclwiID8gZnIgOiBlblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VjdGlvbjEgdD17dH0gLz5cclxuICAgICAgPFJlY2FwQWNjb3VudCB0PXt0fSBjb25uZWN0ZWQ9e3VzZXIgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICB7ZG9jcy5tYXAoKHZhbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8Vml6Q2FyZFxyXG4gICAgICAgICAgICAgIHRvb2w9e3ZhbC5tZXRhLmNoYXJ0SW5mby52aXpUb29sfVxyXG4gICAgICAgICAgICAgIGRlc2M9e3ZhbC5tZXRhLmNoYXJ0SW5mby5kZXNjfVxyXG4gICAgICAgICAgICAgIGxpbms9e2AvZG9jcy8ke3ZhbC5tZXRhLnNsdWd9YH1cclxuICAgICAgICAgICAgICBsaW5rX2ltYWdlPXt2YWwubWV0YS5jaGFydEluZm8ubGlua19pbWFnZX1cclxuICAgICAgICAgICAgICB0aXRsZT17dmFsLm1ldGEuY2hhcnRJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgICAgYWRkRGF0ZT17dmFsLm1ldGEuY2hhcnRJbmZvLmFkZGVkQXR9XHJcbiAgICAgICAgICAgICAga2V5PXt2YWwubWV0YS5jaGFydEluZm8uaWR9XHJcbiAgICAgICAgICAgICAgdD17dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBsb2NhbGUgfTogeyBsb2NhbGU6IGxvY2FsZSB9KSB7XHJcbiAgY29uc3QgZG9jcyA9IGdldEFsbERvY3MobG9jYWxlKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkb2NzLCBsb2NhbGUgfSxcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2xvYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIm5hdkJhciIsImxpbmsxIiwiZnIiLCJlbiIsImxpbmsyIiwibGluazMiLCJsaW5rNCIsInNlbyIsIm5hbWUiLCJ0aXRsZSIsImhlcm9fc2VjdGlvbiIsIm9wdGlvbjEiLCJvcHRpb24yIiwib3B0aW9uMyIsImJ1dHRvbiIsImRvYyIsImVzc2FpIiwic291c2MiLCJzaGFyZSIsImFjY291bnQiLCJ0b29sdGlwIiwiYXV0cmVUZXh0IiwiYWRkIiwicmVjYXAiLCJjcmVkaXQiLCJzdWJzYyIsImNoYXJ0cyIsImlkIiwibGlua19pbWFnZSIsImRlc2MiLCJhZGRlZEF0IiwibGlua19wYWdlIiwidml6VG9vbCIsImNoYXJ0Q29tcG9uZW50IiwidXNlUm91dGVyIiwiUmVhY3QiLCJzdHlsZWQiLCJzaWduSW4iLCJHb29nbGUiLCJCbG9ja1JlY2FwIiwiZGl2IiwiQnV0dG9uIiwiQ29ubmVjdENvbnRhaW5lciIsIkVzc2F5V3JhcHBlciIsIlN1YnNXcmFwcGVyIiwiQm91bGUiLCJwcm9wcyIsInRoZW1lIiwidmFsIiwiVGV4dCIsIlJlY2FwQWNjb3VudCIsInQiLCJjb25uZWN0ZWQiLCJyb3V0ZXIiLCJsb2NhbGUiLCJrZXlmcmFtZXMiLCJkaXNwbGF5VG9vbHRpcCIsIkRpdiIsImNsYXNzTmFtZVRvb2x0aXAiLCJ3aWR0aFRvb2x0aXAiLCJwb3NSZWxhdGl2Qm90dG9tUGVyY2VudCIsInBvc1JlbGF0aXZMZWZ0UGl4ZWwiLCJwb3NpdGlvbkFycm93UGVyY2VudCIsIlRvb2xUaXBXcmFwcGVyIiwiY2hpbGRyZW4iLCJ0b29sdGlwdGV4dCIsImRlZmF1bHRQcm9wcyIsIkxpbmsiLCJJbmZvX2ljb24iLCJCb29rX2ljb24iLCJTaGFyZSIsIlZpekNvbnRhaW5lciIsIkltZyIsImltZyIsIkRhdGUiLCJEZXNjVGV4dCIsIkJsb2NrQnV0dG9uIiwiQnV0dG9uQ29udGFpbmVyIiwiQnV0dG9uQ29udGFpbmVySW5mbyIsIkJ1dHRvbkNvbnRhaW5lclN1YiIsIlNwYWNlIiwiVG9vbCIsIlZpekNhcmQiLCJsaW5rIiwiYWRkRGF0ZSIsInRvb2wiLCJTVkciLCJzdmciLCJQYXRoIiwicGF0aCIsIndpZHRoIiwiaGVpZ2h0IiwiQ2hlY2tNYXJrX2ljb24iLCJQb2x5bGluZSIsInBvbHlsaW5lIiwiQ29udGFpbmVyIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJTZWN0aW9uMSIsImluaXRpYWxpemVBcHAiLCJnZXRBcHAiLCJnZXRBcHBzIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lEIiwiZmlyZWJhc2VBcHAiLCJsZW5ndGgiLCJkYlN0b3JlIiwic3RvcmFnZSIsImdldEF1dGgiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJhdXRoIiwibGFuZ3VhZ2VDb2RlIiwicHJvdmlkZXIiLCJ0aGVuIiwicmVzdWx0IiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXJDcmVkZW50aWFscyIsInVzZXIiLCJkb2NVc2VyIiwidWlkIiwiZW1haWwiLCJkaXNwbGF5TmFtZSIsInByb3ZpZGVyRGF0YSIsInByb3ZpZGVySWQiLCJwaG90b1VybCIsInBob3RvVVJMIiwicGhvbmVOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiY3JlZGVudGlhbEZyb21FcnJvciIsImZzIiwibWF0dGVyIiwic3luYyIsInBvc3REaXIiLCJqb2luIiwiY3dkIiwiZ2V0QWxsRG9jcyIsInBvc3RzIiwiZ2V0U2x1Z3MiLCJtYXAiLCJzbHVnIiwiZ2V0RG9jRnJvbVNsdWciLCJzb3J0IiwiYSIsImIiLCJtZXRhIiwicHVibGlzaGVkQXQiLCJwYXRocyIsInBhcnRzIiwic3BsaXQiLCJmaWxlTmFtZSIsIl9leHQiLCJwb3N0UGF0aCIsInNvdXJjZSIsInJlYWRGaWxlU3luYyIsImNvbnRlbnQiLCJkYXRhIiwidGFncyIsInRvU3RyaW5nIiwiY2hhcnRJbmZvIiwiZmluZCIsImNoYXJ0IiwiZ3JhcGhJZCIsIm5hdmJhciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImVyciIsImN1ckxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwic2xpY2UiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwicHVzaCIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJ1c2VBdXRoU3RhdGUiLCJHcmlkIiwiSG9tZVBhZ2UiLCJkb2NzIiwibG9hZGluZyIsImkiLCJnZXRTdGF0aWNQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=