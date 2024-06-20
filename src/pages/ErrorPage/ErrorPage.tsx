import { HeadingLargeBold, HeadingLargeMedium } from "../../styles/typography";
import { StyledErrorPage, StyledErrorImage } from "./styles";
import confusedPikachu from "../../assets/confused.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { PagePaths } from "../../constants/navBarConstants";

const ErrorPage = () => {
  const { getItem } = useSessionStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getItem("accessToken");
    if (!accessToken) {
      navigate(PagePaths.LOGIN);
    }
  }, [navigate, getItem]);

  return (
    <StyledErrorPage>
      <HeadingLargeBold>404 Error</HeadingLargeBold>
      <HeadingLargeMedium>Page not found</HeadingLargeMedium>
      <StyledErrorImage src={confusedPikachu} alt="confused pikachu" />
    </StyledErrorPage>
  );
};

export default ErrorPage;
