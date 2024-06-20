import { useContext, useState } from "react";

import { Button as MUIButton, Menu, MenuItem } from "@mui/material";
import { loginButtonStyles } from "./styles";
import { COLORS } from "../../styles/colors";
import { AuthContext } from "../../contexts/AuthContext";

interface UserMenuProps {
  userName?: string;
}

const UserMenu = ({ userName }: UserMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { logout } = useContext(AuthContext);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
        }}
        sx={{mt:1}}>
          
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
