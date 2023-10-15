

import { Link } from "react-router-dom";
import bgImg from "../../../assets/11.png";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CoffeeAdding = () => {

    const handleAddingProduct = (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const supplier = e.target.supplier.value;
        const category = e.target.category.value;
        const chef = e.target.chef.value;
        const taste = e.target.taste.value;
        const details = e.target.details.value;
        const photoUrl = e.target.photo.value;

        const productInfo = {name, supplier, category, chef, taste, details, photoUrl};
        
        fetch("https://coffee-store-server-side-express-mongodb-fi47k6txb.vercel.app/coffees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => console.log(data));

        e.target.name.value = "";
        e.target.supplier.value = "";
        e.target.category.value = "";
        e.target.chef.value = "";
        e.target.taste.value = "";
        e.target.details.value = "";
        e.target.photo.value = "";
    }

    return (
        <div style={{
            background: `url("${bgImg}") top center no-repeat`,
            backgroundSize: "cover"
        }} className="pb-20">
            <div className="max-w-7xl mx-auto lg:px-0 px-5 my-10">
                <div>
                    <Link 
                    to="/"
                    className="title-text flex justify-center items-center text-2xl w-fit gap-3"
                    ><AiOutlineArrowLeft></AiOutlineArrowLeft>Back To Home</Link>
                </div>

                <div className="bg-[#F4F3F0] sm:px-14 sm:py-14 px-5 py-14 rounded-lg my-10">
                    <h1 className="title-text text-4xl text-center font-semibold">Add New Coffee</h1>
                    <p className="my-8 md:px-20 leading-relaxed text-center">
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>

                    <form onSubmit={handleAddingProduct}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="space-y-7">
                                <label className="block space-y-5 font-bold" htmlFor="name">Name <br />
                                    <input placeholder="Enter coffee name" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="name" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="supplier">Supplier <br />
                                    <input placeholder="Enter coffee supplier" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="supplier" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="category">Category <br />
                                    <input placeholder="Enter coffee category" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="category" id="" />
                                </label>
                            </div>

                            <div className="space-y-7">
                                <label className="block space-y-5 font-bold" htmlFor="chef">Chef <br />
                                    <input placeholder="Enter coffee chef" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="chef" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="taste">Taste <br />
                                    <input placeholder="Enter coffee taste" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="taste" id="" />
                                </label>
                                <label className="block space-y-5 font-bold" htmlFor="details">Details <br />
                                    <input placeholder="Enter coffee details" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="details" id="" />
                                </label>
                            </div>
                        </div>

                        <div className="mt-7">
                            <label className="block space-y-5 font-bold" htmlFor="photo">Photo URL <br />
                                    <input placeholder="Enter photo URL" className="block w-full py-3 px-3 font-normal rounded-md" type="text" name="photo" id="" />
                            </label>
                        </div>

                        <div className="mt-10">
                            <input className="title-text block w-full bg-[#D2B48C] py-3 rounded-md text-2xl cursor-pointer hover:bg-neutral-400 duration-300" type="submit" value="Add Coffee" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CoffeeAdding;