import { loginSchema } from "./schemas";
import { useLogin } from "../../hooks/useAuthentication";
import Form from "../../components/Form/Form";
import { loginFields, loginInitialValues } from "../../constants/formValues";
import {
  UnderFormContainer,
  StyledFormWrapper,
  underFormButtonStyles,
} from "./styles";
import { BodyMedium, HeadingXLargeBold } from "../../styles/typography";
import { LoginFormValues } from "../../types/formTypes";
import { CSSProperties } from "react";

interface LoginFormProps {
  switchState: () => void;
  style?: CSSProperties;
}

const LoginForm = ({ switchState, style }: LoginFormProps) => {
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    await login(values);
    setSubmitting(false);
  };

  return (
    <StyledFormWrapper style={style}>
      <HeadingXLargeBold>Login</HeadingXLargeBold>
      <Form
        initialValues={loginInitialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        fields={loginFields}
        submitLabel="Login"
        error={error}
        isLoading={isLoading}
      />
      <UnderFormContainer>
        <BodyMedium
          style={underFormButtonStyles}
          onClick={() => console.log("Forgot Password")}>
          Forgot Password?
        </BodyMedium>
        <BodyMedium style={underFormButtonStyles} onClick={switchState}>
          Sign Up Now
        </BodyMedium>
      </UnderFormContainer>
    </StyledFormWrapper>
  );
};

export default LoginForm;
