/*react staff & router */

import { useNavigate } from "react-router-dom";

/* MUI */
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { Email } from "@mui/icons-material";

/* styles */
import styles from "./styles.module.css";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <div className={styles.footerContainer}>
                            {/* logo */}
                            <div className={styles.logoWrapper}>
                                <div
                                    className={styles.logoContainer}
                                    onClick={() => navigate("/")}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img
                                        src="../../../public/1200px-Shop.svg.png"
                                        alt=""
                                        height={40}
                                    />
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
                                <p>At SHOPFY, we want to solve Lorem</p>
                            </div>{" "}
                            {/* links-col1 */}
                            <div>
                                <h4> USEFULL LINKS</h4>
                                <a>Trending</a>
                                <div>Best Selling</div>
                                <div>New Arrival</div>
                                <div>Recommended</div>
                            </div>
                            {/* links-col2 */}
                            <div>
                                {" "}
                                <h4>USEFULL LINKS</h4>
                                <a>Products</a>
                                <div>Jewlery</div>
                                <div>Men's cloths</div>
                                <div>Women's cloths</div>
                            </div>
                            {/* links-col3 */}
                            <div>
                                {" "}
                                <h4>CONTACT</h4>
                                <div className={styles.contactLink}>
                                    {" "}
                                    <HomeIcon />
                                    Cairo, Egypt
                                </div>
                                <div className={styles.contactLink}>
                                    {" "}
                                    <Email />
                                    info@example.com
                                </div>
                                <div>
                                    <AddIcCallIcon /> (+01) 912-34568
                                </div>
                                <div className={styles.contactLink}>
                                    {" "}
                                    <LocalPrintshopIcon />
                                    (+01) 919-99968
                                </div>
                            </div>
                        </div>
                    </Toolbar>
                </Container>
                <Toolbar
                    disableGutters
                    sx={{ backgroundColor: "background.default" }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            width: "100%",
                        }}
                    >
                        © 2023 Copyright : ALAA_ELDEEP
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Footer;
