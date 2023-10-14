
import bgImg from "../../../assets/3.png"

const Banner = () => {
    return (
        <div style={{
            background: `url("${bgImg}") no-repeat center center`,
            backgroundSize: "cover"
        }} className="md:h-[calc(100vh-93px)] h-auto flex items-center">
            <div></div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 lg:px-0 px-5">
                <div>

                </div>


                <div className="text-white md:py-0 py-20">
                    <h1 className="title-text text-4xl">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="text-sm mt-5">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <div className="mt-5">
                        <button className="title-text border-none capitalize tracking-wider text-lg px-6 text-[#331A15] btn bg-[#E3B577] rounded-sm">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;