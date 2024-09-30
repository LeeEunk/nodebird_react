import { Button, Form, Input } from 'antd'
import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';
import useInput from './hooks/useInput';



const PostForm = () => {
    const {imagePaths, addPostDone} = useSelector((state) => state.post);
    const [text, onChangeText, setText] = useInput('');

    useEffect(() => {
        if(addPostDone) {
            setText('');
        }
    }, [addPostDone])
    

    const dispatch = useDispatch();
    const onsubmit = useCallback(() => {
        dispatch(addPost(text));
        // setText('');
    }, [text]);

    // useRef() 실제 DOM에 접근하기 위해 사용
    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        // imageInput.current.onClick();
        imageInput.current?.click()
    },[imageInput.current]);

    const onChangeImages = useCallback((e) => {
        console.log('images', e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        });
        dispatch(uploadImage(imageFormData));
    });

    const onRemoveImage = useCallback((index) => () => {
        dispatch(postSlice.actions.remove)
    })

  return (
    <Form style={{ margin: '10px 0 20px'}} encType='multipart/form-data' onFinish={onsubmit}>
        <Input.TextArea value={text} onChange={onChangeText} maxLenth={140} placeholder="어떤 신기한 일이 있었나요?"/>
        <div>
            <input type='file' name='image' multiple hidden innerRef={imageInput} onChange={onChangeImages} style={{display: 'none'}}/>
            <Button onClick={onClickImageUpload}>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right'}} htmlType="submit">짹짹</Button>
        </div>
        <div>
            {/* 이미지 업로드했을 때 이미지 미리보기 */}
            {imagePaths.map((v) => (
                <div key={v} style={{display: 'inline-block'}}>
                    <img src={v} style={{width: '200px' }} alt={v}/>
                    <div>
                        <Button>제거</Button>
                    </div>
                </div>
            ))}
        </div>
    </Form>
  )
}

export default PostForm