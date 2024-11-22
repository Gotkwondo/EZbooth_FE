import React from 'react';
import styled from 'styled-components';
import MainTitle from 'components/Home/MainTitle';
import { useBoothStore } from 'zustand/createBooth';
import SelectComponent from 'components/modules/SelectComponent';
import Select from 'react-select';
import countryImg from 'assets/imgs/countryImg.png';

const SelectCountry = () => {
  const countryData = [
    { value: 'kintex', label: 'Kintex - Goyang, Korea' },
    { value: 'mikuhari', label: 'Mikuhari - Chiba, Japan' }
  ];
  const hallData = [
    { value: 'hall6', label: 'Hall 6' }
  ];

  const { country, booth, setCountry, setBooth } = useBoothStore();
  console.log(country, booth)
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleArea>
          <MainTitle>원하는 부스 스타일을 선택 해주세요!</MainTitle>
        </TitleArea>
        <ContentArea>
          {/* <SelectComponent data={countryData} setterFn={setCountry}/> */}
          <ImgWrapper src={countryImg} />
          <SelectInputArea>
            <SelectComponent
              data={countryData}
              setterFn={setCountry}
            />
            <SelectComponent
              data={hallData}
              setterFn={setBooth}
            />
            
          </SelectInputArea>
          <SelectInputArea>
            
          </SelectInputArea>
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

const TitleArea = styled.div`
  width: 90%;
  height: 15rem;
  display: flex;
  justify-content: center;
`;

const ContentArea = styled.div`
  margin-top: 3rem;
  width: 40rem;
`

const ImgWrapper = styled.img<{src: string}>`
  width: 100%;
  src: ${({ src }) => src};
  border-radius: 25px;
`

const SelectInputArea = styled.div`
  height: 100px;
`

const ButtonArea = styled.div`
  width: 45%;
  height: 10rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SelectCountry;