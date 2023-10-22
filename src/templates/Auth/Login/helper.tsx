import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface LoginHelperProps {
  handleSavedIdChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isSaved: boolean;
}

const LoginHelper = ({ handleSavedIdChange, isSaved }: LoginHelperProps) => {
  const navigation = useNavigate();
  const handleFindAuth = (type: string) => {
    console.log(type);
    navigation(`/find?type=${type}`);
  };
  return (
    <StyledHelperWrapper>
      <div>
        {" "}
        <input
          type="checkbox"
          onChange={handleSavedIdChange}
          checked={isSaved}
        />
        아이디 저장
      </div>
      <StyledFindContainer>
        <span onClick={() => handleFindAuth("id")}>아이디 찾기</span>
        <span>|</span>
        <span onClick={() => handleFindAuth("password")}>비밀 번호 찾기</span>
      </StyledFindContainer>
    </StyledHelperWrapper>
  );
};

export default LoginHelper;

const StyledHelperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.2rem;
  justify-content: space-between;
`;

const StyledFindContainer = styled.div`
  width: 13.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
