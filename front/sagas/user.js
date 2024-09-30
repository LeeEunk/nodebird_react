import axios from "axios";
import { all, call, delay, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import { 
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, 
    LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, 
    SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, 
    UNFOLLOW_FAILURE, 
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS} from "../reducers/user";

function logInAPI(data) { //generate X
    // 서버에 요청을 보내는 부분
    return axios.post('/user/login', data);
}

// saga 명령어를 쓰는 이유 -> 테스트하기 좋음
function* logIn(action) {
    try {// 함수, 매개변수들
        const result = yield call(logInAPI, action.data) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
        // yield가 await과 비슷 blocking
        // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

        console.log("saga login");
        // yield delay(1000);
        yield put({ //put은 action을 dispatch
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function logOutAPI() { //generate X
    return axios.post('/user/logout');
}

function* logOut() {
    try {
        yield call(logOutAPI) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
        // yield가 await과 비슷 blocking
        // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

        // yield delay(1000);
        yield put({ //put은 action을 dispatch
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        })
    }
}

function signUpAPI(data){
    return axios.post('/user', data)
}

function* signUp(action) {
    try{
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        // yield delay(1000);
        yield put({ //put은 action을 dispatch
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        console.err(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}
function followAPI(){
    return axios.post('/api/follow')
}

function* follow(action) {
    try{
        // const result = yield call(followAPI)
        yield delay(1000);
        yield put({ //put은 action을 dispatch
            type: FOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.err(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}

function unfollowAPI(){
    return axios.post('/api/unfollow')
}

function* unfollow(action) {
    try{
        // const result = yield call(unfollowAPI)
        yield delay(1000);
        yield put({ //put은 action을 dispatch
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.err(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}


//이벤트 리스너들 잔뜩 만들어줌
// yield 특징 일회용임 -> 한번만 사용할 수 있음 -> 그래서 while 반복문을 활용함 -> 무한루프로 안빠짐 한번만 실행하기 때문
// while 대신에 take는 동기적으로 동작, takeEvery는 비동기적으로 동작
function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow); 
}

function* watchUnfollow() {
    yield takeEvery(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
    // throttle -> 2초 안에 여러번해도 무응답, 2초 안에 한번만 적용 
    yield takeLatest(LOG_IN_REQUEST, logIn); //take: LOG_IN액션이 실행될때까지 기다림
}

function* watchLogOut() {
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}