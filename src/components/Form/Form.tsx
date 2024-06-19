import { Formik } from "formik";
import CustomInput from "./CustomInput";
import { buttonStyles, ErrorStyles, StyledForm } from "./styles";
import Button from "../Button/Button";
import { XSmallRegular } from "../../styles/typography";

export interface IformFields {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

interface FormComponentProps {
  initialValues: Record<string, any>;
  validationSchema: any;
  onSubmit: (values: any, actions: any) => Promise<void>;
  fields: IformFields[];
  submitLabel: string;
  error: string | null;
  isLoading: boolean;
}

const Form = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  submitLabel,
  error,
  isLoading,
}: FormComponentProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <StyledForm>
          {fields.map((field) => (
            <CustomInput
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
            />
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
