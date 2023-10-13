exports.id = 847;
exports.ids = [847];
exports.modules = {

/***/ 2166:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/fa/MobileHeader.js





const MobileHeader = ({
  activePage,
  language,
  handleChange
}) => {
  const {
    0: showSubMenu,
    1: setShowSubMenu
  } = (0,external_react_.useState)(false);
  const {
    0: showMenu,
    1: setShowMenu
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "w-full",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between py-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex items-center justify-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "w-20 md:w-28",
                  src: "/images/navisa-logo.png",
                  alt: "Navisa Translation Services"
                })
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-end",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "px-0 py-0 transition-all",
            onClick: () => setShowMenu(!showMenu),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              className: "fill-current",
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                children: "menu-toggle"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: showMenu ? 'fixed top-0 right-0/4 bg-white w-80 md:w-96 h-screen z-50 transition-all duration-75' : 'fixed top-0 -right-full transition-all duration-75',
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w-full flex flex-col text-right",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between px-8 py-6 border-b border-accents_4",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  htmlFor: "menu-toggle",
                  className: "cursor-pointer transition-all",
                  onClick: () => setShowMenu(false),
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                    className: "fill-current",
                    width: "30",
                    height: "30",
                    viewBox: "0 0 20 20",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                      children: "cancel-menu"
                    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "\u0645\u06CC\u0646\u0648\u06CC \u0627\u0635\u0644\u06CC"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
                className: "flex items-center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "flex flex-col w-full",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "py-4 w-full border-b border-accents_4 px-5",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/fa/",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: activePage === 'home' ? 'text-primary' : 'hover:text-primary',
                        children: "\u062E\u0627\u0646\u0647"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "py-4 w-full border-b border-accents_4 px-5",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/fa/about",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: activePage === 'about' ? 'text-primary' : 'hover:text-primary',
                        children: "\u062F\u0631 \u0628\u0627\u0631\u0647 \u0645\u0627"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "py-4 w-full border-b border-accents_4 pr-5",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "#",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        className: "relative",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "flex items-center justify-between pl-5",
                          onClick: () => setShowSubMenu(!showSubMenu),
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: `flex items-center justify-center ${showSubMenu ? 'transform rotate-180 transition-all duration-300 ease-in-out' : ''}`,
                            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                              className: "w-2.5 h-2.5 pointer-events-none",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 412 232",
                              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                                d: "M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",
                                fill: "#648299",
                                fillRule: "nonzero"
                              })
                            })
                          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                            children: "\u062E\u062F\u0645\u0627\u062A"
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                          className: showSubMenu ? 'block mt-2' : 'hidden',
                          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                            className: "px-5 py-4 flex border-b border-accents_4 last:border-b-0",
                            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                              href: "/fa/translation",
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                className: activePage === 'translation' ? 'text-primary' : 'hover:text-primary w-full',
                                children: "\u062E\u062F\u0645\u0627\u062A \u062A\u0631\u062C\u0645\u0647"
                              })
                            })
                          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                            className: "px-5 py-4 flex border-b border-accents_4 last:border-b-0",
                            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                              href: "/fa/website-localization",
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                className: activePage === 'website-localization' ? 'text-primary' : 'hover:text-primary w-full',
                                children: "\u0645\u062D\u0644\u06CC \u0633\u0627\u0632\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A"
                              })
                            })
                          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                            className: "px-5 py-4 flex border-b border-accents_4 last:border-b-0",
                            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                              href: "/fa/transcription",
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                className: activePage === 'transcription' ? 'text-primary' : 'hover:text-primary w-full',
                                children: "\u062E\u062F\u0645\u0627\u062A \u0631\u0648\u0646\u0648\u06CC\u0633\u06CC"
                              })
                            })
                          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                            className: "px-5 py-4 flex border-b border-accents_4 last:border-b-0",
                            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                              href: "/fa/professional-proofreading",
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                className: activePage === 'professional-proofreading' ? 'text-primary' : 'hover:text-primary w-full',
                                children: "\u062A\u0635\u062D\u06CC\u062D \u0645\u0633\u0644\u06A9\u06CC"
                              })
                            })
                          })]
                        })]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "py-4 w-full border-b border-accents_4 px-5",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/fa/resources",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: activePage === 'resources' ? 'text-primary' : 'hover:text-primary',
                        children: "\u0645\u0646\u0627\u0628\u0639"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "py-4 w-full border-b border-accents_4 px-5",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/fa/contact",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: activePage === 'contact' ? 'text-primary' : 'hover:text-primary',
                        children: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"
                      })
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "flex items-center justify-end mt-8 mr-5",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "relative inline-flex lg:ml-4",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                    className: "w-2 h-2 absolute top-0 right-0 mx-2 my-4 lg:m-4  pointer-events-none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 412 232",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",
                      fill: "#648299",
                      fillRule: "nonzero"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    value: language,
                    onChange: handleChange,
                    className: "text-gray-600 pl-4 pr-8 mb-0 bg-white hover:border-gray-400 focus:outline-none appearance-none",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "dari",
                      children: "\u062F\u0631\u06CC"
                    }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "english",
                      children: "English"
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "flex items-center justify-end mt-8 mr-5",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "flex items-center mr-2 last:mr-0",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "w-10 h-10 rounded-1/2 flex items-center justify-center bg-accents_3 hover:text-primary",
                      href: "https://www.facebook.com/navisa.translations/?ref=page_internal",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-facebook"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "flex items-center mr-2 last:mr-0",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "w-10 h-10 rounded-1/2 flex items-center justify-center bg-accents_3 hover:text-primary",
                      href: "#",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-linkedin"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "flex items-center mr-2 last:mr-0",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "w-10 h-10 rounded-1/2 flex items-center justify-center bg-accents_3 hover:text-primary",
                      href: "#",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-twitter"
                      })
                    })
                  })]
                })
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: showMenu ? 'body-overlay' : 'hidden'
    })]
  });
};

/* harmony default export */ var fa_MobileHeader = (MobileHeader);
// EXTERNAL MODULE: ./contexts/languageContext.js
var languageContext = __webpack_require__(4192);
;// CONCATENATED MODULE: ./components/fa/Header.js







const Header = ({
  activePage
}) => {
  const {
    handleLanguageChange,
    language
  } = (0,languageContext/* useLanguageContext */.Q)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "block lg:hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx(fa_MobileHeader, {
        activePage: activePage,
        language: language,
        handleChange: handleLanguageChange
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hidden lg:block",
      children: /*#__PURE__*/jsx_runtime_.jsx("header", {
        className: "border-b border-accents_4",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "py-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-3",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/fa",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "w-36",
                        src: "/images/navisa-logo.png",
                        alt: "\u062F\u0627\u0631\u0627\u0644\u062A\u0631\u062C\u0645\u0647 \u0646\u0648\u06CC\u0633\u0627"
                      })
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-5",
                children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
                  className: "flex items-center",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "flex text-lg",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/fa/contact",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: activePage === 'contact' ? 'text-primary' : 'hover:text-primary',
                          children: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/fa/resources",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: activePage === 'resources' ? 'text-primary' : 'hover:text-primary',
                          children: "\u0645\u0646\u0627\u0628\u0639"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4 group",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "#",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          className: "relative",
                          children: ["\u062E\u062F\u0645\u0627\u062A", /*#__PURE__*/jsx_runtime_.jsx("svg", {
                            className: "w-2.5 h-2.5 ml-2 inline pointer-events-none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 412 232",
                            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                              d: "M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",
                              fill: "#648299",
                              fillRule: "nonzero"
                            })
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                            className: "hidden opacity-0 text-right absolute right-0 top-0 z-50 mt-8 py-5 w-64 max bg-white shadow-lg border border-accents_2 group-hover:block group-hover:opacity-100",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                              className: "px-7 py-1.5 flex justify-end",
                              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                                href: "/fa/translation",
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  className: activePage === 'translation' ? 'text-primary' : 'hover:text-primary w-full',
                                  children: "\u062E\u062F\u0645\u0627\u062A \u062A\u0631\u062C\u0645\u0647"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              className: "px-7 py-1.5 flex justify-end",
                              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                                href: "/fa/website-localization",
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  className: activePage === 'website-localization' ? 'text-primary' : 'hover:text-primary w-full',
                                  children: "\u0645\u062D\u0644\u06CC \u0633\u0627\u0632\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              className: "px-7 py-1.5 flex justify-end",
                              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                                href: "/fa/transcription",
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  className: activePage === 'transcription' ? 'text-primary' : 'hover:text-primary w-full',
                                  children: "\u062E\u062F\u0645\u0627\u062A \u0631\u0648\u0646\u0648\u06CC\u0633\u06CC"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              className: "px-7 py-1.5 flex justify-end",
                              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                                href: "/fa/professional-proofreading",
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  className: activePage === 'professional-proofreading' ? 'text-primary' : 'hover:text-primary w-full',
                                  children: "\u062A\u0635\u062D\u06CC\u062D \u0645\u0633\u0644\u06A9\u06CC"
                                })
                              })
                            })]
                          })]
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/fa/about",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: activePage === 'about' ? 'text-primary' : 'hover:text-primary',
                          children: "\u062F\u0631 \u0628\u0627\u0631\u0647 \u0645\u0627"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/fa",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: activePage === 'home' ? 'text-primary' : 'hover:text-primary',
                          children: "\u062E\u0627\u0646\u0647"
                        })
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-4",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex items-center justify-end",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "flex items-center mr-2 last:mr-0",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: "w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary hover:text-primary",
                        href: "https://www.facebook.com/navisa.translations/?ref=page_internal",
                        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "flaticon-facebook"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "flex items-center mr-2 last:mr-0",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: "w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary hover:text-primary",
                        href: "#",
                        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "flaticon-linkedin"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "flex items-center mr-2 last:mr-0",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: "w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary hover:text-primary",
                        href: "#",
                        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "flaticon-twitter"
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "relative inline-flex ml-4",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 412 232",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",
                        fill: "#648299",
                        fillRule: "nonzero"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                      value: language,
                      onChange: handleLanguageChange,
                      className: "rounded-full text-gray-600 pl-4 pr-8 mb-0 bg-white hover:border-gray-400 focus:outline-none appearance-none",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "dari",
                        children: "\u062F\u0631\u06CC"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "english",
                        children: "English"
                      })]
                    })]
                  })]
                })
              })]
            })
          })
        })
      })
    })]
  });
};

/* harmony default export */ var fa_Header = (Header);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(7206);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
;// CONCATENATED MODULE: ./components/fa/Footer.js





const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "bg-secondary text-white py-16",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 mb-12 last:mb-0",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/fa",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "w-20 md:w-28 lg:w-36",
                  src: "/images/navisa-logo-white.png",
                  alt: "Navisa Translation Services"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 mb-12 last:mb-0 flex flex-col items-end",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-right",
            children: [/*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
              up: true,
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "text-base sm:text-lg lg:text-xl text-current mb-5",
                children: "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("address", {
              className: "not-italic",
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: "text-medium text-accents_4",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Fade_default()), {
                  up: true,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "flex items-center justify-end mb-3",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "\u0633\u0631\u06A9 \u0627\u0646\u0635\u0627\u0631\u06CC\u060C \u0634\u0647\u0631 \u0646\u0648\u060C \u06A9\u0627\u0628\u0644\u060C \u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-lg text-primary-2 ml-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-pin"
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "flex items-center justify-end mb-3",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "+\u06F9\u06F3 \u06F7\u06F8\u06F0 \u06F8\u06F7 \u06F5\u06F7 \u06F8\u06F7"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-lg text-primary-2 ml-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-phone-call"
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "flex items-center justify-end mb-3",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "info@navisa.af"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-lg text-primary-2 ml-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-envelope"
                      })
                    })]
                  })]
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 mb-12 last:mb-0 flex flex-col items-end",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-right",
            children: [/*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
              up: true,
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "text-base sm:text-lg lg:text-xl text-current mb-5",
                children: "\u06A9\u0645\u067E\u0646\u06CC"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: "text-medium text-accents_4",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Fade_default()), {
                up: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/fa/about",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "\u062F\u0631 \u0628\u0627\u0631\u0647 \u0645\u0627"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/fa/contact",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"
                    })
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 mb-12 last:mb-0 flex flex-col items-end",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-right",
            children: [/*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "text-base sm:text-lg lg:text-xl text-current mb-5 ml-0 lg:ml-6",
                children: "\u062E\u062F\u0645\u0627\u062A"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: "text-medium text-accents_4",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Fade_default()), {
                up: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "ml-0 lg:ml-6 mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/fa/translation",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "\u062E\u062F\u0645\u0627\u062A \u062A\u0631\u062C\u0645\u0647"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "ml-0 lg:ml-6 mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/fa/website-localization",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "\u0645\u062D\u0644\u06CC \u0633\u0627\u0632\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "ml-0 lg:ml-6 mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/fa/transcription",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "\u062E\u062F\u0645\u0627\u062A \u0631\u0648\u0646\u0648\u06CC\u0633\u06CC"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "ml-0 lg:ml-6 mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/fa/professional-proofreading",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "\u062A\u0635\u062D\u06CC\u062D \u0645\u0633\u0644\u06A9\u06CC"
                    })
                  })
                })]
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var fa_Footer = (Footer);
;// CONCATENATED MODULE: ./components/fa/layout/Layout.js







const Layout = ({
  children,
  title,
  canonical,
  descriptionContent,
  jsonLD,
  activePage
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "UTF-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "canonical",
        href: canonical
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: descriptionContent
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: ""
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "\u062F\u0627\u0631\u0627\u0644\u062A\u0631\u062C\u0645\u0647 \u0646\u0648\u06CC\u0633\u0627"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "https://navisa.af/dr/"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "https://navisa.af/images/navisa-logo.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "\u062F\u0627\u0631\u0627\u0644\u062A\u0631\u062C\u0645\u0647 \u0646\u0648\u06CC\u0633\u0627"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "\u062F\u0627\u0631\u0627\u0644\u062A\u0631\u062C\u0645\u0647 \u0646\u0648\u06CC\u0633\u0627 \u06CC\u06A9 \u0634\u0631\u06A9\u062A \u062E\u062F\u0645\u0627\u062A\u06CC \u0648\u0627\u0642\u0639 \u062F\u0631 \u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646 \u0628\u0648\u062F\u0647 \u06A9\u0647 \u0639\u0645\u062F\u062A\u0627\u064B \u062F\u0631 \u0632\u0645\u06CC\u0646\u0647 \u062E\u062F\u0645\u0627\u062A \u062A\u0631\u062C\u0645\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A \u062F\u0627\u0631\u062F"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:secure_url",
        content: "https://navisa.af/images/navisa-logo.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "summary"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:title",
        content: "\u062F\u0627\u0631\u0627\u0644\u062A\u0631\u062C\u0645\u0647 \u0646\u0648\u06CC\u0633\u0627"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:description",
        content: "\u062F\u0627\u0631\u0627\u0644\u062A\u0631\u062C\u0645\u0647 \u0646\u0648\u06CC\u0633\u0627 \u06CC\u06A9 \u0634\u0631\u06A9\u062A \u062E\u062F\u0645\u0627\u062A\u06CC \u0648\u0627\u0642\u0639 \u062F\u0631 \u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646 \u0628\u0648\u062F\u0647 \u06A9\u0647 \u0639\u0645\u062F\u062A\u0627\u064B \u062F\u0631 \u0632\u0645\u06CC\u0646\u0647 \u062E\u062F\u0645\u0627\u062A \u062A\u0631\u062C\u0645\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A \u062F\u0627\u0631\u062F"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: "https://navisa.af/images/navisa-logo.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/images/",
        sizes: "16/16",
        type: "image.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        type: "application/ld+json",
        children: jsonLD
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(fa_Header, {
      activePage: activePage
    }), children, /*#__PURE__*/jsx_runtime_.jsx(fa_Footer, {})]
  });
};

/* harmony default export */ var layout_Layout = (Layout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;