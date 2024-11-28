// post/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import { useSelector } from 'react-redux';

import wrapper from '../../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import PostForm from '../../components/PostForm';

const Post = () => {
  const { singlePost, loadPostError } = useSelector((state) => state.post);

  useEffect( () => {
    if (inView && hasMorePosts && !loadPostsLoading) {
        const lastId = mainPosts[mainPosts.length - 1]?.id; //마지막 게시글의 id
        dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
        });
    }
}, [inView, hasMorePosts, loadPostsLoading, mainPosts])


  if (!singlePost) {
    return <div>로딩 중이거나 게시글을 찾을 수 없습니다.</div>
  }

  if (loadPostError) {
    return <div> 게시글 로드 중 에러가 발생했씁니다 : { loadPostError }</div>
  }

  return (
    <AppLayout>
        {/* PostForm은 로그인한 사람들에게만 보임 */}
        {me && <PostForm />}
        {/* 반복문이 바뀌지 않으면 key를 index로 써도 되나 바뀔 경우, 그러면 안됨 -> 고유 id로 지정 */}
        {mainPosts.map((post) => <PostCard key={post.id} post={post} />) }
        <div ref={hasMorePosts && !loadPostsLoading ? ref: undefined} style={{ height: 10}} />
        
    </AppLayout>
);
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    console.log(context);
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POST_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });
  

export default Post;