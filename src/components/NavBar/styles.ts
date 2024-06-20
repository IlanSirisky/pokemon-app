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

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    gap: ${cssSpacings.s16};
  }
`;

export const StyledMenu = styled(flexRow)`
  align-items: center;
  gap: 40px;

  @media (max-width: 570px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: ${cssSpacings.s16};
  }
`;
export const ButtonsContainer = styled(flexRow)`
  gap: ${cssSpacings.s16};
  display: flex;
  align-items: center;
`;

export const ActiveButtonStyle = {
  backgroundColor: `${Primary.P50}`,
  fontWeight: `${cssFontWeights.bold}`,
};

export const EndContainer = styled(flexRow)`
  gap: ${cssSpacings.s24};

  @media (max-width: 760px) {
    width: 100%;
    justify-content: center;
  }

`;

export const ButtonChildrenContainer = styled(flexRow)`
  align-items: "center";
  gap: ${cssSpacings.s6};
`;
