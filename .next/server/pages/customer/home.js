"use strict";
(() => {
var exports = {};
exports.id = 272;
exports.ids = [272];
exports.modules = {

/***/ 7192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ FilledButton)
/* harmony export */ });
/* unused harmony exports FilledBtn, OutlinedBtn, OutlinedButton */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const FilledBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Button__FilledBtn",
  componentId: "sc-b9e6fr-0"
})(["background-color:#ffc107;color:#fff;border:none;padding:1rem 2rem;font-size:1.2em;font-weight:700;border-radius:2rem;cursor:pointer;border:3px solid #ffc107;transition:all 0.3s ease-in-out;&:hover{background-color:#000;color:#fff;}"]);
const OutlinedBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Button__OutlinedBtn",
  componentId: "sc-b9e6fr-1"
})(["background-color:transparent;color:#000;border:none;padding:1rem 2rem;font-size:1.2em;font-weight:700;border-radius:2rem;cursor:pointer;border:3px solid #ffc107;transition:all 0.3s ease-in-out;&:hover{background-color:#000;color:#fff;}"]);
const FilledButton = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FilledBtn, {
    children: props.children
  });
};
const OutlinedButton = props => {
  return /*#__PURE__*/_jsx(OutlinedBtn, {
    children: props.children
  });
};

/***/ }),

/***/ 3181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": () => (/* binding */ CarouselContainer),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "FeaturedContent": () => (/* binding */ FeaturedContent),
/* harmony export */   "HeaderTitle": () => (/* binding */ HeaderTitle),
/* harmony export */   "Hero": () => (/* binding */ Hero),
/* harmony export */   "HeroContent": () => (/* binding */ HeroContent),
/* harmony export */   "HeroTitle": () => (/* binding */ HeroTitle),
/* harmony export */   "SubheaderTitle": () => (/* binding */ SubheaderTitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7192);
/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9106);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import Swiper core and required modules










const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "home__Container",
  componentId: "sc-u0b85p-0"
})(["width:100%;min-height:90vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#f5f5f5;"]);
const Hero = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "home__Hero",
  componentId: "sc-u0b85p-1"
})(["width:100%;height:90vh;background:linear-gradient(rgb(0,0,0,0.8),rgb(255,193,7,0.8)),url(\"https://s3.amazonaws.com/tfh-medias/Banner-Farah.jpg?mtime=20180606174053\") center/cover no-repeat fixed;background:linear-gradient(rgb(0,0,0,0.8),rgb(255,193,7,0.8)),url(\"https://s3.amazonaws.com/tfh-medias/Banner-Farah.jpg?mtime=20180606174053\") center/cover no-repeat fixed;"]); // hero section styling

const HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "home__HeroContent",
  componentId: "sc-u0b85p-2"
})(["position:absolute;top:70%;right:10%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:3rem;"]);
const HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "home__HeroTitle",
  componentId: "sc-u0b85p-3"
})(["font-size:3rem;color:#fff;font-weight:700;margin:0;padding:0;"]); // hero section styling end
// featured content styling

const FeaturedContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "home__FeaturedContent",
  componentId: "sc-u0b85p-4"
})(["min-height:100vh;width:100%;display:flex;flex-direction:column;gap:1rem;padding:3rem 0;"]);
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "home__HeaderTitle",
  componentId: "sc-u0b85p-5"
})(["font-size:2em;color:#000;font-weight:600;text-align:center;"]);
const SubheaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "home__SubheaderTitle",
  componentId: "sc-u0b85p-6"
})(["font-size:1em;color:#000;text-align:center;"]);
const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "home__CarouselContainer",
  componentId: "sc-u0b85p-7"
})(["display:flex;justify-content:center;align-items:center;gap:1rem;padding:0 2rem;height:80vh;"]);

const Home = props => {
  const items = Object.values(props);
  const data = [{
    title: "Product 1",
    price: 100
  }, {
    title: "Product 2",
    price: 200
  }, {
    title: "Product 3",
    price: 300
  }, {
    title: "Product 4",
    price: 400
  }, {
    title: "Product 5",
    price: 500
  }, {
    title: "Product 6",
    price: 600
  }, {
    title: "Product 7",
    price: 700
  }, {
    title: "Product 8",
    price: 800
  }, {
    title: "Product 9",
    price: 900
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Container, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Hero, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(HeroContent, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(HeroTitle, {
          children: "Fill up your life with desi vibes"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_UI_Button__WEBPACK_IMPORTED_MODULE_5__/* .FilledButton */ .IH, {
          children: "Shop Now"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(FeaturedContent, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(HeaderTitle, {
        children: "New Arrivals"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SubheaderTitle, {
        children: "Visit out shop to get the best deals in Pakistan"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(CarouselContainer, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
          modules: [swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_3__.Virtual],
          navigation: true,
          pagination: {
            clickable: true
          },
          className: "mySwiper",
          spaceBetween: 30,
          breakpoints: {
            320: {
              slidesPerView: 1
            },
            480: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            1440: {
              slidesPerView: 4
            }
          },
          centeredSlides: true,
          onSlideChange: () => console.log("slide change"),
          onSwiper: swiper => console.log(swiper),
          virtual: true,
          children: items.map((item, index) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
              virtualIndex: index,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                style: {
                  height: "75vh"
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ProductCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                  title: item.title,
                  price: item.price,
                  image: item.image
                })
              })
            }, item.title);
          })
        })
      })]
    })]
  });
}; // This gets called on every request


async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("http://localhost:6969/products");
  return {
    props: _objectSpread({}, res.data)
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5065:
/***/ ((module) => {

module.exports = require("react-icons/sl");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6170:
/***/ ((module) => {

module.exports = require("styled-breakpoints");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,106], () => (__webpack_exec__(3181)));
module.exports = __webpack_exports__;

})();