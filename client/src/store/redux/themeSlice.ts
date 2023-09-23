/* import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "./types";

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialState: ThemeState = { mode: isDarkMode ? "dark" : "light" };

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeMode: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
        },
    },
});

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;
 */
