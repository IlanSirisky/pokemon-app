import TestButtons from "./components/testComponents/TestButtons";
import TestTypography from "./components/testComponents/TestTypography";
import PokemonBasicCard from "./components/PokemonCards/PokemonBasicCard";
import PokemonFightCard from "./components/PokemonCards/PokemonFightCard";
import BaulbasaurImg from "./assets/pokemons/Bulbasaur.png";
import PowerIcon from "./assets/icons/strength.svg";

function App() {
  return (
    <>
      <PokemonBasicCard
        name="Baulbasaur"
        id="0001"
        image={BaulbasaurImg}
        powerIcon={PowerIcon}
        power={30}
      />
      <PokemonFightCard
        pokemonName="Baulbasaur"
        id="0001"
        playerName="You"
        image={BaulbasaurImg}
        powerIcon={PowerIcon}
        power={30}
        hp={48}
      />
      <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
