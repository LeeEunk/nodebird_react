import produce from '../util/produce';

export const initialState = {
    loadMyInfoLoading: false, // 유저 정보 가져오기 시도중 -> true면 로딩창 띄우기
    loadMyInfoDone: false,
    loadMyInfoError: null,
    followLoading: false, // 팔로우 시도중 -> true면 로딩창 띄우기
    followDone: false,
    followError: null,
    unfollowLoading: false, // 언팔로우 시도중 -> true면 로딩창 띄우기
    unfollowDone: false,
    unfollowError: null,
    logInLoading: false, // 로그인 시도중 -> true면 로딩창 띄우기
    logInDone: false,
    logInError: null,
    logOutLoading: false, //로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, //회원가입 시도중
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false, //닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,
    loadFollowersLoading: false, //팔로워 시도중
    loadFollowersDone: false,
    loadFollowersError: null,
    loadFollowingsLoading: false, //팔로잉 시도중
    loadFollowingsDone: false,
    loadFollowingsError: null,
    removeFollowerLoading: false, //팔로워 삭제 시도중
    removeFollowerDone: false,
    removeFollowerError: null,
    me : null,
    userInfo:null,
    signUpData: {},
    loginData: {},    
}

// 변수명 SYNTAX 에러를 막기 위해 따로 빼줌
// reducer에서는 상태를 바꾸고 싶다면 액션을 변경해주면 됨
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CAHNGE_NICKANME_REQUEST';
export const CAHNGE_NICKANME_SUCCESS = 'CAHNGE_NICKANME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

// const dummyUser = (data) => ({
//     ...data,
//     nickname : 'eunkk',
//     id: 1,
//     Posts: [{id: 1}],
//     Followings: [{nickname: 'eunkk'}, {nickname: 'suzi'}, {nickname: 'nini'},],
//     Followers: [{nickname: 'eunkk'}, {nickname: 'suzi'}, {nickname: 'nini'},],
// })

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    }
}

const reducer = (state = initialState, action) => produce(state, (draft) => { // 화살표 함수 return 생략 원래는 return produce임
        switch (action.type) {
            case REMOVE_FOLLOWER_REQUEST : 
                draft.removeFollowerLoading= true;
                draft.removeFollowerError= null;
                draft.removeFollowerDone= false;
                break;

            case REMOVE_FOLLOWER_SUCCESS : 
                draft.removeFollowerLoading= false;
                draft.removeFollowerDone= true;
                draft.me.Followers = draft.me.Followers.filter((v) => v.id !== action.data.UserId);
                break;
        
            case REMOVE_FOLLOWER_FAILURE : 
                draft.removeFollowerLoading= false;
                draft.removeFollowerError= action.error;
                break;

            case LOAD_FOLLOWINGS_REQUEST : 
                draft.loadFollowingsLoading= true;
                draft.loadFollowingsError= null;
                draft.loadFollowingsDone= false;
                break;

            case LOAD_FOLLOWINGS_SUCCESS : 
                draft.loadFollowingsLoading= false;
                draft.loadFollowingsDone= true;
                draft.me.Followings = action.data;
                break;
            
            case LOAD_FOLLOWINGS_FAILURE : 
                draft.loadFollowingsLoading= false;
                draft.loadFollowingsError= action.error;
                break;
        
            case LOAD_FOLLOWERS_REQUEST : 
                draft.loadFollowersLoading= true;
                draft.loadFollowersError= null;
                draft.loadFollowersDone= false;
                break;

            case LOAD_FOLLOWERS_SUCCESS : 
                draft.loadFollowersLoading= false;
                draft.loadFollowersDone= true;
                draft.me.Followers = action.data;
                break;
        
            case LOAD_FOLLOWERS_FAILURE : 
                draft.loadFollowersLoading= false;
                draft.loadFollowersError= action.error;
                break;
            
            case LOAD_MY_INFO_REQUEST : 
                draft.loadMyInfoLoading= true;
                draft.loadMyInfoError= null;
                draft.loadMyInfoDone= false;
                break;

            case LOAD_MY_INFO_SUCCESS : 
                draft.loadMyInfoLoading= false;
                draft.me = action.data;
                draft.loadMyInfoDone= true;
                break;
        
            case LOAD_MY_INFO_FAILURE : 
                draft.loadMyInfoLoading= false;
                draft.loadMyInfoError= action.error;
                break;

            case LOAD_USER_REQUEST : 
                draft.loadUserLoading= true;
                draft.loadUserError= null;
                draft.loadUserDone= false;
                break;

            case LOAD_USER_SUCCESS : 
                draft.loadUserLoading= false;
                draft.loadUserDone= true;
                draft.userInfo = action.data; //상대방 정보 가져올때 사용
                break;
            
            case LOAD_USER_FAILURE : 
                draft.loadUserLoading= false;
                draft.loadUserError= action.error;
                break;

            case FOLLOW_REQUEST : 
                draft.followLoading= true;
                draft.followError= null;
                draft.followDone= false;
                break;

            case FOLLOW_SUCCESS : 
                draft.followLoading= false;
                draft.followDone= true;
                draft.me.Followings.push({ id: action.data.UserId });
                break;
            
            case FOLLOW_FAILURE : 
                draft.followLoading= false;
                draft.followError= action.error;
                break;

            case UNFOLLOW_REQUEST : 
                console.log('reducer unfollow');
                // 다음 스테이트로 값이 변경, initial state와는 다른 객체가 생김
                draft.unfollowLoading= true;
                draft.unfollowError= null;
                draft.unfollowDone= false;
                break;

            case UNFOLLOW_SUCCESS : 
                draft.unfollowLoading= false;
                draft.unfollowDone= true;
                draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data.UserId);
                break;
            
            case UNFOLLOW_FAILURE : 
                draft.unfollowLoading= false;
                draft.unfollowError= action.error;
                break;

            case LOG_IN_REQUEST : 
                console.log('reducer login');
                // 다음 스테이트로 값이 변경, initial state와는 다른 객체가 생김
                draft.logInLoading= true;
                draft.logInError= null;
                draft.logInDone= false;
                break;

            case LOG_IN_SUCCESS : 
                draft.logInLoading= false;
                draft.logInDone= true;
                draft.me= action.data;
                break;
            
            case LOG_IN_FAILURE : 
                draft.logInLoading= false;
                draft.logInError= action.error;
                break;

            case LOG_OUT_REQUEST : 
                draft.logOutLoading= true;
                draft.logOutDone= false;
                draft.logOutError= null;
                break;
            case LOG_OUT_SUCCESS : 
                draft.logOutLoading= false;
                draft.logOutDone= true;
                draft.me= null;
                break;
            case LOG_OUT_FAILURE : 
                draft.logOutLoading= false;
                draft.logOutError= action.error;
                break;

            case CHANGE_NICKNAME_REQUEST : 
                draft.changeNicknameLoading= true;
                draft.changeNicknameDone= false;
                draft.changeNicknameError= null;
                break;
                        
            case CAHNGE_NICKANME_SUCCESS : 
                draft.me.nickname = action.data.nickname;
                draft.changeNicknameLoading= false;
                draft.changeNicknameDone= true;
                break;
                
            case CHANGE_NICKNAME_FAILURE : 
                draft.changeNicknameLoading= false;
                draft.changeNicknameError= action.error;
                break;

            case SIGN_UP_REQUEST : 
                draft.signUpLoading= true;
                draft.signUpDone= false;
                draft.signUpError= null;
                break;
                        
            case SIGN_UP_SUCCESS : 
                draft.signUpLoading= false;
                draft.signUpDone= true;
                break;
                
            case SIGN_UP_FAILURE : 
                draft.signUpLoading= false;
                draft.signUpError= action.error;
                break;

            case ADD_POST_TO_ME : 
                draft.me.Posts.unshift({ id: action.data });
                                        // me: {
                                        //     ...state.me,
                                        //     Posts: [{
                                        //         id:action.data,
                                        //     }, ...state.me.Posts],
                                        // }
                break;

            case REMOVE_POST_OF_ME : 
                draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
                                        // me: {
                                        //     ...state.me,
                                        //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
                                        // }
                break;
            default:
                break;
        }
    });

export default reducer;