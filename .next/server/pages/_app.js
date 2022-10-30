"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/UI/Footer/Footer.tsx



const FooterContainer = external_styled_components_default().footer.withConfig({
  displayName: "Footer__FooterContainer",
  componentId: "sc-s5hi88-0"
})(["width:100%;min-height:50vh;display:flex;justify-content:space-around;align-items:flex-start;padding:2rem 0;background:#ffc107;"]);
const FooterColumn = external_styled_components_default().div.withConfig({
  displayName: "Footer__FooterColumn",
  componentId: "sc-s5hi88-1"
})(["display:flex;flex-direction:column;gap:1rem;align-items:flex-start;justify-content:center;"]);

const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterColumn, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "About us"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "About"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Contact us"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Store"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "location"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Terms of Service"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Refund policy"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterColumn, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Support"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Shipping"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Return & exchange"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Track your order"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Cancellation policy"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterColumn, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Policy"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "FAQs"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Privacy policy"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Terms & conditions"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterColumn, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Follow us"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Facebook"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Twitter"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Instagram"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Youtube"
      })]
    })]
  });
};

/* harmony default export */ const Footer_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
;// CONCATENATED MODULE: ./public/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.cc544333.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATUlEQVR42mPAAGlMa5mmMrkxMjDYMzoxWjEyYADTcxFnvG/IzxJVUdBT01U0YzAHCyjMFFCW1VfRkDNmwAAFTKuZpjC5MzIwWIAwpqEAS2QPeGGttJsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/UI/Header/index.tsx








const Navbar = external_styled_components_default().nav.withConfig({
  displayName: "Header__Navbar",
  componentId: "sc-1hopqxi-0"
})(["display:flex;justify-content:space-between;align-items:center;padding:0 1rem;background-color:#ffc107;color:#000;height:10vh;overflow:hidden;", "{padding:0 3rem;}", "{padding:0 4rem;}"], (0,external_styled_breakpoints_.between)("md", "lg"), (0,external_styled_breakpoints_.up)("lg"));
const Logo = external_styled_components_default().div.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1hopqxi-1"
})(["width:clamp(100px,150px,200px);"]);
const Content = external_styled_components_default().ul.withConfig({
  displayName: "Header__Content",
  componentId: "sc-1hopqxi-2"
})(["display:flex;flex-direction:column;justify-content:space-between;width:100%;background:#ffc107;position:absolute;top:10vh;left:0;right:0;height:90vh;z-index:999;transition:all 0.5s ease-in-out;transform:translateX( ", " );", "{position:static;flex-direction:row;justify-content:flex-end;height:auto;gap:1rem;transform:translateX(0);}"], props => props.open ? "0" : "100%", (0,external_styled_breakpoints_.up)("md"));
const ContentItem = external_styled_components_default().li.withConfig({
  displayName: "Header__ContentItem",
  componentId: "sc-1hopqxi-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:22.5vh;font-weight:600;cursor:pointer;&::after{content:\"\";display:block;width:100%;height:2px;background:#000;width:0;transition:width 0.3s;}&:hover::after{width:100%;}", "{height:10vh;}"], (0,external_styled_breakpoints_.up)("md"));
const ContentItemLink = external_styled_components_default().a.withConfig({
  displayName: "Header__ContentItemLink",
  componentId: "sc-1hopqxi-4"
})(["color:#fff;text-decoration:none;width:100%;height:100%;display:flex;justify-content:center;align-items:center;transition:all 0.3s ease-in-out;font-size:clamp(1em,2vw,1em);&:hover{background-color:#fff;color:#000;}", "{width:100px;}"], (0,external_styled_breakpoints_.up)("md"));
const Hamburger = external_styled_components_default().div.withConfig({
  displayName: "Header__Hamburger",
  componentId: "sc-1hopqxi-5"
})(["cursor:pointer;padding:1rem;", "{display:none;}"], (0,external_styled_breakpoints_.up)("md"));
const HamburgerLayer = external_styled_components_default().div.withConfig({
  displayName: "Header__HamburgerLayer",
  componentId: "sc-1hopqxi-6"
})(["width:30px;height:3px;background-color:#000;margin:5px 0;border-radius:1rem;transition:all 0.4s ease-in-out;transform:", ";display:", ";"], props => {
  return props.open ? props.show ? `rotate(${props.top ? "-45deg" : "45deg"}) translate(-5px, 0px)` : "" : `rotate(0deg) translate(0px, 0px)`;
}, props => {
  return props.open ? props.show ? `block` : " none" : ` block`;
});

const Header = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Navbar, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: logo,
        alt: "Logo"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content, {
      open: isOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(ContentItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/customer/home",
          children: /*#__PURE__*/jsx_runtime_.jsx(ContentItemLink, {
            children: "Home"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ContentItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/customer/store",
          children: /*#__PURE__*/jsx_runtime_.jsx(ContentItemLink, {
            children: "Store"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ContentItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/customer/about",
          children: /*#__PURE__*/jsx_runtime_.jsx(ContentItemLink, {
            children: "About Us"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ContentItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/customer/contact",
          children: /*#__PURE__*/jsx_runtime_.jsx(ContentItemLink, {
            children: "Contact Us"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Hamburger, {
      onClick: () => {
        setIsOpen(!isOpen);
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(HamburgerLayer, {
        open: isOpen,
        top: true,
        show: true
      }), /*#__PURE__*/jsx_runtime_.jsx(HamburgerLayer, {
        open: isOpen,
        top: false,
        show: false
      }), /*#__PURE__*/jsx_runtime_.jsx(HamburgerLayer, {
        open: isOpen,
        top: false,
        show: true
      })]
    })]
  });
};

/* harmony default export */ const UI_Header = (Header);
;// CONCATENATED MODULE: ./layouts/MainLayout/index.tsx






//styled components
const Layout = external_styled_components_default().main.withConfig({
  displayName: "MainLayout__Layout",
  componentId: "sc-1xlgat7-0"
})(["display:flex;width:100%;background-color:#fff;"]);

const MainLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(UI_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Layout, {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
  });
};

/* harmony default export */ const layouts_MainLayout = (MainLayout);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(layouts_MainLayout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(1654)));
module.exports = __webpack_exports__;

})();