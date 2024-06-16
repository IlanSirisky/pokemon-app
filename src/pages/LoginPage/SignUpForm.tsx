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
import { signUpSchema } from "./schemas";
import { SignUpFormValues } from "../../types/formTypes";
import { useSignUp } from "../../hooks/useAuthentication";
import { ErrorStyles } from "../../components/CustomInput/styles";

const initialValues: SignUpFormValues = {
  username: "",
  email: "",
  password: "",
};

interface SignUpFormProps {
  switchState: () => void;
}

const SignUpForm = ({ switchState }: SignUpFormProps) => {
  const { signUp, isLoading, error } = useSignUp();

  const handleSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    await signUp(values);
    setSubmitting(false);
  };

  return (
    <StyledFormWrapper>
      <HeadingXLargeBold>Sign Up</HeadingXLargeBold>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}>
        {({ isSubmitting }) => (
          <StyledForm>
            <CustomInput
              label="Username"
              name="username"
              type="username"
              placeholder="Enter a username"
            />
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter a email"
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
      <ForgotPassContainer>
        <BodyMedium style={forgotPassStyles} onClick={switchState}>
          Login
        </BodyMedium>
      </ForgotPassContainer>
    </StyledFormWrapper>
  );
};

export default SignUpForm;
