import styled from "styled-components";

const StyledBottomTab = styled.div`
  position: fixed;
  bottom: 0;

  height: 5.6rem;
  max-width: 375px;
  width: 100%;
  background-color: white;
  box-shadow:
    0px -2px 8px 0px rgba(20, 20, 20, 0.04),
    0px -1px 1px 0px rgba(20, 20, 20, 0.02);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export { StyledBottomTab };
