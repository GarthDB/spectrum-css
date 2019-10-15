(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./data/yml/quickaction.yml":
/*!**********************************!*\
  !*** ./data/yml/quickaction.yml ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"id":"quickactions", "name":"Quick Actions", "status":"Verified", "description":"Note that the `.spectrum-QuickActions-overlay` class should be placed on the container where the Quick Actions are displayed, and the `.spectrum-QuickActions--textOnly` class should be applied when the buttons have text only.", "examples":[({"id":"quickactions", "name":"Standard", "markup":"<div class=\"spectrum-QuickActions-overlay\" style=\"padding: 40px;\">\n\n  <div class=\"spectrum-QuickActions is-open\">\n    <button class=\"spectrum-ActionButton spectrum-ActionButton--quiet\">\n      <svg class=\"spectrum-Icon spectrum-Icon--sizeS\" focusable=\"false\" aria-hidden=\"true\" aria-label=\"Edit\">\n        <use xlink:href=\"#spectrum-icon-18-Edit\" />\n      </svg>\n    </button>\n    <button class=\"spectrum-ActionButton spectrum-ActionButton--quiet\">\n      <svg class=\"spectrum-Icon spectrum-Icon--sizeS\" focusable=\"false\" aria-hidden=\"true\" aria-label=\"Copy\">\n        <use xlink:href=\"#spectrum-icon-18-Copy\" />\n      </svg>\n    </button>\n    <button class=\"spectrum-ActionButton spectrum-ActionButton--quiet\">\n      <svg class=\"spectrum-Icon spectrum-Icon--sizeS\" focusable=\"false\" aria-hidden=\"true\" aria-label=\"Delete\">\n        <use xlink:href=\"#spectrum-icon-18-Delete\" />\n      </svg>\n    </button>\n  </div>\n\n</div>\n\n<div class=\"spectrum-QuickActions-overlay\" style=\"padding: 40px;\">\n\n  <div class=\"spectrum-QuickActions spectrum-QuickActions--textOnly is-open\">\n    <button class=\"spectrum-ActionButton spectrum-ActionButton--quiet\">\n      <span class=\"spectrum-ActionButton-label\">Edit</span>\n    </button>\n    <button class=\"spectrum-ActionButton spectrum-ActionButton--quiet\">\n      <span class=\"spectrum-ActionButton-label\">Copy</span>\n    </button>\n    <button class=\"spectrum-ActionButton spectrum-ActionButton--quiet\">\n      <span class=\"spectrum-ActionButton-label\">Delete</span>\n    </button>\n  </div>\n\n</div>\n"})], "packageSlug":"quickaction", "indexCSS":".spectrum-QuickActions {\n  visibility: hidden;\n\n  opacity: 0;\n\n  transition: transform var(--spectrum-global-animation-duration-100, 130ms) ease-in-out,\n              opacity var(--spectrum-global-animation-duration-100, 130ms) ease-in-out,\n              visibility 0ms linear var(--spectrum-global-animation-duration-100, 130ms);\n\n  pointer-events: none;\n}\n\n.spectrum-QuickActions.is-open {\n  visibility: visible;\n\n  opacity: 1;\n\n  transition-delay: 0ms;\n\n  pointer-events: auto;\n}\n\n.spectrum-QuickActions--left.is-open {\n  transform: translateX(var(--spectrum-dropdown-flyout-menu-offset-y, var(--spectrum-global-dimension-size-75)));\n}\n\n.spectrum-QuickActions--right.is-open {\n  transform: translateX(calc(-1 * var(--spectrum-dropdown-flyout-menu-offset-y, var(--spectrum-global-dimension-size-75))));\n}\n\n.spectrum-QuickActions {\n  box-sizing: border-box;\n\n  display: -ms-inline-flexbox;\n\n  display: inline-flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n\n  padding: var(--spectrum-quickactions-padding-y, var(--spectrum-global-dimension-size-50)) var(--spectrum-quickactions-padding-x, var(--spectrum-global-dimension-size-50));\n\n  height: var(--spectrum-quickactions-height, var(--spectrum-global-dimension-size-500));\n\n  border-radius: var(--spectrum-quickactions-border-radius, var(--spectrum-alias-border-radius-regular));\n}\n\n.spectrum-QuickActions .spectrum-ActionButton + .spectrum-ActionButton {\n    margin-left: var(--spectrum-quickactions-icon-button-gap-x, var(--spectrum-global-dimension-size-100));\n  }\n\n.spectrum-QuickActions--textOnly .spectrum-ActionButton + .spectrum-ActionButton {\n    margin-left: var(--spectrum-quickactions-text-button-gap-x, var(--spectrum-global-dimension-size-50));\n  }\n\n.spectrum-QuickActions-overlay {\n  background-color: var(--spectrum-quickactions-overlay-color, var(--spectrum-alias-background-color-quickactions-overlay));\n}\n\n.spectrum-QuickActions {\n  background-color: var(--spectrum-quickactions-background-color, var(--spectrum-alias-background-color-quickactions));\n}\n", "peerDependencies":({"@spectrum-css/checkbox":"^2.0.0", "@spectrum-css/vars":"^2.0.0"}), "packageVersion":"2.0.0", "packageName":"@spectrum-css/quickaction", "peerCSS":".spectrum-Checkbox {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: start;\n      align-items: flex-start;\n\n  position: relative;\n\n  min-height: var(--spectrum-checkbox-height, var(--spectrum-global-dimension-size-400));\n  max-width: 100%;\n\n  margin-right: calc(var(--spectrum-checkbox-cursor-hit-x, var(--spectrum-global-dimension-size-100)) * 2);\n\n  vertical-align: top;\n}\n\n.spectrum-Checkbox-input {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n  overflow: visible;\n  box-sizing: border-box;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  left: calc(var(--spectrum-checkbox-cursor-hit-x, var(--spectrum-global-dimension-size-100)) * -1);\n  width: calc(100% + var(--spectrum-checkbox-cursor-hit-x, var(--spectrum-global-dimension-size-100)) * 2);;\n  height: 100%;\n\n  opacity: .0001;\n  z-index: 1;\n\n  cursor: pointer;\n}\n\n.spectrum-Checkbox-input:disabled {\n    cursor: default;\n  }\n\n.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-width: calc(var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175)) / 2);\n  }\n\n.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box .spectrum-Checkbox-checkmark {\n      transform: scale(1);\n      opacity: 1;\n    }\n\n.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-width: calc(var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175)) / 2);\n  }\n\n.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box .spectrum-Checkbox-checkmark, .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box .spectrum-Checkbox-checkmark {\n      display: none;\n    }\n\n.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box .spectrum-Checkbox-partialCheckmark, .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box .spectrum-Checkbox-partialCheckmark {\n      display: block;\n\n      transform: scale(1);\n      opacity: 1;\n    }\n\n.spectrum-Checkbox-label {\n  margin-left: var(--spectrum-checkbox-text-gap, var(--spectrum-global-dimension-size-125));\n  font-size: var(--spectrum-checkbox-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-checkbox-text-font-weight, var(--spectrum-global-font-weight-regular));\n  transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n\n  margin-top: var(--spectrum-global-dimension-size-75);\n}\n\n.spectrum-Checkbox-box {\n  position: relative;\n  box-sizing: border-box;\n  width: var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175));\n  margin: calc((var(--spectrum-checkbox-height, var(--spectrum-global-dimension-size-400)) - var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175))) / 2) 0;\n\n  -ms-flex-positive: 0;\n\n      flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n\n  border-radius: var(--spectrum-checkbox-box-border-radius, var(--spectrum-alias-border-radius-small));\n  border-width: var(--spectrum-checkbox-box-border-size, var(--spectrum-alias-border-size-thick));\n  border-style: solid;\n\n  transition: border var(--spectrum-global-animation-duration-100, 130ms) ease-in-out, box-shadow var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n}\n\n.spectrum-Checkbox-checkmark,\n.spectrum-Checkbox-partialCheckmark {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  margin-top: calc(var(--spectrum-icon-checkmark-small-height) / -2);\n  margin-left: calc(var(--spectrum-icon-checkmark-small-width) / -2);\n\n  opacity: 0;\n  transform: scale(0);\n\n  transition: opacity var(--spectrum-global-animation-duration-100, 130ms) ease-in-out, transform var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n}\n\n.spectrum-Checkbox-partialCheckmark {\n  display: none;\n}\n\n.spectrum-Checkbox-label {\n  color: var(--spectrum-checkbox-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-Checkbox-box {\n  border-color: var(--spectrum-checkbox-box-border-color, var(--spectrum-global-color-gray-600));\n  background-color: var(--spectrum-checkbox-box-background-color, var(--spectrum-global-color-gray-75));\n}\n\n.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box,\n.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n  border-color: var(--spectrum-checkbox-box-border-color-selected, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Checkbox:hover.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-selected-hover, var(--spectrum-global-color-gray-800));\n\n  }\n\n.spectrum-Checkbox:active.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-selected-down, var(--spectrum-global-color-gray-900));\n\n  }\n\n.spectrum-Checkbox {\n  border-color: var(--spectrum-checkbox-box-border-color, var(--spectrum-global-color-gray-600));\n}\n\n.spectrum-Checkbox:hover .spectrum-Checkbox-box {\n      border-color: var(--spectrum-checkbox-box-border-color-hover, var(--spectrum-global-color-gray-700));\n\n      box-shadow: none;\n    }\n\n.spectrum-Checkbox:hover .spectrum-Checkbox-label {\n      color: var(--spectrum-checkbox-text-color-hover, var(--spectrum-alias-text-color-hover));\n    }\n\n.spectrum-Checkbox:active .spectrum-Checkbox-box {\n      border-color: var(--spectrum-checkbox-box-border-color-down, var(--spectrum-global-color-gray-800));\n\n    }\n\n.spectrum-Checkbox:active .spectrum-Checkbox-label {\n      color: var(--spectrum-checkbox-text-color-down, var(--spectrum-alias-text-color-down));\n    }\n\n.spectrum-Checkbox .spectrum-Checkbox-checkmark,\n  .spectrum-Checkbox .spectrum-Checkbox-partialCheckmark {\n    color: var(--spectrum-checkbox-checkmark-color, var(--spectrum-global-color-gray-75));\n  }\n\n.spectrum-Checkbox-input:disabled + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-disabled, var(--spectrum-global-color-gray-400)) !important;\n\n    background-color: var(--spectrum-checkbox-box-background-color-disabled, var(--spectrum-global-color-gray-75));\n  }\n\n.spectrum-Checkbox-input:disabled ~ .spectrum-Checkbox-label {\n    color: var(--spectrum-checkbox-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-Checkbox-input.focus-ring + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-key-focus, var(--spectrum-alias-border-color-focus)) !important;\n\n    box-shadow: 0 0 0 1px var(--spectrum-checkbox-box-border-color-key-focus, var(--spectrum-alias-border-color-focus)) !important;\n  }\n\n.spectrum-Checkbox-input.focus-ring ~ .spectrum-Checkbox-label {\n    color: var(--spectrum-checkbox-text-color-key-focus, var(--spectrum-alias-text-color-key-focus)) !important;\n  }\n\n.spectrum-Checkbox--quiet.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox--quiet .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n  border-color: var(--spectrum-checkbox-quiet-box-border-color-selected, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Checkbox--quiet:hover.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox--quiet:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-quiet-box-border-color-selected-hover, var(--spectrum-global-color-gray-800));\n  }\n\n.spectrum-Checkbox--quiet:active.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox--quiet:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-quiet-box-border-color-selected-down, var(--spectrum-global-color-gray-900));\n  }\n\n.spectrum-Checkbox.is-invalid .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,\n  .spectrum-Checkbox.is-invalid .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-error, var(--spectrum-global-color-red-500));\n  }\n\n.spectrum-Checkbox.is-invalid .spectrum-Checkbox-label {\n    color: var(--spectrum-checkbox-text-color-error, var(--spectrum-global-color-red-600));\n  }\n\n.spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,\n    .spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-box {\n      border-color: var(--spectrum-checkbox-box-border-color-error-hover, var(--spectrum-global-color-red-600));\n    }\n\n.spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-label {\n      color: var(--spectrum-checkbox-text-color-error-hover, var(--spectrum-global-color-red-700));\n    }\n\n.spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,\n    .spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-box {\n      border-color: var(--spectrum-checkbox-box-border-color-error-down, var(--spectrum-global-color-red-700));\n    }\n\n.spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-label {\n      color: var(--spectrum-checkbox-text-color-error-down, var(--spectrum-global-color-red-700));\n    }\n"})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ })

}]);
//# sourceMappingURL=50.js.map