import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { flexColumn, flexRow } from "../../styles/globalStyles";
import { SubheadingMedium } from "../../styles/typography";
import { cssSpacings } from "../../styles/stylingValues";

const { Neutrals } = COLORS;

export const StyledBasicCard = styled(flexColumn)`
  display: inline-flex;
  background-color: ${Neutrals.White};
  border-radius: ${cssSpacings.s8};
  padding: ${cssSpacings.s24};
  gap: ${cssSpacings.s10};
`;

export const StyledFightCard = styled(StyledBasicCard)`
  align-items: center;
`;

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

export const HPbar = styled.div`
  border: 10px solid #87c877;
  border-radius: 10px;
  width: 255px;
`;

export const HPContainer = styled(flexRow)`
  gap: ${cssSpacings.s4};
  align-items: center;
`;
