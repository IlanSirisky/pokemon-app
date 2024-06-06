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
  const baseAttackerAttack = attacker.baseStats?.attack || 30;
  const baseOpponentDefense = defender.baseStats?.defense || 30;
  const baseDamage = Math.floor((baseAttackerAttack * 10) / baseOpponentDefense); // Increased the multiplier for more impactful damage

  const randomFactor = Math.random() * 0.6 + 0.7; // Random factor between 0.7 and 1.3

  // Calculate type advantage
  const attackerTypes = attacker.profile?.types || [];
  const defenderTypes = defender.profile?.types || [];

  let typeAdvantage = 1;
  attackerTypes.forEach(attackerType => {
    defenderTypes.forEach(defenderType => {
      typeAdvantage *= typeAdvantages[attackerType]?.[defenderType] || 1;
    });
  });

  const missChance = Math.min(
    0.05,
    1 - (defender.baseStats?.speed || 50) / 200
  ); // Miss chance based on defender's speed, max 5%
  const hit = Math.random() >= missChance; // Determine if the attack hits

  if (!hit) {
    return 0; // Attack missed
  }

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
