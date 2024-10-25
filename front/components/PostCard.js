import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Card, Popover, List } from 'antd';
import { Comment } from '@ant-design/compatible';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons'
import Link from 'next/link';
import moment from 'moment';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { LIKE_POST_REQUEST, REMOVE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';

moment.locale('ko');


const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  // const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  // const { me } = useSelector((state) => state.user);
  // const id = me && me.id;
  const id = useSelector((state) => state.user.me?.id);
  const [editMode, setEditMode] = useState(false);

  const onLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    })
  },[id]);

  const onUnLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    })
  },[id]);

  const onToggleComment = useCallback(() => {
    // true -> false, false -> true
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, [id]);

  const onRetweet = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type : RETWEET_REQUEST,
      data: post.id,
    });
  },[id]);

  
  // optional chaining , me가 있으면 id를 출력 없으면 undefined로 출력
  // const id = me ?.id; 
  const liked = post.Likers.find((v) => v.id === id); //게시글 좋아요 누른 사람들 중에서 내가 있는지?
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        // 배열 안에 jsx를 넣어줄 땐 늘 key를 붙여줘야 함
        actions={[
          <RetweetOutlined key="retweet" onClick={onRetweet}/>,
          liked 
           ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnLike} />
           : <HeartOutlined key="heart" onClick={onLike}  />,
          <MessageOutlined key="comment" onClick={onToggleComment}/>,
          <Popover key="more" content={(
            <Button.Group>
              {/* 게시자와 게시물 작성자의 id가 나와 같으면 수정 삭제가 가능*/}
              {id && post.User.id === id ? (
              <>
                {!post.RetweetId && <Button >수정</Button>}
                <Button danger loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
              </>
              ) :  <Button>신고</Button> }
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>
        ]}
        title={ post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null }
        extra={ id && <FollowButton post={post} />}
      >
        {post.RetweetId && post.Retweet
          ? (
            <Card
              cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
            >
              <div style={{ float: 'right'}}>{moveMessagePortToContext(post.createdAt).format('YYYY.MM.DD')}</div>  
            <Card.Meta 
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.Retweet.User.nickname}
            description={<PostCardContent postData={post.content}/>}
          />
            </Card>
          )
          : (
            <>
            <div style={{float:'right'}}>{moment(post.createdAt).format('YYYY.MM.DD') } </div>
            <Card.Meta 
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={<PostCardContent postData={post.content}/>}
          />
          </>
          )
        }
        
      </Card>
      {commentFormOpened && (
        <div>
         <CommentForm post={post} />
         <List
            header={`${post.Comments ? post.Comments.length : 0 }개의 댓글 `}
            itemLayout='horizontal'
            dataSource={post.Comments || [] }
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(
                    <Link href={{ pathname: '/user', query: {id:item.User.id}}} as={`/user/${item.User.id}`}>
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                  )}
                  content={item.content}
                />
              </li>
            )} 
         >
         </List>
        </div>
      )}

    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;