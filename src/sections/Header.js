import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'src/assets/logo/likelion.svg';

const Header = () => {
  const navList = [
    { value: '트랙소개', id: 'track' },
    { value: '활동', id: 'activity' },
    { value: '연간 일정', id: 'schedule' },
    { value: '자주 묻는 질문', id: 'question' },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
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

  return (
    <HeaderContainer>
      <ContentContainer>
        <LogoContainer>
          <LikeLionLogo />
          <LikeLionTitle>LIKELION YU</LikeLionTitle>
        </LogoContainer>
        <BtnsContainer>
          <NavBtns>
            {navList.map((navItem, index) => (
              <NavBtn key={index} onClick={() => handleScroll(navItem.id)}>
                {navItem.value}
              </NavBtn>
            ))}
          </NavBtns>
          <ApplyBtn>13기 지원하기</ApplyBtn>
        </BtnsContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  z-index: 3;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1520px;
  margin: 21px 0px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LikeLionLogo = styled(Logo)`
  width: 68px;
  height: 68px;
`;

const LikeLionTitle = styled.div`
  color: #fff;
  font-family: 'Gmarket Sans';
  font-size: 24px;
  font-weight: 550;
  letter-spacing: -0.72px;
`;

const BtnsContainer = styled.div`
  display: flex;
  gap: 60px;
`;

const NavBtns = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const NavBtn = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;

const ApplyBtn = styled.a`
  display: flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 80px;
  background: #f07f36;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
