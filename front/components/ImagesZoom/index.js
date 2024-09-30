import React, { useState } from 'react'
import PropTypes, { symbol } from 'prop-types'
import Slick from 'react-slick'
import { Overlay, Global, Header, CloseBtn, ImgWrapper, Indicator, SlickWrapper } from './styles';

// func`` == func() 함수 호출 문법 tagged template literal
// const Overlay = styled.div`
// // 화면이 꽉참
//   position: fixed;
//   z-index: 5000;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
// `;

// const Header = styled.header`
//     height: 44px;
//     background: white;
//     position: relative;
//     padding: 0;
//     text-align: center;

//     & h1 {
//         margin: 0;
//         font-size: 17px;
//         color: #333;
//         line-height: 44px;
//     }

//     // & button {
//     //     position: absolute;
//     //     right: 0;
//     //     top: 0;
//     //     padding: 15px;
//     //     line-height: 14px;
//     //     cursor: pointer;
//     // }
// `;

// const CloseBtn = styled(CloseOutlined

// )`
//     position: absolute;
//     right: 0;
//     top: 0;
//     padding: 15px;
//     line-height: 14px;
//     cursor: pointer;
// `

// const SlickWrapper = styled.div`
//     height: calc(100% - 44px);
//     background: #090909;
// `;

// const ImgWrapper = styled.div`
//     padding: 32px;
//     text-align: center;

//     & img {
//         margin: 0 auto;
//         max-height: 750px;
//     }
// `;

// const Indicator = styled.div`
//     text-align: center;

//     & > div {
//         width: 75px;
//         height: 30px;
//         line-height: 30px;
//         border-radius: 15px;
//         background: #313131;
//         display: inline-block;
//         text-align: center;
//         color: white;
//         font-size: 15px;
//     }
// `
// const Global = createGlobalStyle`
//     .slick-slide {
//         display: inline-block;
//     }
//         // .ant-card-cover {
//         //     transform: none !important;
//         // }
// `;

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay>
        <Global/>
        <Header>
            <h1>상세 이미지</h1>
            <CloseBtn onClick={onClose}>X</CloseBtn>
        </Header>
        <SlickWrapper>
            <div>
                <Slick         
                    initialSlide={0}
                    // 현재 슬라이드 상태값 유지
                    beforeChange={(slide) => setCurrentSlide(slide)}
                    // 무한으로 넘김
                    infinite
                    arrows={false}
                    // 한번에 하나씩만 슬라이드 보여주기
                    slidesToShow={1}
                    // 한번에 하나씩만 스크롤하기
                    slidesToScroll={1}
                >
                    {images.map((v) => (
                        <ImgWrapper key={v.src}>
                            <img src={v.src} alt={v.src}/>
                        </ImgWrapper>
                    ))}
                </Slick>
                <Indicator>
                    <div>
                        {/* 현재 몇번째 슬라이드를 보고 있는지 */}
                        {currentSlide + 1}
                        {' '}
                        /
                        {images.length}
                    </div>
                </Indicator>
            </div>
        </SlickWrapper>
    </Overlay>
    
  )
}

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
}

export default ImagesZoom;