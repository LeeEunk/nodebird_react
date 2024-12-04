import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';
import { useInView } from 'react-intersection-observer';
import { END } from 'redux-saga';

import AppLayout from '../../components/AppLayout';
import wrapper from '../../store/configureStore';
import PostCard from '../../components/PostCard';
import { LOAD_RELATED_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import axios from 'axios';

const Related = () => {
    const dispatch = useDispatch();
    const { mainPosts, loadPostsLoading, hasMorePosts } = useSelector((state) => state.post);
    const { me } = useSelector((state) => state.user);

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView && hasMorePosts && !loadPostsLoading) {
            const lastId = mainPosts[mainPosts.length - 1]?.id;
            dispatch({
                type: LOAD_RELATED_POSTS_REQUEST,
                lastId,
            });
        }
    }, [inView, hasMorePosts, loadPostsLoading, mainPosts]);

    return (
        <AppLayout>
            <h1>Followed Posts</h1>
            {mainPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
            <div ref={hasMorePosts && !loadPostsLoading ? ref : undefined} style={{ height: 10 }} />
            {loadPostsLoading && <p>Loading...</p>}
            {userInfo && (userInfo.id !== me?.id)
        ? (
          <Card
            style={{ marginBottom: 20 }}
            actions={[
              <div key="twit">
                게시물
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                팔로잉
                <br />
                {userInfo.Followings}
              </div>,
              <div key="follower">
                팔로워
                <br />
                {userInfo.Followers}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
            />
          </Card>
        )
        : null}
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    
    context.store.dispatch({
      type: LOAD_RELATED_POSTS_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });

export default Related;
