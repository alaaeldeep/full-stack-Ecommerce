/* react form */
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";

/* zod */
import { Schema, z } from "zod";

/* MUI */
import { Box, Button, Typography } from "@mui/material";

//import useLogin from "../../hooks/Queries/login";
import { Link } from "react-router-dom";
import InputField from "./components/auth/inputfield";

const schema = z.object({
    name: z
        .string()
        .nonempty("please enter your full name")
        .min(3, "please enter at least 3 characters"),
    email: z
        .string()
        .nonempty("please enter your email address")
        .email("please enter valid email address"),
    password: z
        .string()
        .nonempty("please enter your password")
        .min(8, "please enter at least 8 characters"),
    phone: z
        .string()
        .nonempty("please enter your phone")
        .min(8, "please enter at least 8 characters"),
});

export type FormValue = z.infer<typeof schema>;

const Register = () => {
    //  const mutate = useLogin();

    const { register, control, handleSubmit, formState } = useForm<FormValue>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
        },
        mode: "onTouched",
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const onSubmit = (data: FormValue) => {
        if (formState.isValid) {
            /*🚀 make the request 🚀*/
            // mutate(data);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "6rem 0",
                }}
                noValidate
            >
                <Box
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                        /*  backgroundColor: "secondary.main", */
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "40px",
                        alignItems: "center",
                        width: { xs: "80%", md: "60%" },
                        height: "100%",
                        padding: "50px 30px",
                        borderRadius: "15px",
                    }}
                >
                    <img
                        src="../../public/1200px-Shop.svg.png"
                        style={{
                            height: "5rem",
                        }}
                    />

                    <Typography
                        variant="h3"
                        fontSize={{ xs: "20px", sm: "25px", md: "40px" }}
                        textAlign="center"
                        fontFamily={"sans-serif"}
                        fontWeight={"bold"}
                    >
                        SHOP
                    </Typography>

                    <InputField
                        register={register}
                        errors={errors.name}
                        fieldName="name"
                        label="Full Name"
                    />
                    <InputField
                        register={register}
                        errors={errors.email}
                        fieldName="email"
                        label="E-mail"
                    />
                    <InputField
                        register={register}
                        errors={errors.password}
                        fieldName="password"
                        label="Password"
                    />

                    <InputField
                        register={register}
                        errors={errors.phone}
                        fieldName="phone"
                        label="Phone"
                    />

                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <Button color="custom">
                            {" "}
                            already have an account?
                        </Button>{" "}
                        <span></span>
                    </Link>

                    <Button
                        type="submit"
                        sx={{
                            width: { xs: "100%", md: "70%" },
                            height: "40px",
                            fontWeight: "bold",
                        }}
                        variant="contained"
                    >
                        register
                    </Button>
                </Box>
                <DevTool control={control} />
            </form>
        </>
    );
};

export default Register;
