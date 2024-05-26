import Autocomplete from "./components/Autocomplete/Autocomplete";
import TestButtons from "./components/testComponents/TestButtons";
import TestTypography from "./components/testComponents/TestTypography";
import { pokemonOptions } from "./constants/autocomplete";
import TestCards from "./components/testComponents/TestCards";

function App() {
  return (
    <>
      <Autocomplete options={pokemonOptions} placeholder="Search Pokemon" />
      <TestCards />
      <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
