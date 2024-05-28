import Autocomplete from "./components/Autocomplete/Autocomplete";
import TestButtons from "./components/testComponents/TestButtons";
import TestTabs from "./components/testComponents/TestTabs";
import TestTypography from "./components/testComponents/TestTypography";
import SortBySelector from "./components/Select/Select";
import TestCards from "./components/testComponents/TestCards";
import { pokemonOptions } from "./constants/autocomplete";
import { tableSortByOptions } from "./constants/tableSortbyOptions";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      {/* <TestTabs /> */}
      {/* <Autocomplete options={pokemonOptions} placeholder="Search Pokemon" />
      <SortBySelector options={tableSortByOptions} />
      <TestCards />
      <TestTypography /> */}
      {/* <TestButtons /> */}
    </>
  );
}

export default App;
