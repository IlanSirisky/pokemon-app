import TestButtons from "./components/testComponents/TestButtons";
import TestTypography from "./components/testComponents/TestTypography";
import InputField from "./components/InpuField/InputField";
import React from "react";

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
        onClear={handleClear}
      />
      <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
