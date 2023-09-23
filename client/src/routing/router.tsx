/* router */
import { createBrowserRouter } from "react-router-dom";

/* pages */
import LayoutPage from "../pages/Layout.page";
import HomePage from "../pages/home";

import AboutUSPage from "../pages/aboutUS";

import Products from "../pages/Products";
import AllCategories from "../pages/Products/components/allCategories";
import OneCategory from "../pages/Products/components/oneCategory";

import CartPage from "../pages/cart";

import LoginPage from "../pages/auth/LoginPage";
import Register from "../pages/auth/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage />,
        children: [
            { path: "/", element: <HomePage /> },

            {
                path: "products",
                element: <Products />,
                children: [
                    {
                        path: "",
                        element: <AllCategories />,
                    },
                    {
                        path: ":category",
                        element: <OneCategory />,
                    },
                ],
            },
            { path: "aboutUS", element: <AboutUSPage /> },
            { path: "cart", element: <CartPage /> },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);
