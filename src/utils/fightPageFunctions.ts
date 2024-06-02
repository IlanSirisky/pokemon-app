import { IPokemonData, PokemonType } from "../types/pokemonTypes";
import { typeAdvantages } from "../types/pokemonTypes";

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

export const calculateDamage = (
  attacker: IPokemonData,
  defender: IPokemonData
) => {
  const baseDamage = attacker.powerLevel * 4; // Using Pokémon's power level as initial damage
  const randomFactor = Math.random() * 0.6 + 0.7; // Random factor between 0.7 and 1.3
  return Math.floor(baseDamage * randomFactor); // Ensure damage is an integer
};

export const calculateCatchRate = (
  opponentHp: number,
  opponentMaxHp: number
) => {
  const baseCatchRate = 0.1; // Base catch rate is 10%
  const additionalCatchRate = opponentHp < 0.2 * opponentMaxHp ? 0.1 : 0; // Additional 10% if HP < 20%
  return baseCatchRate + additionalCatchRate;
};
