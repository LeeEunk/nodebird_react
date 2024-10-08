import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, List } from "antd"
import { StopOutlined } from '@ant-design/icons'; 


const FollowList = ({header, data}) => {

  //prop개수가 적으면 한개로 구성
  //prop개수가 많으면 다른 컴포넌트로 쪼갠다
    
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter:4, xs:2, md: 3}}
      size='small'
      header={<div>{header}</div>}
      loadMore={<div style={{textAlign: 'center', margin: ' 10px 0'}}><Button>더 보기</Button></div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{marginTop: 20}}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname}/>
          </Card>
        </List.Item>
      )}
    />
  )
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList