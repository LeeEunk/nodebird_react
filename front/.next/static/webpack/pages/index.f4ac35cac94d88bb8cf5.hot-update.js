webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.legacy-esm.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\user\\Downloads\\react-nodebird\\front\\pages\\index.js",
  _this = undefined,
  _s = $RefreshSig$();









var Home = function Home() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me;
  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
      return state.post;
    }),
    mainPosts = _useSelector2.mainPosts,
    hasMorePosts = _useSelector2.hasMorePosts,
    loadPostsLoading = _useSelector2.loadPostsLoading;
  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__["useInView"])(),
    _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
    ref = _useInView2[0],
    inView = _useInView2[1];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_MY_INFO_REQUEST"]
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (inView && hasMorePosts && !loadPostsLoading) {
      var _mainPosts;
      var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"],
        lastId: lastId
      });
    }
  }, [inView, hasMorePosts, loadPostsLoading, mainPosts]);

  // useEffect(() => {
  //     function onScroll() {
  //         // scrollY: 얼마나 내렸는지
  //         // clientHeight: 화면 보이는 길이
  //         // scrollHeight: 총길이
  //         console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
  //         // 다내리면 새로운거 로딩해라
  //         if( window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight ) {
  //            if(hasMorePosts) {
  //                 dispatch({
  //                 type: LOAD_POSTS_REQUEST,
  //             });
  //         }
  //     }
  //     }
  //     window.addEventListener('scroll', onScroll);
  //     return () => {
  //         window.removeEventListener('scroll', onScroll); // 사용하고 메모리 관리를 위해 반드시 해지해야함
  //     };
  // },[hasMorePosts]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 20
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 38
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      ref: hasMorePosts && !loadPostsLoading ? ref : undefined,
      style: {
        height: 10
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, _this);
};
_s(Home, "LFSOx83d1DpjXrTqxWdZTROuW3A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__["useInView"]];
});
_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);
var _c;
$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CAHNGE_NICKANME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAHNGE_NICKANME_SUCCESS", function() { return CAHNGE_NICKANME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.legacy-esm.js");

var initialState = {
  followLoading: false,
  // 팔로우 시도중 -> true면 로딩창 띄우기
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중 -> true면 로딩창 띄우기
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중 -> true면 로딩창 띄우기
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  //로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  //회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNickanmeLoading: false,
  //닉네임 변경 시도중
  changeNickanmeDone: false,
  changeNickanmeError: null,
  me: null,
  signUpData: {},
  loginData: {}
};

// 변수명 SYNTAX 에러를 막기 위해 따로 빼줌
// reducer에서는 상태를 바꾸고 싶다면 액션을 변경해주면 됨
var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CAHNGE_NICKANME_REQUEST';
var CAHNGE_NICKANME_SUCCESS = 'CAHNGE_NICKANME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

// const dummyUser = (data) => ({
//     ...data,
//     nickname : 'eunkk',
//     id: 1,
//     Posts: [{id: 1}],
//     Followings: [{nickname: 'eunkk'}, {nickname: 'suzi'}, {nickname: 'nini'},],
//     Followers: [{nickname: 'eunkk'}, {nickname: 'suzi'}, {nickname: 'nini'},],
// })

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(state, function (draft) {
    // 화살표 함수 return 생략 원래는 return produce임
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;
      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      case UNFOLLOW_REQUEST:
        console.log('reducer login');
        // 다음 스테이트로 값이 변경, initial state와는 다른 객체가 생김
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id === action.data;
        });
        break;
      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;
      case LOG_IN_REQUEST:
        console.log('reducer login');
        // 다음 스테이트로 값이 변경, initial state와는 다른 객체가 생김
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case CAHNGE_NICKANME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        // me: {
        //     ...state.me,
        //     Posts: [{
        //         id:action.data,
        //     }, ...state.me.Posts],
        // }
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        // me: {
        //     ...state.me,
        //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
        // }
        break;
      default:
        break;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiSG9tZSIsIl9zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIl91c2VTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJfdXNlU2VsZWN0b3IyIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJfdXNlSW5WaWV3IiwidXNlSW5WaWV3IiwiX3VzZUluVmlldzIiLCJfc2xpY2VkVG9BcnJheSIsInJlZiIsImluVmlldyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIl9tYWluUG9zdHMiLCJsYXN0SWQiLCJsZW5ndGgiLCJpZCIsIl9qc3hERVYiLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsIlBvc3RGb3JtIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJtYXAiLCJQb3N0Q2FyZCIsInVuZGVmaW5lZCIsInN0eWxlIiwiaGVpZ2h0IiwiX2MiLCIkUmVmcmVzaFJlZyQiLCJpbml0aWFsU3RhdGUiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2thbm1lTG9hZGluZyIsImNoYW5nZU5pY2thbm1lRG9uZSIsImNoYW5nZU5pY2thbm1lRXJyb3IiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0FITkdFX05JQ0tBTk1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJhcmd1bWVudHMiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJGb2xsb3dpbmdzIiwicHVzaCIsIlVzZXJJZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsInYiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiUG9zdHMiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTztBQUNPO0FBQ1Q7QUFDQTtBQUNRO0FBQ0M7QUFDQztBQUFBO0FBRXhELElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUNmLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQUFDLFlBQUEs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QUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDeEI7TUFFSixLQUFLRixpQkFBaUI7UUFDbEJRLEtBQUssQ0FBQ3RGLEVBQUUsQ0FBQ2tHLEtBQUssR0FBR1osS0FBSyxDQUFDdEYsRUFBRSxDQUFDa0csS0FBSyxDQUFDTCxNQUFNLENBQUMsVUFBQ0MsQ0FBQztVQUFBLE9BQUtBLENBQUMsQ0FBQzNFLEVBQUUsS0FBS2lFLE1BQU0sQ0FBQ0osSUFBSTtRQUFBLEVBQUM7UUFDM0M7UUFDQTtRQUNBO1FBQ0E7UUFDeEI7TUFDSjtRQUNJO0lBQ1I7RUFDSixDQUFDLENBQUM7QUFBQTtBQUVTRSxzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY0YWMzNWNhYzk0ZDg4YmI4Y2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGluVmlldyAmJiBoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGxhc3RJZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2luVmlldywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nLCBtYWluUG9zdHNdKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIHNjcm9sbFk6IOyWvOuniOuCmCDrgrTroLjripTsp4BcclxuICAgIC8vICAgICAgICAgLy8gY2xpZW50SGVpZ2h0OiDtmZTrqbQg67O07J2064qUIOq4uOydtFxyXG4gICAgLy8gICAgICAgICAvLyBzY3JvbGxIZWlnaHQ6IOy0neq4uOydtFxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCk7XHJcbiAgICAvLyAgICAgICAgIC8vIOuLpOuCtOumrOuptCDsg4jroZzsmrTqsbAg66Gc65Sp7ZW06528XHJcbiAgICAvLyAgICAgICAgIGlmKCB3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgKSB7XHJcbiAgICAvLyAgICAgICAgICAgIGlmKGhhc01vcmVQb3N0cykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpOyAvLyDsgqzsmqntlZjqs6Ag66mU66qo66asIOq0gOumrOulvCDsnITtlbQg67CY65Oc7IucIO2VtOyngO2VtOyVvO2VqFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyB9LFtoYXNNb3JlUG9zdHNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIHsvKiBQb3N0Rm9ybeydgCDroZzqt7jsnbjtlZwg7IKs656M65Ok7JeQ6rKM66eMIOuztOyehCAqL31cclxuICAgICAgICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAgey8qIOuwmOuzteusuOydtCDrsJTrgIzsp4Ag7JWK7Jy866m0IGtleeulvCBpbmRleOuhnCDsjajrj4Qg65CY64KYIOuwlOuAlCDqsr3smrAsIOq3uOufrOuptCDslYjrkKggLT4g6rOg7JygIGlk66GcIOyngOyglSAqL31cclxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KSB9XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcgPyByZWY6IHVuZGVmaW5lZH0gc3R5bGU9e3sgaGVpZ2h0OiAxMH19IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQge3Byb2R1Y2V9IGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkSAtPiB0cnVl66m0IOuhnOuUqeywvSDrnYTsmrDquLBcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRIC0+IHRydWXrqbQg66Gc65Sp7LC9IOudhOyasOq4sFxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRIC0+IHRydWXrqbQg66Gc65Sp7LC9IOudhOyasOq4sFxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8v7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgIGNoYW5nZU5pY2thbm1lTG9hZGluZzogZmFsc2UsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2thbm1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrYW5tZUVycm9yOiBudWxsLFxyXG4gICAgbWUgOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LCAgICBcclxufVxyXG5cclxuLy8g67OA7IiY66qFIFNZTlRBWCDsl5Drn6zrpbwg66eJ6riwIOychO2VtCDrlLDroZwg67m87KSMXHJcbi8vIHJlZHVjZXLsl5DshJzripQg7IOB7YOc66W8IOuwlOq+uOqzoCDsi7bri6TrqbQg7JWh7IWY7J2EIOuzgOqyve2VtOyjvOuptCDrkKhcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDQUhOR0VfTklDS0FOTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDQUhOR0VfTklDS0FOTUVfU1VDQ0VTUyA9ICdDQUhOR0VfTklDS0FOTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG4vLyBjb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIC4uLmRhdGEsXHJcbi8vICAgICBuaWNrbmFtZSA6ICdldW5raycsXHJcbi8vICAgICBpZDogMSxcclxuLy8gICAgIFBvc3RzOiBbe2lkOiAxfV0sXHJcbi8vICAgICBGb2xsb3dpbmdzOiBbe25pY2tuYW1lOiAnZXVua2snfSwge25pY2tuYW1lOiAnc3V6aSd9LCB7bmlja25hbWU6ICduaW5pJ30sXSxcclxuLy8gICAgIEZvbGxvd2VyczogW3tuaWNrbmFtZTogJ2V1bmtrJ30sIHtuaWNrbmFtZTogJ3N1emknfSwge25pY2tuYW1lOiAnbmluaSd9LF0sXHJcbi8vIH0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHsgLy8g7ZmU7IK07ZGcIO2VqOyImCByZXR1cm4g7IOd6561IOybkOuemOuKlCByZXR1cm4gcHJvZHVjZeyehFxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZT0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAvLyDri6TsnYwg7Iqk7YWM7J207Yq466GcIOqwkuydtCDrs4Dqsr0sIGluaXRpYWwgc3RhdGXsmYDripQg64uk66W4IOqwneyytOqwgCDsg53quYBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmU9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIC8vIOuLpOydjCDsiqTthYzsnbTtirjroZwg6rCS7J20IOuzgOqyvSwgaW5pdGlhbCBzdGF0ZeyZgOuKlCDri6Trpbgg6rCd7LK06rCAIOyDneq5gFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZT0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1MgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENBSE5HRV9OSUNLQU5NRV9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBQb3N0czogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWQ6YWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9