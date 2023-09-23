/* MUI */
import { Box, IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

/* store => client state management */
import { useOwnStore } from "../../store/zustand";

const ToggleTheme = () => {
    const mode = useOwnStore((store) => store.mode);
    const changeMode = useOwnStore((store) => store.changeMode);

    return (
        <IconButton onClick={() => changeMode()}>
            {mode === "dark" ? (
                <WbSunnyIcon style={{ color: "#FFEE63" }} />
            ) : (
                <BedtimeIcon style={{ color: "#2D4263" }} />
            )}
        </IconButton>
    );
};

export default ToggleTheme;
