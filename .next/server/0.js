exports.ids = [0];
exports.modules = {

/***/ "./data/accordion.yml":
/*!****************************!*\
  !*** ./data/accordion.yml ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"name":"Accordion", "examples":[({"name":"Accordion", "slug":"accordion", "description":"While remaining backward compatible, the recommended markup has been updated to implement the [WAI-ARIA 1.1 Accordion design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) to better support accessibility for keyboard and screen reader users.", "markup":"<!-- WAI-ARIA 1.1: Accordion container role changed from \"tablist\" to \"region\" -->\n<div class=\"spectrum-Accordion\" role=\"region\">\n  <div class=\"spectrum-Accordion-item is-open\" role=\"presentation\">\n\n    <!-- WAI-ARIA 1.1: Item header is a <button> wrapped within a <h3> element, rather than a <div> element with role=\"tab\" -->\n    <h3 class=\"spectrum-Accordion-itemHeading\">\n      <!-- WAI-ARIA 1.1: Item header <button> uses aria-expanded attribute to indicate expanded state. -->\n      <button class=\"spectrum-Accordion-itemHeader\" type=\"button\" id=\"spectrum-accordion-item-0-header\" aria-controls=\"spectrum-accordion-item-0-content\" aria-expanded=\"true\">Recent</button>\n      <svg class=\"spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-Accordion-itemIndicator\" focusable=\"false\" aria-hidden=\"true\">\n        <use xlink:href=\"#spectrum-css-icon-ChevronRightMedium\" />\n      </svg>\n    </h3>\n\n    <!-- WAI-ARIA 1.1: Item content role changed from \"tabpanel\" to \"region\" -->\n    <div class=\"spectrum-Accordion-itemContent\" role=\"region\" id=\"spectrum-accordion-item-0-content\" aria-labelledby=\"spectrum-accordion-item-0-header\">Item 1</div>\n  </div>\n  <div class=\"spectrum-Accordion-item is-disabled\" role=\"presentation\">\n    <h3 class=\"spectrum-Accordion-itemHeading\">\n      <button class=\"spectrum-Accordion-itemHeader\" type=\"button\" disabled id=\"spectrum-accordion-item-1-header\" aria-controls=\"spectrum-accordion-item-1-content\" aria-expanded=\"false\">Architecture</button>\n      <svg class=\"spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-Accordion-itemIndicator\" focusable=\"false\" aria-hidden=\"true\">\n        <use xlink:href=\"#spectrum-css-icon-ChevronRightMedium\" />\n      </svg>\n    </h3>\n    <div class=\"spectrum-Accordion-itemContent\" role=\"region\" id=\"spectrum-accordion-item-1-content\" aria-labelledby=\"spectrum-accordion-item-1-header\">Item 2</div>\n  </div>\n  <div class=\"spectrum-Accordion-item\" role=\"presentation\">\n    <h3 class=\"spectrum-Accordion-itemHeading\">\n      <button class=\"spectrum-Accordion-itemHeader\" type=\"button\" id=\"spectrum-accordion-item-2-header\" aria-controls=\"spectrum-accordion-item-2-content\" aria-expanded=\"false\">Nature</button>\n      <svg class=\"spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-Accordion-itemIndicator\" focusable=\"false\" aria-hidden=\"true\">\n        <use xlink:href=\"#spectrum-css-icon-ChevronRightMedium\" />\n      </svg>\n    </h3>\n    <div class=\"spectrum-Accordion-itemContent\" role=\"region\" id=\"spectrum-accordion-item-2-content\" aria-labelledby=\"spectrum-accordion-item-2-header\">Item 3</div>\n  </div>\n  <div class=\"spectrum-Accordion-item\" role=\"presentation\">\n    <h3 class=\"spectrum-Accordion-itemHeading\">\n      <button class=\"spectrum-Accordion-itemHeader\" type=\"button\" id=\"spectrum-accordion-item-3-header\" aria-controls=\"spectrum-accordion-item-3-content\" aria-expanded=\"false\">Really Long Accordion Item According to Our Predictions</button>\n      <svg class=\"spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-Accordion-itemIndicator\" focusable=\"false\" aria-hidden=\"true\">\n        <use xlink:href=\"#spectrum-css-icon-ChevronRightMedium\" />\n      </svg>\n    </h3>\n    <div class=\"spectrum-Accordion-itemContent\" role=\"region\" id=\"spectrum-accordion-item-3-content\" aria-labelledby=\"spectrum-accordion-item-3-header\">Item 4</div>\n  </div>\n</div>\n"})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ })

};;
//# sourceMappingURL=0.js.map