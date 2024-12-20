import React, { useCallback } from 'react'
import { Avatar, Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import Link from 'next/link';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector((state) => state.user);

    const onLogOut = useCallback(() => {
        // setIsLoggedIn(false);
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

  return (
    <Card
        actions={[
            <div key="twit"><Link href={`/user/${me.id}`}><a>내게시물 <br /> {me.Posts.length}</a></Link></div>,
            <div key="following"><Link href="/profile"><a>팔로잉<br />{me.Followings.length}</a></Link></div>,
            <div key="follower"><Link href="/profile"><a>팔로워<br />{me.Followers.length}</a></Link></div>,
        ]}
    >
        <Card.Meta
            avatar={(
                <Link href={`/user/${me.id}`} prefetch={false}>
                    <a><Avatar>{me.nickname[0]}</Avatar></a>
                </Link>
            )}
            title={me.nickname}
        />
        <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile;