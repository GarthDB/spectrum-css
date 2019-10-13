(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./data/yml/barloader.yml":
/*!********************************!*\
  !*** ./data/yml/barloader.yml ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"name":"Bar Loader", "examples":[({"id":"barloader-small", "name":"Standard", "markup":"<div style=\"width: 200px; height: 25px; padding-top: 10px;\">\n  <div class=\"spectrum-BarLoader\" value=\"50\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\" style=\"width: 50%;\"></div>\n    </div>\n    <div class=\"spectrum-BarLoader-label\" hidden=\"\"></div>\n  </div>\n</div>\n\n<div style=\"width: 200px; height: 25px; padding-top: 10px;\">\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--small\" value=\"50\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\" style=\"width: 50%;\"></div>\n    </div>\n    <div class=\"spectrum-BarLoader-label\" hidden=\"\"></div>\n  </div>\n</div>\n\n<div style=\"margin: 20px 0;\">\n  <div class=\"spectrum-BarLoader\" value=\"50\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"spectrum-BarLoader-label\">Loading</div>\n    <div class=\"spectrum-BarLoader-percentage\">50%</div>\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\" style=\"width: 50%;\"></div>\n    </div>\n  </div>\n</div>\n\n<div style=\"margin: 20px 0;\">\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--small\" value=\"50\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"spectrum-BarLoader-label\">Loading</div>\n    <div class=\"spectrum-BarLoader-percentage\">50%</div>\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\" style=\"width: 50%;\"></div>\n    </div>\n  </div>\n</div>\n\n<div style=\"margin: 50px 0;\">\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--small spectrum-BarLoader--sideLabel\" value=\"50\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"spectrum-BarLoader-label\">Loading</div>\n    <div class=\"spectrum-BarLoader-percentage\">50%</div>\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\" style=\"width: 50%;\"></div>\n    </div>\n  </div>\n</div>\n\n<div style=\"margin: 20px 0;\">\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--sideLabel\" value=\"50\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"spectrum-BarLoader-label\">Loading</div>\n    <div class=\"spectrum-BarLoader-percentage\">50%</div>\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\" style=\"width: 50%;\"></div>\n    </div>\n  </div>\n</div>\n"}), ({"id":"barloader-small-over-background", "name":"Over Background", "markup":"<div style=\"width: 400px; height: 200px; background-color: rgba(0,0,0,0.4); display: flex; flex-direction: column; align-items: center; justify-content: space-around;\">\n\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--overBackground\" value=\"50\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"spectrum-BarLoader-label\">Loading</div>\n    <div class=\"spectrum-BarLoader-percentage\">50%</div>\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\" handle=\"status\" style=\"width: 50%;\"></div>\n    </div>\n  </div>\n\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--small spectrum-BarLoader--overBackground\" value=\"50\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"spectrum-BarLoader-label\">Loading</div>\n    <div class=\"spectrum-BarLoader-percentage\">50%</div>\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\" handle=\"status\" style=\"width: 50%;\"></div>\n    </div>\n  </div>\n\n</div>\n"}), ({"id":"barloader-small", "name":"Indeterminate", "markup":"<div style=\"width: 200px; height: 25px; padding-top: 10px;\">\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--indeterminate\">\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\"></div>\n    </div>\n    <div class=\"spectrum-BarLoader-label\" hidden=\"\"></div>\n  </div>\n</div>\n\n<div style=\"width: 200px; height: 25px; padding-top: 10px;\">\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--small spectrum-BarLoader--indeterminate\">\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\"></div>\n    </div>\n    <div class=\"spectrum-BarLoader-label\" hidden=\"\"></div>\n  </div>\n</div>\n\n<div style=\"margin: 20px 0;\">\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--indeterminate\">\n    <div class=\"spectrum-BarLoader-label\">Loading</div>\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\"></div>\n    </div>\n  </div>\n</div>\n\n<div style=\"margin: 20px 0;\">\n  <div class=\"spectrum-BarLoader spectrum-BarLoader--small spectrum-BarLoader--indeterminate\">\n    <div class=\"spectrum-BarLoader-label\">Loading</div>\n    <div class=\"spectrum-BarLoader-track\">\n      <div class=\"spectrum-BarLoader-fill\"></div>\n    </div>\n  </div>\n</div>\n"})], "packageName":"barloader", "indexCSS":".spectrum-BarLoader {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  width: var(--spectrum-barloader-large-width, var(--spectrum-global-dimension-size-2400));\n  vertical-align: top;\n}\n\n.spectrum-BarLoader-track {\n  overflow: hidden;\n  width: var(--spectrum-barloader-large-width, var(--spectrum-global-dimension-size-2400));\n  height: var(--spectrum-barloader-large-height, var(--spectrum-global-dimension-size-75));\n  border-radius: var(--spectrum-barloader-large-border-radius);\n  z-index: 1;\n}\n\n.spectrum-BarLoader-fill {\n  border: none;\n  height: var(--spectrum-barloader-large-height, var(--spectrum-global-dimension-size-75));\n\n  transition: width 1s;\n}\n\n.spectrum-BarLoader-label,\n.spectrum-BarLoader-percentage {\n  font-size: var(--spectrum-fieldlabel-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-fieldlabel-text-font-weight, var(--spectrum-global-font-weight-regular));\n  line-height: var(--spectrum-fieldlabel-text-line-height, var(--spectrum-global-font-line-height-small));\n  text-align: left;\n  margin-bottom: var(--spectrum-barloader-large-label-gap-y, var(--spectrum-global-dimension-size-115));\n}\n\n.spectrum-BarLoader-label {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n}\n\n.spectrum-BarLoader-percentage {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  margin-left: var(--spectrum-barloader-small-label-gap-x, var(--spectrum-global-dimension-size-150));\n}\n\n.spectrum-BarLoader--sideLabel {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-flow: row;\n      flex-flow: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  width: auto;\n}\n\n.spectrum-BarLoader--sideLabel .spectrum-BarLoader-label {\n    margin-right: var(--spectrum-barloader-large-label-gap-x, var(--spectrum-global-dimension-size-150));\n    margin-bottom: 0;\n  }\n\n.spectrum-BarLoader--sideLabel .spectrum-BarLoader-percentage {\n    -ms-flex-order: 3;\n        order: 3;\n    text-align: right;\n    margin-left: var(--spectrum-barloader-large-label-gap-x, var(--spectrum-global-dimension-size-150));\n    margin-bottom: 0;\n  }\n\n.spectrum-BarLoader--small {\n  min-width: var(--spectrum-barloader-small-width, var(--spectrum-global-dimension-size-2400));\n}\n\n.spectrum-BarLoader--small .spectrum-BarLoader-fill {\n    height: var(--spectrum-barloader-small-height, var(--spectrum-global-dimension-size-50));\n  }\n\n.spectrum-BarLoader--small .spectrum-BarLoader-track {\n    height: var(--spectrum-barloader-small-height, var(--spectrum-global-dimension-size-50));\n    border-radius: var(--spectrum-barloader-small-border-radius);\n  }\n\n.spectrum-BarLoader--indeterminate .spectrum-BarLoader-fill {\n  width: var(--spectrum-barloader-large-indeterminate-fill-width, var(--spectrum-global-dimension-size-1700));\n  position: relative;\n  animation: indeterminate-loop var(--spectrum-barloader-large-indeterminate-duration, var(--spectrum-global-animation-duration-2000)) infinite;\n  animation-timing-function: var(--spectrum-barloader-large-indeterminate-animation-ease, var(--spectrum-global-animation-ease-in-out));\n  left: calc(-1 * var(--spectrum-barloader-large-indeterminate-fill-width, var(--spectrum-global-dimension-size-1700)));\n  will-change: transform;\n}\n\n@keyframes indeterminate-loop {\n  0% {\n    transform: translate(0);\n  }\n  100% {\n    transform: translate(calc(var(--spectrum-barloader-large-width, var(--spectrum-global-dimension-size-2400)) + var(--spectrum-barloader-large-indeterminate-fill-width, var(--spectrum-global-dimension-size-1700))));\n  }\n}\n\n.spectrum-BarLoader .spectrum-BarLoader-fill {\n    background: var(--spectrum-barloader-large-track-fill-color, var(--spectrum-global-color-blue-500));\n  }\n\n.spectrum-BarLoader .spectrum-BarLoader-track {\n    background-color: var(--spectrum-barloader-large-track-color, var(--spectrum-alias-track-color-default));\n  }\n\n.spectrum-BarLoader.spectrum-BarLoader--overBackground .spectrum-BarLoader-fill {\n      background: var(--spectrum-barloader-large-over-background-track-fill-color, var(--spectrum-global-color-static-white));\n    }\n\n.spectrum-BarLoader.spectrum-BarLoader--overBackground .spectrum-BarLoader-label,\n    .spectrum-BarLoader.spectrum-BarLoader--overBackground .spectrum-BarLoader-percentage {\n      color: var(--spectrum-barloader-large-over-background-track-fill-color, var(--spectrum-global-color-static-white));\n    }\n\n.spectrum-BarLoader.spectrum-BarLoader--overBackground .spectrum-BarLoader-track {\n      background-color: var(--spectrum-barloader-large-over-background-track-color, var(--spectrum-alias-track-color-over-background));\n    }\n\n.spectrum-BarLoader.is-positive .spectrum-BarLoader-fill {\n      background: var(--spectrum-meter-large-track-color-positive, var(--spectrum-semantic-positive-color-status));\n    }\n\n.spectrum-BarLoader.is-warning .spectrum-BarLoader-fill {\n      background: var(--spectrum-meter-large-track-color-warning, var(--spectrum-semantic-notice-color-status));\n    }\n\n.spectrum-BarLoader.is-critical .spectrum-BarLoader-fill {\n      background: var(--spectrum-meter-large-track-color-critical, var(--spectrum-semantic-negative-color-status));\n    }\n\n.spectrum-BarLoader-label,\n.spectrum-BarLoader-percentage {\n  color: var(--spectrum-fieldlabel-text-color, var(--spectrum-alias-label-text-color));\n}\n\n.spectrum-BarLoader-label,\n.spectrum-BarLoader-percentage {\n  color: var(--spectrum-fieldlabel-text-color, var(--spectrum-alias-label-text-color));\n}\n\n.spectrum-BarLoader-label,\n.spectrum-BarLoader-percentage {\n  color: var(--spectrum-fieldlabel-text-color, var(--spectrum-alias-label-text-color));\n}\n", "peerDependencies":({"@spectrum-css/vars":"^2.0.0"}), "peerCSS":""})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ })

}]);
//# sourceMappingURL=10.js.map