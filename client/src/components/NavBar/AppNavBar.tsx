/*react staff & router */
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

/* MUI */
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Chip,
    Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DiamondIcon from "@mui/icons-material/Diamond";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import CategoryIcon from "@mui/icons-material/Category";

/* store => client state management */

/* components */
import ToggleTheme from "./toggleTheme";
import MenuHandler from "./Menu";

/* styles */
import styles from "./styles.module.css";
import { useOwnStore } from "../../store/zustand";
/*  */

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AppNavBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [anchorElCart, setAnchorElCart] = useState<null | HTMLElement>(null);
    const [anchorElCategories, setAnchorElCategories] =
        useState<null | HTMLElement>(null);

    const products = useOwnStore((store) => store.products);
    const removeFromCart = useOwnStore((store) => store.removeFromCart);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenCategoriesMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElCategories(event.currentTarget);
    };
    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElCart(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleCloseCategoriesMenu = () => {
        setAnchorElCategories(null);
    };
    const handleCloseCartMenu = () => {
        setAnchorElCart(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* logo */}
                        <div
                            className={styles.logoContainer}
                            onClick={() => navigate("/")}
                            style={{ cursor: "pointer" }}
                        >
                            <img src="1200px-Shop.svg.png" alt="" height={40} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", md: "flex" },
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".4rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                SHOPFY
                            </Typography>
                        </div>

                        {/* menu {MOBILE ONLY} */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                                marginX: 2,
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="npm i framer-motion"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {
                                        xs: "block",
                                        md: "none",
                                    },
                                }}
                            >
                                <MenuItem
                                    sx={{ margin: "1rem" }}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate("/Products");
                                    }}
                                >
                                    {" "}
                                    <div className={styles.menuItemContainer}>
                                        <CategoryIcon />{" "}
                                        <Typography textAlign="center">
                                            Categories
                                        </Typography>
                                    </div>
                                </MenuItem>
                                <MenuItem
                                    sx={{ margin: "1rem" }}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate("/Products");
                                    }}
                                >
                                    {" "}
                                    <div className={styles.menuItemContainer}>
                                        <CategoryIcon />{" "}
                                        <Typography textAlign="center">
                                            Products
                                        </Typography>
                                    </div>
                                </MenuItem>
                                <MenuItem
                                    sx={{ margin: "1rem" }}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate("/aboutUS");
                                    }}
                                >
                                    <div className={styles.menuItemContainer}>
                                        <InfoIcon />{" "}
                                        <Typography textAlign="center">
                                            About
                                        </Typography>
                                    </div>
                                </MenuItem>
                            </Menu>
                        </Box>

                        <Box
                            sx={{
                                marginLeft: "4rem",
                                gap: "2rem",
                                flexGrow: 1,
                                alignItems: "center",
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {/* select category */}
                            <Box>
                                <Button
                                    className={styles.btnNav}
                                    sx={{
                                        margin: "20px 0px ",
                                        padding: "16px 8px",
                                        color: "tertiary",
                                        fontWeight: "bold",
                                        letterSpacing: "0.125rem",
                                    }}
                                    onClick={handleOpenCategoriesMenu}
                                    style={{}}
                                >
                                    CATEGORIES
                                </Button>
                                <MenuHandler
                                    anchorElement={anchorElCategories}
                                    handleCloseMenu={handleCloseCategoriesMenu}
                                >
                                    <MenuItem
                                        sx={{ margin: "1rem" }}
                                        onClick={() => {
                                            handleCloseCategoriesMenu();
                                            navigate("/Products/electronics");
                                        }}
                                    >
                                        <div
                                            className={styles.menuItemContainer}
                                        >
                                            <ElectricalServicesIcon />{" "}
                                            <Typography textAlign="center">
                                                electronics
                                            </Typography>
                                        </div>
                                    </MenuItem>
                                    <MenuItem
                                        sx={{ margin: "1rem" }}
                                        onClick={() => {
                                            handleCloseCategoriesMenu();
                                            navigate("/Products/jewelery");
                                        }}
                                    >
                                        <div
                                            className={styles.menuItemContainer}
                                        >
                                            {" "}
                                            <DiamondIcon />{" "}
                                            <Typography textAlign="center">
                                                jewelery
                                            </Typography>
                                        </div>
                                    </MenuItem>
                                    <MenuItem
                                        sx={{ margin: "1rem" }}
                                        onClick={() => {
                                            handleCloseCategoriesMenu();
                                            navigate(
                                                "/Products/men's clothing"
                                            );
                                        }}
                                    >
                                        <div
                                            className={styles.menuItemContainer}
                                        >
                                            <CheckroomIcon />{" "}
                                            <Typography textAlign="center">
                                                men's clothing
                                            </Typography>
                                        </div>
                                    </MenuItem>
                                    <MenuItem
                                        sx={{ margin: "1rem" }}
                                        onClick={() => {
                                            handleCloseCategoriesMenu();
                                            navigate(
                                                "/Products/women's clothing"
                                            );
                                        }}
                                    >
                                        <div
                                            className={styles.menuItemContainer}
                                        >
                                            <CheckroomIcon />{" "}
                                            <Typography textAlign="center">
                                                women's clothing
                                            </Typography>
                                        </div>
                                    </MenuItem>
                                </MenuHandler>
                            </Box>

                            {/*to products page */}

                            <Button
                                onClick={() => navigate("/Products")}
                                sx={{
                                    margin: "20px 0px ",
                                    padding: "16px 8px",
                                    color: "tertiary",
                                    fontWeight: "bold",
                                    letterSpacing: "0.125rem",
                                }}
                            >
                                PRODUCTS
                            </Button>
                            <Button
                                onClick={() => navigate("/aboutUS")}
                                sx={{
                                    margin: "20px 0px ",
                                    padding: "16px 8px",
                                    color: "tertiary",
                                    fontWeight: "bold",
                                    letterSpacing: "0.125rem",
                                }}
                            >
                                ABOUT US
                            </Button>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                gap: { md: "16px" },
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Badge
                                    onClick={handleOpenMenu}
                                    badgeContent={products.length}
                                    color="secondary"
                                    sx={{ cursor: "pointer" }}
                                >
                                    <ShoppingCartIcon color="action" />
                                </Badge>

                                <MenuHandler
                                    anchorElement={anchorElCart}
                                    handleCloseMenu={handleCloseCartMenu}
                                >
                                    {/*  */}
                                    {products.map((product) => (
                                        <MenuItem
                                            sx={{ margin: "1rem" }}
                                            key={product.id}
                                            onClick={handleCloseCartMenu}
                                        >
                                            <img
                                                style={{
                                                    maxHeight: "50px",
                                                    maxWidth: "50px",
                                                    paddingRight: "15px",
                                                }}
                                                src={product.image}
                                                alt=""
                                            />
                                            <Typography
                                                textAlign="center"
                                                sx={{
                                                    width: "200px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {product.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    backgroundColor: "#94c2e5",
                                                    padding: "2px 6px",
                                                    borderRadius: "5px",
                                                    color: "#1C5C8C",
                                                    marginLeft: "10px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                quantity : {product.quantity}{" "}
                                            </Typography>
                                            <IconButton
                                                aria-label="delete"
                                                size="large"
                                                sx={{
                                                    ml: "4px",
                                                    color: "#ff0505",
                                                }}
                                                onClick={() =>
                                                    removeFromCart(product)
                                                }
                                            >
                                                <DeleteIcon fontSize="inherit" />
                                            </IconButton>
                                        </MenuItem>
                                    ))}

                                    {products.length > 0 ? (
                                        <MenuItem
                                            sx={{
                                                margin: "1rem",
                                                display: "flex",
                                                justifyContent: "center",
                                                gap: "1rem",
                                            }}
                                            onClick={() => {
                                                handleCloseCartMenu();
                                                navigate("cart");
                                            }}
                                        >
                                            <ShoppingCartIcon fontSize="medium" />
                                        </MenuItem>
                                    ) : (
                                        <MenuItem
                                            sx={{
                                                margin: "1rem",
                                                display: "flex",
                                                justifyContent: "center",
                                                gap: "1rem",
                                            }}
                                            onClick={handleCloseCartMenu}
                                        >
                                            select something to see your cart
                                        </MenuItem>
                                    )}

                                    {/*  */}
                                </MenuHandler>
                            </Box>

                            {/* THeme Button */}
                            <ToggleTheme />

                            {/* account */}

                            {
                                <Box sx={{ flexGrow: 0 }}>
                                    <Chip
                                        label="Hi, Alaa"
                                        variant="outlined"
                                        sx={{
                                            /* height: "2.5rem", */
                                            fontSize: "16px",
                                            p: 0.5,
                                            fontWeight: "bold",
                                        }}
                                        avatar={
                                            <Avatar
                                                alt="username"
                                                src="/src/assets/322301483_885509095975940_4079840531060974005_n.jpg"
                                            />
                                        }
                                        onClick={handleOpenUserMenu}
                                    />

                                    <Menu
                                        sx={{ mt: "45px" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem
                                                sx={{ margin: "1rem" }}
                                                key={setting}
                                                onClick={handleCloseUserMenu}
                                            >
                                                <Typography textAlign="center">
                                                    {setting}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default AppNavBar;
