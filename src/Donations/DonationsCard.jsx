import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationsCard = ({ donation }) => {
    const { id, image, category, text_button_bg, card_bg, category_bg, title } = donation || {};

    return (
        <Link to={`/cardDetails/${id}`}> <div className="card bg-base-100 shadow-xl cursor-pointer ">
            <figure><img className="w-full h-full" src={image} alt="Shoes" /></figure>
            <div className="card-body rounded-b-2xl" style={{ backgroundColor: card_bg }}>
                <button className="border-none rounded-sm btn btn-sm w-24 normal-case" style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</button>
                <h1 className="font-semibold" style={{ color: text_button_bg }}>{title}</h1>
            </div>
        </div></Link>
    );
};
DonationsCard .propTypes = {
    donation : PropTypes.array.isRequired
}
export default DonationsCard;