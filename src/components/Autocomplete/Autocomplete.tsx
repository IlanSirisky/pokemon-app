import { useState } from "react";
import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { StyledTextField } from "./styles";
import { AutocompleteOptionsType } from "../../types/optionsTypes";
import AutocompleteListItem from "./AutocompleteListItem";

interface AutocompleteProps {
  options: AutocompleteOptionsType[];
  placeholder?: string;
  sx?: object;
}

const Autocomplete = ({
  options,
  placeholder = "Search",
  sx,
}: AutocompleteProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <MuiAutocomplete
      sx={sx}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.label}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderOption={(props, option) => (
        <AutocompleteListItem
          option={option}
          props={props}
          key={option.value}
        />
      )}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          label={inputValue ? "" : placeholder}
          InputLabelProps={{
            shrink: false,
          }}
          InputProps={{
            ...params.InputProps,
            notched: false,
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
