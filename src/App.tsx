import Autocomplete from "./components/Autocomplete/Autocomplete";
import TestButtons from "./components/testComponents/TestButtons";
import TestTypography from "./components/testComponents/TestTypography";
import { pokemonOptions } from "./constants/autocomplete";

function App() {
  return (
    <>
      <Autocomplete options={pokemonOptions} placeholder="Search Pokemon" />
       <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
