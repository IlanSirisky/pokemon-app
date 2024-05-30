export interface IPokemonData {
  id: string;
  type: PokemonType[];
  name: string;
  avatar: string;
  imageSrc: string;
  description: string;
  stats: IPokemonPhysicalStats;
  powerLevel: PowerLevelType;
  hp: number;
  px: number;
  abilities: string[];
}

export interface IPokemonPhysicalStats {
  height: number;
  weight: number;
}

export enum PowerLevelType {
  "Power Level 1" = 1,
  "Power Level 2" = 2,
  "Power Level 3" = 3,
  "Power Level 4" = 4,
  "Power Level 5" = 5,
}

export type PokemonType =
  | "Normal"
  | "Fire"
  | "Water"
  | "Electric"
  | "Grass"
  | "Ice"
  | "Fighting"
  | "Poison"
  | "Ground"
  | "Flying"
  | "Psychic"
  | "Bug"
  | "Rock"
  | "Ghost"
  | "Dragon"
  | "Dark"
  | "Steel"
  | "Fairy";
