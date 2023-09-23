/* MUI */
import { Menu } from "@mui/material";

const MenuHandler = ({ anchorElement, children, handleCloseMenu }: any) => {
    return (
        <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElement}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={Boolean(anchorElement)}
            onClose={handleCloseMenu}
        >
            {children}
        </Menu>
    );
};

export default MenuHandler;
