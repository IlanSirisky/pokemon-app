import styled from "styled-components";
import { TextField } from "@mui/material";
import { flexRow } from "../../styles/globalStyles";
import { cssSpacings } from "../../styles/stylingValues";

export const AvatarLabelContainer = styled(flexRow)`
  align-items: center ;
  gap: ${cssSpacings.s4};
`;

export const StyledTextField = styled(TextField)`
`;