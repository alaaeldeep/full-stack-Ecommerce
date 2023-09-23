/* import { createSlice } from "@reduxjs/toolkit";
import { UserState, UserAction, Store } from "./types";

const initialState: UserState = {
    email: null,
    firstName: null,
    gender: null,
    id: null,
    image: null,
    lastName: null,
    token: null,
    username: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: UserAction) => {
            state = action.payload;
        },

        logout: (state) => {
            state = initialState;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

 */
