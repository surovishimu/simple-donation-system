import { useEffect, useState } from "react";
import AddededCard from "./AddededCard";

const Donation = () => {
    const [addededCard, setAddededCard] = useState([]);
    const [noFound, setNoFound] = useState('');
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
            {noFound ? <p className="h-[70vh] flex justify-center items-center text-xl">No data Found</p> :
                <div>
                    {
                        addededCard.length > 0 && <button onClick={handleRemove} className="btn btn-sm normal-case bg-red-400 rounded-sm text-white block mx-auto">Delete All</button>
                    }
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-10 px-0 mt-10">
                        {
                            addededCard.map(card => <AddededCard card={card} key={card.id}></AddededCard>)
                        }

                    </div>
                </div>
            }

        </div>
    );
};

export default Donation;