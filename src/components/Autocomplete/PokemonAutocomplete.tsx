import {
  Box,
  Autocomplete,
} from "@mui/material";
import Avatar from "../Avatar/Avatar";
import { AvatarLabelContainer, StyledTextField } from "./styles";

export interface optionsType {
  value: string;
  label: string;
  avatar?: string;
  endText?: string;
}

interface AutocompleteProps {
  options: optionsType[];
  placeholder?: string;
  sx?: object;
}

const PokemonAutocomplete = ({
  options,
  placeholder = "Search Pokemon",
  sx,
}: AutocompleteProps) => {
  return (
    <Autocomplete
      sx={{ ...sx }}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: `'Mulish', 'sans-serif'`,
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
          label={placeholder}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

export default PokemonAutocomplete;
