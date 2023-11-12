import { useState } from "react";
import styled from "styled-components";
import { TextLogo, FindPWForm } from "templates";
import { FindPWProps } from "types";

const FindPW = () => {
  const [form, setForm] = useState({
    email: "",
    isCheck: false,
    numbers: "",
  });

  return (
    <FindPWContainer>
      <TextLogo text="비밀번호를 재설정해주세요" />
      <FindPWForm form={form} setForm={setForm} />
    </FindPWContainer>
  );
};

export default FindPW;
const FindPWContainer = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
