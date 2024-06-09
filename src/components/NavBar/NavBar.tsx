import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import {
  StyledMenu,
  StyledNavBar,
  ButtonsContainer,
  ActiveButtonStyle,
} from "./styles";
import { INavBarOptions } from "./types";
import { useCallback, useEffect, useState } from "react";

interface NavBarProps {
  pathOptions: INavBarOptions[];
  endButton: INavBarOptions;
  headerImage: string;
}

const NavBar = ({ pathOptions, endButton, headerImage }: NavBarProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scrolling down
        setIsVisible(false);
      } else {
        // if scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return (
    <StyledNavBar $isVisible={isVisible}>
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
