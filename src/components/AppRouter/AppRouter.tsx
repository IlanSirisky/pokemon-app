import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import PokemonHeader from "../../assets/icons/PokemonHeader.svg";
import {
  PagePaths,
  navBarOptions,
  endButton,
} from "../../constants/navBarConstants";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import AllPokemons from "../../pages/MainPage/AllPokemons";
import MyPokemons from "../../pages/MainPage/MyPokemons";
import FightPage from "../../pages/FightPage/FightPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

const AppRouter = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== PagePaths.LOGIN && (
        <NavBar
          headerImage={PokemonHeader}
          pathOptions={navBarOptions}
          endButton={endButton}
        />
      )}
      <Routes>
        <Route
          path={PagePaths.HOME}
          element={<Navigate to={PagePaths.ALL_POKEMONS} />}
        />
        <Route path={PagePaths.ALL_POKEMONS} element={<AllPokemons />} />
        <Route path={PagePaths.MY_POKEMONS} element={<MyPokemons />} />
        <Route path={PagePaths.FIGHT} element={<FightPage />} />
        <Route path={PagePaths.LOGIN} element={<LoginPage />} />
        <Route path={PagePaths.REST} element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
