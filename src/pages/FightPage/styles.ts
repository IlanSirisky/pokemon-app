import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles/globalStyles";
import { COLORS } from "../../styles/colors";
import { StyledParagraph } from "../../styles/typography";
import { cssFontWeights, cssSpacings } from "../../styles/stylingValues";
import yellowBg from "../../assets/yellow-bg.jpeg";

const { Neutrals, Primary } = COLORS;

export const StyledFightPageWrapper = styled(flexColumn)`
  background-color: ${Neutrals.N100};
  padding: 40px 40px 80px 40px;
`;

export const StyledFightHeader = styled(flexColumn)`
  align-items: center;
  justify-content: center;
`;

export const StyledFightTitle = styled(StyledParagraph)`
  font-size: 40px;
  font-weight: ${cssFontWeights.bold};
  line-height: 43px;
  color: ${Neutrals.N400};
`;

export const PokemonDropdownStyle = {
  padding: `${cssSpacings.s8} ${cssSpacings.s12}`,
  gap: `${cssSpacings.s16}`,
};

export const StyledFightArea = styled(flexRow)`
  background-image: url(${yellowBg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  gap: 80px;
  border-radius: ${cssSpacings.s8};
`;

export const FightButtonStyle = {
  fontSize: "48px",
  lineHeight: "52px",
  fontWeight: `${cssFontWeights.bold}`,
  borderRadius: "50%",
  gap: `${cssSpacings.s10}`,
  padding: "90px 60px",
};

export const FightActionWrapper = styled(flexColumn)`
  gap: 32px;
`;

export const ActiveButtonStyle = {
  fontSize: "40px",
  lineHeight: "52px",
  fontWeight: `${cssFontWeights.medium}`,
  padding: "30px 60px",
  borderRadius: "100px",
  boxShadow: "0px 9px 17.6px 0px #00000040",
};

export const DisabledButtonStyle = {
  ...ActiveButtonStyle,
  backgroundColor: `${Primary.P50}`,
};
