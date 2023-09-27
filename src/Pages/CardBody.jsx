import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SinlgeCard from "./SinlgeCard";

const CardBody = () => {
    const [card, setCard] = useState([]);
    const { id } = useParams();
    const detailsCard = useLoaderData();
    useEffect(() => {
        const findCard = detailsCard?.find(singleCard => singleCard.id == id)
        setCard(findCard);
    }, [id, detailsCard])
    return (

        <div>
            {
                <SinlgeCard card={card}></SinlgeCard>
            }
        </div>
    );
};

export default CardBody;