import styled from "styled-components";
import { cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

const { Neutrals } = COLORS;

export const FilterContainer = styled.button<{$isActive: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: ${cssSpacings.s16};
  padding: ${cssSpacings.s8} ${cssSpacings.s12};
  border: 1px solid ${Neutrals.N200};
  border-radius: ${cssSpacings.s8};
  background-color: transparent;
  cursor: pointer;
  transition: background-color 300ms ease-out, border-color 300ms ease-out;
  color: ${Neutrals.N200};

  &:hover {
    background-color: ${Neutrals.N100};
    border-color: ${Neutrals.N300};
    color: ${Neutrals.N300};
  }

  &:focus {
    background-color: ${Neutrals.N100};
    border-color: ${Neutrals.N500};
    color: ${Neutrals.N500};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${Neutrals.White};
    border-color: #c7cdd3;
  }
`;