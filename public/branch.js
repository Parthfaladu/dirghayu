(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/BranchTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/BranchTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BranchTable',
  components: {
    VueDatatable: _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      columns: [{
        data: 'id',
        name: 'id'
      }, {
        data: 'name',
        name: 'name'
      }, {
        data: 'address',
        name: 'address'
      }, {
        data: 'incharge_name',
        name: 'incharge_name'
      }, {
        data: 'mobile',
        name: 'mobile'
      }, {
        data: 'email',
        name: 'email'
      }, {
        data: 'city',
        name: 'city'
      }, {
        data: 'state',
        name: 'state'
      }, {
        data: 'zipcode',
        name: 'zipcode'
      }, {
        data: function data(_data) {
          return "<button class='btn btn-primary' data-g-action='view' data-g-actiondata=" + _data.id + ">Update</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata=" + _data.id + ">Delete</button>";
        },
        name: 'action'
      }],
      url: '/api/v1/branch/list'
    };
  },
  methods: {
    onAction: function () {
      var _onAction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(action) {
        var branchId, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (action.action === 'view') {
                  this.$router.push('/update-branch/' + action.data); //console.log(action.data);
                }

                if (!(action.action === 'delete')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 2;
                branchId = action.data;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/branch/delete', {
                  id: branchId
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddBranch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddBranch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddBranch',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      branchData: {
        name: null,
        incharge_name: null,
        address: null,
        mobile: null,
        email: null,
        city: null,
        state: null,
        zipcode: null
      }
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
                _context.next = 7;
                break;
              }

              id = this.$route.params.id;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/branch/list/' + id, {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 5:
              res = _context.sent;
              this.branchData = res.data.data;

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              this.$snotify.error(null, _context.t0.message);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 9]]);
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

                if (!this.branchData) {
                  _context2.next = 13;
                  break;
                }

                res = null;

                if (!(this.$route.params.id != null)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/branch/update', this.branchData, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 6:
                res = _context2.sent;
                _context2.next = 12;
                break;

              case 9:
                _context2.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/branch/create', this.branchData, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                  }
                });

              case 11:
                res = _context2.sent;

              case 12:
                if (res.data.status == "success") {
                  this.resetForm();
                  this.$snotify.success(null, res.data.message);
                  this.$router.push('/branch-list');
                }

              case 13:
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);
                this.$snotify.error(null, _context2.t0.message);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 15]]);
      }));

      function submitForm() {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }(),
    resetForm: function resetForm() {
      this.branchData = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/BranchList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/BranchList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BranchTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/BranchTable */ "./resources/assets/js/components/BranchTable.vue");
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
  name: 'PaymentList',
  components: {
    BranchTable: _components_BranchTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/BranchTable.vue?vue&type=template&id=087348e5&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/BranchTable.vue?vue&type=template&id=087348e5& ***!
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
    "VueDatatable",
    {
      attrs: { columns: _vm.columns, url: _vm.url },
      on: { gaction: _vm.onAction }
    },
    [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Address")]),
      _vm._v(" "),
      _c("th", [_vm._v("Incharge Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Mobile")]),
      _vm._v(" "),
      _c("th", [_vm._v("Email")]),
      _vm._v(" "),
      _c("th", [_vm._v("City")]),
      _vm._v(" "),
      _c("th", [_vm._v("State")]),
      _vm._v(" "),
      _c("th", [_vm._v("ZipCode")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddBranch.vue?vue&type=template&id=9cc00040&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddBranch.vue?vue&type=template&id=9cc00040& ***!
  \**************************************************************************************************************************************************************************************************************/
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
            _c("div", [_vm._v("BRANCH DETAIL")])
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
                      value: _vm.branchData.name,
                      expression: "branchData.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "name",
                    id: "name",
                    required: ""
                  },
                  domProps: { value: _vm.branchData.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.branchData, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "incharge_name" } }, [
                  _vm._v("Incharge Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.branchData.incharge_name,
                      expression: "branchData.incharge_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "incharge_name",
                    id: "incharge_name",
                    required: ""
                  },
                  domProps: { value: _vm.branchData.incharge_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.branchData,
                        "incharge_name",
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
                      value: _vm.branchData.email,
                      expression: "branchData.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "email",
                    name: "email",
                    id: "email",
                    required: ""
                  },
                  domProps: { value: _vm.branchData.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.branchData, "email", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "mobile" } }, [_vm._v("Mobile")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.branchData.mobile,
                      expression: "branchData.mobile"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "mobile",
                    id: "mobile",
                    required: ""
                  },
                  domProps: { value: _vm.branchData.mobile },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.branchData, "mobile", $event.target.value)
                    }
                  }
                })
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
                      value: _vm.branchData.address,
                      expression: "branchData.address"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    rows: "2",
                    name: "address",
                    id: "address",
                    required: ""
                  },
                  domProps: { value: _vm.branchData.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.branchData, "address", $event.target.value)
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
                      value: _vm.branchData.city,
                      expression: "branchData.city"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "city", id: "city" },
                  domProps: { value: _vm.branchData.city },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.branchData, "city", $event.target.value)
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
                      value: _vm.branchData.state,
                      expression: "branchData.state"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "state", id: "state" },
                  domProps: { value: _vm.branchData.state },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.branchData, "state", $event.target.value)
                    }
                  }
                })
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
                      value: _vm.branchData.zipcode,
                      expression: "branchData.zipcode"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "zipcode",
                    id: "zipcode",
                    required: ""
                  },
                  domProps: { value: _vm.branchData.zipcode },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.branchData, "zipcode", $event.target.value)
                    }
                  }
                })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/BranchList.vue?vue&type=template&id=352fc773&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/BranchList.vue?vue&type=template&id=352fc773& ***!
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
            _c("div", [_vm._v("BRANCH LIST")])
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
                  attrs: { to: "/add-branch" }
                },
                [_vm._v("Add Branch")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [_c("BranchTable")], 1)
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/BranchTable.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/BranchTable.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BranchTable_vue_vue_type_template_id_087348e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BranchTable.vue?vue&type=template&id=087348e5& */ "./resources/assets/js/components/BranchTable.vue?vue&type=template&id=087348e5&");
/* harmony import */ var _BranchTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BranchTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/BranchTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BranchTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BranchTable_vue_vue_type_template_id_087348e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BranchTable_vue_vue_type_template_id_087348e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/BranchTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/BranchTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/BranchTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BranchTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/BranchTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/BranchTable.vue?vue&type=template&id=087348e5&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/BranchTable.vue?vue&type=template&id=087348e5& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_template_id_087348e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BranchTable.vue?vue&type=template&id=087348e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/BranchTable.vue?vue&type=template&id=087348e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_template_id_087348e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_template_id_087348e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/AddBranch.vue":
/*!*************************************************!*\
  !*** ./resources/assets/js/views/AddBranch.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddBranch_vue_vue_type_template_id_9cc00040___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBranch.vue?vue&type=template&id=9cc00040& */ "./resources/assets/js/views/AddBranch.vue?vue&type=template&id=9cc00040&");
/* harmony import */ var _AddBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBranch.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/AddBranch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBranch_vue_vue_type_template_id_9cc00040___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddBranch_vue_vue_type_template_id_9cc00040___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/AddBranch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/AddBranch.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/views/AddBranch.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBranch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddBranch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/AddBranch.vue?vue&type=template&id=9cc00040&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/AddBranch.vue?vue&type=template&id=9cc00040& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBranch_vue_vue_type_template_id_9cc00040___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBranch.vue?vue&type=template&id=9cc00040& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddBranch.vue?vue&type=template&id=9cc00040&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBranch_vue_vue_type_template_id_9cc00040___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBranch_vue_vue_type_template_id_9cc00040___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/BranchList.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/views/BranchList.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BranchList_vue_vue_type_template_id_352fc773___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BranchList.vue?vue&type=template&id=352fc773& */ "./resources/assets/js/views/BranchList.vue?vue&type=template&id=352fc773&");
/* harmony import */ var _BranchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BranchList.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/BranchList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BranchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BranchList_vue_vue_type_template_id_352fc773___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BranchList_vue_vue_type_template_id_352fc773___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/BranchList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/BranchList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/views/BranchList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BranchList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/BranchList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/BranchList.vue?vue&type=template&id=352fc773&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/BranchList.vue?vue&type=template&id=352fc773& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchList_vue_vue_type_template_id_352fc773___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BranchList.vue?vue&type=template&id=352fc773& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/BranchList.vue?vue&type=template&id=352fc773&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchList_vue_vue_type_template_id_352fc773___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchList_vue_vue_type_template_id_352fc773___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);