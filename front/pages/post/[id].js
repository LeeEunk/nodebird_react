// post/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import wrapper from '../../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { singlePost, loadPostError } = useSelector((state) => state.post);

  // if (router.isFallback) {
  //   return <div>로딩중...</div>;
  // }

  if (!singlePost) {
    return <div>로딩 중이거나 게시글을 찾을 수 없습니다.</div>
  }

  if (loadPostError) {
    return <div> 게시글 로드 중 에러가 발생했씁니다 : { loadPostError }</div>
  }

  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost.User?.nickname || '익명'}
          님의 글
        </title>
        <meta name="description" content={singlePost.content || ''} />
        <meta property="og:title" content={`${singlePost.User?.nickname || '익명'}님의 게시글`} />
        <meta property="og:description" content={singlePost.content || ''} />
        <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'} />
        <meta property="og:url" content={`https://eunkk.store/post/${id}`} />
      </Head>
      {/* <PostCard post={singlePost} /> */}
      {singlePost ? (
        <PostCard post={singlePost} />
      ) : (
        <div>
          {loadPostError ? (
            <div>게시글 로딩 중 오류 발생: {loadPostError}</div>
          ) : (
            <div>게시글을 찾을 수 없습니다.</div>
          )}
        </div>
      )}
    </AppLayout>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: '1' } },
//       { params: { id: '2' } },
//       { params: { id: '3' } },
//     ],
//     fallback: true,
//   };
// }

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