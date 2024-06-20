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
import { PlayerTurn } from "./types";
import { useQuery } from "@tanstack/react-query";
import {
  fetchOwnedPokemons,
  fetchRandomPokemon,
} from "../../hooks/useFetchPokemonData";
import { useHandleFight, useCatchPokemon } from "../../hooks/useHandleFight";
import { determineInitialTurn } from "../../utils/fightPageFunctions";
import arrowIcon from "../../assets/icons/ArrowIcon.svg";

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
  const { startFightMutation, playerAttackMutation, opponentAttackMutation } =
    useHandleFight();

  const {
    data: myPokemons,
    isLoading: myPokemonsLoading,
    error: myPokemonsError,
  } = useQuery({
    queryKey: ["myPokemons"],
    queryFn: fetchOwnedPokemons,
  });

  const {
    data: opponentPokemon,
    isLoading: opponentPokemonLoading,
    error: opponentPokemonError,
    refetch: refetchOpponentPokemon,
  } = useQuery({
    queryKey: ["randomPokemon", false],
    queryFn: () => fetchRandomPokemon(false),
  });

  const {
    data: randomOwnedPokemon,
    isLoading: randomOwnedPokemonLoading,
    error: randomOwnedPokemonError,
  } = useQuery({
    queryKey: ["randomPokemon", true],
    queryFn: () => fetchRandomPokemon(true),
  });

  useEffect(() => {
    if (randomOwnedPokemon && opponentPokemon) {
      if (!selectedPokemon) {
        setSelectedPokemon(randomOwnedPokemon);
        setSelectedPokemonCurrentHp(randomOwnedPokemon.baseStats?.hp || 0);
      }
      setOpponentPokemonCurrentHp(opponentPokemon.baseStats?.hp || 0);
      setTurn(determineInitialTurn(randomOwnedPokemon, opponentPokemon));
    }
  }, [randomOwnedPokemon, opponentPokemon]);

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
      startFightMutation.mutate(
        {
          playerPokemonId: selectedPokemon.id,
          opponentPokemonId: opponentPokemon.id,
        },
        {
          onSuccess: (data) => {
            setSelectedPokemonCurrentHp(data.data.playerCurrentHp);
            setOpponentPokemonCurrentHp(data.data.opponentCurrentHp);
            setTurn(
              determineInitialTurn(
                data.data.playerPokemon,
                data.data.opponentPokemon
              )
            );
            setIsActiveFight(true);
            setCanCatch(false);
          },
        }
      );
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
    if (turn !== PlayerTurn.Player) return;

    playerAttackMutation.mutate(undefined, {
      onSuccess: (data) => {
        if (data.data.opponentCurrentHp <= 0) {
          setOpponentPokemonCurrentHp(-1);
          showMessage("Opponent Pokémon is defeated!", 2500);
          setIsActiveFight(false);
          return;
        }
        setOpponentPokemonCurrentHp(data.data.opponentCurrentHp);
        setTurn(PlayerTurn.Opponent);

        if (data.data.opponentCurrentHp === opponentPokemonCurrentHp) {
          showMessage("Your attack missed!", 1500);
        }

        if (
          data.data.opponentCurrentHp <
          0.3 * (opponentPokemon?.baseStats?.hp || 30)
        ) {
          setCanCatch(true);
        }
      },
    });
  };

  const handleOpponentAttack = () => {
    if (turn !== PlayerTurn.Opponent) return;

    opponentAttackMutation.mutate(undefined, {
      onSuccess: (data) => {
        if (data.data.playerCurrentHp <= 0) {
          setSelectedPokemonCurrentHp(-1);
          showMessage("Your Pokémon is defeated!", 2500);
          setIsActiveFight(false);
          return;
        }
        setSelectedPokemonCurrentHp(data.data.playerCurrentHp);
        setTurn(PlayerTurn.Player);

        if (data.data.playerCurrentHp === selectedPokemonCurrentHp) {
          showMessage("Opponent's attack missed!", 1500);
        }
      },
    });
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
      catchPokemon(undefined, {
        onSuccess: (data) => {
          if (data.data.caught) {
            showMessage("Caught the Pokémon!", 2500);
            setIsActiveFight(false);
          } else {
            showMessage("Failed to catch the Pokémon.", 1500);
            setTurn(PlayerTurn.Opponent);
          }
        },
      });
    }
  };

  const handleNewOpponent = () => {
    refetchOpponentPokemon();
  };

  if (
    myPokemonsLoading ||
    opponentPokemonLoading ||
    randomOwnedPokemonLoading
  ) {
    return <HeadingMediumRegular>Loading...</HeadingMediumRegular>;
  }

  if (myPokemonsError || opponentPokemonError || randomOwnedPokemonError) {
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
        arrowIcon={arrowIcon}
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
              boxShadow:
                turn === PlayerTurn.Player ? "0px 0px 0px 2px red" : "none",
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
            opponent
            activeFight={isActiveFight}
            onClick={handleNewOpponent}
            style={{
              boxShadow:
                turn === PlayerTurn.Opponent ? "0px 0px 0px 2px red" : "none",
            }}
          />
        )}
      </StyledFightArea>
      {message && <div style={MessageDivStyle}>{message}</div>}
    </StyledFightPageWrapper>
  );
};

export default FightPage;
