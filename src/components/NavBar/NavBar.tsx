import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import {
  StyledMenu,
  StyledNavBar,
  ButtonsContainer,
  ActiveButtonStyle,
  EndContainer,
  loginButtonStyles,
} from "./styles";
import { INavBarOptions } from "./types";
import { useEffect, useState } from "react";
import { deleteToken, getToken } from "../../utils/tokenFunctions";
import { PagePaths } from "../../constants/navBar";

interface NavBarProps {
  pathOptions: INavBarOptions[];
  endButton: INavBarOptions;
  headerImage: string;
}

const NavBar = ({ pathOptions, endButton, headerImage }: NavBarProps) => {
  const [userName, setUserName] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUserName(decodedToken.username);
    }
  }, []);

  const handleLogout = () => {
    deleteToken();
    navigate(PagePaths.LOGIN);
  };

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
        <Button type="secondary" size="large" style={loginButtonStyles}>
          {userName && userName[0].toUpperCase()}
        </Button>
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
