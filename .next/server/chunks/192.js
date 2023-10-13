exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 4192:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": function() { return /* binding */ useLanguageContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const LanguageContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

const LanguageContextProvider = ({
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: language,
    1: setLanguage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const handleLanguageChange = e => {
    setLanguage(e.target.value);

    switch (router.pathname) {
      case '/':
        router.push('/fa');
        break;

      case '/about':
        router.push('/fa/about');
        break;

      case '/contact':
        router.push('/fa/contact');
        break;

      case '/translation':
        router.push('/fa/translation');
        break;

      case '/transcription':
        router.push('/fa/transcription');
        break;

      case '/website-localization':
        router.push('/fa/website-localization');
        break;

      case '/professional-proofreading':
        router.push('/fa/professional-proofreading');
        break;

      case '/fa':
        router.push('/');
        break;

      case '/fa/about':
        router.push('/about');
        break;

      case '/fa/contact':
        router.push('/contact');
        break;

      case '/fa/translation':
        router.push('/translation');
        break;

      case '/fa/transcription':
        router.push('/transcription');
        break;

      case '/fa/website-localization':
        router.push('/website-localization');
        break;

      case '/fa/professional-proofreading':
        router.push('/professional-proofreading');
        break;

      default:
        router.push('/');
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LanguageContext.Provider, {
    value: {
      language,
      handleLanguageChange
    },
    children: children
  });
};

const useLanguageContext = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);
};
/* harmony default export */ __webpack_exports__["Z"] = (LanguageContextProvider);

/***/ })

};
;