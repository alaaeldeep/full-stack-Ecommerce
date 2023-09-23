/* router */
import { Outlet, useNavigate } from "react-router";

/* MUI */
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    ListItemText,
    MenuItem,
    MenuList,
    Typography,
    useMediaQuery,
} from "@mui/material";

/* styles */
import styles from "./style.module.css";

const Products = () => {
    const matches = useMediaQuery("(min-width:1070px)");
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {matches && (
                <Accordion className={styles.accordion} expanded>
                    <AccordionSummary
                        onClick={() => navigate("/Products")}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            className={styles.accordionTitle}
                            sx={{
                                fontWeight: "bold",
                                borderBottom: "2px solid",
                                fontSize: "1.2rem",
                                paddingX: "5px",
                            }}
                        >
                            Our Categories
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <MenuList>
                            <MenuItem>
                                <ListItemText
                                    onClick={() => navigate("/Products/1")}
                                >
                                    Electronics
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemText
                                    onClick={() => navigate("/Products/4")}
                                >
                                    {" "}
                                    Women's Clothes
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemText
                                    onClick={() => navigate("/Products/3")}
                                >
                                    {" "}
                                    Men's Clothes
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemText
                                    onClick={() => navigate("/Products/2")}
                                >
                                    Jewelry
                                </ListItemText>
                            </MenuItem>
                        </MenuList>
                    </AccordionDetails>
                </Accordion>
            )}

            <Outlet />
        </div>
    );
};

export default Products;
