import { useState } from "react";
import { Formik } from "formik";
import CustomInput from "../../components/CustomInput/CustomInput";
import {
  StyledFormWrapper,
  StyledForm,
  buttonStyles,
  ForgotPassContainer,
  forgotPassStyles,
} from "./styles";
import {
  BodyMedium,
  HeadingXLargeBold,
  XSmallRegular,
} from "../../styles/typography";
import Button from "../../components/Button/Button";
import { signUpSchema, confirmSchema } from "./schemas";
import { SignUpFormValues, ConfirmFormValues } from "../../types/formTypes";
import { useSignUp } from "../../hooks/useAuthentication";
import { ErrorStyles } from "../../components/CustomInput/styles";

const initialSignUpValues: SignUpFormValues = {
  username: "",
  email: "",
  password: "",
};

const initialConfirmValues: ConfirmFormValues = {
  username: "",
  code: "",
};

interface SignUpFormProps {
  switchState: () => void;
}

const SignUpForm = ({ switchState }: SignUpFormProps) => {
  const { signUp, confirmSignUp, isLoading, error } = useSignUp();
  const [isConfirmationStep, setIsConfirmationStep] = useState(false);

  const handleSignUpSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    await signUp(values);
    setSubmitting(false);
    setIsConfirmationStep(true);
  };

  const handleConfirmSubmit = async (
    values: ConfirmFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    await confirmSignUp(values, switchState);
    setSubmitting(false);
  };

  return (
    <StyledFormWrapper>
      <HeadingXLargeBold>{isConfirmationStep ? "Confirm User":"Sign Up"}</HeadingXLargeBold>
      {!isConfirmationStep ? (
        <Formik
          initialValues={initialSignUpValues}
          onSubmit={handleSignUpSubmit}
          validationSchema={signUpSchema}>
          {({ isSubmitting }) => (
            <StyledForm>
              <CustomInput
                label="Username"
                name="username"
                type="text"
                placeholder="Enter a username"
              />
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter an email"
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter a password"
              />
              {error && (
                <XSmallRegular style={ErrorStyles}>{error}</XSmallRegular>
              )}
              <Button
                type="primary"
                size="large"
                style={buttonStyles}
                disabled={isSubmitting || isLoading}>
                Sign Up
              </Button>
            </StyledForm>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={initialConfirmValues}
          onSubmit={handleConfirmSubmit}
          validationSchema={confirmSchema}>
          {({ isSubmitting }) => (
            <StyledForm>
              <CustomInput
                label="Username"
                name="username"
                type="text"
                placeholder="Enter your username"
              />
              <CustomInput
                label="Confirmation Code"
                name="code"
                type="text"
                placeholder="Enter the confirmation code"
              />
              {error && (
                <XSmallRegular style={ErrorStyles}>{error}</XSmallRegular>
              )}
              <Button
                type="primary"
                size="large"
                style={buttonStyles}
                disabled={isSubmitting || isLoading}>
                Confirm
              </Button>
            </StyledForm>
          )}
        </Formik>
      )}
      <ForgotPassContainer>
        <BodyMedium style={forgotPassStyles} onClick={switchState}>
          Login
        </BodyMedium>
      </ForgotPassContainer>
    </StyledFormWrapper>
  );
};

export default SignUpForm;
