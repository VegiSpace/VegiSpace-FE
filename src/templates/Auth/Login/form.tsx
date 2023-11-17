import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { userAPI } from "apis";
import { InputContainer, Button } from "components";
import { InputComponentProps, LoginFormInputProps } from "types/Auth";

import LoginHelper from "./helper";
import { LoginInputs } from "../data";
import axios from "axios";

const LoginForm = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(["savedEmail"]);
  const [values, setValues] = useState<LoginFormInputProps>({
    email: "",
    password: "",
  });
  const handleSavedEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked, values.email);
    setIsSaved(e.target.checked);
    if (e.target.checked) {
      setCookie("savedEmail", values.email, { maxAge: 2000 });
    } else {
      removeCookie("savedEmail");
    }
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await userAPI.postLogin(values);
      // const response = await userAPI.getAllUsers();
      console.log("로그인 페이지 응답", values, response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        const errorData = error.response?.data;
        const errorStatus = errorData?.status;
        throw new Error(`로그인 에러 ${errorStatus}: ${errorData}`);
      }
      console.log(error);
    }
  };

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    console.log(name, value);
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (cookies.savedEmail !== undefined) {
      setValues({ ...values, email: cookies.savedEmail });
      setIsSaved(true);
    }
  }, []);
  return (
    <>
      <form onSubmit={handleFormSubmit} method="POST">
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
            handleSavedEmailChange={handleSavedEmailChange}
            isSaved={isSaved}
          />
        </StyledInputWrapper>

        <Button
          btnType="primary"
          color="black"
          disabled={!(values.email && values.password)}
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
