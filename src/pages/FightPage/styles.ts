import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles/globalStyles";
import { COLORS, MISC_COLORS } from "../../styles/colors";
import { StyledParagraph } from "../../styles/typography";
import { cssFontWeights, cssSpacings } from "../../styles/stylingValues";
import yellowBg from "../../assets/yellow-bg.jpeg";
import { CSSProperties } from "react";

const { Neutrals } = COLORS;

export const StyledFightPageWrapper = styled(flexColumn)`
  background-color: ${Neutrals.N100};
  padding: ${cssSpacings.s20} ${cssSpacings.s40};
`;

export const StyledFightHeader = styled(flexColumn)`
  align-items: center;
  justify-content: center;
  gap: ${cssSpacings.s8};
`;

export const StyledFightTitle = styled(StyledParagraph)`
  font-size: 40px;
  font-weight: ${cssFontWeights.bold};
  line-height: 43px;
  color: ${Neutrals.N400};
`;

export const PokemonDropdownStyle = {
  padding: `0 0 ${cssSpacings.s14} 0`,
  gap: `${cssSpacings.s16}`,
};

export const StyledFightArea = styled(flexRow)`
  background-image: url(${yellowBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 65vh;
  justify-content: space-evenly;
  align-items: center;
  border-radius: ${cssSpacings.s8};
`;

export const FightButtonStyle = {
  fontSize: "48px",
  lineHeight: "52px",
  fontWeight: `${cssFontWeights.bold}`,
  borderRadius: "50%",
  gap: `${cssSpacings.s10}`,
  padding: `${cssSpacings.s90} ${cssSpacings.s60}`,
};

export const FightActionWrapper = styled(flexColumn)`
  gap: ${cssSpacings.s32};
`;

export const ActiveButtonStyle = {
  fontSize: "40px",
  lineHeight: "52px",
  fontWeight: `${cssFontWeights.medium}`,
  padding: `${cssSpacings.s30} ${cssSpacings.s58}`,
  borderRadius: `${cssSpacings.s200}`,
  boxShadow: `0px ${cssSpacings.s9} ${cssSpacings.s18} 0px ${MISC_COLORS.boxShadow}`,
};

export const MessageDivStyle : CSSProperties = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0,0,0,0.8)",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  zIndex: 10,
  textAlign: "center",
  fontFamily: "Mulish",
  fontSize: "24px",
};