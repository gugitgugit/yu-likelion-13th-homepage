import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Kakao } from 'src/assets/logo/kakao.svg';
import { ReactComponent as Instagram } from 'src/assets/logo/instagram.svg';
import { ReactComponent as Github } from 'src/assets/logo/github.svg';
import { ReactComponent as LikeLion } from 'src/assets/logo/likelion.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <InfoContainer>
          <LikeLion />
          <LikeLionTitle>LIKELION YU</LikeLionTitle>
          <Copyright>© 2024 LIKELION YU. All rights reserved.</Copyright>
        </InfoContainer>
        <NavBtns>
          <NavBtn
            href="https://www.instagram.com/likelion_yu?igsh=MWRoNmJweXpwazU="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </NavBtn>
          <NavBtn
            href="https://open.kakao.com/o/srpDYFdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Kakao />
          </NavBtn>
          <NavBtn
            href="https://github.com/Likelion-YeungNam-Univ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </NavBtn>
        </NavBtns>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: #1d1f29;
  position: absolute;
  top: 6700px;
  z-index: 3;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1520px;
  margin-bottom: 40px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LikeLionTitle = styled.div`
  color: #fff;
  font-family: 'Gmarket Sans';
  font-size: 48px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  letter-spacing: -1.44px;
`;

const Copyright = styled.div`
  color: #ababab;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 43.2px */
  letter-spacing: -0.72px;
`;

const NavBtns = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
`;

const NavBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background: #464750;
`;
