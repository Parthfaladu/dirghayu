(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-jquery-calendar */ "./node_modules/vue-jquery-calendar/dist/VueJqueryCalendar.esm.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AddCustomerForm',
  components: {
    VueJqueryCalendar: vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      customer: {
        gender: "female",
        package_name: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        dob: null,
        height: null,
        weight: null,
        chest: null,
        waist: null,
        thigh: null,
        arms: null,
        fat: null,
        interestedArea: '',
        phone: null,
        address: null,
        city: null,
        state: null,
        zipcode: null,
        amount: null,
        startDate: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD-MM-YYYY"),
        duration: 0,
        endDate: null,
        trialDays: 0,
        remark: '',
        profileImage: ''
      },
      packages: null,
      profile_img_path: null,
      showPreview: false
    };
  },
  computed: {
    endDate: function endDate() {
      var currentDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(this.customer.startDate, 'DD-MM-YYYY');
      var endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(currentDate).add(this.customer.duration, 'M').endOf('month').format('DD-MM-YYYY');
      return endDate;
    }
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
              _context.next = 2;
              return _this.getPackageList();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getPackageList: function getPackageList() {
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/package/list');

              case 3:
                res = _context2.sent;
                _this2.packages = res.data.data;
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
        var result, customerData, res;
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
                customerData = new FormData();

                lodash__WEBPACK_IMPORTED_MODULE_3___default.a.forEach(_this3.customer, function (customerProperty, key) {
                  customerData.append(key, customerProperty);
                });

                customerData.append('endDate', _this3.endDate);
                _context3.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/customer/create', customerData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 11:
                res = _context3.sent;

                _this3.$router.push({
                  name: 'customerlist',
                  params: {
                    message: res.data.message
                  }
                });

                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);

                _this3.$snotify.error(null, _context3.t0.message);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 15]]);
      }))();
    },
    onImageUpload: function onImageUpload() {
      this.customer.profileImage = this.$refs.profilePath.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.showPreview = true;
        this.profile_img_path = reader.result;
      }.bind(this), false);

      if (this.customer.profileImage) {
        //   if ( /\.(jpe?g|png|gif)$/i.test( this.customer.profileImage.name ) ) {
        reader.readAsDataURL(this.customer.profileImage); //   }
      }
    },
    onChange: function onChange(event) {
      var _this4 = this;

      this.packages.forEach(function (packageDetail) {
        if (packageDetail.name === event.target.value) {
          _this4.customer.amount = packageDetail.price;
          _this4.customer.duration = packageDetail.duration;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddCustomer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddCustomer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");
/* harmony import */ var _components_forms_AddCustomerForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/forms/AddCustomerForm */ "./resources/assets/js/components/forms/AddCustomerForm.vue");
//
//
//
//
//
//
//
//
//
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
  name: 'AddCustomer',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddCustomerForm: _components_forms_AddCustomerForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ForgotPassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ForgotPassword',
  components: {},
  data: function data() {
    return {
      form: {
        email: null
      },
      settings: null,
      isError: false,
      isSuccess: false,
      isFormSubmit: false
    };
  },
  mounted: function mounted() {
    this.getSettings();
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$validator.validateAll();

              case 3:
                result = _context.sent;

                if (result) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                _this.isFormSubmit = true;
                _context.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/forgot/password', _this.form);

              case 9:
                _this.isSuccess = true;

                _this.$validator.reset();

                _this.form.email = null;
                _this.isFormSubmit = false;
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                _this.isFormSubmit = false;
                _this.isError = true;

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }))();
    },
    getSettings: function getSettings() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var settingsRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/settings');

              case 3:
                settingsRes = _context2.sent;
                _this2.settings = settingsRes.data.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    resetForm: function resetForm() {
      this.form.email = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.sign-in-text[data-v-75fd2871]{\n\tcolor: rgb(63, 106, 216);\n\tfont-size: 1.3rem;\n}\n.login-background[data-v-75fd2871]{\n\tbackground-image: url(/images/login-bg.jpg);\n\tbackground-repeat:no-repeat;\n\tbackground-size: cover;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=template&id=4492d3fc&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=template&id=4492d3fc& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      attrs: { type: "multipart/form-data" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submitForm()
        }
      }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Personal Detail")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "firstName" } }, [
                  _vm._v("First Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.firstName,
                      expression: "customer.firstName"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "firstName", type: "text", name: "firstName" },
                  domProps: { value: _vm.customer.firstName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "firstName", $event.target.value)
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
                        value: _vm.errors.has("firstName"),
                        expression: "errors.has('firstName')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("firstName")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "lastName" } }, [
                  _vm._v("Last Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.lastName,
                      expression: "customer.lastName"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "lastName", type: "text", name: "lastName" },
                  domProps: { value: _vm.customer.lastName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "lastName", $event.target.value)
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
                        value: _vm.errors.has("lastName"),
                        expression: "errors.has('lastName')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("lastName")))]
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
                      value: _vm.customer.email,
                      expression: "customer.email"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|email",
                      expression: "'required|email'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "name", type: "email", name: "email" },
                  domProps: { value: _vm.customer.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "email", $event.target.value)
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
                _c("label", { attrs: { for: "password" } }, [
                  _vm._v("Password")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.password,
                      expression: "customer.password"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min:6",
                      expression: "'required|min:6'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "password", type: "password", name: "password" },
                  domProps: { value: _vm.customer.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "password", $event.target.value)
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
                        value: _vm.errors.has("password"),
                        expression: "errors.has('password')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("password")))]
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
                          value: _vm.customer.gender,
                          expression: "customer.gender"
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
                        checked: _vm.customer.gender === "male",
                        checked: _vm._q(_vm.customer.gender, "male")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.customer, "gender", "male")
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
                          value: _vm.customer.gender,
                          expression: "customer.gender"
                        }
                      ],
                      staticClass: "custom-control-input",
                      attrs: {
                        id: "defaultGroupExample2",
                        type: "radio",
                        name: "gender",
                        value: "female",
                        checked: ""
                      },
                      domProps: {
                        checked: _vm.customer.gender === "female",
                        checked: _vm._q(_vm.customer.gender, "female")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.customer, "gender", "female")
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
                  _c("label", { attrs: { for: "dob" } }, [
                    _vm._v("Date Of Birth")
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
                      name: "dob",
                      "date-format": "dd-mm-yy",
                      readonly: true,
                      "change-month": true,
                      "change-year": true,
                      "class-name": "form-control"
                    },
                    model: {
                      value: _vm.customer.dob,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "dob", $$v)
                      },
                      expression: "customer.dob"
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
                          value: _vm.errors.has("dob"),
                          expression: "errors.has('dob')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("dob")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "profile_img_path" } }, [
                  _vm._v("Profile Photo")
                ]),
                _c("br"),
                _vm._v(" "),
                _c("img", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showPreview,
                      expression: "showPreview"
                    }
                  ],
                  staticStyle: { border: "1px solid #cac2c2" },
                  attrs: { src: _vm.profile_img_path, width: "25%" }
                }),
                _vm._v(" "),
                _c("input", {
                  ref: "profilePath",
                  staticClass: "form-control",
                  staticStyle: { display: "none" },
                  attrs: {
                    id: "profilePath",
                    type: "file",
                    accept: "image/*",
                    name: "profilePath"
                  },
                  on: {
                    change: function($event) {
                      return _vm.onImageUpload()
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label"),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-alternate-new",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.$refs.profilePath.click()
                      }
                    }
                  },
                  [_vm._v("Upload Image")]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("physical detail")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "height" } }, [
                  _vm._v("Height (centimeters)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.height,
                      expression: "customer.height"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "height", type: "number", name: "height" },
                  domProps: { value: _vm.customer.height },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "height", $event.target.value)
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
                        value: _vm.errors.has("height"),
                        expression: "errors.has('height')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("height")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "weight" } }, [
                  _vm._v("Weight (kg)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.weight,
                      expression: "customer.weight"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "weight", type: "number", name: "weight" },
                  domProps: { value: _vm.customer.weight },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "weight", $event.target.value)
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
                        value: _vm.errors.has("weight"),
                        expression: "errors.has('weight')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("weight")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "chest" } }, [
                  _vm._v("Chest (centimeters)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.chest,
                      expression: "customer.chest"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "chest", type: "number", name: "chest" },
                  domProps: { value: _vm.customer.chest },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "chest", $event.target.value)
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
                        value: _vm.errors.has("chest"),
                        expression: "errors.has('chest')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("chest")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "waist" } }, [
                  _vm._v("Waist (centimeters)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.waist,
                      expression: "customer.waist"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "waist", type: "number", name: "waist" },
                  domProps: { value: _vm.customer.waist },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "waist", $event.target.value)
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
                        value: _vm.errors.has("waist"),
                        expression: "errors.has('waist')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("waist")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "thigh" } }, [
                  _vm._v("Thigh (centimeters)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.thigh,
                      expression: "customer.thigh"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "thigh", type: "number", name: "thigh" },
                  domProps: { value: _vm.customer.thigh },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "thigh", $event.target.value)
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
                        value: _vm.errors.has("thigh"),
                        expression: "errors.has('thigh')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("thigh")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "arms" } }, [
                  _vm._v("Arms (centimeters)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.arms,
                      expression: "customer.arms"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "arms", type: "number", name: "arms" },
                  domProps: { value: _vm.customer.arms },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "arms", $event.target.value)
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
                        value: _vm.errors.has("arms"),
                        expression: "errors.has('arms')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("arms")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "fat" } }, [
                  _vm._v("Fat (body fat percentage)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.fat,
                      expression: "customer.fat"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "fat", type: "number", name: "fat" },
                  domProps: { value: _vm.customer.fat },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "fat", $event.target.value)
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
                        value: _vm.errors.has("fat"),
                        expression: "errors.has('fat')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("fat")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "interestedArea" } }, [
                  _vm._v("Interested Area")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.interestedArea,
                      expression: "customer.interestedArea"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "interestedArea",
                    rows: "2",
                    name: "interestedArea"
                  },
                  domProps: { value: _vm.customer.interestedArea },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.customer,
                        "interestedArea",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Contact Detail")
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
                      value: _vm.customer.phone,
                      expression: "customer.phone"
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
                  domProps: { value: _vm.customer.phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "phone", $event.target.value)
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
                _c("label", { attrs: { for: "address" } }, [_vm._v("Address")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.address,
                      expression: "customer.address"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "address", rows: "2", name: "address" },
                  domProps: { value: _vm.customer.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "address", $event.target.value)
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
                        value: _vm.errors.has("address"),
                        expression: "errors.has('address')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("address")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "city" } }, [_vm._v("City")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.city,
                      expression: "customer.city"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "city", type: "text", name: "city" },
                  domProps: { value: _vm.customer.city },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "city", $event.target.value)
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
                        value: _vm.errors.has("city"),
                        expression: "errors.has('city')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("city")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "state" } }, [_vm._v("State")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.state,
                      expression: "customer.state"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "state", type: "text", name: "state" },
                  domProps: { value: _vm.customer.state },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "state", $event.target.value)
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
                        value: _vm.errors.has("state"),
                        expression: "errors.has('state')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("state")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "zipcode" } }, [_vm._v("Zipcode")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customer.zipcode,
                      expression: "customer.zipcode"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "zipcode", type: "text", name: "zipcode" },
                  domProps: { value: _vm.customer.zipcode },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "zipcode", $event.target.value)
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
                        value: _vm.errors.has("zipcode"),
                        expression: "errors.has('zipcode')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("zipcode")))]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Subscription Detail")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "package_name" } }, [
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
                        value: _vm.customer.package_name,
                        expression: "customer.package_name"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "package_name", name: "package_name" },
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
                            _vm.customer,
                            "package_name",
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
                  [
                    _c(
                      "option",
                      { attrs: { disabled: "" }, domProps: { value: null } },
                      [_vm._v("Select package")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.packages, function(packageData) {
                      return _c(
                        "option",
                        {
                          key: packageData.name,
                          domProps: {
                            value: packageData.name,
                            selected:
                              _vm.customer.package_name === packageData.name
                          }
                        },
                        [_vm._v(_vm._s(packageData.name))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("package_name"),
                        expression: "errors.has('package_name')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v("The package field is required.")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "amount" } }, [_vm._v("Amount")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: { padding: "0px" }
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer.amount,
                          expression: "customer.amount"
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
                        id: "amount",
                        type: "number",
                        name: "amount",
                        required: "",
                        readonly: ""
                      },
                      domProps: { value: _vm.customer.amount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "amount", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      _c(
                        "span",
                        {
                          staticClass: "input-group-text",
                          attrs: { id: "basic-addon2" }
                        },
                        [_vm._v(_vm._s(_vm.$store.getters["init/currency"]))]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("amount"),
                        expression: "errors.has('amount')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("amount")))]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "position-relative form-group" },
                [
                  _c("label", { attrs: { for: "startDate" } }, [
                    _vm._v("Start Date")
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
                      name: "startDate",
                      "date-format": "dd-mm-yy",
                      readonly: true,
                      "class-name": "form-control"
                    },
                    model: {
                      value: _vm.customer.startDate,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "startDate", $$v)
                      },
                      expression: "customer.startDate"
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
                          value: _vm.errors.has("startDate"),
                          expression: "errors.has('startDate')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("startDate")))]
                  )
                ],
                1
              ),
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
                      value: _vm.customer.duration,
                      expression: "customer.duration"
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
                    id: "duration",
                    type: "number",
                    name: "duration",
                    required: "",
                    readonly: ""
                  },
                  domProps: { value: _vm.customer.duration },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "duration", $event.target.value)
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
                        value: _vm.errors.has("duration"),
                        expression: "errors.has('duration')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("duration")))]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "position-relative form-group" },
                [
                  _c("label", { attrs: { for: "endDate" } }, [
                    _vm._v("End Date")
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
                      name: "endDate",
                      "date-format": "dd-mm-yy",
                      readonly: true,
                      "class-name": "form-control"
                    },
                    model: {
                      value: _vm.endDate,
                      callback: function($$v) {
                        _vm.endDate = $$v
                      },
                      expression: "endDate"
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
                          value: _vm.errors.has("endDate"),
                          expression: "errors.has('endDate')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("endDate")))]
                  )
                ],
                1
              ),
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
                      value: _vm.customer.trialDays,
                      expression: "customer.trialDays"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "trialDays", type: "number", name: "trialDays" },
                  domProps: { value: _vm.customer.trialDays },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "trialDays", $event.target.value)
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
                        value: _vm.errors.has("trialDays"),
                        expression: "errors.has('trialDays')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("trialDays")))]
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
                      value: _vm.customer.remark,
                      expression: "customer.remark"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "remark", rows: "2", name: "remark" },
                  domProps: { value: _vm.customer.remark },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.customer, "remark", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-4 mt-3 col-sm-12" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-success-new",
          staticStyle: { width: "23%" },
          attrs: { type: "submit" }
        },
        [_vm._v("SUBMIT")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddCustomer.vue?vue&type=template&id=7b534a9c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddCustomer.vue?vue&type=template&id=7b534a9c& ***!
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
        { name: "can", rawName: "v-can:add__customer", arg: "add__customer" }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "app-main__inner" },
        [
          _c("div", { staticClass: "app-page-title" }, [
            _c("div", { staticClass: "page-title-wrapper d-flex" }, [
              _c(
                "div",
                {
                  staticClass: "page-title-heading mr-auto align-content-start"
                },
                [
                  _c("div", { staticClass: "page-title-icon" }, [
                    _c("i", {
                      staticClass:
                        "pe-7s-add-user icon-gradient bg-premium-dark text-danger"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "heading-font-weight" }, [
                    _vm._v("CUSTOMER DETAIL")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("AddCustomerForm")
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ForgotPassword.vue?vue&type=template&id=75fd2871&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/ForgotPassword.vue?vue&type=template&id=75fd2871&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "login-background" }, [
    _c("div", { staticClass: "container h-100 login-container" }, [
      _c("div", { staticClass: "row align-items-center h-100" }, [
        _c("div", { staticClass: "col-sm-9 col-md-7 col-lg-5 mx-auto" }, [
          _c("div", { staticClass: "card card-signin my-5" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "text-center mb-5" }, [
                _vm.settings
                  ? _c("img", {
                      attrs: { src: _vm.settings[0].logo_url, width: "100px" }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "h5",
                { staticClass: "card-title text-center h2 mb-4 sign-in-text" },
                [_vm._v("Forgot Password")]
              ),
              _vm._v(" "),
              _vm.isError === true
                ? _c(
                    "div",
                    {
                      staticClass:
                        "alert alert-danger alert-dismissible fade show",
                      attrs: { role: "alert" }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\t\t\tInvalid Email Address.\n\t\t\t\t\t\t\t"
                      ),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: {
                            type: "button",
                            "data-dismiss": "alert",
                            "aria-label": "Close"
                          },
                          on: {
                            click: function($event) {
                              _vm.isError = false
                            }
                          }
                        },
                        [
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("×")
                          ])
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isSuccess === true
                ? _c(
                    "div",
                    {
                      staticClass:
                        "alert alert-success alert-dismissible fade show",
                      attrs: { role: "alert" }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\t\t\tPlease Check Your Email Account.\n\t\t\t\t\t\t\t"
                      ),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: {
                            type: "button",
                            "data-dismiss": "alert",
                            "aria-label": "Close"
                          },
                          on: {
                            click: function($event) {
                              _vm.isSuccess = false
                            }
                          }
                        },
                        [
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("×")
                          ])
                        ]
                      )
                    ]
                  )
                : _vm._e(),
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
                  _c("div", { staticClass: "form-label-group pb-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|email",
                          expression: "'required|email'"
                        }
                      ],
                      staticClass: "form-control mb-3",
                      attrs: {
                        type: "email",
                        name: "email",
                        placeholder: "Email address"
                      },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
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
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-lg btn-primary btn-block text-uppercase",
                      attrs: { type: "submit", disabled: _vm.isFormSubmit }
                    },
                    [_vm._v("Submit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "pull-right pt-4 h5 text-primary",
                      attrs: { to: "/login" }
                    },
                    [_vm._v("Login")]
                  ),
                  _c("br")
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/forms/AddCustomerForm.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddCustomerForm.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCustomerForm_vue_vue_type_template_id_4492d3fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCustomerForm.vue?vue&type=template&id=4492d3fc& */ "./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=template&id=4492d3fc&");
/* harmony import */ var _AddCustomerForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCustomerForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddCustomerForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCustomerForm_vue_vue_type_template_id_4492d3fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCustomerForm_vue_vue_type_template_id_4492d3fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/forms/AddCustomerForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=template&id=4492d3fc&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=template&id=4492d3fc& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerForm_vue_vue_type_template_id_4492d3fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerForm.vue?vue&type=template&id=4492d3fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddCustomerForm.vue?vue&type=template&id=4492d3fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerForm_vue_vue_type_template_id_4492d3fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerForm_vue_vue_type_template_id_4492d3fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/AddCustomer.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/views/AddCustomer.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCustomer_vue_vue_type_template_id_7b534a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCustomer.vue?vue&type=template&id=7b534a9c& */ "./resources/assets/js/views/AddCustomer.vue?vue&type=template&id=7b534a9c&");
/* harmony import */ var _AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCustomer.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/AddCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCustomer_vue_vue_type_template_id_7b534a9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCustomer_vue_vue_type_template_id_7b534a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/AddCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/AddCustomer.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/views/AddCustomer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/AddCustomer.vue?vue&type=template&id=7b534a9c&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/AddCustomer.vue?vue&type=template&id=7b534a9c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_7b534a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomer.vue?vue&type=template&id=7b534a9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddCustomer.vue?vue&type=template&id=7b534a9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_7b534a9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_7b534a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/ForgotPassword.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/ForgotPassword.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_75fd2871_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=75fd2871&scoped=true& */ "./resources/assets/js/views/ForgotPassword.vue?vue&type=template&id=75fd2871&scoped=true&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ForgotPassword_vue_vue_type_style_index_0_id_75fd2871_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css& */ "./resources/assets/js/views/ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_75fd2871_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_75fd2871_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75fd2871",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/ForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/ForgotPassword.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/views/ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_75fd2871_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ForgotPassword.vue?vue&type=style&index=0&id=75fd2871&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_75fd2871_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_75fd2871_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_75fd2871_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_75fd2871_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_75fd2871_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/views/ForgotPassword.vue?vue&type=template&id=75fd2871&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/views/ForgotPassword.vue?vue&type=template&id=75fd2871&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_75fd2871_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=75fd2871&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ForgotPassword.vue?vue&type=template&id=75fd2871&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_75fd2871_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_75fd2871_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);