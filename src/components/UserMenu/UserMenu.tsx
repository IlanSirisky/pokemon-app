import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../../utils/tokenFunctions";
import { PagePaths } from "../../constants/navBar";
import { Button as MUIButton, Menu, MenuItem } from "@mui/material";
import { loginButtonStyles } from "./styles";
import { COLORS } from "../../styles/colors";

interface UserMenuProps {
  userName?: string;
}

const UserMenu = ({ userName }: UserMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    deleteToken();
    navigate(PagePaths.LOGIN);
  };

  return (
    <>
      <MUIButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        disableRipple
        sx={{
          ...loginButtonStyles,
          "&:hover": {
            backgroundColor: `${COLORS.Primary.P50}`,
          },
          "&:active": {
            backgroundColor: `${COLORS.Primary.P100}`,
          },
        }}>
        {userName && userName[0].toUpperCase()}
      </MUIButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
