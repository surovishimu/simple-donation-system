import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner/Banner";
import Donations from "../Donations/Donations";
import { useState } from "react";



const Home = () => {
    const donations = useLoaderData();
    const [searchdata, setSearchData] = useState();
    
    const handleSearch = (searchInput) => {
        setSearchData(searchInput);
    }
    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <Donations searchdata={searchdata} donations={donations}></Donations>
        </div>
    );
};

export default Home;