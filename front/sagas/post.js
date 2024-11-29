import axios from "axios";
import { all, call, delay, fork, put, takeLatest, throttle } from "redux-saga/effects";
import { 
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
     ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, 
     generateDummyPost, 
     LIKE_POST_FAILURE, 
     LIKE_POST_REQUEST, 
     LIKE_POST_SUCCESS,
     LOAD_POST_FAILURE, 
     LOAD_POST_REQUEST, 
     LOAD_POST_SUCCESS,  
     LOAD_USER_POSTS_FAILURE, 
     LOAD_USER_POSTS_REQUEST, 
     LOAD_USER_POSTS_SUCCESS, 
     LOAD_HASHTAG_POSTS_SUCCESS,  
     LOAD_HASHTAG_POSTS_FAILURE, 
     LOAD_HASHTAG_POSTS_REQUEST,  
     LOAD_POSTS_SUCCESS,  
     LOAD_POSTS_FAILURE, 
     LOAD_POSTS_REQUEST, 
     UPDATE_POST_FAILURE, 
     UPDATE_POST_REQUEST,
     UPDATE_POST_SUCCESS,
     REMOVE_POST_FAILURE, 
     REMOVE_POST_REQUEST,
     REMOVE_POST_SUCCESS,
     RETWEET_FAILURE,
     RETWEET_REQUEST,
     RETWEET_SUCCESS,
     UNLIKE_POST_FAILURE,
     UNLIKE_POST_REQUEST,
     UNLIKE_POST_SUCCESS,
     UPLOAD_IMAGES_FAILURE,
     UPLOAD_IMAGES_REQUEST,
     UPLOAD_IMAGES_SUCCESS,
     LOAD_RELATED_POSTS_REQUEST,
     LOAD_RELATED_POSTS_SUCCESS,
     LOAD_RELATED_POSTS_FAILURE} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
// import shortId from "shortid";
function retweetAPI(data) { //generate X
    return axios.post(`/post/${data}/retweet`);
}

function* retweet(action) {
    try {
        const result = yield call(retweetAPI, action.data) 
        yield put({ //put은 action을 dispatch
            type: RETWEET_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: RETWEET_FAILURE,
            error: err.response.data,
        });
    }
}

function uploadImagesAPI(data) { //generate X
    return axios.post('/post/images', data);
}

function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data) 
        yield put({ //put은 action을 dispatch
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err.response?.data || err.message);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error:  err.response?.data || 'Upload failed',
        })
    }
}

function likePostAPI(data) { //generate X
    return axios.patch(`/post/${data}/like`);
}

function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data) 
        yield put({ //put은 action을 dispatch
            type: LIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LIKE_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function unlikePostAPI(data) { //generate X
    return axios.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data) 
        yield put({ //put은 action을 dispatch
            type: UNLIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function loadHashtagPostsAPI(data, lastId) {
    return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`); 
}

function* loadHashtagPosts(action) {
    try {
        console.log('logHashtag console');
        const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
        yield put({ //put은 action을 dispatch
            type: LOAD_HASHTAG_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_HASHTAG_POSTS_FAILURE,
            error: err.response.data,
        })
    }
}

function loadUserPostsAPI(data, lastId) { 
    return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`); 
}

function* loadUserPosts(action) {
    try {
        const result = yield call(loadUserPostsAPI, action.data, action.lastId) 
        yield put({
            type: LOAD_USER_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_USER_POSTS_FAILURE,
            error: err.response.data,
        })
    }
}

function loadRelatedPostsAPI(lastId) { 
    return axios.get(`/posts/related/posts?lastId=${lastId || 0}`); 
}

function* loadRelatedPosts(action) {
    try {
        const result = yield call(loadRelatedPostsAPI, action.lastId); 
        console.log('load related posts : ' ,action.data);
        yield put({
            type: LOAD_RELATED_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_RELATED_POSTS_FAILURE,
            error: err.response.data,
        })
    }
}


function loadPostsAPI(lastId) { //generate X
    return axios.get(`/posts?lastId=${lastId || 0}`); //get방식은 데이터 캐싱도 가능
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.lastId) 
        yield put({ //put은 action을 dispatch
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.message,
        })
    }
}

function loadPostAPI(data) { 
    return axios.get(`/post/${data}`); 
}

function* loadPost(action) {
    try {
        const result = yield call(loadPostAPI, action.data); 
        yield put({ //put은 action을 dispatch
            type: LOAD_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function addPostAPI(data) { //generate X
    return axios.post('/post', data); // formData는 {} 로 감싸면 안됨
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
        // yield가 await과 비슷 blocking
        // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

        // yield delay(1000);
        // const id = shortId.generate();
        yield put({ //put은 action을 dispatch
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put({ //put은 action을 dispatch
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    } catch (err) {
        console.error('Add Post Error',err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response?.data || 'Unknown error',
        })
    }
}

function updatePostAPI(data) {
    return axios.patch(`/post/${data.PostId}`, data); 
}

function* updatePost(action) {
    try {
        const result = yield call(updatePostAPI, action.data); 
        yield put({ //put은 action을 dispatch
            type: UPDATE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UPDATE_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function removePostAPI(data) { //generate X
    return axios.delete(`/post/${data}`);
}

function* removePost(action) {
    try {
        const result = yield call(removePostAPI, action.data) // 요청의 결과값을 받음 fork는 비동기 함수 호출이고 call은 동기함수 호출임 
        // yield가 await과 비슷 blocking
        // 동기이기때문에 .then 처럼 결과값을 받을 때까지 기다려줌, 다음 메소드 실행안함

        // yield delay(1000);
        // const id = shortId.generate();
        yield put({ //put은 action을 dispatch
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        });
        yield put({ //put은 action을 dispatch
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
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
        console.error(err);
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
function* watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet);
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchLoadRelatedPosts() {
    yield takeLatest(LOAD_RELATED_POSTS_REQUEST, loadRelatedPosts);
}

function* watchLoadHashtagPosts() {
    yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function* watchLoadUserPosts() {
    yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function* watchLoadPosts() {
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
        yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchUpdatePost() {
    yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* postSaga() {
    yield all([
        fork(watchRetweet),
        fork(watchUploadImages),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchLoadPost),
        fork(watchUpdatePost),
        fork(watchAddPost),
        fork(watchLoadRelatedPosts),
        fork(watchLoadHashtagPosts),
        fork(watchLoadUserPosts),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}