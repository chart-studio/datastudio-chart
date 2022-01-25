(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./Data/common.ts":
/*!************************!*\
  !*** ./Data/common.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBar": function() { return /* binding */ navBar; },
/* harmony export */   "seo": function() { return /* binding */ seo; },
/* harmony export */   "hero_section": function() { return /* binding */ hero_section; },
/* harmony export */   "button": function() { return /* binding */ button; },
/* harmony export */   "tooltip": function() { return /* binding */ tooltip; },
/* harmony export */   "autreText": function() { return /* binding */ autreText; },
/* harmony export */   "recap": function() { return /* binding */ recap; },
/* harmony export */   "charts": function() { return /* binding */ charts; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var navBar = {
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
var seo = {
  name: "Beautiful Dashboards",
  title: {
    fr: "Donnez plus de percutant à vos dashboards",
    en: "Make your data shine with beautiful designs"
  }
};
var hero_section = {
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
var button = {
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
var tooltip = {
  doc: {
    fr: "Lire la documentation",
    en: "Read the documentation"
  },
  essai: {
    fr: "Utiliser les crédits",
    en: "Use credits"
  }
};
var autreText = {
  add: {
    fr: "Ajouté le ",
    en: "Add on "
  }
};
var recap = {
  credit: {
    fr: "crédits",
    en: "credits"
  },
  subsc: {
    fr: "souscriptions",
    en: "subscriptions"
  }
}; //{fr:"",en:""}

var charts = [{
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


/***/ }),

/***/ "./components/elements/ButtonLang.tsx":
/*!********************************************!*\
  !*** ./components/elements/ButtonLang.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useClickAway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useClickAway */ "./hooks/useClickAway.ts");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown */ "./components/elements/Dropdown.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\ButtonLang.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Svg = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.svg.withConfig({
  displayName: "ButtonLang__Svg",
  componentId: "sc-vtjfk3-0"
})(["width:1.2rem;height:1.2rem;fill:var(--text2);"]);
_c = Svg;

var ButtonLang = function ButtonLang(_ref) {
  _s();

  var className = _ref.className;

  var _useClickAway = (0,_hooks_useClickAway__WEBPACK_IMPORTED_MODULE_0__.useClickAway)(false),
      open = _useClickAway.open,
      setOpen = _useClickAway.setOpen,
      refControler = _useClickAway.refControler,
      refObject = _useClickAway.refObject;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      style: {
        position: "relative"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        type: "button",
        "aria-label": "changer la langue",
        tabIndex: 0,
        className: className,
        onClick: function onClick() {
          return setOpen(true);
        },
        "data-toggle": "lang",
        ref: refControler,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Svg, {
          focusable: "false",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          className: "m-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
            d: "m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), !open ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Dropdown__WEBPACK_IMPORTED_MODULE_1__.default, {
        refObject: refObject,
        setOpen: setOpen,
        open: open
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(ButtonLang, "Ijsz4hOpHzDmULToEWiocE81mPA=", false, function () {
  return [_hooks_useClickAway__WEBPACK_IMPORTED_MODULE_0__.useClickAway];
});

_c2 = ButtonLang;
/* harmony default export */ __webpack_exports__["default"] = (ButtonLang);

var _c, _c2;

$RefreshReg$(_c, "Svg");
$RefreshReg$(_c2, "ButtonLang");

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


/***/ }),

/***/ "./components/elements/ButtonLight.tsx":
/*!*********************************************!*\
  !*** ./components/elements/ButtonLight.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_toggleAllButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/toggleAllButton */ "./helpers/toggleAllButton.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\ButtonLight.tsx",
    _this = undefined;




var Svg = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.svg.withConfig({
  displayName: "ButtonLight__Svg",
  componentId: "sc-1md8snh-0"
})(["width:1.2rem;height:1.2rem;fill:var(--text2);"]);
_c = Svg;

var ButtonLight = function ButtonLight(_ref) {
  var className = _ref.className,
      statusDark = _ref.statusDark,
      setStatusDark = _ref.setStatusDark;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
    type: "button",
    "aria-label": "mettre le ligth mode",
    tabIndex: 0,
    className: className,
    onClick: function onClick(e) {
      return (0,_helpers_toggleAllButton__WEBPACK_IMPORTED_MODULE_0__.toggleButton)(e)(setStatusDark);
    },
    id: "toggleButtonLight",
    "data-toggle": statusDark !== "true" ? "dark" : "light",
    children: [statusDark !== "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Svg, {
      focusable: "false",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      className: "m-1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this), statusDark === "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Svg, {
      focusable: "false",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      className: "m-1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_c2 = ButtonLight;
/* harmony default export */ __webpack_exports__["default"] = (ButtonLight);

var _c, _c2;

$RefreshReg$(_c, "Svg");
$RefreshReg$(_c2, "ButtonLight");

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


/***/ }),

/***/ "./components/elements/ButtonMobMenu.tsx":
/*!***********************************************!*\
  !*** ./components/elements/ButtonMobMenu.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\ButtonMobMenu.tsx",
    _this = undefined;




var MenuMobWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "ButtonMobMenu__MenuMobWrapper",
  componentId: "sc-1718pp1-0"
})(["cursor:pointer;@media (min-width:48rem){.btn-mob-nav{display:none;}}.menu_burger{width:1.4rem;height:2.5px;background:", ";transition:all var(--speed) ease-in-out;}.menu_burger::before,.menu_burger::after{content:\"\";position:absolute;width:1.4rem;height:2.5px;background:var(--text1);transition:all var(--speed) ease-in-out;border-radius:2px;}.menu_burger::before{transform:", ";}.menu_burger::after{transform:", ";}.btn-mob-nav.open .menu_burger{background:transparent;}.btn-mob-nav.open .menu_burger::before{transform:rotate(45deg);}.btn-mob-nav.open .menu_burger::after{transform:rotate(-45deg);}"], function (props) {
  return props.theme.nbLignes === 3 ? "var(--text1)" : "transparent";
}, function (props) {
  return props.theme.nbLignes === 3 ? "translateY(-6px)" : "translateY(-4px)";
}, function (props) {
  return props.theme.nbLignes === 3 ? "translateY(6px)" : "translateY(4px)";
});
_c = MenuMobWrapper;

var ButtonMobMenu = function ButtonMobMenu(_ref) {
  var nbLignes = _ref.nbLignes,
      openMenu = _ref.openMenu,
      setOpenMenu = _ref.setOpenMenu;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuMobWrapper, {
      theme: {
        nbLignes: nbLignes
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-mob-nav m-3 pt-3 pb-3 mr-4 ".concat(openMenu ? "open" : ""),
        onClick: function onClick(e) {
          setOpenMenu(function (prev) {
            return !prev;
          });
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "br-1 menu_burger"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c2 = ButtonMobMenu;
ButtonMobMenu.defaultProps = {
  nbLignes: 3
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonMobMenu);

var _c, _c2;

$RefreshReg$(_c, "MenuMobWrapper");
$RefreshReg$(_c2, "ButtonMobMenu");

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


/***/ }),

/***/ "./components/elements/Dropdown.tsx":
/*!******************************************!*\
  !*** ./components/elements/Dropdown.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/dist/react-spring.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\Dropdown.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Div = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(react_spring__WEBPACK_IMPORTED_MODULE_0__.animated.div).withConfig({
  displayName: "Dropdown__Div",
  componentId: "sc-7gxomp-0"
})(["position:absolute;top:3.5rem;width:8rem;transform:translateX(-50%);background-color:var(--surface3);padding:0rem;overflow:hidden;border:solid 1px var(--surface4);"]);
_c = Div;
var DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.a.withConfig({
  displayName: "Dropdown__DropDownItem",
  componentId: "sc-7gxomp-1"
})(["height:50px;display:flex;align-items:center;background-color:transparent;color:", ";transition:background-color var(--speed);letter-spacing:0.8px;font-size:inherit;padding:1rem;border-bottom:1px solid var(--surface4);cursor:pointer;:hover{background-color:var(--surface4);}"], function (props) {
  return props.theme.activ === true ? "var(--brand)" : null;
});
_c2 = DropDownItem;

var Dropdown = function Dropdown(_ref) {
  _s();

  var refObject = _ref.refObject,
      setOpen = _ref.setOpen,
      open = _ref.open;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var locale = router.locale;
  var transitions = (0,react_spring__WEBPACK_IMPORTED_MODULE_0__.useTransition)(open, {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: transitions(function (styles, item) {
      return item && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Div, {
        style: styles,
        className: "br-4",
        ref: refObject,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(DropDownItem, {
          theme: {
            activ: locale === "en"
          },
          onClick: function onClick() {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(DropDownItem, {
          theme: {
            activ: locale === "fr"
          },
          onClick: function onClick() {
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
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false);
};

_s(Dropdown, "mJ4LXuv9fPDUGEHJ42dDbg+1dUg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, react_spring__WEBPACK_IMPORTED_MODULE_0__.useTransition];
});

_c3 = Dropdown;
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

var _c, _c2, _c3;

$RefreshReg$(_c, "Div");
$RefreshReg$(_c2, "DropDownItem");
$RefreshReg$(_c3, "Dropdown");

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


/***/ }),

/***/ "./components/elements/Navbar.tsx":
/*!****************************************!*\
  !*** ./components/elements/Navbar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/dist/react-spring.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locales_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../locales/fr */ "./locales/fr/index.ts");
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../locales/en */ "./locales/en/index.ts");
/* harmony import */ var _hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useDarkMode */ "./hooks/useDarkMode.tsx");
/* harmony import */ var _hooks_useClickAway__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useClickAway */ "./hooks/useClickAway.ts");
/* harmony import */ var _ButtonLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ButtonLang */ "./components/elements/ButtonLang.tsx");
/* harmony import */ var _ButtonLight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ButtonLight */ "./components/elements/ButtonLight.tsx");
/* harmony import */ var _ButtonMobMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ButtonMobMenu */ "./components/elements/ButtonMobMenu.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\components\\elements\\Navbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();















var Header = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.header.withConfig({
  displayName: "Navbar__Header",
  componentId: "sc-u19x74-0"
})(["height:4rem;@media (min-width:48rem){&{height:4rem;}}position:sticky;top:0;backdrop-filter:blur(20px);box-shadow:inset 0px 0px 1px var(--text2);z-index:100;"]);
_c = Header;
var LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div.withConfig({
  displayName: "Navbar__LogoWrapper",
  componentId: "sc-u19x74-1"
})(["position:relative;"]);
_c2 = LogoWrapper;
var ContainerNav = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div.withConfig({
  displayName: "Navbar__ContainerNav",
  componentId: "sc-u19x74-2"
})(["position:relative;z-index:1;font-weight:400;"]);
_c3 = ContainerNav;
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.ul.withConfig({
  displayName: "Navbar__Menu",
  componentId: "sc-u19x74-3"
})(["text-align:center;height:100%;"]);
_c4 = Menu;
var MenuMobWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__.default)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div).withConfig({
  displayName: "Navbar__MenuMobWrapper",
  componentId: "sc-u19x74-4"
})(["z-index:-1;width:100%;position:fixed;background-color:var(--surface1);@media (min-width:48rem){&{display:none;}}"]);
_c5 = MenuMobWrapper;
var MenuMob = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div.withConfig({
  displayName: "Navbar__MenuMob",
  componentId: "sc-u19x74-5"
})(["left:0;width:100%;margin:auto;ul{width:100%;padding:0;}"]);
_c6 = MenuMob;
var MenuMobNav = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.ul.withConfig({
  displayName: "Navbar__MenuMobNav",
  componentId: "sc-u19x74-6"
})(["font-weight:400;"]);
_c7 = MenuMobNav;
var LinkPage = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.li.withConfig({
  displayName: "Navbar__LinkPage",
  componentId: "sc-u19x74-7"
})(["font-weight:", ";background-color:", ";letter-spacing:", ";opacity:0.8;display:flex;position:relative;min-width:5rem;text-align:center;align-items:center;user-select:none;@media (min-width:48rem){&&::after{content:\"\";display:block;position:absolute;width:", ";border-bottom:solid 2px var(--brand);transition:width 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;bottom:0;}&&:hover::after{content:\"\";display:block;width:100%;border-bottom:solid 2px var(--brand);bottom:0;}}"], function (props) {
  return props.theme.active ? "600" : null;
}, function (props) {
  return props.theme.active ? "var(--surface3)" : "transparent";
}, function (props) {
  return props.theme.active ? "1.8px" : null;
}, function (props) {
  return props.theme.active ? "100%" : "0%";
});
_c8 = LinkPage;
var ContainerImage = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div.withConfig({
  displayName: "Navbar__ContainerImage",
  componentId: "sc-u19x74-8"
})(["height:100%;img{object-fit:cover;}"]);
_c9 = ContainerImage;

var NavBar = function NavBar() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var locale = router.locale;
  var t = locale === "fr" ? _locales_fr__WEBPACK_IMPORTED_MODULE_5__.default : _locales_en__WEBPACK_IMPORTED_MODULE_6__.default;

  var _useDarkMode = (0,_hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_7__.useDarkMode)("", "statusDark"),
      _useDarkMode2 = (0,C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useDarkMode, 2),
      statusDark = _useDarkMode2[0],
      setStatusDark = _useDarkMode2[1];

  var _useClickAway = (0,_hooks_useClickAway__WEBPACK_IMPORTED_MODULE_8__.useClickAway)(false),
      refControler = _useClickAway.refControler,
      open = _useClickAway.open,
      setOpen = _useClickAway.setOpen,
      refObject = _useClickAway.refObject;

  var transitions = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition)(open, {
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
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    console.log(router.pathname);
  }, [router]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Header, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ContainerNav, {
        className: "container-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LogoWrapper, {
          className: "m-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ContainerImage, {
                children: "LOGO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
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
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          className: "space-nav"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ButtonLang__WEBPACK_IMPORTED_MODULE_9__.default, {
          className: "m-3 br-4 button p-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ButtonLight__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: "m-3 br-4 button p-1",
          statusDark: statusDark,
          setStatusDark: setStatusDark
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          ref: refControler,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ButtonMobMenu__WEBPACK_IMPORTED_MODULE_11__.default, {
            nbLignes: 2,
            openMenu: open,
            setOpenMenu: setOpen
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), transitions(function (styles, item) {
        return item && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(MenuMobWrapper, {
          className: "box-shadow-1",
          style: styles,
          ref: refObject,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(MenuMob, {
            className: "container-navMob",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(MenuMobNav, {
              "aria-haspopup": "true",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                  className: "pt-2 pb-2 navLink mt-2",
                  onClick: function onClick() {
                    return setOpen(false);
                  },
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/pricing",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                  className: "pt-2 pb-2 navLink mt-2",
                  onClick: function onClick() {
                    return setOpen(false);
                  },
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/about",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                  className: "pt-2 pb-2 navLink mt-2",
                  onClick: function onClick() {
                    return setOpen(false);
                  },
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/contact",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(LinkPage, {
                  className: "pt-2 pb-2 navLink",
                  onClick: function onClick() {
                    return setOpen(false);
                  },
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 15
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(NavBar, "2X78X7LrY6gWzElOT8lwT14AVmM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, _hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_7__.useDarkMode, _hooks_useClickAway__WEBPACK_IMPORTED_MODULE_8__.useClickAway, react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition];
});

_c10 = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "LogoWrapper");
$RefreshReg$(_c3, "ContainerNav");
$RefreshReg$(_c4, "Menu");
$RefreshReg$(_c5, "MenuMobWrapper");
$RefreshReg$(_c6, "MenuMob");
$RefreshReg$(_c7, "MenuMobNav");
$RefreshReg$(_c8, "LinkPage");
$RefreshReg$(_c9, "ContainerImage");
$RefreshReg$(_c10, "NavBar");

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


/***/ }),

/***/ "./helpers/darkModeFunc.ts":
/*!*********************************!*\
  !*** ./helpers/darkModeFunc.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkModeFunc": function() { return /* binding */ darkModeFunc; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var darkModeFunc = function darkModeFunc(statusDark) {
  return function darkModeFunc(setStatusDark) {
    var doc = document.firstElementChild;

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
};

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


/***/ }),

/***/ "./helpers/toggleAllButton.ts":
/*!************************************!*\
  !*** ./helpers/toggleAllButton.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleButton": function() { return /* binding */ toggleButton; }
/* harmony export */ });
/* harmony import */ var _darkModeFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./darkModeFunc */ "./helpers/darkModeFunc.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

function toggleButton(e) {
  e.preventDefault();

  if (e.currentTarget.dataset) {
    var toggle = e.currentTarget.dataset.toggle;

    if (toggle === "light" || toggle === "dark") {
      var statusDark = toggle === "light" ? "true" : "false";
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


/***/ }),

/***/ "./hooks/useClickAway.ts":
/*!*******************************!*\
  !*** ./hooks/useClickAway.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useClickAway": function() { return /* binding */ useClickAway; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();


var useClickAway = function useClickAway(initialVal) {
  _s();

  var refControler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var refObject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialVal),
      open = _useState[0],
      setOpen = _useState[1];

  var handleClickOutside = function handleClickOutside(event) {
    if (refControler.current && !refControler.current.contains(event.target) && refObject.current && !refObject.current.contains(event.target)) {
      setOpen(false);
    }
  };

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === "Escape") {
      if (open) {
        setOpen(false);
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("keydown", handleKeyPress, true);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("keydown", handleKeyPress, true);
    };
  }, [open]);
  return {
    open: open,
    setOpen: setOpen,
    refControler: refControler,
    refObject: refObject
  };
};

_s(useClickAway, "yKSjojWXUB48CKv+FB4yI99LGGY=");

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


/***/ }),

/***/ "./hooks/useDarkMode.tsx":
/*!*******************************!*\
  !*** ./hooks/useDarkMode.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDarkMode": function() { return /* binding */ useDarkMode; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();


function useDarkMode(defaultVal, key) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultVal),
      statusDark = _useState[0],
      setStatusDark = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var doc = document.firstElementChild;

    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      var darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      if (darkModeMediaQuery.matches && darkModeMediaQuery.media === "(prefers-color-scheme: dark)") {
        setStatusDark("true");
        localStorage.setItem("statusDark", "true");
      } //Ecouter les évènements


      darkModeMediaQuery.addEventListener("change", function (e) {
        var darkModeOn = e.matches;

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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var val = localStorage.getItem(key);

    if (val !== null) {
      setStatusDark(val);
    }
  }, [key]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var doc = document.firstElementChild;

    if (statusDark === "true") {
      doc.setAttribute("color-scheme", "dark");
    } else if (statusDark === "false") {
      doc.setAttribute("color-scheme", "light");
    }
  }, [statusDark]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.localStorage.setItem(key, statusDark);
  }, [key, statusDark]);
  return [statusDark, setStatusDark];
}

_s(useDarkMode, "owkdyHPckuB5l7wdpTFeXeFMIjU=");

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


/***/ }),

/***/ "./locales/en/index.ts":
/*!*****************************!*\
  !*** ./locales/en/index.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Data_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/common */ "./Data/common.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = ({
  button: {
    doc: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.doc.en,
    essai: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.essai.en,
    sousc: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.sousc.en,
    account: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.account.en,
    share: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.share.en
  },
  tooltip: {
    doc: _Data_common__WEBPACK_IMPORTED_MODULE_1__.tooltip.doc.en,
    essai: _Data_common__WEBPACK_IMPORTED_MODULE_1__.tooltip.essai.en
  },
  autreText: {
    add: _Data_common__WEBPACK_IMPORTED_MODULE_1__.autreText.add.en
  },
  navbar: {
    link1: _Data_common__WEBPACK_IMPORTED_MODULE_1__.navBar.link1.en,
    link2: _Data_common__WEBPACK_IMPORTED_MODULE_1__.navBar.link2.en,
    link3: _Data_common__WEBPACK_IMPORTED_MODULE_1__.navBar.link3.en,
    link4: _Data_common__WEBPACK_IMPORTED_MODULE_1__.navBar.link4.en
  },
  recap: {
    credit: _Data_common__WEBPACK_IMPORTED_MODULE_1__.recap.credit.en,
    subsc: _Data_common__WEBPACK_IMPORTED_MODULE_1__.recap.subsc.en
  },
  seo: {
    name: _Data_common__WEBPACK_IMPORTED_MODULE_1__.seo.name,
    title: _Data_common__WEBPACK_IMPORTED_MODULE_1__.seo.title.en
  },
  hero_section: {
    title: _Data_common__WEBPACK_IMPORTED_MODULE_1__.hero_section.title,
    option1: _Data_common__WEBPACK_IMPORTED_MODULE_1__.hero_section.option1.en,
    option2: _Data_common__WEBPACK_IMPORTED_MODULE_1__.hero_section.option2.en,
    option3: _Data_common__WEBPACK_IMPORTED_MODULE_1__.hero_section.option3.en
  },
  charts: _Data_common__WEBPACK_IMPORTED_MODULE_1__.charts.map(function (val) {
    return _objectSpread(_objectSpread({}, val), {}, {
      name: val.name["en"],
      desc: val.desc["en"]
    });
  })
});

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


/***/ }),

/***/ "./locales/fr/index.ts":
/*!*****************************!*\
  !*** ./locales/fr/index.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Data_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/common */ "./Data/common.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = ({
  button: {
    doc: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.doc.fr,
    essai: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.essai.fr,
    sousc: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.sousc.fr,
    account: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.account.fr,
    share: _Data_common__WEBPACK_IMPORTED_MODULE_1__.button.share.fr
  },
  tooltip: {
    doc: _Data_common__WEBPACK_IMPORTED_MODULE_1__.tooltip.doc.fr,
    essai: _Data_common__WEBPACK_IMPORTED_MODULE_1__.tooltip.essai.fr
  },
  autreText: {
    add: _Data_common__WEBPACK_IMPORTED_MODULE_1__.autreText.add.fr
  },
  navbar: {
    link1: _Data_common__WEBPACK_IMPORTED_MODULE_1__.navBar.link1.fr,
    link2: _Data_common__WEBPACK_IMPORTED_MODULE_1__.navBar.link2.fr,
    link3: _Data_common__WEBPACK_IMPORTED_MODULE_1__.navBar.link3.fr,
    link4: _Data_common__WEBPACK_IMPORTED_MODULE_1__.navBar.link4.fr
  },
  recap: {
    credit: _Data_common__WEBPACK_IMPORTED_MODULE_1__.recap.credit.fr,
    subsc: _Data_common__WEBPACK_IMPORTED_MODULE_1__.recap.subsc.fr
  },
  seo: {
    name: _Data_common__WEBPACK_IMPORTED_MODULE_1__.seo.name,
    title: _Data_common__WEBPACK_IMPORTED_MODULE_1__.seo.title.fr
  },
  hero_section: {
    title: _Data_common__WEBPACK_IMPORTED_MODULE_1__.hero_section.title,
    option1: _Data_common__WEBPACK_IMPORTED_MODULE_1__.hero_section.option1.fr,
    option2: _Data_common__WEBPACK_IMPORTED_MODULE_1__.hero_section.option2.fr,
    option3: _Data_common__WEBPACK_IMPORTED_MODULE_1__.hero_section.option3.fr
  },
  charts: _Data_common__WEBPACK_IMPORTED_MODULE_1__.charts.map(function (val) {
    return _objectSpread(_objectSpread({}, val), {}, {
      name: val.name["fr"],
      desc: val.desc["fr"]
    });
  })
});

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


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + ( true ? "\nOpen your browser's console to view the Component stack trace." : 0));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router1).useRouter();

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _resolveHref = (0, _router).resolveHref(router, props.href, true),
        _resolveHref2 = _slicedToArray(_resolveHref, 2),
        resolvedHref = _resolveHref2[0],
        resolvedAs = _resolveHref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child;

  if (true) {
    try {
      child = _react["default"].Children.only(children);
    } catch (err) {
      throw new Error("Multiple children were passed to <Link> with `href` of `".concat(props.href, "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children") + ( true ? " \nOpen your browser's console to view the Component stack trace." : 0));
    }
  } else {}

  var childRef = child && typeof child === 'object' && child.ref;

  var _useIntersection2 = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  }),
      _useIntersection3 = _slicedToArray(_useIntersection2, 2),
      setIntersectionRef = _useIntersection3[0],
      isVisible = _useIntersection3[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react["default"].useEffect(function () {
    var shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
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
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "PYHstBoZE4p1pf5wc1Vw4fTzvCU=", true);

_c = Link;
var _default = Link;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Link");

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


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  _s();

  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react).useRef();

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var setRef = (0, _react).useCallback(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

_s(useIntersection, "Z6jj7qx+KE6gD9CpC9WlQTha45o=");

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

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


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_elements_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/elements/Navbar */ "./components/elements/Navbar.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/GlobalStyle */ "./styles/GlobalStyle.tsx");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\YveZ\\github.com\\visualisation\\website\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_YveZ_github_com_visualisation_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
      theme: {},
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_elements_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
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
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

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


/***/ }),

/***/ "./styles/GlobalStyle.tsx":
/*!********************************!*\
  !*** ./styles/GlobalStyle.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
 //variables

var ratioMargin = "0.125rem";
var ratioPadding = "0.125rem";
var ratioBorderRadius = "2px";
var ratioBorderRadiusPer = "25%";
var GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([".m-1{margin:calc(", " * 2 * 1)}.m-2{margin:calc(", " * 2 * 2)}.m-3{margin:calc(", " * 2 * 3)}.m-4{margin:calc(", " * 2 * 4)}.m-5{margin:calc(", " * 2 * 5)}.m-6{margin:calc(", " * 2 * 6)}.mt-1{margin-top:calc(", " * 2 * 1)}.mt-2{margin-top:calc(", " * 2 * 2)}.mt-3{margin-top:calc(", " * 2 * 3)}.mt-4{margin-top:calc(", " * 2 * 4)}.mt-5{margin-top:calc(", " * 2 * 5)}.mt-6{margin-top:calc(", " * 2 * 6)}.-mt-1{margin-top:calc(", " * 2 * -1)}.-mt-2{margin-top:calc(", " * 2 * -2)}.-mt-3{margin-top:calc(", " * 2 * -3)}.-mt-4{margin-top:calc(", " * 2 * -4)}.-mt-5{margin-top:calc(", " * 2 * -5)}.-mt-6{margin-top:calc(", " * 2 * -6)}.ml-1{margin-left:calc(", " * 2 * 1)}.ml-2{margin-left:calc(", " * 2 * 2)}.ml-3{margin-left:calc(", " * 2 * 3)}.ml-4{margin-left:calc(", " * 2 * 4)}.ml-5{margin-left:calc(", " * 2 * 5)}.ml-6{margin-left:calc(", " * 2 * 6)}.-ml-1{margin-left:calc(", " * 2 * -1)}.-ml-2{margin-left:calc(", " * 2 * -2)}.-ml-3{margin-left:calc(", " * 2 * -3)}.-ml-4{margin-left:calc(", " * 2 * -4)}.-ml-5{margin-left:calc(", " * 2 * -5)}.-ml-6{margin-left:calc(", " * 2 * -6)}.mr-1{margin-right:calc(", " * 2 * 1)}.mr-2{margin-right:calc(", " * 2 * 2)}.mr-3{margin-right:calc(", " * 2 * 3)}.mr-4{margin-right:calc(", " * 2 * 4)}.mr-5{margin-right:calc(", " * 2 * 5)}.mr-6{margin-right:calc(", " * 2 * 6)}.-mr-1{margin-right:calc(", " * 2 * -1)}.-mr-2{margin-right:calc(", " * 2 * -2)}.-mr-3{margin-right:calc(", " * 2 * -3)}.-mr-4{margin-right:calc(", " * 2 * -4)}.-mr-5{margin-right:calc(", " * 2 * -5)}.-mr-6{margin-right:calc(", " * 2 * -6)}.mb-1{margin-bottom:calc(", " * 2 * 1)}.mb-2{margin-bottom:calc(", " * 2 * 2)}.mb-3{margin-bottom:calc(", " * 2 * 3)}.mb-4{margin-bottom:calc(", " * 2 * 4)}.mb-5{margin-bottom:calc(", " * 2 * 5)}.mb-6{margin-bottom:calc(", " * 2 * 6)}.mb-7{margin-bottom:calc(", " * 2 * 7)}.mb-8{margin-bottom:calc(", " * 2 * 8)}.p-1{padding:calc(", " * 2)}.p-2{padding:calc(", " * 4)}.p-3{padding:calc(", " * 6)}.p-4{padding:calc(", " * 8)}.p-5{padding:calc(", " * 10)}.p-6{padding:calc(", " * 12)}.pt-1{padding-top:calc(", " * 2)}.pt-2{padding-top:calc(", " * 4)}.pt-3{padding-top:calc(", " * 6)}.pt-4{padding-top:calc(", " * 8)}.pt-5{padding-top:calc(", " * 10)}.pt-6{padding-top:calc(", " * 12)}.pb-1{padding-bottom:calc(", " * 2)}.pb-2{padding-bottom:calc(", " * 4)}.pb-3{padding-bottom:calc(", " * 6)}.pb-4{padding-bottom:calc(", " * 8)}.pb-5{padding-bottom:calc(", " * 10)}.pb-6{padding-bottom:calc(", " * 12)}.pl-1{padding-left:calc(", " * 2)}.pl-2{padding-left:calc(", " * 4)}.pl-3{padding-left:calc(", " * 6)}.pl-4{padding-left:calc(", " * 8)}.pl-5{padding-left:calc(", " * 10)}.pl-6{padding-left:calc(", " * 12)}.pr-1{padding-right:calc(", " * 2)}.pr-2{padding-right:calc(", " * 4)}.pr-3{padding-right:calc(", " * 6)}.pr-4{padding-right:calc(", " * 8)}.pr-5{padding-right:calc(", " * 10)}.pr-6{padding-right:calc(", " * 12)}.br-1{border-radius:calc(", "*1)}.br-2{border-radius:calc(", "*2)}.br-3{border-radius:calc(", "*3)}.br-4{border-radius:calc(", "*4)}.br-5{border-radius:calc(", "*5)}.br-per-1{border-radius:calc(", "*1)}.br-per-2{border-radius:calc(", "*2)}.br-per-3{border-radius:calc(", "*3)}.br-per-4{border-radius:calc(", "*4)}.back{z-index:-100;position:absolute;top:0;}.spacer{width:100%;height:100vh;background-repeat:no-repeat;background-size:cover;}.layer{background-image:url(\"/background/waves.svg\");}.line-shadow{box-shadow:inset 0px 0px 1px var(--text2);}.box-shadow-1{box-shadow:0px 2px 7px -4px var(--surface3);}.box-shadow-2{box-shadow:-1px 7px 15px 4px var(--text2);}.box-shadow-3{box-shadow:-1px 7px 15px 6px var(--text2);}.box-shadow-4{box-shadow:-1px 7px 15px 8px var(--text2);}.box-shadow-5{box-shadow:-1px 7px 15px 10px var(--text2);}.button{outline:0;cursor:pointer;user-select:none;text-decoration:none;border:solid 1px var(--surface4);background-color:transparent;display:flex;transition:background-color var(--speed) cubic-bezier(0.4,0,0.2,1) 0ms;}.navLink{transition:background-color var(--speed) cubic-bezier(0.4,0,0.2,1) 0ms;cursor:pointer;user-select:none;}.navLink:hover{}.button:hover{background-color:var(--surface3);}.container{width:100%;padding-left:1rem;padding-right:1rem;margin-right:auto;margin-left:auto;}.containerPage{width:100%;min-height:80vh;padding-left:1rem;padding-right:1rem;margin-right:auto;margin-left:auto;margin-bottom:4rem;}.container-nav{width:100%;height:100%;display:flex;margin:auto;align-items:center;}.container-navMob{width:100%;height:100%;display:flex;}.space-nav{margin-left:auto;}.btn-mob-nav{display:block;cursor:pointer;}.menu-desktop{display:none;height:100%;position:relative;}@media (min-width:24rem){.container,.containerPage,.container-nav,.container-navMob{max-width:24em;}}.btn-search-nav{display:none;}@media (min-width:36rem){.container,.containerPage,.container-nav,.container-navMob{max-width:36rem;}.btn-search-nav{display:flex;align-items:center;}}@media (min-width:48rem){.container,.containerPage,.container-nav,.container-navMob{max-width:48rem;}.menu-desktop{display:block;}}@media (min-width:70rem){.container,.containerPage,.container-nav,.container-navMob{max-width:70rem;}}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}.border-gradient{border:10px solid;border-image-slice:1;border-width:2px;}.border-gradient-purple{border-image-source:linear-gradient(to left,#743ad5,#d53a9d);}"], ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioPadding, ratioPadding, ratioPadding, ratioPadding, ratioPadding, ratioPadding, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioMargin, ratioBorderRadius, ratioBorderRadius, ratioBorderRadius, ratioBorderRadius, ratioBorderRadius, ratioBorderRadiusPer, ratioBorderRadiusPer, ratioBorderRadiusPer, ratioBorderRadiusPer);
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

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


/***/ }),

/***/ "./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animated": function() { return /* binding */ Animated; },
/* harmony export */   "AnimatedArray": function() { return /* binding */ AnimatedArray; },
/* harmony export */   "AnimatedObject": function() { return /* binding */ AnimatedObject; },
/* harmony export */   "AnimatedString": function() { return /* binding */ AnimatedString; },
/* harmony export */   "AnimatedValue": function() { return /* binding */ AnimatedValue; },
/* harmony export */   "createHost": function() { return /* binding */ createHost; },
/* harmony export */   "getAnimated": function() { return /* binding */ getAnimated; },
/* harmony export */   "getAnimatedType": function() { return /* binding */ getAnimatedType; },
/* harmony export */   "getPayload": function() { return /* binding */ getPayload; },
/* harmony export */   "isAnimated": function() { return /* binding */ isAnimated; },
/* harmony export */   "setAnimated": function() { return /* binding */ setAnimated; }
/* harmony export */ });
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const $node = Symbol.for('Animated:node');
const isAnimated = value => !!value && value[$node] === value;
const getAnimated = owner => owner && owner[$node];
const setAnimated = (owner, node) => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.defineHidden)(owner, $node, node);
const getPayload = owner => owner && owner[$node] && owner[$node].getPayload();
class Animated {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }

  getPayload() {
    return this.payload || [];
  }

}

class AnimatedValue extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }

  static create(value) {
    return new AnimatedValue(value);
  }

  getPayload() {
    return [this];
  }

  getValue() {
    return this._value;
  }

  setValue(value, step) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(value)) {
      this.lastPosition = value;

      if (step) {
        value = Math.round(value / step) * step;

        if (this.done) {
          this.lastPosition = value;
        }
      }
    }

    if (this._value === value) {
      return false;
    }

    this._value = value;
    return true;
  }

  reset() {
    const {
      done
    } = this;
    this.done = false;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done) this.lastVelocity = null;
      this.v0 = null;
    }
  }

}

class AnimatedString extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator)({
      output: [value, value]
    });
  }

  static create(value) {
    return new AnimatedString(value);
  }

  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }

  setValue(value) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(value)) {
      if (value == this._string) {
        return false;
      }

      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }

    return true;
  }

  reset(goal) {
    if (goal) {
      this._toString = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator)({
        output: [this.getValue(), goal]
      });
    }

    this._value = 0;
    super.reset();
  }

}

const TreeContext = {
  dependencies: null
};

class AnimatedObject extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }

  getValue(animated) {
    const values = {};
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated);
      } else if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
        values[key] = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(source);
      } else if (!animated) {
        values[key] = source;
      }
    });
    return values;
  }

  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }

  reset() {
    if (this.payload) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(this.payload, node => node.reset());
    }
  }

  _makePayload(source) {
    if (source) {
      const payload = new Set();
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }

  _addToPayload(source) {
    if (TreeContext.dependencies && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
      TreeContext.dependencies.add(source);
    }

    const payload = getPayload(source);

    if (payload) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(payload, node => this.add(node));
    }
  }

}

class AnimatedArray extends AnimatedObject {
  constructor(source) {
    super(source);
  }

  static create(source) {
    return new AnimatedArray(source);
  }

  getValue() {
    return this.source.map(node => node.getValue());
  }

  setValue(source) {
    const payload = this.getPayload();

    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }

    super.setValue(source.map(makeAnimated));
    return true;
  }

}

function makeAnimated(value) {
  const nodeType = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}

function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(value) ? AnimatedArray : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(value) ? AnimatedString : AnimatedValue;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const withAnimated = (Component, host) => {
  const hasInstance = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const ref = hasInstance && (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host);
    const forceUpdate = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useForceUpdate)();

    const callback = () => {
      const instance = instanceRef.current;

      if (hasInstance && !instance) {
        return;
      }

      const didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;

      if (didUpdate === false) {
        forceUpdate();
      }
    };

    const observer = new PropsObserver(callback, deps);
    const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
      const lastObserver = observerRef.current;
      observerRef.current = observer;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(deps, dep => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(dep, observer));

      if (lastObserver) {
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(lastObserver.deps, dep => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(dep, lastObserver));
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.cancel(lastObserver.update);
      }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(callback, []);
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useOnce)(() => () => {
      const observer = observerRef.current;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(observer.deps, dep => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(dep, observer));
    });
    const usedProps = host.getComponentProps(props.getValue());
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, _extends({}, usedProps, {
      ref: ref
    }));
  });
};

class PropsObserver {
  constructor(update, deps) {
    this.update = update;
    this.deps = deps;
  }

  eventObserved(event) {
    if (event.type == 'change') {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.write(this.update);
    }
  }

}

function getAnimatedState(props, host) {
  const dependencies = new Set();
  TreeContext.dependencies = dependencies;
  if (props.style) props = _extends({}, props, {
    style: host.createAnimatedStyle(props.style)
  });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}

function updateRef(ref, value) {
  if (ref) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(ref)) ref(value);else ref.current = value;
  }

  return value;
}

const cacheKey = Symbol.for('AnimatedComponent');
const createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = style => new AnimatedObject(style),
  getComponentProps: _getComponentProps = props => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };

  const animated = Component => {
    const displayName = getDisplayName(Component) || 'Anonymous';

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(Component)) {
      Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }

    Component.displayName = `Animated(${displayName})`;
    return Component;
  };

  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(components, (Component, key) => {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(components)) {
      key = getDisplayName(Component);
    }

    animated[key] = animated(Component);
  });
  return {
    animated
  };
};

const getDisplayName = arg => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(arg) ? arg : arg && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(arg.displayName) ? arg.displayName : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(arg) && arg.name || null;




/***/ }),

/***/ "./node_modules/@react-spring/core/dist/react-spring-core.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-spring/core/dist/react-spring-core.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Globals": function() { return /* reexport safe */ _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals; },
/* harmony export */   "createInterpolator": function() { return /* reexport safe */ _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator; },
/* harmony export */   "BailSignal": function() { return /* binding */ BailSignal; },
/* harmony export */   "Controller": function() { return /* binding */ Controller; },
/* harmony export */   "FrameValue": function() { return /* binding */ FrameValue; },
/* harmony export */   "Interpolation": function() { return /* binding */ Interpolation; },
/* harmony export */   "Spring": function() { return /* binding */ Spring; },
/* harmony export */   "SpringContext": function() { return /* binding */ SpringContext; },
/* harmony export */   "SpringRef": function() { return /* binding */ SpringRef; },
/* harmony export */   "SpringValue": function() { return /* binding */ SpringValue; },
/* harmony export */   "Trail": function() { return /* binding */ Trail; },
/* harmony export */   "Transition": function() { return /* binding */ Transition; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "easings": function() { return /* binding */ easings; },
/* harmony export */   "inferTo": function() { return /* binding */ inferTo; },
/* harmony export */   "interpolate": function() { return /* binding */ interpolate; },
/* harmony export */   "to": function() { return /* binding */ to; },
/* harmony export */   "update": function() { return /* binding */ update; },
/* harmony export */   "useChain": function() { return /* binding */ useChain; },
/* harmony export */   "useSpring": function() { return /* binding */ useSpring; },
/* harmony export */   "useSpringRef": function() { return /* binding */ useSpringRef; },
/* harmony export */   "useSprings": function() { return /* binding */ useSprings; },
/* harmony export */   "useTrail": function() { return /* binding */ useTrail; },
/* harmony export */   "useTransition": function() { return /* binding */ useTransition; }
/* harmony export */ });
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/animated */ "./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js");
/* harmony import */ var _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/types/animated */ "./node_modules/@react-spring/types/animated.js");
/* harmony import */ var _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__) if(["default","Globals","createInterpolator","BailSignal","Controller","FrameValue","Interpolation","Spring","SpringContext","SpringRef","SpringValue","Trail","Transition","config","easings","inferTo","interpolate","to","update","useChain","useSpring","useSpringRef","useSprings","useTrail","useTransition"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-spring/types/interpolation */ "./node_modules/@react-spring/types/interpolation.js");
/* harmony import */ var _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__) if(["default","Globals","createInterpolator","BailSignal","Controller","FrameValue","Interpolation","Spring","SpringContext","SpringRef","SpringValue","Trail","Transition","config","easings","inferTo","interpolate","to","update","useChain","useSpring","useSpringRef","useSprings","useTrail","useTransition"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function callProp(value, ...args) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(value) ? value(...args) : value;
}
const matchProp = (value, key) => value === true || !!(key && value && (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(value) ? value(key) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(value).includes(key)));
const resolveProp = (prop, key) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(prop) ? key && prop[key] : prop;
const getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : undefined;

const noopTransform = value => value;

const getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;

  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }

  const defaults = {};

  for (const key of keys) {
    const value = transform(props[key], key);

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(value)) {
      defaults[key] = value;
    }
  }

  return defaults;
};
const DEFAULT_PROPS = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'];
const RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};

function getForwardProps(props) {
  const forward = {};
  let count = 0;
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });

  if (count) {
    return forward;
  }
}

function inferTo(props) {
  const to = getForwardProps(props);

  if (to) {
    const out = {
      to
    };
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(props, (val, key) => key in to || (out[key] = val));
    return out;
  }

  return _extends({}, props);
}
function computeGoal(value) {
  value = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(value);
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(value) ? value.map(computeGoal) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(value) ? _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props) return true;

  return false;
}
function isAsyncTo(to) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(to) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(to) && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;

  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;

    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}

function useChain(refs, timeSteps, timeFrame = 1000) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (timeSteps) {
      let prevDelay = 0;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(refs, (ref, i) => {
        const controllers = ref.current;

        if (controllers.length) {
          let delay = timeFrame * timeSteps[i];
          if (isNaN(delay)) delay = prevDelay;else prevDelay = delay;
          (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(controllers, ctrl => {
            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ctrl.queue, props => {
              const memoizedDelayProp = props.delay;

              props.delay = key => delay + callProp(memoizedDelayProp || 0, key);
            });
          });
          ref.start();
        }
      });
    } else {
      let p = Promise.resolve();
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(refs, ref => {
        const controllers = ref.current;

        if (controllers.length) {
          const queues = controllers.map(ctrl => {
            const q = ctrl.queue;
            ctrl.queue = [];
            return q;
          });
          p = p.then(() => {
            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(controllers, (ctrl, i) => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(queues[i] || [], update => ctrl.queue.push(update)));
            return Promise.all(ref.start());
          });
        }
      });
    }
  });
}

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = 2 * Math.PI / 3;
const c5 = 2 * Math.PI / 4.5;

const bounceOut = x => {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};

const easings = {
  linear: x => x,
  easeInQuad: x => x * x,
  easeOutQuad: x => 1 - (1 - x) * (1 - x),
  easeInOutQuad: x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: x => x * x * x,
  easeOutCubic: x => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInQuart: x => x * x * x * x,
  easeOutQuart: x => 1 - Math.pow(1 - x, 4),
  easeInOutQuart: x => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  easeInQuint: x => x * x * x * x * x,
  easeOutQuint: x => 1 - Math.pow(1 - x, 5),
  easeInOutQuint: x => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  easeInSine: x => 1 - Math.cos(x * Math.PI / 2),
  easeOutSine: x => Math.sin(x * Math.PI / 2),
  easeInOutSine: x => -(Math.cos(Math.PI * x) - 1) / 2,
  easeInExpo: x => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: x => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: x => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
  easeInCirc: x => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  easeOutCirc: x => Math.sqrt(1 - Math.pow(x - 1, 2)),
  easeInOutCirc: x => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  easeInBack: x => c3 * x * x * x - c1 * x * x,
  easeOutBack: x => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
  easeInOutBack: x => x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
  easeInElastic: x => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
  easeOutElastic: x => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
  easeInOutElastic: x => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
  easeInBounce: x => 1 - bounceOut(1 - x),
  easeOutBounce: bounceOut,
  easeInOutBounce: x => x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
};

const defaults = _extends({}, config.default, {
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
});

class AnimationConfig {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }

}
function mergeConfig(config, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends({}, defaultConfig, newConfig);
  }

  sanitizeConfig(config, newConfig);
  Object.assign(config, newConfig);

  for (const key in defaults) {
    if (config[key] == null) {
      config[key] = defaults[key];
    }
  }

  let {
    mass,
    frequency,
    damping
  } = config;

  if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(frequency)) {
    if (frequency < 0.01) frequency = 0.01;
    if (damping < 0) damping = 0;
    config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config.friction = 4 * Math.PI * damping * mass / frequency;
  }

  return config;
}

function sanitizeConfig(config, props) {
  if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.decay)) {
    config.duration = undefined;
  } else {
    const isTensionConfig = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.tension) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.friction);

    if (isTensionConfig || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.frequency) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.damping) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.mass)) {
      config.duration = undefined;
      config.decay = undefined;
    }

    if (isTensionConfig) {
      config.frequency = undefined;
    }
  }
}

const emptyArray = [];
class Animation {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }

}

function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;

    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);

    if (cancel) {
      onStart();
    } else {
      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }

      let pause = defaultProps == null ? void 0 : defaultProps.pause;

      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }

      delay = callProp(props.delay || 0, key);

      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }

    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.now();
    }

    function onResume() {
      if (delay > 0 && !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
        state.delayed = true;
        timeout = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }

    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }

      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);

      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }

      try {
        actions.start(_extends({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}

const getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some(result => result.cancelled) ? getCancelledResult(target.get()) : results.every(result => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every(result => result.finished));
const getNoopResult = value => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
const getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
const getCancelledResult = value => ({
  value,
  cancelled: true,
  finished: false
});

function runAsync(to, props, state, target) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;

  if (!parentId && to === prevTo && !props.reset) {
    return prevPromise;
  }

  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to;
    const defaultProps = getDefaultProps(props, (value, key) => key === 'onRest' ? undefined : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));

    const bailIfEnded = bailSignal => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);

      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };

    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAniamtionSignal();
      return (async () => {
        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }

        bailIfEnded(bailSignal);
        const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
          to: arg1
        });
        props.parentId = callId;
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(defaultProps, (value, key) => {
          if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props[key])) {
            props[key] = value;
          }
        });
        const result = await target.start(props);
        bailIfEnded(bailSignal);

        if (state.paused) {
          await new Promise(resume => {
            state.resumeQueue.add(resume);
          });
        }

        return result;
      })();
    };

    let result;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }

    try {
      let animating;

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(to)) {
        animating = (async queue => {
          for (const props of queue) {
            await animate(props);
          }
        })(to);
      } else {
          animating = Promise.resolve(to(animate, target.stop.bind(target)));
        }

      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAniamtionSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : undefined;
        state.promise = parentId ? prevPromise : undefined;
      }
    }

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(onRest)) {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }

    return result;
  })();
}
function stopAsync(state, cancelId) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(state.timeouts, t => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = undefined;
  if (cancelId) state.cancelId = cancelId;
}
class BailSignal extends Error {
  constructor() {
    super('An async animation has been interrupted. You see this error because you ' + 'forgot to use `await` or `.catch(...)` on its returned promise.');
    this.result = void 0;
  }

}
class SkipAniamtionSignal extends Error {
  constructor() {
    super('SkipAnimationSignal');
    this.result = void 0;
  }

}

const isFrameValue = value => value instanceof FrameValue;
let nextId$1 = 1;
class FrameValue extends _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.FluidValue {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    if (this._priority != priority) {
      this._priority = priority;

      this._onPriorityChange(priority);
    }
  }

  get() {
    const node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
    return node && node.getValue();
  }

  to(...args) {
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.to(this, args);
  }

  interpolate(...args) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.deprecateInterpolate)();
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.to(this, args);
  }

  toJSON() {
    return this.get();
  }

  observerAdded(count) {
    if (count == 1) this._attach();
  }

  observerRemoved(count) {
    if (count == 0) this._detach();
  }

  _attach() {}

  _detach() {}

  _onChange(value, idle = false) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(this, {
      type: 'change',
      parent: this,
      value,
      idle
    });
  }

  _onPriorityChange(priority) {
    if (!this.idle) {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.sort(this);
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(this, {
      type: 'priority',
      parent: this,
      priority
    });
  }

}

const $P = Symbol.for('SpringPhase');
const HAS_ANIMATED = 1;
const IS_ANIMATING = 2;
const IS_PAUSED = 4;
const hasAnimated = target => (target[$P] & HAS_ANIMATED) > 0;
const isAnimating = target => (target[$P] & IS_ANIMATING) > 0;
const isPaused = target => (target[$P] & IS_PAUSED) > 0;
const setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
const setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;

class SpringValue extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._pendingCalls = new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(arg1) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(arg2)) {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
        from: arg1
      });

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.default)) {
        props.default = true;
      }

      this.start(props);
    }
  }

  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }

  get goal() {
    return (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(this.animation.to);
  }

  get velocity() {
    const node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
    return node instanceof _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map(node => node.lastVelocity || 0);
  }

  get hasAnimated() {
    return hasAnimated(this);
  }

  get isAnimating() {
    return isAnimating(this);
  }

  get isPaused() {
    return isPaused(this);
  }

  get isDelayed() {
    return this._state.delayed;
  }

  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config,
      toValues
    } = anim;
    const payload = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getPayload)(anim.to);

    if (!payload && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(anim.to)) {
      toValues = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(anim.to));
    }

    anim.values.forEach((node, i) => {
      if (node.done) return;
      const to = node.constructor == _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
      let finished = anim.immediate;
      let position = to;

      if (!finished) {
        position = node.lastPosition;

        if (config.tension <= 0) {
          node.done = true;
          return;
        }

        let elapsed = node.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node.v0 != null ? node.v0 : node.v0 = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(config.velocity) ? config.velocity[i] : config.velocity;
        let velocity;

        if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(config.duration)) {
          let p = 1;

          if (config.duration > 0) {
            if (this._memoizedDuration !== config.duration) {
              this._memoizedDuration = config.duration;

              if (node.durationProgress > 0) {
                node.elapsedTime = config.duration * node.durationProgress;
                elapsed = node.elapsedTime += dt;
              }
            }

            p = (config.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node.durationProgress = p;
          }

          position = from + config.easing(p) * (to - from);
          velocity = (position - node.lastPosition) / dt;
          finished = p == 1;
        } else if (config.decay) {
            const decay = config.decay === true ? 0.998 : config.decay;
            const e = Math.exp(-(1 - decay) * elapsed);
            position = from + v0 / (1 - decay) * (1 - e);
            finished = Math.abs(node.lastPosition - position) < 0.1;
            velocity = v0 * e;
          } else {
              velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
              const precision = config.precision || (from == to ? 0.005 : Math.min(1, Math.abs(to - from) * 0.001));
              const restVelocity = config.restVelocity || precision / 10;
              const bounceFactor = config.clamp ? 0 : config.bounce;
              const canBounce = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(bounceFactor);
              const isGrowing = from == to ? node.v0 > 0 : from < to;
              let isMoving;
              let isBouncing = false;
              const step = 1;
              const numSteps = Math.ceil(dt / step);

              for (let n = 0; n < numSteps; ++n) {
                isMoving = Math.abs(velocity) > restVelocity;

                if (!isMoving) {
                  finished = Math.abs(to - position) <= precision;

                  if (finished) {
                    break;
                  }
                }

                if (canBounce) {
                  isBouncing = position == to || position > to == isGrowing;

                  if (isBouncing) {
                    velocity = -velocity * bounceFactor;
                    position = to;
                  }
                }

                const springForce = -config.tension * 0.000001 * (position - to);
                const dampingForce = -config.friction * 0.001 * velocity;
                const acceleration = (springForce + dampingForce) / config.mass;
                velocity = velocity + acceleration * step;
                position = position + velocity * step;
              }
            }

        node.lastVelocity = velocity;

        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }

      if (payload && !payload[i].done) {
        finished = false;
      }

      if (finished) {
        node.done = true;
      } else {
        idle = false;
      }

      if (node.setValue(position, config.round)) {
        changed = true;
      }
    });
    const node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
    const currVal = node.getValue();

    if (idle) {
      const finalVal = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(anim.to);

      if ((currVal !== finalVal || changed) && !config.decay) {
        node.setValue(finalVal);

        this._onChange(finalVal);
      } else if (changed && config.decay) {
        this._onChange(currVal);
      }

      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }

  set(value) {
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
      this._stop();

      this._focus(value);

      this._set(value);
    });
    return this;
  }

  pause() {
    this._update({
      pause: true
    });
  }

  resume() {
    this._update({
      pause: false
    });
  }

  finish() {
    if (isAnimating(this)) {
      const {
        to,
        config
      } = this.animation;
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
        this._onStart();

        if (!config.decay) {
          this._set(to, false);
        }

        this._stop();
      });
    }

    return this;
  }

  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }

  start(to, arg2) {
    let queue;

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(to)) {
      queue = [_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to) ? to : _extends({}, arg2, {
        to
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }

    return Promise.all(queue.map(props => {
      const up = this._update(props);

      return up;
    })).then(results => getCombinedResult(this, results));
  }

  stop(cancel) {
    const {
      to
    } = this.animation;

    this._focus(this.get());

    stopAsync(this._state, cancel && this._lastCallId);
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => this._stop(to, cancel));
    return this;
  }

  reset() {
    this._update({
      reset: true
    });
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._start();
    } else if (event.type == 'priority') {
      this.priority = event.priority + 1;
    }
  }

  _prepareNode(props) {
    const key = this.key || '';
    let {
      to,
      from
    } = props;
    to = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to) ? to[key] : to;

    if (to == null || isAsyncTo(to)) {
      to = undefined;
    }

    from = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(from) ? from[key] : from;

    if (from == null) {
      from = undefined;
    }

    const range = {
      to,
      from
    };

    if (!hasAnimated(this)) {
      if (props.reverse) [to, from] = [from, to];
      from = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(from);

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(from)) {
        this._set(from);
      } else if (!(0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this)) {
          this._set(to);
        }
    }

    return range;
  }

  _update(_ref, isLoop) {
    let props = _extends({}, _ref);

    const {
      key,
      defaultProps
    } = this;
    if (props.default) Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, 'onProps');
    sendEvent(this, 'onProps', props, this);

    const range = this._prepareNode(props);

    if (Object.isFrozen(this)) {
      throw Error('Cannot animate a `SpringValue` object that is frozen. ' + 'Did you forget to pass your component to `animated(...)` before animating its props?');
    }

    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(state.pauseQueue);
            sendEvent(this, 'onPause', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);

            if (isAnimating(this)) {
              this._resume();
            }

            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(state.resumeQueue);
            sendEvent(this, 'onResume', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then(result => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);

        if (nextProps) {
          return this._update(nextProps, true);
        }
      }

      return result;
    });
  }

  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }

    const hasToProp = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(range.to);
    const hasFromProp = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(range.from);

    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }

    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to = prevTo,
      from = prevFrom
    } = range;

    if (hasFromProp && !hasToProp && (!props.default || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(to))) {
      to = from;
    }

    if (props.reverse) [to, from] = [from, to];
    const hasFromChanged = !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(from, prevFrom);

    if (hasFromChanged) {
      anim.from = from;
    }

    from = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(from);
    const hasToChanged = !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(to, prevTo);

    if (hasToChanged) {
      this._focus(to);
    }

    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config
    } = anim;
    const {
      decay,
      velocity
    } = config;

    if (hasToProp || hasFromProp) {
      config.velocity = 0;
    }

    if (props.config && !hasAsyncTo) {
      mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }

    let node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);

    if (!node || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(to)) {
      return resolve(getFinishedResult(this, true));
    }

    const reset = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.reset) ? hasFromProp && !props.default : !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to);
    const isAnimatable = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(goal) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(goal) || (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));

    if (hasToChanged) {
      const nodeType = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimatedType)(to);

      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }

    const goalType = node.constructor;
    let started = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to);
    let finished = false;

    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;

      if (hasToChanged || hasValueChanged) {
        finished = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(computeGoal(value), goal);
        started = !finished;
      }

      if (!(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(anim.immediate, immediate) && !immediate || !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(config.decay, decay) || !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(config.velocity, velocity)) {
        started = true;
      }
    }

    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
          this._stop(prevTo);
        }
    }

    if (!hasAsyncTo) {
      if (started || (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to) ? null : goalType == _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.AnimatedString ? [1] : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(goal);
      }

      if (anim.immediate != immediate) {
        anim.immediate = immediate;

        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }

      if (started) {
        const {
          onRest
        } = anim;
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ACTIVE_EVENTS, type => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(this._pendingCalls, result);

        this._pendingCalls.add(resolve);

        if (anim.changed) _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
          anim.changed = !reset;
          onRest == null ? void 0 : onRest(result, this);

          if (reset) {
            callProp(defaultProps.onRest, result);
          } else {
              anim.onStart == null ? void 0 : anim.onStart(result, this);
            }
        });
      }
    }

    if (reset) {
      this._set(value);
    }

    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
        this._start();
      } else if (isAnimating(this) && !hasToChanged) {
          this._pendingCalls.add(resolve);
        } else {
            resolve(getNoopResult(value));
          }
  }

  _focus(value) {
    const anim = this.animation;

    if (value !== anim.to) {
      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidObservers)(this)) {
        this._detach();
      }

      anim.to = value;

      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidObservers)(this)) {
        this._attach();
      }
    }
  }

  _attach() {
    let priority = 0;
    const {
      to
    } = this.animation;

    if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to)) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(to, this);

      if (isFrameValue(to)) {
        priority = to.priority + 1;
      }
    }

    this.priority = priority;
  }

  _detach() {
    const {
      to
    } = this.animation;

    if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to)) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(to, this);
    }
  }

  _set(arg, idle = true) {
    const value = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(arg);

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(value)) {
      const oldNode = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);

      if (!oldNode || !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(value, oldNode.getValue())) {
        const nodeType = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimatedType)(value);

        if (!oldNode || oldNode.constructor != nodeType) {
          (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.setAnimated)(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }

        if (oldNode) {
          _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }

    return (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
  }

  _onStart() {
    const anim = this.animation;

    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, 'onStart', getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }

  _onChange(value, idle) {
    if (!idle) {
      this._onStart();

      callProp(this.animation.onChange, value, this);
    }

    callProp(this.defaultProps.onChange, value, this);

    super._onChange(value, idle);
  }

  _start() {
    const anim = this.animation;
    (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this).reset((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(anim.to));

    if (!anim.immediate) {
      anim.fromValues = anim.values.map(node => node.lastPosition);
    }

    if (!isAnimating(this)) {
      setActiveBit(this, true);

      if (!isPaused(this)) {
        this._resume();
      }
    }
  }

  _resume() {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
      this.finish();
    } else {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.start(this);
    }
  }

  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(anim.values, node => {
        node.done = true;
      });

      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = undefined;
      }

      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(this, {
        type: 'idle',
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(this._pendingCalls, result);

      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, 'onRest', result, this);
      }
    }
  }

}

function checkFinished(target, to) {
  const goal = computeGoal(to);
  const value = computeGoal(target.get());
  return (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(value, goal);
}

function createLoopUpdate(props, loop = props.loop, to = props.to) {
  let loopRet = callProp(loop);

  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends({}, props, {
      loop,
      default: false,
      pause: undefined,
      to: !reverse || isAsyncTo(to) ? to : undefined,
      from: reset ? props.from : undefined,
      reset
    }, overrides));
  }
}
function createUpdate(props) {
  const {
    to,
    from
  } = props = inferTo(props);
  const keys = new Set();
  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to)) findDefined(to, keys);
  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(from)) findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update = createUpdate(props);

  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(update.default)) {
    update.default = getDefaultProps(update);
  }

  return update;
}

function findDefined(values, keys) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(values, (value, key) => value != null && keys.add(key));
}

const ACTIVE_EVENTS = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];

function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : undefined;
}

function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;

  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}

const BATCHED_EVENTS = ['onStart', 'onChange', 'onRest'];
let nextId = 1;
class Controller {
  constructor(props, flush) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = new Set();
    this._changed = new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._events = {
      onStart: new Map(),
      onChange: new Map(),
      onRest: new Map()
    };
    this._onFrame = this._onFrame.bind(this);

    if (flush) {
      this._flush = flush;
    }

    if (props) {
      this.start(_extends({
        default: true
      }, props));
    }
  }

  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every(spring => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }

  get item() {
    return this._item;
  }

  set item(item) {
    this._item = item;
  }

  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }

  set(values) {
    for (const key in values) {
      const value = values[key];

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }

  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }

    return this;
  }

  start(props) {
    let {
      queue
    } = this;

    if (props) {
      queue = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(props).map(createUpdate);
    } else {
      this.queue = [];
    }

    if (this._flush) {
      return this._flush(this, queue);
    }

    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }

  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }

    if (keys) {
      const springs = this.springs;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys), key => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each(spring => spring.stop(!!arg));
    }

    return this;
  }

  pause(keys) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys), key => springs[key].pause());
    }

    return this;
  }

  resume(keys) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys), key => springs[key].resume());
    }

    return this;
  }

  each(iterator) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(this.springs, iterator);
  }

  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;

    if (active && !this._started || changed && !this._started) {
      this._started = true;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(onStart, ([onStart, result]) => {
        result.value = this.get();
        onStart(result, this, this._item);
      });
    }

    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;

    if (changed && onChange.size) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(onChange, ([onChange, result]) => {
        result.value = values;
        onChange(result, this, this._item);
      });
    }

    if (idle) {
      this._started = false;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(onRest, ([onRest, result]) => {
        result.value = values;
        onRest(result, this, this._item);
      });
    }
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._changed.add(event.parent);

      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent);
    } else return;

    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.onFrame(this._onFrame);
  }

}
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map(props => flushUpdate(ctrl, props))).then(results => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to,
    from,
    loop,
    onRest,
    onResolve
  } = props;
  const defaults = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(props.default) && props.default;

  if (loop) {
    props.loop = false;
  }

  if (to === false) props.to = null;
  if (from === false) props.from = null;
  const asyncTo = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(to) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(to) ? to : undefined;

  if (asyncTo) {
    props.to = undefined;
    props.onRest = undefined;

    if (defaults) {
      defaults.onRest = undefined;
    }
  } else {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(BATCHED_EVENTS, key => {
        const handler = props[key];

        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(handler)) {
          const queue = ctrl['_events'][key];

          props[key] = ({
            finished,
            cancelled
          }) => {
            const result = queue.get(handler);

            if (result) {
              if (!finished) result.finished = false;
              if (cancelled) result.cancelled = true;
            } else {
              queue.set(handler, {
                value: null,
                finished: finished || false,
                cancelled: cancelled || false
              });
            }
          };

          if (defaults) {
            defaults[key] = props[key];
          }
        }
      });
    }

  const state = ctrl['_state'];

  if (props.pause === !state.paused) {
    state.paused = props.pause;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
      props.pause = true;
    }

  const promises = (keys || Object.keys(ctrl.springs)).map(key => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, 'cancel') === true;

  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl['_lastAsyncId'], {
      props,
      state,
      actions: {
        pause: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
        resume: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.noop,

        start(props, resolve) {
          if (cancel) {
            stopAsync(state, ctrl['_lastAsyncId']);
            resolve(getCancelledResult(ctrl));
          } else {
            props.onRest = onRest;
            resolve(runAsync(asyncTo, props, state, ctrl));
          }
        }

      }
    }));
  }

  if (state.paused) {
    await new Promise(resume => {
      state.resumeQueue.add(resume);
    });
  }

  const result = getCombinedResult(ctrl, await Promise.all(promises));

  if (loop && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop, to);

    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }

  if (onResolve) {
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }

  return result;
}
function getSprings(ctrl, props) {
  const springs = _extends({}, ctrl.springs);

  if (props) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(props), props => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.keys)) {
        props = createUpdate(props);
      }

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(props.to)) {
        props = _extends({}, props, {
          to: undefined
        });
      }

      prepareSprings(springs, props, key => {
        return createSpring(key);
      });
    });
  }

  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(spring, ctrl);
    }
  });
}

function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;

  if (observer) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(spring, observer);
  }

  return spring;
}

function prepareSprings(springs, props, create) {
  if (props.keys) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(props.keys, key => {
      const spring = springs[key] || (springs[key] = create(key));
      spring['_prepareNode'](props);
    });
  }
}

function prepareKeys(ctrl, queue) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(queue, props => {
    prepareSprings(ctrl.springs, props, key => {
      return createSpring(key, ctrl);
    });
  });
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

const _excluded$3 = ["children"];
const SpringContext = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  const inherited = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ctx);
  const pause = props.pause || !!inherited.pause,
        immediate = props.immediate || !!inherited.immediate;
  props = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useMemoOne)(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Provider, {
    value: props
  }, children);
};
const ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;

function makeContext(target, init) {
  Object.assign(target, react__WEBPACK_IMPORTED_MODULE_1__.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}

const SpringRef = () => {
  const current = [];

  const SpringRef = function SpringRef(props) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.deprecateDirectCall)();
    const results = [];
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, (ctrl, i) => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = _getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.current = current;

  SpringRef.add = function (ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };

  SpringRef.delete = function (ctrl) {
    const i = current.indexOf(ctrl);
    if (~i) current.splice(i, 1);
  };

  SpringRef.pause = function () {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.pause(...arguments));
    return this;
  };

  SpringRef.resume = function () {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.resume(...arguments));
    return this;
  };

  SpringRef.set = function (values) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.set(values));
  };

  SpringRef.start = function (props) {
    const results = [];
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, (ctrl, i) => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = this._getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.stop = function () {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.stop(...arguments));
    return this;
  };

  SpringRef.update = function (props) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };

  const _getProps = function _getProps(arg, ctrl, index) {
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(arg) ? arg(index, ctrl) : arg;
  };

  SpringRef._getProps = _getProps;
  return SpringRef;
};

function useSprings(length, props, deps) {
  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(props) && props;
  if (propsFn && !deps) deps = [];
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const forceUpdate = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useForceUpdate)();
  const state = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    ctrls: [],
    queue: [],

    flush(ctrl, updates) {
      const springs = getSprings(ctrl, updates);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs).some(key => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates) : new Promise(resolve => {
        setSprings(ctrl, springs);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates));
        });
        forceUpdate();
      });
    }

  }), []);
  const ctrls = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([...state.ctrls]);
  const updates = [];
  const prevLength = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.usePrev)(length) || 0;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ctrls.current.slice(length, prevLength), ctrl => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);

  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update = propsFn ? propsFn(i, ctrl) : props[i];

      if (update) {
        updates[i] = declareUpdate(update);
      }
    }
  }

  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SpringContext);
  const prevContext = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.usePrev)(context);
  const hasContext = context !== prevContext && hasProps(context);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;

    if (queue.length) {
      state.queue = [];
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(queue, cb => cb());
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ctrls.current, (ctrl, i) => {
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext) {
        ctrl.start({
          default: context
        });
      }

      const update = updates[i];

      if (update) {
        replaceRef(ctrl, update.ref);

        if (ctrl.ref) {
          ctrl.queue.push(update);
        } else {
          ctrl.start(update);
        }
      }
    });
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useOnce)(() => () => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(state.ctrls, ctrl => ctrl.stop(true));
  });
  const values = springs.map(x => _extends({}, x));
  return ref ? [values, ref] : values;
}

function useSpring(props, deps) {
  const isFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}

const initSpringRef = () => SpringRef();

const useSpringRef = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initSpringRef)[0];

function useTrail(length, propsArg, deps) {
  var _passedRef;

  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(propsArg) && propsArg;
  if (propsFn && !deps) deps = [];
  let reverse = true;
  let passedRef = undefined;
  const result = useSprings(length, (i, ctrl) => {
    const props = propsFn ? propsFn(i, ctrl) : propsArg;
    passedRef = props.ref;
    reverse = reverse && props.reverse;
    return props;
  }, deps || [{}]);
  const ref = (_passedRef = passedRef) != null ? _passedRef : result[1];
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ref.current, (ctrl, i) => {
      const parent = ref.current[i + (reverse ? 1 : -1)];

      if (parent) {
        ctrl.start({
          to: parent.springs
        });
      } else {
        ctrl.start();
      }
    });
  }, deps);

  ref['start'] = propsArg => {
    const results = [];
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ref.current, (ctrl, i) => {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(propsArg) ? propsArg(i, ctrl) : propsArg;
      const parent = ref.current[i + (reverse ? 1 : -1)];

      if (parent) {
        results.push(ctrl.start(_extends({}, props, {
          to: parent.springs
        })));
      } else {
        results.push(ctrl.start(_extends({}, props)));
      }
    });
    return results;
  };

  if (propsFn || arguments.length == 3) {
    ref['_getProps'] = (propsArg, ctrl, i) => {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(propsArg) ? propsArg(i, ctrl) : propsArg;

      if (props) {
        const parent = ref.current[i + (props.reverse ? 1 : -1)];
        if (parent) props.to = parent.springs;
        return props;
      }
    };

    return result;
  }

  return result[0];
}

let TransitionPhase;

(function (TransitionPhase) {
  TransitionPhase["MOUNT"] = "mount";
  TransitionPhase["ENTER"] = "enter";
  TransitionPhase["UPDATE"] = "update";
  TransitionPhase["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));

function useTransition(data, props, deps) {
  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const items = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(data);
  const transitions = [];
  const usedTransitions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    usedTransitions.current = transitions;
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useOnce)(() => () => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(usedTransitions.current, t => {
      if (t.expired) {
        clearTimeout(t.expirationId);
      }

      detachRefs(t.ctrl, ref);
      t.ctrl.stop(true);
    });
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(expired, ({
    ctrl,
    item,
    key
  }) => {
    detachRefs(ctrl, ref);
    callProp(onDestroyed, item, key);
  }));
  const reused = [];
  if (prevTransitions) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(prevTransitions, (t, i) => {
    if (t.expired) {
      clearTimeout(t.expirationId);
      expired.push(t);
    } else {
      i = reused[i] = keys.indexOf(t.key);
      if (~i) transitions[i] = t;
    }
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(items, (item, i) => {
    if (!transitions[i]) {
      transitions[i] = {
        key: keys[i],
        item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i].ctrl.item = item;
    }
  });

  if (reused.length) {
    let i = -1;
    const {
      leave
    } = propsFn ? propsFn() : props;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(reused, (keyIndex, prevIndex) => {
      const t = prevTransitions[prevIndex];

      if (~keyIndex) {
        i = transitions.indexOf(t);
        transitions[i] = _extends({}, t, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i, 0, t);
      }
    });
  }

  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(sort)) {
    transitions.sort((a, b) => sort(a.item, b.item));
  }

  let delay = -trail;
  const forceUpdate = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useForceUpdate)();
  const defaultProps = getDefaultProps(props);
  const changes = new Map();
  const exitingTransitions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Map());
  const forceChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(transitions, (t, i) => {
    const key = t.key;
    const prevPhase = t.phase;
    const p = propsFn ? propsFn() : props;
    let to;
    let phase;
    let propsDelay = callProp(p.delay || 0, key);

    if (prevPhase == TransitionPhase.MOUNT) {
      to = p.enter;
      phase = TransitionPhase.ENTER;
    } else {
      const isLeave = keys.indexOf(key) < 0;

      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to = p.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to = p.update) {
          phase = TransitionPhase.UPDATE;
        } else return;
      } else if (!isLeave) {
        to = p.enter;
        phase = TransitionPhase.ENTER;
      } else return;
    }

    to = callProp(to, t.item, i);
    to = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to) ? inferTo(to) : {
      to
    };

    if (!to.config) {
      const config = propsConfig || defaultProps.config;
      to.config = callProp(config, t.item, i, phase);
    }

    delay += trail;

    const payload = _extends({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p.immediate,
      reset: false
    }, to);

    if (phase == TransitionPhase.ENTER && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(payload.from)) {
      const _p = propsFn ? propsFn() : props;

      const from = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t.item, i);
    }

    const {
      onResolve
    } = payload;

    payload.onResolve = result => {
      callProp(onResolve, result);
      const transitions = usedTransitions.current;
      const t = transitions.find(t => t.key === key);
      if (!t) return;

      if (result.cancelled && t.phase != TransitionPhase.UPDATE) {
        return;
      }

      if (t.ctrl.idle) {
        const idle = transitions.every(t => t.ctrl.idle);

        if (t.phase == TransitionPhase.LEAVE) {
          const expiry = callProp(expires, t.item);

          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t.expired = true;

            if (!idle && expiryMs > 0) {
              if (expiryMs <= 0x7fffffff) t.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }

        if (idle && transitions.some(t => t.expired)) {
          exitingTransitions.current.delete(t);

          if (exitBeforeEnter) {
            forceChange.current = true;
          }

          forceUpdate();
        }
      }
    };

    const springs = getSprings(t.ctrl, payload);

    if (phase === TransitionPhase.LEAVE && exitBeforeEnter) {
      exitingTransitions.current.set(t, {
        phase,
        springs,
        payload
      });
    } else {
      changes.set(t, {
        phase,
        springs,
        payload
      });
    }
  });
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SpringContext);
  const prevContext = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.usePrev)(context);
  const hasContext = context !== prevContext && hasProps(context);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (hasContext) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(transitions, t => {
        t.ctrl.start({
          default: context
        });
      });
    }
  }, [context]);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(changes, (_, t) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex(state => state.key === t.key);
      transitions.splice(ind, 1);
    }
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(exitingTransitions.current.size ? exitingTransitions.current : changes, ({
      phase,
      payload
    }, t) => {
      const {
        ctrl
      } = t;
      t.phase = phase;
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext && phase == TransitionPhase.ENTER) {
        ctrl.start({
          default: context
        });
      }

      if (payload) {
        replaceRef(ctrl, payload.ref);

        if (ctrl.ref && !forceChange.current) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);

          if (forceChange.current) {
            forceChange.current = false;
          }
        }
      }
    });
  }, reset ? void 0 : deps);

  const renderTransitions = render => react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, transitions.map((t, i) => {
    const {
      springs
    } = changes.get(t) || t.ctrl;
    const elem = render(_extends({}, springs), t.item, t, i);
    return elem && elem.type ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(elem.type, _extends({}, elem.props, {
      key: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(t.key) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(t.key) ? t.key : t.ctrl.id,
      ref: elem.ref
    })) : elem;
  }));

  return ref ? [renderTransitions, ref] : renderTransitions;
}
let nextKey = 1;

function getKeys(items, {
  key,
  keys = key
}, prevTransitions) {
  if (keys === null) {
    const reused = new Set();
    return items.map(item => {
      const t = prevTransitions && prevTransitions.find(t => t.item === item && t.phase !== TransitionPhase.LEAVE && !reused.has(t));

      if (t) {
        reused.add(t);
        return t.key;
      }

      return nextKey++;
    });
  }

  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(keys) ? items : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(keys) ? items.map(keys) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys);
}

const _excluded$2 = ["children"];
function Spring(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return children(useSpring(props));
}

const _excluded$1 = ["items", "children"];
function Trail(_ref) {
  let {
    items,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  const trails = useTrail(items.length, props);
  return items.map((item, index) => {
    const result = children(item, index);
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(result) ? result(trails[index]) : result;
  });
}

const _excluded = ["items", "children"];
function Transition(_ref) {
  let {
    items,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return useTransition(items, props)(children);
}

class Interpolation extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = new Set();
    this.source = source;
    this.calc = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator)(...args);

    const value = this._get();

    const nodeType = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimatedType)(value);
    (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.setAnimated)(this, nodeType.create(value));
  }

  advance(_dt) {
    const value = this._get();

    const oldValue = this.get();

    if (!(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(value, oldValue)) {
      (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this).setValue(value);

      this._onChange(value, this.idle);
    }

    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }

  _get() {
    const inputs = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(this.source) ? this.source.map(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(this.source));
    return this.calc(...inputs);
  }

  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getPayload)(this), node => {
        node.done = false;
      });

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.start(this);
      }
    }
  }

  _attach() {
    let priority = 1;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(this.source), source => {
      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(source, this);
      }

      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }

        priority = Math.max(priority, source.priority + 1);
      }
    });
    this.priority = priority;

    this._start();
  }

  _detach() {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(this.source), source => {
      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(source, this);
      }
    });

    this._active.clear();

    becomeIdle(this);
  }

  eventObserved(event) {
    if (event.type == 'change') {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);

        this._start();
      }
    } else if (event.type == 'idle') {
        this._active.delete(event.parent);
      } else if (event.type == 'priority') {
          this.priority = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
        }
  }

}

function isIdle(source) {
  return source.idle !== false;
}

function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}

function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getPayload)(self), node => {
      node.done = true;
    });
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(self, {
      type: 'idle',
      parent: self
    });
  }
}

const to = (source, ...args) => new Interpolation(source, args);
const interpolate = (source, ...args) => ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.deprecateInterpolate)(), new Interpolation(source, args));

_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.assign({
  createStringInterpolator: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createStringInterpolator,
  to: (source, args) => new Interpolation(source, args)
});
const update = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.advance;




/***/ }),

/***/ "./node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__raf": function() { return /* binding */ __raf; },
/* harmony export */   "raf": function() { return /* binding */ raf; }
/* harmony export */ });
let updateQueue = makeQueue();
const raf = fn => schedule(fn, updateQueue);
let writeQueue = makeQueue();

raf.write = fn => schedule(fn, writeQueue);

let onStartQueue = makeQueue();

raf.onStart = fn => schedule(fn, onStartQueue);

let onFrameQueue = makeQueue();

raf.onFrame = fn => schedule(fn, onFrameQueue);

let onFinishQueue = makeQueue();

raf.onFinish = fn => schedule(fn, onFinishQueue);

let timeouts = [];

raf.setTimeout = (handler, ms) => {
  let time = raf.now() + ms;

  let cancel = () => {
    let i = timeouts.findIndex(t => t.cancel == cancel);
    if (~i) timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
  };

  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};

let findTimeout = time => ~(~timeouts.findIndex(t => t.time > time) || ~timeouts.length);

raf.cancel = fn => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
  onFinishQueue.delete(fn);
};

raf.sync = fn => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};

raf.throttle = fn => {
  let lastArgs;

  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }

  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }

  throttled.handler = fn;

  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };

  return throttled;
};

let nativeRaf = typeof window != 'undefined' ? window.requestAnimationFrame : () => {};

raf.use = impl => nativeRaf = impl;

raf.now = typeof performance != 'undefined' ? () => performance.now() : Date.now;

raf.batchedUpdates = fn => fn();

raf.catch = console.error;
raf.frameLoop = 'always';

raf.advance = () => {
  if (raf.frameLoop !== 'demand') {
    console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand');
  } else {
    update();
  }
};

let ts = -1;
let pendingCount = 0;
let sync = false;

function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}

function start() {
  if (ts < 0) {
    ts = 0;

    if (raf.frameLoop !== 'demand') {
      nativeRaf(loop);
    }
  }
}

function stop() {
  ts = -1;
}

function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}

function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);

  if (count) {
    eachSafely(timeouts.splice(0, count), t => t.handler());
    pendingCount -= count;
  }

  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();

  if (!pendingCount) {
    stop();
  }
}

function makeQueue() {
  let next = new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },

    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },

    flush(arg) {
      if (current.size) {
        next = new Set();
        pendingCount -= current.size;
        eachSafely(current, fn => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }

  };
}

function eachSafely(values, each) {
  values.forEach(value => {
    try {
      each(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}

const __raf = {
  count() {
    return pendingCount;
  },

  isRunning() {
    return ts >= 0;
  },

  clear() {
    ts = -1;
    timeouts = [];
    onStartQueue = makeQueue();
    updateQueue = makeQueue();
    onFrameQueue = makeQueue();
    writeQueue = makeQueue();
    onFinishQueue = makeQueue();
    pendingCount = 0;
  }

};




/***/ }),

/***/ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "raf": function() { return /* reexport safe */ _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf; },
/* harmony export */   "FluidValue": function() { return /* binding */ FluidValue; },
/* harmony export */   "Globals": function() { return /* binding */ globals; },
/* harmony export */   "addFluidObserver": function() { return /* binding */ addFluidObserver; },
/* harmony export */   "callFluidObserver": function() { return /* binding */ callFluidObserver; },
/* harmony export */   "callFluidObservers": function() { return /* binding */ callFluidObservers; },
/* harmony export */   "colorToRgba": function() { return /* binding */ colorToRgba; },
/* harmony export */   "colors": function() { return /* binding */ colors; },
/* harmony export */   "createInterpolator": function() { return /* binding */ createInterpolator; },
/* harmony export */   "createStringInterpolator": function() { return /* binding */ createStringInterpolator; },
/* harmony export */   "defineHidden": function() { return /* binding */ defineHidden; },
/* harmony export */   "deprecateDirectCall": function() { return /* binding */ deprecateDirectCall; },
/* harmony export */   "deprecateInterpolate": function() { return /* binding */ deprecateInterpolate; },
/* harmony export */   "each": function() { return /* binding */ each; },
/* harmony export */   "eachProp": function() { return /* binding */ eachProp; },
/* harmony export */   "flush": function() { return /* binding */ flush; },
/* harmony export */   "flushCalls": function() { return /* binding */ flushCalls; },
/* harmony export */   "frameLoop": function() { return /* binding */ frameLoop; },
/* harmony export */   "getFluidObservers": function() { return /* binding */ getFluidObservers; },
/* harmony export */   "getFluidValue": function() { return /* binding */ getFluidValue; },
/* harmony export */   "hasFluidValue": function() { return /* binding */ hasFluidValue; },
/* harmony export */   "hex3": function() { return /* binding */ hex3; },
/* harmony export */   "hex4": function() { return /* binding */ hex4; },
/* harmony export */   "hex6": function() { return /* binding */ hex6; },
/* harmony export */   "hex8": function() { return /* binding */ hex8; },
/* harmony export */   "hsl": function() { return /* binding */ hsl; },
/* harmony export */   "hsla": function() { return /* binding */ hsla; },
/* harmony export */   "is": function() { return /* binding */ is; },
/* harmony export */   "isAnimatedString": function() { return /* binding */ isAnimatedString; },
/* harmony export */   "isEqual": function() { return /* binding */ isEqual; },
/* harmony export */   "isSSR": function() { return /* binding */ isSSR; },
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "removeFluidObserver": function() { return /* binding */ removeFluidObserver; },
/* harmony export */   "rgb": function() { return /* binding */ rgb; },
/* harmony export */   "rgba": function() { return /* binding */ rgba; },
/* harmony export */   "setFluidGetter": function() { return /* binding */ setFluidGetter; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "useForceUpdate": function() { return /* binding */ useForceUpdate; },
/* harmony export */   "useLayoutEffect": function() { return /* binding */ useLayoutEffect; },
/* harmony export */   "useMemoOne": function() { return /* binding */ useMemoOne; },
/* harmony export */   "useOnce": function() { return /* binding */ useOnce; },
/* harmony export */   "usePrev": function() { return /* binding */ usePrev; }
/* harmony export */ });
/* harmony import */ var _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/rafz */ "./node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





function noop() {}
const defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
  value,
  writable: true,
  configurable: true
});
const is = {
  arr: Array.isArray,
  obj: a => !!a && a.constructor.name === 'Object',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === undefined
};
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  return a === b;
}
const each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], `${i}`);
    }

    return;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx, obj[key], key);
    }
  }
}
const toArray = a => is.und(a) ? [] : is.arr(a) ? a : [a];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
const flushCalls = (queue, ...args) => flush(queue, fn => fn(...args));
const isSSR = () => typeof window === 'undefined' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

let createStringInterpolator$1;
let to;
let colors$1 = null;
let skipAnimation = false;
let willAdvance = noop;
const assign = globals => {
  if (globals.to) to = globals.to;
  if (globals.now) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.now = globals.now;
  if (globals.colors !== undefined) colors$1 = globals.colors;
  if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator) createStringInterpolator$1 = globals.createStringInterpolator;
  if (globals.requestAnimationFrame) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance) willAdvance = globals.willAdvance;
  if (globals.frameLoop) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.frameLoop = globals.frameLoop;
};

var globals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get createStringInterpolator () { return createStringInterpolator$1; },
  get to () { return to; },
  get colors () { return colors$1; },
  get skipAnimation () { return skipAnimation; },
  get willAdvance () { return willAdvance; },
  assign: assign
});

const startQueue = new Set();
let currentFrame = [];
let prevFrame = [];
let priority = 0;
const frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },

  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      (0,_react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf)(advance);
    }
  },

  advance,

  sort(animation) {
    if (priority) {
      _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);

      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },

  clear() {
    currentFrame = [];
    startQueue.clear();
  }

};

function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  (0,_react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf)(advance);
}

function startSafely(animation) {
  if (!currentFrame.includes(animation)) startUnsafely(animation);
}

function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, other => other.priority > animation.priority), 0, animation);
}

function advance(dt) {
  const nextFrame = prevFrame;

  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;

    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);

      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }

  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}

function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}

const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call(...parts) {
  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  }

  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;

  if (colors$1 && colors$1[color] !== undefined) {
    return colors$1[color];
  }

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 0x000000ff) >>> 0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + 'ff', 16) >>> 0;
  }

  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 0x000000ff) >>> 0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }

  if (is.arr(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
};

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const $get = Symbol.for('FluidValue.get');
const $observers = Symbol.for('FluidValue.observers');

const hasFluidValue = arg => Boolean(arg && arg[$get]);

const getFluidValue = arg => arg && arg[$get] ? arg[$get]() : arg;

const getFluidObservers = target => target[$observers] || null;

function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}

function callFluidObservers(target, event) {
  let observers = target[$observers];

  if (observers) {
    observers.forEach(observer => {
      callFluidObserver(observer, event);
    });
  }
}

class FluidValue {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;

    if (!get && !(get = this.get)) {
      throw Error('Unknown getter');
    }

    setFluidGetter(this, get);
  }

}

const setFluidGetter = (target, get) => setHidden(target, $get, get);

function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];

    if (!observers) {
      setHidden(target, $observers, observers = new Set());
    }

    if (!observers.has(observer)) {
      observers.add(observer);

      if (target.observerAdded) {
        target.observerAdded(observers.size, observer);
      }
    }
  }

  return observer;
}

function removeFluidObserver(target, observer) {
  let observers = target[$observers];

  if (observers && observers.has(observer)) {
    const count = observers.size - 1;

    if (count) {
      observers.delete(observer);
    } else {
      target[$observers] = null;
    }

    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}

const setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});

const numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
const unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, 'i');
const rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

const variableToRgba = input => {
  const [token, fallback] = parseCSSVariable(input);

  if (!token || isSSR()) {
    return input;
  }

  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);

  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith('--')) {
    const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);

    if (_value) {
      return _value;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }

  return input;
};

const parseCSSVariable = current => {
  const match = cssVariableRegex.exec(current);
  if (!match) return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};

let namedColorRegex;

const rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;

const createStringInterpolator = config => {
  if (!namedColorRegex) namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join('|')})(?!\\w)`, 'g') : /^\b$/;
  const output = config.output.map(value => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map(value => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_, i) => keyframes.map(values => {
    if (!(i in values)) {
      throw Error('The arity of each "output" value must be equal');
    }

    return values[i];
  }));
  const interpolators = outputRanges.map(output => createInterpolator(_extends({}, config, {
    output
  })));
  return input => {
    var _output$find;

    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find(value => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ''));
    let i = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ''}`).replace(rgbaRegex, rgbaRound);
  };
};

const prefix = 'react-spring: ';

const once = fn => {
  const func = fn;
  let called = false;

  if (typeof func != 'function') {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }

  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};

const warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}

function isAnimatedString(value) {
  return is.str(value) && (value[0] == '#' || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}

const useOnce = effect => (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(effect, emptyDeps);
const emptyDeps = [];

function useForceUpdate() {
  const update = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)()[1];
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(makeMountedRef)[0];
  useOnce(mounted.unmount);
  return () => {
    if (mounted.current) {
      update({});
    }
  };
}

function makeMountedRef() {
  const mounted = {
    current: true,
    unmount: () => () => {
      mounted.current = false;
    }
  };
  return mounted;
}

function useMemoOne(getResult, inputs) {
  const [initial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => ({
    inputs,
    result: getResult()
  }));
  const committed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const prevCache = committed.current;
  let cache = prevCache;

  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));

    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    committed.current = cache;

    if (prevCache == initial) {
      initial.inputs = initial.result = undefined;
    }
  }, [cache]);
  return cache.result;
}

function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }

  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }

  return true;
}

function usePrev(value) {
  const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

const useLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;




/***/ }),

/***/ "./node_modules/@react-spring/types/animated.js":
/*!******************************************************!*\
  !*** ./node_modules/@react-spring/types/animated.js ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/@react-spring/types/interpolation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@react-spring/types/interpolation.js ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@react-spring/web/dist/react-spring-web.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ animated; },
/* harmony export */   "animated": function() { return /* binding */ animated; }
/* harmony export */ });
/* harmony import */ var _react_spring_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/core */ "./node_modules/@react-spring/core/dist/react-spring-core.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_core__WEBPACK_IMPORTED_MODULE_0__) if(["default","a","animated"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react_spring_core__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/animated */ "./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js");






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

const _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
const isCustomPropRE = /^--/;

function dangerousStyleValue(name, value) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (typeof value === 'number' && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px';
  return ('' + value).trim();
}

const attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }

  const isFilterElement = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';

  const _ref = props,
        {
    style,
    children,
    scrollTop,
    scrollLeft
  } = _ref,
        attributes = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(name => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase())));

  if (children !== void 0) {
    instance.textContent = children;
  }

  for (let name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);

      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }

  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });

  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }

  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
}
let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

const _excluded$1 = ["x", "y", "z"];
const domTransforms = /^(matrix|translate|scale|rotate|skew)/;
const pxTransforms = /^(translate)/;
const degTransforms = /^(rotate|skew)/;

const addUnit = (value, unit) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.num(value) && value !== 0 ? value + unit : value;

const isValueIdentity = (value, id) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.arr(value) ? value.every(v => isValueIdentity(v, id)) : _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.num(value) ? value === id : parseFloat(value) === id;

class AnimatedStyle extends _react_spring_animated__WEBPACK_IMPORTED_MODULE_3__.AnimatedObject {
  constructor(_ref) {
    let {
      x,
      y,
      z
    } = _ref,
        style = _objectWithoutPropertiesLoose(_ref, _excluded$1);

    const inputs = [];
    const transforms = [];

    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push(xyz => [`translate3d(${xyz.map(v => addUnit(v, 'px')).join(',')})`, isValueIdentity(xyz, 0)]);
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.eachProp)(style, (value, key) => {
      if (key === 'transform') {
        inputs.push([value || '']);
        transforms.push(transform => [transform, transform === '']);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.und(value)) return;
        const unit = pxTransforms.test(key) ? 'px' : degTransforms.test(key) ? 'deg' : '';
        inputs.push((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.toArray)(value));
        transforms.push(key === 'rotate3d' ? ([x, y, z, deg]) => [`rotate3d(${x},${y},${z},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : input => [`${key}(${input.map(v => addUnit(v, unit)).join(',')})`, isValueIdentity(input, key.startsWith('scale') ? 1 : 0)]);
      }
    });

    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }

    super(style);
  }

}

class FluidTransform extends _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.FluidValue {
  constructor(inputs, transforms) {
    super();
    this._value = null;
    this.inputs = inputs;
    this.transforms = transforms;
  }

  get() {
    return this._value || (this._value = this._get());
  }

  _get() {
    let transform = '';
    let identity = true;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(this.inputs, (input, i) => {
      const arg1 = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.getFluidValue)(input[0]);
      const [t, id] = this.transforms[i](_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.arr(arg1) ? arg1 : input.map(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.getFluidValue));
      transform += ' ' + t;
      identity = identity && id;
    });
    return identity ? 'none' : transform;
  }

  observerAdded(count) {
    if (count == 1) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(this.inputs, input => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(input, value => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.hasFluidValue)(value) && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.addFluidObserver)(value, this)));
  }

  observerRemoved(count) {
    if (count == 0) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(this.inputs, input => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(input, value => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.hasFluidValue)(value) && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.removeFluidObserver)(value, this)));
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._value = null;
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.callFluidObservers)(this, event);
  }

}

const primitives = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

const _excluded = ["scrollTop", "scrollLeft"];
_react_spring_core__WEBPACK_IMPORTED_MODULE_0__.Globals.assign({
  batchedUpdates: react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates,
  createStringInterpolator: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.createStringInterpolator,
  colors: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.colors
});
const host = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_3__.createHost)(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: style => new AnimatedStyle(style),
  getComponentProps: _ref => {
    let props = _objectWithoutPropertiesLoose(_ref, _excluded);

    return props;
  }
});
const animated = host.animated;




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app! ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app */ "./pages/_app.tsx");
      }
    ]);
  

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./style.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./style.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/style.scss",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./style.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/style.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/style.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/style.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:root {\n  color-scheme: dark light;\n  /*============= HUE ======================*/\n  --speed: 250ms;\n  --hue-brand: 301;\n  --info-hue: 222;\n  --success-hue: 120;\n  --warning-hue: 40;\n  --failure-hue: 2;\n  /*=============== KNOBS ================*/\n  --accent-offset: 30;\n  --surface-shadow: var(--hue) 10% 20%;\n  --shadow-strength: 0.02;\n  --saturation-bias: 0;\n  --saturation-value: 0.5;\n  --saturation: -webkit-calc(var(--saturation-value) + var(--saturation-bias));\n  --saturation: calc(var(--saturation-value) + var(--saturation-bias));\n  --lightness-bias: 0;\n  --lightness-value: 0.5;\n  --lightness: -webkit-calc(var(--lightness-value) + var(--lightness-bias));\n  --lightness: calc(var(--lightness-value) + var(--lightness-bias));\n  /*================ BRAND =================*/\n  --hue: var(--hue-brand);\n  --light-saturation: 0.66;\n  --dark-saturation: -webkit-calc(var(--light-saturation) * 0.6);\n  --dark-saturation: calc(var(--light-saturation) * 0.6);\n  --light-lightness: 0.57;\n  --dark-lightness: -webkit-calc(var(--light-saturation) * 0.75);\n  --dark-lightness: calc(var(--light-saturation) * 0.75);\n  --brand-h: var(--hue);\n  --brand-s: -webkit-calc(100% * var(--saturation));\n  --brand-s: calc(100% * var(--saturation));\n  --brand-l: -webkit-calc(100% * var(--lightness));\n  --brand-l: calc(100% * var(--lightness));\n  --brand: hsl(var(--brand-h) var(--brand-s) var(--brand-l));\n  /*=============== INFO =================*/\n  --info-saturation-bias: 0;\n  --info-lightness-bias: 0;\n  --info-h: var(--info-hue);\n  --info-s: -webkit-calc(100% * (var(--saturation) + var(--info-saturation-bias)));\n  --info-s: calc(100% * (var(--saturation) + var(--info-saturation-bias)));\n  --info-l: -webkit-calc(100% * (var(--lightness) + var(--info-lightness-bias)));\n  --info-l: calc(100% * (var(--lightness) + var(--info-lightness-bias)));\n  --info: hsl(var(--info-h) var(--info-s) var(--info-l));\n  /*============== SUCCESS ================*/\n  --success-saturation-bias: 0;\n  --success-lightness-bias: 0;\n  --success-h: var(--success-hue);\n  --success-s: -webkit-calc(\n    100% * (var(--saturation) + var(--success-saturation-bias))\n  );\n  --success-s: calc(\n    100% * (var(--saturation) + var(--success-saturation-bias))\n  );\n  --success-l: -webkit-calc(100% * (var(--lightness) + var(--success-lightness-bias)));\n  --success-l: calc(100% * (var(--lightness) + var(--success-lightness-bias)));\n  --success: hsl(var(--success-h) var(--success-s) var(--success-l));\n  /*============== WARNING ================*/\n  --warning-saturation-bias: 0;\n  --warning-lightness-bias: 0;\n  --warning-h: var(--warning-hue);\n  --warning-s: -webkit-calc(\n    100% * (var(--saturation) + var(--warning-saturation-bias))\n  );\n  --warning-s: calc(\n    100% * (var(--saturation) + var(--warning-saturation-bias))\n  );\n  --warning-l: -webkit-calc(100% * (var(--lightness) + var(--warning-lightness-bias)));\n  --warning-l: calc(100% * (var(--lightness) + var(--warning-lightness-bias)));\n  --warning: hsl(var(--warning-h) var(--warning-s) var(--warning-l));\n  /*============== FAILURE ================*/\n  --failure-saturation-bias: 0;\n  --failure-lightness-bias: 0;\n  --failure-h: var(--failure-hue);\n  --failure-s: -webkit-calc(\n    100% * (var(--saturation) + var(--failure-saturation-bias))\n  );\n  --failure-s: calc(\n    100% * (var(--saturation) + var(--failure-saturation-bias))\n  );\n  --failure-l: -webkit-calc(100% * (var(--lightness) + var(--failure-lightness-bias)));\n  --failure-l: calc(100% * (var(--lightness) + var(--failure-lightness-bias)));\n  --failure: hsl(var(--failure-h) var(--failure-s) var(--failure-l));\n  /*============ PRIMARY ACCENT ==============*/\n  --primary-hue: -webkit-calc(var(--hue) + 180 + var(--accent-offset));\n  --primary-hue: calc(var(--hue) + 180 + var(--accent-offset));\n  --primary-fg-hsl: -webkit-calc(var(--primary-hue) + 180)\n    -webkit-calc(100% * var(--saturation)) -webkit-calc(100% * var(--lightness));\n  --primary-fg-hsl: calc(var(--primary-hue) + 180)\n    calc(100% * var(--saturation)) calc(100% * var(--lightness));\n  --primary-bg-hsl: var(--primary-hue) -webkit-calc(100% * var(--saturation))\n    -webkit-calc(100% * var(--lightness));\n  --primary-bg-hsl: var(--primary-hue) calc(100% * var(--saturation))\n    calc(100% * var(--lightness));\n  --primary-fg: hsl(var(--primary-fg-hsl));\n  --primary-bg: hsl(var(--primary-bg-hsl));\n  /*=========== SECONDARY ACCENT =============*/\n  --secondary-hue: -webkit-calc(var(--hue) + 180 - var(--accent-offset));\n  --secondary-hue: calc(var(--hue) + 180 - var(--accent-offset));\n  --secondary-fg-hsl: -webkit-calc(var(--secondary-hue) + 180)\n    -webkit-calc(100% * var(--saturation)) -webkit-calc(100% * var(--lightness));\n  --secondary-fg-hsl: calc(var(--secondary-hue) + 180)\n    calc(100% * var(--saturation)) calc(100% * var(--lightness));\n  --secondary-bg-hsl: var(--secondary-hue) -webkit-calc(100% * var(--saturation))\n    -webkit-calc(100% * var(--lightness));\n  --secondary-bg-hsl: var(--secondary-hue) calc(100% * var(--saturation))\n    calc(100% * var(--lightness));\n  --secondary-fg: hsl(var(--secondary-fg-hsl));\n  --secondary-bg: hsl(var(--secondary-bg-hsl));\n  /*================= TEXT =================*/\n  --text-saturation: 0.2;\n  --text-bias: 0;\n  --light-text-lightness: 0.1;\n  --light-text-factor: 1;\n  --dark-text-lightness: 0.9;\n  --dark-text-factor: -1;\n  --text1-hsl: var(--hue) -webkit-calc(100% * var(--text-saturation))\n    -webkit-calc(\n      100% *\n        (\n          var(--text-lightness) + (0 * var(--text-factor) * 0.2) -\n            (var(--text-factor) * var(--text-bias))\n        )\n    );\n  --text1-hsl: var(--hue) calc(100% * var(--text-saturation))\n    calc(\n      100% *\n        (\n          var(--text-lightness) + (0 * var(--text-factor) * 0.2) -\n            (var(--text-factor) * var(--text-bias))\n        )\n    );\n  --text2-hsl: var(--hue) -webkit-calc(100% * (var(--text-saturation) / 2))\n    -webkit-calc(\n      100% *\n        (\n          var(--text-lightness) + (1 * var(--text-factor) * 0.2) -\n            (var(--text-factor) * var(--text-bias))\n        )\n    );\n  --text2-hsl: var(--hue) calc(100% * (var(--text-saturation) / 2))\n    calc(\n      100% *\n        (\n          var(--text-lightness) + (1 * var(--text-factor) * 0.2) -\n            (var(--text-factor) * var(--text-bias))\n        )\n    );\n  --text1: hsl(var(--text1-hsl));\n  --text2: hsl(var(--text2-hsl));\n  /*=============== SURFACES ================*/\n  --surfaces-saturation: 0.1;\n  --surfaces-bias: 0;\n  --light-surfaces-lightness: 1;\n  --light-surfaces-factor: 1;\n  --dark-surfaces-lightness: 0.12;\n  --dark-surfaces-factor: -1;\n  --surface1-hsl: var(--hue) -webkit-calc(100% * var(--surfaces-saturation))\n    -webkit-calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface1-hsl: var(--hue) calc(100% * var(--surfaces-saturation))\n    calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface2-hsl: var(--hue) -webkit-calc(100% * var(--surfaces-saturation))\n    -webkit-calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0.05) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface2-hsl: var(--hue) calc(100% * var(--surfaces-saturation))\n    calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0.05) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface3-hsl: var(--hue) -webkit-calc(100% * var(--surfaces-saturation))\n    -webkit-calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0.1) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface3-hsl: var(--hue) calc(100% * var(--surfaces-saturation))\n    calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0.1) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface4-hsl: var(--hue) -webkit-calc(100% * var(--surfaces-saturation))\n    -webkit-calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0.15) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface4-hsl: var(--hue) calc(100% * var(--surfaces-saturation))\n    calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0.15) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface1: hsla(var(--surface1-hsl));\n  --surface2: hsl(var(--surface2-hsl));\n  --surface3: hsl(var(--surface3-hsl));\n  --surface4: hsl(var(--surface4-hsl));\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/fonts/roboto/roboto-v29-latin-regular.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-regular.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-regular.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-regular.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-regular.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(\"/fonts/roboto/roboto-v29-latin-100.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-100.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-100.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-100.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-100.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-100.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(\"/fonts/roboto/roboto-v29-latin-300.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-300.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-300.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-300.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-300.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"/fonts/roboto/roboto-v29-latin-500.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-500.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-500.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-500.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-500.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"/fonts/roboto/roboto-v29-latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-700.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-700.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-700.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-700.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 900;\n  src: url(\"/fonts/roboto/roboto-v29-latin-900.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-900.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-900.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-900.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-900.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-900.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 200;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@media screen and (prefers-color-scheme: light) {\n  :root {\n    color-scheme: light;\n    --saturation-value: var(--light-saturation);\n    --lightness-value: var(--light-saturation);\n    --text-factor: var(--light-text-factor);\n    --text-lightness: var(--light-text-lightness);\n    --surfaces-factor: var(--light-surfaces-factor);\n    --surfaces-lightness: var(--light-surfaces-lightness);\n    --surface-shadow: var(--hue) 10% 20%;\n    --shadow-strength: 0.02;\n  }\n}\n@media screen and (prefers-color-scheme: dark) {\n  :root {\n    color-scheme: dark;\n    --saturation-value: var(--dark-saturation);\n    --lightness-value: var(--dark-saturation);\n    --text-factor: var(--dark-text-factor);\n    --text-lightness: var(--dark-text-lightness);\n    --surfaces-factor: var(--dark-surfaces-factor);\n    --surfaces-lightness: var(--dark-surfaces-lightness);\n    --surface-shadow: var(--hue) 50% 3%;\n    --shadow-strength: 0.8;\n  }\n}\nhtml[color-scheme=light] {\n  color-scheme: light;\n  --saturation-value: var(--light-saturation);\n  --lightness-value: var(--light-saturation);\n  --text-factor: var(--light-text-factor);\n  --text-lightness: var(--light-text-lightness);\n  --surfaces-factor: var(--light-surfaces-factor);\n  --surfaces-lightness: var(--light-surfaces-lightness);\n  --surface-shadow: var(--hue) 10% 20%;\n  --shadow-strength: 0.02;\n}\n\nhtml[color-scheme=dark] {\n  color-scheme: dark;\n  --saturation-value: var(--dark-saturation);\n  --lightness-value: var(--dark-saturation);\n  --text-factor: var(--dark-text-factor);\n  --text-lightness: var(--dark-text-lightness);\n  --surfaces-factor: var(--dark-surfaces-factor);\n  --surfaces-lightness: var(--dark-surfaces-lightness);\n  --surface-shadow: var(--hue) 50% 3%;\n  --shadow-strength: 0.8;\n}\n\n@media screen and (prefers-contrast: more) {\n  :root {\n    --text-bias: 1;\n    --surfaces-bias: 1;\n    --saturation-bias: 1;\n  }\n}\n@media screen and (prefers-contrast: less) {\n  :root {\n    --text-bias: -0.1;\n    --surfaces-bias: -0.05;\n    --saturation-bias: -0.05;\n  }\n}\nhtml[contrast=more] {\n  --text-bias: 1;\n  --surfaces-bias: 1;\n  --saturation-bias: 1;\n}\n\nhtml[contrast=less] {\n  --text-bias: -0.1;\n  --surfaces-bias: -0.05;\n  --saturation-bias: -0.05;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  block-size: 100%;\n  background-color: var(--surface2);\n  color: var(--text1);\n}\nhtml ::-webkit-scrollbar {\n  width: 0.25rem;\n}\nhtml ::-webkit-scrollbar-track {\n  background-color: var(--surface4);\n}\nhtml ::-webkit-scrollbar-thumb {\n  background-color: var(--brand);\n}\n\nbody {\n  font-weight: 300;\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"clig off\";\n     -moz-font-feature-settings: \"kern\", \"liga\", \"clig off\";\n          font-feature-settings: \"kern\", \"liga\", \"clig off\";\n  font-kerning: normal;\n  letter-spacing: 0.75px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-variant-ligatures: no-common-ligatures;\n     -moz-font-variant-ligatures: no-common-ligatures;\n          font-variant-ligatures: no-common-ligatures;\n  font-smooth: always;\n  font-size: 14px;\n  line-height: 1.5;\n  font-family: \"Roboto\", \"IBM Plex Sans\", system-ui, sans-serif;\n}\n@media (min-width: 520px) {\n  body {\n    letter-spacing: -webkit-calc(\n        0.75px +\n          -0.25 *\n          (100vw - 520px) /\n          846\n      );\n    letter-spacing: calc(\n        0.75px +\n          -0.25 *\n          (100vw - 520px) /\n          846\n      );\n  }\n}\n@media (min-width: 1366px) {\n  body {\n    letter-spacing: 0.5px;\n  }\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\na {\n  text-decoration: none;\n  color: var(--text1);\n}\na:visited {\n  background-color: #ccc;\n}\na[href^=\"tel:\"] {\n  color: orange;\n  text-decoration: none;\n}\n\nblockquote p {\n  padding: 15px;\n  background: var(--surface2);\n  border-radius: 5px;\n}\nblockquote p::before {\n  content: \"“\";\n}\nblockquote p::after {\n  content: \"”\";\n}\n\nh1 {\n  font-size: 38px;\n  font-size: -webkit-calc(\n    28px + (38 - 28) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n  font-size: calc(\n    28px + (38 - 28) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h1 {\n    font-size: 28px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h1 {\n    font-size: 38px;\n  }\n}\n\nh2 {\n  font-size: 33px;\n  font-size: -webkit-calc(\n    23px + (33 - 23) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n  font-size: calc(\n    23px + (33 - 23) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h2 {\n    font-size: 23px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h2 {\n    font-size: 33px;\n  }\n}\n\nh3 {\n  font-size: 30px;\n  font-size: -webkit-calc(\n    20px + (30 - 20) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n  font-size: calc(\n    20px + (30 - 20) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h3 {\n    font-size: 20px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h3 {\n    font-size: 30px;\n  }\n}\n\nh4 {\n  font-size: 28px;\n  font-size: -webkit-calc(\n    18px + (28 - 18) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n  font-size: calc(\n    18px + (28 - 18) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h4 {\n    font-size: 18px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h4 {\n    font-size: 28px;\n  }\n}\n\nh5 {\n  font-size: 26px;\n  font-size: -webkit-calc(\n    16px + (26 - 16) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n  font-size: calc(\n    16px + (26 - 16) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h5 {\n    font-size: 16px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h5 {\n    font-size: 26px;\n  }\n}\n\nh6 {\n  font-size: 25px;\n  font-size: -webkit-calc(\n    15px + (25 - 15) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n  font-size: calc(\n    15px + (25 - 15) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h6 {\n    font-size: 15px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h6 {\n    font-size: 25px;\n  }\n}\n\nnav > ul {\n  display: -webkit-flex;\n  display: flex;\n}\n\np {\n  font-size: 18px;\n  font-size: -webkit-calc(\n    14px + (18 - 14) *\n      ((100vw - 1.5vw) / (1600 - 1.5))\n  );\n  font-size: calc(\n    14px + (18 - 14) *\n      ((100vw - 1.5vw) / (1600 - 1.5))\n  );\n}\n@media screen and (max-width: 1.5) {\n  p {\n    font-size: 14px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  p {\n    font-size: 18px;\n  }\n}\n\nul {\n  list-style: none;\n}\n\n.surface-samples > * {\n  border-radius: 1rem;\n  display: grid;\n  place-content: center;\n  font-size: 3rem;\n  font-weight: 200;\n  border: 1px solid hsl(var(--hue) 10% -webkit-calc(50% - 100% * var(--text-factor) * var(--text-bias))/calc(15% + 100% * var(--text-bias)));\n  border: 1px solid hsl(var(--hue) 10% calc(50% - 100% * var(--text-factor) * var(--text-bias))/calc(15% + 100% * var(--text-bias)));\n}\n\n.info {\n  color: var(--text1);\n  background-color: var(--info);\n}\n\n.success {\n  color: var(--text1);\n  background-color: var(--success);\n}\n\n.warning {\n  color: var(--text1);\n  background-color: var(--warning);\n}\n\n.failure {\n  color: var(--text1);\n  background-color: var(--failure);\n}\n\n.brand {\n  color: var(--text1);\n  background-color: var(--brand);\n}\n\n.primary {\n  color: var(--primary-fg);\n  background-color: var(--primary-bg);\n}\n\n.secondary {\n  color: var(--secondary-fg);\n  background-color: var(--secondary-bg);\n}\n\n.surface1 {\n  background-color: var(--surface1);\n  color: var(--text2);\n}\n\n.surface2 {\n  background-color: var(--surface2);\n  color: var(--text2);\n}\n\n.surface3 {\n  background-color: var(--surface3);\n  color: var(--text1);\n}\n\n.surface4 {\n  background-color: var(--surface4);\n  color: var(--text1);\n}\n\n.text1 {\n  color: var(--text1);\n}\n\n.text2 {\n  color: var(--text2);\n}\n\n.rad-shadow {\n  -webkit-box-shadow: 0 2.8px 2.2px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.03)), 0 6.7px 5.3px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.01)), 0 12.5px 10px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.02)), 0 22.3px 17.9px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.02)), 0 41.8px 33.4px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.03)), 0 100px 80px hsl(var(--surface-shadow)/var(--shadow-strength));\n          box-shadow: 0 2.8px 2.2px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.03)), 0 6.7px 5.3px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.01)), 0 12.5px 10px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.02)), 0 22.3px 17.9px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.02)), 0 41.8px 33.4px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.03)), 0 100px 80px hsl(var(--surface-shadow)/var(--shadow-strength));\n}\n\n#hue {\n  background: -webkit-gradient(linear, left top, right top, from(var(--brand)), color-stop(50%, var(--brand)), color-stop(50%, var(--text2)), to(var(--text2)));\n  background: -webkit-linear-gradient(left, var(--brand) 0%, var(--brand) 50%, var(--text2) 50%, var(--text2) 100%);\n  background: linear-gradient(to right, var(--brand) 0%, var(--brand) 50%, var(--text2) 50%, var(--text2) 100%);\n  border: solid 1px var(--text2);\n  border-radius: 8px;\n  height: 7px;\n  width: 356px;\n  outline: none;\n  -webkit-transition: background var(--speed) ease-in;\n  transition: background var(--speed) ease-in;\n  -webkit-appearance: none;\n}", "",{"version":3,"sources":["webpack://style.scss","webpack://sass_helper/_function.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAKhB;EACE,wBAAA;EACA,2CAAA;EACA,cAAA;EACA,gBAAA;EAEA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EAEA,yCAAA;EACA,mBAAA;EACA,oCAAA;EACA,uBAAA;EAEA,oBAAA;EACA,uBAAA;EACA,4EAAA;EAAA,oEAAA;EAEA,mBAAA;EACA,sBAAA;EACA,yEAAA;EAAA,iEAAA;EAEA,2CAAA;EACA,uBAAA;EACA,wBAAA;EACA,8DAAA;EAAA,sDAAA;EACA,uBAAA;EACA,8DAAA;EAAA,sDAAA;EACA,qBAAA;EACA,iDAAA;EAAA,yCAAA;EACA,gDAAA;EAAA,wCAAA;EACA,0DAAA;EAEA,yCAAA;EACA,yBAAA;EACA,wBAAA;EACA,yBAAA;EACA,gFAAA;EAAA,wEAAA;EACA,8EAAA;EAAA,sEAAA;EACA,sDAAA;EAEA,0CAAA;EACA,4BAAA;EACA,2BAAA;EACA,+BAAA;EACA;;GAAA;EAAA;;GAAA;EAGA,oFAAA;EAAA,4EAAA;EACA,kEAAA;EAEA,0CAAA;EACA,4BAAA;EACA,2BAAA;EACA,+BAAA;EACA;;GAAA;EAAA;;GAAA;EAGA,oFAAA;EAAA,4EAAA;EACA,kEAAA;EAEA,0CAAA;EACA,4BAAA;EACA,2BAAA;EACA,+BAAA;EACA;;GAAA;EAAA;;GAAA;EAGA,oFAAA;EAAA,4EAAA;EACA,kEAAA;EAEA,6CAAA;EACA,oEAAA;EAAA,4DAAA;EACA;gFAAA;EAAA;gEAAA;EAEA;yCAAA;EAAA;iCAAA;EAGA,wCAAA;EACA,wCAAA;EAEA,6CAAA;EACA,sEAAA;EAAA,8DAAA;EACA;gFAAA;EAAA;gEAAA;EAEA;yCAAA;EAAA;iCAAA;EAEA,4CAAA;EACA,4CAAA;EAEA,2CAAA;EACA,sBAAA;EACA,cAAA;EACA,2BAAA;EACA,sBAAA;EACA,0BAAA;EACA,sBAAA;EAEA;;;;;;;KAAA;EAAA;;;;;;;KAAA;EAQA;;;;;;;KAAA;EAAA;;;;;;;KAAA;EASA,8BAAA;EACA,8BAAA;EAEA,4CAAA;EACA,0BAAA;EACA,kBAAA;EACA,6BAAA;EACA,0BAAA;EACA,+BAAA;EACA,0BAAA;EACA;;;;;;;KAAA;EAAA;;;;;;;KAAA;EAQA;;;;;;;KAAA;EAAA;;;;;;;KAAA;EAQA;;;;;;;KAAA;EAAA;;;;;;;KAAA;EAQA;;;;;;;KAAA;EAAA;;;;;;;KAAA;EASA,qCAAA;EACA,oCAAA;EACA,oCAAA;EACA,oCAAA;AApBF;;ACjHI;EACE,qBDyIJ;ECxII,kBAAA;EACA,gBDqIO;ECnIL,sDAAA;EAAyD,qBAAA;EACzD,+WAAA;EAamB,eAAA;ADwG3B;AC3HI;EACE,qBDyIJ;ECxII,kBAAA;EACA,gBDqIO;ECnHL,kDAAA;EAA2D,qBAAA;EAC3D,2VAAA;EAamB,eAAA;ADiG3B;ACpII;EACE,qBDyIJ;ECxII,kBAAA;EACA,gBDqIO;ECnHL,kDAAA;EAA2D,qBAAA;EAC3D,2VAAA;EAamB,eAAA;AD0G3B;AC7II;EACE,qBDyIJ;ECxII,kBAAA;EACA,gBDqIO;ECnHL,kDAAA;EAA2D,qBAAA;EAC3D,2VAAA;EAamB,eAAA;ADmH3B;ACtJI;EACE,qBDyIJ;ECxII,kBAAA;EACA,gBDqIO;ECnHL,kDAAA;EAA2D,qBAAA;EAC3D,2VAAA;EAamB,eAAA;AD4H3B;AC/JI;EACE,qBDyIJ;ECxII,kBAAA;EACA,gBDqIO;ECnHL,kDAAA;EAA2D,qBAAA;EAC3D,2VAAA;EAamB,eAAA;ADqI3B;ACxKI;EACE,4BDgJJ;EC/II,kBAAA;EACA,gBD4II;EC1IF,mEAAA;EAAyD,qBAAA;EACzD,ubAAA;EAamB,eAAA;AD8J3B;ACjLI;EACE,4BDgJJ;EC/II,kBAAA;EACA,gBD4II;EC1HF,+DAAA;EAA2D,qBAAA;EAC3D,maAAA;EAamB,eAAA;ADuJ3B;AC1LI;EACE,4BDgJJ;EC/II,kBAAA;EACA,gBD4II;EC1HF,+DAAA;EAA2D,qBAAA;EAC3D,maAAA;EAamB,eAAA;ADgK3B;ACnMI;EACE,4BDgJJ;EC/II,kBAAA;EACA,gBD4II;EC1HF,+DAAA;EAA2D,qBAAA;EAC3D,maAAA;EAamB,eAAA;ADyK3B;AC5MI;EACE,4BDgJJ;EC/II,kBAAA;EACA,gBD4II;EC1HF,+DAAA;EAA2D,qBAAA;EAC3D,maAAA;EAamB,eAAA;ADkL3B;ACrNI;EACE,4BDgJJ;EC/II,kBAAA;EACA,gBD4II;EC1HF,+DAAA;EAA2D,qBAAA;EAC3D,maAAA;EAamB,eAAA;AD2L3B;AC9NI;EACE,4BDgJJ;EC/II,kBAAA;EACA,gBD4II;EC1HF,+DAAA;EAA2D,qBAAA;EAC3D,maAAA;EAamB,eAAA;ADoM3B;AAhFA;EACE;IACE,mBAAA;IAEA,2CAAA;IACA,0CAAA;IAEA,uCAAA;IACA,6CAAA;IAEA,+CAAA;IACA,qDAAA;IAEA,oCAAA;IACA,uBAAA;EA8EF;AACF;AA3EA;EACE;IACE,kBAAA;IAEA,0CAAA;IACA,yCAAA;IAEA,sCAAA;IACA,4CAAA;IAEA,8CAAA;IACA,oDAAA;IAEA,mCAAA;IACA,sBAAA;EAyEF;AACF;AAtEA;EACE,mBAAA;EAEA,2CAAA;EACA,0CAAA;EAEA,uCAAA;EACA,6CAAA;EAEA,+CAAA;EACA,qDAAA;EAEA,oCAAA;EACA,uBAAA;AAoEF;;AAjEA;EACE,kBAAA;EAEA,0CAAA;EACA,yCAAA;EAEA,sCAAA;EACA,4CAAA;EAEA,8CAAA;EACA,oDAAA;EAEA,mCAAA;EACA,sBAAA;AAgEF;;AA7DA;EACE;IACE,cAAA;IACA,kBAAA;IACA,oBAAA;EAgEF;AACF;AA7DA;EACE;IACE,iBAAA;IACA,sBAAA;IACA,wBAAA;EA+DF;AACF;AA5DA;EACE,cAAA;EACA,kBAAA;EACA,oBAAA;AA8DF;;AA3DA;EACE,iBAAA;EACA,sBAAA;EACA,wBAAA;AA8DF;;AA3DA;EACE,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,SAAA;AA8DF;;AA3DA;EACE,gBAAA;EACA,iCAAA;EACA,mBAAA;AA8DF;AA7DE;EACE,cAAA;AA+DJ;AA7DE;EACE,iCAAA;AA+DJ;AA7DE;EACE,8BAAA;AA+DJ;;AA3DA;EACE,gBAAA;EACA,yDAAA;KAAA,sDAAA;UAAA,iDAAA;EACA,oBAAA;EC7SE,sBD8S0D;EAC5D,4CAAA;EACA,kCAAA;EACA,mDAAA;KAAA,gDAAA;UAAA,2CAAA;EACA,mBAAA;EACA,eArTU;EAsTV,gBArTY;EAsTZ,6DAAA;AA8DF;AChXE;EDuSF;ICrSM;;;;;OAAA;IAAA;;;;;OAAA;EDuXJ;AACF;AC/WE;ED4RF;IC1RM,qBD8RgE;EAmFpE;AACF;;AA1EA;;;;EAIE,aAAA;AA6EF;;AApEA;EACE,qBAAA;EACA,mBAAA;AAuEF;AA/DE;EACE,sBAAA;AAiEJ;AA/DE;EACE,aAAA;EACA,qBAAA;AAiEJ;;AA5DE;EACE,aAAA;EACA,2BAAA;EACA,kBAAA;AA+DJ;AA7DE;EACE,YAAA;AA+DJ;AA7DE;EACE,YAAA;AA+DJ;;AAnDA;EC7QI,eD8Q8C;EC5QhD;;;GAVa;EAUb;;;GAVa;ADgVf;ACrUE;ED0QF;ICzQI,eD0Q2B;EA8D7B;AACF;ACvUE;EDuQF;ICtQI,eDuQ8C;EAmEhD;AACF;;AAlEA;EChRI,eDiR6C;EC/Q/C;;;GAVa;EAUb;;;GAVa;ADkWf;ACvVE;ED6QF;IC5QI,eD6Q2B;EA6E7B;AACF;ACzVE;ED0QF;ICzQI,eD0Q6C;EAkF/C;AACF;;AAjFA;ECnRI,eDoR6C;EClR/C;;;GAVa;EAUb;;;GAVa;ADoXf;ACzWE;EDgRF;IC/QI,eDgR2B;EA4F7B;AACF;AC3WE;ED6QF;IC5QI,eD6Q6C;EAiG/C;AACF;;AAhGA;ECtRI,eDuR6C;ECrR/C;;;GAVa;EAUb;;;GAVa;ADsYf;AC3XE;EDmRF;IClRI,eDmR2B;EA2G7B;AACF;AC7XE;EDgRF;IC/QI,eDgR6C;EAgH/C;AACF;;AA/GA;ECzRI,eD0R6C;ECxR/C;;;GAVa;EAUb;;;GAVa;ADwZf;AC7YE;EDsRF;ICrRI,eDsR2B;EA0H7B;AACF;AC/YE;EDmRF;IClRI,eDmR6C;EA+H/C;AACF;;AA9HA;EC5RI,eD6R6C;EC3R/C;;;GAVa;EAUb;;;GAVa;AD0af;AC/ZE;EDyRF;ICxRI,eDyR2B;EAyI7B;AACF;ACjaE;EDsRF;ICrRI,eDsR6C;EA8I/C;AACF;;AAtIA;EACE,qBAAA;EAAA,aAAA;AAyIF;;AAvIA;ECzSI,eD4SuC;EC1SzC;;;GAVa;EAUb;;;GAVa;ADgcf;ACrbE;EDsSF;ICrSI,eDvGQ;EA+hBV;AACF;ACvbE;EDmSF;IClSI,eDqSuC;EAqJzC;AACF;;AA5IA;EACE,gBAAA;AA+IF;;AAzIA;EACE,mBAAA;EACA,aAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,0IAAA;EAAA,kIAAA;AA4IF;;AArIA;EACE,mBAAA;EACA,6BAAA;AAwIF;;AArIA;EACE,mBAAA;EACA,gCAAA;AAwIF;;AArIA;EACE,mBAAA;EACA,gCAAA;AAwIF;;AArIA;EACE,mBAAA;EACA,gCAAA;AAwIF;;AArIA;EACE,mBAAA;EACA,8BAAA;AAwIF;;AArIA;EACE,wBAAA;EACA,mCAAA;AAwIF;;AArIA;EACE,0BAAA;EACA,qCAAA;AAwIF;;AArIA;EACE,iCAAA;EACA,mBAAA;AAwIF;;AArIA;EACE,iCAAA;EACA,mBAAA;AAwIF;;AArIA;EACE,iCAAA;EACA,mBAAA;AAwIF;;AArIA;EACE,iCAAA;EACA,mBAAA;AAwIF;;AArIA;EACE,mBAAA;AAwIF;;AArIA;EACE,mBAAA;AAwIF;;AArIA;EACE,4dAAA;UAAA,odAAA;AAwIF;;AA3HA;EACE,6JAAA;EAAA,iHAAA;EAAA,6GAAA;EAOA,8BAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mDAAA;EAAA,2CAAA;EACA,wBAAA;AAwHF","sourcesContent":["@charset \"UTF-8\";\n:root {\n  color-scheme: dark light;\n  /*============= HUE ======================*/\n  --speed: 250ms;\n  --hue-brand: 301;\n  --info-hue: 222;\n  --success-hue: 120;\n  --warning-hue: 40;\n  --failure-hue: 2;\n  /*=============== KNOBS ================*/\n  --accent-offset: 30;\n  --surface-shadow: var(--hue) 10% 20%;\n  --shadow-strength: 0.02;\n  --saturation-bias: 0;\n  --saturation-value: 0.5;\n  --saturation: calc(var(--saturation-value) + var(--saturation-bias));\n  --lightness-bias: 0;\n  --lightness-value: 0.5;\n  --lightness: calc(var(--lightness-value) + var(--lightness-bias));\n  /*================ BRAND =================*/\n  --hue: var(--hue-brand);\n  --light-saturation: 0.66;\n  --dark-saturation: calc(var(--light-saturation) * 0.6);\n  --light-lightness: 0.57;\n  --dark-lightness: calc(var(--light-saturation) * 0.75);\n  --brand-h: var(--hue);\n  --brand-s: calc(100% * var(--saturation));\n  --brand-l: calc(100% * var(--lightness));\n  --brand: hsl(var(--brand-h) var(--brand-s) var(--brand-l));\n  /*=============== INFO =================*/\n  --info-saturation-bias: 0;\n  --info-lightness-bias: 0;\n  --info-h: var(--info-hue);\n  --info-s: calc(100% * (var(--saturation) + var(--info-saturation-bias)));\n  --info-l: calc(100% * (var(--lightness) + var(--info-lightness-bias)));\n  --info: hsl(var(--info-h) var(--info-s) var(--info-l));\n  /*============== SUCCESS ================*/\n  --success-saturation-bias: 0;\n  --success-lightness-bias: 0;\n  --success-h: var(--success-hue);\n  --success-s: calc(\n    100% * (var(--saturation) + var(--success-saturation-bias))\n  );\n  --success-l: calc(100% * (var(--lightness) + var(--success-lightness-bias)));\n  --success: hsl(var(--success-h) var(--success-s) var(--success-l));\n  /*============== WARNING ================*/\n  --warning-saturation-bias: 0;\n  --warning-lightness-bias: 0;\n  --warning-h: var(--warning-hue);\n  --warning-s: calc(\n    100% * (var(--saturation) + var(--warning-saturation-bias))\n  );\n  --warning-l: calc(100% * (var(--lightness) + var(--warning-lightness-bias)));\n  --warning: hsl(var(--warning-h) var(--warning-s) var(--warning-l));\n  /*============== FAILURE ================*/\n  --failure-saturation-bias: 0;\n  --failure-lightness-bias: 0;\n  --failure-h: var(--failure-hue);\n  --failure-s: calc(\n    100% * (var(--saturation) + var(--failure-saturation-bias))\n  );\n  --failure-l: calc(100% * (var(--lightness) + var(--failure-lightness-bias)));\n  --failure: hsl(var(--failure-h) var(--failure-s) var(--failure-l));\n  /*============ PRIMARY ACCENT ==============*/\n  --primary-hue: calc(var(--hue) + 180 + var(--accent-offset));\n  --primary-fg-hsl: calc(var(--primary-hue) + 180)\n    calc(100% * var(--saturation)) calc(100% * var(--lightness));\n  --primary-bg-hsl: var(--primary-hue) calc(100% * var(--saturation))\n    calc(100% * var(--lightness));\n  --primary-fg: hsl(var(--primary-fg-hsl));\n  --primary-bg: hsl(var(--primary-bg-hsl));\n  /*=========== SECONDARY ACCENT =============*/\n  --secondary-hue: calc(var(--hue) + 180 - var(--accent-offset));\n  --secondary-fg-hsl: calc(var(--secondary-hue) + 180)\n    calc(100% * var(--saturation)) calc(100% * var(--lightness));\n  --secondary-bg-hsl: var(--secondary-hue) calc(100% * var(--saturation))\n    calc(100% * var(--lightness));\n  --secondary-fg: hsl(var(--secondary-fg-hsl));\n  --secondary-bg: hsl(var(--secondary-bg-hsl));\n  /*================= TEXT =================*/\n  --text-saturation: 0.2;\n  --text-bias: 0;\n  --light-text-lightness: 0.1;\n  --light-text-factor: 1;\n  --dark-text-lightness: 0.9;\n  --dark-text-factor: -1;\n  --text1-hsl: var(--hue) calc(100% * var(--text-saturation))\n    calc(\n      100% *\n        (\n          var(--text-lightness) + (0 * var(--text-factor) * 0.2) -\n            (var(--text-factor) * var(--text-bias))\n        )\n    );\n  --text2-hsl: var(--hue) calc(100% * (var(--text-saturation) / 2))\n    calc(\n      100% *\n        (\n          var(--text-lightness) + (1 * var(--text-factor) * 0.2) -\n            (var(--text-factor) * var(--text-bias))\n        )\n    );\n  --text1: hsl(var(--text1-hsl));\n  --text2: hsl(var(--text2-hsl));\n  /*=============== SURFACES ================*/\n  --surfaces-saturation: 0.1;\n  --surfaces-bias: 0;\n  --light-surfaces-lightness: 1;\n  --light-surfaces-factor: 1;\n  --dark-surfaces-lightness: 0.12;\n  --dark-surfaces-factor: -1;\n  --surface1-hsl: var(--hue) calc(100% * var(--surfaces-saturation))\n    calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface2-hsl: var(--hue) calc(100% * var(--surfaces-saturation))\n    calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0.05) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface3-hsl: var(--hue) calc(100% * var(--surfaces-saturation))\n    calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0.1) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface4-hsl: var(--hue) calc(100% * var(--surfaces-saturation))\n    calc(\n      100% *\n        (\n          var(--surfaces-lightness) - (var(--surfaces-factor) * 0.15) +\n            (var(--surfaces-factor) * var(--surfaces-bias))\n        )\n    );\n  --surface1: hsla(var(--surface1-hsl));\n  --surface2: hsl(var(--surface2-hsl));\n  --surface3: hsl(var(--surface3-hsl));\n  --surface4: hsl(var(--surface4-hsl));\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/fonts/roboto/roboto-v29-latin-regular.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-regular.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-regular.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-regular.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-regular.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(\"/fonts/roboto/roboto-v29-latin-100.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-100.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-100.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-100.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-100.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-100.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(\"/fonts/roboto/roboto-v29-latin-300.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-300.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-300.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-300.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-300.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"/fonts/roboto/roboto-v29-latin-500.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-500.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-500.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-500.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-500.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"/fonts/roboto/roboto-v29-latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-700.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-700.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-700.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-700.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 900;\n  src: url(\"/fonts/roboto/roboto-v29-latin-900.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/roboto/roboto-v29-latin-900.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/roboto/roboto-v29-latin-900.woff2\") format(\"woff2\"), url(\"/fonts/roboto/roboto-v29-latin-900.woff\") format(\"woff\"), url(\"/fonts/roboto/roboto-v29-latin-900.ttf\") format(\"truetype\"), url(\"/fonts/roboto/roboto-v29-latin-900.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-regular.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-100.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 200;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-200.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-300.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-500.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-600.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@font-face {\n  font-family: \"IBM Plex Sans\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.woff2\") format(\"woff2\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.woff\") format(\"woff\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.ttf\") format(\"truetype\"), url(\"/fonts/ibm/ibm-plex-sans-v9-latin-ext_latin-700.svg#IBM Plex Sans\") format(\"svg\");\n  /* Legacy iOS */\n}\n@media screen and (prefers-color-scheme: light) {\n  :root {\n    color-scheme: light;\n    --saturation-value: var(--light-saturation);\n    --lightness-value: var(--light-saturation);\n    --text-factor: var(--light-text-factor);\n    --text-lightness: var(--light-text-lightness);\n    --surfaces-factor: var(--light-surfaces-factor);\n    --surfaces-lightness: var(--light-surfaces-lightness);\n    --surface-shadow: var(--hue) 10% 20%;\n    --shadow-strength: 0.02;\n  }\n}\n@media screen and (prefers-color-scheme: dark) {\n  :root {\n    color-scheme: dark;\n    --saturation-value: var(--dark-saturation);\n    --lightness-value: var(--dark-saturation);\n    --text-factor: var(--dark-text-factor);\n    --text-lightness: var(--dark-text-lightness);\n    --surfaces-factor: var(--dark-surfaces-factor);\n    --surfaces-lightness: var(--dark-surfaces-lightness);\n    --surface-shadow: var(--hue) 50% 3%;\n    --shadow-strength: 0.8;\n  }\n}\nhtml[color-scheme=light] {\n  color-scheme: light;\n  --saturation-value: var(--light-saturation);\n  --lightness-value: var(--light-saturation);\n  --text-factor: var(--light-text-factor);\n  --text-lightness: var(--light-text-lightness);\n  --surfaces-factor: var(--light-surfaces-factor);\n  --surfaces-lightness: var(--light-surfaces-lightness);\n  --surface-shadow: var(--hue) 10% 20%;\n  --shadow-strength: 0.02;\n}\n\nhtml[color-scheme=dark] {\n  color-scheme: dark;\n  --saturation-value: var(--dark-saturation);\n  --lightness-value: var(--dark-saturation);\n  --text-factor: var(--dark-text-factor);\n  --text-lightness: var(--dark-text-lightness);\n  --surfaces-factor: var(--dark-surfaces-factor);\n  --surfaces-lightness: var(--dark-surfaces-lightness);\n  --surface-shadow: var(--hue) 50% 3%;\n  --shadow-strength: 0.8;\n}\n\n@media screen and (prefers-contrast: more) {\n  :root {\n    --text-bias: 1;\n    --surfaces-bias: 1;\n    --saturation-bias: 1;\n  }\n}\n@media screen and (prefers-contrast: less) {\n  :root {\n    --text-bias: -0.1;\n    --surfaces-bias: -0.05;\n    --saturation-bias: -0.05;\n  }\n}\nhtml[contrast=more] {\n  --text-bias: 1;\n  --surfaces-bias: 1;\n  --saturation-bias: 1;\n}\n\nhtml[contrast=less] {\n  --text-bias: -0.1;\n  --surfaces-bias: -0.05;\n  --saturation-bias: -0.05;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  block-size: 100%;\n  background-color: var(--surface2);\n  color: var(--text1);\n}\nhtml ::-webkit-scrollbar {\n  width: 0.25rem;\n}\nhtml ::-webkit-scrollbar-track {\n  background-color: var(--surface4);\n}\nhtml ::-webkit-scrollbar-thumb {\n  background-color: var(--brand);\n}\n\nbody {\n  font-weight: 300;\n  font-feature-settings: \"kern\";\n  font-kerning: normal;\n  letter-spacing: 0.75px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-variant-ligatures: no-common-ligatures;\n  font-smooth: always;\n  font-size: 14px;\n  line-height: 1.5;\n  font-family: \"Roboto\", \"IBM Plex Sans\", system-ui, sans-serif;\n}\n@media (min-width: 520px) {\n  body {\n    letter-spacing: calc(\n        0.75px +\n          -0.25 *\n          (100vw - 520px) /\n          846\n      );\n  }\n}\n@media (min-width: 1366px) {\n  body {\n    letter-spacing: 0.5px;\n  }\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\na {\n  text-decoration: none;\n  color: var(--text1);\n}\na:visited {\n  background-color: #ccc;\n}\na[href^=\"tel:\"] {\n  color: orange;\n  text-decoration: none;\n}\n\nblockquote p {\n  padding: 15px;\n  background: var(--surface2);\n  border-radius: 5px;\n}\nblockquote p::before {\n  content: \"“\";\n}\nblockquote p::after {\n  content: \"”\";\n}\n\nh1 {\n  font-size: 38px;\n  font-size: calc(\n    28px + (38 - 28) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h1 {\n    font-size: 28px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h1 {\n    font-size: 38px;\n  }\n}\n\nh2 {\n  font-size: 33px;\n  font-size: calc(\n    23px + (33 - 23) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h2 {\n    font-size: 23px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h2 {\n    font-size: 33px;\n  }\n}\n\nh3 {\n  font-size: 30px;\n  font-size: calc(\n    20px + (30 - 20) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h3 {\n    font-size: 20px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h3 {\n    font-size: 30px;\n  }\n}\n\nh4 {\n  font-size: 28px;\n  font-size: calc(\n    18px + (28 - 18) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h4 {\n    font-size: 18px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h4 {\n    font-size: 28px;\n  }\n}\n\nh5 {\n  font-size: 26px;\n  font-size: calc(\n    16px + (26 - 16) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h5 {\n    font-size: 16px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h5 {\n    font-size: 26px;\n  }\n}\n\nh6 {\n  font-size: 25px;\n  font-size: calc(\n    15px + (25 - 15) *\n      ((100vw - 576pxvw) / (1600 - 576))\n  );\n}\n@media screen and (max-width: 576px) {\n  h6 {\n    font-size: 15px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  h6 {\n    font-size: 25px;\n  }\n}\n\nnav > ul {\n  display: flex;\n}\n\np {\n  font-size: 18px;\n  font-size: calc(\n    14px + (18 - 14) *\n      ((100vw - 1.5vw) / (1600 - 1.5))\n  );\n}\n@media screen and (max-width: 1.5) {\n  p {\n    font-size: 14px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  p {\n    font-size: 18px;\n  }\n}\n\nul {\n  list-style: none;\n}\n\n.surface-samples > * {\n  border-radius: 1rem;\n  display: grid;\n  place-content: center;\n  font-size: 3rem;\n  font-weight: 200;\n  border: 1px solid hsl(var(--hue) 10% calc(50% - 100% * var(--text-factor) * var(--text-bias))/calc(15% + 100% * var(--text-bias)));\n}\n\n.info {\n  color: var(--text1);\n  background-color: var(--info);\n}\n\n.success {\n  color: var(--text1);\n  background-color: var(--success);\n}\n\n.warning {\n  color: var(--text1);\n  background-color: var(--warning);\n}\n\n.failure {\n  color: var(--text1);\n  background-color: var(--failure);\n}\n\n.brand {\n  color: var(--text1);\n  background-color: var(--brand);\n}\n\n.primary {\n  color: var(--primary-fg);\n  background-color: var(--primary-bg);\n}\n\n.secondary {\n  color: var(--secondary-fg);\n  background-color: var(--secondary-bg);\n}\n\n.surface1 {\n  background-color: var(--surface1);\n  color: var(--text2);\n}\n\n.surface2 {\n  background-color: var(--surface2);\n  color: var(--text2);\n}\n\n.surface3 {\n  background-color: var(--surface3);\n  color: var(--text1);\n}\n\n.surface4 {\n  background-color: var(--surface4);\n  color: var(--text1);\n}\n\n.text1 {\n  color: var(--text1);\n}\n\n.text2 {\n  color: var(--text2);\n}\n\n.rad-shadow {\n  box-shadow: 0 2.8px 2.2px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.03)), 0 6.7px 5.3px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.01)), 0 12.5px 10px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.02)), 0 22.3px 17.9px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.02)), 0 41.8px 33.4px hsl(var(--surface-shadow)/calc(var(--shadow-strength) + 0.03)), 0 100px 80px hsl(var(--surface-shadow)/var(--shadow-strength));\n}\n\n#hue {\n  background: linear-gradient(to right, var(--brand) 0%, var(--brand) 50%, var(--text2) 50%, var(--text2) 100%);\n  border: solid 1px var(--text2);\n  border-radius: 8px;\n  height: 7px;\n  width: 356px;\n  outline: none;\n  transition: background var(--speed) ease-in;\n  -webkit-appearance: none;\n}","@use \"sass:math\";\r\n\r\n@mixin fluid-type($properties, $min-vw, $max-vw, $min-value, $max-value) {\r\n  @each $property in $properties {\r\n    #{$property}: $min-value;\r\n  }\r\n\r\n  @media (min-width: $min-vw) {\r\n    @each $property in $properties {\r\n      #{$property}: calc(\r\n        #{$min-value} +\r\n          #{strip-unit($max-value - $min-value)} *\r\n          (100vw - #{$min-vw}) /\r\n          #{strip-unit($max-vw - $min-vw)}\r\n      );\r\n    }\r\n  }\r\n\r\n  @media (min-width: $max-vw) {\r\n    @each $property in $properties {\r\n      #{$property}: $max-value;\r\n    }\r\n  }\r\n}\r\n\r\n@function strip-unit($number) {\r\n  @if type-of($number) == \"number\" and not unitless($number) {\r\n    @return math.div($number, $number * 0 + 1);\r\n  }\r\n\r\n  @return $number;\r\n}\r\n\r\n@mixin multiple_fontFace($font, $url, $name, $listWeights) {\r\n  @each $listWeight in $listWeights {\r\n    @font-face {\r\n      font-family: $font;\r\n      font-style: normal;\r\n      font-weight: $listWeight;\r\n      @if $listWeight == 400 {\r\n        src: url($url + \"/\" + $name + \"-\" + \"regular\" + \".eot\"); /* IE9 Compat Modes */\r\n        src: url($url + \"/\" + $name + \"-\" + \"regular\" + \".eot?#iefix\")\r\n            format(\"embedded-opentype\"),\r\n          /* IE6-IE8 */\r\n            url($url + \"/\" + $name + \"-\" + \"regular\" + \".woff2\")\r\n            format(\"woff2\"),\r\n          /* Super Modern Browsers */\r\n            url($url + \"/\" + $name + \"-\" + \"regular\" + \".woff\")\r\n            format(\"woff\"),\r\n          /* Modern Browsers */\r\n            url($url + \"/\" + $name + \"-\" + \"regular\" + \".ttf\")\r\n            format(\"truetype\"),\r\n          /* Safari, Android, iOS */\r\n            url($url + \"/\" + $name + \"-\" + \"regular\" + \".svg#\" + $font)\r\n            format(\"svg\"); /* Legacy iOS */\r\n      } @else {\r\n        src: url($url + \"/\" + $name + \"-\" + $listWeight + \".eot\"); /* IE9 Compat Modes */\r\n        src: url($url + \"/\" + $name + \"-\" + $listWeight + \".eot?#iefix\")\r\n            format(\"embedded-opentype\"),\r\n          /* IE6-IE8 */\r\n            url($url + \"/\" + $name + \"-\" + $listWeight + \".woff2\")\r\n            format(\"woff2\"),\r\n          /* Super Modern Browsers */\r\n            url($url + \"/\" + $name + \"-\" + $listWeight + \".woff\")\r\n            format(\"woff\"),\r\n          /* Modern Browsers */\r\n            url($url + \"/\" + $name + \"-\" + $listWeight + \".ttf\")\r\n            format(\"truetype\"),\r\n          /* Safari, Android, iOS */\r\n            url($url + \"/\" + $name + \"-\" + $listWeight + \".svg#\" + $font)\r\n            format(\"svg\"); /* Legacy iOS */\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@mixin fluid-font(\r\n  $min,\r\n  $max,\r\n  $min-vw: 576px,\r\n  $max-vw: 1600px,\r\n  $fallback: false\r\n) {\r\n  $min-no-unit: strip-units($min);\r\n  $max-no-unit: strip-units($max);\r\n  $min-vw-no-unit: strip-units($min-vw);\r\n  $max-vw-no-unit: strip-units($max-vw);\r\n\r\n  @if getUnit($min) == \"rem\" or getUnit($min) == \"em\" {\r\n    $min-no-unit: strip-units($min) * 16;\r\n    $max-no-unit: strip-units($max) * 16;\r\n  }\r\n\r\n  $responsive: calc(\r\n    #{$min-no-unit}px + (#{$max-no-unit} - #{$min-no-unit}) *\r\n      ((100vw - #{$min-vw}vw) / (#{$max-vw-no-unit} - #{$min-vw-no-unit}))\r\n  );\r\n\r\n  @if $fallback {\r\n    font-size: $fallback;\r\n  } @else {\r\n    font-size: $max;\r\n  }\r\n  font-size: $responsive;\r\n  @media screen and (max-width: #{$min-vw}) {\r\n    font-size: $min;\r\n  }\r\n  @media screen and (min-width: #{$max-vw}) {\r\n    font-size: $max;\r\n  }\r\n}\r\n@function strip-units($number) {\r\n  @return math.div($number, $number * 0 + 1);\r\n}\r\n@function getUnit($value) {\r\n  @return str-slice($value * 0 + \"\", 2, -1);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
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

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
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
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
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
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
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

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
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

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-spring/dist/react-spring.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/react-spring/dist/react-spring.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_web__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
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
  exports.Fragment = symbolFor('react.fragment');
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

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ (function(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStyleSheet": function() { return /* binding */ Je; },
/* harmony export */   "StyleSheetConsumer": function() { return /* binding */ le; },
/* harmony export */   "StyleSheetContext": function() { return /* binding */ ue; },
/* harmony export */   "StyleSheetManager": function() { return /* binding */ ye; },
/* harmony export */   "ThemeConsumer": function() { return /* binding */ Le; },
/* harmony export */   "ThemeContext": function() { return /* binding */ Ge; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ Fe; },
/* harmony export */   "__PRIVATE__": function() { return /* binding */ Ke; },
/* harmony export */   "createGlobalStyle": function() { return /* binding */ We; },
/* harmony export */   "css": function() { return /* binding */ Ce; },
/* harmony export */   "isStyledComponent": function() { return /* binding */ N; },
/* harmony export */   "keyframes": function() { return /* binding */ Ue; },
/* harmony export */   "useTheme": function() { return /* binding */ Ze; },
/* harmony export */   "version": function() { return /* binding */ C; },
/* harmony export */   "withTheme": function() { return /* binding */ Xe; }
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.3",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),x=new Map,k=new Map,V=1,B=function(e){if(x.has(e))return x.get(e);for(;k.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),x.set(e,t),k.set(t,e),t},z=function(e){return k.get(e)},M=function(e,t){t>=V&&(V=t+1),x.set(e,t),k.set(t,e)},G="style["+A+'][data-styled-version="5.3.3"]',L=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(M(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.3");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(G),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.3"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__.default(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__.default?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n))}catch(e){Ie.test(e.message)&&Pe.delete(n)}finally{console.error=r}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var xe=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ve(t)&&Ve(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&ze(e,i[a],a)}return e}var Ge=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),Le=Ge.Consumer;function Fe(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Ge.Provider,{value:n},e.children):null}var Ye={};function qe(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+xe("5.3.3"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Re(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default,_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default)(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e)}));var $e=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ce.apply(void 0,[e].concat(n)),a="sc-global-"+xe(JSON.stringify(i)),u=new $e(i,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(l,e,t,o,n),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){if(!t.server)return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Re(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Oe(a),react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function Ue(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ce.apply(void 0,[e].concat(n)).join(""),s=xe(o);return new ve(s,o)}var Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.3"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.3",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Xe=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),i=e.defaultProps,a=Re(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Ze=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge)},Ke={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (He);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);