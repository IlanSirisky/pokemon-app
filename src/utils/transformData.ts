import { IPokemonAttribute } from "../features/PokemonModalCard/types";
import { AutocompleteOptionsType } from "../types/optionsTypes";
import { IPokemonData } from "../types/pokemonTypes";

export const transformPokemonDataToOption = (
  data: IPokemonData[]
): AutocompleteOptionsType[] => {
  return data.map((pokemon) => ({
    value: `${pokemon.id}`,
    label: pokemon.name,
    avatar: pokemon.image,
    endText: `${pokemon.baseStats?.attack} atk`,
  }));
};

export const transformPokemonDataToAttributes = (
  pokemonData: IPokemonData
): IPokemonAttribute[] => {
  return [
    { label: "Height", value: `${pokemonData.profile?.height}` },
    { label: "Weight", value: `${pokemonData.profile?.weight}` },
    { label: "Type", value: `${pokemonData.profile?.types}` },
    { label: "Abilities", value: `${pokemonData.profile?.ability}` },
  ];
};
