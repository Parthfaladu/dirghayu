(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/CustomerTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/CustomerTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/custom/VueDatatable.vue */ "./resources/assets/js/components/custom/VueDatatable.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CustomerTable',
  components: {
    VueDatatable: _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      columns: [{
        data: 'id',
        name: 'id',
        width: "100px"
      }, {
        data: function data(_data) {
          var customer = '';

          if (_data.photo_url) {
            customer += "<img src=".concat(_data.photo_url, " width='50px' class='rounded-circle mr-3'>");
          }

          customer += "".concat(_data.first_name, " ").concat(_data.last_name);
          return customer;
        },
        name: 'name'
      }, {
        data: 'email',
        name: 'email'
      }, {
        data: 'phone',
        name: 'phone',
        width: "100px"
      }, {
        data: 'gender',
        name: 'gender',
        width: "100px"
      }, {
        data: function data(_data2) {
          return _data2.customer ? _data2.customer.city : null;
        },
        name: 'city',
        width: "120px"
      }, {
        data: function data(_data3) {
          var actions = "";

          if (_this.$can('update__customer')) {
            actions += "<button class='btn btn-outline-alternate mr-2' data-g-action='view' data-g-actiondata=" + _data3.id + "><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button>";
          }

          if (_this.$can('delete__customer')) {
            actions += " <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata=" + _data3.id + "><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
          }

          return actions;
        },
        name: 'action',
        width: "150px"
      }],
      url: '/api/v1/customer/list'
    };
  },
  methods: {
    onAction: function onAction(action) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (action.action === 'view') {
                  _this2.$router.push('/update-customer/' + action.data);
                }

                if (!(action.action === 'delete')) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  title: "Along with this customer delete all it's subscription and payment details will be deleted so Are you sure want to delete this customer?",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                });

              case 5:
                result = _context.sent;

                if (!result.value) {
                  _context.next = 12;
                  break;
                }

                _context.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/customer/delete', {
                  id: action.data
                });

              case 9:
                res = _context.sent;

                _this2.$refs.vueDatatable.draw();

                _this2.$snotify.success(null, res.data.message);

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](2);

                _this2.$snotify.error(null, _context.t0.message);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 14]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/CustomerList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/CustomerList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CustomerTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/CustomerTable */ "./resources/assets/js/components/CustomerTable.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PaymentList',
  components: {
    CustomerTable: _components_CustomerTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/UpdateCustomer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/UpdateCustomer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueJqueryCalendar: vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      customer: {
        height: null,
        weight: null,
        chest: null,
        waist: null,
        thigh: null,
        arms: null,
        fat: null,
        interested_area: '',
        city: null,
        state: null,
        zipcode: null
      },
      user: {
        gender: "female",
        first_name: null,
        last_name: null,
        email: null,
        dob: null,
        phone: null,
        address: null,
        profileImage: ''
      },
      packages: null,
      branches: null,
      profile_img_path: null,
      showPreview: false
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
              _context.prev = 0;

              if (_this.$route.params.id != null) {
                _this.getCusomerList();
              }

              _context.next = 4;
              return _this.getPackageList();

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);

              _this.$snotify.error(null, _context.t0.message);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }))();
  },
  methods: {
    getCusomerList: function getCusomerList() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/customer/list/' + _this2.$route.params.id);

              case 2:
                res = _context2.sent;
                _this2.customer = res.data.data.customer;
                _this2.user = res.data.data;
                _this2.profile_img_path = _this2.user.photo_url;
                _this2.showPreview = true;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getPackageList: function getPackageList() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/package/list');

              case 2:
                res = _context3.sent;
                _this3.packages = res.data.data;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    submitForm: function submitForm() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var result, res, customerData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this4.$validator.validateAll();

              case 3:
                result = _context4.sent;

                if (result) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return");

              case 6:
                res = null;
                customerData = new FormData();
                customerData.append('gender', _this4.user.gender);
                customerData.append('first_name', _this4.user.first_name);
                customerData.append('last_name', _this4.user.last_name);
                customerData.append('email', _this4.user.email);
                customerData.append('dob', _this4.user.dob);
                customerData.append('height', _this4.customer.height);
                customerData.append('weight', _this4.customer.weight);
                customerData.append('chest', _this4.customer.chest);
                customerData.append('waist', _this4.customer.waist);
                customerData.append('thigh', _this4.customer.thigh);
                customerData.append('arms', _this4.customer.arms);
                customerData.append('fat', _this4.customer.fat);
                customerData.append('interested_area', _this4.customer.interested_area);
                customerData.append('phone', _this4.user.phone);
                customerData.append('address', _this4.user.address);
                customerData.append('city', _this4.customer.city);
                customerData.append('state', _this4.customer.state);
                customerData.append('zipcode', _this4.customer.zipcode);
                customerData.append('profileImage', _this4.user.profileImage);
                customerData.append('user_id', _this4.$route.params.id);
                _context4.next = 30;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/customer/update', customerData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 30:
                res = _context4.sent;

                _this4.$snotify.success(null, res.data.message);

                _context4.next = 37;
                break;

              case 34:
                _context4.prev = 34;
                _context4.t0 = _context4["catch"](0);

                _this4.$snotify.error(null, _context4.t0.message);

              case 37:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 34]]);
      }))();
    },
    onImageUpload: function onImageUpload() {
      this.user.profileImage = this.$refs.profilePath.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.showPreview = true;
        this.profile_img_path = reader.result;
      }.bind(this), false);

      if (this.user.profileImage) {
        //   if ( /\.(jpe?g|png|gif)$/i.test( this.user.profileImage.name ) ) {
        reader.readAsDataURL(this.user.profileImage); //   }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!jquery-ui-dist/jquery-ui.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/jquery-ui-dist/jquery-ui.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/CustomerTable.vue?vue&type=template&id=19df142e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/CustomerTable.vue?vue&type=template&id=19df142e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      directives: [
        { name: "can", rawName: "v-can:view__customer", arg: "view__customer" }
      ]
    },
    [
      _c(
        "VueDatatable",
        {
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
          _c("th", [_vm._v("Gender")]),
          _vm._v(" "),
          _c("th", [_vm._v("City")]),
          _vm._v(" "),
          _c(
            "th",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.$can("update__customer") ||
                    _vm.$can("delete__customer"),
                  expression:
                    "$can('update__customer') || $can('delete__customer')"
                }
              ]
            },
            [_vm._v("Action")]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/CustomerList.vue?vue&type=template&id=7a4d9a22&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/CustomerList.vue?vue&type=template&id=7a4d9a22& ***!
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
  return _c(
    "DashboardPage",
    {
      directives: [
        { name: "can", rawName: "v-can:view__customer", arg: "view__customer" }
      ]
    },
    [
      _c("div", { staticClass: "app-main__inner" }, [
        _c("div", { staticClass: "app-page-title" }, [
          _c("div", { staticClass: "page-title-wrapper" }, [
            _c("div", { staticClass: "page-title-heading" }, [
              _c("div", { staticClass: "page-title-icon" }, [
                _c("i", {
                  staticClass:
                    "pe-7s-add-user icon-gradient bg-premium-dark text-danger"
                })
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("CUSTOMER LIST")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body col-sm-12" }, [
            _c(
              "h5",
              {
                directives: [
                  {
                    name: "can",
                    rawName: "v-can:add__customer",
                    arg: "add__customer"
                  }
                ],
                staticClass: "card-title"
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-primary mb-5 pull-right",
                    attrs: { to: "/add-customer" }
                  },
                  [_vm._v("Add Customer")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive" },
              [_c("CustomerTable")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/UpdateCustomer.vue?vue&type=template&id=5d99a0da&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/UpdateCustomer.vue?vue&type=template&id=5d99a0da& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        {
          name: "can",
          rawName: "v-can:update__customer",
          arg: "update__customer"
        }
      ]
    },
    [
      _c("div", { staticClass: "app-main__inner" }, [
        _c("div", { staticClass: "app-page-title" }, [
          _c("div", { staticClass: "page-title-wrapper" }, [
            _c("div", { staticClass: "page-title-heading" }, [
              _c("div", { staticClass: "page-title-icon" }, [
                _c("i", {
                  staticClass:
                    "pe-7s-user icon-gradient bg-premium-dark text-danger"
                })
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("CUSTOMER DETAIL")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { enctype: "multipart/form-data" },
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
                      _c("label", { attrs: { for: "first_name" } }, [
                        _vm._v("First Name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.first_name,
                            expression: "user.first_name"
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
                          id: "first_name",
                          type: "text",
                          name: "first_name"
                        },
                        domProps: { value: _vm.user.first_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "first_name",
                              $event.target.value
                            )
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
                              value: _vm.errors.has("first_name"),
                              expression: "errors.has('first_name')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("first_name")))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "last_name" } }, [
                        _vm._v("Last Name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.last_name,
                            expression: "user.last_name"
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
                          id: "last_name",
                          type: "text",
                          name: "last_name"
                        },
                        domProps: { value: _vm.user.last_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "last_name", $event.target.value)
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
                              value: _vm.errors.has("last_name"),
                              expression: "errors.has('last_name')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("last_name")))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Email")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.email,
                            expression: "user.email"
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
                        domProps: { value: _vm.user.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "email", $event.target.value)
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
                      _c("label", { attrs: { for: "gender" } }, [
                        _vm._v("Gender")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-1 row" }, [
                        _c(
                          "div",
                          { staticClass: "custom-control custom-radio" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.gender,
                                  expression: "user.gender"
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
                                checked: _vm.user.gender === "male",
                                checked: _vm._q(_vm.user.gender, "male")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(_vm.user, "gender", "male")
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
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "custom-control custom-radio" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.gender,
                                  expression: "user.gender"
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
                                checked: _vm.user.gender === "female",
                                checked: _vm._q(_vm.user.gender, "female")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(_vm.user, "gender", "female")
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
                          ]
                        )
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
                            "class-name": "form-control"
                          },
                          model: {
                            value: _vm.user.dob,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "dob", $$v)
                            },
                            expression: "user.dob"
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
                        attrs: { src: _vm.profile_img_path, width: "20%" }
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
                          staticClass: "btn btn-info",
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
                        _vm._v("Height")
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
                        attrs: { id: "height", type: "text", name: "height" },
                        domProps: { value: _vm.customer.height },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.customer,
                              "height",
                              $event.target.value
                            )
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
                        _vm._v("Weight")
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
                        attrs: { id: "weight", type: "text", name: "weight" },
                        domProps: { value: _vm.customer.weight },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.customer,
                              "weight",
                              $event.target.value
                            )
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
                        _vm._v("Chest")
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
                        attrs: { id: "chest", type: "text", name: "chest" },
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
                        _vm._v("Waist")
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
                        attrs: { id: "waist", type: "text", name: "waist" },
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
                        _vm._v("Thigh")
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
                        attrs: { id: "thigh", type: "text", name: "thigh" },
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
                      _c("label", { attrs: { for: "arms" } }, [_vm._v("Arms")]),
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
                        attrs: { id: "arms", type: "text", name: "arms" },
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
                      _c("label", { attrs: { for: "fat" } }, [_vm._v("Fat")]),
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
                        attrs: { id: "fat", type: "text", name: "fat" },
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
                      _c("label", { attrs: { for: "interested_area" } }, [
                        _vm._v("Interested Area")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.customer.interested_area,
                            expression: "customer.interested_area"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "interested_area",
                          rows: "2",
                          name: "interested_area"
                        },
                        domProps: { value: _vm.customer.interested_area },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.customer,
                              "interested_area",
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
                      _c("label", { attrs: { for: "phone" } }, [
                        _vm._v("Phone")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.phone,
                            expression: "user.phone"
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
                        domProps: { value: _vm.user.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "phone", $event.target.value)
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
                      _c("label", { attrs: { for: "address" } }, [
                        _vm._v("Address")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.address,
                            expression: "user.address"
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
                        domProps: { value: _vm.user.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "address", $event.target.value)
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
                      _c("label", { attrs: { for: "state" } }, [
                        _vm._v("State")
                      ]),
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
                      _c("label", { attrs: { for: "zipcode" } }, [
                        _vm._v("Zipcode")
                      ]),
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
                            _vm.$set(
                              _vm.customer,
                              "zipcode",
                              $event.target.value
                            )
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
              _c("div", { staticClass: "text-center mb-4 mt-3 col-sm-12" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-info",
                    staticStyle: { width: "23%" },
                    attrs: { type: "submit" }
                  },
                  [_vm._v("SUBMIT")]
                )
              ])
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/CustomerTable.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/CustomerTable.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerTable_vue_vue_type_template_id_19df142e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerTable.vue?vue&type=template&id=19df142e&scoped=true& */ "./resources/assets/js/components/CustomerTable.vue?vue&type=template&id=19df142e&scoped=true&");
/* harmony import */ var _CustomerTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/CustomerTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomerTable_vue_vue_type_style_index_0_id_19df142e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css& */ "./resources/assets/js/components/CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomerTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerTable_vue_vue_type_template_id_19df142e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerTable_vue_vue_type_template_id_19df142e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19df142e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/CustomerTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/CustomerTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/CustomerTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/CustomerTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_style_index_0_id_19df142e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/CustomerTable.vue?vue&type=style&index=0&id=19df142e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_style_index_0_id_19df142e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_style_index_0_id_19df142e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_style_index_0_id_19df142e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_style_index_0_id_19df142e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_style_index_0_id_19df142e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/CustomerTable.vue?vue&type=template&id=19df142e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/CustomerTable.vue?vue&type=template&id=19df142e&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_template_id_19df142e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerTable.vue?vue&type=template&id=19df142e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/CustomerTable.vue?vue&type=template&id=19df142e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_template_id_19df142e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerTable_vue_vue_type_template_id_19df142e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/CustomerList.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/views/CustomerList.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerList_vue_vue_type_template_id_7a4d9a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerList.vue?vue&type=template&id=7a4d9a22& */ "./resources/assets/js/views/CustomerList.vue?vue&type=template&id=7a4d9a22&");
/* harmony import */ var _CustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerList.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/CustomerList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerList_vue_vue_type_template_id_7a4d9a22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerList_vue_vue_type_template_id_7a4d9a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/CustomerList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/CustomerList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/views/CustomerList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/CustomerList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/CustomerList.vue?vue&type=template&id=7a4d9a22&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/views/CustomerList.vue?vue&type=template&id=7a4d9a22& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_template_id_7a4d9a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerList.vue?vue&type=template&id=7a4d9a22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/CustomerList.vue?vue&type=template&id=7a4d9a22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_template_id_7a4d9a22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_template_id_7a4d9a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/UpdateCustomer.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/UpdateCustomer.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateCustomer_vue_vue_type_template_id_5d99a0da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateCustomer.vue?vue&type=template&id=5d99a0da& */ "./resources/assets/js/views/UpdateCustomer.vue?vue&type=template&id=5d99a0da&");
/* harmony import */ var _UpdateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateCustomer.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/UpdateCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateCustomer_vue_vue_type_template_id_5d99a0da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateCustomer_vue_vue_type_template_id_5d99a0da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/UpdateCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/UpdateCustomer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/UpdateCustomer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/UpdateCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/UpdateCustomer.vue?vue&type=template&id=5d99a0da&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/UpdateCustomer.vue?vue&type=template&id=5d99a0da& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCustomer_vue_vue_type_template_id_5d99a0da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateCustomer.vue?vue&type=template&id=5d99a0da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/UpdateCustomer.vue?vue&type=template&id=5d99a0da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCustomer_vue_vue_type_template_id_5d99a0da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateCustomer_vue_vue_type_template_id_5d99a0da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);