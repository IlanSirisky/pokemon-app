import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { buttonType, buttonSize } from "./types";

const { Neutrals, Primary } = COLORS;

export const StyledButton = styled.button<{
  $type: buttonType;
  $size: buttonSize;
}>`
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  gap: 4px;

  font-size: ${({ $size }) => ($size === "small" ? "14px" : "16px")};
  line-height: ${({ $size }) => ($size === "small" ? "14px" : "20px")};

  color: ${({ $type }) => {
    switch ($type) {
      case "primary":
        return Neutrals.White;
      case "secondary":
        return Primary.P300;
      case "secondary-gray":
        return Neutrals.N400;
      case "tertiary":
        return Primary.P300;
      case "tertiary-gray":
        return Neutrals.N400;
      default:
        return "none";
    }
  }};

  background-color: ${({ $type }) =>
    $type === "primary" ? Primary.P300 : Neutrals.White};

  border-radius: 4px;
  border: ${({ $type }) => {
    switch ($type) {
      case "secondary":
        return `1px solid ${Primary.P300}`;
      case "secondary-gray":
        return `1px solid ${Neutrals.N400}`;
      default:
        return "none";
    }
  }};

  padding: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "9px 16px";
      case "medium":
        return "10px 16px";
      case "large":
        return "12px 16px";
      default:
        return "none";
    }
  }};
  cursor: pointer;

  &:hover {
    background-color: ${({ $type }) => {
      switch ($type) {
        case "primary":
          return Primary.P400;
        case "secondary":
          return Primary.P50;
        case "secondary-gray":
          return Neutrals.N100;
        case "tertiary":
          return Primary.P50;
        case "tertiary-gray":
          return Neutrals.N100;
        default:
          return Neutrals.White;
      }
    }};
  }

  &:active {
    background-color: ${({ $type }) => {
      switch ($type) {
        case "primary":
          return Primary.P500;
        case "secondary":
          return Primary.P100;
        case "secondary-gray":
          return Neutrals.N100;
        case "tertiary":
          return Primary.P100;
        case "tertiary-gray":
          return Neutrals.N100;
        default:
          return Primary.P100;
      }
    }};

    box-shadow: 4px 4px 13px 0px #0000000d inset;
  }

  &:disabled {
    color: ${({ $type }) => ($type === "primary" ? "#A8AEB5" : "#C7CDD3")};
    background-color: ${({ $type }) =>
      $type === "primary" ? "#E3E6E9" : "none"};
    border: ${({ $type }) => {
      switch ($type) {
        case "secondary":
          return "1px solid #C7CDD3";
        case "secondary-gray":
          return "1px solid #C7CDD3";
        default:
          return "none";
      }
    }};
    cursor: not-allowed;
  }
`;
