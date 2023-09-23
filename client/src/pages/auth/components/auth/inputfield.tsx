/* MUI */
import {
    IconButton,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,
    FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { FieldError, UseFormRegister } from "react-hook-form";
import { useState } from "react";

type props = {
    register: UseFormRegister<{
        name?: string;
        email: string;
        password: string;
        phone?: string;
    }>;
    errors: FieldError | undefined;

    fieldName: "name" | "password" | "email" | "phone";
    label: string;
};
const InputField = ({ errors, register, fieldName, label }: props) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <FormControl
            error={!!errors}
            fullWidth
            sx={{ width: { sm: "100%", md: "70%" } }}
            variant="outlined"
        >
            <InputLabel color="custom" htmlFor="outlined-adornment-password">
                {label}
            </InputLabel>
            <OutlinedInput
                {...register(fieldName)}
                color="custom"
                id="outlined-adornment-userName"
                type={
                    showPassword || fieldName !== "password"
                        ? "text"
                        : "password"
                }
                endAdornment={
                    fieldName === "password" ? (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ) : null
                }
                label={label}
            />
            <FormHelperText
                sx={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
                id="component-helper-text"
            >
                {errors?.message}
            </FormHelperText>
        </FormControl>
    );
};

export default InputField;
