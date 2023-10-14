import Banner from "../../Components/Banner/Banner";

import imgOne from "../../../assets/icons/1.png";
import imgTow from "../../../assets/icons/2.png";
import imgThree from "../../../assets/icons/3.png";
import imgFore from "../../../assets/icons/4.png";
import { Link, useLoaderData } from "react-router-dom";
import bgOne from "../../../assets/4.png";
import bgTow from "../../../assets/5.png";
import CoffeeItem from "../../Components/Coffee-item/Coffee-item";


const Home = () => {

    const allCoffees = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            <div className="bg-[#ECEAE3]">
                <div className="max-w-7xl mx-auto lg:px-0 px-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-14 gap-8">
                    <div>
                        <div>
                            <img src={imgOne} alt="" />
                        </div>

                        <div className="space-y-2 mt-4">
                            <h2 className="title-text text-3xl">Awesome Aroma</h2>
                            <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src={imgTow} alt="" />
                        </div>

                        <div className="space-y-2 mt-4">
                            <h2 className="title-text text-3xl">High Quality</h2>
                            <p className="text-sm">We served the coffee to you maintaining the best quality</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src={imgThree} alt="" />
                        </div>

                        <div className="space-y-2 mt-4">
                            <h2 className="title-text text-3xl">Pure Grades</h2>
                            <p className="text-sm">The coffee is made of the green coffee beans which you will love</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src={imgFore} alt="" />
                        </div>

                        <div className="space-y-2 mt-4">
                            <h2 className="title-text text-3xl">Proper Roasting</h2>
                            <p className="text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>
                    </div>
                </div>
            </div>


            <div
            style={{
                background: `url("${bgOne}") top left no-repeat, url("${bgTow}") bottom right no-repeat`,
                backgroundSize: "20%"
            }}
            className="my-32">
                <div className="max-w-7xl mx-auto lg:px-0 px-5">
                    <p className="text-center">--- Sip & Savor ---</p>

                    <h1 className="text-center my-5 text-[#331A15] title-text sm:text-5xl text-3xl font-bold">Our Popular Products</h1>

                    <div className="flex justify-center">
                        <Link 
                        to="/coffee-adding"
                        className="flex justify-center items-center gap-3 title-text text-xl bg-[#E3B577] text-white py-2 px-5 border-2 border-black rounded-md duration-300 hover:bg-stone-500">Add Coffee <img className="w-7" src={imgOne} alt="" /></Link>
                    </div>

                    <div className="mt-14 grid md:grid-cols-2 grid-cols-1 gap-6">
                        {
                            allCoffees.map(item => <CoffeeItem key={item._id} data={item}></CoffeeItem>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;