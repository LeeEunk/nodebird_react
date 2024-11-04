import React, { useEffect, useCallback, useState} from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';
import { END } from "redux-saga";
import axios from 'axios';
import useSWR from 'swr';

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user'; 


import wrapper from "../store/configureStore";
import { backUrl } from '../config/config';

const fetcher = (url) => axios.get(url, {withCredentials: true}).then((result) => result.data);

const Profile = () => {

    // 더미데이터
    // const follwerList = [{nickname: 'eunk'},{nickname: '바보'},{nickname: '노드버드오피셜'}];
    // const followingList = [{nickname: 'eunk'},{nickname: '바보'},{nickname: '노드버드오피셜'}];
    // const dispatch = useDispatch();

    const {me} = useSelector((state) => state.user);
    const [followersLimit, setFollowersLimit] = useState(3);
    const [followingsLimit, setFollowingsLimit] = useState(3);

    const { data: followersData, error:followerError} = useSWR(`${backUrl}/user/followers?limit=${followersLimit}`, fetcher);
    const { data: followingsData, error: followingError} = useSWR(`${backUrl}/user/followings?limit=${followingsLimit}`, fetcher);


    // const {data: followersData, error: followerError} = useSWR(`http://localhost:3065/user/followers`, fetcher);
    // const {data: followingsData, error: followingError} = useSWR(`http://localhost:3065/user/followings`, fetcher);


    // useEffect(() => {
    //     dispatch({
    //         type: LOAD_FOLLOWERS_REQUEST
    //     });
    //     dispatch({
    //         type: LOAD_FOLLOWINGS_REQUEST
    //     });
    // },[]);

    useEffect(() => { // 로그인 안하면 프로필 안보이게 바로 home으로 이동
        if(!(me && me.id)) {
            Router.push('/');
        }
    },[ me && me.id]);

    const loadMoreFollowings = useCallback(() => { // 기존꺼보다 3개씩 보여주기
        setFollowingsLimit((prev) => prev + 3 );
    }, []);

    const loadMoreFollowers = useCallback(() => {
        setFollowersLimit((prev) => prev + 3);
    },[]);
    
    if(!me) {
        return '내 정보 로딩중...';
    }

     // return이 hooks보다 위에 있을 수 없음. 왜냐 리턴하면 끝나버려서 다음 훅 실행이 안됨
     if(followerError || followingError) {
        console.error(followerError || followingError);
        return <div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>;
    }

    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm/>
            <FollowList header="팔로잉" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingsData && !followingError} />
            <FollowList header="팔로워" data={followersData} onClickMore={loadMoreFollowers} loading={!followersData && !followerError} />
        </AppLayout>
        </>
    )
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log('getServerSideProps start');
    console.log(context.req.headers);
    const cookie = context.req? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie ) {
        axios.defaults.headers.Cookie = cookie; // 다른 브라우저에서도 내 쿠키를 사용하는 케이스가 생김
    } 
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    // SUCCESS될때까지 기다려줌
    context.store.dispatch(END);
    console.log('getServerSideProps end');
    await context.store.sagaTask.toPromise();
});

export default Profile;