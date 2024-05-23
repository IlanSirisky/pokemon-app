import { useState } from "react";
import { Box, Autocomplete as MuiAutocomplete } from "@mui/material";
import Avatar from "../Avatar/Avatar";
import { AvatarLabelContainer, StyledTextField } from "./styles";
import { optionsType } from "../../types/dropdownOptionsType";
import { cssFontSizes } from "../../styles/stylingValues";

interface AutocompleteProps {
  options: optionsType[];
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
      sx={{ ...sx }}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.label}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue) => {
        setInputValue(newInputValue);
        console.log(newInputValue);
        
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: `'Mulish', 'sans-serif'`,
            fontSize: `${cssFontSizes.f14}`,
            lineHeight: "22px"
          }}>
          <AvatarLabelContainer>
            {option.avatar && (
              <Avatar image={option.avatar} alt={option.value} />
            )}
            {option.label}
          </AvatarLabelContainer>
          {option.endText ? (
            <Box
              sx={{ marginLeft: "auto", fontFamily: `'Mulish', 'sans-serif'` }}>
              {option.endText}
            </Box>
          ) : null}
        </Box>
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
