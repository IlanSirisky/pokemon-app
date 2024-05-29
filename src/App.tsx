import TestTabs from "./components/testComponents/TestTabs";
import TestButtons from "./components/testComponents/TestButtons";
import TestCards from "./components/testComponents/TestCards";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={"/all-pokemons"} />} />
        <Route path="/all-pokemons" element={<TestTabs />} />
        <Route path="/my-pokemons" element={<TestButtons />} />
        <Route path="/fight" element={<TestCards />} />
        <Route path="*" element={<Navigate to={"/all-pokemons"} />} /> {/* add 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
