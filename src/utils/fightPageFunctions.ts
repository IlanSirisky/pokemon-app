import { IPokemonData } from "../types/pokemonTypes";
import { typeAdvantages } from "../constants/typeAdvantages";
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

export const getRandomPokemon = (
  pokemonData: IPokemonData[],
  excludePokemon?: IPokemonData
) => {
  const filteredData = excludePokemon
    ? pokemonData.filter((pokemon) => pokemon.name !== excludePokemon.name)
    : pokemonData;
  return filteredData[Math.floor(Math.random() * filteredData.length)];
};

export const calculateDamage = (
  attacker: IPokemonData,
  defender: IPokemonData
) => {
  const baseDamage = attacker.baseStats?.power_level * 4; // Using Pokémon's power level as initial damage
  const randomFactor = Math.random() * 0.6 + 0.7; // Random factor between 0.7 and 1.3
  const typeAdvantage =
    typeAdvantages[attacker.profile.types[0]][defender.profile?.types[0]] || 1; // Type advantage multiplier
  return Math.floor(baseDamage * randomFactor * typeAdvantage); // Ensure damage is an integer
};

export const calculateCatchRate = (
  opponentHp: number,
  opponentMaxHp: number
) => {
  const baseCatchRate = 0.1; // Base catch rate is 10%
  const additionalCatchRate = opponentHp < 0.1 * opponentMaxHp ? 0.15 : 0; // Additional 15% if HP < 10%
  return baseCatchRate + additionalCatchRate;
};
