import React from 'react';
import styled from 'styled-components';
import Img1 from 'src/assets/introduction/img1.svg';
import Img2 from 'src/assets/introduction/img2.svg';
import Img3 from 'src/assets/introduction/img3.svg';

const Introduction = () => {
  const imageList = [
    {
      id: 1,
      src: Img1,
      subTitle: ['💻', '코딩이 처음이라도, 걱정 NO!'],
      description: [
        '초보자부터 고수까지, 모두가 함께 성장하는 환경을 제공합니다.',
        '프로젝트를 통해 경험을 쌓고, 포트폴리오까지 완성할 수 있습니다.',
      ],
    },
    {
      id: 2,
      src: Img2,
      subTitle: ['🚀', '다양한 아이디어를 현실로!'],
      description: [
        '팀원들과 함께 창의적인 서비스를 기록하고 개발합니다.',
        '해커톤 참여를 통해 내 아이디어를 실제 서비스로 만들 수 있습니다.',
      ],
    },
    {
      id: 3,
      src: Img3,
      subTitle: ['👭', '협력과 네트워킹의 장!'],
      description: [
        '다양한 전공의 사람들과 교류하여 더 넓은 세상을 경험할 수 있습니다.',
        '함께 성장하는 동료들과 소중한 인연을 만들어보세요.',
      ],
    },
  ];

  return (
    <Container>
      <Title>
        <span style={{ fontSize: '22px', fontWeight: '600' }}>
          국내외 121개 대학, 4천여 명이 활동하는
        </span>
        <br />
        국내 <span style={{ color: 'orange' }}>최대 규모</span>의 <br />
        전국 IT 창업 동아리{' '}
        <span style={{ color: 'orange' }}>멋쟁이사자처럼</span> 입니다.
      </Title>
      <ImageContainer>
        {imageList.map((image) => (
          <ImageBox key={image.id}>
            <ImageWrapper>
              <Image src={image.src} alt={`Image ${image.id}`} />
              <TextOverlay>
                <SubTitle>
                  {image.subTitle.map((text, index) => (
                    <span style={{ fontSize: '25px' }} key={index}>
                      {text}
                      <br />
                    </span>
                  ))}
                </SubTitle>
                <Description>
                  {image.description.map((text, index) => (
                    <span style={{ color: '#ababab' }} key={index}>
                      {text}
                    </span>
                  ))}
                </Description>
              </TextOverlay>
            </ImageWrapper>
          </ImageBox>
        ))}
      </ImageContainer>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  margin: 160px 200px;
  width: 100%;
  color: white;
  position: absolute;
  top: 1320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 35px;
  line-height: 140%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 480px;
  height: 300px;
  border-radius: 40px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  padding: 20px;

  color: white;
  text-align: left;
  border-radius: 10px;
  z-index: 2;
`;

const SubTitle = styled.div`
  font-size: 20px;
`;

const Description = styled.div`
  font-size: 16px;
  margin-top: 10px;
  color: #ffffff;
  line-height: 1.5;
`;
