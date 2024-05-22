import React from "react";
import { buttonType, buttonSize } from "./types";
import { StyledButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type: buttonType;
  size: buttonSize;
  disabled?: boolean;
}

const Button = ({
  onClick,
  type = "secondary",
  size = "medium",
  children,
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      $type={type}
      $size={size}
      disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
