import { Button, Form, Input } from 'antd'
import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { ADD_POST_REQUEST, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../reducers/post';
import useInput from './hooks/useInput';


const PostForm = () => {
    const {imagePaths, addPostDone} = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');

    useEffect(() => {
        if(addPostDone) {
            setText('');
        }
    }, [addPostDone])
    
    const onSubmit = useCallback(() => {
        // dispatch(addPost(text));
        // setText('');
        if(!text || !text.trim()){
            return alert('게시글을 작성하세요!');
        }
        const formData = new FormData();
        imagePaths.forEach((p) => {
            formData.append('image', p);
        });
        formData.append('content', text);
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePaths]);

    // useRef() 실제 DOM에 접근하기 위해 사용
    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        // imageInput.current.onClick();
        imageInput.current?.click()
    },[imageInput.current]);

    const onChangeImages = useCallback((e) => {
        console.log('images', e.target.files);
        const imageFormData = new FormData(); //multi-part형식으로 서버로 보낼 수 있음
        [].forEach.call(e.target.files, (f) => { //e.target.file이 배열이 아니라서 배열로 만들어준다음에 반복문 돌리기 위함
            imageFormData.append('image', f);
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        })
    });

    const onRemoveImage = useCallback((index) => () => {
        dispatch({
            type: REMOVE_IMAGE,
            data: index,
        });
    },[]);

  return (
    // 멀티파트데이터는 보통 파일이나 이미지를 백엔드로 보낼때 사용됨 -> 사용하려면 npm i multer를 사용해야함
    <Form style={{ margin: '10px 0 20px'}} encType='multipart/form-data' onFinish={onSubmit}> 
        <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?"/>
        <div>
            <input type='file' name='image' multiple hidden ref={imageInput} onChange={onChangeImages} style={{display:" none"}} />
            <Button onClick={onClickImageUpload}>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right'}} htmlType="submit">짹짹</Button>
        </div>
        <div>
            {/* 이미지 업로드했을 때 이미지 미리보기 */}
            {imagePaths.map((v, i) => ( //map 안에 데이터를 만들고 싶으면 고차함수로 만들어야 함
                <div key={v} style={{display: 'inline-block'}}>
                    <img src={`http://localhost:3065/${v}`} style={{width: '200px' }} alt={v} />
                    <div>
                        <Button onClick={onRemoveImage(i)}>제거</Button>
                    </div>
                </div>
            ))}
        </div>
    </Form>
  )
}

export default PostForm