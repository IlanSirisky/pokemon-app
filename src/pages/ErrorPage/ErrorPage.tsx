import { HeadingLargeBold, HeadingLargeMedium } from "../../styles/typography";
import { StyledErrorPage } from "./styles";
import confusedPikachu from "../../assets/confused.jpeg";

const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <HeadingLargeBold>404 Error</HeadingLargeBold>
      <HeadingLargeMedium>Page not found</HeadingLargeMedium>
      <img src={confusedPikachu} alt="confused pikachu" style={{borderRadius: "12px", margin:"12px"}}/>
    </StyledErrorPage>
  );
};

export default ErrorPage;
