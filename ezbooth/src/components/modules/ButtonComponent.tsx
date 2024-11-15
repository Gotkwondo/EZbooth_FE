import React from 'react';
import styled from 'styled-components';
import { mainBlue, btnBase } from 'styles/color';

interface ButtonComponentInterface {
  /** (Optional) 버튼에 렌더링 할 항목의 대제목. */
  title?: string;

  /**버튼에 렌더링할 항목 설명. */
  description: string;

  /** 선택 여부를 전달(useState나 boolean 값으로 전달) */
  checked: boolean;
}

/**
 * 항목 선택에 따른 버튼 UI 렌더링 컴포넌트
 * @param {string} [props.title] - (Optional) 버튼에 렌더링 할 항목의 대제목.
 * @param {string} props.description - 버튼에 렌더링할 항목 설명.
 * @param {boolean} props.checked - 선택 여부를 전달(useState나 boolean 값으로 전달).
 * @returns {JSX.Element}
 */
const ButtonComponent = ({ title, description, checked }: ButtonComponentInterface) => {
  return (
    <Wrapper checked={checked}>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.button<{checked: boolean}>`
  background-color: ${({checked}) => checked ? mainBlue : btnBase};
  padding: 0.8rem;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  color: ${({checked}) => checked ? 'white' : mainBlue};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    background-color: ${mainBlue};
    color: ${btnBase};
  }
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
`;

const Description = styled.div`
  font-size: 1rem;
  font-weight: 600;
  width: 90%;
`

export default ButtonComponent;