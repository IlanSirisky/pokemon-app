import { SortByValues } from "../constants/tableSortbyOptions";
import { IPokemonData } from "../types/pokemonTypes";

export const sortData = (data: IPokemonData[], sortBy: string) => {
  switch (sortBy) {
    case SortByValues.AZ:
      return data.sort((a, b) => a.name.localeCompare(b.name));
    case SortByValues.ZA:
      return data.sort((a, b) => b.name.localeCompare(a.name));
    case SortByValues.POWER_HIGH_TO_LOW:
      return data.sort((a, b) => b.powerLevel - a.powerLevel);
    case SortByValues.POWER_LOW_TO_HIGH:
      return data.sort((a, b) => a.powerLevel - b.powerLevel);
    case SortByValues.HP_HIGH_TO_LOW:
      return data.sort((a, b) => b.hp - a.hp);
    case SortByValues.HP_LOW_TO_HIGH:
      return data.sort((a, b) => a.hp - b.hp);
    default:
      return data.sort((a, b) => a.id.localeCompare(b.id));
  }
};
