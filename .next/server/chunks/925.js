exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 4925:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ useUserEnquiryContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_simple_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2510);
/* harmony import */ var react_simple_snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_simple_snackbar__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const options = {
  position: 'top-right',
  style: {
    backgroundColor: '#212529',
    color: '#fff',
    fontSize: '14px',
    textAlign: 'center'
  },
  closeStyle: {
    color: '#fff',
    fontSize: '16px'
  }
};
const UserEnquiryContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();

const UserEnquiryContextProvider = ({
  children
}) => {
  const [openSnackbar, closeSnackbar] = (0,react_simple_snackbar__WEBPACK_IMPORTED_MODULE_3__.useSnackbar)(options);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: userInquiry,
    1: setUserInquiry
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  const handleFormChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInquiry(_objectSpread(_objectSpread({}, userInquiry), {}, {
      [name]: value
    }));
  };

  async function createInquiry(lang) {
    setLoading(true);
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
      username: 'admin',
      password: 'I6FR%0^hD@Z[@'
    }).then(async res => {
      await axios__WEBPACK_IMPORTED_MODULE_1___default().post('https://wpbackend.navisa.af/wp-json/wp/v2/navisa-enquiry', {
        title: 'User Enquiry - Navisa Translation Services',
        status: 'publish',
        fields: {
          name: userInquiry.name,
          phone: userInquiry.phone,
          email: userInquiry.email,
          company: userInquiry.company,
          message: userInquiry.message
        }
      }, {
        headers: {
          Authorization: `Bearer ${res.data.token}`
        }
      }).then(res => {
        setLoading(false);

        if (res.status === 201) {
          if (lang === 'en') {
            openSnackbar('Your message has been submitted.');
          } else {
            openSnackbar('.پیام شما موفقانه ارسال گردید');
          }

          setLoading(false);
        } else {
          if (lang === 'dr') {
            openSnackbar('There was an error trying to send your message, Please try again.');
          } else {
            openSnackbar('.پیام شما موفقانه ارسال نگردید، لطفا دوباره کوشش کنید');
          }

          setLoading(false);
        }

        return res.data;
      }).catch(err => {
        console.log(err);
        openSnackbar('There was an error trying to send your message, Please check your network connection and try again.');
        setLoading(false);
      });
    }).catch(err => {
      console.log(err);
    });
    setUserInquiry({
      name: '',
      phone: '',
      email: '',
      company: '',
      message: ''
    });
    {
      /*await axios
      .post('https://abr-backend.herokuapp.com/navisa-enquiries', {
        name: userInquiry.name,
        phone: userInquiry.phone,
        email: userInquiry.email,
        company: userInquiry.company,
        message: userInquiry.message,
      })
      .then((res) => {
        if (res.statusText === 'OK') {
          if (lang === 'en') {
            openSnackbar('Your message has been submitted.')
          } else {
            openSnackbar('.پیام شما موفقانه ارسال گردید')
          }
          setLoading(false)
        } else {
          if (lang === 'dr') {
            openSnackbar('There was an error trying to send your message, Please try again.')
          } else {
            openSnackbar('.پیام شما موفقانه ارسال نگردید، لطفا دوباره کوشش کنید')
          }
          setLoading(false)
        }
        setUserInquiry({
          name: '',
          phone: '',
          email: '',
          company: '',
          message: '',
        })
      })
      .catch((err) => {
        openSnackbar(
          'There was an error trying to send your message, Please check your network connection and try again.'
        )
        setLoading(false)
      })*/
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserEnquiryContext.Provider, {
    value: {
      handleFormChange,
      createInquiry,
      userInquiry,
      loading
    },
    children: children
  });
};

const useUserEnquiryContext = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(UserEnquiryContext);
};
/* harmony default export */ __webpack_exports__["Z"] = (UserEnquiryContextProvider);

/***/ })

};
;