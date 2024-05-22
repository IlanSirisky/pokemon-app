import {
  PowerContainer,
  StyledIdText,
  StyledPokemonImage,
  ImagePowerContainer,
} from "./styles";
import { HeadingLargeRegular, XSmallRegular } from "../../styles/typography";

interface CardBodyProps {
  cardTitle: string;
  image: string;
  subheadText?: string;
  cornerText?: string;
  topCornerIcon?: string;
}

const CardBody = ({
  cardTitle,
  image,
  subheadText,
  cornerText,
  topCornerIcon,
}: CardBodyProps) => {
  return (
    <>
      <ImagePowerContainer>
        <StyledPokemonImage src={image} alt={cardTitle} />
        <PowerContainer>
          {cornerText && <XSmallRegular>{cornerText}</XSmallRegular>}
          {topCornerIcon && <img src={topCornerIcon} alt={cardTitle} />}
        </PowerContainer>
      </ImagePowerContainer>
      {subheadText && <StyledIdText>{subheadText}</StyledIdText>}
      <HeadingLargeRegular>{cardTitle}</HeadingLargeRegular>
    </>
  );
};

export default CardBody;
