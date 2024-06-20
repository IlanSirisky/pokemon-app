import { CSSProperties, useState } from "react";
import { signUpSchema, confirmSchema } from "./schemas";
import { useSignUp } from "../../hooks/useAuthentication";
import {
  confirmFields,
  confirmInitialValues,
  signUpFields,
  signUpInitialValues,
} from "../../constants/formValues";
import Form from "../../components/Form/Form";
import {
  StyledFormWrapper,
  UnderFormContainer,
  underFormButtonStyles,
} from "./styles";
import { BodyMedium, HeadingXLargeBold } from "../../styles/typography";
import { ConfirmFormValues, SignUpFormValues } from "../../types/formTypes";

interface SignUpFormProps {
  switchState: () => void;
  style?: CSSProperties;
}

const SignUpForm = ({ switchState, style }: SignUpFormProps) => {
  const { signUp, confirmSignUp, isLoading, error } = useSignUp();
  const [isConfirmationStep, setIsConfirmationStep] = useState(false);

  const handleSignUpSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const res = await signUp(values);
    setSubmitting(false);
    if (!res) {
      setIsConfirmationStep(true);
    }
  };

  const handleConfirmSubmit = async (
    values: ConfirmFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    await confirmSignUp(values, switchState);
    setSubmitting(false);
  };

  return (
    <StyledFormWrapper style={style}>
      <HeadingXLargeBold>
        {isConfirmationStep ? "Confirm User" : "Sign Up"}
      </HeadingXLargeBold>
      {!isConfirmationStep ? (
        <Form
          initialValues={signUpInitialValues}
          validationSchema={signUpSchema}
          onSubmit={handleSignUpSubmit}
          fields={signUpFields}
          submitLabel="Sign Up"
          error={error}
          isLoading={isLoading}
          passwordRequirements="*Password must be 8+ characters, with at least one uppercase,
          one lowercase, one number, and one special character."
          showPasswordRequirements
        />
      ) : (
        <Form
          initialValues={confirmInitialValues}
          validationSchema={confirmSchema}
          onSubmit={handleConfirmSubmit}
          fields={confirmFields}
          submitLabel="Confirm"
          error={error}
          isLoading={isLoading}
        />
      )}
      <UnderFormContainer>
        <BodyMedium style={underFormButtonStyles} onClick={switchState}>
          Back to Login
        </BodyMedium>
      </UnderFormContainer>
    </StyledFormWrapper>
  );
};

export default SignUpForm;
