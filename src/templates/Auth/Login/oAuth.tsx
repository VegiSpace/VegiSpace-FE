import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import styled, { css } from "styled-components";

const OAuth = () => {
  const navigation = useNavigate();
  const handleRoute = () => {
    navigation("/signup");
  };
  return (
    <StyledOAuthContainer>
      <Button
        btnType="secondary"
        color="yellow"
        onClick={() => {
          console.log("카카오 로그인하기");
        }}
        border="round"
      >
        카카오로 1초만에 로그인하기
      </Button>
      <Button
        btnType="secondary"
        color="white"
        onClick={handleRoute}
        border="round"
      >
        회원가입
      </Button>
    </StyledOAuthContainer>
  );
};

export default OAuth;

const StyledOAuthContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  button {
    margin-bottom: 1.2rem;
  }
  button:nth-child(1) {
    background-color: #ffe03f;
  }
`;
