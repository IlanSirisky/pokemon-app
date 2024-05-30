import { IPokemonData } from "../types/pokemonTypes";

export const sortData = (data: IPokemonData[], sortBy: string) => {
  switch (sortBy) {
    case "az":
      return data.sort((a, b) => a.name.localeCompare(b.name));
    case "za":
      return data.sort((a, b) => b.name.localeCompare(a.name));
    case "powerHighToLow":
      return data.sort((a, b) => b.powerLevel - a.powerLevel);
    case "powerLowToHigh":
      return data.sort((a, b) => a.powerLevel - b.powerLevel);
    case "hpHighToLow":
      return data.sort((a, b) => b.hp - a.hp);
    case "hpLowToHigh":
      return data.sort((a, b) => a.hp - b.hp);
    default:
      return data;
  }
};
