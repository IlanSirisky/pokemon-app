import { IPokemonAttribute } from "../features/PokemonModalCard/types";
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

export const transformPokemonDataToAttributes = (pokemonData: any): IPokemonAttribute[] =>{
  return [
    { label: 'Height', value: `${pokemonData.height}` },
    { label: 'Weight', value: `${pokemonData.weight}` },
    { label: 'Type', value: pokemonData.types },
    { label: 'Abilities', value: pokemonData.abilities },
  ];
}