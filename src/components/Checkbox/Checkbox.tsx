import React, { useState } from "react";
import { StyledCheckbox } from "./styles";

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
}

const Checkbox = ({ checked = false, disabled = false }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <StyledCheckbox
      checked={isChecked}
      onChange={handleCheckboxChange}
      disabled={disabled}
    />
  );
};

export default Checkbox;
