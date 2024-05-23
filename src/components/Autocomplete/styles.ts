import styled from "styled-components";
import { TextField } from "@mui/material";
import { flexRow } from "../../styles/globalStyles";
import { cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

const { Neutrals } = COLORS;

export const AvatarLabelContainer = styled(flexRow)`
  align-items: center;
  gap: ${cssSpacings.s4};
`;

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: `${Neutrals.N200}`,
      color: `${Neutrals.N200}`,
      borderRadius: `${cssSpacings.s8}`,
    },
    "&:hover fieldset": {
      borderColor: `${Neutrals.N300}`,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${Neutrals.N300}`,
      color: `${Neutrals.N300}`,
    },
    padding: `${cssSpacings.s8} ${cssSpacings.s12} !important`,
  },
  "& .MuiInputLabel-root": {
    color: `${Neutrals.N200}`,
    fontFamily: `'Mulish', 'sans-serif'`,
    lineHeight: "22px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: `${Neutrals.N300}`,
  },
  minWidth: `200px !important`,
  width: `auto !important`,
}));
