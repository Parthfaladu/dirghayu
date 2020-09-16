(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AttendanceTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AttendanceTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AttendanceTable',
  components: {
    VueDatatable: _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueJqueryCalendar: vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      attendanceDate: moment__WEBPACK_IMPORTED_MODULE_3___default()().format("DD-MM-YYYY"),
      columns: [{
        data: 'id',
        name: 'id',
        width: "20%"
      }, {
        data: function data(_data) {
          if (_this.$can('update__attendance')) {
            if (_data.attendance.length > 0) {
              return "<button class='btn btn-outline-success-new' data-g-action='uncheck' data-g-actiondata=" + _data.id + "><i class='fas fa-lock'></i> <span class='button-text'>Checked In</span></button>";
            } else {
              return "<button class='btn btn-outline-danger-new' data-g-action='check' data-g-actiondata=" + _data.id + "><i class='fas fa-unlock'></i> <span class='button-text'>Check In</span></button>";
            }
          }

          if (_data.attendance.length > 0) {
            return "<label class='text-success'>Present</label>";
          } else {
            return "<label class='text-danger'>Absent</label>";
          }
        },
        name: 'action',
        width: "20%"
      }, {
        data: function data(_data2) {
          return _data2.customer;
        },
        name: 'customer'
      }],
      url: '/api/v1/attendance/list/' + moment__WEBPACK_IMPORTED_MODULE_3___default()().format("DD-MM-YYYY")
    };
  },
  mounted: function mounted() {
    return _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    onAction: function onAction(action) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var checkRes, uncheckRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(action.action === 'check')) {
                  _context2.next = 12;
                  break;
                }

                _context2.prev = 1;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/attendance/create', {
                  user_id: action.data,
                  date: _this2.attendanceDate
                });

              case 4:
                checkRes = _context2.sent;

                _this2.$refs.vueDatatable.draw();

                _this2.$snotify.success(null, checkRes.data.message);

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);

                _this2.$snotify.error(null, _context2.t0.message);

              case 12:
                if (!(action.action === 'uncheck')) {
                  _context2.next = 24;
                  break;
                }

                _context2.prev = 13;
                _context2.next = 16;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/attendance/uncheck', {
                  user_id: action.data,
                  date: _this2.attendanceDate
                });

              case 16:
                uncheckRes = _context2.sent;

                _this2.$refs.vueDatatable.draw();

                _this2.$snotify.success(null, uncheckRes.data.message);

                _context2.next = 24;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t1 = _context2["catch"](13);

                _this2.$snotify.error(null, _context2.t1.message);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9], [13, 21]]);
      }))();
    },
    changeDate: function changeDate() {
      this.$refs.vueDatatable.reload('/api/v1/attendance/list/' + this.attendanceDate);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/InvoiceTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/InvoiceTable.vue?vue&type=script&lang=js& ***!
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NoticeTable',
  components: {
    VueDatatable: _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      columns: [{
        data: 'id',
        name: 'id',
        width: "80px"
      }, {
        data: function data(_data) {
          return _data.billto.first_name + ' ' + _data.billto.last_name;
        },
        name: 'bill_to'
      }, {
        data: function data(_data2) {
          return moment__WEBPACK_IMPORTED_MODULE_3___default()(_data2.invoice_date).format("DD-MM-YYYY");
        },
        name: 'invoice_date',
        width: "70px"
      }, {
        data: function data(_data3) {
          return _data3.total + ' ' + _this.$store.getters['init/currency'];
        },
        name: 'total',
        width: "50px"
      }, {
        data: function data(_data4) {
          return _data4.user.first_name + ' ' + _data4.user.last_name;
        },
        name: 'user_id'
      }, {
        data: function data(_data5) {
          var actions = "";

          if (_this.$can('view__invoice')) {
            actions += "<button class='btn btn-outline-info-new' data-g-action='view' data-g-actiondata=" + _data5.id + "><i class='fas fa-eye'></i> <span class='button-text'>View</span></button>";
          }

          if (_this.$can('delete__invoice')) {
            actions += " <button class='btn btn-outline-danger-new' data-g-action='delete' data-g-actiondata=" + _data5.id + "><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
          }

          return actions;
        },
        name: 'action',
        width: "140px"
      }],
      url: '/api/v1/invoice/list'
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
                  _this2.$router.push('/view-invoice/' + action.data);
                }

                if (!(action.action === 'delete')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/invoice/delete', {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-jquery-calendar */ "./node_modules/vue-jquery-calendar/dist/VueJqueryCalendar.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddInvoiceForm',
  components: {
    VueJqueryCalendar: vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      invoice: {
        bill_to: null,
        customer_email: null,
        customer_address: null,
        customer_phone: null,
        invoice_date: null,
        subtotal: 0,
        discount: 0,
        tax: 0,
        total: 0,
        user_id: null,
        invoiceitems: [{
          name: null,
          quantity: 1,
          rate: 0,
          amount: 0
        }]
      },
      staffs: null,
      customers: null
    };
  },
  computed: {
    subTotal: function subTotal() {
      var subTotal = 0;
      this.invoice.invoiceitems.forEach(function (invoiceItem) {
        subTotal += invoiceItem.quantity * invoiceItem.rate;
      });
      return subTotal;
    },
    totalVal: function totalVal() {
      var totalVal = 0;
      totalVal = this.subTotal - parseInt(this.invoice.discount) + parseInt(this.invoice.tax);
      return totalVal;
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
              _context.prev = 0;

              if (_this.$route.params.id != null) {
                _this.getInvoiceList();
              }

              _this.getCustomerList();

              _context.next = 5;
              return _this.getStaffMemberList();

            case 5:
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              _this.$snotify.error(null, _context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }))();
  },
  methods: {
    getInvoiceList: function getInvoiceList() {
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/invoice/list/' + _this2.$route.params.id);

              case 2:
                res = _context2.sent;
                _this2.invoice = res.data.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getCustomerList: function getCustomerList() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var customerRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/customer/list');

              case 2:
                customerRes = _context3.sent;
                _this3.customers = customerRes.data.data;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getStaffMemberList: function getStaffMemberList() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var staffRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/staff/member/list', null);

              case 2:
                staffRes = _context4.sent;
                _this4.staffs = staffRes.data.data;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    submitForm: function submitForm() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var result, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this5.$validator.validateAll();

              case 3:
                result = _context5.sent;

                if (result) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                res = null;

                _this5.invoice.invoiceitems.forEach(function (invoiceItem) {
                  invoiceItem.amount += invoiceItem.quantity * invoiceItem.rate;
                });

                _this5.invoice.subtotal = _this5.subTotal;
                _this5.invoice.total = _this5.totalVal;

                if (!(_this5.$route.params.id != null)) {
                  _context5.next = 16;
                  break;
                }

                _context5.next = 13;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/invoice/update', _this5.invoice);

              case 13:
                res = _context5.sent;
                _context5.next = 19;
                break;

              case 16:
                _context5.next = 18;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/invoice/create', _this5.invoice);

              case 18:
                res = _context5.sent;

              case 19:
                _this5.$router.push({
                  name: 'invoicelist',
                  params: {
                    message: res.data.message
                  }
                });

                _context5.next = 25;
                break;

              case 22:
                _context5.prev = 22;
                _context5.t0 = _context5["catch"](0);

                _this5.$snotify.error(null, _context5.t0.message);

              case 25:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 22]]);
      }))();
    },
    addRow: function addRow() {
      this.invoice.invoiceitems.push({
        name: null,
        quantity: 0,
        rate: 0,
        amount: 0
      });
    },
    removeRow: function removeRow(index) {
      this.invoice.invoiceitems.splice(index, 1);
    },
    onCustomerSelect: function onCustomerSelect() {
      var _this6 = this;

      var customer = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(this.customers, function (customer) {
        return customer.id === _this6.invoice.bill_to;
      });

      if (customer) {
        this.invoice.customer_email = customer.email;
        this.invoice.customer_address = customer.address;
        this.invoice.customer_phone = customer.phone;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddInvoice.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddInvoice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");
/* harmony import */ var _components_forms_AddInvoiceForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/forms/AddInvoiceForm */ "./resources/assets/js/components/forms/AddInvoiceForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AddInvoice',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddInvoiceForm: _components_forms_AddInvoiceForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AttendanceList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AttendanceList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AttendanceTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/AttendanceTable */ "./resources/assets/js/components/AttendanceTable.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PaymentList',
  components: {
    AttendanceTable: _components_AttendanceTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/InvoiceList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_InvoiceTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/InvoiceTable */ "./resources/assets/js/components/InvoiceTable.vue");
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
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InvoiceList',
  components: {
    InvoiceTable: _components_InvoiceTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/InvoiceView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AddInvoice',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      invoice: {
        bill_to: null,
        customer_email: null,
        customer_address: null,
        customer_phone: null,
        invoice_date: null,
        subtotal: 0,
        discount: 0,
        tax: 0,
        total: 0,
        user_id: null,
        invoiceitems: [{
          name: null,
          quantity: 0,
          rate: 0,
          amount: 0
        }]
      } // staffs: null,
      // customers: null,

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
              try {
                if (_this.$route.params.id != null) {
                  _this.getInvoiceList();
                } // this.getCustomerList();
                // await this.getStaffMemberList();

              } catch (err) {
                _this.$snotify.error(null, err.message);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getInvoiceList: function getInvoiceList() {
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/invoice/list/' + _this2.$route.params.id);

              case 2:
                res = _context2.sent;
                _this2.invoice = res.data.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // async getCustomerList() {
    //     const customerRes = await axios.get('/api/v1/customer/list')
    //     this.customers = customerRes.data.data
    // },
    // async getStaffMemberList() {
    //     const staffRes = await axios.post('/api/v1/staff/member/list' , null)
    //     this.staffs = staffRes.data.data
    // },
    downloadPdf: function downloadPdf(id) {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default()({
                  url: '/api/v1/invoice/download/' + id,
                  method: 'GET',
                  responseType: 'blob',
                  // important
                  headers: {
                    "Authorization": _this3.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 2:
                response = _context3.sent;
                downloadjs__WEBPACK_IMPORTED_MODULE_3___default()(response.data, 'invoice.pdf', 'application/pdf');

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/PaymentInvoice.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/PaymentInvoice.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddInvoice',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueJqueryCalendar: vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      invoice: {
        bill_to: null,
        customer_name: null,
        customer_email: null,
        customer_address: null,
        customer_phone: null,
        invoice_date: moment__WEBPACK_IMPORTED_MODULE_3___default()().format("DD-MM-YYYY"),
        subtotal: 0,
        discount: 0,
        tax: 0,
        total: 0,
        user_id: this.$store.state.init.user.id,
        invoiceitems: [{
          name: null,
          quantity: 0,
          rate: 0,
          amount: 0
        }]
      },
      staffs: null,
      customers: null
    };
  },
  computed: {
    subTotal: function subTotal() {
      var subTotal = 0;
      this.invoice.invoiceitems.forEach(function (invoiceItem) {
        subTotal += invoiceItem.quantity * invoiceItem.rate;
      });
      return subTotal;
    },
    totalVal: function totalVal() {
      var totalVal = 0;
      totalVal = this.subTotal - parseInt(this.invoice.discount) + parseInt(this.invoice.tax);
      return totalVal;
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
              _context.prev = 0;

              if (!(_this.$route.params.id != null)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return _this.getPaymentSubscriptionList();

            case 4:
              _context.next = 6;
              return _this.getStaffMemberList();

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              _this.$snotify.error(null, _context.t0.message);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }))();
  },
  methods: {
    getPaymentSubscriptionList: function getPaymentSubscriptionList() {
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/payment/subscription/' + _this2.$route.params.id);

              case 2:
                res = _context2.sent;
                _this2.invoice.bill_to = res.data.data.user_id;
                _this2.invoice.customer_name = res.data.data.user.first_name + ' ' + res.data.data.user.last_name;
                _this2.invoice.customer_email = res.data.data.user.email;
                _this2.invoice.customer_address = res.data.data.user.address;
                _this2.invoice.customer_phone = res.data.data.user.phone;
                _this2.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_3___default()().format("DD-MM-YYYY");
                _this2.invoice.invoiceitems[0].name = res.data.data.package_name;
                _this2.invoice.invoiceitems[0].quantity = 1;
                _this2.invoice.invoiceitems[0].rate = res.data.data.payment[0].paid_amount;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getStaffMemberList: function getStaffMemberList() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var staffRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/staff/member/list', null);

              case 2:
                staffRes = _context3.sent;
                _this3.staffs = staffRes.data.data;

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
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                res = null;

                _this4.invoice.invoiceitems.forEach(function (invoiceItem) {
                  invoiceItem.amount += invoiceItem.quantity * invoiceItem.rate;
                });

                _this4.invoice.subtotal = _this4.subTotal;
                _this4.invoice.total = _this4.totalVal;
                _context4.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/invoice/create', _this4.invoice);

              case 7:
                res = _context4.sent;

                // if(this.$route.params.id != null) {
                // 	res = await axios.post('/api/v1/invoice/update', this.invoice)
                // } else {
                // 	res = await axios.post('/api/v1/invoice/create', this.invoice)
                // }		
                _this4.$router.push('/invoice-list');

                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);

                _this4.$snotify.error(null, _context4.t0.message);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 11]]);
      }))();
    },
    addRow: function addRow() {
      this.invoice.invoiceitems.push({
        name: null,
        quantity: 0,
        rate: 0,
        amount: 0
      });
    },
    removeRow: function removeRow(index) {
      this.invoice.invoiceitems.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.td-padding-left td[data-v-7a5b5ac7]{\n    padding-left:0px!important;\n    border-top:none!important;\n}\n.td-padding-left[data-v-7a5b5ac7]{\n    border-bottom:1px solid #e9ecef;\n}\n.table thead th[data-v-7a5b5ac7]{\n    border-bottom:1px solid #e9ecef!important;\n    padding-left:0px!important;\n}\n.table th[data-v-7a5b5ac7], .table td[data-v-7a5b5ac7]{\n    border-top:none!important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.table-font[data-v-4cf590ef]{\n    font-size: 20px;\n}\n.table-font td[data-v-4cf590ef]{\n    padding-left: 20px;\n}\n", ""]);
// Exports
module.exports = exports;


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AttendanceTable.vue?vue&type=template&id=6e99ba04&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AttendanceTable.vue?vue&type=template&id=6e99ba04& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        {
          name: "can",
          rawName: "v-can:view__attendance",
          arg: "view__attendance"
        }
      ]
    },
    [
      _c(
        "span",
        { staticClass: "position-relative form-group row ml-1 mb-5" },
        [
          _c(
            "label",
            { staticClass: "mr-3 mt-2", attrs: { for: "attendanceDate" } },
            [_vm._v("Date")]
          ),
          _vm._v(" "),
          _c("VueJqueryCalendar", {
            attrs: {
              "class-name": "form-control",
              "date-format": "dd-mm-yy",
              readonly: true
            },
            on: { change: _vm.changeDate },
            model: {
              value: _vm.attendanceDate,
              callback: function($$v) {
                _vm.attendanceDate = $$v
              },
              expression: "attendanceDate"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "table-responsive" },
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
              _c(
                "th",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.$can("update__attendance"),
                      expression: "$can('update__attendance')"
                    }
                  ]
                },
                [_vm._v("Action")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.$can("update__attendance"),
                      expression: "!$can('update__attendance')"
                    }
                  ]
                },
                [_vm._v("Status")]
              ),
              _vm._v(" "),
              _c("th", [_vm._v("Customer Name")])
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/InvoiceTable.vue?vue&type=template&id=67685450&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/InvoiceTable.vue?vue&type=template&id=67685450& ***!
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
        { name: "can", rawName: "v-can:view__invoice", arg: "view__invoice" }
      ],
      ref: "vueDatatable",
      attrs: { columns: _vm.columns, url: _vm.url },
      on: { gaction: _vm.onAction }
    },
    [
      _c("th", [_vm._v("Invoice #")]),
      _vm._v(" "),
      _c("th", [_vm._v("Client")]),
      _vm._v(" "),
      _c("th", [_vm._v("Date")]),
      _vm._v(" "),
      _c("th", [_vm._v("Total")]),
      _vm._v(" "),
      _c("th", [_vm._v("Generated By")]),
      _vm._v(" "),
      _c(
        "th",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.$can("view__invoice") || _vm.$can("delete__invoice"),
              expression: "$can('view__invoice') || $can('delete__invoice')"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=template&id=7a5b5ac7&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=template&id=7a5b5ac7&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-6" }, [
          _c("div", { staticClass: "position-relative form-group" }, [
            _c("label", { attrs: { for: "to_id" } }, [_vm._v("Bill To")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.invoice.bill_to,
                    expression: "invoice.bill_to"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "bill_to", name: "bill_to" },
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
                        _vm.invoice,
                        "bill_to",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                    function($event) {
                      return _vm.onCustomerSelect()
                    }
                  ]
                }
              },
              _vm._l(_vm.customers, function(customer) {
                return _c(
                  "option",
                  {
                    key: customer.id,
                    domProps: {
                      value: customer.id,
                      selected: _vm.invoice.bill_to === customer.id
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
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("bill_to"),
                    expression: "errors.has('bill_to')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("bill_to")))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "position-relative form-group" }, [
            _c("label", { attrs: { for: "customer_address" } }, [
              _vm._v("Customer Address")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.invoice.customer_address,
                  expression: "invoice.customer_address"
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
                id: "customer_address",
                rows: "2",
                name: "customer_address"
              },
              domProps: { value: _vm.invoice.customer_address },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.invoice, "customer_address", $event.target.value)
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
                    value: _vm.errors.has("customer_address"),
                    expression: "errors.has('customer_address')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("customer_address")))]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "position-relative form-group" },
            [
              _c("label", { attrs: { for: "invoice_date" } }, [
                _vm._v("Invoice Date")
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
                  name: "invoice_date",
                  "date-format": "dd-mm-yy",
                  readonly: true,
                  "class-name": "form-control"
                },
                model: {
                  value: _vm.invoice.invoice_date,
                  callback: function($$v) {
                    _vm.$set(_vm.invoice, "invoice_date", $$v)
                  },
                  expression: "invoice.invoice_date"
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
                      value: _vm.errors.has("invoice_date"),
                      expression: "errors.has('invoice_date')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.errors.first("invoice_date")))]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6" }, [
          _c("div", { staticClass: "position-relative form-group" }, [
            _c("label", { attrs: { for: "customer_email" } }, [
              _vm._v("Customer Email")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.invoice.customer_email,
                  expression: "invoice.customer_email"
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
                id: "customer_email",
                type: "email",
                name: "customer_email"
              },
              domProps: { value: _vm.invoice.customer_email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.invoice, "customer_email", $event.target.value)
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
                    value: _vm.errors.has("customer_email"),
                    expression: "errors.has('customer_email')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("customer_email")))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "position-relative form-group" }, [
            _c("label", { attrs: { for: "customer_phone" } }, [
              _vm._v("Customer Phone")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.invoice.customer_phone,
                  expression: "invoice.customer_phone"
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
                id: "customer_phone",
                type: "text",
                name: "customer_phone"
              },
              domProps: { value: _vm.invoice.customer_phone },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.invoice, "customer_phone", $event.target.value)
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
                    value: _vm.errors.has("customer_phone"),
                    expression: "errors.has('customer_phone')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("customer_phone")))]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table", attrs: { align: "center", width: "100%" } },
        [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Quantity (Each)")]),
              _vm._v(" "),
              _c("th", [
                _vm._v("Rate " + _vm._s(_vm.$store.getters["init/currency"]))
              ]),
              _vm._v(" "),
              _c("th", [
                _vm._v("Amount " + _vm._s(_vm.$store.getters["init/currency"]))
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("Action")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.invoice.invoiceitems, function(invoiceItem, index) {
                return _c(
                  "tr",
                  { key: index, staticClass: "td-padding-left" },
                  [
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: invoiceItem.name,
                            expression: "invoiceItem.name"
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
                          id: "name",
                          type: "text",
                          name: "name",
                          placeholder: "Item Name"
                        },
                        domProps: { value: invoiceItem.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(invoiceItem, "name", $event.target.value)
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
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: invoiceItem.quantity,
                            expression: "invoiceItem.quantity"
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
                          id: "quantity",
                          type: "number",
                          name: "quantity",
                          placeholder: "Item Quantity"
                        },
                        domProps: { value: invoiceItem.quantity },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              invoiceItem,
                              "quantity",
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
                              value: _vm.errors.has("quantity"),
                              expression: "errors.has('quantity')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("quantity")))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: invoiceItem.rate,
                            expression: "invoiceItem.rate"
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
                          id: "rate",
                          type: "number",
                          name: "rate",
                          placeholder: "Item Rate"
                        },
                        domProps: { value: invoiceItem.rate },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(invoiceItem, "rate", $event.target.value)
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
                              value: _vm.errors.has("rate"),
                              expression: "errors.has('rate')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("rate")))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        staticStyle: { border: "none" },
                        attrs: {
                          id: "amount",
                          type: "number",
                          name: "amount",
                          placeholder: "Item Amount",
                          readonly: ""
                        },
                        domProps: {
                          value: invoiceItem.quantity * invoiceItem.rate
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
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.removeRow(index)
                            }
                          }
                        },
                        [_vm._v("Remove")]
                      )
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _c("tr", { staticClass: "td-padding-left" }, [
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.addRow()
                        }
                      }
                    },
                    [_vm._v("Add Item")]
                  )
                ]),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "4" } })
              ]),
              _vm._v(" "),
              _c("tr", { staticClass: "td-padding-left" }, [
                _c("td", { attrs: { colspan: "3" } }),
                _vm._v(" "),
                _c("td", [_vm._v("Subtotal")]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "div",
                    {
                      staticClass: "input-group",
                      staticStyle: { "margin-top": "0px" }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.subTotal,
                            expression: "subTotal"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        staticStyle: { border: "none" },
                        attrs: {
                          id: "subtotal",
                          type: "number",
                          name: "subtotal",
                          readonly: ""
                        },
                        domProps: { value: _vm.subTotal },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.subTotal = $event.target.value
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
                          value: _vm.errors.has("subTotal"),
                          expression: "errors.has('subTotal')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("subTotal")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", { staticClass: "td-padding-left" }, [
                _c("td", { attrs: { colspan: "3" } }),
                _vm._v(" "),
                _c("td", [_vm._v("Discount")]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "div",
                    {
                      staticClass: "input-group",
                      staticStyle: { "margin-top": "0px" }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.discount,
                            expression: "invoice.discount"
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
                          id: "discount",
                          type: "number",
                          name: "discount"
                        },
                        domProps: { value: _vm.invoice.discount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.invoice,
                              "discount",
                              $event.target.value
                            )
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
                          value: _vm.errors.has("discount"),
                          expression: "errors.has('discount')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("discount")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", { staticClass: "td-padding-left" }, [
                _c("td", { attrs: { colspan: "3" } }),
                _vm._v(" "),
                _c("td", [_vm._v("Tax")]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "div",
                    {
                      staticClass: "input-group",
                      staticStyle: { "margin-top": "0px" }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.tax,
                            expression: "invoice.tax"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "tax", type: "number", name: "tax" },
                        domProps: { value: _vm.invoice.tax },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.invoice, "tax", $event.target.value)
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
                          value: _vm.errors.has("tax"),
                          expression: "errors.has('tax')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("tax")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", { staticClass: "td-padding-left" }, [
                _c("td", { attrs: { colspan: "3" } }),
                _vm._v(" "),
                _c("td", [_vm._v("Total")]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "div",
                    {
                      staticClass: "input-group",
                      staticStyle: { "margin-top": "0px" }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.totalVal,
                            expression: "totalVal"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        staticStyle: { border: "none" },
                        attrs: {
                          id: "total",
                          type: "number",
                          name: "total",
                          readonly: ""
                        },
                        domProps: { value: _vm.totalVal },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.totalVal = $event.target.value
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
                          value: _vm.errors.has("totalVal"),
                          expression: "errors.has('totalVal')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("totalVal")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", { staticClass: "td-padding-left" }, [
                _c("td", { attrs: { colspan: "3" } }),
                _vm._v(" "),
                _c("td", [_vm._v("Invoice Generated By")]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoice.user_id,
                          expression: "invoice.user_id"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "user_id", name: "user_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.invoice,
                            "user_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.staffs, function(staff) {
                      return _c(
                        "option",
                        {
                          key: staff.id,
                          domProps: {
                            value: staff.id,
                            selected: _vm.invoice.user_id === staff.id
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(staff.first_name) +
                              " " +
                              _vm._s(staff.last_name) +
                              " "
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("user_id"),
                          expression: "errors.has('user_id')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v("This Staff Member field is required.")]
                  )
                ])
              ])
            ],
            2
          )
        ]
      ),
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
        [_vm._v("SUBMIT")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddInvoice.vue?vue&type=template&id=e6863942&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddInvoice.vue?vue&type=template&id=e6863942& ***!
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
        { name: "can", rawName: "v-can:add__invoice", arg: "add__invoice" }
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
                      "pe-7s-news-paper icon-gradient bg-premium-dark text-danger"
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "heading-font-weight" }, [
                  _vm._v("INVOICE DETAIL")
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body col-sm-12" },
            [
              _c("h5", { staticClass: "card-title" }),
              _vm._v(" "),
              _c("AddInvoiceForm")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AttendanceList.vue?vue&type=template&id=7c46183a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AttendanceList.vue?vue&type=template&id=7c46183a& ***!
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
          rawName: "v-can:view__attendance",
          arg: "view__attendance"
        }
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
                      "pe-7s-news-paper icon-gradient bg-premium-dark text-danger"
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "heading-font-weight" }, [
                  _vm._v("ATTANDANCE LIST")
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body col-sm-12" },
            [_c("AttendanceTable")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceList.vue?vue&type=template&id=55e36268&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/InvoiceList.vue?vue&type=template&id=55e36268& ***!
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
        { name: "can", rawName: "v-can:view__invoice", arg: "view__invoice" }
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
                      "pe-7s-news-paper icon-gradient bg-premium-dark text-danger"
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "heading-font-weight" }, [
                  _vm._v("INVOICE LIST")
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
                    rawName: "v-can:add__invoice",
                    arg: "add__invoice"
                  }
                ],
                staticClass: "align-content-end"
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-alternate-new all-add-new",
                    attrs: { to: "/add-invoice" }
                  },
                  [_vm._v("Add Invoice")]
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
              [_c("InvoiceTable")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceView.vue?vue&type=template&id=4cf590ef&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/InvoiceView.vue?vue&type=template&id=4cf590ef&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        { name: "can", rawName: "v-can:view__invoice", arg: "view__invoice" }
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
                    "pe-7s-news-paper icon-gradient bg-premium-dark text-danger"
                })
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("GENERATE INVOICE")])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm.invoice.billto
          ? _c("div", { staticClass: "main-card mb-3 card" }, [
              _c("div", { staticClass: "card-body col-sm-12" }, [
                _c("h5", { staticClass: "card-title" }),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-4" }, [
                  _c("div", { staticClass: "col-sm-2 offset-sm-10" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c(
                        "h5",
                        {
                          staticStyle: {
                            "text-align": "right",
                            "margin-right": "35px"
                          }
                        },
                        [
                          _c("b", [
                            _vm._v("Invoice #" + _vm._s(_vm.invoice.id))
                          ])
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-4" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("h5", [_vm._v("Bill To")]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v(
                          _vm._s(_vm.invoice.billto.first_name) +
                            " " +
                            _vm._s(_vm.invoice.billto.last_name)
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("h5", [_vm._v("Customer Email")]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.invoice.customer_email))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("h5", [_vm._v("Customer Phone")]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.invoice.customer_phone))])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-4" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("h5", [_vm._v("Customer Address")]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.invoice.customer_address))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("h5", [_vm._v("Invoice Date")]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.invoice.invoice_date))])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  {
                    staticClass: "table",
                    attrs: { align: "center", width: "100%" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Quantity")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Rate")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Amount")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.invoice.invoiceitems, function(
                        invoiceItem,
                        index
                      ) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(invoiceItem.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(invoiceItem.quantity))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(invoiceItem.rate))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(invoiceItem.amount))])
                        ])
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-end" }, [
                  _c("table", { staticClass: "mb-5 table-font" }, [
                    _c("tr", [
                      _c("th", [_vm._v("Subtotal")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.invoice.subtotal))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", [_vm._v("Discount")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.invoice.discount))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", [_vm._v("Tax")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.invoice.tax))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", [_vm._v("Total")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.invoice.total))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", [_vm._v("Generated By")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm.invoice.user.first_name) +
                            " " +
                            _vm._s(_vm.invoice.user.last_name)
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-end" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-outline-alternate-new",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.downloadPdf(_vm.invoice.id)
                        }
                      }
                    },
                    [_vm._v("Download")]
                  )
                ])
              ])
            ])
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/PaymentInvoice.vue?vue&type=template&id=17ba935a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/PaymentInvoice.vue?vue&type=template&id=17ba935a& ***!
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
        { name: "can", rawName: "v-can:add__invoice", arg: "add__invoice" }
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
                    "pe-7s-news-paper icon-gradient bg-premium-dark text-danger"
                })
              ]),
              _vm._v(" "),
              _c("div", [_vm._v("INVOICE DETAIL")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body col-sm-12" }, [
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
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "bill_to" } }, [
                        _vm._v("Bill To")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.customer_name,
                            expression: "invoice.customer_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "customer_name",
                          type: "text",
                          name: "customer_name",
                          required: ""
                        },
                        domProps: { value: _vm.invoice.customer_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.invoice,
                              "customer_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "customer_address" } }, [
                        _vm._v("Customer Address")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.customer_address,
                            expression: "invoice.customer_address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "customer_address",
                          rows: "2",
                          name: "customer_address",
                          required: ""
                        },
                        domProps: { value: _vm.invoice.customer_address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.invoice,
                              "customer_address",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "position-relative form-group" },
                      [
                        _c("label", { attrs: { for: "invoice_date" } }, [
                          _vm._v("Invoice Date")
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
                            name: "invoice_date",
                            "date-format": "dd-mm-yy",
                            readonly: true,
                            "class-name": "form-control"
                          },
                          model: {
                            value: _vm.invoice.invoice_date,
                            callback: function($$v) {
                              _vm.$set(_vm.invoice, "invoice_date", $$v)
                            },
                            expression: "invoice.invoice_date"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "customer_email" } }, [
                        _vm._v("Customer Email")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.customer_email,
                            expression: "invoice.customer_email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "customer_email",
                          type: "email",
                          name: "customer_email",
                          required: ""
                        },
                        domProps: { value: _vm.invoice.customer_email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.invoice,
                              "customer_email",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "customer_phone" } }, [
                        _vm._v("Customer Phone")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.customer_phone,
                            expression: "invoice.customer_phone"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "customer_phone",
                          type: "text",
                          name: "customer_phone",
                          required: ""
                        },
                        domProps: { value: _vm.invoice.customer_phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.invoice,
                              "customer_phone",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  {
                    staticClass: "table",
                    attrs: { align: "center", width: "100%" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Quantity (Each)")]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            "Rate " +
                              _vm._s(_vm.$store.getters["init/currency"])
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            "Amount " +
                              _vm._s(_vm.$store.getters["init/currency"])
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Action")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.invoice.invoiceitems, function(
                          invoiceItem,
                          index
                        ) {
                          return _c("tr", { key: index }, [
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: invoiceItem.name,
                                    expression: "invoiceItem.name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "name",
                                  type: "text",
                                  name: "name",
                                  readonly: "",
                                  placeholder: "Item Name",
                                  required: ""
                                },
                                domProps: { value: invoiceItem.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      invoiceItem,
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: invoiceItem.quantity,
                                    expression: "invoiceItem.quantity"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "quantity",
                                  type: "number",
                                  name: "quantity",
                                  placeholder: "Item Quantity",
                                  required: ""
                                },
                                domProps: { value: invoiceItem.quantity },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      invoiceItem,
                                      "quantity",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: invoiceItem.rate,
                                    expression: "invoiceItem.rate"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "rate",
                                  type: "number",
                                  name: "rate",
                                  placeholder: "Item Rate",
                                  required: ""
                                },
                                domProps: { value: invoiceItem.rate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      invoiceItem,
                                      "rate",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                staticClass: "form-control",
                                staticStyle: { border: "none" },
                                attrs: {
                                  id: "amount",
                                  type: "number",
                                  name: "amount",
                                  placeholder: "Item Amount",
                                  readonly: "",
                                  required: ""
                                },
                                domProps: {
                                  value: invoiceItem.quantity * invoiceItem.rate
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeRow(index)
                                    }
                                  }
                                },
                                [_vm._v("Remove")]
                              )
                            ])
                          ])
                        }),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-alternate-new",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.addRow()
                                  }
                                }
                              },
                              [_vm._v("Add Item")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "3" } }),
                          _vm._v(" "),
                          _c("td", [_vm._v("Subtotal")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              {
                                staticClass: "input-group",
                                staticStyle: { "margin-top": "0px" }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.subTotal,
                                      expression: "subTotal"
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  staticStyle: { border: "none" },
                                  attrs: {
                                    id: "subtotal",
                                    type: "number",
                                    name: "subtotal",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.subTotal },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.subTotal = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "input-group-text",
                                        attrs: { id: "basic-addon2" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$store.getters["init/currency"]
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "3" } }),
                          _vm._v(" "),
                          _c("td", [_vm._v("Discount")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              {
                                staticClass: "input-group",
                                staticStyle: { "margin-top": "0px" }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.invoice.discount,
                                      expression: "invoice.discount"
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
                                    id: "discount",
                                    type: "number",
                                    name: "discount"
                                  },
                                  domProps: { value: _vm.invoice.discount },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.invoice,
                                        "discount",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "input-group-text",
                                        attrs: { id: "basic-addon2" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$store.getters["init/currency"]
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "3" } }),
                          _vm._v(" "),
                          _c("td", [_vm._v("Tax")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              {
                                staticClass: "input-group",
                                staticStyle: { "margin-top": "0px" }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.invoice.tax,
                                      expression: "invoice.tax"
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
                                    id: "tax",
                                    type: "number",
                                    name: "tax"
                                  },
                                  domProps: { value: _vm.invoice.tax },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.invoice,
                                        "tax",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "input-group-text",
                                        attrs: { id: "basic-addon2" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$store.getters["init/currency"]
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "3" } }),
                          _vm._v(" "),
                          _c("td", [_vm._v("Total")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              {
                                staticClass: "input-group",
                                staticStyle: { "margin-top": "0px" }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.totalVal,
                                      expression: "totalVal"
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  staticStyle: { border: "none" },
                                  attrs: {
                                    id: "total",
                                    type: "number",
                                    name: "total",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.totalVal },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.totalVal = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "input-group-text",
                                        attrs: { id: "basic-addon2" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$store.getters["init/currency"]
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "3" } }),
                          _vm._v(" "),
                          _c("td", [_vm._v("Invoice Generated By")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.invoice.user_id,
                                    expression: "invoice.user_id"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "user_id",
                                  name: "user_id",
                                  required: ""
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.invoice,
                                      "user_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.staffs, function(staff) {
                                return _c(
                                  "option",
                                  {
                                    key: staff.id,
                                    domProps: {
                                      value: staff.id,
                                      selected: _vm.invoice.user_id === staff.id
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(staff.first_name) +
                                        " " +
                                        _vm._s(staff.last_name) +
                                        " "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ])
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-alternate-new",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("SUBMIT")]
                  )
                ])
              ]
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

/***/ "./resources/assets/js/components/AttendanceTable.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/AttendanceTable.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttendanceTable_vue_vue_type_template_id_6e99ba04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttendanceTable.vue?vue&type=template&id=6e99ba04& */ "./resources/assets/js/components/AttendanceTable.vue?vue&type=template&id=6e99ba04&");
/* harmony import */ var _AttendanceTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttendanceTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/AttendanceTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttendanceTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttendanceTable_vue_vue_type_template_id_6e99ba04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttendanceTable_vue_vue_type_template_id_6e99ba04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/AttendanceTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/AttendanceTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/AttendanceTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttendanceTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AttendanceTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/AttendanceTable.vue?vue&type=template&id=6e99ba04&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/AttendanceTable.vue?vue&type=template&id=6e99ba04& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceTable_vue_vue_type_template_id_6e99ba04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttendanceTable.vue?vue&type=template&id=6e99ba04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AttendanceTable.vue?vue&type=template&id=6e99ba04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceTable_vue_vue_type_template_id_6e99ba04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceTable_vue_vue_type_template_id_6e99ba04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/InvoiceTable.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/InvoiceTable.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceTable_vue_vue_type_template_id_67685450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceTable.vue?vue&type=template&id=67685450& */ "./resources/assets/js/components/InvoiceTable.vue?vue&type=template&id=67685450&");
/* harmony import */ var _InvoiceTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/InvoiceTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InvoiceTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceTable_vue_vue_type_template_id_67685450___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceTable_vue_vue_type_template_id_67685450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/InvoiceTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/InvoiceTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/InvoiceTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/InvoiceTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/InvoiceTable.vue?vue&type=template&id=67685450&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/InvoiceTable.vue?vue&type=template&id=67685450& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceTable_vue_vue_type_template_id_67685450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceTable.vue?vue&type=template&id=67685450& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/InvoiceTable.vue?vue&type=template&id=67685450&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceTable_vue_vue_type_template_id_67685450___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceTable_vue_vue_type_template_id_67685450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/forms/AddInvoiceForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddInvoiceForm.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddInvoiceForm_vue_vue_type_template_id_7a5b5ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddInvoiceForm.vue?vue&type=template&id=7a5b5ac7&scoped=true& */ "./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=template&id=7a5b5ac7&scoped=true&");
/* harmony import */ var _AddInvoiceForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddInvoiceForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddInvoiceForm_vue_vue_type_style_index_0_id_7a5b5ac7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css& */ "./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddInvoiceForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddInvoiceForm_vue_vue_type_template_id_7a5b5ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddInvoiceForm_vue_vue_type_template_id_7a5b5ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a5b5ac7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/forms/AddInvoiceForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddInvoiceForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_style_index_0_id_7a5b5ac7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=style&index=0&id=7a5b5ac7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_style_index_0_id_7a5b5ac7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_style_index_0_id_7a5b5ac7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_style_index_0_id_7a5b5ac7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_style_index_0_id_7a5b5ac7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_style_index_0_id_7a5b5ac7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=template&id=7a5b5ac7&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=template&id=7a5b5ac7&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_template_id_7a5b5ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddInvoiceForm.vue?vue&type=template&id=7a5b5ac7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddInvoiceForm.vue?vue&type=template&id=7a5b5ac7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_template_id_7a5b5ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoiceForm_vue_vue_type_template_id_7a5b5ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/AddInvoice.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/views/AddInvoice.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddInvoice_vue_vue_type_template_id_e6863942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddInvoice.vue?vue&type=template&id=e6863942& */ "./resources/assets/js/views/AddInvoice.vue?vue&type=template&id=e6863942&");
/* harmony import */ var _AddInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddInvoice.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/AddInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddInvoice_vue_vue_type_template_id_e6863942___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddInvoice_vue_vue_type_template_id_e6863942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/AddInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/AddInvoice.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/views/AddInvoice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/AddInvoice.vue?vue&type=template&id=e6863942&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/AddInvoice.vue?vue&type=template&id=e6863942& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_template_id_e6863942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddInvoice.vue?vue&type=template&id=e6863942& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddInvoice.vue?vue&type=template&id=e6863942&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_template_id_e6863942___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_template_id_e6863942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/AttendanceList.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/AttendanceList.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttendanceList_vue_vue_type_template_id_7c46183a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttendanceList.vue?vue&type=template&id=7c46183a& */ "./resources/assets/js/views/AttendanceList.vue?vue&type=template&id=7c46183a&");
/* harmony import */ var _AttendanceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttendanceList.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/AttendanceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttendanceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttendanceList_vue_vue_type_template_id_7c46183a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttendanceList_vue_vue_type_template_id_7c46183a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/AttendanceList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/AttendanceList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/AttendanceList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttendanceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AttendanceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/AttendanceList.vue?vue&type=template&id=7c46183a&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/AttendanceList.vue?vue&type=template&id=7c46183a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceList_vue_vue_type_template_id_7c46183a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttendanceList.vue?vue&type=template&id=7c46183a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AttendanceList.vue?vue&type=template&id=7c46183a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceList_vue_vue_type_template_id_7c46183a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttendanceList_vue_vue_type_template_id_7c46183a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/InvoiceList.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/views/InvoiceList.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceList_vue_vue_type_template_id_55e36268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceList.vue?vue&type=template&id=55e36268& */ "./resources/assets/js/views/InvoiceList.vue?vue&type=template&id=55e36268&");
/* harmony import */ var _InvoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceList.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/InvoiceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InvoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceList_vue_vue_type_template_id_55e36268___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceList_vue_vue_type_template_id_55e36268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/InvoiceList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/InvoiceList.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/views/InvoiceList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/InvoiceList.vue?vue&type=template&id=55e36268&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/InvoiceList.vue?vue&type=template&id=55e36268& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_template_id_55e36268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceList.vue?vue&type=template&id=55e36268& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceList.vue?vue&type=template&id=55e36268&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_template_id_55e36268___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_template_id_55e36268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/InvoiceView.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/views/InvoiceView.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceView_vue_vue_type_template_id_4cf590ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceView.vue?vue&type=template&id=4cf590ef&scoped=true& */ "./resources/assets/js/views/InvoiceView.vue?vue&type=template&id=4cf590ef&scoped=true&");
/* harmony import */ var _InvoiceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceView.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/InvoiceView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InvoiceView_vue_vue_type_style_index_0_id_4cf590ef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css& */ "./resources/assets/js/views/InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InvoiceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceView_vue_vue_type_template_id_4cf590ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceView_vue_vue_type_template_id_4cf590ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cf590ef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/InvoiceView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/InvoiceView.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/views/InvoiceView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/views/InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_style_index_0_id_4cf590ef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceView.vue?vue&type=style&index=0&id=4cf590ef&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_style_index_0_id_4cf590ef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_style_index_0_id_4cf590ef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_style_index_0_id_4cf590ef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_style_index_0_id_4cf590ef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_style_index_0_id_4cf590ef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/views/InvoiceView.vue?vue&type=template&id=4cf590ef&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/views/InvoiceView.vue?vue&type=template&id=4cf590ef&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_template_id_4cf590ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceView.vue?vue&type=template&id=4cf590ef&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/InvoiceView.vue?vue&type=template&id=4cf590ef&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_template_id_4cf590ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceView_vue_vue_type_template_id_4cf590ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/PaymentInvoice.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/PaymentInvoice.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentInvoice_vue_vue_type_template_id_17ba935a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentInvoice.vue?vue&type=template&id=17ba935a& */ "./resources/assets/js/views/PaymentInvoice.vue?vue&type=template&id=17ba935a&");
/* harmony import */ var _PaymentInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentInvoice.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/PaymentInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentInvoice_vue_vue_type_template_id_17ba935a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaymentInvoice_vue_vue_type_template_id_17ba935a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/PaymentInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/PaymentInvoice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/PaymentInvoice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/PaymentInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/PaymentInvoice.vue?vue&type=template&id=17ba935a&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/PaymentInvoice.vue?vue&type=template&id=17ba935a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInvoice_vue_vue_type_template_id_17ba935a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentInvoice.vue?vue&type=template&id=17ba935a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/PaymentInvoice.vue?vue&type=template&id=17ba935a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInvoice_vue_vue_type_template_id_17ba935a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInvoice_vue_vue_type_template_id_17ba935a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);