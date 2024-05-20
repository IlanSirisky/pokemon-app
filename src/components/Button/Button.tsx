import React from 'react';
import { buttonType, buttonSize } from './types';
import { StyledButton } from './styles';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type: buttonType;
    size: buttonSize;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type, size, disabled = false }) => {
    return (
        <StyledButton onClick={onClick} $type={type} $size={size} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;