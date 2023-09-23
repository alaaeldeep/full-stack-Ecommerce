/* import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../pages/Products/model";

const products: Product[] = [];

const initialState = { products };
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.products.findIndex(
                (productItem) => productItem.id === action.payload.id
            );
            if (index !== -1) {
                state.products[index].quantity++;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (p) => p.id !== action.payload.id
            );
        },
        increaseQuantity: (state, action) => {
            state.products = state.products.map((p) => {
                if (p.id === action.payload.id) {
                    p.quantity++;
                }
                return p;
            });
        },
        decreaseQuantity: (state, action) => {
            state.products = state.products.map((p) => {
                if (p.id === action.payload.id) {
                    p.quantity--;
                }
                return p;
            });
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
    cartSlice.actions;
export default cartSlice.reducer;
 */
