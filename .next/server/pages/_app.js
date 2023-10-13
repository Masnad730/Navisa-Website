(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4413:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-simple-snackbar"
var external_react_simple_snackbar_ = __webpack_require__(2510);
var external_react_simple_snackbar_default = /*#__PURE__*/__webpack_require__.n(external_react_simple_snackbar_);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/ScrollToTop.js




const ScrollToTop = ({
  showBelow
}) => {
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  (0,external_react_.useEffect)(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({
      top: 0,
      behavior: `smooth`
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: show && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "z-50 fixed rounded-sm bottom-6 right-6 w-11 h-11 flex items-center justify-center cursor-pointer transition-all opacity-80 hover:opacity-100 bg-primary-2",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-md text-secondary",
        onClick: handleClick,
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "flaticon-up-arrow"
        })
      })
    })
  });
};

/* harmony default export */ var components_ScrollToTop = (ScrollToTop);
// EXTERNAL MODULE: ./contexts/languageContext.js
var languageContext = __webpack_require__(4192);
// EXTERNAL MODULE: ./contexts/userEnquiryContext.js
var userEnquiryContext = __webpack_require__(4925);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














router_default().events.on('routeChangeStart', url => {
  // console.log(`Loading: ${url}`)
  external_nprogress_default().start();
});
router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
router_default().events.on('routeChangeError', () => external_nprogress_default().done());

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_simple_snackbar_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx(languageContext/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(userEnquiryContext/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_ScrollToTop, {
          showBelow: 300
        }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
      })
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2510:
/***/ (function(module) {

"use strict";
module.exports = require("react-simple-snackbar");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [192,925], function() { return __webpack_exec__(4413); });
module.exports = __webpack_exports__;

})();