import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import Button from "../Button/Button";
import {
  StyledMenu,
  StyledNavBar,
  ButtonsContainer,
  ActiveButtonStyle,
  EndContainer,
} from "./styles";
import { INavBarOptions } from "./types";
import UserMenu from "../UserMenu/UserMenu";
import { AuthContext } from "../../contexts/AuthContext";

interface NavBarProps {
  pathOptions: INavBarOptions[];
  endButton: INavBarOptions;
  headerImage: string;
}

const NavBar = ({ pathOptions, endButton, headerImage }: NavBarProps) => {
  const { user } = useContext(AuthContext);
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
      <EndContainer>
        <UserMenu userName={user?.username} />
        <Link to={endButton.path}>
          <Button type="primary" size="large">
            {endButton.label}
          </Button>
        </Link>
      </EndContainer>
    </StyledNavBar>
  );
};

export default NavBar;
