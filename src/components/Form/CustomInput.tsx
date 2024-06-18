import { useField } from "formik";
import { CustomInputWrapper, ErrorStyles, StyledInput } from "./styles";
import { BodyRegular, XSmallRegular } from "../../styles/typography";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const CustomInput = ({ label, ...props }: CustomInputProps) => {
  const [field, meta] = useField(props);

  return (
    <CustomInputWrapper>
      <BodyRegular>{label}</BodyRegular>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error && (
        <XSmallRegular style={ErrorStyles}>{meta.error}</XSmallRegular>
      )}
    </CustomInputWrapper>
  );
};

export default CustomInput;
