import React from 'react';
import styled from 'styled-components';
import { mainBlue, btnBase } from 'styles/color';

interface BtnInterface {
  /** 버튼 컴포넌트의 텍스트 */
  children: string,
  /** 선택 사항에 따른 UI 변화를 구고자 하는 버튼 생성시 선택여부(boolean)을 전달 */
  checked?: boolean
}

/**
 * 
 * @param {string} props.children - 버튼 컴포넌트의 텍스트
 * @param {boolean} props.checked - 선택 사항에 따른 UI 변화를 구고자 하는 버튼 생성시 선택여부(boolean)을 전달
 * @returns 
 */
const Btn = ({ children, checked }: BtnInterface) => {
  return (
    checked === undefined ? 
      <Wrapper>
        {children}
      </Wrapper>
      :
      <CheckedWrapper checked={checked}>
        {children}
      </CheckedWrapper>
  )
};

const Wrapper = styled.button`
  background-color: white;
  padding: 0.8rem;
  border-radius: 25px;
  border: 1px solid ${mainBlue};
  width: 10rem;
  height: 3rem;
  color: ${mainBlue};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background-color: ${mainBlue};
    color: ${btnBase};
  }
`;

const CheckedWrapper = styled.button<{checked: boolean}>`
  background-color: ${(props) => props.checked ? mainBlue : 'white'};
  padding: 0.8rem;
  border-radius: 25px;
  border: 1px solid ${mainBlue};
  width: 10rem;
  height: 3rem;
  color: ${(props) => props.checked ? 'white': mainBlue};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
`;

export default Btn;