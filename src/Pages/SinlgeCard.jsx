import { Link } from "react-router-dom";
import swal from "sweetalert";
import PropTypes from 'prop-types';

const SinlgeCard = ({ card }) => {
    const { id, image, title, description, text_button_bg } = card || {};

    const handleDonateBtn = () => {
        const addededCardArray = [];
        const addededCard = JSON.parse(localStorage.getItem('cardList'))
        if (!addededCard) {
            addededCardArray.push(card);
            localStorage.setItem('cardList', JSON.stringify(addededCardArray))
            swal("Thank you for your donation!", "Your contribution is greatly appreciated!", "success");
        }
        else {
            const isExist = addededCard.find(card => card.id == id);
            if (isExist) {
                addededCardArray.push(...addededCard, card);
                localStorage.setItem('cardList', JSON.stringify(addededCardArray))
                swal({
                    title: "Thank you for your donation!",
                    text: "Your contribution is greatly appreciated!",
                    icon: "success",

                })
            }
            else {

                addededCardArray.push(...addededCard, card);
                localStorage.setItem('cardList', JSON.stringify(addededCardArray))
                swal({
                    title: "Thank you for your donation!",
                    text: "Your contribution is greatly appreciated!",
                    icon: "success",

                })
            }

        }

    }
    return (
        <div>
            <div className="relative top-32 card rounded-sm bg-base-100 h-[100vh]  max-w-[800px] mx-auto  ">
                <div className="relative">
                    <figure><img className="rounded-md h-[60vh] w-[425px] md:w-[700px] " src={image} alt="Shoes" /></figure>
                    <div className='absolute rounded-b-md bg-gradient-to-b from-slate-900  to-black opacity-75 h-16   md:h-24 md:w-[701px] mx-auto bottom-16 md:right-8 lg:right-12 md-mobile:w-[375px] lg-mobile:w-[425px] sm-mobile:w-[320px]'>
                    </div>
                    <Link to={'/donation'}><button onClick={handleDonateBtn} className="relative md:bottom-24 md:left-14 bottom-20 btn btn-sm normal-case rounded-sm ml-5 mt-8 border-none  text-white" style={{ backgroundColor: text_button_bg, }}>Donate $290</button></Link>
                </div>
                <div className="card-body px-12">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>

    );
};
SinlgeCard.propTypes = {
    card: PropTypes.array.isRequired

}
export default SinlgeCard;