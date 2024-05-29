import {
  StyledFightHeader,
  StyledFightPageWrapper,
  StyledFightTitle,
  PokemonDropdownStyle,
  StyledFightArea,
  FightButtonStyle,
  FightActionWrapper,
  ActiveButtonStyle,
  DisabledButtonStyle,
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
import { useState } from "react";

const Balbasaur = pokemonsMockData[0];

const FightPage = () => {
  const [isActiveFight, setIsActiveFight] = useState(false);
  const [canCatch, setCanCatch] = useState(false); // will be used to enable/disable catch button based on backend

  const BackgroundImg =
    Math.random() < 0.33 ? blueBg : Math.random() < 0.66 ? purpleBg : yellowBg;

  const handleStartFight = () => {
    setIsActiveFight(true);
  };

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
          currentHp={20}
          playerName="You"
          subheadText={`#${Balbasaur.id}`}
          cornerText={`${Balbasaur.px}px`}
          topCornerIcon={strengthIcon}
        />
        {isActiveFight ? (
          <FightActionWrapper>
            <Button type="primary" size="large" style={ActiveButtonStyle}>
              Attack
            </Button>
            <Button
              type="primary"
              size="large"
              disabled={!canCatch}
              style={canCatch ? ActiveButtonStyle : DisabledButtonStyle}>
              Catch
            </Button>
          </FightActionWrapper>
        ) : (
          <Button
            type="primary"
            size="large"
            style={FightButtonStyle}
            onClick={handleStartFight}>
            Fight
          </Button>
        )}
        <PokemonFightCard
          cardTitle={Balbasaur.name}
          image={Balbasaur.imageSrc}
          hp={Balbasaur.hp}
          currentHp={5}
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
