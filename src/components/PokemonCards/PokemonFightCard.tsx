import {
  StyledFightCard,
  PowerContainer,
  StyledIdText,
  StyledPokemonImage,
  ImagePowerContainer,
  HPbar,
  HPContainer,
} from "./styles";
import {
  HeadingLargeRegular,
  XSmallRegular,
  HeadingLargeBold,
} from "../../styles/typography";
import { CSSProperties } from "styled-components";

interface FightCardProps {
  cardTitle: string;
  image: string;
  hp: number;
  playerName: string;
  subheadText?: string;
  cornerText?: number;
  topCornerIcon?: string;
  style?: CSSProperties;
}

const PokemonFightCard = ({
  cardTitle,
  image,
  hp,
  playerName,
  subheadText,
  cornerText,
  topCornerIcon,
  style,
}: FightCardProps) => {
  return (
    <StyledFightCard style={style}>
      <HeadingLargeBold>{playerName}</HeadingLargeBold>
      <ImagePowerContainer>
        <StyledPokemonImage src={image} alt={cardTitle} />
        <PowerContainer>
          {cornerText && <XSmallRegular>{cornerText}</XSmallRegular>}
          {topCornerIcon && <img src={topCornerIcon} alt={cardTitle} />}
        </PowerContainer>
      </ImagePowerContainer>
      {subheadText && <StyledIdText>{subheadText}</StyledIdText>}
      <HeadingLargeRegular>{cardTitle}</HeadingLargeRegular>
      <HPContainer>
        <HPbar></HPbar>
        <XSmallRegular>{hp} HP</XSmallRegular>
      </HPContainer>
    </StyledFightCard>
  );
};

export default PokemonFightCard;
