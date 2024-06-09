import styled from "styled-components";
import { flexRow } from "../../styles/globalStyles";
import { cssFontWeights, cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

const { Neutrals, Primary } = COLORS;

export const StyledNavBar = styled(flexRow)<{ $isVisible: boolean }>`
  justify-content: space-between;
  align-items: center;
  padding: ${cssSpacings.s12} 40px;
  background-color: ${Neutrals.White};
  position: sticky;
  top: 0;
  z-index: 10; /* Adjust as needed to ensure it appears above other content */
  box-shadow: 0 1px 1px ${COLORS.Neutrals.N100}; /* Optional: adds a subtle shadow */
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.3s ease-in-out;
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
