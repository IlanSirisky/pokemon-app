import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { InputFieldWrapper, StyledInputField } from "./styles";

interface CustomSearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
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
  onStartIconClick,
  onEndIconClick,
  placeholder = "Search",
  disabled = false,
  startIcon,
  endIcon,
  sx = {},
}: CustomSearchInputProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit?.();
    }
  };

  return (
    <InputFieldWrapper $disabled={disabled}>
      <IconButton
        onClick={onStartIconClick}
        disabled={disabled}
        style={{ backgroundColor: "transparent" }}>
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
      {!disabled && value && (
        <IconButton onClick={onEndIconClick} sx={{ marginLeft: "auto" }}>
          {endIcon ? <img src={endIcon} alt="endIcon" /> : <CloseIcon />}
        </IconButton>
      )}
    </InputFieldWrapper>
  );
};

export default InputField;
