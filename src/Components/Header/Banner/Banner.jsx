

const Banner = () => {
    return (
        <div>
            <div className='relative bg-[url("https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155300.jpg?w=2000")] bg-center bg-cover h-[70vh] bg-no-repeat'>
                <div className="absolute inset-0 bg-white bg-opacity-90"></div>
                <div className="flex flex-col justify-center items-center h-[60vh]">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black z-10 relative ">I Grow By Helping People In Need</h1>
                    <div className="join relative flex justify-center items-center mt-5">
                        <input className="input input-bordered join-item" placeholder="Search here...." />
                        <button className="btn normal-case text-white join-item  bg-[#FF444A]">Search</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;