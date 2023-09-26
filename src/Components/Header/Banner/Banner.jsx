
const Banner = ({ handleSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(e.target.search.value);

    }

    return (
        <div>
            <div className='relative bg-[url("https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155300.jpg?w=2000")] bg-center bg-cover h-[80vh] bg-no-repeat'>
                <div className="absolute inset-0 bg-white bg-opacity-90"></div>
                <div className="flex flex-col justify-center items-center h-[60vh]">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black z-10 relative mt-10">I Grow By Helping People In Need</h1>
                    <div className="lg:w-96  md:max-w-[470px] w-64 text-center mx-auto relative mt-5">
                        <form onSubmit={handleSubmit}>
                            <input className="w-3/4 p-4 text-black outline-none border border-white rounded-l-lg"
                                type="text"
                                name="search"
                                placeholder="Search here..."
                            />
                            <input className="w-1/4 text-white font-semibold py-4 rounded-r-lg text-center bg-[#FF444A] cursor-pointer outline-none"
                                type="submit"
                                value="Search"
                            />

                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;