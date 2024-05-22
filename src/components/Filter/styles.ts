import styled from "styled-components";
import Button from "@mui/material/Button";
import { COLORS } from "../../styles/colors";
import { cssSpacings } from "../../styles/stylingValues";
import { BodyRegular } from "../../styles/typography";

const { Neutrals } = COLORS;

interface StyledButtonProps {
  $isActive: boolean;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  ${BodyRegular};
  text-transform: none !important;
  gap: ${cssSpacings.s8} !important;
  padding: ${cssSpacings.s8} ${cssSpacings.s12} !important;
  border: 1px solid;
  background-color: ${({ $isActive }) =>
    $isActive ? Neutrals.N100 : "transparent"} !important;
  color: ${({ $isActive }) =>
    $isActive ? Neutrals.N500 : Neutrals.N300} !important;
  border: 1px solid
    ${({ $isActive }) => ($isActive ? Neutrals.N500 : Neutrals.N200)} !important;
  box-shadow: none !important;

  &:hover {
    background-color: ${Neutrals.N100};
    border-color: ${({ $isActive }) =>
      $isActive ? Neutrals.N500 : Neutrals.N300} !important;
    color: ${({ $isActive }) =>
      $isActive ? Neutrals.N500 : Neutrals.N300} !important;
  }
  &:disabled {
    background-color: ${Neutrals.White} !important;
    color: #c7cdd3 !important;
    border-color: #c7cdd3 !important;
  }
`;
