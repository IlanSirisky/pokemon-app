import {
  StyledFightHeader,
  StyledFightPageWrapper,
  StyledFightTitle,
  PokemonDropdownStyle,
  StyledFightArea,
  FightButtonStyle,
} from "./styles";
import { HeadingMediumRegular } from "../../styles/typography";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import { pokemonOptions } from "../../constants/autocomplete";
import PokemonFightCard from "../../features/fight/PokemonFightCard/PokemonFightCard";
import pokemonsMockData from "../../data/pokemonMockData";
import strengthIcon from "../../assets/icons/strength.svg";
import Button from "../../components/Button/Button";
import blueBg from "../../assets/blue-bg.jpeg";
import purpleBg from "../../assets/purple-bg.jpeg";
import yellowBg from "../../assets/yellow-bg.jpeg";

const Balbasaur = pokemonsMockData[0];

const FightPage = () => {
  const BackgroundImg =
    Math.random() < 0.33 ? blueBg : Math.random() < 0.66 ? purpleBg : yellowBg;
    
  return (
    <StyledFightPageWrapper>
      <StyledFightHeader>
        <StyledFightTitle>Fighting arena</StyledFightTitle>
        <HeadingMediumRegular>
          Press fight button until yours or yours enemy power will end
        </HeadingMediumRegular>
      </StyledFightHeader>
      <Autocomplete options={pokemonOptions} sx={PokemonDropdownStyle} />
      <StyledFightArea $backgroundImg={BackgroundImg}>
        <PokemonFightCard
          cardTitle={Balbasaur.name}
          image={Balbasaur.imageSrc}
          hp={Balbasaur.hp}
          playerName="You"
          subheadText={`#${Balbasaur.id}`}
          cornerText={`${Balbasaur.px}px`}
          topCornerIcon={strengthIcon}
        />
        <Button type="primary" size="large" style={FightButtonStyle}>
          Fight
        </Button>
        <PokemonFightCard
          cardTitle={Balbasaur.name}
          image={Balbasaur.imageSrc}
          hp={Balbasaur.hp}
          playerName="Enemy"
          subheadText={`#${Balbasaur.id}`}
          cornerText={`${Balbasaur.px}px`}
          topCornerIcon={strengthIcon}
        />
      </StyledFightArea>
    </StyledFightPageWrapper>
  );
};

export default FightPage;
