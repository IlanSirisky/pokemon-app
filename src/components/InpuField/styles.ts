import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import TextField from "@mui/material/TextField";
import { cssFontSizes, cssSpacings } from "../../styles/stylingValues";
import { flexRow } from "../../styles/globalStyles";

const { Neutrals } = COLORS;

export const InputFieldWrapper = styled(flexRow)<{ $disabled?: boolean }>`
  width: 293px;
  border: ${({ $disabled }) =>
    $disabled ? "none" : `1px solid ${Neutrals.N200}`};
  border-radius: ${cssSpacings.s8};

  &:hover {
    border-color: ${({ $disabled }) => ($disabled ? "none" : Neutrals.N300)};
  }

  &:focus-within {
    border-color: ${Neutrals.N500};
  }
`;

export const StyledInputField = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
    }

    & .MuiInputBase-input {
      width: 210px;
      font-family: "Mulish", sans-serif;
      font-weight: 400;
      font-size: ${cssFontSizes.f14};
      line-height: 22px;
      color: ${Neutrals.N500};
      padding: ${cssSpacings.s9} 0;

      &::placeholder {
        color: ${Neutrals.N200};
      }
      &:hover::placeholder {
        color: ${Neutrals.N300};
      }
      &:focus::placeholder {
        color: transparent;
      }
    }

    &.Mui-disabled .MuiInputBase-input {
      &::placeholder {
        color: ${Neutrals.N100};
      }
    }
  }
`;

export const StartIconStyle = {
  backgroundColor: "transparent",
  height: "38px",
};

export const EndIconStyle = { marginLeft: "auto", height: "38px" };
