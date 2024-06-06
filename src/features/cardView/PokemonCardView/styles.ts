import styled from "styled-components";
import { cssSpacings } from "../../../styles/stylingValues";
import { COLORS } from "../../../styles/colors";

export const CardViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${cssSpacings.s24};
`;

export const CardWrapper = styled.div`
  border-radius: ${cssSpacings.s8};
  &:hover {
    box-shadow: 0px 0px 0px 1px ${COLORS.Neutrals.N300};
  }
`;
