import React from 'react';
import styled from 'styled-components';

const Question = (props) => {
  const qnaList = [
    {
      id: 1,
      question: '합격 정원은 몇 명인가요?',
      answer:
        '예정 선발 인원은 기획/디자인 4명, 프론트 12명, 백엔드 8명으로 1/3/2(디/프/백) 비율로 총 4팀 구성됩니다.',
    },
    {
      id: 2,
      question: '2학기에도 아기사자 모집을 진행하나요?',
      answer:
        '멋사 활동은 1년을 기준으로 모집하기 때문에 매년 1학기에만 신입 부원을 모집합니다.',
    },
    {
      id: 3,
      question: '지원 요건이 어떻게 되나요?',
      answer: `멋쟁이사자처럼 대학은 여러분들의 나이, 학년, 학과, 전공 여부에 관계없이 교육 및 팀 프로젝트에 열정을 가지고 참여할 부원을 모집합니다.\n
      (25학년도 기준 재학생, 휴학생, 자대 편입생, 졸업 유예생 모두 가능합니다. - 졸업생, 타대생 불가)`,
    },
    {
      id: 4,
      question: '시험 기간에도 활동하나요?',
      answer: '시험 기간 1주 전부터는 공식 운영은 없습니다.',
    },
    {
      id: 5,
      question: '비전공자도 할 수 있을까요?',
      answer: `배우는 속도의 차이가 있을 수는 있습니다. 하지만 열정만 챙겨오신다면, 운영진들이 최선을 다해서 도와드릴 겁니다.\n
      또한 영남대 멋사에서 직접 제작 중인 교육 자료들을 통해서 스스로 학습할 수 있도록 도와드릴 겁니다.`,
    },
    {
      id: 6,
      question: '수료 조건이 어떻게 되나요?',
      answer: '중앙 아이디어톤, 해커톤 참여 시 수료증이 발급됩니다.',
    },
    {
      id: 7,
      question: '아이디어톤과 해커톤이 뭔가요?',
      answer: `아이디어톤은 아이디어 기획을 중심으로 진행하고, 해커톤은 실제 서비스 구현을 중심으로 진행합니다.\n
      즉, 아이디어톤은 기획이 강하고, 해커톤은 개발까지 포함된다는 점에서 차이가 있습니다.`,
    },
  ];
  return (
    <Wrapper {...props}>
      <Title>자주 묻는 질문</Title>
      <QuestionContainer>
        {qnaList.map((qna) => (
          <QnABox key={qna.id}>
            <QuestionContent>Q. {qna.question}</QuestionContent>
            <Answer>
              {qna.answer.split('\n').map((item) => (
                <AnswerContent key={item}>{item}</AnswerContent>
              ))}
            </Answer>
          </QnABox>
        ))}
      </QuestionContainer>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  width: 100%;
  margin: 0px 200px;
  color: white;
  position: absolute;
  top: 5360px;
`;
const Title = styled.div`
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bolder;
`;
const QuestionContainer = styled.div`
  margin-bottom: 500px;
`;
const QnABox = styled.div`
  font-size: 17px;
  margin-bottom: 25px;
`;
const QuestionContent = styled.div`
  font-weight: bold;
  padding: 10px 0px;
`;
const Answer = styled.div`
  padding-top: 10px;
`;
const AnswerContent = styled.div`
  color: #ababab;
  padding-bottom: 5px;
`;
