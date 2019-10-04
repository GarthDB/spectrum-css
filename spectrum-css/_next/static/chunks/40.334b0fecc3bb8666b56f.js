(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{E3NY:function(e,s){const n=[{name:"Dropdown",status:"Verified",examples:[{id:"dropdown",name:"Standard",markup:'<h4>Closed</h4>\n<div class="spectrum-Dropdown" style="width: 240px;">\n  <button class="spectrum-FieldButton spectrum-Dropdown-trigger" aria-haspopup="true">\n    <span class="spectrum-Dropdown-label is-placeholder">Select a Country with a very long label, too long in fact</span>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n\n<h4>Open</h4>\n<div class="spectrum-Dropdown is-open" style="width: 240px;">\n  <button class="spectrum-FieldButton spectrum-Dropdown-trigger is-selected" aria-haspopup="true">\n    <span class="spectrum-Dropdown-label">Ballard</span>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n  <div class="spectrum-Popover spectrum-Popover--bottom spectrum-Dropdown-popover is-open" style="width: 100%">\n    <ul class="spectrum-Menu" role="listbox">\n      <li class="spectrum-Menu-item is-selected" role="option" aria-selected="true" tabindex="0">\n        <span class="spectrum-Menu-itemLabel">Ballard</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-Menu-item" role="option" tabindex="0">\n        <span class="spectrum-Menu-itemLabel">Fremont</span>\n      </li>\n      <li class="spectrum-Menu-item" role="option" tabindex="0">\n        <span class="spectrum-Menu-itemLabel">Greenwood</span>\n      </li>\n      <li class="spectrum-Menu-divider" role="separator"></li>\n      <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">\n        <span class="spectrum-Menu-itemLabel">United States of America</span>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class="dummy-spacing"></div>\n\n<h4>With Thumbnails</h4>\n<div class="spectrum-Dropdown is-open" style="width: 240px;">\n  <button class="spectrum-FieldButton spectrum-Dropdown-trigger is-selected" aria-haspopup="true">\n    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n      <use xlink:href="#spectrum-icon-18-Image" />\n    </svg>\n    <span class="spectrum-Dropdown-label">Ballard</span>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n  <div class="spectrum-Popover spectrum-Popover--bottom spectrum-Dropdown-popover is-open" style="width: 100%">\n    <ul class="spectrum-Menu" role="listbox">\n      <li class="spectrum-Menu-item is-selected" role="option" aria-selected="true" tabindex="0">\n        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n          <use xlink:href="#spectrum-icon-18-Image" />\n        </svg>\n        <span class="spectrum-Menu-itemLabel">Ballard</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-Menu-item" role="option" tabindex="0">\n        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n          <use xlink:href="#spectrum-icon-18-Image" />\n        </svg>\n        <span class="spectrum-Menu-itemLabel">Fremont</span>\n      </li>\n      <li class="spectrum-Menu-item" role="option" tabindex="0">\n        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n          <use xlink:href="#spectrum-icon-18-Image" />\n        </svg>\n        <span class="spectrum-Menu-itemLabel">Greenwood</span>\n      </li>\n      <li class="spectrum-Menu-divider" role="separator"></li>\n      <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">\n        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n          <use xlink:href="#spectrum-icon-18-Image" />\n        </svg>\n        <span class="spectrum-Menu-itemLabel">United States of America</span>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class="dummy-spacing"></div>\n\n<h4>Disabled</h4>\n<div class="spectrum-Dropdown is-disabled" style="width: 240px;">\n  <button class="spectrum-FieldButton spectrum-Dropdown-trigger" disabled aria-haspopup="true">\n    <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n\n<h4>Closed</h4>\n<div class="spectrum-Dropdown is-invalid" style="width: 240px;">\n  <button class="spectrum-FieldButton spectrum-Dropdown-trigger is-invalid" aria-haspopup="true">\n    <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>\n    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">\n      <use xlink:href="#spectrum-icon-18-Alert" />\n    </svg>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n\n<h4>Open</h4>\n<div class="spectrum-Dropdown is-open is-invalid" style="width: 240px;">\n  <button class="spectrum-FieldButton spectrum-Dropdown-trigger is-invalid is-selected" aria-haspopup="true">\n    <span class="spectrum-Dropdown-label">Ballard</span>\n    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">\n      <use xlink:href="#spectrum-icon-18-Alert" />\n    </svg>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n  <div class="spectrum-Popover spectrum-Popover--bottom spectrum-Dropdown-popover is-open" style="width: 100%">\n    <ul class="spectrum-Menu" role="listbox">\n      <li class="spectrum-Menu-item is-selected" role="option" aria-selected="true" tabindex="0">\n        <span class="spectrum-Menu-itemLabel">Ballard</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-Menu-item" role="option" tabindex="0">\n        <span class="spectrum-Menu-itemLabel">Fremont</span>\n      </li>\n      <li class="spectrum-Menu-item" role="option" tabindex="0">\n        <span class="spectrum-Menu-itemLabel">Greenwood</span>\n      </li>\n      <li class="spectrum-Menu-divider" role="separator"></li>\n      <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">\n        <span class="spectrum-Menu-itemLabel">United States of America</span>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class="dummy-spacing"></div>\n\n<h4>Disabled</h4>\n<div class="spectrum-Dropdown is-invalid is-disabled" style="width: 240px;">\n  <button class="spectrum-FieldButton spectrum-Dropdown-trigger is-invalid" disabled aria-haspopup="true">\n    <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>\n    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">\n      <use xlink:href="#spectrum-icon-18-Alert" />\n    </svg>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n'},{id:"dropdown-quiet",name:"Quiet",status:"Verified",markup:'<h4>Closed</h4>\n<div class="spectrum-Dropdown spectrum-Dropdown--quiet">\n  <button class="spectrum-FieldButton spectrum-FieldButton--quiet spectrum-Dropdown-trigger" aria-haspopup="true">\n    <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n\n<h4>Open</h4>\n<div class="spectrum-Dropdown spectrum-Dropdown--quiet is-open">\n  <button class="spectrum-FieldButton spectrum-FieldButton--quiet spectrum-Dropdown-trigger is-selected" aria-haspopup="true">\n    <span class="spectrum-Dropdown-label">Ballard</span>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n<div class="spectrum-Popover spectrum-Popover--bottom spectrum-Dropdown-popover spectrum-Dropdown-popover--quiet is-open" style="display: block;">\n  <ul class="spectrum-Menu" role="listbox">\n    <li class="spectrum-Menu-item is-selected" role="option" aria-selected="true" tabindex="0">\n      <span class="spectrum-Menu-itemLabel">Ballard</span>\n      <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />\n      </svg>\n    </li>\n    <li class="spectrum-Menu-item" role="option" tabindex="0">\n      <span class="spectrum-Menu-itemLabel">Fremont</span>\n    </li>\n    <li class="spectrum-Menu-item" role="option" tabindex="0">\n      <span class="spectrum-Menu-itemLabel">Greenwood</span>\n    </li>\n    <li class="spectrum-Menu-divider" role="separator"></li>\n    <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">\n      <span class="spectrum-Menu-itemLabel">United States of America</span>\n    </li>\n  </ul>\n</div>\n\n<div class="dummy-spacing"></div>\n\n<h4>With Thumbnails</h4>\n<div class="spectrum-Dropdown spectrum-Dropdown--quiet is-open">\n  <button class="spectrum-FieldButton spectrum-FieldButton--quiet spectrum-Dropdown-trigger is-selected" aria-haspopup="true">\n    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n      <use xlink:href="#spectrum-icon-18-Image" />\n    </svg>\n    <span class="spectrum-Dropdown-label">Ballard</span>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n<div class="spectrum-Popover spectrum-Popover--bottom spectrum-Dropdown-popover spectrum-Dropdown-popover--quiet is-open" style="display: block;">\n  <ul class="spectrum-Menu" role="listbox">\n    <li class="spectrum-Menu-item is-selected" role="option" aria-selected="true" tabindex="0">\n      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n        <use xlink:href="#spectrum-icon-18-Image" />\n      </svg>\n      <span class="spectrum-Menu-itemLabel">Ballard</span>\n      <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />\n      </svg>\n    </li>\n    <li class="spectrum-Menu-item" role="option" tabindex="0">\n      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n        <use xlink:href="#spectrum-icon-18-Image" />\n      </svg>\n      <span class="spectrum-Menu-itemLabel">Fremont</span>\n    </li>\n    <li class="spectrum-Menu-item" role="option" tabindex="0">\n      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n        <use xlink:href="#spectrum-icon-18-Image" />\n      </svg>\n      <span class="spectrum-Menu-itemLabel">Greenwood</span>\n    </li>\n    <li class="spectrum-Menu-divider" role="separator"></li>\n    <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">\n      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">\n        <use xlink:href="#spectrum-icon-18-Image" />\n      </svg>\n      <span class="spectrum-Menu-itemLabel">United States of America</span>\n    </li>\n  </ul>\n</div>\n\n<div class="dummy-spacing"></div>\n\n<h4>Disabled</h4>\n<div class="spectrum-Dropdown spectrum-Dropdown--quiet is-disabled">\n  <button class="spectrum-FieldButton spectrum-FieldButton--quiet spectrum-Dropdown-trigger" disabled aria-haspopup="true">\n    <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n\n<h4>Closed</h4>\n<div class="spectrum-Dropdown spectrum-Dropdown--quiet is-invalid">\n  <button class="spectrum-FieldButton spectrum-FieldButton--quiet is-invalid spectrum-Dropdown-trigger" aria-haspopup="true">\n    <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>\n    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">\n      <use xlink:href="#spectrum-icon-18-Alert" />\n    </svg>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n\n<h4>Open</h4>\n<div class="spectrum-Dropdown spectrum-Dropdown--quiet is-open is-invalid">\n  <button class="spectrum-FieldButton spectrum-FieldButton--quiet is-invalid spectrum-Dropdown-trigger" aria-haspopup="true">\n    <span class="spectrum-Dropdown-label">Ballard</span>\n    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">\n      <use xlink:href="#spectrum-icon-18-Alert" />\n    </svg>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n<div class="spectrum-Popover spectrum-Popover--bottom spectrum-Dropdown-popover spectrum-Dropdown-popover--quiet is-open" style="display: block;">\n  <ul class="spectrum-Menu" role="listbox">\n    <li class="spectrum-Menu-item is-selected" role="option" aria-selected="true" tabindex="0">\n      <span class="spectrum-Menu-itemLabel">Ballard</span>\n      <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />\n      </svg>\n    </li>\n    <li class="spectrum-Menu-item" role="option" tabindex="0">\n      <span class="spectrum-Menu-itemLabel">Fremont</span>\n    </li>\n    <li class="spectrum-Menu-item" role="option" tabindex="0">\n      <span class="spectrum-Menu-itemLabel">Greenwood</span>\n    </li>\n    <li class="spectrum-Menu-divider" role="separator"></li>\n    <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">\n      <span class="spectrum-Menu-itemLabel">United States of America</span>\n    </li>\n  </ul>\n</div>\n\n<div class="dummy-spacing"></div>\n\n<h4>Disabled</h4>\n<div class="spectrum-Dropdown spectrum-Dropdown--quiet is-invalid is-disabled">\n  <button class="spectrum-FieldButton spectrum-FieldButton--quiet is-invalid spectrum-Dropdown-trigger" disabled aria-haspopup="true">\n    <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>\n    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">\n      <use xlink:href="#spectrum-icon-18-Alert" />\n    </svg>\n    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">\n      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />\n    </svg>\n  </button>\n</div>\n'}]}];e.exports=n.length<=1?n[0]:n}}]);