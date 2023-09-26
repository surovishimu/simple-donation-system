import { useEffect, useState } from "react";
import AddededCard from "./AddededCard";

const Donation = () => {
    const [addededCard, setAddededCard] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        const card = JSON.parse(localStorage.getItem('cardList'))

        if (card) {
            setAddededCard(card);
        }
        else {
            setNoFound('No data Found')
        }
    }, [])

    const handleRemove = () => {
        localStorage.clear();
        setAddededCard([]);
        setNoFound('No data Found');
    }
    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center text-xl">No data Found</p> :
                <div>
                    {
                        addededCard.length > 0 && <button onClick={handleRemove} className="relative top-28 btn btn-md normal-case bg-red-400 hover:bg-red-400 rounded-md text-white block mx-auto">Delete All</button>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 lg:px-10 md:px-10 px-2 mt-36">
                        {
                            showAll ? addededCard.map(card => <AddededCard card={card} key={card.id}></AddededCard>) :
                                addededCard.slice(0, 4).map(card => <AddededCard card={card} key={card.id}></AddededCard>)
                        }

                    </div>
                    {
                        addededCard.length > 4 && !showAll && <button onClick={() => setShowAll(!showAll)} className="btn btn-md  normal-case bg-green-400 rounded-md text-white hover:bg-green-400  block mx-auto mt-5 " >{showAll ? "See Less" : "See All"}</button>
                    }
                </div>
            }

        </div>
    );
};

export default Donation;