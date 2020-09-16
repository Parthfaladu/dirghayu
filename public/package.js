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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PackageTable',
  components: {
    VueDatatable: _components_custom_VueDatatable_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      columns: [{
        data: 'id',
        name: 'id',
        width: "40px"
      }, {
        data: function data(_data) {
          var packageName = '';

          if (_data.image) {
            packageName += "<img src=".concat(_data.image, " width='50px' class='rounded-circle mr-3'>");
          }

          packageName += "".concat(_data.name);
          return packageName;
        },
        name: 'name',
        width: "320px"
      }, {
        data: function data(_data2) {
          return _data2.price + ' ' + _this.$store.getters['init/currency'];
        },
        name: 'price',
        width: "80px"
      }, {
        data: 'duration',
        name: 'duration',
        width: "50px"
      }, {
        data: function data(_data3) {
          var actions = "";

          if (_this.$can('update__package')) {
            actions += "<button class='btn btn-outline-primary-new' data-g-action='view' data-g-actiondata=" + _data3.id + "><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button>";
          }

          if (_this.$can('delete__package')) {
            actions += " <button class='btn btn-outline-danger-new' data-g-action='delete' data-g-actiondata=" + _data3.id + "><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
          }

          return actions;
        },
        name: 'action',
        width: "150px"
      }],
      url: '/api/v1/package/list'
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
                  _this2.$router.push('/update-package/' + action.data);
                }

                if (!(action.action === 'delete')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/package/delete', {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
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
  name: 'AddPackageForm',
  data: function data() {
    return {
      packageData: {
        name: null,
        price: null,
        duration: null,
        detail: null,
        packageImage: ''
      },
      package_img_path: null
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
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/v1/package/list/' + _this2.$route.params.id);

              case 2:
                res = _context2.sent;
                _this2.packageData = res.data.data;
                _this2.package_img_path = _this2.packageData.image;

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
                data.append('id', _this3.$route.params.id);
                data.append('name', _this3.packageData.name);
                data.append('price', _this3.packageData.price);
                data.append('duration', _this3.packageData.duration);
                data.append('detail', _this3.packageData.detail);
                data.append('packageImage', _this3.packageData.packageImage);

                if (!(_this3.$route.params.id != null)) {
                  _context3.next = 21;
                  break;
                }

                _context3.next = 17;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/package/update', data, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 17:
                res = _context3.sent;

                _this3.$snotify.success(null, res.data.message);

                _context3.next = 25;
                break;

              case 21:
                _context3.next = 23;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/package/create', data, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 23:
                res = _context3.sent;

                _this3.$router.push({
                  name: 'packagelistview',
                  params: {
                    message: res.data.message
                  }
                });

              case 25:
                _context3.next = 30;
                break;

              case 27:
                _context3.prev = 27;
                _context3.t0 = _context3["catch"](0);

                _this3.$snotify.error(null, _context3.t0.message);

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 27]]);
      }))();
    },
    onImageUpload: function onImageUpload() {
      this.packageData.packageImage = this.$refs.packagePath.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/AddPackageView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/AddPackageView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/DashboardPage */ "./resources/assets/js/layouts/DashboardPage.vue");
/* harmony import */ var _components_forms_AddPackageForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/forms/AddPackageForm */ "./resources/assets/js/components/forms/AddPackageForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DashboardPage: _layouts_DashboardPage__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddPackageForm: _components_forms_AddPackageForm__WEBPACK_IMPORTED_MODULE_1__["default"]
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PackageListView",
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
      directives: [
        { name: "can", rawName: "v-can:view__package", arg: "view__package" }
      ],
      ref: "vueDatatable",
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
      _c(
        "th",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.$can("update__package") || _vm.$can("delete__package"),
              expression: "$can('update__package') || $can('delete__package')"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=template&id=62cfba40&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=template&id=62cfba40& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "name", type: "text", name: "name" },
          domProps: { value: _vm.packageData.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.packageData, "name", $event.target.value)
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
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "detail", rows: "2", name: "detail" },
          domProps: { value: _vm.packageData.detail },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.packageData, "detail", $event.target.value)
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
                value: _vm.errors.has("detail"),
                expression: "errors.has('detail')"
              }
            ],
            staticClass: "text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("detail")))]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "price" } }, [_vm._v("Price")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "input-group", staticStyle: { padding: "0px" } },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.packageData.price,
                  expression: "packageData.price"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "price", type: "number", name: "price" },
              domProps: { value: _vm.packageData.price },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.packageData, "price", $event.target.value)
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
                value: _vm.errors.has("price"),
                expression: "errors.has('price')"
              }
            ],
            staticClass: "text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("price")))]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "duration" } }, [_vm._v("Duration")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "input-group", staticStyle: { padding: "0px" } },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.packageData.duration,
                  expression: "packageData.duration"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "duration", type: "number", name: "duration" },
              domProps: { value: _vm.packageData.duration },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.packageData, "duration", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm._m(0)
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
      _c("div", { staticClass: "position-relative form-group" }, [
        _c("label", { attrs: { for: "package_img_path" } }, [
          _vm._v("Profile Photo")
        ]),
        _c("br"),
        _vm._v(" "),
        _vm.package_img_path
          ? _c("img", {
              staticStyle: { border: "1px solid #cac2c2" },
              attrs: { src: _vm.package_img_path, width: "25%" }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("input", {
          ref: "packagePath",
          staticClass: "form-control",
          staticStyle: { display: "none" },
          attrs: {
            id: "packagePath",
            type: "file",
            accept: "image/*",
            name: "packagePath"
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
                return _vm.$refs.packagePath.click()
              }
            }
          },
          [_vm._v("Upload Image")]
        )
      ]),
      _vm._v(" "),
      _vm._m(1)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon2" } },
        [_vm._v("Month")]
      )
    ])
  },
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
  return _c(
    "DashboardPage",
    {
      directives: [
        { name: "can", rawName: "v-can:add__package", arg: "add__package" }
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
                      "pe-7s-gift icon-gradient bg-premium-dark text-danger"
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "heading-font-weight" }, [
                  _vm._v("PACKAGE DETAIL")
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body col-sm-8 offset-sm-2" },
            [
              _c("h5", { staticClass: "card-title" }),
              _vm._v(" "),
              _c("AddPackageForm")
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
  return _c(
    "DashboardPage",
    {
      directives: [
        { name: "can", rawName: "v-can:view__package", arg: "view__package" }
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
                      "pe-7s-gift icon-gradient bg-premium-dark text-danger"
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "heading-font-weight" }, [
                  _vm._v("PACKAGE LIST")
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
                    rawName: "v-can:add__package",
                    arg: "add__package"
                  }
                ],
                staticClass: "align-content-end"
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-alternate-new all-add-new",
                    attrs: { to: "/add-package" }
                  },
                  [_vm._v("Add Package")]
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
              [_c("PackageTable")],
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

/***/ "./resources/assets/js/components/forms/AddPackageForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddPackageForm.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPackageForm_vue_vue_type_template_id_62cfba40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPackageForm.vue?vue&type=template&id=62cfba40& */ "./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=template&id=62cfba40&");
/* harmony import */ var _AddPackageForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPackageForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPackageForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPackageForm_vue_vue_type_template_id_62cfba40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddPackageForm_vue_vue_type_template_id_62cfba40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/forms/AddPackageForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPackageForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=template&id=62cfba40&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=template&id=62cfba40& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageForm_vue_vue_type_template_id_62cfba40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPackageForm.vue?vue&type=template&id=62cfba40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/forms/AddPackageForm.vue?vue&type=template&id=62cfba40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageForm_vue_vue_type_template_id_62cfba40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPackageForm_vue_vue_type_template_id_62cfba40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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