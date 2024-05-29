import { Link, useLocation } from "react-router-dom";
import PokemonHeader from "../../assets/icons/PokemonHeader.svg";
import Button from "../Button/Button";
import { StyledMenu, StyledNavBar, ButtonsContainer, ActiveButtonStyle } from "./styles";

const NavBar = () => {
  const location = useLocation();

  return (
    <StyledNavBar>
      <StyledMenu>
        <Link to="/">
          <img src={PokemonHeader} alt="Pokemon Header" />
        </Link>
        <ButtonsContainer>
          <Link to="/all-pokemons">
            <Button
              type="tertiary"
              size="small"
              style={location.pathname === "/all-pokemons" ? ActiveButtonStyle : {}}>
              All Pokemons
            </Button>
          </Link>
          <Link to="/my-pokemons">
            <Button
              type="tertiary"
              size="small"
              style={location.pathname === "/my-pokemons" ? ActiveButtonStyle : {}}>
              My Pokemons
            </Button>
          </Link>
        </ButtonsContainer>
      </StyledMenu>
      <Link to="/fight">
        <Button type="primary" size="large">
          Start a Fight
        </Button>
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
