import {
  StyledFightHeader,
  StyledFightPageWrapper,
  StyledFightTitle,
  PokemonDropdownStyle,
  StyledFightArea,
  FightButtonStyle,
  FightActionWrapper,
  ActiveButtonStyle,
} from "./styles";
import { HeadingMediumRegular } from "../../styles/typography";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import PokemonFightCard from "../../features/fight/PokemonFightCard/PokemonFightCard";
import pokemonsMockData, {
  myPokemonsMockData,
} from "../../data/pokemonMockData";
import strengthIcon from "../../assets/icons/strength.svg";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { IPokemonData } from "../../types/pokemonTypes";
import { transformPokemonDataToOption } from "../../utils/transformData";
import {
  calculateCatchRate,
  calculateDamage,
  getRandomPokemon,
} from "../../utils/fightPageFunctions";

type PlayerTurn = "player" | "opponent";

const FightPage = () => {
  const [isActiveFight, setIsActiveFight] = useState(false);
  const [canCatch, setCanCatch] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonData>(
    getRandomPokemon(myPokemonsMockData)
  );
  const [opponentPokemon] = useState<IPokemonData>(
    getRandomPokemon(pokemonsMockData, selectedPokemon)
  );
  const [selectedPokemonHp, setSelectedPokemonHp] = useState(
    selectedPokemon.hp
  );
  const [opponentPokemonHp, setOpponentPokemonHp] = useState(
    opponentPokemon.hp
  );
  const [turn, setTurn] = useState<PlayerTurn>(
    selectedPokemon.px >= opponentPokemon.px ? "player" : "opponent"
  );
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!isActiveFight) return;

    if (turn === "opponent" && opponentPokemonHp > 0 && selectedPokemonHp > 0) {
      const timeout = setTimeout(() => {
        handleOpponentAttack();
      }, 1000); // 1 second delay for opponent's attack
      return () => clearTimeout(timeout);
    }
  }, [turn, isActiveFight, opponentPokemonHp, selectedPokemonHp]);

  const handleStartFight = () => {
    setSelectedPokemonHp(selectedPokemon.hp);
    setOpponentPokemonHp(opponentPokemon.hp);
    setCanCatch(false);
    setTurn(selectedPokemon.px >= opponentPokemon.px ? "player" : "opponent");
    setIsActiveFight(true);
  };

  const handlePokemonSelect = (value: string) => {
    const selected = myPokemonsMockData.find(
      (pokemon) => pokemon.name === value
    );
    if (selected) {
      setSelectedPokemon(selected);
      setSelectedPokemonHp(selected.hp);
      setTurn(selected.px >= opponentPokemon.px ? "player" : "opponent");
    }
  };

  const handleInputChange = (
    _event: React.ChangeEvent<unknown>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
    handlePokemonSelect(newInputValue);
  };

  const handlePlayerAttack = () => {
    if (turn !== "player") return;

    const damage = calculateDamage(selectedPokemon, opponentPokemon);
    setOpponentPokemonHp((hp) => Math.max(-1, hp - damage));

    if (opponentPokemonHp - damage < 0.2 * opponentPokemon.hp) {
      setCanCatch(true);
    }

    if (opponentPokemonHp - damage <= 0) {
      alert("Opponent Pokémon is defeated!");
      setOpponentPokemonHp(-1); // Ensure health is never exactly 0
      setIsActiveFight(false);
      return;
    }

    setTurn("opponent");
  };

  const handleOpponentAttack = () => {
    if (turn !== "opponent") return;

    const damage = calculateDamage(opponentPokemon, selectedPokemon);
    setSelectedPokemonHp((hp) => Math.max(-1, hp - damage));

    if (selectedPokemonHp - damage <= 0) {
      alert("Your Pokémon is defeated!");
      setSelectedPokemonHp(-1); // Ensure health is never exactly 0
      setIsActiveFight(false);
      return;
    }

    setTurn("player");
  };

  const handleNextTurn = () => {
    if (turn === "player") {
      handlePlayerAttack();
    } else {
      handleOpponentAttack();
    }
  };

  const handleCatch = () => {
    if (canCatch) {
      const catchRate = calculateCatchRate(
        opponentPokemonHp,
        opponentPokemon.hp
      );
      const catchSuccess = Math.random() < catchRate;
      if (catchSuccess) {
        alert("Caught the Pokémon!");
        setIsActiveFight(false);
      } else {
        alert("Failed to catch the Pokémon.");
        setTurn("opponent");
      }
    }
  };

  return (
    <StyledFightPageWrapper>
      <StyledFightHeader>
        <StyledFightTitle>Fighting arena</StyledFightTitle>
        <HeadingMediumRegular>
          Press fight button until yours or your enemy's power is depleted
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
          currentHp={selectedPokemonHp}
          playerName="You"
          subheadText={`${selectedPokemon.id}`}
          cornerText={`${selectedPokemon.px}px`}
          topCornerIcon={strengthIcon}
          style={{ border: turn === "player" ? "2px solid red" : "none" }}
        />
        {isActiveFight ? (
          <FightActionWrapper>
            <Button
              type="primary"
              size="large"
              style={ActiveButtonStyle}
              onClick={handleNextTurn}
              disabled={turn !== "player"}>
              Attack
            </Button>
            <Button
              type="primary"
              size="large"
              disabled={!canCatch}
              style={ActiveButtonStyle}
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
          currentHp={opponentPokemonHp}
          playerName="Enemy"
          subheadText={`${opponentPokemon.id}`}
          cornerText={`${opponentPokemon.px}px`}
          topCornerIcon={strengthIcon}
          style={{ border: turn === "opponent" ? "2px solid red" : "none" }}
        />
      </StyledFightArea>
    </StyledFightPageWrapper>
  );
};

export default FightPage;
