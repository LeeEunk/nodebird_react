webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/dist/redux.legacy-esm.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
//configureStore.js




// import thunkMiddleware from 'redux-thunk';




// 미들웨어는 항상 3단 고차함수임, action이 dispatch되어 로깅되는 함수
// thunk는 항상 action이 함수인 경우 action은 원래 객체인데 thunk에서 함수임 => 지연함수이기에 나중에 실행해줄 수 있음
// redux devtools를 대체할 수 있음 -> console로 찍음
// {type: 'LOG_IN', data: {…}}
var loggerMiddleware = function loggerMiddleware(_ref) {
  var dispatch = _ref.dispatch,
    getState = _ref.getState;
  return function (next) {
    return function (action) {
      console.log(action);
      // if(typeof action === 'function') {
      //     return action(dispatch, getState, extraArgument);
      // }
      return next(action);
    };
  };
};
var configureStore = function configureStore() {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var middlewares = [sagaMiddleware, loggerMiddleware];
  // redux middleware 붙이기
  // 배포용
  var enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, middlewares));
  // 개발용
  // const enhancer = process.env.NODE_ENV === 'production'
  //     ? compose(applyMiddleware([]))
  //     : composeWithDevTools(applyMiddleware([]))

  // state와 reducer 포함하는 것을 store라고 함
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};
var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  // 개발할때 debug를 true로 하면 더 자세하게 내용을 보여주니깐 변경하면 좋음
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsibG9nZ2VyTWlkZGxld2FyZSIsIl9yZWYiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJhcHBseSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbUQ7QUFDVztBQUNDOztBQUUvRDtBQUM4QztBQUVaO0FBQ0Y7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQUMsSUFBQTtFQUFBLElBQU1DLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUVDLFFBQVEsR0FBQUYsSUFBQSxDQUFSRSxRQUFRO0VBQUEsT0FBTyxVQUFDQyxJQUFJO0lBQUEsT0FBSyxVQUFDQyxNQUFNLEVBQUs7TUFDdkVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUM7TUFDbkI7TUFDQTtNQUNBO01BQ0EsT0FBT0QsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztFQUFBO0FBQUE7QUFHRCxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUEsRUFBUztFQUN6QixJQUFNQyxjQUFjLEdBQUdDLDBEQUFvQixDQUFDLENBQUM7RUFDN0MsSUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQWMsRUFBRVQsZ0JBQWdCLENBQUM7RUFDdEQ7RUFDQTtFQUNBLElBQU1ZLFFBQVEsR0FBRyxRQUNYQyxTQUF3QyxHQUN4Q0Msb0ZBQW1CLENBQUNDLHFEQUFlLENBQUFDLEtBQUEsU0FBSUwsV0FBVyxDQUFDLENBQUM7RUFDMUQ7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQSxJQUFNTSxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFPLEVBQUVQLFFBQVEsQ0FBQztFQUM1Q0ssS0FBSyxDQUFDRyxRQUFRLEdBQUdYLGNBQWMsQ0FBQ1ksR0FBRyxDQUFDQyw4Q0FBUSxDQUFDO0VBQzdDLE9BQU9MLEtBQUs7QUFFaEIsQ0FBQztBQUVELElBQU1NLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ2hCLGNBQWMsRUFBRTtFQUMxQztFQUNBaUIsS0FBSztBQUNULENBQUMsQ0FBQztBQUVhRixzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTM1MmMzOTUxZjllOGM0ZmMyZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uZmlndXJlU3RvcmUuanNcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5cclxuLy8gaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbi8vIOuvuOuTpOybqOyWtOuKlCDtla3sg4EgM+uLqCDqs6DssKjtlajsiJjsnoQsIGFjdGlvbuydtCBkaXNwYXRjaOuQmOyWtCDroZzquYXrkJjripQg7ZWo7IiYXHJcbi8vIHRodW5r64qUIO2VreyDgSBhY3Rpb27snbQg7ZWo7IiY7J24IOqyveyasCBhY3Rpb27snYAg7JuQ656YIOqwneyytOyduOuNsCB0aHVua+yXkOyEnCDtlajsiJjsnoQgPT4g7KeA7Jew7ZWo7IiY7J206riw7JeQIOuCmOykkeyXkCDsi6TtlontlbTspIQg7IiYIOyeiOydjFxyXG4vLyByZWR1eCBkZXZ0b29sc+ulvCDrjIDssrTtlaAg7IiYIOyeiOydjCAtPiBjb25zb2xl66GcIOywjeydjFxyXG4vLyB7dHlwZTogJ0xPR19JTicsIGRhdGE6IHvigKZ9fVxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgLy8gaWYodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgLy8gICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcclxuICAgIC8vIH1cclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAgIC8vIHJlZHV4IG1pZGRsZXdhcmUg67aZ7J206riwXHJcbiAgICAvLyDrsLDtj6zsmqlcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgLy8g6rCc67Cc7JqpXHJcbiAgICAvLyBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgIC8vICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKFtdKSlcclxuICAgIC8vICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKFtdKSlcclxuXHJcbiAgICAvLyBzdGF0ZeyZgCByZWR1Y2VyIO2PrO2VqO2VmOuKlCDqsoPsnYQgc3RvcmXrnbzqs6Ag7ZWoXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxuXHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgLy8g6rCc67Cc7ZWg65WMIGRlYnVn66W8IHRydWXroZwg7ZWY66m0IOuNlCDsnpDshLjtlZjqsowg64K07Jqp7J2EIOuztOyXrOyjvOuLiOq5kCDrs4Dqsr3tlZjrqbQg7KKL7J2MXHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiXSwic291cmNlUm9vdCI6IiJ9