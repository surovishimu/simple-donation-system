

const SinlgeCard = ({ card }) => {
    const { image, title, description, text_button_bg } = card;
    return (
        <div>
            <div className="card rounded-sm bg-base-100 h-[100vh]  max-w-[800px] mx-auto  ">
                <div className="relative">
                    <figure><img className="rounded-md h-[51vh] w-[425px] md:w-[700px] " src={image} alt="Shoes" /></figure>
                    <div className='absolute rounded-b-md bg-gradient-to-b from-slate-900  to-black opacity-75 h-16   md:h-24 md:w-[701px] mx-auto bottom-16 md:right-8 lg:right-12 md-mobile:w-[375px] lg-mobile:w-[425px] sm-mobile:w-[320px]'>
                    </div>
                    <button className="relative md:bottom-24 md:left-14 bottom-20 btn btn-sm normal-case rounded-sm ml-5 mt-8 border-none  text-white" style={{ backgroundColor: text_button_bg, }}>Donate $290</button>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>

    );
};

export default SinlgeCard;