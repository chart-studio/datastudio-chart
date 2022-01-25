(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
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

/***/ "./components/elements/ButtonLang.tsx":
/*!********************************************!*\
  !*** ./components/elements/ButtonLang.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useClickAway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useClickAway */ "./hooks/useClickAway.ts");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown */ "./components/elements/Dropdown.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\ButtonLang.tsx";





const Svg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "ButtonLang__Svg",
  componentId: "sc-vtjfk3-0"
})(["width:1.2rem;height:1.2rem;fill:var(--text2);"]);

const ButtonLang = ({
  className
}) => {
  let {
    open,
    setOpen,
    refControler,
    refObject
  } = (0,_hooks_useClickAway__WEBPACK_IMPORTED_MODULE_1__.useClickAway)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      style: {
        position: "relative"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "button",
        "aria-label": "changer la langue",
        tabIndex: 0,
        className: className,
        onClick: () => setOpen(true),
        "data-toggle": "lang",
        ref: refControler,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Svg, {
          focusable: "false",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          className: "m-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
            d: "m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), !open ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Dropdown__WEBPACK_IMPORTED_MODULE_2__.default, {
        refObject: refObject,
        setOpen: setOpen,
        open: open
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLang);

/***/ }),

/***/ "./components/elements/ButtonLight.tsx":
/*!*********************************************!*\
  !*** ./components/elements/ButtonLight.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_toggleAllButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/toggleAllButton */ "./helpers/toggleAllButton.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\ButtonLight.tsx";



const Svg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "ButtonLight__Svg",
  componentId: "sc-1md8snh-0"
})(["width:1.2rem;height:1.2rem;fill:var(--text2);"]);

const ButtonLight = ({
  className,
  statusDark,
  setStatusDark
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
    type: "button",
    "aria-label": "mettre le ligth mode",
    tabIndex: 0,
    className: className,
    onClick: e => (0,_helpers_toggleAllButton__WEBPACK_IMPORTED_MODULE_1__.toggleButton)(e)(setStatusDark),
    id: "toggleButtonLight",
    "data-toggle": statusDark !== "true" ? "dark" : "light",
    children: [statusDark !== "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Svg, {
      focusable: "false",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      className: "m-1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
        d: "M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, undefined), statusDark === "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Svg, {
      focusable: "false",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      className: "m-1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
        d: "M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLight);

/***/ }),

/***/ "./components/elements/ButtonMobMenu.tsx":
/*!***********************************************!*\
  !*** ./components/elements/ButtonMobMenu.tsx ***!
  \***********************************************/
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
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\ButtonMobMenu.tsx";



const MenuMobWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ButtonMobMenu__MenuMobWrapper",
  componentId: "sc-1718pp1-0"
})(["cursor:pointer;@media (min-width:48rem){.btn-mob-nav{display:none;}}.menu_burger{width:1.4rem;height:2.5px;background:", ";transition:all var(--speed) ease-in-out;}.menu_burger::before,.menu_burger::after{content:\"\";position:absolute;width:1.4rem;height:2.5px;background:var(--text1);transition:all var(--speed) ease-in-out;border-radius:2px;}.menu_burger::before{transform:", ";}.menu_burger::after{transform:", ";}.btn-mob-nav.open .menu_burger{background:transparent;}.btn-mob-nav.open .menu_burger::before{transform:rotate(45deg);}.btn-mob-nav.open .menu_burger::after{transform:rotate(-45deg);}"], props => props.theme.nbLignes === 3 ? "var(--text1)" : "transparent", props => props.theme.nbLignes === 3 ? "translateY(-6px)" : "translateY(-4px)", props => props.theme.nbLignes === 3 ? "translateY(6px)" : "translateY(4px)");

const ButtonMobMenu = ({
  nbLignes,
  openMenu,
  setOpenMenu
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MenuMobWrapper, {
      theme: {
        nbLignes
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: `btn-mob-nav m-3 pt-3 pb-3 mr-4 ${openMenu ? "open" : ""}`,
        onClick: e => {
          setOpenMenu(prev => !prev);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "br-1 menu_burger"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

ButtonMobMenu.defaultProps = {
  nbLignes: 3
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonMobMenu);

/***/ }),

/***/ "./components/elements/Dropdown.tsx":
/*!******************************************!*\
  !*** ./components/elements/Dropdown.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\Dropdown.tsx";






const Div = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_spring__WEBPACK_IMPORTED_MODULE_0__.animated.div).withConfig({
  displayName: "Dropdown__Div",
  componentId: "sc-7gxomp-0"
})(["position:absolute;top:3.5rem;width:8rem;transform:translateX(-50%);background-color:var(--surface3);padding:0rem;overflow:hidden;border:solid 1px var(--surface4);"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
  displayName: "Dropdown__DropDownItem",
  componentId: "sc-7gxomp-1"
})(["height:50px;display:flex;align-items:center;background-color:transparent;color:", ";transition:background-color var(--speed);letter-spacing:0.8px;font-size:inherit;padding:1rem;border-bottom:1px solid var(--surface4);cursor:pointer;:hover{background-color:var(--surface4);}"], props => props.theme.activ === true ? "var(--brand)" : null);

const Dropdown = ({
  refObject,
  setOpen,
  open
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    locale
  } = router;
  const transitions = (0,react_spring__WEBPACK_IMPORTED_MODULE_0__.useTransition)(open, {
    from: {
      opacity: "0"
    },
    enter: {
      opacity: "1"
    },
    leave: {
      opacity: "0"
    },
    config: react_spring__WEBPACK_IMPORTED_MODULE_0__.config.stiff
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: transitions((styles, item) => item && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Div, {
      style: styles,
      className: "br-4",
      ref: refObject,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DropDownItem, {
        theme: {
          activ: locale === "en"
        },
        onClick: () => {
          setOpen(false);
          router.push(router.asPath, router.asPath, {
            locale: "en"
          });
        },
        children: "English"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DropDownItem, {
        theme: {
          activ: locale === "fr"
        },
        onClick: () => {
          setOpen(false);
          router.push(router.asPath, router.asPath, {
            locale: "fr"
          });
        },
        children: "Fran\xE7ais"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined))
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./components/elements/Navbar.tsx":
/*!****************************************!*\
  !*** ./components/elements/Navbar.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locales_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../locales/fr */ "./locales/fr/index.ts");
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../locales/en */ "./locales/en/index.ts");
/* harmony import */ var _hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useDarkMode */ "./hooks/useDarkMode.tsx");
/* harmony import */ var _hooks_useClickAway__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useClickAway */ "./hooks/useClickAway.ts");
/* harmony import */ var _ButtonLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ButtonLang */ "./components/elements/ButtonLang.tsx");
/* harmony import */ var _ButtonLight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ButtonLight */ "./components/elements/ButtonLight.tsx");
/* harmony import */ var _ButtonMobMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ButtonMobMenu */ "./components/elements/ButtonMobMenu.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\Navbar.tsx";














const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default().header.withConfig({
  displayName: "Navbar__Header",
  componentId: "sc-u19x74-0"
})(["height:4rem;@media (min-width:48rem){&{height:4rem;}}position:sticky;top:0;backdrop-filter:blur(20px);box-shadow:inset 0px 0px 1px var(--text2);z-index:100;"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Navbar__LogoWrapper",
  componentId: "sc-u19x74-1"
})(["position:relative;"]);
const ContainerNav = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Navbar__ContainerNav",
  componentId: "sc-u19x74-2"
})(["position:relative;z-index:1;font-weight:400;"]);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default().ul.withConfig({
  displayName: "Navbar__Menu",
  componentId: "sc-u19x74-3"
})(["text-align:center;height:100%;"]);
const MenuMobWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div).withConfig({
  displayName: "Navbar__MenuMobWrapper",
  componentId: "sc-u19x74-4"
})(["z-index:-1;width:100%;position:fixed;background-color:var(--surface1);@media (min-width:48rem){&{display:none;}}"]);
const MenuMob = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Navbar__MenuMob",
  componentId: "sc-u19x74-5"
})(["left:0;width:100%;margin:auto;ul{width:100%;padding:0;}"]);
const MenuMobNav = styled_components__WEBPACK_IMPORTED_MODULE_1___default().ul.withConfig({
  displayName: "Navbar__MenuMobNav",
  componentId: "sc-u19x74-6"
})(["font-weight:400;"]);
const LinkPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "Navbar__LinkPage",
  componentId: "sc-u19x74-7"
})(["font-weight:", ";background-color:", ";letter-spacing:", ";opacity:0.8;display:flex;position:relative;min-width:5rem;text-align:center;align-items:center;user-select:none;@media (min-width:48rem){&&::after{content:\"\";display:block;position:absolute;width:", ";border-bottom:solid 2px var(--brand);transition:width 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;bottom:0;}&&:hover::after{content:\"\";display:block;width:100%;border-bottom:solid 2px var(--brand);bottom:0;}}"], props => props.theme.active ? "600" : null, props => props.theme.active ? "var(--surface3)" : "transparent", props => props.theme.active ? "1.8px" : null, props => props.theme.active ? "100%" : "0%");
const ContainerImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Navbar__ContainerImage",
  componentId: "sc-u19x74-8"
})(["height:100%;img{object-fit:cover;}"]);

const NavBar = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "fr" ? _locales_fr__WEBPACK_IMPORTED_MODULE_5__.default : _locales_en__WEBPACK_IMPORTED_MODULE_6__.default;
  let [statusDark, setStatusDark] = (0,_hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_7__.useDarkMode)("", "statusDark");
  let {
    refControler,
    open,
    setOpen,
    refObject
  } = (0,_hooks_useClickAway__WEBPACK_IMPORTED_MODULE_8__.useClickAway)(false);
  const transitions = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition)(open, {
    from: {
      top: "-30rem"
    },
    enter: {
      top: "4rem"
    },
    leave: {
      top: "-30rem"
    },
    config: react_spring__WEBPACK_IMPORTED_MODULE_2__.config.stiff
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    console.log(router.pathname);
  }, [router]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Header, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ContainerNav, {
        className: "container-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LogoWrapper, {
          className: "m-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ContainerImage, {
                children: "LOGO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          className: "menu-desktop",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("nav", {
            "aria-label": "navigation principale",
            tabIndex: 0,
            style: {
              height: "100%",
              position: "relative"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Menu, {
              "aria-haspopup": "true",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                  className: "pt-2 pb-2 navLink",
                  theme: {
                    active: router.pathname === "/"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
                    className: "m-3",
                    rel: "noopener noreferrer",
                    style: {
                      width: "100%"
                    },
                    children: t.navbar.link1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "/pricing",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                  className: "pt-2 pb-2 navLink",
                  theme: {
                    active: router.asPath.includes("/pricing")
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
                    className: "m-3",
                    rel: "noopener noreferrer",
                    style: {
                      width: "100%"
                    },
                    children: t.navbar.link2
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "/about",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                  className: "pt-2 pb-2 navLink",
                  theme: {
                    active: router.asPath.includes("/about")
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
                    className: "m-3",
                    rel: "noopener noreferrer",
                    style: {
                      width: "100%"
                    },
                    children: t.navbar.link3
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "/contact",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                  className: "pt-2 pb-2 navLink",
                  theme: {
                    active: router.asPath.includes("/contact")
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
                    className: "m-3",
                    rel: "noopener noreferrer",
                    style: {
                      width: "100%"
                    },
                    children: t.navbar.link4
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          className: "space-nav"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ButtonLang__WEBPACK_IMPORTED_MODULE_9__.default, {
          className: "m-3 br-4 button p-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ButtonLight__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: "m-3 br-4 button p-1",
          statusDark: statusDark,
          setStatusDark: setStatusDark
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          ref: refControler,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ButtonMobMenu__WEBPACK_IMPORTED_MODULE_11__.default, {
            nbLignes: 2,
            openMenu: open,
            setOpenMenu: setOpen
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined), transitions((styles, item) => item && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(MenuMobWrapper, {
        className: "box-shadow-1",
        style: styles,
        ref: refObject,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(MenuMob, {
          className: "container-navMob",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(MenuMobNav, {
            "aria-haspopup": "true",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                className: "pt-2 pb-2 navLink mt-2",
                onClick: () => setOpen(false),
                theme: {
                  active: router.pathname === "/"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
                  className: "m-3",
                  rel: "noopener noreferrer",
                  children: t.navbar.link1
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/pricing",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                className: "pt-2 pb-2 navLink mt-2",
                onClick: () => setOpen(false),
                theme: {
                  active: router.asPath.includes("/pricing")
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
                  className: "m-3",
                  rel: "noopener noreferrer",
                  children: t.navbar.link2
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/about",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                className: "pt-2 pb-2 navLink mt-2",
                onClick: () => setOpen(false),
                theme: {
                  active: router.asPath.includes("/about")
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
                  className: "m-3",
                  rel: "noopener noreferrer",
                  children: t.navbar.link3
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/contact",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                className: "pt-2 pb-2 navLink",
                onClick: () => setOpen(false),
                theme: {
                  active: router.asPath.includes("/contact")
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
                  className: "m-3",
                  rel: "noopener noreferrer",
                  children: t.navbar.link4
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 15
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./helpers/darkModeFunc.ts":
/*!*********************************!*\
  !*** ./helpers/darkModeFunc.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkModeFunc": () => (/* binding */ darkModeFunc)
/* harmony export */ });
const darkModeFunc = statusDark => function darkModeFunc(setStatusDark) {
  let doc = document.firstElementChild;

  if (statusDark === "true") {
    doc.setAttribute("color-scheme", "light");
    setStatusDark("false");
    localStorage.setItem("statusDark", "false");
  } else {
    doc.setAttribute("color-scheme", "dark");
    setStatusDark("true");
    localStorage.setItem("statusDark", "true");
  }
};

/***/ }),

/***/ "./helpers/toggleAllButton.ts":
/*!************************************!*\
  !*** ./helpers/toggleAllButton.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleButton": () => (/* binding */ toggleButton)
/* harmony export */ });
/* harmony import */ var _darkModeFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./darkModeFunc */ "./helpers/darkModeFunc.ts");

function toggleButton(e) {
  e.preventDefault();

  if (e.currentTarget.dataset) {
    let toggle = e.currentTarget.dataset.toggle;

    if (toggle === "light" || toggle === "dark") {
      let statusDark = toggle === "light" ? "true" : "false";
      return (0,_darkModeFunc__WEBPACK_IMPORTED_MODULE_0__.darkModeFunc)(statusDark);
    }

    if (e.currentTarget.dataset.toggle === "lang") {
      console.log(e.currentTarget.dataset.toggle, "yes");
    }

    if (e.currentTarget.dataset.toggle === "search") {
      console.log(e.currentTarget.dataset.toggle, "yes");
    }
  }
}

/***/ }),

/***/ "./hooks/useClickAway.ts":
/*!*******************************!*\
  !*** ./hooks/useClickAway.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useClickAway": () => (/* binding */ useClickAway)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useClickAway = initialVal => {
  const refControler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const refObject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  let {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialVal);

  const handleClickOutside = event => {
    if (refControler.current && !refControler.current.contains(event.target) && refObject.current && !refObject.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleKeyPress = event => {
    if (event.key === "Escape") {
      if (open) {
        setOpen(false);
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("keydown", handleKeyPress, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("keydown", handleKeyPress, true);
    };
  }, [open]);
  return {
    open,
    setOpen,
    refControler,
    refObject
  };
};

/***/ }),

/***/ "./hooks/useDarkMode.tsx":
/*!*******************************!*\
  !*** ./hooks/useDarkMode.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDarkMode": () => (/* binding */ useDarkMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDarkMode(defaultVal, key) {
  const {
    0: statusDark,
    1: setStatusDark
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultVal);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const doc = document.firstElementChild;

    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      if (darkModeMediaQuery.matches && darkModeMediaQuery.media === "(prefers-color-scheme: dark)") {
        setStatusDark("true");
        localStorage.setItem("statusDark", "true");
      } //Ecouter les évènements


      darkModeMediaQuery.addEventListener("change", e => {
        const darkModeOn = e.matches;

        if (darkModeOn) {
          doc.setAttribute("color-scheme", "dark");
          setStatusDark("true");
          localStorage.setItem("statusDark", "true");
        } else {
          doc.setAttribute("color-scheme", "light");
          setStatusDark("false");
          localStorage.setItem("statusDark", "false");
        }
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const val = localStorage.getItem(key);

    if (val !== null) {
      setStatusDark(val);
    }
  }, [key]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const doc = document.firstElementChild;

    if (statusDark === "true") {
      doc.setAttribute("color-scheme", "dark");
    } else if (statusDark === "false") {
      doc.setAttribute("color-scheme", "light");
    }
  }, [statusDark]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.localStorage.setItem(key, statusDark);
  }, [key, statusDark]);
  return [statusDark, setStatusDark];
}

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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var _components_elements_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/elements/Navbar */ "./components/elements/Navbar.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/GlobalStyle */ "./styles/GlobalStyle.tsx");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
      theme: {},
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_elements_Navbar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./styles/GlobalStyle.tsx":
/*!********************************!*\
  !*** ./styles/GlobalStyle.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 //variables

const ratioMargin = "0.125rem";
const ratioPadding = "0.125rem";
const ratioBorderRadius = "2px";
const ratioBorderRadiusPer = "25%";
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([".m-1{margin:calc(", " * 2 * 1)}.m-2{margin:calc(", " * 2 * 2)}.m-3{margin:calc(", " * 2 * 3)}.m-4{margin:calc(", " * 2 * 4)}.m-5{margin:calc(", " * 2 * 5)}.m-6{margin:calc(", " * 2 * 6)}.mt-1{margin-top:calc(", " * 2 * 1)}.mt-2{margin-top:calc(", " * 2 * 2)}.mt-3{margin-top:calc(", " * 2 * 3)}.mt-4{margin-top:calc(", " * 2 * 4)}.mt-5{margin-top:calc(", " * 2 * 5)}.mt-6{margin-top:calc(", " * 2 * 6)}.-mt-1{margin-top:calc(", " * 2 * -1)}.-mt-2{margin-top:calc(", " * 2 * -2)}.-mt-3{margin-top:calc(", " * 2 * -3)}.-mt-4{margin-top:calc(", " * 2 * -4)}.-mt-5{margin-top:calc(", " * 2 * -5)}.-mt-6{margin-top:calc(", " * 2 * -6)}.ml-1{margin-left:calc(", " * 2 * 1)}.ml-2{margin-left:calc(", " * 2 * 2)}.ml-3{margin-left:calc(", " * 2 * 3)}.ml-4{margin-left:calc(", " * 2 * 4)}.ml-5{margin-left:calc(", " * 2 * 5)}.ml-6{margin-left:calc(", " * 2 * 6)}.-ml-1{margin-left:calc(", " * 2 * -1)}.-ml-2{margin-left:calc(", " * 2 * -2)}.-ml-3{margin-left:calc(", " * 2 * -3)}.-ml-4{margin-left:calc(", " * 2 * -4)}.-ml-5{margin-left:calc(", " * 2 * -5)}.-ml-6{margin-left:calc(", " * 2 * -6)}.mr-1{margin-right:calc(", " * 2 * 1)}.mr-2{margin-right:calc(", " * 2 * 2)}.mr-3{margin-right:calc(", " * 2 * 3)}.mr-4{margin-right:calc(", " * 2 * 4)}.mr-5{margin-right:calc(", " * 2 * 5)}.mr-6{margin-right:calc(", " * 2 * 6)}.-mr-1{margin-right:calc(", " * 2 * -1)}.-mr-2{margin-right:calc(", " * 2 * -2)}.-mr-3{margin-right:calc(", " * 2 * -3)}.-mr-4{margin-right:calc(", " * 2 * -4)}.-mr-5{margin-right:calc(", " * 2 * -5)}.-mr-6{margin-right:calc(", " * 2 * -6)}.mb-1{margin-bottom:calc(", " * 2 * 1)}.mb-2{margin-bottom:calc(", " * 2 * 2)}.mb-3{margin-bottom:calc(", " * 2 * 3)}.mb-4{margin-bottom:calc(", " * 2 * 4)}.mb-5{margin-bottom:calc(", " * 2 * 5)}.mb-6{margin-bottom:calc(", " * 2 * 6)}.mb-7{margin-bottom:calc(", " * 2 * 7)}.mb-8{margin-bottom:calc(", " * 2 * 8)}.p-1{padding:calc(", " * 2)}.p-2{padding:calc(", " * 4)}.p-3{padding:calc(", " * 6)}.p-4{padding:calc(", " * 8)}.p-5{padding:calc(", " * 10)}.p-6{padding:calc(", " * 12)}.pt-1{padding-top:calc(", " * 2)}.pt-2{padding-top:calc(", " * 4)}.pt-3{padding-top:calc(", " * 6)}.pt-4{padding-top:calc(", " * 8)}.pt-5{padding-top:calc(", " * 10)}.pt-6{padding-top:calc(", " * 12)}.pb-1{padding-bottom:calc(", " * 2)}.pb-2{padding-bottom:calc(", " * 4)}.pb-3{padding-bottom:calc(", " * 6)}.pb-4{padding-bottom:calc(", " * 8)}.pb-5{padding-bottom:calc(", " * 10)}.pb-6{padding-bottom:calc(", " * 12)}.pl-1{padding-left:calc(", " * 2)}.pl-2{padding-left:calc(", " * 4)}.pl-3{padding-left:calc(", " * 6)}.pl-4{padding-left:calc(", " * 8)}.pl-5{padding-left:calc(", " * 10)}.pl-6{padding-left:calc(", " * 12)}.pr-1{padding-right:calc(", " * 2)}.pr-2{padding-right:calc(", " * 4)}.pr-3{padding-right:calc(", " * 6)}.pr-4{padding-right:calc(", " * 8)}.pr-5{padding-right:calc(", " * 10)}.pr-6{padding-right:calc(", " * 12)}.br-1{border-radius:calc(", "*1)}.br-2{border-radius:calc(", "*2)}.br-3{border-radius:calc(", "*3)}.br-4{border-radius:calc(", "*4)}.br-5{border-radius:calc(", "*5)}.br-per-1{border-radius:calc(", "*1)}.br-per-2{border-radius:calc(", "*2)}.br-per-3{border-radius:calc(", "*3)}.br-per-4{border-radius:calc(", "*4)}.back{z-index:-100;position:absolute;top:0;}.spacer{width:100%;height:100vh;background-repeat:no-repeat;background-size:cover;}.layer{background-image:url(\"/background/waves.svg\");}.line-shadow{box-shadow:inset 0px 0px 1px var(--text2);}.box-shadow-1{box-shadow:0px 2px 7px -4px var(--surface3);}.box-shadow-2{box-shadow:-1px 7px 15px 4px var(--text2);}.box-shadow-3{box-shadow:-1px 7px 15px 6px var(--text2);}.box-shadow-4{box-shadow:-1px 7px 15px 8px var(--text2);}.box-shadow-5{box-shadow:-1px 7px 15px 10px var(--text2);}.button{outline:0;cursor:pointer;user-select:none;text-decoration:none;border:solid 1px var(--surface4);background-color:transparent;display:flex;transition:background-color var(--speed) cubic-bezier(0.4,0,0.2,1) 0ms;}.navLink{transition:background-color var(--speed) cubic-bezier(0.4,0,0.2,1) 0ms;cursor:pointer;user-select:none;}.navLink:hover{}.button:hover{background-color:var(--surface3);}.container{width:100%;padding-left:1rem;padding-right:1rem;margin-right:auto;margin-left:auto;}.containerPage{width:100%;min-height:80vh;padding-left:1rem;padding-right:1rem;margin-right:auto;margin-left:auto;margin-bottom:4rem;}.container-nav{width:100%;height:100%;display:flex;margin:auto;align-items:center;}.container-navMob{width:100%;height:100%;display:flex;}.space-nav{margin-left:auto;}.btn-mob-nav{display:block;cursor:pointer;}.menu-desktop{display:none;height:100%;position:relative;}@media (min-width:24rem){.container,.containerPage,.container-nav,.container-navMob{max-width:24em;}}.btn-search-nav{display:none;}@media (min-width:36rem){.container,.containerPage,.container-nav,.container-navMob{max-width:36rem;}.btn-search-nav{display:flex;align-items:center;}}@media (min-width:48rem){.container,.containerPage,.container-nav,.container-navMob{max-width:48rem;}.menu-desktop{display:block;}}@media (min-width:70rem){.container,.containerPage,.container-nav,.container-navMob{max-width:70rem;}}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}.border-gradient{border:10px solid;border-image-slice:1;border-width:2px;}.border-gradient-purple{border-image-source:linear-gradient(to left,#743ad5,#d53a9d);}"], ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioPadding, ratioPadding, ratioPadding, ratioPadding, ratioPadding, ratioPadding, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioBorderRadius, ratioBorderRadius, ratioBorderRadius, ratioBorderRadius, ratioBorderRadius, ratioBorderRadiusPer, ratioBorderRadiusPer, ratioBorderRadiusPer, ratioBorderRadiusPer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (() => {



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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-spring");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxNQUFNLEdBQUc7QUFDcEJDLEVBQUFBLEtBQUssRUFBRTtBQUFFQyxJQUFBQSxFQUFFLEVBQUUsU0FBTjtBQUFpQkMsSUFBQUEsRUFBRSxFQUFFO0FBQXJCLEdBRGE7QUFFcEJDLEVBQUFBLEtBQUssRUFBRTtBQUFFRixJQUFBQSxFQUFFLEVBQUUsUUFBTjtBQUFnQkMsSUFBQUEsRUFBRSxFQUFFO0FBQXBCLEdBRmE7QUFHcEJFLEVBQUFBLEtBQUssRUFBRTtBQUFFSCxJQUFBQSxFQUFFLEVBQUUsVUFBTjtBQUFrQkMsSUFBQUEsRUFBRSxFQUFFO0FBQXRCLEdBSGE7QUFJcEJHLEVBQUFBLEtBQUssRUFBRTtBQUFFSixJQUFBQSxFQUFFLEVBQUUsU0FBTjtBQUFpQkMsSUFBQUEsRUFBRSxFQUFFO0FBQXJCO0FBSmEsQ0FBZjtBQU9BLE1BQU1JLEdBQUcsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLHNCQURXO0FBRWpCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTFAsSUFBQUEsRUFBRSxFQUFFLDJDQURDO0FBRUxDLElBQUFBLEVBQUUsRUFBRTtBQUZDO0FBRlUsQ0FBWjtBQVFBLE1BQU1PLFlBQVksR0FBRztBQUMxQkQsRUFBQUEsS0FBSyxFQUFFLHNCQURtQjtBQUUxQkUsRUFBQUEsT0FBTyxFQUFFO0FBQUVULElBQUFBLEVBQUUsRUFBRSx1QkFBTjtBQUErQkMsSUFBQUEsRUFBRSxFQUFFO0FBQW5DLEdBRmlCO0FBRzFCUyxFQUFBQSxPQUFPLEVBQUU7QUFBRVYsSUFBQUEsRUFBRSxFQUFFLHVCQUFOO0FBQStCQyxJQUFBQSxFQUFFLEVBQUU7QUFBbkMsR0FIaUI7QUFJMUJVLEVBQUFBLE9BQU8sRUFBRTtBQUNQWCxJQUFBQSxFQUFFLEVBQUUscUNBREc7QUFFUEMsSUFBQUEsRUFBRSxFQUFFO0FBRkc7QUFKaUIsQ0FBckI7QUFVQSxNQUFNVyxNQUFNLEdBQUc7QUFDcEJDLEVBQUFBLEdBQUcsRUFBRTtBQUFFYixJQUFBQSxFQUFFLEVBQUUsTUFBTjtBQUFjQyxJQUFBQSxFQUFFLEVBQUU7QUFBbEIsR0FEZTtBQUVwQmEsRUFBQUEsS0FBSyxFQUFFO0FBQUVkLElBQUFBLEVBQUUsRUFBRSxTQUFOO0FBQWlCQyxJQUFBQSxFQUFFLEVBQUU7QUFBckIsR0FGYTtBQUdwQmMsRUFBQUEsS0FBSyxFQUFFO0FBQUVmLElBQUFBLEVBQUUsRUFBRSxXQUFOO0FBQW1CQyxJQUFBQSxFQUFFLEVBQUU7QUFBdkIsR0FIYTtBQUlwQmUsRUFBQUEsS0FBSyxFQUFFO0FBQUVoQixJQUFBQSxFQUFFLEVBQUUsVUFBTjtBQUFrQkMsSUFBQUEsRUFBRSxFQUFFO0FBQXRCLEdBSmE7QUFLcEJnQixFQUFBQSxPQUFPLEVBQUU7QUFBRWpCLElBQUFBLEVBQUUsRUFBRSwwQkFBTjtBQUFrQ0MsSUFBQUEsRUFBRSxFQUFFO0FBQXRDO0FBTFcsQ0FBZjtBQVFBLE1BQU1pQixPQUFPLEdBQUc7QUFDckJMLEVBQUFBLEdBQUcsRUFBRTtBQUFFYixJQUFBQSxFQUFFLEVBQUUsdUJBQU47QUFBK0JDLElBQUFBLEVBQUUsRUFBRTtBQUFuQyxHQURnQjtBQUVyQmEsRUFBQUEsS0FBSyxFQUFFO0FBQUVkLElBQUFBLEVBQUUsRUFBRSxzQkFBTjtBQUE4QkMsSUFBQUEsRUFBRSxFQUFFO0FBQWxDO0FBRmMsQ0FBaEI7QUFLQSxNQUFNa0IsU0FBUyxHQUFHO0FBQ3ZCQyxFQUFBQSxHQUFHLEVBQUU7QUFBRXBCLElBQUFBLEVBQUUsRUFBRSxZQUFOO0FBQW9CQyxJQUFBQSxFQUFFLEVBQUU7QUFBeEI7QUFEa0IsQ0FBbEI7QUFJQSxNQUFNb0IsS0FBSyxHQUFHO0FBQ25CQyxFQUFBQSxNQUFNLEVBQUU7QUFBRXRCLElBQUFBLEVBQUUsRUFBRSxTQUFOO0FBQWlCQyxJQUFBQSxFQUFFLEVBQUU7QUFBckIsR0FEVztBQUVuQnNCLEVBQUFBLEtBQUssRUFBRTtBQUFFdkIsSUFBQUEsRUFBRSxFQUFFLGVBQU47QUFBdUJDLElBQUFBLEVBQUUsRUFBRTtBQUEzQjtBQUZZLENBQWQsRUFJUDs7QUFFTyxNQUFNdUIsTUFBTSxHQUFHLENBQ3BCO0FBQ0VDLEVBQUFBLEVBQUUsRUFBRSxHQUROO0FBRUVuQixFQUFBQSxJQUFJLEVBQUU7QUFBRU4sSUFBQUEsRUFBRSxFQUFFLHdCQUFOO0FBQWdDQyxJQUFBQSxFQUFFLEVBQUU7QUFBcEMsR0FGUjtBQUdFeUIsRUFBQUEsVUFBVSxFQUFFLGtDQUhkO0FBSUVDLEVBQUFBLElBQUksRUFBRTtBQUNKM0IsSUFBQUEsRUFBRSxFQUFFLDJJQURBO0FBRUpDLElBQUFBLEVBQUUsRUFBRTtBQUZBLEdBSlI7QUFRRTJCLEVBQUFBLE9BQU8sRUFBRSxZQVJYO0FBU0VDLEVBQUFBLFNBQVMsRUFBRSxHQVRiO0FBVUVDLEVBQUFBLE9BQU8sRUFBRSxhQVZYO0FBV0VDLEVBQUFBLGNBQWMsRUFBRSxjQVhsQjtBQVlFQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsT0FBTyxFQUFFO0FBREgsR0FaVjtBQWVFQyxFQUFBQSxJQUFJLEVBQUUsQ0FDSjtBQUNFQyxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxhQUFELENBRFY7QUFFRUMsSUFBQUEsUUFBUSxFQUFFLENBQUMsS0FBRDtBQUZaLEdBREksRUFLSjtBQUNFRCxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxhQUFELENBRFY7QUFFRUMsSUFBQUEsUUFBUSxFQUFFLENBQUMsSUFBRDtBQUZaLEdBTEksRUFTSjtBQUNFRCxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxLQUFELENBRFY7QUFFRUMsSUFBQUEsUUFBUSxFQUFFLENBQUMsR0FBRDtBQUZaLEdBVEk7QUFmUixDQURvQixDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERQO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUksR0FBRyxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxREFBVDs7QUFNQSxNQUFNSyxVQUFVLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBMEM7QUFDM0QsTUFBSTtBQUFFQyxJQUFBQSxJQUFGO0FBQVFDLElBQUFBLE9BQVI7QUFBaUJDLElBQUFBLFlBQWpCO0FBQStCQyxJQUFBQTtBQUEvQixNQUE2Q1QsaUVBQVksQ0FBQyxLQUFELENBQTdEO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFdBQUssRUFBRTtBQUFFVSxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFaO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLHNCQUFXLG1CQUZiO0FBR0UsZ0JBQVEsRUFBRSxDQUhaO0FBSUUsaUJBQVMsRUFBRUwsU0FKYjtBQUtFLGVBQU8sRUFBRSxNQUFNRSxPQUFPLENBQUMsSUFBRCxDQUx4QjtBQU1FLHVCQUFZLE1BTmQ7QUFPRSxXQUFHLEVBQUVDLFlBUFA7QUFBQSwrQkFTRSw4REFBQyxHQUFEO0FBQ0UsbUJBQVMsRUFBQyxPQURaO0FBRUUsaUJBQU8sRUFBQyxXQUZWO0FBR0UseUJBQVksTUFIZDtBQUlFLG1CQUFTLEVBQUMsS0FKWjtBQUFBLGlDQU1FO0FBQU0sYUFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBbUJHLENBQUNGLElBQUQsR0FBUSxJQUFSLGdCQUNDLDhEQUFDLDhDQUFEO0FBQVUsaUJBQVMsRUFBRUcsU0FBckI7QUFBZ0MsZUFBTyxFQUFFRixPQUF6QztBQUFrRCxZQUFJLEVBQUVEO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBMkJELENBN0JEOztBQStCQSxpRUFBZUYsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7O0FBRUEsTUFBTUYsR0FBRyxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxREFBVDs7QUFNQSxNQUFNYSxXQUFXLEdBQUcsQ0FBQztBQUNuQlAsRUFBQUEsU0FEbUI7QUFFbkJRLEVBQUFBLFVBRm1CO0FBR25CQyxFQUFBQTtBQUhtQixDQUFELEtBUWQ7QUFDSixzQkFDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsa0JBQVcsc0JBRmI7QUFHRSxZQUFRLEVBQUUsQ0FIWjtBQUlFLGFBQVMsRUFBRVQsU0FKYjtBQUtFLFdBQU8sRUFBRVUsQ0FBQyxJQUFJSixzRUFBWSxDQUFDSSxDQUFELENBQVosQ0FBaUJELGFBQWpCLENBTGhCO0FBTUUsTUFBRSxFQUFDLG1CQU5MO0FBT0UsbUJBQWFELFVBQVUsS0FBSyxNQUFmLEdBQXdCLE1BQXhCLEdBQWlDLE9BUGhEO0FBQUEsZUFTR0EsVUFBVSxLQUFLLE1BQWYsaUJBQ0MsOERBQUMsR0FBRDtBQUNFLGVBQVMsRUFBQyxPQURaO0FBRUUsYUFBTyxFQUFDLFdBRlY7QUFHRSxxQkFBWSxNQUhkO0FBSUUsZUFBUyxFQUFDLEtBSlo7QUFBQSw2QkFNRTtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKLEVBbUJHQSxVQUFVLEtBQUssTUFBZixpQkFDQyw4REFBQyxHQUFEO0FBQ0UsZUFBUyxFQUFDLE9BRFo7QUFFRSxhQUFPLEVBQUMsV0FGVjtBQUdFLHFCQUFZLE1BSGQ7QUFJRSxlQUFTLEVBQUMsS0FKWjtBQUFBLDZCQU1FO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0NELENBekNEOztBQTJDQSxpRUFBZUQsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7OztBQUVBLE1BQU1JLGNBQWMsR0FBR2pCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGttQkFXRm1CLEtBQUssSUFDakJBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFaLEtBQXlCLENBQXpCLEdBQTZCLGNBQTdCLEdBQThDLGFBWmhDLEVBNEJIRixLQUFLLElBQ2hCQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsUUFBWixLQUF5QixDQUF6QixHQUE2QixrQkFBN0IsR0FBa0Qsa0JBN0JwQyxFQWdDSEYsS0FBSyxJQUNoQkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVosS0FBeUIsQ0FBekIsR0FBNkIsaUJBQTdCLEdBQWlELGlCQWpDbkMsQ0FBcEI7O0FBZ0RBLE1BQU1DLGFBQWEsR0FBRyxDQUFDO0FBQ3JCRCxFQUFBQSxRQURxQjtBQUVyQkUsRUFBQUEsUUFGcUI7QUFHckJDLEVBQUFBO0FBSHFCLENBQUQsS0FTaEI7QUFDSixzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGNBQUQ7QUFBZ0IsV0FBSyxFQUFFO0FBQUVILFFBQUFBO0FBQUYsT0FBdkI7QUFBQSw2QkFDRTtBQUNFLGlCQUFTLEVBQUcsa0NBQWlDRSxRQUFRLEdBQUcsTUFBSCxHQUFZLEVBQUcsRUFEdEU7QUFFRSxlQUFPLEVBQUVQLENBQUMsSUFBSTtBQUNaUSxVQUFBQSxXQUFXLENBQUNDLElBQUksSUFBSSxDQUFDQSxJQUFWLENBQVg7QUFDRCxTQUpIO0FBQUEsK0JBTUU7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFjRCxDQXhCRDs7QUEwQkFILGFBQWEsQ0FBQ0ksWUFBZCxHQUE2QjtBQUMzQkwsRUFBQUEsUUFBUSxFQUFFO0FBRGlCLENBQTdCO0FBSUEsaUVBQWVDLGFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNVSxHQUFHLEdBQUdoQyx3REFBTSxDQUFDMkIsc0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwwS0FBVDtBQVdBLE1BQU1NLFlBQVksR0FBR2pDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDBSQUtQbUIsS0FBSyxJQUFLQSxLQUFLLENBQUNDLEtBQU4sQ0FBWWUsS0FBWixLQUFzQixJQUF0QixHQUE2QixjQUE3QixHQUE4QyxJQUxqRCxDQUFsQjs7QUFpQkEsTUFBTWpDLFFBQVEsR0FBRyxDQUFDO0FBQ2hCUSxFQUFBQSxTQURnQjtBQUVoQkYsRUFBQUEsT0FGZ0I7QUFHaEJELEVBQUFBO0FBSGdCLENBQUQsS0FRWDtBQUNKLFFBQU02QixNQUFNLEdBQUdMLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFTSxJQUFBQTtBQUFGLE1BQWFELE1BQW5CO0FBQ0EsUUFBTUUsV0FBVyxHQUFHViwyREFBYSxDQUFDckIsSUFBRCxFQUFPO0FBQ3RDZ0MsSUFBQUEsSUFBSSxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBRGdDO0FBRXRDQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUQsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FGK0I7QUFHdENFLElBQUFBLEtBQUssRUFBRTtBQUFFRixNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUgrQjtBQUl0Q1gsSUFBQUEsTUFBTSxFQUFFQSxzREFBWWM7QUFKa0IsR0FBUCxDQUFqQztBQU9BLHNCQUNFO0FBQUEsY0FDR0wsV0FBVyxDQUNWLENBQUNNLE1BQUQsRUFBU0MsSUFBVCxLQUNFQSxJQUFJLGlCQUNGLDhEQUFDLEdBQUQ7QUFBSyxXQUFLLEVBQUVELE1BQVo7QUFBb0IsZUFBUyxFQUFDLE1BQTlCO0FBQXFDLFNBQUcsRUFBRWxDLFNBQTFDO0FBQUEsOEJBQ0UsOERBQUMsWUFBRDtBQUNFLGFBQUssRUFBRTtBQUFFeUIsVUFBQUEsS0FBSyxFQUFFRSxNQUFNLEtBQUs7QUFBcEIsU0FEVDtBQUVFLGVBQU8sRUFBRSxNQUFNO0FBQ2I3QixVQUFBQSxPQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0E0QixVQUFBQSxNQUFNLENBQUNVLElBQVAsQ0FBWVYsTUFBTSxDQUFDVyxNQUFuQixFQUEyQlgsTUFBTSxDQUFDVyxNQUFsQyxFQUEwQztBQUFFVixZQUFBQSxNQUFNLEVBQUU7QUFBVixXQUExQztBQUNELFNBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFVRSw4REFBQyxZQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQUVGLFVBQUFBLEtBQUssRUFBRUUsTUFBTSxLQUFLO0FBQXBCLFNBRFQ7QUFFRSxlQUFPLEVBQUUsTUFBTTtBQUNiN0IsVUFBQUEsT0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBNEIsVUFBQUEsTUFBTSxDQUFDVSxJQUFQLENBQVlWLE1BQU0sQ0FBQ1csTUFBbkIsRUFBMkJYLE1BQU0sQ0FBQ1csTUFBbEMsRUFBMEM7QUFBRVYsWUFBQUEsTUFBTSxFQUFFO0FBQVYsV0FBMUM7QUFDRCxTQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFITTtBQURkLG1CQURGO0FBNkJELENBL0NEOztBQWlEQSxpRUFBZW5DLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTWlELE1BQU0sR0FBR25ELDBFQUFIO0FBQUE7QUFBQTtBQUFBLG9LQUFaO0FBY0EsTUFBTXFELFdBQVcsR0FBR3JELHVFQUFIO0FBQUE7QUFBQTtBQUFBLDBCQUFqQjtBQUdBLE1BQU1zRCxZQUFZLEdBQUd0RCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxvREFBbEI7QUFLQSxNQUFNdUQsSUFBSSxHQUFHdkQsc0VBQUg7QUFBQTtBQUFBO0FBQUEsc0NBQVY7QUFJQSxNQUFNaUIsY0FBYyxHQUFHakIsd0RBQU0sQ0FBQzJCLHNEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsd0hBQXBCO0FBV0EsTUFBTThCLE9BQU8sR0FBR3pELHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFiO0FBVUEsTUFBTTBELFVBQVUsR0FBRzFELHNFQUFIO0FBQUE7QUFBQTtBQUFBLHdCQUFoQjtBQUlBLE1BQU0yRCxRQUFRLEdBQUczRCxzRUFBSDtBQUFBO0FBQUE7QUFBQSx3ZEFDR21CLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxLQUFOLENBQVl5QyxNQUFaLEdBQXFCLEtBQXJCLEdBQTZCLElBRDFDLEVBRVExQyxLQUFLLElBQ3ZCQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXlDLE1BQVosR0FBcUIsaUJBQXJCLEdBQXlDLGFBSC9CLEVBSU0xQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsS0FBTixDQUFZeUMsTUFBWixHQUFxQixPQUFyQixHQUErQixJQUovQyxFQWtCQzFDLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxLQUFOLENBQVl5QyxNQUFaLEdBQXFCLE1BQXJCLEdBQThCLElBbEJ6QyxDQUFkO0FBaUNBLE1BQU1DLGNBQWMsR0FBRzlELHVFQUFIO0FBQUE7QUFBQTtBQUFBLDBDQUFwQjs7QUFPQSxNQUFNK0QsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTTNCLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVNLElBQUFBO0FBQUYsTUFBYUQsTUFBbkI7QUFDQSxRQUFNNEIsQ0FBQyxHQUFHM0IsTUFBTSxLQUFLLElBQVgsR0FBa0IxRSxnREFBbEIsR0FBdUJDLGdEQUFqQztBQUVBLE1BQUksQ0FBQ2tELFVBQUQsRUFBYUMsYUFBYixJQUE4Qm1DLCtEQUFXLENBQUMsRUFBRCxFQUFLLFlBQUwsQ0FBN0M7QUFDQSxNQUFJO0FBQUV6QyxJQUFBQSxZQUFGO0FBQWdCRixJQUFBQSxJQUFoQjtBQUFzQkMsSUFBQUEsT0FBdEI7QUFBK0JFLElBQUFBO0FBQS9CLE1BQTZDVCxpRUFBWSxDQUFDLEtBQUQsQ0FBN0Q7QUFFQSxRQUFNcUMsV0FBVyxHQUFHViwyREFBYSxDQUFDckIsSUFBRCxFQUFPO0FBQ3RDZ0MsSUFBQUEsSUFBSSxFQUFFO0FBQUUwQixNQUFBQSxHQUFHLEVBQUU7QUFBUCxLQURnQztBQUV0Q3hCLElBQUFBLEtBQUssRUFBRTtBQUFFd0IsTUFBQUEsR0FBRyxFQUFFO0FBQVAsS0FGK0I7QUFHdEN2QixJQUFBQSxLQUFLLEVBQUU7QUFBRXVCLE1BQUFBLEdBQUcsRUFBRTtBQUFQLEtBSCtCO0FBSXRDcEMsSUFBQUEsTUFBTSxFQUFFQSxzREFBWWM7QUFKa0IsR0FBUCxDQUFqQztBQU1BTSxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZGlCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZL0IsTUFBTSxDQUFDZ0MsUUFBbkI7QUFDRCxHQUZRLEVBRU4sQ0FBQ2hDLE1BQUQsQ0FGTSxDQUFUO0FBR0Esc0JBQ0U7QUFBQSwyQkFDRSwrREFBQyxNQUFEO0FBQUEsOEJBQ0UsK0RBQUMsWUFBRDtBQUFjLGlCQUFTLEVBQUMsZUFBeEI7QUFBQSxnQ0FDRSwrREFBQyxXQUFEO0FBQWEsbUJBQVMsRUFBQyxLQUF2QjtBQUFBLGlDQUNFLCtEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBRyxpQkFBRyxFQUFDLHFCQUFQO0FBQUEscUNBQ0UsK0RBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVFFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0U7QUFDRSwwQkFBVyx1QkFEYjtBQUVFLG9CQUFRLEVBQUUsQ0FGWjtBQUdFLGlCQUFLLEVBQUU7QUFBRWlDLGNBQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCMUQsY0FBQUEsUUFBUSxFQUFFO0FBQTVCLGFBSFQ7QUFBQSxtQ0FLRSwrREFBQyxJQUFEO0FBQU0sK0JBQWMsTUFBcEI7QUFBQSxzQ0FDRSwrREFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUMsR0FBWDtBQUFBLHVDQUNFLCtEQUFDLFFBQUQ7QUFDRSwyQkFBUyxFQUFDLG1CQURaO0FBRUUsdUJBQUssRUFBRTtBQUNMa0Qsb0JBQUFBLE1BQU0sRUFBRXpCLE1BQU0sQ0FBQ2dDLFFBQVAsS0FBb0I7QUFEdkIsbUJBRlQ7QUFBQSx5Q0FNRTtBQUNFLDZCQUFTLEVBQUMsS0FEWjtBQUVFLHVCQUFHLEVBQUMscUJBRk47QUFHRSx5QkFBSyxFQUFFO0FBQUVFLHNCQUFBQSxLQUFLLEVBQUU7QUFBVCxxQkFIVDtBQUFBLDhCQUtHTixDQUFDLENBQUNPLE1BQUYsQ0FBUzdHO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBaUJFLCtEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyxVQUFYO0FBQUEsdUNBQ0UsK0RBQUMsUUFBRDtBQUNFLDJCQUFTLEVBQUMsbUJBRFo7QUFFRSx1QkFBSyxFQUFFO0FBQ0xtRyxvQkFBQUEsTUFBTSxFQUFFekIsTUFBTSxDQUFDVyxNQUFQLENBQWN5QixRQUFkLENBQXVCLFVBQXZCO0FBREgsbUJBRlQ7QUFBQSx5Q0FNRTtBQUNFLDZCQUFTLEVBQUMsS0FEWjtBQUVFLHVCQUFHLEVBQUMscUJBRk47QUFHRSx5QkFBSyxFQUFFO0FBQUVGLHNCQUFBQSxLQUFLLEVBQUU7QUFBVCxxQkFIVDtBQUFBLDhCQUtHTixDQUFDLENBQUNPLE1BQUYsQ0FBUzFHO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWpCRixlQWlDRSwrREFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUMsUUFBWDtBQUFBLHVDQUNFLCtEQUFDLFFBQUQ7QUFDRSwyQkFBUyxFQUFDLG1CQURaO0FBRUUsdUJBQUssRUFBRTtBQUNMZ0csb0JBQUFBLE1BQU0sRUFBRXpCLE1BQU0sQ0FBQ1csTUFBUCxDQUFjeUIsUUFBZCxDQUF1QixRQUF2QjtBQURILG1CQUZUO0FBQUEseUNBTUU7QUFDRSw2QkFBUyxFQUFDLEtBRFo7QUFFRSx1QkFBRyxFQUFDLHFCQUZOO0FBR0UseUJBQUssRUFBRTtBQUFFRixzQkFBQUEsS0FBSyxFQUFFO0FBQVQscUJBSFQ7QUFBQSw4QkFLR04sQ0FBQyxDQUFDTyxNQUFGLENBQVN6RztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFqQ0YsZUFpREUsK0RBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFDLFVBQVg7QUFBQSx1Q0FDRSwrREFBQyxRQUFEO0FBQ0UsMkJBQVMsRUFBQyxtQkFEWjtBQUVFLHVCQUFLLEVBQUU7QUFDTCtGLG9CQUFBQSxNQUFNLEVBQUV6QixNQUFNLENBQUNXLE1BQVAsQ0FBY3lCLFFBQWQsQ0FBdUIsVUFBdkI7QUFESCxtQkFGVDtBQUFBLHlDQU1FO0FBQ0UsNkJBQVMsRUFBQyxLQURaO0FBRUUsdUJBQUcsRUFBQyxxQkFGTjtBQUdFLHlCQUFLLEVBQUU7QUFBRUYsc0JBQUFBLEtBQUssRUFBRTtBQUFULHFCQUhUO0FBQUEsOEJBS0dOLENBQUMsQ0FBQ08sTUFBRixDQUFTeEc7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBa0ZFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEZGLGVBb0ZFLCtEQUFDLGdEQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBGRixlQXFGRSwrREFBQyxrREFBRDtBQUNFLG1CQUFTLEVBQUMscUJBRFo7QUFFRSxvQkFBVSxFQUFFK0MsVUFGZDtBQUdFLHVCQUFhLEVBQUVDO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckZGLGVBMEZFO0FBQUssYUFBRyxFQUFFTixZQUFWO0FBQUEsaUNBQ0UsK0RBQUMsb0RBQUQ7QUFBZSxvQkFBUSxFQUFFLENBQXpCO0FBQTRCLG9CQUFRLEVBQUVGLElBQXRDO0FBQTRDLHVCQUFXLEVBQUVDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUErRkc4QixXQUFXLENBQ1YsQ0FBQ00sTUFBRCxFQUFTQyxJQUFULEtBQ0VBLElBQUksaUJBQ0YsK0RBQUMsY0FBRDtBQUNFLGlCQUFTLEVBQUMsY0FEWjtBQUVFLGFBQUssRUFBRUQsTUFGVDtBQUdFLFdBQUcsRUFBRWxDLFNBSFA7QUFBQSwrQkFLRSwrREFBQyxPQUFEO0FBQVMsbUJBQVMsRUFBQyxrQkFBbkI7QUFBQSxpQ0FDRSwrREFBQyxVQUFEO0FBQVksNkJBQWMsTUFBMUI7QUFBQSxvQ0FDRSwrREFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFLCtEQUFDLFFBQUQ7QUFDRSx5QkFBUyxFQUFDLHdCQURaO0FBRUUsdUJBQU8sRUFBRSxNQUFNRixPQUFPLENBQUMsS0FBRCxDQUZ4QjtBQUdFLHFCQUFLLEVBQUU7QUFDTHFELGtCQUFBQSxNQUFNLEVBQUV6QixNQUFNLENBQUNnQyxRQUFQLEtBQW9CO0FBRHZCLGlCQUhUO0FBQUEsdUNBT0U7QUFBRywyQkFBUyxFQUFDLEtBQWI7QUFBbUIscUJBQUcsRUFBQyxxQkFBdkI7QUFBQSw0QkFDR0osQ0FBQyxDQUFDTyxNQUFGLENBQVM3RztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQWNFLCtEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxVQUFYO0FBQUEscUNBQ0UsK0RBQUMsUUFBRDtBQUNFLHlCQUFTLEVBQUMsd0JBRFo7QUFFRSx1QkFBTyxFQUFFLE1BQU04QyxPQUFPLENBQUMsS0FBRCxDQUZ4QjtBQUdFLHFCQUFLLEVBQUU7QUFDTHFELGtCQUFBQSxNQUFNLEVBQUV6QixNQUFNLENBQUNXLE1BQVAsQ0FBY3lCLFFBQWQsQ0FBdUIsVUFBdkI7QUFESCxpQkFIVDtBQUFBLHVDQU9FO0FBQUcsMkJBQVMsRUFBQyxLQUFiO0FBQW1CLHFCQUFHLEVBQUMscUJBQXZCO0FBQUEsNEJBQ0dSLENBQUMsQ0FBQ08sTUFBRixDQUFTMUc7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZEYsZUE0QkUsK0RBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFFBQVg7QUFBQSxxQ0FDRSwrREFBQyxRQUFEO0FBQ0UseUJBQVMsRUFBQyx3QkFEWjtBQUVFLHVCQUFPLEVBQUUsTUFBTTJDLE9BQU8sQ0FBQyxLQUFELENBRnhCO0FBR0UscUJBQUssRUFBRTtBQUNMcUQsa0JBQUFBLE1BQU0sRUFBRXpCLE1BQU0sQ0FBQ1csTUFBUCxDQUFjeUIsUUFBZCxDQUF1QixRQUF2QjtBQURILGlCQUhUO0FBQUEsdUNBT0U7QUFBRywyQkFBUyxFQUFDLEtBQWI7QUFBbUIscUJBQUcsRUFBQyxxQkFBdkI7QUFBQSw0QkFDR1IsQ0FBQyxDQUFDTyxNQUFGLENBQVN6RztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE1QkYsZUEwQ0UsK0RBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFVBQVg7QUFBQSxxQ0FDRSwrREFBQyxRQUFEO0FBQ0UseUJBQVMsRUFBQyxtQkFEWjtBQUVFLHVCQUFPLEVBQUUsTUFBTTBDLE9BQU8sQ0FBQyxLQUFELENBRnhCO0FBR0UscUJBQUssRUFBRTtBQUNMcUQsa0JBQUFBLE1BQU0sRUFBRXpCLE1BQU0sQ0FBQ1csTUFBUCxDQUFjeUIsUUFBZCxDQUF1QixVQUF2QjtBQURILGlCQUhUO0FBQUEsdUNBT0U7QUFBRywyQkFBUyxFQUFDLEtBQWI7QUFBbUIscUJBQUcsRUFBQyxxQkFBdkI7QUFBQSw0QkFDR1IsQ0FBQyxDQUFDTyxNQUFGLENBQVN4RztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSE0sQ0EvRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF5S0QsQ0ExTEQ7O0FBNExBLGlFQUFlZ0csTUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDclNPLE1BQU1VLFlBQVksR0FBSTNELFVBQUQsSUFDMUIsU0FBUzJELFlBQVQsQ0FBc0IxRCxhQUF0QixFQUF1RTtBQUNyRSxNQUFJdkMsR0FBRyxHQUFHa0csUUFBUSxDQUFDQyxpQkFBbkI7O0FBQ0EsTUFBSTdELFVBQVUsS0FBSyxNQUFuQixFQUEyQjtBQUN6QnRDLElBQUFBLEdBQUcsQ0FBQ29HLFlBQUosQ0FBaUIsY0FBakIsRUFBaUMsT0FBakM7QUFDQTdELElBQUFBLGFBQWEsQ0FBQyxPQUFELENBQWI7QUFDQThELElBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixFQUFtQyxPQUFuQztBQUNELEdBSkQsTUFJTztBQUNMdEcsSUFBQUEsR0FBRyxDQUFDb0csWUFBSixDQUFpQixjQUFqQixFQUFpQyxNQUFqQztBQUNBN0QsSUFBQUEsYUFBYSxDQUFDLE1BQUQsQ0FBYjtBQUNBOEQsSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DLE1BQW5DO0FBQ0Q7QUFDRixDQVpJOzs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7QUFFTyxTQUFTbEUsWUFBVCxDQUFzQkksQ0FBdEIsRUFBd0Q7QUFDN0RBLEVBQUFBLENBQUMsQ0FBQytELGNBQUY7O0FBQ0EsTUFBSS9ELENBQUMsQ0FBQ2dFLGFBQUYsQ0FBZ0JDLE9BQXBCLEVBQTZCO0FBQzNCLFFBQUlDLE1BQU0sR0FBR2xFLENBQUMsQ0FBQ2dFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxNQUFyQzs7QUFDQSxRQUFJQSxNQUFNLEtBQUssT0FBWCxJQUFzQkEsTUFBTSxLQUFLLE1BQXJDLEVBQTZDO0FBQzNDLFVBQUlwRSxVQUFVLEdBQUdvRSxNQUFNLEtBQUssT0FBWCxHQUFxQixNQUFyQixHQUE4QixPQUEvQztBQUNBLGFBQU9ULDJEQUFZLENBQUMzRCxVQUFELENBQW5CO0FBQ0Q7O0FBQ0QsUUFBSUUsQ0FBQyxDQUFDZ0UsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLE1BQXhCLEtBQW1DLE1BQXZDLEVBQStDO0FBQzdDaEIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVluRCxDQUFDLENBQUNnRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsTUFBcEMsRUFBNEMsS0FBNUM7QUFDRDs7QUFDRCxRQUFJbEUsQ0FBQyxDQUFDZ0UsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLE1BQXhCLEtBQW1DLFFBQXZDLEVBQWlEO0FBQy9DaEIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVluRCxDQUFDLENBQUNnRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsTUFBcEMsRUFBNEMsS0FBNUM7QUFDRDtBQUNGO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0FBRU8sTUFBTWpGLFlBQVksR0FBSW9GLFVBQUQsSUFBeUI7QUFDbkQsUUFBTTVFLFlBQVksR0FBRzBFLDZDQUFNLENBQXFDLElBQXJDLENBQTNCO0FBQ0EsUUFBTXpFLFNBQVMsR0FBR3lFLDZDQUFNLENBQWlCLElBQWpCLENBQXhCO0FBRUEsTUFBSTtBQUFBLE9BQUM1RSxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQjRFLCtDQUFRLENBQUNDLFVBQUQsQ0FBOUI7O0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUlDLEtBQUQsSUFBdUI7QUFDaEQsUUFDRTlFLFlBQVksQ0FBQytFLE9BQWIsSUFDQSxDQUFDL0UsWUFBWSxDQUFDK0UsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJGLEtBQUssQ0FBQ0csTUFBcEMsQ0FERCxJQUVBaEYsU0FBUyxDQUFDOEUsT0FGVixJQUdBLENBQUM5RSxTQUFTLENBQUM4RSxPQUFWLENBQWtCQyxRQUFsQixDQUEyQkYsS0FBSyxDQUFDRyxNQUFqQyxDQUpILEVBS0U7QUFDQWxGLE1BQUFBLE9BQU8sQ0FBQyxLQUFELENBQVA7QUFDRDtBQUNGLEdBVEQ7O0FBV0EsUUFBTW1GLGNBQWMsR0FBSUosS0FBRCxJQUEwQjtBQUMvQyxRQUFJQSxLQUFLLENBQUNLLEdBQU4sS0FBYyxRQUFsQixFQUE0QjtBQUMxQixVQUFJckYsSUFBSixFQUFVO0FBQ1JDLFFBQUFBLE9BQU8sQ0FBQyxLQUFELENBQVA7QUFDRDtBQUNGO0FBQ0YsR0FORDs7QUFPQXlDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkeUIsSUFBQUEsUUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNQLGtCQUF2QyxFQUEyRCxJQUEzRDtBQUNBWixJQUFBQSxRQUFRLENBQUNtQixnQkFBVCxDQUEwQixTQUExQixFQUFxQ0YsY0FBckMsRUFBcUQsSUFBckQ7QUFDQSxXQUFPLE1BQU07QUFDWGpCLE1BQUFBLFFBQVEsQ0FBQ29CLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDUixrQkFBMUMsRUFBOEQsSUFBOUQ7QUFDQVosTUFBQUEsUUFBUSxDQUFDb0IsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0NILGNBQXhDLEVBQXdELElBQXhEO0FBQ0QsS0FIRDtBQUlELEdBUFEsRUFPTixDQUFDcEYsSUFBRCxDQVBNLENBQVQ7QUFTQSxTQUFPO0FBQUVBLElBQUFBLElBQUY7QUFBUUMsSUFBQUEsT0FBUjtBQUFpQkMsSUFBQUEsWUFBakI7QUFBK0JDLElBQUFBO0FBQS9CLEdBQVA7QUFDRCxDQWpDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUVPLFNBQVN3QyxXQUFULENBQ0w2QyxVQURLLEVBRUxILEdBRkssRUFHdUM7QUFDNUMsUUFBTTtBQUFBLE9BQUM5RSxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QnFFLCtDQUFRLENBQUNXLFVBQUQsQ0FBNUM7QUFFQTlDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU16RSxHQUFHLEdBQUdrRyxRQUFRLENBQUNDLGlCQUFyQjs7QUFDQSxRQUFJcUIsTUFBTSxDQUFDQyxVQUFQLENBQWtCLHdCQUFsQixFQUE0Q0MsS0FBNUMsS0FBc0QsU0FBMUQsRUFBcUU7QUFDbkUsWUFBTUMsa0JBQWtCLEdBQUdILE1BQU0sQ0FBQ0MsVUFBUCxDQUN6Qiw4QkFEeUIsQ0FBM0I7O0FBR0EsVUFDRUUsa0JBQWtCLENBQUNDLE9BQW5CLElBQ0FELGtCQUFrQixDQUFDRCxLQUFuQixLQUE2Qiw4QkFGL0IsRUFHRTtBQUNBbkYsUUFBQUEsYUFBYSxDQUFDLE1BQUQsQ0FBYjtBQUNBOEQsUUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DLE1BQW5DO0FBQ0QsT0FWa0UsQ0FXbkU7OztBQUNBcUIsTUFBQUEsa0JBQWtCLENBQUNOLGdCQUFuQixDQUFvQyxRQUFwQyxFQUE4QzdFLENBQUMsSUFBSTtBQUNqRCxjQUFNcUYsVUFBVSxHQUFHckYsQ0FBQyxDQUFDb0YsT0FBckI7O0FBQ0EsWUFBSUMsVUFBSixFQUFnQjtBQUNkN0gsVUFBQUEsR0FBRyxDQUFDb0csWUFBSixDQUFpQixjQUFqQixFQUFpQyxNQUFqQztBQUNBN0QsVUFBQUEsYUFBYSxDQUFDLE1BQUQsQ0FBYjtBQUNBOEQsVUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DLE1BQW5DO0FBQ0QsU0FKRCxNQUlPO0FBQ0x0RyxVQUFBQSxHQUFHLENBQUNvRyxZQUFKLENBQWlCLGNBQWpCLEVBQWlDLE9BQWpDO0FBQ0E3RCxVQUFBQSxhQUFhLENBQUMsT0FBRCxDQUFiO0FBQ0E4RCxVQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUMsT0FBbkM7QUFDRDtBQUNGLE9BWEQ7QUFZRDtBQUNGLEdBM0JRLEVBMkJOLEVBM0JNLENBQVQ7QUE2QkE3QixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNcUQsR0FBRyxHQUFHekIsWUFBWSxDQUFDMEIsT0FBYixDQUFxQlgsR0FBckIsQ0FBWjs7QUFDQSxRQUFJVSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQnZGLE1BQUFBLGFBQWEsQ0FBQ3VGLEdBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FMUSxFQUtOLENBQUNWLEdBQUQsQ0FMTSxDQUFUO0FBT0EzQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNekUsR0FBRyxHQUFHa0csUUFBUSxDQUFDQyxpQkFBckI7O0FBQ0EsUUFBSTdELFVBQVUsS0FBSyxNQUFuQixFQUEyQjtBQUN6QnRDLE1BQUFBLEdBQUcsQ0FBQ29HLFlBQUosQ0FBaUIsY0FBakIsRUFBaUMsTUFBakM7QUFDRCxLQUZELE1BRU8sSUFBSTlELFVBQVUsS0FBSyxPQUFuQixFQUE0QjtBQUNqQ3RDLE1BQUFBLEdBQUcsQ0FBQ29HLFlBQUosQ0FBaUIsY0FBakIsRUFBaUMsT0FBakM7QUFDRDtBQUNGLEdBUFEsRUFPTixDQUFDOUQsVUFBRCxDQVBNLENBQVQ7QUFTQW1DLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkK0MsSUFBQUEsTUFBTSxDQUFDbkIsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEJjLEdBQTVCLEVBQWlDOUUsVUFBakM7QUFDRCxHQUZRLEVBRU4sQ0FBQzhFLEdBQUQsRUFBTTlFLFVBQU4sQ0FGTSxDQUFUO0FBSUEsU0FBTyxDQUFDQSxVQUFELEVBQWFDLGFBQWIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUREO0FBVUEsaUVBQWU7QUFDYnhDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxHQUFHLEVBQUVELHVEQURDO0FBRU5FLElBQUFBLEtBQUssRUFBRUYseURBRkQ7QUFHTkcsSUFBQUEsS0FBSyxFQUFFSCx5REFIRDtBQUlOSyxJQUFBQSxPQUFPLEVBQUVMLDJEQUpIO0FBS05JLElBQUFBLEtBQUssRUFBRUoseURBQUE7QUFMRCxHQURLO0FBUWJNLEVBQUFBLE9BQU8sRUFBRTtBQUNQTCxJQUFBQSxHQUFHLEVBQUVLLHdEQURFO0FBRVBKLElBQUFBLEtBQUssRUFBRUksMERBQUE7QUFGQSxHQVJJO0FBWWJDLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxHQUFHLEVBQUVELDBEQUFBO0FBREksR0FaRTtBQWVieUYsRUFBQUEsTUFBTSxFQUFFO0FBQ043RyxJQUFBQSxLQUFLLEVBQUVELHlEQUREO0FBRU5JLElBQUFBLEtBQUssRUFBRUoseURBRkQ7QUFHTkssSUFBQUEsS0FBSyxFQUFFTCx5REFIRDtBQUlOTSxJQUFBQSxLQUFLLEVBQUVOLHlEQUFBO0FBSkQsR0FmSztBQXFCYnVCLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxNQUFNLEVBQUVELHlEQURIO0FBRUxFLElBQUFBLEtBQUssRUFBRUYsd0RBQUE7QUFGRixHQXJCTTtBQXlCYmhCLEVBQUFBLEdBQUcsRUFBRTtBQUNIQyxJQUFBQSxJQUFJLEVBQUVELGtEQURIO0FBRUhFLElBQUFBLEtBQUssRUFBRUYsc0RBQUE7QUFGSixHQXpCUTtBQTZCYkcsRUFBQUEsWUFBWSxFQUFFO0FBQ1pELElBQUFBLEtBQUssRUFBRUMsNERBREs7QUFFWkMsSUFBQUEsT0FBTyxFQUFFRCxpRUFGRztBQUdaRSxJQUFBQSxPQUFPLEVBQUVGLGlFQUhHO0FBSVpHLElBQUFBLE9BQU8sRUFBRUgsaUVBQUE7QUFKRyxHQTdCRDtBQW1DYmdCLEVBQUFBLE1BQU0sRUFBRUEsb0RBQUEsQ0FBV21ILEdBQUcsSUFBSTtBQUN4QiwyQ0FBWUEsR0FBWjtBQUFpQnJJLE1BQUFBLElBQUksRUFBRXFJLEdBQUcsQ0FBQ3JJLElBQUosQ0FBUyxJQUFULENBQXZCO0FBQXVDcUIsTUFBQUEsSUFBSSxFQUFFZ0gsR0FBRyxDQUFDaEgsSUFBSixDQUFTLElBQVQ7QUFBN0M7QUFDRCxHQUZPO0FBbkNLLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQVVBLGlFQUFlO0FBQ2JmLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxHQUFHLEVBQUVELHVEQURDO0FBRU5FLElBQUFBLEtBQUssRUFBRUYseURBRkQ7QUFHTkcsSUFBQUEsS0FBSyxFQUFFSCx5REFIRDtBQUlOSyxJQUFBQSxPQUFPLEVBQUVMLDJEQUpIO0FBS05JLElBQUFBLEtBQUssRUFBRUoseURBQUE7QUFMRCxHQURLO0FBUWJNLEVBQUFBLE9BQU8sRUFBRTtBQUNQTCxJQUFBQSxHQUFHLEVBQUVLLHdEQURFO0FBRVBKLElBQUFBLEtBQUssRUFBRUksMERBQUE7QUFGQSxHQVJJO0FBWWJDLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxHQUFHLEVBQUVELDBEQUFBO0FBREksR0FaRTtBQWVieUYsRUFBQUEsTUFBTSxFQUFFO0FBQ043RyxJQUFBQSxLQUFLLEVBQUVELHlEQUREO0FBRU5JLElBQUFBLEtBQUssRUFBRUoseURBRkQ7QUFHTkssSUFBQUEsS0FBSyxFQUFFTCx5REFIRDtBQUlOTSxJQUFBQSxLQUFLLEVBQUVOLHlEQUFBO0FBSkQsR0FmSztBQXFCYnVCLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxNQUFNLEVBQUVELHlEQURIO0FBRUxFLElBQUFBLEtBQUssRUFBRUYsd0RBQUE7QUFGRixHQXJCTTtBQXlCYmhCLEVBQUFBLEdBQUcsRUFBRTtBQUNIQyxJQUFBQSxJQUFJLEVBQUVELGtEQURIO0FBRUhFLElBQUFBLEtBQUssRUFBRUYsc0RBQUE7QUFGSixHQXpCUTtBQTZCYkcsRUFBQUEsWUFBWSxFQUFFO0FBQ1pELElBQUFBLEtBQUssRUFBRUMsNERBREs7QUFFWkMsSUFBQUEsT0FBTyxFQUFFRCxpRUFGRztBQUdaRSxJQUFBQSxPQUFPLEVBQUVGLGlFQUhHO0FBSVpHLElBQUFBLE9BQU8sRUFBRUgsaUVBQUE7QUFKRyxHQTdCRDtBQW1DYmdCLEVBQUFBLE1BQU0sRUFBRUEsb0RBQUEsQ0FBV21ILEdBQUcsSUFBSTtBQUN4QiwyQ0FBWUEsR0FBWjtBQUFpQnJJLE1BQUFBLElBQUksRUFBRXFJLEdBQUcsQ0FBQ3JJLElBQUosQ0FBUyxJQUFULENBQXZCO0FBQXVDcUIsTUFBQUEsSUFBSSxFQUFFZ0gsR0FBRyxDQUFDaEgsSUFBSixDQUFTLElBQVQ7QUFBN0M7QUFDRCxHQUZPO0FBbkNLLENBQWY7Ozs7Ozs7Ozs7O0FDVmE7O0FBQ2JtSCw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSUcsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQyx5RkFBRCxDQUFyQjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLG1CQUFPLENBQUMsMkRBQUQsQ0FBdEI7O0FBQ0EsSUFBSUcsZ0JBQWdCLEdBQUdILG1CQUFPLENBQUMsK0VBQUQsQ0FBOUI7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU1FLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxTQUFTQyxRQUFULENBQWtCbkYsTUFBbEIsRUFBMEJvRixJQUExQixFQUFnQ0MsRUFBaEMsRUFBb0NDLE9BQXBDLEVBQTZDO0FBQ3pDLE1BQUksSUFBSixFQUE4QztBQUM5QyxNQUFJLENBQUMsQ0FBQyxHQUFHVCxPQUFKLEVBQWFVLFVBQWIsQ0FBd0JILElBQXhCLENBQUwsRUFBb0MsT0FGSyxDQUd6QztBQUNBO0FBQ0E7QUFDQTs7QUFDQXBGLEVBQUFBLE1BQU0sQ0FBQ21GLFFBQVAsQ0FBZ0JDLElBQWhCLEVBQXNCQyxFQUF0QixFQUEwQkMsT0FBMUIsRUFBbUNFLEtBQW5DLENBQTBDQyxHQUFELElBQU87QUFDNUMsY0FBMkM7QUFDdkM7QUFDQSxZQUFNQSxHQUFOO0FBQ0g7QUFDSixHQUxEO0FBTUEsUUFBTUMsU0FBUyxHQUFHSixPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFDckYsTUFBZixLQUEwQixXQUFyQyxHQUFtRHFGLE9BQU8sQ0FBQ3JGLE1BQTNELEdBQW9FRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsTUFBdkcsQ0FieUMsQ0FjekM7O0FBQ0FpRixFQUFBQSxVQUFVLENBQUNFLElBQUksR0FBRyxHQUFQLEdBQWFDLEVBQWIsSUFBbUJLLFNBQVMsR0FBRyxNQUFNQSxTQUFULEdBQXFCLEVBQWpELENBQUQsQ0FBVixHQUFtRSxJQUFuRTtBQUNIOztBQUNELFNBQVNDLGVBQVQsQ0FBeUJ4QyxLQUF6QixFQUFnQztBQUM1QixRQUFNO0FBQUVHLElBQUFBO0FBQUYsTUFBY0gsS0FBSyxDQUFDUCxhQUExQjtBQUNBLFNBQU9VLE1BQU0sSUFBSUEsTUFBTSxLQUFLLE9BQXJCLElBQWdDSCxLQUFLLENBQUN5QyxPQUF0QyxJQUFpRHpDLEtBQUssQ0FBQzBDLE9BQXZELElBQWtFMUMsS0FBSyxDQUFDMkMsUUFBeEUsSUFBb0YzQyxLQUFLLENBQUM0QyxNQUExRixJQUFvRzVDLEtBQUssQ0FBQzZDLFdBQU4sSUFBcUI3QyxLQUFLLENBQUM2QyxXQUFOLENBQWtCQyxLQUFsQixLQUE0QixDQUE1SjtBQUNIOztBQUNELFNBQVNDLFdBQVQsQ0FBcUJ0SCxDQUFyQixFQUF3Qm9CLE1BQXhCLEVBQWdDb0YsSUFBaEMsRUFBc0NDLEVBQXRDLEVBQTBDYyxPQUExQyxFQUFtREMsT0FBbkQsRUFBNERDLE1BQTVELEVBQW9FcEcsTUFBcEUsRUFBNEU7QUFDeEUsUUFBTTtBQUFFcUcsSUFBQUE7QUFBRixNQUFnQjFILENBQUMsQ0FBQ2dFLGFBQXhCOztBQUNBLE1BQUkwRCxRQUFRLEtBQUssR0FBYixLQUFxQlgsZUFBZSxDQUFDL0csQ0FBRCxDQUFmLElBQXNCLENBQUMsQ0FBQyxHQUFHaUcsT0FBSixFQUFhVSxVQUFiLENBQXdCSCxJQUF4QixDQUE1QyxDQUFKLEVBQWdGO0FBQzVFO0FBQ0E7QUFDSDs7QUFDRHhHLEVBQUFBLENBQUMsQ0FBQytELGNBQUYsR0FOd0UsQ0FPeEU7O0FBQ0EsTUFBSTBELE1BQU0sSUFBSSxJQUFWLElBQWtCaEIsRUFBRSxDQUFDa0IsT0FBSCxDQUFXLEdBQVgsS0FBbUIsQ0FBekMsRUFBNEM7QUFDeENGLElBQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0gsR0FWdUUsQ0FXeEU7OztBQUNBckcsRUFBQUEsTUFBTSxDQUFDbUcsT0FBTyxHQUFHLFNBQUgsR0FBZSxNQUF2QixDQUFOLENBQXFDZixJQUFyQyxFQUEyQ0MsRUFBM0MsRUFBK0M7QUFDM0NlLElBQUFBLE9BRDJDO0FBRTNDbkcsSUFBQUEsTUFGMkM7QUFHM0NvRyxJQUFBQTtBQUgyQyxHQUEvQztBQUtIOztBQUNELFNBQVN6RixJQUFULENBQWM3QixLQUFkLEVBQXFCO0FBQ2pCLFlBQTJDO0FBQ3ZDLGFBQVN5SCxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUMzQixhQUFPLElBQUlDLEtBQUosQ0FBVyxnQ0FBK0JELElBQUksQ0FBQ2pELEdBQUksZ0JBQWVpRCxJQUFJLENBQUNFLFFBQVMsNkJBQTRCRixJQUFJLENBQUNHLE1BQU8sYUFBOUcsSUFBOEgsU0FBZ0MsQ0FBaEMsR0FBcUcsRUFBbk8sQ0FBVixDQUFQO0FBQ0gsS0FIc0MsQ0FJdkM7OztBQUNBLFVBQU1DLGtCQUFrQixHQUFHO0FBQ3ZCekIsTUFBQUEsSUFBSSxFQUFFO0FBRGlCLEtBQTNCO0FBR0EsVUFBTTBCLGFBQWEsR0FBR3pDLE1BQU0sQ0FBQzBDLElBQVAsQ0FBWUYsa0JBQVosQ0FBdEI7QUFDQUMsSUFBQUEsYUFBYSxDQUFDRSxPQUFkLENBQXVCeEQsR0FBRCxJQUFPO0FBQ3pCLFVBQUlBLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0FBQ2hCLFlBQUl6RSxLQUFLLENBQUN5RSxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCLE9BQU96RSxLQUFLLENBQUN5RSxHQUFELENBQVosS0FBc0IsUUFBdEIsSUFBa0MsT0FBT3pFLEtBQUssQ0FBQ3lFLEdBQUQsQ0FBWixLQUFzQixRQUFsRixFQUE0RjtBQUN4RixnQkFBTWdELGVBQWUsQ0FBQztBQUNsQmhELFlBQUFBLEdBRGtCO0FBRWxCbUQsWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUU3SCxLQUFLLENBQUN5RSxHQUFELENBQUwsS0FBZSxJQUFmLEdBQXNCLE1BQXRCLEdBQStCLE9BQU96RSxLQUFLLENBQUN5RSxHQUFEO0FBSGpDLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUkQsTUFRTztBQUNIO0FBQ0E7QUFDQSxjQUFNeUQsQ0FBQyxHQUFHekQsR0FBVjtBQUNIO0FBQ0osS0FkRCxFQVR1QyxDQXdCdkM7O0FBQ0EsVUFBTTBELGtCQUFrQixHQUFHO0FBQ3ZCN0IsTUFBQUEsRUFBRSxFQUFFLElBRG1CO0FBRXZCYyxNQUFBQSxPQUFPLEVBQUUsSUFGYztBQUd2QkUsTUFBQUEsTUFBTSxFQUFFLElBSGU7QUFJdkJELE1BQUFBLE9BQU8sRUFBRSxJQUpjO0FBS3ZCZSxNQUFBQSxRQUFRLEVBQUUsSUFMYTtBQU12QmhDLE1BQUFBLFFBQVEsRUFBRSxJQU5hO0FBT3ZCbEYsTUFBQUEsTUFBTSxFQUFFO0FBUGUsS0FBM0I7QUFTQSxVQUFNbUgsYUFBYSxHQUFHL0MsTUFBTSxDQUFDMEMsSUFBUCxDQUFZRyxrQkFBWixDQUF0QjtBQUNBRSxJQUFBQSxhQUFhLENBQUNKLE9BQWQsQ0FBdUJ4RCxHQUFELElBQU87QUFDekIsWUFBTTZELE9BQU8sR0FBRyxPQUFPdEksS0FBSyxDQUFDeUUsR0FBRCxDQUE1Qjs7QUFDQSxVQUFJQSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNkLFlBQUl6RSxLQUFLLENBQUN5RSxHQUFELENBQUwsSUFBYzZELE9BQU8sS0FBSyxRQUExQixJQUFzQ0EsT0FBTyxLQUFLLFFBQXRELEVBQWdFO0FBQzVELGdCQUFNYixlQUFlLENBQUM7QUFDbEJoRCxZQUFBQSxHQURrQjtBQUVsQm1ELFlBQUFBLFFBQVEsRUFBRSxzQkFGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFUztBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUkQsTUFRTyxJQUFJN0QsR0FBRyxLQUFLLFFBQVosRUFBc0I7QUFDekIsWUFBSXpFLEtBQUssQ0FBQ3lFLEdBQUQsQ0FBTCxJQUFjNkQsT0FBTyxLQUFLLFFBQTlCLEVBQXdDO0FBQ3BDLGdCQUFNYixlQUFlLENBQUM7QUFDbEJoRCxZQUFBQSxHQURrQjtBQUVsQm1ELFlBQUFBLFFBQVEsRUFBRSxVQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSTSxNQVFBLElBQUk3RCxHQUFHLEtBQUssU0FBUixJQUFxQkEsR0FBRyxLQUFLLFFBQTdCLElBQXlDQSxHQUFHLEtBQUssU0FBakQsSUFBOERBLEdBQUcsS0FBSyxVQUF0RSxJQUFvRkEsR0FBRyxLQUFLLFVBQWhHLEVBQTRHO0FBQy9HLFlBQUl6RSxLQUFLLENBQUN5RSxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCNkQsT0FBTyxLQUFLLFNBQXRDLEVBQWlEO0FBQzdDLGdCQUFNYixlQUFlLENBQUM7QUFDbEJoRCxZQUFBQSxHQURrQjtBQUVsQm1ELFlBQUFBLFFBQVEsRUFBRSxXQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSTSxNQVFBO0FBQ0g7QUFDQTtBQUNBLGNBQU1KLENBQUMsR0FBR3pELEdBQVY7QUFDSDtBQUNKLEtBL0JELEVBbkN1QyxDQW1FdkM7QUFDQTs7QUFDQSxVQUFNOEQsU0FBUyxHQUFHNUMsTUFBTSxDQUFDRCxPQUFQLENBQWUxQixNQUFmLENBQXNCLEtBQXRCLENBQWxCOztBQUNBLFFBQUloRSxLQUFLLENBQUNvRyxRQUFOLElBQWtCLENBQUNtQyxTQUFTLENBQUNsRSxPQUFqQyxFQUEwQztBQUN0Q2tFLE1BQUFBLFNBQVMsQ0FBQ2xFLE9BQVYsR0FBb0IsSUFBcEI7QUFDQXRCLE1BQUFBLE9BQU8sQ0FBQ3lGLElBQVIsQ0FBYSxzS0FBYjtBQUNIO0FBQ0o7O0FBQ0QsUUFBTUMsQ0FBQyxHQUFHekksS0FBSyxDQUFDb0csUUFBTixLQUFtQixLQUE3QjtBQUNBLFFBQU1uRixNQUFNLEdBQUcsQ0FBQyxHQUFHOEUsUUFBSixFQUFjbkYsU0FBZCxFQUFmOztBQUNBLFFBQU07QUFBRXlGLElBQUFBLElBQUY7QUFBU0MsSUFBQUE7QUFBVCxNQUFpQlgsTUFBTSxDQUFDRCxPQUFQLENBQWVnRCxPQUFmLENBQXVCLE1BQUk7QUFDOUMsVUFBTSxDQUFDQyxZQUFELEVBQWVDLFVBQWYsSUFBNkIsQ0FBQyxHQUFHOUMsT0FBSixFQUFhK0MsV0FBYixDQUF5QjVILE1BQXpCLEVBQWlDakIsS0FBSyxDQUFDcUcsSUFBdkMsRUFBNkMsSUFBN0MsQ0FBbkM7QUFDQSxXQUFPO0FBQ0hBLE1BQUFBLElBQUksRUFBRXNDLFlBREg7QUFFSHJDLE1BQUFBLEVBQUUsRUFBRXRHLEtBQUssQ0FBQ3NHLEVBQU4sR0FBVyxDQUFDLEdBQUdSLE9BQUosRUFBYStDLFdBQWIsQ0FBeUI1SCxNQUF6QixFQUFpQ2pCLEtBQUssQ0FBQ3NHLEVBQXZDLENBQVgsR0FBd0RzQyxVQUFVLElBQUlEO0FBRnZFLEtBQVA7QUFJSCxHQU5zQixFQU1wQixDQUNDMUgsTUFERCxFQUVDakIsS0FBSyxDQUFDcUcsSUFGUCxFQUdDckcsS0FBSyxDQUFDc0csRUFIUCxDQU5vQixDQUF2Qjs7QUFXQSxNQUFJO0FBQUV3QyxJQUFBQSxRQUFGO0FBQWExQixJQUFBQSxPQUFiO0FBQXVCQyxJQUFBQSxPQUF2QjtBQUFpQ0MsSUFBQUEsTUFBakM7QUFBMENwRyxJQUFBQTtBQUExQyxNQUFzRGxCLEtBQTFELENBekZpQixDQTBGakI7O0FBQ0EsTUFBSSxPQUFPOEksUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUM5QkEsSUFBQUEsUUFBUSxHQUFHLGFBQWNuRCxNQUFNLENBQUNELE9BQVAsQ0FBZXFELGFBQWYsQ0FBNkIsR0FBN0IsRUFBa0MsSUFBbEMsRUFBd0NELFFBQXhDLENBQXpCO0FBQ0gsR0E3RmdCLENBOEZqQjs7O0FBQ0EsTUFBSUUsS0FBSjs7QUFDQSxZQUE0QztBQUN4QyxRQUFJO0FBQ0FBLE1BQUFBLEtBQUssR0FBR3JELE1BQU0sQ0FBQ0QsT0FBUCxDQUFldUQsUUFBZixDQUF3QkMsSUFBeEIsQ0FBNkJKLFFBQTdCLENBQVI7QUFDSCxLQUZELENBRUUsT0FBT3BDLEdBQVAsRUFBWTtBQUNWLFlBQU0sSUFBSWlCLEtBQUosQ0FBVyw4REFBNkQzSCxLQUFLLENBQUNxRyxJQUFLLDRGQUF6RSxJQUF3SyxTQUFnQyxDQUFoQyxHQUFzRyxFQUE5USxDQUFWLENBQU47QUFDSDtBQUNKLEdBTkQsTUFNTyxFQUVOOztBQUNELFFBQU04QyxRQUFRLEdBQUdILEtBQUssSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQTFCLElBQXNDQSxLQUFLLENBQUNJLEdBQTdEO0FBQ0EsUUFBTSxDQUFDQyxrQkFBRCxFQUFxQkMsU0FBckIsSUFBa0MsQ0FBQyxHQUFHdEQsZ0JBQUosRUFBc0J1RCxlQUF0QixDQUFzQztBQUMxRUMsSUFBQUEsVUFBVSxFQUFFO0FBRDhELEdBQXRDLENBQXhDOztBQUdBLFFBQU1DLE1BQU0sR0FBRzlELE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0UsV0FBZixDQUE0QkMsRUFBRCxJQUFNO0FBQzVDTixJQUFBQSxrQkFBa0IsQ0FBQ00sRUFBRCxDQUFsQjs7QUFDQSxRQUFJUixRQUFKLEVBQWM7QUFDVixVQUFJLE9BQU9BLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0NBLFFBQVEsQ0FBQ1EsRUFBRCxDQUFSLENBQXBDLEtBQ0ssSUFBSSxPQUFPUixRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ25DQSxRQUFBQSxRQUFRLENBQUM5RSxPQUFULEdBQW1Cc0YsRUFBbkI7QUFDSDtBQUNKO0FBQ0osR0FSYyxFQVFaLENBQ0NSLFFBREQsRUFFQ0Usa0JBRkQsQ0FSWSxDQUFmOztBQVlBMUQsRUFBQUEsTUFBTSxDQUFDRCxPQUFQLENBQWU1RCxTQUFmLENBQXlCLE1BQUk7QUFDekIsVUFBTThILGNBQWMsR0FBR04sU0FBUyxJQUFJYixDQUFiLElBQWtCLENBQUMsR0FBRzNDLE9BQUosRUFBYVUsVUFBYixDQUF3QkgsSUFBeEIsQ0FBekM7QUFDQSxVQUFNTSxTQUFTLEdBQUcsT0FBT3pGLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQXlDRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsTUFBNUU7QUFDQSxVQUFNMkksWUFBWSxHQUFHMUQsVUFBVSxDQUFDRSxJQUFJLEdBQUcsR0FBUCxHQUFhQyxFQUFiLElBQW1CSyxTQUFTLEdBQUcsTUFBTUEsU0FBVCxHQUFxQixFQUFqRCxDQUFELENBQS9COztBQUNBLFFBQUlpRCxjQUFjLElBQUksQ0FBQ0MsWUFBdkIsRUFBcUM7QUFDakN6RCxNQUFBQSxRQUFRLENBQUNuRixNQUFELEVBQVNvRixJQUFULEVBQWVDLEVBQWYsRUFBbUI7QUFDdkJwRixRQUFBQSxNQUFNLEVBQUV5RjtBQURlLE9BQW5CLENBQVI7QUFHSDtBQUNKLEdBVEQsRUFTRyxDQUNDTCxFQURELEVBRUNELElBRkQsRUFHQ2lELFNBSEQsRUFJQ3BJLE1BSkQsRUFLQ3VILENBTEQsRUFNQ3hILE1BTkQsQ0FUSDs7QUFpQkEsUUFBTTZJLFVBQVUsR0FBRztBQUNmVixJQUFBQSxHQUFHLEVBQUVLLE1BRFU7QUFFZk0sSUFBQUEsT0FBTyxFQUFHbEssQ0FBRCxJQUFLO0FBQ1YsVUFBSW1KLEtBQUssQ0FBQ2hKLEtBQU4sSUFBZSxPQUFPZ0osS0FBSyxDQUFDaEosS0FBTixDQUFZK0osT0FBbkIsS0FBK0IsVUFBbEQsRUFBOEQ7QUFDMURmLFFBQUFBLEtBQUssQ0FBQ2hKLEtBQU4sQ0FBWStKLE9BQVosQ0FBb0JsSyxDQUFwQjtBQUNIOztBQUNELFVBQUksQ0FBQ0EsQ0FBQyxDQUFDbUssZ0JBQVAsRUFBeUI7QUFDckI3QyxRQUFBQSxXQUFXLENBQUN0SCxDQUFELEVBQUlvQixNQUFKLEVBQVlvRixJQUFaLEVBQWtCQyxFQUFsQixFQUFzQmMsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDQyxNQUF4QyxFQUFnRHBHLE1BQWhELENBQVg7QUFDSDtBQUNKO0FBVGMsR0FBbkI7O0FBV0E0SSxFQUFBQSxVQUFVLENBQUNHLFlBQVgsR0FBMkJwSyxDQUFELElBQUs7QUFDM0IsUUFBSSxDQUFDLENBQUMsR0FBR2lHLE9BQUosRUFBYVUsVUFBYixDQUF3QkgsSUFBeEIsQ0FBTCxFQUFvQzs7QUFDcEMsUUFBSTJDLEtBQUssQ0FBQ2hKLEtBQU4sSUFBZSxPQUFPZ0osS0FBSyxDQUFDaEosS0FBTixDQUFZaUssWUFBbkIsS0FBb0MsVUFBdkQsRUFBbUU7QUFDL0RqQixNQUFBQSxLQUFLLENBQUNoSixLQUFOLENBQVlpSyxZQUFaLENBQXlCcEssQ0FBekI7QUFDSDs7QUFDRHVHLElBQUFBLFFBQVEsQ0FBQ25GLE1BQUQsRUFBU29GLElBQVQsRUFBZUMsRUFBZixFQUFtQjtBQUN2QjRELE1BQUFBLFFBQVEsRUFBRTtBQURhLEtBQW5CLENBQVI7QUFHSCxHQVJELENBckppQixDQThKakI7QUFDQTs7O0FBQ0EsTUFBSWxLLEtBQUssQ0FBQ29JLFFBQU4sSUFBa0JZLEtBQUssQ0FBQ21CLElBQU4sS0FBZSxHQUFmLElBQXNCLEVBQUUsVUFBVW5CLEtBQUssQ0FBQ2hKLEtBQWxCLENBQTVDLEVBQXNFO0FBQ2xFLFVBQU0yRyxTQUFTLEdBQUcsT0FBT3pGLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQXlDRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsTUFBNUUsQ0FEa0UsQ0FFbEU7QUFDQTs7QUFDQSxVQUFNa0osWUFBWSxHQUFHbkosTUFBTSxJQUFJQSxNQUFNLENBQUNvSixjQUFqQixJQUFtQyxDQUFDLEdBQUd2RSxPQUFKLEVBQWF3RSxlQUFiLENBQTZCaEUsRUFBN0IsRUFBaUNLLFNBQWpDLEVBQTRDMUYsTUFBTSxJQUFJQSxNQUFNLENBQUNzSixPQUE3RCxFQUFzRXRKLE1BQU0sSUFBSUEsTUFBTSxDQUFDdUosYUFBdkYsQ0FBeEQ7QUFDQVYsSUFBQUEsVUFBVSxDQUFDekQsSUFBWCxHQUFrQitELFlBQVksSUFBSSxDQUFDLEdBQUd0RSxPQUFKLEVBQWEyRSxXQUFiLENBQXlCLENBQUMsR0FBRzNFLE9BQUosRUFBYTRFLFNBQWIsQ0FBdUJwRSxFQUF2QixFQUEyQkssU0FBM0IsRUFBc0MxRixNQUFNLElBQUlBLE1BQU0sQ0FBQzBKLGFBQXZELENBQXpCLENBQWxDO0FBQ0g7O0FBQ0QsU0FBTyxhQUFjaEYsTUFBTSxDQUFDRCxPQUFQLENBQWVrRixZQUFmLENBQTRCNUIsS0FBNUIsRUFBbUNjLFVBQW5DLENBQXJCO0FBQ0g7O0FBQ0QsSUFBSWUsUUFBUSxHQUFHaEosSUFBZjtBQUNBMkQsZUFBQSxHQUFrQnFGLFFBQWxCOzs7Ozs7Ozs7OztBQ2pPYTs7QUFDYnZGLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELCtCQUFBLEdBQWtDc0YsdUJBQWxDO0FBQ0F0RixrQ0FBQSxHQUFxQyxLQUFLLENBQTFDOztBQUNBLFNBQVNzRix1QkFBVCxDQUFpQ0UsSUFBakMsRUFBdUM7QUFDbkMsU0FBT0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsR0FBZCxLQUFzQkQsSUFBSSxLQUFLLEdBQS9CLEdBQXFDQSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQXJDLEdBQXlERixJQUFoRTtBQUNIOztBQUNELE1BQU1ELDBCQUEwQixHQUFHSSxNQUFBLEdBQXFDSCxDQUFyQyxHQVEvQkYsdUJBUko7QUFTQXRGLGtDQUFBLEdBQXFDdUYsMEJBQXJDOzs7Ozs7Ozs7OztBQ2xCYTs7QUFDYnpGLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELDJCQUFBLEdBQThCQSwwQkFBQSxHQUE2QixLQUFLLENBQWhFOztBQUNBLE1BQU0rRixtQkFBbUIsR0FBRyxPQUFPRSxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNGLG1CQUFwQyxJQUEyREUsSUFBSSxDQUFDRixtQkFBTCxDQUF5QkcsSUFBekIsQ0FBOEI3RyxNQUE5QixDQUEzRCxJQUFvRyxVQUFTOEcsRUFBVCxFQUFhO0FBQ3pJLE1BQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQVo7QUFDQSxTQUFPQyxVQUFVLENBQUMsWUFBVztBQUN6QkosSUFBQUEsRUFBRSxDQUFDO0FBQ0NLLE1BQUFBLFVBQVUsRUFBRSxLQURiO0FBRUNDLE1BQUFBLGFBQWEsRUFBRSxZQUFXO0FBQ3RCLGVBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNTixJQUFJLENBQUNDLEdBQUwsS0FBYUYsS0FBbkIsQ0FBWixDQUFQO0FBQ0g7QUFKRixLQUFELENBQUY7QUFNSCxHQVBnQixFQU9kLENBUGMsQ0FBakI7QUFRSCxDQVZEOztBQVdBcEcsMkJBQUEsR0FBOEIrRixtQkFBOUI7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsT0FBT0MsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDRCxrQkFBcEMsSUFBMERDLElBQUksQ0FBQ0Qsa0JBQUwsQ0FBd0JFLElBQXhCLENBQTZCN0csTUFBN0IsQ0FBMUQsSUFBa0csVUFBUzVHLEVBQVQsRUFBYTtBQUN0SSxTQUFPbU8sWUFBWSxDQUFDbk8sRUFBRCxDQUFuQjtBQUNILENBRkQ7O0FBR0F1SCwwQkFBQSxHQUE2QmdHLGtCQUE3Qjs7Ozs7Ozs7Ozs7QUNwQmE7O0FBQ2JsRyw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxzQkFBQSxHQUF5QjZHLGNBQXpCO0FBQ0E3RyxvQkFBQSxHQUF1QjhHLFlBQXZCO0FBQ0E5Ryw4QkFBQSxHQUFpQytHLHNCQUFqQztBQUNBL0cseUJBQUEsR0FBNEJnSCxpQkFBNUI7O0FBQ0EsSUFBSUMsc0JBQXNCLEdBQUc3RyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxrSEFBRCxDQUFSLENBQW5EOztBQUNBLElBQUk2RyxvQkFBb0IsR0FBRzdHLG1CQUFPLENBQUMseUZBQUQsQ0FBbEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdILEVBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU0wRyxpQkFBaUIsR0FBRyxJQUExQjs7QUFDQSxTQUFTQyxVQUFULENBQW9CbkksR0FBcEIsRUFBeUJZLEdBQXpCLEVBQThCd0gsU0FBOUIsRUFBeUM7QUFDckMsTUFBSUMsS0FBSyxHQUFHekgsR0FBRyxDQUFDMEgsR0FBSixDQUFRdEksR0FBUixDQUFaOztBQUNBLE1BQUlxSSxLQUFKLEVBQVc7QUFDUCxRQUFJLFlBQVlBLEtBQWhCLEVBQXVCO0FBQ25CLGFBQU9BLEtBQUssQ0FBQ0UsTUFBYjtBQUNIOztBQUNELFdBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkosS0FBaEIsQ0FBUDtBQUNIOztBQUNELE1BQUlLLFFBQUo7QUFDQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUgsT0FBSixDQUFhQyxPQUFELElBQVc7QUFDaENDLElBQUFBLFFBQVEsR0FBR0QsT0FBWDtBQUNILEdBRlksQ0FBYjtBQUdBN0gsRUFBQUEsR0FBRyxDQUFDZ0ksR0FBSixDQUFRNUksR0FBUixFQUFhcUksS0FBSyxHQUFHO0FBQ2pCSSxJQUFBQSxPQUFPLEVBQUVDLFFBRFE7QUFFakJILElBQUFBLE1BQU0sRUFBRUk7QUFGUyxHQUFyQjtBQUlBLFNBQU9QLFNBQVMsR0FBR0EsU0FBUyxHQUFHUyxJQUFaLENBQWtCN0gsS0FBRCxLQUFVMEgsUUFBUSxDQUFDMUgsS0FBRCxDQUFSLEVBQWlCQSxLQUEzQixDQUFqQixDQUFILEdBQ1oySCxJQURKO0FBRUg7O0FBQ0QsU0FBU0csV0FBVCxDQUFxQkMsSUFBckIsRUFBMkI7QUFDdkIsTUFBSTtBQUNBQSxJQUFBQSxJQUFJLEdBQUdqSyxRQUFRLENBQUN3RixhQUFULENBQXVCLE1BQXZCLENBQVA7QUFDQSxXQUFPO0FBQ1A7QUFDQyxPQUFDLENBQUNsRSxNQUFNLENBQUM0SSxvQkFBVCxJQUFpQyxDQUFDLENBQUNsSyxRQUFRLENBQUNtSyxZQUE3QyxJQUE4REYsSUFBSSxDQUFDRyxPQUFMLENBQWFDLFFBQWIsQ0FBc0IsVUFBdEI7QUFGOUQ7QUFHSCxHQUxELENBS0UsT0FBTy9OLENBQVAsRUFBVTtBQUNSLFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsTUFBTWdPLFdBQVcsR0FBR04sV0FBVyxFQUEvQjs7QUFDQSxTQUFTTyxjQUFULENBQXdCekgsSUFBeEIsRUFBOEJDLEVBQTlCLEVBQWtDa0gsSUFBbEMsRUFBd0M7QUFDcEMsU0FBTyxJQUFJUCxPQUFKLENBQVksQ0FBQ2MsR0FBRCxFQUFNQyxHQUFOLEtBQVk7QUFDM0IsUUFBSXpLLFFBQVEsQ0FBQzBLLGFBQVQsQ0FBd0IsK0JBQThCNUgsSUFBSyxJQUEzRCxDQUFKLEVBQXFFO0FBQ2pFLGFBQU8wSCxHQUFHLEVBQVY7QUFDSDs7QUFDRFAsSUFBQUEsSUFBSSxHQUFHakssUUFBUSxDQUFDd0YsYUFBVCxDQUF1QixNQUF2QixDQUFQLENBSjJCLENBSzNCOztBQUNBLFFBQUl6QyxFQUFKLEVBQVFrSCxJQUFJLENBQUNsSCxFQUFMLEdBQVVBLEVBQVY7QUFDUmtILElBQUFBLElBQUksQ0FBQ1UsR0FBTCxHQUFZLFVBQVo7QUFDQVYsSUFBQUEsSUFBSSxDQUFDVyxXQUFMLEdBQW1CaEQsU0FBbkI7QUFDQXFDLElBQUFBLElBQUksQ0FBQ2EsTUFBTCxHQUFjTixHQUFkO0FBQ0FQLElBQUFBLElBQUksQ0FBQ2MsT0FBTCxHQUFlTixHQUFmLENBVjJCLENBVzNCOztBQUNBUixJQUFBQSxJQUFJLENBQUNuSCxJQUFMLEdBQVlBLElBQVo7QUFDQTlDLElBQUFBLFFBQVEsQ0FBQ2dMLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmhCLElBQTFCO0FBQ0gsR0FkTSxDQUFQO0FBZUg7O0FBQ0QsTUFBTWlCLGdCQUFnQixHQUFHQyxNQUFNLENBQUMsa0JBQUQsQ0FBL0I7O0FBQ0EsU0FBU3JDLGNBQVQsQ0FBd0IzRixHQUF4QixFQUE2QjtBQUN6QixTQUFPcEIsTUFBTSxDQUFDQyxjQUFQLENBQXNCbUIsR0FBdEIsRUFBMkIrSCxnQkFBM0IsRUFBNkMsRUFBN0MsQ0FBUDtBQUVIOztBQUNELFNBQVNuQyxZQUFULENBQXNCNUYsR0FBdEIsRUFBMkI7QUFDdkIsU0FBT0EsR0FBRyxJQUFJK0gsZ0JBQWdCLElBQUkvSCxHQUFsQztBQUNIOztBQUNELFNBQVNpSSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsTUFBM0IsRUFBbUM7QUFDL0IsU0FBTyxJQUFJNUIsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVTRCLE1BQVYsS0FBbUI7QUFDbENELElBQUFBLE1BQU0sR0FBR3RMLFFBQVEsQ0FBQ3dGLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQURrQyxDQUVsQztBQUNBO0FBQ0E7O0FBQ0E4RixJQUFBQSxNQUFNLENBQUNSLE1BQVAsR0FBZ0JuQixPQUFoQjs7QUFDQTJCLElBQUFBLE1BQU0sQ0FBQ1AsT0FBUCxHQUFpQixNQUFJUSxNQUFNLENBQUN6QyxjQUFjLENBQUMsSUFBSTFFLEtBQUosQ0FBVywwQkFBeUJpSCxHQUFJLEVBQXhDLENBQUQsQ0FBZixDQUEzQixDQU5rQyxDQVFsQztBQUNBOzs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDVixXQUFQLEdBQXFCaEQsU0FBckIsQ0FWa0MsQ0FXbEM7QUFDQTs7QUFDQTBELElBQUFBLE1BQU0sQ0FBQ0QsR0FBUCxHQUFhQSxHQUFiO0FBQ0FyTCxJQUFBQSxRQUFRLENBQUN3TCxJQUFULENBQWNQLFdBQWQsQ0FBMEJLLE1BQTFCO0FBQ0gsR0FmTSxDQUFQO0FBZ0JILEVBQ0Q7QUFDQTs7O0FBQ0EsSUFBSUcsZUFBSixFQUNBOztBQUNBLFNBQVNDLHlCQUFULENBQW1DeEcsQ0FBbkMsRUFBc0N5RyxFQUF0QyxFQUEwQ3hJLEdBQTFDLEVBQStDO0FBQzNDLFNBQU8sSUFBSXVHLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVU0QixNQUFWLEtBQW1CO0FBQ2xDLFFBQUlLLFNBQVMsR0FBRyxLQUFoQjtBQUNBMUcsSUFBQUEsQ0FBQyxDQUFDNkUsSUFBRixDQUFROEIsQ0FBRCxJQUFLO0FBQ1I7QUFDQUQsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDQWpDLE1BQUFBLE9BQU8sQ0FBQ2tDLENBQUQsQ0FBUDtBQUNILEtBSkQsRUFJRzNJLEtBSkgsQ0FJU3FJLE1BSlQsRUFGa0MsQ0FPbEM7QUFDQTs7QUFDQSxjQUE0QztBQUN4QyxPQUFDRSxlQUFlLElBQUkvQixPQUFPLENBQUNDLE9BQVIsRUFBcEIsRUFBdUNJLElBQXZDLENBQTRDLE1BQUk7QUFDNUMsU0FBQyxHQUFHWixvQkFBSixFQUEwQm5CLG1CQUExQixDQUE4QyxNQUFJUSxVQUFVLENBQUMsTUFBSTtBQUN6RCxjQUFJLENBQUNvRCxTQUFMLEVBQWdCO0FBQ1pMLFlBQUFBLE1BQU0sQ0FBQ3BJLEdBQUQsQ0FBTjtBQUNIO0FBQ0osU0FKdUQsRUFJckR3SSxFQUpxRCxDQUE1RDtBQU1ILE9BUEQ7QUFRSDs7QUFDRCxlQUE0QyxFQU8zQztBQUNKLEdBM0JNLENBQVA7QUE0Qkg7O0FBQ0QsU0FBUzNDLHNCQUFULEdBQWtDO0FBQzlCLE1BQUlkLElBQUksQ0FBQzRELGdCQUFULEVBQTJCO0FBQ3ZCLFdBQU9wQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J6QixJQUFJLENBQUM0RCxnQkFBckIsQ0FBUDtBQUNIOztBQUNELFFBQU1DLGVBQWUsR0FBRyxJQUFJckMsT0FBSixDQUFhQyxPQUFELElBQVc7QUFDM0M7QUFDQSxVQUFNdkIsRUFBRSxHQUFHRixJQUFJLENBQUM4RCxtQkFBaEI7O0FBQ0E5RCxJQUFBQSxJQUFJLENBQUM4RCxtQkFBTCxHQUEyQixNQUFJO0FBQzNCckMsTUFBQUEsT0FBTyxDQUFDekIsSUFBSSxDQUFDNEQsZ0JBQU4sQ0FBUDtBQUNBMUQsTUFBQUEsRUFBRSxJQUFJQSxFQUFFLEVBQVI7QUFDSCxLQUhEO0FBSUgsR0FQdUIsQ0FBeEI7QUFRQSxTQUFPc0QseUJBQXlCLENBQUNLLGVBQUQsRUFBa0IzQyxpQkFBbEIsRUFBcUNOLGNBQWMsQ0FBQyxJQUFJMUUsS0FBSixDQUFVLHNDQUFWLENBQUQsQ0FBbkQsQ0FBaEM7QUFDSDs7QUFDRCxTQUFTNkgsZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDQyxLQUF2QyxFQUE4QztBQUMxQyxZQUE0QztBQUN4QyxXQUFPekMsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQ25CeUMsTUFBQUEsT0FBTyxFQUFFLENBQ0xGLFdBQVcsR0FBRyw0QkFBZCxHQUE2Q0csU0FBUyxDQUFDLENBQUMsR0FBR25ELHNCQUFKLEVBQTRCL0csT0FBNUIsQ0FBb0NnSyxLQUFwQyxFQUEyQyxLQUEzQyxDQUFELENBRGpELENBRFU7QUFJbkI7QUFDQUcsTUFBQUEsR0FBRyxFQUFFO0FBTGMsS0FBaEIsQ0FBUDtBQU9IOztBQUNELFNBQU90RCxzQkFBc0IsR0FBR2UsSUFBekIsQ0FBK0J3QyxRQUFELElBQVk7QUFDN0MsUUFBSSxFQUFFSixLQUFLLElBQUlJLFFBQVgsQ0FBSixFQUEwQjtBQUN0QixZQUFNekQsY0FBYyxDQUFDLElBQUkxRSxLQUFKLENBQVcsMkJBQTBCK0gsS0FBTSxFQUEzQyxDQUFELENBQXBCO0FBQ0g7O0FBQ0QsVUFBTUssUUFBUSxHQUFHRCxRQUFRLENBQUNKLEtBQUQsQ0FBUixDQUFnQnJLLEdBQWhCLENBQXFCeUgsS0FBRCxJQUFTMkMsV0FBVyxHQUFHLFNBQWQsR0FBMEJHLFNBQVMsQ0FBQzlDLEtBQUQsQ0FBaEUsQ0FBakI7QUFFQSxXQUFPO0FBQ0g2QyxNQUFBQSxPQUFPLEVBQUVJLFFBQVEsQ0FBQ0MsTUFBVCxDQUFpQkMsQ0FBRCxJQUFLQSxDQUFDLENBQUNoRixRQUFGLENBQVcsS0FBWCxDQUFyQixDQUROO0FBR0g0RSxNQUFBQSxHQUFHLEVBQUVFLFFBQVEsQ0FBQ0MsTUFBVCxDQUFpQkMsQ0FBRCxJQUFLQSxDQUFDLENBQUNoRixRQUFGLENBQVcsTUFBWCxDQUFyQjtBQUhGLEtBQVA7QUFNSCxHQVpNLENBQVA7QUFhSDs7QUFDRCxTQUFTdUIsaUJBQVQsQ0FBMkJpRCxXQUEzQixFQUF3QztBQUNwQyxRQUFNUyxXQUFXLEdBQUcsSUFBSUMsR0FBSixFQUFwQjtBQUNBLFFBQU1DLGFBQWEsR0FBRyxJQUFJRCxHQUFKLEVBQXRCO0FBQ0EsUUFBTUUsV0FBVyxHQUFHLElBQUlGLEdBQUosRUFBcEI7QUFDQSxRQUFNRyxNQUFNLEdBQUcsSUFBSUgsR0FBSixFQUFmOztBQUNBLFdBQVNJLGtCQUFULENBQTRCM0IsR0FBNUIsRUFBaUM7QUFDN0IsUUFBSXhCLElBQUksR0FBR2dELGFBQWEsQ0FBQ3JELEdBQWQsQ0FBa0I2QixHQUFsQixDQUFYOztBQUNBLFFBQUl4QixJQUFKLEVBQVU7QUFDTixhQUFPQSxJQUFQO0FBQ0gsS0FKNEIsQ0FLN0I7OztBQUNBLFFBQUk3SixRQUFRLENBQUMwSyxhQUFULENBQXdCLGdCQUFlVyxHQUFJLElBQTNDLENBQUosRUFBcUQ7QUFDakQsYUFBTzNCLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0g7O0FBQ0RrRCxJQUFBQSxhQUFhLENBQUMvQyxHQUFkLENBQWtCdUIsR0FBbEIsRUFBdUJ4QixJQUFJLEdBQUd1QixZQUFZLENBQUNDLEdBQUQsQ0FBMUM7QUFDQSxXQUFPeEIsSUFBUDtBQUNIOztBQUNELFdBQVNvRCxlQUFULENBQXlCbkssSUFBekIsRUFBK0I7QUFDM0IsUUFBSStHLElBQUksR0FBR2lELFdBQVcsQ0FBQ3RELEdBQVosQ0FBZ0IxRyxJQUFoQixDQUFYOztBQUNBLFFBQUkrRyxJQUFKLEVBQVU7QUFDTixhQUFPQSxJQUFQO0FBQ0g7O0FBQ0RpRCxJQUFBQSxXQUFXLENBQUNoRCxHQUFaLENBQWdCaEgsSUFBaEIsRUFBc0IrRyxJQUFJLEdBQUdxRCxLQUFLLENBQUNwSyxJQUFELENBQUwsQ0FBWWlILElBQVosQ0FBa0JTLEdBQUQsSUFBTztBQUNqRCxVQUFJLENBQUNBLEdBQUcsQ0FBQzJDLEVBQVQsRUFBYTtBQUNULGNBQU0sSUFBSS9JLEtBQUosQ0FBVyw4QkFBNkJ0QixJQUFLLEVBQTdDLENBQU47QUFDSDs7QUFDRCxhQUFPMEgsR0FBRyxDQUFDNEMsSUFBSixHQUFXckQsSUFBWCxDQUFpQnFELElBQUQsS0FBUztBQUN4QnRLLFFBQUFBLElBQUksRUFBRUEsSUFEa0I7QUFFeEJ1SyxRQUFBQSxPQUFPLEVBQUVEO0FBRmUsT0FBVCxDQUFoQixDQUFQO0FBS0gsS0FUNEIsRUFTMUJsSyxLQVQwQixDQVNuQkMsR0FBRCxJQUFPO0FBQ1osWUFBTTJGLGNBQWMsQ0FBQzNGLEdBQUQsQ0FBcEI7QUFDSCxLQVg0QixDQUE3QjtBQVlBLFdBQU8wRyxJQUFQO0FBQ0g7O0FBQ0QsU0FBTztBQUNIeUQsSUFBQUEsY0FBYyxDQUFFbkIsS0FBRixFQUFTO0FBQ25CLGFBQU85QyxVQUFVLENBQUM4QyxLQUFELEVBQVFRLFdBQVIsQ0FBakI7QUFDSCxLQUhFOztBQUlIWSxJQUFBQSxZQUFZLENBQUVwQixLQUFGLEVBQVNxQixPQUFULEVBQWtCO0FBQzFCOUQsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCNkQsT0FBaEIsRUFBeUJ6RCxJQUF6QixDQUErQjBELEVBQUQsSUFBTUEsRUFBRSxFQUF0QyxFQUNFMUQsSUFERixDQUNROUgsT0FBRCxLQUFZO0FBQ1h5TCxRQUFBQSxTQUFTLEVBQUV6TCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsT0FBbkIsSUFBOEJGLE9BRDlCO0FBRVhBLFFBQUFBLE9BQU8sRUFBRUE7QUFGRSxPQUFaLENBRFAsRUFLR2tCLEdBQUQsS0FBUTtBQUNGd0ssUUFBQUEsS0FBSyxFQUFFeEs7QUFETCxPQUFSLENBTEYsRUFRRTRHLElBUkYsQ0FRUTZELEtBQUQsSUFBUztBQUNaLGNBQU1DLEdBQUcsR0FBR2xCLFdBQVcsQ0FBQ25ELEdBQVosQ0FBZ0IyQyxLQUFoQixDQUFaO0FBQ0FRLFFBQUFBLFdBQVcsQ0FBQzdDLEdBQVosQ0FBZ0JxQyxLQUFoQixFQUF1QnlCLEtBQXZCO0FBQ0EsWUFBSUMsR0FBRyxJQUFJLGFBQWFBLEdBQXhCLEVBQTZCQSxHQUFHLENBQUNsRSxPQUFKLENBQVlpRSxLQUFaO0FBQ2hDLE9BWkQ7QUFhSCxLQWxCRTs7QUFtQkhFLElBQUFBLFNBQVMsQ0FBRTNCLEtBQUYsRUFBU3RKLFFBQVQsRUFBbUI7QUFDeEIsYUFBT3dHLFVBQVUsQ0FBQzhDLEtBQUQsRUFBUVksTUFBUixFQUFnQixNQUFJO0FBQ2pDLGNBQU1nQixpQkFBaUIsR0FBRzlCLGdCQUFnQixDQUFDQyxXQUFELEVBQWNDLEtBQWQsQ0FBaEIsQ0FBcUNwQyxJQUFyQyxDQUEwQyxDQUFDO0FBQUVxQyxVQUFBQSxPQUFGO0FBQVlFLFVBQUFBO0FBQVosU0FBRCxLQUFzQjtBQUN0RixpQkFBTzVDLE9BQU8sQ0FBQ3NFLEdBQVIsQ0FBWSxDQUNmckIsV0FBVyxDQUFDc0IsR0FBWixDQUFnQjlCLEtBQWhCLElBQXlCLEVBQXpCLEdBQThCekMsT0FBTyxDQUFDc0UsR0FBUixDQUFZNUIsT0FBTyxDQUFDdEssR0FBUixDQUFZa0wsa0JBQVosQ0FBWixDQURmLEVBRWZ0RCxPQUFPLENBQUNzRSxHQUFSLENBQVkxQixHQUFHLENBQUN4SyxHQUFKLENBQVFtTCxlQUFSLENBQVosQ0FGZSxDQUFaLENBQVA7QUFJSCxTQUx5QixFQUt2QmxELElBTHVCLENBS2pCUyxHQUFELElBQU87QUFDWCxpQkFBTyxLQUFLOEMsY0FBTCxDQUFvQm5CLEtBQXBCLEVBQTJCcEMsSUFBM0IsQ0FBaUNtRSxVQUFELEtBQWU7QUFDOUNBLFlBQUFBLFVBRDhDO0FBRTlDaFEsWUFBQUEsTUFBTSxFQUFFc00sR0FBRyxDQUFDLENBQUQ7QUFGbUMsV0FBZixDQUFoQyxDQUFQO0FBS0gsU0FYeUIsQ0FBMUI7O0FBWUEsa0JBQTRDO0FBQ3hDaUIsVUFBQUEsZUFBZSxHQUFHLElBQUkvQixPQUFKLENBQWFDLE9BQUQsSUFBVztBQUNyQyxnQkFBSW9FLGlCQUFKLEVBQXVCO0FBQ25CLHFCQUFPQSxpQkFBaUIsQ0FBQ0ksT0FBbEIsQ0FBMEIsTUFBSTtBQUNqQ3hFLGdCQUFBQSxPQUFPO0FBQ1YsZUFGTSxDQUFQO0FBR0g7QUFDSixXQU5pQixDQUFsQjtBQU9IOztBQUNELGVBQU8rQix5QkFBeUIsQ0FBQ3FDLGlCQUFELEVBQW9CM0UsaUJBQXBCLEVBQXVDTixjQUFjLENBQUMsSUFBSTFFLEtBQUosQ0FBVyxtQ0FBa0MrSCxLQUFNLEVBQW5ELENBQUQsQ0FBckQsQ0FBekIsQ0FBdUlwQyxJQUF2SSxDQUE0SSxDQUFDO0FBQUVtRSxVQUFBQSxVQUFGO0FBQWVoUSxVQUFBQTtBQUFmLFNBQUQsS0FBNEI7QUFDM0ssZ0JBQU1zTSxHQUFHLEdBQUd6SSxNQUFNLENBQUNxTSxNQUFQLENBQWM7QUFDdEJsUSxZQUFBQSxNQUFNLEVBQUVBO0FBRGMsV0FBZCxFQUVUZ1EsVUFGUyxDQUFaO0FBR0EsaUJBQU8sV0FBV0EsVUFBWCxHQUF3QkEsVUFBeEIsR0FBcUMxRCxHQUE1QztBQUNILFNBTE0sRUFLSnRILEtBTEksQ0FLR0MsR0FBRCxJQUFPO0FBQ1osY0FBSU4sUUFBSixFQUFjO0FBQ1Y7QUFDQSxrQkFBTU0sR0FBTjtBQUNIOztBQUNELGlCQUFPO0FBQ0h3SyxZQUFBQSxLQUFLLEVBQUV4SztBQURKLFdBQVA7QUFHSCxTQWJNLENBQVA7QUFjSCxPQXBDZ0IsQ0FBakI7QUFxQ0gsS0F6REU7O0FBMERITixJQUFBQSxRQUFRLENBQUVzSixLQUFGLEVBQVM7QUFDYjtBQUNBO0FBQ0EsVUFBSWtDLEVBQUo7O0FBQ0EsVUFBSUEsRUFBRSxHQUFHQyxTQUFTLENBQUNDLFVBQW5CLEVBQStCO0FBQzNCO0FBQ0EsWUFBSUYsRUFBRSxDQUFDRyxRQUFILElBQWUsS0FBS3pHLElBQUwsQ0FBVXNHLEVBQUUsQ0FBQ0ksYUFBYixDQUFuQixFQUFnRCxPQUFPL0UsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDbkQ7O0FBQ0QsYUFBT3NDLGdCQUFnQixDQUFDQyxXQUFELEVBQWNDLEtBQWQsQ0FBaEIsQ0FBcUNwQyxJQUFyQyxDQUEyQzJFLE1BQUQsSUFBVWhGLE9BQU8sQ0FBQ3NFLEdBQVIsQ0FBWTFELFdBQVcsR0FBR29FLE1BQU0sQ0FBQ3RDLE9BQVAsQ0FBZXRLLEdBQWYsQ0FBb0J3SixNQUFELElBQVVmLGNBQWMsQ0FBQ2UsTUFBRCxFQUFTLFFBQVQsQ0FBM0MsQ0FBSCxHQUMxRSxFQURtRCxDQUFwRCxFQUVMdkIsSUFGSyxDQUVBLE1BQUk7QUFDUCxTQUFDLEdBQUdaLG9CQUFKLEVBQTBCbkIsbUJBQTFCLENBQThDLE1BQUksS0FBSzhGLFNBQUwsQ0FBZTNCLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEJqSixLQUE1QixDQUFrQyxNQUFJLENBQ25GLENBRDZDLENBQWxEO0FBR0gsT0FOTSxFQU1KQSxLQU5JLEVBTUU7QUFDVCxZQUFJLENBQ0gsQ0FSTSxDQUFQO0FBU0g7O0FBM0VFLEdBQVA7QUE2RUg7Ozs7Ozs7Ozs7O0FDdFJZOztBQUNibkIsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUgsMENBQXlDO0FBQ3JDNE0sRUFBQUEsVUFBVSxFQUFFLElBRHlCO0FBRXJDbkYsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPakgsT0FBTyxDQUFDSixPQUFmO0FBQ0g7QUFKb0MsQ0FBekM7QUFNQUosOENBQTZDO0FBQ3pDNE0sRUFBQUEsVUFBVSxFQUFFLElBRDZCO0FBRXpDbkYsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPb0YsV0FBVyxDQUFDek0sT0FBbkI7QUFDSDtBQUp3QyxDQUE3QztBQU1BRixpQkFBQSxHQUFvQjVFLFNBQXBCO0FBQ0E0RSxvQkFBQSxHQUF1QjRNLFlBQXZCO0FBQ0E1TSxnQ0FBQSxHQUFtQzZNLHdCQUFuQztBQUNBN00sZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHlGQUFELENBQVIsQ0FBcEM7O0FBQ0EsSUFBSXlNLGNBQWMsR0FBR3pNLG1CQUFPLENBQUMsa0VBQUQsQ0FBNUI7O0FBQ0EsSUFBSXNNLFdBQVcsR0FBR3ZNLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHFFQUFELENBQVIsQ0FBeEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU1zTSxlQUFlLEdBQUc7QUFDcEJ0UixFQUFBQSxNQUFNLEVBQUUsSUFEWTtBQUVwQnVSLEVBQUFBLGNBQWMsRUFBRSxFQUZJOztBQUdwQkMsRUFBQUEsS0FBSyxDQUFFOUcsRUFBRixFQUFNO0FBQ1AsUUFBSSxLQUFLMUssTUFBVCxFQUFpQixPQUFPMEssRUFBRSxFQUFUOztBQUNqQixlQUFtQyxFQUVsQztBQUNKOztBQVJtQixDQUF4QixFQVVBOztBQUNBLE1BQU0rRyxpQkFBaUIsR0FBRyxDQUN0QixVQURzQixFQUV0QixPQUZzQixFQUd0QixPQUhzQixFQUl0QixRQUpzQixFQUt0QixZQUxzQixFQU10QixZQU5zQixFQU90QixVQVBzQixFQVF0QixRQVJzQixFQVN0QixTQVRzQixFQVV0QixlQVZzQixFQVd0QixTQVhzQixFQVl0QixXQVpzQixFQWF0QixnQkFic0IsRUFjdEIsZUFkc0IsQ0FBMUI7QUFnQkEsTUFBTUMsWUFBWSxHQUFHLENBQ2pCLGtCQURpQixFQUVqQixxQkFGaUIsRUFHakIscUJBSGlCLEVBSWpCLGtCQUppQixFQUtqQixpQkFMaUIsRUFNakIsb0JBTmlCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FDckIsTUFEcUIsRUFFckIsU0FGcUIsRUFHckIsUUFIcUIsRUFJckIsTUFKcUIsRUFLckIsVUFMcUIsRUFNckIsZ0JBTnFCLENBQXpCLEVBUUE7O0FBQ0F0TixNQUFNLENBQUNDLGNBQVAsQ0FBc0JnTixlQUF0QixFQUF1QyxRQUF2QyxFQUFpRDtBQUM3Q3hGLEVBQUFBLEdBQUcsR0FBSTtBQUNILFdBQU9qSCxPQUFPLENBQUNKLE9BQVIsQ0FBZ0JtTixNQUF2QjtBQUNIOztBQUg0QyxDQUFqRDtBQUtBSCxpQkFBaUIsQ0FBQ3pLLE9BQWxCLENBQTJCNkssS0FBRCxJQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0F4TixFQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JnTixlQUF0QixFQUF1Q08sS0FBdkMsRUFBOEM7QUFDMUMvRixJQUFBQSxHQUFHLEdBQUk7QUFDSCxZQUFNOUwsTUFBTSxHQUFHOFIsU0FBUyxFQUF4QjtBQUNBLGFBQU85UixNQUFNLENBQUM2UixLQUFELENBQWI7QUFDSDs7QUFKeUMsR0FBOUM7QUFNSCxDQVhEO0FBWUFGLGdCQUFnQixDQUFDM0ssT0FBakIsQ0FBMEI2SyxLQUFELElBQVM7QUFDOUJQLEVBQUFBLGVBQWUsQ0FBQ08sS0FBRCxDQUFmLEdBQXlCLENBQUMsR0FBR3BMLElBQUosS0FBVztBQUNoQyxVQUFNekcsTUFBTSxHQUFHOFIsU0FBUyxFQUF4QjtBQUNBLFdBQU85UixNQUFNLENBQUM2UixLQUFELENBQU4sQ0FBYyxHQUFHcEwsSUFBakIsQ0FBUDtBQUNILEdBSEQ7QUFJSCxDQUxEO0FBTUFpTCxZQUFZLENBQUMxSyxPQUFiLENBQXNCN0QsS0FBRCxJQUFTO0FBQzFCbU8sRUFBQUEsZUFBZSxDQUFDRSxLQUFoQixDQUFzQixNQUFJO0FBQ3RCM00sSUFBQUEsT0FBTyxDQUFDSixPQUFSLENBQWdCbU4sTUFBaEIsQ0FBdUJHLEVBQXZCLENBQTBCNU8sS0FBMUIsRUFBaUMsQ0FBQyxHQUFHc0QsSUFBSixLQUFXO0FBQ3hDLFlBQU11TCxVQUFVLEdBQUksS0FBSTdPLEtBQUssQ0FBQzhPLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixFQUE4QixHQUFFL08sS0FBSyxDQUFDZ1AsU0FBTixDQUFnQixDQUFoQixDQUFtQixFQUEzRTtBQUNBLFlBQU1DLGdCQUFnQixHQUFHZCxlQUF6Qjs7QUFDQSxVQUFJYyxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFwQixFQUFrQztBQUM5QixZQUFJO0FBQ0FJLFVBQUFBLGdCQUFnQixDQUFDSixVQUFELENBQWhCLENBQTZCLEdBQUd2TCxJQUFoQztBQUNILFNBRkQsQ0FFRSxPQUFPaEIsR0FBUCxFQUFZO0FBQ1YzRCxVQUFBQSxPQUFPLENBQUNtTyxLQUFSLENBQWUsd0NBQXVDK0IsVUFBVyxFQUFqRTtBQUNBbFEsVUFBQUEsT0FBTyxDQUFDbU8sS0FBUixDQUFlLEdBQUV4SyxHQUFHLENBQUM0TSxPQUFRLEtBQUk1TSxHQUFHLENBQUM2TSxLQUFNLEVBQTNDO0FBQ0g7QUFDSjtBQUNKLEtBWEQ7QUFZSCxHQWJEO0FBY0gsQ0FmRDs7QUFnQkEsU0FBU1IsU0FBVCxHQUFxQjtBQUNqQixNQUFJLENBQUNSLGVBQWUsQ0FBQ3RSLE1BQXJCLEVBQTZCO0FBQ3pCLFVBQU1xUyxPQUFPLEdBQUcsZ0NBQWdDLHFFQUFoRDtBQUNBLFVBQU0sSUFBSTNMLEtBQUosQ0FBVTJMLE9BQVYsQ0FBTjtBQUNIOztBQUNELFNBQU9mLGVBQWUsQ0FBQ3RSLE1BQXZCO0FBQ0g7O0FBQ0QsSUFBSTRKLFFBQVEsR0FBRzBILGVBQWY7QUFDQS9NLGVBQUEsR0FBa0JxRixRQUFsQjs7QUFDQSxTQUFTakssU0FBVCxHQUFxQjtBQUNqQixTQUFPK0UsTUFBTSxDQUFDRCxPQUFQLENBQWU4TixVQUFmLENBQTBCbEIsY0FBYyxDQUFDbUIsYUFBekMsQ0FBUDtBQUNIOztBQUNELFNBQVNyQixZQUFULENBQXNCLEdBQUcxSyxJQUF6QixFQUErQjtBQUMzQjZLLEVBQUFBLGVBQWUsQ0FBQ3RSLE1BQWhCLEdBQXlCLElBQUk2RSxPQUFPLENBQUNKLE9BQVosQ0FBb0IsR0FBR2dDLElBQXZCLENBQXpCO0FBQ0E2SyxFQUFBQSxlQUFlLENBQUNDLGNBQWhCLENBQStCdkssT0FBL0IsQ0FBd0MwRCxFQUFELElBQU1BLEVBQUUsRUFBL0M7QUFFQTRHLEVBQUFBLGVBQWUsQ0FBQ0MsY0FBaEIsR0FBaUMsRUFBakM7QUFDQSxTQUFPRCxlQUFlLENBQUN0UixNQUF2QjtBQUNIOztBQUNELFNBQVNvUix3QkFBVCxDQUFrQ3BSLE1BQWxDLEVBQTBDO0FBQ3RDLFFBQU04RSxRQUFRLEdBQUc5RSxNQUFqQjtBQUNBLFFBQU15UyxRQUFRLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxNQUFNQyxRQUFYLElBQXVCakIsaUJBQXZCLEVBQXlDO0FBQ3JDLFFBQUksT0FBTzNNLFFBQVEsQ0FBQzROLFFBQUQsQ0FBZixLQUE4QixRQUFsQyxFQUE0QztBQUN4Q0QsTUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVIsR0FBcUJyTyxNQUFNLENBQUNxTSxNQUFQLENBQWNpQyxLQUFLLENBQUNDLE9BQU4sQ0FBYzlOLFFBQVEsQ0FBQzROLFFBQUQsQ0FBdEIsSUFBb0MsRUFBcEMsR0FBeUMsRUFBdkQsRUFDbEI1TixRQUFRLENBQUM0TixRQUFELENBRFUsQ0FBckIsQ0FDdUI7QUFEdkI7QUFHQTtBQUNIOztBQUNERCxJQUFBQSxRQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFxQjVOLFFBQVEsQ0FBQzROLFFBQUQsQ0FBN0I7QUFDSCxHQVpxQyxDQWF0Qzs7O0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ2IsTUFBVCxHQUFrQi9NLE9BQU8sQ0FBQ0osT0FBUixDQUFnQm1OLE1BQWxDO0FBQ0FELEVBQUFBLGdCQUFnQixDQUFDM0ssT0FBakIsQ0FBMEI2SyxLQUFELElBQVM7QUFDOUJZLElBQUFBLFFBQVEsQ0FBQ1osS0FBRCxDQUFSLEdBQWtCLENBQUMsR0FBR3BMLElBQUosS0FBVztBQUN6QixhQUFPM0IsUUFBUSxDQUFDK00sS0FBRCxDQUFSLENBQWdCLEdBQUdwTCxJQUFuQixDQUFQO0FBQ0gsS0FGRDtBQUdILEdBSkQ7QUFLQSxTQUFPZ00sUUFBUDtBQUNIOzs7Ozs7Ozs7OztBQ3hKWTs7QUFDYnBPLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELHVCQUFBLEdBQTBCK0QsZUFBMUI7O0FBQ0EsSUFBSTVELE1BQU0sR0FBR0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFwQjs7QUFDQSxJQUFJNkcsb0JBQW9CLEdBQUc3RyxtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLE1BQU1pTyx1QkFBdUIsR0FBRyxPQUFPQyxvQkFBUCxLQUFnQyxXQUFoRTs7QUFDQSxTQUFTeEssZUFBVCxDQUF5QjtBQUFFQyxFQUFBQSxVQUFGO0FBQWV3SyxFQUFBQTtBQUFmLENBQXpCLEVBQXFEO0FBQ2pELFFBQU1DLFVBQVUsR0FBR0QsUUFBUSxJQUFJLENBQUNGLHVCQUFoQztBQUNBLFFBQU1JLFNBQVMsR0FBRyxDQUFDLEdBQUd2TyxNQUFKLEVBQVkzQixNQUFaLEVBQWxCO0FBQ0EsUUFBTSxDQUFDbVEsT0FBRCxFQUFVQyxVQUFWLElBQXdCLENBQUMsR0FBR3pPLE1BQUosRUFBWTFCLFFBQVosQ0FBcUIsS0FBckIsQ0FBOUI7QUFDQSxRQUFNd0YsTUFBTSxHQUFHLENBQUMsR0FBRzlELE1BQUosRUFBWStELFdBQVosQ0FBeUJDLEVBQUQsSUFBTTtBQUN6QyxRQUFJdUssU0FBUyxDQUFDN1AsT0FBZCxFQUF1QjtBQUNuQjZQLE1BQUFBLFNBQVMsQ0FBQzdQLE9BQVY7QUFDQTZQLE1BQUFBLFNBQVMsQ0FBQzdQLE9BQVYsR0FBb0JnUSxTQUFwQjtBQUNIOztBQUNELFFBQUlKLFVBQVUsSUFBSUUsT0FBbEIsRUFBMkI7O0FBQzNCLFFBQUl4SyxFQUFFLElBQUlBLEVBQUUsQ0FBQzJLLE9BQWIsRUFBc0I7QUFDbEJKLE1BQUFBLFNBQVMsQ0FBQzdQLE9BQVYsR0FBb0JrUSxPQUFPLENBQUM1SyxFQUFELEVBQU1MLFNBQUQsSUFBYUEsU0FBUyxJQUFJOEssVUFBVSxDQUFDOUssU0FBRCxDQUF6QyxFQUN6QjtBQUNFRSxRQUFBQTtBQURGLE9BRHlCLENBQTNCO0FBSUg7QUFDSixHQVpjLEVBWVosQ0FDQ3lLLFVBREQsRUFFQ3pLLFVBRkQsRUFHQzJLLE9BSEQsQ0FaWSxDQUFmO0FBaUJBLEdBQUMsR0FBR3hPLE1BQUosRUFBWTdELFNBQVosQ0FBc0IsTUFBSTtBQUN0QixRQUFJLENBQUNnUyx1QkFBTCxFQUE4QjtBQUMxQixVQUFJLENBQUNLLE9BQUwsRUFBYztBQUNWLGNBQU1LLFlBQVksR0FBRyxDQUFDLEdBQUc5SCxvQkFBSixFQUEwQm5CLG1CQUExQixDQUE4QyxNQUFJNkksVUFBVSxDQUFDLElBQUQsQ0FBNUQsQ0FBckI7QUFFQSxlQUFPLE1BQUksQ0FBQyxHQUFHMUgsb0JBQUosRUFBMEJsQixrQkFBMUIsQ0FBNkNnSixZQUE3QyxDQUFYO0FBRUg7QUFDSjtBQUNKLEdBVEQsRUFTRyxDQUNDTCxPQURELENBVEg7QUFZQSxTQUFPLENBQ0gxSyxNQURHLEVBRUgwSyxPQUZHLENBQVA7QUFJSDs7QUFDRCxTQUFTSSxPQUFULENBQWlCRSxPQUFqQixFQUEwQkMsUUFBMUIsRUFBb0NuTyxPQUFwQyxFQUE2QztBQUN6QyxRQUFNO0FBQUV0SSxJQUFBQSxFQUFGO0FBQU8wVyxJQUFBQSxRQUFQO0FBQWtCQyxJQUFBQTtBQUFsQixNQUFnQ0MsY0FBYyxDQUFDdE8sT0FBRCxDQUFwRDtBQUNBcU8sRUFBQUEsUUFBUSxDQUFDdkgsR0FBVCxDQUFhb0gsT0FBYixFQUFzQkMsUUFBdEI7QUFDQUMsRUFBQUEsUUFBUSxDQUFDSixPQUFULENBQWlCRSxPQUFqQjtBQUNBLFNBQU8sU0FBU1AsU0FBVCxHQUFxQjtBQUN4QlUsSUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCTCxPQUFoQjtBQUNBRSxJQUFBQSxRQUFRLENBQUNULFNBQVQsQ0FBbUJPLE9BQW5CLEVBRndCLENBR3hCOztBQUNBLFFBQUlHLFFBQVEsQ0FBQ0csSUFBVCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQkosTUFBQUEsUUFBUSxDQUFDSyxVQUFUO0FBQ0FDLE1BQUFBLFNBQVMsQ0FBQ0gsTUFBVixDQUFpQjdXLEVBQWpCO0FBQ0g7QUFDSixHQVJEO0FBU0g7O0FBQ0QsTUFBTWdYLFNBQVMsR0FBRyxJQUFJOUUsR0FBSixFQUFsQjs7QUFDQSxTQUFTMEUsY0FBVCxDQUF3QnRPLE9BQXhCLEVBQWlDO0FBQzdCLFFBQU10SSxFQUFFLEdBQUdzSSxPQUFPLENBQUNpRCxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsTUFBSWtLLFFBQVEsR0FBR3VCLFNBQVMsQ0FBQ2xJLEdBQVYsQ0FBYzlPLEVBQWQsQ0FBZjs7QUFDQSxNQUFJeVYsUUFBSixFQUFjO0FBQ1YsV0FBT0EsUUFBUDtBQUNIOztBQUNELFFBQU1rQixRQUFRLEdBQUcsSUFBSXpFLEdBQUosRUFBakI7QUFDQSxRQUFNd0UsUUFBUSxHQUFHLElBQUlaLG9CQUFKLENBQTBCbUIsT0FBRCxJQUFXO0FBQ2pEQSxJQUFBQSxPQUFPLENBQUNqTixPQUFSLENBQWlCNkUsS0FBRCxJQUFTO0FBQ3JCLFlBQU00SCxRQUFRLEdBQUdFLFFBQVEsQ0FBQzdILEdBQVQsQ0FBYUQsS0FBSyxDQUFDdkksTUFBbkIsQ0FBakI7QUFDQSxZQUFNK0UsU0FBUyxHQUFHd0QsS0FBSyxDQUFDcUksY0FBTixJQUF3QnJJLEtBQUssQ0FBQ3NJLGlCQUFOLEdBQTBCLENBQXBFOztBQUNBLFVBQUlWLFFBQVEsSUFBSXBMLFNBQWhCLEVBQTJCO0FBQ3ZCb0wsUUFBQUEsUUFBUSxDQUFDcEwsU0FBRCxDQUFSO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FSZ0IsRUFRZC9DLE9BUmMsQ0FBakI7QUFTQTBPLEVBQUFBLFNBQVMsQ0FBQzVILEdBQVYsQ0FBY3BQLEVBQWQsRUFBa0J5VixRQUFRLEdBQUc7QUFDekJ6VixJQUFBQSxFQUR5QjtBQUV6QjBXLElBQUFBLFFBRnlCO0FBR3pCQyxJQUFBQTtBQUh5QixHQUE3QjtBQUtBLFNBQU9sQixRQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDbkZZOztBQUNicE8sOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsZUFBQSxHQUFrQjZQLFVBQWxCOztBQUNBLElBQUkxUCxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLDJEQUFELENBQXJCOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxTQUFTb1AsVUFBVCxDQUFvQkMsaUJBQXBCLEVBQXVDO0FBQ25DLFdBQVNDLGlCQUFULENBQTJCdlYsS0FBM0IsRUFBa0M7QUFDOUIsV0FBTyxhQUFjMkYsTUFBTSxDQUFDRCxPQUFQLENBQWVxRCxhQUFmLENBQTZCdU0saUJBQTdCLEVBQWdEaFEsTUFBTSxDQUFDcU0sTUFBUCxDQUFjO0FBQy9FMVEsTUFBQUEsTUFBTSxFQUFFLENBQUMsR0FBRzZFLE9BQUosRUFBYWxGLFNBQWI7QUFEdUUsS0FBZCxFQUVsRVosS0FGa0UsQ0FBaEQsQ0FBckI7QUFHSDs7QUFDRHVWLEVBQUFBLGlCQUFpQixDQUFDQyxlQUFsQixHQUFvQ0YsaUJBQWlCLENBQUNFLGVBQXREO0FBQ0FELEVBQUFBLGlCQUFpQixDQUFDRSxtQkFBbEIsR0FBd0NILGlCQUFpQixDQUFDRyxtQkFBMUQ7O0FBQ0EsWUFBMkM7QUFDdkMsVUFBTTNZLElBQUksR0FBR3dZLGlCQUFpQixDQUFDSSxXQUFsQixJQUFpQ0osaUJBQWlCLENBQUN4WSxJQUFuRCxJQUEyRCxTQUF4RTtBQUNBeVksSUFBQUEsaUJBQWlCLENBQUNHLFdBQWxCLEdBQWlDLGNBQWE1WSxJQUFLLEdBQW5EO0FBQ0g7O0FBQ0QsU0FBT3lZLGlCQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDekJZOztBQUNialEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsdUJBQUEsR0FBMEI4RSxlQUExQjtBQUNBOUUsaUJBQUEsR0FBb0JrRixTQUFwQjtBQUNBbEYsaUJBQUEsR0FBb0JtUSxTQUFwQjtBQUNBblEsbUJBQUEsR0FBc0JvUSxXQUF0QjtBQUNBcFEsbUJBQUEsR0FBc0JpRixXQUF0QjtBQUNBakYsbUJBQUEsR0FBc0JxUSxXQUF0QjtBQUNBclEsa0JBQUEsR0FBcUJnQixVQUFyQjtBQUNBaEIscUJBQUEsR0FBd0JzUSxhQUF4QjtBQUNBdFEsbUJBQUEsR0FBc0JxRCxXQUF0QjtBQUNBckQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUl1USx1QkFBdUIsR0FBR2xRLG1CQUFPLENBQUMsNkdBQUQsQ0FBckM7O0FBQ0EsSUFBSW1RLFlBQVksR0FBR25RLG1CQUFPLENBQUMscUZBQUQsQ0FBMUI7O0FBQ0EsSUFBSW9RLG9CQUFvQixHQUFHcFEsbUJBQU8sQ0FBQyxvRkFBRCxDQUFsQzs7QUFDQSxJQUFJcVEsb0JBQW9CLEdBQUdyUSxtQkFBTyxDQUFDLG9FQUFELENBQWxDOztBQUNBLElBQUlzUSxLQUFLLEdBQUd2USxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUFSLENBQWxDOztBQUNBLElBQUl1USxNQUFNLEdBQUd2USxtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUNBLElBQUl3USxVQUFVLEdBQUd4USxtQkFBTyxDQUFDLDhDQUFELENBQXhCOztBQUNBLElBQUl5USxpQkFBaUIsR0FBR3pRLG1CQUFPLENBQUMsOERBQUQsQ0FBL0I7O0FBQ0EsSUFBSTBRLFlBQVksR0FBRzFRLG1CQUFPLENBQUMsZ0RBQUQsQ0FBMUI7O0FBQ0EsSUFBSTJRLGdCQUFnQixHQUFHNVEsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUixDQUE3Qzs7QUFDQSxJQUFJNFEsYUFBYSxHQUFHNVEsbUJBQU8sQ0FBQyxvREFBRCxDQUEzQjs7QUFDQSxJQUFJNlEsV0FBVyxHQUFHN1EsbUJBQU8sQ0FBQyxnREFBRCxDQUF6Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsSUFBSTBRLGtCQUFKOztBQUNBLElBQUl4TCxJQUFKLEVBQXFDO0FBQ2pDd0wsRUFBQUEsa0JBQWtCLEdBQUc5USwwR0FBckI7QUFDSDs7QUFDRCxNQUFNZ1IsUUFBUSxHQUFHMUwsTUFBQSxJQUFzQyxFQUF2RDs7QUFDQSxTQUFTNEwsc0JBQVQsR0FBa0M7QUFDOUIsU0FBT3pSLE1BQU0sQ0FBQ3FNLE1BQVAsQ0FBYyxJQUFJaEssS0FBSixDQUFVLGlCQUFWLENBQWQsRUFBNEM7QUFDL0N3SCxJQUFBQSxTQUFTLEVBQUU7QUFEb0MsR0FBNUMsQ0FBUDtBQUdIOztBQUNELFNBQVM2SCxhQUFULENBQXVCaE0sSUFBdkIsRUFBNkJpTSxNQUE3QixFQUFxQztBQUNqQyxTQUFPQSxNQUFNLElBQUlqTSxJQUFJLENBQUNrTSxVQUFMLENBQWdCLEdBQWhCLENBQVYsR0FBaUNsTSxJQUFJLEtBQUssR0FBVCxHQUFlLENBQUMsR0FBRytLLHVCQUFKLEVBQTZCaEwsMEJBQTdCLENBQXdEa00sTUFBeEQsQ0FBZixHQUFrRixHQUFFQSxNQUFPLEdBQUVFLGVBQWUsQ0FBQ25NLElBQUQsQ0FBZixLQUEwQixHQUExQixHQUFnQ0EsSUFBSSxDQUFDb0ksU0FBTCxDQUFlLENBQWYsQ0FBaEMsR0FBb0RwSSxJQUFLLEVBQXZMLEdBQTJMQSxJQUFsTTtBQUNIOztBQUNELFNBQVNWLGVBQVQsQ0FBeUJVLElBQXpCLEVBQStCOUosTUFBL0IsRUFBdUNxSixPQUF2QyxFQUFnREMsYUFBaEQsRUFBK0Q7QUFDM0QsTUFBSVcsSUFBSixFQUFxQztBQUNqQ2pLLElBQUFBLE1BQU0sR0FBR0EsTUFBTSxJQUFJLENBQUMsR0FBR2dWLG9CQUFKLEVBQTBCa0IsbUJBQTFCLENBQThDcE0sSUFBOUMsRUFBb0RULE9BQXBELEVBQTZEOE0sY0FBaEY7QUFDQSxVQUFNQyxjQUFjLEdBQUdYLGtCQUFrQixDQUFDbk0sYUFBRCxFQUFnQjZKLFNBQWhCLEVBQTJCblQsTUFBM0IsQ0FBekM7O0FBQ0EsUUFBSW9XLGNBQUosRUFBb0I7QUFDaEIsYUFBUSxPQUFNQSxjQUFjLENBQUNDLElBQWYsR0FBc0IsRUFBdEIsR0FBMkIsR0FBSSxNQUFLRCxjQUFjLENBQUNFLE1BQU8sR0FBRVgsUUFBUSxJQUFJLEVBQUcsR0FBRTNWLE1BQU0sS0FBS29XLGNBQWMsQ0FBQzNNLGFBQTFCLEdBQTBDLEVBQTFDLEdBQWdELElBQUd6SixNQUFPLEVBQUUsR0FBRThKLElBQUssRUFBOUo7QUFDSDs7QUFDRCxXQUFPLEtBQVA7QUFDSCxHQVBELE1BT08sRUFFTjtBQUNKOztBQUNELFNBQVNOLFNBQVQsQ0FBbUJNLElBQW5CLEVBQXlCOUosTUFBekIsRUFBaUN5SixhQUFqQyxFQUFnRDtBQUM1QyxNQUFJUSxJQUFKLEVBQXFDO0FBQ2pDLFVBQU1sSSxRQUFRLEdBQUdrVSxlQUFlLENBQUNuTSxJQUFELENBQWhDO0FBQ0EsVUFBTXlNLFNBQVMsR0FBR3hVLFFBQVEsQ0FBQ3lVLFdBQVQsRUFBbEI7QUFDQSxVQUFNQyxXQUFXLEdBQUd6VyxNQUFNLElBQUlBLE1BQU0sQ0FBQ3dXLFdBQVAsRUFBOUI7QUFDQSxXQUFPeFcsTUFBTSxJQUFJQSxNQUFNLEtBQUt5SixhQUFyQixJQUFzQyxDQUFDOE0sU0FBUyxDQUFDUCxVQUFWLENBQXFCLE1BQU1TLFdBQU4sR0FBb0IsR0FBekMsQ0FBdkMsSUFBd0ZGLFNBQVMsS0FBSyxNQUFNRSxXQUE1RyxHQUEwSFgsYUFBYSxDQUFDaE0sSUFBRCxFQUFPLE1BQU05SixNQUFiLENBQXZJLEdBQThKOEosSUFBcks7QUFDSDs7QUFDRCxTQUFPQSxJQUFQO0FBQ0g7O0FBQ0QsU0FBUzJLLFNBQVQsQ0FBbUIzSyxJQUFuQixFQUF5QjlKLE1BQXpCLEVBQWlDO0FBQzdCLE1BQUlpSyxJQUFKLEVBQXFDO0FBQ2pDLFVBQU1sSSxRQUFRLEdBQUdrVSxlQUFlLENBQUNuTSxJQUFELENBQWhDO0FBQ0EsVUFBTXlNLFNBQVMsR0FBR3hVLFFBQVEsQ0FBQ3lVLFdBQVQsRUFBbEI7QUFDQSxVQUFNQyxXQUFXLEdBQUd6VyxNQUFNLElBQUlBLE1BQU0sQ0FBQ3dXLFdBQVAsRUFBOUI7QUFDQSxXQUFPeFcsTUFBTSxLQUFLdVcsU0FBUyxDQUFDUCxVQUFWLENBQXFCLE1BQU1TLFdBQU4sR0FBb0IsR0FBekMsS0FBaURGLFNBQVMsS0FBSyxNQUFNRSxXQUExRSxDQUFOLEdBQStGLENBQUMxVSxRQUFRLENBQUMyVSxNQUFULEtBQW9CMVcsTUFBTSxDQUFDMFcsTUFBUCxHQUFnQixDQUFwQyxHQUF3QyxHQUF4QyxHQUE4QyxFQUEvQyxJQUFxRDVNLElBQUksQ0FBQzZNLE1BQUwsQ0FBWTNXLE1BQU0sQ0FBQzBXLE1BQVAsR0FBZ0IsQ0FBNUIsQ0FBcEosR0FBcUw1TSxJQUE1TDtBQUNIOztBQUNELFNBQU9BLElBQVA7QUFDSDs7QUFDRCxTQUFTbU0sZUFBVCxDQUF5Qm5NLElBQXpCLEVBQStCO0FBQzNCLFFBQU04TSxVQUFVLEdBQUc5TSxJQUFJLENBQUN4RCxPQUFMLENBQWEsR0FBYixDQUFuQjtBQUNBLFFBQU11USxTQUFTLEdBQUcvTSxJQUFJLENBQUN4RCxPQUFMLENBQWEsR0FBYixDQUFsQjs7QUFDQSxNQUFJc1EsVUFBVSxHQUFHLENBQUMsQ0FBZCxJQUFtQkMsU0FBUyxHQUFHLENBQUMsQ0FBcEMsRUFBdUM7QUFDbkMvTSxJQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ29JLFNBQUwsQ0FBZSxDQUFmLEVBQWtCMEUsVUFBVSxHQUFHLENBQUMsQ0FBZCxHQUFrQkEsVUFBbEIsR0FBK0JDLFNBQWpELENBQVA7QUFDSDs7QUFDRCxTQUFPL00sSUFBUDtBQUNIOztBQUNELFNBQVM0SyxXQUFULENBQXFCNUssSUFBckIsRUFBMkI7QUFDdkJBLEVBQUFBLElBQUksR0FBR21NLGVBQWUsQ0FBQ25NLElBQUQsQ0FBdEI7QUFDQSxTQUFPQSxJQUFJLEtBQUs2TCxRQUFULElBQXFCN0wsSUFBSSxDQUFDa00sVUFBTCxDQUFnQkwsUUFBUSxHQUFHLEdBQTNCLENBQTVCO0FBQ0g7O0FBQ0QsU0FBU3BNLFdBQVQsQ0FBcUJPLElBQXJCLEVBQTJCO0FBQ3ZCO0FBQ0EsU0FBT2dNLGFBQWEsQ0FBQ2hNLElBQUQsRUFBTzZMLFFBQVAsQ0FBcEI7QUFDSDs7QUFDRCxTQUFTaEIsV0FBVCxDQUFxQjdLLElBQXJCLEVBQTJCO0FBQ3ZCQSxFQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0UsS0FBTCxDQUFXMkwsUUFBUSxDQUFDZSxNQUFwQixDQUFQO0FBQ0EsTUFBSSxDQUFDNU0sSUFBSSxDQUFDa00sVUFBTCxDQUFnQixHQUFoQixDQUFMLEVBQTJCbE0sSUFBSSxHQUFJLElBQUdBLElBQUssRUFBaEI7QUFDM0IsU0FBT0EsSUFBUDtBQUNIOztBQUNELFNBQVN4RSxVQUFULENBQW9Cd1IsR0FBcEIsRUFBeUI7QUFDckI7QUFDQSxNQUFJQSxHQUFHLENBQUNkLFVBQUosQ0FBZSxHQUFmLEtBQXVCYyxHQUFHLENBQUNkLFVBQUosQ0FBZSxHQUFmLENBQXZCLElBQThDYyxHQUFHLENBQUNkLFVBQUosQ0FBZSxHQUFmLENBQWxELEVBQXVFLE9BQU8sSUFBUDs7QUFDdkUsTUFBSTtBQUNBO0FBQ0EsVUFBTWUsY0FBYyxHQUFHLENBQUMsR0FBRzdCLE1BQUosRUFBWThCLGlCQUFaLEVBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLElBQUlDLEdBQUosQ0FBUUosR0FBUixFQUFhQyxjQUFiLENBQWpCO0FBQ0EsV0FBT0UsUUFBUSxDQUFDRSxNQUFULEtBQW9CSixjQUFwQixJQUFzQ3JDLFdBQVcsQ0FBQ3VDLFFBQVEsQ0FBQ2xWLFFBQVYsQ0FBeEQ7QUFDSCxHQUxELENBS0UsT0FBT2lGLENBQVAsRUFBVTtBQUNSLFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBUzROLGFBQVQsQ0FBdUJwRyxLQUF2QixFQUE4QjRJLFVBQTlCLEVBQTBDQyxLQUExQyxFQUFpRDtBQUM3QyxNQUFJQyxpQkFBaUIsR0FBRyxFQUF4QjtBQUNBLFFBQU1DLFlBQVksR0FBRyxDQUFDLEdBQUcvQixXQUFKLEVBQWlCZ0MsYUFBakIsQ0FBK0JoSixLQUEvQixDQUFyQjtBQUNBLFFBQU1pSixhQUFhLEdBQUdGLFlBQVksQ0FBQ0csTUFBbkM7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDdkIsR0FBQ1AsVUFBVSxLQUFLNUksS0FBZixHQUF1QixDQUFDLEdBQUcrRyxhQUFKLEVBQW1CcUMsZUFBbkIsQ0FBbUNMLFlBQW5DLEVBQWlESCxVQUFqRCxDQUF2QixHQUFzRixFQUF2RixLQUE4RjtBQUM5RjtBQUNBQyxFQUFBQSxLQUhBO0FBSUFDLEVBQUFBLGlCQUFpQixHQUFHOUksS0FBcEI7QUFDQSxRQUFNcUosTUFBTSxHQUFHelQsTUFBTSxDQUFDMEMsSUFBUCxDQUFZMlEsYUFBWixDQUFmOztBQUNBLE1BQUksQ0FBQ0ksTUFBTSxDQUFDQyxLQUFQLENBQWNDLEtBQUQsSUFBUztBQUN2QixRQUFJeFQsS0FBSyxHQUFHb1QsY0FBYyxDQUFDSSxLQUFELENBQWQsSUFBeUIsRUFBckM7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLE1BQUY7QUFBV0MsTUFBQUE7QUFBWCxRQUF5QlIsYUFBYSxDQUFDTSxLQUFELENBQTVDLENBRnVCLENBR3ZCO0FBQ0E7O0FBQ0EsUUFBSUcsUUFBUSxHQUFJLElBQUdGLE1BQU0sR0FBRyxLQUFILEdBQVcsRUFBRyxHQUFFRCxLQUFNLEdBQS9DOztBQUNBLFFBQUlFLFFBQUosRUFBYztBQUNWQyxNQUFBQSxRQUFRLEdBQUksR0FBRSxDQUFDM1QsS0FBRCxHQUFTLEdBQVQsR0FBZSxFQUFHLElBQUcyVCxRQUFTLEdBQTVDO0FBQ0g7O0FBQ0QsUUFBSUYsTUFBTSxJQUFJLENBQUN0RixLQUFLLENBQUNDLE9BQU4sQ0FBY3BPLEtBQWQsQ0FBZixFQUFxQ0EsS0FBSyxHQUFHLENBQ3pDQSxLQUR5QyxDQUFSO0FBR3JDLFdBQU8sQ0FBQzBULFFBQVEsSUFBSUYsS0FBSyxJQUFJSixjQUF0QixNQUNOTCxpQkFBaUIsR0FBR0EsaUJBQWlCLENBQUNwUixPQUFsQixDQUEwQmdTLFFBQTFCLEVBQW9DRixNQUFNLEdBQUd6VCxLQUFLLENBQUNKLEdBQU4sRUFBVTtBQUM1RTtBQUNBO0FBQ0E7QUFDQ2dVLElBQUFBLE9BQUQsSUFBV0Msa0JBQWtCLENBQUNELE9BQUQsQ0FKcUMsRUFLaEVFLElBTGdFLENBSzNELEdBTDJELENBQUgsR0FLakRELGtCQUFrQixDQUFDN1QsS0FBRCxDQUxYLEtBS3VCLEdBTnJDLENBQVA7QUFPSCxHQW5CSSxDQUFMLEVBbUJJO0FBQ0ErUyxJQUFBQSxpQkFBaUIsR0FBRyxFQUFwQixDQUF1QjtBQUF2QixLQURBLENBR0o7QUFDQTtBQUNDOztBQUNELFNBQU87QUFDSE8sSUFBQUEsTUFERztBQUVIUyxJQUFBQSxNQUFNLEVBQUVoQjtBQUZMLEdBQVA7QUFJSDs7QUFDRCxTQUFTaUIsa0JBQVQsQ0FBNEJsQixLQUE1QixFQUFtQ1EsTUFBbkMsRUFBMkM7QUFDdkMsUUFBTVcsYUFBYSxHQUFHLEVBQXRCO0FBRUFwVSxFQUFBQSxNQUFNLENBQUMwQyxJQUFQLENBQVl1USxLQUFaLEVBQW1CdFEsT0FBbkIsQ0FBNEJ4RCxHQUFELElBQU87QUFDOUIsUUFBSSxDQUFDc1UsTUFBTSxDQUFDMVYsUUFBUCxDQUFnQm9CLEdBQWhCLENBQUwsRUFBMkI7QUFDdkJpVixNQUFBQSxhQUFhLENBQUNqVixHQUFELENBQWIsR0FBcUI4VCxLQUFLLENBQUM5VCxHQUFELENBQTFCO0FBQ0g7QUFDSixHQUpEO0FBS0EsU0FBT2lWLGFBQVA7QUFDSDs7QUFDRCxTQUFTN1EsV0FBVCxDQUFxQjVILE1BQXJCLEVBQTZCb0YsSUFBN0IsRUFBbUNzVCxTQUFuQyxFQUE4QztBQUMxQztBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxXQUFXLEdBQUcsT0FBT3hULElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLENBQUMsR0FBRytQLE1BQUosRUFBWTBELG9CQUFaLENBQWlDelQsSUFBakMsQ0FBcEQsQ0FIMEMsQ0FJMUM7QUFDQTs7QUFDQSxRQUFNMFQsYUFBYSxHQUFHRixXQUFXLENBQUNHLEtBQVosQ0FBa0Isb0JBQWxCLENBQXRCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdGLGFBQWEsR0FBR0YsV0FBVyxDQUFDaEMsTUFBWixDQUFtQmtDLGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUJuQyxNQUFwQyxDQUFILEdBQWlEaUMsV0FBekY7QUFDQSxRQUFNSyxRQUFRLEdBQUdELGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QixHQUF6QixDQUFqQjs7QUFDQSxNQUFJLENBQUNELFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZSxFQUFoQixFQUFvQkYsS0FBcEIsQ0FBMEIsV0FBMUIsQ0FBSixFQUE0QztBQUN4Q2pYLElBQUFBLE9BQU8sQ0FBQ21PLEtBQVIsQ0FBZSx1Q0FBc0MySSxXQUFZLDZFQUFqRTtBQUNBLFVBQU1PLGFBQWEsR0FBRyxDQUFDLEdBQUdoRSxNQUFKLEVBQVlpRSx3QkFBWixDQUFxQ0osa0JBQXJDLENBQXRCO0FBQ0FKLElBQUFBLFdBQVcsR0FBRyxDQUFDRSxhQUFhLEdBQUdBLGFBQWEsQ0FBQyxDQUFELENBQWhCLEdBQXNCLEVBQXBDLElBQTBDSyxhQUF4RDtBQUNILEdBYnlDLENBYzFDOzs7QUFDQSxNQUFJLENBQUM1VCxVQUFVLENBQUNxVCxXQUFELENBQWYsRUFBOEI7QUFDMUIsV0FBT0YsU0FBUyxHQUFHLENBQ2ZFLFdBRGUsQ0FBSCxHQUVaQSxXQUZKO0FBR0g7O0FBQ0QsTUFBSTtBQUNBRCxJQUFBQSxJQUFJLEdBQUcsSUFBSXhCLEdBQUosQ0FBUXlCLFdBQVcsQ0FBQzNDLFVBQVosQ0FBdUIsR0FBdkIsSUFBOEJqVyxNQUFNLENBQUNXLE1BQXJDLEdBQThDWCxNQUFNLENBQUNnQyxRQUE3RCxFQUF1RSxVQUF2RSxDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9pRixDQUFQLEVBQVU7QUFDUjtBQUNBMFIsSUFBQUEsSUFBSSxHQUFHLElBQUl4QixHQUFKLENBQVEsR0FBUixFQUFhLFVBQWIsQ0FBUDtBQUNIOztBQUNELE1BQUk7QUFDQSxVQUFNa0MsUUFBUSxHQUFHLElBQUlsQyxHQUFKLENBQVF5QixXQUFSLEVBQXFCRCxJQUFyQixDQUFqQjtBQUNBVSxJQUFBQSxRQUFRLENBQUNyWCxRQUFULEdBQW9CLENBQUMsR0FBRzhTLHVCQUFKLEVBQTZCaEwsMEJBQTdCLENBQXdEdVAsUUFBUSxDQUFDclgsUUFBakUsQ0FBcEI7QUFDQSxRQUFJc1gsY0FBYyxHQUFHLEVBQXJCOztBQUNBLFFBQUksQ0FBQyxHQUFHbEUsVUFBSixFQUFnQm1FLGNBQWhCLENBQStCRixRQUFRLENBQUNyWCxRQUF4QyxLQUFxRHFYLFFBQVEsQ0FBQ0csWUFBOUQsSUFBOEVkLFNBQWxGLEVBQTZGO0FBQ3pGLFlBQU1wQixLQUFLLEdBQUcsQ0FBQyxHQUFHaEMsWUFBSixFQUFrQm1FLHNCQUFsQixDQUF5Q0osUUFBUSxDQUFDRyxZQUFsRCxDQUFkO0FBQ0EsWUFBTTtBQUFFakIsUUFBQUEsTUFBRjtBQUFXVCxRQUFBQTtBQUFYLFVBQXVCakQsYUFBYSxDQUFDd0UsUUFBUSxDQUFDclgsUUFBVixFQUFvQnFYLFFBQVEsQ0FBQ3JYLFFBQTdCLEVBQXVDc1YsS0FBdkMsQ0FBMUM7O0FBQ0EsVUFBSWlCLE1BQUosRUFBWTtBQUNSZSxRQUFBQSxjQUFjLEdBQUcsQ0FBQyxHQUFHbkUsTUFBSixFQUFZMEQsb0JBQVosQ0FBaUM7QUFDOUM3VyxVQUFBQSxRQUFRLEVBQUV1VyxNQURvQztBQUU5Q21CLFVBQUFBLElBQUksRUFBRUwsUUFBUSxDQUFDSyxJQUYrQjtBQUc5Q3BDLFVBQUFBLEtBQUssRUFBRWtCLGtCQUFrQixDQUFDbEIsS0FBRCxFQUFRUSxNQUFSO0FBSHFCLFNBQWpDLENBQWpCO0FBS0g7QUFDSixLQWRELENBZUE7OztBQUNBLFVBQU1wUSxZQUFZLEdBQUcyUixRQUFRLENBQUNqQyxNQUFULEtBQW9CdUIsSUFBSSxDQUFDdkIsTUFBekIsR0FBa0NpQyxRQUFRLENBQUNqVSxJQUFULENBQWM2RSxLQUFkLENBQW9Cb1AsUUFBUSxDQUFDakMsTUFBVCxDQUFnQlQsTUFBcEMsQ0FBbEMsR0FBZ0YwQyxRQUFRLENBQUNqVSxJQUE5RztBQUNBLFdBQU9zVCxTQUFTLEdBQUcsQ0FDZmhSLFlBRGUsRUFFZjRSLGNBQWMsSUFBSTVSLFlBRkgsQ0FBSCxHQUdaQSxZQUhKO0FBSUgsR0FyQkQsQ0FxQkUsT0FBT1QsQ0FBUCxFQUFVO0FBQ1IsV0FBT3lSLFNBQVMsR0FBRyxDQUNmRSxXQURlLENBQUgsR0FFWkEsV0FGSjtBQUdIO0FBQ0o7O0FBQ0QsU0FBU2UsV0FBVCxDQUFxQjVDLEdBQXJCLEVBQTBCO0FBQ3RCLFFBQU1LLE1BQU0sR0FBRyxDQUFDLEdBQUdqQyxNQUFKLEVBQVk4QixpQkFBWixFQUFmO0FBQ0EsU0FBT0YsR0FBRyxDQUFDZCxVQUFKLENBQWVtQixNQUFmLElBQXlCTCxHQUFHLENBQUM1RSxTQUFKLENBQWNpRixNQUFNLENBQUNULE1BQXJCLENBQXpCLEdBQXdESSxHQUEvRDtBQUNIOztBQUNELFNBQVM2QyxZQUFULENBQXNCNVosTUFBdEIsRUFBOEIrVyxHQUE5QixFQUFtQzFSLEVBQW5DLEVBQXVDO0FBQ25DO0FBQ0E7QUFDQSxNQUFJLENBQUNxQyxZQUFELEVBQWVDLFVBQWYsSUFBNkJDLFdBQVcsQ0FBQzVILE1BQUQsRUFBUytXLEdBQVQsRUFBYyxJQUFkLENBQTVDO0FBQ0EsUUFBTUssTUFBTSxHQUFHLENBQUMsR0FBR2pDLE1BQUosRUFBWThCLGlCQUFaLEVBQWY7QUFDQSxRQUFNNEMsYUFBYSxHQUFHblMsWUFBWSxDQUFDdU8sVUFBYixDQUF3Qm1CLE1BQXhCLENBQXRCO0FBQ0EsUUFBTTBDLFdBQVcsR0FBR25TLFVBQVUsSUFBSUEsVUFBVSxDQUFDc08sVUFBWCxDQUFzQm1CLE1BQXRCLENBQWxDO0FBQ0ExUCxFQUFBQSxZQUFZLEdBQUdpUyxXQUFXLENBQUNqUyxZQUFELENBQTFCO0FBQ0FDLEVBQUFBLFVBQVUsR0FBR0EsVUFBVSxHQUFHZ1MsV0FBVyxDQUFDaFMsVUFBRCxDQUFkLEdBQTZCQSxVQUFwRDtBQUNBLFFBQU1vUyxXQUFXLEdBQUdGLGFBQWEsR0FBR25TLFlBQUgsR0FBa0I4QixXQUFXLENBQUM5QixZQUFELENBQTlEO0FBQ0EsUUFBTXNTLFVBQVUsR0FBRzNVLEVBQUUsR0FBR3NVLFdBQVcsQ0FBQy9SLFdBQVcsQ0FBQzVILE1BQUQsRUFBU3FGLEVBQVQsQ0FBWixDQUFkLEdBQTBDc0MsVUFBVSxJQUFJRCxZQUE3RTtBQUNBLFNBQU87QUFDSHFQLElBQUFBLEdBQUcsRUFBRWdELFdBREY7QUFFSDFVLElBQUFBLEVBQUUsRUFBRXlVLFdBQVcsR0FBR0UsVUFBSCxHQUFnQnhRLFdBQVcsQ0FBQ3dRLFVBQUQ7QUFGdkMsR0FBUDtBQUlIOztBQUNELFNBQVNDLG1CQUFULENBQTZCalksUUFBN0IsRUFBdUNrWSxLQUF2QyxFQUE4QztBQUMxQyxRQUFNQyxhQUFhLEdBQUcsQ0FBQyxHQUFHckYsdUJBQUosRUFBNkJqTCx1QkFBN0IsQ0FBcUQsQ0FBQyxHQUFHbUwsb0JBQUosRUFBMEJvRixtQkFBMUIsQ0FBOENwWSxRQUE5QyxDQUFyRCxDQUF0Qjs7QUFDQSxNQUFJbVksYUFBYSxLQUFLLE1BQWxCLElBQTRCQSxhQUFhLEtBQUssU0FBbEQsRUFBNkQ7QUFDekQsV0FBT25ZLFFBQVA7QUFDSCxHQUp5QyxDQUsxQzs7O0FBQ0EsTUFBSSxDQUFDa1ksS0FBSyxDQUFDOVgsUUFBTixDQUFlK1gsYUFBZixDQUFMLEVBQW9DO0FBQ2hDO0FBQ0FELElBQUFBLEtBQUssQ0FBQ0csSUFBTixDQUFZQyxJQUFELElBQVE7QUFDZixVQUFJLENBQUMsR0FBR2xGLFVBQUosRUFBZ0JtRSxjQUFoQixDQUErQmUsSUFBL0IsS0FBd0MsQ0FBQyxHQUFHN0UsV0FBSixFQUFpQmdDLGFBQWpCLENBQStCNkMsSUFBL0IsRUFBcUNDLEVBQXJDLENBQXdDbFEsSUFBeEMsQ0FBNkM4UCxhQUE3QyxDQUE1QyxFQUF5RztBQUNyR25ZLFFBQUFBLFFBQVEsR0FBR3NZLElBQVg7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNKLEtBTEQ7QUFNSDs7QUFDRCxTQUFPLENBQUMsR0FBR3hGLHVCQUFKLEVBQTZCakwsdUJBQTdCLENBQXFEN0gsUUFBckQsQ0FBUDtBQUNIOztBQUNELE1BQU13WSx1QkFBdUIsR0FBR3RRLE1BQUEsSUFBbUgsQ0FBbko7QUFRQSxNQUFNNFEsa0JBQWtCLEdBQUdyTixNQUFNLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsU0FBU3NOLFVBQVQsQ0FBb0JoRSxHQUFwQixFQUF5QmlFLFFBQXpCLEVBQW1DO0FBQy9CLFNBQU94TCxLQUFLLENBQUN1SCxHQUFELEVBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FrRSxJQUFBQSxXQUFXLEVBQUU7QUFaQyxHQUFOLENBQUwsQ0FhSjVPLElBYkksQ0FhRVMsR0FBRCxJQUFPO0FBQ1gsUUFBSSxDQUFDQSxHQUFHLENBQUMyQyxFQUFULEVBQWE7QUFDVCxVQUFJdUwsUUFBUSxHQUFHLENBQVgsSUFBZ0JsTyxHQUFHLENBQUNvTyxNQUFKLElBQWMsR0FBbEMsRUFBdUM7QUFDbkMsZUFBT0gsVUFBVSxDQUFDaEUsR0FBRCxFQUFNaUUsUUFBUSxHQUFHLENBQWpCLENBQWpCO0FBQ0g7O0FBQ0QsVUFBSWxPLEdBQUcsQ0FBQ29PLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUNwQixlQUFPcE8sR0FBRyxDQUFDcU8sSUFBSixHQUFXOU8sSUFBWCxDQUFpQjVPLElBQUQsSUFBUTtBQUMzQixjQUFJQSxJQUFJLENBQUMyZCxRQUFULEVBQW1CO0FBQ2YsbUJBQU87QUFDSEEsY0FBQUEsUUFBUSxFQUFFTjtBQURQLGFBQVA7QUFHSDs7QUFDRCxnQkFBTSxJQUFJcFUsS0FBSixDQUFXLDZCQUFYLENBQU47QUFDSCxTQVBNLENBQVA7QUFRSDs7QUFDRCxZQUFNLElBQUlBLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQ0g7O0FBQ0QsV0FBT29HLEdBQUcsQ0FBQ3FPLElBQUosRUFBUDtBQUNILEdBL0JNLENBQVA7QUFnQ0g7O0FBQ0QsU0FBU0UsYUFBVCxDQUF1QkMsUUFBdkIsRUFBaUNDLGNBQWpDLEVBQWlEO0FBQzdDLFNBQU9SLFVBQVUsQ0FBQ08sUUFBRCxFQUFXQyxjQUFjLEdBQUcsQ0FBSCxHQUFPLENBQWhDLENBQVYsQ0FBNkMvVixLQUE3QyxDQUFvREMsR0FBRCxJQUFPO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBQzhWLGNBQUwsRUFBcUI7QUFDakIsT0FBQyxHQUFHeEcsWUFBSixFQUFrQjNKLGNBQWxCLENBQWlDM0YsR0FBakM7QUFDSDs7QUFDRCxVQUFNQSxHQUFOO0FBQ0gsR0FSTSxDQUFQO0FBU0g7O0FBQ0QsTUFBTStWLE1BQU4sQ0FBYTtBQUNUQyxFQUFBQSxXQUFXLENBQUNDLFNBQUQsRUFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBRUMsSUFBQUEsWUFBRjtBQUFpQkMsSUFBQUEsVUFBakI7QUFBOEJDLElBQUFBLEdBQTlCO0FBQW9DQyxJQUFBQSxPQUFwQztBQUE4Q0MsSUFBQUEsU0FBUyxFQUFFQyxVQUF6RDtBQUFzRXpXLElBQUFBLEdBQUcsRUFBRTBXLElBQTNFO0FBQWtGQyxJQUFBQSxZQUFsRjtBQUFpR0MsSUFBQUEsVUFBakc7QUFBOEdwYyxJQUFBQSxNQUE5RztBQUF1SHFKLElBQUFBLE9BQXZIO0FBQWlJSSxJQUFBQSxhQUFqSTtBQUFpSkgsSUFBQUEsYUFBako7QUFBaUsrUyxJQUFBQTtBQUFqSyxHQUF6QixFQUF1TTtBQUM5TTtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYLENBRjhNLENBSTlNOztBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBRUEsU0FBS0MsSUFBTCxHQUFZLENBQVo7O0FBQ0EsU0FBS0MsVUFBTCxHQUFtQjlkLENBQUQsSUFBSztBQUNuQixZQUFNK2QsS0FBSyxHQUFHL2QsQ0FBQyxDQUFDK2QsS0FBaEI7O0FBQ0EsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUUzYSxVQUFBQSxRQUFRLEVBQUUwWixTQUFaO0FBQXdCcEUsVUFBQUEsS0FBSyxFQUFFcUU7QUFBL0IsWUFBMkMsSUFBakQ7QUFDQSxhQUFLaUIsV0FBTCxDQUFpQixjQUFqQixFQUFpQyxDQUFDLEdBQUd6SCxNQUFKLEVBQVkwRCxvQkFBWixDQUFpQztBQUM5RDdXLFVBQUFBLFFBQVEsRUFBRXdILFdBQVcsQ0FBQ2tTLFNBQUQsQ0FEeUM7QUFFOURwRSxVQUFBQSxLQUFLLEVBQUVxRTtBQUZ1RCxTQUFqQyxDQUFqQyxFQUdJLENBQUMsR0FBR3hHLE1BQUosRUFBWTBILE1BQVosRUFISjtBQUlBO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDRixLQUFLLENBQUNHLEdBQVgsRUFBZ0I7QUFDWjtBQUNIOztBQUNELFVBQUlDLFlBQUo7QUFDQSxZQUFNO0FBQUVoRyxRQUFBQSxHQUFGO0FBQVExUixRQUFBQSxFQUFFLEVBQUV1VyxHQUFaO0FBQWtCdFcsUUFBQUEsT0FBbEI7QUFBNEIwWCxRQUFBQTtBQUE1QixVQUFxQ0wsS0FBM0M7O0FBQ0EsVUFBSXpTLEtBQUosRUFBMkMsRUF1QjFDOztBQUNELFdBQUt1UyxJQUFMLEdBQVlPLEdBQVo7QUFDQSxZQUFNO0FBQUVoYixRQUFBQSxRQUFRLEVBQUUwWjtBQUFaLFVBQTJCLENBQUMsR0FBR3JHLGlCQUFKLEVBQXVCbUksZ0JBQXZCLENBQXdDekcsR0FBeEMsQ0FBakMsQ0FqRG1CLENBa0RuQjtBQUNBOztBQUNBLFVBQUksS0FBSzBHLEtBQUwsSUFBYzdCLEdBQUcsS0FBSyxLQUFLamIsTUFBM0IsSUFBcUMrYSxTQUFTLEtBQUssS0FBSzFaLFFBQTVELEVBQXNFO0FBQ2xFO0FBQ0gsT0F0RGtCLENBdURuQjtBQUNBOzs7QUFDQSxVQUFJLEtBQUswYixJQUFMLElBQWEsQ0FBQyxLQUFLQSxJQUFMLENBQVVmLEtBQVYsQ0FBbEIsRUFBb0M7QUFDaEM7QUFDSDs7QUFDRCxXQUFLZ0IsTUFBTCxDQUFZLGNBQVosRUFBNEI1RyxHQUE1QixFQUFpQzZFLEdBQWpDLEVBQXNDdlgsTUFBTSxDQUFDcU0sTUFBUCxDQUFjLEVBQWQsRUFDbkNwTCxPQURtQyxFQUMxQjtBQUNSYyxRQUFBQSxPQUFPLEVBQUVkLE9BQU8sQ0FBQ2MsT0FBUixJQUFtQixLQUFLd1gsUUFEekI7QUFFUjNkLFFBQUFBLE1BQU0sRUFBRXFGLE9BQU8sQ0FBQ3JGLE1BQVIsSUFBa0IsS0FBS3lKO0FBRnZCLE9BRDBCLENBQXRDLEVBSUlxVCxZQUpKO0FBS0gsS0FqRUQsQ0FSOE0sQ0EwRTlNOzs7QUFDQSxTQUFLdE8sS0FBTCxHQUFhLENBQUMsR0FBR3FHLHVCQUFKLEVBQTZCakwsdUJBQTdCLENBQXFENlIsU0FBckQsQ0FBYixDQTNFOE0sQ0E0RTlNOztBQUNBLFNBQUttQyxVQUFMLEdBQWtCLEVBQWxCLENBN0U4TSxDQStFOU07QUFDQTtBQUNBOztBQUNBLFFBQUluQyxTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDekIsV0FBS21DLFVBQUwsQ0FBZ0IsS0FBS3BQLEtBQXJCLElBQThCO0FBQzFCd04sUUFBQUEsU0FBUyxFQUFFQyxVQURlO0FBRTFCNEIsUUFBQUEsT0FBTyxFQUFFLElBRmlCO0FBRzFCL2UsUUFBQUEsS0FBSyxFQUFFOGMsWUFIbUI7QUFJMUJwVyxRQUFBQSxHQUFHLEVBQUUwVyxJQUpxQjtBQUsxQjRCLFFBQUFBLE9BQU8sRUFBRWxDLFlBQVksSUFBSUEsWUFBWSxDQUFDa0MsT0FMWjtBQU0xQkMsUUFBQUEsT0FBTyxFQUFFbkMsWUFBWSxJQUFJQSxZQUFZLENBQUNtQztBQU5aLE9BQTlCO0FBUUg7O0FBQ0QsU0FBS0gsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUN2QjVCLE1BQUFBLFNBQVMsRUFBRUYsR0FEWTtBQUV2QjNNLE1BQUFBLFdBQVcsRUFBRTtBQUZVLEtBQTNCLENBNUY4TSxDQWdHOU07QUFDQTs7QUFDQSxTQUFLd0MsTUFBTCxHQUFjNEosTUFBTSxDQUFDNUosTUFBckI7QUFDQSxTQUFLa0ssVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLOVosUUFBTCxHQUFnQjBaLFNBQWhCO0FBQ0EsU0FBS3BFLEtBQUwsR0FBYXFFLE1BQWIsQ0FyRzhNLENBc0c5TTtBQUNBOztBQUNBLFVBQU1zQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUc3SSxVQUFKLEVBQWdCbUUsY0FBaEIsQ0FBK0JtQyxTQUEvQixLQUE2Q2xSLElBQUksQ0FBQzBULGFBQUwsQ0FBbUJDLFVBQTFGOztBQUNBLFNBQUt4ZCxNQUFMLEdBQWNzZCxpQkFBaUIsR0FBR3ZDLFNBQUgsR0FBZUUsR0FBOUM7QUFDQSxTQUFLaEcsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLd0ksR0FBTCxHQUFXaEMsWUFBWDtBQUNBLFNBQUtpQyxHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0J0QyxPQUFoQixDQTdHOE0sQ0E4RzlNO0FBQ0E7O0FBQ0EsU0FBS3lCLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS3BCLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS2tDLE9BQUwsR0FBZSxDQUFDLEVBQUUvVCxJQUFJLENBQUMwVCxhQUFMLENBQW1CTSxJQUFuQixJQUEyQmhVLElBQUksQ0FBQzBULGFBQUwsQ0FBbUJPLEdBQTlDLElBQXFEalUsSUFBSSxDQUFDMFQsYUFBTCxDQUFtQlEsTUFBbkIsSUFBNkIsQ0FBQ2xVLElBQUksQ0FBQzBULGFBQUwsQ0FBbUJTLEdBQXRHLElBQTZHLENBQUNWLGlCQUFELElBQXNCLENBQUN6VCxJQUFJLENBQUNvVSxRQUFMLENBQWNDLE1BQXJDLElBQStDLENBQUMzVSxLQUEvSixDQUFoQjtBQUNBLFNBQUtvUyxTQUFMLEdBQWlCLENBQUMsQ0FBQ0EsU0FBbkI7QUFDQSxTQUFLbFQsY0FBTCxHQUFzQixLQUF0Qjs7QUFDQSxRQUFJYyxJQUFKLEVBQXFDO0FBQ2pDLFdBQUtqSyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLcUosT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBS0ksYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxXQUFLSCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFdBQUtILGNBQUwsR0FBc0IsQ0FBQyxDQUFDc00sa0JBQWtCLENBQUNuTSxhQUFELEVBQWdCaUIsSUFBSSxDQUFDb1UsUUFBTCxDQUFjRyxRQUE5QixDQUExQztBQUNIOztBQUNELGVBQW1DLEVBdUJsQztBQUNKOztBQUNERyxFQUFBQSxNQUFNLEdBQUc7QUFDTHRiLElBQUFBLE1BQU0sQ0FBQ2diLFFBQVAsQ0FBZ0JNLE1BQWhCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7OztBQUFNQyxFQUFBQSxJQUFJLEdBQUc7QUFDTHZiLElBQUFBLE1BQU0sQ0FBQzhXLE9BQVAsQ0FBZXlFLElBQWY7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU16ZSxFQUFBQSxJQUFJLENBQUNxVyxHQUFELEVBQU0xUixFQUFOLEVBQVVDLE9BQU8sR0FBRyxFQUFwQixFQUNIO0FBQ0MsUUFBSTRFLEtBQUosRUFBMkMsRUFhMUM7O0FBQ0QsS0FBQztBQUFFNk0sTUFBQUEsR0FBRjtBQUFRMVIsTUFBQUE7QUFBUixRQUFnQnVVLFlBQVksQ0FBQyxJQUFELEVBQU83QyxHQUFQLEVBQVkxUixFQUFaLENBQTdCO0FBQ0EsV0FBTyxLQUFLc1ksTUFBTCxDQUFZLFdBQVosRUFBeUI1RyxHQUF6QixFQUE4QjFSLEVBQTlCLEVBQWtDQyxPQUFsQyxDQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFNYSxFQUFBQSxPQUFPLENBQUM0USxHQUFELEVBQU0xUixFQUFOLEVBQVVDLE9BQU8sR0FBRyxFQUFwQixFQUNOO0FBQ0MsS0FBQztBQUFFeVIsTUFBQUEsR0FBRjtBQUFRMVIsTUFBQUE7QUFBUixRQUFnQnVVLFlBQVksQ0FBQyxJQUFELEVBQU83QyxHQUFQLEVBQVkxUixFQUFaLENBQTdCO0FBQ0EsV0FBTyxLQUFLc1ksTUFBTCxDQUFZLGNBQVosRUFBNEI1RyxHQUE1QixFQUFpQzFSLEVBQWpDLEVBQXFDQyxPQUFyQyxDQUFQO0FBQ0g7O0FBQ1csUUFBTnFZLE1BQU0sQ0FBQ3lCLE1BQUQsRUFBU3JJLEdBQVQsRUFBYzFSLEVBQWQsRUFBa0JDLE9BQWxCLEVBQTJCeVgsWUFBM0IsRUFBeUM7QUFDakQsUUFBSSxDQUFDeFgsVUFBVSxDQUFDd1IsR0FBRCxDQUFmLEVBQXNCO0FBQ2xCblQsTUFBQUEsTUFBTSxDQUFDZ2IsUUFBUCxDQUFnQnhaLElBQWhCLEdBQXVCMlIsR0FBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFNc0ksaUJBQWlCLEdBQUd0SSxHQUFHLEtBQUsxUixFQUFSLElBQWNDLE9BQU8sQ0FBQ2dhLEVBQXRCLElBQTRCaGEsT0FBTyxDQUFDMFosa0JBQTlELENBTGlELENBTWpEO0FBQ0E7O0FBQ0EsUUFBSTFaLE9BQU8sQ0FBQ2dhLEVBQVosRUFBZ0I7QUFDWixXQUFLZixPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUNELFVBQU1nQixVQUFVLEdBQUcsS0FBS3RmLE1BQXhCOztBQUNBLFFBQUlpSyxJQUFKLEVBQXFDO0FBQ2pDLFdBQUtqSyxNQUFMLEdBQWNxRixPQUFPLENBQUNyRixNQUFSLEtBQW1CLEtBQW5CLEdBQTJCLEtBQUt5SixhQUFoQyxHQUFnRHBFLE9BQU8sQ0FBQ3JGLE1BQVIsSUFBa0IsS0FBS0EsTUFBckY7O0FBQ0EsVUFBSSxPQUFPcUYsT0FBTyxDQUFDckYsTUFBZixLQUEwQixXQUE5QixFQUEyQztBQUN2Q3FGLFFBQUFBLE9BQU8sQ0FBQ3JGLE1BQVIsR0FBaUIsS0FBS0EsTUFBdEI7QUFDSDs7QUFDRCxZQUFNdWYsUUFBUSxHQUFHLENBQUMsR0FBR25LLGlCQUFKLEVBQXVCbUksZ0JBQXZCLENBQXdDN0ksV0FBVyxDQUFDdFAsRUFBRCxDQUFYLEdBQWtCdVAsV0FBVyxDQUFDdlAsRUFBRCxDQUE3QixHQUFvQ0EsRUFBNUUsQ0FBakI7QUFDQSxZQUFNb2EsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHeEssb0JBQUosRUFBMEJrQixtQkFBMUIsQ0FBOENxSixRQUFRLENBQUN4ZCxRQUF2RCxFQUFpRSxLQUFLc0gsT0FBdEUsQ0FBekI7O0FBQ0EsVUFBSW1XLGdCQUFnQixDQUFDckosY0FBckIsRUFBcUM7QUFDakMsYUFBS25XLE1BQUwsR0FBY3dmLGdCQUFnQixDQUFDckosY0FBL0I7QUFDQW9KLFFBQUFBLFFBQVEsQ0FBQ3hkLFFBQVQsR0FBb0J3SCxXQUFXLENBQUNnVyxRQUFRLENBQUN4ZCxRQUFWLENBQS9CO0FBQ0FxRCxRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHOFAsTUFBSixFQUFZMEQsb0JBQVosQ0FBaUMyRyxRQUFqQyxDQUFMO0FBQ0F6SSxRQUFBQSxHQUFHLEdBQUd2TixXQUFXLENBQUMsQ0FBQyxHQUFHeUwsb0JBQUosRUFBMEJrQixtQkFBMUIsQ0FBOEN4QixXQUFXLENBQUNvQyxHQUFELENBQVgsR0FBbUJuQyxXQUFXLENBQUNtQyxHQUFELENBQTlCLEdBQXNDQSxHQUFwRixFQUF5RixLQUFLek4sT0FBOUYsRUFBdUd0SCxRQUF4RyxDQUFqQjtBQUNIOztBQUNELFVBQUkwZCxXQUFXLEdBQUcsS0FBbEIsQ0FiaUMsQ0FjakM7QUFDQTs7QUFDQSxVQUFJeFYsSUFBSixFQUFxQztBQUNqQyxZQUFJL0IsR0FBSixDQURpQyxDQUVqQzs7QUFDQSxZQUFJLEVBQUUsQ0FBQ0EsR0FBRyxHQUFHLEtBQUttQixPQUFaLE1BQXlCLElBQXpCLElBQWlDbkIsR0FBRyxLQUFLLEtBQUssQ0FBOUMsR0FBa0QsS0FBSyxDQUF2RCxHQUEyREEsR0FBRyxDQUFDL0YsUUFBSixDQUFhLEtBQUtuQyxNQUFsQixDQUE3RCxDQUFKLEVBQTZGO0FBQ3pGdWYsVUFBQUEsUUFBUSxDQUFDeGQsUUFBVCxHQUFvQnlILFNBQVMsQ0FBQytWLFFBQVEsQ0FBQ3hkLFFBQVYsRUFBb0IsS0FBSy9CLE1BQXpCLENBQTdCO0FBQ0EyRCxVQUFBQSxNQUFNLENBQUNnYixRQUFQLENBQWdCeFosSUFBaEIsR0FBdUIsQ0FBQyxHQUFHK1AsTUFBSixFQUFZMEQsb0JBQVosQ0FBaUMyRyxRQUFqQyxDQUF2QixDQUZ5RixDQUd6RjtBQUNBOztBQUNBRSxVQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNIO0FBQ0o7O0FBQ0QsWUFBTXJKLGNBQWMsR0FBR1gsa0JBQWtCLENBQUMsS0FBS25NLGFBQU4sRUFBcUI2SixTQUFyQixFQUFnQyxLQUFLblQsTUFBckMsQ0FBekMsQ0EzQmlDLENBNEJqQztBQUNBOztBQUNBLFVBQUlpSyxJQUFKLEVBQXFDO0FBQ2pDO0FBQ0E7QUFDQSxZQUFJLENBQUN3VixXQUFELElBQWdCckosY0FBaEIsSUFBa0MsS0FBS2pOLGNBQXZDLElBQXlEb0IsSUFBSSxDQUFDb1UsUUFBTCxDQUFjRyxRQUFkLEtBQTJCMUksY0FBYyxDQUFDRSxNQUF2RyxFQUErRztBQUMzRyxnQkFBTW9KLFlBQVksR0FBRy9LLFdBQVcsQ0FBQ3ZQLEVBQUQsQ0FBaEM7QUFDQXpCLFVBQUFBLE1BQU0sQ0FBQ2diLFFBQVAsQ0FBZ0J4WixJQUFoQixHQUF3QixPQUFNaVIsY0FBYyxDQUFDQyxJQUFmLEdBQXNCLEVBQXRCLEdBQTJCLEdBQUksTUFBS0QsY0FBYyxDQUFDRSxNQUFPLEdBQUUvTSxXQUFXLENBQUUsR0FBRSxLQUFLdkosTUFBTCxLQUFnQm9XLGNBQWMsQ0FBQzNNLGFBQS9CLEdBQStDLEVBQS9DLEdBQXFELElBQUcsS0FBS3pKLE1BQU8sRUFBRSxHQUFFMGYsWUFBWSxLQUFLLEdBQWpCLEdBQXVCLEVBQXZCLEdBQTRCQSxZQUFhLEVBQXBILElBQXlILEdBQTFILENBQStILEVBQXBPLENBRjJHLENBRzNHO0FBQ0E7O0FBQ0FELFVBQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0g7QUFDSjs7QUFDRCxVQUFJQSxXQUFKLEVBQWlCO0FBQ2IsZUFBTyxJQUFJMVQsT0FBSixDQUFZLE1BQUksQ0FDdEIsQ0FETSxDQUFQO0FBRUg7QUFDSjs7QUFDRCxRQUFJLENBQUMxRyxPQUFPLENBQUNnYSxFQUFiLEVBQWlCO0FBQ2IsV0FBSzdCLEtBQUwsR0FBYSxLQUFiO0FBQ0gsS0E1RGdELENBNkRqRDs7O0FBQ0EsUUFBSXRJLE1BQU0sQ0FBQ3lLLEVBQVgsRUFBZTtBQUNYQyxNQUFBQSxXQUFXLENBQUNDLElBQVosQ0FBaUIsYUFBakI7QUFDSDs7QUFDRCxVQUFNO0FBQUUxWixNQUFBQSxPQUFPLEdBQUU7QUFBWCxRQUFzQmQsT0FBNUI7QUFDQSxVQUFNeWEsVUFBVSxHQUFHO0FBQ2YzWixNQUFBQTtBQURlLEtBQW5COztBQUdBLFFBQUksS0FBSzRaLGNBQVQsRUFBeUI7QUFDckIsV0FBS0Msa0JBQUwsQ0FBd0IsS0FBS0QsY0FBN0IsRUFBNkNELFVBQTdDO0FBQ0g7O0FBQ0QxYSxJQUFBQSxFQUFFLEdBQUdtRSxXQUFXLENBQUNDLFNBQVMsQ0FBQ2tMLFdBQVcsQ0FBQ3RQLEVBQUQsQ0FBWCxHQUFrQnVQLFdBQVcsQ0FBQ3ZQLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDQyxPQUFPLENBQUNyRixNQUFqRCxFQUF5RCxLQUFLeUosYUFBOUQsQ0FBVixDQUFoQjtBQUNBLFVBQU13VyxTQUFTLEdBQUd4TCxTQUFTLENBQUNDLFdBQVcsQ0FBQ3RQLEVBQUQsQ0FBWCxHQUFrQnVQLFdBQVcsQ0FBQ3ZQLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDLEtBQUtwRixNQUE5QyxDQUEzQjtBQUNBLFNBQUsrZixjQUFMLEdBQXNCM2EsRUFBdEI7QUFDQSxRQUFJOGEsWUFBWSxHQUFHWixVQUFVLEtBQUssS0FBS3RmLE1BQXZDLENBM0VpRCxDQTRFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUNxRixPQUFPLENBQUNnYSxFQUFULElBQWUsS0FBS2MsZUFBTCxDQUFxQkYsU0FBckIsQ0FBZixJQUFrRCxDQUFDQyxZQUF2RCxFQUFxRTtBQUNqRSxXQUFLeGYsTUFBTCxHQUFjdWYsU0FBZDtBQUNBMUUsTUFBQUEsTUFBTSxDQUFDNUosTUFBUCxDQUFjeU8sSUFBZCxDQUFtQixpQkFBbkIsRUFBc0NoYixFQUF0QyxFQUEwQzBhLFVBQTFDLEVBRmlFLENBR2pFOztBQUNBLFdBQUtuRCxXQUFMLENBQWlCd0MsTUFBakIsRUFBeUJySSxHQUF6QixFQUE4QjFSLEVBQTlCLEVBQWtDQyxPQUFsQztBQUNBLFdBQUtnYixZQUFMLENBQWtCSixTQUFsQjtBQUNBLFdBQUtLLE1BQUwsQ0FBWSxLQUFLMUMsVUFBTCxDQUFnQixLQUFLcFAsS0FBckIsQ0FBWixFQUF5QyxJQUF6QztBQUNBK00sTUFBQUEsTUFBTSxDQUFDNUosTUFBUCxDQUFjeU8sSUFBZCxDQUFtQixvQkFBbkIsRUFBeUNoYixFQUF6QyxFQUE2QzBhLFVBQTdDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsUUFBSVMsTUFBTSxHQUFHLENBQUMsR0FBR25MLGlCQUFKLEVBQXVCbUksZ0JBQXZCLENBQXdDekcsR0FBeEMsQ0FBYjtBQUNBLFFBQUk7QUFBRS9VLE1BQUFBLFFBQVEsRUFBRTBaLFNBQVo7QUFBd0JwRSxNQUFBQSxLQUFLLEVBQUVxRTtBQUEvQixRQUEyQzZFLE1BQS9DLENBNUZpRCxDQTZGakQ7QUFDQTtBQUNBOztBQUNBLFFBQUl0RyxLQUFKLEVBQVd1RyxRQUFYOztBQUNBLFFBQUk7QUFDQXZHLE1BQUFBLEtBQUssR0FBRyxNQUFNLEtBQUs0QixVQUFMLENBQWdCNEUsV0FBaEIsRUFBZDtBQUNBLE9BQUM7QUFBRUMsUUFBQUEsVUFBVSxFQUFFRjtBQUFkLFVBQTRCLE1BQU0sQ0FBQyxHQUFHMUwsWUFBSixFQUFrQnpKLHNCQUFsQixFQUFuQztBQUNILEtBSEQsQ0FHRSxPQUFPNlEsSUFBUCxFQUFhO0FBQ1g7QUFDQTtBQUNBdlksTUFBQUEsTUFBTSxDQUFDZ2IsUUFBUCxDQUFnQnhaLElBQWhCLEdBQXVCQyxFQUF2QjtBQUNBLGFBQU8sS0FBUDtBQUNILEtBekdnRCxDQTBHakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSSxDQUFDLEtBQUt1YixRQUFMLENBQWNWLFNBQWQsQ0FBRCxJQUE2QixDQUFDQyxZQUFsQyxFQUFnRDtBQUM1Q2YsTUFBQUEsTUFBTSxHQUFHLGNBQVQ7QUFDSCxLQWpIZ0QsQ0FrSGpEO0FBQ0E7OztBQUNBLFFBQUl6WCxVQUFVLEdBQUd0QyxFQUFqQixDQXBIaUQsQ0FxSGpEO0FBQ0E7QUFDQTs7QUFDQXFXLElBQUFBLFNBQVMsR0FBR0EsU0FBUyxHQUFHLENBQUMsR0FBRzVHLHVCQUFKLEVBQTZCakwsdUJBQTdCLENBQXFEK0ssV0FBVyxDQUFDOEcsU0FBRCxDQUFoRSxDQUFILEdBQWtGQSxTQUF2Rzs7QUFDQSxRQUFJMkQsaUJBQWlCLElBQUkzRCxTQUFTLEtBQUssU0FBdkMsRUFBa0Q7QUFDOUNwVyxNQUFBQSxPQUFPLENBQUMwWixrQkFBUixHQUE2QixJQUE3Qjs7QUFDQSxVQUFJOVUsS0FBSixFQUEyRCxFQUEzRCxNQVdPO0FBQ0hzVyxRQUFBQSxNQUFNLENBQUN4ZSxRQUFQLEdBQWtCaVksbUJBQW1CLENBQUN5QixTQUFELEVBQVl4QixLQUFaLENBQXJDOztBQUNBLFlBQUlzRyxNQUFNLENBQUN4ZSxRQUFQLEtBQW9CMFosU0FBeEIsRUFBbUM7QUFDL0JBLFVBQUFBLFNBQVMsR0FBRzhFLE1BQU0sQ0FBQ3hlLFFBQW5CO0FBQ0F3ZSxVQUFBQSxNQUFNLENBQUN4ZSxRQUFQLEdBQWtCd0gsV0FBVyxDQUFDa1MsU0FBRCxDQUE3QjtBQUNBM0UsVUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBRzVCLE1BQUosRUFBWTBELG9CQUFaLENBQWlDMkgsTUFBakMsQ0FBTjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxVQUFNL1IsS0FBSyxHQUFHLENBQUMsR0FBR3FHLHVCQUFKLEVBQTZCakwsdUJBQTdCLENBQXFENlIsU0FBckQsQ0FBZDs7QUFDQSxRQUFJLENBQUNuVyxVQUFVLENBQUNGLEVBQUQsQ0FBZixFQUFxQjtBQUNqQixnQkFBMkM7QUFDdkMsY0FBTSxJQUFJcUIsS0FBSixDQUFXLGtCQUFpQnFRLEdBQUksY0FBYTFSLEVBQUcsMkNBQXRDLEdBQW9GLG9GQUE5RixDQUFOO0FBQ0g7O0FBQ0R6QixNQUFBQSxNQUFNLENBQUNnYixRQUFQLENBQWdCeFosSUFBaEIsR0FBdUJDLEVBQXZCO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7O0FBQ0RzQyxJQUFBQSxVQUFVLEdBQUcrTSxTQUFTLENBQUNFLFdBQVcsQ0FBQ2pOLFVBQUQsQ0FBWixFQUEwQixLQUFLMUgsTUFBL0IsQ0FBdEI7O0FBQ0EsUUFBSSxDQUFDLEdBQUdtVixVQUFKLEVBQWdCbUUsY0FBaEIsQ0FBK0I5SyxLQUEvQixDQUFKLEVBQTJDO0FBQ3ZDLFlBQU0rUSxRQUFRLEdBQUcsQ0FBQyxHQUFHbkssaUJBQUosRUFBdUJtSSxnQkFBdkIsQ0FBd0M3VixVQUF4QyxDQUFqQjtBQUNBLFlBQU0wUCxVQUFVLEdBQUdtSSxRQUFRLENBQUN4ZCxRQUE1QjtBQUNBLFlBQU0rZSxVQUFVLEdBQUcsQ0FBQyxHQUFHdEwsV0FBSixFQUFpQmdDLGFBQWpCLENBQStCaEosS0FBL0IsQ0FBbkI7QUFDQSxZQUFNdVMsVUFBVSxHQUFHLENBQUMsR0FBR3hMLGFBQUosRUFBbUJxQyxlQUFuQixDQUFtQ2tKLFVBQW5DLEVBQStDMUosVUFBL0MsQ0FBbkI7QUFDQSxZQUFNNEosaUJBQWlCLEdBQUd4UyxLQUFLLEtBQUs0SSxVQUFwQztBQUNBLFlBQU1pQyxjQUFjLEdBQUcySCxpQkFBaUIsR0FBR3BNLGFBQWEsQ0FBQ3BHLEtBQUQsRUFBUTRJLFVBQVIsRUFBb0JzRSxNQUFwQixDQUFoQixHQUE4QyxFQUF0Rjs7QUFFQSxVQUFJLENBQUNxRixVQUFELElBQWVDLGlCQUFpQixJQUFJLENBQUMzSCxjQUFjLENBQUNmLE1BQXhELEVBQWdFO0FBQzVELGNBQU0ySSxhQUFhLEdBQUc3YyxNQUFNLENBQUMwQyxJQUFQLENBQVlnYSxVQUFVLENBQUNwSixNQUF2QixFQUErQjVJLE1BQS9CLENBQXVDaUosS0FBRCxJQUFTLENBQUMyRCxNQUFNLENBQUMzRCxLQUFELENBQXRELENBQXRCOztBQUVBLFlBQUlrSixhQUFhLENBQUN2SyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCLG9CQUEyQztBQUN2QzdVLFlBQUFBLE9BQU8sQ0FBQ3lGLElBQVIsQ0FBYyxHQUFFMFosaUJBQWlCLEdBQUksb0JBQUosR0FBMkIsaUNBQWlDLDhCQUFoRixHQUFpSCxlQUFjQyxhQUFhLENBQUM1SSxJQUFkLENBQW1CLElBQW5CLENBQXlCLDhCQUFySztBQUNIOztBQUNELGdCQUFNLElBQUk1UixLQUFKLENBQVUsQ0FBQ3VhLGlCQUFpQixHQUFJLDBCQUF5QmxLLEdBQUksb0NBQW1DbUssYUFBYSxDQUFDNUksSUFBZCxDQUFtQixJQUFuQixDQUF5QixpQ0FBN0YsR0FBaUksOEJBQTZCakIsVUFBVyw4Q0FBNkM1SSxLQUFNLEtBQTlPLElBQXVQLCtDQUE4Q3dTLGlCQUFpQixHQUFHLDJCQUFILEdBQWlDLHNCQUF1QixFQUF4WCxDQUFOO0FBQ0g7QUFDSixPQVRELE1BU08sSUFBSUEsaUJBQUosRUFBdUI7QUFDMUI1YixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHOFAsTUFBSixFQUFZMEQsb0JBQVosQ0FBaUN4VSxNQUFNLENBQUNxTSxNQUFQLENBQWMsRUFBZCxFQUNuQzhPLFFBRG1DLEVBQ3pCO0FBQ1R4ZCxVQUFBQSxRQUFRLEVBQUVzWCxjQUFjLENBQUNmLE1BRGhCO0FBRVRqQixVQUFBQSxLQUFLLEVBQUVrQixrQkFBa0IsQ0FBQ21ELE1BQUQsRUFBU3JDLGNBQWMsQ0FBQ3hCLE1BQXhCO0FBRmhCLFNBRHlCLENBQWpDLENBQUw7QUFLSCxPQU5NLE1BTUE7QUFDSDtBQUNBelQsUUFBQUEsTUFBTSxDQUFDcU0sTUFBUCxDQUFjaUwsTUFBZCxFQUFzQnFGLFVBQXRCO0FBQ0g7QUFDSjs7QUFDRHhGLElBQUFBLE1BQU0sQ0FBQzVKLE1BQVAsQ0FBY3lPLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDaGIsRUFBdkMsRUFBMkMwYSxVQUEzQzs7QUFDQSxRQUFJO0FBQ0EsVUFBSTVYLEdBQUosRUFBU2daLElBQVQ7QUFDQSxVQUFJQyxTQUFTLEdBQUcsTUFBTSxLQUFLQyxZQUFMLENBQWtCNVMsS0FBbEIsRUFBeUJpTixTQUF6QixFQUFvQ0MsTUFBcEMsRUFBNEN0VyxFQUE1QyxFQUFnRHNDLFVBQWhELEVBQTREb1ksVUFBNUQsQ0FBdEI7QUFDQSxVQUFJO0FBQUU5UCxRQUFBQSxLQUFGO0FBQVVsUixRQUFBQSxLQUFWO0FBQWtCZ2YsUUFBQUEsT0FBbEI7QUFBNEJDLFFBQUFBO0FBQTVCLFVBQXlDb0QsU0FBN0MsQ0FIQSxDQUlBOztBQUNBLFVBQUksQ0FBQ3JELE9BQU8sSUFBSUMsT0FBWixLQUF3QmpmLEtBQTVCLEVBQW1DO0FBQy9CLFlBQUlBLEtBQUssQ0FBQ3VpQixTQUFOLElBQW1CdmlCLEtBQUssQ0FBQ3VpQixTQUFOLENBQWdCQyxZQUF2QyxFQUFxRDtBQUNqRCxnQkFBTUMsV0FBVyxHQUFHemlCLEtBQUssQ0FBQ3VpQixTQUFOLENBQWdCQyxZQUFwQyxDQURpRCxDQUVqRDtBQUNBO0FBQ0E7O0FBQ0EsY0FBSUMsV0FBVyxDQUFDdkwsVUFBWixDQUF1QixHQUF2QixDQUFKLEVBQWlDO0FBQzdCLGtCQUFNd0wsVUFBVSxHQUFHLENBQUMsR0FBR3BNLGlCQUFKLEVBQXVCbUksZ0JBQXZCLENBQXdDZ0UsV0FBeEMsQ0FBbkI7QUFDQUMsWUFBQUEsVUFBVSxDQUFDemYsUUFBWCxHQUFzQmlZLG1CQUFtQixDQUFDd0gsVUFBVSxDQUFDemYsUUFBWixFQUFzQmtZLEtBQXRCLENBQXpDO0FBQ0Esa0JBQU07QUFBRW5ELGNBQUFBLEdBQUcsRUFBRTJLLE1BQVA7QUFBZ0JyYyxjQUFBQSxFQUFFLEVBQUVzYztBQUFwQixnQkFBK0IvSCxZQUFZLENBQUMsSUFBRCxFQUFPNEgsV0FBUCxFQUFvQkEsV0FBcEIsQ0FBakQ7QUFDQSxtQkFBTyxLQUFLN0QsTUFBTCxDQUFZeUIsTUFBWixFQUFvQnNDLE1BQXBCLEVBQTRCQyxLQUE1QixFQUFtQ3JjLE9BQW5DLENBQVA7QUFDSDs7QUFDRDFCLFVBQUFBLE1BQU0sQ0FBQ2diLFFBQVAsQ0FBZ0J4WixJQUFoQixHQUF1Qm9jLFdBQXZCO0FBQ0EsaUJBQU8sSUFBSXhWLE9BQUosQ0FBWSxNQUFJLENBQ3RCLENBRE0sQ0FBUDtBQUVIOztBQUNELGFBQUtzUSxTQUFMLEdBQWlCLENBQUMsQ0FBQ3ZkLEtBQUssQ0FBQzZpQixXQUF6QixDQWhCK0IsQ0FpQi9COztBQUNBLFlBQUk3aUIsS0FBSyxDQUFDcWMsUUFBTixLQUFtQk4sa0JBQXZCLEVBQTJDO0FBQ3ZDLGNBQUkrRyxhQUFKOztBQUNBLGNBQUk7QUFDQSxrQkFBTSxLQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQU47QUFDQUQsWUFBQUEsYUFBYSxHQUFHLE1BQWhCO0FBQ0gsV0FIRCxDQUdFLE9BQU81YSxDQUFQLEVBQVU7QUFDUjRhLFlBQUFBLGFBQWEsR0FBRyxTQUFoQjtBQUNIOztBQUNEVCxVQUFBQSxTQUFTLEdBQUcsTUFBTSxLQUFLQyxZQUFMLENBQWtCUSxhQUFsQixFQUFpQ0EsYUFBakMsRUFBZ0RsRyxNQUFoRCxFQUF3RHRXLEVBQXhELEVBQTREc0MsVUFBNUQsRUFBd0U7QUFDdEZ2QixZQUFBQSxPQUFPLEVBQUU7QUFENkUsV0FBeEUsQ0FBbEI7QUFHSDtBQUNKOztBQUNEb1YsTUFBQUEsTUFBTSxDQUFDNUosTUFBUCxDQUFjeU8sSUFBZCxDQUFtQixxQkFBbkIsRUFBMENoYixFQUExQyxFQUE4QzBhLFVBQTlDO0FBQ0EsV0FBS25ELFdBQUwsQ0FBaUJ3QyxNQUFqQixFQUF5QnJJLEdBQXpCLEVBQThCMVIsRUFBOUIsRUFBa0NDLE9BQWxDOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNeWMsT0FBTyxHQUFHLEtBQUtsRSxVQUFMLENBQWdCLE9BQWhCLEVBQXlCNUIsU0FBekM7QUFDQXJZLFFBQUFBLE1BQU0sQ0FBQ29lLElBQVAsQ0FBWUMsYUFBWixHQUE0QkYsT0FBTyxDQUFDeE4sZUFBUixLQUE0QndOLE9BQU8sQ0FBQ3ZOLG1CQUFwQyxJQUEyRCxDQUFDNE0sU0FBUyxDQUFDbkYsU0FBVixDQUFvQjFILGVBQTVHO0FBQ0g7O0FBQ0QsVUFBSWpQLE9BQU8sQ0FBQ2dhLEVBQVIsSUFBYzVELFNBQVMsS0FBSyxTQUE1QixJQUF5QyxDQUFDLENBQUN2VCxHQUFHLEdBQUdxQyxJQUFJLENBQUMwVCxhQUFMLENBQW1CbmYsS0FBMUIsTUFBcUMsSUFBckMsSUFBNkNvSixHQUFHLEtBQUssS0FBSyxDQUExRCxHQUE4RCxLQUFLLENBQW5FLEdBQXVFLENBQUNnWixJQUFJLEdBQUdoWixHQUFHLENBQUNtWixTQUFaLE1BQTJCLElBQTNCLElBQW1DSCxJQUFJLEtBQUssS0FBSyxDQUFqRCxHQUFxRCxLQUFLLENBQTFELEdBQThEQSxJQUFJLENBQUNlLFVBQTNJLE1BQTJKLEdBQXBNLEtBQTRNbmpCLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxLQUFLLENBQTFDLEdBQThDQSxLQUFLLENBQUN1aUIsU0FBaFEsQ0FBSixFQUFnUjtBQUM1UTtBQUNBO0FBQ0F2aUIsUUFBQUEsS0FBSyxDQUFDdWlCLFNBQU4sQ0FBZ0JZLFVBQWhCLEdBQTZCLEdBQTdCO0FBQ0gsT0E5Q0QsQ0ErQ0E7OztBQUNBLFlBQU1DLG1CQUFtQixHQUFHN2MsT0FBTyxDQUFDYyxPQUFSLElBQW1CLEtBQUtxSSxLQUFMLEtBQWVBLEtBQTlEOztBQUNBLFVBQUkyVCxPQUFKOztBQUNBLFlBQU1DLFlBQVksR0FBRyxDQUFDRCxPQUFPLEdBQUc5YyxPQUFPLENBQUNlLE1BQW5CLE1BQStCLElBQS9CLElBQXVDK2IsT0FBTyxLQUFLLEtBQUssQ0FBeEQsR0FBNERBLE9BQTVELEdBQXNFLENBQUNELG1CQUE1RjtBQUNBLFlBQU1HLFdBQVcsR0FBR0QsWUFBWSxHQUFHO0FBQy9CbEYsUUFBQUEsQ0FBQyxFQUFFLENBRDRCO0FBRS9CRSxRQUFBQSxDQUFDLEVBQUU7QUFGNEIsT0FBSCxHQUc1QixJQUhKO0FBSUEsWUFBTSxLQUFLalIsR0FBTCxDQUFTcUMsS0FBVCxFQUFnQmlOLFNBQWhCLEVBQTJCQyxNQUEzQixFQUFtQ3VFLFNBQW5DLEVBQThDa0IsU0FBOUMsRUFBeURyRSxZQUFZLEtBQUssSUFBakIsSUFBeUJBLFlBQVksS0FBSyxLQUFLLENBQS9DLEdBQW1EQSxZQUFuRCxHQUFrRXVGLFdBQTNILEVBQXdJOWMsS0FBeEksQ0FBK0k1RyxDQUFELElBQUs7QUFDckosWUFBSUEsQ0FBQyxDQUFDc1AsU0FBTixFQUFpQitCLEtBQUssR0FBR0EsS0FBSyxJQUFJclIsQ0FBakIsQ0FBakIsS0FDSyxNQUFNQSxDQUFOO0FBQ1IsT0FISyxDQUFOOztBQUlBLFVBQUlxUixLQUFKLEVBQVc7QUFDUHVMLFFBQUFBLE1BQU0sQ0FBQzVKLE1BQVAsQ0FBY3lPLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDcFEsS0FBdkMsRUFBOENpUSxTQUE5QyxFQUF5REgsVUFBekQ7QUFDQSxjQUFNOVAsS0FBTjtBQUNIOztBQUNELFVBQUkvRixJQUFKLEVBQXFDO0FBQ2pDLFlBQUksS0FBS2pLLE1BQVQsRUFBaUI7QUFDYnFDLFVBQUFBLFFBQVEsQ0FBQ2lnQixlQUFULENBQXlCQyxJQUF6QixHQUFnQyxLQUFLdmlCLE1BQXJDO0FBQ0g7QUFDSjs7QUFDRHViLE1BQUFBLE1BQU0sQ0FBQzVKLE1BQVAsQ0FBY3lPLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDaGIsRUFBMUMsRUFBOEMwYSxVQUE5QztBQUNBLGFBQU8sSUFBUDtBQUNILEtBdEVELENBc0VFLE9BQU81RCxJQUFQLEVBQWE7QUFDWCxVQUFJQSxJQUFJLENBQUNqTyxTQUFULEVBQW9CO0FBQ2hCLGVBQU8sS0FBUDtBQUNIOztBQUNELFlBQU1pTyxJQUFOO0FBQ0g7QUFDSjs7QUFDRFMsRUFBQUEsV0FBVyxDQUFDd0MsTUFBRCxFQUFTckksR0FBVCxFQUFjMVIsRUFBZCxFQUFrQkMsT0FBTyxHQUFHLEVBQTVCLEVBQ1I7QUFDQyxjQUEyQztBQUN2QyxVQUFJLE9BQU8xQixNQUFNLENBQUM4VyxPQUFkLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3ZDNVksUUFBQUEsT0FBTyxDQUFDbU8sS0FBUixDQUFlLDJDQUFmO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLE9BQU9yTSxNQUFNLENBQUM4VyxPQUFQLENBQWUwRSxNQUFmLENBQVAsS0FBa0MsV0FBdEMsRUFBbUQ7QUFDL0N0ZCxRQUFBQSxPQUFPLENBQUNtTyxLQUFSLENBQWUsMkJBQTBCbVAsTUFBTyxtQkFBaEQ7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsUUFBSUEsTUFBTSxLQUFLLFdBQVgsSUFBMEIsQ0FBQyxHQUFHakssTUFBSixFQUFZMEgsTUFBWixPQUF5QnhYLEVBQXZELEVBQTJEO0FBQ3ZELFdBQUt1WSxRQUFMLEdBQWdCdFksT0FBTyxDQUFDYyxPQUF4QjtBQUNBeEMsTUFBQUEsTUFBTSxDQUFDOFcsT0FBUCxDQUFlMEUsTUFBZixFQUF1QjtBQUNuQnJJLFFBQUFBLEdBRG1CO0FBRW5CMVIsUUFBQUEsRUFGbUI7QUFHbkJDLFFBQUFBLE9BSG1CO0FBSW5Cd1gsUUFBQUEsR0FBRyxFQUFFLElBSmM7QUFLbkJFLFFBQUFBLEdBQUcsRUFBRSxLQUFLUCxJQUFMLEdBQVkyQyxNQUFNLEtBQUssV0FBWCxHQUF5QixLQUFLM0MsSUFBOUIsR0FBcUMsS0FBS0EsSUFBTCxHQUFZO0FBTC9DLE9BQXZCLEVBTUc7QUFDSDtBQUNBO0FBQ0EsUUFUQSxFQVNJcFgsRUFUSjtBQVVIO0FBQ0o7O0FBQ3lCLFFBQXBCb2Qsb0JBQW9CLENBQUNoZCxHQUFELEVBQU16RCxRQUFOLEVBQWdCc1YsS0FBaEIsRUFBdUJqUyxFQUF2QixFQUEyQjBhLFVBQTNCLEVBQXVDMkMsYUFBdkMsRUFBc0Q7QUFDNUUsUUFBSWpkLEdBQUcsQ0FBQ3lJLFNBQVIsRUFBbUI7QUFDZjtBQUNBLFlBQU16SSxHQUFOO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDLEdBQUdzUCxZQUFKLEVBQWtCMUosWUFBbEIsQ0FBK0I1RixHQUEvQixLQUF1Q2lkLGFBQTNDLEVBQTBEO0FBQ3REbEgsTUFBQUEsTUFBTSxDQUFDNUosTUFBUCxDQUFjeU8sSUFBZCxDQUFtQixrQkFBbkIsRUFBdUM1YSxHQUF2QyxFQUE0Q0osRUFBNUMsRUFBZ0QwYSxVQUFoRCxFQURzRCxDQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBbmMsTUFBQUEsTUFBTSxDQUFDZ2IsUUFBUCxDQUFnQnhaLElBQWhCLEdBQXVCQyxFQUF2QixDQVBzRCxDQVF0RDtBQUNBOztBQUNBLFlBQU15USxzQkFBc0IsRUFBNUI7QUFDSDs7QUFDRCxRQUFJO0FBQ0EsVUFBSW9HLFVBQUo7QUFDQSxVQUFJOU0sV0FBSjtBQUNBLFVBQUlyUSxLQUFKOztBQUNBLFVBQUksT0FBT21kLFVBQVAsS0FBc0IsV0FBdEIsSUFBcUMsT0FBTzlNLFdBQVAsS0FBdUIsV0FBaEUsRUFBNkU7QUFDekUsU0FBQztBQUFFa0wsVUFBQUEsSUFBSSxFQUFFNEIsVUFBUjtBQUFxQjlNLFVBQUFBO0FBQXJCLFlBQXNDLE1BQU0sS0FBSzBTLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBN0M7QUFDSDs7QUFDRCxZQUFNVixTQUFTLEdBQUc7QUFDZHJpQixRQUFBQSxLQURjO0FBRWRrZCxRQUFBQSxTQUFTLEVBQUVDLFVBRkc7QUFHZDlNLFFBQUFBLFdBSGM7QUFJZDNKLFFBQUFBLEdBSmM7QUFLZHdLLFFBQUFBLEtBQUssRUFBRXhLO0FBTE8sT0FBbEI7O0FBT0EsVUFBSSxDQUFDMmIsU0FBUyxDQUFDcmlCLEtBQWYsRUFBc0I7QUFDbEIsWUFBSTtBQUNBcWlCLFVBQUFBLFNBQVMsQ0FBQ3JpQixLQUFWLEdBQWtCLE1BQU0sS0FBS3dWLGVBQUwsQ0FBcUIySCxVQUFyQixFQUFpQztBQUNyRHpXLFlBQUFBLEdBRHFEO0FBRXJEekQsWUFBQUEsUUFGcUQ7QUFHckRzVixZQUFBQTtBQUhxRCxXQUFqQyxDQUF4QjtBQUtILFNBTkQsQ0FNRSxPQUFPcUwsTUFBUCxFQUFlO0FBQ2I3Z0IsVUFBQUEsT0FBTyxDQUFDbU8sS0FBUixDQUFjLHlDQUFkLEVBQXlEMFMsTUFBekQ7QUFDQXZCLFVBQUFBLFNBQVMsQ0FBQ3JpQixLQUFWLEdBQWtCLEVBQWxCO0FBRUg7QUFDSjs7QUFDRCxhQUFPcWlCLFNBQVA7QUFDSCxLQTVCRCxDQTRCRSxPQUFPd0IsWUFBUCxFQUFxQjtBQUNuQixhQUFPLEtBQUtILG9CQUFMLENBQTBCRyxZQUExQixFQUF3QzVnQixRQUF4QyxFQUFrRHNWLEtBQWxELEVBQXlEalMsRUFBekQsRUFBNkQwYSxVQUE3RCxFQUF5RSxJQUF6RSxDQUFQO0FBQ0g7QUFDSjs7QUFDaUIsUUFBWnNCLFlBQVksQ0FBQzVTLEtBQUQsRUFBUXpNLFFBQVIsRUFBa0JzVixLQUFsQixFQUF5QmpTLEVBQXpCLEVBQTZCc0MsVUFBN0IsRUFBeUNvWSxVQUF6QyxFQUFxRDtBQUNuRSxRQUFJO0FBQ0EsWUFBTThDLGlCQUFpQixHQUFHLEtBQUtoRixVQUFMLENBQWdCcFAsS0FBaEIsQ0FBMUI7O0FBQ0EsVUFBSXNSLFVBQVUsQ0FBQzNaLE9BQVgsSUFBc0J5YyxpQkFBdEIsSUFBMkMsS0FBS3BVLEtBQUwsS0FBZUEsS0FBOUQsRUFBcUU7QUFDakUsZUFBT29VLGlCQUFQO0FBQ0g7O0FBQ0QsWUFBTUMsZUFBZSxHQUFHRCxpQkFBaUIsSUFBSSxhQUFhQSxpQkFBbEMsR0FBc0R6UCxTQUF0RCxHQUFrRXlQLGlCQUExRjtBQUNBLFlBQU16QixTQUFTLEdBQUcwQixlQUFlLEdBQUdBLGVBQUgsR0FBcUIsTUFBTSxLQUFLaEIsY0FBTCxDQUFvQnJULEtBQXBCLEVBQTJCcEMsSUFBM0IsQ0FBaUNTLEdBQUQsS0FBUTtBQUM1Rm1QLFFBQUFBLFNBQVMsRUFBRW5QLEdBQUcsQ0FBQ3dOLElBRDZFO0FBRTVGbEwsUUFBQUEsV0FBVyxFQUFFdEMsR0FBRyxDQUFDc0MsV0FGMkU7QUFHNUYyTyxRQUFBQSxPQUFPLEVBQUVqUixHQUFHLENBQUNpVyxHQUFKLENBQVFoRixPQUgyRTtBQUk1RkMsUUFBQUEsT0FBTyxFQUFFbFIsR0FBRyxDQUFDaVcsR0FBSixDQUFRL0U7QUFKMkUsT0FBUixDQUFoQyxDQUE1RDtBQU9BLFlBQU07QUFBRS9CLFFBQUFBLFNBQVMsRUFBRUMsVUFBYjtBQUEwQjZCLFFBQUFBLE9BQTFCO0FBQW9DQyxRQUFBQTtBQUFwQyxVQUFpRG9ELFNBQXZEOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNO0FBQUU0QixVQUFBQTtBQUFGLFlBQTBCcGUsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qzs7QUFDQSxZQUFJLENBQUNvZSxrQkFBa0IsQ0FBQzlHLFVBQUQsQ0FBdkIsRUFBcUM7QUFDakMsZ0JBQU0sSUFBSXhWLEtBQUosQ0FBVyx5REFBd0QxRSxRQUFTLEdBQTVFLENBQU47QUFDSDtBQUNKOztBQUNELFVBQUlzWixRQUFKOztBQUNBLFVBQUl5QyxPQUFPLElBQUlDLE9BQWYsRUFBd0I7QUFDcEIxQyxRQUFBQSxRQUFRLEdBQUcsS0FBS1EsVUFBTCxDQUFnQm1ILFdBQWhCLENBQTRCLENBQUMsR0FBRzlOLE1BQUosRUFBWTBELG9CQUFaLENBQWlDO0FBQ3BFN1csVUFBQUEsUUFEb0U7QUFFcEVzVixVQUFBQTtBQUZvRSxTQUFqQyxDQUE1QixFQUdQM1AsVUFITyxFQUdLb1csT0FITCxFQUdjLEtBQUs5ZCxNQUhuQixDQUFYO0FBSUg7O0FBQ0QsWUFBTWxCLEtBQUssR0FBRyxNQUFNLEtBQUtta0IsUUFBTCxDQUFjLE1BQUluRixPQUFPLEdBQUcsS0FBS29GLGNBQUwsQ0FBb0I3SCxRQUFwQixDQUFILEdBQW1DMEMsT0FBTyxHQUFHLEtBQUtvRixjQUFMLENBQW9COUgsUUFBcEIsQ0FBSCxHQUFtQyxLQUFLL0csZUFBTCxDQUFxQjJILFVBQXJCLEVBQWlDO0FBQ3ZKO0FBQ0lsYSxRQUFBQSxRQURKO0FBRUlzVixRQUFBQSxLQUZKO0FBR0kzVyxRQUFBQSxNQUFNLEVBQUUwRSxFQUhaO0FBSUlwRixRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFKakI7QUFLSXFKLFFBQUFBLE9BQU8sRUFBRSxLQUFLQSxPQUxsQjtBQU1JSSxRQUFBQSxhQUFhLEVBQUUsS0FBS0E7QUFOeEIsT0FEc0gsQ0FBdEcsQ0FBcEI7QUFVQTBYLE1BQUFBLFNBQVMsQ0FBQ3JpQixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLFdBQUs4ZSxVQUFMLENBQWdCcFAsS0FBaEIsSUFBeUIyUyxTQUF6QjtBQUNBLGFBQU9BLFNBQVA7QUFDSCxLQXhDRCxDQXdDRSxPQUFPaUMsSUFBUCxFQUFhO0FBQ1gsYUFBTyxLQUFLWixvQkFBTCxDQUEwQlksSUFBMUIsRUFBZ0NyaEIsUUFBaEMsRUFBMENzVixLQUExQyxFQUFpRGpTLEVBQWpELEVBQXFEMGEsVUFBckQsQ0FBUDtBQUNIO0FBQ0o7O0FBQ0QzVCxFQUFBQSxHQUFHLENBQUNxQyxLQUFELEVBQVF6TSxRQUFSLEVBQWtCc1YsS0FBbEIsRUFBeUJqUyxFQUF6QixFQUE2QjVILElBQTdCLEVBQW1DNmtCLFdBQW5DLEVBQWdEO0FBQy9DLFNBQUtqRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBSzVOLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUt6TSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtzVixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLM1csTUFBTCxHQUFjMEUsRUFBZDtBQUNBLFdBQU8sS0FBS2tiLE1BQUwsQ0FBWTlpQixJQUFaLEVBQWtCNmtCLFdBQWxCLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBOzs7QUFBTWdCLEVBQUFBLGNBQWMsQ0FBQzVZLEVBQUQsRUFBSztBQUNqQixTQUFLZ1QsSUFBTCxHQUFZaFQsRUFBWjtBQUNIOztBQUNEMFYsRUFBQUEsZUFBZSxDQUFDL2EsRUFBRCxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxLQUFLMUUsTUFBVixFQUFrQixPQUFPLEtBQVA7QUFDbEIsVUFBTSxDQUFDNGlCLFlBQUQsRUFBZUMsT0FBZixJQUEwQixLQUFLN2lCLE1BQUwsQ0FBWXVZLEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUN1SyxZQUFELEVBQWVDLE9BQWYsSUFBMEJyZSxFQUFFLENBQUM2VCxLQUFILENBQVMsR0FBVCxDQUFoQyxDQUhnQixDQUloQjs7QUFDQSxRQUFJd0ssT0FBTyxJQUFJSCxZQUFZLEtBQUtFLFlBQTVCLElBQTRDRCxPQUFPLEtBQUtFLE9BQTVELEVBQXFFO0FBQ2pFLGFBQU8sSUFBUDtBQUNILEtBUGUsQ0FRaEI7OztBQUNBLFFBQUlILFlBQVksS0FBS0UsWUFBckIsRUFBbUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0gsS0FYZSxDQVloQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0QsT0FBTyxLQUFLRSxPQUFuQjtBQUNIOztBQUNEcEQsRUFBQUEsWUFBWSxDQUFDamIsRUFBRCxFQUFLO0FBQ2IsVUFBTSxHQUFHcVUsSUFBSCxJQUFXclUsRUFBRSxDQUFDNlQsS0FBSCxDQUFTLEdBQVQsQ0FBakIsQ0FEYSxDQUViO0FBQ0E7O0FBQ0EsUUFBSVEsSUFBSSxLQUFLLEVBQVQsSUFBZUEsSUFBSSxLQUFLLEtBQTVCLEVBQW1DO0FBQy9COVYsTUFBQUEsTUFBTSxDQUFDK2YsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBO0FBQ0gsS0FQWSxDQVFiOzs7QUFDQSxVQUFNQyxJQUFJLEdBQUd0aEIsUUFBUSxDQUFDdWhCLGNBQVQsQ0FBd0JuSyxJQUF4QixDQUFiOztBQUNBLFFBQUlrSyxJQUFKLEVBQVU7QUFDTkEsTUFBQUEsSUFBSSxDQUFDRSxjQUFMO0FBQ0E7QUFDSCxLQWJZLENBY2I7QUFDQTs7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHemhCLFFBQVEsQ0FBQzBoQixpQkFBVCxDQUEyQnRLLElBQTNCLEVBQWlDLENBQWpDLENBQWY7O0FBQ0EsUUFBSXFLLE1BQUosRUFBWTtBQUNSQSxNQUFBQSxNQUFNLENBQUNELGNBQVA7QUFDSDtBQUNKOztBQUNEbEQsRUFBQUEsUUFBUSxDQUFDamdCLE1BQUQsRUFBUztBQUNiLFdBQU8sS0FBS0EsTUFBTCxLQUFnQkEsTUFBdkI7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQW9CLFFBQVJ3RSxRQUFRLENBQUM0UixHQUFELEVBQU1wVyxNQUFNLEdBQUdvVyxHQUFmLEVBQW9CelIsT0FBTyxHQUFHLEVBQTlCLEVBQ2I7QUFDQyxRQUFJa2IsTUFBTSxHQUFHLENBQUMsR0FBR25MLGlCQUFKLEVBQXVCbUksZ0JBQXZCLENBQXdDekcsR0FBeEMsQ0FBYjtBQUNBLFFBQUk7QUFBRS9VLE1BQUFBLFFBQVEsRUFBRWlpQjtBQUFaLFFBQTJCekQsTUFBL0I7O0FBQ0EsUUFBSXRXLElBQUosRUFBcUM7QUFDakMsVUFBSTVFLE9BQU8sQ0FBQ3JGLE1BQVIsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUJna0IsUUFBQUEsU0FBUyxHQUFHLENBQUMsR0FBR2hQLG9CQUFKLEVBQTBCa0IsbUJBQTFCLENBQThDOE4sU0FBOUMsRUFBeUQsS0FBSzNhLE9BQTlELEVBQXVFdEgsUUFBbkY7QUFDQXdlLFFBQUFBLE1BQU0sQ0FBQ3hlLFFBQVAsR0FBa0JpaUIsU0FBbEI7QUFDQWxOLFFBQUFBLEdBQUcsR0FBRyxDQUFDLEdBQUc1QixNQUFKLEVBQVkwRCxvQkFBWixDQUFpQzJILE1BQWpDLENBQU47QUFDQSxZQUFJaEIsUUFBUSxHQUFHLENBQUMsR0FBR25LLGlCQUFKLEVBQXVCbUksZ0JBQXZCLENBQXdDN2MsTUFBeEMsQ0FBZjtBQUNBLGNBQU04ZSxnQkFBZ0IsR0FBRyxDQUFDLEdBQUd4SyxvQkFBSixFQUEwQmtCLG1CQUExQixDQUE4Q3FKLFFBQVEsQ0FBQ3hkLFFBQXZELEVBQWlFLEtBQUtzSCxPQUF0RSxDQUF6QjtBQUNBa1csUUFBQUEsUUFBUSxDQUFDeGQsUUFBVCxHQUFvQnlkLGdCQUFnQixDQUFDemQsUUFBckM7QUFDQXNELFFBQUFBLE9BQU8sQ0FBQ3JGLE1BQVIsR0FBaUJ3ZixnQkFBZ0IsQ0FBQ3JKLGNBQWpCLElBQW1DLEtBQUsxTSxhQUF6RDtBQUNBL0ksUUFBQUEsTUFBTSxHQUFHLENBQUMsR0FBR3dVLE1BQUosRUFBWTBELG9CQUFaLENBQWlDMkcsUUFBakMsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0QsVUFBTXRGLEtBQUssR0FBRyxNQUFNLEtBQUs0QixVQUFMLENBQWdCNEUsV0FBaEIsRUFBcEI7QUFDQSxRQUFJL1ksVUFBVSxHQUFHaEgsTUFBakI7O0FBQ0EsUUFBSXVKLEtBQUosRUFBK0QsRUFBL0QsTUFhTztBQUNIc1csTUFBQUEsTUFBTSxDQUFDeGUsUUFBUCxHQUFrQmlZLG1CQUFtQixDQUFDdUcsTUFBTSxDQUFDeGUsUUFBUixFQUFrQmtZLEtBQWxCLENBQXJDOztBQUNBLFVBQUlzRyxNQUFNLENBQUN4ZSxRQUFQLEtBQW9CaWlCLFNBQXhCLEVBQW1DO0FBQy9CQSxRQUFBQSxTQUFTLEdBQUd6RCxNQUFNLENBQUN4ZSxRQUFuQjtBQUNBd2UsUUFBQUEsTUFBTSxDQUFDeGUsUUFBUCxHQUFrQmlpQixTQUFsQjtBQUNBbE4sUUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBRzVCLE1BQUosRUFBWTBELG9CQUFaLENBQWlDMkgsTUFBakMsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsVUFBTS9SLEtBQUssR0FBRyxDQUFDLEdBQUdxRyx1QkFBSixFQUE2QmpMLHVCQUE3QixDQUFxRG9hLFNBQXJELENBQWQsQ0F0Q0QsQ0F1Q0M7O0FBQ0EsY0FBMkM7QUFDdkM7QUFDSDs7QUFDRCxVQUFNalksT0FBTyxDQUFDc0UsR0FBUixDQUFZLENBQ2QsS0FBS3dMLFVBQUwsQ0FBZ0JvSSxNQUFoQixDQUF1QnpWLEtBQXZCLEVBQThCcEMsSUFBOUIsQ0FBb0M4WCxLQUFELElBQVM7QUFDeEMsYUFBT0EsS0FBSyxHQUFHLEtBQUtoQixjQUFMLENBQW9CLEtBQUtySCxVQUFMLENBQWdCbUgsV0FBaEIsQ0FBNEJsTSxHQUE1QixFQUFpQ3BQLFVBQWpDLEVBQTZDLElBQTdDLEVBQW1ELE9BQU9yQyxPQUFPLENBQUNyRixNQUFmLEtBQTBCLFdBQTFCLEdBQXdDcUYsT0FBTyxDQUFDckYsTUFBaEQsR0FBeUQsS0FBS0EsTUFBakgsQ0FBcEIsQ0FBSCxHQUFtSixLQUEvSjtBQUNILEtBRkQsQ0FEYyxFQUlkLEtBQUs2YixVQUFMLENBQWdCeFcsT0FBTyxDQUFDMkQsUUFBUixHQUFtQixVQUFuQixHQUFnQyxVQUFoRCxFQUE0RHdGLEtBQTVELENBSmMsQ0FBWixDQUFOO0FBTUg7O0FBQ21CLFFBQWRxVCxjQUFjLENBQUNyVCxLQUFELEVBQVE7QUFDeEIsUUFBSVAsU0FBUyxHQUFHLEtBQWhCOztBQUNBLFVBQU1rVyxNQUFNLEdBQUcsS0FBSy9GLEdBQUwsR0FBVyxNQUFJO0FBQzFCblEsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBLFVBQU1tVyxlQUFlLEdBQUcsTUFBTSxLQUFLdkksVUFBTCxDQUFnQndJLFFBQWhCLENBQXlCN1YsS0FBekIsQ0FBOUI7O0FBQ0EsUUFBSVAsU0FBSixFQUFlO0FBQ1gsWUFBTStCLEtBQUssR0FBRyxJQUFJdkosS0FBSixDQUFXLHdDQUF1QytILEtBQU0sR0FBeEQsQ0FBZDtBQUNBd0IsTUFBQUEsS0FBSyxDQUFDL0IsU0FBTixHQUFrQixJQUFsQjtBQUNBLFlBQU0rQixLQUFOO0FBQ0g7O0FBQ0QsUUFBSW1VLE1BQU0sS0FBSyxLQUFLL0YsR0FBcEIsRUFBeUI7QUFDckIsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxXQUFPZ0csZUFBUDtBQUNIOztBQUNEbkIsRUFBQUEsUUFBUSxDQUFDblQsRUFBRCxFQUFLO0FBQ1QsUUFBSTdCLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNa1csTUFBTSxHQUFHLE1BQUk7QUFDZmxXLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxTQUFLbVEsR0FBTCxHQUFXK0YsTUFBWDtBQUNBLFdBQU9yVSxFQUFFLEdBQUcxRCxJQUFMLENBQVc1TyxJQUFELElBQVE7QUFDckIsVUFBSTJtQixNQUFNLEtBQUssS0FBSy9GLEdBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsVUFBSW5RLFNBQUosRUFBZTtBQUNYLGNBQU1tVixJQUFJLEdBQUcsSUFBSTNjLEtBQUosQ0FBVSxpQ0FBVixDQUFiO0FBQ0EyYyxRQUFBQSxJQUFJLENBQUNuVixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsY0FBTW1WLElBQU47QUFDSDs7QUFDRCxhQUFPNWxCLElBQVA7QUFDSCxLQVZNLENBQVA7QUFXSDs7QUFDRDBsQixFQUFBQSxjQUFjLENBQUM3SCxRQUFELEVBQVc7QUFDckIsVUFBTTtBQUFFbFcsTUFBQUEsSUFBSSxFQUFFbWY7QUFBUixRQUFzQixJQUFJcE4sR0FBSixDQUFRbUUsUUFBUixFQUFrQjFYLE1BQU0sQ0FBQ2diLFFBQVAsQ0FBZ0J4WixJQUFsQyxDQUE1Qjs7QUFDQSxRQUFJLEtBQUosRUFBb0YsRUFFbkY7O0FBQ0QsV0FBT2lXLGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUttQyxLQUFoQixDQUFiLENBQW9DcFIsSUFBcEMsQ0FBMEM1TyxJQUFELElBQVE7QUFDcEQsV0FBSzhlLEdBQUwsQ0FBU2dJLFFBQVQsSUFBcUI5bUIsSUFBckI7QUFDQSxhQUFPQSxJQUFQO0FBQ0gsS0FITSxDQUFQO0FBSUg7O0FBQ0QybEIsRUFBQUEsY0FBYyxDQUFDOUgsUUFBRCxFQUFXO0FBQ3JCLFVBQU07QUFBRWxXLE1BQUFBLElBQUksRUFBRW9mO0FBQVIsUUFBeUIsSUFBSXJOLEdBQUosQ0FBUW1FLFFBQVIsRUFBa0IxWCxNQUFNLENBQUNnYixRQUFQLENBQWdCeFosSUFBbEMsQ0FBL0I7O0FBQ0EsUUFBSSxLQUFLb1gsR0FBTCxDQUFTZ0ksV0FBVCxDQUFKLEVBQTJCO0FBQ3ZCLGFBQU8sS0FBS2hJLEdBQUwsQ0FBU2dJLFdBQVQsQ0FBUDtBQUNIOztBQUNELFdBQU8sS0FBS2hJLEdBQUwsQ0FBU2dJLFdBQVQsSUFBd0JuSixhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLbUMsS0FBaEIsQ0FBYixDQUFvQ3BSLElBQXBDLENBQTBDNU8sSUFBRCxJQUFRO0FBQzVFLGFBQU8sS0FBSytlLEdBQUwsQ0FBU2dJLFdBQVQsQ0FBUDtBQUNBLGFBQU8vbUIsSUFBUDtBQUNILEtBSDhCLEVBRzVCK0gsS0FINEIsQ0FHckI2ZCxJQUFELElBQVE7QUFDYixhQUFPLEtBQUs3RyxHQUFMLENBQVNnSSxXQUFULENBQVA7QUFDQSxZQUFNbkIsSUFBTjtBQUNILEtBTjhCLENBQS9CO0FBT0g7O0FBQ0Q5TyxFQUFBQSxlQUFlLENBQUMwSCxTQUFELEVBQVl3SSxHQUFaLEVBQWlCO0FBQzVCLFVBQU07QUFBRXhJLE1BQUFBLFNBQVMsRUFBRXlJO0FBQWIsUUFBdUIsS0FBSzdHLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBN0I7O0FBQ0EsVUFBTThHLE9BQU8sR0FBRyxLQUFLckcsUUFBTCxDQUFjb0csSUFBZCxDQUFoQjs7QUFDQUQsSUFBQUEsR0FBRyxDQUFDRSxPQUFKLEdBQWNBLE9BQWQ7QUFDQSxXQUFPLENBQUMsR0FBR3hQLE1BQUosRUFBWXlQLG1CQUFaLENBQWdDRixJQUFoQyxFQUFzQztBQUN6Q0MsTUFBQUEsT0FEeUM7QUFFekMxSSxNQUFBQSxTQUZ5QztBQUd6Q2pjLE1BQUFBLE1BQU0sRUFBRSxJQUhpQztBQUl6Q3lrQixNQUFBQTtBQUp5QyxLQUF0QyxDQUFQO0FBTUg7O0FBQ0R4RSxFQUFBQSxrQkFBa0IsQ0FBQzVhLEVBQUQsRUFBSzBhLFVBQUwsRUFBaUI7QUFDL0IsUUFBSSxLQUFLMUIsR0FBVCxFQUFjO0FBQ1Y3QyxNQUFBQSxNQUFNLENBQUM1SixNQUFQLENBQWN5TyxJQUFkLENBQW1CLGtCQUFuQixFQUF1Q3ZLLHNCQUFzQixFQUE3RCxFQUFpRXpRLEVBQWpFLEVBQXFFMGEsVUFBckU7QUFDQSxXQUFLMUIsR0FBTDtBQUNBLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7QUFDSjs7QUFDRGtDLEVBQUFBLE1BQU0sQ0FBQzlpQixJQUFELEVBQU82a0IsV0FBUCxFQUFvQjtBQUN0QixXQUFPLEtBQUtsRSxHQUFMLENBQVMzZ0IsSUFBVCxFQUFlLEtBQUtvZ0IsVUFBTCxDQUFnQixPQUFoQixFQUF5QjVCLFNBQXhDLEVBQW1EcUcsV0FBbkQsQ0FBUDtBQUNIOztBQXZ2QlE7O0FBeXZCYjlHLE1BQU0sQ0FBQzVKLE1BQVAsR0FBZ0IsQ0FBQyxHQUFHc0QsS0FBSixFQUFXelEsT0FBWCxFQUFoQjtBQUNBRixlQUFBLEdBQWtCaVgsTUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0aUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFHZSxTQUFTd0osS0FBVCxDQUFlO0FBQUUvSSxFQUFBQSxTQUFGO0FBQWFxRixFQUFBQTtBQUFiLENBQWYsRUFBbUQ7QUFDaEUsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFlLFdBQUssRUFBRSxFQUF0QjtBQUFBLDhCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBU0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDaEJEOztBQUNBLE1BQU00RCxXQUFXLEdBQUcsVUFBcEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsVUFBckI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxLQUExQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLEtBQTdCO0FBRUEsTUFBTU4sV0FBVyxHQUFHRSxvRUFBSCwweUtBRUlDLFdBRkosRUFHSUEsV0FISixFQUlJQSxXQUpKLEVBS0lBLFdBTEosRUFNSUEsV0FOSixFQU9JQSxXQVBKLEVBU1NBLFdBVFQsRUFVU0EsV0FWVCxFQVdTQSxXQVhULEVBWVNBLFdBWlQsRUFhU0EsV0FiVCxFQWNTQSxXQWRULEVBZVVBLFdBZlYsRUFnQlVBLFdBaEJWLEVBaUJVQSxXQWpCVixFQWtCVUEsV0FsQlYsRUFtQlVBLFdBbkJWLEVBb0JVQSxXQXBCVixFQXNCVUEsV0F0QlYsRUF1QlVBLFdBdkJWLEVBd0JVQSxXQXhCVixFQXlCVUEsV0F6QlYsRUEwQlVBLFdBMUJWLEVBMkJVQSxXQTNCVixFQTRCV0EsV0E1QlgsRUE2QldBLFdBN0JYLEVBOEJXQSxXQTlCWCxFQStCV0EsV0EvQlgsRUFnQ1dBLFdBaENYLEVBaUNXQSxXQWpDWCxFQW1DV0EsV0FuQ1gsRUFvQ1dBLFdBcENYLEVBcUNXQSxXQXJDWCxFQXNDV0EsV0F0Q1gsRUF1Q1dBLFdBdkNYLEVBd0NXQSxXQXhDWCxFQXlDWUEsV0F6Q1osRUEwQ1lBLFdBMUNaLEVBMkNZQSxXQTNDWixFQTRDWUEsV0E1Q1osRUE2Q1lBLFdBN0NaLEVBOENZQSxXQTlDWixFQWdEWUEsV0FoRFosRUFpRFlBLFdBakRaLEVBa0RZQSxXQWxEWixFQW1EWUEsV0FuRFosRUFvRFlBLFdBcERaLEVBcURZQSxXQXJEWixFQXNEWUEsV0F0RFosRUF1RFlBLFdBdkRaLEVBeURLQyxZQXpETCxFQTBES0EsWUExREwsRUEyREtBLFlBM0RMLEVBNERLQSxZQTVETCxFQTZES0EsWUE3REwsRUE4REtBLFlBOURMLEVBZ0VVRCxXQWhFVixFQWlFVUEsV0FqRVYsRUFrRVVBLFdBbEVWLEVBbUVVQSxXQW5FVixFQW9FVUEsV0FwRVYsRUFxRVVBLFdBckVWLEVBdUVhQSxXQXZFYixFQXdFYUEsV0F4RWIsRUF5RWFBLFdBekViLEVBMEVhQSxXQTFFYixFQTJFYUEsV0EzRWIsRUE0RWFBLFdBNUViLEVBOEVXQSxXQTlFWCxFQStFV0EsV0EvRVgsRUFnRldBLFdBaEZYLEVBaUZXQSxXQWpGWCxFQWtGV0EsV0FsRlgsRUFtRldBLFdBbkZYLEVBcUZZQSxXQXJGWixFQXNGWUEsV0F0RlosRUF1RllBLFdBdkZaLEVBd0ZZQSxXQXhGWixFQXlGWUEsV0F6RlosRUEwRllBLFdBMUZaLEVBNEZZRSxpQkE1RlosRUE2RllBLGlCQTdGWixFQThGWUEsaUJBOUZaLEVBK0ZZQSxpQkEvRlosRUFnR1lBLGlCQWhHWixFQWtHZ0JDLG9CQWxHaEIsRUFtR2dCQSxvQkFuR2hCLEVBb0dnQkEsb0JBcEdoQixFQXFHZ0JBLG9CQXJHaEIsQ0FBakI7QUFnUUEsaUVBQWVOLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFFBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2pPYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsa0pBQXlEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL0RhdGEvY29tbW9uLnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9jb21wb25lbnRzL2VsZW1lbnRzL0J1dHRvbkxhbmcudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9jb21wb25lbnRzL2VsZW1lbnRzL0J1dHRvbkxpZ2h0LnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9lbGVtZW50cy9CdXR0b25Nb2JNZW51LnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9lbGVtZW50cy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvZWxlbWVudHMvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vaGVscGVycy9kYXJrTW9kZUZ1bmMudHMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2hlbHBlcnMvdG9nZ2xlQWxsQnV0dG9uLnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ob29rcy91c2VDbGlja0F3YXkudHMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2hvb2tzL3VzZURhcmtNb2RlLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbG9jYWxlcy9lbi9pbmRleC50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbG9jYWxlcy9mci9pbmRleC50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9zdHlsZXMvR2xvYmFsU3R5bGUudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwicmVhY3Qtc3ByaW5nXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvaWdub3JlZHxDOlxcVXNlcnNcXFl2ZVpcXGdpdGh1Yi5jb21cXHZpc3VhbGlzYXRpb25cXHdlYnNpdGVcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5hdkJhciA9IHtcclxuICBsaW5rMTogeyBmcjogXCJBY2N1ZWlsXCIsIGVuOiBcIkhvbWVcIiB9LFxyXG4gIGxpbmsyOiB7IGZyOiBcIlRhcmlmc1wiLCBlbjogXCJQcmljaW5nXCIgfSxcclxuICBsaW5rMzogeyBmcjogXCJBIHByb3Bvc1wiLCBlbjogXCJBYm91dFwiIH0sXHJcbiAgbGluazQ6IHsgZnI6IFwiQ29udGFjdFwiLCBlbjogXCJDb250YWN0XCIgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbyA9IHtcclxuICBuYW1lOiBcIkJlYXV0aWZ1bCBEYXNoYm9hcmRzXCIsXHJcbiAgdGl0bGU6IHtcclxuICAgIGZyOiBcIkRvbm5leiBwbHVzIGRlIHBlcmN1dGFudCDDoCB2b3MgZGFzaGJvYXJkc1wiLFxyXG4gICAgZW46IFwiTWFrZSB5b3VyIGRhdGEgc2hpbmUgd2l0aCBiZWF1dGlmdWwgZGVzaWduc1wiLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoZXJvX3NlY3Rpb24gPSB7XHJcbiAgdGl0bGU6IFwiQmVhdXRpZnVsIERhc2hib2FyZHNcIixcclxuICBvcHRpb24xOiB7IGZyOiBcIkRlc2lnbnMgZXhjZXB0aW9ubmVsc1wiLCBlbjogXCJFeGNlcHRpb25hbCBkZXNpZ25zXCIgfSxcclxuICBvcHRpb24yOiB7IGZyOiBcIkdyYXBoZXMgcGFyYW3DqXRyYWJsZXNcIiwgZW46IFwiQ3VzdG9tYWJsZSBncmFwaFwiIH0sXHJcbiAgb3B0aW9uMzoge1xyXG4gICAgZnI6IFwiMzAgY3JlZGl0cyDDoCB1dGlsaXNlciBncmF0dWl0ZW1lbnQqXCIsXHJcbiAgICBlbjogXCIzMCBjcmVkaXRzIGZyZWUgdG8gdXNlKlwiLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBidXR0b24gPSB7XHJcbiAgZG9jOiB7IGZyOiBcIkxpcmVcIiwgZW46IFwiUmVhZFwiIH0sXHJcbiAgZXNzYWk6IHsgZnI6IFwiRXNzYXllclwiLCBlbjogXCJUcnlcIiB9LFxyXG4gIHNvdXNjOiB7IGZyOiBcIlNvdXNjcmlyZVwiLCBlbjogXCJTdWJzY3JpYmVcIiB9LFxyXG4gIHNoYXJlOiB7IGZyOiBcIlBhcnRhZ2VyXCIsIGVuOiBcIlNoYXJlXCIgfSxcclxuICBhY2NvdW50OiB7IGZyOiBcIlNlIGNvbm5lY3RlciBhdmVjIGdvb2dsZVwiLCBlbjogXCJDb25uZWN0IHdpdGggZ29vZ2xlXCIgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvb2x0aXAgPSB7XHJcbiAgZG9jOiB7IGZyOiBcIkxpcmUgbGEgZG9jdW1lbnRhdGlvblwiLCBlbjogXCJSZWFkIHRoZSBkb2N1bWVudGF0aW9uXCIgfSxcclxuICBlc3NhaTogeyBmcjogXCJVdGlsaXNlciBsZXMgY3LDqWRpdHNcIiwgZW46IFwiVXNlIGNyZWRpdHNcIiB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXV0cmVUZXh0ID0ge1xyXG4gIGFkZDogeyBmcjogXCJBam91dMOpIGxlIFwiLCBlbjogXCJBZGQgb24gXCIgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY2FwID0ge1xyXG4gIGNyZWRpdDogeyBmcjogXCJjcsOpZGl0c1wiLCBlbjogXCJjcmVkaXRzXCIgfSxcclxuICBzdWJzYzogeyBmcjogXCJzb3VzY3JpcHRpb25zXCIsIGVuOiBcInN1YnNjcmlwdGlvbnNcIiB9LFxyXG59XHJcbi8ve2ZyOlwiXCIsZW46XCJcIn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFydHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogeyBmcjogXCJHcmFwaGlxdWUgZW4gZW50b25ub2lyXCIsIGVuOiBcIkZ1bm5lbCBjaGFydFwiIH0sXHJcbiAgICBsaW5rX2ltYWdlOiBcIi9pbWFnZXMvQmVhdXRpZnVsLVNWRy1GdW5uZWwucG5nXCIsXHJcbiAgICBkZXNjOiB7XHJcbiAgICAgIGZyOiBcIkxlIGdyYXBoaXF1ZSBlbiBlbnRvbm5vaXIgdm91cyBhaWRlIMOgIHZvaXIgcmFwaWRlbWVudCBvw7kgZXhpc3RlbnQgbGVzIHRhdXggZCdhYmFuZG9uIGV0IGxlcyB0YXV4IGRlIGNvbnZlcnNpb24gZ2xvYmF1eCBkYW5zIHZvdHJlIHR1bm5lbC5cIixcclxuICAgICAgZW46IFwiRnVubmVsIHZpc3VhbGl6YXRpb25zIGhlbHAgeW91IHF1aWNrbHkgc2VlIHdoZXJlIGRyb3Atb2ZmIHJhdGVzIGFuZCBvdmVyYWxsIGNvbnZlcnNpb24gcmF0ZXMgaW4geW91ciBzdGVwcGVkIHByb2Nlc3MgZXhpc3QuXCIsXHJcbiAgICB9LFxyXG4gICAgYWRkZWRBdDogXCIyMDIyLTAxLTIzXCIsXHJcbiAgICBsaW5rX3BhZ2U6IFwiL1wiLFxyXG4gICAgdml6VG9vbDogXCJEYXRhIFN0dWRpb1wiLFxyXG4gICAgY2hhcnRDb21wb25lbnQ6IFwiRnVubmVsQ2hhcnQxXCIsXHJcbiAgICBzb3VyY2U6IHtcclxuICAgICAgY3JlZGl0czogW10sXHJcbiAgICB9LFxyXG4gICAgZGF0YTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWxzOiBbXCJJbXByZXNzaW9uc1wiXSxcclxuICAgICAgICBlZmZlY3RpZjogWzEyMDAwXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsczogW1wiQWRkIFRvIENhcnRcIl0sXHJcbiAgICAgICAgZWZmZWN0aWY6IFs1NzAwXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsczogW1wiQnV5XCJdLFxyXG4gICAgICAgIGVmZmVjdGlmOiBbMzYwXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VDbGlja0F3YXlcIlxyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vRHJvcGRvd25cIlxyXG5cclxuY29uc3QgU3ZnID0gc3R5bGVkLnN2Z2BcclxuICB3aWR0aDogMS4ycmVtO1xyXG4gIGhlaWdodDogMS4ycmVtO1xyXG4gIGZpbGw6IHZhcigtLXRleHQyKTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9uTGFuZyA9ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICBsZXQgeyBvcGVuLCBzZXRPcGVuLCByZWZDb250cm9sZXIsIHJlZk9iamVjdCB9ID0gdXNlQ2xpY2tBd2F5KGZhbHNlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY2hhbmdlciBsYSBsYW5ndWVcIlxyXG4gICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImxhbmdcIlxyXG4gICAgICAgICAgcmVmPXtyZWZDb250cm9sZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN2Z1xyXG4gICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtLTFcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwibTEyLjg3IDE1LjA3LTIuNTQtMi41MS4wMy0uMDNjMS43NC0xLjk0IDIuOTgtNC4xNyAzLjcxLTYuNTNIMTdWNGgtN1YySDh2MkgxdjEuOTloMTEuMTdDMTEuNSA3LjkyIDEwLjQ0IDkuNzUgOSAxMS4zNSA4LjA3IDEwLjMyIDcuMyA5LjE5IDYuNjkgOGgtMmMuNzMgMS42MyAxLjczIDMuMTcgMi45OCA0LjU2bC01LjA5IDUuMDJMNCAxOWw1LTUgMy4xMSAzLjExLjc2LTIuMDR6TTE4LjUgMTBoLTJMMTIgMjJoMmwxLjEyLTNoNC43NUwyMSAyMmgybC00LjUtMTJ6bS0yLjYyIDcgMS42Mi00LjMzTDE5LjEyIDE3aC0zLjI0elwiPjwvcGF0aD5cclxuICAgICAgICAgIDwvU3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHshb3BlbiA/IG51bGwgOiAoXHJcbiAgICAgICAgICA8RHJvcGRvd24gcmVmT2JqZWN0PXtyZWZPYmplY3R9IHNldE9wZW49e3NldE9wZW59IG9wZW49e29wZW59IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkxhbmdcclxuIiwiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyB0b2dnbGVCdXR0b24gfSBmcm9tIFwiLi4vLi4vaGVscGVycy90b2dnbGVBbGxCdXR0b25cIlxyXG5cclxuY29uc3QgU3ZnID0gc3R5bGVkLnN2Z2BcclxuICB3aWR0aDogMS4ycmVtO1xyXG4gIGhlaWdodDogMS4ycmVtO1xyXG4gIGZpbGw6IHZhcigtLXRleHQyKTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9uTGlnaHQgPSAoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBzdGF0dXNEYXJrLFxyXG4gIHNldFN0YXR1c0RhcmssXHJcbn06IHtcclxuICBjbGFzc05hbWU6IHN0cmluZ1xyXG4gIHN0YXR1c0Rhcms6IHN0cmluZ1xyXG4gIHNldFN0YXR1c0Rhcms6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgYXJpYS1sYWJlbD1cIm1ldHRyZSBsZSBsaWd0aCBtb2RlXCJcclxuICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBvbkNsaWNrPXtlID0+IHRvZ2dsZUJ1dHRvbihlKSEoc2V0U3RhdHVzRGFyayl9XHJcbiAgICAgIGlkPVwidG9nZ2xlQnV0dG9uTGlnaHRcIlxyXG4gICAgICBkYXRhLXRvZ2dsZT17c3RhdHVzRGFyayAhPT0gXCJ0cnVlXCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIn1cclxuICAgID5cclxuICAgICAge3N0YXR1c0RhcmsgIT09IFwidHJ1ZVwiICYmIChcclxuICAgICAgICA8U3ZnXHJcbiAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtLTFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNOS4zNyA1LjUxYy0uMTguNjQtLjI3IDEuMzEtLjI3IDEuOTkgMCA0LjA4IDMuMzIgNy40IDcuNCA3LjQuNjggMCAxLjM1LS4wOSAxLjk5LS4yN0MxNy40NSAxNy4xOSAxNC45MyAxOSAxMiAxOWMtMy44NiAwLTctMy4xNC03LTcgMC0yLjkzIDEuODEtNS40NSA0LjM3LTYuNDl6TTEyIDNjLTQuOTcgMC05IDQuMDMtOSA5czQuMDMgOSA5IDkgOS00LjAzIDktOWMwLS40Ni0uMDQtLjkyLS4xLTEuMzYtLjk4IDEuMzctMi41OCAyLjI2LTQuNCAyLjI2LTIuOTggMC01LjQtMi40Mi01LjQtNS40IDAtMS44MS44OS0zLjQyIDIuMjYtNC40LS40NC0uMDYtLjktLjEtMS4zNi0uMXpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9Tdmc+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdGF0dXNEYXJrID09PSBcInRydWVcIiAmJiAoXHJcbiAgICAgICAgPFN2Z1xyXG4gICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibS0xXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTEyIDljMS42NSAwIDMgMS4zNSAzIDNzLTEuMzUgMy0zIDMtMy0xLjM1LTMtMyAxLjM1LTMgMy0zbTAtMmMtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNSA1LTIuMjQgNS01LTIuMjQtNS01LTV6TTIgMTNoMmMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMUgyYy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxem0xOCAwaDJjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFoLTJjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDF6TTExIDJ2MmMwIC41NS40NSAxIDEgMXMxLS40NSAxLTFWMmMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXptMCAxOHYyYzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMXYtMmMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXpNNS45OSA0LjU4Yy0uMzktLjM5LTEuMDMtLjM5LTEuNDEgMC0uMzkuMzktLjM5IDEuMDMgMCAxLjQxbDEuMDYgMS4wNmMuMzkuMzkgMS4wMy4zOSAxLjQxIDBzLjM5LTEuMDMgMC0xLjQxTDUuOTkgNC41OHptMTIuMzcgMTIuMzdjLS4zOS0uMzktMS4wMy0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMyAwIDEuNDFsMS4wNiAxLjA2Yy4zOS4zOSAxLjAzLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDMgMC0xLjQxbC0xLjA2LTEuMDZ6bTEuMDYtMTAuOTZjLjM5LS4zOS4zOS0xLjAzIDAtMS40MS0uMzktLjM5LTEuMDMtLjM5LTEuNDEgMGwtMS4wNiAxLjA2Yy0uMzkuMzktLjM5IDEuMDMgMCAxLjQxczEuMDMuMzkgMS40MSAwbDEuMDYtMS4wNnpNNy4wNSAxOC4zNmMuMzktLjM5LjM5LTEuMDMgMC0xLjQxLS4zOS0uMzktMS4wMy0uMzktMS40MSAwbC0xLjA2IDEuMDZjLS4zOS4zOS0uMzkgMS4wMyAwIDEuNDFzMS4wMy4zOSAxLjQxIDBsMS4wNi0xLjA2elwiPjwvcGF0aD5cclxuICAgICAgICA8L1N2Zz5cclxuICAgICAgKX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uTGlnaHRcclxuIiwiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuY29uc3QgTWVudU1vYldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XHJcbiAgICAuYnRuLW1vYi1uYXYge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAubWVudV9idXJnZXIge1xyXG4gICAgd2lkdGg6IDEuNHJlbTtcclxuICAgIGhlaWdodDogMi41cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+XHJcbiAgICAgIHByb3BzLnRoZW1lLm5iTGlnbmVzID09PSAzID8gXCJ2YXIoLS10ZXh0MSlcIiA6IFwidHJhbnNwYXJlbnRcIn07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tc3BlZWQpIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVfYnVyZ2VyOjpiZWZvcmUsXHJcbiAgLm1lbnVfYnVyZ2VyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEuNHJlbTtcclxuICAgIGhlaWdodDogMi41cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0MSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tc3BlZWQpIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVfYnVyZ2VyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgIHByb3BzLnRoZW1lLm5iTGlnbmVzID09PSAzID8gXCJ0cmFuc2xhdGVZKC02cHgpXCIgOiBcInRyYW5zbGF0ZVkoLTRweClcIn07XHJcbiAgfVxyXG4gIC5tZW51X2J1cmdlcjo6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgIHByb3BzLnRoZW1lLm5iTGlnbmVzID09PSAzID8gXCJ0cmFuc2xhdGVZKDZweClcIiA6IFwidHJhbnNsYXRlWSg0cHgpXCJ9O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1tb2ItbmF2Lm9wZW4gLm1lbnVfYnVyZ2VyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1tb2ItbmF2Lm9wZW4gLm1lbnVfYnVyZ2VyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICAuYnRuLW1vYi1uYXYub3BlbiAubWVudV9idXJnZXI6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBCdXR0b25Nb2JNZW51ID0gKHtcclxuICBuYkxpZ25lcyxcclxuICBvcGVuTWVudSxcclxuICBzZXRPcGVuTWVudSxcclxufToge1xyXG4gIG5iTGlnbmVzPzogMiB8IDNcclxuICBzZWxlY3Rvck1lbnVNb2I/OiBzdHJpbmdcclxuICBvcGVuTWVudTogYm9vbGVhblxyXG4gIHNldE9wZW5NZW51OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj5cclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWVudU1vYldyYXBwZXIgdGhlbWU9e3sgbmJMaWduZXMgfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLW1vYi1uYXYgbS0zIHB0LTMgcGItMyBtci00ICR7b3Blbk1lbnUgPyBcIm9wZW5cIiA6IFwiXCJ9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRPcGVuTWVudShwcmV2ID0+ICFwcmV2KVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLTEgbWVudV9idXJnZXJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9NZW51TW9iV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuQnV0dG9uTW9iTWVudS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbmJMaWduZXM6IDMsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbk1vYk1lbnVcclxuIiwiaW1wb3J0IHsgYW5pbWF0ZWQsIHVzZVRyYW5zaXRpb24sIGNvbmZpZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIlxyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFJlYWN0Q2hpbGQsIFJlZk9iamVjdCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5jb25zdCBEaXYgPSBzdHlsZWQoYW5pbWF0ZWQuZGl2KWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzLjVyZW07XHJcbiAgd2lkdGg6IDhyZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UzKTtcclxuICBwYWRkaW5nOiAwcmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy9ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCB2YXIoLS10ZXh0Mik7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc3VyZmFjZTQpO1xyXG5gXHJcbmNvbnN0IERyb3BEb3duSXRlbSA9IHN0eWxlZC5hYFxyXG4gIGhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnRoZW1lLmFjdGl2ID09PSB0cnVlID8gXCJ2YXIoLS1icmFuZClcIiA6IG51bGwpfTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXNwZWVkKTtcclxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2U0KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2U0KTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IERyb3Bkb3duID0gKHtcclxuICByZWZPYmplY3QsXHJcbiAgc2V0T3BlbixcclxuICBvcGVuLFxyXG59OiB7XHJcbiAgcmVmT2JqZWN0OiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+XHJcbiAgc2V0T3BlbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+XHJcbiAgb3BlbjogYm9vbGVhblxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGxvY2FsZSB9ID0gcm91dGVyXHJcbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKG9wZW4sIHtcclxuICAgIGZyb206IHsgb3BhY2l0eTogXCIwXCIgfSxcclxuICAgIGVudGVyOiB7IG9wYWNpdHk6IFwiMVwiIH0sXHJcbiAgICBsZWF2ZTogeyBvcGFjaXR5OiBcIjBcIiB9LFxyXG4gICAgY29uZmlnOiBjb25maWcuc3RpZmYsXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0cmFuc2l0aW9ucyhcclxuICAgICAgICAoc3R5bGVzLCBpdGVtKSA9PlxyXG4gICAgICAgICAgaXRlbSAmJiAoXHJcbiAgICAgICAgICAgIDxEaXYgc3R5bGU9e3N0eWxlc30gY2xhc3NOYW1lPVwiYnItNFwiIHJlZj17cmVmT2JqZWN0fT5cclxuICAgICAgICAgICAgICA8RHJvcERvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB0aGVtZT17eyBhY3RpdjogbG9jYWxlID09PSBcImVuXCIgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2gocm91dGVyLmFzUGF0aCwgcm91dGVyLmFzUGF0aCwgeyBsb2NhbGU6IFwiZW5cIiB9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFbmdsaXNoXHJcbiAgICAgICAgICAgICAgPC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3BEb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e3sgYWN0aXY6IGxvY2FsZSA9PT0gXCJmclwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHJvdXRlci5hc1BhdGgsIHJvdXRlci5hc1BhdGgsIHsgbG9jYWxlOiBcImZyXCIgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRnJhbsOnYWlzXHJcbiAgICAgICAgICAgICAgPC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuaW1wb3J0IHsgYW5pbWF0ZWQsIHVzZVRyYW5zaXRpb24sIGNvbmZpZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IGZyIGZyb20gXCIuLi8uLi9sb2NhbGVzL2ZyXCJcclxuaW1wb3J0IGVuIGZyb20gXCIuLi8uLi9sb2NhbGVzL2VuXCJcclxuaW1wb3J0IHsgdXNlRGFya01vZGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRGFya01vZGVcIlxyXG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQ2xpY2tBd2F5XCJcclxuaW1wb3J0IEJ1dHRvbkxhbmcgZnJvbSBcIi4vQnV0dG9uTGFuZ1wiXHJcbmltcG9ydCBCdXR0b25MaWdodCBmcm9tIFwiLi9CdXR0b25MaWdodFwiXHJcbmltcG9ydCBCdXR0b25Nb2JNZW51IGZyb20gXCIuL0J1dHRvbk1vYk1lbnVcIlxyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICAvL21pbi1oZWlnaHQ6IDRyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xyXG4gICAgJiB7XHJcbiAgICAgIGhlaWdodDogNHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IHZhcigtLXRleHQyKTtcclxuICB6LWluZGV4OiAxMDA7XHJcbmBcclxuY29uc3QgTG9nb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYFxyXG5jb25zdCBDb250YWluZXJOYXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbmBcclxuY29uc3QgTWVudSA9IHN0eWxlZC51bGBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5gXHJcbmNvbnN0IE1lbnVNb2JXcmFwcGVyID0gc3R5bGVkKGFuaW1hdGVkLmRpdilgXHJcbiAgei1pbmRleDogLTE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UxKTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcclxuICAgICYge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBNZW51TW9iID0gc3R5bGVkLmRpdmBcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgdWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBNZW51TW9iTmF2ID0gc3R5bGVkLnVsYFxyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbmBcclxuXHJcbmNvbnN0IExpbmtQYWdlID0gc3R5bGVkLmxpYFxyXG4gIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IChwcm9wcy50aGVtZS5hY3RpdmUgPyBcIjYwMFwiIDogbnVsbCl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLnRoZW1lLmFjdGl2ZSA/IFwidmFyKC0tc3VyZmFjZTMpXCIgOiBcInRyYW5zcGFyZW50XCJ9O1xyXG4gIGxldHRlci1zcGFjaW5nOiAke3Byb3BzID0+IChwcm9wcy50aGVtZS5hY3RpdmUgPyBcIjEuOHB4XCIgOiBudWxsKX07XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XHJcbiAgICAmJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMudGhlbWUuYWN0aXZlID8gXCIxMDAlXCIgOiBcIjAlXCIpfTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLWJyYW5kKTtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgJiY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tYnJhbmQpO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBDb250YWluZXJJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgbG9jYWxlIH0gPSByb3V0ZXJcclxuICBjb25zdCB0ID0gbG9jYWxlID09PSBcImZyXCIgPyBmciA6IGVuXHJcblxyXG4gIGxldCBbc3RhdHVzRGFyaywgc2V0U3RhdHVzRGFya10gPSB1c2VEYXJrTW9kZShcIlwiLCBcInN0YXR1c0RhcmtcIilcclxuICBsZXQgeyByZWZDb250cm9sZXIsIG9wZW4sIHNldE9wZW4sIHJlZk9iamVjdCB9ID0gdXNlQ2xpY2tBd2F5KGZhbHNlKVxyXG5cclxuICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24ob3Blbiwge1xyXG4gICAgZnJvbTogeyB0b3A6IFwiLTMwcmVtXCIgfSxcclxuICAgIGVudGVyOiB7IHRvcDogXCI0cmVtXCIgfSxcclxuICAgIGxlYXZlOiB7IHRvcDogXCItMzByZW1cIiB9LFxyXG4gICAgY29uZmlnOiBjb25maWcuc3RpZmYsXHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocm91dGVyLnBhdGhuYW1lKVxyXG4gIH0sIFtyb3V0ZXJdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxDb250YWluZXJOYXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLW5hdlwiPlxyXG4gICAgICAgICAgPExvZ29XcmFwcGVyIGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXJJbWFnZT5MT0dPPC9Db250YWluZXJJbWFnZT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTG9nb1dyYXBwZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICA8bmF2XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm5hdmlnYXRpb24gcHJpbmNpcGFsZVwiXHJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnUgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgcGItMiBuYXZMaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QubmF2YmFyLmxpbmsxfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rUGFnZT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIHBiLTIgbmF2TGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcIi9wcmljaW5nXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QubmF2YmFyLmxpbmsyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rUGFnZT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmtQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtMiBwYi0yIG5hdkxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCIvYWJvdXRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dC5uYXZiYXIubGluazN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbmtQYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgcGItMiBuYXZMaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiByb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKFwiL2NvbnRhY3RcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dC5uYXZiYXIubGluazR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbmtQYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UtbmF2XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvbkxhbmcgY2xhc3NOYW1lPVwibS0zIGJyLTQgYnV0dG9uIHAtMVwiIC8+XHJcbiAgICAgICAgICA8QnV0dG9uTGlnaHRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0zIGJyLTQgYnV0dG9uIHAtMVwiXHJcbiAgICAgICAgICAgIHN0YXR1c0Rhcms9e3N0YXR1c0Rhcmt9XHJcbiAgICAgICAgICAgIHNldFN0YXR1c0Rhcms9e3NldFN0YXR1c0Rhcmt9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiByZWY9e3JlZkNvbnRyb2xlcn0+XHJcbiAgICAgICAgICAgIDxCdXR0b25Nb2JNZW51IG5iTGlnbmVzPXsyfSBvcGVuTWVudT17b3Blbn0gc2V0T3Blbk1lbnU9e3NldE9wZW59IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lck5hdj5cclxuICAgICAgICB7dHJhbnNpdGlvbnMoXHJcbiAgICAgICAgICAoc3R5bGVzLCBpdGVtKSA9PlxyXG4gICAgICAgICAgICBpdGVtICYmIChcclxuICAgICAgICAgICAgICA8TWVudU1vYldyYXBwZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveC1zaGFkb3ctMVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWZPYmplY3R9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVNb2IgY2xhc3NOYW1lPVwiY29udGFpbmVyLW5hdk1vYlwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudU1vYk5hdiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtMiBwYi0yIG5hdkxpbmsgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibS0zXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0Lm5hdmJhci5saW5rMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rUGFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcmljaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtMiBwYi0yIG5hdkxpbmsgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcIi9wcmljaW5nXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtLTNcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QubmF2YmFyLmxpbmsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtQYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgcGItMiBuYXZMaW5rIG10LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCIvYWJvdXRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm0tM1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dC5uYXZiYXIubGluazN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlua1BhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIHBiLTIgbmF2TGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcIi9jb250YWN0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtLTNcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QubmF2YmFyLmxpbms0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtQYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51TW9iTmF2PlxyXG4gICAgICAgICAgICAgICAgPC9NZW51TW9iPlxyXG4gICAgICAgICAgICAgIDwvTWVudU1vYldyYXBwZXI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyXHJcbiIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgY29uc3QgZGFya01vZGVGdW5jID0gKHN0YXR1c0Rhcms6IHN0cmluZykgPT5cclxuICBmdW5jdGlvbiBkYXJrTW9kZUZ1bmMoc2V0U3RhdHVzRGFyazogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj4pIHtcclxuICAgIGxldCBkb2MgPSBkb2N1bWVudC5maXJzdEVsZW1lbnRDaGlsZCFcclxuICAgIGlmIChzdGF0dXNEYXJrID09PSBcInRydWVcIikge1xyXG4gICAgICBkb2Muc2V0QXR0cmlidXRlKFwiY29sb3Itc2NoZW1lXCIsIFwibGlnaHRcIilcclxuICAgICAgc2V0U3RhdHVzRGFyayhcImZhbHNlXCIpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdHVzRGFya1wiLCBcImZhbHNlXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2Muc2V0QXR0cmlidXRlKFwiY29sb3Itc2NoZW1lXCIsIFwiZGFya1wiKVxyXG4gICAgICBzZXRTdGF0dXNEYXJrKFwidHJ1ZVwiKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXR1c0RhcmtcIiwgXCJ0cnVlXCIpXHJcbiAgICB9XHJcbiAgfVxyXG4iLCJpbXBvcnQgeyBNb3VzZUV2ZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgZGFya01vZGVGdW5jIH0gZnJvbSBcIi4vZGFya01vZGVGdW5jXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCdXR0b24oZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBpZiAoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQpIHtcclxuICAgIGxldCB0b2dnbGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50b2dnbGVcclxuICAgIGlmICh0b2dnbGUgPT09IFwibGlnaHRcIiB8fCB0b2dnbGUgPT09IFwiZGFya1wiKSB7XHJcbiAgICAgIGxldCBzdGF0dXNEYXJrID0gdG9nZ2xlID09PSBcImxpZ2h0XCIgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxyXG4gICAgICByZXR1cm4gZGFya01vZGVGdW5jKHN0YXR1c0RhcmspXHJcbiAgICB9XHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9nZ2xlID09PSBcImxhbmdcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50b2dnbGUsIFwieWVzXCIpXHJcbiAgICB9XHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9nZ2xlID09PSBcInNlYXJjaFwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvZ2dsZSwgXCJ5ZXNcIilcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDbGlja0F3YXkgPSAoaW5pdGlhbFZhbDogYm9vbGVhbikgPT4ge1xyXG4gIGNvbnN0IHJlZkNvbnRyb2xlciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCAmIEhUTUxCdXR0b25FbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IHJlZk9iamVjdCA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcclxuXHJcbiAgbGV0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGluaXRpYWxWYWwpXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHJlZkNvbnRyb2xlci5jdXJyZW50ICYmXHJcbiAgICAgICFyZWZDb250cm9sZXIuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkgJiZcclxuICAgICAgcmVmT2JqZWN0LmN1cnJlbnQgJiZcclxuICAgICAgIXJlZk9iamVjdC5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKVxyXG4gICAgKSB7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICBpZiAob3Blbikge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlLCB0cnVlKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5UHJlc3MsIHRydWUpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSwgdHJ1ZSlcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5UHJlc3MsIHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW29wZW5dKVxyXG5cclxuICByZXR1cm4geyBvcGVuLCBzZXRPcGVuLCByZWZDb250cm9sZXIsIHJlZk9iamVjdCB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEYXJrTW9kZShcclxuICBkZWZhdWx0VmFsOiBzdHJpbmcsXHJcbiAga2V5OiBzdHJpbmdcclxuKTogW3N0cmluZywgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj5dIHtcclxuICBjb25zdCBbc3RhdHVzRGFyaywgc2V0U3RhdHVzRGFya10gPSB1c2VTdGF0ZShkZWZhdWx0VmFsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQhXHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWUpXCIpLm1lZGlhICE9PSBcIm5vdCBhbGxcIikge1xyXG4gICAgICBjb25zdCBkYXJrTW9kZU1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShcclxuICAgICAgICBcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIlxyXG4gICAgICApXHJcbiAgICAgIGlmIChcclxuICAgICAgICBkYXJrTW9kZU1lZGlhUXVlcnkubWF0Y2hlcyAmJlxyXG4gICAgICAgIGRhcmtNb2RlTWVkaWFRdWVyeS5tZWRpYSA9PT0gXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2V0U3RhdHVzRGFyayhcInRydWVcIilcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXR1c0RhcmtcIiwgXCJ0cnVlXCIpXHJcbiAgICAgIH1cclxuICAgICAgLy9FY291dGVyIGxlcyDDqXbDqG5lbWVudHNcclxuICAgICAgZGFya01vZGVNZWRpYVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGFya01vZGVPbiA9IGUubWF0Y2hlc1xyXG4gICAgICAgIGlmIChkYXJrTW9kZU9uKSB7XHJcbiAgICAgICAgICBkb2Muc2V0QXR0cmlidXRlKFwiY29sb3Itc2NoZW1lXCIsIFwiZGFya1wiKVxyXG4gICAgICAgICAgc2V0U3RhdHVzRGFyayhcInRydWVcIilcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdHVzRGFya1wiLCBcInRydWVcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZG9jLnNldEF0dHJpYnV0ZShcImNvbG9yLXNjaGVtZVwiLCBcImxpZ2h0XCIpXHJcbiAgICAgICAgICBzZXRTdGF0dXNEYXJrKFwiZmFsc2VcIilcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdHVzRGFya1wiLCBcImZhbHNlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxyXG4gICAgaWYgKHZhbCAhPT0gbnVsbCkge1xyXG4gICAgICBzZXRTdGF0dXNEYXJrKHZhbClcclxuICAgIH1cclxuICB9LCBba2V5XSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmZpcnN0RWxlbWVudENoaWxkIVxyXG4gICAgaWYgKHN0YXR1c0RhcmsgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgIGRvYy5zZXRBdHRyaWJ1dGUoXCJjb2xvci1zY2hlbWVcIiwgXCJkYXJrXCIpXHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0RhcmsgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICBkb2Muc2V0QXR0cmlidXRlKFwiY29sb3Itc2NoZW1lXCIsIFwibGlnaHRcIilcclxuICAgIH1cclxuICB9LCBbc3RhdHVzRGFya10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzdGF0dXNEYXJrKVxyXG4gIH0sIFtrZXksIHN0YXR1c0RhcmtdKVxyXG5cclxuICByZXR1cm4gW3N0YXR1c0RhcmssIHNldFN0YXR1c0RhcmtdXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBoZXJvX3NlY3Rpb24sXHJcbiAgbmF2QmFyLFxyXG4gIHNlbyxcclxuICBjaGFydHMsXHJcbiAgYnV0dG9uLFxyXG4gIHRvb2x0aXAsXHJcbiAgYXV0cmVUZXh0LFxyXG4gIHJlY2FwLFxyXG59IGZyb20gXCIuLi8uLi9EYXRhL2NvbW1vblwiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBidXR0b246IHtcclxuICAgIGRvYzogYnV0dG9uLmRvY1tcImVuXCJdLFxyXG4gICAgZXNzYWk6IGJ1dHRvbi5lc3NhaVtcImVuXCJdLFxyXG4gICAgc291c2M6IGJ1dHRvbi5zb3VzY1tcImVuXCJdLFxyXG4gICAgYWNjb3VudDogYnV0dG9uLmFjY291bnRbXCJlblwiXSxcclxuICAgIHNoYXJlOiBidXR0b24uc2hhcmVbXCJlblwiXSxcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGRvYzogdG9vbHRpcC5kb2NbXCJlblwiXSxcclxuICAgIGVzc2FpOiB0b29sdGlwLmVzc2FpW1wiZW5cIl0sXHJcbiAgfSxcclxuICBhdXRyZVRleHQ6IHtcclxuICAgIGFkZDogYXV0cmVUZXh0LmFkZFtcImVuXCJdLFxyXG4gIH0sXHJcbiAgbmF2YmFyOiB7XHJcbiAgICBsaW5rMTogbmF2QmFyLmxpbmsxW1wiZW5cIl0sXHJcbiAgICBsaW5rMjogbmF2QmFyLmxpbmsyW1wiZW5cIl0sXHJcbiAgICBsaW5rMzogbmF2QmFyLmxpbmszW1wiZW5cIl0sXHJcbiAgICBsaW5rNDogbmF2QmFyLmxpbms0W1wiZW5cIl0sXHJcbiAgfSxcclxuICByZWNhcDoge1xyXG4gICAgY3JlZGl0OiByZWNhcC5jcmVkaXRbXCJlblwiXSxcclxuICAgIHN1YnNjOiByZWNhcC5zdWJzY1tcImVuXCJdLFxyXG4gIH0sXHJcbiAgc2VvOiB7XHJcbiAgICBuYW1lOiBzZW8ubmFtZSxcclxuICAgIHRpdGxlOiBzZW8udGl0bGVbXCJlblwiXSxcclxuICB9LFxyXG4gIGhlcm9fc2VjdGlvbjoge1xyXG4gICAgdGl0bGU6IGhlcm9fc2VjdGlvbi50aXRsZSxcclxuICAgIG9wdGlvbjE6IGhlcm9fc2VjdGlvbi5vcHRpb24xW1wiZW5cIl0sXHJcbiAgICBvcHRpb24yOiBoZXJvX3NlY3Rpb24ub3B0aW9uMltcImVuXCJdLFxyXG4gICAgb3B0aW9uMzogaGVyb19zZWN0aW9uLm9wdGlvbjNbXCJlblwiXSxcclxuICB9LFxyXG4gIGNoYXJ0czogY2hhcnRzLm1hcCh2YWwgPT4ge1xyXG4gICAgcmV0dXJuIHsgLi4udmFsLCBuYW1lOiB2YWwubmFtZVtcImVuXCJdLCBkZXNjOiB2YWwuZGVzY1tcImVuXCJdIH1cclxuICB9KSxcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGhlcm9fc2VjdGlvbixcclxuICBuYXZCYXIsXHJcbiAgc2VvLFxyXG4gIGNoYXJ0cyxcclxuICBidXR0b24sXHJcbiAgdG9vbHRpcCxcclxuICBhdXRyZVRleHQsXHJcbiAgcmVjYXAsXHJcbn0gZnJvbSBcIi4uLy4uL0RhdGEvY29tbW9uXCJcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgZG9jOiBidXR0b24uZG9jW1wiZnJcIl0sXHJcbiAgICBlc3NhaTogYnV0dG9uLmVzc2FpW1wiZnJcIl0sXHJcbiAgICBzb3VzYzogYnV0dG9uLnNvdXNjW1wiZnJcIl0sXHJcbiAgICBhY2NvdW50OiBidXR0b24uYWNjb3VudFtcImZyXCJdLFxyXG4gICAgc2hhcmU6IGJ1dHRvbi5zaGFyZVtcImZyXCJdLFxyXG4gIH0sXHJcbiAgdG9vbHRpcDoge1xyXG4gICAgZG9jOiB0b29sdGlwLmRvY1tcImZyXCJdLFxyXG4gICAgZXNzYWk6IHRvb2x0aXAuZXNzYWlbXCJmclwiXSxcclxuICB9LFxyXG4gIGF1dHJlVGV4dDoge1xyXG4gICAgYWRkOiBhdXRyZVRleHQuYWRkW1wiZnJcIl0sXHJcbiAgfSxcclxuICBuYXZiYXI6IHtcclxuICAgIGxpbmsxOiBuYXZCYXIubGluazFbXCJmclwiXSxcclxuICAgIGxpbmsyOiBuYXZCYXIubGluazJbXCJmclwiXSxcclxuICAgIGxpbmszOiBuYXZCYXIubGluazNbXCJmclwiXSxcclxuICAgIGxpbms0OiBuYXZCYXIubGluazRbXCJmclwiXSxcclxuICB9LFxyXG4gIHJlY2FwOiB7XHJcbiAgICBjcmVkaXQ6IHJlY2FwLmNyZWRpdFtcImZyXCJdLFxyXG4gICAgc3Vic2M6IHJlY2FwLnN1YnNjW1wiZnJcIl0sXHJcbiAgfSxcclxuICBzZW86IHtcclxuICAgIG5hbWU6IHNlby5uYW1lLFxyXG4gICAgdGl0bGU6IHNlby50aXRsZVtcImZyXCJdLFxyXG4gIH0sXHJcbiAgaGVyb19zZWN0aW9uOiB7XHJcbiAgICB0aXRsZTogaGVyb19zZWN0aW9uLnRpdGxlLFxyXG4gICAgb3B0aW9uMTogaGVyb19zZWN0aW9uLm9wdGlvbjFbXCJmclwiXSxcclxuICAgIG9wdGlvbjI6IGhlcm9fc2VjdGlvbi5vcHRpb24yW1wiZnJcIl0sXHJcbiAgICBvcHRpb24zOiBoZXJvX3NlY3Rpb24ub3B0aW9uM1tcImZyXCJdLFxyXG4gIH0sXHJcbiAgY2hhcnRzOiBjaGFydHMubWFwKHZhbCA9PiB7XHJcbiAgICByZXR1cm4geyAuLi52YWwsIG5hbWU6IHZhbC5uYW1lW1wiZnJcIl0sIGRlc2M6IHZhbC5kZXNjW1wiZnJcIl0gfVxyXG4gIH0pLFxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIlxyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2VsZW1lbnRzL05hdmJhclwiXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0NvbnRhaW5lclwiXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9HbG9iYWxTdHlsZVwiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5zY3NzXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt7fX0+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbi8vdmFyaWFibGVzXHJcbmNvbnN0IHJhdGlvTWFyZ2luID0gXCIwLjEyNXJlbVwiXHJcbmNvbnN0IHJhdGlvUGFkZGluZyA9IFwiMC4xMjVyZW1cIlxyXG5jb25zdCByYXRpb0JvcmRlclJhZGl1cyA9IFwiMnB4XCJcclxuY29uc3QgcmF0aW9Cb3JkZXJSYWRpdXNQZXIgPSBcIjI1JVwiXHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4vL21hcmdpblxyXG4ubS0xIHttYXJnaW46IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogMSl9XHJcbi5tLTIge21hcmdpbjogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAyKX1cclxuLm0tMyB7bWFyZ2luOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDMpfVxyXG4ubS00IHttYXJnaW46IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogNCl9XHJcbi5tLTUge21hcmdpbjogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA1KX1cclxuLm0tNiB7bWFyZ2luOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDYpfVxyXG4vL21hcmdpblRvcFxyXG4ubXQtMSB7bWFyZ2luLXRvcDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAxKX1cclxuLm10LTIge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogMil9XHJcbi5tdC0zIHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDMpfVxyXG4ubXQtNCB7bWFyZ2luLXRvcDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA0KX1cclxuLm10LTUge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogNSl9XHJcbi5tdC02IHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDYpfVxyXG4uLW10LTEge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTEpfVxyXG4uLW10LTIge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTIpfVxyXG4uLW10LTMge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTMpfVxyXG4uLW10LTQge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTQpfVxyXG4uLW10LTUge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTUpfVxyXG4uLW10LTYge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTYpfVxyXG4vL21hcmdpbkxlZnRcclxuLm1sLTEge21hcmdpbi1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDEpfVxyXG4ubWwtMiB7bWFyZ2luLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogMil9XHJcbi5tbC0zIHttYXJnaW4tbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAzKX1cclxuLm1sLTQge21hcmdpbi1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDQpfVxyXG4ubWwtNSB7bWFyZ2luLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogNSl9XHJcbi5tbC02IHttYXJnaW4tbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA2KX1cclxuLi1tbC0xIHttYXJnaW4tbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAtMSl9XHJcbi4tbWwtMiB7bWFyZ2luLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTIpfVxyXG4uLW1sLTMge21hcmdpbi1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC0zKX1cclxuLi1tbC00IHttYXJnaW4tbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAtNCl9XHJcbi4tbWwtNSB7bWFyZ2luLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTUpfVxyXG4uLW1sLTYge21hcmdpbi1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC02KX1cclxuLy9tYXJnaW5SaWdodFxyXG4ubXItMSB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDEpfVxyXG4ubXItMiB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDIpfVxyXG4ubXItMyB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDMpfVxyXG4ubXItNCB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDQpfVxyXG4ubXItNSB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDUpfVxyXG4ubXItNiB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDYpfVxyXG4uLW1yLTEge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAtMSl9XHJcbi4tbXItMiB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC0yKX1cclxuLi1tci0zIHttYXJnaW4tcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTMpfVxyXG4uLW1yLTQge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAtNCl9XHJcbi4tbXItNSB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC01KX1cclxuLi1tci02IHttYXJnaW4tcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTYpfVxyXG4vL21hcmdpbkJvdHRvbVxyXG4ubWItMSB7bWFyZ2luLWJvdHRvbTogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAxKX1cclxuLm1iLTIge21hcmdpbi1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogMil9XHJcbi5tYi0zIHttYXJnaW4tYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDMpfVxyXG4ubWItNCB7bWFyZ2luLWJvdHRvbTogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA0KX1cclxuLm1iLTUge21hcmdpbi1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogNSl9XHJcbi5tYi02IHttYXJnaW4tYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDYpfVxyXG4ubWItNyB7bWFyZ2luLWJvdHRvbTogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA3KX1cclxuLm1iLTgge21hcmdpbi1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogOCl9XHJcbi8vcGFkZGluZ1xyXG4ucC0xIHtwYWRkaW5nOiBjYWxjKCR7cmF0aW9QYWRkaW5nfSAqIDIpfVxyXG4ucC0yIHtwYWRkaW5nOiBjYWxjKCR7cmF0aW9QYWRkaW5nfSAqIDQpfVxyXG4ucC0zIHtwYWRkaW5nOiBjYWxjKCR7cmF0aW9QYWRkaW5nfSAqIDYpfVxyXG4ucC00IHtwYWRkaW5nOiBjYWxjKCR7cmF0aW9QYWRkaW5nfSAqIDgpfVxyXG4ucC01IHtwYWRkaW5nOiBjYWxjKCR7cmF0aW9QYWRkaW5nfSAqIDEwKX1cclxuLnAtNiB7cGFkZGluZzogY2FsYygke3JhdGlvUGFkZGluZ30gKiAxMil9XHJcbi8vcGFkZGluZ1RvcFxyXG4ucHQtMSB7cGFkZGluZy10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyKX1cclxuLnB0LTIge3BhZGRpbmctdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogNCl9XHJcbi5wdC0zIHtwYWRkaW5nLXRvcDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDYpfVxyXG4ucHQtNCB7cGFkZGluZy10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiA4KX1cclxuLnB0LTUge3BhZGRpbmctdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMTApfVxyXG4ucHQtNiB7cGFkZGluZy10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAxMil9XHJcbi8vcGFkZGluZ0JvdHRvbVxyXG4ucGItMSB7cGFkZGluZy1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyKX1cclxuLnBiLTIge3BhZGRpbmctYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogNCl9XHJcbi5wYi0zIHtwYWRkaW5nLWJvdHRvbTogY2FsYygke3JhdGlvTWFyZ2lufSAqIDYpfVxyXG4ucGItNCB7cGFkZGluZy1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiA4KX1cclxuLnBiLTUge3BhZGRpbmctYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMTApfVxyXG4ucGItNiB7cGFkZGluZy1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAxMil9XHJcbi8vcGFkZGluZ0xlZnRcclxuLnBsLTEge3BhZGRpbmctbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIpfVxyXG4ucGwtMiB7cGFkZGluZy1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogNCl9XHJcbi5wbC0zIHtwYWRkaW5nLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiA2KX1cclxuLnBsLTQge3BhZGRpbmctbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDgpfVxyXG4ucGwtNSB7cGFkZGluZy1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMTApfVxyXG4ucGwtNiB7cGFkZGluZy1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMTIpfVxyXG4vL3BhZGRpbmdSaWdodFxyXG4ucHItMSB7cGFkZGluZy1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIpfVxyXG4ucHItMiB7cGFkZGluZy1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDQpfVxyXG4ucHItMyB7cGFkZGluZy1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDYpfVxyXG4ucHItNCB7cGFkZGluZy1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDgpfVxyXG4ucHItNSB7cGFkZGluZy1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDEwKX1cclxuLnByLTYge3BhZGRpbmctcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAxMil9XHJcbi8vYm9yZGVyLXJhZGl1cyBweFxyXG4uYnItMSB7Ym9yZGVyLXJhZGl1czogY2FsYygke3JhdGlvQm9yZGVyUmFkaXVzfSoxKX1cclxuLmJyLTIge2JvcmRlci1yYWRpdXM6IGNhbGMoJHtyYXRpb0JvcmRlclJhZGl1c30qMil9XHJcbi5ici0zIHtib3JkZXItcmFkaXVzOiBjYWxjKCR7cmF0aW9Cb3JkZXJSYWRpdXN9KjMpfVxyXG4uYnItNCB7Ym9yZGVyLXJhZGl1czogY2FsYygke3JhdGlvQm9yZGVyUmFkaXVzfSo0KX1cclxuLmJyLTUge2JvcmRlci1yYWRpdXM6IGNhbGMoJHtyYXRpb0JvcmRlclJhZGl1c30qNSl9XHJcbi8vYm9yZGVyLXJhZGl1cyBweFxyXG4uYnItcGVyLTEge2JvcmRlci1yYWRpdXM6IGNhbGMoJHtyYXRpb0JvcmRlclJhZGl1c1Blcn0qMSl9XHJcbi5ici1wZXItMiB7Ym9yZGVyLXJhZGl1czogY2FsYygke3JhdGlvQm9yZGVyUmFkaXVzUGVyfSoyKX1cclxuLmJyLXBlci0zIHtib3JkZXItcmFkaXVzOiBjYWxjKCR7cmF0aW9Cb3JkZXJSYWRpdXNQZXJ9KjMpfVxyXG4uYnItcGVyLTQge2JvcmRlci1yYWRpdXM6IGNhbGMoJHtyYXRpb0JvcmRlclJhZGl1c1Blcn0qNCl9XHJcbi8vYmFja2dyb3VuZFxyXG4uYmFjayB7XHJcbiAgei1pbmRleDogLTEwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5zcGFjZXIge1xyXG4gIFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5sYXllciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2JhY2tncm91bmQvd2F2ZXMuc3ZnXCIpO1xyXG59XHJcbi8vbGluZVxyXG4ubGluZS1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IHZhcigtLXRleHQyKTtcclxufVxyXG4vL3NoYWRvd1xyXG4uYm94LXNoYWRvdy0xIHtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDdweCAtNHB4IHZhcigtLXN1cmZhY2UzKTtcclxufVxyXG4uYm94LXNoYWRvdy0yIHtcclxuICBib3gtc2hhZG93OiAtMXB4IDdweCAxNXB4IDRweCB2YXIoLS10ZXh0Mik7XHJcbn1cclxuLmJveC1zaGFkb3ctMyB7XHJcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTVweCA2cHggdmFyKC0tdGV4dDIpO1xyXG59XHJcbi5ib3gtc2hhZG93LTQge1xyXG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDE1cHggOHB4IHZhcigtLXRleHQyKTtcclxufVxyXG4uYm94LXNoYWRvdy01IHtcclxuICBib3gtc2hhZG93OiAtMXB4IDdweCAxNXB4IDEwcHggdmFyKC0tdGV4dDIpO1xyXG59XHJcbi5idXR0b24ge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXNwZWVkKSBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxufVxyXG4ubmF2TGluayB7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXNwZWVkKSBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLm5hdkxpbms6aG92ZXIge1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZTMpO1xyXG59XHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UzKTtcclxufVxyXG4vL0NvbnRhaW5lclxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvL21pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uY29udGFpbmVyUGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxufVxyXG4uY29udGFpbmVyLW5hdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy9mb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5jb250YWluZXItbmF2TW9iIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc3BhY2UtbmF2IHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uYnRuLW1vYi1uYXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWVudS1kZXNrdG9wIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMTAwJTsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAyNHJlbSkge1xyXG4gIC5jb250YWluZXIsIC5jb250YWluZXJQYWdlLFxyXG4gIC5jb250YWluZXItbmF2LCAuY29udGFpbmVyLW5hdk1vYiB7XHJcbiAgICBtYXgtd2lkdGg6IDI0ZW07XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5idG4tc2VhcmNoLW5hdiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzZyZW0pIHtcclxuICAuY29udGFpbmVyLC5jb250YWluZXJQYWdlLFxyXG4gIC5jb250YWluZXItbmF2LCAuY29udGFpbmVyLW5hdk1vYiB7XHJcbiAgICBtYXgtd2lkdGg6IDM2cmVtO1xyXG4gIH1cclxuICAuYnRuLXNlYXJjaC1uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xyXG4gIC5jb250YWluZXIsLmNvbnRhaW5lclBhZ2UsXHJcbiAgLmNvbnRhaW5lci1uYXYsIC5jb250YWluZXItbmF2TW9iIHtcclxuICAgIG1heC13aWR0aDogNDhyZW07XHJcbiAgfVxyXG4gIC5tZW51LWRlc2t0b3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MHJlbSkge1xyXG4gIC5jb250YWluZXIsLmNvbnRhaW5lclBhZ2UsXHJcbiAgLmNvbnRhaW5lci1uYXYsIC5jb250YWluZXItbmF2TW9iIHtcclxuICAgIG1heC13aWR0aDogNzByZW07XHJcbiAgfVxyXG59XHJcbi52aXN1YWxseS1oaWRkZW4ge1xyXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbiAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDFweDtcclxufVxyXG4uYm9yZGVyLWdyYWRpZW50IHtcclxuICBib3JkZXI6IDEwcHggc29saWQ7XHJcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG59XHJcbi5ib3JkZXItZ3JhZGllbnQtcHVycGxlIHtcclxuICBib3JkZXItaW1hZ2Utc291cmNlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc0M2FkNSwgI2Q1M2E5ZCk7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJuYXZCYXIiLCJsaW5rMSIsImZyIiwiZW4iLCJsaW5rMiIsImxpbmszIiwibGluazQiLCJzZW8iLCJuYW1lIiwidGl0bGUiLCJoZXJvX3NlY3Rpb24iLCJvcHRpb24xIiwib3B0aW9uMiIsIm9wdGlvbjMiLCJidXR0b24iLCJkb2MiLCJlc3NhaSIsInNvdXNjIiwic2hhcmUiLCJhY2NvdW50IiwidG9vbHRpcCIsImF1dHJlVGV4dCIsImFkZCIsInJlY2FwIiwiY3JlZGl0Iiwic3Vic2MiLCJjaGFydHMiLCJpZCIsImxpbmtfaW1hZ2UiLCJkZXNjIiwiYWRkZWRBdCIsImxpbmtfcGFnZSIsInZpelRvb2wiLCJjaGFydENvbXBvbmVudCIsInNvdXJjZSIsImNyZWRpdHMiLCJkYXRhIiwibGFiZWxzIiwiZWZmZWN0aWYiLCJzdHlsZWQiLCJ1c2VDbGlja0F3YXkiLCJEcm9wZG93biIsIlN2ZyIsInN2ZyIsIkJ1dHRvbkxhbmciLCJjbGFzc05hbWUiLCJvcGVuIiwic2V0T3BlbiIsInJlZkNvbnRyb2xlciIsInJlZk9iamVjdCIsInBvc2l0aW9uIiwidG9nZ2xlQnV0dG9uIiwiQnV0dG9uTGlnaHQiLCJzdGF0dXNEYXJrIiwic2V0U3RhdHVzRGFyayIsImUiLCJNZW51TW9iV3JhcHBlciIsImRpdiIsInByb3BzIiwidGhlbWUiLCJuYkxpZ25lcyIsIkJ1dHRvbk1vYk1lbnUiLCJvcGVuTWVudSIsInNldE9wZW5NZW51IiwicHJldiIsImRlZmF1bHRQcm9wcyIsImFuaW1hdGVkIiwidXNlVHJhbnNpdGlvbiIsImNvbmZpZyIsIlJlYWN0IiwidXNlUm91dGVyIiwiRGl2IiwiRHJvcERvd25JdGVtIiwiYSIsImFjdGl2Iiwicm91dGVyIiwibG9jYWxlIiwidHJhbnNpdGlvbnMiLCJmcm9tIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJzdGlmZiIsInN0eWxlcyIsIml0ZW0iLCJwdXNoIiwiYXNQYXRoIiwiTGluayIsInVzZUVmZmVjdCIsInVzZURhcmtNb2RlIiwiSGVhZGVyIiwiaGVhZGVyIiwiTG9nb1dyYXBwZXIiLCJDb250YWluZXJOYXYiLCJNZW51IiwidWwiLCJNZW51TW9iIiwiTWVudU1vYk5hdiIsIkxpbmtQYWdlIiwibGkiLCJhY3RpdmUiLCJDb250YWluZXJJbWFnZSIsIk5hdkJhciIsInQiLCJ0b3AiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm5hdmJhciIsImluY2x1ZGVzIiwiZGFya01vZGVGdW5jIiwiZG9jdW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidG9nZ2xlIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbml0aWFsVmFsIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVmYXVsdFZhbCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtZWRpYSIsImRhcmtNb2RlTWVkaWFRdWVyeSIsIm1hdGNoZXMiLCJkYXJrTW9kZU9uIiwidmFsIiwiZ2V0SXRlbSIsIm1hcCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJsZW5ndGgiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJKU09OIiwic3RyaW5naWZ5IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIk5hdmJhciIsIlRoZW1lUHJvdmlkZXIiLCJHbG9iYWxTdHlsZSIsIk15QXBwIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJyYXRpb01hcmdpbiIsInJhdGlvUGFkZGluZyIsInJhdGlvQm9yZGVyUmFkaXVzIiwicmF0aW9Cb3JkZXJSYWRpdXNQZXIiXSwic291cmNlUm9vdCI6IiJ9