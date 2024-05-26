import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import {
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
  StyledOutlinedInput,
} from "./styles";
import ArrowIcon from "../../assets/icons/ArrowIcon.svg";
import ActiveArrowIcon from "../../assets/icons/ActiveArrowIcon.svg";
import { selectOptionsType } from "../../types/optionsTypes";

interface SelectProps {
  options: selectOptionsType[];
  placeholder?: string;
  sx?: object;
}

const Select = ({ options, placeholder = "Select", sx = {} }: SelectProps) => {
  const [selectedOption, setselectedOption] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setselectedOption(event.target.value as string);
  };

  // Manage focus state to render the correct icon
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <StyledFormControl variant="outlined" sx={sx}>
      {!selectedOption && (
        <StyledInputLabel shrink={false}>{placeholder}</StyledInputLabel>
      )}
      <StyledSelect
        value={selectedOption}
        onChange={handleChange}
        label={!selectedOption ? placeholder : ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        input={
          <StyledOutlinedInput label={!selectedOption ? placeholder : ""} />
        }
        IconComponent={() => (
          <img src={isFocused ? ActiveArrowIcon : ArrowIcon} alt="Arrow icon" />
        )}
        displayEmpty
        notched={false}>
        {options.map((option) => (
          <StyledMenuItem
            key={option.value}
            value={option.value}
            onClick={handleBlur}>
            {option.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default Select;
