import caterpie from "../../public/Images/pokemon/CaterpieAvatar.svg";
import Baulbasaur from "../../public/Images/pokemon/BulbasaurAvatar.svg";
import Warturtle from "../../public/Images/pokemon/WarturtleAvatar.svg";
import { AutocompleteOptionsType } from "../types/optionsTypes";

export const pokemonOptions: AutocompleteOptionsType[] = [
  {
    value: "option1",
    label: "Caterpie",
    avatar: caterpie,
    endText: "25px",
  },
  {
    value: "option2",
    label: "Balbasaur",
    avatar: Baulbasaur,
    endText: "35px",
  },
  {
    value: "option3",
    label: "Warturtle",
    avatar: Warturtle,
    endText: "55px",
  },
];
