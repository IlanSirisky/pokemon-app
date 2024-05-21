import {
  StyledBasicCard,
  PowerContainer,
  StyledIdText,
  StyledPokemonImage,
  ImagePowerContainer,
} from "./styles";
import { HeadingLargeRegular, XSmallRegular } from "../../styles/typography";

interface BasicCardProps {
  name: string;
  image: string;
  id: string;
  power: number;
  powerIcon: string;
}

const PokemonBasicCard = ({
  name,
  image,
  id,
  power,
  powerIcon,
}: BasicCardProps) => {
  return (
    <StyledBasicCard>
      <ImagePowerContainer>
        <StyledPokemonImage src={image} alt={name} />
        <PowerContainer>
          <XSmallRegular>{power}px</XSmallRegular>
          <img src={powerIcon} alt="power icon" />
        </PowerContainer>
      </ImagePowerContainer>
      <StyledIdText>#{id}</StyledIdText>
      <HeadingLargeRegular>{name}</HeadingLargeRegular>
    </StyledBasicCard>
  );
};

export default PokemonBasicCard;
