import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createThemeSlice, ThemeSlice } from "./themeSlice";
import { CartSlice, createCartSlice } from "./cartSlice";

export const useOwnStore = create<ThemeSlice & CartSlice>()(
    devtools(
        persist(
            (...a) => ({
                ...createThemeSlice(...a),
                ...createCartSlice(...a),
            }),
            {
                name: "store",
            }
        )
    )
);
