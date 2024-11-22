// post/[id].js
// 동적 라우팅용 페이지
import React from 'react';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import wrapper from '../../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';

const Post = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);

  // if (router.isFallback) {
  //   return <div>로딩중...</div>;
  // }

  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost.User.nickname}
          님의 글
        </title>
        <meta name="description" content={singlePost.content} />
        <meta property="og:title" content={`${singlePost.User.nickname}님의 게시글`} />
        <meta property="og:description" content={singlePost.content} />
        <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'http://eunkk.store/favicon.ico'} />
        <meta property="og:url" content={`http://eunkk.store/post/${id}`} />
      </Head>
      <PostCard post={singlePost} />
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
  const {id} = context.params;

  if (!id || isNaN(Number(id))) { //id가 숫자가 아니면 404로 처리
    return{notFound: true };
  }
  console.log(context);
  // 쿠키 안쓰면 빈 값;  
  axios.defaults.headers.Cookie = '';
    // 막기위해서는
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 다른 브라우저에서도 내 쿠키를 사용하는 케이스가 생김
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  // SUCCESS될때까지 기다려줌
  await context.store.sagaTask.toPromise();
});

export default Post;