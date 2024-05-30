import MainPage from "./MainPage";
import { myPokemonsMockData } from "../../data/pokemonMockData";

const MyPokemons = () => {
  return <MainPage pokemonData={myPokemonsMockData} headerText="My Pokemons" />;
};

export default MyPokemons;
