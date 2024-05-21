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

interface FightCardProps {
  pokemonName: string;
  image: string;
  id: string;
  power: number;
  powerIcon: string;
  hp: number;
  playerName: string;
}

const PokemonFightCard = ({
  pokemonName,
  image,
  id,
  power,
  playerName,
  powerIcon,
  hp,
}: FightCardProps) => {
  return (
    <StyledFightCard>
      <HeadingLargeBold>{playerName}</HeadingLargeBold>
      <ImagePowerContainer>
        <StyledPokemonImage src={image} alt={pokemonName} />
        <PowerContainer>
          <XSmallRegular>{power}px</XSmallRegular>
          <img src={powerIcon} alt="power icon" />
        </PowerContainer>
      </ImagePowerContainer>
      <StyledIdText>#{id}</StyledIdText>
      <HeadingLargeRegular>{pokemonName}</HeadingLargeRegular>
      <HPContainer>
        <HPbar></HPbar>
        <XSmallRegular>{hp} HP</XSmallRegular>
      </HPContainer>
    </StyledFightCard>
  );
};

export default PokemonFightCard;
