(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch~customer~dashboard~enquiry~expense~invoice~notice~package~payment~product~staff~subscription~user"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Footer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Footer'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Header.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Header.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Header',
  methods: {
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.commit('auth/logout');

              case 2:
                _this.$router.push({
                  name: 'login'
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Sidebar'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/layouts/DashboardPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/layouts/DashboardPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Footer.vue */ "./resources/assets/js/components/Footer.vue");
/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Header.vue */ "./resources/assets/js/components/Header.vue");
/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Sidebar.vue */ "./resources/assets/js/components/Sidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DashboardPage',
  components: {
    Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Header: _components_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Sidebar: _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Footer.vue?vue&type=template&id=083ff5dc&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Footer.vue?vue&type=template&id=083ff5dc& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-wrapper-footer" }, [
    _c("div", { staticClass: "app-footer" }, [
      _c("div", { staticClass: "app-footer__inner" }, [
        _c("div", { staticClass: "app-footer-left" }, [
          _c(
            "strong",
            [
              _vm._v("Copyright © 2020 "),
              _c("router-link", { attrs: { to: "#" } }, [
                _vm._v(" Gym System")
              ]),
              _vm._v(". ")
            ],
            1
          ),
          _vm._v("\n\t\t      All rights reserved.\n                ")
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-footer-right" }, [
      _c("p", [_vm._v("Gym System")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Header.vue?vue&type=template&id=1d126904&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Header.vue?vue&type=template&id=1d126904& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-header header-shadow" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "app-header__content" }, [
      _c("div", { staticClass: "app-header-left" }),
      _vm._v(" "),
      _c("div", { staticClass: "app-header-right" }, [
        _c("div", { staticClass: "header-btn-lg pr-0" }, [
          _c("div", { staticClass: "widget-content p-0" }, [
            _c("div", { staticClass: "widget-content-wrapper" }, [
              _c(
                "div",
                { staticClass: "widget-content-right header-user-info ml-3" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary",
                      on: {
                        click: function($event) {
                          return _vm.logout()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-sign-out-alt" }),
                      _vm._v(" Log Out")
                    ]
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-header__logo" }, [
      _c("div", { staticClass: "logo-src" }),
      _vm._v(" "),
      _c("div", { staticClass: "header__pane ml-auto" }, [
        _c("div", [
          _c(
            "button",
            {
              staticClass: "hamburger close-sidebar-btn hamburger--elastic",
              attrs: { type: "button", "data-class": "closed-sidebar" }
            },
            [
              _c("span", { staticClass: "hamburger-box" }, [
                _c("span", { staticClass: "hamburger-inner" })
              ])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-header__mobile-menu" }, [
      _c("div", [
        _c(
          "button",
          {
            staticClass: "hamburger hamburger--elastic mobile-toggle-nav",
            attrs: { type: "button" }
          },
          [
            _c("span", { staticClass: "hamburger-box" }, [
              _c("span", { staticClass: "hamburger-inner" })
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-header__menu" }, [
      _c("span", [
        _c(
          "button",
          {
            staticClass:
              "btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav",
            attrs: { type: "button" }
          },
          [
            _c("span", { staticClass: "btn-icon-wrapper" }, [
              _c("i", { staticClass: "fa fa-ellipsis-v fa-w-6" })
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Sidebar.vue?vue&type=template&id=28cb1975&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Sidebar.vue?vue&type=template&id=28cb1975& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-sidebar sidebar-shadow" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "scrollbar-sidebar" }, [
      _c("div", { staticClass: "app-sidebar__inner" }, [
        _c("ul", { staticClass: "vertical-nav-menu mt-4" }, [
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/dashboard" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-home" }),
                _vm._v(
                  "\n                            Dashboard\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/attendance" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-news-paper" }),
                _vm._v(
                  "\n                            Attendance\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/package-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-gift" }),
                _vm._v(
                  "\n                            Package\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/product-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-diskette" }),
                _vm._v(
                  "\n                            Product\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/productsell-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-shopbag" }),
                _vm._v(
                  "\n                            Product Sell\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/staff-member-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-user" }),
                _vm._v(
                  "\n                            Staff Member\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/payment-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-cash" }),
                _vm._v(
                  "\n                            Payment\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/enquiry-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-call" }),
                _vm._v(
                  "\n                            Enquiry\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/customer-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-add-user" }),
                _vm._v(
                  "\n                            Customer\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/subscription-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-bell" }),
                _vm._v(
                  "\n                            Subscription\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/notice-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-note" }),
                _vm._v(
                  "\n                            Notice\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/expense-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-diamond" }),
                _vm._v(
                  "\n                            Expense\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/invoice-list" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-news-paper" }),
                _vm._v(
                  "\n                            Invoice\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/attendance-report" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-news-paper" }),
                _vm._v(
                  "\n                            Attendance Report\n                        "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/subscription-report" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-news-paper" }),
                _vm._v(
                  "\n                            Subscription Report\n                        "
                )
              ])
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-header__logo" }, [
      _c("div", { staticClass: "logo-src" }),
      _vm._v(" "),
      _c("div", { staticClass: "header__pane ml-auto" }, [
        _c("div", [
          _c(
            "button",
            {
              staticClass: "hamburger close-sidebar-btn hamburger--elastic",
              attrs: { type: "button", "data-class": "closed-sidebar" }
            },
            [
              _c("span", { staticClass: "hamburger-box" }, [
                _c("span", { staticClass: "hamburger-inner" })
              ])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-header__mobile-menu" }, [
      _c("div", [
        _c(
          "button",
          {
            staticClass: "hamburger hamburger--elastic mobile-toggle-nav",
            attrs: { type: "button" }
          },
          [
            _c("span", { staticClass: "hamburger-box" }, [
              _c("span", { staticClass: "hamburger-inner" })
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-header__menu" }, [
      _c("span", [
        _c(
          "button",
          {
            staticClass:
              "btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav",
            attrs: { type: "button" }
          },
          [
            _c("span", { staticClass: "btn-icon-wrapper" }, [
              _c("i", { staticClass: "fa fa-ellipsis-v fa-w-6" })
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/layouts/DashboardPage.vue?vue&type=template&id=1ebeccdb&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/layouts/DashboardPage.vue?vue&type=template&id=1ebeccdb& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
    },
    [
      _c("Header"),
      _vm._v(" "),
      _c("vue-snotify"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-main" },
        [
          _c("Sidebar"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "app-main__outer" },
            [_vm._t("default"), _vm._v(" "), _c("Footer")],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui-theme-settings" }, [
      _c("div", { staticClass: "theme-settings__inner" }, [
        _c("div", { staticClass: "scrollbar-container" }, [
          _c("div", { staticClass: "theme-settings__options-wrapper" }, [
            _c("h3", { staticClass: "themeoptions-heading" }, [
              _vm._v("Layout Options\n                        ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-3" }, [
              _c("ul", { staticClass: "list-group" }, [
                _c("li", { staticClass: "list-group-item" }, [
                  _c("div", { staticClass: "widget-content p-0" }, [
                    _c("div", { staticClass: "widget-content-wrapper" }, [
                      _c("div", { staticClass: "widget-content-left mr-3" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "switch has-switch switch-container-class",
                            attrs: { "data-class": "fixed-header" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "switch-animate switch-on" },
                              [
                                _c("input", {
                                  attrs: {
                                    type: "checkbox",
                                    checked: "",
                                    "data-toggle": "toggle",
                                    "data-onstyle": "success"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-content-left" }, [
                        _c("div", { staticClass: "widget-heading" }, [
                          _vm._v(
                            "Fixed Header\n                                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "widget-subheading" }, [
                          _vm._v(
                            "Makes the header top fixed, always visible!\n                                                "
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list-group-item" }, [
                  _c("div", { staticClass: "widget-content p-0" }, [
                    _c("div", { staticClass: "widget-content-wrapper" }, [
                      _c("div", { staticClass: "widget-content-left mr-3" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "switch has-switch switch-container-class",
                            attrs: { "data-class": "fixed-sidebar" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "switch-animate switch-on" },
                              [
                                _c("input", {
                                  attrs: {
                                    type: "checkbox",
                                    checked: "",
                                    "data-toggle": "toggle",
                                    "data-onstyle": "success"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-content-left" }, [
                        _c("div", { staticClass: "widget-heading" }, [
                          _vm._v(
                            "Fixed Sidebar\n                                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "widget-subheading" }, [
                          _vm._v(
                            "Makes the sidebar left fixed, always visible!\n                                                "
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list-group-item" }, [
                  _c("div", { staticClass: "widget-content p-0" }, [
                    _c("div", { staticClass: "widget-content-wrapper" }, [
                      _c("div", { staticClass: "widget-content-left mr-3" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "switch has-switch switch-container-class",
                            attrs: { "data-class": "fixed-footer" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "switch-animate switch-off" },
                              [
                                _c("input", {
                                  attrs: {
                                    type: "checkbox",
                                    "data-toggle": "toggle",
                                    "data-onstyle": "success"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-content-left" }, [
                        _c("div", { staticClass: "widget-heading" }, [
                          _vm._v(
                            "Fixed Footer\n                                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "widget-subheading" }, [
                          _vm._v(
                            "Makes the app footer bottom fixed, always visible!\n                                                "
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "themeoptions-heading" }, [
              _c("div", [
                _vm._v(
                  "\n                                Header Options\n                            "
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class",
                  attrs: { type: "button", "data-class": "" }
                },
                [
                  _vm._v(
                    "\n                                Restore Default\n                            "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-3" }, [
              _c("ul", { staticClass: "list-group" }, [
                _c("li", { staticClass: "list-group-item" }, [
                  _c("h5", { staticClass: "pb-2" }, [
                    _vm._v(
                      "Choose Color Scheme\n                                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "theme-settings-swatches" }, [
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-primary switch-header-cs-class",
                      attrs: { "data-class": "bg-primary header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-secondary switch-header-cs-class",
                      attrs: { "data-class": "bg-secondary header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-success switch-header-cs-class",
                      attrs: { "data-class": "bg-success header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-info switch-header-cs-class",
                      attrs: { "data-class": "bg-info header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-warning switch-header-cs-class",
                      attrs: { "data-class": "bg-warning header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-danger switch-header-cs-class",
                      attrs: { "data-class": "bg-danger header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-light switch-header-cs-class",
                      attrs: { "data-class": "bg-light header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-dark switch-header-cs-class",
                      attrs: { "data-class": "bg-dark header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-focus switch-header-cs-class",
                      attrs: { "data-class": "bg-focus header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-alternate switch-header-cs-class",
                      attrs: { "data-class": "bg-alternate header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "divider" }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-vicious-stance switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-vicious-stance header-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-midnight-bloom switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-midnight-bloom header-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-night-sky switch-header-cs-class",
                      attrs: { "data-class": "bg-night-sky header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-slick-carbon switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-slick-carbon header-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-asteroid switch-header-cs-class",
                      attrs: { "data-class": "bg-asteroid header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-royal switch-header-cs-class",
                      attrs: { "data-class": "bg-royal header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-warm-flame switch-header-cs-class",
                      attrs: { "data-class": "bg-warm-flame header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-night-fade switch-header-cs-class",
                      attrs: { "data-class": "bg-night-fade header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-sunny-morning switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-sunny-morning header-text-dark"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-tempting-azure switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-tempting-azure header-text-dark"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-amy-crisp switch-header-cs-class",
                      attrs: { "data-class": "bg-amy-crisp header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-heavy-rain switch-header-cs-class",
                      attrs: { "data-class": "bg-heavy-rain header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-mean-fruit switch-header-cs-class",
                      attrs: { "data-class": "bg-mean-fruit header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-malibu-beach switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-malibu-beach header-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-deep-blue switch-header-cs-class",
                      attrs: { "data-class": "bg-deep-blue header-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-ripe-malin switch-header-cs-class",
                      attrs: { "data-class": "bg-ripe-malin header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-arielle-smile switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-arielle-smile header-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-plum-plate switch-header-cs-class",
                      attrs: { "data-class": "bg-plum-plate header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-happy-fisher switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-happy-fisher header-text-dark"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-happy-itmeo switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-happy-itmeo header-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-mixed-hopes switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-mixed-hopes header-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-strong-bliss switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-strong-bliss header-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-grow-early switch-header-cs-class",
                      attrs: { "data-class": "bg-grow-early header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-love-kiss switch-header-cs-class",
                      attrs: { "data-class": "bg-love-kiss header-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-premium-dark switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-premium-dark header-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-happy-green switch-header-cs-class",
                      attrs: {
                        "data-class": "bg-happy-green header-text-light"
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "themeoptions-heading" }, [
              _c("div", [_vm._v("Sidebar Options")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class",
                  attrs: { type: "button", "data-class": "" }
                },
                [
                  _vm._v(
                    "\n                                Restore Default\n                            "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-3" }, [
              _c("ul", { staticClass: "list-group" }, [
                _c("li", { staticClass: "list-group-item" }, [
                  _c("h5", { staticClass: "pb-2" }, [
                    _vm._v(
                      "Choose Color Scheme\n                                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "theme-settings-swatches" }, [
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-primary switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-primary sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-secondary switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-secondary sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-success switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-success sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-info switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-info sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-warning switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-warning sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-danger switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-danger sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-light switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-light sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-dark switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-dark sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-focus switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-focus sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-alternate switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-alternate sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "divider" }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-vicious-stance switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-vicious-stance sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-midnight-bloom switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-midnight-bloom sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-night-sky switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-night-sky sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-slick-carbon switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-slick-carbon sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-asteroid switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-asteroid sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-royal switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-royal sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-warm-flame switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-warm-flame sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-night-fade switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-night-fade sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-sunny-morning switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-sunny-morning sidebar-text-dark"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-tempting-azure switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-tempting-azure sidebar-text-dark"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-amy-crisp switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-amy-crisp sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-heavy-rain switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-heavy-rain sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-mean-fruit switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-mean-fruit sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-malibu-beach switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-malibu-beach sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-deep-blue switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-deep-blue sidebar-text-dark" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-ripe-malin switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-ripe-malin sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-arielle-smile switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-arielle-smile sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-plum-plate switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-plum-plate sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-happy-fisher switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-happy-fisher sidebar-text-dark"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-happy-itmeo switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-happy-itmeo sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-mixed-hopes switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-mixed-hopes sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-strong-bliss switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-strong-bliss sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-grow-early switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-grow-early sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-love-kiss switch-sidebar-cs-class",
                      attrs: { "data-class": "bg-love-kiss sidebar-text-light" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-premium-dark switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-premium-dark sidebar-text-light"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "swatch-holder bg-happy-green switch-sidebar-cs-class",
                      attrs: {
                        "data-class": "bg-happy-green sidebar-text-light"
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "themeoptions-heading" }, [
              _c("div", [_vm._v("Main Content Options")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm",
                  attrs: { type: "button" }
                },
                [_vm._v("Restore Default\n                            ")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-3" }, [
              _c("ul", { staticClass: "list-group" }, [
                _c("li", { staticClass: "list-group-item" }, [
                  _c("h5", { staticClass: "pb-2" }, [
                    _vm._v(
                      "Page Section Tabs\n                                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "theme-settings-swatches" }, [
                    _c(
                      "div",
                      {
                        staticClass: "mt-2 btn-group",
                        attrs: { role: "group" }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class",
                            attrs: {
                              type: "button",
                              "data-class": "body-tabs-line"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                                Line\n                                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class",
                            attrs: {
                              type: "button",
                              "data-class": "body-tabs-shadow"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                                Shadow\n                                            "
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Footer.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/components/Footer.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_083ff5dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=083ff5dc& */ "./resources/assets/js/components/Footer.vue?vue&type=template&id=083ff5dc&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_083ff5dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_083ff5dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Footer.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Footer.vue?vue&type=template&id=083ff5dc&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/Footer.vue?vue&type=template&id=083ff5dc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_083ff5dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=083ff5dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Footer.vue?vue&type=template&id=083ff5dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_083ff5dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_083ff5dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Header.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/components/Header.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_1d126904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=1d126904& */ "./resources/assets/js/components/Header.vue?vue&type=template&id=1d126904&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_1d126904___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_1d126904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Header.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/Header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Header.vue?vue&type=template&id=1d126904&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/Header.vue?vue&type=template&id=1d126904& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1d126904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=1d126904& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Header.vue?vue&type=template&id=1d126904&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1d126904___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1d126904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Sidebar.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/components/Sidebar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_28cb1975___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=28cb1975& */ "./resources/assets/js/components/Sidebar.vue?vue&type=template&id=28cb1975&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_28cb1975___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_28cb1975___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Sidebar.vue?vue&type=template&id=28cb1975&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/Sidebar.vue?vue&type=template&id=28cb1975& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_28cb1975___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=28cb1975& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Sidebar.vue?vue&type=template&id=28cb1975&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_28cb1975___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_28cb1975___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/layouts/DashboardPage.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/layouts/DashboardPage.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardPage_vue_vue_type_template_id_1ebeccdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=template&id=1ebeccdb& */ "./resources/assets/js/layouts/DashboardPage.vue?vue&type=template&id=1ebeccdb&");
/* harmony import */ var _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=script&lang=js& */ "./resources/assets/js/layouts/DashboardPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardPage_vue_vue_type_template_id_1ebeccdb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardPage_vue_vue_type_template_id_1ebeccdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/layouts/DashboardPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/layouts/DashboardPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/layouts/DashboardPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/layouts/DashboardPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/layouts/DashboardPage.vue?vue&type=template&id=1ebeccdb&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/layouts/DashboardPage.vue?vue&type=template&id=1ebeccdb& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_1ebeccdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardPage.vue?vue&type=template&id=1ebeccdb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/layouts/DashboardPage.vue?vue&type=template&id=1ebeccdb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_1ebeccdb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_1ebeccdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);