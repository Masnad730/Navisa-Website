exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 1999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1683);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);




const SimpleLoader = ({
  height,
  width,
  color
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default()), {
    type: "TailSpin",
    color: color,
    height: height,
    width: width
  });
};

SimpleLoader.defaultProps = {
  height: 80,
  width: 80,
  color: '#343a40'
};
/* harmony default export */ __webpack_exports__["Z"] = (SimpleLoader);

/***/ }),

/***/ 2904:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_userEnquiryContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4925);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1999);





const EnquiryFormDR = () => {
  const {
    handleFormChange,
    createInquiry,
    userInquiry,
    loading
  } = (0,_contexts_userEnquiryContext__WEBPACK_IMPORTED_MODULE_1__/* .useUserEnquiryContext */ .x)();

  const handleSubmit = async e => {
    e.preventDefault();
    createInquiry('dr');
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
    onSubmit: handleSubmit,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-6",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          name: "phone",
          value: userInquiry.phone,
          onChange: handleFormChange,
          className: "text-right",
          type: "text",
          placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-6",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          name: "name",
          value: userInquiry.name,
          onChange: handleFormChange,
          className: "text-right",
          type: "text",
          placeholder: "\u0627\u0633\u0645",
          required: true
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          name: "email",
          value: userInquiry.email,
          onChange: handleFormChange,
          className: "text-right",
          type: "email",
          placeholder: "\u0627\u06CC\u0645\u06CC\u0644 \u0622\u062F\u0631\u0633",
          required: true
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          name: "company",
          value: userInquiry.company,
          onChange: handleFormChange,
          className: "text-right",
          type: "text",
          placeholder: "\u0634\u0631\u06A9\u062A"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
          name: "message",
          value: userInquiry.message,
          onChange: handleFormChange,
          className: "text-right",
          id: "",
          cols: "30",
          rows: "5",
          placeholder: "!\u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u0622\u0646\u0686\u0647 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F \u0628\u0647 \u0645\u0627 \u0628\u06AF\u0648\u06CC\u06CC\u062F",
          required: true
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          className: "bg-secondary text-white flex items-center justify-center w-full",
          type: "submit",
          children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            color: "#fff",
            height: "25",
            width: "25"
          }) : 'ارسال'
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (EnquiryFormDR);

/***/ })

};
;