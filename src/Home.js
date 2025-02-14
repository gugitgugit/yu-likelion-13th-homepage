import React from 'react';
import Header from './sections/Header';
import Apply from './sections/Apply';
import Introduction from './sections/Introduction';
import Track from './sections/Track';
import Activity from './sections/Activity';
import Schedule from './sections/Schedule';
import Question from './sections/Question';
import Footer from './sections/Footer';
import styled from 'styled-components';
import {
  Ellipse1,
  Ellipse2,
  Ellipse3,
  LionImg,
} from './components/background/Background';

const Home = () => {
  return (
    <Background className="background">
      <Header />
      <BlurComponents />
      <ContentContainer>
        <Apply />
        <Introduction id="introduction" />
        <Track id="track" />
        <Activity id="activity" />
        <Schedule id="schedule" />
        <Question id="question" />
      </ContentContainer>
      <Footer />
      <LionImg />
      <Ellipse1 />
      <Ellipse2 />
      <Ellipse3 />
    </Background>
  );
};

export default Home;

const BlurComponents = () => {
  return (
    <>
      {[...Array(100)].map((_, index) => (
        <Blur key={index} top={index * 1} blur={(100 - index) * 0.1} />
      ))}
    </>
  );
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #000;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ContentContainer = styled.div`
  width: 1520px;
  z-index: 2;
`;

const Blur = styled.div`
  width: 90%;
  height: 2px;
  position: fixed;
  top: ${({ top }) => `${top}px`};
  overflow: hidden;
  z-index: 3;
  backdrop-filter: blur(${({ blur }) => `${blur}px`});
  pointer-events: none;
`;
