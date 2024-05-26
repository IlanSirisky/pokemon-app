import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { flexRow } from "../../styles/globalStyles";
import { SubheadingMedium } from "../../styles/typography";
import { cssSpacings } from "../../styles/stylingValues";

const { Neutrals } = COLORS;

export const ImagePowerContainer = styled.div`
  position: relative;
`;

export const PowerContainer = styled(flexRow)`
  position: absolute;
  top: ${cssSpacings.s6};
  right: ${cssSpacings.s6};
  align-items: center;
  gap: ${cssSpacings.s4};
`;

export const StyledIdText = styled(SubheadingMedium)`
  color: ${Neutrals.N200};
`;

export const StyledPokemonImage = styled.img`
  width: 274px;
  height: 188px;
  border-radius: 2px;
  position: relative;
`;
