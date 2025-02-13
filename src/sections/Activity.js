import React from 'react';
import styled from 'styled-components';
import Session from '../assets/activity/session.png';
import NetworkingDay from '../assets/activity/networking.png';
import Ideathon from '../assets/activity/ideathon.png';
import Study from '../assets/activity/study.png';
import Hackathon from '../assets/activity/hackathon.png';
import DemoDay from '../assets/activity/demoday.png';

const Activity = (props) => {
  const activityList = [
    {
      id: 1,
      title: '1학기 정기 세션',
      img: Session,
    },
    {
      id: 2,
      title: '네트워킹 데이',
      img: NetworkingDay,
    },
    {
      id: 3,
      title: '아이디어톤',
      img: Ideathon,
    },
    {
      id: 4,
      title: '스터디',
      img: Study,
    },
    {
      id: 5,
      title: '해커톤',
      img: Hackathon,
    },
    {
      id: 6,
      title: '데모데이',
      img: DemoDay,
    },
  ];
  return (
    <Wrapper {...props}>
      <Title>주요 활동</Title>
      <ActivityContainer>
        {activityList.map((activity) => (
          <BorderBox key={activity.id}>
            <ActivityContent bgimg={activity.img}>
              <ActivityTitle>{activity.title}</ActivityTitle>
            </ActivityContent>
          </BorderBox>
        ))}
      </ActivityContainer>
    </Wrapper>
  );
};

export default Activity;

const Wrapper = styled.div`
  width: 100%;
  margin: 0px 200px;
  color: white;
  position: absolute;
  top: 3597px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bolder;
  margin-bottom: 30px;
`;
const ActivityContainer = styled.div`
  width: 1120px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const BorderBox = styled.div`
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
const ActivityContent = styled.div`
  background-image:
    linear-gradient(rgba(79, 39, 21, 0.8), transparent),
    url(${(props) => props.bgimg});
  background-size: cover;
  border-radius: 29px;
  width: 350px;
  height: 220px;
`;
const ActivityTitle = styled.div`
  padding: 20px;
  font-size: 17px;
`;
