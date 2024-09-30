
import shortId from 'shortid';
import {produce} from 'immer';
import faker from 'faker';


export const initialState = {
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
    addCommentError: null,
};

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: shortId.generate(),
    User: {
        id: shortId.generate(),
        nickname: faker.name.findName()
    },
    content: faker.lorem.paragraph(),
    Images: [{
        src: faker.image.image(),
    }],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.sentence(),
    }],
}));


export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// 동적 액션 트레이
export const addPost = (data)=> ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data)=> ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ( {
    // 더미데이터 id는 npm i shortid 활용해야 encounter 에러가 안남 -> id 정하기 애매할때 사용하기 좋음
    // faker는 닉네임을 임의로 지정해줌 
    id: data.id,
    content: data.content,
    User: {
        id:1,
        nickname: 'eunk',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id:1,
        nickname: 'eunk',
    },
})
//이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성을 지키면서)
// immer를 사용할때 state는 절대 건들면 안되고 draft만 조작해야 함
const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
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
                draft.loadPostsError =  action.error;
                break;

            case ADD_POST_REQUEST:
                    // ...state,
                    draft.addPostLoading = true;
                    draft.addPostDone = false;
                    draft.addPostError = null;
                    break;
            case ADD_POST_SUCCESS:
                    draft.mainPosts.unshift(action.data);// dummyPost를 앞에다가 추가해야 신규 게시물이 맨앞에서 보임
                    draft.addPostLoading = false;
                    draft.addPostDone = true;
                    break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError =  action.error;
                break;

            case REMOVE_POST_REQUEST:
                draft.removePostLoading =  true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
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
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
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