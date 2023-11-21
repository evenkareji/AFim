"use strict";
exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 6702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ UserIconImg)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const UserIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "UserIconImg",
  componentId: "sc-k5eqd1-0"
})(["object-fit:cover;border-radius:100%;width:46px;height:46px;background-color:#fff;"]);

/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ templates_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/atoms/Icon.tsx





const Icon = ({
  children,
  link
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SLink, {
    href: link,
    children: /*#__PURE__*/jsx_runtime_.jsx(SIconButton, {
      children: children
    })
  });
};
const SIconButton = external_styled_components_default()((IconButton_default())).withConfig({
  displayName: "Icon__SIconButton",
  componentId: "sc-2ipogh-0"
})(["padding:8px;text-decoration:none;font-size:inherit !important;width:160px;color:#fff;display:flex !important;align-items:center !important;color:inherit !important;border-radius:22px !important;flex-direction:column;@media (min-width:768px){}@media (min-width:1264px){text-align:left !important;flex-direction:row;}"]);
const SLink = external_styled_components_default()((link_default())).withConfig({
  displayName: "Icon__SLink",
  componentId: "sc-2ipogh-1"
})(["text-decoration:none;color:#000;@media (min-width:425px){}"]);
// EXTERNAL MODULE: external "@mui/icons-material/Home"
var Home_ = __webpack_require__(3467);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);
// EXTERNAL MODULE: external "@mui/icons-material/HomeOutlined"
var HomeOutlined_ = __webpack_require__(9989);
var HomeOutlined_default = /*#__PURE__*/__webpack_require__.n(HomeOutlined_);
;// CONCATENATED MODULE: ./src/components/molecules/Home.jsx




 // import { useDispatch } from 'react-redux';
// import { changeIsIcon } from '../../features/isIconSlice';
// import { useSelector } from 'react-redux';



const Home = ({
  isIcon
}) => {
  // const reloadHome = () => {
  //   window.location.reload();
  // };
  // const dispatch = useDispatch();
  // const isFooter = useSelector((state) => state.isIcon);
  return (
    /*#__PURE__*/
    // onClick={dispatch(changeIsIcon())}
    jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Icon, {
        link: '/',
        children: [isIcon ? /*#__PURE__*/jsx_runtime_.jsx((Home_default()), {
          style: {
            width: '32',
            height: '32'
          }
        }) : /*#__PURE__*/jsx_runtime_.jsx((HomeOutlined_default()), {
          style: {
            width: '32',
            height: '32'
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(SIconText, {
          isIcon: isIcon,
          children: "\u30DB\u30FC\u30E0"
        })]
      })
    })
  );
};
const SIconText = external_styled_components_default().small.withConfig({
  displayName: "Home__SIconText",
  componentId: "sc-1uvcjko-0"
})(["font-weight:", ";flex:1;width:120px;@media (min-width:768px){display:none;}@media (min-width:1264px){display:block;margin-left:auto;margin-left:30px !important;}"], ({
  isIcon
}) => isIcon ? '800' : 'normal');
// EXTERNAL MODULE: ./src/components/atoms/UserIconImg.tsx
var UserIconImg = __webpack_require__(6702);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/molecules/UserProfileIcon.jsx







const UserProfileIcon = ({
  isIcon
  /*changeIsIcon*/

}) => {
  const user = (0,external_react_redux_.useSelector)(state => state.user.user);
  const {
    0: userProfileImg,
    1: setUserProfileImg
  } = (0,external_react_.useState)('');
  (0,external_react_.useEffect)(() => {
    setUserProfileImg(user?.profileImg);
  }, [user]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Icon, {
    link: `/profile/${user?.username}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx(SProfileIcon, {
      src: user?.profileImg,
      isIcon: isIcon
    }), /*#__PURE__*/jsx_runtime_.jsx(UserProfileIcon_SIconText, {
      isIcon: isIcon,
      children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"
    })]
  });
};
const UserProfileIcon_SIconText = external_styled_components_default().small.withConfig({
  displayName: "UserProfileIcon__SIconText",
  componentId: "sc-cuqkfo-0"
})(["font-weight:", ";letter-spacing:-0.1em;@media (min-width:432px){letter-spacing:0;}@media (min-width:768px){display:none;}@media (min-width:1264px){width:90px !important;margin-left:30px !important;display:block;}"], ({
  isIcon
}) => isIcon ? '800' : 'normal');
const SProfileIcon = external_styled_components_default()(UserIconImg/* UserIconImg */.h).withConfig({
  displayName: "UserProfileIcon__SProfileIcon",
  componentId: "sc-cuqkfo-1"
})(["width:32px;height:32px;padding-left:0;box-sizing:border-box;border:", ";"], ({
  isIcon
}) => isIcon ? '2px solid #000' : 'none');
;// CONCATENATED MODULE: ./src/components/molecules/AddPostIcon.tsx




const AddPostIcon = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Icon, {
    link: '/add-post',
    children: /*#__PURE__*/jsx_runtime_.jsx(ButtonContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(PlusSign, {})
    })
  });
};
const ButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "AddPostIcon__ButtonContainer",
  componentId: "sc-mficnp-0"
})(["display:flex;align-items:center;justify-content:center;width:40px;height:28px;background:linear-gradient(90deg,#e1f5fe 48%,#ffc1c1 52%);border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.1);"]);
const PlusSign = external_styled_components_default().div.withConfig({
  displayName: "AddPostIcon__PlusSign",
  componentId: "sc-mficnp-1"
})(["width:28px;height:100%;background-color:#ffffff;border-radius:4px;position:relative;::before,::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#000;border-radius:2px;}::before{width:3px;height:16px;}::after{width:16px;height:3px;}"]);
/* harmony default export */ const molecules_AddPostIcon = ((/* unused pure expression or super */ null && (AddPostIcon)));
;// CONCATENATED MODULE: ./src/components/templates/Footer.jsx







const Footer = () => {
  const {
    0: isHomeIcon,
    1: setIsHomeIcon
  } = (0,external_react_.useState)(true);
  const {
    0: isAddIcon,
    1: setIsAddIcon
  } = (0,external_react_.useState)(true);
  const {
    0: isProfileIcon,
    1: setIsProfileIcon
  } = (0,external_react_.useState)(true);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SFooter, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Home, {
      isIcon: isHomeIcon
    }), /*#__PURE__*/jsx_runtime_.jsx(AddPostIcon, {
      isIcon: isAddIcon
    }), /*#__PURE__*/jsx_runtime_.jsx(UserProfileIcon, {
      isIcon: isProfileIcon
    })]
  });
};
const SFooter = external_styled_components_default().footer.withConfig({
  displayName: "Footer__SFooter",
  componentId: "sc-6k62fi-0"
})(["position:fixed;bottom:0;left:0;right:0;display:flex;align-items:center;z-index:1000000;background-color:rgb(255,255,255);width:100%;justify-content:space-around;border-top:1px solid #dbdbdb;@media (min-width:768px){padding:30px 0px 30px 20px;justify-content:space-between;height:280px;flex-direction:column;position:relative;flex:0.2;}@media (min-width:1264px){align-items:start;}"]);
;// CONCATENATED MODULE: ./src/components/templates/Layout/index.tsx






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SFlex, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Footer, {}), children]
  });
};

const SFlex = external_styled_components_default().div.withConfig({
  displayName: "Layout__SFlex",
  componentId: "sc-675s55-0"
})(["position:relative;display:flex;width:100%;"]);
/* harmony default export */ const templates_Layout = (Layout);

/***/ })

};
;