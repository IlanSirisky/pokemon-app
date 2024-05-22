import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { cssFontSizes, cssSpacings } from "../../styles/stylingValues";

const { Neutrals } = COLORS;

export const StyledFormControl = styled(FormControl)`
  min-width: 100px !important;
  gap: ${cssSpacings.s16} !important;
`;

export const StyledSelect = styled(Select)`
  height: 38px !important;

  &.MuiSelect-select {
    padding: ${cssSpacings.s4} ${cssSpacings.s8} !important;
  }
  &.MuiOutlinedInput-root {
    border-radius: 8px;
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${Neutrals.N300} !important;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: "Mulish", sans-serif !important;
  padding: ${cssSpacings.s8} ${cssSpacings.s8} ${cssSpacings.s8}
    ${cssSpacings.s8} !important;
  color: ${COLORS.Neutrals.N500} !important;
  gap: ${cssSpacings.s8} !important;

  &:hover {
    background-color: ${COLORS.Neutrals.N100} !important;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  font-family: "Mulish", sans-serif !important;
  font-size: ${cssFontSizes.f14} !important;
  line-height: 22px !important;
  top: -9px !important;
  &.Mui-focused {
    color: ${Neutrals.N300} !important;
  }
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  font-family: "Mulish", sans-serif !important;
  font-size: ${cssFontSizes.f14} !important;
  line-height: 22px !important;
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${Neutrals.N300} !important;
  }
`;
