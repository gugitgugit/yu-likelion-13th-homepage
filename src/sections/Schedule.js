import React from 'react';
import styled from 'styled-components';
import ThreeArrows from '../assets/three-arrows.png';

const Schedule = (props) => {
  const scheduleList = [
    {
      id: 1,
      month: 3,
      content: ['1학기 정기 세션 시작', '네트워킹 데이'],
    },
    {
      id: 2,
      month: 5,
      content: ['아이디어톤'],
    },
    {
      id: 3,
      month: 8,
      content: ['해커톤'],
    },
    {
      id: 4,
      month: 12,
      content: ['데모데이'],
    },
  ];
  return (
    <Wrapper {...props}>
      <Title>연간 일정</Title>
      <ScheduleContainer>
        {scheduleList.map((schedule) => (
          <>
            <ScheduleBox key={schedule.id}>
              <ScheduleMonth>{schedule.month}월</ScheduleMonth>
              <MainEvent>
                {schedule.content.map((event, index) => (
                  <DetailSchedule key={index}>{event}</DetailSchedule>
                ))}
              </MainEvent>
            </ScheduleBox>
            {schedule.id === 4 ? null : (
              <IconContainer>
                <NextIcon src={ThreeArrows} />
              </IconContainer>
            )}
          </>
        ))}
      </ScheduleContainer>
    </Wrapper>
  );
};

export default Schedule;

const Wrapper = styled.div`
  width: 100%;
  color: white;
  position: absolute;
  top: 4675px;
`;
const Title = styled.div`
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: bolder;
`;

const ScheduleContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const ScheduleBox = styled.div`
  width: 325px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid rgba(153, 153, 153, 0.2);
  background-color: rgba(171, 171, 171, 0.2);
  border-radius: 30px;
`;

// 일정 내용
const ScheduleMonth = styled.div`
  padding: 10px;
  font-size: 40px;
  font-weight: bolder;
  color: #abb6ff;
`;
const MainEvent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DetailSchedule = styled.div`
  font-size: 24px;
  color: #ababab;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NextIcon = styled.img`
  width: 30px;
  height: 30px;
`;
