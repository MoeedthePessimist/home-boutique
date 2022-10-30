"use strict";
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 9106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Card, CardImage, CardContent */
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5065);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_sl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ProductCard__Card",
  componentId: "sc-1wtz8hv-0"
})(["display:flex;flex-direction:column;gap:1rem;width:300px;"]);
const CardImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ProductCard__CardImage",
  componentId: "sc-1wtz8hv-1"
})(["width:300px;"]);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ProductCard__CardContent",
  componentId: "sc-1wtz8hv-2"
})([""]);
const CardText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ProductCard__CardText",
  componentId: "sc-1wtz8hv-3"
})(["text-align:center;font-size:0.9em;color:#000;"]);
const CardButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "ProductCard__CardButton",
  componentId: "sc-1wtz8hv-4"
})(["display:flex;justify-content:center;align-items:center;width:50%;align-self:center;background:#fc1;border:2px solid #fc1;gap:1rem;padding:0.5rem 0;color:#000;border-radius:0.5rem;cursor:pointer;transition:all 0.3s ease-in-out;&:hover{background:transparent;}"]); // const CardPrice = styled.div`
//   text-align: center;
//   font-size: 0.9em;
//   color: #000;
// `;

const ProductCard = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Card, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CardImage, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        loader: () => props.image,
        src: props.image,
        alt: "photo",
        width: 300,
        height: 380 // height={350}

      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CardContent, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CardText, {
        children: props.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CardText, {
        children: ["PKR ", props.price]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CardButton, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_icons_sl__WEBPACK_IMPORTED_MODULE_2__.SlBasket, {}), "Add to cart"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

/***/ })

};
;