import React, { useState } from 'react';
import MainHeader from 'components/Header/MainHeader';
import SelectBooth from 'components/ProjectCreate/SelectBooth';
import styled from 'styled-components';
import { selectInfoType } from 'types/selectBoothType';

const ProjectCreate = () => {
  // const [selectedInfo, setSelectedInfo] = useState<selectInfoType>({
  //   boothStyle: undefined,
  //   country: undefined,
  //   convention: {
  //     name: undefined,
  //     hall: undefined,
  //   },
  //   booth: undefined,
  // }) 여기는 분리 및 세분화를 통해 여러 useState로 나누어 관리하자
  return (
    <>
      <MainHeader title='Design'/>
      <ContentsWrapper>
        <SelectBooth infoSetter={setSelectedInfo} info={selectedInfo} boothStyle/>
      </ContentsWrapper>
    </>
  )
};

const ContentsWrapper = styled.div`
  width: 100%;
`

export default ProjectCreate;