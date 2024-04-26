import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { ResultData } from "../assets/data/resultdata";

const Wrapper = styled.div`
  witdh: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fffacd;
`;

const Header = styled.div`
  font-family: "SimKyungha";
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffa07a;
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: "SimKyungha";
  font-size: 30px;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 10px 0 20px;
`;

const Desc = styled.div`
  font-size: 30px;
  font-family: "SimKyungha";
  margin-bottom: 20px;
  width: 500px;
  text-align: center;
`;

const Button = styled.button`
  font-family: "SimKyungha";
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 0 8px 0 8px;
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  useEffect(() => {
    const result = ResultData.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);
  console.log(resultData);
  return (
    <Wrapper>
      <Header>😺예비집사 판별기 결과😺</Header>
      <Contents>
        <Title>결과보기</Title>
        <LogoImage>
          <img
            className="rounded-circle"
            width={350}
            height={350}
            src={resultData.image}
            alt="catImg"
          />
        </LogoImage>
        <Desc>
          {resultData.best}형인 예비 집사님과 찰떡궁합인 고양이는
          <br /> {resultData.name} 입니다!!😻 <br />
          <br />
          {resultData.desc}
        </Desc>
        <Button onClick={handleClick}>테스트 다시하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
