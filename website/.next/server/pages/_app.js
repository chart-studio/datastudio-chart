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
  chartComponent: "FunnelChart1"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFeFFBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2pPYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsa0pBQXlEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL0RhdGEvY29tbW9uLnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9jb21wb25lbnRzL2VsZW1lbnRzL0J1dHRvbkxhbmcudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9jb21wb25lbnRzL2VsZW1lbnRzL0J1dHRvbkxpZ2h0LnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9lbGVtZW50cy9CdXR0b25Nb2JNZW51LnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9lbGVtZW50cy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2NvbXBvbmVudHMvZWxlbWVudHMvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vaGVscGVycy9kYXJrTW9kZUZ1bmMudHMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2hlbHBlcnMvdG9nZ2xlQWxsQnV0dG9uLnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ob29rcy91c2VDbGlja0F3YXkudHMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL2hvb2tzL3VzZURhcmtNb2RlLnRzeCIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbG9jYWxlcy9lbi9pbmRleC50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbG9jYWxlcy9mci9pbmRleC50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9zdHlsZXMvR2xvYmFsU3R5bGUudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcInJlYWN0LXNwcmluZ1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2lnbm9yZWR8QzpcXFVzZXJzXFxZdmVaXFxnaXRodWIuY29tXFx2aXN1YWxpc2F0aW9uXFx3ZWJzaXRlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBuYXZCYXIgPSB7XHJcbiAgbGluazE6IHsgZnI6IFwiQWNjdWVpbFwiLCBlbjogXCJIb21lXCIgfSxcclxuICBsaW5rMjogeyBmcjogXCJUYXJpZnNcIiwgZW46IFwiUHJpY2luZ1wiIH0sXHJcbiAgbGluazM6IHsgZnI6IFwiQSBwcm9wb3NcIiwgZW46IFwiQWJvdXRcIiB9LFxyXG4gIGxpbms0OiB7IGZyOiBcIkNvbnRhY3RcIiwgZW46IFwiQ29udGFjdFwiIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZW8gPSB7XHJcbiAgbmFtZTogXCJCZWF1dGlmdWwgRGFzaGJvYXJkc1wiLFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmcjogXCJEb25uZXogcGx1cyBkZSBwZXJjdXRhbnQgw6Agdm9zIGRhc2hib2FyZHNcIixcclxuICAgIGVuOiBcIk1ha2UgeW91ciBkYXRhIHNoaW5lIHdpdGggYmVhdXRpZnVsIGRlc2lnbnNcIixcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGVyb19zZWN0aW9uID0ge1xyXG4gIHRpdGxlOiBcIkJlYXV0aWZ1bCBEYXNoYm9hcmRzXCIsXHJcbiAgb3B0aW9uMTogeyBmcjogXCJEZXNpZ25zIGV4Y2VwdGlvbm5lbHNcIiwgZW46IFwiRXhjZXB0aW9uYWwgZGVzaWduc1wiIH0sXHJcbiAgb3B0aW9uMjogeyBmcjogXCJHcmFwaGVzIHBhcmFtw6l0cmFibGVzXCIsIGVuOiBcIkN1c3RvbWFibGUgZ3JhcGhcIiB9LFxyXG4gIG9wdGlvbjM6IHtcclxuICAgIGZyOiBcIjMwIGNyZWRpdHMgw6AgdXRpbGlzZXIgZ3JhdHVpdGVtZW50KlwiLFxyXG4gICAgZW46IFwiMzAgY3JlZGl0cyBmcmVlIHRvIHVzZSpcIixcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnV0dG9uID0ge1xyXG4gIGRvYzogeyBmcjogXCJMaXJlXCIsIGVuOiBcIlJlYWRcIiB9LFxyXG4gIGVzc2FpOiB7IGZyOiBcIkVzc2F5ZXJcIiwgZW46IFwiVHJ5XCIgfSxcclxuICBzb3VzYzogeyBmcjogXCJTb3VzY3JpcmVcIiwgZW46IFwiU3Vic2NyaWJlXCIgfSxcclxuICBzaGFyZTogeyBmcjogXCJQYXJ0YWdlclwiLCBlbjogXCJTaGFyZVwiIH0sXHJcbiAgYWNjb3VudDogeyBmcjogXCJTZSBjb25uZWN0ZXIgYXZlYyBnb29nbGVcIiwgZW46IFwiQ29ubmVjdCB3aXRoIGdvb2dsZVwiIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b29sdGlwID0ge1xyXG4gIGRvYzogeyBmcjogXCJMaXJlIGxhIGRvY3VtZW50YXRpb25cIiwgZW46IFwiUmVhZCB0aGUgZG9jdW1lbnRhdGlvblwiIH0sXHJcbiAgZXNzYWk6IHsgZnI6IFwiVXRpbGlzZXIgbGVzIGNyw6lkaXRzXCIsIGVuOiBcIlVzZSBjcmVkaXRzXCIgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dHJlVGV4dCA9IHtcclxuICBhZGQ6IHsgZnI6IFwiQWpvdXTDqSBsZSBcIiwgZW46IFwiQWRkIG9uIFwiIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWNhcCA9IHtcclxuICBjcmVkaXQ6IHsgZnI6IFwiY3LDqWRpdHNcIiwgZW46IFwiY3JlZGl0c1wiIH0sXHJcbiAgc3Vic2M6IHsgZnI6IFwic291c2NyaXB0aW9uc1wiLCBlbjogXCJzdWJzY3JpcHRpb25zXCIgfSxcclxufVxyXG4vL3tmcjpcIlwiLGVuOlwiXCJ9XHJcblxyXG5leHBvcnQgY29uc3QgY2hhcnRzID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIjFcIixcclxuICAgIG5hbWU6IHsgZnI6IFwiR3JhcGhpcXVlIGVuIGVudG9ubm9pclwiLCBlbjogXCJGdW5uZWwgY2hhcnRcIiB9LFxyXG4gICAgbGlua19pbWFnZTogXCIvaW1hZ2VzL0JlYXV0aWZ1bC1TVkctRnVubmVsLnBuZ1wiLFxyXG4gICAgZGVzYzoge1xyXG4gICAgICBmcjogXCJMZSBncmFwaGlxdWUgZW4gZW50b25ub2lyIHZvdXMgYWlkZSDDoCB2b2lyIHJhcGlkZW1lbnQgb8O5IGV4aXN0ZW50IGxlcyB0YXV4IGQnYWJhbmRvbiBldCBsZXMgdGF1eCBkZSBjb252ZXJzaW9uIGdsb2JhdXggZGFucyB2b3RyZSB0dW5uZWwuXCIsXHJcbiAgICAgIGVuOiBcIkZ1bm5lbCB2aXN1YWxpemF0aW9ucyBoZWxwIHlvdSBxdWlja2x5IHNlZSB3aGVyZSBkcm9wLW9mZiByYXRlcyBhbmQgb3ZlcmFsbCBjb252ZXJzaW9uIHJhdGVzIGluIHlvdXIgc3RlcHBlZCBwcm9jZXNzIGV4aXN0LlwiLFxyXG4gICAgfSxcclxuICAgIGFkZGVkQXQ6IFwiMjAyMi0wMS0yM1wiLFxyXG4gICAgbGlua19wYWdlOiBcIi9cIixcclxuICAgIHZpelRvb2w6IFwiRGF0YSBTdHVkaW9cIixcclxuICAgIGNoYXJ0Q29tcG9uZW50OiBcIkZ1bm5lbENoYXJ0MVwiLFxyXG4gIH0sXHJcbl1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQ2xpY2tBd2F5XCJcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL0Ryb3Bkb3duXCJcclxuXHJcbmNvbnN0IFN2ZyA9IHN0eWxlZC5zdmdgXHJcbiAgd2lkdGg6IDEuMnJlbTtcclxuICBoZWlnaHQ6IDEuMnJlbTtcclxuICBmaWxsOiB2YXIoLS10ZXh0Mik7XHJcbmBcclxuXHJcbmNvbnN0IEJ1dHRvbkxhbmcgPSAoeyBjbGFzc05hbWUgfTogeyBjbGFzc05hbWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgbGV0IHsgb3Blbiwgc2V0T3BlbiwgcmVmQ29udHJvbGVyLCByZWZPYmplY3QgfSA9IHVzZUNsaWNrQXdheShmYWxzZSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImNoYW5nZXIgbGEgbGFuZ3VlXCJcclxuICAgICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJsYW5nXCJcclxuICAgICAgICAgIHJlZj17cmVmQ29udHJvbGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdmdcclxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0xXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGggZD1cIm0xMi44NyAxNS4wNy0yLjU0LTIuNTEuMDMtLjAzYzEuNzQtMS45NCAyLjk4LTQuMTcgMy43MS02LjUzSDE3VjRoLTdWMkg4djJIMXYxLjk5aDExLjE3QzExLjUgNy45MiAxMC40NCA5Ljc1IDkgMTEuMzUgOC4wNyAxMC4zMiA3LjMgOS4xOSA2LjY5IDhoLTJjLjczIDEuNjMgMS43MyAzLjE3IDIuOTggNC41NmwtNS4wOSA1LjAyTDQgMTlsNS01IDMuMTEgMy4xMS43Ni0yLjA0ek0xOC41IDEwaC0yTDEyIDIyaDJsMS4xMi0zaDQuNzVMMjEgMjJoMmwtNC41LTEyem0tMi42MiA3IDEuNjItNC4zM0wxOS4xMiAxN2gtMy4yNHpcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L1N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7IW9wZW4gPyBudWxsIDogKFxyXG4gICAgICAgICAgPERyb3Bkb3duIHJlZk9iamVjdD17cmVmT2JqZWN0fSBzZXRPcGVuPXtzZXRPcGVufSBvcGVuPXtvcGVufSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25MYW5nXHJcbiIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgdG9nZ2xlQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvdG9nZ2xlQWxsQnV0dG9uXCJcclxuXHJcbmNvbnN0IFN2ZyA9IHN0eWxlZC5zdmdgXHJcbiAgd2lkdGg6IDEuMnJlbTtcclxuICBoZWlnaHQ6IDEuMnJlbTtcclxuICBmaWxsOiB2YXIoLS10ZXh0Mik7XHJcbmBcclxuXHJcbmNvbnN0IEJ1dHRvbkxpZ2h0ID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgc3RhdHVzRGFyayxcclxuICBzZXRTdGF0dXNEYXJrLFxyXG59OiB7XHJcbiAgY2xhc3NOYW1lOiBzdHJpbmdcclxuICBzdGF0dXNEYXJrOiBzdHJpbmdcclxuICBzZXRTdGF0dXNEYXJrOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PlxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJtZXR0cmUgbGUgbGlndGggbW9kZVwiXHJcbiAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgb25DbGljaz17ZSA9PiB0b2dnbGVCdXR0b24oZSkhKHNldFN0YXR1c0RhcmspfVxyXG4gICAgICBpZD1cInRvZ2dsZUJ1dHRvbkxpZ2h0XCJcclxuICAgICAgZGF0YS10b2dnbGU9e3N0YXR1c0RhcmsgIT09IFwidHJ1ZVwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCJ9XHJcbiAgICA+XHJcbiAgICAgIHtzdGF0dXNEYXJrICE9PSBcInRydWVcIiAmJiAoXHJcbiAgICAgICAgPFN2Z1xyXG4gICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibS0xXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTkuMzcgNS41MWMtLjE4LjY0LS4yNyAxLjMxLS4yNyAxLjk5IDAgNC4wOCAzLjMyIDcuNCA3LjQgNy40LjY4IDAgMS4zNS0uMDkgMS45OS0uMjdDMTcuNDUgMTcuMTkgMTQuOTMgMTkgMTIgMTljLTMuODYgMC03LTMuMTQtNy03IDAtMi45MyAxLjgxLTUuNDUgNC4zNy02LjQ5ek0xMiAzYy00Ljk3IDAtOSA0LjAzLTkgOXM0LjAzIDkgOSA5IDktNC4wMyA5LTljMC0uNDYtLjA0LS45Mi0uMS0xLjM2LS45OCAxLjM3LTIuNTggMi4yNi00LjQgMi4yNi0yLjk4IDAtNS40LTIuNDItNS40LTUuNCAwLTEuODEuODktMy40MiAyLjI2LTQuNC0uNDQtLjA2LS45LS4xLTEuMzYtLjF6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvU3ZnPlxyXG4gICAgICApfVxyXG4gICAgICB7c3RhdHVzRGFyayA9PT0gXCJ0cnVlXCIgJiYgKFxyXG4gICAgICAgIDxTdmdcclxuICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm0tMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMiA5YzEuNjUgMCAzIDEuMzUgMyAzcy0xLjM1IDMtMyAzLTMtMS4zNS0zLTMgMS4zNS0zIDMtM20wLTJjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDUgNS0yLjI0IDUtNS0yLjI0LTUtNS01ek0yIDEzaDJjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFIMmMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMXptMTggMGgyYy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0yYy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxek0xMSAydjJjMCAuNTUuNDUgMSAxIDFzMS0uNDUgMS0xVjJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF6bTAgMTh2MmMwIC41NS40NSAxIDEgMXMxLS40NSAxLTF2LTJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF6TTUuOTkgNC41OGMtLjM5LS4zOS0xLjAzLS4zOS0xLjQxIDAtLjM5LjM5LS4zOSAxLjAzIDAgMS40MWwxLjA2IDEuMDZjLjM5LjM5IDEuMDMuMzkgMS40MSAwcy4zOS0xLjAzIDAtMS40MUw1Ljk5IDQuNTh6bTEyLjM3IDEyLjM3Yy0uMzktLjM5LTEuMDMtLjM5LTEuNDEgMC0uMzkuMzktLjM5IDEuMDMgMCAxLjQxbDEuMDYgMS4wNmMuMzkuMzkgMS4wMy4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAzIDAtMS40MWwtMS4wNi0xLjA2em0xLjA2LTEwLjk2Yy4zOS0uMzkuMzktMS4wMyAwLTEuNDEtLjM5LS4zOS0xLjAzLS4zOS0xLjQxIDBsLTEuMDYgMS4wNmMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MXMxLjAzLjM5IDEuNDEgMGwxLjA2LTEuMDZ6TTcuMDUgMTguMzZjLjM5LS4zOS4zOS0xLjAzIDAtMS40MS0uMzktLjM5LTEuMDMtLjM5LTEuNDEgMGwtMS4wNiAxLjA2Yy0uMzkuMzktLjM5IDEuMDMgMCAxLjQxczEuMDMuMzkgMS40MSAwbDEuMDYtMS4wNnpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9Tdmc+XHJcbiAgICAgICl9XHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkxpZ2h0XHJcbiIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmNvbnN0IE1lbnVNb2JXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xyXG4gICAgLmJ0bi1tb2ItbmF2IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lbnVfYnVyZ2VyIHtcclxuICAgIHdpZHRoOiAxLjRyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXB4O1xyXG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PlxyXG4gICAgICBwcm9wcy50aGVtZS5uYkxpZ25lcyA9PT0gMyA/IFwidmFyKC0tdGV4dDEpXCIgOiBcInRyYW5zcGFyZW50XCJ9O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXNwZWVkKSBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5tZW51X2J1cmdlcjo6YmVmb3JlLFxyXG4gIC5tZW51X2J1cmdlcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxLjRyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXNwZWVkKSBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcblxyXG4gIC5tZW51X2J1cmdlcjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PlxyXG4gICAgICBwcm9wcy50aGVtZS5uYkxpZ25lcyA9PT0gMyA/IFwidHJhbnNsYXRlWSgtNnB4KVwiIDogXCJ0cmFuc2xhdGVZKC00cHgpXCJ9O1xyXG4gIH1cclxuICAubWVudV9idXJnZXI6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PlxyXG4gICAgICBwcm9wcy50aGVtZS5uYkxpZ25lcyA9PT0gMyA/IFwidHJhbnNsYXRlWSg2cHgpXCIgOiBcInRyYW5zbGF0ZVkoNHB4KVwifTtcclxuICB9XHJcblxyXG4gIC5idG4tbW9iLW5hdi5vcGVuIC5tZW51X2J1cmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5idG4tbW9iLW5hdi5vcGVuIC5tZW51X2J1cmdlcjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgLmJ0bi1tb2ItbmF2Lm9wZW4gLm1lbnVfYnVyZ2VyOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQnV0dG9uTW9iTWVudSA9ICh7XHJcbiAgbmJMaWduZXMsXHJcbiAgb3Blbk1lbnUsXHJcbiAgc2V0T3Blbk1lbnUsXHJcbn06IHtcclxuICBuYkxpZ25lcz86IDIgfCAzXHJcbiAgc2VsZWN0b3JNZW51TW9iPzogc3RyaW5nXHJcbiAgb3Blbk1lbnU6IGJvb2xlYW5cclxuICBzZXRPcGVuTWVudTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1lbnVNb2JXcmFwcGVyIHRoZW1lPXt7IG5iTGlnbmVzIH19PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGJ0bi1tb2ItbmF2IG0tMyBwdC0zIHBiLTMgbXItNCAke29wZW5NZW51ID8gXCJvcGVuXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0T3Blbk1lbnUocHJldiA9PiAhcHJldilcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJici0xIG1lbnVfYnVyZ2VyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTWVudU1vYldyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbkJ1dHRvbk1vYk1lbnUuZGVmYXVsdFByb3BzID0ge1xyXG4gIG5iTGlnbmVzOiAzLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Nb2JNZW51XHJcbiIsImltcG9ydCB7IGFuaW1hdGVkLCB1c2VUcmFuc2l0aW9uLCBjb25maWcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCJcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBSZWFjdENoaWxkLCBSZWZPYmplY3QsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuY29uc3QgRGl2ID0gc3R5bGVkKGFuaW1hdGVkLmRpdilgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMy41cmVtO1xyXG4gIHdpZHRoOiA4cmVtO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlMyk7XHJcbiAgcGFkZGluZzogMHJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxcHggdmFyKC0tdGV4dDIpO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXN1cmZhY2U0KTtcclxuYFxyXG5jb25zdCBEcm9wRG93bkl0ZW0gPSBzdHlsZWQuYWBcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy50aGVtZS5hY3RpdiA9PT0gdHJ1ZSA/IFwidmFyKC0tYnJhbmQpXCIgOiBudWxsKX07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciB2YXIoLS1zcGVlZCk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlNCk7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBEcm9wZG93biA9ICh7XHJcbiAgcmVmT2JqZWN0LFxyXG4gIHNldE9wZW4sXHJcbiAgb3BlbixcclxufToge1xyXG4gIHJlZk9iamVjdDogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxyXG4gIHNldE9wZW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PlxyXG4gIG9wZW46IGJvb2xlYW5cclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHJvdXRlclxyXG4gIGNvbnN0IHRyYW5zaXRpb25zID0gdXNlVHJhbnNpdGlvbihvcGVuLCB7XHJcbiAgICBmcm9tOiB7IG9wYWNpdHk6IFwiMFwiIH0sXHJcbiAgICBlbnRlcjogeyBvcGFjaXR5OiBcIjFcIiB9LFxyXG4gICAgbGVhdmU6IHsgb3BhY2l0eTogXCIwXCIgfSxcclxuICAgIGNvbmZpZzogY29uZmlnLnN0aWZmLFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dHJhbnNpdGlvbnMoXHJcbiAgICAgICAgKHN0eWxlcywgaXRlbSkgPT5cclxuICAgICAgICAgIGl0ZW0gJiYgKFxyXG4gICAgICAgICAgICA8RGl2IHN0eWxlPXtzdHlsZXN9IGNsYXNzTmFtZT1cImJyLTRcIiByZWY9e3JlZk9iamVjdH0+XHJcbiAgICAgICAgICAgICAgPERyb3BEb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e3sgYWN0aXY6IGxvY2FsZSA9PT0gXCJlblwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHJvdXRlci5hc1BhdGgsIHJvdXRlci5hc1BhdGgsIHsgbG9jYWxlOiBcImVuXCIgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRW5nbGlzaFxyXG4gICAgICAgICAgICAgIDwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wRG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHRoZW1lPXt7IGFjdGl2OiBsb2NhbGUgPT09IFwiZnJcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChyb3V0ZXIuYXNQYXRoLCByb3V0ZXIuYXNQYXRoLCB7IGxvY2FsZTogXCJmclwiIH0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEZyYW7Dp2Fpc1xyXG4gICAgICAgICAgICAgIDwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cclxuIiwiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmltcG9ydCB7IGFuaW1hdGVkLCB1c2VUcmFuc2l0aW9uLCBjb25maWcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBmciBmcm9tIFwiLi4vLi4vbG9jYWxlcy9mclwiXHJcbmltcG9ydCBlbiBmcm9tIFwiLi4vLi4vbG9jYWxlcy9lblwiXHJcbmltcG9ydCB7IHVzZURhcmtNb2RlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZURhcmtNb2RlXCJcclxuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNsaWNrQXdheVwiXHJcbmltcG9ydCBCdXR0b25MYW5nIGZyb20gXCIuL0J1dHRvbkxhbmdcIlxyXG5pbXBvcnQgQnV0dG9uTGlnaHQgZnJvbSBcIi4vQnV0dG9uTGlnaHRcIlxyXG5pbXBvcnQgQnV0dG9uTW9iTWVudSBmcm9tIFwiLi9CdXR0b25Nb2JNZW51XCJcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgLy9taW4taGVpZ2h0OiA0cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcclxuICAgICYge1xyXG4gICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCB2YXIoLS10ZXh0Mik7XHJcbiAgei1pbmRleDogMTAwO1xyXG5gXHJcbmNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuY29uc3QgQ29udGFpbmVyTmF2ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5gXHJcbmNvbnN0IE1lbnUgPSBzdHlsZWQudWxgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuYFxyXG5jb25zdCBNZW51TW9iV3JhcHBlciA9IHN0eWxlZChhbmltYXRlZC5kaXYpYFxyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlMSk7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XHJcbiAgICAmIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgTWVudU1vYiA9IHN0eWxlZC5kaXZgXHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIHVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmBcclxuY29uc3QgTWVudU1vYk5hdiA9IHN0eWxlZC51bGBcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5gXHJcblxyXG5jb25zdCBMaW5rUGFnZSA9IHN0eWxlZC5saWBcclxuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiAocHJvcHMudGhlbWUuYWN0aXZlID8gXCI2MDBcIiA6IG51bGwpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XHJcbiAgICBwcm9wcy50aGVtZS5hY3RpdmUgPyBcInZhcigtLXN1cmZhY2UzKVwiIDogXCJ0cmFuc3BhcmVudFwifTtcclxuICBsZXR0ZXItc3BhY2luZzogJHtwcm9wcyA9PiAocHJvcHMudGhlbWUuYWN0aXZlID8gXCIxLjhweFwiIDogbnVsbCl9O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xyXG4gICAgJiY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLnRoZW1lLmFjdGl2ZSA/IFwiMTAwJVwiIDogXCIwJVwiKX07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1icmFuZCk7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICAgICYmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLWJyYW5kKTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQ29udGFpbmVySW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGxvY2FsZSB9ID0gcm91dGVyXHJcbiAgY29uc3QgdCA9IGxvY2FsZSA9PT0gXCJmclwiID8gZnIgOiBlblxyXG5cclxuICBsZXQgW3N0YXR1c0RhcmssIHNldFN0YXR1c0RhcmtdID0gdXNlRGFya01vZGUoXCJcIiwgXCJzdGF0dXNEYXJrXCIpXHJcbiAgbGV0IHsgcmVmQ29udHJvbGVyLCBvcGVuLCBzZXRPcGVuLCByZWZPYmplY3QgfSA9IHVzZUNsaWNrQXdheShmYWxzZSlcclxuXHJcbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKG9wZW4sIHtcclxuICAgIGZyb206IHsgdG9wOiBcIi0zMHJlbVwiIH0sXHJcbiAgICBlbnRlcjogeyB0b3A6IFwiNHJlbVwiIH0sXHJcbiAgICBsZWF2ZTogeyB0b3A6IFwiLTMwcmVtXCIgfSxcclxuICAgIGNvbmZpZzogY29uZmlnLnN0aWZmLFxyXG4gIH0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSlcclxuICB9LCBbcm91dGVyXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8Q29udGFpbmVyTmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1uYXZcIj5cclxuICAgICAgICAgIDxMb2dvV3JhcHBlciBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVySW1hZ2U+TE9HTzwvQ29udGFpbmVySW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0xvZ29XcmFwcGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgPG5hdlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJuYXZpZ2F0aW9uIHByaW5jaXBhbGVcIlxyXG4gICAgICAgICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51IGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIHBiLTIgbmF2TGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0Lm5hdmJhci5saW5rMX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlua1BhZ2U+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaWNpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmtQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtMiBwYi0yIG5hdkxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCIvcHJpY2luZ1wiKSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0Lm5hdmJhci5saW5rMn1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlua1BhZ2U+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgcGItMiBuYXZMaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiByb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKFwiL2Fib3V0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QubmF2YmFyLmxpbmszfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rUGFnZT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIHBiLTIgbmF2TGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcIi9jb250YWN0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QubmF2YmFyLmxpbms0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rUGFnZT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLW5hdlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxCdXR0b25MYW5nIGNsYXNzTmFtZT1cIm0tMyBici00IGJ1dHRvbiBwLTFcIiAvPlxyXG4gICAgICAgICAgPEJ1dHRvbkxpZ2h0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tMyBici00IGJ1dHRvbiBwLTFcIlxyXG4gICAgICAgICAgICBzdGF0dXNEYXJrPXtzdGF0dXNEYXJrfVxyXG4gICAgICAgICAgICBzZXRTdGF0dXNEYXJrPXtzZXRTdGF0dXNEYXJrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgcmVmPXtyZWZDb250cm9sZXJ9PlxyXG4gICAgICAgICAgICA8QnV0dG9uTW9iTWVudSBuYkxpZ25lcz17Mn0gb3Blbk1lbnU9e29wZW59IHNldE9wZW5NZW51PXtzZXRPcGVufSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXJOYXY+XHJcbiAgICAgICAge3RyYW5zaXRpb25zKFxyXG4gICAgICAgICAgKHN0eWxlcywgaXRlbSkgPT5cclxuICAgICAgICAgICAgaXRlbSAmJiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVNb2JXcmFwcGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3gtc2hhZG93LTFcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmT2JqZWN0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZW51TW9iIGNsYXNzTmFtZT1cImNvbnRhaW5lci1uYXZNb2JcIj5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVNb2JOYXYgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgcGItMiBuYXZMaW5rIG10LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm0tM1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dC5uYXZiYXIubGluazF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlua1BhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgcGItMiBuYXZMaW5rIG10LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCIvcHJpY2luZ1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibS0zXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0Lm5hdmJhci5saW5rMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rUGFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIHBiLTIgbmF2TGluayBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiByb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKFwiL2Fib3V0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtLTNcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QubmF2YmFyLmxpbmszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtQYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtMiBwYi0yIG5hdkxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCIvY29udGFjdFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibS0zXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0Lm5hdmJhci5saW5rNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rUGFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudU1vYk5hdj5cclxuICAgICAgICAgICAgICAgIDwvTWVudU1vYj5cclxuICAgICAgICAgICAgICA8L01lbnVNb2JXcmFwcGVyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxyXG4iLCJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGRhcmtNb2RlRnVuYyA9IChzdGF0dXNEYXJrOiBzdHJpbmcpID0+XHJcbiAgZnVuY3Rpb24gZGFya01vZGVGdW5jKHNldFN0YXR1c0Rhcms6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+KSB7XHJcbiAgICBsZXQgZG9jID0gZG9jdW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQhXHJcbiAgICBpZiAoc3RhdHVzRGFyayA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgZG9jLnNldEF0dHJpYnV0ZShcImNvbG9yLXNjaGVtZVwiLCBcImxpZ2h0XCIpXHJcbiAgICAgIHNldFN0YXR1c0RhcmsoXCJmYWxzZVwiKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXR1c0RhcmtcIiwgXCJmYWxzZVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jLnNldEF0dHJpYnV0ZShcImNvbG9yLXNjaGVtZVwiLCBcImRhcmtcIilcclxuICAgICAgc2V0U3RhdHVzRGFyayhcInRydWVcIilcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0dXNEYXJrXCIsIFwidHJ1ZVwiKVxyXG4gICAgfVxyXG4gIH1cclxuIiwiaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGRhcmtNb2RlRnVuYyB9IGZyb20gXCIuL2RhcmtNb2RlRnVuY1wiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQnV0dG9uKGU6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgaWYgKGUuY3VycmVudFRhcmdldC5kYXRhc2V0KSB7XHJcbiAgICBsZXQgdG9nZ2xlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9nZ2xlXHJcbiAgICBpZiAodG9nZ2xlID09PSBcImxpZ2h0XCIgfHwgdG9nZ2xlID09PSBcImRhcmtcIikge1xyXG4gICAgICBsZXQgc3RhdHVzRGFyayA9IHRvZ2dsZSA9PT0gXCJsaWdodFwiID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcclxuICAgICAgcmV0dXJuIGRhcmtNb2RlRnVuYyhzdGF0dXNEYXJrKVxyXG4gICAgfVxyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvZ2dsZSA9PT0gXCJsYW5nXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9nZ2xlLCBcInllc1wiKVxyXG4gICAgfVxyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvZ2dsZSA9PT0gXCJzZWFyY2hcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50b2dnbGUsIFwieWVzXCIpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2xpY2tBd2F5ID0gKGluaXRpYWxWYWw6IGJvb2xlYW4pID0+IHtcclxuICBjb25zdCByZWZDb250cm9sZXIgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgJiBIVE1MQnV0dG9uRWxlbWVudD4obnVsbClcclxuICBjb25zdCByZWZPYmplY3QgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXHJcblxyXG4gIGxldCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShpbml0aWFsVmFsKVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICByZWZDb250cm9sZXIuY3VycmVudCAmJlxyXG4gICAgICAhcmVmQ29udHJvbGVyLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpICYmXHJcbiAgICAgIHJlZk9iamVjdC5jdXJyZW50ICYmXHJcbiAgICAgICFyZWZPYmplY3QuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSlcclxuICAgICkge1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSwgdHJ1ZSlcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleVByZXNzLCB0cnVlKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUsIHRydWUpXHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleVByZXNzLCB0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFtvcGVuXSlcclxuXHJcbiAgcmV0dXJuIHsgb3Blbiwgc2V0T3BlbiwgcmVmQ29udHJvbGVyLCByZWZPYmplY3QgfVxyXG59XHJcbiIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRGFya01vZGUoXHJcbiAgZGVmYXVsdFZhbDogc3RyaW5nLFxyXG4gIGtleTogc3RyaW5nXHJcbik6IFtzdHJpbmcsIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+XSB7XHJcbiAgY29uc3QgW3N0YXR1c0RhcmssIHNldFN0YXR1c0RhcmtdID0gdXNlU3RhdGUoZGVmYXVsdFZhbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmZpcnN0RWxlbWVudENoaWxkIVxyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lKVwiKS5tZWRpYSAhPT0gXCJub3QgYWxsXCIpIHtcclxuICAgICAgY29uc3QgZGFya01vZGVNZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXHJcbiAgICAgICAgXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCJcclxuICAgICAgKVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZGFya01vZGVNZWRpYVF1ZXJ5Lm1hdGNoZXMgJiZcclxuICAgICAgICBkYXJrTW9kZU1lZGlhUXVlcnkubWVkaWEgPT09IFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNldFN0YXR1c0RhcmsoXCJ0cnVlXCIpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0dXNEYXJrXCIsIFwidHJ1ZVwiKVxyXG4gICAgICB9XHJcbiAgICAgIC8vRWNvdXRlciBsZXMgw6l2w6huZW1lbnRzXHJcbiAgICAgIGRhcmtNb2RlTWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhcmtNb2RlT24gPSBlLm1hdGNoZXNcclxuICAgICAgICBpZiAoZGFya01vZGVPbikge1xyXG4gICAgICAgICAgZG9jLnNldEF0dHJpYnV0ZShcImNvbG9yLXNjaGVtZVwiLCBcImRhcmtcIilcclxuICAgICAgICAgIHNldFN0YXR1c0RhcmsoXCJ0cnVlXCIpXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXR1c0RhcmtcIiwgXCJ0cnVlXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvYy5zZXRBdHRyaWJ1dGUoXCJjb2xvci1zY2hlbWVcIiwgXCJsaWdodFwiKVxyXG4gICAgICAgICAgc2V0U3RhdHVzRGFyayhcImZhbHNlXCIpXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXR1c0RhcmtcIiwgXCJmYWxzZVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcclxuICAgIGlmICh2YWwgIT09IG51bGwpIHtcclxuICAgICAgc2V0U3RhdHVzRGFyayh2YWwpXHJcbiAgICB9XHJcbiAgfSwgW2tleV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5maXJzdEVsZW1lbnRDaGlsZCFcclxuICAgIGlmIChzdGF0dXNEYXJrID09PSBcInRydWVcIikge1xyXG4gICAgICBkb2Muc2V0QXR0cmlidXRlKFwiY29sb3Itc2NoZW1lXCIsIFwiZGFya1wiKVxyXG4gICAgfSBlbHNlIGlmIChzdGF0dXNEYXJrID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgZG9jLnNldEF0dHJpYnV0ZShcImNvbG9yLXNjaGVtZVwiLCBcImxpZ2h0XCIpXHJcbiAgICB9XHJcbiAgfSwgW3N0YXR1c0RhcmtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc3RhdHVzRGFyaylcclxuICB9LCBba2V5LCBzdGF0dXNEYXJrXSlcclxuXHJcbiAgcmV0dXJuIFtzdGF0dXNEYXJrLCBzZXRTdGF0dXNEYXJrXVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaGVyb19zZWN0aW9uLFxyXG4gIG5hdkJhcixcclxuICBzZW8sXHJcbiAgY2hhcnRzLFxyXG4gIGJ1dHRvbixcclxuICB0b29sdGlwLFxyXG4gIGF1dHJlVGV4dCxcclxuICByZWNhcCxcclxufSBmcm9tIFwiLi4vLi4vRGF0YS9jb21tb25cIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBkb2M6IGJ1dHRvbi5kb2NbXCJlblwiXSxcclxuICAgIGVzc2FpOiBidXR0b24uZXNzYWlbXCJlblwiXSxcclxuICAgIHNvdXNjOiBidXR0b24uc291c2NbXCJlblwiXSxcclxuICAgIGFjY291bnQ6IGJ1dHRvbi5hY2NvdW50W1wiZW5cIl0sXHJcbiAgICBzaGFyZTogYnV0dG9uLnNoYXJlW1wiZW5cIl0sXHJcbiAgfSxcclxuICB0b29sdGlwOiB7XHJcbiAgICBkb2M6IHRvb2x0aXAuZG9jW1wiZW5cIl0sXHJcbiAgICBlc3NhaTogdG9vbHRpcC5lc3NhaVtcImVuXCJdLFxyXG4gIH0sXHJcbiAgYXV0cmVUZXh0OiB7XHJcbiAgICBhZGQ6IGF1dHJlVGV4dC5hZGRbXCJlblwiXSxcclxuICB9LFxyXG4gIG5hdmJhcjoge1xyXG4gICAgbGluazE6IG5hdkJhci5saW5rMVtcImVuXCJdLFxyXG4gICAgbGluazI6IG5hdkJhci5saW5rMltcImVuXCJdLFxyXG4gICAgbGluazM6IG5hdkJhci5saW5rM1tcImVuXCJdLFxyXG4gICAgbGluazQ6IG5hdkJhci5saW5rNFtcImVuXCJdLFxyXG4gIH0sXHJcbiAgcmVjYXA6IHtcclxuICAgIGNyZWRpdDogcmVjYXAuY3JlZGl0W1wiZW5cIl0sXHJcbiAgICBzdWJzYzogcmVjYXAuc3Vic2NbXCJlblwiXSxcclxuICB9LFxyXG4gIHNlbzoge1xyXG4gICAgbmFtZTogc2VvLm5hbWUsXHJcbiAgICB0aXRsZTogc2VvLnRpdGxlW1wiZW5cIl0sXHJcbiAgfSxcclxuICBoZXJvX3NlY3Rpb246IHtcclxuICAgIHRpdGxlOiBoZXJvX3NlY3Rpb24udGl0bGUsXHJcbiAgICBvcHRpb24xOiBoZXJvX3NlY3Rpb24ub3B0aW9uMVtcImVuXCJdLFxyXG4gICAgb3B0aW9uMjogaGVyb19zZWN0aW9uLm9wdGlvbjJbXCJlblwiXSxcclxuICAgIG9wdGlvbjM6IGhlcm9fc2VjdGlvbi5vcHRpb24zW1wiZW5cIl0sXHJcbiAgfSxcclxuICBjaGFydHM6IGNoYXJ0cy5tYXAodmFsID0+IHtcclxuICAgIHJldHVybiB7IC4uLnZhbCwgbmFtZTogdmFsLm5hbWVbXCJlblwiXSwgZGVzYzogdmFsLmRlc2NbXCJlblwiXSB9XHJcbiAgfSksXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBoZXJvX3NlY3Rpb24sXHJcbiAgbmF2QmFyLFxyXG4gIHNlbyxcclxuICBjaGFydHMsXHJcbiAgYnV0dG9uLFxyXG4gIHRvb2x0aXAsXHJcbiAgYXV0cmVUZXh0LFxyXG4gIHJlY2FwLFxyXG59IGZyb20gXCIuLi8uLi9EYXRhL2NvbW1vblwiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBidXR0b246IHtcclxuICAgIGRvYzogYnV0dG9uLmRvY1tcImZyXCJdLFxyXG4gICAgZXNzYWk6IGJ1dHRvbi5lc3NhaVtcImZyXCJdLFxyXG4gICAgc291c2M6IGJ1dHRvbi5zb3VzY1tcImZyXCJdLFxyXG4gICAgYWNjb3VudDogYnV0dG9uLmFjY291bnRbXCJmclwiXSxcclxuICAgIHNoYXJlOiBidXR0b24uc2hhcmVbXCJmclwiXSxcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGRvYzogdG9vbHRpcC5kb2NbXCJmclwiXSxcclxuICAgIGVzc2FpOiB0b29sdGlwLmVzc2FpW1wiZnJcIl0sXHJcbiAgfSxcclxuICBhdXRyZVRleHQ6IHtcclxuICAgIGFkZDogYXV0cmVUZXh0LmFkZFtcImZyXCJdLFxyXG4gIH0sXHJcbiAgbmF2YmFyOiB7XHJcbiAgICBsaW5rMTogbmF2QmFyLmxpbmsxW1wiZnJcIl0sXHJcbiAgICBsaW5rMjogbmF2QmFyLmxpbmsyW1wiZnJcIl0sXHJcbiAgICBsaW5rMzogbmF2QmFyLmxpbmszW1wiZnJcIl0sXHJcbiAgICBsaW5rNDogbmF2QmFyLmxpbms0W1wiZnJcIl0sXHJcbiAgfSxcclxuICByZWNhcDoge1xyXG4gICAgY3JlZGl0OiByZWNhcC5jcmVkaXRbXCJmclwiXSxcclxuICAgIHN1YnNjOiByZWNhcC5zdWJzY1tcImZyXCJdLFxyXG4gIH0sXHJcbiAgc2VvOiB7XHJcbiAgICBuYW1lOiBzZW8ubmFtZSxcclxuICAgIHRpdGxlOiBzZW8udGl0bGVbXCJmclwiXSxcclxuICB9LFxyXG4gIGhlcm9fc2VjdGlvbjoge1xyXG4gICAgdGl0bGU6IGhlcm9fc2VjdGlvbi50aXRsZSxcclxuICAgIG9wdGlvbjE6IGhlcm9fc2VjdGlvbi5vcHRpb24xW1wiZnJcIl0sXHJcbiAgICBvcHRpb24yOiBoZXJvX3NlY3Rpb24ub3B0aW9uMltcImZyXCJdLFxyXG4gICAgb3B0aW9uMzogaGVyb19zZWN0aW9uLm9wdGlvbjNbXCJmclwiXSxcclxuICB9LFxyXG4gIGNoYXJ0czogY2hhcnRzLm1hcCh2YWwgPT4ge1xyXG4gICAgcmV0dXJuIHsgLi4udmFsLCBuYW1lOiB2YWwubmFtZVtcImZyXCJdLCBkZXNjOiB2YWwuZGVzY1tcImZyXCJdIH1cclxuICB9KSxcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCJcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9lbGVtZW50cy9OYXZiYXJcIlxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9Db250YWluZXJcIlxyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsU3R5bGVcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17e319PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG4vL3ZhcmlhYmxlc1xyXG5jb25zdCByYXRpb01hcmdpbiA9IFwiMC4xMjVyZW1cIlxyXG5jb25zdCByYXRpb1BhZGRpbmcgPSBcIjAuMTI1cmVtXCJcclxuY29uc3QgcmF0aW9Cb3JkZXJSYWRpdXMgPSBcIjJweFwiXHJcbmNvbnN0IHJhdGlvQm9yZGVyUmFkaXVzUGVyID0gXCIyNSVcIlxyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuLy9tYXJnaW5cclxuLm0tMSB7bWFyZ2luOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDEpfVxyXG4ubS0yIHttYXJnaW46IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogMil9XHJcbi5tLTMge21hcmdpbjogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAzKX1cclxuLm0tNCB7bWFyZ2luOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDQpfVxyXG4ubS01IHttYXJnaW46IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogNSl9XHJcbi5tLTYge21hcmdpbjogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA2KX1cclxuLy9tYXJnaW5Ub3BcclxuLm10LTEge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogMSl9XHJcbi5tdC0yIHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDIpfVxyXG4ubXQtMyB7bWFyZ2luLXRvcDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAzKX1cclxuLm10LTQge21hcmdpbi10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogNCl9XHJcbi5tdC01IHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDUpfVxyXG4ubXQtNiB7bWFyZ2luLXRvcDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA2KX1cclxuLi1tdC0xIHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC0xKX1cclxuLi1tdC0yIHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC0yKX1cclxuLi1tdC0zIHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC0zKX1cclxuLi1tdC00IHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC00KX1cclxuLi1tdC01IHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC01KX1cclxuLi1tdC02IHttYXJnaW4tdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC02KX1cclxuLy9tYXJnaW5MZWZ0XHJcbi5tbC0xIHttYXJnaW4tbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAxKX1cclxuLm1sLTIge21hcmdpbi1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDIpfVxyXG4ubWwtMyB7bWFyZ2luLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogMyl9XHJcbi5tbC00IHttYXJnaW4tbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA0KX1cclxuLm1sLTUge21hcmdpbi1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDUpfVxyXG4ubWwtNiB7bWFyZ2luLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogNil9XHJcbi4tbWwtMSB7bWFyZ2luLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTEpfVxyXG4uLW1sLTIge21hcmdpbi1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC0yKX1cclxuLi1tbC0zIHttYXJnaW4tbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAtMyl9XHJcbi4tbWwtNCB7bWFyZ2luLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTQpfVxyXG4uLW1sLTUge21hcmdpbi1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC01KX1cclxuLi1tbC02IHttYXJnaW4tbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAtNil9XHJcbi8vbWFyZ2luUmlnaHRcclxuLm1yLTEge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAxKX1cclxuLm1yLTIge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAyKX1cclxuLm1yLTMge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAzKX1cclxuLm1yLTQge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA0KX1cclxuLm1yLTUge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA1KX1cclxuLm1yLTYge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA2KX1cclxuLi1tci0xIHttYXJnaW4tcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTEpfVxyXG4uLW1yLTIge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAtMil9XHJcbi4tbXItMyB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC0zKX1cclxuLi1tci00IHttYXJnaW4tcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogLTQpfVxyXG4uLW1yLTUge21hcmdpbi1yaWdodDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAtNSl9XHJcbi4tbXItNiB7bWFyZ2luLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIC02KX1cclxuLy9tYXJnaW5Cb3R0b21cclxuLm1iLTEge21hcmdpbi1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogMSl9XHJcbi5tYi0yIHttYXJnaW4tYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDIpfVxyXG4ubWItMyB7bWFyZ2luLWJvdHRvbTogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiAzKX1cclxuLm1iLTQge21hcmdpbi1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogNCl9XHJcbi5tYi01IHttYXJnaW4tYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDUpfVxyXG4ubWItNiB7bWFyZ2luLWJvdHRvbTogY2FsYygke3JhdGlvTWFyZ2lufSAqIDIgKiA2KX1cclxuLm1iLTcge21hcmdpbi1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyICogNyl9XHJcbi5tYi04IHttYXJnaW4tYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMiAqIDgpfVxyXG4vL3BhZGRpbmdcclxuLnAtMSB7cGFkZGluZzogY2FsYygke3JhdGlvUGFkZGluZ30gKiAyKX1cclxuLnAtMiB7cGFkZGluZzogY2FsYygke3JhdGlvUGFkZGluZ30gKiA0KX1cclxuLnAtMyB7cGFkZGluZzogY2FsYygke3JhdGlvUGFkZGluZ30gKiA2KX1cclxuLnAtNCB7cGFkZGluZzogY2FsYygke3JhdGlvUGFkZGluZ30gKiA4KX1cclxuLnAtNSB7cGFkZGluZzogY2FsYygke3JhdGlvUGFkZGluZ30gKiAxMCl9XHJcbi5wLTYge3BhZGRpbmc6IGNhbGMoJHtyYXRpb1BhZGRpbmd9ICogMTIpfVxyXG4vL3BhZGRpbmdUb3BcclxuLnB0LTEge3BhZGRpbmctdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMil9XHJcbi5wdC0yIHtwYWRkaW5nLXRvcDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDQpfVxyXG4ucHQtMyB7cGFkZGluZy10b3A6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiA2KX1cclxuLnB0LTQge3BhZGRpbmctdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogOCl9XHJcbi5wdC01IHtwYWRkaW5nLXRvcDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDEwKX1cclxuLnB0LTYge3BhZGRpbmctdG9wOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMTIpfVxyXG4vL3BhZGRpbmdCb3R0b21cclxuLnBiLTEge3BhZGRpbmctYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMil9XHJcbi5wYi0yIHtwYWRkaW5nLWJvdHRvbTogY2FsYygke3JhdGlvTWFyZ2lufSAqIDQpfVxyXG4ucGItMyB7cGFkZGluZy1ib3R0b206IGNhbGMoJHtyYXRpb01hcmdpbn0gKiA2KX1cclxuLnBiLTQge3BhZGRpbmctYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogOCl9XHJcbi5wYi01IHtwYWRkaW5nLWJvdHRvbTogY2FsYygke3JhdGlvTWFyZ2lufSAqIDEwKX1cclxuLnBiLTYge3BhZGRpbmctYm90dG9tOiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMTIpfVxyXG4vL3BhZGRpbmdMZWZ0XHJcbi5wbC0xIHtwYWRkaW5nLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyKX1cclxuLnBsLTIge3BhZGRpbmctbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDQpfVxyXG4ucGwtMyB7cGFkZGluZy1sZWZ0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogNil9XHJcbi5wbC00IHtwYWRkaW5nLWxlZnQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiA4KX1cclxuLnBsLTUge3BhZGRpbmctbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDEwKX1cclxuLnBsLTYge3BhZGRpbmctbGVmdDogY2FsYygke3JhdGlvTWFyZ2lufSAqIDEyKX1cclxuLy9wYWRkaW5nUmlnaHRcclxuLnByLTEge3BhZGRpbmctcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAyKX1cclxuLnByLTIge3BhZGRpbmctcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiA0KX1cclxuLnByLTMge3BhZGRpbmctcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiA2KX1cclxuLnByLTQge3BhZGRpbmctcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiA4KX1cclxuLnByLTUge3BhZGRpbmctcmlnaHQ6IGNhbGMoJHtyYXRpb01hcmdpbn0gKiAxMCl9XHJcbi5wci02IHtwYWRkaW5nLXJpZ2h0OiBjYWxjKCR7cmF0aW9NYXJnaW59ICogMTIpfVxyXG4vL2JvcmRlci1yYWRpdXMgcHhcclxuLmJyLTEge2JvcmRlci1yYWRpdXM6IGNhbGMoJHtyYXRpb0JvcmRlclJhZGl1c30qMSl9XHJcbi5ici0yIHtib3JkZXItcmFkaXVzOiBjYWxjKCR7cmF0aW9Cb3JkZXJSYWRpdXN9KjIpfVxyXG4uYnItMyB7Ym9yZGVyLXJhZGl1czogY2FsYygke3JhdGlvQm9yZGVyUmFkaXVzfSozKX1cclxuLmJyLTQge2JvcmRlci1yYWRpdXM6IGNhbGMoJHtyYXRpb0JvcmRlclJhZGl1c30qNCl9XHJcbi5ici01IHtib3JkZXItcmFkaXVzOiBjYWxjKCR7cmF0aW9Cb3JkZXJSYWRpdXN9KjUpfVxyXG4vL2JvcmRlci1yYWRpdXMgcHhcclxuLmJyLXBlci0xIHtib3JkZXItcmFkaXVzOiBjYWxjKCR7cmF0aW9Cb3JkZXJSYWRpdXNQZXJ9KjEpfVxyXG4uYnItcGVyLTIge2JvcmRlci1yYWRpdXM6IGNhbGMoJHtyYXRpb0JvcmRlclJhZGl1c1Blcn0qMil9XHJcbi5ici1wZXItMyB7Ym9yZGVyLXJhZGl1czogY2FsYygke3JhdGlvQm9yZGVyUmFkaXVzUGVyfSozKX1cclxuLmJyLXBlci00IHtib3JkZXItcmFkaXVzOiBjYWxjKCR7cmF0aW9Cb3JkZXJSYWRpdXNQZXJ9KjQpfVxyXG4vL2JhY2tncm91bmRcclxuLmJhY2sge1xyXG4gIHotaW5kZXg6IC0xMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG4uc3BhY2VyIHtcclxuICBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ubGF5ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9iYWNrZ3JvdW5kL3dhdmVzLnN2Z1wiKTtcclxufVxyXG4vL2xpbmVcclxuLmxpbmUtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCB2YXIoLS10ZXh0Mik7XHJcbn1cclxuLy9zaGFkb3dcclxuLmJveC1zaGFkb3ctMSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA3cHggLTRweCB2YXIoLS1zdXJmYWNlMyk7XHJcbn1cclxuLmJveC1zaGFkb3ctMiB7XHJcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTVweCA0cHggdmFyKC0tdGV4dDIpO1xyXG59XHJcbi5ib3gtc2hhZG93LTMge1xyXG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDE1cHggNnB4IHZhcigtLXRleHQyKTtcclxufVxyXG4uYm94LXNoYWRvdy00IHtcclxuICBib3gtc2hhZG93OiAtMXB4IDdweCAxNXB4IDhweCB2YXIoLS10ZXh0Mik7XHJcbn1cclxuLmJveC1zaGFkb3ctNSB7XHJcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTVweCAxMHB4IHZhcigtLXRleHQyKTtcclxufVxyXG4uYnV0dG9uIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc3VyZmFjZTQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciB2YXIoLS1zcGVlZCkgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbn1cclxuLm5hdkxpbmsge1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciB2YXIoLS1zcGVlZCkgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5uYXZMaW5rOmhvdmVyIHtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UzKTtcclxufVxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlMyk7XHJcbn1cclxuLy9Db250YWluZXJcclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9taW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lclBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbn1cclxuLmNvbnRhaW5lci1uYXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uY29udGFpbmVyLW5hdk1vYiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNwYWNlLW5hdiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLmJ0bi1tb2ItbmF2IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1lbnUtZGVza3RvcCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDEwMCU7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjRyZW0pIHtcclxuICAuY29udGFpbmVyLCAuY29udGFpbmVyUGFnZSxcclxuICAuY29udGFpbmVyLW5hdiwgLmNvbnRhaW5lci1uYXZNb2Ige1xyXG4gICAgbWF4LXdpZHRoOiAyNGVtO1xyXG4gIH1cclxuICBcclxufVxyXG4uYnRuLXNlYXJjaC1uYXYge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDM2cmVtKSB7XHJcbiAgLmNvbnRhaW5lciwuY29udGFpbmVyUGFnZSxcclxuICAuY29udGFpbmVyLW5hdiwgLmNvbnRhaW5lci1uYXZNb2Ige1xyXG4gICAgbWF4LXdpZHRoOiAzNnJlbTtcclxuICB9XHJcbiAgLmJ0bi1zZWFyY2gtbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcclxuICAuY29udGFpbmVyLC5jb250YWluZXJQYWdlLFxyXG4gIC5jb250YWluZXItbmF2LCAuY29udGFpbmVyLW5hdk1vYiB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4cmVtO1xyXG4gIH1cclxuICAubWVudS1kZXNrdG9wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzByZW0pIHtcclxuICAuY29udGFpbmVyLC5jb250YWluZXJQYWdlLFxyXG4gIC5jb250YWluZXItbmF2LCAuY29udGFpbmVyLW5hdk1vYiB7XHJcbiAgICBtYXgtd2lkdGg6IDcwcmVtO1xyXG4gIH1cclxufVxyXG4udmlzdWFsbHktaGlkZGVuIHtcclxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxcHg7XHJcbn1cclxuLmJvcmRlci1ncmFkaWVudCB7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkO1xyXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG4uYm9yZGVyLWdyYWRpZW50LXB1cnBsZSB7XHJcbiAgYm9yZGVyLWltYWdlLXNvdXJjZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NDNhZDUsICNkNTNhOWQpO1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlXHJcbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ByaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsibmF2QmFyIiwibGluazEiLCJmciIsImVuIiwibGluazIiLCJsaW5rMyIsImxpbms0Iiwic2VvIiwibmFtZSIsInRpdGxlIiwiaGVyb19zZWN0aW9uIiwib3B0aW9uMSIsIm9wdGlvbjIiLCJvcHRpb24zIiwiYnV0dG9uIiwiZG9jIiwiZXNzYWkiLCJzb3VzYyIsInNoYXJlIiwiYWNjb3VudCIsInRvb2x0aXAiLCJhdXRyZVRleHQiLCJhZGQiLCJyZWNhcCIsImNyZWRpdCIsInN1YnNjIiwiY2hhcnRzIiwiaWQiLCJsaW5rX2ltYWdlIiwiZGVzYyIsImFkZGVkQXQiLCJsaW5rX3BhZ2UiLCJ2aXpUb29sIiwiY2hhcnRDb21wb25lbnQiLCJzdHlsZWQiLCJ1c2VDbGlja0F3YXkiLCJEcm9wZG93biIsIlN2ZyIsInN2ZyIsIkJ1dHRvbkxhbmciLCJjbGFzc05hbWUiLCJvcGVuIiwic2V0T3BlbiIsInJlZkNvbnRyb2xlciIsInJlZk9iamVjdCIsInBvc2l0aW9uIiwidG9nZ2xlQnV0dG9uIiwiQnV0dG9uTGlnaHQiLCJzdGF0dXNEYXJrIiwic2V0U3RhdHVzRGFyayIsImUiLCJNZW51TW9iV3JhcHBlciIsImRpdiIsInByb3BzIiwidGhlbWUiLCJuYkxpZ25lcyIsIkJ1dHRvbk1vYk1lbnUiLCJvcGVuTWVudSIsInNldE9wZW5NZW51IiwicHJldiIsImRlZmF1bHRQcm9wcyIsImFuaW1hdGVkIiwidXNlVHJhbnNpdGlvbiIsImNvbmZpZyIsIlJlYWN0IiwidXNlUm91dGVyIiwiRGl2IiwiRHJvcERvd25JdGVtIiwiYSIsImFjdGl2Iiwicm91dGVyIiwibG9jYWxlIiwidHJhbnNpdGlvbnMiLCJmcm9tIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJzdGlmZiIsInN0eWxlcyIsIml0ZW0iLCJwdXNoIiwiYXNQYXRoIiwiTGluayIsInVzZUVmZmVjdCIsInVzZURhcmtNb2RlIiwiSGVhZGVyIiwiaGVhZGVyIiwiTG9nb1dyYXBwZXIiLCJDb250YWluZXJOYXYiLCJNZW51IiwidWwiLCJNZW51TW9iIiwiTWVudU1vYk5hdiIsIkxpbmtQYWdlIiwibGkiLCJhY3RpdmUiLCJDb250YWluZXJJbWFnZSIsIk5hdkJhciIsInQiLCJ0b3AiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm5hdmJhciIsImluY2x1ZGVzIiwiZGFya01vZGVGdW5jIiwiZG9jdW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidG9nZ2xlIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbml0aWFsVmFsIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVmYXVsdFZhbCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtZWRpYSIsImRhcmtNb2RlTWVkaWFRdWVyeSIsIm1hdGNoZXMiLCJkYXJrTW9kZU9uIiwidmFsIiwiZ2V0SXRlbSIsIm1hcCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJsZW5ndGgiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJOYXZiYXIiLCJUaGVtZVByb3ZpZGVyIiwiR2xvYmFsU3R5bGUiLCJNeUFwcCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwicmF0aW9NYXJnaW4iLCJyYXRpb1BhZGRpbmciLCJyYXRpb0JvcmRlclJhZGl1cyIsInJhdGlvQm9yZGVyUmFkaXVzUGVyIl0sInNvdXJjZVJvb3QiOiIifQ==