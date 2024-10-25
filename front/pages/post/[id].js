// post/[id].js
// 동적 라우팅용 페이지
import React from 'react';
import axios from 'axios';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import { useSelector } from 'react-redux';
import wrapper from '../../store/configureStore';
import { END } from 'redux-saga';

const Post = () => {
    const router = useRouter();
    const {id} = router.query;
    const { singlePost } = useSelector((state) => state.post);

    return (
        <AppLayout>
            <Head>
                <title>
                    {singlePost.User.nickname}님의 글
                </title>
                {/* og : sns 공유 시 미리보기 제공 */}
                <meta name="desciption" content={singlePost.content}/>
                <meta property="og:title" content={`${singlePost.User.nickname}님의 게시글`}/>
                <meta property="og:description" content={singlePost.content}/>
                <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'}/>
                <meta property="og:url" content={`https://nodebird.com/post/${id}`}/>
                
                
            </Head>
            <div>{id}번 게시글</div>
            <PostCard post={singlePost}/>
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async(context) => {
    console.log(context);
    const cookie = context.req ? context.req.headers.cookie : '';
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
        type: LOAD_POST_REQUEST,
        data: context.params.id,
    })
    // SUCCESS될때까지 기다려줌
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Post;