import PropTypes from 'prop-types';

const AddededCard = ({ card }) => {
    const { image, title, text_button_bg, category_bg, category, price } = card || {};
    return (
        <div className="card card-side " style={{ backgroundColor: category_bg }}>
            <figure className="flex-1"><img className="h-full lg:w-72 md:w-80 w-48" src={image} alt="Movie" /></figure>
            <div className="card-body flex-1">
                <button className="btn btn-sm w-24 normal-case border-none rounded-sm" style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</button>
                <h1 className="text-xl font-semibold">{title}</h1>
                <h3 className="text-sm font-semibold" style={{ color: text_button_bg }} >{price}</h3>
                <div className="card-actions justify-start">
                    <button style={{ backgroundColor: text_button_bg }} className="btn btn-sm border-none text-white normal-case rounded-sm">View Details</button>
                </div>
            </div>
        </div>
    );
};
AddededCard.propTypes = {
    card: PropTypes.array.isRequired
}
export default AddededCard;