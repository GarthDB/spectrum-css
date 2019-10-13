(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./data/yml/decoratedtextfield.yml":
/*!*****************************************!*\
  !*** ./data/yml/decoratedtextfield.yml ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"name":"Text Field - Decorated", "description":"A Spectrum text field with an additional icon. The icon must be the Small size (18px) in order for it to be positioned correctly.", "examples":[({"id":"textfield", "name":"Standard", "markup":"<div class=\"spectrum-DecoratedTextfield is-decorated\">\n  <label for=\"DecoratedTextField-single\" class=\"spectrum-FieldLabel\">Search</label>\n\n  <input id=\"DecoratedTextField-single\" placeholder=\"Enter your name\" class=\"spectrum-Textfield spectrum-DecoratedTextfield-field\" aria-invalid=\"false\" type=\"text\">\n\n  <svg class=\"spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Icon--sizeS spectrum-DecoratedTextfield-icon\" focusable=\"false\" aria-hidden=\"true\">\n    <use xlink:href=\"#spectrum-css-icon-InfoMedium\" />\n  </svg>\n</div>\n"}), ({"id":"textfield", "name":"Multiline", "markup":"<div class=\"spectrum-DecoratedTextfield is-decorated\">\n  <label for=\"DecoratedTextField-multiline\" class=\"spectrum-FieldLabel spectrum-FieldLabel--left\">Search</label>\n\n  <textarea id=\"DecoratedTextField-multiline\" placeholder=\"Enter your life story\" name=\"field\" value=\"\" class=\"spectrum-Textfield spectrum-Textfield--multiline spectrum-DecoratedTextfield-field\"></textarea>\n\n  <svg class=\"spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Icon--sizeS spectrum-DecoratedTextfield-icon\" focusable=\"false\" aria-hidden=\"true\">\n    <use xlink:href=\"#spectrum-css-icon-InfoMedium\" />\n  </svg>\n</div>\n"})], "packageName":"decoratedtextfield", "indexCSS":".spectrum-DecoratedTextfield {\n  display: inline-block;\n  position: relative;\n}\n\n.spectrum-DecoratedTextfield-icon {\n  width: var(--spectrum-textfield-icon-size, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-textfield-icon-size, var(--spectrum-global-dimension-size-225));\n\n  position: absolute;\n  bottom: calc(var(--spectrum-textfield-icon-frame) / 2 - var(--spectrum-textfield-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n  right: calc(var(--spectrum-textfield-icon-frame) / 2 - var(--spectrum-textfield-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n}\n\n.spectrum-DecoratedTextfield-field {\n  padding-right: var(--spectrum-textfield-icon-frame);\n}\n", "peerDependencies":({"@spectrum-css/fieldlabel":"^2.0.0", "@spectrum-css/icon":"^2.0.0", "@spectrum-css/textfield":"^2.0.0", "@spectrum-css/vars":"^2.0.0"}), "peerCSS":".spectrum-FieldLabel,\n.spectrum-Form-itemLabel {\n  display: block;\n\n  box-sizing: border-box;\n\n  padding: var(--spectrum-fieldlabel-padding-top, var(--spectrum-global-dimension-size-50)) 0 var(--spectrum-fieldlabel-padding-bottom, var(--spectrum-global-dimension-size-65));\n\n  font-size: var(--spectrum-fieldlabel-text-size, var(--spectrum-global-dimension-font-size-75));\n  font-weight: var(--spectrum-fieldlabel-text-font-weight, var(--spectrum-global-font-weight-regular));\n  line-height: var(--spectrum-fieldlabel-text-line-height, var(--spectrum-global-font-line-height-small));\n\n  vertical-align: top;\n\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  font-smoothing: subpixel-antialiased;\n}\n\n.spectrum-FieldLabel-requiredIcon {\n  margin: var(--spectrum-fieldlabel-asterisk-margin-y, var(--spectrum-global-dimension-size-50)) 0 0 var(--spectrum-fieldlabel-asterisk-gap, var(--spectrum-global-dimension-size-25));\n}\n\n.spectrum-FieldLabel--left {\n  display: inline-block;\n  padding: var(--spectrum-fieldlabel-side-padding-top, var(--spectrum-global-dimension-size-100)) var(--spectrum-fieldlabel-side-padding-x, var(--spectrum-global-dimension-size-100)) 0 0;\n}\n\n.spectrum-FieldLabel--left .spectrum-FieldLabel-requiredIcon {\n    margin: var(--spectrum-fieldlabel-side-asterisk-margin-y, 0px) 0 0 var(--spectrum-fieldlabel-asterisk-gap, var(--spectrum-global-dimension-size-25));\n  }\n\n.spectrum-FieldLabel--right {\n  display: inline-block;\n  text-align: right;\n  padding: var(--spectrum-fieldlabel-side-padding-top, var(--spectrum-global-dimension-size-100)) var(--spectrum-fieldlabel-side-padding-x, var(--spectrum-global-dimension-size-100)) 0 0;\n}\n\n.spectrum-Form {\n  display: table;\n  border-collapse: separate;\n  border-spacing: 0 var(--spectrum-global-dimension-size-300);\n  margin: calc(var(--spectrum-global-dimension-size-250) * -1) 0;\n}\n\n.spectrum-Form-item {\n  display: table-row;\n}\n\n.spectrum-Form-itemLabel {\n  display: table-cell;\n}\n\n.spectrum-Form-itemField {\n  display: table-cell;\n}\n\n.spectrum-Form--labelsAbove {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin: 0;\n}\n\n.spectrum-Form--labelsAbove .spectrum-Form-item {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n\n.spectrum-Form--labelsAbove .spectrum-Form-item + .spectrum-Form-item {\n      margin-top: var(--spectrum-global-dimension-size-100);\n    }\n\n.spectrum-FieldLabel,\n.spectrum-Form-itemLabel {\n  color: var(--spectrum-fieldlabel-text-color, var(--spectrum-alias-label-text-color));\n}\n\n.spectrum-FieldLabel.is-disabled, .spectrum-Form-itemLabel.is-disabled {\n    color: var(--spectrum-fieldlabel-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-FieldLabel.is-disabled .spectrum-FieldLabel-requiredIcon, .spectrum-Form-itemLabel.is-disabled .spectrum-FieldLabel-requiredIcon {\n      color: var(--spectrum-fieldlabel-asterisk-color-disabled, var(--spectrum-alias-text-color-disabled));\n    }\n\n.spectrum-FieldLabel-requiredIcon {\n  color: var(--spectrum-fieldlabel-asterisk-color, var(--spectrum-global-color-gray-600));\n}\n.spectrum-Icon,\n.spectrum-UIIcon {\n  display: inline-block;\n  color: inherit;\n  fill: currentColor;\n  pointer-events: none;\n}\n\n.spectrum-Icon:not(:root), .spectrum-UIIcon:not(:root) {\n    overflow: hidden;\n  }\n\n.spectrum-Icon--sizeXXS,\n  .spectrum-Icon--sizeXXS img,\n  .spectrum-Icon--sizeXXS svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n  }\n\n.spectrum-Icon--sizeXS,\n  .spectrum-Icon--sizeXS img,\n  .spectrum-Icon--sizeXS svg {\n    height: calc(var(--spectrum-global-dimension-size-300) / 2);\n    width: calc(var(--spectrum-global-dimension-size-300) / 2);\n  }\n\n.spectrum-Icon--sizeS,\n  .spectrum-Icon--sizeS img,\n  .spectrum-Icon--sizeS svg {\n    height: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n    width: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n  }\n\n.spectrum-Icon--sizeM,\n  .spectrum-Icon--sizeM img,\n  .spectrum-Icon--sizeM svg {\n    height: var(--spectrum-global-dimension-size-300);\n    width: var(--spectrum-global-dimension-size-300);\n  }\n\n.spectrum-Icon--sizeL,\n  .spectrum-Icon--sizeL img,\n  .spectrum-Icon--sizeL svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n  }\n\n.spectrum-Icon--sizeXL,\n  .spectrum-Icon--sizeXL img,\n  .spectrum-Icon--sizeXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 2);\n    width: calc(var(--spectrum-global-dimension-size-300) * 2);\n  }\n\n.spectrum-Icon--sizeXXL,\n  .spectrum-Icon--sizeXXL img,\n  .spectrum-Icon--sizeXXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 3);\n    width: calc(var(--spectrum-global-dimension-size-300) * 3);\n  }\n\n.spectrum--medium .spectrum-UIIcon--large {\n    display: none;\n  }\n\n.spectrum--medium .spectrum-UIIcon--medium {\n    display: inline;\n  }\n\n.spectrum--large .spectrum-UIIcon--medium {\n    display: none;\n  }\n\n.spectrum--large .spectrum-UIIcon--large {\n    display: inline;\n  }\n\n.spectrum--large {\n  --ui-icon-large-display: block;\n  --ui-icon-medium-display: none;\n}\n\n.spectrum--medium {\n  --ui-icon-medium-display: block;\n  --ui-icon-large-display: none;\n}\n\n.spectrum-UIIcon--large {\n  display: var(--ui-icon-large-display);\n}\n\n.spectrum-UIIcon--medium {\n  display: var(--ui-icon-medium-display);\n}\n\n.spectrum-UIIcon-AlertMedium {\n  width: var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-alert-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-AlertSmall {\n  width: var(--spectrum-icon-alert-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-alert-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-ArrowDownSmall {\n  width: var(--spectrum-icon-arrow-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-arrow-down-small-height);\n}\n\n.spectrum-UIIcon-ArrowLeftMedium {\n  width: var(--spectrum-icon-arrow-left-medium-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-arrow-left-medium-height);\n}\n\n.spectrum-UIIcon-Asterisk {\n  width: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CheckmarkMedium {\n  width: var(--spectrum-icon-checkmark-medium-width);\n  height: var(--spectrum-icon-checkmark-medium-height);\n}\n\n.spectrum-UIIcon-CheckmarkSmall {\n  width: var(--spectrum-icon-checkmark-small-width);\n  height: var(--spectrum-icon-checkmark-small-height);\n}\n\n.spectrum-UIIcon-ChevronDownMedium {\n  width: var(--spectrum-icon-chevron-down-medium-width);\n  height: var(--spectrum-icon-chevron-down-medium-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronDownSmall {\n  width: var(--spectrum-icon-chevron-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-down-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronLeftLarge {\n  width: var(--spectrum-icon-chevron-left-large-width);\n  height: var(--spectrum-icon-chevron-left-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronLeftMedium {\n  width: var(--spectrum-icon-chevron-left-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-left-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightLarge {\n  width: var(--spectrum-icon-chevron-right-large-width);\n  height: var(--spectrum-icon-chevron-right-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronRightMedium {\n  width: var(--spectrum-icon-chevron-right-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightSmall {\n  width: var(--spectrum-icon-chevron-right-small-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-ChevronUpSmall {\n  width: var(--spectrum-icon-chevron-up-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-up-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-CornerTriangle {\n  width: var(--spectrum-icon-cornertriangle-width, var(--spectrum-global-dimension-size-65));\n  height: var(--spectrum-icon-cornertriangle-height, var(--spectrum-global-dimension-size-65));\n}\n\n.spectrum-UIIcon-CrossLarge {\n  width: var(--spectrum-icon-cross-large-width);\n  height: var(--spectrum-icon-cross-large-height);\n}\n\n.spectrum-UIIcon-CrossMedium {\n  width: var(--spectrum-icon-cross-medium-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-medium-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CrossSmall {\n  width: var(--spectrum-icon-cross-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-DashSmall {\n  width: var(--spectrum-icon-dash-small-width);\n  height: var(--spectrum-icon-dash-small-height);\n}\n\n.spectrum-UIIcon-DoubleGripper {\n  width: var(--spectrum-icon-doublegripper-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-doublegripper-height, var(--spectrum-global-dimension-size-50));\n}\n\n.spectrum-UIIcon-FolderBreadcrumb {\n  width: var(--spectrum-icon-folderbreadcrumb-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-folderbreadcrumb-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-InfoMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-InfoSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-Magnifier {\n  width: var(--spectrum-icon-magnifier-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-magnifier-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-SkipLeft {\n  width: var(--spectrum-icon-skip-left-width);\n  height: var(--spectrum-icon-skip-left-height);\n}\n\n.spectrum-UIIcon-SkipRight {\n  width: var(--spectrum-icon-skip-right-width);\n  height: var(--spectrum-icon-skip-right-height);\n}\n\n.spectrum-UIIcon-Star {\n  width: var(--spectrum-icon-star-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-StarOutline {\n  width: var(--spectrum-icon-star-outline-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-outline-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessMedium {\n  width: var(--spectrum-icon-success-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-success-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessSmall {\n  width: var(--spectrum-icon-success-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-success-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-TripleGripper {\n  width: var(--spectrum-icon-triplegripper-width);\n  height: var(--spectrum-icon-triplegripper-height, var(--spectrum-global-dimension-size-85));\n}\n.spectrum-Textfield {\n  box-sizing: border-box;\n  border: var(--spectrum-textfield-border-size, var(--spectrum-alias-border-size-thin)) solid;\n  border-radius: var(--spectrum-textfield-border-radius, var(--spectrum-alias-border-radius-regular));\n  padding: 3px var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) 5px var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150));\n  text-indent: 0;\n\n  min-width: var(--spectrum-textfield-min-width, var(--spectrum-global-dimension-size-600));\n  height: var(--spectrum-textfield-height, var(--spectrum-alias-single-line-height));\n  width: var(--spectrum-alias-single-line-width, var(--spectrum-global-dimension-size-2400));\n\n  vertical-align: top;\n  margin: 0;\n  overflow: visible;\n  font-family: adobe-clean, Helvetica, Arial, sans-serif;\n  font-size: var(--spectrum-textfield-text-size, var(--spectrum-alias-font-size-default));\n  line-height: var(--spectrum-textfield-text-line-height, var(--spectrum-alias-body-text-line-height));\n  text-overflow: ellipsis;\n\n  transition: border-color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out, box-shadow var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n\n  outline: none;\n\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n}\n\n.spectrum-Textfield::placeholder {\n    font-weight: var(--spectrum-textfield-placeholder-text-font-weight, var(--spectrum-global-font-weight-regular));\n    font-style: var(--spectrum-textfield-placeholder-text-font-style, var(--spectrum-global-font-style-italic));\n    transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n    opacity: 1;\n  }\n\n.spectrum-Textfield::-ms-input-placeholder {\n    font-weight: var(--spectrum-textfield-placeholder-text-font-weight, var(--spectrum-global-font-weight-regular));\n    font-style: var(--spectrum-textfield-placeholder-text-font-style, var(--spectrum-global-font-style-italic));\n    transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n    opacity: 1;\n  }\n\n.spectrum-Textfield:lang(ja)::placeholder, .spectrum-Textfield:lang(zh)::placeholder, .spectrum-Textfield:lang(ko)::placeholder {\n       font-style: normal;\n    }\n\n.spectrum-Textfield:lang(ja)::-ms-input-placeholder, .spectrum-Textfield:lang(zh)::-ms-input-placeholder, .spectrum-Textfield:lang(ko)::-ms-input-placeholder {\n       font-style: normal;\n    }\n\n.spectrum-Textfield:hover::placeholder {\n      font-weight: var(--spectrum-textfield-placeholder-text-font-weight, var(--spectrum-global-font-weight-regular));\n    }\n\n.spectrum-Textfield:disabled {\n    opacity: 1;\n  }\n\n.spectrum-Textfield:disabled::placeholder {\n      font-weight: var(--spectrum-textfield-placeholder-text-font-weight, var(--spectrum-global-font-weight-regular));\n    }\n\n.spectrum-Textfield::-ms-clear {\n    width: 0;\n    height: 0;\n  }\n\n.spectrum-Textfield::-webkit-inner-spin-button,\n  .spectrum-Textfield::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n.spectrum-Textfield:-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n.spectrum-Textfield.is-invalid,\n  .spectrum-Textfield:invalid,\n  .spectrum-Textfield.is-valid {\n    background-repeat: no-repeat;\n  }\n\n.spectrum-Textfield.is-invalid,\n  .spectrum-Textfield:invalid {\n    background-size: var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225)) var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225));\n    background-position: calc(100% - var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150))) 50%;\n    padding-right: calc(var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) + var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-icon-margin-left, var(--spectrum-global-dimension-size-150)));\n  }\n\n.spectrum-Textfield.is-valid {\n    background-size: var(--spectrum-icon-checkmark-medium-width) var(--spectrum-icon-checkmark-medium-width);\n    background-position: calc(100% - var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150))) 50%;\n    padding-right: calc(var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-textfield-icon-margin-left, var(--spectrum-global-dimension-size-150)));\n  }\n\n.spectrum-Textfield--multiline {\n  height: auto;\n  min-height: var(--spectrum-global-dimension-size-700);\n  padding: 3px var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) 5px var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150));\n  overflow: auto;\n}\n\n.spectrum-Textfield--multiline.is-invalid,\n  .spectrum-Textfield--multiline:invalid,\n  .spectrum-Textfield--multiline.is-valid {\n    background-position: calc(100% - var(--spectrum-textfield-icon-size, var(--spectrum-global-dimension-size-225)) / 2) calc(100% - var(--spectrum-textfield-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n  }\n\n.spectrum-Textfield--quiet {\n  border-radius: 0;\n  border-width: 0 0 var(--spectrum-textfield-quiet-border-size, var(--spectrum-alias-border-size-thin)) 0;\n  padding-left: var(--spectrum-textfield-quiet-padding-x, 0);\n  padding-right: var(--spectrum-textfield-quiet-padding-x, 0);\n  resize: none;\n  overflow-y: hidden;\n}\n\n.spectrum-Textfield--quiet.is-invalid,\n  .spectrum-Textfield--quiet:invalid,\n  .spectrum-Textfield--quiet.is-valid {\n    background-position: 100% 50%;\n  }\n\n.spectrum-Textfield {\n  background-color: var(--spectrum-textfield-background-color, var(--spectrum-global-color-gray-50));\n  border-color: var(--spectrum-textfield-border-color, var(--spectrum-global-color-gray-300));\n  color: var(--spectrum-textfield-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-Textfield::placeholder {\n    color: var(--spectrum-textfield-placeholder-text-color, var(--spectrum-alias-placeholder-text-color));\n  }\n\n.spectrum-Textfield:hover {\n    border-color: var(--spectrum-textfield-border-color-hover, var(--spectrum-global-color-gray-400));\n    box-shadow: none;\n  }\n\n.spectrum-Textfield:hover::placeholder {\n      color: var(--spectrum-textfield-placeholder-text-color-hover, var(--spectrum-alias-placeholder-text-color-hover));\n    }\n\n.spectrum-Textfield:focus {\n    border-color: var(--spectrum-textfield-border-color-down, var(--spectrum-alias-border-color-down));\n  }\n\n.spectrum-Textfield.focus-ring:not(:active) {\n      border-color: var(--spectrum-textfield-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n      box-shadow: 0 0 0 1px var(--spectrum-textfield-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    }\n\n.spectrum-Textfield[disabled] {\n    background-color: var(--spectrum-textfield-background-color-disabled, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-textfield-border-color-disabled, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-textfield-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n    -webkit-text-fill-color: var(--spectrum-textfield-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-Textfield[disabled]::placeholder {\n      color: var(--spectrum-textfield-placeholder-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n    }\n\n.spectrum-Textfield.is-invalid,\n  .spectrum-Textfield:invalid {\n    border-color: var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18' viewBox='0 0 18 18' width='18'%3E%3Cpath style='fill:var%28--spectrum-alert-error-border-color%2C var%28--spectrum-semantic-negative-color-border%29%29' d='M8.564 1.289L.2 16.256A.5.5 0 0 0 .636 17h16.728a.5.5 0 0 0 .5-.5.494.494 0 0 0-.064-.244L9.436 1.289a.5.5 0 0 0-.872 0zM10 14.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25zm0-3a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-6a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25z'/%3E%3C/svg%3E\");\n  }\n\n.spectrum-Textfield.is-invalid.focus-ring:not(:active), .spectrum-Textfield:invalid.focus-ring:not(:active) {\n        border-color: var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n        box-shadow: 0 0 0 1px var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n      }\n\n.spectrum-Textfield.is-valid {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='12' viewBox='0 0 12 12' width='12'%3E%3Cpath style='fill:var%28--spectrum-alert-success-icon-color%2C var%28--spectrum-semantic-positive-color-icon%29%29' d='M4.5 10a1.023 1.023 0 0 1-.8-.384l-2.488-3a1 1 0 0 1 1.577-1.233L4.5 7.376l4.712-5.991a1 1 0 1 1 1.576 1.23l-5.511 7A.977.977 0 0 1 4.5 10z'/%3E%3C/svg%3E\");\n  }\n\n.spectrum-Textfield--quiet {\n  background-color: var(--spectrum-textfield-quiet-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-textfield-quiet-border-color, var(--spectrum-global-color-gray-300));\n}\n\n.spectrum-Textfield--quiet:hover {\n    border-color: var(--spectrum-textfield-quiet-border-color-hover, var(--spectrum-global-color-gray-400));\n  }\n\n.spectrum-Textfield--quiet:active {\n    border-color: var(--spectrum-textfield-quiet-border-color-down, var(--spectrum-alias-border-color-down));\n  }\n\n.spectrum-Textfield--quiet:focus {\n    border-color: var(--spectrum-textfield-quiet-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    box-shadow: 0 1px 0 var(--spectrum-textfield-quiet-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n  }\n\n.spectrum-Textfield--quiet.focus-ring:not(:active) {\n      border-color: var(--spectrum-textfield-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n      box-shadow: 0 1px 0 var(--spectrum-textfield-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    }\n\n.spectrum-Textfield--quiet:disabled {\n    background-color: var(--spectrum-textfield-quiet-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n    border-color:  var(--spectrum-textfield-quiet-border-color-disabled, var(--spectrum-alias-border-color-mid));\n  }\n\n.spectrum-Textfield--quiet.is-invalid,\n  .spectrum-Textfield--quiet:invalid {\n    border-color: var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n  }\n\n.spectrum-Textfield--quiet.is-invalid:focus, .spectrum-Textfield--quiet:invalid:focus {\n      box-shadow: 0 1px 0 var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n    }\n\n.spectrum-Textfield--quiet.is-invalid.focus-ring:not(:active), .spectrum-Textfield--quiet:invalid.focus-ring:not(:active) {\n        border-color: var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n        box-shadow: 0 1px 0 var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n      }\n"})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ })

}]);
//# sourceMappingURL=29.js.map