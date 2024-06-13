import React, { useState } from "react";
import {
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
  StyledOutlinedInput,
  StyledClearIconButton,
  ArrowIconWrapper,
} from "./styles";
import { SelectOptionsType } from "../../types/optionsTypes";
import { SelectChangeEvent } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface SelectProps {
  options: SelectOptionsType[];
  selectedOption: string;
  setSelectedOption: (event: SelectChangeEvent<unknown>) => void;
  placeholder?: string;
  sx?: SxProps<Theme>;
  arrowIcon?: string;
}

const Select = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder = "Select",
  sx = {},
  arrowIcon,
}: SelectProps) => {
  const [open, setOpen] = useState(false);

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSelectedOption({ target: { value: "" } } as SelectChangeEvent<unknown>);
  };

  return (
    <StyledFormControl
      variant="outlined"
      sx={{
        minWidth: "180px",
        width: selectedOption
          ? `calc(${selectedOption.length}ch + 100px)`
          : "auto",
        ...sx,
      }}>
      {!selectedOption && (
        <StyledInputLabel shrink={false}>{placeholder}</StyledInputLabel>
      )}
      <StyledSelect
        value={selectedOption}
        onChange={setSelectedOption}
        label={!selectedOption ? placeholder : ""}
        input={
          <StyledOutlinedInput label={!selectedOption ? placeholder : ""} />
        }
        displayEmpty
        notched={false}
        IconComponent={() => (
          <ArrowIconWrapper $open={open}>
            {arrowIcon ? <img src={arrowIcon} /> : <ArrowDropDownIcon />}
          </ArrowIconWrapper>
        )}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}>
        {options.map((option) => (
          <StyledMenuItem key={option.value} value={option.value}>
            {option.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
      {selectedOption && (
        <StyledClearIconButton onClick={handleClear} disableRipple>
          <ClearIcon />
        </StyledClearIconButton>
      )}
    </StyledFormControl>
  );
};

export default Select;
