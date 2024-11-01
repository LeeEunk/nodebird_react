import axios from "axios";
import { all, call, delay, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import { 
    CAHNGE_NICKANME_SUCCESS,
    CHANGE_NICKNAME_FAILURE,
    CHANGE_NICKNAME_REQUEST,
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWERS_SUCCESS,
    LOAD_FOLLOWINGS_FAILURE,
    LOAD_FOLLOWINGS_REQUEST,
    LOAD_FOLLOWINGS_SUCCESS,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_MY_INFO_FAILURE,
    LOAD_MY_INFO_REQUEST,
    LOAD_MY_INFO_SUCCESS,
    LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, 
    LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, 
    SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, 
    UNFOLLOW_FAILURE, 
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS, 
    REMOVE_FOLLOWER_REQUEST,
    REMOVE_FOLLOWER_SUCCESS,
    REMOVE_FOLLOWER_FAILURE
} from "../reducers/user";



function removeFollowerAPI(data) { //get, delete는 data가 없음
    return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
    try {
        const result = yield call(removeFollowerAPI, action.data);
        // yield delay(1000);
        yield put({
            type: REMOVE_FOLLOWER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_FOLLOWER_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowersAPI(data) { //get, delete는 data가 없음
    return axios.get('/user/followers', data);
}

function* loadFollowers(action) {
    try {
        const result = yield call(loadFollowersAPI, action.data);
        // yield delay(1000);
        yield put({
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWERS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowingsAPI(data) { //get, delete는 data가 없음
    return axios.get('/user/followings', data);
}

function* loadFollowings(action) {
    try {
        const result = yield call(loadFollowingsAPI, action.data);
        // yield delay(1000);
        yield put({
            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWINGS_FAILURE,
            error: err.response.data,
        });
    }
}

function changeNicknameAPI(data) { //get, delete는 data가 없음
    return axios.patch('/user/nickname', {nickname: data});
}

function* changeNickname(action) {
    try {
        const result = yield call(changeNicknameAPI, action.data);
        // yield delay(1000);
        yield put({
            type: CAHNGE_NICKANME_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data,
        });
    }
}

function loadUserAPI(data) { //get, delete는 data가 없음
    return axios.get(`/user/${data}`);
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        console.log('loadUserData', result.data)
        // yield delay(1000);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data,
        });
    }
}

function loadMyInfoAPI() { //get, delete는 data가 없음
    return axios.get('/user');
}

function* loadMyInfo() {
    try {
        const result = yield call(loadMyInfoAPI);
        // yield delay(1000);
        yield put({
            type: LOAD_MY_INFO_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error('Error in loadMyInfo saga:', err);
        yield put({
            type: LOAD_MY_INFO_FAILURE,
            error: err.message,
        })
    }
}


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
        console.error("Login request failed:", error);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function logOutAPI() { //generate X
    axios.post('/user/logout')
    
  .then((response) => {
    console.log('로그아웃 성공 Response:', response);
  })
  .catch((error) => {
    if (error.response) {
      // 서버가 2xx 이외의 응답을 반환한 경우
      console.log('Error data:', error.response.data);
      console.log('Error status:', error.response.status);
      console.log('Error headers:', error.response.headers);
    } else if (error.request) {
      // 요청이 만들어졌으나 응답이 없는 경우
      console.log('No response received:', error.request);
    } else {
      // 요청을 만들다가 발생한 에러
      console.log('Error message:', error.message);
    }
    console.log('Error config:', error.config);
  });
}

function* logOut() {
    try {
        yield call(logOutAPI); // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
        // yield가 await과 비슷 blocking
        // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

        // yield delay(1000);
        yield put({ //put은 action을 dispatch
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
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
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}
function followAPI(data){
    return axios.patch(`/user/${data}/follow`);
}

function* follow(action) {
    try{
        const result = yield call(followAPI, action.data)
        // yield delay(1000);
        yield put({ //put은 action을 dispatch
            type: FOLLOW_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.err(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}

function unfollowAPI(data){
    return axios.delete(`/user/${data}/follow`)
}

function* unfollow(action) {
    try{
        const result = yield call(unfollowAPI, action.data)
        // yield delay(1000);
        yield put({ //put은 action을 dispatch
            type: UNFOLLOW_SUCCESS,
            data: result.data,
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
function* watchRemoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower); 
}

function* watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers); 
}

function* watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings); 
}

function* watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname); 
}

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser); 
}

function* watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo); 
}

function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow); 
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
    // throttle -> 2초 안에 여러번해도 무응답, 2초 안에 한번만 적용 
    yield takeLatest(LOG_IN_REQUEST, logIn); //take: LOG_IN액션이 실행될때까지 기다림
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchRemoveFollower),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchChangeNickname),
        fork(watchLoadUser),
        fork(watchLoadMyInfo),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}