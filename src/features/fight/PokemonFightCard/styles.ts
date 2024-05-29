import styled from "styled-components";
import { StyledBasicCard } from "../../cardView/PokemonBasicCard/styles";
import { flexColumn } from "../../../styles/globalStyles";
import { cssSpacings } from "../../../styles/stylingValues";
import { createTheme } from "@mui/material/styles";

export const StyledFightCard = styled(StyledBasicCard)`
  align-items: center;
  height: 350px;
  gap: ${cssSpacings.s8};
`;

export const HPContainer = styled(flexColumn)`
  display: flex;
  gap: ${cssSpacings.s4};
  height: 40px;
  width: 70%;
  align-items: center;
`;

export const healthBarStyles = {
  background: "#c4d6c0",
  height: "10px",
  borderRadius: "5px",
  width: "100%",
};

export const healthBarTheme = createTheme({
  palette: {
    success: {
      main: "#87c877",
    },
    secondary: {
      main: "#dc004e",
    },
    warning: {
      main: "#ff9800",
    },
  },
});
