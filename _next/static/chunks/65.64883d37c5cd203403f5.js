(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"rpH/":function(e,l){const i=[{name:"Slider",examples:[{id:"slider",name:"Standard",markup:'<div class="spectrum-Slider">\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20">\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n<div class="spectrum-Slider is-disabled">\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" disabled>\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n'},{id:"slider",name:"With Label",markup:'<div class="spectrum-Slider">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-8" for="spectrum-Slider-input-8">Slider Label</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-8">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" id="spectrum-Slider-input-8">\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n<div class="spectrum-Slider is-disabled">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-9" for="spectrum-Slider-input-9">Slider Label - Disabled</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-9">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" disabled id="spectrum-Slider-input-9">\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n'},{id:"slider-fill",name:"Filled",description:"With fill.",markup:'<div class="spectrum-Slider spectrum-Slider--filled">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-6" for="spectrum-Slider-input-6">Slider Label</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-6">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" id="spectrum-Slider-input-6">\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n<div class="spectrum-Slider is-disabled">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-7" for="spectrum-Slider-input-7">Slider Label - Disabled</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-7">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" disabled id="spectrum-Slider-input-7">\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n'},{id:"slider-fill",name:"Filled-Offset",description:"With fill and offset.",markup:'<div class="spectrum-Slider">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-18" for="spectrum-Slider-input-18">Slider Label</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-18">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track" style="width: 25%;"></div>\n    <div class="spectrum-Slider-handle" style="left: 20%;">\n      <input type="range" class="spectrum-Slider-input" value="14" min="10" max="20" id="spectrum-Slider-input-18">\n    </div>\n    <div class="spectrum-Slider-track" style="width: 50%;"></div>\n    <div class="spectrum-Slider-fill" style="left: 20%; width: 30%"></div>\n  </div>\n</div>\n<div class="spectrum-Slider">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-19" for="spectrum-Slider-input-19">Slider Label</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-19">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track" style="width: 25%;"></div>\n    <div class="spectrum-Slider-handle" style="left: 70%;">\n      <input type="range" class="spectrum-Slider-input" value="14" min="10" max="20" id="spectrum-Slider-input-19">\n    </div>\n    <div class="spectrum-Slider-track" style="width: 50%;"></div>\n    <div class="spectrum-Slider-fill spectrum-Slider-fill--right" style="left: 50%; width: 20%"></div>\n  </div>\n</div>\n<div class="spectrum-Slider is-disabled">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-19" for="spectrum-Slider-input-19">Slider Label</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-19">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track" style="width: 25%;"></div>\n    <div class="spectrum-Slider-handle" style="left: 70%;">\n      <input type="range" class="spectrum-Slider-input" value="14" min="10" max="20" id="spectrum-Slider-input-19">\n    </div>\n    <div class="spectrum-Slider-track" style="width: 50%;"></div>\n    <div class="spectrum-Slider-fill spectrum-Slider-fill--right" style="left: 50%; width: 20%"></div>\n  </div>\n</div>\n'},{id:"slider-range",name:"Range",description:"A range slider with two handles.",markup:'<div class="spectrum-Slider spectrum-Slider--range" role="group" aria-labelledby="spectrum-Slider-label-4">\n  <div class="spectrum-Slider-labelContainer" role="presentation">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-4" for="spectrum-Slider-input-4-0">Slider Label</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-4">14 - 48</div>\n  </div>\n  <div class="spectrum-Slider-controls" role="presentation">\n    <div class="spectrum-Slider-track" style="width: 20%;"></div>\n    <div class="spectrum-Slider-handle" style="left: 20%;" role="presentation">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" aria-label="min" id="spectrum-Slider-input-4-0" aria-labelledby="spectrum-Slider-label-4 spectrum-Slider-input-4-0">\n    </div>\n    <div class="spectrum-Slider-track" style="left: 20%; right: 40%;"></div>\n    <div class="spectrum-Slider-handle" style="left: 60%;" role="presentation">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" aria-label="max" id="spectrum-Slider-input-4-1" aria-labelledby="spectrum-Slider-label-4 spectrum-Slider-input-4-1">\n    </div>\n    <div class="spectrum-Slider-track" style="width: 40%;"></div>\n  </div>\n</div>\n\n<div class="spectrum-Slider spectrum-Slider--range is-disabled" role="group" aria-labelledby="spectrum-Slider-label-5">\n  <div class="spectrum-Slider-labelContainer" role="presentation">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-5" for="spectrum-Slider-input-5-0">Slider Label - Disabled</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-5">14 - 48</div>\n  </div>\n  <div class="spectrum-Slider-controls" role="presentation">\n    <div class="spectrum-Slider-track" style="width: 20%;"></div>\n    <div class="spectrum-Slider-handle" style="left: 20%;" role="presentation">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" aria-label="min" disabled id="spectrum-Slider-input-5-0" aria-labelledby="spectrum-Slider-label-5 spectrum-Slider-input-5-0">\n    </div>\n    <div class="spectrum-Slider-track" style="left: 20%; right: 40%;"></div>\n    <div class="spectrum-Slider-handle" style="left: 60%;" role="presentation">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" aria-label="max" disabled id="spectrum-Slider-input-5-1" aria-labelledby="spectrum-Slider-label-5 spectrum-Slider-input-5-1">\n    </div>\n    <div class="spectrum-Slider-track" style="width: 40%;"></div>\n  </div>\n</div>\n'},{id:"slider-tick",name:"Tick",description:"Spectrum tick slider",markup:'<div class="spectrum-Slider spectrum-Slider--tick">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-14" for="spectrum-Slider-input-14">Slider Label</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-14">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-ticks">\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n    </div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" id="spectrum-Slider-input-14">\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n<div class="spectrum-Slider spectrum-Slider--tick is-disabled">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-15" for="spectrum-Slider-input-15">Slider Label - Disabled</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-15">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-ticks">\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n      <div class="spectrum-Slider-tick"></div>\n    </div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" disabled id="spectrum-Slider-input-15">\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n'},{id:"slider-tick",name:"Tick with Labels",description:"Spectrum tick slider with labels",markup:'<div class="spectrum-Slider">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-12" for="spectrum-Slider-input-12">Slider Label</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-12">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-ticks">\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">0</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">20</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">40</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">60</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">80</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">100</div>\n      </div>\n    </div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" id="spectrum-Slider-input-12">\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n<div class="spectrum-Slider is-disabled">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-13" for="spectrum-Slider-input-13">Slider Label - Disabled</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-13">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-ticks">\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">0</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">20</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">40</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">60</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">80</div>\n      </div>\n      <div class="spectrum-Slider-tick">\n        <div class="spectrum-Slider-tickLabel">100</div>\n      </div>\n    </div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" disabled id="spectrum-Slider-input-13">\n    </div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n'},{id:"slider-player",name:"Video Player",description:"Displays a buffer for video players.",markup:'<div class="spectrum-Slider">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-16" for="spectrum-Slider-input-16">My Video</label>\n    <div class="spectrum-Slider-value">3:48</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-buffer" style="width: 20%;" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-labelledby="spectrum-Slider-label-16"></div>\n    <div class="spectrum-Slider-handle" style="left: 20%;">\n      <input type="range" class="spectrum-Slider-input" aria-valuetext="3:48" value="228" min="0" max="760" id="spectrum-Slider-input-16">\n    </div>\n    <div class="spectrum-Slider-buffer" style="left: 20%; width: 30%;"></div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n\n<div class="spectrum-Slider is-disabled">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-17" for="spectrum-Slider-input-17">My Video</label>\n    <div class="spectrum-Slider-value">3:48</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track"></div>\n    <div class="spectrum-Slider-buffer" style="width: 20%;" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-labelledby="spectrum-Slider-label-16"></div>\n    <div class="spectrum-Slider-handle" tabindex="0" style="left: 20%;">\n      <input type="range" class="spectrum-Slider-input" aria-valuetext="3:48" value="228" min="0" max="760" disabled id="spectrum-Slider-input-17">\n    </div>\n    <div class="spectrum-Slider-buffer" style="left: 20%; right: 50%;"></div>\n    <div class="spectrum-Slider-track"></div>\n  </div>\n</div>\n'},{id:"slider-ramp",name:"Ramp",markup:'<div class="spectrum-Slider spectrum-Slider--ramp">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-10" for="spectrum-Slider-input-10">Slider Label</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-10">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-ramp">\n      <svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true" focusable="false">\n        <path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path>\n      </svg>\n    </div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" id="spectrum-Slider-input-10">\n    </div>\n  </div>\n</div>\n<div class="spectrum-Slider spectrum-Slider--ramp is-disabled">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider-label-11" for="spectrum-Slider-input-11">Slider Label - Disabled</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-label-11">14</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-ramp">\n      <svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true" focusable="false">\n        <path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path>\n      </svg>\n    </div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10" max="20" id="spectrum-Slider-input-11" disabled>\n    </div>\n  </div>\n</div>\n'},{id:"slider-color",name:"Color",status:"Deprecated",details:"A new color slider is forthcoming.",description:"Spectrum Color slider",markup:'<div class="spectrum-Slider spectrum-Slider--color">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider--color-label-0" for="spectrum-Slider--color-input-0">Color</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider--color-label-0">#2680eb</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track" style="background: linear-gradient(to right, rgb(38, 128, 235), rgb(9, 90, 186))"></div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" aria-valuetext="#2680eb" step="2" min="10" max="20" id="spectrum-Slider--color-input-0">\n    </div>\n  </div>\n</div>\n<div class="spectrum-Slider spectrum-Slider--color">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider--color-label-1" for="spectrum-Slider--color-input-1">Color (showing alpha)</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider--color-label-1">#2680eb</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track" style="background: linear-gradient(to right, rgba(38, 128, 235, .5), rgb(9, 90, 186))"></div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" aria-valuetext="#2680eb" step="2" min="10" max="20" id="spectrum-Slider--color-input-1">\n    </div>\n  </div>\n</div>\n<div class="spectrum-Slider spectrum-Slider--color is-disabled">\n  <div class="spectrum-Slider-labelContainer">\n    <label class="spectrum-Slider-label" id="spectrum-Slider--color-label-2" for="spectrum-Slider--color-input-2">Color</label>\n    <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider--color-label-2">#2680eb</div>\n  </div>\n  <div class="spectrum-Slider-controls">\n    <div class="spectrum-Slider-track" style="background: linear-gradient(to right, rgba(38, 128, 235, .5), rgb(9, 90, 186))"></div>\n    <div class="spectrum-Slider-handle" style="left: 40%;">\n      <input type="range" class="spectrum-Slider-input" value="14" aria-valuetext="#2680eb" step="2" min="10" max="20" disabled id="spectrum-Slider--color-input-2">\n    </div>\n  </div>\n</div>\n'}]}];e.exports=i.length<=1?i[0]:i}}]);