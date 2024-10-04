webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(loadMyInfo),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(follow),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(unfollow),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadMyInfo),
  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnfollow),
  _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),
  _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
  _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
  _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);



function loadMyInfoAPI() {
  //get, delete는 data가 없음
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/user');
}
function loadMyInfo(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadMyInfo$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
      case 3:
        result = _context.sent;
        _context.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
          data: result.data
        });
      case 6:
        _context.next = 13;
        break;
      case 8:
        _context.prev = 8;
        _context.t0 = _context["catch"](0);
        console.error(_context.t0);
        _context.next = 13;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
          error: _context.t0.response.data
        });
      case 13:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[0, 8]]);
}
function logInAPI(data) {
  //generate X
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/user/login', data);
}

// saga 명령어를 쓰는 이유 -> 테스트하기 좋음
function logIn(action) {
  var result;
  return _regeneratorRuntime().wrap(function logIn$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.prev = 0;
        _context2.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
      case 3:
        result = _context2.sent;
        // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
        // yield가 await과 비슷 blocking
        // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

        console.log("saga login");
        // yield delay(1000);
        _context2.next = 7;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
          data: result.data
        });
      case 7:
        _context2.next = 14;
        break;
      case 9:
        _context2.prev = 9;
        _context2.t0 = _context2["catch"](0);
        console.error(_context2.t0);
        _context2.next = 14;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
          error: _context2.t0.response.data
        });
      case 14:
      case "end":
        return _context2.stop();
    }
  }, _marked2, null, [[0, 9]]);
}
function logOutAPI() {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/user/logout');
}
function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.prev = 0;
        _context3.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
      case 3:
        _context3.next = 5;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
        });
      case 5:
        _context3.next = 11;
        break;
      case 7:
        _context3.prev = 7;
        _context3.t0 = _context3["catch"](0);
        _context3.next = 11;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
          error: _context3.t0.response.data
        });
      case 11:
      case "end":
        return _context3.stop();
    }
  }, _marked3, null, [[0, 7]]);
}
function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/user', data);
}
function signUp(action) {
  var result;
  return _regeneratorRuntime().wrap(function signUp$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.prev = 0;
        _context4.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
      case 3:
        result = _context4.sent;
        console.log(result);
        // yield delay(1000);
        _context4.next = 7;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
        });
      case 7:
        _context4.next = 14;
        break;
      case 9:
        _context4.prev = 9;
        _context4.t0 = _context4["catch"](0);
        console.err(_context4.t0);
        _context4.next = 14;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
          error: _context4.t0.response.data
        });
      case 14:
      case "end":
        return _context4.stop();
    }
  }, _marked4, null, [[0, 9]]);
}
function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/follow');
}
function follow(action) {
  return _regeneratorRuntime().wrap(function follow$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        _context5.prev = 0;
        _context5.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
      case 3:
        _context5.next = 5;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
          data: action.data
        });
      case 5:
        _context5.next = 12;
        break;
      case 7:
        _context5.prev = 7;
        _context5.t0 = _context5["catch"](0);
        console.err(_context5.t0);
        _context5.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
          error: _context5.t0.response.data
        });
      case 12:
      case "end":
        return _context5.stop();
    }
  }, _marked5, null, [[0, 7]]);
}
function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/unfollow');
}
function unfollow(action) {
  return _regeneratorRuntime().wrap(function unfollow$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        _context6.prev = 0;
        _context6.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
      case 3:
        _context6.next = 5;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
          data: action.data
        });
      case 5:
        _context6.next = 12;
        break;
      case 7:
        _context6.prev = 7;
        _context6.t0 = _context6["catch"](0);
        console.err(_context6.t0);
        _context6.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
          error: _context6.t0.response.data
        });
      case 12:
      case "end":
        return _context6.stop();
    }
  }, _marked6, null, [[0, 7]]);
}

//이벤트 리스너들 잔뜩 만들어줌
// yield 특징 일회용임 -> 한번만 사용할 수 있음 -> 그래서 while 반복문을 활용함 -> 무한루프로 안빠짐 한번만 실행하기 때문
// while 대신에 take는 동기적으로 동작, takeEvery는 비동기적으로 동작
function watchLoadMyInfo() {
  return _regeneratorRuntime().wrap(function watchLoadMyInfo$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        _context7.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
      case 2:
      case "end":
        return _context7.stop();
    }
  }, _marked7);
}
function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context8) {
    while (1) switch (_context8.prev = _context8.next) {
      case 0:
        _context8.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
      case 2:
      case "end":
        return _context8.stop();
    }
  }, _marked8);
}
function watchUnfollow() {
  return _regeneratorRuntime().wrap(function watchUnfollow$(_context9) {
    while (1) switch (_context9.prev = _context9.next) {
      case 0:
        _context9.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
      case 2:
      case "end":
        return _context9.stop();
    }
  }, _marked9);
}
function watchLogIn() {
  return _regeneratorRuntime().wrap(function watchLogIn$(_context10) {
    while (1) switch (_context10.prev = _context10.next) {
      case 0:
        _context10.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
      case 2:
      case "end":
        return _context10.stop();
    }
  }, _marked10);
}
function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context11) {
    while (1) switch (_context11.prev = _context11.next) {
      case 0:
        _context11.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
      case 2:
      case "end":
        return _context11.stop();
    }
  }, _marked11);
}
function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context12) {
    while (1) switch (_context12.prev = _context12.next) {
      case 0:
        _context12.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
      case 2:
      case "end":
        return _context12.stop();
    }
  }, _marked12);
}
function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context13) {
    while (1) switch (_context13.prev = _context13.next) {
      case 0:
        _context13.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
      case 2:
      case "end":
        return _context13.stop();
    }
  }, _marked13);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJfbWFya2VkIiwibG9hZE15SW5mbyIsIl9tYXJrZWQyIiwibG9nSW4iLCJfbWFya2VkMyIsImxvZ091dCIsIl9tYXJrZWQ0Iiwic2lnblVwIiwiX21hcmtlZDUiLCJmb2xsb3ciLCJfbWFya2VkNiIsInVuZm9sbG93IiwiX21hcmtlZDciLCJ3YXRjaExvYWRNeUluZm8iLCJfbWFya2VkOCIsIndhdGNoRm9sbG93IiwiX21hcmtlZDkiLCJ3YXRjaFVuZm9sbG93IiwiX21hcmtlZDEwIiwid2F0Y2hMb2dJbiIsIl9tYXJrZWQxMSIsIndhdGNoTG9nT3V0IiwiX21hcmtlZDEyIiwid2F0Y2hTaWduVXAiLCJfbWFya2VkMTMiLCJ1c2VyU2FnYSIsImxvYWRNeUluZm9BUEkiLCJheGlvcyIsImdldCIsImFjdGlvbiIsInJlc3VsdCIsImxvYWRNeUluZm8kIiwiX2NvbnRleHQiLCJkYXRhIiwicHV0IiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJ0MCIsImNvbnNvbGUiLCJlcnJvciIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwicmVzcG9uc2UiLCJsb2dJbkFQSSIsInBvc3QiLCJsb2dJbiQiLCJfY29udGV4dDIiLCJsb2ciLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwibG9nT3V0QVBJIiwibG9nT3V0JCIsIl9jb250ZXh0MyIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsInNpZ25VcCQiLCJfY29udGV4dDQiLCJTSUdOX1VQX1NVQ0NFU1MiLCJlcnIiLCJTSUdOX1VQX0ZBSUxVUkUiLCJmb2xsb3dBUEkiLCJmb2xsb3ckIiwiX2NvbnRleHQ1IiwiZGVsYXkiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyQiLCJfY29udGV4dDYiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIndhdGNoTG9hZE15SW5mbyQiLCJfY29udGV4dDciLCJ0YWtlTGF0ZXN0IiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJ3YXRjaEZvbGxvdyQiLCJfY29udGV4dDgiLCJGT0xMT1dfUkVRVUVTVCIsIndhdGNoVW5mb2xsb3ckIiwiX2NvbnRleHQ5IiwidGFrZUV2ZXJ5IiwiVU5GT0xMT1dfUkVRVUVTVCIsIndhdGNoTG9nSW4kIiwiX2NvbnRleHQxMCIsIkxPR19JTl9SRVFVRVNUIiwid2F0Y2hMb2dPdXQkIiwiX2NvbnRleHQxMSIsIkxPR19PVVRfUkVRVUVTVCIsIndhdGNoU2lnblVwJCIsIl9jb250ZXh0MTIiLCJTSUdOX1VQX1JFUVVFU1QiLCJ1c2VyU2FnYSQiLCJfY29udGV4dDEzIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4s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LE9BQUFnRixVQUFBLENBQUE1RixJQUFBO0lBQUE7RUFBQSxHQUFBMkIsU0FBQTtBQUFBO0FBRzVDLFNBQVVHLFdBQVdBLENBQUE7RUFBQSxPQUFBN0gsbUJBQUEsR0FBQXVCLElBQUEsVUFBQXNLLGFBQUFDLFVBQUE7SUFBQSxrQkFBQUEsVUFBQSxDQUFBbEcsSUFBQSxHQUFBa0csVUFBQSxDQUFBN0gsSUFBQTtNQUFBO1FBQUE2SCxVQUFBLENBQUE3SCxJQUFBO1FBQ2pCLE9BQU02RyxxRUFBVSxDQUFDaUIsOERBQWUsRUFBRWxGLE1BQU0sQ0FBQztNQUFBO01BQUE7UUFBQSxPQUFBaUYsVUFBQSxDQUFBL0YsSUFBQTtJQUFBO0VBQUEsR0FBQTZCLFNBQUE7QUFBQTtBQUc5QixTQUFVRyxRQUFRQSxDQUFBO0VBQUEsT0FBQS9ILG1CQUFBLEdBQUF1QixJQUFBLFVBQUF5SyxVQUFBQyxVQUFBO0lBQUEsa0JBQUFBLFVBQUEsQ0FBQXJHLElBQUEsR0FBQXFHLFVBQUEsQ0FBQWhJLElBQUE7TUFBQTtRQUFBZ0ksVUFBQSxDQUFBaEksSUFBQTtRQUM3QixPQUFNaUksOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDaEYsZUFBZSxDQUFDLEVBQ3JCZ0YsK0RBQUksQ0FBQzlFLFdBQVcsQ0FBQyxFQUNqQjhFLCtEQUFJLENBQUM1RSxhQUFhLENBQUMsRUFDbkI0RSwrREFBSSxDQUFDMUUsVUFBVSxDQUFDLEVBQ2hCMEUsK0RBQUksQ0FBQ3hFLFdBQVcsQ0FBQyxFQUNqQndFLCtEQUFJLENBQUN0RSxXQUFXLENBQUMsQ0FDcEIsQ0FBQztNQUFBO01BQUE7UUFBQSxPQUFBb0UsVUFBQSxDQUFBbEcsSUFBQTtJQUFBO0VBQUEsR0FBQStCLFNBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM3OGQwMjM4MDUzNTQ4MjVkMWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsIFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MgXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7IC8vZ2V0LCBkZWxldGXripQgZGF0YeqwgCDsl4bsnYxcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHsgLy9nZW5lcmF0ZSBYXHJcbiAgICAvLyDshJzrsoTsl5Ag7JqU7LKt7J2EIOuztOuCtOuKlCDrtoDrtoRcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG4vLyBzYWdhIOuqheugueyWtOulvCDsk7DripQg7J207JygIC0+IO2FjOyKpO2KuO2VmOq4sCDsoovsnYxcclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHsvLyDtlajsiJgsIOunpOqwnOuzgOyImOuTpFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKSAvLyDsmpTssq3snZgg6rKw6rO86rCS7J2EIOuwm+ydjCBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgg7Zi47Lac7J206rOgIGNhbGzsnYAg64+Z6riw7ZWo7IiYIO2YuOy2nOyehCBcclxuICAgICAgICAvLyB5aWVsZOqwgCBhd2FpdOqzvCDruYTsircgYmxvY2tpbmdcclxuICAgICAgICAvLyDrj5nquLDsnbTquLDrlYzrrLjsl5AgLnRoZW4g7LKY65+8IOqysOqzvOqwkuydhCDrsJvsnYQg65WM6rmM7KeAIOq4sOuLpOugpOykjCwg64uk7J2MIOuplOyGjOuTnCDsi6TtlonslYjtlahcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYWdhIGxvZ2luXCIpO1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7IC8vZ2VuZXJhdGUgWFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSkgLy8g7JqU7LKt7J2YIOqysOqzvOqwkuydhCDrsJvsnYwgZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nOydtOqzoCBjYWxs7J2AIOuPmeq4sO2VqOyImCDtmLjstpzsnoQgXHJcbiAgICAgICAgLy8geWllbGTqsIAgYXdhaXTqs7wg67mE7Iq3IGJsb2NraW5nXHJcbiAgICAgICAgLy8g64+Z6riw7J206riw65WM66y47JeQIC50aGVuIOyymOufvCDqsrDqs7zqsJLsnYQg67Cb7J2EIOuVjOq5jOyngCDquLDri6TroKTspIwsIOuLpOydjCDrqZTshozrk5wg7Iuk7ZaJ7JWI7ZWoXHJcblxyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnIoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZm9sbG93JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSlcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnIoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJKVxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL+ydtOuypO2KuCDrpqzsiqTrhIjrk6Qg7J6U65ypIOunjOuTpOyWtOykjFxyXG4vLyB5aWVsZCDtirnsp5Ug7J287ZqM7Jqp7J6EIC0+IO2VnOuyiOunjCDsgqzsmqntlaAg7IiYIOyeiOydjCAtPiDqt7jrnpjshJwgd2hpbGUg67CY67O166y47J2EIO2ZnOyaqe2VqCAtPiDrrLTtlZzro6jtlITroZwg7JWI67mg7KeQIO2VnOuyiOunjCDsi6TtlontlZjquLAg65WM66y4XHJcbi8vIHdoaWxlIOuMgOyLoOyXkCB0YWtl64qUIOuPmeq4sOyggeycvOuhnCDrj5nsnpEsIHRha2VFdmVyeeuKlCDruYTrj5nquLDsoIHsnLzroZwg64+Z7J6RXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgLy8gdGhyb3R0bGUgLT4gMuy0iCDslYjsl5Ag7Jes65+s67KI7ZW064+EIOustOydkeuLtSwgMuy0iCDslYjsl5Ag7ZWc67KI66eMIOyggeyaqSBcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTsgLy90YWtlOiBMT0dfSU7slaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumvFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=