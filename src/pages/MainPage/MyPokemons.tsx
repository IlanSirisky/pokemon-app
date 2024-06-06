import MainPage from "./MainPage";
import pokemonsMockData from "../../data/pokemonMockData";

const MyPokemons = () => {
  const myPokemonsData = pokemonsMockData.filter((pokemon) => pokemon.isOwned);
  return <MainPage pokemonData={myPokemonsData} headerText="My Pokemons" />;
};

export default MyPokemons;
