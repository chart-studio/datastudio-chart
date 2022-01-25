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
  chartComponent: "FunnelChart1",
  source: {
    credits: []
  },
  data: [{
    labels: ["Impressions"],
    effectif: [12000]
  }, {
    labels: ["Add To Cart"],
    effectif: [5700]
  }, {
    labels: ["Buy"],
    effectif: [360]
  }]
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
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_elements_RecapAccount__WEBPACK_IMPORTED_MODULE_7__.default, {
      t: t,
      connected: user ? true : false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
          lineNumber: 37,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNqT2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLGtKQUF5RDtBQUMzRDs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xva2FsaXN0aWMvLi9EYXRhL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9lbGVtZW50cy9SZWNhcEFjY291bnQudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9jb21wb25lbnRzL2VsZW1lbnRzL1Rvb2xUaXBXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9lbGVtZW50cy9WaXpDYXJkLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9pY29uL0Jvb2tfaWNvbi50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvaWNvbi9DaGVja01hcmtfaWNvbi50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvaWNvbi9Hb29nbGUudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9jb21wb25lbnRzL2ljb24vSW5mb19pY29uLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9pY29uL1NoYXJlLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9sYXlvdXQvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9zZWN0aW9ucy9TZWN0aW9uMS50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2ZpcmViYXNlQXV0aC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2hlbHBlcnMvc2lnbkluLnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9saWIvbWR4LnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9sb2NhbGVzL2VuL2luZGV4LnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9sb2NhbGVzL2ZyL2luZGV4LnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcImdsb2JcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZS5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9pZ25vcmVkfEM6XFxVc2Vyc1xcWXZlWlxcZ2l0aHViLmNvbVxcdmlzdWFsaXNhdGlvblxcd2Vic2l0ZVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbmF2QmFyID0ge1xyXG4gIGxpbmsxOiB7IGZyOiBcIkFjY3VlaWxcIiwgZW46IFwiSG9tZVwiIH0sXHJcbiAgbGluazI6IHsgZnI6IFwiVGFyaWZzXCIsIGVuOiBcIlByaWNpbmdcIiB9LFxyXG4gIGxpbmszOiB7IGZyOiBcIkEgcHJvcG9zXCIsIGVuOiBcIkFib3V0XCIgfSxcclxuICBsaW5rNDogeyBmcjogXCJDb250YWN0XCIsIGVuOiBcIkNvbnRhY3RcIiB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VvID0ge1xyXG4gIG5hbWU6IFwiQmVhdXRpZnVsIERhc2hib2FyZHNcIixcclxuICB0aXRsZToge1xyXG4gICAgZnI6IFwiRG9ubmV6IHBsdXMgZGUgcGVyY3V0YW50IMOgIHZvcyBkYXNoYm9hcmRzXCIsXHJcbiAgICBlbjogXCJNYWtlIHlvdXIgZGF0YSBzaGluZSB3aXRoIGJlYXV0aWZ1bCBkZXNpZ25zXCIsXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhlcm9fc2VjdGlvbiA9IHtcclxuICB0aXRsZTogXCJCZWF1dGlmdWwgRGFzaGJvYXJkc1wiLFxyXG4gIG9wdGlvbjE6IHsgZnI6IFwiRGVzaWducyBleGNlcHRpb25uZWxzXCIsIGVuOiBcIkV4Y2VwdGlvbmFsIGRlc2lnbnNcIiB9LFxyXG4gIG9wdGlvbjI6IHsgZnI6IFwiR3JhcGhlcyBwYXJhbcOpdHJhYmxlc1wiLCBlbjogXCJDdXN0b21hYmxlIGdyYXBoXCIgfSxcclxuICBvcHRpb24zOiB7XHJcbiAgICBmcjogXCIzMCBjcmVkaXRzIMOgIHV0aWxpc2VyIGdyYXR1aXRlbWVudCpcIixcclxuICAgIGVuOiBcIjMwIGNyZWRpdHMgZnJlZSB0byB1c2UqXCIsXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1dHRvbiA9IHtcclxuICBkb2M6IHsgZnI6IFwiTGlyZVwiLCBlbjogXCJSZWFkXCIgfSxcclxuICBlc3NhaTogeyBmcjogXCJFc3NheWVyXCIsIGVuOiBcIlRyeVwiIH0sXHJcbiAgc291c2M6IHsgZnI6IFwiU291c2NyaXJlXCIsIGVuOiBcIlN1YnNjcmliZVwiIH0sXHJcbiAgc2hhcmU6IHsgZnI6IFwiUGFydGFnZXJcIiwgZW46IFwiU2hhcmVcIiB9LFxyXG4gIGFjY291bnQ6IHsgZnI6IFwiU2UgY29ubmVjdGVyIGF2ZWMgZ29vZ2xlXCIsIGVuOiBcIkNvbm5lY3Qgd2l0aCBnb29nbGVcIiB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9vbHRpcCA9IHtcclxuICBkb2M6IHsgZnI6IFwiTGlyZSBsYSBkb2N1bWVudGF0aW9uXCIsIGVuOiBcIlJlYWQgdGhlIGRvY3VtZW50YXRpb25cIiB9LFxyXG4gIGVzc2FpOiB7IGZyOiBcIlV0aWxpc2VyIGxlcyBjcsOpZGl0c1wiLCBlbjogXCJVc2UgY3JlZGl0c1wiIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRyZVRleHQgPSB7XHJcbiAgYWRkOiB7IGZyOiBcIkFqb3V0w6kgbGUgXCIsIGVuOiBcIkFkZCBvbiBcIiB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVjYXAgPSB7XHJcbiAgY3JlZGl0OiB7IGZyOiBcImNyw6lkaXRzXCIsIGVuOiBcImNyZWRpdHNcIiB9LFxyXG4gIHN1YnNjOiB7IGZyOiBcInNvdXNjcmlwdGlvbnNcIiwgZW46IFwic3Vic2NyaXB0aW9uc1wiIH0sXHJcbn1cclxuLy97ZnI6XCJcIixlbjpcIlwifVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoYXJ0cyA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBuYW1lOiB7IGZyOiBcIkdyYXBoaXF1ZSBlbiBlbnRvbm5vaXJcIiwgZW46IFwiRnVubmVsIGNoYXJ0XCIgfSxcclxuICAgIGxpbmtfaW1hZ2U6IFwiL2ltYWdlcy9CZWF1dGlmdWwtU1ZHLUZ1bm5lbC5wbmdcIixcclxuICAgIGRlc2M6IHtcclxuICAgICAgZnI6IFwiTGUgZ3JhcGhpcXVlIGVuIGVudG9ubm9pciB2b3VzIGFpZGUgw6Agdm9pciByYXBpZGVtZW50IG/DuSBleGlzdGVudCBsZXMgdGF1eCBkJ2FiYW5kb24gZXQgbGVzIHRhdXggZGUgY29udmVyc2lvbiBnbG9iYXV4IGRhbnMgdm90cmUgdHVubmVsLlwiLFxyXG4gICAgICBlbjogXCJGdW5uZWwgdmlzdWFsaXphdGlvbnMgaGVscCB5b3UgcXVpY2tseSBzZWUgd2hlcmUgZHJvcC1vZmYgcmF0ZXMgYW5kIG92ZXJhbGwgY29udmVyc2lvbiByYXRlcyBpbiB5b3VyIHN0ZXBwZWQgcHJvY2VzcyBleGlzdC5cIixcclxuICAgIH0sXHJcbiAgICBhZGRlZEF0OiBcIjIwMjItMDEtMjNcIixcclxuICAgIGxpbmtfcGFnZTogXCIvXCIsXHJcbiAgICB2aXpUb29sOiBcIkRhdGEgU3R1ZGlvXCIsXHJcbiAgICBjaGFydENvbXBvbmVudDogXCJGdW5uZWxDaGFydDFcIixcclxuICAgIHNvdXJjZToge1xyXG4gICAgICBjcmVkaXRzOiBbXSxcclxuICAgIH0sXHJcbiAgICBkYXRhOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbHM6IFtcIkltcHJlc3Npb25zXCJdLFxyXG4gICAgICAgIGVmZmVjdGlmOiBbMTIwMDBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWxzOiBbXCJBZGQgVG8gQ2FydFwiXSxcclxuICAgICAgICBlZmZlY3RpZjogWzU3MDBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWxzOiBbXCJCdXlcIl0sXHJcbiAgICAgICAgZWZmZWN0aWY6IFszNjBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dXHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IHJvdXRlckRpciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3JvdXRlckRpclwiXHJcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3NpZ25JblwiXHJcbmltcG9ydCBmciBmcm9tIFwiLi4vLi4vbG9jYWxlcy9mclwiXHJcbmltcG9ydCBHb29nbGUgZnJvbSBcIi4uL2ljb24vR29vZ2xlXCJcclxuXHJcbmNvbnN0IEJsb2NrUmVjYXAgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiA0cmVtO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UyKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luOiAwIDAgMnJlbSAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAxM3JlbTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMC45cHg7XHJcbmBcclxuXHJcbmNvbnN0IENvbm5lY3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDE2cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYFxyXG5jb25zdCBFc3NheVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBTdWJzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IEJvdWxlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMC42cmVtO1xyXG4gIGhlaWdodDogMC42cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XHJcbiAgICBwcm9wcy50aGVtZS52YWwgPT09IFwiZXNzYXlcIiA/IFwidmFyKC0td2FybmluZylcIiA6IFwidmFyKC0tc2Vjb25kYXJ5LWZnKVwifTtcclxuYFxyXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQyKTtcclxuICB9XHJcbmBcclxuY29uc3QgUmVjYXBBY2NvdW50ID0gKHtcclxuICB0LFxyXG4gIGNvbm5lY3RlZCxcclxufToge1xyXG4gIHQ6IHR5cGVvZiBmclxyXG4gIGNvbm5lY3RlZDogYm9vbGVhblxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGxvY2FsZSB9ID0gcm91dGVyXHJcbiAgcmV0dXJuIChcclxuICAgIDxCbG9ja1JlY2FwPlxyXG4gICAgICB7Y29ubmVjdGVkID8gKFxyXG4gICAgICAgIDxDb25uZWN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEVzc2F5V3JhcHBlcj5cclxuICAgICAgICAgICAgPEJvdWxlIHRoZW1lPXt7IHZhbDogXCJlc3NheVwiIH19IC8+XHJcbiAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgIDAwIDxzcGFuPi8gMzAge3QucmVjYXAuY3JlZGl0fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Fc3NheVdyYXBwZXI+XHJcbiAgICAgICAgICA8U3Vic1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxCb3VsZSB0aGVtZT17eyB2YWw6IFwic3Vic2NcIiB9fSAvPlxyXG4gICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAwIDxzcGFuPnt0LnJlY2FwLnN1YnNjfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9TdWJzV3JhcHBlcj5cclxuICAgICAgICA8L0Nvbm5lY3RDb250YWluZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4obG9jYWxlKX0+XHJcbiAgICAgICAgICA8R29vZ2xlIC8+XHJcbiAgICAgICAgICB7dC5idXR0b24uYWNjb3VudH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvQmxvY2tSZWNhcD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2FwQWNjb3VudFxyXG4iLCJpbXBvcnQgeyBGQywgSW5wdXRIVE1MQXR0cmlidXRlcywgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuY29uc3QgZGlzcGxheVRvb2x0aXAgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDI1JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbmBcclxuXHJcbmludGVyZmFjZSBUb290VGlwcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbiAgdG9vbHRpcHRleHQ/OiBzdHJpbmdcclxuICBwb3NSZWxhdGl2Qm90dG9tUGVyY2VudD86IHN0cmluZ1xyXG4gIHBvc1JlbGF0aXZMZWZ0UGl4ZWw/OiBzdHJpbmdcclxuICBwb3NpdGlvbkFycm93UGVyY2VudD86IHN0cmluZ1xyXG4gIHdpZHRoVG9vbHRpcD86IHN0cmluZyB8IG51bGxcclxuICBjbGFzc05hbWVUb29sdGlwPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgLiR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2xhc3NOYW1lVG9vbHRpcH0ge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAvL29wYWNpdHk6IDE7XHJcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiAke2Rpc3BsYXlUb29sdGlwfTtcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAuJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jbGFzc05hbWVUb29sdGlwfSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS53aWR0aFRvb2x0aXB9O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dDIpO1xyXG4gICAgY29sb3I6IHZhcigtLXN1cmZhY2UyKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wb3NSZWxhdGl2Qm90dG9tUGVyY2VudH07XHJcbiAgICBsZWZ0OiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wb3NSZWxhdGl2TGVmdFBpeGVsfTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBvc2l0aW9uQXJyb3dQZXJjZW50fTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRleHQyKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFRvb2xUaXBXcmFwcGVyOiBGQzxUb290VGlwcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHRvb2x0aXB0ZXh0LFxyXG4gIHBvc1JlbGF0aXZCb3R0b21QZXJjZW50LFxyXG4gIHBvc1JlbGF0aXZMZWZ0UGl4ZWwsXHJcbiAgcG9zaXRpb25BcnJvd1BlcmNlbnQsXHJcbiAgd2lkdGhUb29sdGlwLFxyXG4gIGNsYXNzTmFtZVRvb2x0aXAsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGl2XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgdGhlbWU9e3tcclxuICAgICAgICBwb3NSZWxhdGl2TGVmdFBpeGVsLFxyXG4gICAgICAgIHBvc2l0aW9uQXJyb3dQZXJjZW50LFxyXG4gICAgICAgIHdpZHRoVG9vbHRpcCxcclxuICAgICAgICBjbGFzc05hbWVUb29sdGlwLFxyXG4gICAgICAgIHBvc1JlbGF0aXZCb3R0b21QZXJjZW50LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lVG9vbHRpcH0+e3Rvb2x0aXB0ZXh0fTwvc3Bhbj5cclxuICAgIDwvRGl2PlxyXG4gIClcclxufVxyXG5cclxuLy88c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dFwiPnt0b29sdGlwdGV4dH08L3NwYW4+XHJcblxyXG5Ub29sVGlwV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdG9vbHRpcHRleHQ6IFwiTW9kaWZpZXJcIixcclxuICBwb3NSZWxhdGl2Qm90dG9tUGVyY2VudDogXCIxMjUlXCIsXHJcbiAgcG9zUmVsYXRpdkxlZnRQaXhlbDogXCItNDNweFwiLFxyXG4gIHBvc2l0aW9uQXJyb3dQZXJjZW50OiBcIjYwJVwiLFxyXG4gIHdpZHRoVG9vbHRpcDogbnVsbCxcclxuICBjbGFzc05hbWVUb29sdGlwOiBcInRvb2x0aXB0ZXh0XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xUaXBXcmFwcGVyXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBJbmZvX2ljb24gZnJvbSBcIi4uL2ljb24vSW5mb19pY29uXCJcclxuaW1wb3J0IEJvb2tfaWNvbiBmcm9tIFwiLi4vaWNvbi9Cb29rX2ljb25cIlxyXG5pbXBvcnQgVG9vbFRpcFdyYXBwZXIgZnJvbSBcIi4vVG9vbFRpcFdyYXBwZXJcIlxyXG5pbXBvcnQgZnIgZnJvbSBcIi4uLy4uL2xvY2FsZXMvZnJcIlxyXG5pbXBvcnQgU2hhcmUgZnJvbSBcIi4uL2ljb24vU2hhcmVcIlxyXG5cclxudHlwZSBDYXJkID0ge1xyXG4gIGxpbms6IHN0cmluZ1xyXG4gIGxpbmtfaW1hZ2U6IHN0cmluZ1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBkZXNjOiBzdHJpbmdcclxuICBhZGREYXRlOiBzdHJpbmdcclxuICB0b29sOiBzdHJpbmdcclxuICB0OiB0eXBlb2YgZnJcclxufVxyXG5jb25zdCBWaXpDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UzKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXN1cmZhY2UyKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5cclxuY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcclxuICBoZWlnaHQ6IDEzcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuYFxyXG5jb25zdCBEYXRlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAuOHJlbSAwLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgRGVzY1RleHQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMC41cmVtIDByZW07XHJcbmBcclxuXHJcbmNvbnN0IEJsb2NrQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuYFxyXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMzAlO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXN1cmZhY2U0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlMik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIH1cclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuYFxyXG5jb25zdCBCdXR0b25Db250YWluZXJJbmZvID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIH1cclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuYFxyXG5jb25zdCBCdXR0b25Db250YWluZXJTdWIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMzIlO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXN1cmZhY2U0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZmcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcbiAgOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbmBcclxuY29uc3QgU3BhY2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbmBcclxuXHJcbmNvbnN0IFRvb2wgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMS41cmVtO1xyXG4gIHRvcDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgLy9iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZTIpO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbmBcclxuXHJcbmNvbnN0IFZpekNhcmQgPSAoeyBsaW5rLCBsaW5rX2ltYWdlLCB0aXRsZSwgZGVzYywgYWRkRGF0ZSwgdCwgdG9vbCB9OiBDYXJkKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxWaXpDb250YWluZXI+XHJcbiAgICAgIDxUb29sPnt0b29sfTwvVG9vbD5cclxuICAgICAgPEltZyBzcmM9e2xpbmtfaW1hZ2V9IC8+XHJcbiAgICAgIDxEYXRlPlxyXG4gICAgICAgIDxUb29sVGlwV3JhcHBlclxyXG4gICAgICAgICAgY2xhc3NOYW1lVG9vbHRpcD1cIlNoYXJlVG9vbHRpcFwiXHJcbiAgICAgICAgICB0b29sdGlwdGV4dD17dC5idXR0b24uc2hhcmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNoYXJlIC8+XHJcbiAgICAgICAgPC9Ub29sVGlwV3JhcHBlcj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPnt0LmF1dHJlVGV4dC5hZGR9PC9zcGFuPlxyXG4gICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e2FkZERhdGV9PnthZGREYXRlfTwvdGltZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9EYXRlPlxyXG4gICAgICA8aDY+e3RpdGxlfTwvaDY+XHJcbiAgICAgIDxEZXNjVGV4dCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8cD57ZGVzY308L3A+XHJcbiAgICAgIDwvRGVzY1RleHQ+XHJcblxyXG4gICAgICA8U3BhY2UgLz5cclxuICAgICAgPEJsb2NrQnV0dG9uPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgIDxUb29sVGlwV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lVG9vbHRpcD1cIkRvY1Rvb3RpcFwiXHJcbiAgICAgICAgICAgICAgICBwb3NSZWxhdGl2TGVmdFBpeGVsPVwiLTY2cHhcIlxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcHRleHQ9e3QudG9vbHRpcC5kb2N9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJvb2tfaWNvbiB3aWR0aD1cIjAuOHJlbVwiIC8+IDxzcGFuPnt0LmJ1dHRvbi5kb2N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbFRpcFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbkNvbnRhaW5lckluZm8+XHJcbiAgICAgICAgICA8VG9vbFRpcFdyYXBwZXIgdG9vbHRpcHRleHQ9e3QudG9vbHRpcC5lc3NhaX0+XHJcbiAgICAgICAgICAgIDxJbmZvX2ljb24gd2lkdGg9XCIwLjhyZW1cIiAvPiA8c3Bhbj57dC5idXR0b24uZXNzYWl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9Ub29sVGlwV3JhcHBlcj5cclxuICAgICAgICA8L0J1dHRvbkNvbnRhaW5lckluZm8+XHJcbiAgICAgICAgPEJ1dHRvbkNvbnRhaW5lclN1Yj57dC5idXR0b24uc291c2N9PC9CdXR0b25Db250YWluZXJTdWI+XHJcbiAgICAgIDwvQmxvY2tCdXR0b24+XHJcbiAgICA8L1ZpekNvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpekNhcmRcclxuIiwiaW1wb3J0IHsgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbnR5cGUgSWNvbiA9IHtcclxuICB3aWR0aD86IHN0cmluZ1xyXG4gIGhlaWdodD86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBTVkcgPSBzdHlsZWQuc3ZnYFxyXG4gIGZpbGw6IHZhcigtLXRleHQyKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFBhdGggPSBzdHlsZWQucGF0aGBcclxuICAvL3N0cm9rZTogdmFyKC0tdGV4dDEpO1xyXG4gIGZpbGw6IHZhcigtLXRleHQyKTtcclxuYFxyXG5cclxuY29uc3QgQm9va19pY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJY29uKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTVkdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCJcclxuICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgID5cclxuICAgICAgPFBhdGhcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEwXCJcclxuICAgICAgICBkPVwiTTUyLjY1NSAzNjAuMDQzYzM3LjYwOSAzLjQ0MyA3Ni41MzQgMTMuMDQ4IDExNS4yOTQgMjguODEzVjQyOS40TDkgNDAxLjEyN1Y2NC45MzFsNDMuNjU1IDcuNzU4VjM2MC4wNDN6TTI1NS45MDQgNDM2LjUxNnY4LjUyNmwtMzEuOTQ2LTUuNjg0di0yMy4yNzVjMTAuNzE0IDYuMDc4IDIxLjM0NSAxMi42NDMgMzEuODgzIDE5LjY4NnYuODNDMjU1Ljg2MiA0MzYuNTY4IDI1NS44ODMgNDM2LjU0NyAyNTUuOTA0IDQzNi41MTZ6XCJcclxuICAgICAgLz5cclxuICAgICAgPFBhdGhcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEwXCJcclxuICAgICAgICBkPVwiTTI1Ny4wOTkgMTE3LjcwOXYzMTguODkzbC0uNTk4LS4xMDUtLjM0NC0uMDYtLjE3OS0uMDMtLjA3NS0uMDE1LS4wNi0uMDE1VjExOS4yMDVjLjAxNS0uMDMuMDQ1LS4wNi4wNi0uMDl2LTEuNjE2bC4wOS4wMTUuMTY1LjAzLjM0NC4wNi40MDQuMDc1TDI1Ny4wOTkgMTE3LjcwOXpNODMuNzYxIDMyNi41NTNjMjQuNjQ0LS41MjkgNTQuMzQ5IDcuODgzIDg0LjE4OSAyNS4yMzV2MzcuMDY5Yy0zOC43Ni0xNS43NjUtNzcuNjg2LTI1LjM3LTExNS4yOTQtMjguODEzVjQxLjE1OWMxMC4yNzkuOTMzIDIwLjY2MSAyLjM0NCAzMS4xMDUgNC4yMTFDODMuNzYxIDQ1LjM3IDgzLjc2MSAzMjYuNTUzIDgzLjc2MSAzMjYuNTUzek0yNTUuODQxIDQzNC43MDF2MS4wNjhjLTEwLjUzOC03LjA0My0yMS4xNjktMTMuNjA4LTMxLjg4My0xOS42ODZ2LTIwLjE5NEMyMzUuMTcgNDA3LjM5MSAyNDUuOTA1IDQyMC4zMzUgMjU1Ljg0MSA0MzQuNzAxelwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgZD1cIlxyXG5cdFx0XHRNMjU3LjA5OSwxMTcuNzA5djMxOC44OTNjLTAuMDktMC4wNi0wLjE2NS0wLjExOS0wLjI1NC0wLjE2NWMtMC4xMTktMC4wOS0wLjIyNC0wLjE2NS0wLjM0NC0wLjI0XHJcblx0XHRcdGMtMC4wOS0wLjA2LTAuMTc5LTAuMTE5LTAuMjctMC4xNjVjLTAuMTA1LTAuMDktMC4yMjQtMC4xNjUtMC4zMjktMC4yMjRjLTAuMDE1LTAuMDE1LTAuMDQ1LTAuMDMtMC4wNi0wLjA0NVYxMTkuMjA1XHJcblx0XHRcdGMwLjAxNS0wLjAzLDAuMDQ1LTAuMDYsMC4wNi0wLjA5di0xLjcyMWMtMC4xOTUtMC4zLTAuMzg5LTAuNTk4LTAuNjEzLTAuODgzYzAuMjEsMC4xMTksMC40MDMsMC4yNTQsMC42MTMsMC40MDNcclxuXHRcdFx0YzAuMTk0LDAuMTE5LDAuNDAzLDAuMjU0LDAuNTk4LDAuMzg5YzAuMTE5LDAuMDc1LDAuMjI0LDAuMTQ5LDAuMzQ0LDAuMjRjMC4wMywwLjAxNSwwLjA3NSwwLjA0NSwwLjEwNSwwLjA2XHJcblx0XHRcdEMyNTYuOTk1LDExNy42NSwyNTcuMDU1LDExNy42OCwyNTcuMDk5LDExNy43MDl6XCJcclxuICAgICAgLz5cclxuICAgICAgPFBhdGhcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEwXCJcclxuICAgICAgICBkPVwiXHJcblx0XHRcdE0yNTUuOTA0LDExNy4zOTJ2MS43MjJjLTAuMDIxLDAuMDMxLTAuMDQxLDAuMDYyLTAuMDYyLDAuMDkzVjQzNC43Yy05LjkzNi0xNC4zNjUtMjAuNjcxLTI3LjMwOS0zMS44ODMtMzguODEyXHJcblx0XHRcdGMtMTcuODcxLTE4LjMzOC0zNi45NjYtMzMuMDQ1LTU2LjAwOC00NC4xMDFjLTI5Ljg0LTE3LjM1Mi01OS41NDUtMjUuNzY0LTg0LjE4OS0yNS4yMzVWOS4xNTFcclxuXHRcdFx0YzQ3Ljk0OS0xLjAwNiwxMTUuMDc2LDMxLjgxMSwxNjUuMSw5OC40NGMyLjE3OCwyLjkwNCw0LjMzNSw1Ljg4MSw2LjQzMSw4LjkyQzI1NS41MDksMTE2LjgwMSwyNTUuNzA3LDExNy4wOTIsMjU1LjkwNCwxMTcuMzkyelwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgZD1cIlxyXG5cdFx0XHRNMjU3LjE2LDExOS4yMDV2MzE3LjM5NmMtMC4wMTUtMC4wMy0wLjA0NS0wLjA2LTAuMDYtMC4wOWMtMC4wMy0wLjAzLTAuMDQ1LTAuMDc1LTAuMDc1LTAuMTA1XHJcblx0XHRcdGMtMC4wOS0wLjExOS0wLjE2NS0wLjI1NC0wLjI1NC0wLjM3NGMtMC4wOS0wLjEzNS0wLjE3OS0wLjI1NC0wLjI3LTAuMzc0Yy0wLjE5NS0wLjI5OS0wLjM4OS0wLjU4My0wLjU5OC0wLjg2OFxyXG5cdFx0XHRjMC0wLjAzLTAuMDMtMC4wNi0wLjA2LTAuMDlWMTE5LjIwNWMwLjAxNS0wLjAzLDAuMDQ1LTAuMDYsMC4wNi0wLjA5di0xLjcyMWMwLjA0NSwwLjA0NSwwLjA3NSwwLjA3NSwwLjA5LDAuMTE5XHJcblx0XHRcdGMwLjAzLDAuMDMsMC4wNDUsMC4wNiwwLjA2LDAuMDljMC4wMywwLjAzLDAuMDQ1LDAuMDQ1LDAuMDQ1LDAuMDc1YzAuMTQ5LDAuMTk1LDAuMjg0LDAuMzg5LDAuNDAzLDAuNTg0XHJcblx0XHRcdGMwLjIxLDAuMjg0LDAuNDAzLDAuNTY4LDAuNTk4LDAuODUzQzI1Ny4xMTQsMTE5LjE0NSwyNTcuMTQ0LDExOS4xNzUsMjU3LjE2LDExOS4yMDV6XCJcclxuICAgICAgLz5cclxuICAgICAgPFBhdGhcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEwXCJcclxuICAgICAgICBkPVwiXHJcblx0XHRcdE01MDQsNjQuOTI3VjQwMS4xM2wtMjQ2LjkwMSw0My45MXYtOC41MjhjMC4wMTUsMC4wMywwLjA0NSwwLjA2LDAuMDYsMC4wOXYtMC44MzhjNjYuMzk3LTQ0LjM4OSwxMzYuODQ4LTY5LjY0MywyMDMuMTg1LTc1LjcxN1xyXG5cdFx0XHRWNzIuNjkxTDUwNCw2NC45Mjd6XCJcclxuICAgICAgLz5cclxuICAgICAgPFBhdGhcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEwXCJcclxuICAgICAgICBkPVwiXHJcblx0XHRcdE0yNTcuMTYsMTE5LjIwNXYzMTcuMTcybC0wLjA2LDAuMDE1bC0wLjA3NSwwLjAxNWwtMC4xNzksMC4wM2wtMC4zNDQsMC4wNmwtMC41OTgsMC4xMDVWMTE3LjcwOWwwLjE5NC0wLjAzbDAuNDAzLTAuMDc1XHJcblx0XHRcdGwwLjM0NC0wLjA2bDAuMTY1LTAuMDNsMC4wOS0wLjAxNXYxLjYxNkMyNTcuMTE0LDExOS4xNDUsMjU3LjE0NCwxMTkuMTc1LDI1Ny4xNiwxMTkuMjA1elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgZD1cIlxyXG5cdFx0XHRNNDYwLjM0NCw0MS4xNTR2MzE4Ljg5M2MtNjYuMzM3LDYuMDc0LTEzNi43ODgsMzEuMzI4LTIwMy4xODUsNzUuNzE3di0xLjA2MmM1MC41OTgtNzMuMTc0LDEyMS44NTctMTA5LjIxNSwxNzIuMDgxLTEwOC4xNTNcclxuXHRcdFx0VjQ1LjM3M0M0MzkuNjgzLDQzLjUwMyw0NTAuMDY2LDQyLjA5Niw0NjAuMzQ0LDQxLjE1NHpcIlxyXG4gICAgICAvPlxyXG4gICAgICA8UGF0aFxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMTBcIlxyXG4gICAgICAgIGQ9XCJcclxuXHRcdFx0TTI1Ny4wOTksMTE5LjExNWMwLjAxNSwwLjAzLDAuMDQ1LDAuMDYsMC4wNiwwLjA5djMxNi41NThjLTAuMDE1LDAuMDE1LTAuMDQ1LDAuMDMtMC4wNiwwLjA0NVxyXG5cdFx0XHRjLTAuMTA1LDAuMDYtMC4yMjQsMC4xMzUtMC4zMjksMC4yMjRjLTAuMDksMC4wNDUtMC4xNzksMC4xMDUtMC4yNywwLjE2NWMtMC4xMTksMC4wNzUtMC4yMjQsMC4xNDktMC4zNDQsMC4yNFxyXG5cdFx0XHRjLTAuMDksMC4wNDUtMC4xNjUsMC4xMDUtMC4yNTQsMC4xNjVWMTE3LjcwOWMwLjA0NS0wLjAzLDAuMTA1LTAuMDYsMC4xNDktMC4xMDVjMC4wMy0wLjAxNSwwLjA3NS0wLjA0NSwwLjEwNS0wLjA2XHJcblx0XHRcdGMwLjExOS0wLjA5LDAuMjI0LTAuMTY1LDAuMzQ0LTAuMjRjMC4xOTUtMC4xMzUsMC40MDMtMC4yNywwLjU5OC0wLjM4OWMwLjIxLTAuMTQ5LDAuNDA0LTAuMjg0LDAuNjEzLTAuNDAzXHJcblx0XHRcdGMtMC4yMjQsMC4yODQtMC40MTksMC41ODMtMC42MTMsMC44ODN2MS43MkgyNTcuMDk5elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgZD1cIk00MjkuMjQgOS4xNTJ2MzE3LjM5NmMtNTAuMjI0LTEuMDYyLTEyMS40ODMgMzQuOTc4LTE3Mi4wODEgMTA4LjE1M1YxMTkuMjA1Yy0uMDE1LS4wMy0uMDQ1LS4wNi0uMDYtLjA5di0xLjcyMWMuMTk1LS4zLjM4OS0uNTk4LjYxMy0uODgzIDIuMTEtMy4wMzcgNC4yNDktNi4wMTUgNi40NDgtOC45MTdDMzE0LjE3NSA0MC45NiAzODEuMjkxIDguMTUgNDI5LjI0IDkuMTUyek0yMjMuOTU4IDM5NS44ODl2MTA3Ljk4MmwtMjguMDA0LTI4LjAwNC0yOC4wMDQgMjguMDA0VjM1MS43ODdDMTg2Ljk5MyAzNjIuODQ0IDIwNi4wODcgMzc3LjU1MSAyMjMuOTU4IDM5NS44ODl6XCJcclxuICAgICAgLz5cclxuICAgIDwvU1ZHPlxyXG4gIClcclxufVxyXG5cclxuQm9va19pY29uLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogXCIxLjZyZW1cIixcclxuICBoZWlnaHQ6IFwiMS42cmVtXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tfaWNvblxyXG4iLCJpbXBvcnQgeyBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuaW50ZXJmYWNlIEljb24gZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XHJcbiAgd2lkdGg/OiBzdHJpbmdcclxuICBoZWlnaHQ/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgU1ZHID0gc3R5bGVkLnN2Z2BcclxuICBmaWxsOiB1cmwoI2dyYWRpZW50KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IENoZWNrTWFya19pY29uID0gKHsgd2lkdGgsIGhlaWdodCwgLi4ucHJvcHMgfTogSWNvbikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U1ZHIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxTcGFjZT1cInByZXNlcnZlXCI+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRpZW50XCIgeDE9XCIwJVwiIHkxPVwiMCVcIiB4Mj1cIjEwMCVcIiB5Mj1cIjAlXCI+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiMwNWFcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiMwYTVcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPHVzZSBocmVmPVwiI2NoZWNrbWFyay1pY29uXCIgLz5cclxuICAgIDwvU1ZHPlxyXG4gIClcclxufVxyXG5cclxuQ2hlY2tNYXJrX2ljb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIHdpZHRoOiBcIjEuNnJlbVwiLFxyXG4gIGhlaWdodDogXCIxLjZyZW1cIixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tNYXJrX2ljb25cclxuIiwiaW1wb3J0IHsgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbnR5cGUgSWNvbiA9IHtcclxuICB3aWR0aD86IHN0cmluZ1xyXG4gIGhlaWdodD86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBTVkcgPSBzdHlsZWQuc3ZnYFxyXG4gIC5zdDAge1xyXG4gICAgZmlsbDogIzFhNzNlODtcclxuICB9XHJcbiAgLnN0MSB7XHJcbiAgICBmaWxsOiAjZWE0MzM1O1xyXG4gIH1cclxuICAuc3QyIHtcclxuICAgIGZpbGw6ICM0Mjg1ZjQ7XHJcbiAgfVxyXG4gIC5zdDMge1xyXG4gICAgZmlsbDogI2ZiYmMwNDtcclxuICB9XHJcbiAgLnN0NCB7XHJcbiAgICBmaWxsOiAjMzRhODUzO1xyXG4gIH1cclxuICAuc3Q1IHtcclxuICAgIGZpbGw6ICM0Y2FmNTA7XHJcbiAgfVxyXG4gIC5zdDYge1xyXG4gICAgZmlsbDogIzFlODhlNTtcclxuICB9XHJcbiAgLnN0NyB7XHJcbiAgICBmaWxsOiAjZTUzOTM1O1xyXG4gIH1cclxuICAuc3Q4IHtcclxuICAgIGZpbGw6ICNjNjI4Mjg7XHJcbiAgfVxyXG4gIC5zdDkge1xyXG4gICAgZmlsbDogI2ZiYzAyZDtcclxuICB9XHJcbiAgLnN0MTAge1xyXG4gICAgZmlsbDogIzE1NjVjMDtcclxuICB9XHJcbiAgLnN0MTEge1xyXG4gICAgZmlsbDogIzJlN2QzMjtcclxuICB9XHJcbiAgLnN0MTIge1xyXG4gICAgZmlsbDogI2Y2YjcwNDtcclxuICB9XHJcbiAgLnN0MTMge1xyXG4gICAgZmlsbDogI2U1NDMzNTtcclxuICB9XHJcbiAgLnN0MTQge1xyXG4gICAgZmlsbDogIzQyODBlZjtcclxuICB9XHJcbiAgLnN0MTUge1xyXG4gICAgZmlsbDogIzM0YTM1MztcclxuICB9XHJcbiAgLnN0MTYge1xyXG4gICAgY2xpcC1wYXRoOiB1cmwoI1NWR0lEXzJfKTtcclxuICB9XHJcbiAgLnN0MTcge1xyXG4gICAgZmlsbDogIzE4ODAzODtcclxuICB9XHJcbiAgLnN0MTgge1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgZmlsbDogI2ZmZmZmZjtcclxuICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7XHJcbiAgfVxyXG4gIC5zdDE5IHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIGZpbGw6ICMwZDY1MmQ7XHJcbiAgICBlbmFibGUtYmFja2dyb3VuZDogbmV3O1xyXG4gIH1cclxuICAuc3QyMCB7XHJcbiAgICBjbGlwLXBhdGg6IHVybCgjU1ZHSURfNF8pO1xyXG4gIH1cclxuICAuc3QyMSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBmaWxsOiB1cmwoI180NV9zaGFkb3dfMV8pO1xyXG4gICAgZW5hYmxlLWJhY2tncm91bmQ6IG5ldztcclxuICB9XHJcbiAgLnN0MjIge1xyXG4gICAgY2xpcC1wYXRoOiB1cmwoI1NWR0lEXzZfKTtcclxuICB9XHJcbiAgLnN0MjMge1xyXG4gICAgZmlsbDogI2ZhN2IxNztcclxuICB9XHJcbiAgLnN0MjQge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgZmlsbDogIzE3NGVhNjtcclxuICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7XHJcbiAgfVxyXG4gIC5zdDI1IHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIGZpbGw6ICNhNTBlMGU7XHJcbiAgICBlbmFibGUtYmFja2dyb3VuZDogbmV3O1xyXG4gIH1cclxuICAuc3QyNiB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBmaWxsOiAjZTM3NDAwO1xyXG4gICAgZW5hYmxlLWJhY2tncm91bmQ6IG5ldztcclxuICB9XHJcbiAgLnN0Mjcge1xyXG4gICAgZmlsbDogdXJsKCNGaW5pc2hfbWFza18xXyk7XHJcbiAgfVxyXG4gIC5zdDI4IHtcclxuICAgIGZpbGw6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5zdDI5IHtcclxuICAgIGZpbGw6ICMwYzlkNTg7XHJcbiAgfVxyXG4gIC5zdDMwIHtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGZpbGw6ICMwMDRkNDA7XHJcbiAgICBlbmFibGUtYmFja2dyb3VuZDogbmV3O1xyXG4gIH1cclxuICAuc3QzMSB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBmaWxsOiAjM2UyNzIzO1xyXG4gICAgZW5hYmxlLWJhY2tncm91bmQ6IG5ldztcclxuICB9XHJcbiAgLnN0MzIge1xyXG4gICAgZmlsbDogI2ZmYzEwNztcclxuICB9XHJcbiAgLnN0MzMge1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgZmlsbDogIzFhMjM3ZTtcclxuICAgIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7XHJcbiAgfVxyXG4gIC5zdDM0IHtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICB9XHJcbiAgLnN0MzUge1xyXG4gICAgZmlsbDogIzFhMjM3ZTtcclxuICB9XHJcbiAgLnN0MzYge1xyXG4gICAgZmlsbDogdXJsKCNTVkdJRF83Xyk7XHJcbiAgfVxyXG4gIC5zdDM3IHtcclxuICAgIGZpbGw6ICNmYmJjMDU7XHJcbiAgfVxyXG4gIC5zdDM4IHtcclxuICAgIGNsaXAtcGF0aDogdXJsKCNTVkdJRF85Xyk7XHJcbiAgICBmaWxsOiAjZTUzOTM1O1xyXG4gIH1cclxuICAuc3QzOSB7XHJcbiAgICBjbGlwLXBhdGg6IHVybCgjU1ZHSURfMTFfKTtcclxuICAgIGZpbGw6ICNmYmMwMmQ7XHJcbiAgfVxyXG4gIC5zdDQwIHtcclxuICAgIGNsaXAtcGF0aDogdXJsKCNTVkdJRF8xM18pO1xyXG4gICAgZmlsbDogI2U1MzkzNTtcclxuICB9XHJcbiAgLnN0NDEge1xyXG4gICAgY2xpcC1wYXRoOiB1cmwoI1NWR0lEXzE1Xyk7XHJcbiAgICBmaWxsOiAjZmJjMDJkO1xyXG4gIH1cclxuICBlbmFibGUtYmFja2dyb3VuZDogbmV3IDAgMCAxNTAgMTUwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbmBcclxuXHJcbmNvbnN0IEdvb2dsZSA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSWNvbikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U1ZHXHJcbiAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiXHJcbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3QxNFwiXHJcbiAgICAgICAgICBkPVwiTTEyMCw3Ni4xYzAtMy4xLTAuMy02LjMtMC44LTkuM0g3NS45djE3LjdoMjQuOGMtMSw1LjctNC4zLDEwLjctOS4yLDEzLjlsMTQuOCwxMS41ICAgQzExNSwxMDEuOCwxMjAsOTAsMTIwLDc2LjFMMTIwLDc2LjF6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdDE1XCJcclxuICAgICAgICAgIGQ9XCJNNzUuOSwxMjAuOWMxMi40LDAsMjIuOC00LjEsMzAuNC0xMS4xTDkxLjUsOTguNGMtNC4xLDIuOC05LjQsNC40LTE1LjYsNC40Yy0xMiwwLTIyLjEtOC4xLTI1LjgtMTguOSAgIEwzNC45LDk1LjZDNDIuNywxMTEuMSw1OC41LDEyMC45LDc1LjksMTIwLjl6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdDEyXCJcclxuICAgICAgICAgIGQ9XCJNNTAuMSw4My44Yy0xLjktNS43LTEuOS0xMS45LDAtMTcuNkwzNC45LDU0LjRjLTYuNSwxMy02LjUsMjguMywwLDQxLjJMNTAuMSw4My44elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3QxM1wiXHJcbiAgICAgICAgICBkPVwiTTc1LjksNDcuM2M2LjUtMC4xLDEyLjksMi40LDE3LjYsNi45TDEwNi42LDQxQzk4LjMsMzMuMiw4Ny4zLDI5LDc1LjksMjkuMWMtMTcuNCwwLTMzLjIsOS44LTQxLDI1LjMgICBsMTUuMiwxMS44QzUzLjgsNTUuMyw2My45LDQ3LjMsNzUuOSw0Ny4zelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9TVkc+XHJcbiAgKVxyXG59XHJcblxyXG5Hb29nbGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIHdpZHRoOiBcIjEuNnJlbVwiLFxyXG4gIGhlaWdodDogXCIxLjZyZW1cIixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlXHJcbiIsImltcG9ydCB7IElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5pbnRlcmZhY2UgSWNvbiBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcclxuICB3aWR0aD86IHN0cmluZ1xyXG4gIGhlaWdodD86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBTVkcgPSBzdHlsZWQuc3ZnYFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuY29uc3QgUGF0aCA9IHN0eWxlZC5wYXRoYFxyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1pbmRlbnQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBpc29sYXRpb246IGF1dG87XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBmaWxsOiB2YXIoLS10ZXh0Mik7XHJcbmBcclxuXHJcbmNvbnN0IEluZm9faWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQsIC4uLnByb3BzIH06IEljb24pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNWR1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICA+XHJcbiAgICAgIDxQYXRoXHJcbiAgICAgICAgZD1cIk0gOC41MDU4NTk0IDEgQyA0LjY0NTc4ODQgMSAxLjUwNTg1OTQgNC4xNCAxLjUwNTg1OTQgOCBDIDEuNTA1ODU5NCAxMS44NjAxIDQuNjQ1Nzg4NCAxNSA4LjUwNTg1OTQgMTUgQyAxMi4zNjU5MyAxNSAxNS41MDU4NTkgMTEuODYwMSAxNS41MDU4NTkgOCBDIDE1LjUwNTg1OSA0LjE0IDEyLjM2NTkzIDEgOC41MDU4NTk0IDEgeiBNIDguNTA1ODU5NCAyIEMgMTEuODI1NDkgMiAxNC41MDU4NTkgNC42ODA0IDE0LjUwNTg1OSA4IEMgMTQuNTA1ODU5IDExLjMxOTcgMTEuODI1NDkgMTQgOC41MDU4NTk0IDE0IEMgNS4xODYyMjg2IDE0IDIuNTA1ODU5NCAxMS4zMTk3IDIuNTA1ODU5NCA4IEMgMi41MDU4NTk0IDQuNjgwNCA1LjE4NjIyODYgMiA4LjUwNTg1OTQgMiB6IE0gOC4wMDU4NTk0IDQgTCA4LjAwNTg1OTQgNSBMIDkuMDA1ODU5NCA1IEwgOS4wMDU4NTk0IDQgTCA4LjAwNTg1OTQgNCB6IE0gOC4wMDU4NTk0IDYgTCA4LjAwNTg1OTQgMTIgTCA5LjAwNTg1OTQgMTIgTCA5LjAwNTg1OTQgNiBMIDguMDA1ODU5NCA2IHogXCJcclxuICAgICAgICBjb2xvcj1cIiMwMDBcIlxyXG4gICAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPVwiYWNjdW11bGF0ZVwiXHJcbiAgICAgICAgZm9udC1mYW1pbHk9XCJzYW5zLXNlcmlmXCJcclxuICAgICAgICBmb250LXdlaWdodD1cIjQwMFwiXHJcbiAgICAgICAgb3ZlcmZsb3c9XCJ2aXNpYmxlXCJcclxuICAgICAgLz5cclxuICAgIDwvU1ZHPlxyXG4gIClcclxufVxyXG5cclxuSW5mb19pY29uLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogXCIxLjZyZW1cIixcclxuICBoZWlnaHQ6IFwiMS42cmVtXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm9faWNvblxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG50eXBlIEljb24gPSB7XHJcbiAgd2lkdGg/OiBzdHJpbmdcclxuICBoZWlnaHQ/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgU1ZHID0gc3R5bGVkLnN2Z2BcclxuICBmaWxsOiB2YXIoLS10ZXh0Mik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIDpob3ZlciB7XHJcbiAgICBwb2x5bGluZSxcclxuICAgIHBhdGgge1xyXG4gICAgICBmaWxsOiB2YXIoLS1icmFuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBQYXRoID0gc3R5bGVkLnBhdGhgXHJcbiAgZmlsbDogdmFyKC0tdGV4dDIpO1xyXG5gXHJcbmNvbnN0IFBvbHlsaW5lID0gc3R5bGVkLnBvbHlsaW5lYFxyXG4gIGZpbGw6IHZhcigtLXRleHQyKTtcclxuYFxyXG5cclxuY29uc3QgU2hhcmUgPSAoeyB3aWR0aCwgaGVpZ2h0IH06IEljb24pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNWR1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDY0IDY0XCJcclxuICAgICAgdmlld0JveD1cIjAgMCA2NCA2NFwiXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICA+XHJcbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyODAgMzgwKVwiPlxyXG4gICAgICAgIDxQYXRoIGQ9XCJNLTI2NC4yLTMzOS45Yy00LjQgMC03LjktMy41LTcuOS03LjkgMC00LjQgMy41LTcuOSA3LjktNy45IDQuNCAwIDcuOSAzLjUgNy45IDcuOUMtMjU2LjMtMzQzLjUtMjU5LjgtMzM5LjktMjY0LjItMzM5LjlMLTI2NC4yLTMzOS45ek0tMjY0LjItMzUyLjhjLTIuNyAwLTQuOSAyLjItNC45IDQuOSAwIDIuNyAyLjIgNC45IDQuOSA0LjkgMi43IDAgNC45LTIuMiA0LjktNC45Qy0yNTkuMy0zNTAuNS0yNjEuNS0zNTIuOC0yNjQuMi0zNTIuOEwtMjY0LjItMzUyLjh6TS0yMzIuMS0zNTZjLTQuNCAwLTcuOS0zLjUtNy45LTcuOXMzLjUtNy45IDcuOS03LjkgNy45IDMuNSA3LjkgNy45Uy0yMjcuOC0zNTYtMjMyLjEtMzU2TC0yMzIuMS0zNTZ6TS0yMzIuMS0zNjguOGMtMi43IDAtNC45IDIuMi00LjkgNC45czIuMiA0LjkgNC45IDQuOSA0LjktMi4yIDQuOS00LjlTLTIyOS40LTM2OC44LTIzMi4xLTM2OC44TC0yMzIuMS0zNjguOHpNLTIzMi4xLTMyMy45Yy00LjQgMC03LjktMy41LTcuOS03LjlzMy41LTcuOSA3LjktNy45IDcuOSAzLjUgNy45IDcuOVMtMjI3LjgtMzIzLjktMjMyLjEtMzIzLjlMLTIzMi4xLTMyMy45ek0tMjMyLjEtMzM2LjdjLTIuNyAwLTQuOSAyLjItNC45IDQuOXMyLjIgNC45IDQuOSA0LjkgNC45LTIuMiA0LjktNC45Uy0yMjkuNC0zMzYuNy0yMzIuMS0zMzYuN0wtMjMyLjEtMzM2Ljd6XCIgLz5cclxuICAgICAgICA8UG9seWxpbmUgcG9pbnRzPVwiLTIzOC42IC0zMzMuMiAtMjU5LjIgLTM0My41IC0yNTcuOCAtMzQ2LjQgLTIzNy4xIC0zMzYuMSAtMjM4LjYgLTMzMy4yXCIgLz5cclxuICAgICAgICA8UG9seWxpbmUgcG9pbnRzPVwiLTI1Ny44IC0zNDkuMyAtMjU5LjIgLTM1Mi4xIC0yMzguNiAtMzYyLjQgLTIzNy4xIC0zNTkuNiAtMjU3LjggLTM0OS4zXCIgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9TVkc+XHJcbiAgKVxyXG59XHJcblxyXG5TaGFyZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6IFwiMS42cmVtXCIsXHJcbiAgaGVpZ2h0OiBcIjEuNnJlbVwiLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFyZVxyXG4iLCJpbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wc1dpdGhDaGlsZHJlbjx7fT4pID0+IHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj57Y2hpbGRyZW59PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBmciBmcm9tIFwiLi4vLi4vbG9jYWxlcy9mclwiXHJcbmltcG9ydCBDaGVja01hcmtfaWNvbiBmcm9tIFwiLi4vaWNvbi9DaGVja01hcmtfaWNvblwiXHJcblxyXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgaGVpZ2h0OiA3MnZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMXJlbSBhdXRvO1xyXG4gIH1cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcclxuICAgICAgJiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU2VjdGlvbjEgPSAoeyB0IH06IHsgdDogdHlwZW9mIGZyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPnt0Lmhlcm9fc2VjdGlvbi50aXRsZX08L2gxPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPENoZWNrTWFya19pY29uIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt0Lmhlcm9fc2VjdGlvbi5vcHRpb24xfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxDaGVja01hcmtfaWNvbiAvPlxyXG4gICAgICAgICAgICA8c3Bhbj57dC5oZXJvX3NlY3Rpb24ub3B0aW9uMn08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8Q2hlY2tNYXJrX2ljb24gLz5cclxuICAgICAgICAgICAgPHNwYW4+e3QuaGVyb19zZWN0aW9uLm9wdGlvbjN9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24xXHJcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcCwgZ2V0QXBwcyB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIlxyXG5pbXBvcnQgeyBhZGREb2MsIGNvbGxlY3Rpb24sIGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIlxyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxyXG59XHJcblxyXG5jb25zdCBmaXJlYmFzZUFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKVxyXG5jb25zdCBkYlN0b3JlID0gZ2V0RmlyZXN0b3JlKClcclxuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKVxyXG5cclxuZXhwb3J0IHsgZmlyZWJhc2VBcHAsIGRiU3RvcmUsIHN0b3JhZ2UsIGNvbGxlY3Rpb24sIGFkZERvYyB9XHJcbiIsImltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoUG9wdXAsXHJcbiAgc2lnbkluV2l0aFJlZGlyZWN0LFxyXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcclxuICBnZXRSZWRpcmVjdFJlc3VsdCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXHJcbmltcG9ydCB7IGZpcmViYXNlQXBwLCBkYlN0b3JlLCBjb2xsZWN0aW9uLCBhZGREb2MgfSBmcm9tIFwiLi4vZmlyZWJhc2VBdXRoXCJcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoZmlyZWJhc2VBcHApXHJcbmV4cG9ydCBjb25zdCBzaWduSW4gPSAobG9jYWxlOiBzdHJpbmcgPSBcImVuXCIpID0+IHtcclxuICBhdXRoLmxhbmd1YWdlQ29kZSA9IGxvY2FsZVxyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpXHJcbiAgLy9uZSBmb25jdGlvbm5lIHBhcyBjYXIgZmVybWUgbGEgcGFnZSBkZSBuZXh0XHJcbiAgLy8gc2lnbkluV2l0aFJlZGlyZWN0KGF1dGgsIHByb3ZpZGVyKVxyXG4gIC8vIGdldFJlZGlyZWN0UmVzdWx0KGF1dGgpXHJcbiAgLy8gICAudGhlbihyZXN1bHQgPT4ge1xyXG4gIC8vICAgICBjb25zdCBjcmVkZW50aWFsID0gR29vZ2xlQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWxGcm9tUmVzdWx0KHJlc3VsdCEpXHJcbiAgLy8gICAgIGNvbnN0IHRva2VuID0gY3JlZGVudGlhbCEuYWNjZXNzVG9rZW5cclxuICAvLyAgICAgY29uc3QgdXNlckNyZWRlbnRpYWxzID0gcmVzdWx0IS51c2VyXHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXJDcmVkZW50aWFscywgdHlwZW9mIHVzZXJDcmVkZW50aWFscylcclxuICAvLyAgIH0pXHJcbiAgLy8gICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gIC8vICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXHJcbiAgLy8gICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGVcclxuICAvLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZVxyXG4gIC8vICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgLy8gICAgIGNvbnN0IGVtYWlsID0gZXJyb3IuZW1haWxcclxuICAvLyAgICAgLy8gVGhlIEF1dGhDcmVkZW50aWFsIHR5cGUgdGhhdCB3YXMgdXNlZC5cclxuICAvLyAgICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbUVycm9yKGVycm9yKVxyXG4gIC8vICAgICAvLyAuLi5cclxuICAvLyAgIH0pXHJcblxyXG4gIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcclxuICAgIC50aGVuKGFzeW5jIHJlc3VsdCA9PiB7XHJcbiAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxyXG4gICAgICBjb25zdCBjcmVkZW50aWFsID0gR29vZ2xlQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWxGcm9tUmVzdWx0KHJlc3VsdClcclxuICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsIS5hY2Nlc3NUb2tlblxyXG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgY29uc3QgdXNlckNyZWRlbnRpYWxzID0gcmVzdWx0LnVzZXJcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJDcmVkZW50aWFscywgdHlwZW9mIHVzZXJDcmVkZW50aWFscylcclxuXHJcbiAgICAgIGNvbnN0IGRvY1VzZXIgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYlN0b3JlLCBcInVzZXJcIiksIHtcclxuICAgICAgICB1aWQ6IHVzZXJDcmVkZW50aWFscy51aWQsXHJcbiAgICAgICAgZW1haWw6IHVzZXJDcmVkZW50aWFscy5lbWFpbCxcclxuICAgICAgICBuYW1lOiB1c2VyQ3JlZGVudGlhbHMuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgcHJvdmlkZXI6IHVzZXJDcmVkZW50aWFscy5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZCxcclxuICAgICAgICBwaG90b1VybDogdXNlckNyZWRlbnRpYWxzLnBob3RvVVJMLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiB1c2VyQ3JlZGVudGlhbHMucGhvbmVOdW1iZXIsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHdyaXR0ZW4gd2l0aCBJRDogXCIsIGRvY1VzZXIuaWQpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlXHJcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcclxuICAgICAgLy8gVGhlIGVtYWlsIG9mIHRoZSB1c2VyJ3MgYWNjb3VudCB1c2VkLlxyXG4gICAgICBjb25zdCBlbWFpbCA9IGVycm9yLmVtYWlsXHJcbiAgICAgIC8vIFRoZSBBdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcilcclxuICAgICAgLy8gLi4uXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlLCBlbWFpbCwgY3JlZGVudGlhbCwgYXV0aClcclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IGZzIGZyb20gXCJmc1wiXHJcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCJcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxyXG5pbXBvcnQgcmVhZGluZ1RpbWUgZnJvbSBcInJlYWRpbmctdGltZVwiXHJcbmltcG9ydCB7IHN5bmMgfSBmcm9tIFwiZ2xvYlwiXHJcbmltcG9ydCB7IEludGVyRG9jcyB9IGZyb20gXCIuLi9AdHlwZXMvaW50ZXJmYWNlXCJcclxuaW1wb3J0IGZyIGZyb20gXCIuLi9sb2NhbGVzL2ZyXCJcclxuaW1wb3J0IGVuIGZyb20gXCIuLi9sb2NhbGVzL2VuXCJcclxuXHJcbmNvbnN0IHBvc3REaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCIvRGF0YS9Eb2NzXCIpXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxEb2NzID0gKGxvY2FsZTogXCJmclwiIHwgXCJlblwiID0gXCJmclwiKSA9PiB7XHJcbiAgY29uc3QgcG9zdHMgPSBnZXRTbHVncyhsb2NhbGUpXHJcbiAgICAubWFwKHNsdWcgPT4gZ2V0RG9jRnJvbVNsdWcoc2x1ZywgbG9jYWxlKSlcclxuICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGlmIChhLm1ldGEucHVibGlzaGVkQXQgPiBiLm1ldGEucHVibGlzaGVkQXQpIHJldHVybiAtMVxyXG4gICAgICBpZiAoYS5tZXRhLnB1Ymxpc2hlZEF0IDwgYi5tZXRhLnB1Ymxpc2hlZEF0KSByZXR1cm4gMVxyXG4gICAgICByZXR1cm4gMFxyXG4gICAgfSlcclxuICByZXR1cm4gcG9zdHNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNsdWdzID0gKGxvY2FsZTogXCJmclwiIHwgXCJlblwiID0gXCJmclwiKSA9PiB7XHJcbiAgY29uc3QgcGF0aHMgPSBzeW5jKGAke3Bvc3REaXJ9LyouJHtsb2NhbGV9Lm1keGApXHJcbiAgcmV0dXJuIHBhdGhzLm1hcChwYXRoID0+IHtcclxuICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdChcIi9cIilcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV1cclxuICAgIGNvbnN0IFtzbHVnLCBsb2NhbGUsIF9leHRdID0gZmlsZU5hbWUuc3BsaXQoXCIuXCIpXHJcbiAgICByZXR1cm4gc2x1Z1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXREb2NGcm9tU2x1ZyA9IChcclxuICBzbHVnOiBzdHJpbmcsXHJcbiAgbG9jYWxlOiBcImZyXCIgfCBcImVuXCIgPSBcImZyXCJcclxuKTogSW50ZXJEb2NzID0+IHtcclxuICBjb25zdCBwb3N0UGF0aCA9IHBhdGguam9pbihwb3N0RGlyLCBgJHtzbHVnfS4ke2xvY2FsZX0ubWR4YClcclxuICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMocG9zdFBhdGgpXHJcbiAgY29uc3QgeyBjb250ZW50LCBkYXRhIH0gPSBtYXR0ZXIoc291cmNlKVxyXG4gIGNvbnN0IHQgPSBsb2NhbGUgPT09IFwiZW5cIiA/IGVuIDogZnJcclxuICByZXR1cm4ge1xyXG4gICAgY29udGVudCxcclxuICAgIG1ldGE6IHtcclxuICAgICAgc2x1ZyxcclxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUgPz8gc2x1ZyxcclxuICAgICAgdGFnczogKGRhdGEudGFncyA/PyBbXSkuc29ydCgpLFxyXG4gICAgICBwdWJsaXNoZWRBdDogKGRhdGEucHVibGlzaGVkQXQgPz8gbmV3IERhdGUoKSkudG9TdHJpbmcoKSxcclxuICAgICAgY2hhcnRJbmZvOiB0LmNoYXJ0cy5maW5kKGNoYXJ0ID0+IGNoYXJ0LmlkID09PSBkYXRhLmdyYXBoSWQpISxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaGVyb19zZWN0aW9uLFxyXG4gIG5hdkJhcixcclxuICBzZW8sXHJcbiAgY2hhcnRzLFxyXG4gIGJ1dHRvbixcclxuICB0b29sdGlwLFxyXG4gIGF1dHJlVGV4dCxcclxuICByZWNhcCxcclxufSBmcm9tIFwiLi4vLi4vRGF0YS9jb21tb25cIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBkb2M6IGJ1dHRvbi5kb2NbXCJlblwiXSxcclxuICAgIGVzc2FpOiBidXR0b24uZXNzYWlbXCJlblwiXSxcclxuICAgIHNvdXNjOiBidXR0b24uc291c2NbXCJlblwiXSxcclxuICAgIGFjY291bnQ6IGJ1dHRvbi5hY2NvdW50W1wiZW5cIl0sXHJcbiAgICBzaGFyZTogYnV0dG9uLnNoYXJlW1wiZW5cIl0sXHJcbiAgfSxcclxuICB0b29sdGlwOiB7XHJcbiAgICBkb2M6IHRvb2x0aXAuZG9jW1wiZW5cIl0sXHJcbiAgICBlc3NhaTogdG9vbHRpcC5lc3NhaVtcImVuXCJdLFxyXG4gIH0sXHJcbiAgYXV0cmVUZXh0OiB7XHJcbiAgICBhZGQ6IGF1dHJlVGV4dC5hZGRbXCJlblwiXSxcclxuICB9LFxyXG4gIG5hdmJhcjoge1xyXG4gICAgbGluazE6IG5hdkJhci5saW5rMVtcImVuXCJdLFxyXG4gICAgbGluazI6IG5hdkJhci5saW5rMltcImVuXCJdLFxyXG4gICAgbGluazM6IG5hdkJhci5saW5rM1tcImVuXCJdLFxyXG4gICAgbGluazQ6IG5hdkJhci5saW5rNFtcImVuXCJdLFxyXG4gIH0sXHJcbiAgcmVjYXA6IHtcclxuICAgIGNyZWRpdDogcmVjYXAuY3JlZGl0W1wiZW5cIl0sXHJcbiAgICBzdWJzYzogcmVjYXAuc3Vic2NbXCJlblwiXSxcclxuICB9LFxyXG4gIHNlbzoge1xyXG4gICAgbmFtZTogc2VvLm5hbWUsXHJcbiAgICB0aXRsZTogc2VvLnRpdGxlW1wiZW5cIl0sXHJcbiAgfSxcclxuICBoZXJvX3NlY3Rpb246IHtcclxuICAgIHRpdGxlOiBoZXJvX3NlY3Rpb24udGl0bGUsXHJcbiAgICBvcHRpb24xOiBoZXJvX3NlY3Rpb24ub3B0aW9uMVtcImVuXCJdLFxyXG4gICAgb3B0aW9uMjogaGVyb19zZWN0aW9uLm9wdGlvbjJbXCJlblwiXSxcclxuICAgIG9wdGlvbjM6IGhlcm9fc2VjdGlvbi5vcHRpb24zW1wiZW5cIl0sXHJcbiAgfSxcclxuICBjaGFydHM6IGNoYXJ0cy5tYXAodmFsID0+IHtcclxuICAgIHJldHVybiB7IC4uLnZhbCwgbmFtZTogdmFsLm5hbWVbXCJlblwiXSwgZGVzYzogdmFsLmRlc2NbXCJlblwiXSB9XHJcbiAgfSksXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBoZXJvX3NlY3Rpb24sXHJcbiAgbmF2QmFyLFxyXG4gIHNlbyxcclxuICBjaGFydHMsXHJcbiAgYnV0dG9uLFxyXG4gIHRvb2x0aXAsXHJcbiAgYXV0cmVUZXh0LFxyXG4gIHJlY2FwLFxyXG59IGZyb20gXCIuLi8uLi9EYXRhL2NvbW1vblwiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBidXR0b246IHtcclxuICAgIGRvYzogYnV0dG9uLmRvY1tcImZyXCJdLFxyXG4gICAgZXNzYWk6IGJ1dHRvbi5lc3NhaVtcImZyXCJdLFxyXG4gICAgc291c2M6IGJ1dHRvbi5zb3VzY1tcImZyXCJdLFxyXG4gICAgYWNjb3VudDogYnV0dG9uLmFjY291bnRbXCJmclwiXSxcclxuICAgIHNoYXJlOiBidXR0b24uc2hhcmVbXCJmclwiXSxcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGRvYzogdG9vbHRpcC5kb2NbXCJmclwiXSxcclxuICAgIGVzc2FpOiB0b29sdGlwLmVzc2FpW1wiZnJcIl0sXHJcbiAgfSxcclxuICBhdXRyZVRleHQ6IHtcclxuICAgIGFkZDogYXV0cmVUZXh0LmFkZFtcImZyXCJdLFxyXG4gIH0sXHJcbiAgbmF2YmFyOiB7XHJcbiAgICBsaW5rMTogbmF2QmFyLmxpbmsxW1wiZnJcIl0sXHJcbiAgICBsaW5rMjogbmF2QmFyLmxpbmsyW1wiZnJcIl0sXHJcbiAgICBsaW5rMzogbmF2QmFyLmxpbmszW1wiZnJcIl0sXHJcbiAgICBsaW5rNDogbmF2QmFyLmxpbms0W1wiZnJcIl0sXHJcbiAgfSxcclxuICByZWNhcDoge1xyXG4gICAgY3JlZGl0OiByZWNhcC5jcmVkaXRbXCJmclwiXSxcclxuICAgIHN1YnNjOiByZWNhcC5zdWJzY1tcImZyXCJdLFxyXG4gIH0sXHJcbiAgc2VvOiB7XHJcbiAgICBuYW1lOiBzZW8ubmFtZSxcclxuICAgIHRpdGxlOiBzZW8udGl0bGVbXCJmclwiXSxcclxuICB9LFxyXG4gIGhlcm9fc2VjdGlvbjoge1xyXG4gICAgdGl0bGU6IGhlcm9fc2VjdGlvbi50aXRsZSxcclxuICAgIG9wdGlvbjE6IGhlcm9fc2VjdGlvbi5vcHRpb24xW1wiZnJcIl0sXHJcbiAgICBvcHRpb24yOiBoZXJvX3NlY3Rpb24ub3B0aW9uMltcImZyXCJdLFxyXG4gICAgb3B0aW9uMzogaGVyb19zZWN0aW9uLm9wdGlvbjNbXCJmclwiXSxcclxuICB9LFxyXG4gIGNoYXJ0czogY2hhcnRzLm1hcCh2YWwgPT4ge1xyXG4gICAgcmV0dXJuIHsgLi4udmFsLCBuYW1lOiB2YWwubmFtZVtcImZyXCJdLCBkZXNjOiB2YWwuZGVzY1tcImZyXCJdIH1cclxuICB9KSxcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9Db250YWluZXJcIlxyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXHJcbmltcG9ydCBTZWN0aW9uMSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9TZWN0aW9uMVwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IGZyIGZyb20gXCIuLi9sb2NhbGVzL2ZyXCJcclxuaW1wb3J0IGVuIGZyb20gXCIuLi9sb2NhbGVzL2VuXCJcclxuaW1wb3J0IFZpekNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZWxlbWVudHMvVml6Q2FyZFwiXHJcbmltcG9ydCBSZWNhcEFjY291bnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZWxlbWVudHMvUmVjYXBBY2NvdW50XCJcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcclxuaW1wb3J0IHsgZmlyZWJhc2VBcHAgfSBmcm9tIFwiLi4vZmlyZWJhc2VBdXRoXCJcclxuaW1wb3J0IHsgZ2V0QWxsRG9jcyB9IGZyb20gXCIuLi9saWIvbWR4XCJcclxuaW1wb3J0IHsgSW50ZXJEb2NzLCBsb2NhbGUgfSBmcm9tIFwiLi4vQHR5cGVzL2ludGVyZmFjZVwiXHJcblxyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChmaXJlYmFzZUFwcClcclxuY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAwIDAgMC41cmVtIDA7XHJcbmBcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHsgZG9jcywgbG9jYWxlIH06IHsgZG9jczogSW50ZXJEb2NzW107IGxvY2FsZTogbG9jYWxlIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhkb2NzKVxyXG4gIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcclxuICBjb25zdCB0ID0gbG9jYWxlID09PSBcImZyXCIgPyBmciA6IGVuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZWN0aW9uMSB0PXt0fSAvPlxyXG4gICAgICA8UmVjYXBBY2NvdW50IHQ9e3R9IGNvbm5lY3RlZD17dXNlciA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIHtkb2NzLm1hcCgodmFsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxWaXpDYXJkXHJcbiAgICAgICAgICAgICAgdG9vbD17dmFsLm1ldGEuY2hhcnRJbmZvLnZpelRvb2x9XHJcbiAgICAgICAgICAgICAgZGVzYz17dmFsLm1ldGEuY2hhcnRJbmZvLmRlc2N9XHJcbiAgICAgICAgICAgICAgbGluaz17YC9kb2NzLyR7dmFsLm1ldGEuc2x1Z31gfVxyXG4gICAgICAgICAgICAgIGxpbmtfaW1hZ2U9e3ZhbC5tZXRhLmNoYXJ0SW5mby5saW5rX2ltYWdlfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt2YWwubWV0YS5jaGFydEluZm8ubmFtZX1cclxuICAgICAgICAgICAgICBhZGREYXRlPXt2YWwubWV0YS5jaGFydEluZm8uYWRkZWRBdH1cclxuICAgICAgICAgICAgICBrZXk9e3ZhbC5tZXRhLmNoYXJ0SW5mby5pZH1cclxuICAgICAgICAgICAgICB0PXt0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IGxvY2FsZSB9OiB7IGxvY2FsZTogbG9jYWxlIH0pIHtcclxuICBjb25zdCBkb2NzID0gZ2V0QWxsRG9jcyhsb2NhbGUpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRvY3MsIGxvY2FsZSB9LFxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnbG9iXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsibmF2QmFyIiwibGluazEiLCJmciIsImVuIiwibGluazIiLCJsaW5rMyIsImxpbms0Iiwic2VvIiwibmFtZSIsInRpdGxlIiwiaGVyb19zZWN0aW9uIiwib3B0aW9uMSIsIm9wdGlvbjIiLCJvcHRpb24zIiwiYnV0dG9uIiwiZG9jIiwiZXNzYWkiLCJzb3VzYyIsInNoYXJlIiwiYWNjb3VudCIsInRvb2x0aXAiLCJhdXRyZVRleHQiLCJhZGQiLCJyZWNhcCIsImNyZWRpdCIsInN1YnNjIiwiY2hhcnRzIiwiaWQiLCJsaW5rX2ltYWdlIiwiZGVzYyIsImFkZGVkQXQiLCJsaW5rX3BhZ2UiLCJ2aXpUb29sIiwiY2hhcnRDb21wb25lbnQiLCJzb3VyY2UiLCJjcmVkaXRzIiwiZGF0YSIsImxhYmVscyIsImVmZmVjdGlmIiwidXNlUm91dGVyIiwiUmVhY3QiLCJzdHlsZWQiLCJzaWduSW4iLCJHb29nbGUiLCJCbG9ja1JlY2FwIiwiZGl2IiwiQnV0dG9uIiwiQ29ubmVjdENvbnRhaW5lciIsIkVzc2F5V3JhcHBlciIsIlN1YnNXcmFwcGVyIiwiQm91bGUiLCJwcm9wcyIsInRoZW1lIiwidmFsIiwiVGV4dCIsIlJlY2FwQWNjb3VudCIsInQiLCJjb25uZWN0ZWQiLCJyb3V0ZXIiLCJsb2NhbGUiLCJrZXlmcmFtZXMiLCJkaXNwbGF5VG9vbHRpcCIsIkRpdiIsImNsYXNzTmFtZVRvb2x0aXAiLCJ3aWR0aFRvb2x0aXAiLCJwb3NSZWxhdGl2Qm90dG9tUGVyY2VudCIsInBvc1JlbGF0aXZMZWZ0UGl4ZWwiLCJwb3NpdGlvbkFycm93UGVyY2VudCIsIlRvb2xUaXBXcmFwcGVyIiwiY2hpbGRyZW4iLCJ0b29sdGlwdGV4dCIsImRlZmF1bHRQcm9wcyIsIkxpbmsiLCJJbmZvX2ljb24iLCJCb29rX2ljb24iLCJTaGFyZSIsIlZpekNvbnRhaW5lciIsIkltZyIsImltZyIsIkRhdGUiLCJEZXNjVGV4dCIsIkJsb2NrQnV0dG9uIiwiQnV0dG9uQ29udGFpbmVyIiwiQnV0dG9uQ29udGFpbmVySW5mbyIsIkJ1dHRvbkNvbnRhaW5lclN1YiIsIlNwYWNlIiwiVG9vbCIsIlZpekNhcmQiLCJsaW5rIiwiYWRkRGF0ZSIsInRvb2wiLCJTVkciLCJzdmciLCJQYXRoIiwicGF0aCIsIndpZHRoIiwiaGVpZ2h0IiwiQ2hlY2tNYXJrX2ljb24iLCJQb2x5bGluZSIsInBvbHlsaW5lIiwiQ29udGFpbmVyIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJTZWN0aW9uMSIsImluaXRpYWxpemVBcHAiLCJnZXRBcHAiLCJnZXRBcHBzIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lEIiwiZmlyZWJhc2VBcHAiLCJsZW5ndGgiLCJkYlN0b3JlIiwic3RvcmFnZSIsImdldEF1dGgiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJhdXRoIiwibGFuZ3VhZ2VDb2RlIiwicHJvdmlkZXIiLCJ0aGVuIiwicmVzdWx0IiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXJDcmVkZW50aWFscyIsInVzZXIiLCJkb2NVc2VyIiwidWlkIiwiZW1haWwiLCJkaXNwbGF5TmFtZSIsInByb3ZpZGVyRGF0YSIsInByb3ZpZGVySWQiLCJwaG90b1VybCIsInBob3RvVVJMIiwicGhvbmVOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiY3JlZGVudGlhbEZyb21FcnJvciIsImZzIiwibWF0dGVyIiwic3luYyIsInBvc3REaXIiLCJqb2luIiwiY3dkIiwiZ2V0QWxsRG9jcyIsInBvc3RzIiwiZ2V0U2x1Z3MiLCJtYXAiLCJzbHVnIiwiZ2V0RG9jRnJvbVNsdWciLCJzb3J0IiwiYSIsImIiLCJtZXRhIiwicHVibGlzaGVkQXQiLCJwYXRocyIsInBhcnRzIiwic3BsaXQiLCJmaWxlTmFtZSIsIl9leHQiLCJwb3N0UGF0aCIsInJlYWRGaWxlU3luYyIsImNvbnRlbnQiLCJ0YWdzIiwidG9TdHJpbmciLCJjaGFydEluZm8iLCJmaW5kIiwiY2hhcnQiLCJncmFwaElkIiwibmF2YmFyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiZXJyIiwiY3VyTG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJzbGljZSIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0Iiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsInVzZUF1dGhTdGF0ZSIsIkdyaWQiLCJIb21lUGFnZSIsImRvY3MiLCJsb2FkaW5nIiwiaSIsImdldFN0YXRpY1Byb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==