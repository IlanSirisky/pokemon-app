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

export const transformPokemonDataToAttributes = (pokemonData: IPokemonData): IPokemonAttribute[] =>{
  return [
    { label: 'Height', value: `${pokemonData.stats.height}"` },
    { label: 'Weight', value: `${pokemonData.stats.weight} lbs` },
    { label: 'Type', value: pokemonData.type.join(', ') },
    { label: 'HP', value: pokemonData.hp.toString() },
    { label: 'Power Lvl', value: pokemonData.powerLevel.toString() },
  ];
}