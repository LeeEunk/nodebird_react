import React, { useEffect, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useSelector } from "react-redux";
import Router from 'next/router';

const Profile = () => {

    // 더미데이터
    // const follwerList = [{nickname: 'eunk'},{nickname: '바보'},{nickname: '노드버드오피셜'}];
    // const followingList = [{nickname: 'eunk'},{nickname: '바보'},{nickname: '노드버드오피셜'}];

    const {me} = useSelector((state) => state.user);

    useEffect(() => {
        dispatchEvent({
            type: LOAD_FOLLOWERS_REQUEST
        })
    })

    useEffect(() => { // 로그인 안하면 프로필 안보이게 바로 home으로 이동
        if(!(me && me.id)) {
            Router.push('/');
        }
    },[ me && me.id]);

    const loadMoreFollowings = useCallback(() => {
        setFollowingsLimit((prev) => prev + 3 );
    }, []);

    const loadMoreFollowers = useCallback(() => {
        setFollowersLimit((prev) => prev + 3);
    },[]);
    
    if(!me) {
        return '내 정보 로딩중...';
    }

    if(followerError || followingError) {
        console.error(followerError || followingError);
        return <div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>
    }

    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm/>
            <FollowList header="팔로잉" data={me.Followings} onClickMore={loadMoreFollowings} loading={!followingsData && !followingError}/>
            <FollowList header="팔로워" data={me.Followers} onClickMore={loadMoreFollowers} loading={!followersData && !followerError}/>
        </AppLayout>
        </>
    )
};

export default Profile;