import { IPokemonData } from "../types/pokemonTypes";

const pokemonsMockData: IPokemonData[] = [
  {
    id: "001",
    type: ["Grass"],
    name: "Bulbasaur",
    avatar: "../../public/images/pokemon/BulbasaurAvatar.svg",
    imageSrc: "../../public/images/pokemon/Bulbasaur.svg",
    description: "Grass-type Pokémon",
    stats: {
      height: 0.4,
      weight: 6,
    },
    powerLevel: "3",
    hp: 35,
    px: 35,
    abilities: ["Static", "Lightning Rod"],
  },
  {
    id: "002",
    type: ["Water"],
    name: "Wartortle",
    avatar: "../../public/images/pokemon/WarturtleAvatar.svg",
    imageSrc: "../../public/images/pokemon/Warturtle.svg",
    description: "Water-type Pokémon",
    stats: {
      height: 0.5,
      weight: 9,
    },
    powerLevel: "5",
    hp: 35,
    px: 55,
    abilities: ["Torrent", "Rain Dish"],
  },
  {
    id: "003",
    type: ["Ground"],
    name: "Caterpie",
    avatar: "../../public/images/pokemon/CaterpieAvatar.svg",
    imageSrc: "../../public/images/pokemon/Caterpie.svg",
    description: "Ground-type Pokémon",
    stats: {
      height: 0.6,
      weight: 8.5,
    },
    powerLevel: "1",
    hp: 45,
    px: 25,
    abilities: ["Blaze", "Solar Power"],
  },
];

export default pokemonsMockData;
