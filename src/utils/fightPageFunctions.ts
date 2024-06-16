import { IPokemonData } from "../types/pokemonTypes";
import { PlayerTurn } from "../pages/FightPage/types";

export const calculateHealthPercentage = (
  healthStatus: number,
  maxHealth: number
): number => {
  return (healthStatus / maxHealth) * 100;
};

export const getColor = (healthPercentage: number) => {
  if (healthPercentage > 50) {
    return "success";
  } else if (healthPercentage > 20) {
    return "warning";
  } else {
    return "secondary";
  }
};

export const determineInitialTurn = (
  selectedPokemon: IPokemonData | null,
  opponentPokemon: IPokemonData | null
): PlayerTurn => {
  const selectedSpAttack = selectedPokemon?.baseStats?.sp_attack || 0;
  const opponentSpAttack = opponentPokemon?.baseStats?.sp_attack || 0;
  return selectedSpAttack >= opponentSpAttack
    ? PlayerTurn.Player
    : PlayerTurn.Opponent;
};
