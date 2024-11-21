import React, { useState } from 'react';
import MainHeader from 'components/Header/MainHeader';
import SelectBooth from 'components/ProjectCreate/SelectBooth';
import styled from 'styled-components';
import { boothStyleInterface } from 'types/selectBoothType';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Btn from 'components/modules/Btn';

const SelectBoothStyle = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [boothStyle, setBoothStyle] = useState<boothStyleInterface>({
    style: undefined,
    clear: false
  });
  // const [country, setCountry] = useState<string | undefined>(undefined);
  // const [selectedInfo, setSelectedInfo] = useState<selectInfoType>({
  //   country: undefined,
  //   convention: {
  //     name: undefined,
  //     hall: undefined,
  //   },
  //   booth: undefined,
  // }) // 여기는 분리 및 세분화를 통해 여러 useState로 나누어 관리하자

  return (
    <>
      <MainHeader title='Design'/>
      <ContentsWrapper>
        <SelectBooth infoSetter={setBoothStyle} boothStyle={boothStyle} />
      </ContentsWrapper>

      <FooterWrapper>
        <Link to='/'>
          <Btn>
            Back
          </Btn>
        </Link>
        <Link to={`/country?type=create&style=${boothStyle.style}`}>
          <Btn checked={boothStyle ? true : false}>Next</Btn>
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
`;

export default SelectBoothStyle;