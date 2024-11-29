import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import { useInView } from 'react-intersection-observer';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { LOAD_RELATED_POSTS_REQUEST } from '../../reducers/post';

// 브라우저와 프론트서버에서 실행되는 부분
const Related = () => {
    const dispatch = useDispatch();
    const {me} = useSelector((state) => state.user);
    const {mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state) => state.post);
    const [ref, inView] = useInView();

    useEffect(() => {
        if(retweetError){
          alert(retweetError);
        }
      },[retweetError]);


    useEffect( () => {
        if (inView && hasMorePosts && !loadPostsLoading) {
            const lastId = mainPosts[mainPosts.length - 1]?.id; //마지막 게시글의 id
            dispatch({
                type: LOAD_RELATED_POSTS_REQUEST,
                lastId,
            });
        }
    }, [inView, hasMorePosts, loadPostsLoading, mainPosts])



    return (
        <AppLayout>
            {/* PostForm은 로그인한 사람들에게만 보임 */}
            {me && <PostForm />}
            {/* 반복문이 바뀌지 않으면 key를 index로 써도 되나 바뀔 경우, 그러면 안됨 -> 고유 id로 지정 */}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />) }
            <div ref={hasMorePosts && !loadPostsLoading ? ref: undefined} style={{ height: 10}} />
            
        </AppLayout>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async(context) => {
    console.log(context);
    const cookie = context.req? context.req.headers.cookie : '';
    // 쿠키 안쓰면 빈 값;
    axios.defaults.headers.Cookie = '';
    // 막기위해서는
    if (context.req && cookie ) {
        axios.defaults.headers.Cookie = cookie; // 다른 브라우저에서도 내 쿠키를 사용하는 케이스가 생김
    } 
    
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
    });
    // SUCCESS될때까지 기다려줌
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Related;