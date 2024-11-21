import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import MainTitle from './MainTitle';
import TitleLogoIMG from 'assets/componentLogos/TitleLogo.png';
import ButtonComponent from 'components/modules/ButtonComponent';
import { selectServiceInterface } from 'types/selectBoothType';

interface HomeContentInterface {
  infoSetter: React.Dispatch<React.SetStateAction<selectServiceInterface>>;
  info: selectServiceInterface;
}

const HomeContent = ({infoSetter, info}: HomeContentInterface) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ContentArea>
          <MainTitle imgSrc={TitleLogoIMG}>의 기능을 무료 체험 해보세요!</MainTitle>
        </ContentArea>
        <ContentArea>
          <ButtonArea onClick={() => infoSetter({manage: true, create: false})}>
            <ButtonComponent
              title='프로젝트 관리하기'
              description='문제를 실시간으로 피드백하고 일정을 관리해보세요!'
              checked={info.manage}
            />
          </ButtonArea>
          <ButtonArea onClick={() => infoSetter({manage: false, create: true})}>
            <ButtonComponent
              title='10초만에 부스 기획 설계 제안서 만들어보기'
              description='공간에 따른 부스 디자인부터 모델링과 제안서까지 빠르게 만들어보세요!'
              checked={info.create}
            />
          </ButtonArea>
        </ContentArea>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 18.5rem);
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

export default HomeContent;