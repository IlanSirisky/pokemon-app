import Autocomplete from "./components/Autocomplete/Autocomplete";
import TestButtons from "./components/testComponents/TestButtons";
import TestTabs from "./components/testComponents/TestTabs";
import TestTypography from "./components/testComponents/TestTypography";
import InputField from "./components/InpuField/InputField";
import React from "react";
import SortBySelector from "./components/Select/Select";
import TestCards from "./components/testComponents/TestCards";
import { pokemonOptions } from "./constants/autocomplete";
import { tableSortByOptions } from "./constants/tableSortbyOptions";


function App() {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted:", searchValue);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <>
      <InputField
        value={searchValue}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onStartIconClick={handleSubmit}
        onEndIconClick={handleClear}
      />
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
