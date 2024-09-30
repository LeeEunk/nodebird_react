import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Checkbox, Form, Input, Button } from 'antd';
import useInput from "../components/hooks/useInput";
import styled from "styled-components";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
    const dispatch = useDispatch();
    const { signUpLoading } = useSelector((state) => state.user)

    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    // 비밀번호 체크는 중복이 안됨
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    // 약관동의 필수
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    },[]);

    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // },[]);

    // const [nickname, setNickname] = useState('');
    // const onChangeNickname = useCallback((e) => {
    //     setNickname(e.target.value);
    // },[]);

    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // },[]);

    // 제출 버튼 누르면 호출
    const onSubmit = useCallback(() => {

        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(email, nickname, password);
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        })
    }, [email, password, passwordCheck, term]);
    
    
    return( 
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br/>
                    <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 확인</label>
                    <br/>
                    <Input 
                        name="user-password-check" 
                        type="password"
                        value={passwordCheck} 
                        required 
                        onChange={onChangePasswordCheck} 
                    />
                    {passwordError && <ErrorMessage> 비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>은경 홈페이지 약관에 모두 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10}}>
                    <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
};

export default Signup;