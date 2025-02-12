import React from 'react';
import styled from 'styled-components';

const Activity = () => {
  const activityList = [
    {
      id: 1,
      title: "1학기 정기 세션",
      img: "",
    },
    {
      id: 2,
      title: "네트워킹 데이",
      img: "",
    },
    {
      id: 3,
      title: "아이디어톤",
      img: "",
    },
    {
      id: 4,
      title: "스터디",
      img: "",
    },
    {
      id: 5,
      title: "해커톤",
      img: "",
    },
    {
      id: 6,
      title: "데모데이",
      img: "",
    },
  ];
  return (
    <Wrapper>
      <Title>주요 활동</Title>
      <ActivityContainer>
        {activityList.map(activity => (
          <ActivityBox key={activity.id}>
            {/* <ActivityImg/> */}
            <ActivityTitle>{activity.title}</ActivityTitle>
          </ActivityBox>
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
  gap: 40px;
`;
const ActivityBox = styled.div`
  border: 1px solid red;
  border-radius: 45px;
  width: 450px;
  height: 280px;
`;
// const ActivityImg = styled.img`
// `;
const ActivityTitle = styled.div`
  padding: 30px;
  font-size: 22px;
`;