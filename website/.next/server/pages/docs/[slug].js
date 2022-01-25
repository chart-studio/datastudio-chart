(() => {
var exports = {};
exports.id = "pages/docs/[slug]";
exports.ids = ["pages/docs/[slug]"];
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

/***/ "./components/GraphsComponents/funnel-chart1.tsx":
/*!*******************************************************!*\
  !*** ./components/GraphsComponents/funnel-chart1.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\GraphsComponents\\funnel-chart1.tsx";




const SvgContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "funnel-chart1__SvgContainer",
  componentId: "sc-htr68v-0"
})(["padding:1rem;"]);

const FunnelChart1 = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SvgContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: "/Graphs/funnel-light-1.PNG",
        alt: "funnel-light",
        width: 600,
        height: 500
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunnelChart1);

/***/ }),

/***/ "./components/GraphsComponents/index.tsx":
/*!***********************************************!*\
  !*** ./components/GraphsComponents/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _funnel_chart1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funnel-chart1 */ "./components/GraphsComponents/funnel-chart1.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\GraphsComponents\\index.tsx";




const GraphsComponent = ({
  val
}) => {
  if (val === "FunnelChart1") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_funnel_chart1__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined);
  }

  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GraphsComponent);

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

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

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

/***/ "./pages/docs/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/docs/[slug].tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/mdx */ "./lib/mdx.ts");
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote/serialize */ "next-mdx-remote/serialize");
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-mdx-remote */ "next-mdx-remote");
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rehype-slug */ "rehype-slug");
/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rehype-autolink-headings */ "rehype-autolink-headings");
/* harmony import */ var rehype_highlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rehype-highlight */ "rehype-highlight");
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark.css */ "./node_modules/highlight.js/styles/atom-one-dark.css");
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_GraphsComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/GraphsComponents */ "./components/GraphsComponents/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([rehype_highlight__WEBPACK_IMPORTED_MODULE_7__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_6__, rehype_slug__WEBPACK_IMPORTED_MODULE_5__]);
([rehype_highlight__WEBPACK_IMPORTED_MODULE_7__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_6__, rehype_slug__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\pages\\docs\\[slug].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const GridDocs = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div.withConfig({
  displayName: "slug__GridDocs",
  componentId: "sc-mk2jr0-0"
})(["display:grid;grid-template-columns:1fr 1fr;@media (max-width:48rem){grid-template-columns:1fr;}@media (max-width:70rem){}.hljs{background:var(--surface4);color:var(--text2);border-radius:0.5rem;}"]);
const GraphContent = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div.withConfig({
  displayName: "slug__GraphContent",
  componentId: "sc-mk2jr0-1"
})(["height:calc(100vh - 4rem);@media (max-width:48rem){height:auto;}@media (max-width:70rem){}width:100%;padding:1rem;position:sticky;top:4rem;display:flex;justify-content:center;"]);
const DocContent = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div.withConfig({
  displayName: "slug__DocContent",
  componentId: "sc-mk2jr0-2"
})(["margin:1rem;"]);

const test = ({
  doc,
  locale
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("title", {
        children: ["Beautiful design | Docs | ", doc.meta.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("link", {
        rel: "alternate",
        hrefLang: locale,
        href: locale === "fr" ? router.asPath : `/en${router.asPath}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(GridDocs, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(GraphContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_GraphsComponents__WEBPACK_IMPORTED_MODULE_10__.default, {
          val: doc.meta.chartInfo.chartComponent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(DocContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("h1", {
          children: doc.meta.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__.MDXRemote, _objectSpread({}, doc.source), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);
const getStaticProps = async ({
  params,
  locale
}) => {
  const {
    slug
  } = params;
  const {
    content,
    meta
  } = (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_1__.getDocFromSlug)(slug, locale);
  const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__.serialize)(content, {
    mdxOptions: {
      rehypePlugins: [rehype_slug__WEBPACK_IMPORTED_MODULE_5__.default, [rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_6__.default, {
        behavior: "wrap"
      }], rehype_highlight__WEBPACK_IMPORTED_MODULE_7__.default]
    }
  });
  return {
    props: {
      doc: {
        source: mdxSource,
        meta
      },
      locale
    }
  };
};
const getStaticPaths = async ({
  locales
}) => {
  let paths = [];
  const slugs = (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_1__.getSlugs)("fr");
  slugs.forEach(slug => {
    for (const locale of locales) {
      paths.push({
        params: {
          slug
        },
        locale
      });
    }
  });
  return {
    paths,
    fallback: false
  };
};
});

/***/ }),

/***/ "./node_modules/highlight.js/styles/atom-one-dark.css":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/styles/atom-one-dark.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


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

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-mdx-remote");

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "rehype-autolink-headings":
/*!*******************************************!*\
  !*** external "rehype-autolink-headings" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ "rehype-highlight":
/*!***********************************!*\
  !*** external "rehype-highlight" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("rehype-highlight");;

/***/ }),

/***/ "rehype-slug":
/*!******************************!*\
  !*** external "rehype-slug" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("rehype-slug");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/docs/[slug].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xva2FsaXN0aWMvLi9EYXRhL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vY29tcG9uZW50cy9HcmFwaHNDb21wb25lbnRzL2Z1bm5lbC1jaGFydDEudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9jb21wb25lbnRzL0dyYXBoc0NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL2xva2FsaXN0aWMvLi9saWIvbWR4LnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9sb2NhbGVzL2VuL2luZGV4LnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9sb2NhbGVzL2ZyL2luZGV4LnRzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9sb2thbGlzdGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvLi9wYWdlcy9kb2NzL1tzbHVnXS50c3giLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJnbG9iXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQtbWR4LXJlbW90ZVwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xva2FsaXN0aWMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwicmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxpc3RpYy9leHRlcm5hbCBcInJlaHlwZS1oaWdobGlnaHRcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwicmVoeXBlLXNsdWdcIiIsIndlYnBhY2s6Ly9sb2thbGlzdGljL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbmF2QmFyID0ge1xyXG4gIGxpbmsxOiB7IGZyOiBcIkFjY3VlaWxcIiwgZW46IFwiSG9tZVwiIH0sXHJcbiAgbGluazI6IHsgZnI6IFwiVGFyaWZzXCIsIGVuOiBcIlByaWNpbmdcIiB9LFxyXG4gIGxpbmszOiB7IGZyOiBcIkEgcHJvcG9zXCIsIGVuOiBcIkFib3V0XCIgfSxcclxuICBsaW5rNDogeyBmcjogXCJDb250YWN0XCIsIGVuOiBcIkNvbnRhY3RcIiB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VvID0ge1xyXG4gIG5hbWU6IFwiQmVhdXRpZnVsIERhc2hib2FyZHNcIixcclxuICB0aXRsZToge1xyXG4gICAgZnI6IFwiRG9ubmV6IHBsdXMgZGUgcGVyY3V0YW50IMOgIHZvcyBkYXNoYm9hcmRzXCIsXHJcbiAgICBlbjogXCJNYWtlIHlvdXIgZGF0YSBzaGluZSB3aXRoIGJlYXV0aWZ1bCBkZXNpZ25zXCIsXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhlcm9fc2VjdGlvbiA9IHtcclxuICB0aXRsZTogXCJCZWF1dGlmdWwgRGFzaGJvYXJkc1wiLFxyXG4gIG9wdGlvbjE6IHsgZnI6IFwiRGVzaWducyBleGNlcHRpb25uZWxzXCIsIGVuOiBcIkV4Y2VwdGlvbmFsIGRlc2lnbnNcIiB9LFxyXG4gIG9wdGlvbjI6IHsgZnI6IFwiR3JhcGhlcyBwYXJhbcOpdHJhYmxlc1wiLCBlbjogXCJDdXN0b21hYmxlIGdyYXBoXCIgfSxcclxuICBvcHRpb24zOiB7XHJcbiAgICBmcjogXCIzMCBjcmVkaXRzIMOgIHV0aWxpc2VyIGdyYXR1aXRlbWVudCpcIixcclxuICAgIGVuOiBcIjMwIGNyZWRpdHMgZnJlZSB0byB1c2UqXCIsXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1dHRvbiA9IHtcclxuICBkb2M6IHsgZnI6IFwiTGlyZVwiLCBlbjogXCJSZWFkXCIgfSxcclxuICBlc3NhaTogeyBmcjogXCJFc3NheWVyXCIsIGVuOiBcIlRyeVwiIH0sXHJcbiAgc291c2M6IHsgZnI6IFwiU291c2NyaXJlXCIsIGVuOiBcIlN1YnNjcmliZVwiIH0sXHJcbiAgc2hhcmU6IHsgZnI6IFwiUGFydGFnZXJcIiwgZW46IFwiU2hhcmVcIiB9LFxyXG4gIGFjY291bnQ6IHsgZnI6IFwiU2UgY29ubmVjdGVyIGF2ZWMgZ29vZ2xlXCIsIGVuOiBcIkNvbm5lY3Qgd2l0aCBnb29nbGVcIiB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9vbHRpcCA9IHtcclxuICBkb2M6IHsgZnI6IFwiTGlyZSBsYSBkb2N1bWVudGF0aW9uXCIsIGVuOiBcIlJlYWQgdGhlIGRvY3VtZW50YXRpb25cIiB9LFxyXG4gIGVzc2FpOiB7IGZyOiBcIlV0aWxpc2VyIGxlcyBjcsOpZGl0c1wiLCBlbjogXCJVc2UgY3JlZGl0c1wiIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRyZVRleHQgPSB7XHJcbiAgYWRkOiB7IGZyOiBcIkFqb3V0w6kgbGUgXCIsIGVuOiBcIkFkZCBvbiBcIiB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVjYXAgPSB7XHJcbiAgY3JlZGl0OiB7IGZyOiBcImNyw6lkaXRzXCIsIGVuOiBcImNyZWRpdHNcIiB9LFxyXG4gIHN1YnNjOiB7IGZyOiBcInNvdXNjcmlwdGlvbnNcIiwgZW46IFwic3Vic2NyaXB0aW9uc1wiIH0sXHJcbn1cclxuLy97ZnI6XCJcIixlbjpcIlwifVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoYXJ0cyA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBuYW1lOiB7IGZyOiBcIkdyYXBoaXF1ZSBlbiBlbnRvbm5vaXJcIiwgZW46IFwiRnVubmVsIGNoYXJ0XCIgfSxcclxuICAgIGxpbmtfaW1hZ2U6IFwiL2ltYWdlcy9CZWF1dGlmdWwtU1ZHLUZ1bm5lbC5wbmdcIixcclxuICAgIGRlc2M6IHtcclxuICAgICAgZnI6IFwiTGUgZ3JhcGhpcXVlIGVuIGVudG9ubm9pciB2b3VzIGFpZGUgw6Agdm9pciByYXBpZGVtZW50IG/DuSBleGlzdGVudCBsZXMgdGF1eCBkJ2FiYW5kb24gZXQgbGVzIHRhdXggZGUgY29udmVyc2lvbiBnbG9iYXV4IGRhbnMgdm90cmUgdHVubmVsLlwiLFxyXG4gICAgICBlbjogXCJGdW5uZWwgdmlzdWFsaXphdGlvbnMgaGVscCB5b3UgcXVpY2tseSBzZWUgd2hlcmUgZHJvcC1vZmYgcmF0ZXMgYW5kIG92ZXJhbGwgY29udmVyc2lvbiByYXRlcyBpbiB5b3VyIHN0ZXBwZWQgcHJvY2VzcyBleGlzdC5cIixcclxuICAgIH0sXHJcbiAgICBhZGRlZEF0OiBcIjIwMjItMDEtMjNcIixcclxuICAgIGxpbmtfcGFnZTogXCIvXCIsXHJcbiAgICB2aXpUb29sOiBcIkRhdGEgU3R1ZGlvXCIsXHJcbiAgICBjaGFydENvbXBvbmVudDogXCJGdW5uZWxDaGFydDFcIixcclxuICB9LFxyXG5dXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuY29uc3QgU3ZnQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5gXHJcblxyXG5jb25zdCBGdW5uZWxDaGFydDEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdmdDb250YWluZXI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvR3JhcGhzL2Z1bm5lbC1saWdodC0xLlBOR1wiXHJcbiAgICAgICAgICBhbHQ9XCJmdW5uZWwtbGlnaHRcIlxyXG4gICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3ZnQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZ1bm5lbENoYXJ0MVxyXG4iLCJpbXBvcnQgRnVubmVsQ2hhcnQxIGZyb20gXCIuL2Z1bm5lbC1jaGFydDFcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IEdyYXBoc0NvbXBvbmVudCA9ICh7IHZhbCB9OiB7IHZhbDogc3RyaW5nIH0pID0+IHtcclxuICBpZiAodmFsID09PSBcIkZ1bm5lbENoYXJ0MVwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGdW5uZWxDaGFydDEgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoc0NvbXBvbmVudFxyXG4iLCJpbXBvcnQgZnMgZnJvbSBcImZzXCJcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIlxyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXHJcbmltcG9ydCByZWFkaW5nVGltZSBmcm9tIFwicmVhZGluZy10aW1lXCJcclxuaW1wb3J0IHsgc3luYyB9IGZyb20gXCJnbG9iXCJcclxuaW1wb3J0IHsgSW50ZXJEb2NzIH0gZnJvbSBcIi4uL0B0eXBlcy9pbnRlcmZhY2VcIlxyXG5pbXBvcnQgZnIgZnJvbSBcIi4uL2xvY2FsZXMvZnJcIlxyXG5pbXBvcnQgZW4gZnJvbSBcIi4uL2xvY2FsZXMvZW5cIlxyXG5cclxuY29uc3QgcG9zdERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcIi9EYXRhL0RvY3NcIilcclxuZXhwb3J0IGNvbnN0IGdldEFsbERvY3MgPSAobG9jYWxlOiBcImZyXCIgfCBcImVuXCIgPSBcImZyXCIpID0+IHtcclxuICBjb25zdCBwb3N0cyA9IGdldFNsdWdzKGxvY2FsZSlcclxuICAgIC5tYXAoc2x1ZyA9PiBnZXREb2NGcm9tU2x1ZyhzbHVnLCBsb2NhbGUpKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEubWV0YS5wdWJsaXNoZWRBdCA+IGIubWV0YS5wdWJsaXNoZWRBdCkgcmV0dXJuIC0xXHJcbiAgICAgIGlmIChhLm1ldGEucHVibGlzaGVkQXQgPCBiLm1ldGEucHVibGlzaGVkQXQpIHJldHVybiAxXHJcbiAgICAgIHJldHVybiAwXHJcbiAgICB9KVxyXG4gIHJldHVybiBwb3N0c1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2x1Z3MgPSAobG9jYWxlOiBcImZyXCIgfCBcImVuXCIgPSBcImZyXCIpID0+IHtcclxuICBjb25zdCBwYXRocyA9IHN5bmMoYCR7cG9zdERpcn0vKi4ke2xvY2FsZX0ubWR4YClcclxuICByZXR1cm4gcGF0aHMubWFwKHBhdGggPT4ge1xyXG4gICAgY29uc3QgcGFydHMgPSBwYXRoLnNwbGl0KFwiL1wiKVxyXG4gICAgY29uc3QgZmlsZU5hbWUgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXVxyXG4gICAgY29uc3QgW3NsdWcsIGxvY2FsZSwgX2V4dF0gPSBmaWxlTmFtZS5zcGxpdChcIi5cIilcclxuICAgIHJldHVybiBzbHVnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERvY0Zyb21TbHVnID0gKFxyXG4gIHNsdWc6IHN0cmluZyxcclxuICBsb2NhbGU6IFwiZnJcIiB8IFwiZW5cIiA9IFwiZnJcIlxyXG4pOiBJbnRlckRvY3MgPT4ge1xyXG4gIGNvbnN0IHBvc3RQYXRoID0gcGF0aC5qb2luKHBvc3REaXIsIGAke3NsdWd9LiR7bG9jYWxlfS5tZHhgKVxyXG4gIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhwb3N0UGF0aClcclxuICBjb25zdCB7IGNvbnRlbnQsIGRhdGEgfSA9IG1hdHRlcihzb3VyY2UpXHJcbiAgY29uc3QgdCA9IGxvY2FsZSA9PT0gXCJlblwiID8gZW4gOiBmclxyXG4gIHJldHVybiB7XHJcbiAgICBjb250ZW50LFxyXG4gICAgbWV0YToge1xyXG4gICAgICBzbHVnLFxyXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSA/PyBzbHVnLFxyXG4gICAgICB0YWdzOiAoZGF0YS50YWdzID8/IFtdKS5zb3J0KCksXHJcbiAgICAgIHB1Ymxpc2hlZEF0OiAoZGF0YS5wdWJsaXNoZWRBdCA/PyBuZXcgRGF0ZSgpKS50b1N0cmluZygpLFxyXG4gICAgICBjaGFydEluZm86IHQuY2hhcnRzLmZpbmQoY2hhcnQgPT4gY2hhcnQuaWQgPT09IGRhdGEuZ3JhcGhJZCkhLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBoZXJvX3NlY3Rpb24sXHJcbiAgbmF2QmFyLFxyXG4gIHNlbyxcclxuICBjaGFydHMsXHJcbiAgYnV0dG9uLFxyXG4gIHRvb2x0aXAsXHJcbiAgYXV0cmVUZXh0LFxyXG4gIHJlY2FwLFxyXG59IGZyb20gXCIuLi8uLi9EYXRhL2NvbW1vblwiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBidXR0b246IHtcclxuICAgIGRvYzogYnV0dG9uLmRvY1tcImVuXCJdLFxyXG4gICAgZXNzYWk6IGJ1dHRvbi5lc3NhaVtcImVuXCJdLFxyXG4gICAgc291c2M6IGJ1dHRvbi5zb3VzY1tcImVuXCJdLFxyXG4gICAgYWNjb3VudDogYnV0dG9uLmFjY291bnRbXCJlblwiXSxcclxuICAgIHNoYXJlOiBidXR0b24uc2hhcmVbXCJlblwiXSxcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGRvYzogdG9vbHRpcC5kb2NbXCJlblwiXSxcclxuICAgIGVzc2FpOiB0b29sdGlwLmVzc2FpW1wiZW5cIl0sXHJcbiAgfSxcclxuICBhdXRyZVRleHQ6IHtcclxuICAgIGFkZDogYXV0cmVUZXh0LmFkZFtcImVuXCJdLFxyXG4gIH0sXHJcbiAgbmF2YmFyOiB7XHJcbiAgICBsaW5rMTogbmF2QmFyLmxpbmsxW1wiZW5cIl0sXHJcbiAgICBsaW5rMjogbmF2QmFyLmxpbmsyW1wiZW5cIl0sXHJcbiAgICBsaW5rMzogbmF2QmFyLmxpbmszW1wiZW5cIl0sXHJcbiAgICBsaW5rNDogbmF2QmFyLmxpbms0W1wiZW5cIl0sXHJcbiAgfSxcclxuICByZWNhcDoge1xyXG4gICAgY3JlZGl0OiByZWNhcC5jcmVkaXRbXCJlblwiXSxcclxuICAgIHN1YnNjOiByZWNhcC5zdWJzY1tcImVuXCJdLFxyXG4gIH0sXHJcbiAgc2VvOiB7XHJcbiAgICBuYW1lOiBzZW8ubmFtZSxcclxuICAgIHRpdGxlOiBzZW8udGl0bGVbXCJlblwiXSxcclxuICB9LFxyXG4gIGhlcm9fc2VjdGlvbjoge1xyXG4gICAgdGl0bGU6IGhlcm9fc2VjdGlvbi50aXRsZSxcclxuICAgIG9wdGlvbjE6IGhlcm9fc2VjdGlvbi5vcHRpb24xW1wiZW5cIl0sXHJcbiAgICBvcHRpb24yOiBoZXJvX3NlY3Rpb24ub3B0aW9uMltcImVuXCJdLFxyXG4gICAgb3B0aW9uMzogaGVyb19zZWN0aW9uLm9wdGlvbjNbXCJlblwiXSxcclxuICB9LFxyXG4gIGNoYXJ0czogY2hhcnRzLm1hcCh2YWwgPT4ge1xyXG4gICAgcmV0dXJuIHsgLi4udmFsLCBuYW1lOiB2YWwubmFtZVtcImVuXCJdLCBkZXNjOiB2YWwuZGVzY1tcImVuXCJdIH1cclxuICB9KSxcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGhlcm9fc2VjdGlvbixcclxuICBuYXZCYXIsXHJcbiAgc2VvLFxyXG4gIGNoYXJ0cyxcclxuICBidXR0b24sXHJcbiAgdG9vbHRpcCxcclxuICBhdXRyZVRleHQsXHJcbiAgcmVjYXAsXHJcbn0gZnJvbSBcIi4uLy4uL0RhdGEvY29tbW9uXCJcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgZG9jOiBidXR0b24uZG9jW1wiZnJcIl0sXHJcbiAgICBlc3NhaTogYnV0dG9uLmVzc2FpW1wiZnJcIl0sXHJcbiAgICBzb3VzYzogYnV0dG9uLnNvdXNjW1wiZnJcIl0sXHJcbiAgICBhY2NvdW50OiBidXR0b24uYWNjb3VudFtcImZyXCJdLFxyXG4gICAgc2hhcmU6IGJ1dHRvbi5zaGFyZVtcImZyXCJdLFxyXG4gIH0sXHJcbiAgdG9vbHRpcDoge1xyXG4gICAgZG9jOiB0b29sdGlwLmRvY1tcImZyXCJdLFxyXG4gICAgZXNzYWk6IHRvb2x0aXAuZXNzYWlbXCJmclwiXSxcclxuICB9LFxyXG4gIGF1dHJlVGV4dDoge1xyXG4gICAgYWRkOiBhdXRyZVRleHQuYWRkW1wiZnJcIl0sXHJcbiAgfSxcclxuICBuYXZiYXI6IHtcclxuICAgIGxpbmsxOiBuYXZCYXIubGluazFbXCJmclwiXSxcclxuICAgIGxpbmsyOiBuYXZCYXIubGluazJbXCJmclwiXSxcclxuICAgIGxpbmszOiBuYXZCYXIubGluazNbXCJmclwiXSxcclxuICAgIGxpbms0OiBuYXZCYXIubGluazRbXCJmclwiXSxcclxuICB9LFxyXG4gIHJlY2FwOiB7XHJcbiAgICBjcmVkaXQ6IHJlY2FwLmNyZWRpdFtcImZyXCJdLFxyXG4gICAgc3Vic2M6IHJlY2FwLnN1YnNjW1wiZnJcIl0sXHJcbiAgfSxcclxuICBzZW86IHtcclxuICAgIG5hbWU6IHNlby5uYW1lLFxyXG4gICAgdGl0bGU6IHNlby50aXRsZVtcImZyXCJdLFxyXG4gIH0sXHJcbiAgaGVyb19zZWN0aW9uOiB7XHJcbiAgICB0aXRsZTogaGVyb19zZWN0aW9uLnRpdGxlLFxyXG4gICAgb3B0aW9uMTogaGVyb19zZWN0aW9uLm9wdGlvbjFbXCJmclwiXSxcclxuICAgIG9wdGlvbjI6IGhlcm9fc2VjdGlvbi5vcHRpb24yW1wiZnJcIl0sXHJcbiAgICBvcHRpb24zOiBoZXJvX3NlY3Rpb24ub3B0aW9uM1tcImZyXCJdLFxyXG4gIH0sXHJcbiAgY2hhcnRzOiBjaGFydHMubWFwKHZhbCA9PiB7XHJcbiAgICByZXR1cm4geyAuLi52YWwsIG5hbWU6IHZhbC5uYW1lW1wiZnJcIl0sIGRlc2M6IHZhbC5kZXNjW1wiZnJcIl0gfVxyXG4gIH0pLFxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBsb2NhbGUsIE1EWERvYyB9IGZyb20gXCIuLi8uLi9AdHlwZXMvaW50ZXJmYWNlXCJcclxuaW1wb3J0IHsgZ2V0RG9jRnJvbVNsdWcsIGdldFNsdWdzIH0gZnJvbSBcIi4uLy4uL2xpYi9tZHhcIlxyXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwibmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZVwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyBNRFhSZW1vdGUgfSBmcm9tIFwibmV4dC1tZHgtcmVtb3RlXCJcclxuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSBcInJlaHlwZS1zbHVnXCJcclxuaW1wb3J0IHJlaHlwZUF1dG9saW5rSGVhZGluZ3MgZnJvbSBcInJlaHlwZS1hdXRvbGluay1oZWFkaW5nc1wiXHJcbmltcG9ydCByZWh5cGVIaWdobGlnaHQgZnJvbSBcInJlaHlwZS1oaWdobGlnaHRcIlxyXG5pbXBvcnQgXCJoaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWRhcmsuY3NzXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgR3JhcGhzQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYXBoc0NvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiXHJcbmNvbnN0IEdyaWREb2NzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzByZW0pIHtcclxuICB9XHJcbiAgLmhsanMge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZTQpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB9XHJcbmBcclxuY29uc3QgR3JhcGhDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwcmVtKSB7XHJcbiAgfVxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBEb2NDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDFyZW07XHJcbmBcclxuY29uc3QgdGVzdCA9ICh7IGRvYywgbG9jYWxlIH06IHsgZG9jOiBNRFhEb2M7IGxvY2FsZTogbG9jYWxlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkJlYXV0aWZ1bCBkZXNpZ24gfCBEb2NzIHwge2RvYy5tZXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImFsdGVybmF0ZVwiXHJcbiAgICAgICAgICBocmVmTGFuZz17bG9jYWxlfVxyXG4gICAgICAgICAgaHJlZj17bG9jYWxlID09PSBcImZyXCIgPyByb3V0ZXIuYXNQYXRoIDogYC9lbiR7cm91dGVyLmFzUGF0aH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdyaWREb2NzPlxyXG4gICAgICAgIDxHcmFwaENvbnRlbnQ+XHJcbiAgICAgICAgICA8R3JhcGhzQ29tcG9uZW50IHZhbD17ZG9jLm1ldGEuY2hhcnRJbmZvLmNoYXJ0Q29tcG9uZW50fSAvPlxyXG4gICAgICAgIDwvR3JhcGhDb250ZW50PlxyXG5cclxuICAgICAgICA8RG9jQ29udGVudD5cclxuICAgICAgICAgIDxoMT57ZG9jLm1ldGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDxNRFhSZW1vdGUgey4uLmRvYy5zb3VyY2V9IC8+XHJcbiAgICAgICAgPC9Eb2NDb250ZW50PlxyXG4gICAgICA8L0dyaWREb2NzPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXN0XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zLCBsb2NhbGUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zIGFzIHsgc2x1Zzogc3RyaW5nIH1cclxuICBjb25zdCB7IGNvbnRlbnQsIG1ldGEgfSA9IGdldERvY0Zyb21TbHVnKHNsdWcsIGxvY2FsZSBhcyBcImZyXCIgfCBcImVuXCIpXHJcbiAgY29uc3QgbWR4U291cmNlID0gYXdhaXQgc2VyaWFsaXplKGNvbnRlbnQsIHtcclxuICAgIG1keE9wdGlvbnM6IHtcclxuICAgICAgcmVoeXBlUGx1Z2luczogW1xyXG4gICAgICAgIHJlaHlwZVNsdWcsXHJcbiAgICAgICAgW3JlaHlwZUF1dG9saW5rSGVhZGluZ3MsIHsgYmVoYXZpb3I6IFwid3JhcFwiIH1dLFxyXG4gICAgICAgIHJlaHlwZUhpZ2hsaWdodCxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSlcclxuICByZXR1cm4geyBwcm9wczogeyBkb2M6IHsgc291cmNlOiBtZHhTb3VyY2UsIG1ldGEgfSwgbG9jYWxlIH0gfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKHsgbG9jYWxlcyB9KSA9PiB7XHJcbiAgbGV0IHBhdGhzOiBhbnkgPSBbXVxyXG4gIGNvbnN0IHNsdWdzID0gZ2V0U2x1Z3MoXCJmclwiKVxyXG4gIHNsdWdzLmZvckVhY2goc2x1ZyA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGxvY2FsZSBvZiBsb2NhbGVzISkge1xyXG4gICAgICBwYXRocy5wdXNoKHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNsdWcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2NhbGUsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnbG9iXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtbWR4LXJlbW90ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBpbXBvcnQoXCJyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gaW1wb3J0KFwicmVoeXBlLWhpZ2hsaWdodFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSBpbXBvcnQoXCJyZWh5cGUtc2x1Z1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm5hbWVzIjpbIm5hdkJhciIsImxpbmsxIiwiZnIiLCJlbiIsImxpbmsyIiwibGluazMiLCJsaW5rNCIsInNlbyIsIm5hbWUiLCJ0aXRsZSIsImhlcm9fc2VjdGlvbiIsIm9wdGlvbjEiLCJvcHRpb24yIiwib3B0aW9uMyIsImJ1dHRvbiIsImRvYyIsImVzc2FpIiwic291c2MiLCJzaGFyZSIsImFjY291bnQiLCJ0b29sdGlwIiwiYXV0cmVUZXh0IiwiYWRkIiwicmVjYXAiLCJjcmVkaXQiLCJzdWJzYyIsImNoYXJ0cyIsImlkIiwibGlua19pbWFnZSIsImRlc2MiLCJhZGRlZEF0IiwibGlua19wYWdlIiwidml6VG9vbCIsImNoYXJ0Q29tcG9uZW50Iiwic3R5bGVkIiwiSW1hZ2UiLCJTdmdDb250YWluZXIiLCJkaXYiLCJGdW5uZWxDaGFydDEiLCJSZWFjdCIsIkdyYXBoc0NvbXBvbmVudCIsInZhbCIsImZzIiwibWF0dGVyIiwicGF0aCIsInN5bmMiLCJwb3N0RGlyIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRBbGxEb2NzIiwibG9jYWxlIiwicG9zdHMiLCJnZXRTbHVncyIsIm1hcCIsInNsdWciLCJnZXREb2NGcm9tU2x1ZyIsInNvcnQiLCJhIiwiYiIsIm1ldGEiLCJwdWJsaXNoZWRBdCIsInBhdGhzIiwicGFydHMiLCJzcGxpdCIsImZpbGVOYW1lIiwibGVuZ3RoIiwiX2V4dCIsInBvc3RQYXRoIiwic291cmNlIiwicmVhZEZpbGVTeW5jIiwiY29udGVudCIsImRhdGEiLCJ0IiwidGFncyIsIkRhdGUiLCJ0b1N0cmluZyIsImNoYXJ0SW5mbyIsImZpbmQiLCJjaGFydCIsImdyYXBoSWQiLCJuYXZiYXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3IiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInVybCIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsInVzZUVmZmVjdCIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInNlcmlhbGl6ZSIsIkhlYWQiLCJNRFhSZW1vdGUiLCJyZWh5cGVTbHVnIiwicmVoeXBlQXV0b2xpbmtIZWFkaW5ncyIsInJlaHlwZUhpZ2hsaWdodCIsInVzZVJvdXRlciIsIkdyaWREb2NzIiwiR3JhcGhDb250ZW50IiwiRG9jQ29udGVudCIsInRlc3QiLCJyb3V0ZXIiLCJhc1BhdGgiLCJnZXRTdGF0aWNQcm9wcyIsIm1keFNvdXJjZSIsIm1keE9wdGlvbnMiLCJyZWh5cGVQbHVnaW5zIiwiYmVoYXZpb3IiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwibG9jYWxlcyIsInNsdWdzIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9