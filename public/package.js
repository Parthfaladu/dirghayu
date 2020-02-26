(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["package"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PackageTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PackageTable.vue?vue&type=script&lang=js& ***!
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
  name: 'PackageTable',
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
        data: 'price',
        name: 'price'
      }, {
        data: 'duration',
        name: 'duration'
      }, {
        data: 'detail',
        name: 'detail'
      }, {
        data: function data(_data) {
          return "<button class='btn btn-primary' data-g-action='view' data-g-actiondata=" + _data.id + ">Update</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata=" + _data.id + ">Delete</button>";
        },
        name: 'action'
      }],
      url: '/api/v1/package/list'
    };
  },
  methods: {
    onAction: function () {
      var _onAction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(action) {
        var packageId, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (action.action === 'view') {
                  this.$router.push('/update-package/' + action.data); //console.log(action.data);
                }

                if (!(action.action === 'delete')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 2;
                packageId = action.data;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/package/delete', {
                  id: packageId
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddPackageView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddPackageView.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddPackageView',
  components: {
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      packageData: {
        name: null,
        price: null,
        duration: null,
        detail: null,
        packageImage: null
      },
      package_img_path: null,
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/package/list/' + id, {
                headers: {
                  "Authorization": this.$store.getters['auth/authHeaders'].Authorization
                }
              });

            case 5:
              res = _context.sent;
              this.packageData = res.data.data;
              this.package_img_path = this.packageData.image;
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

                if (!this.packageData) {
                  _context2.next = 19;
                  break;
                }

                res = null;
                data = new FormData();
                data.append('name', this.packageData.name);
                data.append('price', this.packageData.price);
                data.append('duration', this.packageData.duration);
                data.append('detail', this.packageData.detail);
                data.append('packageImage', this.packageData.packageImage);

                if (!(this.$route.params.id != null)) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 12;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/package/update', data, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization,
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 12:
                res = _context2.sent;
                _context2.next = 18;
                break;

              case 15:
                _context2.next = 17;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/package/create', data, {
                  headers: {
                    "Authorization": this.$store.getters['auth/authHeaders'].Authorization,
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 17:
                res = _context2.sent;

              case 18:
                if (res.data.status == "success") {
                  this.resetForm();
                  this.$router.push('/package-list');
                  this.$snotify.success(null, res.data.message);
                }

              case 19:
                _context2.next = 24;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](0);
                this.$snotify.error(null, _context2.t0.message);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 21]]);
      }));

      function submitForm() {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }(),
    resetForm: function resetForm() {
      this.packageData = null;
    },
    onImageUpload: function onImageUpload() {
      this.packageData.packageImage = this.$refs.packagePath.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.showPreview = true;
        this.package_img_path = reader.result;
      }.bind(this), false);

      if (this.packageData.packageImage) {
        //   if ( /\.(jpe?g|png|gif)$/i.test( this.packageData.packageImage.name ) ) {
        reader.readAsDataURL(this.packageData.packageImage); //   }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/PackageListView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/PackageListView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PackageTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/PackageTable.vue */ "./resources/assets/js/components/PackageTable.vue");
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
  name: 'PackageListView',
  components: {
    PackageTable: _components_PackageTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardPage: _layouts_DashboardPage_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PackageTable.vue?vue&type=template&id=00afde42&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/PackageTable.vue?vue&type=template&id=00afde42& ***!
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
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Price")]),
      _vm._v(" "),
      _c("th", [_vm._v("Duration")]),
      _vm._v(" "),
      _c("th", [_vm._v("Detail")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddPackageView.vue?vue&type=template&id=184fb43d&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddPackageView.vue?vue&type=template&id=184fb43d& ***!
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
            _c("div", [_vm._v("PACKAGE DETAIL")])
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
                _c("label", { attrs: { for: "name" } }, [
                  _vm._v(_vm._s(_vm.$t("NAME")))
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.packageData.name,
                      expression: "packageData.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "name",
                    id: "name",
                    required: ""
                  },
                  domProps: { value: _vm.packageData.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.packageData, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "detail" } }, [_vm._v("Detail")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.packageData.detail,
                      expression: "packageData.detail"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    rows: "2",
                    name: "detail",
                    id: "detail",
                    required: ""
                  },
                  domProps: { value: _vm.packageData.detail },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.packageData, "detail", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "price" } }, [_vm._v("Price")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.packageData.price,
                      expression: "packageData.price"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "price",
                    id: "price",
                    required: ""
                  },
                  domProps: { value: _vm.packageData.price },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.packageData, "price", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "duration" } }, [
                  _vm._v("Duration")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: { padding: "0px" }
                  },
                  [
                    _c("div", { staticClass: "input-group-prepend" }, [
                      _c(
                        "span",
                        {
                          staticClass: "input-group-text",
                          attrs: { id: "inputGroupPrepend" }
                        },
                        [_vm._v("Month")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.packageData.duration,
                          expression: "packageData.duration"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "duration",
                        id: "duration",
                        required: ""
                      },
                      domProps: { value: _vm.packageData.duration },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.packageData,
                            "duration",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "package_img_path" } }, [
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
                  attrs: { src: _vm.package_img_path, width: "20%" }
                }),
                _vm._v(" "),
                _c("input", {
                  ref: "packagePath",
                  staticClass: "form-control",
                  staticStyle: { display: "none" },
                  attrs: {
                    type: "file",
                    accept: "image/*",
                    name: "packagePath",
                    id: "packagePath"
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
                        return _vm.$refs.packagePath.click()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/PackageListView.vue?vue&type=template&id=6259d246&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/PackageListView.vue?vue&type=template&id=6259d246& ***!
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
            _c("div", [_vm._v("PACKAGE LIST")])
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
                  attrs: { to: "/add-package" }
                },
                [_vm._v("Add Package")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "table-responsive" },
            [_c("PackageTable")],
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

/***/ "./resources/assets/js/components/PackageTable.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/PackageTable.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PackageTable_vue_vue_type_template_id_00afde42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PackageTable.vue?vue&type=template&id=00afde42& */ "./resources/assets/js/components/PackageTable.vue?vue&type=template&id=00afde42&");
/* harmony import */ var _PackageTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackageTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/PackageTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PackageTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PackageTable_vue_vue_type_template_id_00afde42___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PackageTable_vue_vue_type_template_id_00afde42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/PackageTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/PackageTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/PackageTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PackageTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/PackageTable.vue?vue&type=template&id=00afde42&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/PackageTable.vue?vue&type=template&id=00afde42& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageTable_vue_vue_type_template_id_00afde42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageTable.vue?vue&type=template&id=00afde42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/PackageTable.vue?vue&type=template&id=00afde42&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageTable_vue_vue_type_template_id_00afde42___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageTable_vue_vue_type_template_id_00afde42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/AddPackageView.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/AddPackageView.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPackageView_vue_vue_type_template_id_184fb43d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPackageView.vue?vue&type=template&id=184fb43d& */ "./resources/assets/js/views/AddPackageView.vue?vue&type=template&id=184fb43d&");
/* harmony import */ var _AddPackageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPackageView.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/AddPackageView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPackageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPackageView_vue_vue_type_template_id_184fb43d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddPackageView_vue_vue_type_template_id_184fb43d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/AddPackageView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/AddPackageView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/AddPackageView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPackageView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddPackageView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/AddPackageView.vue?vue&type=template&id=184fb43d&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/AddPackageView.vue?vue&type=template&id=184fb43d& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageView_vue_vue_type_template_id_184fb43d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPackageView.vue?vue&type=template&id=184fb43d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddPackageView.vue?vue&type=template&id=184fb43d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageView_vue_vue_type_template_id_184fb43d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageView_vue_vue_type_template_id_184fb43d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/PackageListView.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/views/PackageListView.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PackageListView_vue_vue_type_template_id_6259d246___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PackageListView.vue?vue&type=template&id=6259d246& */ "./resources/assets/js/views/PackageListView.vue?vue&type=template&id=6259d246&");
/* harmony import */ var _PackageListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackageListView.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/PackageListView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PackageListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PackageListView_vue_vue_type_template_id_6259d246___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PackageListView_vue_vue_type_template_id_6259d246___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/PackageListView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/PackageListView.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/PackageListView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageListView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/PackageListView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/PackageListView.vue?vue&type=template&id=6259d246&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/PackageListView.vue?vue&type=template&id=6259d246& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageListView_vue_vue_type_template_id_6259d246___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageListView.vue?vue&type=template&id=6259d246& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/PackageListView.vue?vue&type=template&id=6259d246&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageListView_vue_vue_type_template_id_6259d246___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageListView_vue_vue_type_template_id_6259d246___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);