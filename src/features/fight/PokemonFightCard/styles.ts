import styled from "styled-components";
import { StyledBasicCard } from "../../cardView/PokemonBasicCard/styles";
import { flexColumn } from "../../../styles/globalStyles";
import { cssSpacings } from "../../../styles/stylingValues";
import { createTheme } from "@mui/material/styles";
import { MISC_COLORS } from "../../../styles/colors";

export const StyledFightCard = styled(StyledBasicCard)`
  align-items: center;
  height: 350px;
  gap: ${cssSpacings.s8};
`;

export const HPContainer = styled(flexColumn)`
  display: flex;
  gap: ${cssSpacings.s4};
  height: ${cssSpacings.s40};
  width: 70%;
  align-items: center;
`;

export const healthBarStyles = {
  background: `${MISC_COLORS.HealthBar.backgroundGreen}`,
  height: `${cssSpacings.s10}`,
  borderRadius: `${cssSpacings.s5}`,
  width: "100%",
};

export const healthBarTheme = createTheme({
  palette: {
    success: {
      main: `${MISC_COLORS.HealthBar.green}`,
    },
    secondary: {
      main: `${MISC_COLORS.HealthBar.red}`,
    },
    warning: {
      main: `${MISC_COLORS.HealthBar.orange}`,
    },
  },
});
