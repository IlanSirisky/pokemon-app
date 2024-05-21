import React, { useState } from "react";
import { FilterContainer } from "./styles";
import FilterArrow from "../../assets/Icons/FilterArrow.svg";
import ActiveFilterArrow from "../../assets/Icons/ActiveFilterArrow.svg";

interface FilterProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Filter: React.FC<FilterProps> = ({
  label = "Filter type",
  disabled = false,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setIsActive(!isActive);
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <FilterContainer
      $isActive={isActive}
      disabled={disabled}
      onClick={handleClick}>
      {label}
      <img src={isActive ? ActiveFilterArrow : FilterArrow} alt="Filter arrow icon" />
    </FilterContainer>
  );
};

export default Filter;
