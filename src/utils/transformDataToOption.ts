import { AutocompleteOptionsType } from "../types/optionsTypes";
import { IPokemonData } from "../types/pokemonTypes";

export const transformPokemonDataToOption = (
  data: IPokemonData[]
): AutocompleteOptionsType[] => {
  return data.map((pokemon) => ({
    value: pokemon.id,
    label: pokemon.name,
    avatar: pokemon.avatar,
    endText: `${pokemon.px}px`,
  }));
};
