import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import TestCards from "../testComponents/TestCards";
import PokemonHeader from "../../assets/icons/PokemonHeader.svg";
import { PagePaths, navBarOptions, endButton } from "../../constants/navBar";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import AllPokemons from "../../pages/MainPage/AllPokemons";
import MyPokemons from "../../pages/MainPage/MyPokemons";

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
        <Route path={PagePaths.ALL_POKEMONS} element={<AllPokemons />} />
        <Route path={PagePaths.MY_POKEMONS} element={<MyPokemons />} />
        <Route path={PagePaths.FIGHT} element={<TestCards />} />
        <Route path={PagePaths.REST} element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
