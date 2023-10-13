exports.id = 805;
exports.ids = [805];
exports.modules = {

/***/ 6631:
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
;// CONCATENATED MODULE: ./components/MobileHeader.js





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
          className: "flex items-center justify-start",
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
            className: showMenu ? 'fixed top-0 left-0/4 bg-white w-80 md:w-96 h-screen z-50 transition-all duration-75' : 'fixed top-0 -left-full transition-all duration-75',
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w-full flex flex-col",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between px-8 py-6 border-b border-accents_4",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Menu"
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
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
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
                className: "flex items-center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "flex flex-col w-full",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "py-4 w-full border-b border-accents_4 px-5",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: activePage === 'home' ? 'text-primary' : 'hover:text-primary',
                        children: "Home"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "py-4 w-full border-b border-accents_4 px-5",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/about",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: activePage === 'about' ? 'text-primary' : 'hover:text-primary',
                        children: "About"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "py-4 w-full border-b border-accents_4 pl-5",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "#",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        className: "relative",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "flex items-center justify-between pr-5",
                          onClick: () => setShowSubMenu(!showSubMenu),
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            children: "Services"
                          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
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
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                          className: showSubMenu ? 'block mt-2' : 'hidden',
                          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                            className: "px-5 py-4 flex border-b border-accents_4 last:border-b-0",
                            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                              href: "/translation",
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                className: activePage === 'translation' ? 'text-primary' : 'hover:text-primary w-full',
                                children: "Translation Services"
                              })
                            })
                          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                            className: "px-5 py-4 flex border-b border-accents_4 last:border-b-0",
                            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                              href: "/website-localization",
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                className: activePage === 'website-localization' ? 'text-primary' : 'hover:text-primary w-full',
                                children: "Website Localization"
                              })
                            })
                          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                            className: "px-5 py-4 flex border-b border-accents_4 last:border-b-0",
                            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                              href: "/transcription",
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                className: activePage === 'transcription' ? 'text-primary' : 'hover:text-primary w-full',
                                children: "Transcription Services"
                              })
                            })
                          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                            className: "px-5 py-4 flex border-b border-accents_4 last:border-b-0",
                            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                              href: "/professional-proofreading",
                              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                className: activePage === 'professional-proofreading' ? 'text-primary' : 'hover:text-primary w-full',
                                children: "Professional Proofreading"
                              })
                            })
                          })]
                        })]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "py-4 w-full border-b border-accents_4 px-5",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/contact",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: activePage === 'contact' ? 'text-primary' : 'hover:text-primary',
                        children: "Contact Us"
                      })
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-full flex items-center mt-8 ml-5",
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
                    className: "border border-accents_6 text-gray-600 h-10 pl-3 md:pl-5 pr-7 xs:pr-6 md:pr-10 mb-0 bg-white hover:border-gray-400 focus:outline-none appearance-none",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "english",
                      children: "English"
                    }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: "dari",
                      children: "\u062F\u0631\u06CC"
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "flex items-center mt-8 ml-5",
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

/* harmony default export */ var components_MobileHeader = (MobileHeader);
// EXTERNAL MODULE: ./contexts/languageContext.js
var languageContext = __webpack_require__(4192);
;// CONCATENATED MODULE: ./components/Header.js







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
      children: /*#__PURE__*/jsx_runtime_.jsx(components_MobileHeader, {
        activePage: activePage,
        language: language,
        handleChange: handleLanguageChange
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hidden lg:block",
      children: /*#__PURE__*/jsx_runtime_.jsx("header", {
        className: "w-full",
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
                    href: "/",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "w-36",
                        src: "/images/navisa-logo.png",
                        alt: "Navisa Translation Services"
                      })
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
                  className: "flex items-center",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "flex",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: activePage === 'home' ? 'text-primary' : 'hover:text-primary',
                          children: "Home"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/about",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: activePage === 'about' ? 'text-primary' : 'hover:text-primary',
                          children: "About"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4 group",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "#",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          className: "relative",
                          children: ["Services", /*#__PURE__*/jsx_runtime_.jsx("svg", {
                            className: "w-2.5 h-2.5 ml-2 inline pointer-events-none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 412 232",
                            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                              d: "M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",
                              fill: "#648299",
                              fillRule: "nonzero"
                            })
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                            className: "hidden opacity-0 absolute left-0 top-0 z-50 mt-8 py-5 w-64 max bg-white shadow-lg border border-accents_2 group-hover:block group-hover:opacity-100",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                              className: "px-7 py-1.5 flex",
                              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                                href: "/translation",
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  className: activePage === 'translation' ? 'text-primary' : 'hover:text-primary w-full',
                                  children: "Translation Services"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              className: "px-7 py-1.5 flex",
                              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                                href: "/website-localization",
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  className: activePage === 'website-localization' ? 'text-primary' : 'hover:text-primary w-full',
                                  children: "Website Localization"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              className: "px-7 py-1.5 flex",
                              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                                href: "/transcription",
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  className: activePage === 'transcription' ? 'text-primary' : 'hover:text-primary w-full',
                                  children: "Transcription Services"
                                })
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                              className: "px-7 py-1.5 flex",
                              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                                href: "/professional-proofreading",
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  className: activePage === 'professional-proofreading' ? 'text-primary' : 'hover:text-primary w-full',
                                  children: "Professional Proofreading"
                                })
                              })
                            })]
                          })]
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/resources",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: activePage === 'resources' ? 'text-primary' : 'hover:text-primary',
                          children: "Resources"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "mr-8 last:mr-0 py-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/contact",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: activePage === 'contact' ? 'text-primary' : 'hover:text-primary',
                          children: "Contact Us"
                        })
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-3",
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
                        value: "english",
                        children: "English"
                      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: "dari",
                        children: "\u062F\u0631\u06CC"
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

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(7206);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
;// CONCATENATED MODULE: ./components/Footer.js





const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "bg-secondary text-white py-16",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 lg:flex lg:justify-center mb-12 last:mb-0",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
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
          className: "col-lg-3 col-md-6 lg:flex lg:justify-center mb-12 last:mb-0",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-base sm:text-lg lg:text-xl text-current mb-5 ml-0 lg:ml-6",
              children: "Services"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "text-medium text-accents_4",
              children: [/*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
                up: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "ml-0 lg:ml-6 mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/translation",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Translation Services"
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
                up: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "ml-0 lg:ml-6 mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/website-localization",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Website Localization"
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
                up: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "ml-0 lg:ml-6 mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/transcription",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Transcription Services"
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
                up: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "ml-0 lg:ml-6 mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/professional-proofreading",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Professional Proofreading"
                    })
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 lg:flex lg:justify-center mb-12 last:mb-0",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-base sm:text-lg lg:text-xl text-current mb-5",
              children: "Company"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "text-medium text-accents_4",
              children: [/*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
                up: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/about",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "About Us"
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
                up: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/contact",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Contact Us"
                    })
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 lg:flex lg:justify-center mb-12 last:mb-0",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-base sm:text-lg lg:text-xl text-current mb-5",
              children: "Get in Touch"
            }), /*#__PURE__*/jsx_runtime_.jsx("address", {
              className: "not-italic",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "text-medium text-accents_4",
                children: [/*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
                  up: true,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "flex items-start mb-3",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-lg text-primary-2 mr-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-pin mt-1.5"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "Ansori Street, Shahri Now, Kabul, Afghanistan"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
                  up: true,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "flex items-start mb-3",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-lg text-primary-2 mr-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-phone-call"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "+93 781 938 546"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
                  up: true,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "flex items-start mb-3",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-lg text-primary-2 mr-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-envelope"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "info@navisa.af"
                    })]
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

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/layout/Layout.js







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
        content: "Navisa Translation Services"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "https://navisa.af/"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "https://navisa.af/images/navisa-logo.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "Navisa Translation Services"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "Navisa Translation Services (Navisa) is a local company in Afghanistan that mainly operates in the area of translation services."
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:secure_url",
        content: "https://navisa.af/images/navisa-logo.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "summary"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:title",
        content: "Navisa Translation Services"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:description",
        content: "Navisa Translation Services (Navisa) is a local company in Afghanistan that mainly operates in the area of translation services."
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: "https://navisa.af/images/navisa-logo.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(jsonLD)
        }
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {
      activePage: activePage
    }), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
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