import { HeadingLargeBold, HeadingLargeMedium } from "../../styles/typography";
import { StyledErrorPage, StyledErrorImage } from "./styles";
import confusedPikachu from "../../assets/confused.jpeg";

const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <HeadingLargeBold>404 Error</HeadingLargeBold>
      <HeadingLargeMedium>Page not found</HeadingLargeMedium>
      <StyledErrorImage src={confusedPikachu} alt="confused pikachu" />
    </StyledErrorPage>
  );
};

export default ErrorPage;
