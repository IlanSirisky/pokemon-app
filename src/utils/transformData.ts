import { IPokemonAttribute } from "../features/PokemonModalCard/types";
import { typeColorMapping } from "../styles/colors";
import { AutocompleteOptionsType } from "../types/optionsTypes";
import {
  IPokemonData,
  PokemonType,
  PokemonTypesCount,
} from "../types/pokemonTypes";

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

// Transform the data to the format required by Nivo Pie
export const transformPokemonDataToPieChart = (data: PokemonTypesCount) => {
  return Object.entries(data).map(([type, count]) => ({
    id: type,
    label: type,
    value: count,
    color: typeColorMapping[type as PokemonType],
  }));
};
