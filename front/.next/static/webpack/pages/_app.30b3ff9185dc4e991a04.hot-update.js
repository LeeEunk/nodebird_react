webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(loadPosts),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(addPost),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPosts),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),
  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddComment),
  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);





function loadPostsAPI(data) {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/post/".concat(data));
}
function loadPosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadPosts$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
      case 3:
        result = _context.sent;
        _context.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
          data: result.data
        });
      case 6:
        _context.next = 12;
        break;
      case 8:
        _context.prev = 8;
        _context.t0 = _context["catch"](0);
        _context.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
          data: _context.t0.response.data
        });
      case 12:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[0, 8]]);
}
function addPostAPI(data) {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/post', {
    content: data
  });
}
function addPost(action) {
  var result, id;
  return _regeneratorRuntime().wrap(function addPost$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.prev = 0;
        _context2.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
      case 3:
        result = _context2.sent;
        // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
        // yield가 await과 비슷 blocking
        // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함
        // yield delay(1000);
        id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
        _context2.next = 7;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
          data: result.data
        });
      case 7:
        _context2.next = 9;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
          data: result.data.id
        });
      case 9:
        _context2.next = 15;
        break;
      case 11:
        _context2.prev = 11;
        _context2.t0 = _context2["catch"](0);
        _context2.next = 15;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
          data: _context2.t0.response.data
        });
      case 15:
      case "end":
        return _context2.stop();
    }
  }, _marked2, null, [[0, 11]]);
}
function removePostAPI(data) {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/api/post', data);
}
function removePost(action) {
  var id;
  return _regeneratorRuntime().wrap(function removePost$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.prev = 0;
        _context3.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
      case 3:
        id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
        _context3.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
          data: action.data
        });
      case 6:
        _context3.next = 8;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
          data: action.data
        });
      case 8:
        _context3.next = 15;
        break;
      case 10:
        _context3.prev = 10;
        _context3.t0 = _context3["catch"](0);
        console.error(_context3.t0);
        _context3.next = 15;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
          data: _context3.t0.response.data
        });
      case 15:
      case "end":
        return _context3.stop();
    }
  }, _marked3, null, [[0, 10]]);
}
function addCommentAPI(data) {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/post/".concat(data.postId, "/comment"), data); // POST /post/1/comment
}
function addComment(action) {
  var result;
  return _regeneratorRuntime().wrap(function addComment$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.prev = 0;
        _context4.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
      case 3:
        result = _context4.sent;
        _context4.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 action을 dispatch
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
          data: result.data
        });
      case 6:
        _context4.next = 12;
        break;
      case 8:
        _context4.prev = 8;
        _context4.t0 = _context4["catch"](0);
        _context4.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
          error: _context4.t0.response.data
        });
      case 12:
      case "end":
        return _context4.stop();
    }
  }, _marked4, null, [[0, 8]]);
}

// takeLatest는 클릭 실수로 2번 했을 때 혹은 100번을 눌러도 마지막꺼만 실행함 
//-> 동시에 로딩된거만 취소됨(단, 프론터서버에서만 적용, 그래서 백엔드에서 2번 저장되지 않았는지 체크 필요)
// 요청은 2번간거고 응답만 마지막꺼 한개로 받음, 요청은 취소가 안됨
// 만약 첫번째꺼만 하고 싶으면 takeLeading도 있음
function watchLoadPosts() {
  return _regeneratorRuntime().wrap(function watchLoadPosts$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        _context5.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
      case 2:
      case "end":
        return _context5.stop();
    }
  }, _marked5);
}
function watchAddPost() {
  return _regeneratorRuntime().wrap(function watchAddPost$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        _context6.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
      case 2:
      case "end":
        return _context6.stop();
    }
  }, _marked6);
}
function watchRemovePost() {
  return _regeneratorRuntime().wrap(function watchRemovePost$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        _context7.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
      case 2:
      case "end":
        return _context7.stop();
    }
  }, _marked7);
}
function watchAddComment() {
  return _regeneratorRuntime().wrap(function watchAddComment$(_context8) {
    while (1) switch (_context8.prev = _context8.next) {
      case 0:
        _context8.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
      case 2:
      case "end":
        return _context8.stop();
    }
  }, _marked8);
}
function postSaga() {
  return _regeneratorRuntime().wrap(function postSaga$(_context9) {
    while (1) switch (_context9.prev = _context9.next) {
      case 0:
        _context9.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
      case 2:
      case "end":
        return _context9.stop();
    }
  }, _marked9);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJfbWFya2VkIiwibG9hZFBvc3RzIiwiX21hcmtlZDIiLCJhZGRQb3N0IiwiX21hcmtlZDMiLCJyZW1vdmVQb3N0IiwiX21hcmtlZDQiLCJhZGRDb21tZW50IiwiX21hcmtlZDUiLCJ3YXRjaExvYWRQb3N0cyIsIl9tYXJrZWQ2Iiwid2F0Y2hBZGRQb3N0IiwiX21hcmtlZDciLCJ3YXRjaFJlbW92ZVBvc3QiLCJfbWFya2VkOCIsIndhdGNoQWRkQ29tbWVudCIsIl9tYXJrZWQ5IiwicG9zdFNhZ2EiLCJsb2FkUG9zdHNBUEkiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJjb25jYXQiLCJhY3Rpb24iLCJyZXN1bHQiLCJsb2FkUG9zdHMkIiwiX2NvbnRleHQiLCJhZGRQb3N0QVBJIiwicHV0IiwiTE9BRF9QT1NUU19TVUNDRVNTIiwidDAiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJyZXNwb25zZSIsInBvc3QiLCJjb250ZW50IiwiaWQiLCJhZGRQb3N0JCIsIl9jb250ZXh0MiIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsIkFERF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCQiLCJfY29udGV4dDMiLCJkZWxheSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImNvbnNvbGUiLCJlcnJvciIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCQiLCJfY29udGV4dDQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIndhdGNoTG9hZFBvc3RzJCIsIl9jb250ZXh0NSIsInRocm90dGxlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwid2F0Y2hBZGRQb3N0JCIsIl9jb250ZXh0NiIsInRha2VMYXRlc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwid2F0Y2hSZW1vdmVQb3N0JCIsIl9jb250ZXh0NyIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZENvbW1lbnQkIiwiX2NvbnRleHQ4IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInBvc3RTYWdhJCIsIl9jb250ZXh0OSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixN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LEdBQUFxQixRQUFBO0FBQUE7QUFJdEMsU0FBVUcsUUFBUUEsQ0FBQTtFQUFBLE9BQUF2SCxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBdUosVUFBQUMsU0FBQTtJQUFBLGtCQUFBQSxTQUFBLENBQUFuRixJQUFBLEdBQUFtRixTQUFBLENBQUE5RyxJQUFBO01BQUE7UUFBQThHLFNBQUEsQ0FBQTlHLElBQUE7UUFDN0IsT0FBTStHLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ2hFLFlBQVksQ0FBQyxFQUNsQmdFLCtEQUFJLENBQUNsRSxjQUFjLENBQUMsRUFDcEJrRSwrREFBSSxDQUFDOUQsZUFBZSxDQUFDLEVBQ3JCOEQsK0RBQUksQ0FBQzVELGVBQWUsQ0FBQyxDQUN4QixDQUFDO01BQUE7TUFBQTtRQUFBLE9BQUEwRCxTQUFBLENBQUFoRixJQUFBO0lBQUE7RUFBQSxHQUFBdUIsUUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzBiM2ZmOTE4NWRjNGU5OTFhMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgIGdlbmVyYXRlRHVtbXlQb3N0LCBcclxuICAgICBMT0FEX1BPU1RTX0ZBSUxVUkUsIFxyXG4gICAgIExPQURfUE9TVFNfUkVRVUVTVCwgXHJcbiAgICAgTE9BRF9QT1NUU19TVUNDRVNTLCBcclxuICAgICBSRU1PVkVfUE9TVF9GQUlMVVJFLCBcclxuICAgICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1N9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkgeyAvL2dlbmVyYXRlIFhcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8g7JqU7LKt7J2YIOqysOqzvOqwkuydhCDrsJvsnYwgZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nOydtOqzoCBjYWxs7J2AIOuPmeq4sO2VqOyImCDtmLjstpzsnoQgXHJcbiAgICAgICAgLy8geWllbGTqsIAgYXdhaXTqs7wg67mE7Iq3IGJsb2NraW5nXHJcbiAgICAgICAgLy8g64+Z6riw7J206riw65WM66y47JeQIC50aGVuIOyymOufvCDqsrDqs7zqsJLsnYQg67Cb7J2EIOuVjOq5jOyngCDquLDri6TroKTspIwsIOuLpOydjCDrqZTshozrk5wg7Iuk7ZaJ7JWI7ZWoXHJcblxyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHsgLy9nZW5lcmF0ZSBYXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCB7Y29udGVudDogZGF0YSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIOyalOyyreydmCDqsrDqs7zqsJLsnYQg67Cb7J2MIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpzsnbTqs6AgY2FsbOydgCDrj5nquLDtlajsiJgg7Zi47Lac7J6EIFxyXG4gICAgICAgIC8vIHlpZWxk6rCAIGF3YWl06rO8IOu5hOyKtyBibG9ja2luZ1xyXG4gICAgICAgIC8vIOuPmeq4sOydtOq4sOuVjOusuOyXkCAudGhlbiDsspjrn7wg6rKw6rO86rCS7J2EIOuwm+ydhCDrlYzquYzsp4Ag6riw64uk66Ck7KSMLCDri6TsnYwg66mU7IaM65OcIOyLpO2WieyViO2VqFxyXG5cclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkgeyAvL2dlbmVyYXRlIFhcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8g7JqU7LKt7J2YIOqysOqzvOqwkuydhCDrsJvsnYwgZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nOydtOqzoCBjYWxs7J2AIOuPmeq4sO2VqOyImCDtmLjstpzsnoQgXHJcbiAgICAgICAgLy8geWllbGTqsIAgYXdhaXTqs7wg67mE7Iq3IGJsb2NraW5nXHJcbiAgICAgICAgLy8g64+Z6riw7J206riw65WM66y47JeQIC50aGVuIOyymOufvCDqsrDqs7zqsJLsnYQg67Cb7J2EIOuVjOq5jOyngCDquLDri6TroKTspIwsIOuLpOydjCDrqZTshozrk5wg7Iuk7ZaJ7JWI7ZWoXHJcblxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkgeyAvL2dlbmVyYXRlIFhcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7IC8vIFBPU1QgL3Bvc3QvMS9jb21tZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyB0YWtlTGF0ZXN064qUIO2BtOumrSDsi6TsiJjroZwgMuuyiCDtlojsnYQg65WMIO2YueydgCAxMDDrsojsnYQg64iM65+s64+EIOuniOyngOunieq6vOunjCDsi6TtlontlaggXHJcbi8vLT4g64+Z7Iuc7JeQIOuhnOuUqeuQnOqxsOunjCDst6jshozrkKgo64uoLCDtlITroaDthLDshJzrsoTsl5DshJzrp4wg7KCB7JqpLCDqt7jrnpjshJwg67Cx7JeU65Oc7JeQ7IScIDLrsogg7KCA7J6l65CY7KeAIOyViuyVmOuKlOyngCDssrTtgawg7ZWE7JqUKVxyXG4vLyDsmpTssq3snYAgMuuyiOqwhOqxsOqzoCDsnZHri7Xrp4wg66eI7KeA66eJ6rq8IO2VnOqwnOuhnCDrsJvsnYwsIOyalOyyreydgCDst6jshozqsIAg7JWI65CoXHJcbi8vIOunjOyVvSDssqvrsojsp7jqurzrp4wg7ZWY6rOgIOyLtuycvOuptCB0YWtlTGVhZGluZ+uPhCDsnojsnYxcclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==