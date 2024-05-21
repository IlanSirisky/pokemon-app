import styled from "styled-components";
import { flexRow } from "../../styles/globalStyles";
import { COLORS } from "../../styles/colors";
import { cssSpacings } from "../../styles/stylingValues";

const { Neutrals } = COLORS;

export const StyledDropdownItem = styled(flexRow)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${cssSpacings.s8};
  gap: ${cssSpacings.s8};
  cursor: pointer;
  background-color: ${Neutrals.White};
  width: 206px;

  &:hover {
    background-color: ${Neutrals.N100};
  }
`;

export const TextContainer = styled(flexRow)`
  align-self: center;
  gap: ${cssSpacings.s4};
`;
