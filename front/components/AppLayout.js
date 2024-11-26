import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import Router, { useRouter } from 'next/router';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import useInput from './hooks/useInput';

import styled, { createGlobalStyle } from 'styled-components';



const Global = createGlobalStyle`
  .ant-row{
    margin-right: 0 !important;
    margin-left: 0 !imortant;
  }

  .ant-col:first-child {
    padding-left: 0 !important;
  }

  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

// 일부 공통

const AppLayout = ({ children }) => {

  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [searchInput, onChangeSearchInput] = useInput('');
  const router = useRouter();
  const { me } = useSelector((state) => state.user);

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

    // return 안에 들어갈 수 있는 모든 것들이 node이다.
  return (
    <div>
      <Global/>
        <Menu mode='horizontal' selectedKeys={[router.pathname]}
        items={[
          { label: <Link href="/"><a>EunSNS</a></Link>, key: '/'},
          { label: <Link href="/profile"><a>프로필</a></Link>, key: '/profile'},
          { label: <SearchInput enterButton 
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
            placeholder="해시태그를 입력하세요"
            />, key: '/search'},
        ]}
        >
          
          <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
          </Menu.Item>
        </Menu>
        
        <Row gutter={8}>
          {/* 컬럼사이의 간격을 주는 거를 gutter로 지정함 -> padding이라고 보면 됨 */}
          {/* 모바일(xs) 기준 n/24로 생각 꽉 찬거를 24해서 등분으로 나눔 6칸이므로 25% */}
          <Col xs={24} md={6}>
            {/* props로 안넘겨져도 됨, redux사용하므로 */}
            {me ? <UserProfile/> : <LoginForm/>}
          </Col>  
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
          {/* target : blank 새창에서 띄우기 보안 위협이 있어서 no레퍼러 지정해줘야 함*/}
            <a href='https://www.zerocho.com' target='_blank' rel='noreferrer noopener'>Made by Eunkk</a>
          </Col>
        </Row>
    </div>

  )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;