import React from 'react';
import MainTitle from 'components/Home/MainTitle';
import styled from 'styled-components';
import ButtonComponent from 'components/modules/ButtonComponent';
import { boothStyleInterface,  } from 'types/selectBoothType';
import Btn from 'components/modules/Btn';
import { Link } from 'react-router-dom';

interface SelectBoothInterface {
  infoSetter: React.Dispatch<React.SetStateAction<boothStyleInterface>>,
  boothStyle: boothStyleInterface
}

const SelectBooth = ({ infoSetter, boothStyle }: SelectBoothInterface) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ContentArea>
          <MainTitle>원하는 부스 스타일을 선택 해주세요!</MainTitle>
        </ContentArea>
        <ContentArea>
          <ButtonArea onClick={() => infoSetter({...boothStyle, style:'national_open'})}>
            <ButtonComponent
              description='1. National Booth-Open'
              checked={boothStyle.style === 'national_open'}
            />
          </ButtonArea>
          <ButtonArea onClick={() => infoSetter({...boothStyle, style:'national_partition'})}>
            <ButtonComponent
              description='2. National Booth-Partition'
              checked={boothStyle.style === 'national_partition'}
            />
          </ButtonArea>
          <ButtonArea onClick={() => infoSetter({...boothStyle, style:'custom'})}>
            <ButtonComponent
              description='3. CustomBooth'
              checked={boothStyle.style === 'custom'}
            />
          </ButtonArea>
        </ContentArea>
      </ContentWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 10.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 60dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentArea = styled.div`
  width: 90%;
  height: 15rem;
  display: flex;
  justify-content: center;
`;

const ButtonArea = styled.div`
  width: 45%;
  height: 10rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SelectBooth;