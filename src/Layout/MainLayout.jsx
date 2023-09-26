import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";



const MainLayout = () => {
    return (
        <div className="mb-5 mx-auto">
            <Navbar></Navbar>
            <Outlet> </Outlet>
        </div>
    );
};

export default MainLayout;