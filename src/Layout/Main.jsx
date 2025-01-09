import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Nav from "../pages/shared/Nav";

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;