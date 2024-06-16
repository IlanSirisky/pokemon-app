import { Formik } from "formik";
import CustomInput from "../../components/CustomInput/CustomInput";
import {
  ForgotPassContainer,
  StyledFormWrapper,
  StyledForm,
  buttonStyles,
  forgotPassStyles,
} from "./styles";
import {
  BodyMedium,
  HeadingXLargeBold,
  XSmallRegular,
} from "../../styles/typography";
import Button from "../../components/Button/Button";
import { loginSchema } from "./schemas";
import { LoginFormValues } from "../../types/formTypes";
import { useLogin } from "../../hooks/useAuthentication";
import { ErrorStyles } from "../../components/CustomInput/styles";

const initialValues: LoginFormValues = {
  username: "",
  password: "",
};

interface LoginFormProps {
  switchState: () => void;
}

const LoginForm = ({ switchState }: LoginFormProps) => {
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    await login(values);
    setSubmitting(false);
  };

  return (
    <StyledFormWrapper>
      <HeadingXLargeBold>Login</HeadingXLargeBold>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}>
        {({ isSubmitting }) => (
          <StyledForm>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            {error && (
              <XSmallRegular style={ErrorStyles}>{error}</XSmallRegular>
            )}
            <Button
              type="primary"
              size="large"
              style={buttonStyles}
              disabled={isSubmitting || isLoading}>
              Login
            </Button>
          </StyledForm>
        )}
      </Formik>
      <ForgotPassContainer>
        <BodyMedium
          style={forgotPassStyles}
          onClick={() => console.log("Forgot Password")}>
          Forgot Password?
        </BodyMedium>
        <BodyMedium style={forgotPassStyles} onClick={switchState}>
          Sign Up Now
        </BodyMedium>
      </ForgotPassContainer>
    </StyledFormWrapper>
  );
};

export default LoginForm;
