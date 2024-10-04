webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useInput */ "./components/hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.legacy-esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\user\\Downloads\\react-nodebird\\front\\components\\LoginForm.js",
  _templateObject,
  _templateObject2,
  _this = undefined,
  _s = $RefreshSig$();








//css 적듯이 문법 적용 js처럼 적용하지 말고

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding: 10px;\n    margin-top: 10px;\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding: 10px;\n    margin-top: 10px;\n"])));
_c2 = FormWrapper;
var LoginForm = function LoginForm() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
      return state.user;
    }),
    logInLoading = _useSelector.logInLoading,
    logInError = _useSelector.logInError;
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    email = _useInput2[0],
    onChangeEmail = _useInput2[1];
  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
    password = _useInput4[0],
    onChangePassword = _useInput4[1];
  // const [password, setPassword] = useState('');

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  // component에 props로 들어가는 함수는 useCallback으로 무조건 최적화 해줘야함
  // useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용
  // useCallback은 함수를 캐싱, useMemo는 값을 캐싱
  // useCallback은 캐싱이니깐 이전 컴포넌트랑 지금 컴포넌트와 동일하다고 함, 배열부분이 바뀌지 않는 이상
  // 리렌더링하면 return부분 재렌더링되나, 바뀐부분(최적화되지 않는 부분)만 다시 그림
  // virtual Dom에서 이전이랑 비교해서 달라진 부분만 알려줌 그래도 inline style 사용은 되도록 안하는 것이 좋음

  // const onChangePassword = useCallback((e) => {
  //     setPassword(e.target.value);
  // }, [])

  // 유즈메모는 리렌더링되도 같은 값울 유지하므로 이렇게 적용할 수 있음
  // const style = useMemo(() => ({ marginTop: 10}), []);

  // antd는 이미 onFinish에서 e.preventDefault()가 적용되어 있어서 쓰면 안됨
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(email, password);
    // 더미데이터
    // setIsLoggedIn(true);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_8__["loginRequestAction"])({
      email: email,
      password: password
    }));
    // dispatch({
    //     type: LOG_IN_REQUEST,
    //     data: { email, password },
    // });
  }, [email, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(FormWrapper, {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
        htmlFor: "user-email",
        children: "\uC774\uBA54\uC77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        name: "user-email",
        type: "email",
        value: email,
        onChange: onChangeEmail,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
        htmlFor: "user-password",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        name: "user-password",
        value: password,
        type: "password",
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ButtonWrapper, {
      style: {
        marginTop: "10px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: logInLoading,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 37
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 34
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};
_s(LoginForm, "tKkOVmPqh2u0qZseKATViWPnz+M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});
_c3 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
// validation
// LoginForm.propTypes = {
//     setIsLoggedIn:PropTypes.func.isRequired,
// }
var _c, _c2, _c3;
$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJfYyIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfYzIiLCJMb2dpbkZvcm0iLCJfcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJfdXNlU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJfdXNlSW5wdXQiLCJ1c2VJbnB1dCIsIl91c2VJbnB1dDIiLCJfc2xpY2VkVG9BcnJheSIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsIl91c2VJbnB1dDMiLCJfdXNlSW5wdXQ0IiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlRWZmZWN0IiwiYWxlcnQiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJfanN4REVWIiwib25GaW5pc2giLCJjaGlsZHJlbiIsImh0bWxGb3IiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsIklucHV0IiwibmFtZSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIkJ1dHRvbiIsImh0bWxUeXBlIiwibG9hZGluZyIsIkxpbmsiLCJocmVmIiwiX2MzIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1o7QUFDYjtBQUNVO0FBRUM7QUFDZTtBQUNlOztBQUV0RTtBQUFBO0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFHLENBQUFDLGVBQUEsS0FBQUEsZUFBQSxHQUFBQyxnR0FBQSxxREFHL0I7QUFBQ0MsRUFBQSxHQUhJTCxhQUFhO0FBS25CLElBQU1NLFdBQVcsR0FBR0wsaUVBQU0sQ0FBQ00seUNBQUksQ0FBQyxDQUFBQyxnQkFBQSxLQUFBQSxnQkFBQSxHQUFBSixnR0FBQSxxREFHL0I7QUFBQ0ssR0FBQSxHQUhJSCxXQUFXO0FBS2pCLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUNwQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFBQyxZQUFBLEdBQXFDQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQS9EQyxZQUFZLEdBQUFKLFlBQUEsQ0FBWkksWUFBWTtJQUFFQyxVQUFVLEdBQUFMLFlBQUEsQ0FBVkssVUFBVTtFQUNoQyxJQUFBQyxTQUFBLEdBQStCQywrREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLHdGQUFBLENBQUFILFNBQUE7SUFBcENJLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxhQUFhLEdBQUFILFVBQUE7RUFDM0IsSUFBQUksVUFBQSxHQUFxQ0wsK0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU0sVUFBQSxHQUFBSix3RkFBQSxDQUFBRyxVQUFBO0lBQTFDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsZ0JBQWdCLEdBQUFGLFVBQUE7RUFDakM7O0VBRUFHLHVEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdYLFVBQVUsRUFBRTtNQUNYWSxLQUFLLENBQUNaLFVBQVUsQ0FBQztJQUN6QjtFQUNKLENBQUMsRUFBRSxDQUFDQSxVQUFVLENBQUMsQ0FBQzs7RUFFWjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7RUFDQSxJQUFNYSxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNuQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNYLEtBQUssRUFBRUksUUFBUSxDQUFDO0lBQzVCO0lBQ0E7SUFDQWhCLFFBQVEsQ0FBQ3dCLHlFQUFrQixDQUFDO01BQUVaLEtBQUssRUFBTEEsS0FBSztNQUFFSSxRQUFRLEVBQVJBO0lBQVMsQ0FBQyxDQUFDLENBQUM7SUFDakQ7SUFDQTtJQUNBO0lBQ0E7RUFDSixDQUFDLEVBQUUsQ0FBQ0osS0FBSyxFQUFFSSxRQUFRLENBQUMsQ0FBQztFQUV2QixvQkFDRVMsb0VBQUEsQ0FBQy9CLFdBQVc7SUFBQ2dDLFFBQVEsRUFBRU4sWUFBYTtJQUFBTyxRQUFBLGdCQUNoQ0Ysb0VBQUE7TUFBQUUsUUFBQSxnQkFDSUYsb0VBQUE7UUFBT0csT0FBTyxFQUFDLFlBQVk7UUFBQUQsUUFBQTtNQUFBO1FBQUFFLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUFXLENBQUMsZUFDdkNSLG9FQUFBO1FBQUFJLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUFJLENBQUMsZUFDTFIsb0VBQUEsQ0FBQ1MsMENBQUs7UUFBQ0MsSUFBSSxFQUFDLFlBQVk7UUFBQ0MsSUFBSSxFQUFDLE9BQU87UUFBQ0MsS0FBSyxFQUFFekIsS0FBTTtRQUFDMEIsUUFBUSxFQUFFekIsYUFBYztRQUFDMEIsUUFBUTtNQUFBO1FBQUFWLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUFFLENBQUM7SUFBQTtNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDdkYsQ0FBQyxlQUNOUixvRUFBQTtNQUFBRSxRQUFBLGdCQUNBRixvRUFBQTtRQUFPRyxPQUFPLEVBQUMsZUFBZTtRQUFBRCxRQUFBO01BQUE7UUFBQUUsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQVksQ0FBQyxlQUN2Q1Isb0VBQUE7UUFBQUksUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQUksQ0FBQyxlQUNMUixvRUFBQSxDQUFDUywwQ0FBSztRQUFDQyxJQUFJLEVBQUMsZUFBZTtRQUFDRSxLQUFLLEVBQUVyQixRQUFTO1FBQUNvQixJQUFJLEVBQUMsVUFBVTtRQUFDRSxRQUFRLEVBQUVyQixnQkFBaUI7UUFBQ3NCLFFBQVE7TUFBQTtRQUFBVixRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsR0FBQUMsS0FBRSxDQUFDO0lBQUE7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ25HLENBQUMsZUFFTlIsb0VBQUEsQ0FBQ3JDLGFBQWE7TUFBQ29ELEtBQUssRUFBRTtRQUFFQyxTQUFTLEVBQUc7TUFBTSxDQUFFO01BQUFkLFFBQUEsZ0JBQ3hDRixvRUFBQSxDQUFDaUIsMkNBQU07UUFBQ04sSUFBSSxFQUFDLFNBQVM7UUFBQ08sUUFBUSxFQUFDLFFBQVE7UUFBQ0MsT0FBTyxFQUFFdEMsWUFBYTtRQUFBcUIsUUFBQTtNQUFBO1FBQUFFLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUFZLENBQUMsZUFDNUVSLG9FQUFBLENBQUNvQixnREFBSTtRQUFDQyxJQUFJLEVBQUMsU0FBUztRQUFBbkIsUUFBQSxlQUFDRixvRUFBQTtVQUFBRSxRQUFBLGVBQUdGLG9FQUFBLENBQUNpQiwyQ0FBTTtZQUFBZixRQUFBO1VBQUE7WUFBQUUsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLEdBQUFDLEtBQWE7UUFBQztVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsR0FBQUMsS0FBRztNQUFDO1FBQUFKLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUFNLENBQUM7SUFBQTtNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDN0MsQ0FBQztFQUFBO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNQLENBQUM7QUFFbEIsQ0FBQztBQUFDbEMsRUFBQSxDQTFESUQsU0FBUztFQUFBLFFBQ01HLHVEQUFXLEVBQ1NFLHVEQUFXLEVBQ2pCTSx1REFBUSxFQUNGQSx1REFBUTtBQUFBO0FBQUFzQyxHQUFBLEdBSjNDakQsU0FBUztBQTREQUEsd0VBQVMsRUFBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUFBLElBQUFMLEVBQUEsRUFBQUksR0FBQSxFQUFBa0QsR0FBQTtBQUFBQyxZQUFBLENBQUF2RCxFQUFBO0FBQUF1RCxZQUFBLENBQUFuRCxHQUFBO0FBQUFtRCxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmEyMzAzOGI4NTU1OTE1NmJhMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9HX0lOX1JFUVVFU1QsIGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuLy9jc3Mg7KCB65Ov7J20IOusuOuylSDsoIHsmqkganPsspjrn7wg7KCB7Jqp7ZWY7KeAIOunkOqzoFxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgeyBsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIC8vIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobG9nSW5FcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChsb2dJbkVycm9yKSA7XHJcbiAgICB9XHJcbn0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gICAgLy8gY29tcG9uZW507JeQIHByb3Bz66GcIOuTpOyWtOqwgOuKlCDtlajsiJjripQgdXNlQ2FsbGJhY2vsnLzroZwg66y07KGw6rG0IOy1nOygge2ZlCDtlbTspJjslbztlahcclxuICAgIC8vIHVzZU1lbW8g64qUIO2KueyglSDqsrDqs7zqsJLsnYQg7J6s7IKs7JqpIO2VoCDrlYwg7IKs7Jqp7ZWY64qUIOuwmOuptCwgdXNlQ2FsbGJhY2sg7J2AIO2KueyglSDtlajsiJjrpbwg7IOI66GcIOunjOuTpOyngCDslYrqs6Ag7J6s7IKs7Jqp7ZWY6rOgIOyLtuydhOuVjCDsgqzsmqlcclxuICAgIC8vIHVzZUNhbGxiYWNr7J2AIO2VqOyImOulvCDsupDsi7EsIHVzZU1lbW/ripQg6rCS7J2EIOy6kOyLsVxyXG4gICAgLy8gdXNlQ2FsbGJhY2vsnYAg7LqQ7Iux7J2064uI6rmQIOydtOyghCDsu7Ttj6zrhIztirjrnpEg7KeA6riIIOy7tO2PrOuEjO2KuOyZgCDrj5nsnbztlZjri6Tqs6Ag7ZWoLCDrsLDsl7TrtoDrtoTsnbQg67CU64CM7KeAIOyViuuKlCDsnbTsg4FcclxuICAgIC8vIOumrOugjOuNlOunge2VmOuptCByZXR1cm7rtoDrtoQg7J6s66CM642U66eB65CY64KYLCDrsJTrgJDrtoDrtoQo7LWc7KCB7ZmU65CY7KeAIOyViuuKlCDrtoDrtoQp66eMIOuLpOyLnCDqt7jrprxcclxuICAgIC8vIHZpcnR1YWwgRG9t7JeQ7IScIOydtOyghOydtOuekSDruYTqtZDtlbTshJwg64us65287KeEIOu2gOu2hOunjCDslYzroKTspIwg6re4656Y64+EIGlubGluZSBzdHlsZSDsgqzsmqnsnYAg65CY64+E66GdIOyViO2VmOuKlCDqsoPsnbQg7KKL7J2MXHJcbiAgICBcclxuICAgIC8vIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgLy8gICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIH0sIFtdKVxyXG5cclxuICAgIC8vIOycoOymiOuplOuqqOuKlCDrpqzroIzrjZTrp4HrkJjrj4Qg6rCZ7J2AIOqwkuyauCDsnKDsp4DtlZjrr4DroZwg7J2066CH6rKMIOyggeyaqe2VoCDsiJgg7J6I7J2MXHJcbiAgICAvLyBjb25zdCBzdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHsgbWFyZ2luVG9wOiAxMH0pLCBbXSk7XHJcblxyXG4gICAgLy8gYW50ZOuKlCDsnbTrr7ggb25GaW5pc2jsl5DshJwgZS5wcmV2ZW50RGVmYXVsdCgp6rCAIOyggeyaqeuQmOyWtCDsnojslrTshJwg7JOw66m0IOyViOuQqFxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgLy8g642U66+4642w7J207YSwXHJcbiAgICAgICAgLy8gc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpXHJcbiAgICAgICAgLy8gZGlzcGF0Y2goe1xyXG4gICAgICAgIC8vICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICAvLyAgICAgZGF0YTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcclxuICAgICAgICAvLyB9KTtcclxuICAgIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1lbWFpbCc+7J2066mU7J28PC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gcmVxdWlyZWQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLXBhc3N3b3JkJz7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSByZXF1aXJlZCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBzdHlsZeydhCDqsJ3ssrTroZwg7KCV7J2Y7ZWY66m0IOqwneyytOuKlCDrrLTsobDqsbQg7IOI66GcIOyDneyEseuQnOqxuOuhnCDsnbjsi53tlZjquLDrlYzrrLjsl5Ag7J206rGw65WM66ekIOyerOugjOuNlOungeuQqCAqL31cclxuICAgICAgICA8QnV0dG9uV3JhcHBlciBzdHlsZT17eyBtYXJnaW5Ub3AgOiBcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PuuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPjxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbi8vIHZhbGlkYXRpb25cclxuLy8gTG9naW5Gb3JtLnByb3BUeXBlcyA9IHtcclxuLy8gICAgIHNldElzTG9nZ2VkSW46UHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==