import axios from "axios";
import { all, call, delay, fork, put, takeLatest, throttle } from "redux-saga/effects";
import { 
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
     ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, 
     generateDummyPost, 
     LOAD_POSTS_FAILURE, 
     LOAD_POSTS_REQUEST, 
     LOAD_POSTS_SUCCESS, 
     REMOVE_POST_FAILURE, 
     REMOVE_POST_REQUEST,
     REMOVE_POST_SUCCESS} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import shortId from "shortid";

function loadPostsAPI(data) { //generate X
    return axios.get('/posts', data);
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.data) 
        yield put({ //put은 action을 dispatch
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            data: err.response.data,
        })
    }
}

function addPostAPI(data) { //generate X
    return axios.post('/post', {content: data });
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
        // yield가 await과 비슷 blocking
        // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

        // yield delay(1000);
        const id = shortId.generate();
        yield put({ //put은 action을 dispatch
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put({ //put은 action을 dispatch
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        })
    }
}

function removePostAPI(data) { //generate X
    return axios.delete('/api/post', data);
}

function* removePost(action) {
    try {
        // const result = yield call(removePostAPI, action.data) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
        // yield가 await과 비슷 blocking
        // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

        yield delay(1000);
        const id = shortId.generate();
        yield put({ //put은 action을 dispatch
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });
        yield put({ //put은 action을 dispatch
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            data: err.response.data,
        })
    }
}

function addCommentAPI(data) { //generate X
    return axios.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);
        // yield delay(1000);
        yield put({ //put은 action을 dispatch
            type: ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        })
    }
}



// takeLatest는 클릭 실수로 2번 했을 때 혹은 100번을 눌러도 마지막꺼만 실행함 
//-> 동시에 로딩된거만 취소됨(단, 프론터서버에서만 적용, 그래서 백엔드에서 2번 저장되지 않았는지 체크 필요)
// 요청은 2번간거고 응답만 마지막꺼 한개로 받음, 요청은 취소가 안됨
// 만약 첫번째꺼만 하고 싶으면 takeLeading도 있음
function* watchLoadPosts() {
    yield throttle(2000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
        yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}