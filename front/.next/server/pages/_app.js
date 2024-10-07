module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/redux/dist/cjs/redux.cjs":
/*!***********************************************!*\
  !*** ./node_modules/redux/dist/cjs/redux.cjs ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  __DO_NOT_USE__ActionTypes: () => actionTypes_default,
  applyMiddleware: () => applyMiddleware,
  bindActionCreators: () => bindActionCreators,
  combineReducers: () => combineReducers,
  compose: () => compose,
  createStore: () => createStore,
  isAction: () => isAction,
  isPlainObject: () => isPlainObject,
  legacy_createStore: () => legacy_createStore
});
module.exports = __toCommonJS(src_exports);

// src/utils/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}

// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;

// src/utils/actionTypes.ts
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;

// src/utils/isPlainObject.ts
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}

// src/utils/kindOf.ts
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  const type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  const constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  let typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}

// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error( false ? undefined : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error( false ? undefined : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error( false ? undefined : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error( false ? undefined : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error( false ? undefined : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
    }
    if (isDispatching) {
      throw new Error( false ? undefined : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error( false ? undefined : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? undefined : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    }
    if (typeof action.type === "undefined") {
      throw new Error( false ? undefined : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (typeof action.type !== "string") {
      throw new Error( false ? undefined : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
    }
    if (isDispatching) {
      throw new Error( false ? undefined : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error( false ? undefined : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error( false ? undefined : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
  return createStore(reducer, preloadedState, enhancer);
}

// src/utils/warning.ts
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  const reducerKeys = Object.keys(reducers);
  const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!isPlainObject(inputState)) {
    return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
  }
  const unexpectedKeys = Object.keys(inputState).filter((key) => !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
  unexpectedKeys.forEach((key) => {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === actionTypes_default.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    const initialState = reducer(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error( false ? undefined : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    }
    if (typeof reducer(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error( false ? undefined : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (true) {
      if (typeof reducers[key] === "undefined") {
        warning(`No reducer provided for key "${key}"`);
      }
    }
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let unexpectedKeyCache;
  if (true) {
    unexpectedKeyCache = {};
  }
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (true) {
      const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        const actionType = action && action.type;
        throw new Error( false ? undefined : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
  return function(...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error( false ? undefined : `bindActionCreators expected an object or a function, but instead received: '${kindOf(actionCreators)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

// src/compose.ts
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// src/applyMiddleware.ts
function applyMiddleware(...middlewares) {
  return (createStore2) => (reducer, preloadedState) => {
    const store = createStore2(reducer, preloadedState);
    let dispatch = () => {
      throw new Error( false ? undefined : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

// src/utils/isAction.ts
function isAction(action) {
  return isPlainObject(action) && "type" in action && typeof action.type === "string";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (false);
//# sourceMappingURL=redux.cjs.map

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\nodebird_react\\front\\pages\\_app.js";
// page들에 공통처리





// App 은 index.js의 부모
// pages들의 공통 부분 설정

const App = ({
  Component
}) => {
  //index.js 의 return 부분이 여기의 component 를 의미함

  return (
    /*#__PURE__*/
    // redux 사용 시, 페이지를 provider로 감싸줘야함, 단, next는 안써도 됨
    // <Provider store={store}>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("meta", {
          charSet: "utf-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("title", {
          children: "NodeBird"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined)]
    }, void 0, true)
    // </Provider>
  );
};
App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/dist/cjs/redux.cjs");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





// reducer는 스위치문이 들어있는 함수임
// reducer는 모두 데이터 관련된거임 
// reducer 쪼개는 기준
// const initialState = {
//     user: {

//     },
//     post: {

//    }
// }

// 기본 state를 변경하고 싶을때, 늘 액션을 만들어서 히스토리를 유지하곤 변경 진행하기

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data : 'dooyoo',
// }   

// 액션을 만들어주는 함수를 만들기 (이름만 여러번 변경하고 싶을때 새로 계속 객체를 생성해야 하는게 낭비이므로)
// 동적으로 생성
// action creator
const changeNickname = data => {
  return {
    type: 'CHANGE_NICKNAME',
    data
  };
};
//changeNickname('dooyoo')
// store.dispatch(changeNickname('member kyung'))

// (이전상태, 액션) => 다음상태
// combineReducers를 이용하는 이유는 함수와 함수를 합쳐줘야하기 때문
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  index: (state = {}, action) => {
    // action은 객체임
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      // 초기화
      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  // 대문자로 시작하는 애들은 서버에서 주는 걸 의미
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};

// export const generateDummyPost = (number) => Array(number).fill().map(() => ({
//     id: shortId.generate(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName()
//     },
//     content: faker.lorem.paragraph(),
//     Images: [{
//         src: faker.image.image(),
//     }],
//     Comments: [{
//         User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//         },
//         content: faker.lorem.sentence(),
//     }],
// }));

const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// 동적 액션 트레이
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

// const dummyPost = (data) => ( {
//     // 더미데이터 id는 npm i shortid 활용해야 encounter 에러가 안남 -> id 정하기 애매할때 사용하기 좋음
//     // faker는 닉네임을 임의로 지정해줌 
//     id: data.id,
//     content: data.content,
//     User: {
//         id:1,
//         nickname: 'eunk',
//     },
//     Images: [],
//     Comments: [],
// });

// const dummyComment = (data) => ({
//     id: shortId.generate(),
//     content: data,
//     User: {
//         id:1,
//         nickname: 'eunk',
//     },
// })

//이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성을 지키면서)
// immer를 사용할때 state는 절대 건들면 안되고 draft만 조작해야 함
const reducer = (state = initialState, action) => {
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.mainPosts = action.data.concat(draft.mainPosts); // 기존 게시물에 추가
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.hasMorePosts = draft.mainPosts.length < 50; //최대 50개의 게시물만 보임
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        // ...state,
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data); // dummyPost를 앞에다가 추가해야 신규 게시물이 맨앞에서 보임
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        // const post = { ...state.mainPosts[postIndex]};
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post; 
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CAHNGE_NICKANME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadMyInfoLoading: false,
  // 유저 정보 가져오기 시도중 -> true면 로딩창 띄우기
  loadMyInfoDone: false,
  loadMyInfoError: null,
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
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CAHNGE_NICKANME_REQUEST';
const CAHNGE_NICKANME_SUCCESS = 'CAHNGE_NICKANME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

// const dummyUser = (data) => ({
//     ...data,
//     nickname : 'eunkk',
//     id: 1,
//     Posts: [{id: 1}],
//     Followings: [{nickname: 'eunkk'}, {nickname: 'suzi'}, {nickname: 'nini'},],
//     Followers: [{nickname: 'eunkk'}, {nickname: 'suzi'}, {nickname: 'nini'},],
// })

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};
const reducer = (state = initialState, action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(state, draft => {
  // 화살표 함수 return 생략 원래는 return produce임
  switch (action.type) {
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;
      draft.me = action.data;
      break;
    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;
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
      draft.me.Followings = draft.me.Followings.filter(v => v.id === action.data);
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
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      // me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      // }
      break;
    default:
      break;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true; // 이게 트루면 allow-origin-header를 정확하게 표시해야 함

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([
  // all은 배열을 받아서 한방에(동시에) 실행을 해줌
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]),
  // fork는 함수를 실행함 비동기적으로
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]) // call 동기적으로 함수 호출
  ]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);





function loadPostsAPI(data) {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/posts', data);
}
function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}
function addPostAPI(data) {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', {
    content: data
  });
}
function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data); // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
    // yield가 await과 비슷 blocking
    // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

    // yield delay(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}
function removePostAPI(data) {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete('/api/post', data);
}
function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
    // yield가 await과 비슷 blocking
    // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}
function addCommentAPI(data) {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
}
function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    // yield delay(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

// takeLatest는 클릭 실수로 2번 했을 때 혹은 100번을 눌러도 마지막꺼만 실행함 
//-> 동시에 로딩된거만 취소됨(단, 프론터서버에서만 적용, 그래서 백엔드에서 2번 저장되지 않았는지 체크 필요)
// 요청은 2번간거고 응답만 마지막꺼 한개로 받음, 요청은 취소가 안됨
// 만약 첫번째꺼만 하고 싶으면 takeLeading도 있음
function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}
function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}
function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}
function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}
function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



function loadMyInfoAPI() {
  //get, delete는 data가 없음
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user');
}
function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
    // yield delay(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}
function logInAPI(data) {
  //generate X
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/login', data);
}

// saga 명령어를 쓰는 이유 -> 테스트하기 좋음
function* logIn(action) {
  try {
    // 함수, 매개변수들
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data); // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
    // yield가 await과 비슷 blocking
    // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

    console.log("saga login");
    // yield delay(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}
function logOutAPI() {
  //generate X
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/logout');
}
function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI); // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
    // yield가 await과 비슷 blocking
    // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

    // yield delay(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}
function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user', data);
}
function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log(result);
    // yield delay(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.err(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}
function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/follow');
}
function* follow(action) {
  try {
    // const result = yield call(followAPI)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.err(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}
function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/unfollow');
}
function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.err(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

//이벤트 리스너들 잔뜩 만들어줌
// yield 특징 일회용임 -> 한번만 사용할 수 있음 -> 그래서 while 반복문을 활용함 -> 무한루프로 안빠짐 한번만 실행하기 때문
// while 대신에 take는 동기적으로 동작, takeEvery는 비동기적으로 동작
function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}
function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}
function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}
function* watchLogIn() {
  // throttle -> 2초 안에 여러번해도 무응답, 2초 안에 한번만 적용 
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn); //take: LOG_IN액션이 실행될때까지 기다림
}
function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}
function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}
function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/dist/cjs/redux.cjs");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
//configureStore.js




// import thunkMiddleware from 'redux-thunk';




// 미들웨어는 항상 3단 고차함수임, action이 dispatch되어 로깅되는 함수
// thunk는 항상 action이 함수인 경우 action은 원래 객체인데 thunk에서 함수임 => 지연함수이기에 나중에 실행해줄 수 있음
// redux devtools를 대체할 수 있음 -> console로 찍음
// {type: 'LOG_IN', data: {…}}
const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  // if(typeof action === 'function') {
  //     return action(dispatch, getState, extraArgument);
  // }
  return next(action);
};
const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  // redux middleware 붙이기
  // 배포용
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  // 개발용
  // const enhancer = process.env.NODE_ENV === 'production'
  //     ? compose(applyMiddleware([]))
  //     : composeWithDevTools(applyMiddleware([]))

  // state와 reducer 포함하는 것을 store라고 함
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  // 개발할때 debug를 true로 하면 더 자세하게 내용을 보여주니깐 변경하면 좋음
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2Rpc3QvY2pzL3JlZHV4LmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJfanN4REVWIiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJIZWFkIiwiY2hhclNldCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjaGFuZ2VOaWNrbmFtZSIsImRhdGEiLCJ0eXBlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJfb2JqZWN0U3ByZWFkIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImlkIiwiZmluZCIsIlBvc3RJZCIsIkNvbW1lbnRzIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja2FubWVMb2FkaW5nIiwiY2hhbmdlTmlja2FubWVEb25lIiwiY2hhbmdlTmlja2FubWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0FITkdFX05JQ0tBTk1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiRm9sbG93aW5ncyIsInB1c2giLCJVc2VySWQiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJsb2FkUG9zdHNBUEkiLCJnZXQiLCJsb2FkUG9zdHMiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwiY29udGVudCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiZGVsYXkiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93Iiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93IiwidGFrZUV2ZXJ5Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUNBQW1DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkZBQTZGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxpQkFBaUIsY0FBYzs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTSwwQ0FBMEMsS0FBSztBQUN2Rjs7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LE1BQU0sQ0FBQztBQUN2QixDQUFDO0FBR0QsTUFBTXNLLGNBQWMsR0FBR0EsQ0FBQSxLQUFNO0VBQ3pCLE1BQU1DLGNBQWMsR0FBR0MsaURBQW9CLENBQUMsQ0FBQztFQUM3QyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBYyxFQUFFTCxnQkFBZ0IsQ0FBQztFQUN0RDtFQUNBO0VBQ0EsTUFBTVEsUUFBUSxHQUFHLFFBQ1hDLFNBQXdDLEdBQ3hDQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFXLENBQUMsQ0FBQztFQUMxRDtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBLE1BQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ3pJLGlEQUFPLEVBQUVvSSxRQUFRLENBQUM7RUFDNUNJLEtBQUssQ0FBQ0UsUUFBUSxHQUFHVCxjQUFjLENBQUNVLEdBQUcsQ0FBQy9ELDhDQUFRLENBQUM7RUFDN0MsT0FBTzRELEtBQUs7QUFDaEIsQ0FBQztBQUVELE1BQU12TCxPQUFPLEdBQUcyTCx3RUFBYSxDQUFDWixjQUFjLEVBQUU7RUFDMUM7RUFDQWEsS0FBSztBQUNULENBQUMsQ0FBQztBQUVhNUwsc0VBQU8sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHRCLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcclxudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xyXG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcclxudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xyXG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxyXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcclxufTtcclxudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcclxuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXHJcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXHJcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xyXG4gIH1cclxuICByZXR1cm4gdG87XHJcbn07XHJcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xyXG5cclxuLy8gc3JjL2luZGV4LnRzXHJcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xyXG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xyXG4gIF9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXM6ICgpID0+IGFjdGlvblR5cGVzX2RlZmF1bHQsXHJcbiAgYXBwbHlNaWRkbGV3YXJlOiAoKSA9PiBhcHBseU1pZGRsZXdhcmUsXHJcbiAgYmluZEFjdGlvbkNyZWF0b3JzOiAoKSA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMsXHJcbiAgY29tYmluZVJlZHVjZXJzOiAoKSA9PiBjb21iaW5lUmVkdWNlcnMsXHJcbiAgY29tcG9zZTogKCkgPT4gY29tcG9zZSxcclxuICBjcmVhdGVTdG9yZTogKCkgPT4gY3JlYXRlU3RvcmUsXHJcbiAgaXNBY3Rpb246ICgpID0+IGlzQWN0aW9uLFxyXG4gIGlzUGxhaW5PYmplY3Q6ICgpID0+IGlzUGxhaW5PYmplY3QsXHJcbiAgbGVnYWN5X2NyZWF0ZVN0b3JlOiAoKSA9PiBsZWdhY3lfY3JlYXRlU3RvcmVcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcclxuXHJcbi8vIHNyYy91dGlscy9mb3JtYXRQcm9kRXJyb3JNZXNzYWdlLnRzXHJcbmZ1bmN0aW9uIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoY29kZSkge1xyXG4gIHJldHVybiBgTWluaWZpZWQgUmVkdXggZXJyb3IgIyR7Y29kZX07IHZpc2l0IGh0dHBzOi8vcmVkdXguanMub3JnL0Vycm9ycz9jb2RlPSR7Y29kZX0gZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycy4gYDtcclxufVxyXG5cclxuLy8gc3JjL3V0aWxzL3N5bWJvbC1vYnNlcnZhYmxlLnRzXHJcbnZhciAkJG9ic2VydmFibGUgPSAvKiBAX19QVVJFX18gKi8gKCgpID0+IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCBcIkBAb2JzZXJ2YWJsZVwiKSgpO1xyXG52YXIgc3ltYm9sX29ic2VydmFibGVfZGVmYXVsdCA9ICQkb2JzZXJ2YWJsZTtcclxuXHJcbi8vIHNyYy91dGlscy9hY3Rpb25UeXBlcy50c1xyXG52YXIgcmFuZG9tU3RyaW5nID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KFwiXCIpLmpvaW4oXCIuXCIpO1xyXG52YXIgQWN0aW9uVHlwZXMgPSB7XHJcbiAgSU5JVDogYEBAcmVkdXgvSU5JVCR7LyogQF9fUFVSRV9fICovIHJhbmRvbVN0cmluZygpfWAsXHJcbiAgUkVQTEFDRTogYEBAcmVkdXgvUkVQTEFDRSR7LyogQF9fUFVSRV9fICovIHJhbmRvbVN0cmluZygpfWAsXHJcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046ICgpID0+IGBAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OJHtyYW5kb21TdHJpbmcoKX1gXHJcbn07XHJcbnZhciBhY3Rpb25UeXBlc19kZWZhdWx0ID0gQWN0aW9uVHlwZXM7XHJcblxyXG4vLyBzcmMvdXRpbHMvaXNQbGFpbk9iamVjdC50c1xyXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xyXG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiIHx8IG9iaiA9PT0gbnVsbClcclxuICAgIHJldHVybiBmYWxzZTtcclxuICBsZXQgcHJvdG8gPSBvYmo7XHJcbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcclxuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcclxuICB9XHJcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90byB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gbnVsbDtcclxufVxyXG5cclxuLy8gc3JjL3V0aWxzL2tpbmRPZi50c1xyXG5mdW5jdGlvbiBtaW5pS2luZE9mKHZhbCkge1xyXG4gIGlmICh2YWwgPT09IHZvaWQgMClcclxuICAgIHJldHVybiBcInVuZGVmaW5lZFwiO1xyXG4gIGlmICh2YWwgPT09IG51bGwpXHJcbiAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgY2FzZSBcInN5bWJvbFwiOlxyXG4gICAgY2FzZSBcImZ1bmN0aW9uXCI6IHtcclxuICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICByZXR1cm4gXCJhcnJheVwiO1xyXG4gIGlmIChpc0RhdGUodmFsKSlcclxuICAgIHJldHVybiBcImRhdGVcIjtcclxuICBpZiAoaXNFcnJvcih2YWwpKVxyXG4gICAgcmV0dXJuIFwiZXJyb3JcIjtcclxuICBjb25zdCBjb25zdHJ1Y3Rvck5hbWUgPSBjdG9yTmFtZSh2YWwpO1xyXG4gIHN3aXRjaCAoY29uc3RydWN0b3JOYW1lKSB7XHJcbiAgICBjYXNlIFwiU3ltYm9sXCI6XHJcbiAgICBjYXNlIFwiUHJvbWlzZVwiOlxyXG4gICAgY2FzZSBcIldlYWtNYXBcIjpcclxuICAgIGNhc2UgXCJXZWFrU2V0XCI6XHJcbiAgICBjYXNlIFwiTWFwXCI6XHJcbiAgICBjYXNlIFwiU2V0XCI6XHJcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvck5hbWU7XHJcbiAgfVxyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgXCJcIik7XHJcbn1cclxuZnVuY3Rpb24gY3Rvck5hbWUodmFsKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgPT09IFwiZnVuY3Rpb25cIiA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcclxufVxyXG5mdW5jdGlvbiBpc0Vycm9yKHZhbCkge1xyXG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgdmFsLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3Iuc3RhY2tUcmFjZUxpbWl0ID09PSBcIm51bWJlclwiO1xyXG59XHJcbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcclxuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSlcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIHJldHVybiB0eXBlb2YgdmFsLnRvRGF0ZVN0cmluZyA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB2YWwuZ2V0RGF0ZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB2YWwuc2V0RGF0ZSA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcbmZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcclxuICBsZXQgdHlwZU9mVmFsID0gdHlwZW9mIHZhbDtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICB0eXBlT2ZWYWwgPSBtaW5pS2luZE9mKHZhbCk7XHJcbiAgfVxyXG4gIHJldHVybiB0eXBlT2ZWYWw7XHJcbn1cclxuXHJcbi8vIHNyYy9jcmVhdGVTdG9yZS50c1xyXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcclxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMikgOiBgRXhwZWN0ZWQgdGhlIHJvb3QgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKHJlZHVjZXIpfSdgKTtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBhcmd1bWVudHNbM10gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMCkgOiBcIkl0IGxvb2tzIGxpa2UgeW91IGFyZSBwYXNzaW5nIHNldmVyYWwgc3RvcmUgZW5oYW5jZXJzIHRvIGNyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtIHRvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjY3JlYXRpbmctYS1zdG9yZS13aXRoLWVuaGFuY2VycyBmb3IgYW4gZXhhbXBsZS5cIik7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZW5oYW5jZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XHJcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHZvaWQgMDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEpIDogYEV4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKGVuaGFuY2VyKX0nYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcclxuICB9XHJcbiAgbGV0IGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcclxuICBsZXQgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XHJcbiAgbGV0IGN1cnJlbnRMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xyXG4gIGxldCBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcclxuICBsZXQgbGlzdGVuZXJJZENvdW50ZXIgPSAwO1xyXG4gIGxldCBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XHJcbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcclxuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XHJcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xyXG4gICAgICBjdXJyZW50TGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBrZXkpID0+IHtcclxuICAgICAgICBuZXh0TGlzdGVuZXJzLnNldChrZXksIGxpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xyXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMykgOiBcIllvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuIFRoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gUGFzcyBpdCBkb3duIGZyb20gdGhlIHRvcCByZWR1Y2VyIGluc3RlYWQgb2YgcmVhZGluZyBpdCBmcm9tIHRoZSBzdG9yZS5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg0KSA6IGBFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICcke2tpbmRPZihsaXN0ZW5lcil9J2ApO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNSkgOiBcIllvdSBtYXkgbm90IGNhbGwgc3RvcmUuc3Vic2NyaWJlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiBJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSBjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLlwiKTtcclxuICAgIH1cclxuICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xyXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xyXG4gICAgY29uc3QgbGlzdGVuZXJJZCA9IGxpc3RlbmVySWRDb3VudGVyKys7XHJcbiAgICBuZXh0TGlzdGVuZXJzLnNldChsaXN0ZW5lcklkLCBsaXN0ZW5lcik7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNikgOiBcIllvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy5cIik7XHJcbiAgICAgIH1cclxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XHJcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcclxuICAgICAgbmV4dExpc3RlbmVycy5kZWxldGUobGlzdGVuZXJJZCk7XHJcbiAgICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBudWxsO1xyXG4gICAgfTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XHJcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg3KSA6IGBBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gSW5zdGVhZCwgdGhlIGFjdHVhbCB0eXBlIHdhczogJyR7a2luZE9mKGFjdGlvbil9Jy4gWW91IG1heSBuZWVkIHRvIGFkZCBtaWRkbGV3YXJlIHRvIHlvdXIgc3RvcmUgc2V0dXAgdG8gaGFuZGxlIGRpc3BhdGNoaW5nIG90aGVyIHZhbHVlcywgc3VjaCBhcyAncmVkdXgtdGh1bmsnIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBmdW5jdGlvbnMuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSNtaWRkbGV3YXJlIGFuZCBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNi1hc3luYy1sb2dpYyN1c2luZy10aGUtcmVkdXgtdGh1bmstbWlkZGxld2FyZSBmb3IgZXhhbXBsZXMuYCk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDgpIDogJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gWW91IG1heSBoYXZlIG1pc3NwZWxsZWQgYW4gYWN0aW9uIHR5cGUgc3RyaW5nIGNvbnN0YW50LicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNykgOiBgQWN0aW9uIFwidHlwZVwiIHByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcuIEluc3RlYWQsIHRoZSBhY3R1YWwgdHlwZSB3YXM6ICcke2tpbmRPZihhY3Rpb24udHlwZSl9Jy4gVmFsdWUgd2FzOiAnJHthY3Rpb24udHlwZX0nIChzdHJpbmdpZmllZClgKTtcclxuICAgIH1cclxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDkpIDogXCJSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuXCIpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XHJcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xyXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhY3Rpb247XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XHJcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTApIDogYEV4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKG5leHRSZWR1Y2VyKX1gKTtcclxuICAgIH1cclxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuUkVQTEFDRVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XHJcbiAgICBjb25zdCBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXHJcbiAgICAgICAqIEBwYXJhbSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXHJcbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxyXG4gICAgICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxyXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXHJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxyXG4gICAgICAgKi9cclxuICAgICAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gXCJvYmplY3RcIiB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTEpIDogYEV4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuIEluc3RlYWQsIHJlY2VpdmVkOiAnJHtraW5kT2Yob2JzZXJ2ZXIpfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xyXG4gICAgICAgICAgY29uc3Qgb2JzZXJ2ZXJBc09ic2VydmVyID0gb2JzZXJ2ZXI7XHJcbiAgICAgICAgICBpZiAob2JzZXJ2ZXJBc09ic2VydmVyLm5leHQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJBc09ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdW5zdWJzY3JpYmVcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICBbc3ltYm9sX29ic2VydmFibGVfZGVmYXVsdF0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuSU5JVFxyXG4gIH0pO1xyXG4gIGNvbnN0IHN0b3JlID0ge1xyXG4gICAgZGlzcGF0Y2gsXHJcbiAgICBzdWJzY3JpYmUsXHJcbiAgICBnZXRTdGF0ZSxcclxuICAgIHJlcGxhY2VSZWR1Y2VyLFxyXG4gICAgW3N5bWJvbF9vYnNlcnZhYmxlX2RlZmF1bHRdOiBvYnNlcnZhYmxlXHJcbiAgfTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn1cclxuZnVuY3Rpb24gbGVnYWN5X2NyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xyXG59XHJcblxyXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xyXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcclxuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBzcmMvY29tYmluZVJlZHVjZXJzLnRzXHJcbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XHJcbiAgY29uc3QgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XHJcbiAgY29uc3QgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBhY3Rpb25UeXBlc19kZWZhdWx0LklOSVQgPyBcInByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZVwiIDogXCJwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlclwiO1xyXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBcIlN0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCB0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuXCI7XHJcbiAgfVxyXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xyXG4gICAgcmV0dXJuIGBUaGUgJHthcmd1bWVudE5hbWV9IGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXCIke2tpbmRPZihpbnB1dFN0YXRlKX1cIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBrZXlzOiBcIiR7cmVkdWNlcktleXMuam9pbignXCIsIFwiJyl9XCJgO1xyXG4gIH1cclxuICBjb25zdCB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcigoa2V5KSA9PiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV0pO1xyXG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xyXG4gIH0pO1xyXG4gIGlmIChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IGFjdGlvblR5cGVzX2RlZmF1bHQuUkVQTEFDRSlcclxuICAgIHJldHVybjtcclxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIGBVbmV4cGVjdGVkICR7dW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/IFwia2V5c1wiIDogXCJrZXlcIn0gXCIke3VuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpfVwiIGZvdW5kIGluICR7YXJndW1lbnROYW1lfS4gRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiR7cmVkdWNlcktleXMuam9pbignXCIsIFwiJyl9XCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuYDtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XHJcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHZvaWQgMCwge1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlc19kZWZhdWx0LklOSVRcclxuICAgIH0pO1xyXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTIpIDogYFRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXCIke2tleX1cIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiBJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCB5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHZvaWQgMCwge1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlc19kZWZhdWx0LlBST0JFX1VOS05PV05fQUNUSU9OKClcclxuICAgIH0pID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEzKSA6IGBUaGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFwiJHtrZXl9XCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gRG9uJ3QgdHJ5IHRvIGhhbmRsZSAnJHthY3Rpb25UeXBlc19kZWZhdWx0LklOSVR9JyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiIG5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsIGluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5gKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcclxuICBjb25zdCByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcclxuICBjb25zdCBmaW5hbFJlZHVjZXJzID0ge307XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qga2V5ID0gcmVkdWNlcktleXNbaV07XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHdhcm5pbmcoYE5vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIiR7a2V5fVwiYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcclxuICBsZXQgdW5leHBlY3RlZEtleUNhY2hlO1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xyXG4gIH1cclxuICBsZXQgc2hhcGVBc3NlcnRpb25FcnJvcjtcclxuICB0cnkge1xyXG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xyXG4gIH1cclxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oc3RhdGUgPSB7fSwgYWN0aW9uKSB7XHJcbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xyXG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICBjb25zdCB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcclxuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XHJcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBoYXNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBmaW5hbFJlZHVjZXJLZXlzW2ldO1xyXG4gICAgICBjb25zdCByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1trZXldO1xyXG4gICAgICBjb25zdCBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVba2V5XTtcclxuICAgICAgY29uc3QgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xyXG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTQpIDogYFdoZW4gY2FsbGVkIHdpdGggYW4gYWN0aW9uIG9mIHR5cGUgJHthY3Rpb25UeXBlID8gYFwiJHtTdHJpbmcoYWN0aW9uVHlwZSl9XCJgIDogXCIodW5rbm93biB0eXBlKVwifSwgdGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcIiR7a2V5fVwiIHJldHVybmVkIHVuZGVmaW5lZC4gVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiBJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5gKTtcclxuICAgICAgfVxyXG4gICAgICBuZXh0U3RhdGVba2V5XSA9IG5leHRTdGF0ZUZvcktleTtcclxuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xyXG4gICAgfVxyXG4gICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKHN0YXRlKS5sZW5ndGg7XHJcbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIHNyYy9iaW5kQWN0aW9uQ3JlYXRvcnMudHNcclxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcclxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJncykpO1xyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xyXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09IFwib2JqZWN0XCIgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE2KSA6IGBiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGJ1dCBpbnN0ZWFkIHJlY2VpdmVkOiAnJHtraW5kT2YoYWN0aW9uQ3JlYXRvcnMpfScuIERpZCB5b3Ugd3JpdGUgXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiIGluc3RlYWQgb2YgXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXCI/YCk7XHJcbiAgfVxyXG4gIGNvbnN0IGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xyXG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XHJcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xyXG59XHJcblxyXG4vLyBzcmMvY29tcG9zZS50c1xyXG5mdW5jdGlvbiBjb21wb3NlKC4uLmZ1bmNzKSB7XHJcbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChhcmcpID0+IGFyZztcclxuICB9XHJcbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xyXG4gIH1cclxuICByZXR1cm4gZnVuY3MucmVkdWNlKChhLCBiKSA9PiAoLi4uYXJncykgPT4gYShiKC4uLmFyZ3MpKSk7XHJcbn1cclxuXHJcbi8vIHNyYy9hcHBseU1pZGRsZXdhcmUudHNcclxuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSB7XHJcbiAgcmV0dXJuIChjcmVhdGVTdG9yZTIpID0+IChyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZTIocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xyXG4gICAgbGV0IGRpc3BhdGNoID0gKCkgPT4ge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNSkgOiBcIkRpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuIE90aGVyIG1pZGRsZXdhcmUgd291bGQgbm90IGJlIGFwcGxpZWQgdG8gdGhpcyBkaXNwYXRjaC5cIik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWlkZGxld2FyZUFQSSA9IHtcclxuICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxyXG4gICAgICBkaXNwYXRjaDogKGFjdGlvbiwgLi4uYXJncykgPT4gZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmdzKVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNoYWluID0gbWlkZGxld2FyZXMubWFwKChtaWRkbGV3YXJlKSA9PiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpKTtcclxuICAgIGRpc3BhdGNoID0gY29tcG9zZSguLi5jaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RvcmUsXHJcbiAgICAgIGRpc3BhdGNoXHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIHNyYy91dGlscy9pc0FjdGlvbi50c1xyXG5mdW5jdGlvbiBpc0FjdGlvbihhY3Rpb24pIHtcclxuICByZXR1cm4gaXNQbGFpbk9iamVjdChhY3Rpb24pICYmIFwidHlwZVwiIGluIGFjdGlvbiAmJiB0eXBlb2YgYWN0aW9uLnR5cGUgPT09IFwic3RyaW5nXCI7XHJcbn1cclxuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxyXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLFxyXG4gIGFwcGx5TWlkZGxld2FyZSxcclxuICBiaW5kQWN0aW9uQ3JlYXRvcnMsXHJcbiAgY29tYmluZVJlZHVjZXJzLFxyXG4gIGNvbXBvc2UsXHJcbiAgY3JlYXRlU3RvcmUsXHJcbiAgaXNBY3Rpb24sXHJcbiAgaXNQbGFpbk9iamVjdCxcclxuICBsZWdhY3lfY3JlYXRlU3RvcmVcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZHV4LmNqcy5tYXAiLCIvLyBwYWdl65Ok7JeQIOqzte2GteyymOumrFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5cclxuLy8gQXBwIOydgCBpbmRleC5qc+ydmCDrtoDrqqhcclxuLy8gcGFnZXPrk6TsnZgg6rO17Ya1IOu2gOu2hCDshKTsoJVcclxuY29uc3QgQXBwID0gKCB7Q29tcG9uZW50fSApID0+IHsgLy9pbmRleC5qcyDsnZggcmV0dXJuIOu2gOu2hOydtCDsl6zquLDsnZggY29tcG9uZW50IOulvCDsnZjrr7jtlahcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgLy8gcmVkdXgg7IKs7JqpIOyLnCwg7Y6Y7J207KeA66W8IHByb3ZpZGVy66GcIOqwkOyLuOykmOyVvO2VqCwg64uoLCBuZXh064qUIOyViOyNqOuPhCDrkKhcclxuICAgICAgICAvLyA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04Jy8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIC8vIDwvUHJvdmlkZXI+XHJcbiAgICApXHJcbn07XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vIHJlZHVjZXLripQg7Iqk7JyE7LmY66y47J20IOuTpOyWtOyeiOuKlCDtlajsiJjsnoRcclxuLy8gcmVkdWNlcuuKlCDrqqjrkZAg642w7J207YSwIOq0gOugqOuQnOqxsOyehCBcclxuLy8gcmVkdWNlciDsqrzqsJzripQg6riw7KSAXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gICAgIHVzZXI6IHtcclxuICAgICAgICBcclxuLy8gICAgIH0sXHJcbi8vICAgICBwb3N0OiB7XHJcbiAgICAgICAgXHJcbi8vICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vIOq4sOuzuCBzdGF0ZeulvCDrs4Dqsr3tlZjqs6Ag7Iu27J2E65WMLCDripgg7JWh7IWY7J2EIOunjOuTpOyWtOyEnCDtnojsiqTthqDrpqzrpbwg7Jyg7KeA7ZWY6rOkIOuzgOqyvSDsp4TtlontlZjquLBcclxuXHJcbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0ge1xyXG4vLyAgICAgdHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcbi8vICAgICBkYXRhIDogJ2Rvb3lvbycsXHJcbi8vIH0gICBcclxuXHJcbi8vIOyVoeyFmOydhCDrp4zrk6TslrTso7zripQg7ZWo7IiY66W8IOunjOuTpOq4sCAo7J2066aE66eMIOyXrOufrOuyiCDrs4Dqsr3tlZjqs6Ag7Iu27J2E65WMIOyDiOuhnCDqs4Tsho0g6rCd7LK066W8IOyDneyEse2VtOyVvCDtlZjripTqsowg64Kt67mE7J2066+A66GcKVxyXG4vLyDrj5nsoIHsnLzroZwg7IOd7ISxXHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcbi8vY2hhbmdlTmlja25hbWUoJ2Rvb3lvbycpXHJcbi8vIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCdtZW1iZXIga3l1bmcnKSlcclxuXHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG4vLyBjb21iaW5lUmVkdWNlcnPrpbwg7J207Jqp7ZWY64qUIOydtOycoOuKlCDtlajsiJjsmYAg7ZWo7IiY66W8IO2VqeyzkOykmOyVvO2VmOq4sCDrlYzrrLhcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXggOiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAvLyBhY3Rpb27snYAg6rCd7LK07J6EXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG4gICAgICAgIC8vIOy0iOq4sO2ZlFxyXG4gICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiXHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQge3Byb2R1Y2V9IGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgLy8g64yA66y47J6Q66GcIOyLnOyeke2VmOuKlCDslaDrk6TsnYAg7ISc67KE7JeQ7IScIOyjvOuKlCDqsbgg7J2Y66+4XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgICBJbWFnZXM6IFt7XHJcbi8vICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vICAgICBDb21tZW50czogW3tcclxuLy8gICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vIH0pKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuLy8g64+Z7KCBIOyVoeyFmCDtirjroIjsnbRcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSk9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSk9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICgge1xyXG4vLyAgICAgLy8g642U66+4642w7J207YSwIGlk64qUIG5wbSBpIHNob3J0aWQg7Zmc7Jqp7ZW07JW8IGVuY291bnRlciDsl5Drn6zqsIAg7JWI64KoIC0+IGlkIOygle2VmOq4sCDslaDrp6TtlaDrlYwg7IKs7Jqp7ZWY6riwIOyii+ydjFxyXG4vLyAgICAgLy8gZmFrZXLripQg64uJ64Sk7J6E7J2EIOyehOydmOuhnCDsp4DsoJXtlbTspIwgXHJcbi8vICAgICBpZDogZGF0YS5pZCxcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDoxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAnZXVuaycsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgSW1hZ2VzOiBbXSxcclxuLy8gICAgIENvbW1lbnRzOiBbXSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBjb250ZW50OiBkYXRhLFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOjEsXHJcbi8vICAgICAgICAgbmlja25hbWU6ICdldW5rJyxcclxuLy8gICAgIH0sXHJcbi8vIH0pXHJcblxyXG4vL+ydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJgo67aI67OA7ISx7J2EIOyngO2CpOuptOyEnClcclxuLy8gaW1tZXLrpbwg7IKs7Jqp7ZWg65WMIHN0YXRl64qUIOygiOuMgCDqsbTrk6TrqbQg7JWI65CY6rOgIGRyYWZ066eMIOyhsOyeke2VtOyVvCDtlahcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTsgLy8g6riw7KG0IOqyjOyLnOusvOyXkCDstpTqsIBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwOyAvL+y1nOuMgCA1MOqwnOydmCDqsozsi5zrrLzrp4wg67O07J6EXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSAgYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTsvLyBkdW1teVBvc3Trpbwg7JWe7JeQ64uk6rCAIOy2lOqwgO2VtOyVvCDsi6Dqt5wg6rKM7Iuc66y87J20IOunqOyVnuyXkOyEnCDrs7TsnoRcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9ICBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gIHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgICAgICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDsgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTogICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHtwcm9kdWNlfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJEgLT4gdHJ1ZeuptCDroZzrlKnssL0g652E7Jqw6riwXHJcbiAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkSAtPiB0cnVl66m0IOuhnOuUqeywvSDrnYTsmrDquLBcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRIC0+IHRydWXrqbQg66Gc65Sp7LC9IOudhOyasOq4sFxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRIC0+IHRydWXrqbQg66Gc65Sp7LC9IOudhOyasOq4sFxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8v7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgIGNoYW5nZU5pY2thbm1lTG9hZGluZzogZmFsc2UsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2thbm1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrYW5tZUVycm9yOiBudWxsLFxyXG4gICAgbWUgOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LCAgICBcclxufVxyXG5cclxuLy8g67OA7IiY66qFIFNZTlRBWCDsl5Drn6zrpbwg66eJ6riwIOychO2VtCDrlLDroZwg67m87KSMXHJcbi8vIHJlZHVjZXLsl5DshJzripQg7IOB7YOc66W8IOuwlOq+uOqzoCDsi7bri6TrqbQg7JWh7IWY7J2EIOuzgOqyve2VtOyjvOuptCDrkKhcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDQUhOR0VfTklDS0FOTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDQUhOR0VfTklDS0FOTUVfU1VDQ0VTUyA9ICdDQUhOR0VfTklDS0FOTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG4vLyBjb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIC4uLmRhdGEsXHJcbi8vICAgICBuaWNrbmFtZSA6ICdldW5raycsXHJcbi8vICAgICBpZDogMSxcclxuLy8gICAgIFBvc3RzOiBbe2lkOiAxfV0sXHJcbi8vICAgICBGb2xsb3dpbmdzOiBbe25pY2tuYW1lOiAnZXVua2snfSwge25pY2tuYW1lOiAnc3V6aSd9LCB7bmlja25hbWU6ICduaW5pJ30sXSxcclxuLy8gICAgIEZvbGxvd2VyczogW3tuaWNrbmFtZTogJ2V1bmtrJ30sIHtuaWNrbmFtZTogJ3N1emknfSwge25pY2tuYW1lOiAnbmluaSd9LF0sXHJcbi8vIH0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHsgLy8g7ZmU7IK07ZGcIO2VqOyImCByZXR1cm4g7IOd6561IOybkOuemOuKlCByZXR1cm4gcHJvZHVjZeyehFxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUIDogXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFIDogXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBsb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgLy8g64uk7J2MIOyKpO2FjOydtO2KuOuhnCDqsJLsnbQg67OA6rK9LCBpbml0aWFsIHN0YXRl7JmA64qUIOuLpOuluCDqsJ3ssrTqsIAg7IOd6rmAXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAvLyDri6TsnYwg7Iqk7YWM7J207Yq466GcIOqwkuydtCDrs4Dqsr0sIGluaXRpYWwgc3RhdGXsmYDripQg64uk66W4IOqwneyytOqwgCDsg53quYBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmU9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDQUhOR0VfTklDS0FOTUVfU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgUG9zdHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlkOmFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0J1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJ1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlOyAvLyDsnbTqsowg7Yq466Oo66m0IGFsbG93LW9yaWdpbi1oZWFkZXLrpbwg7KCV7ZmV7ZWY6rKMIO2RnOyLnO2VtOyVvCDtlahcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbCAoWyAvLyBhbGzsnYAg67Cw7Je07J2EIOuwm+yVhOyEnCDtlZzrsKnsl5Ao64+Z7Iuc7JeQKSDsi6TtlonsnYQg7ZW07KSMXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksIC8vIGZvcmvripQg7ZWo7IiY66W8IOyLpO2Wie2VqCDruYTrj5nquLDsoIHsnLzroZxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSwgLy8gY2FsbCDrj5nquLDsoIHsnLzroZwg7ZWo7IiYIO2YuOy2nFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBcclxuICAgICBnZW5lcmF0ZUR1bW15UG9zdCwgXHJcbiAgICAgTE9BRF9QT1NUU19GQUlMVVJFLCBcclxuICAgICBMT0FEX1BPU1RTX1JFUVVFU1QsIFxyXG4gICAgIExPQURfUE9TVFNfU1VDQ0VTUywgXHJcbiAgICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICBSRU1PVkVfUE9TVF9TVUNDRVNTfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHsgLy9nZW5lcmF0ZSBYXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKSBcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7IC8vZ2VuZXJhdGUgWFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0Jywge2NvbnRlbnQ6IGRhdGEgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyDsmpTssq3snZgg6rKw6rO86rCS7J2EIOuwm+ydjCBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgg7Zi47Lac7J206rOgIGNhbGzsnYAg64+Z6riw7ZWo7IiYIO2YuOy2nOyehCBcclxuICAgICAgICAvLyB5aWVsZOqwgCBhd2FpdOqzvCDruYTsircgYmxvY2tpbmdcclxuICAgICAgICAvLyDrj5nquLDsnbTquLDrlYzrrLjsl5AgLnRoZW4g7LKY65+8IOqysOqzvOqwkuydhCDrsJvsnYQg65WM6rmM7KeAIOq4sOuLpOugpOykjCwg64uk7J2MIOuplOyGjOuTnCDsi6TtlonslYjtlahcclxuXHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHsgLy9nZW5lcmF0ZSBYXHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIOyalOyyreydmCDqsrDqs7zqsJLsnYQg67Cb7J2MIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpzsnbTqs6AgY2FsbOydgCDrj5nquLDtlajsiJgg7Zi47Lac7J6EIFxyXG4gICAgICAgIC8vIHlpZWxk6rCAIGF3YWl06rO8IOu5hOyKtyBibG9ja2luZ1xyXG4gICAgICAgIC8vIOuPmeq4sOydtOq4sOuVjOusuOyXkCAudGhlbiDsspjrn7wg6rKw6rO86rCS7J2EIOuwm+ydhCDrlYzquYzsp4Ag6riw64uk66Ck7KSMLCDri6TsnYwg66mU7IaM65OcIOyLpO2WieyViO2VqFxyXG5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHsgLy9nZW5lcmF0ZSBYXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpOyAvLyBQT1NUIC9wb3N0LzEvY29tbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gdGFrZUxhdGVzdOuKlCDtgbTrpq0g7Iuk7IiY66GcIDLrsogg7ZaI7J2EIOuVjCDtmLnsnYAgMTAw67KI7J2EIOuIjOufrOuPhCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJ7ZWoIFxyXG4vLy0+IOuPmeyLnOyXkCDroZzrlKnrkJzqsbDrp4wg7Leo7IaM65CoKOuLqCwg7ZSE66Gg7YSw7ISc67KE7JeQ7ISc66eMIOyggeyaqSwg6re4656Y7IScIOuwseyXlOuTnOyXkOyEnCAy67KIIOyggOyepeuQmOyngCDslYrslZjripTsp4Ag7LK07YGsIO2VhOyalClcclxuLy8g7JqU7LKt7J2AIDLrsojqsITqsbDqs6Ag7J2R64u166eMIOuniOyngOunieq6vCDtlZzqsJzroZwg67Cb7J2MLCDsmpTssq3snYAg7Leo7IaM6rCAIOyViOuQqFxyXG4vLyDrp4zslb0g7LKr67KI7Ke46rq866eMIO2VmOqzoCDsi7bsnLzrqbQgdGFrZUxlYWRpbmfrj4Qg7J6I7J2MXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDIwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBGT0xMT1dfUkVRVUVTVCxcclxuICAgIEZPTExPV19TVUNDRVNTLFxyXG4gICAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsIExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBcclxuICAgIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSwgXHJcbiAgICBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgVU5GT0xMT1dfU1VDQ0VTUyBcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHsgLy9nZXQsIGRlbGV0ZeuKlCBkYXRh6rCAIOyXhuydjFxyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkgeyAvL2dlbmVyYXRlIFhcclxuICAgIC8vIOyEnOuyhOyXkCDsmpTssq3snYQg67O064K064qUIOu2gOu2hFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbi8vIHNhZ2Eg66qF66C57Ja066W8IOyTsOuKlCDsnbTsnKAgLT4g7YWM7Iqk7Yq47ZWY6riwIOyii+ydjFxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkgey8vIO2VqOyImCwg66ek6rCc67OA7IiY65OkXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpIC8vIOyalOyyreydmCDqsrDqs7zqsJLsnYQg67Cb7J2MIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpzsnbTqs6AgY2FsbOydgCDrj5nquLDtlajsiJgg7Zi47Lac7J6EIFxyXG4gICAgICAgIC8vIHlpZWxk6rCAIGF3YWl06rO8IOu5hOyKtyBibG9ja2luZ1xyXG4gICAgICAgIC8vIOuPmeq4sOydtOq4sOuVjOusuOyXkCAudGhlbiDsspjrn7wg6rKw6rO86rCS7J2EIOuwm+ydhCDrlYzquYzsp4Ag6riw64uk66Ck7KSMLCDri6TsnYwg66mU7IaM65OcIOyLpO2WieyViO2VqFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInNhZ2EgbG9naW5cIik7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHsgLy9nZW5lcmF0ZSBYXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKSAvLyDsmpTssq3snZgg6rKw6rO86rCS7J2EIOuwm+ydjCBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgg7Zi47Lac7J206rOgIGNhbGzsnYAg64+Z6riw7ZWo7IiYIO2YuOy2nOyehCBcclxuICAgICAgICAvLyB5aWVsZOqwgCBhd2FpdOqzvCDruYTsircgYmxvY2tpbmdcclxuICAgICAgICAvLyDrj5nquLDsnbTquLDrlYzrrLjsl5AgLnRoZW4g7LKY65+8IOqysOqzvOqwkuydhCDrsJvsnYQg65WM6rmM7KeAIOq4sOuLpOugpOykjCwg64uk7J2MIOuplOyGjOuTnCDsi6TtlonslYjtlahcclxuXHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZm9sbG93QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3cnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJKVxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VuZm9sbG93JylcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEkpXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnIoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8v7J2067Kk7Yq4IOumrOyKpOuEiOuTpCDsnpTrnKkg66eM65Ok7Ja07KSMXHJcbi8vIHlpZWxkIO2KueynlSDsnbztmozsmqnsnoQgLT4g7ZWc67KI66eMIOyCrOyaqe2VoCDsiJgg7J6I7J2MIC0+IOq3uOuemOyEnCB3aGlsZSDrsJjrs7XrrLjsnYQg7Zmc7Jqp7ZWoIC0+IOustO2VnOujqO2UhOuhnCDslYjruaDsp5Ag7ZWc67KI66eMIOyLpO2Wie2VmOq4sCDrlYzrrLhcclxuLy8gd2hpbGUg64yA7Iug7JeQIHRha2XripQg64+Z6riw7KCB7Jy866GcIOuPmeyekSwgdGFrZUV2ZXJ564qUIOu5hOuPmeq4sOyggeycvOuhnCDrj5nsnpFcclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pOyBcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICAvLyB0aHJvdHRsZSAtPiAy7LSIIOyViOyXkCDsl6zrn6zrsojtlbTrj4Qg66y07J2R64u1LCAy7LSIIOyViOyXkCDtlZzrsojrp4wg7KCB7JqpIFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pOyAvL3Rha2U6IExPR19JTuyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66a8XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59IiwiLy9jb25maWd1cmVTdG9yZS5qc1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG4vLyBpbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuLy8g66+465Ok7Juo7Ja064qUIO2VreyDgSAz64uoIOqzoOywqO2VqOyImOyehCwgYWN0aW9u7J20IGRpc3BhdGNo65CY7Ja0IOuhnOq5heuQmOuKlCDtlajsiJhcclxuLy8gdGh1bmvripQg7ZWt7IOBIGFjdGlvbuydtCDtlajsiJjsnbgg6rK97JqwIGFjdGlvbuydgCDsm5Drnpgg6rCd7LK07J24642wIHRodW5r7JeQ7IScIO2VqOyImOyehCA9PiDsp4Dsl7DtlajsiJjsnbTquLDsl5Ag64KY7KSR7JeQIOyLpO2Wie2VtOykhCDsiJgg7J6I7J2MXHJcbi8vIHJlZHV4IGRldnRvb2xz66W8IOuMgOyytO2VoCDsiJgg7J6I7J2MIC0+IGNvbnNvbGXroZwg7LCN7J2MXHJcbi8vIHt0eXBlOiAnTE9HX0lOJywgZGF0YToge+KApn19XHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICAvLyBpZih0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xyXG4gICAgLy8gfVxyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgLy8gcmVkdXggbWlkZGxld2FyZSDrtpnsnbTquLBcclxuICAgIC8vIOuwsO2PrOyaqVxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gICAgLy8g6rCc67Cc7JqpXHJcbiAgICAvLyBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgIC8vICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKFtdKSlcclxuICAgIC8vICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKFtdKSlcclxuXHJcbiAgICAvLyBzdGF0ZeyZgCByZWR1Y2VyIO2PrO2VqO2VmOuKlCDqsoPsnYQgc3RvcmXrnbzqs6Ag7ZWoXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICAvLyDqsJzrsJztlaDrlYwgZGVidWfrpbwgdHJ1ZeuhnCDtlZjrqbQg642UIOyekOyEuO2VmOqyjCDrgrTsmqnsnYQg67O07Jes7KO864uI6rmQIOuzgOqyve2VmOuptCDsoovsnYxcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==