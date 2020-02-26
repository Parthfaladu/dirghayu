(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice"],{

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
    return {
      columns: [{
        data: 'id',
        name: 'id'
      }, {
        data: function data(_data) {
          return _data.billto.first_name + ' ' + _data.billto.last_name;
        },
        name: 'bill_to'
      }, {
        data: 'invoice_date',
        name: 'invoice_date'
      }, {
        data: 'total',
        name: 'total'
      }, {
        data: function data(_data2) {
          return _data2.user.first_name + ' ' + _data2.user.last_name;
        },
        name: 'user_id'
      }, {
        data: function data(_data3) {
          return "<button class='btn btn-primary' data-g-action='view' data-g-actiondata=" + _data3.id + ">Update</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata=" + _data3.id + ">Delete</button>";
        },
        name: 'action'
      }],
      url: '/api/v1/invoice/list'
    };
  },
  methods: {
    onAction: function () {
      var _onAction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(action) {
        var invoiceId, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (action.action === 'view') {
                  this.$router.push('/update-invoice/' + action.data); //console.log(action.data);
                }

                if (!(action.action === 'delete')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 2;
                invoiceId = action.data;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/invoice/delete', {
                  id: invoiceId
                }, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 6:
                res = _context.sent;
                this.$snotify.success(null, res.data.message);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                this.$snotify.error(null, _context.t0.message);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function onAction(_x) {
        return _onAction.apply(this, arguments);
      }

      return onAction;
    }()
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");


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
      totalVal = this.subTotal + parseInt(this.invoice.discount) + parseInt(this.invoice.tax);
      return totalVal;
    }
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var id, res, customerRes, staffRes;
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/invoice/list/' + id, {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 5:
              res = _context.sent;
              this.invoice = res.data.data;

            case 7:
              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/customer/list', {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 9:
              customerRes = _context.sent;
              this.customers = customerRes.data.data;
              _context.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/staff/member/list', null, {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 13:
              staffRes = _context.sent;
              this.staffs = staffRes.data.data;
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              this.$snotify.error(null, _context.t0.message);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 17]]);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    submitForm: function () {
      var _submitForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!this.invoice) {
                  _context2.next = 16;
                  break;
                }

                res = null;
                this.invoice.invoiceitems.forEach(function (invoiceItem) {
                  invoiceItem.amount += invoiceItem.quantity * invoiceItem.rate;
                });
                this.invoice.subtotal = this.subTotal;
                this.invoice.total = this.totalVal;

                if (!(this.$route.params.id != null)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/invoice/update', this.invoice, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 9:
                res = _context2.sent;
                _context2.next = 15;
                break;

              case 12:
                _context2.next = 14;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/invoice/create', this.invoice, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 14:
                res = _context2.sent;

              case 15:
                if (res.status == "success") {
                  this.resetForm();
                  this.$router.push('/invoice-list');
                  this.$snotify.success(null, res.data.message);
                }

              case 16:
                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](0);
                this.$snotify.error(null, _context2.t0.message);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 18]]);
      }));

      function submitForm() {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }(),
    resetForm: function resetForm() {
      this.invoice = null;
      this.invoice.invoiceitems = null;
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InvoiceList',
  components: {
    InvoiceTable: _components_InvoiceTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    console.log('mounted');
    this.$snotify.success(null, 'Example body content');
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddInvoice',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      invoice: {
        bill_to: null,
        customer_name: null,
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
      totalVal = this.subTotal + parseInt(this.invoice.discount) + parseInt(this.invoice.tax);
      return totalVal;
    }
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var moment, id, res, staffRes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(this.$route.params.id != null)) {
                _context.next = 17;
                break;
              }

              moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
              id = this.$route.params.id;
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/payment/subscription/' + id, {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 6:
              res = _context.sent;
              this.invoice.bill_to = res.data.data.user_id;
              this.invoice.customer_name = res.data.data.user.first_name + ' ' + res.data.data.user.last_name;
              this.invoice.customer_email = res.data.data.user.email;
              this.invoice.customer_address = res.data.data.user.address;
              this.invoice.customer_phone = res.data.data.user.phone;
              this.invoice.invoice_date = moment().format("YYYY-MM-DD");
              this.invoice.invoiceitems[0].name = res.data.data["package"].name;
              this.invoice.invoiceitems[0].quantity = 1;
              this.invoice.invoiceitems[0].rate = res.data.data["package"].price;
              console.log(this.invoice);

            case 17:
              _context.next = 19;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/staff/member/list', null, {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 19:
              staffRes = _context.sent;
              this.staffs = staffRes.data.data;
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              this.$snotify.error(null, _context.t0.message);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 23]]);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    submitForm: function () {
      var _submitForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!this.invoice) {
                  _context2.next = 16;
                  break;
                }

                res = null;
                this.invoice.invoiceitems.forEach(function (invoiceItem) {
                  invoiceItem.amount += invoiceItem.quantity * invoiceItem.rate;
                });
                this.invoice.subtotal = this.subTotal;
                this.invoice.total = this.totalVal;

                if (!(this.$route.params.id != null)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/invoice/update', this.invoice, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 9:
                res = _context2.sent;
                _context2.next = 15;
                break;

              case 12:
                _context2.next = 14;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/invoice/create', this.invoice, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 14:
                res = _context2.sent;

              case 15:
                if (res.status == "success") {
                  this.resetForm();
                  this.$router.push('/invoice-list');
                  this.$snotify.success(null, res.data.message);
                }

              case 16:
                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](0);
                this.$snotify.error(null, _context2.t0.message);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 18]]);
      }));

      function submitForm() {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }(),
    resetForm: function resetForm() {
      this.invoice = null;
      this.invoice.invoiceitems = null;
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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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
      attrs: { columns: _vm.columns, url: _vm.url },
      on: { gaction: _vm.onAction }
    },
    [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Client")]),
      _vm._v(" "),
      _c("th", [_vm._v("Date")]),
      _vm._v(" "),
      _c("th", [_vm._v("Total")]),
      _vm._v(" "),
      _c("th", [_vm._v("Generated By")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ]
  )
}
var staticRenderFns = []
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
                    _c("label", { attrs: { for: "to_id" } }, [
                      _vm._v("Bill To")
                    ]),
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
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "bill_to", id: "bill_to", required: "" },
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
                              "bill_to",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        rows: "2",
                        name: "customer_address",
                        id: "customer_address",
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
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "invoice_date" } }, [
                      _vm._v("Invoice Date")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoice.invoice_date,
                          expression: "invoice.invoice_date"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "invoice_date",
                        id: "invoice_date",
                        placeholder: "yyyy-mm-dd",
                        required: ""
                      },
                      domProps: { value: _vm.invoice.invoice_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.invoice,
                            "invoice_date",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
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
                        type: "email",
                        name: "customer_email",
                        id: "customer_email",
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
                        type: "text",
                        name: "customer_phone",
                        id: "customer_phone",
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
                      _c("th", [_vm._v("Quantity")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Rate")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Amount")]),
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
                                type: "text",
                                name: "name",
                                id: "name",
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
                                type: "number",
                                name: "quantity",
                                id: "quantity",
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
                                type: "number",
                                name: "rate",
                                id: "rate",
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
                                type: "number",
                                name: "amount",
                                id: "amount",
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
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "3" } }),
                        _vm._v(" "),
                        _c("td", [_vm._v("Subtotal")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.subTotal,
                                expression: "subTotal"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { border: "none" },
                            attrs: {
                              type: "number",
                              name: "subtotal",
                              id: "subtotal",
                              readonly: "",
                              required: ""
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
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "3" } }),
                        _vm._v(" "),
                        _c("td", [_vm._v("Discount")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.invoice.discount,
                                expression: "invoice.discount"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "number",
                              name: "discount",
                              id: "discount",
                              required: ""
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
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "3" } }),
                        _vm._v(" "),
                        _c("td", [_vm._v("Tax")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.invoice.tax,
                                expression: "invoice.tax"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "number",
                              name: "tax",
                              id: "tax",
                              required: ""
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
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "3" } }),
                        _vm._v(" "),
                        _c("td", [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.totalVal,
                                expression: "totalVal"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { border: "none" },
                            attrs: {
                              type: "number",
                              name: "total",
                              id: "total",
                              readonly: "",
                              required: ""
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
                          })
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
                                name: "user_id",
                                id: "user_id",
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
            _c("div", [_vm._v("INVOICE LIST")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _c("div", { staticClass: "card-body col-sm-12" }, [
          _c(
            "h5",
            { staticClass: "card-title" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-info mb-5",
                  attrs: { to: "/add-invoice" }
                },
                [_vm._v("Add Invoice")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "table-responsive" },
            [_c("InvoiceTable")],
            1
          )
        ])
      ])
    ])
  ])
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
                    _c("label", { attrs: { for: "to_id" } }, [
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
                        type: "text",
                        name: "customer_name",
                        id: "customer_name",
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
                        rows: "2",
                        name: "customer_address",
                        id: "customer_address",
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
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "invoice_date" } }, [
                      _vm._v("Invoice Date")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoice.invoice_date,
                          expression: "invoice.invoice_date"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "invoice_date",
                        id: "invoice_date",
                        placeholder: "yyyy-mm-dd",
                        required: ""
                      },
                      domProps: { value: _vm.invoice.invoice_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.invoice,
                            "invoice_date",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
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
                        type: "email",
                        name: "customer_email",
                        id: "customer_email",
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
                        type: "text",
                        name: "customer_phone",
                        id: "customer_phone",
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
                      _c("th", [_vm._v("Quantity")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Rate")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Amount")]),
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
                                type: "text",
                                name: "name",
                                id: "name",
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
                                type: "number",
                                name: "quantity",
                                id: "quantity",
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
                                type: "number",
                                name: "rate",
                                id: "rate",
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
                                type: "number",
                                name: "amount",
                                id: "amount",
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
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "3" } }),
                        _vm._v(" "),
                        _c("td", [_vm._v("Subtotal")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.subTotal,
                                expression: "subTotal"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { border: "none" },
                            attrs: {
                              type: "number",
                              name: "subtotal",
                              id: "subtotal",
                              readonly: "",
                              required: ""
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
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "3" } }),
                        _vm._v(" "),
                        _c("td", [_vm._v("Discount")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.invoice.discount,
                                expression: "invoice.discount"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "number",
                              name: "discount",
                              id: "discount",
                              required: ""
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
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "3" } }),
                        _vm._v(" "),
                        _c("td", [_vm._v("Tax")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.invoice.tax,
                                expression: "invoice.tax"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "number",
                              name: "tax",
                              id: "tax",
                              required: ""
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
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { colspan: "3" } }),
                        _vm._v(" "),
                        _c("td", [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.totalVal,
                                expression: "totalVal"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { border: "none" },
                            attrs: {
                              type: "number",
                              name: "total",
                              id: "total",
                              readonly: "",
                              required: ""
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
                          })
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
                                name: "user_id",
                                id: "user_id",
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