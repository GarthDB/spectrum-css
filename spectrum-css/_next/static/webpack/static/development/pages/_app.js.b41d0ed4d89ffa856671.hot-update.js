webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react/react-spectrum/Provider */ "./node_modules/@react/react-spectrum/Provider/index.js");
/* harmony import */ var _react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/main.scss */ "./css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_global_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-global.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-global.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_global_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_global_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_medium_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-medium.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-medium.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_medium_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_medium_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_light_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @adobe/spectrum-css/dist/vars/spectrum-light.css */ "./node_modules/@adobe/spectrum-css/dist/vars/spectrum-light.css");
/* harmony import */ var _adobe_spectrum_css_dist_vars_spectrum_light_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_vars_spectrum_light_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _adobe_spectrum_css_dist_components_page_index_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @adobe/spectrum-css/dist/components/page/index.css */ "./node_modules/@adobe/spectrum-css/dist/components/page/index.css");
/* harmony import */ var _adobe_spectrum_css_dist_components_page_index_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_components_page_index_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _adobe_spectrum_css_dist_components_page_colorStops_light_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @adobe/spectrum-css/dist/components/page/colorStops/light.css */ "./node_modules/@adobe/spectrum-css/dist/components/page/colorStops/light.css");
/* harmony import */ var _adobe_spectrum_css_dist_components_page_colorStops_light_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_components_page_colorStops_light_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _adobe_spectrum_css_dist_components_typography_index_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @adobe/spectrum-css/dist/components/typography/index.css */ "./node_modules/@adobe/spectrum-css/dist/components/typography/index.css");
/* harmony import */ var _adobe_spectrum_css_dist_components_typography_index_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_components_typography_index_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _adobe_spectrum_css_dist_components_typography_colorStops_light_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @adobe/spectrum-css/dist/components/typography/colorStops/light.css */ "./node_modules/@adobe/spectrum-css/dist/components/typography/colorStops/light.css");
/* harmony import */ var _adobe_spectrum_css_dist_components_typography_colorStops_light_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_adobe_spectrum_css_dist_components_typography_colorStops_light_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_21__);








var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;













 //import regeneratorRuntime from "regenerator-runtime";

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Layout, _React$Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_20___default()('afg-container-fluid', _css_main_scss__WEBPACK_IMPORTED_MODULE_12___default.a.mainContainer),
        style: {
          minHeight: '100vh',
          boxSizing: 'border-box'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, children);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "updateDimensions", function () {
      _this.setState(function (state, props) {
        return {
          scale: window.innerWidth < 768 ? 'large' : 'medium'
        };
      });
    });

    _this.state = {
      scale: 'medium'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps; //console.log(pageProps);

      return __jsx(next_app__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_21__["Helmet"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        key: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/static/favicon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), __jsx(_react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_11___default.a, {
        theme: "light",
        scale: this.state.scale,
        typekitId: "uma8ayv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("div", {
        className: _css_main_scss__WEBPACK_IMPORTED_MODULE_12___default.a.flexContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), __jsx(Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.b41d0ed4d89ffa856671.hot-update.js.map