export interface PokemonInterface {
  id: string;
  type: PokemonType[];
  name: string;
  avatar: string;
  imageSrc: string;
  description: string;
  stats: PokemonPhysicalStats;
  powerLevel: PowerLevelType;
  hp: number;
  px: number;
  abilities: string[];
}

export interface PokemonPhysicalStats {
  height: number;
  weight: number;
}

export type PowerLevelType = "1" | "2" | "3" | "4" | "5";

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
