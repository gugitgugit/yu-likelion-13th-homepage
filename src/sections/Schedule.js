import React from 'react';
import styled from 'styled-components';

const Schedule = () => {
  const scheduleList = [
    {
      id: 1,
      month: 3,
      content: ["1학기 정기 세션 시작", "네트워킹 데이"]
    },
    {
      id: 2,
      month: 5,
      content: ["아이디어톤"]
    },
    {
      id: 2,
      month: 8,
      content: ["해커톤"]
    },
    {
      id: 2,
      month: 12,
      content: ["데모데이"]
    },
  ];
  return (
    <Wrapper>
      <Title>연간 일정</Title>
      <ScheduleContainer>
        {scheduleList.map(schedule=>(
          <ScheduleBox key={schedule.id}>
            <ScheduleMonth>{schedule.month}월</ScheduleMonth>
            <MainEvent>
              {schedule.content.map((event, index)=>(
                <DetailSchedule key={index}>{event}</DetailSchedule>
              ))}
            </MainEvent>
          </ScheduleBox>
          // <NextIcon/>
        ))}
      </ScheduleContainer>
    </Wrapper>
  );
};

export default Schedule;

const Wrapper = styled.div`
  width: 100%;
  margin: 500px 0px;
  border: 1px solid red;
  background-color: black;
  color: white;
`;
const Title = styled.div`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bolder;
`;

const ScheduleContainer = styled.div`
  display: flex;
  gap: 70px;
`;
const ScheduleBox = styled.div`
  width: 300px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border: 1px solid rgba(222, 222, 222, 0.4);
  background-color: rgba(171, 171, 171, 0.2);
  border-radius: 40px;
`;

// 일정 내용
const ScheduleMonth = styled.div`
  padding: 10px;
  font-size: 40px;
  font-weight: bolder;
  color: #ABB6FF;
`;
const MainEvent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DetailSchedule = styled.div`
  font-size: 22px;
  color: #ABABAB;
`;