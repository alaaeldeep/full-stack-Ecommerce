/* react staff & router */
import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";

/* materialUI & theming */
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { PaletteMode } from "@mui/material";
import { getDesignTokens } from "./utils/theme/theme";

/* server state management */
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

/* store => client state management */
import { useOwnStore } from "./store/zustand";

/*  */
import { router } from "./routing/router";

function App() {
    const { mode } = useOwnStore();

    const queryClient = new QueryClient();
    const theme = useMemo(
        () => createTheme(getDesignTokens(mode as PaletteMode)),
        [mode]
    );

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />

                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
