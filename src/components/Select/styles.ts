import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { COLORS } from "../../styles/colors";
import { cssFontSizes, cssSpacings } from "../../styles/stylingValues";

const { Neutrals } = COLORS;

export const StyledFormControl = styled(FormControl)`
  gap: ${cssSpacings.s16} !important;
  position: relative;
  width: auto !important;
  max-width: 220px !important;
`;

export const StyledSelect = styled(Select)`
  height: ${cssSpacings.s38} !important;
  border-radius: ${cssSpacings.s8} !important;
  width: auto !important;

  & .MuiSelect-select {
    padding: ${cssSpacings.s4} ${cssSpacings.s8} !important;
    padding-right: ${cssSpacings.s40} !important;
  }
  & .MuiOutlinedInput-root {
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
  top: -8px !important;

  &.Mui-focused {
    color: ${Neutrals.N300} !important;
  }
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  font-family: "Mulish", sans-serif !important;
  font-size: ${cssFontSizes.f14} !important;
  line-height: 22px !important;
  padding: ${cssSpacings.s12} ${cssSpacings.s8} !important;

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${Neutrals.N300} !important;
  }
`;

export const StyledClearIconButton = styled(IconButton)`
  position: absolute !important;
  right: ${cssSpacings.s20} !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
`;

export const ArrowIconWrapper = styled("div")<{ $open: boolean }>`
  display: flex;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s;
`;
