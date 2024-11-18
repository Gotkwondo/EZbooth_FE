import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logos/mainLogo.svg';
// import mainBlue from 'styles/color';

interface MainHeaderInterface {
  title?: string;
}

const MainHeader = ({ title }: MainHeaderInterface) => {
  return (
    <Wrapper>
      <IconWrapper to={'/'} title={title}>
        <MainLogo />
        {title}
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled(Link)<{title?: string}>`
  /* width: 3.5rem; */
  width: ${(props) => props.title ? '9rem' : '3.5rem'};
  height: 3.5rem;
  display: flex;
  align-items: flex-end;
  font-size: 1.5rem;
  font-weight: 500;
  /* color:  */
`;

const MainLogo = styled(Logo)`
  width: 100%;
  height: 100%;
`

export default MainHeader;