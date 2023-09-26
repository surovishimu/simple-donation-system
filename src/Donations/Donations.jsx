import { useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";
import swal from "sweetalert";

const Donations = ({ donations, searchdata }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(donations);
    }, [donations]);


    let cardContainer = cards;
    if (searchdata) {
        const searchCards = cards.filter((card) => card.category.toLowerCase().includes(searchdata.toLowerCase())
        );
        cardContainer = searchCards;
    }

    return (
        <div>
            {
                cardContainer.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 ">
                    {
                        cardContainer?.map(donation => <DonationsCard key={donation.id} donation={donation} ></DonationsCard>)
                    }
                </div> : <h2 className="text-lg font-bold text-red-500 text-center mt-10 ">No exact matches found for your search.</h2>
            }
        </div>
    );
};

export default Donations;