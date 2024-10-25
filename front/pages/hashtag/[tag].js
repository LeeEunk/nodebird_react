//hashtag/[tag].js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

import axios from 'axios';
import { LOAD_HASHTAG_POSTS_REQUEST, LOAD_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import PostCard from '../../components/PostCard';
import wrapper from '../../store/configureStore';
import AppLayout from '../../components/AppLayout';

const Hashtag = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { tag } = router.query;
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView && hasMorePosts && !loadPostsLoading) {
            const lastId = mainPosts[mainPosts.length - 1]?.id;
            dispatch({
                type: LOAD_POSTS_REQUEST,
                lastId,
                data: tag,
            });
        }
    }, [inView, hasMorePosts, loadPostsLoading, mainPosts, tag]);
    
    return (
        <AppLayout>
            {mainPosts.map((c) => (
                <PostCard key={c.id} post={c} />
            ))}
            <div ref={hasMorePosts && !loadPostsLoading ? ref : undefined} style={{ height: 10 }}></div>
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
    
    const cookie = req ? req.headers.cookie : '';
    // 쿠키 안쓰면 빈 값;
    axios.defaults.headers.Cookie = '';
    // 막기위해서는
    if (req && cookie ) {
        axios.defaults.headers.Cookie = cookie; // 다른 브라우저에서도 내 쿠키를 사용하는 케이스가 생김
    } 
    store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: params.tag,
    });
    store.dispatch(END);
    // SUCCESS될때까지 기다려줌
    await store.sagaTask.toPromise();
});

export default Hashtag;