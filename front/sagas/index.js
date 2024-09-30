import { all, fork } from 'redux-saga/effects'

import postSaga from './post'
import userSaga from './user'

export default function* rootSaga() {
    yield all ([ // all은 배열을 받아서 한방에(동시에) 실행을 해줌
        fork(postSaga), // fork는 함수를 실행함 비동기적으로
        fork(userSaga), // call 동기적으로 함수 호출
    ]);
}