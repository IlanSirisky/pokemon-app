// import TestButtons from "./components/testComponents/TestButtons";
// import TestTypography from "./components/testComponents/TestTypography";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <>
      <Filter label="Sort By" onClick={() => console.log("clicked")} />
      <Filter label="Sort By" disabled />
      {/* <TestButtons />
      <TestTypography /> */}
    </>
  );
}

export default App;
