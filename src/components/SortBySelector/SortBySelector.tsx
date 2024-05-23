import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import {
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
  StyledOutlinedInput,
} from "./styles";
import SortIcon from "../../assets/icons/SortIcon.svg";
import ActiveSortIcon from "../../assets/icons/ActiveSortIcon.svg";

interface SortBySelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  sx?: object;
}

const SortBySelect = ({
  options,
  placeholder = "Sort by",
  sx = {},
}: SortBySelectProps) => {
  const [sortBy, setSortBy] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSortBy(event.target.value as string);
  };

  // Manage focus state to render the correct icon
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <StyledFormControl variant="outlined" sx={sx}>
      {!sortBy && (
        <StyledInputLabel shrink={!!sortBy} htmlFor="sort-by-select">
          {placeholder}
        </StyledInputLabel>
      )}
      <StyledSelect
        value={sortBy}
        onChange={handleChange}
        label={!sortBy ? placeholder : ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        input={<StyledOutlinedInput label={!sortBy ? placeholder : ""} />}
        IconComponent={() => (
          <img
            src={isFocused ? ActiveSortIcon : SortIcon}
            alt="Sort arrow icon"
          />
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

export default SortBySelect;
