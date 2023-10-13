import React from "react";
import {
  BackWhite,
  CartWhite,
  ExitWhite,
  InvisibleWhite,
  LockWhite,
  NotificationsWhite,
  SearchWhite,
  SettingsWhite,
  VisibleWhite,
  BackBlack,
  CartBlack,
  ExitBlack,
  InvisibleBlack,
  LockBlack,
  NotificationsBlack,
  SearchBlack,
  SettingsBlack,
  VisibleBlack,
} from "../../assets";
import styled, { css } from "styled-components";

interface IconProps {
  width?: number;
  height?: number;
  type: "white" | "black";
}

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: fit-content;
`;

const Lock = ({ width, height, type }: IconProps) => {
  return (
    <StyledIconContainer>
      {type === "white" ? (
        <LockWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      ) : (
        <LockBlack
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      )}
    </StyledIconContainer>
  );
};

const Visible = ({ width, height, type }: IconProps) => {
  return (
    <StyledIconContainer>
      {type === "white" ? (
        <VisibleWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      ) : (
        <VisibleBlack
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      )}
    </StyledIconContainer>
  );
};

const Search = ({ width, height, type }: IconProps) => {
  return (
    <StyledIconContainer>
      {type === "white" ? (
        <SearchWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      ) : (
        <SearchBlack
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      )}
    </StyledIconContainer>
  );
};

const Back = ({ width, height, type }: IconProps) => {
  return (
    <StyledIconContainer>
      {type === "white" ? (
        <BackWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      ) : (
        <BackBlack
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      )}
    </StyledIconContainer>
  );
};

const Cart = ({ width, height, type }: IconProps) => {
  return (
    <StyledIconContainer>
      {type === "white" ? (
        <CartWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      ) : (
        <CartBlack
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      )}
    </StyledIconContainer>
  );
};

const Exit = ({ width, height, type }: IconProps) => {
  return (
    <StyledIconContainer>
      {type === "white" ? (
        <ExitWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      ) : (
        <ExitBlack
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      )}
    </StyledIconContainer>
  );
};

const Invisible = ({ width, height, type }: IconProps) => {
  return (
    <StyledIconContainer>
      {type === "white" ? (
        <InvisibleWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      ) : (
        <InvisibleBlack
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      )}
    </StyledIconContainer>
  );
};

const Notifications = ({ width, height, type }: IconProps) => {
  return (
    <StyledIconContainer>
      {type === "white" ? (
        <NotificationsWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      ) : (
        <NotificationsBlack
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      )}
    </StyledIconContainer>
  );
};

const Settings = ({ width, height, type }: IconProps) => {
  return (
    <StyledIconContainer>
      {type === "white" ? (
        <SettingsWhite
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      ) : (
        <SettingsBlack
          width={width?.toString() ?? "16"}
          height={height?.toString() ?? "16"}
        />
      )}
    </StyledIconContainer>
  );
};

export {
  Lock,
  Visible,
  Search,
  Back,
  Cart,
  Exit,
  Invisible,
  Notifications,
  Settings,
};

export type { IconProps };
