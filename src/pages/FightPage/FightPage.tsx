import {
  StyledFightHeader,
  StyledFightPageWrapper,
  StyledFightTitle,
  PokemonDropdownStyle,
  StyledFightArea,
  FightButtonStyle,
  FightActionWrapper,
  ActiveButtonStyle,
  MessageDivStyle,
} from "./styles";
import { HeadingMediumRegular } from "../../styles/typography";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import PokemonFightCard from "../../features/fight/PokemonFightCard/PokemonFightCard";
import strengthIcon from "../../assets/icons/strength.svg";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { IPokemonData } from "../../types/pokemonTypes";
import { transformPokemonDataToOption } from "../../utils/transformData";
import {
  calculateCatchRate,
  calculateDamage,
  determineInitialTurn,
  getRandomPokemon,
} from "../../utils/fightPageFunctions";
import { PlayerTurn } from "./types";
import { useQuery } from "@tanstack/react-query";
import {
  fetchMyPokemons,
  fetchRandomPokemon,
} from "../../hooks/useFetchPokemonData";
import { useCatchPokemon } from "../../hooks/useCatchPokemon";

const FightPage = () => {
  const [isActiveFight, setIsActiveFight] = useState(false);
  const [canCatch, setCanCatch] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonData | null>(
    null
  );
  const [selectedPokemonCurrentHp, setSelectedPokemonCurrentHp] =
    useState<number>(0);
  const [opponentPokemonCurrentHp, setOpponentPokemonCurrentHp] =
    useState<number>(0);
  const [turn, setTurn] = useState<PlayerTurn>(PlayerTurn.Player);
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const { mutate: catchPokemon } = useCatchPokemon();

  const {
    data: myPokemons,
    isLoading: myPokemonsLoading,
    error: myPokemonsError,
  } = useQuery({
    queryKey: ["myPokemons"],
    queryFn: fetchMyPokemons,
  });

  const {
    data: opponentPokemon,
    isLoading: opponentPokemonLoading,
    error: opponentPokemonError,
    // refetch: refetchOpponentPokemon,
  } = useQuery({
    queryKey: ["randomPokemon", false],
    queryFn: () => fetchRandomPokemon(false),
  });

  useEffect(() => {
    if (myPokemons && opponentPokemon) {
      const initialSelectedPokemon = getRandomPokemon(myPokemons);
      setSelectedPokemon(initialSelectedPokemon);
      setSelectedPokemonCurrentHp(initialSelectedPokemon.baseStats?.hp || 0);
      setOpponentPokemonCurrentHp(opponentPokemon.baseStats?.hp || 0);
      setTurn(determineInitialTurn(initialSelectedPokemon, opponentPokemon));
    }
  }, [myPokemons, opponentPokemon]);

  useEffect(() => {
    if (!isActiveFight) return;

    if (
      turn === PlayerTurn.Opponent &&
      opponentPokemonCurrentHp > 0 &&
      selectedPokemonCurrentHp > 0
    ) {
      const timeout = setTimeout(() => {
        handleOpponentAttack();
      }, 1500); // 1.5 seconds delay for opponent's attack
      return () => clearTimeout(timeout);
    }
  }, [turn, isActiveFight, opponentPokemonCurrentHp, selectedPokemonCurrentHp]);

  const showMessage = (msg: string, timeout: number) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, timeout);
  };

  const handleStartFight = () => {
    if (selectedPokemon && opponentPokemon) {
      setSelectedPokemonCurrentHp(selectedPokemon.baseStats?.hp || 0);
      setOpponentPokemonCurrentHp(opponentPokemon.baseStats?.hp || 0);
      setCanCatch(false);
      setTurn(determineInitialTurn(selectedPokemon, opponentPokemon));
      setIsActiveFight(true);
    }
  };

  const handlePokemonSelect = (value: string) => {
    if (myPokemons) {
      const selected =
        myPokemons.find((pokemon) => pokemon.name === value) || null;
      if (selected && opponentPokemon) {
        setSelectedPokemon(selected);
        setSelectedPokemonCurrentHp(selected.baseStats?.hp || 0);
        setTurn(determineInitialTurn(selected, opponentPokemon));
      }
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
    if (turn !== PlayerTurn.Player || !selectedPokemon || !opponentPokemon)
      return;

    const damage = calculateDamage(selectedPokemon, opponentPokemon);
    if (damage === 0) {
      showMessage("You missed!", 1500);
    }
    setOpponentPokemonCurrentHp((hp) => Math.max(-1, hp - damage));

    if (
      opponentPokemonCurrentHp - damage <
      0.3 * (opponentPokemon.baseStats?.hp || 0)
    ) {
      setCanCatch(true);
    }

    if (opponentPokemonCurrentHp - damage <= 0) {
      showMessage("Opponent Pokémon is defeated!", 2500);
      setOpponentPokemonCurrentHp(-1); // Ensure health is never exactly 0
      setIsActiveFight(false);
      return;
    }

    setTurn(PlayerTurn.Opponent);
  };

  const handleOpponentAttack = () => {
    if (turn !== PlayerTurn.Opponent || !selectedPokemon || !opponentPokemon)
      return;

    const damage = calculateDamage(opponentPokemon, selectedPokemon);
    if (damage === 0) {
      showMessage("Opponent missed!", 1500);
    }
    setSelectedPokemonCurrentHp((hp) => Math.max(-1, hp - damage));

    if (selectedPokemonCurrentHp - damage <= 0) {
      showMessage("Your Pokémon is defeated!", 2500);
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
    if (canCatch && opponentPokemon) {
      const catchRate = calculateCatchRate(
        opponentPokemonCurrentHp,
        opponentPokemon.baseStats?.hp || 0
      );
      const catchSuccess = Math.random() < catchRate;
      if (catchSuccess) {
        showMessage("Caught the Pokémon!", 2500);
        setIsActiveFight(false);
        setTimeout(() => {
          catchPokemon(opponentPokemon.id);
        }, 2500);
      } else {
        showMessage("Failed to catch the Pokémon.", 1500);
        setTurn(PlayerTurn.Opponent);
      }
    }
  };

  // const handleNewOpponent = () => {
  //   refetchOpponentPokemon();
  // };

  if (myPokemonsLoading || opponentPokemonLoading) {
    return <HeadingMediumRegular>Loading...</HeadingMediumRegular>;
  }

  if (myPokemonsError || opponentPokemonError) {
    return <HeadingMediumRegular>Error loading data</HeadingMediumRegular>;
  }

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
          myPokemons?.filter((pokemon) => pokemon.id !== opponentPokemon?.id) ||
            []
        )}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        disabled={isActiveFight}
        sx={PokemonDropdownStyle}
        placeholder="Choose a Pokemon"
      />
      <StyledFightArea>
        {selectedPokemon && (
          <PokemonFightCard
            cardTitle={selectedPokemon?.name}
            image={selectedPokemon?.image}
            hp={selectedPokemon?.baseStats?.hp || 0}
            currentHp={selectedPokemonCurrentHp}
            playerName="You"
            subheadText={`#${selectedPokemon?.id}`}
            cornerText={`${selectedPokemon?.baseStats?.attack}atk`}
            topCornerIcon={strengthIcon}
            style={{
              border: turn === PlayerTurn.Player ? "2px solid red" : "none",
            }}
          />
        )}
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
          <>
            <Button
              type="primary"
              size="large"
              style={FightButtonStyle}
              onClick={handleStartFight}>
              Fight
            </Button>
          </>
        )}
        {opponentPokemon && (
          <PokemonFightCard
            cardTitle={opponentPokemon?.name}
            image={opponentPokemon?.image}
            hp={opponentPokemon?.baseStats?.hp || 0}
            currentHp={opponentPokemonCurrentHp}
            playerName="Enemy"
            subheadText={`#${opponentPokemon?.id}`}
            cornerText={`${opponentPokemon?.baseStats?.attack}atk`}
            topCornerIcon={strengthIcon}
            style={{
              border: turn === PlayerTurn.Opponent ? "2px solid red" : "none",
            }}
          />
        )}
      </StyledFightArea>
      {message && <div style={MessageDivStyle}>{message}</div>}
    </StyledFightPageWrapper>
  );
};

export default FightPage;
