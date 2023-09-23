/* react staff */
import { useState } from "react";

/* MUI */
import { Box, Button, Typography, Modal, IconButton } from "@mui/material";
import SellIcon from "@mui/icons-material/Sell";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

/* store */

/* types */
import { Product } from "../model";

/* styles */
import styles from "./styles.module.css";
import { useOwnStore } from "../../../store/zustand";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",

    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
    scrollbars,
};

type ModalProps = {
    open: boolean;
    productDetails: Product;
    handleClose: () => void;
};
export default function CustomModal({
    open,
    handleClose,
    productDetails,
}: ModalProps) {
    const [quantity, setQuantity] = useState(1);
    const addToCart = useOwnStore((store) => store.addToCart);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.productContainer}>
                        <img
                            src={productDetails.pictureUrl}
                            alt=""
                            height={300}
                            className={styles.productImage}
                        />
                        <div className={styles.productData}>
                            <h1>{productDetails.title}</h1>
                            <Typography>
                                <span className={styles.productLabel}>
                                    category :
                                </span>{" "}
                                {productDetails.productType}
                            </Typography>
                            <Typography
                                sx={{
                                    background: "primary.main",
                                    padding: "5px",
                                }}
                            >
                                <span className={styles.productLabel}>
                                    Discription
                                </span>
                                : {productDetails.description}
                            </Typography>{" "}
                            <Typography
                                sx={{
                                    background: "primary.main",
                                    padding: "5px",
                                }}
                            >
                                <div>
                                    {/* decrease */}
                                    <IconButton
                                        onClick={() => {
                                            if (quantity > 1)
                                                setQuantity((prev) => prev - 1);
                                        }}
                                    >
                                        <RemoveIcon
                                            sx={{ cursor: "pointer" }}
                                        />
                                    </IconButton>
                                    <span
                                        style={{
                                            backgroundColor: "#fab1a0",
                                            padding: " 2px 8px",
                                            borderRadius: "5px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {quantity}
                                    </span>
                                    {/* increase */}
                                    <IconButton
                                        onClick={() =>
                                            setQuantity((prev) => prev + 1)
                                        }
                                    >
                                        <AddIcon sx={{ cursor: "pointer" }} />
                                    </IconButton>

                                    {/* add to cart */}
                                    <Button
                                        variant="contained"
                                        onClick={() =>
                                            addToCart(productDetails, quantity)
                                        }
                                    >
                                        ADD
                                    </Button>
                                </div>
                            </Typography>{" "}
                            <Typography
                                sx={{
                                    background: "primary.main",
                                    padding: "5px",
                                    display: "flex",
                                    fontWeight: "bold",
                                    gap: "8px",
                                }}
                            >
                                Price : {productDetails.price}
                                <SellIcon />
                            </Typography>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
/*  */
