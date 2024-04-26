import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, ProgressBar } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffacd;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((item) =>
      item.id === type ? { id: item.id, score: item.score + no } : item
    );
    setTotalScore(newScore);
    console.log(totalScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      console.log(mbti);
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };

  return (
    <div>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Wrapper>
        <div>
          <Title>{QuestionData[questionNo].title}</Title>
          <ButtonGroup>
            <Button
              onClick={() =>
                handleClickButton(1, QuestionData[questionNo].type)
              }
              style={{ width: "400px", height: "200px", fontSize: "15px" }}
            >
              {QuestionData[questionNo].answera}
            </Button>
            <Button
              onClick={() =>
                handleClickButton(0, QuestionData[questionNo].type)
              }
              style={{ width: "400px", height: "200px", fontSize: "15px" }}
            >
              {QuestionData[questionNo].answerb}
            </Button>
          </ButtonGroup>
        </div>
      </Wrapper>
    </div>
  );
};

export default Question;
