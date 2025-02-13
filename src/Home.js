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
import Lion from './assets/background/lion.jpg';

const Home = () => {
  return (
    <Background>
      <Header />
      <ContentContainer>
        <Apply />
        <Introduction />
        <Track />
        <Activity />
        <Schedule />
        <Question />
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

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: #000;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ContentContainer = styled.div`
  width: 1520px;
  z-index: 2;
`;

const LionImg = styled.div`
  width: 1621px;
  height: 1080px;
  flex-shrink: 0;
  background:
    linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 50.4%, #000 100%),
    linear-gradient(270deg, rgba(0, 0, 0, 0) 10%, #000 97.21%),
    url(${Lion}) lightgray 50% / cover no-repeat;
  position: absolute;
  top: 894px;
  right: -423px;
`;

const Ellipse1 = styled.div`
  width: 3340px;
  height: 985px;
  flex-shrink: 0;
  border-radius: 3340px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(70, 93, 251, 0.4) 0%,
    rgba(70, 93, 251, 0) 100%
  );
  position: absolute;
  top: 120px;
`;

const Ellipse2 = styled.div`
  height: 2306px;
  width: 1391px;
  /* transform: rotate(90deg); */
  flex-shrink: 0;
  border-radius: 2306px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(70, 93, 251, 0.4) 0%,
    rgba(70, 93, 251, 0) 100%
  );
  position: absolute;
  top: 1337px;
  right: -710px;
`;

const Ellipse3 = styled.div`
  height: 2306px;
  width: 1391px;
  flex-shrink: 0;
  border-radius: 2306px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(70, 93, 251, 0.4) 0%,
    rgba(70, 93, 251, 0) 100%
  );
  position: absolute;
  top: 3678px;
  left: -742px;
`;
