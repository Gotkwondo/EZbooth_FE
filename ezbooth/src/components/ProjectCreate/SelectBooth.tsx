import React from 'react';
import MainTitle from 'components/Home/MainTitle';
import styled from 'styled-components';
import TitleLogoIMG from 'assets/componentLogos/TitleLogo.png';
import ButtonComponent from 'components/modules/ButtonComponent';
import { boothStyleInterface, selectInfoType } from 'types/selectBoothType';

interface SelectBoothInterface {
  infoSetter: React.Dispatch<React.SetStateAction<selectInfoType>>;
  boothStyle: boothStyleInterface;
}

const SelectBooth = ({infoSetter, boothStyle}: SelectBoothInterface) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ContentArea>
          <MainTitle imgSrc={TitleLogoIMG}>의 기능을 무료 체험 해보세요!</MainTitle>
        </ContentArea>
        <ContentArea>
          <ButtonArea onClick={() => infoSetter({manage: true, create: false})}>
            <ButtonComponent
              description='1. National Booth-Open'
              checked={boothStyle === 'National_Open'}
            />
          </ButtonArea>
          <ButtonArea onClick={() => infoSetter({manage: false, create: true})}>
            <ButtonComponent
              description='2. National Booth-Partition'
              checked={boothStyle === 'National_Partition'}
            />
          </ButtonArea>
          <ButtonArea onClick={() => infoSetter({manage: false, create: true})}>
            <ButtonComponent
              description='3. CustomBooth'
              checked={boothStyle === 'Custom'}
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
  justify-content: space-around;
`;

const ButtonArea = styled.div`
  width: 45%;
  height: 10rem;
  padding: 0.8rem;
  border-radius: 20px;
`;

const FooterWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default SelectBooth;