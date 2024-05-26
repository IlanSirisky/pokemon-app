import styled from "styled-components";
import { COLORS } from "../../../styles/colors";
import { flexColumn } from "../../../styles/globalStyles";
import { cssSpacings } from "../../../styles/stylingValues";

const { Neutrals } = COLORS;

export const StyledBasicCard = styled(flexColumn)`
  display: inline-flex;
  background-color: ${Neutrals.White};
  border-radius: ${cssSpacings.s8};
  padding: ${cssSpacings.s24};
  gap: ${cssSpacings.s10};
`;

