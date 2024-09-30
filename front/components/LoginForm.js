import React, { useCallback, useEffect, useMemo } from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from './hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST, loginRequestAction } from '../reducers/user';

//css 적듯이 문법 적용 js처럼 적용하지 말고
const ButtonWrapper = styled.div`
    padding: 10px;
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
    margin-top: 10px;
`;

export const LoginForm = () => {
    const dispatch = useDispatch()
    const { logInLoading, logInError } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    // const [password, setPassword] = useState('');

    useEffect(() => {
        if(logInError) {
            alert(logInError) ;
    }
}, [logInError]);

    // component에 props로 들어가는 함수는 useCallback으로 무조건 최적화 해줘야함
    // useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용
    // useCallback은 함수를 캐싱, useMemo는 값을 캐싱
    // useCallback은 캐싱이니깐 이전 컴포넌트랑 지금 컴포넌트와 동일하다고 함, 배열부분이 바뀌지 않는 이상
    // 리렌더링하면 return부분 재렌더링되나, 바뀐부분(최적화되지 않는 부분)만 다시 그림
    // virtual Dom에서 이전이랑 비교해서 달라진 부분만 알려줌 그래도 inline style 사용은 되도록 안하는 것이 좋음
    
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, [])

    // 유즈메모는 리렌더링되도 같은 값울 유지하므로 이렇게 적용할 수 있음
    // const style = useMemo(() => ({ marginTop: 10}), []);

    // antd는 이미 onFinish에서 e.preventDefault()가 적용되어 있어서 쓰면 안됨
    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        // 더미데이터
        // setIsLoggedIn(true);
        // dispatch(loginRequestAction({ email, password }))
        dispatch({
            type: LOG_IN_REQUEST,
            data: { email, password },
        });
    }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
        <div>
            <label htmlFor='user-email'>이메일</label>
            <br/>
            <Input name="user-email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
        <label htmlFor='user-password'>비밀번호</label>
            <br/>
            <Input name="user-password" value={password} type="password" onChange={onChangePassword} required />
        </div>
        {/* style을 객체로 정의하면 객체는 무조건 새로 생성된걸로 인식하기때문에 이거때매 재렌더링됨 */}
        <ButtonWrapper style={{ marginTop : "10px"}}>
            <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </ButtonWrapper>
    </FormWrapper>
  )
}

// validation
// LoginForm.propTypes = {
//     setIsLoggedIn:PropTypes.func.isRequired,
// }

