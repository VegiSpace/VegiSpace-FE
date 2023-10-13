import styled, { css } from "styled-components";
import { LogoImg } from "../../../assets";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: 16rem;
  height: 10rem;
`;

export default Logo;
