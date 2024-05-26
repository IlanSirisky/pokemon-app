import SortBySelector from "./components/Select/Select";
import TestButtons from "./components/testComponents/TestButtons";
import TestTypography from "./components/testComponents/TestTypography";
import { tableSortByOptions } from "./constants/tableSortbyOptions";
import TestCards from "./components/testComponents/TestCards";

function App() {
  return (
    <>
      <SortBySelector options={tableSortByOptions} />
      <TestCards />
      <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
