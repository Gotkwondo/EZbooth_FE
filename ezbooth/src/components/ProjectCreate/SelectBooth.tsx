import React from 'react';
import MainTitle from 'components/Home/MainTitle';
import styled from 'styled-components';
import TitleLogoIMG from 'assets/componentLogos/TitleLogo.png';
import ButtonComponent from 'components/modules/ButtonComponent';
import { boothStyleInterface, selectInfoType } from 'types/selectBoothType';
import Btn from 'components/modules/Btn';

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
          <ButtonArea onClick={() => infoSetter({...boothStyle, style:'National_Open'})}>
            <ButtonComponent
              description='1. National Booth-Open'
              checked={boothStyle.style === 'National_Open'}
            />
          </ButtonArea>
          <ButtonArea onClick={() => infoSetter({...boothStyle, style:'National_Partition'})}>
            <ButtonComponent
              description='2. National Booth-Partition'
              checked={boothStyle.style === 'National_Partition'}
            />
          </ButtonArea>
          <ButtonArea onClick={() => infoSetter({...boothStyle, style:'Custom'})}>
            <ButtonComponent
              description='3. CustomBooth'
              checked={boothStyle.style === 'Custom'}
            />
          </ButtonArea>
        </ContentArea>
      </ContentWrapper>
      <FooterWrapper>
        {/* <Link to='/d'> */}
          <Btn>
            Back
          </Btn>
        {/* </Link> */}
        
        <Btn checked={boothStyle ? true : false}>Next</Btn>
      </FooterWrapper>
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

const FooterWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default SelectBooth;