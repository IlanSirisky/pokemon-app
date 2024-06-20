import { useState } from "react";
import { useField } from "formik";
import {
  CustomInputWrapper,
  ErrorStyles,
  InputContainer,
  InputLabelContainer,
  StyledInput,
  ToggleButton,
} from "./styles";
import { BodyRegular, XSmallRegular } from "../../styles/typography";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const CustomInput = ({ label, required, ...props }: CustomInputProps) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer>
      <CustomInputWrapper>
        <InputLabelContainer>
          <BodyRegular>{label}</BodyRegular>
          <BodyRegular style={{ color: "red" }}>{required && "*"}</BodyRegular>
        </InputLabelContainer>

        <StyledInput
          {...field}
          {...props}
          type={showPassword && props.type === "password" ? "text" : props.type}
        />
        {props.type === "password" && (
          <ToggleButton
            type="button"
            onClick={handleTogglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "70%",
              transform: "translateY(-50%)",
            }}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </ToggleButton>
        )}
      </CustomInputWrapper>
      {meta.touched && meta.error && (
        <XSmallRegular style={ErrorStyles}>{meta.error}</XSmallRegular>
      )}
    </InputContainer>
  );
};

export default CustomInput;
