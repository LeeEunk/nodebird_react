_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");
var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js"); /* globals __webpack_hash__ */
if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}
var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
  page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null; /* eslint-disable-next-line */
var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?
function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.
function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.
function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}
function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!isUpdateAvailable() || !canApplyUpdates())) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          _context.prev = 2;
          _context.next = 5;
          return (0, _unfetch["default"])("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));
        case 5:
          res = _context.sent;
          _context.next = 8;
          return res.json();
        case 8:
          jsonData = _context.sent;
          curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead
          pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
            return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
          });
          if (pageUpdated) {
            document.location.reload(true);
          } else {
            curHash = mostRecentHash;
          }
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](2);
          console.error('Error occurred checking for update', _context.t0);
          document.location.reload(true);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}
(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }
  try {
    var message = JSON.parse(event.data);
    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }
      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];
function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];
  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }
  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);
  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }
  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }
  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }
  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }
  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}
_c = EventSourceWrapper;
function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }
  return EventSourceWrapper(options);
}
var _c;
$RefreshReg$(_c, "EventSourceWrapper");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports["default"] = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js")); /* eslint-disable */ // Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below
var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;
if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;
    this.abort = function () {};
  };
}
function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}
_c = TextDecoderPolyfill;
TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }
    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }
    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }
    throw new Error();
  }
  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }
    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }
    if (bitsNeeded === 6 * 3) {
      return 3;
    }
    throw new Error();
  }
  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;
  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];
    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }
    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }
    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }
  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option
var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }
  return false;
}; // IE, Edge
if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}
var k = function k() {};
function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}
_c2 = XHRWrapper;
XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);
  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;
  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event
      xhr.abort();
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }
    state = 0;
  };
  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;
      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }
      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };
  var onProgress = function onProgress() {
    onStart();
    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';
      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }
      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };
  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      that.readyState = 4;
      that.onreadystatechange();
    }
  };
  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };
  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);
    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload
  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress
  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64
  xhr.onreadystatechange = onReadyStateChange;
  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }
  xhr.open(method, url, true);
  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};
XHRWrapper.prototype.abort = function () {
  this._abort(false);
};
XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};
XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;
  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};
XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};
XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }
  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;
  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};
function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}
function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');
  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }
  this._map = map;
}
_c3 = HeadersPolyfill;
HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};
function XHRTransport() {}
_c4 = XHRTransport;
XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;
  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };
  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';
  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }
  xhr.send();
};
function HeadersWrapper(headers) {
  this._headers = headers;
}
_c5 = HeadersWrapper;
HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};
function FetchTransport() {}
_c6 = FetchTransport;
FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120
  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };
      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};
function EventTarget() {
  this._listeners = Object.create(null);
}
_c7 = EventTarget;
function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}
EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];
  if (typeListeners != undefined) {
    var length = typeListeners.length;
    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];
      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};
EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }
  var found = false;
  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }
  if (!found) {
    typeListeners.push(listener);
  }
};
EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners != undefined) {
    var filtered = [];
    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }
    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};
function Event(type) {
  this.type = type;
  this.target = undefined;
}
_c8 = Event;
function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}
_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);
function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}
_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;
var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);
  if (n !== n) {
    n = def;
  }
  return clampDuration(n);
};
var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};
var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};
function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}
_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;
function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;
  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;
      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';
        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }
          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }
        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };
  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;
      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);
        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }
      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);
      if (chunk !== '') {
        wasActivity = true;
      }
      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);
        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }
          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }
              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);
              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }
            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;
                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }
                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);
                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }
                if (currentState === CLOSED) {
                  return;
                }
              }
              dataBuffer = '';
              eventTypeBuffer = '';
            }
            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }
            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };
  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };
  var close = function close() {
    currentState = CLOSED;
    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }
    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }
    es.readyState = CLOSED;
  };
  var onTimeout = function onTimeout() {
    timeout = 0;
    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }
      return;
    }
    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
    var requestURL = url;
    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }
    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';
    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }
    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };
  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}
EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;
EventSourcePolyfill.prototype.close = function () {
  this._close();
};
EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.
function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }
    if (callback) {
      callback();
    }
  });
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js"); /* global location */
var evtSource;
var currentPage;
exports.currentPage = currentPage;
function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}
function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed
  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection
  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;
    try {
      var payload = JSON.parse(event.data);
      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJob3QiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImVycm9yIiwicGF0aCIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsImFjdGlvbiIsImhhc2giLCJleCIsIndhcm4iLCJldmVudENhbGxiYWNrcyIsIkV2ZW50U291cmNlV3JhcHBlciIsIm9wdGlvbnMiLCJzb3VyY2UiLCJsYXN0QWN0aXZpdHkiLCJEYXRlIiwibGlzdGVuZXJzIiwidGltZW91dCIsImluaXQiLCJ0aW1lciIsInNldEludGVydmFsIiwiaGFuZGxlRGlzY29ubmVjdCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwib25kZW1hbmQiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsInZhbHVlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImZldGNoIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsImRpc3BsYXlDb250ZW50IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImV2dFNvdXJjZSIsImN1cnJlbnRQYWdlIiwiY2xvc2VQaW5nIiwic2V0dXBQaW5nIiwicGF0aG5hbWVGbiIsInBhdGhuYW1lIiwicGF5bG9hZCIsImludmFsaWQiLCJocmVmIiwicGFnZVJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLDZCQUE2QixjQUFjLDJCQUEyQix1Q0FBdUMsY0FBYyxPQUFPLGlHQUFpRyx1Q0FBdUMsaUJBQWlCLG1EQUFtRCxpQkFBaUIsK0NBQStDLGtCQUFrQixnQkFBZ0IsU0FBUyxvQkFBb0IsU0FBUyxpQkFBaUIsMEJBQTBCLGlCQUFpQiwrQkFBK0IsOERBQThELGlGQUFpRiwrREFBK0QsU0FBUyxxR0FBcUcscUJBQXFCO0FBQ2w0Qjs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NvQkE7O0FBcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBTEE7QUFPQSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0MsV0FBWixFQUF5QjtFQUN2QkQsTUFBTSxDQUFDQyxXQUFQRCxHQUFxQkUsK0JBQXJCRjtBQUNEO0FBRUQsSUFBTUcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUxELENBQVdFLFFBQVEsQ0FBQ0MsY0FBVEQsQ0FBd0IsZUFBeEJBLEVBQXlDRSxXQUFwREosQ0FBYjtBQUNBLElBQU1LLFdBQUYsR0FBd0JOLElBQTVCLENBQU1NLFdBQUY7RUFBZUMsSUFBZixHQUF3QlAsSUFBNUIsQ0FBbUJPLElBQWY7QUFDSkQsV0FBVyxHQUFHQSxXQUFXLElBQUksRUFBN0JBO0FBQ0EsSUFBSUUsY0FBYyxHQUFHLElBQXJCLENBQ0E7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLHVCQUFkO0FBQ0EsSUFBTUMsYUFBYSxHQUNqQkwsV0FBVyxJQUFJQSxXQUFXLENBQUNNLFFBQVpOLENBQXFCLEdBQXJCQSxJQUE0QixFQUE1QkEsR0FBaUMsR0FBckMsQ0FBWEEsR0FBdUQsdUJBRHpELENBR0E7QUFDQSxTQUFTTyxpQkFBVCxHQUE2QjtFQUMzQjtFQUNBO0VBQ0E7RUFDQSxPQUFPTCxjQUFjLEtBQUtFLHVCQUExQjtBQUNELENBRUQ7QUFDQSxTQUFTSSxlQUFULEdBQTJCO0VBQ3pCLE9BQU9DLE1BQU0sQ0FBQ0MsR0FBUEQsQ0FBV0UsTUFBWEYsT0FBd0IsTUFBL0I7QUFDRCxDQUVEO0FBQ0E7QUFBQSxTQUNlRyxlQUFmO0VBQUE7QUFBQTtBQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBLE1BQ00sQ0FBQ0wsaUJBQWlCLEVBQWxCLElBQXdCLENBQUNDLGVBQWUsRUFBNUM7WUFBQTtZQUFBO1VBQUE7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBLE9BSW9CLG1DQUFTSCxhQUFjLFNBQUVGLE9BQVEscUJBQWpDLENBQWxCO1FBQUE7VUFBTVUsR0FBRztVQUFBO1VBQUEsT0FDY0EsR0FBRyxDQUFDQyxJQUFKRCxFQUF2QjtRQUFBO1VBQU1FLFFBQVE7VUFDUkMsT0FBTyxHQUFHZixJQUFJLEtBQUssR0FBVEEsR0FBZSxPQUFmQSxHQUF5QkEsSUFBekMsRUFDQTtVQUNNZ0IsV0FBVyxHQUFHLENBQUNDLEtBQUssQ0FBQ0MsT0FBTkQsQ0FBY0gsUUFBUSxDQUFDSyxDQUF2QkYsSUFDakJILFFBQVEsQ0FBQ0ssQ0FEUUYsR0FFakJHLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWU4sUUFBUSxDQUFDSyxDQUFyQkMsQ0FGZ0IsRUFHbEJFLElBSGtCLENBR1pDLGFBQUQsRUFBUztZQUNkLE9BQ0VBLEdBQUcsQ0FBQ0MsT0FBSkQsZ0JBQ1VSLE9BQU8sQ0FBQ1UsTUFBUlYsQ0FBZSxDQUFmQSxFQUFrQixDQUFsQkEsTUFBeUIsR0FBekJBLEdBQStCQSxPQUEvQkEsY0FBNkNBLE9BQVEsQ0FBRSxDQURqRVEsTUFFTSxDQUFDLENBRlBBLElBR0FBLEdBQUcsQ0FBQ0MsT0FBSkQsQ0FDRyxlQUNDUixPQUFPLENBQUNVLE1BQVJWLENBQWUsQ0FBZkEsRUFBa0IsQ0FBbEJBLE1BQXlCLEdBQXpCQSxHQUErQkEsT0FBL0JBLGNBQTZDQSxPQUFRLENBRHZELEVBRUdXLE9BRkgsQ0FFVyxLQUZYLEVBRWtCLElBRmxCLENBREZILE1BSU0sQ0FBQyxDQVJUO1VBVUQsQ0FkbUIsQ0FBcEI7VUFnQkEsSUFBSVAsV0FBSixFQUFpQjtZQUNmcEIsUUFBUSxDQUFDK0IsUUFBVC9CLENBQWtCZ0MsTUFBbEJoQyxDQUF5QixJQUF6QkE7VUFDRCxDQUZELE1BRU87WUFDTE0sT0FBTyxHQUFHRCxjQUFWQztVQUNEO1VBQ0Y7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUNDMkIsT0FBTyxDQUFDQyxLQUFSRCxDQUFjLG9DQUFkQTtVQUNBakMsUUFBUSxDQUFDK0IsUUFBVC9CLENBQWtCZ0MsTUFBbEJoQyxDQUF5QixJQUF6QkE7UUFDRDtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FHSDtFQUFBO0FBQUE7QUFBQSx3Q0FBc0I7RUFDcEJtQyxJQUFJLFlBQUtoQyxXQUFZO0FBREQsQ0FBdEIsRUFFR2lDLGtCQUZILENBRXVCQyxlQUFELEVBQVc7RUFDL0IsSUFBSUEsS0FBSyxDQUFDeEMsSUFBTndDLEtBQWUsY0FBbkIsRUFBbUM7SUFDakM7RUFDRDtFQUVELElBQUk7SUFDRixJQUFNQyxPQUFPLEdBQUd4QyxJQUFJLENBQUNDLEtBQUxELENBQVd1QyxLQUFLLENBQUN4QyxJQUFqQkMsQ0FBaEI7SUFFQSxJQUFJd0MsT0FBTyxDQUFDQyxNQUFSRCxLQUFtQixNQUFuQkEsSUFBNkJBLE9BQU8sQ0FBQ0MsTUFBUkQsS0FBbUIsT0FBcEQsRUFBNkQ7TUFDM0QsSUFBSSxDQUFDQSxPQUFPLENBQUNFLElBQWIsRUFBbUI7UUFDakI7TUFDRDtNQUNEbkMsY0FBYyxHQUFHaUMsT0FBTyxDQUFDRSxJQUF6Qm5DO01BQ0FVLGVBQWU7SUFDaEIsQ0FORCxNQU1PLElBQUl1QixPQUFPLENBQUNDLE1BQVJELEtBQW1CLFlBQXZCLEVBQXFDO01BQzFDdEMsUUFBUSxDQUFDK0IsUUFBVC9CLENBQWtCZ0MsTUFBbEJoQyxDQUF5QixJQUF6QkE7SUFDRDtFQUNGLENBQUMsUUFBT3lDLEVBQVAsRUFBVztJQUNYUixPQUFPLENBQUNTLElBQVJULENBQWEsMEJBQTBCSSxLQUFLLENBQUN4QyxJQUFoQyxHQUF1QyxJQUF2QyxHQUE4QzRDLEVBQTNEUjtFQUNEO0FBQ0YsQ0F0QkQ7QUF3QkEscUNBQVU5QixXQUFWLEVBQXVCO0VBQUEsT0FBTUMsSUFBN0I7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBLElBQU11QyxjQUFjLEdBQUcsRUFBdkI7QUFFQSxTQUFTQyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7RUFDbkMsSUFBSUMsTUFBSjtFQUNBLElBQUlDLFlBQVksR0FBRyxJQUFJQyxJQUFKLEVBQW5CO0VBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0VBRUEsSUFBSSxDQUFDSixPQUFPLENBQUNLLE9BQWIsRUFBc0I7SUFDcEJMLE9BQU8sQ0FBQ0ssT0FBUkwsR0FBa0IsS0FBSyxJQUF2QkE7RUFDRDtFQUVETSxJQUFJO0VBQ0osSUFBSUMsS0FBSyxHQUFHQyxXQUFXLENBQUMsWUFBWTtJQUNsQyxJQUFJLElBQUlMLElBQUosS0FBYUQsWUFBYixHQUE0QkYsT0FBTyxDQUFDSyxPQUF4QyxFQUFpRDtNQUMvQ0ksZ0JBQWdCO0lBQ2pCO0VBQ0YsQ0FKc0IsRUFJcEJULE9BQU8sQ0FBQ0ssT0FBUkwsR0FBa0IsQ0FKRSxDQUF2QjtFQU1BLFNBQVNNLElBQVQsR0FBZ0I7SUFDZEwsTUFBTSxHQUFHLElBQUlwRCxNQUFNLENBQUNDLFdBQVgsQ0FBdUJrRCxPQUFPLENBQUNWLElBQS9CLENBQVRXO0lBQ0FBLE1BQU0sQ0FBQ1MsTUFBUFQsR0FBZ0JVLFlBQWhCVjtJQUNBQSxNQUFNLENBQUNXLE9BQVBYLEdBQWlCUSxnQkFBakJSO0lBQ0FBLE1BQU0sQ0FBQ1ksU0FBUFosR0FBbUJhLGFBQW5CYjtFQUNEO0VBRUQsU0FBU1UsWUFBVCxHQUF3QjtJQUN0QixJQUFJWCxPQUFPLENBQUNlLEdBQVosRUFBaUIzQixPQUFPLENBQUMyQixHQUFSM0IsQ0FBWSxpQkFBWkE7SUFDakJjLFlBQVksR0FBRyxJQUFJQyxJQUFKLEVBQWZEO0VBQ0Q7RUFFRCxTQUFTWSxhQUFULENBQXVCdEIsS0FBdkIsRUFBOEI7SUFDNUJVLFlBQVksR0FBRyxJQUFJQyxJQUFKLEVBQWZEO0lBQ0EsS0FBSyxJQUFJYyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixTQUFTLENBQUNhLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO01BQ3pDWixTQUFTLENBQUNZLENBQUQsQ0FBVFosQ0FBYVosS0FBYlk7SUFDRDtJQUVETixjQUFjLENBQUNvQixPQUFmcEIsQ0FBd0JxQixZQUFELEVBQVE7TUFDN0IsSUFBSSxDQUFDQSxFQUFFLENBQUNDLFVBQUosSUFBa0I1QixLQUFLLENBQUN4QyxJQUFOd0MsQ0FBV1QsT0FBWFMsQ0FBbUIsUUFBbkJBLE1BQWlDLENBQUMsQ0FBeEQsRUFBMkQ7TUFDM0QyQixFQUFFLENBQUMzQixLQUFELENBQUYyQjtJQUNELENBSERyQjtFQUlEO0VBRUQsU0FBU1csZ0JBQVQsR0FBNEI7SUFDMUJZLGFBQWEsQ0FBQ2QsS0FBRCxDQUFiYztJQUNBcEIsTUFBTSxDQUFDcUIsS0FBUHJCO0lBQ0FzQixVQUFVLENBQUNqQixJQUFELEVBQU9OLE9BQU8sQ0FBQ0ssT0FBZixDQUFWa0I7RUFDRDtFQUVELE9BQU87SUFDTEQsS0FBSyxFQUFFLFNBQVBBLEtBQUssR0FBUTtNQUNYRCxhQUFhLENBQUNkLEtBQUQsQ0FBYmM7TUFDQXBCLE1BQU0sQ0FBQ3FCLEtBQVByQjtJQUNELENBSkk7SUFLTFYsa0JBQWtCLEVBQUUsU0FBcEJBLGtCQUFrQixDQUFZaUMsRUFBVixFQUFjO01BQ2hDcEIsU0FBUyxDQUFDcUIsSUFBVnJCLENBQWVvQixFQUFmcEI7SUFDRDtFQVBJLENBQVA7QUFTRDtBQUVNLEtBekRFTCxrQkFBVDtBQXlETyxTQUFTMkIscUJBQVQsQ0FBK0IxQixPQUEvQixFQUF3QztFQUM3QyxJQUFJLENBQUNBLE9BQU8sQ0FBQzJCLFFBQWIsRUFBdUI7SUFDckIsT0FBTztNQUNMcEMsa0JBQWtCLEVBQUc0QixTQUFyQjVCLGtCQUFrQixDQUFHNEIsRUFBRCxFQUFRO1FBQzFCckIsY0FBYyxDQUFDMkIsSUFBZjNCLENBQW9CcUIsRUFBcEJyQjtNQUNEO0lBSEksQ0FBUDtFQUtEO0VBQ0QsT0FBT0Msa0JBQWtCLENBQUNDLE9BQUQsQ0FBekI7QUFDRDtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVELDJKQUpBLHNCQUNBO0FBQ0E7QUFDQTtBQUdBLElBQUk3QyxRQUFRLEdBQUdOLE1BQU0sQ0FBQ00sUUFBdEI7QUFDQSxJQUFJeUUsUUFBUSxHQUFHL0UsTUFBTSxDQUFDK0UsUUFBdEI7QUFDQSxJQUFJQyxXQUFXLEdBQUdoRixNQUFNLENBQUNnRixXQUF6QjtBQUNBLElBQUlDLFdBQVcsR0FBR2pGLE1BQU0sQ0FBQ2lGLFdBQXpCO0FBQ0EsSUFBSUMsZUFBZSxHQUFHbEYsTUFBTSxDQUFDa0YsZUFBN0I7QUFFQSxJQUFJQSxlQUFlLElBQUlDLFNBQXZCLEVBQWtDO0VBQ2hDRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsR0FBZTtJQUM1QixLQUFLRSxNQUFMLEdBQWMsSUFBZDtJQUNBLEtBQUtDLEtBQUwsR0FBYSxZQUFZLENBQUUsQ0FBM0I7RUFDRCxDQUhESDtBQUlEO0FBRUQsU0FBU0ksbUJBQVQsR0FBK0I7RUFDN0IsS0FBS0MsVUFBTCxHQUFrQixDQUFsQjtFQUNBLEtBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDRDtBQUVERixLQUxTQSxtQkFBVDtBQUtBQSxtQkFBbUIsQ0FBQ0csU0FBcEJILENBQThCSSxNQUE5QkosR0FBdUMsVUFBVUssTUFBVixFQUFrQjtFQUN2RCxTQUFTQyxLQUFULENBQWVKLFNBQWYsRUFBMEJLLEtBQTFCLEVBQWlDQyxXQUFqQyxFQUE4QztJQUM1QyxJQUFJQSxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7TUFDckIsT0FBT04sU0FBUyxJQUFJLFVBQVVLLEtBQXZCTCxJQUFnQ0EsU0FBUyxJQUFJSyxLQUFiTCxJQUFzQixNQUE3RDtJQUNEO0lBQ0QsSUFBSU0sV0FBVyxLQUFLLENBQXBCLEVBQXVCO01BQ3JCLE9BQ0dOLFNBQVMsSUFBSSxVQUFVSyxLQUF2QkwsSUFBZ0NBLFNBQVMsSUFBSUssS0FBYkwsSUFBc0IsTUFBdkQsSUFDQ0EsU0FBUyxJQUFJLFVBQVVLLEtBQXZCTCxJQUFnQ0EsU0FBUyxJQUFJSyxLQUFiTCxJQUFzQixNQUZ6RDtJQUlEO0lBQ0QsSUFBSU0sV0FBVyxLQUFLLENBQXBCLEVBQXVCO01BQ3JCLE9BQU9OLFNBQVMsSUFBSSxZQUFZSyxLQUF6QkwsSUFBa0NBLFNBQVMsSUFBSUssS0FBYkwsSUFBc0IsUUFBL0Q7SUFDRDtJQUNELE1BQU0sSUFBSU8sS0FBSixFQUFOO0VBQ0Q7RUFDRCxTQUFTRCxXQUFULENBQXFCUCxVQUFyQixFQUFpQ0MsU0FBakMsRUFBNEM7SUFDMUMsSUFBSUQsVUFBVSxLQUFLLElBQUksQ0FBdkIsRUFBMEI7TUFDeEIsT0FBT0MsU0FBUyxJQUFJLENBQWJBLEdBQWlCLEVBQWpCQSxHQUFzQixDQUF0QkEsR0FBMEJBLFNBQVMsR0FBRyxFQUFaQSxHQUFpQixDQUFqQkEsR0FBcUIsQ0FBdEQ7SUFDRDtJQUNELElBQUlELFVBQVUsS0FBSyxJQUFJLENBQXZCLEVBQTBCO01BQ3hCLE9BQU9DLFNBQVMsR0FBRyxFQUFaQSxHQUFpQixDQUFqQkEsR0FBcUIsQ0FBNUI7SUFDRDtJQUNELElBQUlELFVBQVUsS0FBSyxJQUFJLENBQXZCLEVBQTBCO01BQ3hCLE9BQU8sQ0FBUDtJQUNEO0lBQ0QsTUFBTSxJQUFJUSxLQUFKLEVBQU47RUFDRDtFQUNELElBQUlDLFFBQVEsR0FBRyxNQUFmO0VBQ0EsSUFBSUMsTUFBTSxHQUFHLEVBQWI7RUFDQSxJQUFJVixVQUFVLEdBQUcsS0FBS0EsVUFBdEI7RUFDQSxJQUFJQyxTQUFTLEdBQUcsS0FBS0EsU0FBckI7RUFDQSxLQUFLLElBQUlyQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd0IsTUFBTSxDQUFDdkIsTUFBM0IsRUFBbUNELENBQUMsSUFBSSxDQUF4QyxFQUEyQztJQUN6QyxJQUFJK0IsS0FBSyxHQUFHUCxNQUFNLENBQUN4QixDQUFELENBQWxCO0lBQ0EsSUFBSW9CLFVBQVUsS0FBSyxDQUFuQixFQUFzQjtNQUNwQixJQUNFVyxLQUFLLEdBQUcsR0FBUkEsSUFDQUEsS0FBSyxHQUFHLEdBRFJBLElBRUEsQ0FBQ04sS0FBSyxDQUNISixTQUFTLElBQUksQ0FBZCxHQUFvQlUsS0FBSyxHQUFHLEVBRHhCLEVBRUpYLFVBQVUsR0FBRyxDQUZULEVBR0pPLFdBQVcsQ0FBQ1AsVUFBRCxFQUFhQyxTQUFiLENBSFAsQ0FIUixFQVFFO1FBQ0FELFVBQVUsR0FBRyxDQUFiQTtRQUNBQyxTQUFTLEdBQUdRLFFBQVpSO1FBQ0FTLE1BQU0sSUFBSUUsTUFBTSxDQUFDQyxZQUFQRCxDQUFvQlgsU0FBcEJXLENBQVZGO01BQ0Q7SUFDRjtJQUNELElBQUlWLFVBQVUsS0FBSyxDQUFuQixFQUFzQjtNQUNwQixJQUFJVyxLQUFLLElBQUksQ0FBVEEsSUFBY0EsS0FBSyxJQUFJLEdBQTNCLEVBQWdDO1FBQzlCWCxVQUFVLEdBQUcsQ0FBYkE7UUFDQUMsU0FBUyxHQUFHVSxLQUFaVjtNQUNELENBSEQsTUFHTyxJQUFJVSxLQUFLLElBQUksR0FBVEEsSUFBZ0JBLEtBQUssSUFBSSxHQUE3QixFQUFrQztRQUN2Q1gsVUFBVSxHQUFHLElBQUksQ0FBakJBO1FBQ0FDLFNBQVMsR0FBR1UsS0FBSyxHQUFHLEVBQXBCVjtNQUNELENBSE0sTUFHQSxJQUFJVSxLQUFLLElBQUksR0FBVEEsSUFBZ0JBLEtBQUssSUFBSSxHQUE3QixFQUFrQztRQUN2Q1gsVUFBVSxHQUFHLElBQUksQ0FBakJBO1FBQ0FDLFNBQVMsR0FBR1UsS0FBSyxHQUFHLEVBQXBCVjtNQUNELENBSE0sTUFHQSxJQUFJVSxLQUFLLElBQUksR0FBVEEsSUFBZ0JBLEtBQUssSUFBSSxHQUE3QixFQUFrQztRQUN2Q1gsVUFBVSxHQUFHLElBQUksQ0FBakJBO1FBQ0FDLFNBQVMsR0FBR1UsS0FBSyxHQUFHLENBQXBCVjtNQUNELENBSE0sTUFHQTtRQUNMRCxVQUFVLEdBQUcsQ0FBYkE7UUFDQUMsU0FBUyxHQUFHUSxRQUFaUjtNQUNEO01BQ0QsSUFDRUQsVUFBVSxLQUFLLENBQWZBLElBQ0EsQ0FBQ0ssS0FBSyxDQUFDSixTQUFELEVBQVlELFVBQVosRUFBd0JPLFdBQVcsQ0FBQ1AsVUFBRCxFQUFhQyxTQUFiLENBQW5DLENBRlIsRUFHRTtRQUNBRCxVQUFVLEdBQUcsQ0FBYkE7UUFDQUMsU0FBUyxHQUFHUSxRQUFaUjtNQUNEO0lBQ0YsQ0F4QkQsTUF3Qk87TUFDTEQsVUFBVSxJQUFJLENBQWRBO01BQ0FDLFNBQVMsR0FBSUEsU0FBUyxJQUFJLENBQWQsR0FBb0JVLEtBQUssR0FBRyxFQUF4Q1Y7SUFDRDtJQUNELElBQUlELFVBQVUsS0FBSyxDQUFuQixFQUFzQjtNQUNwQixJQUFJQyxTQUFTLElBQUksTUFBakIsRUFBeUI7UUFDdkJTLE1BQU0sSUFBSUUsTUFBTSxDQUFDQyxZQUFQRCxDQUFvQlgsU0FBcEJXLENBQVZGO01BQ0QsQ0FGRCxNQUVPO1FBQ0xBLE1BQU0sSUFBSUUsTUFBTSxDQUFDQyxZQUFQRCxDQUFvQixVQUFXWCxTQUFTLEdBQUcsTUFBWkEsR0FBcUIsQ0FBdEIsSUFBNEIsRUFBdEMsQ0FBcEJXLENBQVZGO1FBQ0FBLE1BQU0sSUFBSUUsTUFBTSxDQUFDQyxZQUFQRCxDQUNSLFVBQVdYLFNBQVMsR0FBRyxNQUFaQSxHQUFxQixDQUF0QixHQUEyQixLQUFyQyxDQURRVyxDQUFWRjtNQUdEO0lBQ0Y7RUFDRjtFQUNELEtBQUtWLFVBQUwsR0FBa0JBLFVBQWxCO0VBQ0EsS0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7RUFDQSxPQUFPUyxNQUFQO0FBQ0QsQ0EzRkRYLENBNkZBO0FBQ0EsSUFBSWUsb0JBQW9CLEdBQXBCQSw2QkFBdUIsR0FBWTtFQUNyQyxJQUFJO0lBQ0YsT0FDRSxJQUFJckIsV0FBSixHQUFrQlUsTUFBbEIsQ0FBeUIsSUFBSVQsV0FBSixHQUFrQnFCLE1BQWxCLENBQXlCLE1BQXpCLENBQXpCLEVBQTJEO01BQ3pEQyxNQUFNLEVBQUU7SUFEaUQsQ0FBM0QsTUFFTyxNQUhUO0VBS0QsQ0FBQyxRQUFPL0QsS0FBUCxFQUFjO0lBQ2RELE9BQU8sQ0FBQzJCLEdBQVIzQixDQUFZQyxLQUFaRDtFQUNEO0VBQ0QsT0FBTyxLQUFQO0FBQ0QsQ0FYRCxDQWFBO0FBQ0EsSUFDRXlDLFdBQVcsSUFBSUcsU0FBZkgsSUFDQUMsV0FBVyxJQUFJRSxTQURmSCxJQUVBLENBQUNxQixvQkFBb0IsRUFIdkIsRUFJRTtFQUNBckIsV0FBVyxHQUFHTSxtQkFBZE47QUFDRDtBQUVELElBQUl3QixDQUFDLEdBQURBLFVBQUksR0FBWSxDQUFFLENBQXRCO0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7RUFDdkIsS0FBS0MsZUFBTCxHQUF1QixLQUF2QjtFQUNBLEtBQUtDLFlBQUwsR0FBb0IsRUFBcEI7RUFDQSxLQUFLQyxVQUFMLEdBQWtCLENBQWxCO0VBQ0EsS0FBS3pGLE1BQUwsR0FBYyxDQUFkO0VBQ0EsS0FBSzBGLFVBQUwsR0FBa0IsRUFBbEI7RUFDQSxLQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0VBQ0EsS0FBS0MsVUFBTCxHQUFrQlIsQ0FBbEI7RUFDQSxLQUFLUyxrQkFBTCxHQUEwQlQsQ0FBMUI7RUFDQSxLQUFLVSxZQUFMLEdBQW9CLEVBQXBCO0VBQ0EsS0FBS0MsSUFBTCxHQUFZVCxHQUFaO0VBQ0EsS0FBS1UsWUFBTCxHQUFvQixDQUFwQjtFQUNBLEtBQUtDLE1BQUwsR0FBY2IsQ0FBZDtBQUNEO0FBRUQsTUFmU0MsVUFBVDtBQWVBLFVBQVUsQ0FBQ2hCLFNBQVgsQ0FBcUI2QixJQUFyQixHQUE0QixVQUFVQyxNQUFWLEVBQWtCQyxHQUFsQixFQUF1QjtFQUNqRCxLQUFLSCxNQUFMLENBQVksSUFBWjtFQUVBLElBQUlJLElBQUksR0FBRyxJQUFYO0VBQ0EsSUFBSWYsR0FBRyxHQUFHLEtBQUtTLElBQWY7RUFDQSxJQUFJTyxLQUFLLEdBQUcsQ0FBWjtFQUNBLElBQUlsRSxPQUFPLEdBQUcsQ0FBZDtFQUVBLEtBQUs2RCxNQUFMLEdBQWMsVUFBVU0sTUFBVixFQUFrQjtJQUM5QixJQUFJRixJQUFJLENBQUNMLFlBQUxLLEtBQXNCLENBQTFCLEVBQTZCO01BQzNCRyxZQUFZLENBQUNILElBQUksQ0FBQ0wsWUFBTixDQUFaUTtNQUNBSCxJQUFJLENBQUNMLFlBQUxLLEdBQW9CLENBQXBCQTtJQUNEO0lBQ0QsSUFBSUMsS0FBSyxLQUFLLENBQVZBLElBQWVBLEtBQUssS0FBSyxDQUF6QkEsSUFBOEJBLEtBQUssS0FBSyxDQUE1QyxFQUErQztNQUM3Q0EsS0FBSyxHQUFHLENBQVJBO01BQ0FoQixHQUFHLENBQUNtQixNQUFKbkIsR0FBYUYsQ0FBYkU7TUFDQUEsR0FBRyxDQUFDM0MsT0FBSjJDLEdBQWNGLENBQWRFO01BQ0FBLEdBQUcsQ0FBQ29CLE9BQUpwQixHQUFjRixDQUFkRTtNQUNBQSxHQUFHLENBQUNNLFVBQUpOLEdBQWlCRixDQUFqQkU7TUFDQUEsR0FBRyxDQUFDTyxrQkFBSlAsR0FBeUJGLENBQXpCRSxDQUNBO01BQ0E7TUFDQUEsR0FBRyxDQUFDckIsS0FBSnFCO01BQ0EsSUFBSWxELE9BQU8sS0FBSyxDQUFoQixFQUFtQjtRQUNqQm9FLFlBQVksQ0FBQ3BFLE9BQUQsQ0FBWm9FO1FBQ0FwRSxPQUFPLEdBQUcsQ0FBVkE7TUFDRDtNQUNELElBQUksQ0FBQ21FLE1BQUwsRUFBYTtRQUNYRixJQUFJLENBQUNaLFVBQUxZLEdBQWtCLENBQWxCQTtRQUNBQSxJQUFJLENBQUNSLGtCQUFMUTtNQUNEO0lBQ0Y7SUFDREMsS0FBSyxHQUFHLENBQVJBO0VBQ0QsQ0F6QkQ7RUEyQkEsSUFBSUssT0FBTyxHQUFQQSxnQkFBVSxHQUFZO0lBQ3hCLElBQUlMLEtBQUssS0FBSyxDQUFkLEVBQWlCO01BQ2Y7TUFDQSxJQUFJdEcsTUFBTSxHQUFHLENBQWI7TUFDQSxJQUFJMEYsVUFBVSxHQUFHLEVBQWpCO01BQ0EsSUFBSWtCLFdBQVcsR0FBRzdDLFNBQWxCO01BQ0EsSUFBSSxFQUFFLGlCQUFpQnVCLEdBQW5CLENBQUosRUFBNkI7UUFDM0IsSUFBSTtVQUNGdEYsTUFBTSxHQUFHc0YsR0FBRyxDQUFDdEYsTUFBYkE7VUFDQTBGLFVBQVUsR0FBR0osR0FBRyxDQUFDSSxVQUFqQkE7VUFDQWtCLFdBQVcsR0FBR3RCLEdBQUcsQ0FBQ3VCLGlCQUFKdkIsQ0FBc0IsY0FBdEJBLENBQWRzQjtRQUNELENBQUMsUUFBT3hGLEtBQVAsRUFBYztVQUNkO1VBQ0E7VUFDQTtVQUNBcEIsTUFBTSxHQUFHLENBQVRBO1VBQ0EwRixVQUFVLEdBQUcsRUFBYkE7VUFDQWtCLFdBQVcsR0FBRzdDLFNBQWQ2QyxDQUNBO1VBQ0E7VUFDQTtRQUNEO01BQ0YsQ0FoQkQsTUFnQk87UUFDTDVHLE1BQU0sR0FBRyxHQUFUQTtRQUNBMEYsVUFBVSxHQUFHLElBQWJBO1FBQ0FrQixXQUFXLEdBQUd0QixHQUFHLENBQUNzQixXQUFsQkE7TUFDRDtNQUNELElBQUk1RyxNQUFNLEtBQUssQ0FBZixFQUFrQjtRQUNoQnNHLEtBQUssR0FBRyxDQUFSQTtRQUNBRCxJQUFJLENBQUNaLFVBQUxZLEdBQWtCLENBQWxCQTtRQUNBQSxJQUFJLENBQUNyRyxNQUFMcUcsR0FBY3JHLE1BQWRxRztRQUNBQSxJQUFJLENBQUNYLFVBQUxXLEdBQWtCWCxVQUFsQlc7UUFDQUEsSUFBSSxDQUFDUCxZQUFMTyxHQUFvQk8sV0FBcEJQO1FBQ0FBLElBQUksQ0FBQ1Isa0JBQUxRO01BQ0Q7SUFDRjtFQUNGLENBcENEO0VBcUNBLElBQUlTLFVBQVUsR0FBVkEsbUJBQWEsR0FBWTtJQUMzQkgsT0FBTztJQUNQLElBQUlMLEtBQUssS0FBSyxDQUFWQSxJQUFlQSxLQUFLLEtBQUssQ0FBN0IsRUFBZ0M7TUFDOUJBLEtBQUssR0FBRyxDQUFSQTtNQUNBLElBQUlYLFlBQVksR0FBRyxFQUFuQjtNQUNBLElBQUk7UUFDRkEsWUFBWSxHQUFHTCxHQUFHLENBQUNLLFlBQW5CQTtNQUNELENBQUMsUUFBT3ZFLEtBQVAsRUFBYyxDQUNkO01BQUE7TUFFRmlGLElBQUksQ0FBQ1osVUFBTFksR0FBa0IsQ0FBbEJBO01BQ0FBLElBQUksQ0FBQ1YsWUFBTFUsR0FBb0JWLFlBQXBCVTtNQUNBQSxJQUFJLENBQUNULFVBQUxTO0lBQ0Q7RUFDRixDQWREO0VBZUEsSUFBSVUsUUFBUSxHQUFSQSxpQkFBVyxHQUFZO0lBQ3pCO0lBQ0E7SUFDQUQsVUFBVTtJQUNWLElBQUlSLEtBQUssS0FBSyxDQUFWQSxJQUFlQSxLQUFLLEtBQUssQ0FBekJBLElBQThCQSxLQUFLLEtBQUssQ0FBNUMsRUFBK0M7TUFDN0NBLEtBQUssR0FBRyxDQUFSQTtNQUNBLElBQUlsRSxPQUFPLEtBQUssQ0FBaEIsRUFBbUI7UUFDakJvRSxZQUFZLENBQUNwRSxPQUFELENBQVpvRTtRQUNBcEUsT0FBTyxHQUFHLENBQVZBO01BQ0Q7TUFDRGlFLElBQUksQ0FBQ1osVUFBTFksR0FBa0IsQ0FBbEJBO01BQ0FBLElBQUksQ0FBQ1Isa0JBQUxRO0lBQ0Q7RUFDRixDQWJEO0VBY0EsSUFBSVcsa0JBQWtCLEdBQWxCQSwyQkFBcUIsR0FBWTtJQUNuQyxJQUFJMUIsR0FBRyxJQUFJdkIsU0FBWCxFQUFzQjtNQUNwQjtNQUNBLElBQUl1QixHQUFHLENBQUNHLFVBQUpILEtBQW1CLENBQXZCLEVBQTBCO1FBQ3hCeUIsUUFBUTtNQUNULENBRkQsTUFFTyxJQUFJekIsR0FBRyxDQUFDRyxVQUFKSCxLQUFtQixDQUF2QixFQUEwQjtRQUMvQndCLFVBQVU7TUFDWCxDQUZNLE1BRUEsSUFBSXhCLEdBQUcsQ0FBQ0csVUFBSkgsS0FBbUIsQ0FBdkIsRUFBMEI7UUFDL0JxQixPQUFPO01BQ1I7SUFDRjtFQUNGLENBWEQ7RUFZQSxJQUFJTSxTQUFTLEdBQVRBLGtCQUFZLEdBQVk7SUFDMUI3RSxPQUFPLEdBQUdrQixVQUFVLENBQUMsWUFBWTtNQUMvQjJELFNBQVM7SUFDVixDQUZtQixFQUVqQixHQUZpQixDQUFwQjdFO0lBR0EsSUFBSWtELEdBQUcsQ0FBQ0csVUFBSkgsS0FBbUIsQ0FBdkIsRUFBMEI7TUFDeEJ3QixVQUFVO0lBQ1g7RUFDRixDQVBELENBU0E7RUFDQXhCLEdBQUcsQ0FBQ21CLE1BQUpuQixHQUFheUIsUUFBYnpCO0VBQ0FBLEdBQUcsQ0FBQzNDLE9BQUoyQyxHQUFjeUIsUUFBZHpCLENBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBQSxHQUFHLENBQUNvQixPQUFKcEIsR0FBY3lCLFFBQWR6QixDQUVBO0VBQ0EsSUFDRSxFQUFFLGtCQUFrQjRCLGNBQWMsQ0FBQzdDLFNBQW5DLEtBQ0EsRUFBRSxhQUFhNkMsY0FBYyxDQUFDN0MsU0FBOUIsQ0FGRixFQUdFO0lBQ0FpQixHQUFHLENBQUNNLFVBQUpOLEdBQWlCd0IsVUFBakJ4QjtFQUNELENBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FBLEdBQUcsQ0FBQ08sa0JBQUpQLEdBQXlCMEIsa0JBQXpCMUI7RUFFQSxJQUFJLGlCQUFpQkEsR0FBckIsRUFBMEI7SUFDeEJjLEdBQUcsSUFBSSxDQUFDQSxHQUFHLENBQUN0RixPQUFKc0YsQ0FBWSxHQUFaQSxNQUFxQixDQUFDLENBQXRCQSxHQUEwQixHQUExQkEsR0FBZ0MsR0FBakMsSUFBd0MsY0FBL0NBO0VBQ0Q7RUFDRGQsR0FBRyxDQUFDWSxJQUFKWixDQUFTYSxNQUFUYixFQUFpQmMsR0FBakJkLEVBQXNCLElBQXRCQTtFQUVBLElBQUksZ0JBQWdCQSxHQUFwQixFQUF5QjtJQUN2QjtJQUNBO0lBQ0FsRCxPQUFPLEdBQUdrQixVQUFVLENBQUMsWUFBWTtNQUMvQjJELFNBQVM7SUFDVixDQUZtQixFQUVqQixDQUZpQixDQUFwQjdFO0VBR0Q7QUFDRixDQWhLRDtBQWlLQWlELFVBQVUsQ0FBQ2hCLFNBQVhnQixDQUFxQnBCLEtBQXJCb0IsR0FBNkIsWUFBWTtFQUN2QyxLQUFLWSxNQUFMLENBQVksS0FBWjtBQUNELENBRkRaO0FBR0FBLFVBQVUsQ0FBQ2hCLFNBQVhnQixDQUFxQndCLGlCQUFyQnhCLEdBQXlDLFVBQVU4QixJQUFWLEVBQWdCO0VBQ3ZELE9BQU8sS0FBS3JCLFlBQVo7QUFDRCxDQUZEVDtBQUdBQSxVQUFVLENBQUNoQixTQUFYZ0IsQ0FBcUIrQixnQkFBckIvQixHQUF3QyxVQUFVOEIsSUFBVixFQUFnQkUsS0FBaEIsRUFBdUI7RUFDN0QsSUFBSS9CLEdBQUcsR0FBRyxLQUFLUyxJQUFmO0VBQ0EsSUFBSSxzQkFBc0JULEdBQTFCLEVBQStCO0lBQzdCQSxHQUFHLENBQUM4QixnQkFBSjlCLENBQXFCNkIsSUFBckI3QixFQUEyQitCLEtBQTNCL0I7RUFDRDtBQUNGLENBTEREO0FBTUFBLFVBQVUsQ0FBQ2hCLFNBQVhnQixDQUFxQmlDLHFCQUFyQmpDLEdBQTZDLFlBQVk7RUFDdkQsT0FBTyxLQUFLVSxJQUFMLENBQVV1QixxQkFBVixJQUFtQ3ZELFNBQW5DLEdBQ0gsS0FBS2dDLElBQUwsQ0FBVXVCLHFCQUFWLEVBREcsR0FFSCxFQUZKO0FBR0QsQ0FKRGpDO0FBS0EsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQmtELElBQXJCLEdBQTRCLFlBQVk7RUFDdEM7RUFDQSxJQUNFLEVBQUUsZUFBZUwsY0FBYyxDQUFDN0MsU0FBaEMsS0FDQW5GLFFBQVEsSUFBSTZFLFNBRFosSUFFQTdFLFFBQVEsQ0FBQ3VHLFVBQVR2RyxJQUF1QjZFLFNBRnZCLElBR0E3RSxRQUFRLENBQUN1RyxVQUFUdkcsS0FBd0IsVUFKMUIsRUFLRTtJQUNBLElBQUltSCxJQUFJLEdBQUcsSUFBWDtJQUNBQSxJQUFJLENBQUNMLFlBQUxLLEdBQW9CL0MsVUFBVSxDQUFDLFlBQVk7TUFDekMrQyxJQUFJLENBQUNMLFlBQUxLLEdBQW9CLENBQXBCQTtNQUNBQSxJQUFJLENBQUNrQixJQUFMbEI7SUFDRCxDQUg2QixFQUczQixDQUgyQixDQUE5QkE7SUFJQTtFQUNEO0VBRUQsSUFBSWYsR0FBRyxHQUFHLEtBQUtTLElBQWYsQ0FDQTtFQUNBVCxHQUFHLENBQUNDLGVBQUpELEdBQXNCLEtBQUtDLGVBQTNCRDtFQUNBQSxHQUFHLENBQUNFLFlBQUpGLEdBQW1CLEtBQUtFLFlBQXhCRjtFQUNBLElBQUk7SUFDRjtJQUNBQSxHQUFHLENBQUNpQyxJQUFKakMsQ0FBU3ZCLFNBQVR1QjtFQUNELENBQUMsUUFBT2tDLE1BQVAsRUFBZTtJQUNmO0lBQ0EsTUFBTUEsTUFBTjtFQUNEO0FBQ0YsQ0EzQkQ7QUE2QkEsU0FBU0MsV0FBVCxDQUFxQk4sSUFBckIsRUFBMkI7RUFDekIsT0FBT0EsSUFBSSxDQUFDbkcsT0FBTG1HLENBQWEsUUFBYkEsRUFBdUIsVUFBVTFHLENBQVYsRUFBYTtJQUN6QyxPQUFPc0UsTUFBTSxDQUFDQyxZQUFQRCxDQUFvQnRFLENBQUMsQ0FBQ2lILFVBQUZqSCxDQUFhLENBQWJBLElBQWtCLElBQXRDc0UsQ0FBUDtFQUNELENBRk1vQyxDQUFQO0FBR0Q7QUFFRCxTQUFTUSxlQUFULENBQXlCQyxHQUF6QixFQUE4QjtFQUM1QjtFQUNBLElBQUlDLEdBQUcsR0FBR25ILE1BQU0sQ0FBQ29ILE1BQVBwSCxDQUFjLElBQWRBLENBQVY7RUFDQSxJQUFJcUgsS0FBSyxHQUFHSCxHQUFHLENBQUNJLEtBQUpKLENBQVUsTUFBVkEsQ0FBWjtFQUNBLEtBQUssSUFBSTdFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnRixLQUFLLENBQUMvRSxNQUExQixFQUFrQ0QsQ0FBQyxJQUFJLENBQXZDLEVBQTBDO0lBQ3hDLElBQUlrRixJQUFJLEdBQUdGLEtBQUssQ0FBQ2hGLENBQUQsQ0FBaEI7SUFDQSxJQUFJbUYsS0FBSyxHQUFHRCxJQUFJLENBQUNELEtBQUxDLENBQVcsSUFBWEEsQ0FBWjtJQUNBLElBQUlkLElBQUksR0FBR2UsS0FBSyxDQUFDekQsS0FBTnlELEVBQVg7SUFDQSxJQUFJYixLQUFLLEdBQUdhLEtBQUssQ0FBQ0MsSUFBTkQsQ0FBVyxJQUFYQSxDQUFaO0lBQ0FMLEdBQUcsQ0FBQ0osV0FBVyxDQUFDTixJQUFELENBQVosQ0FBSFUsR0FBeUJSLEtBQXpCUTtFQUNEO0VBQ0QsS0FBS08sSUFBTCxHQUFZUCxHQUFaO0FBQ0Q7QUFDREYsTUFiU0EsZUFBVDtBQWFBQSxlQUFlLENBQUN0RCxTQUFoQnNELENBQTBCVSxHQUExQlYsR0FBZ0MsVUFBVVIsSUFBVixFQUFnQjtFQUM5QyxPQUFPLEtBQUtpQixJQUFMLENBQVVYLFdBQVcsQ0FBQ04sSUFBRCxDQUFyQixDQUFQO0FBQ0QsQ0FGRFE7QUFJQSxTQUFTVyxZQUFULEdBQXdCLENBQUU7QUFFMUJBLE1BRlNBLFlBQVQ7QUFFQUEsWUFBWSxDQUFDakUsU0FBYmlFLENBQXVCcEMsSUFBdkJvQyxHQUE4QixVQUM1QmhELEdBRDRCLEVBRTVCaUQsZUFGNEIsRUFHNUJDLGtCQUg0QixFQUk1QkMsZ0JBSjRCLEVBSzVCckMsR0FMNEIsRUFNNUJiLGVBTjRCLEVBTzVCbUQsT0FQNEIsRUFRNUI7RUFDQXBELEdBQUcsQ0FBQ1ksSUFBSlosQ0FBUyxLQUFUQSxFQUFnQmMsR0FBaEJkO0VBQ0EsSUFBSXFELE1BQU0sR0FBRyxDQUFiO0VBQ0FyRCxHQUFHLENBQUNNLFVBQUpOLEdBQWlCLFlBQVk7SUFDM0IsSUFBSUssWUFBWSxHQUFHTCxHQUFHLENBQUNLLFlBQXZCO0lBQ0EsSUFBSWlELEtBQUssR0FBR2pELFlBQVksQ0FBQ2tELEtBQWJsRCxDQUFtQmdELE1BQW5CaEQsQ0FBWjtJQUNBZ0QsTUFBTSxJQUFJQyxLQUFLLENBQUM1RixNQUFoQjJGO0lBQ0FILGtCQUFrQixDQUFDSSxLQUFELENBQWxCSjtFQUNELENBTERsRDtFQU1BQSxHQUFHLENBQUNPLGtCQUFKUCxHQUF5QixZQUFZO0lBQ25DLElBQUlBLEdBQUcsQ0FBQ0csVUFBSkgsS0FBbUIsQ0FBdkIsRUFBMEI7TUFDeEIsSUFBSXRGLE1BQU0sR0FBR3NGLEdBQUcsQ0FBQ3RGLE1BQWpCO01BQ0EsSUFBSTBGLFVBQVUsR0FBR0osR0FBRyxDQUFDSSxVQUFyQjtNQUNBLElBQUlrQixXQUFXLEdBQUd0QixHQUFHLENBQUN1QixpQkFBSnZCLENBQXNCLGNBQXRCQSxDQUFsQjtNQUNBLElBQUlvRCxPQUFPLEdBQUdwRCxHQUFHLENBQUNnQyxxQkFBSmhDLEVBQWQ7TUFDQWlELGVBQWUsQ0FDYnZJLE1BRGEsRUFFYjBGLFVBRmEsRUFHYmtCLFdBSGEsRUFJYixJQUFJZSxlQUFKLENBQW9CZSxPQUFwQixDQUphLEVBS2IsWUFBWTtRQUNWcEQsR0FBRyxDQUFDckIsS0FBSnFCO01BQ0QsQ0FQWSxDQUFmaUQ7SUFTRCxDQWRELE1BY08sSUFBSWpELEdBQUcsQ0FBQ0csVUFBSkgsS0FBbUIsQ0FBdkIsRUFBMEI7TUFDL0JtRCxnQkFBZ0I7SUFDakI7RUFDRixDQWxCRG5EO0VBbUJBQSxHQUFHLENBQUNDLGVBQUpELEdBQXNCQyxlQUF0QkQ7RUFDQUEsR0FBRyxDQUFDRSxZQUFKRixHQUFtQixNQUFuQkE7RUFDQSxLQUFLLElBQUk2QixJQUFULElBQWlCdUIsT0FBakIsRUFBMEI7SUFDeEIsSUFBSWhJLE1BQU0sQ0FBQzJELFNBQVAzRCxDQUFpQm9JLGNBQWpCcEksQ0FBZ0NxSSxJQUFoQ3JJLENBQXFDZ0ksT0FBckNoSSxFQUE4Q3lHLElBQTlDekcsQ0FBSixFQUF5RDtNQUN2RDRFLEdBQUcsQ0FBQzhCLGdCQUFKOUIsQ0FBcUI2QixJQUFyQjdCLEVBQTJCb0QsT0FBTyxDQUFDdkIsSUFBRCxDQUFsQzdCO0lBQ0Q7RUFDRjtFQUNEQSxHQUFHLENBQUNpQyxJQUFKakM7QUFDRCxDQTVDRGdEO0FBOENBLFNBQVNVLGNBQVQsQ0FBd0JOLE9BQXhCLEVBQWlDO0VBQy9CLEtBQUtPLFFBQUwsR0FBZ0JQLE9BQWhCO0FBQ0Q7QUFDRE0sTUFIU0EsY0FBVDtBQUdBQSxjQUFjLENBQUMzRSxTQUFmMkUsQ0FBeUJYLEdBQXpCVyxHQUErQixVQUFVN0IsSUFBVixFQUFnQjtFQUM3QyxPQUFPLEtBQUs4QixRQUFMLENBQWNaLEdBQWQsQ0FBa0JsQixJQUFsQixDQUFQO0FBQ0QsQ0FGRDZCO0FBSUEsU0FBU0UsY0FBVCxHQUEwQixDQUFFO0FBRTVCLE1BRlNBLGNBQVQ7QUFFQSxjQUFjLENBQUM3RSxTQUFmLENBQXlCNkIsSUFBekIsR0FBZ0MsVUFDOUJaLEdBRDhCLEVBRTlCaUQsZUFGOEIsRUFHOUJDLGtCQUg4QixFQUk5QkMsZ0JBSjhCLEVBSzlCckMsR0FMOEIsRUFNOUJiLGVBTjhCLEVBTzlCbUQsT0FQOEIsRUFROUI7RUFDQSxJQUFJUyxVQUFVLEdBQUcsSUFBSXJGLGVBQUosRUFBakI7RUFDQSxJQUFJRSxNQUFNLEdBQUdtRixVQUFVLENBQUNuRixNQUF4QixDQUErQjtFQUMvQixJQUFJb0YsV0FBVyxHQUFHLElBQUl4RixXQUFKLEVBQWxCO0VBQ0EseUJBQU13QyxHQUFOLEVBQVc7SUFDVHNDLE9BQU8sRUFBRUEsT0FEQTtJQUVUVyxXQUFXLEVBQUU5RCxlQUFlLEdBQUcsU0FBSCxHQUFlLGFBRmxDO0lBR1R2QixNQUFNLEVBQUVBLE1BSEM7SUFJVHNGLEtBQUssRUFBRTtFQUpFLENBQVgsRUFNR0MsSUFOSCxDQU1RLFVBQVVDLFFBQVYsRUFBb0I7SUFDeEIsSUFBSUMsTUFBTSxHQUFHRCxRQUFRLENBQUNFLElBQVRGLENBQWNHLFNBQWRILEVBQWI7SUFDQWpCLGVBQWUsQ0FDYmlCLFFBQVEsQ0FBQ3hKLE1BREksRUFFYndKLFFBQVEsQ0FBQzlELFVBRkksRUFHYjhELFFBQVEsQ0FBQ2QsT0FBVGMsQ0FBaUJuQixHQUFqQm1CLENBQXFCLGNBQXJCQSxDQUhhLEVBSWIsSUFBSVIsY0FBSixDQUFtQlEsUUFBUSxDQUFDZCxPQUE1QixDQUphLEVBS2IsWUFBWTtNQUNWUyxVQUFVLENBQUNsRixLQUFYa0Y7TUFDQU0sTUFBTSxDQUFDRyxNQUFQSDtJQUNELENBUlksQ0FBZmxCO0lBVUEsT0FBTyxJQUFJc0IsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO01BQzVDLElBQUlDLGFBQWEsR0FBYkEsc0JBQWdCLEdBQVk7UUFDOUIsTUFBTSxDQUNIQyxJQURILEdBRUdWLElBRkgsQ0FFUSxVQUFVVyxNQUFWLEVBQWtCO1VBQ3RCLElBQUlBLE1BQU0sQ0FBQ0MsSUFBWCxFQUFpQjtZQUNmO1lBQ0FMLE9BQU8sQ0FBQy9GLFNBQUQsQ0FBUCtGO1VBQ0QsQ0FIRCxNQUdPO1lBQ0wsSUFBSWxCLEtBQUssR0FBR1EsV0FBVyxDQUFDOUUsTUFBWjhFLENBQW1CYyxNQUFNLENBQUM3QyxLQUExQitCLEVBQWlDO2NBQUVqRSxNQUFNLEVBQUU7WUFBVixDQUFqQ2lFLENBQVo7WUFDQVosa0JBQWtCLENBQUNJLEtBQUQsQ0FBbEJKO1lBQ0F3QixhQUFhO1VBQ2Q7UUFDRixDQVhILEVBWUcsT0FaSCxFQVlZLFVBQVU1SSxLQUFWLEVBQWlCO1VBQ3pCMkksTUFBTSxDQUFDM0ksS0FBRCxDQUFOMkk7UUFDRCxDQWRIO01BZUQsQ0FoQkQ7TUFpQkFDLGFBQWE7SUFDZCxDQW5CTSxDQUFQO0VBb0JELENBdENILEVBdUNHVCxJQXZDSCxDQXdDSSxVQUFVVyxNQUFWLEVBQWtCO0lBQ2hCekIsZ0JBQWdCO0lBQ2hCLE9BQU95QixNQUFQO0VBQ0QsQ0EzQ0wsRUE0Q0ksVUFBVTlJLEtBQVYsRUFBaUI7SUFDZnFILGdCQUFnQjtJQUNoQixPQUFPb0IsT0FBTyxDQUFDRSxNQUFSRixDQUFlekksS0FBZnlJLENBQVA7RUFDRCxDQS9DTDtBQWlERCxDQTdERDtBQStEQSxTQUFTTyxXQUFULEdBQXVCO0VBQ3JCLEtBQUtDLFVBQUwsR0FBa0IzSixNQUFNLENBQUNvSCxNQUFQcEgsQ0FBYyxJQUFkQSxDQUFsQjtBQUNEO0FBRUQsTUFKUzBKLFdBQVQ7QUFJQSxTQUFTRSxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtFQUNyQmpILFVBQVUsQ0FBQyxZQUFZO0lBQ3JCLE1BQU1pSCxDQUFOO0VBQ0QsQ0FGUyxFQUVQLENBRk8sQ0FBVmpIO0FBR0Q7QUFFRDhHLFdBQVcsQ0FBQy9GLFNBQVorRixDQUFzQkksYUFBdEJKLEdBQXNDLFVBQVU3SSxLQUFWLEVBQWlCO0VBQ3JEQSxLQUFLLENBQUNrSixNQUFObEosR0FBZSxJQUFmQTtFQUNBLElBQUltSixhQUFhLEdBQUcsS0FBS0wsVUFBTCxDQUFnQjlJLEtBQUssQ0FBQ29KLElBQXRCLENBQXBCO0VBQ0EsSUFBSUQsYUFBYSxJQUFJM0csU0FBckIsRUFBZ0M7SUFDOUIsSUFBSWYsTUFBTSxHQUFHMEgsYUFBYSxDQUFDMUgsTUFBM0I7SUFDQSxLQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLE1BQXBCLEVBQTRCRCxDQUFDLElBQUksQ0FBakMsRUFBb0M7TUFDbEMsSUFBSTZILFFBQVEsR0FBR0YsYUFBYSxDQUFDM0gsQ0FBRCxDQUE1QjtNQUNBLElBQUk7UUFDRixJQUFJLE9BQU82SCxRQUFRLENBQUNDLFdBQWhCLEtBQWdDLFVBQXBDLEVBQWdEO1VBQzlDRCxRQUFRLENBQUNDLFdBQVRELENBQXFCckosS0FBckJxSjtRQUNELENBRkQsTUFFTztVQUNMQSxRQUFRLENBQUM3QixJQUFUNkIsQ0FBYyxJQUFkQSxFQUFvQnJKLEtBQXBCcUo7UUFDRDtNQUNGLENBQUMsUUFBT0wsQ0FBUCxFQUFVO1FBQ1ZELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFWRDtNQUNEO0lBQ0Y7RUFDRjtBQUNGLENBbEJERjtBQW1CQUEsV0FBVyxDQUFDL0YsU0FBWitGLENBQXNCVSxnQkFBdEJWLEdBQXlDLFVBQVVPLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCO0VBQ2pFRCxJQUFJLEdBQUc1RixNQUFNLENBQUM0RixJQUFELENBQWJBO0VBQ0EsSUFBSXhJLFNBQVMsR0FBRyxLQUFLa0ksVUFBckI7RUFDQSxJQUFJSyxhQUFhLEdBQUd2SSxTQUFTLENBQUN3SSxJQUFELENBQTdCO0VBQ0EsSUFBSUQsYUFBYSxJQUFJM0csU0FBckIsRUFBZ0M7SUFDOUIyRyxhQUFhLEdBQUcsRUFBaEJBO0lBQ0F2SSxTQUFTLENBQUN3SSxJQUFELENBQVR4SSxHQUFrQnVJLGFBQWxCdkk7RUFDRDtFQUNELElBQUk0SSxLQUFLLEdBQUcsS0FBWjtFQUNBLEtBQUssSUFBSWhJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcySCxhQUFhLENBQUMxSCxNQUFsQyxFQUEwQ0QsQ0FBQyxJQUFJLENBQS9DLEVBQWtEO0lBQ2hELElBQUkySCxhQUFhLENBQUMzSCxDQUFELENBQWIySCxLQUFxQkUsUUFBekIsRUFBbUM7TUFDakNHLEtBQUssR0FBRyxJQUFSQTtJQUNEO0VBQ0Y7RUFDRCxJQUFJLENBQUNBLEtBQUwsRUFBWTtJQUNWTCxhQUFhLENBQUNsSCxJQUFka0gsQ0FBbUJFLFFBQW5CRjtFQUNEO0FBQ0YsQ0FqQkROO0FBa0JBQSxXQUFXLENBQUMvRixTQUFaK0YsQ0FBc0JZLG1CQUF0QlosR0FBNEMsVUFBVU8sSUFBVixFQUFnQkMsUUFBaEIsRUFBMEI7RUFDcEVELElBQUksR0FBRzVGLE1BQU0sQ0FBQzRGLElBQUQsQ0FBYkE7RUFDQSxJQUFJeEksU0FBUyxHQUFHLEtBQUtrSSxVQUFyQjtFQUNBLElBQUlLLGFBQWEsR0FBR3ZJLFNBQVMsQ0FBQ3dJLElBQUQsQ0FBN0I7RUFDQSxJQUFJRCxhQUFhLElBQUkzRyxTQUFyQixFQUFnQztJQUM5QixJQUFJa0gsUUFBUSxHQUFHLEVBQWY7SUFDQSxLQUFLLElBQUlsSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkgsYUFBYSxDQUFDMUgsTUFBbEMsRUFBMENELENBQUMsSUFBSSxDQUEvQyxFQUFrRDtNQUNoRCxJQUFJMkgsYUFBYSxDQUFDM0gsQ0FBRCxDQUFiMkgsS0FBcUJFLFFBQXpCLEVBQW1DO1FBQ2pDSyxRQUFRLENBQUN6SCxJQUFUeUgsQ0FBY1AsYUFBYSxDQUFDM0gsQ0FBRCxDQUEzQmtJO01BQ0Q7SUFDRjtJQUNELElBQUlBLFFBQVEsQ0FBQ2pJLE1BQVRpSSxLQUFvQixDQUF4QixFQUEyQjtNQUN6QixPQUFPOUksU0FBUyxDQUFDd0ksSUFBRCxDQUFoQjtJQUNELENBRkQsTUFFTztNQUNMeEksU0FBUyxDQUFDd0ksSUFBRCxDQUFUeEksR0FBa0I4SSxRQUFsQjlJO0lBQ0Q7RUFDRjtBQUNGLENBakJEaUk7QUFtQkEsU0FBU2MsS0FBVCxDQUFlUCxJQUFmLEVBQXFCO0VBQ25CLEtBQUtBLElBQUwsR0FBWUEsSUFBWjtFQUNBLEtBQUtGLE1BQUwsR0FBYzFHLFNBQWQ7QUFDRDtBQUVELE1BTFNtSCxLQUFUO0FBS0EsU0FBU0MsWUFBVCxDQUFzQlIsSUFBdEIsRUFBNEI1SSxPQUE1QixFQUFxQztFQUNuQ21KLEtBQUssQ0FBQ25DLElBQU5tQyxDQUFXLElBQVhBLEVBQWlCUCxJQUFqQk87RUFDQSxLQUFLbk0sSUFBTCxHQUFZZ0QsT0FBTyxDQUFDaEQsSUFBcEI7RUFDQSxLQUFLcU0sV0FBTCxHQUFtQnJKLE9BQU8sQ0FBQ3FKLFdBQTNCO0FBQ0Q7QUFFREQsTUFOU0EsWUFBVDtBQU1BQSxZQUFZLENBQUM5RyxTQUFiOEcsR0FBeUJ6SyxNQUFNLENBQUNvSCxNQUFQcEgsQ0FBY3dLLEtBQUssQ0FBQzdHLFNBQXBCM0QsQ0FBekJ5SztBQUVBLFNBQVNFLGVBQVQsQ0FBeUJWLElBQXpCLEVBQStCNUksT0FBL0IsRUFBd0M7RUFDdENtSixLQUFLLENBQUNuQyxJQUFObUMsQ0FBVyxJQUFYQSxFQUFpQlAsSUFBakJPO0VBQ0EsS0FBS2xMLE1BQUwsR0FBYytCLE9BQU8sQ0FBQy9CLE1BQXRCO0VBQ0EsS0FBSzBGLFVBQUwsR0FBa0IzRCxPQUFPLENBQUMyRCxVQUExQjtFQUNBLEtBQUtnRCxPQUFMLEdBQWUzRyxPQUFPLENBQUMyRyxPQUF2QjtBQUNEO0FBRUQyQyxPQVBTQSxlQUFUO0FBT0FBLGVBQWUsQ0FBQ2hILFNBQWhCZ0gsR0FBNEIzSyxNQUFNLENBQUNvSCxNQUFQcEgsQ0FBY3dLLEtBQUssQ0FBQzdHLFNBQXBCM0QsQ0FBNUIySztBQUVBLElBQUlDLE9BQU8sR0FBRyxDQUFDLENBQWY7QUFDQSxJQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFDQSxJQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUNBLElBQUlDLE1BQU0sR0FBRyxDQUFiO0FBRUEsSUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBaEI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsQ0FBbEI7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLElBQUlDLFdBQVcsR0FBRyxDQUFsQjtBQUNBLElBQUlDLEtBQUssR0FBRyxDQUFaO0FBRUEsSUFBSUMsaUJBQWlCLEdBQUcsK0NBQXhCO0FBRUEsSUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxRQUF2QjtBQUVBLElBQUlDLGFBQWEsR0FBYkEsc0JBQWdCLENBQVU3RSxLQUFWLEVBQWlCOEUsR0FBakIsRUFBc0I7RUFDeEMsSUFBSUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNoRixLQUFELEVBQVEsRUFBUixDQUFoQjtFQUNBLElBQUkrRSxDQUFDLEtBQUtBLENBQVYsRUFBYTtJQUNYQSxDQUFDLEdBQUdELEdBQUpDO0VBQ0Q7RUFDRCxPQUFPRSxhQUFhLENBQUNGLENBQUQsQ0FBcEI7QUFDRCxDQU5EO0FBT0EsSUFBSUUsYUFBYSxHQUFiQSxzQkFBZ0IsQ0FBVUYsQ0FBVixFQUFhO0VBQy9CLE9BQU9HLElBQUksQ0FBQ0MsR0FBTEQsQ0FBU0EsSUFBSSxDQUFDRSxHQUFMRixDQUFTSCxDQUFURyxFQUFZUCxnQkFBWk8sQ0FBVEEsRUFBd0NOLGdCQUF4Q00sQ0FBUDtBQUNELENBRkQ7QUFJQSxJQUFJRyxJQUFJLEdBQUpBLGFBQU8sQ0FBVXJHLElBQVYsRUFBZ0JzRyxDQUFoQixFQUFtQnBMLEtBQW5CLEVBQTBCO0VBQ25DLElBQUk7SUFDRixJQUFJLE9BQU9vTCxDQUFQLEtBQWEsVUFBakIsRUFBNkI7TUFDM0JBLENBQUMsQ0FBQzVELElBQUY0RCxDQUFPdEcsSUFBUHNHLEVBQWFwTCxLQUFib0w7SUFDRDtFQUNGLENBQUMsUUFBT3BDLENBQVAsRUFBVTtJQUNWRCxVQUFVLENBQUNDLENBQUQsQ0FBVkQ7RUFDRDtBQUNGLENBUkQ7QUFVQSxTQUFTeEwsbUJBQVQsQ0FBNkJzSCxHQUE3QixFQUFrQ3JFLE9BQWxDLEVBQTJDO0VBQ3pDcUksV0FBVyxDQUFDckIsSUFBWnFCLENBQWlCLElBQWpCQTtFQUVBLEtBQUszSCxNQUFMLEdBQWNzQixTQUFkO0VBQ0EsS0FBS25CLFNBQUwsR0FBaUJtQixTQUFqQjtFQUNBLEtBQUtwQixPQUFMLEdBQWVvQixTQUFmO0VBRUEsS0FBS3FDLEdBQUwsR0FBV3JDLFNBQVg7RUFDQSxLQUFLMEIsVUFBTCxHQUFrQjFCLFNBQWxCO0VBQ0EsS0FBS3dCLGVBQUwsR0FBdUJ4QixTQUF2QjtFQUVBLEtBQUs2SSxNQUFMLEdBQWM3SSxTQUFkO0VBRUE4SSxLQUFLLENBQUMsSUFBRCxFQUFPekcsR0FBUCxFQUFZckUsT0FBWixDQUFMOEs7QUFDRDtBQUVELE9BaEJTL04sbUJBQVQ7QUFnQkEsSUFBSWdPLGdCQUFnQixHQUNsQkMsdUJBQVNoSixTQUFUZ0osSUFBc0JwSixRQUFRLElBQUlJLFNBQWxDZ0osSUFBK0MsVUFBVXBKLFFBQVEsQ0FBQ1UsU0FEcEU7QUFHQSxTQUFTd0ksS0FBVCxDQUFlRyxFQUFmLEVBQW1CNUcsR0FBbkIsRUFBd0JyRSxPQUF4QixFQUFpQztFQUMvQnFFLEdBQUcsR0FBR3JCLE1BQU0sQ0FBQ3FCLEdBQUQsQ0FBWkE7RUFDQSxJQUFJYixlQUFlLEdBQUd4RCxPQUFPLElBQUlnQyxTQUFYaEMsSUFBd0JrTCxPQUFPLENBQUNsTCxPQUFPLENBQUN3RCxlQUFULENBQXJEO0VBRUEsSUFBSTJILFlBQVksR0FBR1osYUFBYSxDQUFDLElBQUQsQ0FBaEM7RUFDQSxJQUFJYSxnQkFBZ0IsR0FDbEJwTCxPQUFPLElBQUlnQyxTQUFYaEMsSUFBd0JBLE9BQU8sQ0FBQ29MLGdCQUFScEwsSUFBNEJnQyxTQUFwRGhDLEdBQ0ltSyxhQUFhLENBQUNuSyxPQUFPLENBQUNvTCxnQkFBVCxFQUEyQixLQUEzQixDQURqQnBMLEdBRUl1SyxhQUFhLENBQUMsS0FBRCxDQUhuQjtFQUtBLElBQUlsQixXQUFXLEdBQUcsRUFBbEI7RUFDQSxJQUFJZ0MsS0FBSyxHQUFHRixZQUFaO0VBQ0EsSUFBSUcsV0FBVyxHQUFHLEtBQWxCO0VBQ0EsSUFBSTNFLE9BQU8sR0FDVDNHLE9BQU8sSUFBSWdDLFNBQVhoQyxJQUF3QkEsT0FBTyxDQUFDMkcsT0FBUjNHLElBQW1CZ0MsU0FBM0NoQyxHQUNJL0MsSUFBSSxDQUFDQyxLQUFMRCxDQUFXQSxJQUFJLENBQUNzTyxTQUFMdE8sQ0FBZStDLE9BQU8sQ0FBQzJHLE9BQXZCMUosQ0FBWEEsQ0FESitDLEdBRUlnQyxTQUhOO0VBSUEsSUFBSXdKLGdCQUFnQixHQUNsQnhMLE9BQU8sSUFBSWdDLFNBQVhoQyxJQUF3QkEsT0FBTyxDQUFDeUwsU0FBUnpMLElBQXFCZ0MsU0FBN0NoQyxHQUNJQSxPQUFPLENBQUN5TCxTQURaekwsR0FFSW1GLGNBSE47RUFJQSxJQUFJNUIsR0FBRyxHQUNMd0gsZ0JBQWdCLElBQ2hCLEVBQUUvSyxPQUFPLElBQUlnQyxTQUFYaEMsSUFBd0JBLE9BQU8sQ0FBQ3lMLFNBQVJ6TCxJQUFxQmdDLFNBQS9DLENBREErSSxHQUVJL0ksU0FGSitJLEdBR0ksSUFBSXpILFVBQUosQ0FBZSxJQUFJa0ksZ0JBQUosRUFBZixDQUpOO0VBS0EsSUFBSUUsU0FBUyxHQUFHbkksR0FBRyxJQUFJdkIsU0FBUHVCLEdBQW1CLElBQUk0RCxjQUFKLEVBQW5CNUQsR0FBMEMsSUFBSWdELFlBQUosRUFBMUQ7RUFDQSxJQUFJb0YsY0FBYyxHQUFHM0osU0FBckI7RUFDQSxJQUFJM0IsT0FBTyxHQUFHLENBQWQ7RUFDQSxJQUFJdUwsWUFBWSxHQUFHckMsT0FBbkI7RUFDQSxJQUFJc0MsVUFBVSxHQUFHLEVBQWpCO0VBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7RUFDQSxJQUFJQyxlQUFlLEdBQUcsRUFBdEI7RUFFQSxJQUFJQyxVQUFVLEdBQUcsRUFBakI7RUFDQSxJQUFJekgsS0FBSyxHQUFHcUYsV0FBWjtFQUNBLElBQUlxQyxVQUFVLEdBQUcsQ0FBakI7RUFDQSxJQUFJQyxVQUFVLEdBQUcsQ0FBakI7RUFFQSxJQUFJdEgsT0FBTyxHQUFQQSxnQkFBVSxDQUFVM0csTUFBVixFQUFrQjBGLFVBQWxCLEVBQThCa0IsV0FBOUIsRUFBMkM4QixPQUEzQyxFQUFvRGtCLE1BQXBELEVBQTREO0lBQ3hFLElBQUkrRCxZQUFZLEtBQUtwQyxVQUFyQixFQUFpQztNQUMvQm1DLGNBQWMsR0FBRzlELE1BQWpCOEQ7TUFDQSxJQUNFMU4sTUFBTSxLQUFLLEdBQVhBLElBQ0E0RyxXQUFXLElBQUk3QyxTQURmL0QsSUFFQStMLGlCQUFpQixDQUFDbUMsSUFBbEJuQyxDQUF1Qm5GLFdBQXZCbUYsQ0FIRixFQUlFO1FBQ0E0QixZQUFZLEdBQUduQyxJQUFmbUM7UUFDQU4sV0FBVyxHQUFHLElBQWRBO1FBQ0FELEtBQUssR0FBR0YsWUFBUkU7UUFDQUosRUFBRSxDQUFDdkgsVUFBSHVILEdBQWdCeEIsSUFBaEJ3QjtRQUNBLElBQUl6TCxLQUFLLEdBQUcsSUFBSThKLGVBQUosQ0FBb0IsTUFBcEIsRUFBNEI7VUFDdENyTCxNQUFNLEVBQUVBLE1BRDhCO1VBRXRDMEYsVUFBVSxFQUFFQSxVQUYwQjtVQUd0Q2dELE9BQU8sRUFBRUE7UUFINkIsQ0FBNUIsQ0FBWjtRQUtBc0UsRUFBRSxDQUFDeEMsYUFBSHdDLENBQWlCekwsS0FBakJ5TDtRQUNBTixJQUFJLENBQUNNLEVBQUQsRUFBS0EsRUFBRSxDQUFDdkssTUFBUixFQUFnQmxCLEtBQWhCLENBQUptTDtNQUNELENBaEJELE1BZ0JPO1FBQ0wsSUFBSWxMLE9BQU8sR0FBRyxFQUFkO1FBQ0EsSUFBSXhCLE1BQU0sS0FBSyxHQUFmLEVBQW9CO1VBQ2xCLElBQUkwRixVQUFKLEVBQWdCO1lBQ2RBLFVBQVUsR0FBR0EsVUFBVSxDQUFDMUUsT0FBWDBFLENBQW1CLE1BQW5CQSxFQUEyQixHQUEzQkEsQ0FBYkE7VUFDRDtVQUNEbEUsT0FBTyxHQUNMLHlDQUNBeEIsTUFEQSxHQUVBLEdBRkEsR0FHQTBGLFVBSEEsR0FJQSw0Q0FMRmxFO1FBTUQsQ0FWRCxNQVVPO1VBQ0xBLE9BQU8sR0FDTCxnRkFDQ29GLFdBQVcsSUFBSTdDLFNBQWY2QyxHQUNHLEdBREhBLEdBRUdBLFdBQVcsQ0FBQzVGLE9BQVo0RixDQUFvQixNQUFwQkEsRUFBNEIsR0FBNUJBLENBSEosSUFJQSw0QkFMRnBGO1FBTUQ7UUFDRDhJLFVBQVUsQ0FBQyxJQUFJM0YsS0FBSixDQUFVbkQsT0FBVixDQUFELENBQVY4STtRQUNBakgsS0FBSztRQUNMLElBQUk5QixLQUFLLEdBQUcsSUFBSThKLGVBQUosQ0FBb0IsT0FBcEIsRUFBNkI7VUFDdkNyTCxNQUFNLEVBQUVBLE1BRCtCO1VBRXZDMEYsVUFBVSxFQUFFQSxVQUYyQjtVQUd2Q2dELE9BQU8sRUFBRUE7UUFIOEIsQ0FBN0IsQ0FBWjtRQUtBc0UsRUFBRSxDQUFDeEMsYUFBSHdDLENBQWlCekwsS0FBakJ5TDtRQUNBTixJQUFJLENBQUNNLEVBQUQsRUFBS0EsRUFBRSxDQUFDckssT0FBUixFQUFpQnBCLEtBQWpCLENBQUptTDtNQUNEO0lBQ0Y7RUFDRixDQWxERDtFQW9EQSxJQUFJNUYsVUFBVSxHQUFWQSxtQkFBYSxDQUFVcUgsU0FBVixFQUFxQjtJQUNwQyxJQUFJUixZQUFZLEtBQUtuQyxJQUFyQixFQUEyQjtNQUN6QixJQUFJWSxDQUFDLEdBQUcsQ0FBQyxDQUFUO01BQ0EsS0FBSyxJQUFJckosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR29MLFNBQVMsQ0FBQ25MLE1BQTlCLEVBQXNDRCxDQUFDLElBQUksQ0FBM0MsRUFBOEM7UUFDNUMsSUFBSXRDLENBQUMsR0FBRzBOLFNBQVMsQ0FBQ3pHLFVBQVZ5RyxDQUFxQnBMLENBQXJCb0wsQ0FBUjtRQUNBLElBQUkxTixDQUFDLEtBQUssS0FBS2lILFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBTmpILElBQTRCQSxDQUFDLEtBQUssS0FBS2lILFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBdEMsRUFBMEQ7VUFDeEQwRSxDQUFDLEdBQUdySixDQUFKcUo7UUFDRDtNQUNGO01BQ0QsSUFBSXhELEtBQUssR0FBRyxDQUFDd0QsQ0FBQyxLQUFLLENBQUMsQ0FBUEEsR0FBVzJCLFVBQVgzQixHQUF3QixFQUF6QixJQUErQitCLFNBQVMsQ0FBQ3RGLEtBQVZzRixDQUFnQixDQUFoQkEsRUFBbUIvQixDQUFDLEdBQUcsQ0FBdkIrQixDQUEzQztNQUNBSixVQUFVLEdBQUcsQ0FBQzNCLENBQUMsS0FBSyxDQUFDLENBQVBBLEdBQVcyQixVQUFYM0IsR0FBd0IsRUFBekIsSUFBK0IrQixTQUFTLENBQUN0RixLQUFWc0YsQ0FBZ0IvQixDQUFDLEdBQUcsQ0FBcEIrQixDQUE1Q0o7TUFDQSxJQUFJbkYsS0FBSyxLQUFLLEVBQWQsRUFBa0I7UUFDaEJ5RSxXQUFXLEdBQUcsSUFBZEE7TUFDRDtNQUNELEtBQUssSUFBSWUsUUFBUSxHQUFHLENBQXBCLEVBQXVCQSxRQUFRLEdBQUd4RixLQUFLLENBQUM1RixNQUF4QyxFQUFnRG9MLFFBQVEsSUFBSSxDQUE1RCxFQUErRDtRQUM3RCxJQUFJM04sQ0FBQyxHQUFHbUksS0FBSyxDQUFDbEIsVUFBTmtCLENBQWlCd0YsUUFBakJ4RixDQUFSO1FBQ0EsSUFBSXRDLEtBQUssS0FBS29GLFFBQVZwRixJQUFzQjdGLENBQUMsS0FBSyxLQUFLaUgsVUFBTCxDQUFnQixDQUFoQixDQUFoQyxFQUFvRDtVQUNsRHBCLEtBQUssR0FBR3FGLFdBQVJyRjtRQUNELENBRkQsTUFFTztVQUNMLElBQUlBLEtBQUssS0FBS29GLFFBQWQsRUFBd0I7WUFDdEJwRixLQUFLLEdBQUdxRixXQUFSckY7VUFDRDtVQUNELElBQUk3RixDQUFDLEtBQUssS0FBS2lILFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBTmpILElBQTRCQSxDQUFDLEtBQUssS0FBS2lILFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBdEMsRUFBMEQ7WUFDeEQsSUFBSXBCLEtBQUssS0FBS3FGLFdBQWQsRUFBMkI7Y0FDekIsSUFBSXJGLEtBQUssS0FBS3NGLEtBQWQsRUFBcUI7Z0JBQ25CcUMsVUFBVSxHQUFHRyxRQUFRLEdBQUcsQ0FBeEJIO2NBQ0Q7Y0FDRCxJQUFJSSxLQUFLLEdBQUd6RixLQUFLLENBQUNDLEtBQU5ELENBQVlvRixVQUFacEYsRUFBd0JxRixVQUFVLEdBQUcsQ0FBckNyRixDQUFaO2NBQ0EsSUFBSXZCLEtBQUssR0FBR3VCLEtBQUssQ0FBQ0MsS0FBTkQsQ0FDVnFGLFVBQVUsSUFDUEEsVUFBVSxHQUFHRyxRQUFiSCxJQUNEckYsS0FBSyxDQUFDbEIsVUFBTmtCLENBQWlCcUYsVUFBakJyRixNQUFpQyxJQUFJbEIsVUFBSixDQUFlLENBQWYsQ0FEaEN1RyxHQUVHLENBRkhBLEdBR0csQ0FKSSxDQURBckYsRUFNVndGLFFBTlV4RixDQUFaO2NBUUEsSUFBSXlGLEtBQUssS0FBSyxNQUFkLEVBQXNCO2dCQUNwQlQsVUFBVSxJQUFJLElBQWRBO2dCQUNBQSxVQUFVLElBQUl2RyxLQUFkdUc7Y0FDRCxDQUhELE1BR08sSUFBSVMsS0FBSyxLQUFLLElBQWQsRUFBb0I7Z0JBQ3pCUixpQkFBaUIsR0FBR3hHLEtBQXBCd0c7Y0FDRCxDQUZNLE1BRUEsSUFBSVEsS0FBSyxLQUFLLE9BQWQsRUFBdUI7Z0JBQzVCUCxlQUFlLEdBQUd6RyxLQUFsQnlHO2NBQ0QsQ0FGTSxNQUVBLElBQUlPLEtBQUssS0FBSyxPQUFkLEVBQXVCO2dCQUM1Qm5CLFlBQVksR0FBR2hCLGFBQWEsQ0FBQzdFLEtBQUQsRUFBUTZGLFlBQVIsQ0FBNUJBO2dCQUNBRSxLQUFLLEdBQUdGLFlBQVJFO2NBQ0QsQ0FITSxNQUdBLElBQUlpQixLQUFLLEtBQUssa0JBQWQsRUFBa0M7Z0JBQ3ZDbEIsZ0JBQWdCLEdBQUdqQixhQUFhLENBQUM3RSxLQUFELEVBQVE4RixnQkFBUixDQUFoQ0E7Z0JBQ0EsSUFBSS9LLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtrQkFDakJvRSxZQUFZLENBQUNwRSxPQUFELENBQVpvRTtrQkFDQXBFLE9BQU8sR0FBR2tCLFVBQVUsQ0FBQyxZQUFZO29CQUMvQjJELFNBQVM7a0JBQ1YsQ0FGbUIsRUFFakJrRyxnQkFGaUIsQ0FBcEIvSztnQkFHRDtjQUNGO1lBQ0Y7WUFDRCxJQUFJa0UsS0FBSyxLQUFLcUYsV0FBZCxFQUEyQjtjQUN6QixJQUFJaUMsVUFBVSxLQUFLLEVBQW5CLEVBQXVCO2dCQUNyQnhDLFdBQVcsR0FBR3lDLGlCQUFkekM7Z0JBQ0EsSUFBSTBDLGVBQWUsS0FBSyxFQUF4QixFQUE0QjtrQkFDMUJBLGVBQWUsR0FBRyxTQUFsQkE7Z0JBQ0Q7Z0JBQ0QsSUFBSXZNLEtBQUssR0FBRyxJQUFJNEosWUFBSixDQUFpQjJDLGVBQWpCLEVBQWtDO2tCQUM1Qy9PLElBQUksRUFBRTZPLFVBQVUsQ0FBQy9FLEtBQVgrRSxDQUFpQixDQUFqQkEsQ0FEc0M7a0JBRTVDeEMsV0FBVyxFQUFFeUM7Z0JBRitCLENBQWxDLENBQVo7Z0JBSUFiLEVBQUUsQ0FBQ3hDLGFBQUh3QyxDQUFpQnpMLEtBQWpCeUw7Z0JBQ0EsSUFBSWMsZUFBZSxLQUFLLFNBQXhCLEVBQW1DO2tCQUNqQ3BCLElBQUksQ0FBQ00sRUFBRCxFQUFLQSxFQUFFLENBQUNwSyxTQUFSLEVBQW1CckIsS0FBbkIsQ0FBSm1MO2dCQUNEO2dCQUNELElBQUlpQixZQUFZLEtBQUtsQyxNQUFyQixFQUE2QjtrQkFDM0I7Z0JBQ0Q7Y0FDRjtjQUNEbUMsVUFBVSxHQUFHLEVBQWJBO2NBQ0FFLGVBQWUsR0FBRyxFQUFsQkE7WUFDRDtZQUNEeEgsS0FBSyxHQUFHN0YsQ0FBQyxLQUFLLEtBQUtpSCxVQUFMLENBQWdCLENBQWhCLENBQU5qSCxHQUEyQmlMLFFBQTNCakwsR0FBc0NrTCxXQUE5Q3JGO1VBQ0QsQ0F4REQsTUF3RE87WUFDTCxJQUFJQSxLQUFLLEtBQUtxRixXQUFkLEVBQTJCO2NBQ3pCcUMsVUFBVSxHQUFHSSxRQUFiSjtjQUNBMUgsS0FBSyxHQUFHc0YsS0FBUnRGO1lBQ0Q7WUFDRCxJQUFJQSxLQUFLLEtBQUtzRixLQUFkLEVBQXFCO2NBQ25CLElBQUluTCxDQUFDLEtBQUssSUFBSWlILFVBQUosQ0FBZSxDQUFmLENBQVYsRUFBNkI7Z0JBQzNCdUcsVUFBVSxHQUFHRyxRQUFRLEdBQUcsQ0FBeEJIO2dCQUNBM0gsS0FBSyxHQUFHdUYsV0FBUnZGO2NBQ0Q7WUFDRixDQUxELE1BS08sSUFBSUEsS0FBSyxLQUFLdUYsV0FBZCxFQUEyQjtjQUNoQ3ZGLEtBQUssR0FBR3dGLEtBQVJ4RjtZQUNEO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7RUFDRixDQS9GRDtFQWlHQSxJQUFJUyxRQUFRLEdBQVJBLGlCQUFXLEdBQVk7SUFDekIsSUFBSTRHLFlBQVksS0FBS25DLElBQWpCbUMsSUFBeUJBLFlBQVksS0FBS3BDLFVBQTlDLEVBQTBEO01BQ3hEb0MsWUFBWSxHQUFHckMsT0FBZnFDO01BQ0EsSUFBSXZMLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtRQUNqQm9FLFlBQVksQ0FBQ3BFLE9BQUQsQ0FBWm9FO1FBQ0FwRSxPQUFPLEdBQUcsQ0FBVkE7TUFDRDtNQUNEQSxPQUFPLEdBQUdrQixVQUFVLENBQUMsWUFBWTtRQUMvQjJELFNBQVM7TUFDVixDQUZtQixFQUVqQm1HLEtBRmlCLENBQXBCaEw7TUFHQWdMLEtBQUssR0FBR2QsYUFBYSxDQUFDQyxJQUFJLENBQUNDLEdBQUxELENBQVNXLFlBQVksR0FBRyxFQUF4QlgsRUFBNEJhLEtBQUssR0FBRyxDQUFwQ2IsQ0FBRCxDQUFyQmE7TUFFQUosRUFBRSxDQUFDdkgsVUFBSHVILEdBQWdCekIsVUFBaEJ5QjtNQUNBLElBQUl6TCxLQUFLLEdBQUcsSUFBSTJKLEtBQUosQ0FBVSxPQUFWLENBQVo7TUFDQThCLEVBQUUsQ0FBQ3hDLGFBQUh3QyxDQUFpQnpMLEtBQWpCeUw7TUFDQU4sSUFBSSxDQUFDTSxFQUFELEVBQUtBLEVBQUUsQ0FBQ3JLLE9BQVIsRUFBaUJwQixLQUFqQixDQUFKbUw7SUFDRDtFQUNGLENBakJEO0VBbUJBLElBQUlySixLQUFLLEdBQUxBLGNBQVEsR0FBWTtJQUN0QnNLLFlBQVksR0FBR2xDLE1BQWZrQztJQUNBLElBQUlELGNBQWMsSUFBSTNKLFNBQXRCLEVBQWlDO01BQy9CMkosY0FBYztNQUNkQSxjQUFjLEdBQUczSixTQUFqQjJKO0lBQ0Q7SUFDRCxJQUFJdEwsT0FBTyxLQUFLLENBQWhCLEVBQW1CO01BQ2pCb0UsWUFBWSxDQUFDcEUsT0FBRCxDQUFab0U7TUFDQXBFLE9BQU8sR0FBRyxDQUFWQTtJQUNEO0lBQ0Q0SyxFQUFFLENBQUN2SCxVQUFIdUgsR0FBZ0J2QixNQUFoQnVCO0VBQ0QsQ0FYRDtFQWFBLElBQUkvRixTQUFTLEdBQVRBLGtCQUFZLEdBQVk7SUFDMUI3RSxPQUFPLEdBQUcsQ0FBVkE7SUFFQSxJQUFJdUwsWUFBWSxLQUFLckMsT0FBckIsRUFBOEI7TUFDNUIsSUFBSSxDQUFDK0IsV0FBRCxJQUFnQkssY0FBYyxJQUFJM0osU0FBdEMsRUFBaUQ7UUFDL0N1RyxVQUFVLENBQ1IsSUFBSTNGLEtBQUosQ0FDRSx3QkFDRXdJLGdCQURGLEdBRUUsOEJBSEosQ0FEUSxDQUFWN0M7UUFPQW9ELGNBQWM7UUFDZEEsY0FBYyxHQUFHM0osU0FBakIySjtNQUNELENBVkQsTUFVTztRQUNMTCxXQUFXLEdBQUcsS0FBZEE7UUFDQWpMLE9BQU8sR0FBR2tCLFVBQVUsQ0FBQyxZQUFZO1VBQy9CMkQsU0FBUztRQUNWLENBRm1CLEVBRWpCa0csZ0JBRmlCLENBQXBCL0s7TUFHRDtNQUNEO0lBQ0Q7SUFFRGlMLFdBQVcsR0FBRyxLQUFkQTtJQUNBakwsT0FBTyxHQUFHa0IsVUFBVSxDQUFDLFlBQVk7TUFDL0IyRCxTQUFTO0lBQ1YsQ0FGbUIsRUFFakJrRyxnQkFGaUIsQ0FBcEIvSztJQUlBdUwsWUFBWSxHQUFHcEMsVUFBZm9DO0lBQ0FDLFVBQVUsR0FBRyxFQUFiQTtJQUNBRSxlQUFlLEdBQUcsRUFBbEJBO0lBQ0FELGlCQUFpQixHQUFHekMsV0FBcEJ5QztJQUNBRSxVQUFVLEdBQUcsRUFBYkE7SUFDQUMsVUFBVSxHQUFHLENBQWJBO0lBQ0FDLFVBQVUsR0FBRyxDQUFiQTtJQUNBM0gsS0FBSyxHQUFHcUYsV0FBUnJGLENBRUE7SUFDQTtJQUNBLElBQUlnSSxVQUFVLEdBQUdsSSxHQUFqQjtJQUNBLElBQUlBLEdBQUcsQ0FBQ3lDLEtBQUp6QyxDQUFVLENBQVZBLEVBQWEsQ0FBYkEsTUFBb0IsT0FBcEJBLElBQStCQSxHQUFHLENBQUN5QyxLQUFKekMsQ0FBVSxDQUFWQSxFQUFhLENBQWJBLE1BQW9CLE9BQXZELEVBQWdFO01BQzlELElBQUlnRixXQUFXLEtBQUssRUFBcEIsRUFBd0I7UUFDdEJrRCxVQUFVLElBQ1IsQ0FBQ2xJLEdBQUcsQ0FBQ3RGLE9BQUpzRixDQUFZLEdBQVpBLE1BQXFCLENBQUMsQ0FBdEJBLEdBQTBCLEdBQTFCQSxHQUFnQyxHQUFqQyxJQUNBLGNBREEsR0FFQW1JLGtCQUFrQixDQUFDbkQsV0FBRCxDQUhwQmtEO01BSUQ7SUFDRjtJQUNELElBQUlFLGNBQWMsR0FBRyxFQUFyQjtJQUNBQSxjQUFjLENBQUMsUUFBRCxDQUFkQSxHQUEyQixtQkFBM0JBO0lBQ0EsSUFBSTlGLE9BQU8sSUFBSTNFLFNBQWYsRUFBMEI7TUFDeEIsS0FBSyxJQUFJb0QsSUFBVCxJQUFpQnVCLE9BQWpCLEVBQTBCO1FBQ3hCLElBQUloSSxNQUFNLENBQUMyRCxTQUFQM0QsQ0FBaUJvSSxjQUFqQnBJLENBQWdDcUksSUFBaENySSxDQUFxQ2dJLE9BQXJDaEksRUFBOEN5RyxJQUE5Q3pHLENBQUosRUFBeUQ7VUFDdkQ4TixjQUFjLENBQUNySCxJQUFELENBQWRxSCxHQUF1QjlGLE9BQU8sQ0FBQ3ZCLElBQUQsQ0FBOUJxSDtRQUNEO01BQ0Y7SUFDRjtJQUNELElBQUk7TUFDRmYsU0FBUyxDQUFDdkgsSUFBVnVILENBQ0VuSSxHQURGbUksRUFFRTlHLE9BRkY4RyxFQUdFM0csVUFIRjJHLEVBSUUxRyxRQUpGMEcsRUFLRWEsVUFMRmIsRUFNRWxJLGVBTkZrSSxFQU9FZSxjQVBGZjtJQVNELENBQUMsUUFBT3JNLEtBQVAsRUFBYztNQUNkaUMsS0FBSztNQUNMLE1BQU1qQyxLQUFOO0lBQ0Q7RUFDRixDQXZFRDtFQXlFQTRMLEVBQUUsQ0FBQzVHLEdBQUg0RyxHQUFTNUcsR0FBVDRHO0VBQ0FBLEVBQUUsQ0FBQ3ZILFVBQUh1SCxHQUFnQnpCLFVBQWhCeUI7RUFDQUEsRUFBRSxDQUFDekgsZUFBSHlILEdBQXFCekgsZUFBckJ5SDtFQUNBQSxFQUFFLENBQUNKLE1BQUhJLEdBQVkzSixLQUFaMko7RUFFQS9GLFNBQVM7QUFDVjtBQUVEbkksbUJBQW1CLENBQUN1RixTQUFwQnZGLEdBQWdDNEIsTUFBTSxDQUFDb0gsTUFBUHBILENBQWMwSixXQUFXLENBQUMvRixTQUExQjNELENBQWhDNUI7QUFDQUEsbUJBQW1CLENBQUN1RixTQUFwQnZGLENBQThCeU0sVUFBOUJ6TSxHQUEyQ3lNLFVBQTNDek07QUFDQUEsbUJBQW1CLENBQUN1RixTQUFwQnZGLENBQThCME0sSUFBOUIxTSxHQUFxQzBNLElBQXJDMU07QUFDQUEsbUJBQW1CLENBQUN1RixTQUFwQnZGLENBQThCMk0sTUFBOUIzTSxHQUF1QzJNLE1BQXZDM007QUFDQUEsbUJBQW1CLENBQUN1RixTQUFwQnZGLENBQThCdUUsS0FBOUJ2RSxHQUFzQyxZQUFZO0VBQ2hELEtBQUs4TixNQUFMO0FBQ0QsQ0FGRDlOO0FBSUFBLG1CQUFtQixDQUFDeU0sVUFBcEJ6TSxHQUFpQ3lNLFVBQWpDek07QUFDQUEsbUJBQW1CLENBQUMwTSxJQUFwQjFNLEdBQTJCME0sSUFBM0IxTTtBQUNBQSxtQkFBbUIsQ0FBQzJNLE1BQXBCM00sR0FBNkIyTSxNQUE3QjNNO0FBQ0FBLG1CQUFtQixDQUFDdUYsU0FBcEJ2RixDQUE4QnlHLGVBQTlCekcsR0FBZ0RpRixTQUFoRGpGO2VBRWVBLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQ3I4QmY7QUFDQTtBQUNBO0FBQ08sU0FBUzJQLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0VBQ3ZDO0VBQUMsQ0FBQzlQLE1BQU0sQ0FBQytQLHFCQUFQL1AsSUFBZ0MwRSxVQUFqQyxFQUE2QyxZQUFZO0lBQ3hELEtBQ0UsSUFBSXNMLENBQUMsR0FBRzFQLFFBQVEsQ0FBQzJQLGdCQUFUM1AsQ0FBMEIsdUJBQTFCQSxDQUFSLEVBQTRENkQsQ0FBQyxHQUFHNkwsQ0FBQyxDQUFDNUwsTUFEcEUsRUFFRUQsQ0FBQyxFQUZILEdBSUU7TUFDQTZMLENBQUMsQ0FBQzdMLENBQUQsQ0FBRDZMLENBQUtFLFVBQUxGLENBQWdCRyxXQUFoQkgsQ0FBNEJBLENBQUMsQ0FBQzdMLENBQUQsQ0FBN0I2TDtJQUNEO0lBQ0QsSUFBSUYsUUFBSixFQUFjO01BQ1pBLFFBQVE7SUFDVDtFQUNGLENBWEE7QUFZRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2REO0FBQ0EsOElBSEE7QUFLQSxJQUFJTSxTQUFKO0FBQ08sSUFBSUMsV0FBSjs7QUFFQSxTQUFTQyxTQUFULEdBQXFCO0VBQzFCLElBQUlGLFNBQUosRUFBZUEsU0FBUyxDQUFDM0wsS0FBVjJMO0VBQ2ZBLFNBQVMsR0FBRyxJQUFaQTtBQUNEO0FBRU0sU0FBU0csU0FBVCxDQUFtQjlQLFdBQW5CLEVBQWdDK1AsVUFBaEMsRUFBNENoQyxLQUE1QyxFQUFtRDtFQUN4RCxJQUFNaUMsUUFBUSxHQUFHRCxVQUFVLEVBQTNCLENBRUE7RUFDQSxJQUFJQyxRQUFRLEtBQUtKLFdBQWJJLElBQTRCLENBQUNqQyxLQUFqQyxFQUF3QztFQUN4QyxpQ0FBVyxHQUFHaUMsUUFBZCxDQUNBO0VBQ0FILFNBQVM7RUFFVCxJQUFNOUksR0FBRyxhQUFNL0csV0FBWSxxQ0FBMEI0UCxXQUFZLENBQWpFO0VBQ0FELFNBQVMsR0FBRyx3Q0FBc0I7SUFBRTNOLElBQUksRUFBRStFLEdBQVI7SUFBYWhFLE9BQU8sRUFBRSxJQUF0QjtJQUE0QnNCLFFBQVEsRUFBRTtFQUF0QyxDQUF0QixDQUFac0w7RUFFQUEsU0FBUyxDQUFDMU4sa0JBQVYwTixDQUE4QnpOLGVBQUQsRUFBVztJQUN0QyxJQUFJQSxLQUFLLENBQUN4QyxJQUFOd0MsQ0FBV1QsT0FBWFMsQ0FBbUIsR0FBbkJBLE1BQTRCLENBQUMsQ0FBakMsRUFBb0M7SUFDcEMsSUFBSTtNQUNGLElBQU0rTixPQUFPLEdBQUd0USxJQUFJLENBQUNDLEtBQUxELENBQVd1QyxLQUFLLENBQUN4QyxJQUFqQkMsQ0FBaEI7TUFDQSxJQUFJc1EsT0FBTyxDQUFDQyxPQUFaLEVBQXFCO1FBQ25CO1FBQ0E7UUFDQSx5QkFBTXRPLFFBQVEsQ0FBQ3VPLElBQWYsRUFBcUI7VUFDbkJuRyxXQUFXLEVBQUU7UUFETSxDQUFyQixFQUVHRSxJQUZILENBRVNrRyxpQkFBRCxFQUFhO1VBQ25CLElBQUlBLE9BQU8sQ0FBQ3pQLE1BQVJ5UCxLQUFtQixHQUF2QixFQUE0QjtZQUMxQnhPLFFBQVEsQ0FBQ0MsTUFBVEQ7VUFDRDtRQUNGLENBTkQ7TUFPRDtJQUNGLENBQUMsUUFBT3lPLEdBQVAsRUFBWTtNQUNadk8sT0FBTyxDQUFDQyxLQUFSRCxDQUFjLDRDQUFkQSxFQUE0RHVPLEdBQTVEdk87SUFDRDtFQUNGLENBbEJENk47QUFtQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2FtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xyXG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVqZWN0KGVycm9yKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChpbmZvLmRvbmUpIHtcclxuICAgIHJlc29sdmUodmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XHJcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XHJcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgIFwiZGVmYXVsdFwiOiBvYmpcclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj1ufHx7fSxuZXcgUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBzPW5ldyBYTUxIdHRwUmVxdWVzdCxvPVtdLHU9W10saT17fSxhPWZ1bmN0aW9uKCl7cmV0dXJue29rOjI9PShzLnN0YXR1cy8xMDB8MCksc3RhdHVzVGV4dDpzLnN0YXR1c1RleHQsc3RhdHVzOnMuc3RhdHVzLHVybDpzLnJlc3BvbnNlVVJMLHRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMucmVzcG9uc2VUZXh0KX0sanNvbjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoSlNPTi5wYXJzZShzLnJlc3BvbnNlVGV4dCkpfSxibG9iOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcy5yZXNwb25zZV0pKX0sY2xvbmU6YSxoZWFkZXJzOntrZXlzOmZ1bmN0aW9uKCl7cmV0dXJuIG99LGVudHJpZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBpW2UudG9Mb3dlckNhc2UoKV19LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpaW4gaX19fX07Zm9yKHZhciBsIGluIHMub3BlbihuLm1ldGhvZHx8XCJnZXRcIixlLCEwKSxzLm9ubG9hZD1mdW5jdGlvbigpe3MuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLGZ1bmN0aW9uKGUsbix0KXtvLnB1c2gobj1uLnRvTG93ZXJDYXNlKCkpLHUucHVzaChbbix0XSksaVtuXT1pW25dP2lbbl0rXCIsXCIrdDp0fSksdChhKCkpfSxzLm9uZXJyb3I9cixzLndpdGhDcmVkZW50aWFscz1cImluY2x1ZGVcIj09bi5jcmVkZW50aWFscyxuLmhlYWRlcnMpcy5zZXRSZXF1ZXN0SGVhZGVyKGwsbi5oZWFkZXJzW2xdKTtzLnNlbmQobi5ib2R5fHxudWxsKX0pfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5qcy5tYXBcclxuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuaW1wb3J0IEV2ZW50U291cmNlUG9seWZpbGwgZnJvbSAnLi9ldmVudC1zb3VyY2UtcG9seWZpbGwnXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5pbXBvcnQgeyBzZXR1cFBpbmcgfSBmcm9tICcuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzJ1xuaW1wb3J0IHsgZGlzcGxheUNvbnRlbnQgfSBmcm9tICcuL2ZvdWMnXG5cbmlmICghd2luZG93LkV2ZW50U291cmNlKSB7XG4gIHdpbmRvdy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlUG9seWZpbGxcbn1cblxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudClcbmxldCB7IGFzc2V0UHJlZml4LCBwYWdlIH0gPSBkYXRhXG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8ICcnXG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmxldCBjdXJIYXNoID0gX193ZWJwYWNrX2hhc2hfX1xuY29uc3QgaG90VXBkYXRlUGF0aCA9XG4gIGFzc2V0UHJlZml4ICsgKGFzc2V0UHJlZml4LmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJykgKyAnX25leHQvc3RhdGljL3dlYnBhY2svJ1xuXG4vLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCkge1xuICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxuICAvLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICByZXR1cm4gbW9zdFJlY2VudEhhc2ggIT09IF9fd2VicGFja19oYXNoX19cbn1cblxuLy8gV2VicGFjayBkaXNhbGxvd3MgdXBkYXRlcyBpbiBvdGhlciBzdGF0ZXMuXG5mdW5jdGlvbiBjYW5BcHBseVVwZGF0ZXMoKSB7XG4gIHJldHVybiBtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZSdcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZWFkcyBjb2RlIHVwZGF0ZXMgb24gdGhlIGZseSBhbmQgaGFyZFxuLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxuYXN5bmMgZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKCkge1xuICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYClcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2VcbiAgICAvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXG4gICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKVxuICAgICAgPyBqc29uRGF0YS5jXG4gICAgICA6IE9iamVjdC5rZXlzKGpzb25EYXRhLmMpXG4gICAgKS5zb21lKChtb2QpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWBcbiAgICAgICAgKSAhPT0gLTEgfHxcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtcbiAgICAgICAgICAgIGN1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YFxuICAgICAgICAgIH1gLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpXG4gICAgICAgICkgIT09IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChwYWdlVXBkYXRlZCkge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsIGVycilcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgfVxufVxuXG5nZXRFdmVudFNvdXJjZVdyYXBwZXIoe1xuICBwYXRoOiBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXJgLFxufSkuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuXG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcbiAgICAgIGlmICghbWVzc2FnZS5oYXNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbW9zdFJlY2VudEhhc2ggPSBtZXNzYWdlLmhhc2hcbiAgICAgIHRyeUFwcGx5VXBkYXRlcygpXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnICsgZXZlbnQuZGF0YSArICdcXG4nICsgZXgpXG4gIH1cbn0pXG5cbnNldHVwUGluZyhhc3NldFByZWZpeCwgKCkgPT4gcGFnZSlcbmRpc3BsYXlDb250ZW50KClcbiIsImNvbnN0IGV2ZW50Q2FsbGJhY2tzID0gW11cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgdmFyIHNvdXJjZVxuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB2YXIgbGlzdGVuZXJzID0gW11cblxuICBpZiAoIW9wdGlvbnMudGltZW91dCkge1xuICAgIG9wdGlvbnMudGltZW91dCA9IDIwICogMTAwMFxuICB9XG5cbiAgaW5pdCgpXG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgaGFuZGxlRGlzY29ubmVjdCgpXG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpXG4gICAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZVxuICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdFxuICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJylcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpXG4gICAgfVxuXG4gICAgZXZlbnRDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGlmICghY2IudW5maWx0ZXJlZCAmJiBldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpID09PSAtMSkgcmV0dXJuXG4gICAgICBjYihldmVudClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgc291cmNlLmNsb3NlKClcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbilcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub25kZW1hbmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyOiAoY2IpID0+IHtcbiAgICAgICAgZXZlbnRDYWxsYmFja3MucHVzaChjYilcbiAgICAgIH0sXG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnRcbnZhciBSZXNwb25zZSA9IHdpbmRvdy5SZXNwb25zZVxudmFyIFRleHREZWNvZGVyID0gd2luZG93LlRleHREZWNvZGVyXG52YXIgVGV4dEVuY29kZXIgPSB3aW5kb3cuVGV4dEVuY29kZXJcbnZhciBBYm9ydENvbnRyb2xsZXIgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyXG5cbmlmIChBYm9ydENvbnRyb2xsZXIgPT0gdW5kZWZpbmVkKSB7XG4gIEFib3J0Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNpZ25hbCA9IG51bGxcbiAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24gKCkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCkge1xuICB0aGlzLmJpdHNOZWVkZWQgPSAwXG4gIHRoaXMuY29kZVBvaW50ID0gMFxufVxuXG5UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAob2N0ZXRzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCwgc2hpZnQsIG9jdGV0c0NvdW50KSB7XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDA4MCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgwN2ZmXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweDA4MDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZDdmZikgfHxcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweGUwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZmZmZilcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDEwMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDEwZmZmZlxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PiA2ID4gMTUgPyAzIDogY29kZVBvaW50ID4gMzEgPyAyIDogMVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xuICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICB2YXIgUkVQTEFDRVIgPSAweGZmZmRcbiAgdmFyIHN0cmluZyA9ICcnXG4gIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkXG4gIHZhciBjb2RlUG9pbnQgPSB0aGlzLmNvZGVQb2ludFxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXVxuICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG9jdGV0IDwgMTI4IHx8XG4gICAgICAgIG9jdGV0ID4gMTkxIHx8XG4gICAgICAgICF2YWxpZChcbiAgICAgICAgICAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpLFxuICAgICAgICAgIGJpdHNOZWVkZWQgLSA2LFxuICAgICAgICAgIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldFxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMVxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxXG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAyXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTVcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDNcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBiaXRzTmVlZGVkICE9PSAwICYmXG4gICAgICAgICF2YWxpZChjb2RlUG9pbnQsIGJpdHNOZWVkZWQsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYml0c05lZWRlZCAtPSA2XG4gICAgICBjb2RlUG9pbnQgPSAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpID4+IDEwKSlcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgMHhkYzAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSAmIDB4M2ZmKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRoaXMuYml0c05lZWRlZCA9IGJpdHNOZWVkZWRcbiAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnRcbiAgcmV0dXJuIHN0cmluZ1xufVxuXG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd0ZXN0JyksIHtcbiAgICAgICAgc3RyZWFtOiB0cnVlLFxuICAgICAgfSkgPT09ICd0ZXN0J1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gSUUsIEVkZ2VcbmlmIChcbiAgVGV4dERlY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gIFRleHRFbmNvZGVyID09IHVuZGVmaW5lZCB8fFxuICAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKVxuKSB7XG4gIFRleHREZWNvZGVyID0gVGV4dERlY29kZXJQb2x5ZmlsbFxufVxuXG52YXIgayA9IGZ1bmN0aW9uICgpIHt9XG5cbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgdGhpcy5yZXNwb25zZVR5cGUgPSAnJ1xuICB0aGlzLnJlYWR5U3RhdGUgPSAwXG4gIHRoaXMuc3RhdHVzID0gMFxuICB0aGlzLnN0YXR1c1RleHQgPSAnJ1xuICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnXG4gIHRoaXMub25wcm9ncmVzcyA9IGtcbiAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gIHRoaXMuX2NvbnRlbnRUeXBlID0gJydcbiAgdGhpcy5feGhyID0geGhyXG4gIHRoaXMuX3NlbmRUaW1lb3V0ID0gMFxuICB0aGlzLl9hYm9ydCA9IGtcbn1cblxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuICB0aGlzLl9hYm9ydCh0cnVlKVxuXG4gIHZhciB0aGF0ID0gdGhpc1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIHZhciBzdGF0ZSA9IDFcbiAgdmFyIHRpbWVvdXQgPSAwXG5cbiAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbiAoc2lsZW50KSB7XG4gICAgaWYgKHRoYXQuX3NlbmRUaW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpXG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIHhoci5vbmxvYWQgPSBrXG4gICAgICB4aHIub25lcnJvciA9IGtcbiAgICAgIHhoci5vbmFib3J0ID0ga1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBrXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZSA9IDBcbiAgfVxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgLy8gc3RhdGUgPSAyO1xuICAgICAgdmFyIHN0YXR1cyA9IDBcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0gJydcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIElFIDwgMTAgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDIgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDNcbiAgICAgICAgICAvLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG4gICAgICAgICAgc3RhdHVzID0gMFxuICAgICAgICAgIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gMjAwXG4gICAgICAgIHN0YXR1c1RleHQgPSAnT0snXG4gICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmNvbnRlbnRUeXBlXG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XG4gICAgICAgIHN0YXRlID0gMlxuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyXG4gICAgICAgIHRoYXQuc3RhdHVzID0gc3RhdHVzXG4gICAgICAgIHRoYXQuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHRcbiAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZVxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIG9uU3RhcnQoKVxuICAgIGlmIChzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSAzXG4gICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gJydcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDNcbiAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0XG4gICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG4gICAgb25Qcm9ncmVzcygpXG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgIH1cbiAgfVxuICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBPcGVyYSAxMlxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIG9uRmluaXNoKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgb25Qcm9ncmVzcygpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgIG9uU3RhcnQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgNTAwKVxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgb25Qcm9ncmVzcygpXG4gICAgfVxuICB9XG5cbiAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcbiAgeGhyLm9ubG9hZCA9IG9uRmluaXNoXG4gIHhoci5vbmVycm9yID0gb25GaW5pc2hcbiAgLy8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3IsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxuICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4MDIwMFxuICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXG4gIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xuICB4aHIub25hYm9ydCA9IG9uRmluaXNoXG5cbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG4gIGlmIChcbiAgICAhKCdzZW5kQXNCaW5hcnknIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpXG4gICkge1xuICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzc1xuICB9XG5cbiAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuICAvLyBPcGVyYSA8IDEyXG4gIC8vIEZpcmVmb3ggPCAzLjVcbiAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4gIC8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4gIC8vIHNlZSBhbHNvICM2NFxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlXG5cbiAgaWYgKCdjb250ZW50VHlwZScgaW4geGhyKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncGFkZGluZz10cnVlJ1xuICB9XG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKVxuXG4gIGlmICgncmVhZHlTdGF0ZScgaW4geGhyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4gICAgLy8gIzkxXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCAwKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYWJvcnQoZmFsc2UpXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4geGhyKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgPyB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICA6ICcnXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICAvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcbiAgaWYgKFxuICAgICEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgIGRvY3VtZW50ICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJ1xuICApIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgICB0aGF0LnNlbmQoKVxuICAgIH0sIDQpXG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy53aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gIHRyeSB7XG4gICAgLy8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxuICAgIHhoci5zZW5kKHVuZGVmaW5lZClcbiAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgLy8gU2FmYXJpIDUuMS43LCBPcGVyYSAxMlxuICAgIHRocm93IGVycm9yMVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyAweDIwKVxuICB9KVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XG4gIC8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHZhciBhcnJheSA9IGFsbC5zcGxpdCgnXFxyXFxuJylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBsaW5lID0gYXJyYXlbaV1cbiAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpXG4gICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpXG4gICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOiAnKVxuICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZVxuICB9XG4gIHRoaXMuX21hcCA9IG1hcFxufVxuSGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fbWFwW3RvTG93ZXJDYXNlKG5hbWUpXVxufVxuXG5mdW5jdGlvbiBYSFJUcmFuc3BvcnQoKSB7fVxuXG5YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybClcbiAgdmFyIG9mZnNldCA9IDBcbiAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICB2YXIgY2h1bmsgPSByZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KVxuICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGhcbiAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gIH1cbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0XG4gICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXG4gICAgICB2YXIgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICBuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgeGhyLmFib3J0KClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCdcbiAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9XG4gIH1cbiAgeGhyLnNlbmQoKVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKSB7XG4gIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzXG59XG5IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpXG59XG5cbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge31cblxuRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsIC8vIHNlZSAjMTIwXG4gIHZhciB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG4gIGZldGNoKHVybCwge1xuICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgc2lnbmFsOiBzaWduYWwsXG4gICAgY2FjaGU6ICduby1zdG9yZScsXG4gIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSxcbiAgICAgICAgbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgICAgICAgcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlYWRlclxuICAgICAgICAgICAgLnJlYWQoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IHRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgWydjYXRjaCddKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XG4gIHRoaXMuX2xpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbClcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRocm93IGVcbiAgfSwgMClcbn1cblxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQudGFyZ2V0ID0gdGhpc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbGVuZ3RoID0gdHlwZUxpc3RlbmVycy5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSB0eXBlTGlzdGVuZXJzW2ldXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvd0Vycm9yKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgdHlwZUxpc3RlbmVycyA9IFtdXG4gICAgbGlzdGVuZXJzW3R5cGVdID0gdHlwZUxpc3RlbmVyc1xuICB9XG4gIHZhciBmb3VuZCA9IGZhbHNlXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgZm91bmQgPSB0cnVlXG4gICAgfVxuICB9XG4gIGlmICghZm91bmQpIHtcbiAgICB0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsdGVyZWQgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gIT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGxpc3RlbmVyc1t0eXBlXVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNbdHlwZV0gPSBmaWx0ZXJlZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudCh0eXBlKSB7XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGFcbiAgdGhpcy5sYXN0RXZlbnRJZCA9IG9wdGlvbnMubGFzdEV2ZW50SWRcbn1cblxuTWVzc2FnZUV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG5mdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXNcbiAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0XG4gIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVyc1xufVxuXG5Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbnZhciBXQUlUSU5HID0gLTFcbnZhciBDT05ORUNUSU5HID0gMFxudmFyIE9QRU4gPSAxXG52YXIgQ0xPU0VEID0gMlxuXG52YXIgQUZURVJfQ1IgPSAtMVxudmFyIEZJRUxEX1NUQVJUID0gMFxudmFyIEZJRUxEID0gMVxudmFyIFZBTFVFX1NUQVJUID0gMlxudmFyIFZBTFVFID0gM1xuXG52YXIgY29udGVudFR5cGVSZWdFeHAgPSAvXnRleHRcXC9ldmVudFxcLXN0cmVhbTs/KFxccypjaGFyc2V0XFw9dXRmXFwtOCk/JC9pXG5cbnZhciBNSU5JTVVNX0RVUkFUSU9OID0gMTAwMFxudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMFxuXG52YXIgcGFyc2VEdXJhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgZGVmKSB7XG4gIHZhciBuID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICBpZiAobiAhPT0gbikge1xuICAgIG4gPSBkZWZcbiAgfVxuICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKVxufVxudmFyIGNsYW1wRHVyYXRpb24gPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgTUlOSU1VTV9EVVJBVElPTiksIE1BWElNVU1fRFVSQVRJT04pXG59XG5cbnZhciBmaXJlID0gZnVuY3Rpb24gKHRoYXQsIGYsIGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmLmNhbGwodGhhdCwgZXZlbnQpXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3dFcnJvcihlKVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLCBvcHRpb25zKSB7XG4gIEV2ZW50VGFyZ2V0LmNhbGwodGhpcylcblxuICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZFxuICB0aGlzLm9ubWVzc2FnZSA9IHVuZGVmaW5lZFxuICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWRcblxuICB0aGlzLnVybCA9IHVuZGVmaW5lZFxuICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWRcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuICB0aGlzLl9jbG9zZSA9IHVuZGVmaW5lZFxuXG4gIHN0YXJ0KHRoaXMsIHVybCwgb3B0aW9ucylcbn1cblxudmFyIGlzRmV0Y2hTdXBwb3J0ZWQgPVxuICBmZXRjaCAhPSB1bmRlZmluZWQgJiYgUmVzcG9uc2UgIT0gdW5kZWZpbmVkICYmICdib2R5JyBpbiBSZXNwb25zZS5wcm90b3R5cGVcblxuZnVuY3Rpb24gc3RhcnQoZXMsIHVybCwgb3B0aW9ucykge1xuICB1cmwgPSBTdHJpbmcodXJsKVxuICB2YXIgd2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscylcblxuICB2YXIgaW5pdGlhbFJldHJ5ID0gY2xhbXBEdXJhdGlvbigxMDAwKVxuICB2YXIgaGVhcnRiZWF0VGltZW91dCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBwYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCwgNDUwMDApXG4gICAgICA6IGNsYW1wRHVyYXRpb24oNDUwMDApXG5cbiAgdmFyIGxhc3RFdmVudElkID0gJydcbiAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gIHZhciB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gIHZhciBoZWFkZXJzID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSlcbiAgICAgIDogdW5kZWZpbmVkXG4gIHZhciBDdXJyZW50VHJhbnNwb3J0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWRcbiAgICAgID8gb3B0aW9ucy5UcmFuc3BvcnRcbiAgICAgIDogWE1MSHR0cFJlcXVlc3RcbiAgdmFyIHhociA9XG4gICAgaXNGZXRjaFN1cHBvcnRlZCAmJlxuICAgICEob3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkKVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSlcbiAgdmFyIHRyYW5zcG9ydCA9IHhociA9PSB1bmRlZmluZWQgPyBuZXcgRmV0Y2hUcmFuc3BvcnQoKSA6IG5ldyBYSFJUcmFuc3BvcnQoKVxuICB2YXIgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgdmFyIHRpbWVvdXQgPSAwXG4gIHZhciBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gIHZhciBkYXRhQnVmZmVyID0gJydcbiAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gJydcbiAgdmFyIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG5cbiAgdmFyIHRleHRCdWZmZXIgPSAnJ1xuICB2YXIgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICB2YXIgZmllbGRTdGFydCA9IDBcbiAgdmFyIHZhbHVlU3RhcnQgPSAwXG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgaGVhZGVycywgY2FuY2VsKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY2FuY2VsRnVuY3Rpb24gPSBjYW5jZWxcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdHVzID09PSAyMDAgJiZcbiAgICAgICAgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpXG4gICAgICApIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gT1BFTlxuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgZXMucmVhZHlTdGF0ZSA9IE9QRU5cbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnb3BlbicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICcnXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XG4gICAgICAgICAgICBzdGF0dXNUZXh0ID0gc3RhdHVzVGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIFwiICtcbiAgICAgICAgICAgIHN0YXR1cyArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgc3RhdHVzVGV4dCArXG4gICAgICAgICAgICAnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiICtcbiAgICAgICAgICAgIChjb250ZW50VHlwZSA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyAnLSdcbiAgICAgICAgICAgICAgOiBjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csICcgJykpICtcbiAgICAgICAgICAgICcuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSlcbiAgICAgICAgY2xvc2UoKVxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKHRleHRDaHVuaykge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgIHZhciBuID0gLTFcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dENodW5rLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjID0gdGV4dENodW5rLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaWYgKGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIG4gPSBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpXG4gICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSlcbiAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgY2h1bmsubGVuZ3RoOyBwb3NpdGlvbiArPSAxKSB7XG4gICAgICAgIHZhciBjID0gY2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbilcbiAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUiAmJiBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcbiAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBmaWVsZCA9IGNodW5rLnNsaWNlKGZpZWxkU3RhcnQsIHZhbHVlU3RhcnQgLSAxKVxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaHVuay5zbGljZShcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ICtcbiAgICAgICAgICAgICAgICAgICh2YWx1ZVN0YXJ0IDwgcG9zaXRpb24gJiZcbiAgICAgICAgICAgICAgICAgIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IDApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9ICdcXG4nXG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3JldHJ5Jykge1xuICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSlcbiAgICAgICAgICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaGVhcnRiZWF0VGltZW91dCcpIHtcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoZGF0YUJ1ZmZlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUJ1ZmZlci5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkOiBsYXN0RXZlbnRJZEJ1ZmZlcixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm1lc3NhZ2UsIGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gJydcbiAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlID0gYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSA/IEFGVEVSX0NSIDogRklFTERfU1RBUlRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICBpZiAoYyA9PT0gJzonLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9TVEFSVFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBWQUxVRV9TVEFSVCkge1xuICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4gfHwgY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25UaW1lb3V0KClcbiAgICAgIH0sIHJldHJ5KVxuICAgICAgcmV0cnkgPSBjbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSAqIDE2LCByZXRyeSAqIDIpKVxuXG4gICAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdlcnJvcicpXG4gICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRFxuICAgIGlmIChjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIHRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGVzLnJlYWR5U3RhdGUgPSBDTE9TRURcbiAgfVxuXG4gIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dCA9IDBcblxuICAgIGlmIChjdXJyZW50U3RhdGUgIT09IFdBSVRJTkcpIHtcbiAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93RXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ05vIGFjdGl2aXR5IHdpdGhpbiAnICtcbiAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCArXG4gICAgICAgICAgICAgICcgbWlsbGlzZWNvbmRzLiBSZWNvbm5lY3RpbmcuJ1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgaGVhcnRiZWF0VGltZW91dClcblxuICAgIGN1cnJlbnRTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICBkYXRhQnVmZmVyID0gJydcbiAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgIGxhc3RFdmVudElkQnVmZmVyID0gbGFzdEV2ZW50SWRcbiAgICB0ZXh0QnVmZmVyID0gJydcbiAgICBmaWVsZFN0YXJ0ID0gMFxuICAgIHZhbHVlU3RhcnQgPSAwXG4gICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XG4gICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxuICAgIHZhciByZXF1ZXN0VVJMID0gdXJsXG4gICAgaWYgKHVybC5zbGljZSgwLCA1KSAhPT0gJ2RhdGE6JyAmJiB1cmwuc2xpY2UoMCwgNSkgIT09ICdibG9iOicpIHtcbiAgICAgIGlmIChsYXN0RXZlbnRJZCAhPT0gJycpIHtcbiAgICAgICAgcmVxdWVzdFVSTCArPVxuICAgICAgICAgICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgK1xuICAgICAgICAgICdsYXN0RXZlbnRJZD0nICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpXG4gICAgICB9XG4gICAgfVxuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IHt9XG4gICAgcmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddID0gJ3RleHQvZXZlbnQtc3RyZWFtJ1xuICAgIGlmIChoZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tuYW1lXSA9IGhlYWRlcnNbbmFtZV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgdHJhbnNwb3J0Lm9wZW4oXG4gICAgICAgIHhocixcbiAgICAgICAgb25TdGFydCxcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgb25GaW5pc2gsXG4gICAgICAgIHJlcXVlc3RVUkwsXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2xvc2UoKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cblxuICBlcy51cmwgPSB1cmxcbiAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgZXMud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIGVzLl9jbG9zZSA9IGNsb3NlXG5cbiAgb25UaW1lb3V0KClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSlcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fY2xvc2UoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U291cmNlUG9seWZpbGxcbiIsIi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW1vdmUgTmV4dC5qcycgbm8tRk9VQyBzdHlsZXMgd29ya2Fyb3VuZCBmb3IgdXNpbmdcbi8vIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LiBJdCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgaHlkcmF0aW9uLCBvciBlbHNlXG4vLyByZW5kZXJpbmcgd29uJ3QgaGF2ZSB0aGUgY29ycmVjdCBjb21wdXRlZCB2YWx1ZXMgaW4gZWZmZWN0cy5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjaykge1xuICA7KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24gKCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLCBpID0geC5sZW5ndGg7XG4gICAgICBpLS07XG5cbiAgICApIHtcbiAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKVxuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH0pXG59XG4iLCIvKiBnbG9iYWwgbG9jYXRpb24gKi9cblxuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcblxubGV0IGV2dFNvdXJjZVxuZXhwb3J0IGxldCBjdXJyZW50UGFnZVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQaW5nKCkge1xuICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKVxuICBldnRTb3VyY2UgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgsIHBhdGhuYW1lRm4sIHJldHJ5KSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gcGF0aG5hbWVGbigpXG5cbiAgLy8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbiAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVyblxuICBjdXJyZW50UGFnZSA9IHBhdGhuYW1lXG4gIC8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxuICBjbG9zZVBpbmcoKVxuXG4gIGNvbnN0IHVybCA9IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcj9wYWdlPSR7Y3VycmVudFBhZ2V9YFxuICBldnRTb3VyY2UgPSBnZXRFdmVudFNvdXJjZVdyYXBwZXIoeyBwYXRoOiB1cmwsIHRpbWVvdXQ6IDUwMDAsIG9uZGVtYW5kOiAxIH0pXG5cbiAgZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcbiAgICAgIGlmIChwYXlsb2FkLmludmFsaWQpIHtcbiAgICAgICAgLy8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXG4gICAgICAgIGZldGNoKGxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbigocGFnZVJlcykgPT4ge1xuICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycilcbiAgICB9XG4gIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=