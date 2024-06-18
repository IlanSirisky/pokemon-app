import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import {
  StyledMenu,
  StyledNavBar,
  ButtonsContainer,
  ActiveButtonStyle,
  EndContainer,
} from "./styles";
import { INavBarOptions } from "./types";
import { getToken } from "../../utils/tokenFunctions";
import UserMenu from "../UserMenu/UserMenu";

interface NavBarProps {
  pathOptions: INavBarOptions[];
  endButton: INavBarOptions;
  headerImage: string;
}

const NavBar = ({ pathOptions, endButton, headerImage }: NavBarProps) => {
  const [userName, setUserName] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUserName(decodedToken.username);
    }
  }, []);

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
        <UserMenu userName={userName} />
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
