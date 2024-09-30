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
var _jsxFileName = "C:\\Users\\user\\Downloads\\react-nodebird\\front\\pages\\_app.js";
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
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
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
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));
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
const dummyPost = data => ({
  // 더미데이터 id는 npm i shortid 활용해야 encounter 에러가 안남 -> id 정하기 애매할때 사용하기 좋음
  // faker는 닉네임을 임의로 지정해줌 
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'eunk'
  },
  Images: [],
  Comments: []
});
const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'eunk'
  }
});
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
        draft.mainPosts = action.data.concat(draft.mainPosts);
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
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CAHNGE_NICKANME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const initialState = {
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
const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: 'eunkk',
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: 'eunkk'
  }, {
    nickname: 'suzi'
  }, {
    nickname: 'nini'
  }],
  Followers: [{
    nickname: 'eunkk'
  }, {
    nickname: 'suzi'
  }, {
    nickname: 'nini'
  }]
});
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
      draft.me = dummyUser(action.data);
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
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([
  // all은 배열을 받아서 한방에(동시에) 실행을 해줌
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]),
  // fork는 함수를 실행함 비동기적으로
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]) // call 동기적으로 함수 호출
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/post/${data}`);
}
function* loadPosts(action) {
  try {
    // const result = yield call(addPostAPI, action.data) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
    // yield가 await과 비슷 blocking
    // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10)
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/post', data);
}
function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
    // yield가 await과 비슷 blocking
    // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: id
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/post/${data.postId}/comment`, data);
}
function* addComment(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data
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



function logInAPI(data) {
  //generate X
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', data);
}

// saga 명령어를 쓰는 이유 -> 테스트하기 좋음
function* logIn(action) {
  try {
    // 함수, 매개변수들
    //const result = yield call(logInAPI, action.data) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
    // yield가 await과 비슷 blocking
    // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

    console.log("saga login");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/logout');
}
function* logOut() {
  try {
    // const result = yield call(logOutAPI) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
    // yield가 await과 비슷 blocking
    // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 action을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
      // data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}
function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:3065/user', data);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
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
  if (typeof action === 'function') {
    return action(dispatch, getState, extraArgument);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2Rpc3QvY2pzL3JlZHV4LmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJfanN4REVWIiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJIZWFkIiwiY2hhclNldCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjaGFuZ2VOaWNrbmFtZSIsImRhdGEiLCJ0eXBlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJfb2JqZWN0U3ByZWFkIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImZpbmQiLCJwb3N0SWQiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2thbm1lTG9hZGluZyIsImNoYW5nZU5pY2thbm1lRG9uZSIsImNoYW5nZU5pY2thbm1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNBSE5HRV9OSUNLQU5NRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInB1c2giLCJVc2VySWQiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImxvYWRQb3N0c0FQSSIsImF4aW9zIiwiZ2V0IiwibG9hZFBvc3RzIiwiZGVsYXkiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJyZXN1bHQiLCJjYWxsIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsInRha2VFdmVyeSIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiZXh0cmFBcmd1bWVudCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQ0FBbUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2RkFBNkY7QUFDekg7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGlCQUFpQixjQUFjOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxNQUFNLDBDQUEwQyxLQUFLO0FBQ3ZGOztBQUVB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Q0E7O0VBRUE7RUFDQSxNQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUMxSCxpREFBTyxFQUFFcUgsUUFBUSxDQUFDO0VBQzVDSSxLQUFLLENBQUNFLFFBQVEsR0FBR1QsY0FBYyxDQUFDVSxHQUFHLENBQUMxRCw4Q0FBUSxDQUFDO0VBQzdDLE9BQU91RCxLQUFLO0FBRWhCLENBQUM7QUFFRCxNQUFNL0wsT0FBTyxHQUFHbU0sd0VBQWEsQ0FBQ1osY0FBYyxFQUFFO0VBQzFDO0VBQ0FhLEtBQUs7QUFDVCxDQUFDLENBQUM7QUFFYXBNLHNFQUFPLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR0QixrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgX19ET19OT1RfVVNFX19BY3Rpb25UeXBlczogKCkgPT4gYWN0aW9uVHlwZXNfZGVmYXVsdCxcbiAgYXBwbHlNaWRkbGV3YXJlOiAoKSA9PiBhcHBseU1pZGRsZXdhcmUsXG4gIGJpbmRBY3Rpb25DcmVhdG9yczogKCkgPT4gYmluZEFjdGlvbkNyZWF0b3JzLFxuICBjb21iaW5lUmVkdWNlcnM6ICgpID0+IGNvbWJpbmVSZWR1Y2VycyxcbiAgY29tcG9zZTogKCkgPT4gY29tcG9zZSxcbiAgY3JlYXRlU3RvcmU6ICgpID0+IGNyZWF0ZVN0b3JlLFxuICBpc0FjdGlvbjogKCkgPT4gaXNBY3Rpb24sXG4gIGlzUGxhaW5PYmplY3Q6ICgpID0+IGlzUGxhaW5PYmplY3QsXG4gIGxlZ2FjeV9jcmVhdGVTdG9yZTogKCkgPT4gbGVnYWN5X2NyZWF0ZVN0b3JlXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcblxuLy8gc3JjL3V0aWxzL2Zvcm1hdFByb2RFcnJvck1lc3NhZ2UudHNcbmZ1bmN0aW9uIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoY29kZSkge1xuICByZXR1cm4gYE1pbmlmaWVkIFJlZHV4IGVycm9yICMke2NvZGV9OyB2aXNpdCBodHRwczovL3JlZHV4LmpzLm9yZy9FcnJvcnM/Y29kZT0ke2NvZGV9IGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMuIGA7XG59XG5cbi8vIHNyYy91dGlscy9zeW1ib2wtb2JzZXJ2YWJsZS50c1xudmFyICQkb2JzZXJ2YWJsZSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8IFwiQEBvYnNlcnZhYmxlXCIpKCk7XG52YXIgc3ltYm9sX29ic2VydmFibGVfZGVmYXVsdCA9ICQkb2JzZXJ2YWJsZTtcblxuLy8gc3JjL3V0aWxzL2FjdGlvblR5cGVzLnRzXG52YXIgcmFuZG9tU3RyaW5nID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KFwiXCIpLmpvaW4oXCIuXCIpO1xudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBgQEByZWR1eC9JTklUJHsvKiBAX19QVVJFX18gKi8gcmFuZG9tU3RyaW5nKCl9YCxcbiAgUkVQTEFDRTogYEBAcmVkdXgvUkVQTEFDRSR7LyogQF9fUFVSRV9fICovIHJhbmRvbVN0cmluZygpfWAsXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiAoKSA9PiBgQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTiR7cmFuZG9tU3RyaW5nKCl9YFxufTtcbnZhciBhY3Rpb25UeXBlc19kZWZhdWx0ID0gQWN0aW9uVHlwZXM7XG5cbi8vIHNyYy91dGlscy9pc1BsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBsZXQgcHJvdG8gPSBvYmo7XG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG8gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IG51bGw7XG59XG5cbi8vIHNyYy91dGlscy9raW5kT2YudHNcbmZ1bmN0aW9uIG1pbmlLaW5kT2YodmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMClcbiAgICByZXR1cm4gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKHZhbCA9PT0gbnVsbClcbiAgICByZXR1cm4gXCJudWxsXCI7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgY2FzZSBcInN5bWJvbFwiOlxuICAgIGNhc2UgXCJmdW5jdGlvblwiOiB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcbiAgICByZXR1cm4gXCJhcnJheVwiO1xuICBpZiAoaXNEYXRlKHZhbCkpXG4gICAgcmV0dXJuIFwiZGF0ZVwiO1xuICBpZiAoaXNFcnJvcih2YWwpKVxuICAgIHJldHVybiBcImVycm9yXCI7XG4gIGNvbnN0IGNvbnN0cnVjdG9yTmFtZSA9IGN0b3JOYW1lKHZhbCk7XG4gIHN3aXRjaCAoY29uc3RydWN0b3JOYW1lKSB7XG4gICAgY2FzZSBcIlN5bWJvbFwiOlxuICAgIGNhc2UgXCJQcm9taXNlXCI6XG4gICAgY2FzZSBcIldlYWtNYXBcIjpcbiAgICBjYXNlIFwiV2Vha1NldFwiOlxuICAgIGNhc2UgXCJNYXBcIjpcbiAgICBjYXNlIFwiU2V0XCI6XG4gICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xuICB9XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgXCJcIik7XG59XG5mdW5jdGlvbiBjdG9yTmFtZSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgPT09IFwiZnVuY3Rpb25cIiA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGlzRXJyb3IodmFsKSB7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgdmFsLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3Iuc3RhY2tUcmFjZUxpbWl0ID09PSBcIm51bWJlclwiO1xufVxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudG9EYXRlU3RyaW5nID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHZhbC5nZXREYXRlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHZhbC5zZXREYXRlID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIGxldCB0eXBlT2ZWYWwgPSB0eXBlb2YgdmFsO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdHlwZU9mVmFsID0gbWluaUtpbmRPZih2YWwpO1xuICB9XG4gIHJldHVybiB0eXBlT2ZWYWw7XG59XG5cbi8vIHNyYy9jcmVhdGVTdG9yZS50c1xuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMikgOiBgRXhwZWN0ZWQgdGhlIHJvb3QgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKHJlZHVjZXIpfSdgKTtcbiAgfVxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGVuaGFuY2VyID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIGVuaGFuY2VyID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMCkgOiBcIkl0IGxvb2tzIGxpa2UgeW91IGFyZSBwYXNzaW5nIHNldmVyYWwgc3RvcmUgZW5oYW5jZXJzIHRvIGNyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtIHRvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjY3JlYXRpbmctYS1zdG9yZS13aXRoLWVuaGFuY2VycyBmb3IgYW4gZXhhbXBsZS5cIik7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB2b2lkIDA7XG4gIH1cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMSkgOiBgRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnJHtraW5kT2YoZW5oYW5jZXIpfSdgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cbiAgbGV0IGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgbGV0IGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICBsZXQgY3VycmVudExpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGxldCBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgbGV0IGxpc3RlbmVySWRDb3VudGVyID0gMDtcbiAgbGV0IGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICBjdXJyZW50TGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbmV4dExpc3RlbmVycy5zZXQoa2V5LCBsaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDMpIDogXCJZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiBUaGUgcmVkdWNlciBoYXMgYWxyZWFkeSByZWNlaXZlZCB0aGUgc3RhdGUgYXMgYW4gYXJndW1lbnQuIFBhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNCkgOiBgRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnJHtraW5kT2YobGlzdGVuZXIpfSdgKTtcbiAgICB9XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDUpIDogXCJZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy5cIik7XG4gICAgfVxuICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBjb25zdCBsaXN0ZW5lcklkID0gbGlzdGVuZXJJZENvdW50ZXIrKztcbiAgICBuZXh0TGlzdGVuZXJzLnNldChsaXN0ZW5lcklkLCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNikgOiBcIllvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy5cIik7XG4gICAgICB9XG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVySWQpO1xuICAgICAgY3VycmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNykgOiBgQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuIEluc3RlYWQsIHRoZSBhY3R1YWwgdHlwZSB3YXM6ICcke2tpbmRPZihhY3Rpb24pfScuIFlvdSBtYXkgbmVlZCB0byBhZGQgbWlkZGxld2FyZSB0byB5b3VyIHN0b3JlIHNldHVwIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBvdGhlciB2YWx1ZXMsIHN1Y2ggYXMgJ3JlZHV4LXRodW5rJyB0byBoYW5kbGUgZGlzcGF0Y2hpbmcgZnVuY3Rpb25zLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjbWlkZGxld2FyZSBhbmQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTYtYXN5bmMtbG9naWMjdXNpbmctdGhlLXJlZHV4LXRodW5rLW1pZGRsZXdhcmUgZm9yIGV4YW1wbGVzLmApO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg4KSA6ICdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGFuIGFjdGlvbiB0eXBlIHN0cmluZyBjb25zdGFudC4nKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTcpIDogYEFjdGlvbiBcInR5cGVcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nLiBJbnN0ZWFkLCB0aGUgYWN0dWFsIHR5cGUgd2FzOiAnJHtraW5kT2YoYWN0aW9uLnR5cGUpfScuIFZhbHVlIHdhczogJyR7YWN0aW9uLnR5cGV9JyAoc3RyaW5naWZpZWQpYCk7XG4gICAgfVxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg5KSA6IFwiUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLlwiKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMCkgOiBgRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnJHtraW5kT2YobmV4dFJlZHVjZXIpfWApO1xuICAgIH1cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgY29uc3Qgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gXCJvYmplY3RcIiB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDExKSA6IGBFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKG9ic2VydmVyKX0nYCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyQXNPYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICAgIGlmIChvYnNlcnZlckFzT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXJBc09ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBbc3ltYm9sX29ic2VydmFibGVfZGVmYXVsdF0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuSU5JVFxuICB9KTtcbiAgY29uc3Qgc3RvcmUgPSB7XG4gICAgZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyLFxuICAgIFtzeW1ib2xfb2JzZXJ2YWJsZV9kZWZhdWx0XTogb2JzZXJ2YWJsZVxuICB9O1xuICByZXR1cm4gc3RvcmU7XG59XG5mdW5jdGlvbiBsZWdhY3lfY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xufVxuXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbi8vIHNyYy9jb21iaW5lUmVkdWNlcnMudHNcbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIGNvbnN0IHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICBjb25zdCBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IGFjdGlvblR5cGVzX2RlZmF1bHQuSU5JVCA/IFwicHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlXCIgOiBcInByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyXCI7XG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gXCJTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgdG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLlwiO1xuICB9XG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiBgVGhlICR7YXJndW1lbnROYW1lfSBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJHtraW5kT2YoaW5wdXRTdGF0ZSl9XCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcga2V5czogXCIke3JlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpfVwiYDtcbiAgfVxuICBjb25zdCB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcigoa2V5KSA9PiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBhY3Rpb25UeXBlc19kZWZhdWx0LlJFUExBQ0UpXG4gICAgcmV0dXJuO1xuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBgVW5leHBlY3RlZCAke3VuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyBcImtleXNcIiA6IFwia2V5XCJ9IFwiJHt1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKX1cIiBmb3VuZCBpbiAke2FyZ3VtZW50TmFtZX0uIEV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIke3JlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpfVwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLmA7XG4gIH1cbn1cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih2b2lkIDAsIHtcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuSU5JVFxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMikgOiBgVGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcIiR7a2V5fVwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIElmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIHlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuYCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih2b2lkIDAsIHtcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuUFJPQkVfVU5LTk9XTl9BQ1RJT04oKVxuICAgIH0pID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMykgOiBgVGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcIiR7a2V5fVwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIERvbid0IHRyeSB0byBoYW5kbGUgJyR7YWN0aW9uVHlwZXNfZGVmYXVsdC5JTklUfScgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiBuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuYCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICBjb25zdCByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgY29uc3QgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gcmVkdWNlcktleXNbaV07XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHdhcm5pbmcoYE5vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIiR7a2V5fVwiYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuICBjb25zdCBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG4gIGxldCB1bmV4cGVjdGVkS2V5Q2FjaGU7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuICBsZXQgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcbiAgICAgIGNvbnN0IHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW2tleV07XG4gICAgICBjb25zdCBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVba2V5XTtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE0KSA6IGBXaGVuIGNhbGxlZCB3aXRoIGFuIGFjdGlvbiBvZiB0eXBlICR7YWN0aW9uVHlwZSA/IGBcIiR7U3RyaW5nKGFjdGlvblR5cGUpfVwiYCA6IFwiKHVua25vd24gdHlwZSlcIn0sIHRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXCIke2tleX1cIiByZXR1cm5lZCB1bmRlZmluZWQuIFRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuYCk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVba2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKHN0YXRlKS5sZW5ndGg7XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuLy8gc3JjL2JpbmRBY3Rpb25DcmVhdG9ycy50c1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh0aGlzLCBhcmdzKSk7XG4gIH07XG59XG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09IFwib2JqZWN0XCIgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNikgOiBgYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBidXQgaW5zdGVhZCByZWNlaXZlZDogJyR7a2luZE9mKGFjdGlvbkNyZWF0b3JzKX0nLiBEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiP2ApO1xuICB9XG4gIGNvbnN0IGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLy8gc3JjL2NvbXBvc2UudHNcbmZ1bmN0aW9uIGNvbXBvc2UoLi4uZnVuY3MpIHtcbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoYXJnKSA9PiBhcmc7XG4gIH1cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuICByZXR1cm4gZnVuY3MucmVkdWNlKChhLCBiKSA9PiAoLi4uYXJncykgPT4gYShiKC4uLmFyZ3MpKSk7XG59XG5cbi8vIHNyYy9hcHBseU1pZGRsZXdhcmUudHNcbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykge1xuICByZXR1cm4gKGNyZWF0ZVN0b3JlMikgPT4gKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZTIocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICAgIGxldCBkaXNwYXRjaCA9ICgpID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE1KSA6IFwiRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLlwiKTtcbiAgICB9O1xuICAgIGNvbnN0IG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICBkaXNwYXRjaDogKGFjdGlvbiwgLi4uYXJncykgPT4gZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmdzKVxuICAgIH07XG4gICAgY29uc3QgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoKG1pZGRsZXdhcmUpID0+IG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSkpO1xuICAgIGRpc3BhdGNoID0gY29tcG9zZSguLi5jaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdG9yZSxcbiAgICAgIGRpc3BhdGNoXG4gICAgfTtcbiAgfTtcbn1cblxuLy8gc3JjL3V0aWxzL2lzQWN0aW9uLnRzXG5mdW5jdGlvbiBpc0FjdGlvbihhY3Rpb24pIHtcbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QoYWN0aW9uKSAmJiBcInR5cGVcIiBpbiBhY3Rpb24gJiYgdHlwZW9mIGFjdGlvbi50eXBlID09PSBcInN0cmluZ1wiO1xufVxuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIF9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXMsXG4gIGFwcGx5TWlkZGxld2FyZSxcbiAgYmluZEFjdGlvbkNyZWF0b3JzLFxuICBjb21iaW5lUmVkdWNlcnMsXG4gIGNvbXBvc2UsXG4gIGNyZWF0ZVN0b3JlLFxuICBpc0FjdGlvbixcbiAgaXNQbGFpbk9iamVjdCxcbiAgbGVnYWN5X2NyZWF0ZVN0b3JlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZHV4LmNqcy5tYXAiLCIvLyBwYWdl65Ok7JeQIOqzte2GteyymOumrFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5cclxuLy8gQXBwIOydgCBpbmRleC5qc+ydmCDrtoDrqqhcclxuLy8gcGFnZXPrk6TsnZgg6rO17Ya1IOu2gOu2hCDshKTsoJVcclxuY29uc3QgQXBwID0gKCB7Q29tcG9uZW50fSApID0+IHsgLy9pbmRleC5qcyDsnZggcmV0dXJuIOu2gOu2hOydtCDsl6zquLDsnZggY29tcG9uZW50IOulvCDsnZjrr7jtlahcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgLy8gcmVkdXgg7IKs7JqpIOyLnCwg7Y6Y7J207KeA66W8IHByb3ZpZGVy66GcIOqwkOyLuOykmOyVvO2VqCwg64uoLCBuZXh064qUIOyViOyNqOuPhCDrkKhcclxuICAgICAgICAvLyA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04Jy8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIC8vIDwvUHJvdmlkZXI+XHJcbiAgICApXHJcbn07XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vIHJlZHVjZXLripQg7Iqk7JyE7LmY66y47J20IOuTpOyWtOyeiOuKlCDtlajsiJjsnoRcclxuLy8gcmVkdWNlcuuKlCDrqqjrkZAg642w7J207YSwIOq0gOugqOuQnOqxsOyehCBcclxuLy8gcmVkdWNlciDsqrzqsJzripQg6riw7KSAXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gICAgIHVzZXI6IHtcclxuICAgICAgICBcclxuLy8gICAgIH0sXHJcbi8vICAgICBwb3N0OiB7XHJcbiAgICAgICAgXHJcbi8vICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vIOq4sOuzuCBzdGF0ZeulvCDrs4Dqsr3tlZjqs6Ag7Iu27J2E65WMLCDripgg7JWh7IWY7J2EIOunjOuTpOyWtOyEnCDtnojsiqTthqDrpqzrpbwg7Jyg7KeA7ZWY6rOkIOuzgOqyvSDsp4TtlontlZjquLBcclxuXHJcbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0ge1xyXG4vLyAgICAgdHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcbi8vICAgICBkYXRhIDogJ2Rvb3lvbycsXHJcbi8vIH0gICBcclxuXHJcbi8vIOyVoeyFmOydhCDrp4zrk6TslrTso7zripQg7ZWo7IiY66W8IOunjOuTpOq4sCAo7J2066aE66eMIOyXrOufrOuyiCDrs4Dqsr3tlZjqs6Ag7Iu27J2E65WMIOyDiOuhnCDqs4Tsho0g6rCd7LK066W8IOyDneyEse2VtOyVvCDtlZjripTqsowg64Kt67mE7J2066+A66GcKVxyXG4vLyDrj5nsoIHsnLzroZwg7IOd7ISxXHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcbi8vY2hhbmdlTmlja25hbWUoJ2Rvb3lvbycpXHJcbi8vIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCdtZW1iZXIga3l1bmcnKSlcclxuXHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG4vLyBjb21iaW5lUmVkdWNlcnPrpbwg7J207Jqp7ZWY64qUIOydtOycoOuKlCDtlajsiJjsmYAg7ZWo7IiY66W8IO2VqeyzkOykmOyVvO2VmOq4sCDrlYzrrLhcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXggOiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAvLyBhY3Rpb27snYAg6rCd7LK07J6EXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG4gICAgICAgIC8vIOy0iOq4sO2ZlFxyXG4gICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiXHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQge3Byb2R1Y2V9IGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgLy8g64yA66y47J6Q66GcIOyLnOyeke2VmOuKlCDslaDrk6TsnYAg7ISc67KE7JeQ7IScIOyjvOuKlCDqsbgg7J2Y66+4XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbn0pKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuLy8g64+Z7KCBIOyVoeyFmCDtirjroIjsnbRcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSk9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSk9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICgge1xyXG4gICAgLy8g642U66+4642w7J207YSwIGlk64qUIG5wbSBpIHNob3J0aWQg7Zmc7Jqp7ZW07JW8IGVuY291bnRlciDsl5Drn6zqsIAg7JWI64KoIC0+IGlkIOygle2VmOq4sCDslaDrp6TtlaDrlYwg7IKs7Jqp7ZWY6riwIOyii+ydjFxyXG4gICAgLy8gZmFrZXLripQg64uJ64Sk7J6E7J2EIOyehOydmOuhnCDsp4DsoJXtlbTspIwgXHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnZXVuaycsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6ICdldW5rJyxcclxuICAgIH0sXHJcbn0pXHJcbi8v7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCjrtojrs4DshLHsnYQg7KeA7YKk66m07IScKVxyXG4vLyBpbW1lcuulvCDsgqzsmqntlaDrlYwgc3RhdGXripQg7KCI64yAIOqxtOuTpOuptCDslYjrkJjqs6AgZHJhZnTrp4wg7KGw7J6R7ZW07JW8IO2VqFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7IC8v7LWc64yAIDUw6rCc7J2YIOqyjOyLnOusvOunjCDrs7TsnoRcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9ICBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgICAgICAvLyAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpOy8vIGR1bW15UG9zdOulvCDslZ7sl5Dri6TqsIAg7LaU6rCA7ZW07JW8IOyLoOq3nCDqsozsi5zrrLzsnbQg66eo7JWe7JeQ7IScIOuztOyehFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gIGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSAgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgICAgICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDsgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTogICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHtwcm9kdWNlfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJEgLT4gdHJ1ZeuptCDroZzrlKnssL0g652E7Jqw6riwXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkSAtPiB0cnVl66m0IOuhnOuUqeywvSDrnYTsmrDquLBcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkSAtPiB0cnVl66m0IOuhnOuUqeywvSDrnYTsmrDquLBcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8v66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrYW5tZUxvYWRpbmc6IGZhbHNlLCAvL+uLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgICBjaGFuZ2VOaWNrYW5tZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja2FubWVFcnJvcjogbnVsbCxcclxuICAgIG1lIDogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSwgICAgXHJcbn1cclxuXHJcbi8vIOuzgOyImOuqhSBTWU5UQVgg7JeQ65+s66W8IOunieq4sCDsnITtlbQg65Sw66GcIOu5vOykjFxyXG4vLyByZWR1Y2Vy7JeQ7ISc64qUIOyDge2DnOulvCDrsJTqvrjqs6Ag7Iu264uk66m0IOyVoeyFmOydhCDrs4Dqsr3tlbTso7zrqbQg65CoXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDQUhOR0VfTklDS0FOTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDQUhOR0VfTklDS0FOTUVfU1VDQ0VTUyA9ICdDQUhOR0VfTklDS0FOTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZSA6ICdldW5raycsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzOiBbe2lkOiAxfV0sXHJcbiAgICBGb2xsb3dpbmdzOiBbe25pY2tuYW1lOiAnZXVua2snfSwge25pY2tuYW1lOiAnc3V6aSd9LCB7bmlja25hbWU6ICduaW5pJ30sXSxcclxuICAgIEZvbGxvd2VyczogW3tuaWNrbmFtZTogJ2V1bmtrJ30sIHtuaWNrbmFtZTogJ3N1emknfSwge25pY2tuYW1lOiAnbmluaSd9LF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHsgLy8g7ZmU7IK07ZGcIO2VqOyImCByZXR1cm4g7IOd6561IOybkOuemOuKlCByZXR1cm4gcHJvZHVjZeyehFxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZT0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAvLyDri6TsnYwg7Iqk7YWM7J207Yq466GcIOqwkuydtCDrs4Dqsr0sIGluaXRpYWwgc3RhdGXsmYDripQg64uk66W4IOqwneyytOqwgCDsg53quYBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmU9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIC8vIOuLpOydjCDsiqTthYzsnbTtirjroZwg6rCS7J20IOuzgOqyvSwgaW5pdGlhbCBzdGF0ZeyZgOuKlCDri6Trpbgg6rCd7LK06rCAIOyDneq5gFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZT0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ0FITkdFX05JQ0tBTk1FX1NVQ0NFU1MgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1MgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFBvc3RzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZDphY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCdcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbCAoWyAvLyBhbGzsnYAg67Cw7Je07J2EIOuwm+yVhOyEnCDtlZzrsKnsl5Ao64+Z7Iuc7JeQKSDsi6TtlonsnYQg7ZW07KSMXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksIC8vIGZvcmvripQg7ZWo7IiY66W8IOyLpO2Wie2VqCDruYTrj5nquLDsoIHsnLzroZxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSwgLy8gY2FsbCDrj5nquLDsoIHsnLzroZwg7ZWo7IiYIO2YuOy2nFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBcclxuICAgICBnZW5lcmF0ZUR1bW15UG9zdCwgXHJcbiAgICAgTE9BRF9QT1NUU19GQUlMVVJFLCBcclxuICAgICBMT0FEX1BPU1RTX1JFUVVFU1QsIFxyXG4gICAgIExPQURfUE9TVFNfU1VDQ0VTUywgXHJcbiAgICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgXHJcbiAgICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICBSRU1PVkVfUE9TVF9TVUNDRVNTfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHsgLy9nZW5lcmF0ZSBYXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIOyalOyyreydmCDqsrDqs7zqsJLsnYQg67Cb7J2MIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpzsnbTqs6AgY2FsbOydgCDrj5nquLDtlajsiJgg7Zi47Lac7J6EIFxyXG4gICAgICAgIC8vIHlpZWxk6rCAIGF3YWl06rO8IOu5hOyKtyBibG9ja2luZ1xyXG4gICAgICAgIC8vIOuPmeq4sOydtOq4sOuVjOusuOyXkCAudGhlbiDsspjrn7wg6rKw6rO86rCS7J2EIOuwm+ydhCDrlYzquYzsp4Ag6riw64uk66Ck7KSMLCDri6TsnYwg66mU7IaM65OcIOyLpO2WieyViO2VqFxyXG5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkgeyAvL2dlbmVyYXRlIFhcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIOyalOyyreydmCDqsrDqs7zqsJLsnYQg67Cb7J2MIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpzsnbTqs6AgY2FsbOydgCDrj5nquLDtlajsiJgg7Zi47Lac7J6EIFxyXG4gICAgICAgIC8vIHlpZWxk6rCAIGF3YWl06rO8IOu5hOyKtyBibG9ja2luZ1xyXG4gICAgICAgIC8vIOuPmeq4sOydtOq4sOuVjOusuOyXkCAudGhlbiDsspjrn7wg6rKw6rO86rCS7J2EIOuwm+ydhCDrlYzquYzsp4Ag6riw64uk66Ck7KSMLCDri6TsnYwg66mU7IaM65OcIOyLpO2WieyViO2VqFxyXG5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHsgLy9nZW5lcmF0ZSBYXHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIOyalOyyreydmCDqsrDqs7zqsJLsnYQg67Cb7J2MIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpzsnbTqs6AgY2FsbOydgCDrj5nquLDtlajsiJgg7Zi47Lac7J6EIFxyXG4gICAgICAgIC8vIHlpZWxk6rCAIGF3YWl06rO8IOu5hOyKtyBibG9ja2luZ1xyXG4gICAgICAgIC8vIOuPmeq4sOydtOq4sOuVjOusuOyXkCAudGhlbiDsspjrn7wg6rKw6rO86rCS7J2EIOuwm+ydhCDrlYzquYzsp4Ag6riw64uk66Ck7KSMLCDri6TsnYwg66mU7IaM65OcIOyLpO2WieyViO2VqFxyXG5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHsgLy9nZW5lcmF0ZSBYXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIHRha2VMYXRlc3TripQg7YG066atIOyLpOyImOuhnCAy67KIIO2WiOydhCDrlYwg7Zi57J2AIDEwMOuyiOydhCDriIzrn6zrj4Qg66eI7KeA66eJ6rq866eMIOyLpO2Wie2VqCBcclxuLy8tPiDrj5nsi5zsl5Ag66Gc65Sp65Cc6rGw66eMIOy3qOyGjOuQqCjri6gsIO2UhOuhoO2EsOyEnOuyhOyXkOyEnOunjCDsoIHsmqksIOq3uOuemOyEnCDrsLHsl5Trk5zsl5DshJwgMuuyiCDsoIDsnqXrkJjsp4Ag7JWK7JWY64qU7KeAIOyytO2BrCDtlYTsmpQpXHJcbi8vIOyalOyyreydgCAy67KI6rCE6rGw6rOgIOydkeuLteunjCDrp4jsp4Drp4nqurwg7ZWc6rCc66GcIOuwm+ydjCwg7JqU7LKt7J2AIOy3qOyGjOqwgCDslYjrkKhcclxuLy8g66eM7JW9IOyyq+uyiOynuOq6vOunjCDtlZjqs6Ag7Iu27Jy866m0IHRha2VMZWFkaW5n64+EIOyeiOydjFxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsIFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1N9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7IC8vZ2VuZXJhdGUgWFxyXG4gICAgLy8g7ISc67KE7JeQIOyalOyyreydhCDrs7TrgrTripQg67aA67aEXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG4vLyBzYWdhIOuqheugueyWtOulvCDsk7DripQg7J207JygIC0+IO2FjOyKpO2KuO2VmOq4sCDsoovsnYxcclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHsvLyDtlajsiJgsIOunpOqwnOuzgOyImOuTpFxyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpIC8vIOyalOyyreydmCDqsrDqs7zqsJLsnYQg67Cb7J2MIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpzsnbTqs6AgY2FsbOydgCDrj5nquLDtlajsiJgg7Zi47Lac7J6EIFxyXG4gICAgICAgIC8vIHlpZWxk6rCAIGF3YWl06rO8IOu5hOyKtyBibG9ja2luZ1xyXG4gICAgICAgIC8vIOuPmeq4sOydtOq4sOuVjOusuOyXkCAudGhlbiDsspjrn7wg6rKw6rO86rCS7J2EIOuwm+ydhCDrlYzquYzsp4Ag6riw64uk66Ck7KSMLCDri6TsnYwg66mU7IaM65OcIOyLpO2WieyViO2VqFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInNhZ2EgbG9naW5cIik7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkgeyAvL2dlbmVyYXRlIFhcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSkgLy8g7JqU7LKt7J2YIOqysOqzvOqwkuydhCDrsJvsnYwgZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nOydtOqzoCBjYWxs7J2AIOuPmeq4sO2VqOyImCDtmLjstpzsnoQgXHJcbiAgICAgICAgLy8geWllbGTqsIAgYXdhaXTqs7wg67mE7Iq3IGJsb2NraW5nXHJcbiAgICAgICAgLy8g64+Z6riw7J206riw65WM66y47JeQIC50aGVuIOyymOufvCDqsrDqs7zqsJLsnYQg67Cb7J2EIOuVjOq5jOyngCDquLDri6TroKTspIwsIOuLpOydjCDrqZTshozrk5wg7Iuk7ZaJ7JWI7ZWoXHJcblxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXInLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnIoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZm9sbG93JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSlcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dOydgCBhY3Rpb27snYQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnIoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJKVxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV07J2AIGFjdGlvbuydhCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL+ydtOuypO2KuCDrpqzsiqTrhIjrk6Qg7J6U65ypIOunjOuTpOyWtOykjFxyXG4vLyB5aWVsZCDtirnsp5Ug7J287ZqM7Jqp7J6EIC0+IO2VnOuyiOunjCDsgqzsmqntlaAg7IiYIOyeiOydjCAtPiDqt7jrnpjshJwgd2hpbGUg67CY67O166y47J2EIO2ZnOyaqe2VqCAtPiDrrLTtlZzro6jtlITroZwg7JWI67mg7KeQIO2VnOuyiOunjCDsi6TtlontlZjquLAg65WM66y4XHJcbi8vIHdoaWxlIOuMgOyLoOyXkCB0YWtl64qUIOuPmeq4sOyggeycvOuhnCDrj5nsnpEsIHRha2VFdmVyeeuKlCDruYTrj5nquLDsoIHsnLzroZwg64+Z7J6RXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgLy8gdGhyb3R0bGUgLT4gMuy0iCDslYjsl5Ag7Jes65+s67KI7ZW064+EIOustOydkeuLtSwgMuy0iCDslYjsl5Ag7ZWc67KI66eMIOyggeyaqSBcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTsgLy90YWtlOiBMT0dfSU7slaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumvFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59IiwiLy9jb25maWd1cmVTdG9yZS5qc1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG4vLyBpbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuLy8g66+465Ok7Juo7Ja064qUIO2VreyDgSAz64uoIOqzoOywqO2VqOyImOyehCwgYWN0aW9u7J20IGRpc3BhdGNo65CY7Ja0IOuhnOq5heuQmOuKlCDtlajsiJhcclxuLy8gdGh1bmvripQg7ZWt7IOBIGFjdGlvbuydtCDtlajsiJjsnbgg6rK97JqwIGFjdGlvbuydgCDsm5Drnpgg6rCd7LK07J24642wIHRodW5r7JeQ7IScIO2VqOyImOyehCA9PiDsp4Dsl7DtlajsiJjsnbTquLDsl5Ag64KY7KSR7JeQIOyLpO2Wie2VtOykhCDsiJgg7J6I7J2MXHJcbi8vIHJlZHV4IGRldnRvb2xz66W8IOuMgOyytO2VoCDsiJgg7J6I7J2MIC0+IGNvbnNvbGXroZwg7LCN7J2MXHJcbi8vIHt0eXBlOiAnTE9HX0lOJywgZGF0YToge+KApn19XHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICBpZih0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgLy8gcmVkdXggbWlkZGxld2FyZSDrtpnsnbTquLBcclxuICAgIC8vIOuwsO2PrOyaqVxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAvLyDqsJzrsJzsmqlcclxuICAgIC8vIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgLy8gICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoW10pKVxyXG4gICAgLy8gICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoW10pKVxyXG5cclxuICAgIC8vIHN0YXRl7JmAIHJlZHVjZXIg7Y+s7ZWo7ZWY64qUIOqyg+ydhCBzdG9yZeudvOqzoCDtlahcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG5cclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICAvLyDqsJzrsJztlaDrlYwgZGVidWfrpbwgdHJ1ZeuhnCDtlZjrqbQg642UIOyekOyEuO2VmOqyjCDrgrTsmqnsnYQg67O07Jes7KO864uI6rmQIOuzgOqyve2VmOuptCDsoovsnYxcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==