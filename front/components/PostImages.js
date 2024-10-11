import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './imagesZoom';


const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom =  useCallback(() => {
    setShowImagesZoom(true);
  },[]);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  },[])

  if(images.length === 1 ){
    return (
      <div >
      {/* alt 시각장애인들을 위한 힌트, image 호버 시 이미지에 대한 설명 */}
      {/* role="presentation" 시각장애인들에게 사진을 클릭할 필요가 없다고 명시 */}
        <img role="presentation"  src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
      </div>
    )
  }
  if(images.length === 2) {
    return (
      <>
        <img role="presentation" style={{ width: "50%", display: 'inline-block' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" style={{ width: "50%", display: 'inline-block' }} src={images[1].src} alt={images[1].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
      </>
    )
  }
  return (
    <>
      <div>
        <img role="presentation" style={{ width: "50%" }}  src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <div
          role='presentation'
          style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
          onClick={onZoom}
        >
          <PlusOutlined/>
          <br />
          {images.length -1}
          개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  )
};

PostImages.propTypes = {
  images : PropTypes.arrayOf(PropTypes.object),
}

export default PostImages