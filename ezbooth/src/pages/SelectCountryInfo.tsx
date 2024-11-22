import React, { useState } from 'react';
import MainHeader from 'components/Header/MainHeader';
import SelectBooth from 'components/ProjectCreate/SelectBooth';
import styled from 'styled-components';
import { boothStyleInterface, selectCountryInterface, selectHallInterface } from 'types/selectBoothType';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Btn from 'components/modules/Btn';
import SelectCountry from 'components/ProjectCountry/SelectCountry';
import { useBoothStore } from 'zustand/createBooth';

const SelectCountryInfo = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const countryData = [
  //   { value: 'kintex', label: 'Kintex - Goyang, Korea' },
  //   { value: 'mikuhari', label: 'Mikuhari - Chiba, Japan' }
  // ];
  // const hallData = [
  //   { value: 'hall6', label: 'Hall 6' }
  // ];
  // const [country, setCountry] = useState<selectCountryInterface>(countryData[0]);
  // const [hall, setHall] = useState<selectHallInterface>(hallData[0]);
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