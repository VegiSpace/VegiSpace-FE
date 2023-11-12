import { Button } from "components";
import styled from "styled-components";
import { borderRadius, colors } from "styles/options";
import { FindPWProps } from "types";

const Form = ({ form, setForm }: FindPWProps) => {
  const handleFormState = (e: any) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBtnClick = () => {
    console.log("button Click");
    console.log(form);
  };

  const handleBtnSubmit = () => {
    console.log("submit");
  };

  return (
    <>
      <StyledEmailContainer>
        <StyledInput
          name="email"
          onChange={handleFormState}
          placeholder="이메일 입력"
          width={24}
        />
        <StyledButton onClick={handleBtnClick}>인증번호</StyledButton>
      </StyledEmailContainer>
      <StyledNumbersContainer>
        <StyledInput
          name="numbers"
          width={32.4}
          onChange={handleFormState}
          placeholder="인증번호 입력"
        />
      </StyledNumbersContainer>
      <Button btnType="primary" color="green" onClick={handleBtnSubmit}>
        확인
      </Button>
    </>
  );
};

export default Form;

const StyledEmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 2.6rem;
  width: 32.4rem;
`;

const StyledNumbersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2.6rem;
`;

const StyledButton = styled.button`
  width: 7rem;
  height: 3.6rem;
  border: 1px solid ${colors.neutral["1000"]};
  color: "white";
  border-radius: ${borderRadius.square};
`;

const StyledInput = styled.input<{ width: number }>`
  border: none;
  border-bottom: 2px solid ${colors.grey[500]};
  width: ${(props) => `${props["width"]}rem`};
  color: ${colors.neutral[1000]};
  height: 2.8rem;
`;
