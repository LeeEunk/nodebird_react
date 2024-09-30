import React, { useEffect } from "react";
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

    useEffect(() => { // 로그인 안하면 프로필 안보이게 바로 home으로 이동
        if(!(me && me.id)) {
            Router.push('/');
        }
    },[ me && me.id]);
    
    if(!me) {
        return null;
    }


    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm/>
            <FollowList header="팔로잉" data={me.Followings}/>
            <FollowList header="팔로워" data={me.Followers}/>
        </AppLayout>
        </>
    )
};

export default Profile;