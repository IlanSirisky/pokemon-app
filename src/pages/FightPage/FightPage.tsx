import {
  StyledFightHeader,
  StyledFightPageWrapper,
  StyledFightTitle,
  PokemonDropdownStyle,
  StyledFightArea,
  FightButtonStyle,
  FightActionWrapper,
  ActiveButtonStyle,
  MessageDivStyle, // Make sure to add this in your styles
} from "./styles";
import { HeadingMediumRegular } from "../../styles/typography";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import PokemonFightCard from "../../features/fight/PokemonFightCard/PokemonFightCard";
import pokemonsMockData from "../../data/pokemonMockData";
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
import { PlayerTurn } from "./types";

const myPokemonsData = pokemonsMockData.filter((pokemon) => pokemon.isOwned);

const FightPage = () => {
  const [isActiveFight, setIsActiveFight] = useState(false);
  const [canCatch, setCanCatch] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonData | null>(
    getRandomPokemon(myPokemonsData)
  );
  const [opponentPokemon] = useState<IPokemonData>(
    getRandomPokemon(pokemonsMockData, selectedPokemon)
  );
  const [selectedPokemonCurrentHp, setSelectedPokemonCurrentHp] = useState(
    selectedPokemon?.hp
  );
  const [opponentPokemonCurrentHp, setOpponentPokemonCurrentHp] = useState(
    opponentPokemon.hp
  );
  const [turn, setTurn] = useState<PlayerTurn>(
    selectedPokemon?.px >= opponentPokemon.px
      ? PlayerTurn.Player
      : PlayerTurn.Opponent
  );
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!isActiveFight) return;

    if (
      turn === PlayerTurn.Opponent &&
      opponentPokemonCurrentHp > 0 &&
      selectedPokemonCurrentHp > 0
    ) {
      const timeout = setTimeout(() => {
        handleOpponentAttack();
      }, 1000); // 1 second delay for opponent's attack
      return () => clearTimeout(timeout);
    }
  }, [turn, isActiveFight, opponentPokemonCurrentHp, selectedPokemonCurrentHp]);

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  const handleStartFight = () => {
    setSelectedPokemonCurrentHp(selectedPokemon?.hp);
    setOpponentPokemonCurrentHp(opponentPokemon.hp);
    setCanCatch(false);
    setTurn(
      selectedPokemon.px >= opponentPokemon.px
        ? PlayerTurn.Player
        : PlayerTurn.Opponent
    );
    setIsActiveFight(true);
  };

  const handlePokemonSelect = (value: string) => {
    const selected = myPokemonsData.find((pokemon) => pokemon.name === value);
    if (selected) {
      setSelectedPokemon(selected);
      setSelectedPokemonCurrentHp(selected.hp);
      setTurn(
        selected.px >= opponentPokemon.px
          ? PlayerTurn.Player
          : PlayerTurn.Opponent
      );
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
    if (turn !== PlayerTurn.Player) return;

    const damage = calculateDamage(selectedPokemon, opponentPokemon);
    setOpponentPokemonCurrentHp((hp) => Math.max(-1, hp - damage));

    if (opponentPokemonCurrentHp - damage < 0.3 * opponentPokemon.hp) {
      setCanCatch(true);
    }

    if (opponentPokemonCurrentHp - damage <= 0) {
      showMessage("Opponent Pokémon is defeated!");
      setOpponentPokemonCurrentHp(-1); // Ensure health is never exactly 0
      setIsActiveFight(false);
      return;
    }

    setTurn(PlayerTurn.Opponent);
  };

  const handleOpponentAttack = () => {
    if (turn !== PlayerTurn.Opponent) return;

    const damage = calculateDamage(opponentPokemon, selectedPokemon );
    setSelectedPokemonCurrentHp((hp) => Math.max(-1, hp - damage));

    if (selectedPokemonCurrentHp - damage <= 0) {
      showMessage("Your Pokémon is defeated!");
      setSelectedPokemonCurrentHp(-1); // Ensure health is never exactly 0
      setIsActiveFight(false);
      return;
    }

    setTurn(PlayerTurn.Player);
  };

  const handleNextTurn = () => {
    if (turn === PlayerTurn.Player) {
      handlePlayerAttack();
    } else {
      handleOpponentAttack();
    }
  };

  const handleCatch = () => {
    if (canCatch) {
      const catchRate = calculateCatchRate(
        opponentPokemonCurrentHp,
        opponentPokemon.hp
      );
      const catchSuccess = Math.random() < catchRate;
      if (catchSuccess) {
        showMessage("Caught the Pokémon!");
        setIsActiveFight(false);
      } else {
        showMessage("Failed to catch the Pokémon.");
        setTurn(PlayerTurn.Opponent);
      }
    }
  };

  return (
    <StyledFightPageWrapper>
      <StyledFightHeader>
        <StyledFightTitle>Fighting Arena</StyledFightTitle>
        <HeadingMediumRegular>
          Press the attack button until either your health or your enemy's
          health is depleted
        </HeadingMediumRegular>
      </StyledFightHeader>
      <Autocomplete
        options={transformPokemonDataToOption(
          // myPokemonsData.filter((pokemon) => pokemon.id !== opponentPokemon.id)
          []
        )}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        disabled={isActiveFight}
        sx={PokemonDropdownStyle}
        placeholder="Choose a Pokemon"
      />
      <StyledFightArea>
        <PokemonFightCard
          cardTitle={selectedPokemon?.name}
          image={selectedPokemon?.imageSrc}
          hp={selectedPokemon?.hp}
          currentHp={selectedPokemonCurrentHp}
          playerName="You"
          subheadText={`${selectedPokemon?.id}`}
          cornerText={`${selectedPokemon?.px}px`}
          topCornerIcon={strengthIcon}
          style={{
            border: turn === PlayerTurn.Player ? "2px solid red" : "none",
          }}
        />
        {isActiveFight ? (
          <FightActionWrapper>
            <Button
              type="primary"
              size="large"
              style={ActiveButtonStyle}
              onClick={handleNextTurn}
              disabled={turn !== PlayerTurn.Player}>
              Attack
            </Button>
            <Button
              type="primary"
              size="large"
              disabled={!canCatch || turn !== PlayerTurn.Player}
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
          currentHp={opponentPokemonCurrentHp}
          playerName="Enemy"
          subheadText={`${opponentPokemon.id}`}
          cornerText={`${opponentPokemon.px}px`}
          topCornerIcon={strengthIcon}
          style={{
            border: turn === PlayerTurn.Opponent ? "2px solid red" : "none",
          }}
        />
      </StyledFightArea>
      {message && <div style={MessageDivStyle}>{message}</div>}
    </StyledFightPageWrapper>
  );
};

export default FightPage;
