import styled from "styled-components";
import { StyledBasicCard } from "../../cardView/PokemonBasicCard/styles";
import { flexRow } from "../../../styles/globalStyles";
import { cssSpacings } from "../../../styles/stylingValues";

export const StyledFightCard = styled(StyledBasicCard)`
  align-items: center;
  height: 350px;
  gap: ${cssSpacings.s8};
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
