import { PokemonType } from "../types/pokemonTypes";

export const COLORS = {
  Neutrals: {
    White: "#FFFFFF",
    N100: "#F2F5F7",
    N200: "#A8AEB5",
    N300: "#5A6066",
    N400: "#44484C",
    N500: "#2D3033",
  },
  Primary: {
    P50: "#EBEFF6",
    P100: "#B1BDDB",
    P200: "#627BB8",
    P300: "#3B5AA6",
    P400: "#293F74",
    P500: "#182442",
  },
  Secondary: {
    S100: "#FFFAE6",
    S200: "#FFE069",
    S300: "#FFCB05",
    S400: "#CCA204",
    S500: "#4C3D01",
  },
};

export const MISC_COLORS = {
  HealthBar: {
    green: "#87c877",
    orange: "#ff9800",
    red: "#dc004e",
    backgroundGreen: "#c4d6c0",
  },
  boxShadow: "#00000040",
  ModalBoxShadow: "#71787f1a",
  cardImageBackground: "#EBEFF699",
};

export const typeColorMapping: { [key in PokemonType]: string } = {
  Normal: "#A8A77A",
  Fire: "#EE8130",
  Water: "#6390F0",
  Electric: "#F7D02C",
  Grass: "#7AC74C",
  Ice: "#96D9D6",
  Fighting: "#C22E28",
  Poison: "#A33EA1",
  Ground: "#E2BF65",
  Flying: "#A98FF3",
  Psychic: "#F95587",
  Bug: "#A6B91A",
  Rock: "#B6A136",
  Ghost: "#735797",
  Dragon: "#6F35FC",
  Dark: "#705746",
  Steel: "#B7B7CE",
  Fairy: "#D685AD",
};
