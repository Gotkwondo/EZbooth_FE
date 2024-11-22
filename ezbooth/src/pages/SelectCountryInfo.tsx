import React from 'react';
import MainHeader from 'components/Header/MainHeader';
import styled from 'styled-components';
// import { boothStyleInterface, selectCountryInterface, selectHallInterface } from 'types/selectBoothType';
import { Link } from 'react-router-dom';
import Btn from 'components/modules/Btn';
import SelectCountry from 'components/ProjectCountry/SelectCountry';
import { useBoothStore } from 'zustand/createBooth';

const SelectCountryInfo = () => {
  const { country, booth } = useBoothStore();
  
  return (
    <>
      <MainHeader title='Design' />
      <ContentsWrapper>
        <SelectCountry />
      </ContentsWrapper>
      <FooterWrapper>
        <Link to='/'>
          <Btn>
            Back
          </Btn>
        </Link>
        {/* 이 버튼이 Next 버튼인데 하나의 페이지에서 zustand setter를 사용해 하나의 페이지로 구성하도록 리팩진행 예정 */}
        <Link to={`/country?type=create`}>
          <Btn checked={country && booth ? true : false}>Next</Btn>
        </Link>
      </FooterWrapper>
    </>
  )
};

const ContentsWrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 18.5rem);
`;

const FooterWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default SelectCountryInfo;