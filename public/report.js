(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AttendanceReportTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AttendanceReportTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-jquery-calendar */ "./node_modules/vue-jquery-calendar/dist/VueJqueryCalendar.esm.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_5__);


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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AttendanceReportTable',
  components: {
    VueDatatable: _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueJqueryCalendar: vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fromDate: moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(30, "days").format("DD-MM-YYYY"),
      toDate: moment__WEBPACK_IMPORTED_MODULE_3___default()().format("DD-MM-YYYY"),
      customerId: null,
      customerList: [],
      columns: [{
        data: 'id',
        name: 'id',
        width: "20%"
      }, {
        data: function data(_data) {
          if (_data && _data.user) {
            return _data.user.first_name + ' ' + _data.user.last_name;
          }

          return null;
        },
        name: 'name'
      }, {
        data: function data(_data2) {
          return moment__WEBPACK_IMPORTED_MODULE_3___default()(_data2.date).format("DD-MM-YYYY");
        },
        name: 'date'
      }, {
        data: function data(_data3) {
          return 'Present';
        },
        name: 'status',
        width: "20%"
      }],
      url: "/api/v1/attendance/report/".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(30, "days").format("DD-MM-YYYY"), "/").concat(moment__WEBPACK_IMPORTED_MODULE_3___default()().format("DD-MM-YYYY"))
    };
  },
  mounted: function mounted() {
    if (this.$can('view__customer')) {
      this.getCustomerList();
    }
  },
  methods: {
    getCustomerList: function getCustomerList() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/customer/list');

              case 2:
                res = _context.sent;
                _this.customerList = res.data.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    changeFilter: function changeFilter() {
      this.$refs.vueDatatable.reload("/api/v1/attendance/report/".concat(this.fromDate, "/").concat(this.toDate, "/").concat(this.customerId));
    },
    downloadReport: function downloadReport() {
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default()({
                  url: '/api/v1/attendance/report/download',
                  method: 'POST',
                  responseType: 'blob',
                  data: {
                    from: _this2.fromDate,
                    to: _this2.toDate,
                    customerId: _this2.customerId
                  }
                });

              case 2:
                res = _context2.sent;
                downloadjs__WEBPACK_IMPORTED_MODULE_5___default()(res.data, "attendance_report.pdf", "application/pdf");

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ProductSellReportTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ProductSellReportTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/custom/VueDatatable.vue */ "./resources/assets/js/components/custom/VueDatatable.vue");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_3__);


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProductSellReportTable',
  components: {
    VueDatatable: _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      customerId: null,
      productName: null,
      customerList: [],
      productList: [],
      columns: [{
        data: 'id',
        name: 'id',
        width: "100px"
      }, {
        data: function data(_data) {
          return _data.product_name;
        },
        name: 'product'
      }, {
        data: function data(_data2) {
          return _data2.user.first_name + ' ' + _data2.user.last_name;
        },
        name: 'user_id'
      }, {
        data: 'quantity',
        name: 'quantity',
        width: "80px"
      }, {
        data: function data(_data3) {
          return _data3.paid_amount + ' ' + _this.$store.getters['init/currency'];
        },
        name: 'paid_amount',
        width: "120px"
      }],
      url: '/api/v1/productsell/report'
    };
  },
  mounted: function mounted() {
    this.getCustomerList();
    this.getProductList();
  },
  methods: {
    getProductList: function getProductList() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var productRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/product/list');

              case 2:
                productRes = _context.sent;
                _this2.productList = productRes.data.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCustomerList: function getCustomerList() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var userRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/customer/list');

              case 2:
                userRes = _context2.sent;
                _this3.customerList = userRes.data.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    changeFilter: function changeFilter() {
      this.$refs.vueDatatable.reload("/api/v1/productsell/report/".concat(this.customerId, "/").concat(this.productName));
    },
    downloadReport: function downloadReport() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default()({
                  url: '/api/v1/productsell/report/download',
                  method: 'POST',
                  responseType: 'blob',
                  data: {
                    customerId: _this4.customerId,
                    packageName: _this4.packageName
                  }
                });

              case 2:
                res = _context3.sent;
                downloadjs__WEBPACK_IMPORTED_MODULE_3___default()(res.data, "product_sell_report.pdf", "application/pdf");

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_5__);


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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SubscriptionReportTable',
  components: {
    VueDatatable: _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      customerId: null,
      packageName: null,
      status: null,
      customerList: [],
      packageList: [],
      columns: [{
        data: 'id',
        name: 'id',
        width: "80px"
      }, {
        data: function data(_data) {
          return _data.user.first_name + ' ' + _data.user.last_name;
        },
        name: 'name'
      }, {
        data: 'package_name',
        name: 'package_name'
      }, {
        data: function data(_data2) {
          return moment__WEBPACK_IMPORTED_MODULE_4___default()(_data2.start_date).format("DD-MM-YYYY");
        },
        name: 'start_date',
        width: "100px"
      }, {
        data: 'duration',
        name: 'duration',
        width: "50px"
      }, {
        data: function data(_data3) {
          return moment__WEBPACK_IMPORTED_MODULE_4___default()(_data3.end_date).format("DD-MM-YYYY");
        },
        name: 'end_date',
        width: "100px"
      }, {
        data: function data(_data4) {
          if (_data4.payment.length > 0) {
            return _data4.payment[0].paid_amount + ' ' + _this.$store.getters['init/currency'];
          } else {
            return '0' + ' ' + _this.$store.getters['init/currency'];
          }
        },
        name: 'paid_amount',
        width: "80px"
      }, {
        data: function data(_data5) {
          if (_data5.payment.length > 0) {
            return _data5.payment[0].remaining_amount + ' ' + _this.$store.getters['init/currency'];
          } else {
            return _data5.amount + ' ' + _this.$store.getters['init/currency'];
            ;
          }
        },
        name: 'remaining_amount',
        width: "80px"
      }, {
        data: function data(_data6) {
          return moment__WEBPACK_IMPORTED_MODULE_4___default()(_data6.end_date).isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_4___default()()) ? 'Active' : 'Expired';
        },
        name: 'status',
        width: "100px"
      }],
      url: '/api/v1/subscription/report'
    };
  },
  mounted: function mounted() {
    if (this.$can('add__subscription')) {
      this.getCustomerList();
    }

    this.getPackageList();
  },
  methods: {
    getCustomerList: function getCustomerList() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/customer/list');

              case 2:
                res = _context.sent;
                _this2.customerList = res.data.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getPackageList: function getPackageList() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var packageRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/package/list');

              case 2:
                packageRes = _context2.sent;
                _this3.packageList = packageRes.data.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    changeFilter: function changeFilter() {
      this.$refs.vueDatatable.reload("/api/v1/subscription/report/".concat(this.customerId, "/").concat(this.packageName, "/").concat(this.status));
    },
    downloadReport: function downloadReport() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default()({
                  url: '/api/v1/subscription/report/download',
                  method: 'POST',
                  responseType: 'blob',
                  data: {
                    customerId: _this4.customerId,
                    packageName: _this4.packageName,
                    status: _this4.status
                  }
                });

              case 2:
                res = _context3.sent;
                downloadjs__WEBPACK_IMPORTED_MODULE_5___default()(res.data, "subscription_report.pdf", "application/pdf");

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AttendanceReport.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AttendanceReport.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AttendanceReportTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/AttendanceReportTable */ "./resources/assets/js/components/AttendanceReportTable.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AttendanceReport',
  components: {
    AttendanceReportTable: _components_AttendanceReportTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ProductSellReport.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/ProductSellReport.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ProductSellReportTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/ProductSellReportTable */ "./resources/assets/js/components/ProductSellReportTable.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProductSellReport',
  components: {
    ProductSellReportTable: _components_ProductSellReportTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/SubscriptionReport.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/SubscriptionReport.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SubscriptionReportTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/SubscriptionReportTable */ "./resources/assets/js/components/SubscriptionReportTable.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SubscriptionReport',
  components: {
    SubscriptionReportTable: _components_SubscriptionReportTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/downloadjs/download.js":
/*!*********************************************!*\
  !*** ./node_modules/downloadjs/download.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}else{//not data url, is it a string with special needs?
			if(/([\x80-\xff])/.test(payload)){			  
				var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
				for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
			 	payload=new myBlob([tempUiArr], {type: mimeType});
			}		  
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode && /^data:/.test(url)){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AttendanceReportTable.vue?vue&type=template&id=2dfb13ac&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AttendanceReportTable.vue?vue&type=template&id=2dfb13ac& ***!
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
    "div",
    [
      _c("div", { staticClass: "position-relative form-group row mb-5" }, [
        _c(
          "div",
          { staticClass: "col-sm-2" },
          [
            _c(
              "label",
              { staticClass: "mr-3 mt-2", attrs: { for: "attendanceDate" } },
              [_vm._v("From")]
            ),
            _vm._v(" "),
            _c("VueJqueryCalendar", {
              attrs: {
                "class-name": "form-control",
                "date-format": "dd-mm-yy",
                readonly: true
              },
              on: { change: _vm.changeFilter },
              model: {
                value: _vm.fromDate,
                callback: function($$v) {
                  _vm.fromDate = $$v
                },
                expression: "fromDate"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-sm-2" },
          [
            _c(
              "label",
              { staticClass: "mr-3 mt-2", attrs: { for: "attendanceDate" } },
              [_vm._v("To")]
            ),
            _vm._v(" "),
            _c("VueJqueryCalendar", {
              attrs: {
                "class-name": "form-control",
                "date-format": "dd-mm-yy",
                readonly: true
              },
              on: { change: _vm.changeFilter },
              model: {
                value: _vm.toDate,
                callback: function($$v) {
                  _vm.toDate = $$v
                },
                expression: "toDate"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _vm.$can("add__attendance")
            ? _c("span", [
                _c(
                  "label",
                  {
                    staticClass: "mr-3 mt-2",
                    attrs: { for: "attendanceDate" }
                  },
                  [_vm._v("Customer")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.customerId,
                        expression: "customerId"
                      }
                    ],
                    staticClass: "form-control",
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
                          _vm.customerId = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        _vm.changeFilter
                      ]
                    }
                  },
                  [
                    _c("option", { domProps: { value: null } }, [
                      _vm._v("All Customer")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.customerList, function(customer) {
                      return _c(
                        "option",
                        {
                          key: customer.id,
                          domProps: {
                            value: customer.id,
                            selected: customer.id === _vm.customerId
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(customer.first_name) +
                              " " +
                              _vm._s(customer.last_name) +
                              " "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "can",
                rawName: "v-can:view__attendance",
                arg: "view__attendance"
              }
            ],
            staticClass: "col-sm-4 offset-2 text-right mt-4"
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function($event) {
                    return _vm.downloadReport()
                  }
                }
              },
              [_vm._v("Download in PDF")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "VueDatatable",
        { ref: "vueDatatable", attrs: { columns: _vm.columns, url: _vm.url } },
        [
          _c("th", [_vm._v("Id")]),
          _vm._v(" "),
          _c("th", [_vm._v("Customer Name")]),
          _vm._v(" "),
          _c("th", [_vm._v("Date")]),
          _vm._v(" "),
          _c("th", [_vm._v("Status")])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ProductSellReportTable.vue?vue&type=template&id=7cba8c60&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ProductSellReportTable.vue?vue&type=template&id=7cba8c60& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticClass: "position-relative form-group row mb-5" }, [
        _c("div", { staticClass: "col-sm-2" }, [
          _c(
            "label",
            { staticClass: "mr-3 mt-2", attrs: { for: "attendanceDate" } },
            [_vm._v("Customer")]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customerId,
                  expression: "customerId"
                }
              ],
              staticClass: "form-control",
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
                    _vm.customerId = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.changeFilter
                ]
              }
            },
            [
              _c("option", { domProps: { value: null } }, [
                _vm._v("All Customer")
              ]),
              _vm._v(" "),
              _vm._l(_vm.customerList, function(customer) {
                return _c(
                  "option",
                  {
                    key: customer.id,
                    domProps: {
                      value: customer.id,
                      selected: customer.id === _vm.customerId
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(customer.first_name) +
                        " " +
                        _vm._s(customer.last_name) +
                        " "
                    )
                  ]
                )
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c(
            "label",
            { staticClass: "mr-3 mt-2", attrs: { for: "attendanceDate" } },
            [_vm._v("Product")]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.productName,
                  expression: "productName"
                }
              ],
              staticClass: "form-control",
              attrs: { name: "product_name" },
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
                    _vm.productName = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.changeFilter
                ]
              }
            },
            [
              _c("option", { domProps: { value: null } }, [
                _vm._v("All Product")
              ]),
              _vm._v(" "),
              _vm._l(_vm.productList, function(product) {
                return _c(
                  "option",
                  {
                    key: product.id,
                    domProps: {
                      value: product.name,
                      selected: _vm.productName === product.name
                    }
                  },
                  [_vm._v(_vm._s(product.name))]
                )
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4 offset-4 text-right mt-4" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              on: {
                click: function($event) {
                  return _vm.downloadReport()
                }
              }
            },
            [_vm._v("Download in PDF")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "VueDatatable",
        { ref: "vueDatatable", attrs: { columns: _vm.columns, url: _vm.url } },
        [
          _c("th", [_vm._v("Id")]),
          _vm._v(" "),
          _c("th", [_vm._v("Product")]),
          _vm._v(" "),
          _c("th", [_vm._v("Customer")]),
          _vm._v(" "),
          _c("th", [_vm._v("Quantity")]),
          _vm._v(" "),
          _c("th", [_vm._v("Amount")])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=template&id=5ca73594&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=template&id=5ca73594& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticClass: "position-relative form-group row mb-5" }, [
        _c("div", { staticClass: "col-sm-2" }, [
          _c(
            "span",
            {
              directives: [
                {
                  name: "can",
                  rawName: "v-can:add__subscription",
                  arg: "add__subscription"
                }
              ]
            },
            [
              _c(
                "label",
                { staticClass: "mr-3 mt-2", attrs: { for: "attendanceDate" } },
                [_vm._v("Customer")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customerId,
                      expression: "customerId"
                    }
                  ],
                  staticClass: "form-control",
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
                        _vm.customerId = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      _vm.changeFilter
                    ]
                  }
                },
                [
                  _c("option", { domProps: { value: null } }, [
                    _vm._v("All Customer")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.customerList, function(customer) {
                    return _c(
                      "option",
                      {
                        key: customer.id,
                        domProps: {
                          value: customer.id,
                          selected: customer.id === _vm.customerId
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(customer.first_name) +
                            " " +
                            _vm._s(customer.last_name) +
                            " "
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c(
            "label",
            { staticClass: "mr-3 mt-2", attrs: { for: "attendanceDate" } },
            [_vm._v("Package")]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.packageName,
                  expression: "packageName"
                }
              ],
              staticClass: "form-control",
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
                    _vm.packageName = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.changeFilter
                ]
              }
            },
            [
              _c("option", { domProps: { value: null } }, [
                _vm._v("All Package")
              ]),
              _vm._v(" "),
              _vm._l(_vm.packageList, function(singlePackage) {
                return _c(
                  "option",
                  {
                    key: singlePackage.id,
                    domProps: {
                      value: singlePackage.name,
                      selected: singlePackage.id === _vm.packageName
                    }
                  },
                  [_vm._v(_vm._s(singlePackage.name))]
                )
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c(
            "label",
            { staticClass: "mr-3 mt-2", attrs: { for: "attendanceDate" } },
            [_vm._v("Status")]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.status,
                  expression: "status"
                }
              ],
              staticClass: "form-control",
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
                    _vm.status = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.changeFilter
                ]
              }
            },
            [
              _c("option", { domProps: { value: null } }, [
                _vm._v("All Status")
              ]),
              _vm._v(" "),
              _c("option", { domProps: { value: "active" } }, [
                _vm._v("Active")
              ]),
              _vm._v(" "),
              _c("option", { domProps: { value: "expired" } }, [
                _vm._v("Expired")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "can",
                rawName: "v-can:view__subscription",
                arg: "view__subscription"
              }
            ],
            staticClass: "col-sm-4 offset-2 text-right mt-4"
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function($event) {
                    return _vm.downloadReport()
                  }
                }
              },
              [_vm._v("Download in PDF")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "VueDatatable",
        { ref: "vueDatatable", attrs: { columns: _vm.columns, url: _vm.url } },
        [
          _c("th", [_vm._v("Id")]),
          _vm._v(" "),
          _c("th", [_vm._v("Customer")]),
          _vm._v(" "),
          _c("th", [_vm._v("Package")]),
          _vm._v(" "),
          _c("th", [_vm._v("Start Date")]),
          _vm._v(" "),
          _c("th", [_vm._v("Duration(In Month)")]),
          _vm._v(" "),
          _c("th", [_vm._v("End Date")]),
          _vm._v(" "),
          _c("th", [_vm._v("Paid Amount")]),
          _vm._v(" "),
          _c("th", [_vm._v("Remaining Amount")]),
          _vm._v(" "),
          _c("th", [_vm._v("Status")])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AttendanceReport.vue?vue&type=template&id=1f7290d0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AttendanceReport.vue?vue&type=template&id=1f7290d0& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          rawName: "v-can:view__attendance",
          arg: "view__attendance"
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
                    "pe-7s-usb icon-gradient bg-premium-dark text-danger"
                })
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("ATTANDANCE REPORT")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body col-sm-12" }, [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [_c("AttendanceReportTable")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ProductSellReport.vue?vue&type=template&id=ca4b4c9c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/ProductSellReport.vue?vue&type=template&id=ca4b4c9c& ***!
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
    "DashboardPage",
    {
      directives: [
        {
          name: "can",
          rawName: "v-can:view__product_sell",
          arg: "view__product_sell"
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
                    "pe-7s-usb icon-gradient bg-premium-dark text-danger"
                })
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("PRODUCT SELL REPORT")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body col-sm-12" }, [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [_c("ProductSellReportTable")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/SubscriptionReport.vue?vue&type=template&id=4181f344&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/SubscriptionReport.vue?vue&type=template&id=4181f344& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
          rawName: "v-can:view__subscription",
          arg: "view__subscription"
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
                    "pe-7s-usb icon-gradient bg-premium-dark text-danger"
                })
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("SUBSCRIPTION REPORT")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body col-sm-12" }, [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [_c("SubscriptionReportTable")],
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

/***/ "./resources/assets/js/components/AttendanceReportTable.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/AttendanceReportTable.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttendanceReportTable_vue_vue_type_template_id_2dfb13ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttendanceReportTable.vue?vue&type=template&id=2dfb13ac& */ "./resources/assets/js/components/AttendanceReportTable.vue?vue&type=template&id=2dfb13ac&");
/* harmony import */ var _AttendanceReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttendanceReportTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/AttendanceReportTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttendanceReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttendanceReportTable_vue_vue_type_template_id_2dfb13ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttendanceReportTable_vue_vue_type_template_id_2dfb13ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/AttendanceReportTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/AttendanceReportTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/AttendanceReportTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttendanceReportTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AttendanceReportTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/AttendanceReportTable.vue?vue&type=template&id=2dfb13ac&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/AttendanceReportTable.vue?vue&type=template&id=2dfb13ac& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReportTable_vue_vue_type_template_id_2dfb13ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttendanceReportTable.vue?vue&type=template&id=2dfb13ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AttendanceReportTable.vue?vue&type=template&id=2dfb13ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReportTable_vue_vue_type_template_id_2dfb13ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReportTable_vue_vue_type_template_id_2dfb13ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/ProductSellReportTable.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/ProductSellReportTable.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductSellReportTable_vue_vue_type_template_id_7cba8c60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSellReportTable.vue?vue&type=template&id=7cba8c60& */ "./resources/assets/js/components/ProductSellReportTable.vue?vue&type=template&id=7cba8c60&");
/* harmony import */ var _ProductSellReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSellReportTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ProductSellReportTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductSellReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductSellReportTable_vue_vue_type_template_id_7cba8c60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductSellReportTable_vue_vue_type_template_id_7cba8c60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ProductSellReportTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ProductSellReportTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/ProductSellReportTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSellReportTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ProductSellReportTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ProductSellReportTable.vue?vue&type=template&id=7cba8c60&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/ProductSellReportTable.vue?vue&type=template&id=7cba8c60& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReportTable_vue_vue_type_template_id_7cba8c60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSellReportTable.vue?vue&type=template&id=7cba8c60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ProductSellReportTable.vue?vue&type=template&id=7cba8c60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReportTable_vue_vue_type_template_id_7cba8c60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReportTable_vue_vue_type_template_id_7cba8c60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/SubscriptionReportTable.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/SubscriptionReportTable.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubscriptionReportTable_vue_vue_type_template_id_5ca73594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriptionReportTable.vue?vue&type=template&id=5ca73594& */ "./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=template&id=5ca73594&");
/* harmony import */ var _SubscriptionReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriptionReportTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubscriptionReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubscriptionReportTable_vue_vue_type_template_id_5ca73594___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubscriptionReportTable_vue_vue_type_template_id_5ca73594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/SubscriptionReportTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionReportTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReportTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=template&id=5ca73594&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=template&id=5ca73594& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReportTable_vue_vue_type_template_id_5ca73594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionReportTable.vue?vue&type=template&id=5ca73594& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/SubscriptionReportTable.vue?vue&type=template&id=5ca73594&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReportTable_vue_vue_type_template_id_5ca73594___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReportTable_vue_vue_type_template_id_5ca73594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/AttendanceReport.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/AttendanceReport.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttendanceReport_vue_vue_type_template_id_1f7290d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttendanceReport.vue?vue&type=template&id=1f7290d0& */ "./resources/assets/js/views/AttendanceReport.vue?vue&type=template&id=1f7290d0&");
/* harmony import */ var _AttendanceReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttendanceReport.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/AttendanceReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttendanceReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttendanceReport_vue_vue_type_template_id_1f7290d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttendanceReport_vue_vue_type_template_id_1f7290d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/AttendanceReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/AttendanceReport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/AttendanceReport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttendanceReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AttendanceReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/AttendanceReport.vue?vue&type=template&id=1f7290d0&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/AttendanceReport.vue?vue&type=template&id=1f7290d0& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReport_vue_vue_type_template_id_1f7290d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttendanceReport.vue?vue&type=template&id=1f7290d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AttendanceReport.vue?vue&type=template&id=1f7290d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReport_vue_vue_type_template_id_1f7290d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceReport_vue_vue_type_template_id_1f7290d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/ProductSellReport.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/views/ProductSellReport.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductSellReport_vue_vue_type_template_id_ca4b4c9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSellReport.vue?vue&type=template&id=ca4b4c9c& */ "./resources/assets/js/views/ProductSellReport.vue?vue&type=template&id=ca4b4c9c&");
/* harmony import */ var _ProductSellReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSellReport.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/ProductSellReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductSellReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductSellReport_vue_vue_type_template_id_ca4b4c9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductSellReport_vue_vue_type_template_id_ca4b4c9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/ProductSellReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/ProductSellReport.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/ProductSellReport.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSellReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ProductSellReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/ProductSellReport.vue?vue&type=template&id=ca4b4c9c&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/ProductSellReport.vue?vue&type=template&id=ca4b4c9c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReport_vue_vue_type_template_id_ca4b4c9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSellReport.vue?vue&type=template&id=ca4b4c9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/ProductSellReport.vue?vue&type=template&id=ca4b4c9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReport_vue_vue_type_template_id_ca4b4c9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSellReport_vue_vue_type_template_id_ca4b4c9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/SubscriptionReport.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/views/SubscriptionReport.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubscriptionReport_vue_vue_type_template_id_4181f344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriptionReport.vue?vue&type=template&id=4181f344& */ "./resources/assets/js/views/SubscriptionReport.vue?vue&type=template&id=4181f344&");
/* harmony import */ var _SubscriptionReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriptionReport.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/SubscriptionReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubscriptionReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubscriptionReport_vue_vue_type_template_id_4181f344___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubscriptionReport_vue_vue_type_template_id_4181f344___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/SubscriptionReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/SubscriptionReport.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/views/SubscriptionReport.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/SubscriptionReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/SubscriptionReport.vue?vue&type=template&id=4181f344&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/SubscriptionReport.vue?vue&type=template&id=4181f344& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReport_vue_vue_type_template_id_4181f344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionReport.vue?vue&type=template&id=4181f344& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/SubscriptionReport.vue?vue&type=template&id=4181f344&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReport_vue_vue_type_template_id_4181f344___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionReport_vue_vue_type_template_id_4181f344___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);