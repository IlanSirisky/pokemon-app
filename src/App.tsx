import SortBySelector from "./components/SortBySelector/SortBySelector";
// import TestButtons from "./components/testComponents/TestButtons";
// import TestTypography from "./components/testComponents/TestTypography";

const options = [
  { value: "az", label: "Alphabetical A-Z" },
  { value: "za", label: "Alphabetical Z-A" },
  { value: "powerHighToLow", label: "Power (High to low)" },
  { value: "powerLowToHigh", label: "Power (Low to high)" },
  { value: "hpHighToLow", label: "HP (High to low)" },
  { value: "hpLowToHigh", label: "HP (Low to high)" },
];

function App() {
  return (
    <>
      <SortBySelector options={options} />
      {/* <TestButtons />
      <TestTypography /> */}
    </>
  );
}

export default App;
