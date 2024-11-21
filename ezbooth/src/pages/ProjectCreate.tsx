import React, { useState } from 'react';
import MainHeader from 'components/Header/MainHeader';
import SelectBooth from 'components/ProjectCreate/SelectBooth';
import styled from 'styled-components';
import { selectInfoType, boothStyleInterface } from 'types/selectBoothType';
import Btn from 'components/modules/Btn';

const ProjectCreate = () => {
  const [boothStyle, setBoothStyle] = useState<boothStyleInterface>({
    style: undefined,
    clear: false
  });
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [selectedInfo, setSelectedInfo] = useState<selectInfoType>({
    country: undefined,
    convention: {
      name: undefined,
      hall: undefined,
    },
    booth: undefined,
  }) // 여기는 분리 및 세분화를 통해 여러 useState로 나누어 관리하자

  return (
    <>
      <MainHeader title='Design'/>
      <ContentsWrapper>
        <SelectBooth infoSetter={setBoothStyle} boothStyle={boothStyle} />
      </ContentsWrapper>
    </>
  )
};

const ContentsWrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 10.5rem);
`

export default ProjectCreate;