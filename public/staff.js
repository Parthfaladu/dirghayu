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
    return {
      columns: [{
        data: 'id',
        name: 'id'
      }, {
        data: function data(_data) {
          return _data.first_name + ' ' + _data.last_name;
        },
        name: 'name'
      }, {
        data: 'phone',
        name: 'phone'
      }, {
        data: 'dob',
        name: 'dob'
      }, {
        data: 'gender',
        name: 'gender'
      }, {
        data: 'address',
        name: 'address'
      }, {
        data: function data(_data2) {
          var action = "<button class='btn btn-primary' data-g-action='view' data-g-actiondata=" + _data2.id + ">Update</button> <button class='btn btn-warning' data-g-action='status' data-g-actiondata=" + _data2.id + ">";

          if (_data2.is_active == 1) {
            action += "Active";
          } else {
            action += "InActive";
          }

          action += "</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata=" + _data2.id + ">Delete</button>";
          return action;
        },
        name: 'action'
      }],
      url: 'http://localhost:8000/api/v1/staff/member/list',
      type: 'POST'
    };
  },
  methods: {
    onAction: function () {
      var _onAction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(action) {
        var memberId, res, _memberId, _res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (action.action === 'view') {
                  this.$router.push('/update-staff-member/' + action.data);
                }

                if (!(action.action === 'delete')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 2;
                memberId = action.data;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('http://localhost:8000/api/v1/staff/member/' + memberId, {
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
                if (!(action.action === 'status')) {
                  _context.next = 25;
                  break;
                }

                _context.prev = 14;
                _memberId = action.data;
                _context.next = 18;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:8000/api/v1/staff/member/status', {
                  id: _memberId
                }, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 18:
                _res = _context.sent;
                this.$snotify.success(null, _res.data.message);
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t1 = _context["catch"](14);
                this.$snotify.error(null, _context.t1.message);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10], [14, 22]]);
      }));

      function onAction(_x) {
        return _onAction.apply(this, arguments);
      }

      return onAction;
    }()
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddStaffMember',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        branchId: 1,
        email: null,
        roleId: null,
        profileImage: null
      },
      profile_img_path: null,
      showPreview: false
    };
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var id, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(this.$route.params.id != null)) {
                _context.next = 9;
                break;
              }

              id = this.$route.params.id;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8000/api/v1/staff/member/' + id, {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 5:
              res = _context.sent;
              this.staff = res.data.data;
              this.profile_img_path = this.staff.photoUrl;
              this.showPreview = true;

            case 9:
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
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!this.staff) {
                  _context2.next = 26;
                  break;
                }

                res = null;
                data = new FormData();
                data.append('firstName', this.staff.firstName);
                data.append('lastName', this.staff.lastName);
                data.append('password', this.staff.password);
                data.append('phone', this.staff.phone);
                data.append('dob', this.staff.dob);
                data.append('gender', this.staff.gender);
                data.append('address', this.staff.address);
                data.append('branchId', this.staff.branchId);
                data.append('email', this.staff.email);
                data.append('roleId', this.staff.roleId);
                data.append('profileImage', this.staff.profileImage);

                if (!(this.$route.params.id != null)) {
                  _context2.next = 22;
                  break;
                }

                data.append('id', this.staff.id);
                _context2.next = 19;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:8000/api/v1/staff/member/update', data, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization,
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 19:
                res = _context2.sent;
                _context2.next = 25;
                break;

              case 22:
                _context2.next = 24;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:8000/api/v1/staff/member', data, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization,
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 24:
                res = _context2.sent;

              case 25:
                if (res.data.status == "success") {
                  this.resetForm();
                  this.$router.push('/staff-member-list'); //this.$snotify.success(null, res.data.message);
                }

              case 26:
                _context2.next = 30;
                break;

              case 28:
                _context2.prev = 28;
                _context2.t0 = _context2["catch"](0);

              case 30:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 28]]);
      }));

      function submitForm() {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }(),
    resetForm: function resetForm() {
      this.staff = null;
    },
    onImageUpload: function onImageUpload() {
      this.staff.profileImage = this.$refs.profilePath.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.showPreview = true;
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
      attrs: { columns: _vm.columns, url: _vm.url, type: _vm.type },
      on: { gaction: _vm.onAction }
    },
    [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Phone")]),
      _vm._v(" "),
      _c("th", [_vm._v("Date Of Birth")]),
      _vm._v(" "),
      _c("th", [_vm._v("Gender")]),
      _vm._v(" "),
      _c("th", [_vm._v("Address")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ]
  )
}
var staticRenderFns = []
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
            _c("div", [_vm._v("STAFF MEMBER DETAIL")])
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
                _c("label", { attrs: { for: "branchId" } }, [_vm._v("Branch")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.staff.branchId,
                        expression: "staff.branchId"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "branchId", id: "branchId", required: "" },
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
                          "branchId",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [_c("option", { attrs: { value: "1" } }, [_vm._v("1")])]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "roleId" } }, [
                  _vm._v("Staff Role")
                ]),
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
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "roleId", id: "roleId", required: "" },
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
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Manager")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Staff Member")
                    ])
                  ]
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
                      value: _vm.staff.firstName,
                      expression: "staff.firstName"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "firstName",
                    id: "firstName",
                    required: ""
                  },
                  domProps: { value: _vm.staff.firstName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.staff, "firstName", $event.target.value)
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
                      value: _vm.staff.lastName,
                      expression: "staff.lastName"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "lastName",
                    id: "lastName",
                    required: ""
                  },
                  domProps: { value: _vm.staff.lastName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.staff, "lastName", $event.target.value)
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
                      value: _vm.staff.email,
                      expression: "staff.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "email",
                    name: "email",
                    id: "name",
                    required: ""
                  },
                  domProps: { value: _vm.staff.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.staff, "email", $event.target.value)
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
                      value: _vm.staff.password,
                      expression: "staff.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    name: "password",
                    id: "password",
                    required: ""
                  },
                  domProps: { value: _vm.staff.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.staff, "password", $event.target.value)
                    }
                  }
                })
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
                      value: _vm.staff.phone,
                      expression: "staff.phone"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "phone",
                    id: "phone",
                    required: ""
                  },
                  domProps: { value: _vm.staff.phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.staff, "phone", $event.target.value)
                    }
                  }
                })
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
                      value: _vm.staff.dob,
                      expression: "staff.dob"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "dob", id: "dob", required: "" },
                  domProps: { value: _vm.staff.dob },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.staff, "dob", $event.target.value)
                    }
                  }
                })
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
                          value: _vm.staff.gender,
                          expression: "staff.gender"
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
                        type: "radio",
                        id: "defaultGroupExample2",
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
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    rows: "2",
                    name: "address",
                    id: "address",
                    required: ""
                  },
                  domProps: { value: _vm.staff.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.staff, "address", $event.target.value)
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
            _c("div", [_vm._v("STAFF MEMBER LIST")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _c("div", { staticClass: "card-body col-sm-10 offset-sm-1" }, [
          _c(
            "h5",
            { staticClass: "card-title mt-4" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-info mb-5",
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
  ])
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