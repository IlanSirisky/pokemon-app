import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { buttonType, buttonSize } from "./types";
import { cssSpacings, cssFontWeights } from "../../styles/stylingValues";

const { Neutrals, Primary } = COLORS;

const buttonTypeStyles = {
  primary: {
    color: Neutrals.White,
    backgroundColor: Primary.P300,
    border: "none",
    hoverBackgroundColor: Primary.P400,
    activeBackgroundColor: Primary.P500,
    disabledColor: "#A8AEB5",
    disabledBackgroundColor: "#E3E6E9",
    disabledBorder: "none",
  },
  secondary: {
    color: Primary.P300,
    backgroundColor: "transparent",
    border: `1px solid ${Primary.P300}`,
    hoverBackgroundColor: Primary.P50,
    activeBackgroundColor: Primary.P100,
    disabledColor: "#C7CDD3",
    disabledBackgroundColor: "none",
    disabledBorder: "1px solid #C7CDD3",
  },
  "secondary-gray": {
    color: Neutrals.N400,
    backgroundColor: "transparent",
    border: `1px solid ${Neutrals.N400}`,
    hoverBackgroundColor: Neutrals.N100,
    activeBackgroundColor: Neutrals.N100,
    disabledColor: "#C7CDD3",
    disabledBackgroundColor: "none",
    disabledBorder: "1px solid #C7CDD3",
  },
  tertiary: {
    color: Primary.P300,
    backgroundColor: "transparent",
    border: "none",
    hoverBackgroundColor: Primary.P50,
    activeBackgroundColor: Primary.P100,
    disabledColor: "#C7CDD3",
    disabledBackgroundColor: "none",
    disabledBorder: "none",
  },
  "tertiary-gray": {
    color: Neutrals.N400,
    backgroundColor: "transparent",
    border: "none",
    hoverBackgroundColor: Neutrals.N100,
    activeBackgroundColor: Neutrals.N100,
    disabledColor: "#C7CDD3",
    disabledBackgroundColor: "none",
    disabledBorder: "none",
  },
};

const buttonSizeStyles = {
  small: {
    fontSize: "14px",
    lineHeight: `${cssSpacings.s14}`,
    padding: "$9px 16px",
  },
  medium: {
    fontSize: "16px",
    lineHeight: `${cssSpacings.s20}`,
    padding: "10px 16px",
  },
  large: {
    fontSize: "16px",
    lineHeight: `${cssSpacings.s20}`,
    padding: "12px 16px",
  },
};

interface StyledButtonProps {
  $type: buttonType;
  $size: buttonSize;
}

export const StyledButton = styled.button<StyledButtonProps>`
  font-family: "Mulish", sans-serif;
  cursor: pointer;
  font-weight: ${cssFontWeights.medium};
  gap: ${cssSpacings.s4};
  padding: ${({ $size }) => buttonSizeStyles[$size].padding};

  font-size: ${({ $size }) => buttonSizeStyles[$size].fontSize};
  line-height: ${({ $size }) => buttonSizeStyles[$size].lineHeight};

  color: ${({ $type }) => buttonTypeStyles[$type].color};
  background-color: ${({ $type }) => buttonTypeStyles[$type].backgroundColor};
  border: ${({ $type }) => buttonTypeStyles[$type].border};
  border-radius: ${cssSpacings.s4};

  &:hover:not(:disabled) {
    background-color: ${({ $type }) =>
      buttonTypeStyles[$type].hoverBackgroundColor};
  }

  &:active:not(:disabled) {
    background-color: ${({ $type }) =>
      buttonTypeStyles[$type].activeBackgroundColor};
    box-shadow: 4px 4px 13px 0px #0000000d inset;
  }

  &:disabled {
    color: ${({ $type }) => buttonTypeStyles[$type].disabledColor};
    background-color: ${({ $type }) =>
      buttonTypeStyles[$type].disabledBackgroundColor};
    border: ${({ $type }) => buttonTypeStyles[$type].disabledBorder};
    cursor: not-allowed;
  }
`;
