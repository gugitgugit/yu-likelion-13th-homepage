import React, { useState } from 'react';
import styled from 'styled-components';

const Track = (props) => {
  const [selectedTrack, setSelectedTrack] = useState(1);
  const trackList = [
    {
      id: 1,
      title: 'Product Manager & Designer',
      subTitle: '프로젝트의 시작과 토대',
      contentList: [
        '프로젝트 관리와 UI/UX 설계를 총괄합니다.',
        '고객으로부터 요구사항을 추출하여, 이에 맞는 서비스를 기획합니다.',
        '웹 디자인 이론 학습 및 디자인 툴을 통한 실습을 통해 협업 스킬을 함양시킵니다.',
        '협업의 전 과정을 관리하는 Project Manger로서 개발자들과 소통하며, 일정과 방향을 조율합니다.',
        '사용자적 관점에서 더 나은 인터페이스와 경험을 추구합니다.',
      ],
    },
    {
      id: 2,
      title: 'Frontend',
      subTitle: '웹(Web)의 실현',
      contentList: [
        '사용자와 직접 상호작용을 하는 인터페이스 개발을 담당합니다.',
        '기획&디자인의 설계에 따른 UI/UX를 실현하고, 백엔드가 구축한 API와 데이터를 주고받으며 기능을 실현합니다.',
        '웹 애플리케이션의 프론트엔드 아키텍처 지식과 설계, 구현까지의 학습을 진행합니다.',
        'React를 통하여 컴포넌트 설계 및 API 통신, 상태 관리까지 다양한 라이브러리를 통한 기초부터 심화까지의 학습 커리큘럼을 제공합니다.',
      ],
    },
    {
      id: 3,
      title: 'Backend',
      subTitle: '데이터의 효율적 관리와 인프라 설계',
      contentList: [
        '비지니스 로직을 실체화하고, 사용자의 요청에 대한 응답을 전달하는 API를 설계합니다.',
        '원활한 서비스 운영을 위한 아키텍처 및 데이터베이스를 설계합니다.',
        '개발부터 지속적인 배포와 통합, 유지보수의 과정을 주관합니다.',
        'Spring Boot를 통하여 REST API 서버를 구축하고, 효율적인 설계, 전체적인 인프라 관리와 같은 학습 커리큘럼을 제공합니다.',
      ],
    },
  ];
  return (
    <Wrapper {...props}>
      <Title>트랙소개</Title>
      <Content>
        영남대학교 멋쟁이사자처럼 13기는 기획/디자인, Front-end, Back-end 파트로
        나누어 아기사자를 모집합니다. <br />
        코딩이 익숙하지 않은 비전공자/전공자여도 중앙 멋쟁이사자에서 제공하는
        VOD강의와 자체적으로 제공하는 교육 자료들로 충분히 실력을 키울 수
        있습니다.
      </Content>
      <TrackDetail>
        <ButtonContainer>
          {trackList.map((trackData) => (
            <ButtonItem
              key={trackData.id}
              onClick={() => setSelectedTrack(trackData.id)}
              active={selectedTrack === trackData.id}
            >
              {trackData.title}
            </ButtonItem>
          ))}
        </ButtonContainer>
        <TrackContainer>
          <TrackSlider selectedTrack={selectedTrack}>
            {trackList.map((trackData) => (
              <TrackBox key={trackData.id}>
                <TrackTitle>{trackData.title}</TrackTitle>
                <TrackSubTitle>{trackData.subTitle}</TrackSubTitle>
                <ContentContainer>
                  {trackData.contentList.map((content, index) => (
                    <TrackContent key={index}>{content}</TrackContent>
                  ))}
                </ContentContainer>
              </TrackBox>
            ))}
          </TrackSlider>
        </TrackContainer>
      </TrackDetail>
    </Wrapper>
  );
};

export default Track;

const Wrapper = styled.div`
  margin: 160px 200px;
  width: 100%;
  color: white;
  position: absolute;
  top: 2423px;
`;
const Title = styled.div`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: bold;
`;
const Content = styled.div`
  margin-bottom: 24px;
  color: #ababab;
  font-size: 17px;
  line-height: 180%;
`;

const TrackDetail = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;
const ButtonItem = styled.div`
  margin: 40px 70px 30px 0px;
  font-size: 17px;
  color: ${(props) => (props.active ? 'white' : '#ABABAB')};
  cursor: pointer;
  transition: color 0.3s ease-in-out;
`;

const TrackContainer = styled.div`
  overflow: visible;
  padding: 0 200px;
  margin: 0 -200px;
`;
const TrackSlider = styled.div`
  display: flex;
  gap: 40px;
  transition: transform 0.6s ease-in-out;
  transform: translateX(
    ${(props) => (props.selectedTrack - 1) * -1160}px
  ); // 박스 너비(1420px) + gap(40px)
`;

const TrackBox = styled.div`
  flex-shrink: 0;
  background-color: rgba(171, 171, 171, 0.2);
  border: 1px solid rgba(153, 153, 153, 0.2);
  border-radius: 30px;
  width: 1120px;
  height: 380px;
`;
const TrackTitle = styled.div`
  padding: 50px;
  font-size: 45px;
  font-weight: 900;
  color: #abb6ff;
`;
const TrackSubTitle = styled.div`
  padding: 5px 30px 20px 50px;
  font-size: 17px;
  font-weight: 900;
`;
const ContentContainer = styled.div`
  margin-bottom: 20px;
`;
const TrackContent = styled.li`
  margin-left: 30px;
  padding-bottom: 10px;
  color: #ababab;
  font-size: 17px;
`;
