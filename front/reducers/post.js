
// import shortId from 'shortid';
// import {produce} from 'immer';
// import faker from 'faker';

import produce from '../util/produce';


export const initialState = {
    // 대문자로 시작하는 애들은 서버에서 주는 걸 의미
    followPosts: [],
    mainPosts: [],
    singlePost: null,
    imagePaths: [],
    hasMorePosts: true,
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    updatePostLoading: false,
    updatePostDone: false,
    updatePostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,
    retweetLoading: false,
    retweetDone: false,
    retweetError: null,
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

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_RELATED_POSTS_REQUEST = 'LOAD_RELATED_POSTS_REQUEST';
export const LOAD_RELATED_POSTS_SUCCESS = 'LOAD_RELATED_POSTS_SUCCESS';
export const LOAD_RELATED_POSTS_FAILURE = 'LOAD_RELATED_POSTS_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

// 동적 액션 트레이
export const addPost = (data)=> ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data)=> ({
    type: ADD_COMMENT_REQUEST,
    data,
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
    return produce(state, (draft) => {
        switch (action.type) {
            case REMOVE_IMAGE:
                draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data); //front에서만 제거
                break;
            
            case RETWEET_REQUEST:
                    draft.retweetLoading = true;
                    draft.retweetDone = false;
                    draft.retweetError = null;
                    break;
            case RETWEET_SUCCESS:{
                    draft.mainPosts.unshift(action.data);
                    draft.retweetLoading = false;
                    draft.retweetDone = true;
                    break;
                }
            case RETWEET_FAILURE:
                draft.retweetLoading = false;
                draft.retweetError =  action.error;
                break;

            case UPLOAD_IMAGES_REQUEST:
                    draft.uploadImagesLoading = true;
                    draft.uploadImagesDone = false;
                    draft.uploadImagesError = null;
                    break;
            case UPLOAD_IMAGES_SUCCESS:{
                    draft.imagePaths = draft.imagePaths.concat(action.data);
                    draft.uploadImagesLoading = false;
                    draft.uploadImagesDone = true;
                    break;
                }
            case UPLOAD_IMAGES_FAILURE:
                draft.uploadImagesLoading = false;
                draft.uploadImagesError =  action.error;
                break;

            case LIKE_POST_REQUEST:
                    draft.likePostLoading = true;
                    draft.likePostDone = false;
                    draft.likePostError = null;
                    break;
            case LIKE_POST_SUCCESS:{
                    const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                    if (post) {
                        post.Likers.push({ id: action.data.UserId });
                    }
                    draft.likePostLoading = false;
                    draft.likePostDone = true;
                    if (draft.singlePost?.Likers){
                        draft.singlePost.Likers.push({ id: action.data.UserId})
                    }
                    break;
                }
            case LIKE_POST_FAILURE:
                draft.likePostLoading = false;
                draft.likePostError =  action.error;
                break;
            
            case UNLIKE_POST_REQUEST:
                    draft.unlikePostLoading = true;
                    draft.unlikePostDone = false;
                    draft.unlikePostError = null;
                    break;
            case UNLIKE_POST_SUCCESS:{
                    const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                    if(post) {
                        post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
                    }
                    draft.unlikePostLoading = false;
                    draft.unlikePostDone = true;
                    if (draft.singlePost?.Likers) {
                        const index = draft.singlePost.Likers.find((v) => v.id === action.data.UserId);
                        draft.singlePost.Likers.splice(index, 1);
                    }
                    break;
                }
            case UNLIKE_POST_FAILURE:
                draft.unlikePostLoading = false;
                draft.unlikePostError =  action.error;
                break;

            case LOAD_POST_REQUEST:
                    draft.loadPostLoading = true;
                    draft.loadPostDone = false;
                    draft.loadPostError = null;
                    break;
            case LOAD_POST_SUCCESS:
                    draft.loadPostLoading = false;
                    draft.loadPostDone = true;
                    draft.singlePost = action.data;
                    break;
            case LOAD_POST_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsError =  action.error;
                break;
            case LOAD_USER_POSTS_REQUEST:
            case LOAD_HASHTAG_POSTS_REQUEST:
            case LOAD_RELATED_POSTS_REQUEST:
            case LOAD_POSTS_REQUEST:
                    draft.loadPostsLoading = true;
                    draft.loadPostsDone = false;
                    draft.loadPostsError = null;
                    break;
            case LOAD_USER_POSTS_SUCCESS:
            case LOAD_HASHTAG_POSTS_SUCCESS:
            case LOAD_RELATED_POSTS_SUCCESS:
            case LOAD_POSTS_SUCCESS:
                    draft.loadPostsLoading = false;
                    draft.loadPostsDone = true;
                    draft.mainPosts = draft.mainPosts.concat(action.data); // 기존 게시물에 추가
                    // draft.hasMorePosts = draft.mainPosts.length < 50; //최대 50개의 게시물만 보임
                    draft.hasMorePosts = action.data.length === 10; //10의 배수인 게시물이면 hasmorepost가 false로 안바뀐다는 단점이 있음
                    break;
            case LOAD_USER_POSTS_FAILURE:
            case LOAD_HASHTAG_POSTS_FAILURE:
            case LOAD_RELATED_POSTS_FAILURE:
            case LOAD_POSTS_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsError =  action.error;
                break;

            case ADD_POST_REQUEST:
                    // ...state,
                    draft.addPostLoading = true;
                    draft.addPostDone = false;
                    draft.addPostError = null;
                    break;
            case ADD_POST_SUCCESS:
                    draft.addPostLoading = false;
                    draft.addPostDone = true;
                    draft.mainPosts.unshift(action.data);// dummyPost를 앞에다가 추가해야 신규 게시물이 맨앞에서 보임
                    draft.imagePaths = [];
                    break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError =  action.error;
                break;

            case UPDATE_POST_REQUEST:
                    // ...state,
                    draft.updatePostLoading = true;
                    draft.updatePostDone = false;
                    draft.updatePostError = null;
                    break;
            case UPDATE_POST_SUCCESS:
                    draft.updatePostLoading = false;
                    draft.updatePostDone = true;
                    draft.mainPosts.find((v) => v.id === action.data.PostId).content = action.data.content;
                    break;
            case UPDATE_POST_FAILURE:
                draft.updatePostLoading = false;
                draft.updatePostError =  action.error;
                break;

            case REMOVE_POST_REQUEST:
                draft.removePostLoading =  true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
                draft.removePostLoading = false;
                draft.removePostDone = true;
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading= false;
                draft.removePostError= action.error;
                break;

            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone= false;
                draft.addCommentError= null;
                break;
            case ADD_COMMENT_SUCCESS:
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Comments.unshift(action.data);
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
                // const post = { ...state.mainPosts[postIndex]};
                // post.Comments = [dummyComment(action.data.content), ...post.Comments];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = post; 
                draft.addCommentLoading= false;
                draft.addCommentDone= true;
                break;
                
            case ADD_COMMENT_FAILURE:    
                draft.addCommentLoading= false;
                draft.addCommentError= action.error;
                break;
    
            default:
                break;
        }
    });

    
};

export default reducer;