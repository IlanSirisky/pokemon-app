import { Formik } from "formik";
import CustomInput from "../../components/CustomInput/CustomInput";
import {
  ForgotPassContainer,
  LoginForm,
  LoginFormWrapper,
  LoginPageWrapper,
  LogoWrapper,
  StyledForm,
  StyledImage,
  buttonStyles,
  forgotPassStyles,
} from "./styles";
import PokemonLogo from "../../assets/icons/PokemonHeader.svg";
import { BodyMedium, HeadingXLargeBold } from "../../styles/typography";
import Button from "../../components/Button/Button";

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const handleSubmit = (values: LoginFormValues) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <LoginPageWrapper>
      <LogoWrapper>
        <StyledImage src={PokemonLogo} alt="Pokemon Logo" />
      </LogoWrapper>
      <LoginFormWrapper>
        <LoginForm>
          <HeadingXLargeBold>Login</HeadingXLargeBold>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
              <Button type="primary" size="large" style={buttonStyles}>
                Login
              </Button>
            </StyledForm>
          </Formik>
          <ForgotPassContainer>
            <BodyMedium
              style={forgotPassStyles}
              onClick={() => console.log("Forgot Password")}>
              Forgot Password?
            </BodyMedium>
          </ForgotPassContainer>
        </LoginForm>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};

export default LoginPage;
