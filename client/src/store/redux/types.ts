import { Product } from "../../pages/Products/model";

export type ThemeState = {
    mode: string;
};

export type CartState = {
    products: Product[];
};

/* export type UserState = {
    user: string | null;
    token: string | null;
}; */
export type UserState = {
    email: string | null;
    firstName: string | null;
    gender: string | null;
    id: string | null;
    image: string | null;
    lastName: string | null;
    token: string | null;
    username: string | null;
};
export type UserAction = {
    payload: UserState;
    type: string;
};

export type Store = {
    theme: ThemeState;
    cart: CartState;
    auth: UserState;
};
