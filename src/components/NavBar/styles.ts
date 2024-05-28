import styled from "styled-components";
import { flexRow } from "../../styles/globalStyles";
import { cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

const { Neutrals } = COLORS;

export const StyledNavBar = styled(flexRow)`
  justify-content: space-between;
  align-items: center;
  padding: ${cssSpacings.s12} 40px;
  background-color: ${Neutrals.White};
`;

export const StyledMenu = styled(flexRow)`
  align-items: center;
  gap: 40px;
`;
export const ButtonsContainer = styled(flexRow)`
  gap: ${cssSpacings.s16};
`;


