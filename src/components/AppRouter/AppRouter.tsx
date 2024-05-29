import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import TestTabs from "../testComponents/TestTabs";
import TestButtons from "../testComponents/TestButtons";
import PokemonHeader from "../../assets/icons/PokemonHeader.svg";
import { PagePaths, navBarOptions, endButton } from "../../constants/navBar";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FightPage from "../../pages/FightPage/FightPage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar
        headerImage={PokemonHeader}
        pathOptions={navBarOptions}
        endButton={endButton}
      />
      <Routes>
        <Route
          path={PagePaths.HOME}
          element={<Navigate to={PagePaths.ALL_POKEMONS} />}
        />
        <Route path={PagePaths.ALL_POKEMONS} element={<TestTabs />} />
        <Route path={PagePaths.MY_POKEMONS} element={<TestButtons />} />
        <Route path={PagePaths.FIGHT} element={<FightPage />} />
        <Route path={PagePaths.REST} element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
