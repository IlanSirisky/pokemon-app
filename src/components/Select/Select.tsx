import {
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
  StyledOutlinedInput,
} from "./styles";
import { SelectOptionsType } from "../../types/optionsTypes";
import { SelectChangeEvent } from "@mui/material";

interface SelectProps {
  options: SelectOptionsType[];
  selectedOption: string;
  setSelectedOption: (event: SelectChangeEvent<unknown>) => void;
  placeholder?: string;
  sx?: object;
}

const Select = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder = "Select",
  sx = {},
}: SelectProps) => {
  return (
    <StyledFormControl variant="outlined" sx={sx}>
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
        notched={false}>
        {options.map((option) => (
          <StyledMenuItem key={option.value} value={option.value}>
            {option.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default Select;
