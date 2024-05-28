import PokemonHeader from "../../assets/icons/PokemonHeader.svg";
import Button from "../Button/Button";
import { StyledMenu, StyledNavBar, ButtonsContainer } from "./styles";

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledMenu>
        <img src={PokemonHeader} alt="Pokemon Header" />
        <ButtonsContainer>
          <Button type="tertiary" size="small">
            All Pokemons
          </Button>
          <Button type="tertiary" size="small">
            My Pokemons
          </Button>
        </ButtonsContainer>
      </StyledMenu>
      <Button type="primary" size="large">
        Start a Fight
      </Button>
    </StyledNavBar>
  );
};
export default NavBar;
