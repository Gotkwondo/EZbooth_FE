import React, { useState } from 'react';
import MainHeader from 'components/Header/MainHeader';
import HomeContent from 'components/Home/HomeContent';
import Btn from 'components/modules/Btn';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectServiceInterface } from 'types/selectBoothType';

const Home = () => {
  const [selectType, setSelectType] = useState<selectServiceInterface>({
    manage: false,
    create: false
  });
  
  return (
    <>
      <MainHeader />
      <HomeContent info={selectType} infoSetter={setSelectType} />
      <FooterWrapper>
        <Btn>
          Back
        </Btn>
        <Link to={selectType.create || selectType.manage ? `/newproject?type=${selectType.create ? 'create' : 'manage'}` : '/'}>
          <Btn checked={selectType.create || selectType.manage}>Next</Btn>
        </Link>
        
      </FooterWrapper>
    </>
  )
};

const FooterWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Home;