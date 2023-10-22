import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { InputComponentProps, LoginFormInputProps } from "../../../types/Auth";
import { InputContainer, Button } from "../../../components";
import LoginHelper from "./helper";
import { LoginInputs } from "../data";

const LoginForm = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(["savedId"]);
  const [values, setValues] = useState<LoginFormInputProps>({
    id: "",
    password: "",
  });
  const handleSavedIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked, values.id);
    setIsSaved(e.target.checked);
    if (e.target.checked) {
      setCookie("savedId", values.id, { maxAge: 2000 });
    } else {
      removeCookie("savedId");
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (cookies.savedId !== undefined) {
      setValues({ ...values, id: cookies.savedId });
      setIsSaved(true);
    }
  }, []);
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <StyledInputWrapper>
          {LoginInputs.map(
            ({ id, name, errorHandler, ...args }: InputComponentProps) => (
              <InputContainer
                key={id}
                name={name}
                value={values[name]}
                onChange={handleFormChange}
                showLeftIcon={false}
                showRightIcon={false}
                {...args}
              />
            ),
          )}

          <LoginHelper
            handleSavedIdChange={handleSavedIdChange}
            isSaved={isSaved}
          />
        </StyledInputWrapper>

        <Button
          type="submit"
          btnType="primary"
          color="black"
          onClick={() => {
            console.log(values);
          }}
          disabled={!(values.id && values.password)}
        >
          로그인
        </Button>
      </form>
    </>
  );
};

export default LoginForm;

const StyledInputWrapper = styled.div`
  margin: 2.4rem auto;
`;
