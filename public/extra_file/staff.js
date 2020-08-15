(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StaffMemberTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/StaffMemberTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
  name: 'StaffMemberTable',
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
          var user = '';

          if (_data.photo_url) {
            user += "<img src=".concat(_data.photo_url, " width='50px' class='mr-3'>");
          }

          user += "".concat(_data.first_name, " ").concat(_data.last_name);
          return user;
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
        data: function data(_data2) {
          if (_data2.roles.length > 0) {
            return _data2.roles[0].name;
          }

          return null;
        },
        name: 'role',
        width: "100px"
      }, {
        data: 'gender',
        name: 'gender',
        width: "80px"
      }, {
        data: function data(_data3) {
          var action = "";

          if (_this.$can('update__staff_member')) {
            action += "<button class='btn btn-outline-alternate' data-g-action='view' data-g-actiondata=" + _data3.id + "><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> <button class='btn btn-outline-warning' data-g-action='status' data-g-actiondata=" + _data3.id + "><i class='fas fa-toggle-on'></i> ";

            if (_data3.is_active == 1) {
              action += "<span class='button-text'>Active</span>";
            } else {
              action += "<span class='button-text'>In Active</span>";
            }
          }

          if (_this.$can('delete__staff_member')) {
            action += " </button> <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata=" + _data3.id + "><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
          }

          return action;
        },
        name: 'action',
        width: "250px"
      }],
      url: '/api/v1/staff/member/list',
      type: 'POST'
    };
  },
  methods: {
    onAction: function onAction(action) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, _res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (action.action === 'view') {
                  _this2.$router.push('/update-staff-member/' + action.data);
                }

                if (!(action.action === 'delete')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/v1/staff/member/' + action.data);

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
                if (!(action.action === 'status')) {
                  _context.next = 25;
                  break;
                }

                _context.prev = 14;
                _context.next = 17;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/staff/member/status', {
                  id: action.data
                });

              case 17:
                _res = _context.sent;

                _this2.$refs.vueDatatable.draw();

                _this2.$snotify.success(null, _res.data.message);

                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t1 = _context["catch"](14);

                _this2.$snotify.error(null, _context.t1.message);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10], [14, 22]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-jquery-calendar */ "./node_modules/vue-jquery-calendar/dist/VueJqueryCalendar.esm.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddStaffMemberForm',
  components: {
    VueJqueryCalendar: vue_jquery_calendar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      staff: {
        firstName: null,
        lastName: null,
        password: null,
        phone: null,
        dob: null,
        gender: 'female',
        address: null,
        email: null,
        roleId: null,
        profileImage: ''
      },
      profile_img_path: null
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

              if (!(_this.$route.params.id != null)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return _this.getStaffMemberList();

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
    getStaffMemberList: function getStaffMemberList() {
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/staff/member/' + _this2.$route.params.id);

              case 2:
                res = _context2.sent;
                _this2.staff = res.data.data;
                _this2.profile_img_path = _this2.staff.photoUrl;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    submitForm: function submitForm() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var result, res, data;
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
                data = new FormData();
                data.append('firstName', _this3.staff.firstName);
                data.append('lastName', _this3.staff.lastName);
                data.append('phone', _this3.staff.phone);
                data.append('dob', _this3.staff.dob);
                data.append('gender', _this3.staff.gender);
                data.append('address', _this3.staff.address);
                data.append('email', _this3.staff.email);
                data.append('roleId', _this3.staff.roleId);
                data.append('profileImage', _this3.staff.profileImage);

                if (!(_this3.$route.params.id != null)) {
                  _context3.next = 25;
                  break;
                }

                data.append('memberId', _this3.$route.params.id);
                _context3.next = 21;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/staff/member/update', data, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 21:
                res = _context3.sent;

                _this3.$snotify.success(null, res.data.message);

                _context3.next = 30;
                break;

              case 25:
                data.append('password', _this3.staff.password);
                _context3.next = 28;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/staff/member', data, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 28:
                res = _context3.sent;

                _this3.$router.push('/staff-member-list');

              case 30:
                _context3.next = 35;
                break;

              case 32:
                _context3.prev = 32;
                _context3.t0 = _context3["catch"](0);

                _this3.$snotify.error(null, _context3.t0.message);

              case 35:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 32]]);
      }))();
    },
    onImageUpload: function onImageUpload() {
      this.staff.profileImage = this.$refs.profilePath.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.profile_img_path = reader.result;
      }.bind(this), false);

      if (this.staff.profileImage) {
        //   if ( /\.(jpe?g|png|gif)$/i.test( this.staff.profileImage.name ) ) {
        reader.readAsDataURL(this.staff.profileImage); //   }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddStaffMember.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddStaffMember.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");
/* harmony import */ var _components_forms_AddStaffMemberForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/forms/AddStaffMemberForm */ "./resources/assets/js/components/forms/AddStaffMemberForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AddStaffMember',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddStaffMemberForm: _components_forms_AddStaffMemberForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/StaffMemberList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/StaffMemberList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_StaffMemberTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/StaffMemberTable.vue */ "./resources/assets/js/components/StaffMemberTable.vue");
/* harmony import */ var _layouts_DashboardPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/DashboardPage.vue */ "./resources/assets/js/layouts/DashboardPage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'StaffMemberList',
  components: {
    StaffMemberTable: _components_StaffMemberTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StaffMemberTable.vue?vue&type=template&id=71ffca8b&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/StaffMemberTable.vue?vue&type=template&id=71ffca8b& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        {
          name: "can",
          rawName: "v-can:view__staff_member",
          arg: "view__staff_member"
        }
      ],
      ref: "vueDatatable",
      attrs: { columns: _vm.columns, url: _vm.url, type: _vm.type },
      on: { gaction: _vm.onAction }
    },
    [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Email address")]),
      _vm._v(" "),
      _c("th", [_vm._v("Phone")]),
      _vm._v(" "),
      _c("th", [_vm._v("Role")]),
      _vm._v(" "),
      _c("th", [_vm._v("Gender")]),
      _vm._v(" "),
      _c(
        "th",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                _vm.$can("update__staff_member") ||
                _vm.$can("delete__staff_member"),
              expression:
                "$can('update__staff_member') || $can('delete__staff_member')"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=template&id=5487a598&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=template&id=5487a598& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      attrs: { enctype: "multipart/form-data" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submitForm()
        }
      }
    },
    [
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "roleId" } }, [_vm._v("Staff Role")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.staff.roleId,
                expression: "staff.roleId"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            staticClass: "form-control",
            attrs: { id: "roleId", name: "roleId" },
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
                  _vm.staff,
                  "roleId",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _c(
              "option",
              { attrs: { disabled: "" }, domProps: { value: null } },
              [_vm._v("Select role")]
            ),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("Manager")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "3" } }, [_vm._v("Staff Member")])
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
                value: _vm.errors.has("roleId"),
                expression: "errors.has('roleId')"
              }
            ],
            staticClass: "text-danger"
          },
          [_vm._v("The staff role field is required.")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "firstName" } }, [_vm._v("First Name")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.staff.firstName,
              expression: "staff.firstName"
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
          domProps: { value: _vm.staff.firstName },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.staff, "firstName", $event.target.value)
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
        _c("label", { attrs: { for: "lastName" } }, [_vm._v("Last Name")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.staff.lastName,
              expression: "staff.lastName"
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
          domProps: { value: _vm.staff.lastName },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.staff, "lastName", $event.target.value)
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
              value: _vm.staff.email,
              expression: "staff.email"
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
          domProps: { value: _vm.staff.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.staff, "email", $event.target.value)
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
      !this.$route.params.id
        ? _c("div", { staticClass: "position-relative form-group" }, [
            _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.staff.password,
                  expression: "staff.password"
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
              domProps: { value: _vm.staff.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.staff, "password", $event.target.value)
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
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "phone" } }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.staff.phone,
              expression: "staff.phone"
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
          domProps: { value: _vm.staff.phone },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.staff, "phone", $event.target.value)
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
      _c(
        "div",
        { staticClass: "position-relative form-group" },
        [
          _c("label", { attrs: { for: "dob" } }, [_vm._v("Date Of Birth")]),
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
              value: _vm.staff.dob,
              callback: function($$v) {
                _vm.$set(_vm.staff, "dob", $$v)
              },
              expression: "staff.dob"
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
        _c("label", { attrs: { for: "gender" } }, [_vm._v("Gender")]),
        _vm._v(" "),
        _c("div", { staticClass: "ml-1 row" }, [
          _c("div", { staticClass: "custom-control custom-radio" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.staff.gender,
                  expression: "staff.gender"
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
                checked: _vm.staff.gender === "male",
                checked: _vm._q(_vm.staff.gender, "male")
              },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.staff, "gender", "male")
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
                  value: _vm.staff.gender,
                  expression: "staff.gender"
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
                checked: _vm.staff.gender === "female",
                checked: _vm._q(_vm.staff.gender, "female")
              },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.staff, "gender", "female")
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
        _c("label", { attrs: { for: "address" } }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.staff.address,
              expression: "staff.address"
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
          domProps: { value: _vm.staff.address },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.staff, "address", $event.target.value)
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
        _c("label", { attrs: { for: "profile_img_path" } }, [
          _vm._v("Profile Photo")
        ]),
        _c("br"),
        _vm._v(" "),
        _vm.profile_img_path
          ? _c("img", {
              staticStyle: { border: "1px solid #cac2c2" },
              attrs: { src: _vm.profile_img_path, width: "25%" }
            })
          : _vm._e(),
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
        [_vm._v("SUBMIT")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddStaffMember.vue?vue&type=template&id=3cf6d368&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddStaffMember.vue?vue&type=template&id=3cf6d368& ***!
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
          rawName: "v-can:add__staff_member",
          arg: "add__staff_member"
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
              _c("div", [_vm._v("STAFF MEMBER DETAIL")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body col-sm-6 offset-sm-3" },
            [
              _c("h5", { staticClass: "card-title" }),
              _vm._v(" "),
              _c("AddStaffMemberForm")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/StaffMemberList.vue?vue&type=template&id=cc6f0d56&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/StaffMemberList.vue?vue&type=template&id=cc6f0d56& ***!
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
    "DashboardPage",
    {
      directives: [
        {
          name: "can",
          rawName: "v-can:view__staff_member",
          arg: "view__staff_member"
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
              _c("div", [_vm._v("STAFF MEMBER LIST")])
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
                    rawName: "v-can:add__staff_member",
                    arg: "add__staff_member"
                  }
                ],
                staticClass: "card-title mt-4"
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-primary mb-5 pull-right",
                    attrs: { to: "/add-staff-member" }
                  },
                  [_vm._v("Add New Staff")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive" },
              [_c("StaffMemberTable")],
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

/***/ "./resources/assets/js/components/StaffMemberTable.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/StaffMemberTable.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StaffMemberTable_vue_vue_type_template_id_71ffca8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaffMemberTable.vue?vue&type=template&id=71ffca8b& */ "./resources/assets/js/components/StaffMemberTable.vue?vue&type=template&id=71ffca8b&");
/* harmony import */ var _StaffMemberTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffMemberTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/StaffMemberTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StaffMemberTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StaffMemberTable_vue_vue_type_template_id_71ffca8b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StaffMemberTable_vue_vue_type_template_id_71ffca8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/StaffMemberTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/StaffMemberTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/StaffMemberTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StaffMemberTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StaffMemberTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/StaffMemberTable.vue?vue&type=template&id=71ffca8b&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/StaffMemberTable.vue?vue&type=template&id=71ffca8b& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberTable_vue_vue_type_template_id_71ffca8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StaffMemberTable.vue?vue&type=template&id=71ffca8b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/StaffMemberTable.vue?vue&type=template&id=71ffca8b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberTable_vue_vue_type_template_id_71ffca8b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberTable_vue_vue_type_template_id_71ffca8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/forms/AddStaffMemberForm.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddStaffMemberForm.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddStaffMemberForm_vue_vue_type_template_id_5487a598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddStaffMemberForm.vue?vue&type=template&id=5487a598& */ "./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=template&id=5487a598&");
/* harmony import */ var _AddStaffMemberForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddStaffMemberForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddStaffMemberForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddStaffMemberForm_vue_vue_type_template_id_5487a598___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddStaffMemberForm_vue_vue_type_template_id_5487a598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/forms/AddStaffMemberForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMemberForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddStaffMemberForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMemberForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=template&id=5487a598&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=template&id=5487a598& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMemberForm_vue_vue_type_template_id_5487a598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddStaffMemberForm.vue?vue&type=template&id=5487a598& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddStaffMemberForm.vue?vue&type=template&id=5487a598&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMemberForm_vue_vue_type_template_id_5487a598___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMemberForm_vue_vue_type_template_id_5487a598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/AddStaffMember.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/AddStaffMember.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddStaffMember_vue_vue_type_template_id_3cf6d368___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddStaffMember.vue?vue&type=template&id=3cf6d368& */ "./resources/assets/js/views/AddStaffMember.vue?vue&type=template&id=3cf6d368&");
/* harmony import */ var _AddStaffMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddStaffMember.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/AddStaffMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddStaffMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddStaffMember_vue_vue_type_template_id_3cf6d368___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddStaffMember_vue_vue_type_template_id_3cf6d368___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/AddStaffMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/AddStaffMember.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/AddStaffMember.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddStaffMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddStaffMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/AddStaffMember.vue?vue&type=template&id=3cf6d368&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/AddStaffMember.vue?vue&type=template&id=3cf6d368& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMember_vue_vue_type_template_id_3cf6d368___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddStaffMember.vue?vue&type=template&id=3cf6d368& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddStaffMember.vue?vue&type=template&id=3cf6d368&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMember_vue_vue_type_template_id_3cf6d368___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddStaffMember_vue_vue_type_template_id_3cf6d368___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/StaffMemberList.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/views/StaffMemberList.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StaffMemberList_vue_vue_type_template_id_cc6f0d56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaffMemberList.vue?vue&type=template&id=cc6f0d56& */ "./resources/assets/js/views/StaffMemberList.vue?vue&type=template&id=cc6f0d56&");
/* harmony import */ var _StaffMemberList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffMemberList.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/StaffMemberList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StaffMemberList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StaffMemberList_vue_vue_type_template_id_cc6f0d56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StaffMemberList_vue_vue_type_template_id_cc6f0d56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/StaffMemberList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/StaffMemberList.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/StaffMemberList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StaffMemberList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/StaffMemberList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/StaffMemberList.vue?vue&type=template&id=cc6f0d56&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/StaffMemberList.vue?vue&type=template&id=cc6f0d56& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberList_vue_vue_type_template_id_cc6f0d56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StaffMemberList.vue?vue&type=template&id=cc6f0d56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/StaffMemberList.vue?vue&type=template&id=cc6f0d56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberList_vue_vue_type_template_id_cc6f0d56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffMemberList_vue_vue_type_template_id_cc6f0d56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);