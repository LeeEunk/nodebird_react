// page들에 공통처리
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';


// App 은 index.js의 부모
// pages들의 공통 부분 설정
const App = ( {Component} ) => { //index.js 의 return 부분이 여기의 component 를 의미함

    return(
        // redux 사용 시, 페이지를 provider로 감싸줘야함, 단, next는 안써도 됨
        // <Provider store={store}>
        <>
            <Head>
                <meta charSet='utf-8'/>
                <link rel="icon" href="/favicon.ico" />
                <title>EunMeta</title>
            </Head>
            <Component/>
        </>
        // </Provider>
    )
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);