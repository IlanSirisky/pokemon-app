import Autocomplete from "./components/Autocomplete/Autocomplete";
import TestButtons from "./components/testComponents/TestButtons";
import TestTabs from "./components/testComponents/TestTabs";
import TestTypography from "./components/testComponents/TestTypography";
import SortBySelector from "./components/Select/Select";
import TestCards from "./components/testComponents/TestCards";
import { pokemonOptions } from "./constants/autocomplete";
import { tableSortByOptions } from "./constants/tableSortbyOptions";

function App() {
  return (
    <>
      <TestTabs />
      <Autocomplete options={pokemonOptions} placeholder="Search Pokemon" />
      <SortBySelector options={tableSortByOptions} />
      <TestCards />
      <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
