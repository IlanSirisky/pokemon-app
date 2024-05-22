import {
  StyledBasicCard,
  PowerContainer,
  StyledIdText,
  StyledPokemonImage,
  ImagePowerContainer,
} from "./styles";
import { HeadingLargeRegular, XSmallRegular } from "../../styles/typography";
import { CSSProperties } from "styled-components";

interface BasicCardProps {
  cardTitle: string;
  image: string;
  subheadText?: string;
  cornerText?: string;
  topCornerIcon?: string;
  style?: CSSProperties;
}

const PokemonBasicCard = ({
  cardTitle,
  image,
  subheadText,
  cornerText,
  topCornerIcon,
  style,
}: BasicCardProps) => {
  return (
    <StyledBasicCard style={style}>
      <ImagePowerContainer>
        <StyledPokemonImage src={image} alt={cardTitle} />
        <PowerContainer>
          {cornerText && <XSmallRegular>{cornerText}</XSmallRegular>}
          {topCornerIcon && <img src={topCornerIcon} alt={cardTitle} />}
        </PowerContainer>
      </ImagePowerContainer>
      {subheadText && <StyledIdText>{subheadText}</StyledIdText>}
      <HeadingLargeRegular>{cardTitle}</HeadingLargeRegular>
    </StyledBasicCard>
  );
};

export default PokemonBasicCard;
