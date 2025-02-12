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
  border: 1px solid red;
`;
const Title = styled.div`
`;

const ScheduleContainer = styled.div`
`;
const ScheduleBox = styled.div`
`;
const ScheduleMonth = styled.div`
`;

const MainEvent = styled.div`
`;
const DetailSchedule = styled.div`
`;