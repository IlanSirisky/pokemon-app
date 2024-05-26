import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { InputFieldWrapper, StyledInputField } from "./styles";

interface CustomSearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClear: () => void;
  placeholder?: string;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  sx?: object;
}

const InputField = ({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder = "Search",
  disabled = false,
  startIcon,
  endIcon,
  sx = {},
}: CustomSearchInputProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <InputFieldWrapper $disabled={disabled}>
      <IconButton onClick={onSubmit} disabled={disabled}>
        {startIcon ? <img src={startIcon} alt="startIcon" /> : <SearchIcon />}
      </IconButton>
      <StyledInputField
        sx={sx}
        variant="outlined"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder}
      />
      {value && (
        <IconButton
          onClick={onClear}
          disabled={disabled}
          sx={{ marginLeft: "auto" }}>
          {endIcon ? <img src={endIcon} alt="endIcon" /> : <CloseIcon />}
        </IconButton>
      )}
    </InputFieldWrapper>
  );
};

export default InputField;
