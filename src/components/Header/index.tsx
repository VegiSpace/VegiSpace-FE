import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Back } from "../Icon";
import { Typo } from "../Typo";
import { colors } from "../../styles/options";
import { headerData } from "./data";

const Header = () => {
  const { pathname, search } = useLocation();

  const navigate = useNavigate();
  const baseUrl = pathname + search;
  const { needPrev, title, needHeader } = headerData[baseUrl];

  const handlePrevBtn = () => {
    navigate(-1);
  };
  return needHeader ? (
    <StyledHeader>
      {needPrev && (
        <StyledButton onClick={handlePrevBtn}>
          <Back type="black" />
        </StyledButton>
      )}
      <StyledTitle>
        <Typo typoType="SubTitle2">{title}</Typo>
      </StyledTitle>
    </StyledHeader>
  ) : null;
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 4.5rem;
  background-color: ${colors.neutral["0"]};

  padding: 0.8rem 1.9rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  position: absolute;
`;

const StyledTitle = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
`;
