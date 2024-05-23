import PokemonAutocomplete from "./components/Autocomplete/PokemonAutocomplete";
// import TestButtons from "./components/testComponents/TestButtons";
// import TestTypography from "./components/testComponents/TestTypography";

const options = [
  {
    value: "option1",
    label: "Option 1",
    avatar: "https://via.placeholder.com/150",
    endText: "20px",
  },
  {
    value: "option2",
    label: "Option 2",
    avatar: "https://via.placeholder.com/150",
    endText: "End 2",
  },
  {
    value: "option3",
    label: "Option 3",
    avatar: "https://via.placeholder.com/150",
    endText: "End 3",
  },
];

function App() {
  return (
    <>
      <PokemonAutocomplete options={options}></PokemonAutocomplete>
      {/* <TestButtons />
      <TestTypography /> */}
    </>
  );
}

export default App;
