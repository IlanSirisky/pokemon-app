import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import {
  StyledMenu,
  StyledNavBar,
  ButtonsContainer,
  ActiveButtonStyle,
} from "./styles";
import { INavBarOptions } from "./types";

interface NavBarProps {
  pathOptions: INavBarOptions[];
  endButton: INavBarOptions;
  headerImage: string;
}

const NavBar = ({ pathOptions, endButton, headerImage }: NavBarProps) => {
  const location = useLocation();

  return (
    <StyledNavBar>
      <StyledMenu>
        <Link to="/">
          <img src={headerImage} alt="Header image" />
        </Link>
        <ButtonsContainer>
          {pathOptions.map((option) => (
            <Link to={option.path} key={option.label}>
              <Button
                type="tertiary"
                size="small"
                style={
                  location.pathname === option.path ? ActiveButtonStyle : {}
                }>
                {option.label}
              </Button>
            </Link>
          ))}
        </ButtonsContainer>
      </StyledMenu>
      <Link to={endButton.path}>
        <Button type="primary" size="large">
          {endButton.label}
        </Button>
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
