import React from 'react'
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import { Avatar, Card } from 'antd';
import wrapper from '../store/configureStore';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { END } from 'redux-saga';


const About = () => {
    // 서버사이드렌더링 안되면 안보여짐
    const { userInfo } = useSelector((state) => state.user);

    return (
    <AppLayout>
        <head>
            <title> Eunkk | Nodebird </title>
        </head>
        {userInfo
            ? (
                <Card
                    actions = {[
                        <div key="twit">
                            게시물
                            <br />
                            {userInfo.Posts}
                        </div>,
                        <div key="following">
                            팔로잉
                            <br />
                            {userInfo.Following}
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
                            description="노드버드 매니아"
                        />
                    </Card>
            ) 
            : null}
    </AppLayout>
  );
}

//언제 접속해도 데이터가 바뀔일이 없으면 스태틱 -> 보통 블로그글에 쓰임, 뉴스정도에 쓰임 ->  html 페이지
//접속할때마다 상황이 바뀌면 getServerSideProps를 써야함
export const getStaticProps = wrapper.getStaticProps(async (context) => {
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
        data: 1,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default About;