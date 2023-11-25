"use strict";
(() => {
var exports = {};
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 8306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





 // 分割代入の中でtypescriptの型宣言をしている



const Card = props => {
  const {
    post
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(); // const [user, setUser] = useState<User>({
  //   _id: '',
  //   username: '',
  //   email: '',
  //   password: '',
  //   profileImg: '',
  //   followers: [],
  //   followings: [],
  //   isAdmin: false,
  //   updatedAt: null,
  // });

  const {
    username
  } = router.query;
  const loginUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user); // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await axios.get(
  //       `http://localhost:8000/users?userId=${post.userId}`,
  //     );
  //     setUser(response.data);
  //   };
  //   fetchUser();
  // }, [post.userId]);

  const postDelete = async () => {
    try {
      if (window.confirm('本当に削除しますかー？いいの？ほんき？ええ！？')) {
        await axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](`/api/posts/${post._id}`, {
          data: {
            userId: loginUser.user._id
          }
        }); // 変更エラーが起きる
        // window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(SCard, {
    children: [loginUser.user.username === username && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SDeleteIcon, {
      onClick: postDelete
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SProfileText, {
      children: post.desc
    }, post._id)]
  }, post._id);
};
const SDeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({
  displayName: "Card__SDeleteIcon",
  componentId: "sc-h8d2qv-0"
})(["position:absolute;top:20px;right:20px;color:#8d8d8d;"]);
const SCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Card__SCard",
  componentId: "sc-h8d2qv-1"
})(["position:relative;background-color:#fff;border-radius:3px;border:1px solid #dfdfdf;padding:70px 16px;height:250px;"]);
const SProfileText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Card__SProfileText",
  componentId: "sc-h8d2qv-2"
})(["font-family:'Helvetica';margin:0 auto;font-size:20px;width:80%;height:50%;display:flex;flex-direction:column;justify-content:center;overflow-wrap:break-word;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ FollowerInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6702);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const FollowerInfo = ({
  follower
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(UserBorder, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: `/profile/${follower[0].username}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SFollowImg, {
        src: follower[0].profileImg
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(SFollowContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SFollowName, {
        children: follower[0].username
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SFollowDesc, {})]
    })]
  }, follower[0]._id);
};
const UserBorder = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "FollowerInfo__UserBorder",
  componentId: "sc-842dev-0"
})(["width:100%;max-width:680px;margin:0 auto;display:flex;align-items:center;"]);
const SFollowImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_3__/* .UserIconImg */ .h).withConfig({
  displayName: "FollowerInfo__SFollowImg",
  componentId: "sc-842dev-1"
})(["margin-right:13px;width:61;height:61;text-align:left;@media (min-width:425px){&{width:71;height:71;}}"]);
const SFollowContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dl.withConfig({
  displayName: "FollowerInfo__SFollowContainer",
  componentId: "sc-842dev-2"
})(["flex:0.9;"]);
const SFollowName = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dt.withConfig({
  displayName: "FollowerInfo__SFollowName",
  componentId: "sc-842dev-3"
})(["font-weight:bold;font-size:14px;margin-bottom:-5px;"]);
const SFollowDesc = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dd.withConfig({
  displayName: "FollowerInfo__SFollowDesc",
  componentId: "sc-842dev-4"
})(["font-size:16px;color:#8f8f8f;"]);

/***/ }),

/***/ 8500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ FollowingInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6702);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const FollowingInfo = ({
  following
}) => {
  const PUBLIC_FOLDER = process.env.NEXT_PUBLIC_PUBLIC_FOLDER;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(UserBorder, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: `/profile/${following[0].username}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SFollowImg, {
        src: following[0].profileImg ? PUBLIC_FOLDER + following[0].profileImg : PUBLIC_FOLDER + '/person/noAvatar.png'
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(SFollowContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SFollowName, {
        children: following[0].username
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SFollowDesc, {})]
    })]
  }, following[0]._id);
};
const UserBorder = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "FollowingInfo__UserBorder",
  componentId: "sc-1ifirit-0"
})(["width:100%;max-width:680px;margin:0 auto;display:flex;align-items:center;"]);
const SFollowImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_3__/* .UserIconImg */ .h).withConfig({
  displayName: "FollowingInfo__SFollowImg",
  componentId: "sc-1ifirit-1"
})(["margin-right:13px;width:61;height:61;text-align:left;@media (min-width:425px){&{width:71;height:71;}}"]);
const SFollowContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dl.withConfig({
  displayName: "FollowingInfo__SFollowContainer",
  componentId: "sc-1ifirit-2"
})(["flex:0.9;"]);
const SFollowName = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dt.withConfig({
  displayName: "FollowingInfo__SFollowName",
  componentId: "sc-1ifirit-3"
})(["font-weight:bold;font-size:14px;margin-bottom:-5px;"]);
const SFollowDesc = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dd.withConfig({
  displayName: "FollowingInfo__SFollowDesc",
  componentId: "sc-1ifirit-4"
})(["font-size:16px;color:#8f8f8f;"]);

/***/ }),

/***/ 9325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ ProfileCount)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/atoms/ProfileCountDt.tsx



const ProfileCountDt = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SProfileCountDt, {
    children: children
  });
};
const SProfileCountDt = external_styled_components_default().dt.withConfig({
  displayName: "ProfileCountDt__SProfileCountDt",
  componentId: "sc-1ooltsr-0"
})(["font-size:16px;font-weight:bold;"]);
;// CONCATENATED MODULE: ./src/components/atoms/ProfileCountDd.tsx



const ProfileCountDd = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SProfileCountDd, {
    children: children
  });
};
const SProfileCountDd = external_styled_components_default().dd.withConfig({
  displayName: "ProfileCountDd__SProfileCountDd",
  componentId: "sc-1rwdmdp-0"
})(["font-size:12px;"]);
;// CONCATENATED MODULE: ./src/components/molecules/ProfileCount.jsx






const ProfileCount = ({
  count,
  name,
  toFollowsPage
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileDl, {
    onClick: toFollowsPage,
    children: [/*#__PURE__*/jsx_runtime_.jsx(ProfileCountDt, {
      children: count
    }), /*#__PURE__*/jsx_runtime_.jsx(ProfileCountDd, {
      children: name
    })]
  });
};
const ProfileDl = external_styled_components_default().dl.withConfig({
  displayName: "ProfileCount__ProfileDl",
  componentId: "sc-ubptkt-0"
})(["position:relative;width:200px;display:flex;flex-direction:column;align-items:center;"]);

/***/ }),

/***/ 9277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchUsers)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/atoms/SerachForm.tsx



const SearchForm = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(SSearchForm, {
    placeholder: "\u691C\u7D22"
  });
};
const SSearchForm = external_styled_components_default().input.withConfig({
  displayName: "SerachForm__SSearchForm",
  componentId: "sc-askekh-0"
})(["padding-left:25px;padding-right:25px;width:100%;border-radius:11px;background-color:#f0f0f0;border:none;outline:none;"]);
;// CONCATENATED MODULE: ./src/components/molecules/SearchUsers.jsx




const SearchUsers = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(SearchContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(SearchForm, {
      placeholder: "\u691C\u7D22"
    })
  });
};
const SearchContainer = external_styled_components_default().div.withConfig({
  displayName: "SearchUsers__SearchContainer",
  componentId: "sc-1vi15r7-0"
})(["margin:0 auto;width:92%;position:relative;max-width:680px;margin-bottom:25px;"]);

/***/ }),

/***/ 5280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ UserIconWithName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6702);
/* harmony import */ var _mui_icons_material_AddCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4984);
/* harmony import */ var _mui_icons_material_AddCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1697);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3385);
/* harmony import */ var _utils_blobConverter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7896);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _features_userSlice__WEBPACK_IMPORTED_MODULE_6__, _redux_store__WEBPACK_IMPORTED_MODULE_7__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _features_userSlice__WEBPACK_IMPORTED_MODULE_6__, _redux_store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const UserIconWithName = ({
  profileUser
}) => {
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    user
  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_7__/* .useSelector */ .v)(state => state.user);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (image) {
      profileUpload();
    }
  }, [image]);

  const handleImages = e => {
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = readerEvent => {
        setImage(readerEvent.target.result);
      };
    }
  };

  async function profileUpload() {
    if (!user) {
      console.error('user情報がありません');
      return;
    }

    const newProfile = {
      userId: user._id
    };

    if (image) {
      const postImage = (0,_utils_blobConverter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(image); // 単一の画像をBlobに変換

      const path = `${user.username}/post Image`;
      const formData = new FormData();
      formData.append('path', path);
      formData.append('file', postImage);

      try {
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/api/upload/uploadImages', formData);
        newProfile.profileImg = data.url.url;
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].put(`/api/users/${user._id}`, newProfile);
        dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_6__/* .toggleFollow */ .Gm)(response.data));
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(SLabel, {
      htmlFor: "profile_image",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SProfileImg, {
        src: profileUser.profileImg
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SAddCircleIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
        type: "file",
        id: "profile_image",
        name: "profile_image",
        hidden: true,
        accept: "image/jpeg,image/png,image/gif,image/webp",
        onChange: handleImages
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SProfileUserName, {
      children: profileUser.username
    })]
  });
};
const SLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
  displayName: "UserIconWithName__SLabel",
  componentId: "sc-17mzsyz-0"
})(["position:relative;display:block;cursor:pointer;width:160px;height:160px;margin:0 auto 14px;@media (min-width:425px){&{width:180px;height:180px;}}"]);
const SAddCircleIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_mui_icons_material_AddCircle__WEBPACK_IMPORTED_MODULE_4___default())).withConfig({
  displayName: "UserIconWithName__SAddCircleIcon",
  componentId: "sc-17mzsyz-1"
})(["position:absolute;bottom:-8px;left:68%;font-size:35px !important;color:#ed6103 !important;background:#fff;border-radius:2000px;"]);
const SProfileImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atoms_UserIconImg__WEBPACK_IMPORTED_MODULE_3__/* .UserIconImg */ .h).withConfig({
  displayName: "UserIconWithName__SProfileImg",
  componentId: "sc-17mzsyz-2"
})(["width:160px;height:160px;margin:0 auto;@media (min-width:425px){&{width:180px;height:180px;}}"]);
const SProfileUserName = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "UserIconWithName__SProfileUserName",
  componentId: "sc-17mzsyz-3"
})(["font-weight:bold;font-size:24px;margin-bottom:18px;text-align:center;"]); // const Smp = styled.div`
//   color: #545454;
//   margin-bottom: 18px;
//   text-align: center;
// `;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ FollowTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8544);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1307);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5780);
/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates_FollowerLists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1252);
/* harmony import */ var _templates_FollowLists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5075);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_templates_FollowerLists__WEBPACK_IMPORTED_MODULE_5__, _templates_FollowLists__WEBPACK_IMPORTED_MODULE_6__]);
([_templates_FollowerLists__WEBPACK_IMPORTED_MODULE_5__, _templates_FollowLists__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const FollowTab = ({
  isToPage,
  toFollowsPage
}) => {
  const {
    0: tabIndex,
    1: setTabIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(SBox, {
    isToPage: isToPage,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SArrowBackIosNewIconBox, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SArrowBackIosNewIcon, {
        onClick: toFollowsPage
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(STabsOutline, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(STabs, {
        centered: true,
        value: tabIndex,
        onChange: handleTabChange,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(STab, {
          label: "\u30D5\u30A9\u30ED\u30FC"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(STab, {
          label: "\u30D5\u30A9\u30ED\u30EF\u30FC"
        })]
      })
    }), tabIndex === 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_templates_FollowLists__WEBPACK_IMPORTED_MODULE_6__/* .FollowLists */ .S, {}), tabIndex === 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_templates_FollowerLists__WEBPACK_IMPORTED_MODULE_5__/* .FollowerLists */ .Z, {})]
  });
};
const SArrowBackIosNewIconBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "FollowTab__SArrowBackIosNewIconBox",
  componentId: "sc-8eiun9-0"
})(["width:92%;margin:0 auto;max-width:680px;"]);
const SArrowBackIosNewIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_4___default())).withConfig({
  displayName: "FollowTab__SArrowBackIosNewIcon",
  componentId: "sc-8eiun9-1"
})(["width:92%;max-width:680px;margin:0 auto 20px;"]);
const SBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "FollowTab__SBox",
  componentId: "sc-8eiun9-2"
})(["padding-top:22px;position:absolute;top:0px;left:0px;bottom:0px;right:0px;z-index:100000;background-color:#fff;transition:transform 0.3s;transform:", ";"], ({
  isToPage
}) => isToPage ? 'none' : 'translateX(100%)');
const STabsOutline = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "FollowTab__STabsOutline",
  componentId: "sc-8eiun9-3"
})(["max-width:680px;width:100%;margin:0 auto;margin-bottom:20px;"]);
const STabs = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
  displayName: "FollowTab__STabs",
  componentId: "sc-8eiun9-4"
})(["max-width:680px;width:100%;"]);
const STab = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({
  displayName: "FollowTab__STab",
  componentId: "sc-8eiun9-5"
})(["max-width:1300px;width:50%;min-width:150px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ FollowersInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _molecules_FollowerInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9119);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3385);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const FollowersInfo = () => {
  const {
    0: followers,
    1: setFollowers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    user
  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v)(state => state.user);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getFollowers = async () => {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`http://localhost:8000/users/followers/${user?._id}`);
      setFollowers(response.data);
    };

    getFollowers();
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(SUsersContainer, {
    children: followers.map(follower => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_molecules_FollowerInfo__WEBPACK_IMPORTED_MODULE_3__/* .FollowerInfo */ .O, {
      follower: follower
    }, follower[0]._id))
  });
};
const SUsersContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "FollowersInfo__SUsersContainer",
  componentId: "sc-ejwa3y-0"
})(["width:92%;margin:0 auto;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ FollowingsInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _molecules_FollowingInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8500);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3385);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const FollowingsInfo = () => {
  const {
    0: followings,
    1: setFollowings
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    user,
    loading
  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v)(state => state.user);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getFollowers = async () => {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/api/users/followings/${user?._id}`);
      setFollowings(response.data);
    };

    !loading && getFollowers();
  }, [user]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(SUsersContainer, {
    children: followings.map(following => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_molecules_FollowingInfo__WEBPACK_IMPORTED_MODULE_3__/* .FollowingInfo */ .V, {
      following: following
    }, following[0]._id))
  });
};
const SUsersContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "FollowingsInfo__SUsersContainer",
  componentId: "sc-1qmos2i-0"
})(["width:92%;margin:0 auto;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ UserPostList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _molecules_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8306);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _molecules_Card__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _molecules_Card__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const UserPostList = ({
  username
}) => {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchPosts = async () => {
      if (!username) {
        return;
      }

      const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/api/posts/profile/${username}`);
      setPosts(response.data.sort((post1, post2) => {
        return new Date(post2.createdAt).valueOf() - new Date(post1.createdAt).valueOf();
      }));
    };

    fetchPosts();
  }, [username]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SPersonalPost, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SUserArea, {
      children: posts.map(post => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_molecules_Card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Z, {
        post: post
      }, post._id))
    })
  });
};
const SPersonalPost = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "UserPostList__SPersonalPost",
  componentId: "sc-1hn5rem-0"
})(["background-color:#fafafa;width:100%;padding-top:30px;padding-bottom:275px;"]);
const SUserArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "UserPostList__SUserArea",
  componentId: "sc-1hn5rem-1"
})(["width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));@media (min-width:650px){grid-template-columns:repeat(auto-fit,minmax(200px,0.4fr));}grid-gap:3px 3px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ FollowLists)
/* harmony export */ });
/* harmony import */ var _molecules_SearchUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9277);
/* harmony import */ var _organisms_FollowingsInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2107);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_organisms_FollowingsInfo__WEBPACK_IMPORTED_MODULE_1__]);
_organisms_FollowingsInfo__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FollowLists = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_molecules_SearchUsers__WEBPACK_IMPORTED_MODULE_0__/* .SearchUsers */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_organisms_FollowingsInfo__WEBPACK_IMPORTED_MODULE_1__/* .FollowingsInfo */ .E, {})]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FollowerLists)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _molecules_SearchUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9277);
/* harmony import */ var _organisms_FollowersInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8347);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_organisms_FollowersInfo__WEBPACK_IMPORTED_MODULE_2__]);
_organisms_FollowersInfo__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FollowerLists = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_molecules_SearchUsers__WEBPACK_IMPORTED_MODULE_1__/* .SearchUsers */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_organisms_FollowersInfo__WEBPACK_IMPORTED_MODULE_2__/* .FollowersInfo */ .w, {})]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7713:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_molecules_ProfileCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9325);
/* harmony import */ var _components_organisms_UserPostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(348);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _components_molecules_UserIconWithName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5280);
/* harmony import */ var _components_organisms_FollowTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(644);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(422);
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1697);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3385);
/* harmony import */ var react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7123);
/* harmony import */ var react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_organisms_UserPostList__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__, _components_molecules_UserIconWithName__WEBPACK_IMPORTED_MODULE_6__, _components_organisms_FollowTab__WEBPACK_IMPORTED_MODULE_7__, _features_userSlice__WEBPACK_IMPORTED_MODULE_11__, _redux_store__WEBPACK_IMPORTED_MODULE_12__]);
([_components_organisms_UserPostList__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__, _components_molecules_UserIconWithName__WEBPACK_IMPORTED_MODULE_6__, _components_organisms_FollowTab__WEBPACK_IMPORTED_MODULE_7__, _features_userSlice__WEBPACK_IMPORTED_MODULE_11__, _redux_store__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















async function getServerSideProps(context) {
  const {
    username
  } = context.query;
  const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${process.env.API_URL}/users?username=${username}`);
  return {
    props: {
      profileUser: response.data
    }
  };
}

const ProfilePage = ({
  profileUser
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const {
    0: isToPage,
    1: setIsToPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isPointer,
    1: setIsPointer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const {
    user,
    loading
  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_12__/* .useSelector */ .v)(state => state.user);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_11__/* .fetchInitialUser */ .Ez)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsToPage(false);
  }, [isPointer]);
  const {
    username
  } = router.query;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsPointer(user?.username === username);
  }, [user, username]);

  const toFollowsPage = () => {
    if (user?.username !== username) return;
    setIsToPage(prev => !prev);
  };

  const followings = profileUser?.followings || [];
  const followers = profileUser?.followers || [];

  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
      className: "loader-container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_13___default()), {
        color: "#ed6103",
        loading: true,
        size: 50
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(SProfileBox, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(SFollowTab, {
      isToPage: isToPage,
      toFollowsPage: toFollowsPage,
      style: {
        position: 'absolute'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(SProfileInfo, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_molecules_UserIconWithName__WEBPACK_IMPORTED_MODULE_6__/* .UserIconWithName */ .$, {
        profileUser: profileUser
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(SProfileFlex, {
        isPointer: isPointer,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_molecules_ProfileCount__WEBPACK_IMPORTED_MODULE_2__/* .ProfileCount */ .c, {
          toFollowsPage: toFollowsPage,
          name: "\u30D5\u30A9\u30ED\u30FC",
          count: followings.length
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_molecules_ProfileCount__WEBPACK_IMPORTED_MODULE_2__/* .ProfileCount */ .c, {
          toFollowsPage: toFollowsPage,
          name: "\u30D5\u30A9\u30ED\u30EF\u30FC",
          count: followers.length
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(SIntroduction, {
        children: profileUser.desc
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(SIconButtons, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(SIconButton, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(SProfileOption, {
          children: "\u6295\u7A3F"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(SPadding, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_organisms_UserPostList__WEBPACK_IMPORTED_MODULE_3__/* .UserPostList */ .Y, {
        username: username
      })
    })]
  });
};

const SFollowTab = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_organisms_FollowTab__WEBPACK_IMPORTED_MODULE_7__/* .FollowTab */ .U).withConfig({
  displayName: "username__SFollowTab",
  componentId: "sc-1tlxc69-0"
})([""]);
const SProfileBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "username__SProfileBox",
  componentId: "sc-1tlxc69-1"
})(["position:relative;flex:1;@media (min-width:768px){flex:0.9;}@media (min-width:1264px){flex:0.8;}background-color:#fafafa;height:100%;width:100%;overflow:hidden;"]);
const SIntroduction = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "username__SIntroduction",
  componentId: "sc-1tlxc69-2"
})(["padding:30px 0px 0px;margin:0 auto;width:50%;max-width:600px;text-align:center;font-size:16px;"]);
const SIconButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "username__SIconButtons",
  componentId: "sc-1tlxc69-3"
})(["width:100%;border-top:1px solid #dfdfdf;background-color:#fafafa;"]);
const SProfileOption = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "username__SProfileOption",
  componentId: "sc-1tlxc69-4"
})(["font-size:18px;color:#ed6103;font-weight:bold;"]);
const SIconButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton).withConfig({
  displayName: "username__SIconButton",
  componentId: "sc-1tlxc69-5"
})(["padding:8px;text-decoration:none;font-size:inherit !important;color:#fff;display:flex;align-items:center;flex-direction:column;color:inherit !important;border-radius:0px !important;@media (min-width:425px){width:120px;}"]);
const SProfileFlex = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "username__SProfileFlex",
  componentId: "sc-1tlxc69-6"
})(["width:55%;margin:0 auto;display:flex;justify-content:space-between;cursor:", ";"], ({
  isPointer
}) => isPointer ? 'pointer' : 'not-allowed');
const SProfileInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "username__SProfileInfo",
  componentId: "sc-1tlxc69-7"
})(["width:100%;max-width:432px;margin:0 auto;padding:43px 0;"]);
const SPadding = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "username__SPadding",
  componentId: "sc-1tlxc69-8"
})(["padding-left:3px;padding-right:3px;width:100%;"]);

ProfilePage.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    children: page
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4984:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddCircle");

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIosNew");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("@mui/icons-material/HomeOutlined");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 1307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 8544:
/***/ ((module) => {

module.exports = require("@mui/material/Tabs");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 7123:
/***/ ((module) => {

module.exports = require("react-spinners/RingLoader");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 7896:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ dataURItoBlob)
/* harmony export */ });
function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]); // separate out the mime component

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array

  var ia = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {
    type: mimeString
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,385,422], () => (__webpack_exec__(7713)));
module.exports = __webpack_exports__;

})();