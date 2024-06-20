import { Formik } from "formik";
import CustomInput from "./CustomInput";
import { buttonStyles, ErrorStyles, StyledForm } from "./styles";
import Button from "../Button/Button";
import { XSmallRegular } from "../../styles/typography";
import { cssSpacings } from "../../styles/stylingValues";

export interface IformFields {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

interface FormComponentProps {
  initialValues: Record<string, any>;
  validationSchema: any;
  onSubmit: (values: any, actions: any) => Promise<void>;
  fields: IformFields[];
  submitLabel: string;
  error: string | null;
  isLoading: boolean;
  passwordRequirements?: string;
  showPasswordRequirements?: boolean;
}

const Form = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  submitLabel,
  error,
  isLoading,
  passwordRequirements,
  showPasswordRequirements = false,
}: FormComponentProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <StyledForm>
          {fields.map((field) => (
            <div
              key={field.name}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: `${cssSpacings.s8}`,
              }}>
              <CustomInput
                label={field.label}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
              />
              {showPasswordRequirements && field.name === "password" && (
                <XSmallRegular>{passwordRequirements}</XSmallRegular>
              )}
            </div>
          ))}
          {error && <XSmallRegular style={ErrorStyles}>{error}</XSmallRegular>}
          <Button
            type="primary"
            size="large"
            style={buttonStyles}
            disabled={isSubmitting || isLoading}>
            {submitLabel}
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
