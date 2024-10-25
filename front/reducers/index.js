import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import { combineReducers } from 'redux';

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
// const changeNickname = (data) => {
//     return {
//         type : 'CHANGE_NICKNAME',
//         data,
//     }
// };
//changeNickname('dooyoo')
// store.dispatch(changeNickname('member kyung'))


// (이전상태, 액션) => 다음상태
// combineReducers를 이용하는 이유는 함수와 함수를 합쳐줘야하기 때문
const rootReducer = (state, action) => {
    switch(action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        // 초기화
        default:  {
            const combinedReducer = combineReducers({
                user,
                post,
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;