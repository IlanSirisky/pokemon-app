import { CSSProperties } from "react";
import { cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

export const loginButtonStyles: CSSProperties = {
  width: `${cssSpacings.s44}`,
  height: `${cssSpacings.s44}`,
  border: `1px solid ${COLORS.Primary.P300}`,
  borderRadius: "50%",
  minWidth: `${cssSpacings.s44}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  color: `${COLORS.Primary.P300}`,
};
