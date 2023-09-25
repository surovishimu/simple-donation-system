import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner/Banner";
import Donations from "../Donations/Donations";



const Home = () => {
    const donations = useLoaderData();
  
    return (
        <div>
            <Banner></Banner>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;