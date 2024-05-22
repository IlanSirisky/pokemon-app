import TestButtons from "./components/testComponents/TestButtons";
import TestTypography from "./components/testComponents/TestTypography";
import Tab from "./components/Tab/Tab";
import listView from "./assets/icons/listView.svg";
import cardView from "./assets/icons/cardView.svg";

function App() {
  return (
    <>
      <Tab text="List" img={listView} />
      <Tab text="Cards" img={cardView} />
      <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
