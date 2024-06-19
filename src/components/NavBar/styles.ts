import styled from "styled-components";
import { flexRow } from "../../styles/globalStyles";
import { cssFontWeights, cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

const { Neutrals, Primary } = COLORS;

export const StyledNavBar = styled(flexRow)`
  justify-content: space-between;
  align-items: center;
  padding: ${cssSpacings.s12} ${cssSpacings.s40};
  background-color: ${Neutrals.White};
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 1px 1px ${COLORS.Neutrals.N100};
`;

export const StyledMenu = styled(flexRow)`
  align-items: center;
  gap: 40px;
`;
export const ButtonsContainer = styled(flexRow)`
  gap: ${cssSpacings.s16};
`;

export const ActiveButtonStyle = {
  backgroundColor: `${Primary.P50}`,
  fontWeight: `${cssFontWeights.bold}`,
};

export const EndContainer = styled(flexRow)`
  gap: ${cssSpacings.s24};
`;
