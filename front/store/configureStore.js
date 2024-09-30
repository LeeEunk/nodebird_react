//configureStore.js
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

// 미들웨어는 항상 3단 고차함수임, action이 dispatch되어 로깅되는 함수
// thunk는 항상 action이 함수인 경우 action은 원래 객체인데 thunk에서 함수임 => 지연함수이기에 나중에 실행해줄 수 있음
// redux devtools를 대체할 수 있음 -> console로 찍음
// {type: 'LOG_IN', data: {…}}
const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    if(typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
    }
    return next(action);
}


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    // redux middleware 붙이기
    // 배포용
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    // 개발용
    // const enhancer = process.env.NODE_ENV === 'production'
    //     ? compose(applyMiddleware([]))
    //     : composeWithDevTools(applyMiddleware([]))

    // state와 reducer 포함하는 것을 store라고 함
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;

};

const wrapper = createWrapper(configureStore, {
    // 개발할때 debug를 true로 하면 더 자세하게 내용을 보여주니깐 변경하면 좋음
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;