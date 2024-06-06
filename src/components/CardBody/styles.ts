import styled from "styled-components";
import { COLORS, MISC_COLORS } from "../../styles/colors";
import { flexRow } from "../../styles/globalStyles";
import { SubheadingMedium } from "../../styles/typography";
import { cssSpacings } from "../../styles/stylingValues";

const { Neutrals } = COLORS;

export const ImagePowerContainer = styled.div`
  position: relative;
  background-color: ${MISC_COLORS.cardImageBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 188px;
`;

export const PowerContainer = styled(flexRow)`
  position: absolute;
  top: ${cssSpacings.s8};
  right: ${cssSpacings.s10};
  align-items: center;
  gap: ${cssSpacings.s4};
`;

export const StyledIdText = styled(SubheadingMedium)`
  color: ${Neutrals.N200};
`;

export const StyledPokemonImage = styled.img`
  width: 180px;
  height: 160px;
  border-radius: 2px;
  position: relative;
`;

export const StyledHeaderWrapper = styled(flexRow)`
  gap: ${cssSpacings.s8};
  align-items: center;
`;
