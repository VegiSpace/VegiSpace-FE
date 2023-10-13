import styled, { css } from "styled-components";
import { LoginForm, LoginLogo, LoginOAuth } from "../../templates";

const Login = () => {
  return (
    <LoginContainer>
      <LoginLogo />
      <LoginForm />
      <LoginOAuth />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
