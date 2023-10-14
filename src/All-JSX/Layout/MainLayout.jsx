import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;