import { Link, useLoaderData } from "react-router-dom";
import bgImg from "../../../assets/11.png";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Preview = () => {

    const data = useLoaderData();

    return (
        <div style={{
            background: `url("${bgImg}") top center no-repeat`,
            backgroundSize: "cover"
        }} className="pb-20 border-t">
            <div className="max-w-7xl mx-auto lg:p-0 p-5 my-10">
                <div>
                <Link 
                    to="/"
                    className="title-text flex justify-center items-center text-2xl w-fit gap-3"
                    ><AiOutlineArrowLeft></AiOutlineArrowLeft>Back To Home</Link>
                </div>

                <div className="flex md:w-[80%] mx-auto w-full md:py-20 md:px-24 md:justify-evenly py-9 md:flex-row flex-col items-center bg-[#F4F3F0] rounded-lg mt-10">
                    <div className="flex-grow">
                        <img className="w-[200px]" src={data.photoUrl} alt="" />
                    </div>

                    <div className="w-[50%]">
                        <h2 className="title-text text-2xl font-bold mb-5">{data.category}</h2>

                        <div className="space-y-2">
                            <p><span className="font-bold">Name:</span> {data.name}</p>
                            <p><span className="font-bold">Chef:</span> {data.chef}</p>
                            <p><span className="font-bold">Supplier:</span> {data.supplier}</p>
                            <p><span className="font-bold">Taste:</span> {data.taste}</p>
                            <p><span className="font-bold">Category:</span> {data.category}</p>
                            <p><span className="font-bold">Details:</span> {data.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;