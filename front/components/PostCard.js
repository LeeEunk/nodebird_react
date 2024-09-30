import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Card, Popover, List} from 'antd';
import { Comment } from '@ant-design/compatible';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons'
import PostImages from './PostImages';
import PostCardContent from './PostCardContent';
import CommentForm from './CommentForm';
import Link from 'next/link';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';


const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const { me } = useSelector((state) => state.user);
  const id = me && me.id;

  const onToggleLike = useCallback(() => {
    // true -> false, false -> true
    setLiked((prev) => !prev)
  },[]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, []);

  // const id = useSelector((state) => state.user.me?.id);
  // optional chaining , me가 있으면 id를 출력 없으면 undefined로 출력
  // const id = me ?.id; 
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        // 배열 안에 jsx를 넣어줄 땐 늘 key를 붙여줘야 함
        actions={[
          <RetweetOutlined key="retweet" />,
          liked 
           ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
           : <HeartOutlined key="heart" onClick={onToggleLike}  />,
          <MessageOutlined key="comment" onClick={onToggleComment}/>,
          <Popover key="more" content={(
            <Button.Group>
              {/* 게시자와 게시물 작성자의 id가 나와 같으면 수정 삭제가 가능*/}
              {id && post.User.id === id ? (
              <>
                <Button>수정</Button>
                <Button danger loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
              </>
              ) :  <Button>신고</Button> }
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>
        ]}
        extra={ id && <FollowButton post={post} />}
      >
        <Card.Meta 
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content}/>}
        />
      </Card>
      {commentFormOpened && (
        <div>
         <CommentForm post={post} />
         <List
            header={`${post.Comments ? post.Comments.length : 0 } 댓글 `}
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
    UserId: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};

export default PostCard