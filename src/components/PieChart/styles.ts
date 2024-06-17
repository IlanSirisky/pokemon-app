import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { cssSpacings } from "../../styles/stylingValues";
import { CSSProperties } from "react";

export const StyledPieContainer = styled.div`
  background-color: ${COLORS.Neutrals.White};
  width: 30%;
  height: 600px;
  padding: ${cssSpacings.s24};
  gap: ${cssSpacings.s24};
`;

export const SumStyle : CSSProperties = {
  position: `absolute`,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
