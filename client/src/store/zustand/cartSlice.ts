import { StateCreator } from "zustand";

/* types */
import { Product } from "../../pages/Products/model";

export interface CartSlice {
    products: Product[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (product: Product) => void;
    increaseQuantity: (product: Product) => void;
    decreaseQuantity: (product: Product) => void;
}

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
    products: [],
    addToCart: (product, quantity) =>
        set((state) => {
            const index = state.products.findIndex(
                (productItem) => productItem.id === product.id
            );

            /* already exist  */
            if (index !== -1) {
                const newArr = [...state.products];

                newArr[index].quantity += quantity;
                console.log(quantity);
                return { products: newArr };
            }
            /* new product */
            return {
                products: [
                    ...state.products,
                    { ...product, quantity: quantity },
                ],
            };
        }),
    removeFromCart: (product) =>
        set((state) => {
            const newArray = state.products.filter(
                (productItem) => productItem.id !== product.id
            );
            return {
                products: [...newArray],
            };
        }),
    increaseQuantity: (product) =>
        set((state) => {
            const newArray = state.products.map((productItem) => {
                if (productItem.id === product.id) {
                    productItem.quantity++;
                }
                return productItem;
            });
            return { products: [...newArray] };
        }),
    decreaseQuantity: (product) =>
        set((state) => {
            const newArray = state.products.map((productItem) => {
                if (productItem.id === product.id) {
                    if (productItem.quantity > 1) productItem.quantity--;
                }
                return productItem;
            });
            return { products: [...newArray] };
        }),
});
