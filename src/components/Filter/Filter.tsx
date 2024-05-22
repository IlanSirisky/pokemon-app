import React, { useState } from "react";
import { StyledButton } from "./styles";
import FilterArrow from "../../assets/Icons/FilterArrow.svg";
import ActiveFilterArrow from "../../assets/Icons/ActiveFilterArrow.svg";

interface FilterProps {
  label: string;
  disabled?: boolean;
  startIcon?: string;
  onClick?: (isActive: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({
  label,
  disabled = false,
  startIcon,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick(!isActive);
  };

  return (
    <StyledButton
      variant="contained"
      disabled={disabled}
      onClick={handleClick}
      $isActive={isActive}
      startIcon={startIcon && <img src={startIcon} alt={startIcon} />}
      endIcon={
        <img
          src={isActive ? ActiveFilterArrow : FilterArrow}
          alt="Filter arrow icon"
        />
      }>
      {label}
    </StyledButton>
  );
};

export default Filter;
