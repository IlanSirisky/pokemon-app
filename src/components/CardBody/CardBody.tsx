import {
  PowerContainer,
  StyledIdText,
  StyledPokemonImage,
  ImagePowerContainer,
} from "./styles";
import { HeadingLargeRegular, XSmallRegular } from "../../styles/typography";
import { CSSProperties } from "styled-components";

interface CardBodyProps {
  cardTitle: string;
  image: string;
  subheadText?: string;
  cornerText?: string;
  topCornerIcon?: string;
  style?: CSSProperties;
}

const CardBody = ({
  cardTitle,
  image,
  subheadText,
  cornerText,
  topCornerIcon,
  style
}: CardBodyProps) => {
  return (
    <>
      <ImagePowerContainer style={style}>
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
