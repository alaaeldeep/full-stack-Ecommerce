/* router */
import { Outlet } from "react-router-dom";

/* components */
import AppNavBar from "../components/NavBar/AppNavBar";
import Footer from "../components/FooterBar";

const LayoutPage = () => {
    return (
        <div>
            <AppNavBar />

            <Outlet />

            <Footer />
        </div>
    );
};

export default LayoutPage;
