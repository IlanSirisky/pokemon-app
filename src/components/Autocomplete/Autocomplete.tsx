import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { StyledTextField } from "./styles";
import { AutocompleteOptionsType } from "../../types/optionsTypes";
import AutocompleteListItem from "./AutocompleteListItem";

interface AutocompleteProps {
  options: AutocompleteOptionsType[];
  inputValue: string;
  onInputChange: (event: React.SyntheticEvent, value: string) => void;
  placeholder?: string;
  sx?: object;
}

const Autocomplete = ({
  options,
  placeholder = "Search",
  sx,
  inputValue,
  onInputChange,
}: AutocompleteProps) => {
  const isOptionEqualToValue = (
    option: AutocompleteOptionsType,
    value: AutocompleteOptionsType
  ) => {
    return option.value === value.value;
  };

  return (
    <MuiAutocomplete
      sx={sx}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.label}
      inputValue={inputValue}
      onInputChange={onInputChange}
      isOptionEqualToValue={isOptionEqualToValue}
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
