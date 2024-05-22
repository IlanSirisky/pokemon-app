import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import {
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
  StyledOutlinedInput,
} from "./styles";

interface SortBySelectProps {
  options: { value: string; label: string }[];
}

const SortBySelect = ({ options }: SortBySelectProps) => {
  const [sortBy, setSortBy] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSortBy(event.target.value as string);
  };

  return (
    <StyledFormControl variant="outlined">
      {!sortBy && (
        <StyledInputLabel shrink={!!sortBy} htmlFor="sort-by-select">
          Sort By
        </StyledInputLabel>
      )}
      <StyledSelect
        value={sortBy}
        onChange={handleChange}
        label={!sortBy ? "Sort By" : ""}
        input={
          <StyledOutlinedInput
            label={!sortBy ? "Sort By" : ""}
            id="sort-by-select"
          />
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

export default SortBySelect;
