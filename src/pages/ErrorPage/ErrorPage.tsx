import { HeadingLargeBold, HeadingLargeMedium } from "../../styles/typography";
import { StyledErrorPage, StyledErrorImage } from "./styles";
import confusedPikachu from "../../assets/confused.jpeg";
import { getToken } from "../../utils/tokenFunctions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getToken();
    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <StyledErrorPage>
      <HeadingLargeBold>404 Error</HeadingLargeBold>
      <HeadingLargeMedium>Page not found</HeadingLargeMedium>
      <StyledErrorImage src={confusedPikachu} alt="confused pikachu" />
    </StyledErrorPage>
  );
};

export default ErrorPage;
