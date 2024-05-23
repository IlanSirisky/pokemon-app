import React from "react";
import { buttonType, buttonSize } from "./types";
import { StyledButton } from "./styles";
import { CSSProperties } from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type: buttonType;
  size: buttonSize;
  disabled?: boolean;
  style?: CSSProperties;
}

const Button = ({
  onClick,
  type = "secondary",
  size = "medium",
  children,
  disabled = false,
  style,
}: ButtonProps) => {
  return (
    <StyledButton
      style={style}
      onClick={onClick}
      $type={type}
      $size={size}
      disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
