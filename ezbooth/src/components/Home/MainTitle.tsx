import React from 'react';
import styled from 'styled-components';
import TitleBackground from 'assets/backgrounds/TitleBackground.png';

interface MainTitleInterface {
  /** (optional) Text 앞에 이미지를 넣고 싶은 경우 이미지 주소를 전달 */
  imgSrc?: string,
  /** 해당 컴포넌트에 렌더링하고 싶은 텍스트 전달 */
  children: string,
}

/**
 * 
 * @param {string} props.imgSrc - optional Text 앞에 이미지를 넣고 싶은 경우 이미지 주소를 전달
 * @param {string} props.children - 해당 컴포넌트에 렌더링하고 싶은 텍스트 전달
 * @returns {JSX.Element}
 */
const MainTitle = ({imgSrc, children}: MainTitleInterface) => {

  return (
    <Wrapper>
      <TextArea>
        { imgSrc ? <TitleLogo src={imgSrc} /> : <></> }
        { children }
      </TextArea>
      
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-image: url(${TitleBackground});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
`;

const TitleLogo = styled.img<{ src: string }>`
  src: (${props => props.src});
  width: 12rem;
`;

const TextArea = styled.div`
  padding: 4rem 1rem 0 1rem;
  font-size: 2rem;
  font-weight: 600;
`;


export default MainTitle;