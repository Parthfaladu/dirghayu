(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enquiry"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/EnquiryTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/EnquiryTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/custom/VueDatatable.vue */ "./resources/assets/js/components/custom/VueDatatable.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EnquiryTable',
  components: {
    VueDatatable: _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      columns: [{
        data: 'id',
        name: 'id',
        width: "40px"
      }, {
        data: 'name',
        name: 'name'
      }, {
        data: 'email',
        name: 'email'
      }, {
        data: 'phone',
        name: 'phone',
        width: "100px"
      }, {
        data: function data(_data) {
          return moment__WEBPACK_IMPORTED_MODULE_3___default()(_data.last_follow_up_date).format("DD-MM-YYYY");
        },
        name: 'last_follow_up_date'
      }, {
        data: function data(_data2) {
          return moment__WEBPACK_IMPORTED_MODULE_3___default()(_data2.next_follow_up_date).format("DD-MM-YYYY");
        },
        name: 'next_follow_up_date'
      }, {
        data: function data(_data3) {
          var actions = "";

          if (_this.$can('update__enquiry')) {
            actions += "<button class='btn btn-outline-primary-new' data-g-action='view' data-g-actiondata=" + _data3.id + "><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> ";
          }

          if (_this.$can('delete__enquiry')) {
            actions += " <button class='btn btn-outline-danger-new' data-g-action='delete' data-g-actiondata=" + _data3.id + "><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
          }

          return actions;
        },
        name: 'action',
        width: "150px"
      }],
      url: '/api/v1/enquiry/list'
    };
  },
  mounted: function mounted() {
    if (this.$route.params.message) {
      this.$snotify.success(null, this.$route.params.message);
    }
  },
  methods: {
    onAction: function onAction(action) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (action.action === 'view') {
                  _this2.$router.push('/update-enquiry/' + action.data);
                }

                if (!(action.action === 'delete')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/enquiry/delete', {
                  id: action.data
                });

              case 5:
                res = _context.sent;

                _this2.$refs.vueDatatable.draw();

                _this2.$snotify.success(null, res.data.message);

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);

                _this2.$snotify.error(null, _context.t0.message);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }))();
    }
  }
});

/***/ }),

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-jquery-calendar */ "./node_modules/vue-jquery-calendar/dist/VueJqueryCalendar.esm.js");


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
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddEnquiryForm',
  components: {
    VueJqueryCalendar: vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      enquiry: {
        name: null,
        email: null,
        phone: null,
        gender: "female",
        last_follow_up_date: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD-MM-YYYY"),
        next_follow_up_date: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD-MM-YYYY"),
        remark: null
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.$route.params.id != null)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _this.getEnquiryList();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getEnquiryList: function getEnquiryList() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/enquiry/list/" + _this2.$route.params.id);

              case 3:
                res = _context2.sent;
                _this2.enquiry = res.data.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                _this2.$snotify.error(null, _context2.t0.message);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    submitForm: function submitForm() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var result, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this3.$validator.validateAll();

              case 3:
                result = _context3.sent;

                if (result) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return");

              case 6:
                res = null;

                if (!(_this3.$route.params.id != null)) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 10;
                return _this3.updateEnquiry();

              case 10:
                res = _context3.sent;

                _this3.$snotify.success(null, res.data.message);

                _context3.next = 18;
                break;

              case 14:
                _context3.next = 16;
                return _this3.createEnquiry();

              case 16:
                res = _context3.sent;

                _this3.$router.push({
                  name: "enquirylist",
                  params: {
                    message: res.data.message
                  }
                });

              case 18:
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](0);

                _this3.$snotify.error(null, _context3.t0.message);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 20]]);
      }))();
    },
    updateEnquiry: function updateEnquiry() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/enquiry/update', _this4.enquiry);

              case 2:
                res = _context4.sent;
                return _context4.abrupt("return", res);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    createEnquiry: function createEnquiry() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/enquiry/create', _this5.enquiry);

              case 2:
                res = _context5.sent;
                return _context5.abrupt("return", res);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddEnquiry.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddEnquiry.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");
/* harmony import */ var _components_forms_AddEnquiryForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/forms/AddEnquiryForm */ "./resources/assets/js/components/forms/AddEnquiryForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AddEnqiry",
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddEnquiryForm: _components_forms_AddEnquiryForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/EnquiryList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/EnquiryList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_EnquiryTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/EnquiryTable */ "./resources/assets/js/components/EnquiryTable.vue");
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EnquiryList',
  components: {
    EnquiryTable: _components_EnquiryTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/EnquiryTable.vue?vue&type=template&id=42e4e502&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/EnquiryTable.vue?vue&type=template&id=42e4e502& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "VueDatatable",
    {
      directives: [
        { name: "can", rawName: "v-can:view__enquiry", arg: "view__enquiry" }
      ],
      ref: "vueDatatable",
      attrs: { columns: _vm.columns, url: _vm.url },
      on: { gaction: _vm.onAction }
    },
    [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Email")]),
      _vm._v(" "),
      _c("th", [_vm._v("Phone")]),
      _vm._v(" "),
      _c("th", [_vm._v("Last FollowUp")]),
      _vm._v(" "),
      _c("th", [_vm._v("Next FollowUp")]),
      _vm._v(" "),
      _c(
        "th",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.$can("update__enquiry") || _vm.$can("delete__enquiry"),
              expression: "$can('update__enquiry') || $can('delete__enquiry')"
            }
          ]
        },
        [_vm._v("Action")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



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
                id: "defaultGroupExample1",
                type: "radio",
                name: "gender",
                value: "male"
              },
              domProps: {
                checked: _vm.enquiry.gender === "male",
                checked: _vm._q(_vm.enquiry.gender, "male")
              },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.enquiry, "gender", "male")
                }
              }
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
      _c(
        "div",
        { staticClass: "position-relative form-group" },
        [
          _c("label", { attrs: { for: "last_follow_up_date" } }, [
            _vm._v("Last Follow Up Date")
          ]),
          _vm._v(" "),
          _c("VueJqueryCalendar", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            attrs: {
              name: "last_follow_up_date",
              "date-format": "dd-mm-yy",
              readonly: true,
              "class-name": "form-control"
            },
            model: {
              value: _vm.enquiry.last_follow_up_date,
              callback: function($$v) {
                _vm.$set(_vm.enquiry, "last_follow_up_date", $$v)
              },
              expression: "enquiry.last_follow_up_date"
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "position-relative form-group" },
        [
          _c("label", { attrs: { for: "next_follow_up_date" } }, [
            _vm._v("Next Follow Up Date")
          ]),
          _vm._v(" "),
          _c("VueJqueryCalendar", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            attrs: {
              name: "next_follow_up_date",
              "date-format": "dd-mm-yy",
              readonly: true,
              "class-name": "form-control"
            },
            model: {
              value: _vm.enquiry.next_follow_up_date,
              callback: function($$v) {
                _vm.$set(_vm.enquiry, "next_follow_up_date", $$v)
              },
              expression: "enquiry.next_follow_up_date"
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
        ],
        1
      ),
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
        {
          staticClass: "btn btn-outline-success-new",
          attrs: { type: "submit" }
        },
        [_vm._v("\n            SUBMIT\n        ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddEnquiry.vue?vue&type=template&id=4464fc16&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddEnquiry.vue?vue&type=template&id=4464fc16& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "DashboardPage",
    {
      directives: [
        { name: "can", rawName: "v-can:add__enquiry", arg: "add__enquiry" }
      ]
    },
    [
      _c("div", { staticClass: "app-main__inner" }, [
        _c("div", { staticClass: "app-page-title" }, [
          _c("div", { staticClass: "page-title-wrapper d-flex" }, [
            _c(
              "div",
              { staticClass: "page-title-heading mr-auto align-content-start" },
              [
                _c("div", { staticClass: "page-title-icon" }, [
                  _c("i", {
                    staticClass:
                      "pe-7s-call icon-gradient bg-premium-dark text-danger"
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "heading-font-weight" }, [
                  _vm._v("ENQUIRY DETAIL")
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body col-sm-8 offset-sm-2" },
            [
              _c("h5", { staticClass: "card-title" }),
              _vm._v(" "),
              _c("AddEnquiryForm")
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/EnquiryList.vue?vue&type=template&id=59b6c5fe&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/EnquiryList.vue?vue&type=template&id=59b6c5fe& ***!
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
  return _c(
    "DashboardPage",
    {
      directives: [
        { name: "can", rawName: "v-can:view__enquiry", arg: "view__enquiry" }
      ]
    },
    [
      _c("div", { staticClass: "app-main__inner" }, [
        _c("div", { staticClass: "app-page-title" }, [
          _c("div", { staticClass: "page-title-wrapper d-flex" }, [
            _c(
              "div",
              { staticClass: "page-title-heading mr-auto align-content-start" },
              [
                _c("div", { staticClass: "page-title-icon" }, [
                  _c("i", {
                    staticClass:
                      "pe-7s-call icon-gradient bg-premium-dark text-danger"
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "heading-font-weight" }, [
                  _vm._v("ENQUIRY LIST")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "can",
                    rawName: "v-can:add__enquiry",
                    arg: "add__enquiry"
                  }
                ],
                staticClass: "align-content-end"
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-alternate-new all-add-new",
                    attrs: { to: "/add-enquiry" }
                  },
                  [_vm._v("Add Enquiry")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body col-sm-12" }, [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [_c("EnquiryTable")],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/EnquiryTable.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/EnquiryTable.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnquiryTable_vue_vue_type_template_id_42e4e502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnquiryTable.vue?vue&type=template&id=42e4e502& */ "./resources/assets/js/components/EnquiryTable.vue?vue&type=template&id=42e4e502&");
/* harmony import */ var _EnquiryTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnquiryTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/EnquiryTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EnquiryTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EnquiryTable_vue_vue_type_template_id_42e4e502___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EnquiryTable_vue_vue_type_template_id_42e4e502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/EnquiryTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/EnquiryTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/EnquiryTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnquiryTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/EnquiryTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/EnquiryTable.vue?vue&type=template&id=42e4e502&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/EnquiryTable.vue?vue&type=template&id=42e4e502& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryTable_vue_vue_type_template_id_42e4e502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnquiryTable.vue?vue&type=template&id=42e4e502& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/EnquiryTable.vue?vue&type=template&id=42e4e502&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryTable_vue_vue_type_template_id_42e4e502___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryTable_vue_vue_type_template_id_42e4e502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/assets/js/views/AddEnquiry.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/views/AddEnquiry.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddEnquiry_vue_vue_type_template_id_4464fc16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddEnquiry.vue?vue&type=template&id=4464fc16& */ "./resources/assets/js/views/AddEnquiry.vue?vue&type=template&id=4464fc16&");
/* harmony import */ var _AddEnquiry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddEnquiry.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/AddEnquiry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddEnquiry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddEnquiry_vue_vue_type_template_id_4464fc16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddEnquiry_vue_vue_type_template_id_4464fc16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/AddEnquiry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/AddEnquiry.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/views/AddEnquiry.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEnquiry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddEnquiry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/AddEnquiry.vue?vue&type=template&id=4464fc16&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/AddEnquiry.vue?vue&type=template&id=4464fc16& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiry_vue_vue_type_template_id_4464fc16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEnquiry.vue?vue&type=template&id=4464fc16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddEnquiry.vue?vue&type=template&id=4464fc16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiry_vue_vue_type_template_id_4464fc16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEnquiry_vue_vue_type_template_id_4464fc16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/EnquiryList.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/views/EnquiryList.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnquiryList_vue_vue_type_template_id_59b6c5fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnquiryList.vue?vue&type=template&id=59b6c5fe& */ "./resources/assets/js/views/EnquiryList.vue?vue&type=template&id=59b6c5fe&");
/* harmony import */ var _EnquiryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnquiryList.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/EnquiryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EnquiryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EnquiryList_vue_vue_type_template_id_59b6c5fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EnquiryList_vue_vue_type_template_id_59b6c5fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/EnquiryList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/EnquiryList.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/views/EnquiryList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnquiryList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/EnquiryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/EnquiryList.vue?vue&type=template&id=59b6c5fe&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/EnquiryList.vue?vue&type=template&id=59b6c5fe& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryList_vue_vue_type_template_id_59b6c5fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnquiryList.vue?vue&type=template&id=59b6c5fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/EnquiryList.vue?vue&type=template&id=59b6c5fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryList_vue_vue_type_template_id_59b6c5fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnquiryList_vue_vue_type_template_id_59b6c5fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);