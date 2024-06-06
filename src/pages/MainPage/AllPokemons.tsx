import MainPage from "./MainPage";
import pokemonsMockData from "../../data/pokemonMockData";

const AllPokemons = () => {
  return <MainPage pokemonData={pokemonsMockData} headerText="All Pokemons" />;
};

export default AllPokemons;
