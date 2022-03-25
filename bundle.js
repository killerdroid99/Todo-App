/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Smooch+Sans:wght@600&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Monoton&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  user-select: none;\n}\n\nbody {\n  font-family: \"Poppins\", Helvetica, sans-serif;\n  background-image: linear-gradient(to right, #22577a, #38a3a5);\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n}\n\nnav {\n  display: flex;\n  height: auto;\n  background-color: #22577a;\n  box-shadow: 0px 5px 5px #57cc99;\n  font-size: 1.3rem;\n  gap: 3em;\n  padding: 1em;\n}\nnav div {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n}\nnav div img {\n  margin-inline: auto;\n  height: 50px;\n  width: 50px;\n}\nnav div h1 {\n  font-weight: 500;\n  color: #c7f9cc;\n  text-shadow: 0px 7px 3px #22577a;\n  font-family: \"Monoton\", cursive;\n  align-items: center;\n  font-size: clamp(1.5rem, 2.75vh, 3rem);\n}\n\n.projects {\n  padding-top: 2em;\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: column;\n  height: auto;\n  gap: 0.5em;\n}\n.projects h1 {\n  font-weight: 500;\n  color: #80ed99;\n  text-shadow: 0px 5px 3px #38a3a5;\n  font-size: 3.5rem;\n  font-family: \"Smooch sans\", cursive;\n}\n\n.project-container {\n  display: grid;\n  max-width: 600px;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 3em;\n  margin-inline: auto;\n  row-gap: 2.5em;\n  padding-block: 2em;\n  padding-inline: 1em;\n  max-width: 70%;\n  height: auto;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.project-container::-webkit-scrollbar {\n  background-color: #c7f9cc;\n  border-radius: 10px;\n  width: 10px;\n}\n.project-container::-webkit-scrollbar-thumb {\n  background-color: #57cc99;\n  border-radius: 10px;\n  border: 0.15em solid #c7f9cc;\n}\n\n.card {\n  min-height: 350px;\n  background-color: #c7f9cc;\n  border-radius: 1em;\n  padding: 1em;\n  position: relative;\n  box-shadow: inset 0 -1em 0 #80ed99;\n  user-select: none;\n  transition: 0.5s;\n  display: flex;\n  flex-direction: column;\n  transition: 1.5s;\n  filter: drop-shadow(5px 5px 3px #57cc99);\n}\n.card:hover > svg {\n  transform: translateY(-10px);\n}\n.card input {\n  margin-inline: auto;\n  width: 8em;\n  font-size: 2rem;\n  text-align: center;\n  background-color: inherit;\n  color: #22577a;\n  font-weight: bold;\n  border: 2px solid transparent;\n  caret-color: #22577a;\n  border: 2px solid #38a3a5;\n  border-radius: 5px;\n  transition: 0.4s;\n}\n.card input:focus {\n  outline: none;\n  border-radius: 15px;\n  box-shadow: 0px 5px 2px #38a3a5;\n}\n.card ul {\n  margin: 2.5em;\n  font-size: 1rem;\n  line-height: 2em;\n}\n.card ul li::marker {\n  color: #38a3a5;\n}\n.card ul li strong {\n  color: #22577a;\n}\n.card .btn {\n  width: 50px;\n  height: 50px;\n  margin-inline: 40%;\n  color: #c7f9cc;\n  border-radius: 50%;\n  background: #22577a;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.card .btn:hover {\n  filter: drop-shadow(5px 5px 0px #38a3a5);\n  transform: scale(1.02) translateY(-5px);\n}\n.card .btn:active {\n  filter: none;\n  transform: translateY(-5px);\n}\n.card .delImg {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 1em;\n  bottom: 1em;\n  cursor: pointer;\n  border-radius: 50%;\n}\n.card .delImg:active {\n  transform: scale(90%);\n  filter: grayscale(60%);\n}\n\n.card-placeholder {\n  padding: 0.1em;\n  height: 350px;\n  border: 5px dashed #c7f9cc;\n  border-radius: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 900;\n  font-size: 1.5rem;\n  color: #c7f9cc;\n  padding-inline: 0.5em;\n  cursor: pointer;\n}\n.card-placeholder:active > span {\n  animation: scaleDownEffect 700ms;\n}\n\n.todo-container {\n  display: flex;\n  padding-inline: 1em;\n  max-width: auto;\n  height: auto;\n  overflow: auto;\n  flex-direction: column;\n  gap: 25px;\n  padding-block: 1rem;\n}\n.todo-container::-webkit-scrollbar {\n  background-color: #c7f9cc;\n  border-radius: 10px;\n  width: 10px;\n}\n.todo-container::-webkit-scrollbar-thumb {\n  background-color: #57cc99;\n  border-radius: 10px;\n  border: 0.15em solid #c7f9cc;\n}\n\n.item {\n  min-height: 100px;\n  width: 70vw;\n  background-color: #c7f9cc;\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  padding-inline: 1em;\n  position: relative;\n  user-select: none;\n  justify-content: space-around;\n  transition: 0.5s;\n  box-shadow: 3px 3px 0px #22577a;\n  filter: drop-shadow(5px 5px 3px #57cc99);\n}\n.item input[type=checkbox] {\n  width: 25px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  accent-color: #22577a;\n  border: 3px solid #22577a;\n  cursor: pointer;\n  appearance: none;\n  border-radius: 5px;\n}\n.item input[type=checkbox]:hover {\n  box-shadow: 0 0 5px #38a3a5;\n}\n.item input[type=checkbox]:checked::after {\n  content: \"✔\";\n  font-size: 2rem;\n  margin-bottom: 0.25em;\n  color: #22577a;\n}\n.item h3 {\n  width: 25ch;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.item h4 {\n  width: 10ch;\n}\n.item img {\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  position: end;\n  transition: 0.3s;\n}\n.item img:hover {\n  transform: translateY(-5px);\n}\n.item img:active {\n  transform: translateY(5px);\n}\n.item form {\n  position: fixed;\n  background-color: inherit;\n  opacity: 0.9;\n  bottom: -4em;\n  padding: 0.5em;\n  padding-block: 1em;\n  border-radius: 0.4em;\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  z-index: 10;\n}\n.item form input,\n.item form select {\n  background-color: inherit;\n  border: 2px solid #22577a;\n  border-radius: 2px;\n  height: 1.5em;\n  padding-inline: 2px;\n}\n\n.item-placeholder {\n  min-height: 90px;\n  width: 70vw;\n  display: block;\n  border: 5px dashed #c7f9cc;\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 900;\n  font-size: 1.5rem;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  color: #c7f9cc;\n  padding-inline: 0.5em;\n  cursor: pointer;\n  margin-inline: 0.7em;\n}\n.item-placeholder:active > div {\n  transform: translateX(15px);\n}\n\n.overlay {\n  width: 100vw;\n  height: 100vh;\n  background-color: #cccccc7c;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: scale(0);\n}\n.overlay form {\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  height: 300px;\n  justify-content: space-around;\n  background-color: #c7f9cc;\n  padding: 1em;\n  border: 3px solid #22577a;\n  border-radius: 1rem;\n  filter: drop-shadow(5px 5px 3px #57cc99);\n  position: relative;\n  font-weight: 700;\n}\n.overlay form img {\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  cursor: pointer;\n}\n.overlay form span {\n  display: flex;\n  gap: 1em;\n  align-items: center;\n}\n.overlay form span p {\n  color: red;\n}\n.overlay form div {\n  display: flex;\n  gap: 0.5em;\n  align-items: center;\n}\n.overlay form input,\n.overlay form label {\n  cursor: pointer;\n  display: flex;\n}\n.overlay form > span input {\n  width: 70%;\n  accent-color: #22577a;\n  border-radius: 5px;\n  border: 3px solid #22577a;\n  font-size: 1rem;\n  background-color: #c7f9cc;\n  height: 2rem;\n}\n.overlay form button {\n  width: 60%;\n  margin-inline: auto;\n  border-radius: 10px;\n  border: 3px solid #22577a;\n  background-color: #57cc99;\n  color: white;\n  height: 30px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.overlay form button:hover {\n  background-color: #65b894;\n  transform: scale(1.03);\n}\n.overlay form button:active {\n  background-color: #65b894;\n  transform: scale(1);\n}\n\n@keyframes scaleDownEffect {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scaleUpEffect {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.completed {\n  background: #bebebe;\n  filter: grayscale(100%) drop-shadow(5px 5px 3px #696969);\n}\n.completed h3 {\n  text-decoration: line-through 3px;\n}\n.completed h4 {\n  color: #22577a;\n}\n\n.hideEdit {\n  transform: scale(0%);\n}\n\n.backBtn {\n  display: block;\n  position: absolute;\n  height: 50px;\n  width: 50px;\n  background-color: #22577a;\n  border-radius: 50%;\n  transform: rotate(180deg);\n  left: 1em;\n  top: 1em;\n  cursor: pointer;\n}\n.backBtn:hover {\n  filter: drop-shadow(-5px -5px 0px #38a3a5);\n  transform: scale(1.02) translateY(-5px) rotate(180deg);\n}\n.backBtn:active {\n  filter: none;\n  transform: translateY(-5px) rotate(180deg);\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Smooch+Sans:wght@600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Monoton&display=swap\");\r\n\r\n$primary-color-one: #22577a;\r\n$primary-color-two: #38a3a5;\r\n$secondary-color-one: #57cc99;\r\n$secondary-color-two: #80ed99;\r\n$secondary-color-three: #c7f9cc;\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tuser-select: none;\r\n}\r\n\r\nbody {\r\n\tfont-family: \"Poppins\", Helvetica, sans-serif;\r\n\tbackground-image: linear-gradient(\r\n\t\tto right,\r\n\t\t$primary-color-one,\r\n\t\t$primary-color-two\r\n\t);\r\n\tdisplay: flex;\r\n\theight: 100vh;\r\n\tflex-direction: column;\r\n}\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\theight: auto;\r\n\tbackground-color: $primary-color-one;\r\n\tbox-shadow: 0px 5px 5px $secondary-color-one;\r\n\tfont-size: 1.3rem;\r\n\tgap: 3em;\r\n\tpadding: 1em;\r\n\r\n\tdiv {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 0.5em;\r\n\r\n\t\timg {\r\n\t\t\tmargin-inline: auto;\r\n\t\t\theight: 50px;\r\n\t\t\twidth: 50px;\r\n\t\t}\r\n\r\n\t\th1 {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: $secondary-color-three;\r\n\t\t\ttext-shadow: 0px 7px 3px $primary-color-one;\r\n\t\t\tfont-family: \"Monoton\", cursive;\r\n\t\t\talign-items: center;\r\n\t\t\tfont-size: clamp(1.5rem, 2.75vh, 3rem);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.projects {\r\n\tpadding-top: 2em;\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\theight: auto;\r\n\tgap: 0.5em;\r\n\th1 {\r\n\t\tfont-weight: 500;\r\n\t\tcolor: $secondary-color-two;\r\n\t\ttext-shadow: 0px 5px 3px $primary-color-two;\r\n\t\tfont-size: 3.5rem;\r\n\t\tfont-family: \"Smooch sans\", cursive;\r\n\t}\r\n}\r\n\r\n.project-container {\r\n\tdisplay: grid;\r\n\tmax-width: 600px;\r\n\tgrid-template-columns: repeat(auto-fit, 300px);\r\n\tgap: 3em;\r\n\tmargin-inline: auto;\r\n\trow-gap: 2.5em;\r\n\tpadding-block: 2em;\r\n\tpadding-inline: 1em;\r\n\tmax-width: 70%;\r\n\theight: auto;\r\n\toverflow-y: auto;\r\n\toverflow-x: hidden;\r\n\t&::-webkit-scrollbar {\r\n\t\tbackground-color: $secondary-color-three;\r\n\t\tborder-radius: 10px;\r\n\t\twidth: 10px;\r\n\t}\r\n\t&::-webkit-scrollbar-thumb {\r\n\t\tbackground-color: $secondary-color-one;\r\n\t\tborder-radius: 10px;\r\n\t\tborder: 0.15em solid $secondary-color-three;\r\n\t}\r\n}\r\n\r\n.card {\r\n\tmin-height: 350px;\r\n\tbackground-color: $secondary-color-three;\r\n\tborder-radius: 1em;\r\n\tpadding: 1em;\r\n\tposition: relative;\r\n\tbox-shadow: inset 0 -1em 0 $secondary-color-two;\r\n\tuser-select: none;\r\n\ttransition: 0.5s;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\ttransition: 1.5s;\r\n\tfilter: drop-shadow(5px 5px 3px $secondary-color-one);\r\n\r\n\t&:hover > svg {\r\n\t\ttransform: translateY(-10px);\r\n\t}\r\n\r\n\tinput {\r\n\t\tmargin-inline: auto;\r\n\t\twidth: 8em;\r\n\t\tfont-size: 2rem;\r\n\t\ttext-align: center;\r\n\t\tbackground-color: inherit;\r\n\t\tcolor: $primary-color-one;\r\n\t\tfont-weight: bold;\r\n\t\tborder: 2px solid transparent;\r\n\t\tcaret-color: $primary-color-one;\r\n\t\tborder: 2px solid $primary-color-two;\r\n\t\tborder-radius: 5px;\r\n\t\ttransition: 0.4s;\r\n\t\t&:focus {\r\n\t\t\toutline: none;\r\n\t\t\t// border: 2px solid $primary-color-two;\r\n\t\t\tborder-radius: 15px;\r\n\t\t\tbox-shadow: 0px 5px 2px $primary-color-two;\r\n\t\t}\r\n\t}\r\n\r\n\tul {\r\n\t\tmargin: 2.5em;\r\n\t\tfont-size: 1rem;\r\n\t\tline-height: 2em;\r\n\r\n\t\tli {\r\n\t\t\t&::marker {\r\n\t\t\t\tcolor: $primary-color-two;\r\n\t\t\t}\r\n\t\t\tstrong {\r\n\t\t\t\tcolor: $primary-color-one;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.btn {\r\n\t\twidth: 50px;\r\n\t\theight: 50px;\r\n\t\tmargin-inline: 40%;\r\n\t\tcolor: $secondary-color-three;\r\n\t\tborder-radius: 50%;\r\n\t\tbackground: $primary-color-one;\r\n\t\ttransition: 0.2s;\r\n\t\tcursor: pointer;\r\n\t\t&:hover {\r\n\t\t\tfilter: drop-shadow(5px 5px 0px $primary-color-two);\r\n\t\t\ttransform: scale(1.02) translateY(-5px);\r\n\t\t}\r\n\t\t&:active {\r\n\t\t\tfilter: none;\r\n\t\t\ttransform: translateY(-5px);\r\n\t\t}\r\n\t}\r\n\r\n\t.delImg {\r\n\t\twidth: 50px;\r\n\t\theight: 50px;\r\n\t\tposition: absolute;\r\n\t\tright: 1em;\r\n\t\tbottom: 1em;\r\n\t\tcursor: pointer;\r\n\t\tborder-radius: 50%;\r\n\t\t&:active {\r\n\t\t\ttransform: scale(90%);\r\n\t\t\tfilter: grayscale(60%);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.card-placeholder {\r\n\tpadding: 0.1em;\r\n\theight: 350px;\r\n\tborder: 5px dashed $secondary-color-three;\r\n\tborder-radius: 1em;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-weight: 900;\r\n\tfont-size: 1.5rem;\r\n\tcolor: $secondary-color-three;\r\n\tpadding-inline: 0.5em;\r\n\tcursor: pointer;\r\n\t&:active > span {\r\n\t\tanimation: scaleDownEffect 700ms;\r\n\t}\r\n}\r\n\r\n.todo-container {\r\n\tdisplay: flex;\r\n\tpadding-inline: 1em;\r\n\tmax-width: auto;\r\n\theight: auto;\r\n\r\n\toverflow: auto;\r\n\tflex-direction: column;\r\n\t&::-webkit-scrollbar {\r\n\t\tbackground-color: $secondary-color-three;\r\n\t\tborder-radius: 10px;\r\n\t\twidth: 10px;\r\n\t}\r\n\t&::-webkit-scrollbar-thumb {\r\n\t\tbackground-color: $secondary-color-one;\r\n\t\tborder-radius: 10px;\r\n\t\tborder: 0.15em solid $secondary-color-three;\r\n\t}\r\n\tgap: 25px;\r\n\tpadding-block: 1rem;\r\n}\r\n\r\n.item {\r\n\tmin-height: 100px;\r\n\twidth: 70vw;\r\n\tbackground-color: $secondary-color-three;\r\n\tborder-radius: 1rem;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding-inline: 1em;\r\n\tposition: relative;\r\n\tuser-select: none;\r\n\tjustify-content: space-around;\r\n\ttransition: 0.5s;\r\n\tbox-shadow: 3px 3px 0px $primary-color-one;\r\n\tfilter: drop-shadow(5px 5px 3px $secondary-color-one);\r\n\r\n\tinput[type=\"checkbox\"] {\r\n\t\twidth: 25px;\r\n\t\theight: 25px;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\taccent-color: $primary-color-one;\r\n\t\tborder: 3px solid$primary-color-one;\r\n\t\tcursor: pointer;\r\n\t\tappearance: none;\r\n\t\tborder-radius: 5px;\r\n\t\t&:hover {\r\n\t\t\tbox-shadow: 0 0 5px $primary-color-two;\r\n\t\t}\r\n\t\t&:checked::after {\r\n\t\t\tcontent: \"✔\";\r\n\t\t\tfont-size: 2rem;\r\n\t\t\tmargin-bottom: 0.25em;\r\n\t\t\tcolor: $primary-color-one;\r\n\t\t}\r\n\t}\r\n\r\n\th3 {\r\n\t\twidth: 25ch;\r\n\t\tcursor: pointer;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\th4 {\r\n\t\twidth: 10ch;\r\n\t}\r\n\r\n\timg {\r\n\t\twidth: 35px;\r\n\t\theight: 35px;\r\n\t\tcursor: pointer;\r\n\t\tposition: end;\r\n\t\ttransition: 0.3s;\r\n\t\t&:hover {\r\n\t\t\ttransform: translateY(-5px);\r\n\t\t}\r\n\t\t&:active {\r\n\t\t\ttransform: translateY(5px);\r\n\t\t}\r\n\t}\r\n\r\n\tform {\r\n\t\tposition: fixed;\r\n\t\tbackground-color: inherit;\r\n\t\topacity: 0.9;\r\n\t\tbottom: -4em;\r\n\t\tpadding: 0.5em;\r\n\t\tpadding-block: 1em;\r\n\t\tborder-radius: 0.4em;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 1em;\r\n\t\tz-index: 10;\r\n\t\tinput,\r\n\t\tselect {\r\n\t\t\tbackground-color: inherit;\r\n\t\t\tborder: 2px solid $primary-color-one;\r\n\t\t\tborder-radius: 2px;\r\n\t\t\theight: 1.5em;\r\n\t\t\tpadding-inline: 2px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.item-placeholder {\r\n\tmin-height: 90px;\r\n\twidth: 70vw;\r\n\tdisplay: block;\r\n\tborder: 5px dashed $secondary-color-three;\r\n\tborder-radius: 1rem;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-weight: 900;\r\n\tfont-size: 1.5rem;\r\n\tfont-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n\t\t\"Lucida Sans\", Arial, sans-serif;\r\n\tcolor: $secondary-color-three;\r\n\tpadding-inline: 0.5em;\r\n\tcursor: pointer;\r\n\tmargin-inline: 0.7em;\r\n\r\n\t&:active > div {\r\n\t\ttransform: translateX(15px);\r\n\t}\r\n}\r\n\r\n.overlay {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tbackground-color: #cccccc7c;\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\ttransform: scale(0);\r\n\tform {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\twidth: 400px;\r\n\t\theight: 300px;\r\n\t\tjustify-content: space-around;\r\n\t\tbackground-color: $secondary-color-three;\r\n\t\tpadding: 1em;\r\n\t\tborder: 3px solid $primary-color-one;\r\n\t\tborder-radius: 1rem;\r\n\t\tfilter: drop-shadow(5px 5px 3px $secondary-color-one);\r\n\t\tposition: relative;\r\n\t\tfont-weight: 700;\r\n\r\n\t\timg {\r\n\t\t\twidth: 35px;\r\n\t\t\theight: 35px;\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0.5em;\r\n\t\t\tright: 0.5em;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\tspan {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 1em;\r\n\t\t\talign-items: center;\r\n\t\t\tp {\r\n\t\t\t\tcolor: red;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tdiv {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 0.5em;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\tinput,\r\n\t\tlabel {\r\n\t\t\tcursor: pointer;\r\n\t\t\tdisplay: flex;\r\n\t\t}\r\n\r\n\t\t> span input {\r\n\t\t\twidth: 70%;\r\n\t\t\taccent-color: $primary-color-one;\r\n\t\t\tborder-radius: 5px;\r\n\t\t\tborder: 3px solid $primary-color-one;\r\n\t\t\tfont-size: 1rem;\r\n\t\t\tbackground-color: $secondary-color-three;\r\n\t\t\theight: 2rem;\r\n\t\t}\r\n\r\n\t\tbutton {\r\n\t\t\twidth: 60%;\r\n\t\t\tmargin-inline: auto;\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tborder: 3px solid $primary-color-one;\r\n\t\t\tbackground-color: $secondary-color-one;\r\n\t\t\tcolor: white;\r\n\t\t\theight: 30px;\r\n\t\t\tfont-size: 1rem;\r\n\t\t\tcursor: pointer;\r\n\t\t\ttransition: 0.3s;\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #65b894;\r\n\t\t\t\ttransform: scale(1.03);\r\n\t\t\t}\r\n\t\t\t&:active {\r\n\t\t\t\tbackground-color: #65b894;\r\n\t\t\t\ttransform: scale(1);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@keyframes scaleDownEffect {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t\topacity: 1;\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(0);\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes scaleUpEffect {\r\n\t0% {\r\n\t\ttransform: scale(0);\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.completed {\r\n\tbackground: #bebebe;\r\n\tfilter: grayscale(100%) drop-shadow(5px 5px 3px #696969);\r\n\th3 {\r\n\t\ttext-decoration: line-through 3px;\r\n\t}\r\n\th4 {\r\n\t\tcolor: $primary-color-one;\r\n\t}\r\n}\r\n\r\n.hideEdit {\r\n\ttransform: scale(0%);\r\n}\r\n\r\n.backBtn {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\theight: 50px;\r\n\twidth: 50px;\r\n\tbackground-color: $primary-color-one;\r\n\tborder-radius: 50%;\r\n\ttransform: rotate(180deg);\r\n\tleft: 1em;\r\n\ttop: 1em;\r\n\tcursor: pointer;\r\n\t&:hover {\r\n\t\tfilter: drop-shadow(-5px -5px 0px $primary-color-two);\r\n\t\ttransform: scale(1.02) translateY(-5px) rotate(180deg);\r\n\t}\r\n\t&:active {\r\n\t\tfilter: none;\r\n\t\ttransform: translateY(-5px) rotate(180deg);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/DomActions.js":
/*!***************************!*\
  !*** ./src/DomActions.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProject": () => (/* binding */ AddProject),
/* harmony export */   "AddTodo": () => (/* binding */ AddTodo),
/* harmony export */   "BackToProjects": () => (/* binding */ BackToProjects),
/* harmony export */   "CloseTodoForm": () => (/* binding */ CloseTodoForm),
/* harmony export */   "DeleteProject": () => (/* binding */ DeleteProject),
/* harmony export */   "DeleteTodo": () => (/* binding */ DeleteTodo),
/* harmony export */   "EditTitle": () => (/* binding */ EditTitle),
/* harmony export */   "EditTodo": () => (/* binding */ EditTodo),
/* harmony export */   "MarkAsCompleted": () => (/* binding */ MarkAsCompleted),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "ViewTodoForm": () => (/* binding */ ViewTodoForm)
/* harmony export */ });
/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TodoItem */ "./src/components/TodoItem.js");
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProjectCard */ "./src/components/ProjectCard.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");





const TodoItemObject = (uuid, completedStatus, task, priority, date) => {
	return { uuid, completedStatus, task, priority, date };
};

const ProjectObject = (
	pid,
	title,
	linkedTodoList = [],
	total = 0,
	complete = 0,
	high = 0,
	med = 0,
	low = 0
) => {
	return { pid, title, linkedTodoList, total, complete, high, med, low };
};

let ProjectObjectArray = [];

// Checking local storage for JSON data
if (localStorage.length) {
	ProjectObjectArray = JSON.parse(localStorage.getItem("TodoProject"));

	ProjectObjectArray.forEach((projectObject) => {
		document
			.querySelector(".project-container")
			.appendChild(
				(0,_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__["default"])(
					projectObject.pid,
					projectObject.title,
					projectObject.total,
					projectObject.complete,
					projectObject.high,
					projectObject.med,
					projectObject.low
				)
			);
	});
}
// Close the Todo form
const CloseTodoForm = () => {
	const exitBtn = document.getElementById("exit");

	exitBtn.addEventListener("click", () => {
		document.querySelector(".overlay").style.animation =
			"scaleDownEffect 500ms";
		setTimeout(() => {
			document.querySelector(".overlay").style.transform = "scale(0)";
		}, 400);
	});
};

// View the form to add todo item
const ViewTodoForm = () => {
	const addBtn = document.querySelector(".item-placeholder");

	addBtn.addEventListener("click", () => {
		document.querySelector(".overlay").style.animation = "scaleUpEffect 500ms";
		setTimeout(() => {
			document.querySelector(".overlay").style.transform = "scale(1)";
		}, 400);
	});
};

// Adding a prototype method to Date object constructor
Date.prototype.toDateInputValue = function () {
	var local = new Date(this);
	local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	return local.toJSON().slice(0, 10);
};

// Add Todo item
const AddTodo = (targetProject) => {
	const Task = document.getElementById("task");
	let DateF = document.getElementById("date");

	document.getElementById("add").addEventListener("click", (e) => {
		e.preventDefault();

		if (document.getElementById("task").value === "") {
			alert("Task field can't be empty");
		} else if (
			!document.getElementById("low").checked &&
			!document.getElementById("medium").checked &&
			!document.getElementById("high").checked
		) {
			alert("Please select priority");
		} else {
			let Priority = "Not set";
			document.getElementsByName("priority").forEach((element) => {
				if (element.checked === true) {
					Priority = element.value;
				}
			});

			if (DateF.value === "") {
				DateF.value = new Date().toDateInputValue();
			}

			const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();

			targetProject.linkedTodoList.unshift(
				TodoItemObject(
					uuid,
					false,
					Task.value,
					Priority,
					DateF.value.split("-").reverse().join("/")
				)
			);
			targetProject.linkedTodoList.forEach((todo) => {
				if (todo.priority == "Low") {
					console.log("l");
					targetProject.low = 0;
					targetProject.low++;
				} else if (todo.priority == "Medium") {
					console.log("m");
					targetProject.med = 0;
					targetProject.med++;
				} else if (todo.priority == "High") {
					console.log("h");
					targetProject.high = 0;
					targetProject.high++;
				}
			});
			targetProject.total++;
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));

			// console.log(TodoObjectArray);

			document.querySelector(".overlay").style.animation =
				"scaleDownEffect 500ms";
			setTimeout(() => {
				const Todo = (0,_components_TodoItem__WEBPACK_IMPORTED_MODULE_0__["default"])(
					uuid,
					false,
					Task.value,
					Priority,
					DateF.value.split("-").reverse().join("/")
				);
				// console.log(Todo);
				Todo.style.animation = "scaleUpEffect 400ms";
				document
					.querySelector(".todo-container")
					.insertAdjacentElement("afterbegin", Todo);
				document.querySelector(".overlay").style.transform = "scale(0)";
				document.getElementById("form").reset();
			}, 400);
		}
	});
};

// Delete any Todo item
const DeleteTodo = (targetProject) => {
	const container = document.querySelector(".todo-container");

	container.addEventListener("click", (e) => {
		const target = e.target;
		if (
			target.matches(".del") &&
			target.getAttribute("data-id") ===
				target.parentElement.getAttribute("data-id")
		) {
			target.parentElement.style.animation = "scaleDownEffect 400ms";
			let priority;
			const afterDelete = targetProject.linkedTodoList.filter(
				(todoObject) => todoObject.uuid !== target.getAttribute("data-id")
			);

			targetProject.linkedTodoList.forEach((todoObject) => {
				if (todoObject.uuid === target.getAttribute("data-id")) {
					priority = todoObject.priority;
				}
			});

			if (priority == "Low") {
				targetProject.low--;
			} else if (priority == "Medium") {
				targetProject.med--;
			} else if (priority == "High") {
				targetProject.high--;
			}

			targetProject.linkedTodoList = [...afterDelete];
			targetProject.total--;
			targetProject.complete = 0;
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));

			setTimeout(() => {
				target.parentElement.remove();
			}, 300);
		}
	});
};

// Mark as complete when user selects the checkbox
const MarkAsCompleted = (targetProject) => {
	const container = document.querySelector(".todo-container");

	container.addEventListener("click", (e) => {
		const target = e.target;

		targetProject.linkedTodoList.forEach((todoObject) => {
			if (todoObject.uuid === target.parentElement.getAttribute("data-id")) {
				if (target.matches("input[type='checkbox']")) {
					if (target.checked) {
						todoObject.completedStatus = true;
						targetProject.complete++;
						target.parentElement.classList.add("completed");
					} else {
						todoObject.completedStatus = false;
						targetProject.complete--;
						target.parentElement.classList.remove("completed");
					}
				}
			}
		});

		localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
	});
};

// Edit any created Todo item
const EditTodo = (targetProject) => {
	const container = document.querySelector(".todo-container");

	container.addEventListener("click", (e) => {
		const target = e.target;
		if (
			target.matches(".edit") &&
			target.getAttribute("data-id") ===
				target.parentElement.getAttribute("data-id")
		) {
			const form = target.parentElement.lastElementChild;

			if (!form.classList.contains("hideEdit")) {
				form.classList.add("hideEdit");
				target.parentElement.style.marginBottom = "";

				target.parentElement.children[1].textContent = form.children[0].value;

				if (
					target.parentElement.children[2].innerText == "Low" &&
					form.children[1].value == "Medium"
				) {
					targetProject.low--;
					targetProject.med++;
				} else if (
					target.parentElement.children[2].innerText == "Low" &&
					form.children[1].value == "High"
				) {
					targetProject.low--;
					targetProject.high++;
				} else if (
					target.parentElement.children[2].innerText == "Medium" &&
					form.children[1].value == "Low"
				) {
					targetProject.med--;
					targetProject.low++;
				} else if (
					target.parentElement.children[2].innerText == "Medium" &&
					form.children[1].value == "High"
				) {
					targetProject.med--;
					targetProject.high++;
				} else if (
					target.parentElement.children[2].innerText == "High" &&
					form.children[1].value == "Low"
				) {
					targetProject.high--;
					targetProject.low++;
				} else if (
					target.parentElement.children[2].innerText == "High" &&
					form.children[1].value == "Medium"
				) {
					targetProject.high--;
					targetProject.med++;
				}

				target.parentElement.children[2].innerText = form.children[1].value;
				if (target.parentElement.children[2].innerText === "Low") {
					target.parentElement.children[2].style.color = "green";
				} else if (target.parentElement.children[2].innerText === "Medium") {
					target.parentElement.children[2].style.color = "orange";
				} else if (target.parentElement.children[2].innerText === "High") {
					target.parentElement.children[2].style.color = "red";
				}

				target.parentElement.children[3].textContent = form.children[2].value
					.split("-")
					.reverse()
					.join("/");

				targetProject.linkedTodoList.forEach((todoObject) => {
					if (
						todoObject.uuid === target.parentElement.getAttribute("data-id")
					) {
						todoObject.task = form.children[0].value;
						todoObject.priority = form.children[1].value;
						todoObject.date = form.children[2].value
							.split("-")
							.reverse()
							.join("/");
					}
				});
			} else if (form.classList.contains("hideEdit")) {
				form.classList.remove("hideEdit");
				target.parentElement.style.marginBottom = "3rem";
			}
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
		}
	});
};

// Adding project card
const AddProject = () => {
	const container = document.querySelector(".project-container");

	container.addEventListener("click", (e) => {
		const target = e.target;

		if (target.matches("span")) {
			const newProject = (0,_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(), "Title");

			newProject.style.animation = "scaleUpEffect 300ms";
			target.parentElement.parentElement.insertAdjacentElement(
				"beforeend",
				newProject
			);
			ProjectObjectArray.push(
				ProjectObject(
					newProject.getAttribute("PID"),
					newProject.firstElementChild.value
				)
			);
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
		} else if (target.className === "card-placeholder") {
			const newProject = (0,_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__["default"])((0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(), "Title");

			newProject.style.animation = "scaleUpEffect 300ms";
			target.parentElement.insertAdjacentElement("beforeend", newProject);
			ProjectObjectArray.push(
				ProjectObject(
					newProject.getAttribute("PID"),
					newProject.firstElementChild.value
				)
			);
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
		}
	});
};

// Deleting a particular project
const DeleteProject = () => {
	const container = document.querySelector(".project-container");

	container.addEventListener("click", (e) => {
		const target = e.target;

		if (
			target.getAttribute("class") === "delImg" &&
			target.getAttribute("PID") === target.parentElement.getAttribute("PID")
		) {
			const afterDelete = [];
			ProjectObjectArray.forEach((proj) => {
				if (proj.pid !== target.getAttribute("PID")) {
					afterDelete.push(proj);
				}
			});
			ProjectObjectArray = afterDelete;
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
			target.parentElement.style.animation = "scaleDownEffect 300ms";
			setTimeout(() => {
				target.parentElement.remove();
			}, 250);
		}
	});
};

// Edit the title
const EditTitle = () => {
	const container = document.querySelector(".project-container");

	container.addEventListener("keydown", (e) => {
		const target = e.target;
		if (
			target.getAttribute("class") === "titleInput" &&
			target.getAttribute("PID") === target.parentElement.getAttribute("PID") &&
			e.code == "Enter"
		) {
			ProjectObjectArray.forEach((proj) => {
				if (proj.pid === target.getAttribute("PID")) {
					proj.title = target.value;
					target.blur();
				}
			});
		}
		localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
	});
};

// Redirect to todo list
const Redirect = () => {
	const main = document.querySelector(".projects");
	const projectContainer = document.querySelector(".project-container");
	const backButton = document.createElement("img");
	backButton.className = "backBtn";
	backButton.src = "./assets/btn.svg";
	backButton.alt = "back";
	const itemPlaceholder = document.createElement("div");
	itemPlaceholder.className = "item-placeholder";
	itemPlaceholder.innerText = "Add Todo	";
	const rArrow = document.createElement("div");
	rArrow.innerText = "➜";
	itemPlaceholder.append(rArrow);
	const todoContainer = document.createElement("div");
	todoContainer.className = "todo-container";

	projectContainer.addEventListener("click", (e) => {
		const target = e.target;
		let targetProject;
		ProjectObjectArray.forEach((projectObject) => {
			if (target.getAttribute("PID") === projectObject.pid) {
				targetProject = projectObject;
			}
		});
		if (
			target.getAttribute("class") === "btn" &&
			target.getAttribute("PID") === target.parentElement.getAttribute("PID")
		) {
			main.firstElementChild.innerText =
				target.parentElement.firstElementChild.value;
			projectContainer.style.display = "none";
			main.append(backButton, itemPlaceholder, todoContainer);
			ViewTodoForm();
			CloseTodoForm();
			AddTodo(targetProject);
			DeleteTodo(targetProject);
			MarkAsCompleted(targetProject);
			EditTodo(targetProject);
			if (targetProject.linkedTodoList.length) {
				targetProject.linkedTodoList.map((todoObject) => {
					document
						.querySelector(".todo-container")
						.appendChild(
							(0,_components_TodoItem__WEBPACK_IMPORTED_MODULE_0__["default"])(
								todoObject.uuid,
								todoObject.completedStatus,
								todoObject.task,
								todoObject.priority,
								todoObject.date
							)
						);

					if (todoObject.completedStatus) {
						(0,_components_TodoItem__WEBPACK_IMPORTED_MODULE_0__["default"])().classList.add("completed");
					} else {
						(0,_components_TodoItem__WEBPACK_IMPORTED_MODULE_0__["default"])().classList.remove("completed");
					}
				});
			}
		}
	});
};

const BackToProjects = () => {
	const main = document.querySelector(".projects");

	main.addEventListener("click", (e) => {
		const target = e.target;
		if (target.matches("img") && target.getAttribute("class") === "backBtn") {
			location.reload();
		}
	});
};


/***/ }),

/***/ "./src/components/EditForm.js":
/*!************************************!*\
  !*** ./src/components/EditForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const EditForm = (inputVal, dataId) => {
	const form = document.createElement("form");
	const input = document.createElement("input");
	const select = document.createElement("select");
	const low = document.createElement("option");
	const medium = document.createElement("option");
	const high = document.createElement("option");
	const date = document.createElement("input");

	form.setAttribute("data-id", dataId);
	form.classList.add("hideEdit");
	input.value = inputVal;

	Date.prototype.toDateInputValue = function () {
		var local = new Date(this);
		local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
		return local.toJSON().slice(0, 10);
	};

	low.innerText = "Low";
	low.value = "Low";
	medium.innerText = "Medium";
	medium.value = "Medium";
	high.innerText = "High";
	high.value = "High";
	date.type = "date";
	date.value = new Date().toDateInputValue();

	select.append(low, medium, high);
	form.append(input, select, date);

	return form;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditForm);


/***/ }),

/***/ "./src/components/ProjectCard.js":
/*!***************************************!*\
  !*** ./src/components/ProjectCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ProjectCard = (
	PID,
	title,
	totalTasks = 0,
	completeTasks = 0,
	highTasks = 0,
	mediumTasks = 0,
	lowTasks = 0
) => {
	const project = document.createElement("div");
	project.setAttribute("PID", PID);
	const input = document.createElement("input");
	input.setAttribute("PID", PID);
	input.className = "titleInput";
	const ul = document.createElement("ul");
	const total = document.createElement("li");
	const tStrong = document.createElement("strong");
	const complete = document.createElement("li");
	const cStrong = document.createElement("strong");
	const high = document.createElement("li");
	const hStrong = document.createElement("strong");
	const medium = document.createElement("li");
	const mStrong = document.createElement("strong");
	const low = document.createElement("li");
	const lStrong = document.createElement("strong");
	const img = document.createElement("img");
	img.setAttribute("PID", PID);
	const delImg = document.createElement("img");
	delImg.setAttribute("PID", PID);

	project.classList.add("card");
	input.type = "text";
	input.value = title;
	total.innerText = "Total Tasks: ";
	tStrong.innerText = totalTasks;
	total.append(tStrong);
	complete.innerText = "Completed : ";
	cStrong.innerText = completeTasks;
	complete.append(cStrong);
	high.innerText = "High Priority : ";
	hStrong.innerText = highTasks;
	high.append(hStrong);
	medium.innerText = "Medium Priority : ";
	mStrong.innerText = mediumTasks;
	medium.append(mStrong);
	low.innerText = "Low Priority : ";
	lStrong.innerText = lowTasks;
	low.append(lStrong);
	ul.append(total, complete, high, medium, low);
	img.src = "./assets/btn.svg";
	img.alt = "button";
	img.className = "btn";
	delImg.src = "./assets/delete.svg";
	delImg.className = "delImg";
	project.append(input, ul, img, delImg);

	return project;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCard);


/***/ }),

/***/ "./src/components/TodoForm.js":
/*!************************************!*\
  !*** ./src/components/TodoForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TodoForm = () => {
	const overlay = document.createElement("div");
	const form = document.createElement("form");
	const span = document.createElement("span");
	const task = document.createElement("input");
	const asterisk = document.createElement("p");
	const taskLabel = document.createElement("label");
	const priorityLabel = document.createElement("label");
	const div = document.createElement("div");
	const low = document.createElement("input");
	low.required = true;
	const lowLabel = document.createElement("label");
	const medium = document.createElement("input");
	medium.required = true;
	const mediumLabel = document.createElement("label");
	const high = document.createElement("input");
	high.required = true;
	const highLabel = document.createElement("label");
	const spanD = document.createElement("span");
	const dateLabel = document.createElement("label");
	const date = document.createElement("input");
	const btn = document.createElement("button");
	const exit = document.createElement("img");

	overlay.className = "overlay";

	exit.src = "./assets/close.svg";
	exit.id = "exit";

	form.id = "form";

	task.type = "text";
	asterisk.innerText = "*";
	task.maxLength = "20";
	task.minLength = "1";
	task.id = "task";
	taskLabel.innerText = "Task: ";
	taskLabel.htmlFor = "task";
	taskLabel.insertAdjacentElement("afterbegin", asterisk);

	priorityLabel.innerText = "Priority: ";

	low.id = "low";
	low.value = "Low";
	low.type = "radio";
	low.name = "priority";
	lowLabel.innerText = "Low: ";
	lowLabel.htmlFor = "low";
	lowLabel.style.cssText = "color: green; font-weight: 700";

	medium.id = "medium";
	medium.value = "Medium";
	medium.type = "radio";
	medium.name = "priority";
	mediumLabel.innerText = "Medium: ";
	mediumLabel.htmlFor = "medium";
	mediumLabel.style.cssText = "color: orange; font-weight: 700";

	high.id = "high";
	high.value = "High";
	high.type = "radio";
	high.name = "priority";
	highLabel.innerText = "High: ";
	highLabel.htmlFor = "high";
	highLabel.style.cssText = "color: red; font-weight: 700";

	dateLabel.innerText = "Date: ";
	dateLabel.htmlFor = "date";
	date.type = "date";
	date.id = "date";

	btn.innerText = "Add";
	btn.type = "submit";
	btn.id = "add";

	span.appendChild(taskLabel);
	span.appendChild(task);
	form.appendChild(span);
	div.appendChild(priorityLabel);
	div.appendChild(lowLabel);
	div.appendChild(low);
	div.appendChild(mediumLabel);
	div.appendChild(medium);
	div.appendChild(highLabel);
	div.appendChild(high);
	form.appendChild(div);
	spanD.appendChild(dateLabel);
	spanD.appendChild(date);
	form.appendChild(spanD);
	form.appendChild(btn);
	form.appendChild(exit);
	overlay.appendChild(form);

	return overlay;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoForm);


/***/ }),

/***/ "./src/components/TodoItem.js":
/*!************************************!*\
  !*** ./src/components/TodoItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditForm */ "./src/components/EditForm.js");
// import { v4 } from "uuid";


const TodoItem = (uuid, done, text, priority, date) => {
	const item = document.createElement("div");
	const checkBox = document.createElement("input");
	const task = document.createElement("h3");
	const selectPriority = document.createElement("h4");
	const cal = document.createElement("h4");
	const del = document.createElement("img");
	const edit = document.createElement("img");

	item.classList.add("item");
	checkBox.type = "checkbox";
	checkBox.checked = done;
	if (checkBox.checked) {
		item.classList.add("completed");
	} else {
		item.classList.remove("completed");
	}
	task.innerText = text;
	task.className = "todo-task";
	selectPriority.innerText = priority;
	if (selectPriority.innerText === "Low") {
		selectPriority.style.color = "green";
	} else if (selectPriority.innerText === "Medium") {
		selectPriority.style.color = "orange";
	} else if (selectPriority.innerText === "High") {
		selectPriority.style.color = "red";
	}
	cal.innerText = date;
	cal.id = "todo-date";
	del.src = "../assets/close.svg";
	del.className = "del";
	edit.src = "../assets/edit.svg";
	edit.className = "edit";

	item.setAttribute("data-id", `${uuid}`);
	del.setAttribute("data-id", `${uuid}`);
	edit.setAttribute("data-id", `${uuid}`);
	edit.setAttribute("handleToggle", true);
	task.setAttribute("data-id", `${uuid}`);

	item.append(
		checkBox,
		task,
		selectPriority,
		cal,
		edit,
		del,
		(0,_EditForm__WEBPACK_IMPORTED_MODULE_0__["default"])(task.innerText, `${uuid}`)
	);

	return item;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TodoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TodoForm */ "./src/components/TodoForm.js");
/* harmony import */ var _DomActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomActions */ "./src/DomActions.js");

// import ProjectCard from "./components/ProjectCard";



document.querySelector("body").appendChild((0,_components_TodoForm__WEBPACK_IMPORTED_MODULE_0__["default"])());

window.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
	}
});

(0,_DomActions__WEBPACK_IMPORTED_MODULE_1__.AddProject)();
(0,_DomActions__WEBPACK_IMPORTED_MODULE_1__.DeleteProject)();
(0,_DomActions__WEBPACK_IMPORTED_MODULE_1__.EditTitle)();
(0,_DomActions__WEBPACK_IMPORTED_MODULE_1__.Redirect)();
(0,_DomActions__WEBPACK_IMPORTED_MODULE_1__.BackToProjects)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map