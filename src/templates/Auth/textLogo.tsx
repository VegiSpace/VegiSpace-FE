import styled from "styled-components";

const TextLogo = ({ text }: { text: string }) => {
  return <StyledBanner>{text}</StyledBanner>;
};

export default TextLogo;

const StyledBanner = styled.div`
  font-size: 1.8rem;
  font-weight: lighter;
  padding: 4.4rem 0;
`;
