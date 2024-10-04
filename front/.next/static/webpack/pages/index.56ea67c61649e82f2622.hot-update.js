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
    // dispatch(loginRequestAction({ email, password }));
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOG_IN_REQUEST"],
      data: {
        email: email,
        password: password
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJfYyIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfYzIiLCJMb2dpbkZvcm0iLCJfcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJfdXNlU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJfdXNlSW5wdXQiLCJ1c2VJbnB1dCIsIl91c2VJbnB1dDIiLCJfc2xpY2VkVG9BcnJheSIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsIl91c2VJbnB1dDMiLCJfdXNlSW5wdXQ0IiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlRWZmZWN0IiwiYWxlcnQiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJkYXRhIiwiX2pzeERFViIsIm9uRmluaXNoIiwiY2hpbGRyZW4iLCJodG1sRm9yIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJJbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIkJ1dHRvbiIsImh0bWxUeXBlIiwibG9hZGluZyIsIkxpbmsiLCJocmVmIiwiX2MzIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1o7QUFDYjtBQUNVO0FBRUM7QUFDZTtBQUNlOztBQUV0RTtBQUFBO0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxD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QTtRQUFBQyxZQUFBO01BQUEsR0FBQUMsS0FBTSxDQUFDO0lBQUE7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQzdDLENBQUM7RUFBQTtJQUFBSixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsR0FBQUMsS0FDUCxDQUFDO0FBRWxCLENBQUM7QUFBQ3BDLEVBQUEsQ0ExRElELFNBQVM7RUFBQSxRQUNNRyx1REFBVyxFQUNTRSx1REFBVyxFQUNqQk0sdURBQVEsRUFDRkEsdURBQVE7QUFBQTtBQUFBdUMsR0FBQSxHQUozQ2xELFNBQVM7QUE0REFBLHdFQUFTLEVBQUM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFBQSxJQUFBTCxFQUFBLEVBQUFJLEdBQUEsRUFBQW1ELEdBQUE7QUFBQUMsWUFBQSxDQUFBeEQsRUFBQTtBQUFBd0QsWUFBQSxDQUFBcEQsR0FBQTtBQUFBb0QsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU2ZWE2N2M2MTY0OWU4MmYyNjIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNULCBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vY3NzIOyggeuTr+ydtCDrrLjrspUg7KCB7JqpIGpz7LKY65+8IOyggeyaqe2VmOyngCDrp5Dqs6BcclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICAvLyBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGxvZ0luRXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQobG9nSW5FcnJvcikgO1xyXG4gICAgfVxyXG59LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICAgIC8vIGNvbXBvbmVudOyXkCBwcm9wc+uhnCDrk6TslrTqsIDripQg7ZWo7IiY64qUIHVzZUNhbGxiYWNr7Jy866GcIOustOyhsOqxtCDstZzsoIHtmZQg7ZW07KSY7JW87ZWoXHJcbiAgICAvLyB1c2VNZW1vIOuKlCDtirnsoJUg6rKw6rO86rCS7J2EIOyerOyCrOyaqSDtlaAg65WMIOyCrOyaqe2VmOuKlCDrsJjrqbQsIHVzZUNhbGxiYWNrIOydgCDtirnsoJUg7ZWo7IiY66W8IOyDiOuhnCDrp4zrk6Tsp4Ag7JWK6rOgIOyerOyCrOyaqe2VmOqzoCDsi7bsnYTrlYwg7IKs7JqpXHJcbiAgICAvLyB1c2VDYWxsYmFja+ydgCDtlajsiJjrpbwg7LqQ7IuxLCB1c2VNZW1v64qUIOqwkuydhCDsupDsi7FcclxuICAgIC8vIHVzZUNhbGxiYWNr7J2AIOy6kOyLseydtOuLiOq5kCDsnbTsoIQg7Lu07Y+s64SM7Yq4656RIOyngOq4iCDsu7Ttj6zrhIztirjsmYAg64+Z7J287ZWY64uk6rOgIO2VqCwg67Cw7Je067aA67aE7J20IOuwlOuAjOyngCDslYrripQg7J207IOBXHJcbiAgICAvLyDrpqzroIzrjZTrp4HtlZjrqbQgcmV0dXJu67aA67aEIOyerOugjOuNlOungeuQmOuCmCwg67CU64CQ67aA67aEKOy1nOygge2ZlOuQmOyngCDslYrripQg67aA67aEKeunjCDri6Tsi5wg6re466a8XHJcbiAgICAvLyB2aXJ0dWFsIERvbeyXkOyEnCDsnbTsoITsnbTrnpEg67mE6rWQ7ZW07IScIOuLrOudvOynhCDrtoDrtoTrp4wg7JWM66Ck7KSMIOq3uOuemOuPhCBpbmxpbmUgc3R5bGUg7IKs7Jqp7J2AIOuQmOuPhOuhnSDslYjtlZjripQg6rKD7J20IOyii+ydjFxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICAvLyDsnKDspojrqZTrqqjripQg66as66CM642U66eB65CY64+EIOqwmeydgCDqsJLsmrgg7Jyg7KeA7ZWY66+A66GcIOydtOugh+qyjCDsoIHsmqntlaAg7IiYIOyeiOydjFxyXG4gICAgLy8gY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7IG1hcmdpblRvcDogMTB9KSwgW10pO1xyXG5cclxuICAgIC8vIGFudGTripQg7J2066+4IG9uRmluaXNo7JeQ7IScIGUucHJldmVudERlZmF1bHQoKeqwgCDsoIHsmqnrkJjslrQg7J6I7Ja07IScIOyTsOuptCDslYjrkKhcclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgIC8vIOuNlOuvuOuNsOydtO2EsFxyXG4gICAgICAgIC8vIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKHsgZW1haWwsIHBhc3N3b3JkIH0pKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiB7IGVtYWlsLCBwYXNzd29yZCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLWVtYWlsJz7snbTrqZTsnbw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItZW1haWxcIiB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSByZXF1aXJlZCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXItcGFzc3dvcmQnPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIHN0eWxl7J2EIOqwneyytOuhnCDsoJXsnZjtlZjrqbQg6rCd7LK064qUIOustOyhsOqxtCDsg4jroZwg7IOd7ISx65Cc6rG466GcIOyduOyLne2VmOq4sOuVjOusuOyXkCDsnbTqsbDrlYzrp6Qg7J6s66CM642U66eB65CoICovfVxyXG4gICAgICAgIDxCdXR0b25XcmFwcGVyIHN0eWxlPXt7IG1hcmdpblRvcCA6IFwiMTBweFwifX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvZ0luTG9hZGluZ30+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+PEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj48L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuLy8gdmFsaWRhdGlvblxyXG4vLyBMb2dpbkZvcm0ucHJvcFR5cGVzID0ge1xyXG4vLyAgICAgc2V0SXNMb2dnZWRJbjpQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4vLyB9XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9