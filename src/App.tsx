import TestButtons from "./components/testComponents/TestButtons";
import TestTabs from "./components/testComponents/TestTabs";
import TestCards from "./components/testComponents/TestCards";
import TestAvatar from "./components/testComponents/TestAvatar";
import TestAutocomplete from "./components/testComponents/TestAutocomplete";
import TestSelect from "./components/testComponents/TestSelect";

function App() {
  return (
    <>
      <TestTabs />
      <TestAutocomplete />
      <TestSelect />
      <TestAvatar />
      <TestCards />
      <TestButtons />
    </>
  );
}

export default App;
