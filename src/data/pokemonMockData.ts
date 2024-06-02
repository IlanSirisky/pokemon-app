import { IPokemonData } from "../types/pokemonTypes";

const pokemonsMockData: IPokemonData[] = [
  {
    id: "#001",
    type: ["Grass"],
    name: "Bulbasaur",
    avatar: "../../public/images/pokemon/BulbasaurAvatar.svg",
    imageSrc: "../../public/images/pokemon/Bulbasaur.svg",
    description: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
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
    id: "#002",
    type: ["Water"],
    name: "Warturtle",
    avatar: "../../public/Images/pokemon/WarturtleAvatar.svg",
    imageSrc: "../../public/Images/pokemon/Warturtle.svg",
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
    id: "#003",
    type: ["Ground"],
    name: "Caterpie",
    avatar: "../../public/Images/pokemon/CaterpieAvatar.svg",
    imageSrc: "../../public/Images/pokemon/Caterpie.svg",
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
  {
    id: "#004",
    type: ["Fire"],
    name: "Charmander",
    avatar: "../../public/images/pokemon/CharmanderAvatar.svg",
    imageSrc: "../../public/images/pokemon/Charmander.svg",
    description: "Fire-type Pokémon",
    stats: {
      height: 0.6,
      weight: 8.5,
    },
    powerLevel: "4",
    hp: 39,
    px: 50,
    abilities: ["Blaze", "Solar Power"],
  },
  {
    id: "#005",
    type: ["Poison"],
    name: "Kakuna",
    avatar: "../../public/images/pokemon/KakunaAvatar.svg",
    imageSrc: "../../public/images/pokemon/Kakuna.svg",
    description: "Poison-type Pokémon",
    stats: {
      height: 0.6,
      weight: 10,
    },
    powerLevel: "2",
    hp: 45,
    px: 30,
    abilities: ["Shed Skin"],
  },
  {
    id: "#006",
    type: ["Flying"],
    name: "Pidgey",
    avatar: "../../public/images/pokemon/PidgeyAvatar.svg",
    imageSrc: "../../public/images/pokemon/Pidgey.svg",
    description: "Flying-type Pokémon",
    stats: {
      height: 0.3,
      weight: 1.8,
    },
    powerLevel: "2",
    hp: 40,
    px: 20,
    abilities: ["Keen Eye", "Tangled Feet"],
  },
  {
    id: "#007",
    type: ["Fire"],
    name: "Charizard",
    avatar: "../../public/images/pokemon/CharizardAvatar.svg",
    imageSrc: "../../public/images/pokemon/Charizard.svg",
    description: "Fire-type Pokémon",
    stats: {
      height: 1.7,
      weight: 90.5,
    },
    powerLevel: "5",
    hp: 78,
    px: 84,
    abilities: ["Blaze", "Solar Power"],
  },
  {
    id: "#008",
    type: ["Normal"],
    name: "Rattata",
    avatar: "../../public/images/pokemon/RattataAvatar.svg",
    imageSrc: "../../public/images/pokemon/Rattata.svg",
    description: "Normal-type Pokémon",
    stats: {
      height: 0.3,
      weight: 3.5,
    },
    powerLevel: "1",
    hp: 30,
    px: 20,
    abilities: ["Run Away", "Guts"],
  },
  {
    id: "#009",
    type: ["Electric"],
    name: "Pikachu",
    avatar: "../../public/images/pokemon/PikachuAvatar.svg",
    imageSrc: "../../public/images/pokemon/Pikachu.svg",
    description: "Electric-type Pokémon",
    stats: {
      height: 0.4,
      weight: 6,
    },
    powerLevel: "3",
    hp: 35,
    px: 55,
    abilities: ["Static", "Lightning Rod"],
  },
  {
    id: "#010",
    type: ["Fairy"],
    name: "Clefairy",
    avatar: "../../public/images/pokemon/ClefairyAvatar.svg",
    imageSrc: "../../public/images/pokemon/Clefairy.svg",
    description: "Fairy-type Pokémon",
    stats: {
      height: 0.6,
      weight: 7.5,
    },
    powerLevel: "2",
    hp: 70,
    px: 45,
    abilities: ["Cute Charm", "Magic Guard"],
  },
];

export default pokemonsMockData;
