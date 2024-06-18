import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { cssSpacings } from "../../styles/stylingValues";
import { CSSProperties } from "react";
import { flexColumn, flexRow } from "../../styles/globalStyles";

export const StyledPieContainer = styled.div`
  background-color: ${COLORS.Neutrals.White};
  width: 30%;
  gap: ${cssSpacings.s24};
  border-radius: ${cssSpacings.s4};
  height: 575px;
`;

export const PieWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SumStyle: CSSProperties = {
  position: `absolute`,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const LegendColorIndicator = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  width: ${cssSpacings.s5};
  height: ${cssSpacings.s5};
  margin-right: ${cssSpacings.s12};
  border-radius: 50%;
`;

export const LegendItemContainer = styled(flexRow)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const LegendItem = styled(flexRow)`
  display: flex;
  align-items: center;
`;

export const StyledLegendContainer = styled(flexColumn)`
  gap: ${cssSpacings.s4};
  max-height: 200px;
  overflow-y: auto;
`;

export const LegendPercentageStyle: CSSProperties = {
  color: `${COLORS.Neutrals.N300}`,
};
