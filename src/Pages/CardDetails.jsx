import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SinlgeCard from "./SinlgeCard";


const CardDetails = () => {
    const [card, setCard] = useState([]);
    const { id } = useParams();
    const cardDetails = useLoaderData();
    useEffect(() => {
        const findCard = cardDetails?.find(singleCard => singleCard.id == id)
        setCard(findCard);
    }, [id, cardDetails])
    return (

        < div >
            {
                <SinlgeCard card={card}></SinlgeCard>
            }
        </div >
    );
};

export default CardDetails;