exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 5549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_userEnquiryContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4925);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1999);





const EnquiryFormEN = () => {
  const {
    handleFormChange,
    createInquiry,
    userInquiry,
    loading
  } = (0,_contexts_userEnquiryContext__WEBPACK_IMPORTED_MODULE_1__/* .useUserEnquiryContext */ .x)();

  const handleSubmit = async e => {
    e.preventDefault();
    createInquiry('en');
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
    onSubmit: handleSubmit,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-6",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          name: "name",
          value: userInquiry.name,
          onChange: handleFormChange,
          type: "text",
          placeholder: "Name",
          required: true
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-6",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          name: "phone",
          value: userInquiry.phone,
          onChange: handleFormChange,
          type: "text",
          placeholder: "Phone"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          name: "email",
          value: userInquiry.email,
          onChange: handleFormChange,
          type: "email",
          placeholder: "Email",
          required: true
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          name: "company",
          value: userInquiry.company,
          onChange: handleFormChange,
          type: "text",
          placeholder: "Company"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
          name: "message",
          value: userInquiry.message,
          onChange: handleFormChange,
          id: "",
          cols: "30",
          rows: "5",
          placeholder: "Tell us more about what you need?",
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
          }) : 'Submit'
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (EnquiryFormEN);

/***/ }),

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

/***/ })

};
;