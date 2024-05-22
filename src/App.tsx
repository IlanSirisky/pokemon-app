import TestButtons from "./components/testComponents/TestButtons";
import TestTypography from "./components/testComponents/TestTypography";
import DropdownItem from "./components/DropdownItem/DropdownItem";

function App() {
  return (
    <>
      <DropdownItem
        text="Power (High to low)"
        onClick={() => console.log("Sort option clicked")}
      />
      <DropdownItem
        avatar="https://www.w3schools.com/howto/img_avatar.png"
        text="Avatar"
        endText={"22px"}
        onClick={() => console.log("Caterpie clicked")}
      />
      <TestButtons />
      <TestTypography />
    </>
  );
}

export default App;
