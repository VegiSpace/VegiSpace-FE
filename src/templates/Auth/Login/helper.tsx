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
      <StyledSavedIdContainer>
        {" "}
        <input
          type="checkbox"
          onChange={handleSavedIdChange}
          checked={isSaved}
        />
        <span>아이디 저장</span>
      </StyledSavedIdContainer>
      <StyledFindContainer>
        {/*<span onClick={() => handleFindAuth("id")}>아이디 찾기</span>
        <span>|</span>*/}
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
const StyledSavedIdContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledFindContainer = styled.div`
  /*width: 13.3rem;*/
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
