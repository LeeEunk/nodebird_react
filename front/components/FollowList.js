import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, List } from "antd"
import { StopOutlined } from '@ant-design/icons'; 
import { useDispatch } from 'react-redux';

import { REMOVE_FOLLOWER_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';


const FollowList = ({ header, data, onClickMore, loading }) => {
  const dispatch = useDispatch();
  const onCancle = (id) => () => { //고차함수 사용 -> 반복문에 data 전송
    if( header === '팔로잉') {
      dispatch({
      type: UNFOLLOW_REQUEST,
      data: id,
    })
  }
  dispatch({
    type: REMOVE_FOLLOWER_REQUEST,
    data: id,
  })
  };

  //prop개수가 적으면 한개로 구성
  //prop개수가 많으면 다른 컴포넌트로 쪼갠다
    
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter:4, xs:2, md: 3}}
      size='small'
      header={<div>{header}</div>}
      loadMore={(
        <div style={{textAlign: 'center', margin: ' 10px 0'}}>
        <Button onClick={onClickMore} loading={loading}>더 보기</Button>
        </div>
        )}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{marginTop: 20}}>
          <Card actions={[<StopOutlined key="stop" onClick={onCancle(item.id)} />]}>
            <Card.Meta description={item.nickname}/>
          </Card>
        </List.Item>
      )}
    />
  )
};

FollowList.defaultProps = {
  data: [],
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array,
  onClickMore : PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FollowList