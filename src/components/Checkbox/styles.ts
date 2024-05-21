import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { cssSpacings } from "../../styles/stylingValues";

const { Primary } = COLORS;

interface StyledCheckboxProps {
  disabled?: boolean;
}

export const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})<StyledCheckboxProps>`
  width: 16.67px;
  height: 16.67px;
  padding: ${cssSpacings.s4};
  border: 1px solid
    ${({ disabled }) => (disabled ? Primary.P100 : Primary.P500)};
  border-radius: ${cssSpacings.s4};
  margin-right: ${cssSpacings.s4};
  appearance: none;
  background-color: transparent;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  position: relative;
  transition: background-color 300ms ease-out, border-color 300ms ease-out;

  &:hover:not(:checked):not(:disabled):before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    background-color: ${Primary.P50};
    border-radius: 13px;
    z-index: -1;
    transition: background-color 300ms ease-out;
  }

  &:checked {
    background-color: ${Primary.P300};
    border: 0;

    &::after {
      content: "";
      position: absolute;
      top: 40%;
      left: 50%;
      width: 4px;
      height: 9px;
      border: solid white;
      border-width: 0 1px 1px 0;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;
