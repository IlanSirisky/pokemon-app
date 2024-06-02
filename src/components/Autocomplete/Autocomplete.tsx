import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { StyledTextField } from "./styles";
import { AutocompleteOptionsType } from "../../types/optionsTypes";
import AutocompleteListItem from "./AutocompleteListItem";
import { SxProps, Theme } from "@mui/material/styles";

interface AutocompleteProps {
  options: AutocompleteOptionsType[];
  inputValue: string;
  onInputChange: (event: React.SyntheticEvent, value: string) => void;
  placeholder?: string;
  value?: AutocompleteOptionsType;
  sx?: SxProps<Theme>;
}

const Autocomplete = ({
  options,
  inputValue,
  onInputChange,
  placeholder = "Search",
  value,
  sx,
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
      value={value}
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
