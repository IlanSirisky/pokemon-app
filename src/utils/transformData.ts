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

export const transformPokemonDataToProfileAttributes = (
  pokemonData: IPokemonData
): IPokemonAttribute[] => {
  return [
    { label: "Height", value: `${pokemonData.profile?.height}` },
    { label: "Weight", value: `${pokemonData.profile?.weight}` },
    { label: "Type", value: `${pokemonData.profile?.types}` },
    { label: "Abilities", value: `${pokemonData.profile?.ability}` },
  ];
};

export const transformPokemonDataToStatsAttributes = (
  pokemonData: IPokemonData
): IPokemonAttribute[] => {
  return [
    { label: "HP", value: `${pokemonData.baseStats?.hp}` },
    { label: "Attack", value: `${pokemonData.baseStats?.attack}` },
    { label: "Defense", value: `${pokemonData.baseStats?.defense}` },
    { label: "Speed", value: `${pokemonData.baseStats?.speed}` },
  ];
};
