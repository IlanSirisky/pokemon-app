import SortBySelector from "./components/Select/Select";
import TestButtons from "./components/testComponents/TestButtons";
import TestTypography from "./components/testComponents/TestTypography";
import { tableSortByOptions } from "./constants/tableSortbyOptions";

function App() {
  return (
    <>
      <SortBySelector options={tableSortByOptions} />
      <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
