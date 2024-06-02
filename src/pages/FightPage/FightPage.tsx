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
import PokemonFightCard from "../../features/fight/PokemonFightCard/PokemonFightCard";
import pokemonsMockData, { myPokemonsMockData} from "../../data/pokemonMockData";
import strengthIcon from "../../assets/icons/strength.svg";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { IPokemonData } from "../../types/pokemonTypes";
import { transformPokemonDataToOption } from "../../utils/transformData";

const getRandomPokemon = (pokemonsData : IPokemonData[]) => {
  return pokemonsData[Math.floor(Math.random() * pokemonsData.length)];
};

const FightPage = () => {
  const [isActiveFight, setIsActiveFight] = useState(false);
  const [canCatch, setCanCatch] = useState(false); // will be used to enable/disable catch button based on backend
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonData>(
    getRandomPokemon(myPokemonsMockData)
  );
  const [opponentPokemon, setOpponentPokemon] = useState<IPokemonData>(
    getRandomPokemon(pokemonsMockData)
  );

  const [inputValue, setInputValue] = useState("");

  const handleStartFight = () => {
    setIsActiveFight(true);
  };

  const handlePokemonSelect = (value: string) => {
    const selectedPokemon = myPokemonsMockData.find(
      (pokemon) => pokemon.name === value
    );
    setSelectedPokemon(selectedPokemon || myPokemonsMockData[0]);
  };

  const handleInputChange = (
    _event: React.ChangeEvent<unknown>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
    handlePokemonSelect(newInputValue);
  };

  const handleCatch = () => {
    if (canCatch) {
      console.log("Caught the Pokémon!");
    }
  };

  return (
    <StyledFightPageWrapper>
      <StyledFightHeader>
        <StyledFightTitle>Fighting arena</StyledFightTitle>
        <HeadingMediumRegular>
          Press fight button until yours or yours enemy power will end
        </HeadingMediumRegular>
      </StyledFightHeader>
      <Autocomplete
        options={transformPokemonDataToOption(myPokemonsMockData)}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        sx={PokemonDropdownStyle}
        placeholder="Choose a Pokemon"
      />
      <StyledFightArea>
        <PokemonFightCard
          cardTitle={selectedPokemon.name}
          image={selectedPokemon.imageSrc}
          hp={selectedPokemon.hp}
          currentHp={20}
          playerName="You"
          subheadText={`${selectedPokemon.id}`}
          cornerText={`${selectedPokemon.px}px`}
          topCornerIcon={strengthIcon}
        />
        {isActiveFight ? (
          <FightActionWrapper>
            <Button
              type="primary"
              size="large"
              style={ActiveButtonStyle}
              onClick={() => console.log("Attack action")}>
              Attack
            </Button>
            <Button
              type="primary"
              size="large"
              disabled={!canCatch}
              style={canCatch ? ActiveButtonStyle : DisabledButtonStyle}
              onClick={handleCatch}>
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
          cardTitle={opponentPokemon.name}
          image={opponentPokemon.imageSrc}
          hp={opponentPokemon.hp}
          currentHp={20}
          playerName="Enemy"
          subheadText={`${opponentPokemon.id}`}
          cornerText={`${opponentPokemon.px}px`}
          topCornerIcon={strengthIcon}
        />
      </StyledFightArea>
    </StyledFightPageWrapper>
  );
};

export default FightPage;
