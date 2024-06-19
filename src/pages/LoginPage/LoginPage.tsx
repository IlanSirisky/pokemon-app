import {
  BackgroundWrapper,
  LoginPageWrapper,
  LogoWrapper,
  StyledImage,
} from "./styles";
import PokemonLogo from "../../assets/icons/PokemonHeader.svg";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const switchState = () => {
    setIsLogin(!isLogin);
  };

  return (
    <LoginPageWrapper>
      <LogoWrapper>
        <StyledImage src={PokemonLogo} alt="Pokemon Logo" />
      </LogoWrapper>
      <BackgroundWrapper>
        {isLogin ? (
          <LoginForm switchState={switchState} />
        ) : (
          <SignUpForm switchState={switchState} />
        )}
      </BackgroundWrapper>
    </LoginPageWrapper>
  );
};

export default LoginPage;
