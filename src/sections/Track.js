import React from 'react';
import styled from 'styled-components';

const Track = () => {
  return (
  <Wrapper>
    <Title>트랙소개</Title>
    <Content>
      영남대학교 멋쟁이사자처럼 12기는 기획/디자인, Front-end, Back-end 파트로 나누어 아기사자를 모집합니다. <br/>
      코딩이 익숙하지 않은 비전공자/전공자여도 중앙 멋쟁이사자에서 제공하는 VOD강의와 자체적으로 제공하는 교육 자료들로 충분히 실력을 키울 수 있습니다.
    </Content>
    <TrackDetail>
      <ButtonContainer>
        <ButtonItem>Product Manager & Designer</ButtonItem>
        <ButtonItem>Frontend</ButtonItem>
        <ButtonItem>Backend</ButtonItem>
      </ButtonContainer>
      <TrackBox>
        <TrackTitle>Product Manager & Designer</TrackTitle>
        <TrackSubTitle>프로젝트의 시작과 토대</TrackSubTitle>
      </TrackBox>
    </TrackDetail>
  </Wrapper>
  // <ul>
  //   heyyy
  //   <ol>dkssud</ol>
  //   <ol>dd</ol>
  // </ul>
  );
};

export default Track;

const Wrapper = styled.div`
  border: 1px solid red;
`;
const Title = styled.div`
`;
const Content = styled.div`
`;

const TrackDetail = styled.div`
`;

const ButtonContainer = styled.div`
`;
const ButtonItem = styled.div`
`;

const TrackBox = styled.div`
`;
const TrackTitle = styled.div`
`;
const TrackSubTitle = styled.div`
`;