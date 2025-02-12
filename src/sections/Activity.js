import React from 'react';
import styled from 'styled-components';
import Session from '../assets/activity/session.png';
import NetworkingDay from '../assets/activity/networking.png';
import Ideathon from '../assets/activity/ideathon.png';
import Study from '../assets/activity/study.png';
import Hackathon from '../assets/activity/hackathon.png';
import DemoDay from '../assets/activity/demoday.png';

const Activity = () => {
  const activityList = [
    {
      id: 1,
      title: "1학기 정기 세션",
      img: Session,
    },
    {
      id: 2,
      title: "네트워킹 데이",
      img: NetworkingDay,
    },
    {
      id: 3,
      title: "아이디어톤",
      img: Ideathon,
    },
    {
      id: 4,
      title: "스터디",
      img: Study,
    },
    {
      id: 5,
      title: "해커톤",
      img: Hackathon,
    },
    {
      id: 6,
      title: "데모데이",
      img: DemoDay,
    },
  ];
  return (
    <Wrapper>
      <Title>주요 활동</Title>
      <ActivityContainer>
        {activityList.map(activity => (
          <ActivityContent 
            key={activity.id}
            bgimg={activity.img}
          >
            <ActivityTitle>{activity.title}</ActivityTitle>
          </ActivityContent>
        ))}
      </ActivityContainer>
    </Wrapper>
  )
};

export default Activity;

const Wrapper = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  margin: 300px 0px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 30px;
`;
const ActivityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`;
const ActivityContent = styled.div`
  background-image: 
  linear-gradient(rgba(79, 39, 21, 0.8), transparent), 
  url(${props => props.bgimg});
  background-size: cover;
  border: 1.2px solid rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  width: 450px;
  height: 280px;
`;
const ActivityTitle = styled.div`
  padding: 30px;
  font-size: 22px;
`;