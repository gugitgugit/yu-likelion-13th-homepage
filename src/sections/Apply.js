import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import arrowImg from 'src/assets/three-arrows.png';
import mainImg from 'src/assets/main.svg';

const Apply = () => {
  const targetDate = new Date('2025-03-08T23:59:59');

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return { days: '00', hours: '00', minutes: '00' };
    }

    const days = String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, '0');
    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, '0');
    const minutes = String(
      Math.floor((difference / (1000 * 60)) % 60)
    ).padStart(2, '0');

    return { days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const handleScroll = () => {
    const element = document.getElementById('introduction');
    const background = document.querySelector('.background');

    if (element && background) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + background.scrollTop + yOffset;

      background.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ApplyWrapper>
      <ContentWrapper>
        <MainImage src={mainImg} />
        <Title>내 아이디어를 내 손으로 실현하자!</Title>
        <Description>
          영남대학교 멋쟁이사자처럼은 웹 개발을 중점으로 하는 IT 동아리입니다.
          <br />
          기획, 디자인, 개발을 아우르는 협업을 통해, 팀 프로젝트로 실용적인
          서비스를 직접 만들어보는 경험을 할 수 있습니다.
        </Description>
      </ContentWrapper>
      <TimerWrapper>
        <TimerTitle>서류접수 마감까지</TimerTitle>
        <TimerContainer>
          <TimeBox>
            <Number>{timeLeft.days[0]}</Number>
            <Number>{timeLeft.days[1]}</Number>
            <TimerText>일</TimerText>
          </TimeBox>
          <TimeBox>
            <Number>{timeLeft.hours[0]}</Number>
            <Number>{timeLeft.hours[1]}</Number>
            <TimerText>시</TimerText>
          </TimeBox>
          <TimeBox>
            <Number>{timeLeft.minutes[0]}</Number>
            <Number>{timeLeft.minutes[1]}</Number>
            <TimerText>분</TimerText>
          </TimeBox>
        </TimerContainer>
      </TimerWrapper>
      <ApplyButton>13기 지원하기</ApplyButton>
      <ArrowImage src={arrowImg} onClick={handleScroll} />
    </ApplyWrapper>
  );
};

export default Apply;

const ApplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContentWrapper = styled.div`
  gap: 20px;
  margin-top: 50px;
`;
const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const TimeBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const TimerTitle = styled.p`
  font-size: 17px;
  color: #ffffff;
  margin-bottom: 12px;
  margin-top: 45px;
`;

const TimerText = styled.p`
  font-size: 16px;
  color: #ffffff;

  position: absolute;
  right: -26px;
  bottom: 0px;
`;

const CommonFont = styled.p`
  font-size: 24px;
`;

const MainImage = styled.img`
  width: 771.35px;
  height: 219.51px;
  margin-bottom: 80px;
`;

const Title = styled(CommonFont)`
  font-weight: bold;
  color: white;
  margin-bottom: 12px;
  line-height: 120%;
`;

const Description = styled(CommonFont)`
  color: #ababab;
  line-height: 180%;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  padding: 10.5px 15.75px;
  gap: 7.5px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.135) 7.43%,
    rgba(255, 255, 255, 0.09) 96.4%
  );
  color: #ffffff;
  border-radius: 7.5px;
  flex-grow: 0;
  width: 33px;
  height: 67px;
  font-weight: 800;
  font-size: 48px;
  line-height: 140%;
  text-align: center;
`;

const ArrowImage = styled.img`
  margin-top: 50px;
  transform: rotate(-270deg);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(-270deg) scale(1.3);
  }
`;

const ApplyButton = styled.a`
  display: flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 80px;
  background: #f07f36;
  cursor: pointer;
  font-size: 22px;
  color: #ffffff;
  font-weight: 600;
  line-height: 29px;
  margin-top: 70px;
`;
