import TestButtons from "./components/testComponents/TestButtons";
import TestTypography from "./components/testComponents/TestTypography";
import PokemonBasicCard from "./components/PokemonCards/PokemonBasicCard";
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
      <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
