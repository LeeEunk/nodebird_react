import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';
import { END } from 'redux-saga';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

import axios from 'axios';
import { LOAD_POSTS_REQUEST, LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from '../../reducers/user';
import PostCard from '../../components/PostCard';
import wrapper from '../../store/configureStore';
import AppLayout from '../../components/AppLayout';

const User = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
    const { userInfo, me } = useSelector((state) => state.user);

    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView && hasMorePosts && !loadPostsLoading) {
            const lastId = mainPosts[mainPosts.length - 1]?.id;
            dispatch({
                type: LOAD_POSTS_REQUEST,
                lastId,
                data: id,
            });
        }
    }, [inView, hasMorePosts, loadPostsLoading, mainPosts, id]);
    
    return (
        <AppLayout>
            { userInfo && ( 
            <Head>
                <title>
                    {userInfo.nickname}님의 글
                </title>
                {/* og : sns 공유 시 미리보기 제공 */}
                <meta name="desciption" content={`${userInfo.nickname}님의 게시글`}/>
                <meta property="og:title" content={`${userInfo.nickname}님의 게시글`}/>
                <meta property="og:description" content={`${userInfo.nickname}님의 게시글`}/>
                <meta property="og:image" content="https://nodebird.com/favicon.ico"/>
                <meta property="og:url" content={`https://nodebird.com/user/${id}`}/>
            </Head>
        )}
            {userInfo && (userInfo.id !== me?.id)
                ? (
                    <Card
                        style={{ marginBottom: 20}}
                        actions={[
                            <div key="twit"> 짹짹 <br />
                            {userInfo.Posts}
                            </div>,
                            <div key="following">
                                팔로잉
                                <br />
                                {userInfo.Followings}
                            </div>,
                            <div key="follower">
                                팔로워
                                <br/>
                                {userInfo.Followers}
                            </div>,
                        ]}
                        >
                        <Card.Meta
                            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                            title={userInfo.nickname}
                        />
                        </Card>
                ) : null}
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
        type: LOAD_USER_POSTS_REQUEST,
        data: params.id,
    });
    store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch({
        type: LOAD_USER_REQUEST,
        data: params.id,
    });
    store.dispatch(END);
    // SUCCESS될때까지 기다려줌
    await store.sagaTask.toPromise();
});

export default User;