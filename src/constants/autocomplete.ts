import caterpie from "../assets/pokemons/caterpie.svg";
import { AutocompleteOptionsType } from "../types/optionsTypes";

export const pokemonOptions: AutocompleteOptionsType[] = [
  {
    value: "option1",
    label: "Option 1",
    avatar: caterpie,
    endText: "20px",
  },
  {
    value: "option2",
    label: "Option 2",
    avatar: "https://via.placeholder.com/150",
    endText: "End 2",
  },
  {
    value: "option3",
    label: "Option 3",
    avatar: "https://via.placeholder.com/150",
    endText: "End 3",
  },
];
