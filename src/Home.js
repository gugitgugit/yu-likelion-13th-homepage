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

const Home = () => {
  return (
    <Container>
      <Header />
      <Apply />
      <Introduction />
      <Track />
      <Activity />
      <Schedule />
      <Question />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0px 200px; */
  padding-left: 180px;
  align-items: flex-start;
  overflow-x: hidden;
`;
