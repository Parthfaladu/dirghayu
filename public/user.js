(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddCustomer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddCustomer.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddCustomer',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      customer: {
        branchId: 1,
        gender: "female",
        packageId: null,
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
        interestedArea: null,
        phone: null,
        address: null,
        city: null,
        state: null,
        zipcode: null,
        amount: null,
        startDate: null,
        duration: 0,
        endDate: null,
        trialDays: 0,
        remark: null,
        profileImage: null
      },
      packages: null,
      branches: null,
      profile_img_path: null,
      showPreview: false
    };
  },
  computed: {
    endDate: function endDate() {
      var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

      var endDate = null;
      var currentDate = moment(this.customer.startDate);
      endDate = moment(currentDate).add(this.customer.duration, 'M').endOf('month').format('YYYY-MM-DD');
      return endDate;
    }
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, branchRes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/package/list', {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 3:
              res = _context.sent;
              this.packages = res.data.data;
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/branch/list', {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 7:
              branchRes = _context.sent;
              this.branches = branchRes.data.data;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              this.$snotify.error(null, _context.t0.message);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 11]]);
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
        var res, customerData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!this.customer) {
                  _context2.next = 36;
                  break;
                }

                res = null;
                customerData = new FormData();
                customerData.append('branchId', this.customer.branchId);
                customerData.append('gender', this.customer.gender);
                customerData.append('packageId', this.customer.packageId);
                customerData.append('firstName', this.customer.firstName);
                customerData.append('lastName', this.customer.lastName);
                customerData.append('email', this.customer.email);
                customerData.append('password', this.customer.password);
                customerData.append('dob', this.customer.dob);
                customerData.append('height', this.customer.height);
                customerData.append('weight', this.customer.weight);
                customerData.append('chest', this.customer.chest);
                customerData.append('waist', this.customer.waist);
                customerData.append('thigh', this.customer.thigh);
                customerData.append('arms', this.customer.arms);
                customerData.append('fat', this.customer.fat);
                customerData.append('interestedArea', this.customer.interestedArea);
                customerData.append('phone', this.customer.phone);
                customerData.append('address', this.customer.address);
                customerData.append('city', this.customer.city);
                customerData.append('state', this.customer.state);
                customerData.append('zipcode', this.customer.zipcode);
                customerData.append('amount', this.customer.amount);
                customerData.append('startDate', this.customer.startDate);
                customerData.append('duration', this.customer.duration);
                customerData.append('endDate', this.endDate);
                customerData.append('trialDays', this.customer.trialDays);
                customerData.append('remark', this.customer.remark);
                customerData.append('profileImage', this.customer.profileImage);
                _context2.next = 34;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/customer/create', customerData, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization,
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 34:
                res = _context2.sent;

                if (res.data.status == "success") {
                  this.resetForm();
                  this.$router.push('/customer-list');
                  this.$snotify.success(null, res.message);
                }

              case 36:
                _context2.next = 41;
                break;

              case 38:
                _context2.prev = 38;
                _context2.t0 = _context2["catch"](0);
                this.$snotify.error(null, _context2.t0.message);

              case 41:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 38]]);
      }));

      function submitForm() {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }(),
    resetForm: function resetForm() {
      this.customer = null;
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
      var _this = this;

      this.packages.forEach(function (packageDetail) {
        if (packageDetail.id == event.target.value) {
          _this.customer.amount = packageDetail.price;
          _this.customer.duration = packageDetail.duration;
        }
      });
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
                    _c("label", { attrs: { for: "branchId" } }, [
                      _vm._v("Branch")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.customer.branchId,
                            expression: "customer.branchId"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "branchId",
                          id: "branchId",
                          required: ""
                        },
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
                              _vm.customer,
                              "branchId",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.branches, function(branch) {
                        return _c(
                          "option",
                          {
                            key: branch.id,
                            domProps: {
                              value: branch.id,
                              selected: _vm.customer.branchId === branch.id
                            }
                          },
                          [_vm._v(_vm._s(branch.name))]
                        )
                      }),
                      0
                    )
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "firstName",
                        id: "firstName",
                        required: ""
                      },
                      domProps: { value: _vm.customer.firstName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
                            "firstName",
                            $event.target.value
                          )
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "lastName",
                        id: "lastName",
                        required: ""
                      },
                      domProps: { value: _vm.customer.lastName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
                            "lastName",
                            $event.target.value
                          )
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        name: "email",
                        id: "name",
                        required: ""
                      },
                      domProps: { value: _vm.customer.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "email", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        name: "password",
                        id: "password",
                        required: ""
                      },
                      domProps: { value: _vm.customer.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
                            "password",
                            $event.target.value
                          )
                        }
                      }
                    })
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
                                value: _vm.customer.gender,
                                expression: "customer.gender"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "defaultGroupExample1",
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
                                value: _vm.customer.gender,
                                expression: "customer.gender"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "defaultGroupExample2",
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
                                return _vm.$set(
                                  _vm.customer,
                                  "gender",
                                  "female"
                                )
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
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "dob" } }, [
                      _vm._v("Date Of Birth")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer.dob,
                          expression: "customer.dob"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "dob",
                        id: "dob",
                        required: ""
                      },
                      domProps: { value: _vm.customer.dob },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "dob", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "profile_img_path" } }, [
                      _vm._v("Profile Photo")
                    ]),
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
                        type: "file",
                        accept: "image/*",
                        name: "profilePath",
                        id: "profilePath"
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "height",
                        id: "height",
                        placeholder: "150",
                        required: ""
                      },
                      domProps: { value: _vm.customer.height },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "height", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "weight",
                        id: "weight",
                        placeholder: "50",
                        required: ""
                      },
                      domProps: { value: _vm.customer.weight },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "weight", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "chest",
                        id: "chest",
                        placeholder: "135",
                        required: ""
                      },
                      domProps: { value: _vm.customer.chest },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "chest", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "waist",
                        id: "waist",
                        placeholder: "140",
                        required: ""
                      },
                      domProps: { value: _vm.customer.waist },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "waist", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thigh",
                        id: "thigh",
                        placeholder: "58",
                        required: ""
                      },
                      domProps: { value: _vm.customer.thigh },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "thigh", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "arms",
                        id: "arms",
                        placeholder: "180",
                        required: ""
                      },
                      domProps: { value: _vm.customer.arms },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "arms", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fat",
                        id: "fat",
                        placeholder: "40",
                        required: ""
                      },
                      domProps: { value: _vm.customer.fat },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "fat", $event.target.value)
                        }
                      }
                    })
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
                        rows: "2",
                        name: "interestedArea",
                        id: "interestedArea",
                        required: ""
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "phone",
                        id: "phone",
                        required: ""
                      },
                      domProps: { value: _vm.customer.phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "phone", $event.target.value)
                        }
                      }
                    })
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
                          value: _vm.customer.address,
                          expression: "customer.address"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        rows: "2",
                        name: "address",
                        id: "address",
                        required: ""
                      },
                      domProps: { value: _vm.customer.address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "address", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", name: "city", id: "city" },
                      domProps: { value: _vm.customer.city },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "city", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", name: "state", id: "state" },
                      domProps: { value: _vm.customer.state },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "state", $event.target.value)
                        }
                      }
                    })
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
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "zipcode",
                        id: "zipcode",
                        required: ""
                      },
                      domProps: { value: _vm.customer.zipcode },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "zipcode", $event.target.value)
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
                            value: _vm.customer.packageId,
                            expression: "customer.packageId"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "packageId",
                          id: "packageId",
                          required: ""
                        },
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
                                _vm.customer.packageId === packageData.id
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
                    _c("label", { attrs: { for: "amount" } }, [
                      _vm._v("Amount")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer.amount,
                          expression: "customer.amount"
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
                      domProps: { value: _vm.customer.amount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.customer, "amount", $event.target.value)
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
                          value: _vm.customer.startDate,
                          expression: "customer.startDate"
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
                      domProps: { value: _vm.customer.startDate },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
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
                          value: _vm.customer.duration,
                          expression: "customer.duration"
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
                      domProps: { value: _vm.customer.duration },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
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
                          value: _vm.endDate,
                          expression: "endDate"
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
                      domProps: { value: _vm.endDate },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.endDate = $event.target.value
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
                          value: _vm.customer.trialDays,
                          expression: "customer.trialDays"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "trialDays",
                        id: "trialDays"
                      },
                      domProps: { value: _vm.customer.trialDays },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.customer,
                            "trialDays",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "remark" } }, [
                      _vm._v("Remark")
                    ]),
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
                      attrs: { rows: "2", name: "remark", id: "remark" },
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
            _c("div", { staticClass: "text-center mb-4 mt-3 col-sm-12" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
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
  ])
}
var staticRenderFns = []
render._withStripped = true



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



/***/ })

}]);