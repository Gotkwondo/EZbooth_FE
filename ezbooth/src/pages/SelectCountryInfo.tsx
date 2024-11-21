import React, { useState } from 'react';
import MainHeader from 'components/Header/MainHeader';
import SelectBooth from 'components/ProjectCreate/SelectBooth';
import styled from 'styled-components';
import { boothStyleInterface } from 'types/selectBoothType';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Btn from 'components/modules/Btn';

const SelectCountryInfo = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [country, setCountry] = useState<string | undefined>(undefined);

  return (
    <>
      <MainHeader title='Design' />
      <ContentsWrapper>
        {/* <SelectBooth infoSetter={setCountry} boothStyle={country} /> */}
      </ContentsWrapper>
      <FooterWrapper>
        <Link to='/'>
          <Btn>
            Back
          </Btn>
        </Link>
        <Link to={`/country?type=create`}>
          <Btn checked={country ? true : false}>Next</Btn>
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