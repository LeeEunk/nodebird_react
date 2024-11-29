import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import { LOAD_RELATED_POSTS_REQUEST } from '../reducers/post';

const Related = () => {
    const dispatch = useDispatch();
    const { mainPosts, loadPostsLoading, hasMorePosts } = useSelector((state) => state.post);
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
        </AppLayout>
    );
};

export default Related;
