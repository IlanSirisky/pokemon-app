import styled from "styled-components";
import { cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

const { Neutrals } = COLORS;

export const FilterContainer = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: ${cssSpacings.s16};
  padding: ${cssSpacings.s8} ${cssSpacings.s12};
  border: 1px solid;
  border-radius: ${cssSpacings.s8};
  cursor: pointer;
  transition: background-color 300ms ease-out, border-color 300ms ease-out;

  background-color: ${({ $isActive }) =>
    $isActive ? Neutrals.N100 : "transparent"};
  color: ${({ $isActive }) => ($isActive ? Neutrals.N500 : Neutrals.N200)};
  border-color: ${({ $isActive }) =>
    $isActive ? Neutrals.N500 : Neutrals.N200};

  &:hover:not(:disabled) {
    background-color: ${Neutrals.N100};
    border-color: ${({ $isActive }) =>
      $isActive ? Neutrals.N500 : Neutrals.N300};
    color: ${({ $isActive }) => ($isActive ? Neutrals.N500 : Neutrals.N300)};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${Neutrals.White};
    border-color: #c7cdd3;
  }
`;
