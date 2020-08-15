(window.webpackJsonp = window.webpackJsonp || []).push([["subscription~user"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddSubscription.vue?vue&type=script&lang=js&":
/*! ****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddSubscription.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this; var args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__.default = ({
  name: 'AddProductView',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      subscription: {
        packageId: null,
        amount: null,
        startDate: null,
        duration: 0,
        endDate: null,
        trialDays: 0,
        remark: null
      },
      packages: null
    };
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /* #__PURE__ */
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var id, _res, res;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(this.$route.params.id != null)) {
                _context.next = 7;
                break;
              }

              id = this.$route.params.id;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8000/api/v1/subscription/list/' + id, {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 5:
              _res = _context.sent;
              this.subscription = _res.data.data;

            case 7:
              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8000/api/v1/package/list', {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 9:
              res = _context.sent;
              this.packages = res.data.data;
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context.catch(0);
              console.log(_context.t0); // this.$snotify.error(null, err.message);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 13]]);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    submitForm: function () {
      var _submitForm = _asyncToGenerator(
      /* #__PURE__ */
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!this.subscription) {
                  _context2.next = 13;
                  break;
                }

                res = null;

                if (!(this.$route.params.id != null)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:8000/api/v1/subscription/update', this.subscription, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 6:
                res = _context2.sent;
                _context2.next = 12;
                break;

              case 9:
                _context2.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:8000/api/v1/subscription/create', this.subscription, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 11:
                res = _context2.sent;

              case 12:
                if (res.data.status == "success") {
                  this.resetForm();
                  this.$router.push('/subscription-list'); // this.$snotify.success(null, res.data.message);
                }

              case 13:
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2.catch(0);
                console.log(_context2.t0); // this.$snotify.error(null, err.message);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 15]]);
      }));

      function submitForm() {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }(),
    resetForm: function resetForm() {
      this.subscription = null;
    },
    onChange: function onChange(event) {
      for (var i = 0; i <= this.packages.length; i++) {
        if (this.packages[i].id == event.target.value) {
          this.subscription.amount = this.packages[i].price;
          this.subscription.duration = this.packages[i].duration;
        }
      }
    },
    findEndDate: function findEndDate(event) {
      var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

      var currentDate = moment(this.subscription.startDate);
      this.subscription.endDate = moment(currentDate).add(this.subscription.duration, 'M').endOf('month').format('YYYY-MM-DD');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddSubscription.vue?vue&type=template&id=79e12d4a&":
/*! ********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddSubscription.vue?vue&type=template&id=79e12d4a& ***!
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
  return _c("DashboardPage", [
    _c("div", { staticClass: "app-main__inner" }, [
      _c("div", { staticClass: "app-page-title" }, [
        _c("div", { staticClass: "page-title-wrapper" }, [
          _c("div", { staticClass: "page-title-heading" }, [
            _c("div", { staticClass: "page-title-icon" }, [
              _c("i", {
                staticClass:
                  "pe-7s-display1 icon-gradient bg-premium-dark text-danger"
              })
            ]),
            _vm._v(" "),
            _c("div", [_vm._v("SUBSCRIPTION DETAIL")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _c("div", { staticClass: "card-body col-sm-6 offset-sm-3" }, [
          _c("h5", { staticClass: "card-title" }),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitForm()
                }
              }
            },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Subscription Detail")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "packageId" } }, [
                  _vm._v("Package")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.subscription.packageId,
                        expression: "subscription.packageId"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "packageId", id: "packageId", required: "" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.subscription,
                            "packageId",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function($event) {
                          return _vm.onChange($event)
                        }
                      ]
                    }
                  },
                  _vm._l(_vm.packages, function(packageData) {
                    return _c(
                      "option",
                      {
                        key: packageData.id,
                        domProps: {
                          value: packageData.id,
                          selected:
                            _vm.subscription.packageId === packageData.id
                        }
                      },
                      [_vm._v(_vm._s(packageData.name))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "amount" } }, [_vm._v("Amount")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.subscription.amount,
                      expression: "subscription.amount"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    name: "amount",
                    id: "amount",
                    required: "",
                    readonly: ""
                  },
                  domProps: { value: _vm.subscription.amount },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.subscription, "amount", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "startDate" } }, [
                  _vm._v("Start Date")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.subscription.startDate,
                      expression: "subscription.startDate"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "startDate",
                    id: "startDate",
                    placeholder: "yyyy-mm-dd",
                    required: ""
                  },
                  domProps: { value: _vm.subscription.startDate },
                  on: {
                    keypress: function($event) {
                      return _vm.findEndDate($event)
                    },
                    change: function($event) {
                      return _vm.findEndDate($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.subscription,
                        "startDate",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "duration" } }, [
                  _vm._v("Duration(In Month)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.subscription.duration,
                      expression: "subscription.duration"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    name: "duration",
                    id: "duration",
                    required: "",
                    readonly: ""
                  },
                  domProps: { value: _vm.subscription.duration },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.subscription,
                        "duration",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "endDate" } }, [
                  _vm._v("End Date")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.subscription.endDate,
                      expression: "subscription.endDate"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "endDate",
                    id: "endDate",
                    placeholder: "yyyy-mm-dd",
                    required: "",
                    readonly: ""
                  },
                  domProps: { value: _vm.subscription.endDate },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.subscription, "endDate", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "trialDays" } }, [
                  _vm._v("Trial Days")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.subscription.trialDays,
                      expression: "subscription.trialDays"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", name: "trialDays", id: "trialDays" },
                  domProps: { value: _vm.subscription.trialDays },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.subscription,
                        "trialDays",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "remark" } }, [_vm._v("Remark")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.subscription.remark,
                      expression: "subscription.remark"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "2", name: "remark", id: "remark" },
                  domProps: { value: _vm.subscription.remark },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.subscription, "remark", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v("SUBMIT")]
                )
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/AddSubscription.vue":
/*! *******************************************************!*\
  !*** ./resources/assets/js/views/AddSubscription.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddSubscription_vue_vue_type_template_id_79e12d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSubscription.vue?vue&type=template&id=79e12d4a& */ "./resources/assets/js/views/AddSubscription.vue?vue&type=template&id=79e12d4a&");
/* harmony import */ var _AddSubscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddSubscription.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/AddSubscription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddSubscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddSubscription_vue_vue_type_template_id_79e12d4a___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddSubscription_vue_vue_type_template_id_79e12d4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/AddSubscription.vue"
/* harmony default export */ __webpack_exports__.default = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/AddSubscription.vue?vue&type=script&lang=js&":
/*! ********************************************************************************!*\
  !*** ./resources/assets/js/views/AddSubscription.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSubscription.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddSubscription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__.default = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/js/views/AddSubscription.vue?vue&type=template&id=79e12d4a&":
/*! **************************************************************************************!*\
  !*** ./resources/assets/js/views/AddSubscription.vue?vue&type=template&id=79e12d4a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubscription_vue_vue_type_template_id_79e12d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSubscription.vue?vue&type=template&id=79e12d4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddSubscription.vue?vue&type=template&id=79e12d4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubscription_vue_vue_type_template_id_79e12d4a___WEBPACK_IMPORTED_MODULE_0__.render; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubscription_vue_vue_type_template_id_79e12d4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; });



/***/ })

}]);