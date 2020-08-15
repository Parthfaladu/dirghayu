(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enquiry~invoice"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AddEnquiryForm',
  data: function data() {
    return {
      enquiry: {
        name: null,
        email: null,
        phone: null,
        gender: "female",
        last_follow_up_date: null,
        next_follow_up_date: null,
        remark: null
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var id, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(_this.$route.params.id != null)) {
                _context.next = 7;
                break;
              }

              id = _this.$route.params.id;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/enquiry/list/" + id, {
                headers: {
                  Authorization: _this.$store.getters["auth/authHeaders"].Authorization
                }
              });

            case 5:
              res = _context.sent;
              _this.enquiry = res.data.data;

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              _this.$snotify.error(null, _context.t0.message);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  methods: {
    submitForm: function submitForm() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.$validator.validateAll();

              case 3:
                result = _context2.sent;

                if (result) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return");

              case 6:
                if (!_this2.enquiry) {
                  _context2.next = 18;
                  break;
                }

                res = null;

                if (!(_this2.$route.params.id != null)) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/v1/enquiry/update", _this2.enquiry, {
                  headers: {
                    Authorization: _this2.$store.getters["auth/authHeaders"].Authorization
                  }
                });

              case 11:
                res = _context2.sent;
                _context2.next = 17;
                break;

              case 14:
                _context2.next = 16;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/v1/enquiry/create", _this2.enquiry);

              case 16:
                res = _context2.sent;

              case 17:
                if (res.data.status == "success") {
                  _this2.resetForm();

                  _this2.$router.push("/enquiry-list");

                  _this2.$snotify.success(null, res.data.message);
                }

              case 18:
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](0);

                _this2.$snotify.error(null, _context2.t0.message);

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 20]]);
      }))();
    },
    resetForm: function resetForm() {
      this.enquiry = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=template&id=7e2ebe5d&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=template&id=7e2ebe5d& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.enquiry.name,
              expression: "enquiry.name"
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "name", type: "text", name: "name" },
          domProps: { value: _vm.enquiry.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.enquiry, "name", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.errors.has("name"),
                expression: "errors.has('name')"
              }
            ],
            staticClass: "text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("name")))]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.enquiry.email,
              expression: "enquiry.email"
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required|email",
              expression: "'required|email'"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "email", type: "email", name: "email" },
          domProps: { value: _vm.enquiry.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.enquiry, "email", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.errors.has("email"),
                expression: "errors.has('email')"
              }
            ],
            staticClass: "text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("email")))]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "phone" } }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.enquiry.phone,
              expression: "enquiry.phone"
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "phone", type: "text", name: "phone" },
          domProps: { value: _vm.enquiry.phone },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.enquiry, "phone", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.errors.has("phone"),
                expression: "errors.has('phone')"
              }
            ],
            staticClass: "text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("phone")))]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "gender" } }, [_vm._v("Gender")]),
        _vm._v(" "),
        _c("div", { staticClass: "ml-1 row" }, [
          _c("div", { staticClass: "custom-control custom-radio" }, [
            _c("input", {
              staticClass: "custom-control-input",
              attrs: {
                id: "defaultGroupExample1",
                type: "radio",
                name: "gender",
                value: "male"
              },
              domProps: { checked: _vm.enquiry.gender === "male" }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "custom-control-label",
                attrs: { for: "defaultGroupExample1" }
              },
              [_vm._v("Male  ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "custom-control custom-radio" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.enquiry.gender,
                  expression: "enquiry.gender"
                }
              ],
              staticClass: "custom-control-input",
              attrs: {
                id: "defaultGroupExample2",
                type: "radio",
                name: "gender",
                value: "female"
              },
              domProps: {
                checked: _vm.enquiry.gender === "female",
                checked: _vm._q(_vm.enquiry.gender, "female")
              },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.enquiry, "gender", "female")
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "custom-control-label",
                attrs: { for: "defaultGroupExample2" }
              },
              [_vm._v(" Female")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "last_follow_up_date" } }, [
          _vm._v("Last Follow Up Date")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.enquiry.last_follow_up_date,
              expression: "enquiry.last_follow_up_date"
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            }
          ],
          staticClass: "form-control",
          attrs: {
            id: "last_follow_up_date",
            type: "text",
            name: "last_follow_up_date",
            placeholder: "yyyy-mm-dd"
          },
          domProps: { value: _vm.enquiry.last_follow_up_date },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.enquiry, "last_follow_up_date", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.errors.has("last_follow_up_date"),
                expression: "errors.has('last_follow_up_date')"
              }
            ],
            staticClass: "text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("last_follow_up_date")))]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "next_follow_up_date" } }, [
          _vm._v("Next Follow Up Date")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.enquiry.next_follow_up_date,
              expression: "enquiry.next_follow_up_date"
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            }
          ],
          staticClass: "form-control",
          attrs: {
            id: "next_follow_up_date",
            type: "text",
            name: "next_follow_up_date",
            placeholder: "yyyy-mm-dd"
          },
          domProps: { value: _vm.enquiry.next_follow_up_date },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.enquiry, "next_follow_up_date", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.errors.has("next_follow_up_date"),
                expression: "errors.has('next_follow_up_date')"
              }
            ],
            staticClass: "text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("next_follow_up_date")))]
        )
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
              value: _vm.enquiry.remark,
              expression: "enquiry.remark"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "remark", rows: "2", name: "remark" },
          domProps: { value: _vm.enquiry.remark },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.enquiry, "remark", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-info", attrs: { type: "submit" } },
        [_vm._v("\n            SUBMIT\n        ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/forms/AddEnquiryForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddEnquiryForm.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddEnquiryForm_vue_vue_type_template_id_7e2ebe5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddEnquiryForm.vue?vue&type=template&id=7e2ebe5d& */ "./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=template&id=7e2ebe5d&");
/* harmony import */ var _AddEnquiryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddEnquiryForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddEnquiryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddEnquiryForm_vue_vue_type_template_id_7e2ebe5d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddEnquiryForm_vue_vue_type_template_id_7e2ebe5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/forms/AddEnquiryForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEnquiryForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=template&id=7e2ebe5d&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=template&id=7e2ebe5d& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiryForm_vue_vue_type_template_id_7e2ebe5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEnquiryForm.vue?vue&type=template&id=7e2ebe5d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddEnquiryForm.vue?vue&type=template&id=7e2ebe5d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiryForm_vue_vue_type_template_id_7e2ebe5d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiryForm_vue_vue_type_template_id_7e2ebe5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);