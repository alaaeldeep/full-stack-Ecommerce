/* store */
import { useOwnStore } from "../../store/zustand";

/* MUI */
import { Box, IconButton, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const CartPage = () => {
    const { increaseQuantity, decreaseQuantity, removeFromCart, products } =
        useOwnStore((store) => store);

    return (
        <Box
            color="secondary"
            sx={{
                m: 8,
                display: "flex",
                flexDirection: "column",
                minHeight: "500px",
            }}
        >
            {products.length === 0 && (
                <Paper
                    sx={{
                        display: "flex",
                        gap: "4rem",
                        margin: "12px",
                        flexDirection: { xs: "column", md: "row" },
                        padding: "8rem",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography fontSize="1.5rem">
                        select some thing to proceed
                    </Typography>
                    <ShoppingCartCheckoutIcon sx={{ fontSize: "1.7rem" }} />
                </Paper>
            )}

            {products.map((product) => (
                <div key={product.id}>
                    <Paper
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            margin: "12px",
                            padding: "12px",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={product.image}
                            alt=""
                            width="90px"
                            style={{ borderRadius: "7px" }}
                        />
                        <div>
                            <Typography
                                sx={{ width: { xs: "150px", md: "350px" } }}
                            >
                                {" "}
                                {product.title}{" "}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    flexDirection: { xs: "column", md: "row" },
                                    gap: "8px",
                                }}
                            >
                                <Typography>
                                    $ {product.price} x{" "}
                                    <span
                                        style={{
                                            backgroundColor: "#fab1a0",
                                            padding: " 2px 8px",
                                            borderRadius: "5px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {product.quantity}
                                    </span>
                                </Typography>{" "}
                                <Typography
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        background: "#a29bfe",
                                        borderRadius: "15px",
                                        padding: "4px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    total: {+product.price * +product.quantity}
                                </Typography>
                            </Box>
                        </div>

                        <div>
                            <IconButton
                                onClick={() => {
                                    if (product.quantity === 1)
                                        removeFromCart(product);
                                    decreaseQuantity(product);
                                }}
                            >
                                <RemoveIcon sx={{ cursor: "pointer" }} />
                            </IconButton>

                            <IconButton
                                onClick={() => increaseQuantity(product)}
                            >
                                <AddIcon sx={{ cursor: "pointer" }} />
                            </IconButton>

                            <IconButton
                                aria-label="delete"
                                size="large"
                                sx={{
                                    ml: "4px",
                                    color: "#ff0505",
                                }}
                                onClick={() => removeFromCart(product)}
                            >
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </Paper>
                </div>
            ))}
        </Box>
    );
};

export default CartPage;
