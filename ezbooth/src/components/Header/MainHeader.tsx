import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logos/mainLogo.svg';

const MainHeader = () => {
  return (
    <Wrapper>
      <IconWrapper to={'/'}>
        <MainLogo />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled(Link)`
  width: 3.5rem;
  height: 3.5rem;
`;

const MainLogo = styled(Logo)`
  width: 100%;
  height: 100%;
`

export default MainHeader;