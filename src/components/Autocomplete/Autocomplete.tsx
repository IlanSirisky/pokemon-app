import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { StyledTextField } from "./styles";
import { AutocompleteOptionsType } from "../../types/optionsTypes";
import AutocompleteListItem from "./AutocompleteListItem";
import { SxProps, Theme } from "@mui/material/styles";

interface AutocompleteProps {
  options: AutocompleteOptionsType[];
  inputValue: string;
  onInputChange: (event: React.SyntheticEvent, value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  value?: AutocompleteOptionsType;
  sx?: SxProps<Theme>;
  arrowIcon?: string;
}

const Autocomplete = ({
  options,
  inputValue,
  onInputChange,
  disabled = false,
  placeholder = "Search",
  value,
  sx,
  arrowIcon,
}: AutocompleteProps) => {
  const isOptionEqualToValue = (
    option: AutocompleteOptionsType,
    value: AutocompleteOptionsType
  ) => {
    return option.value === value.value;
  };

  const combinedSx : SxProps<Theme> = {
    ...sx,
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
  };

  return (
    <MuiAutocomplete
      sx={combinedSx}
      disabled={disabled}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.label}
      inputValue={inputValue}
      value={value}
      onInputChange={onInputChange}
      isOptionEqualToValue={isOptionEqualToValue}
      popupIcon={arrowIcon && <img src={arrowIcon} alt="arrow-icon" />}
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
