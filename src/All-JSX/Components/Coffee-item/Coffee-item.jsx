import { AiFillEye } from 'react-icons/ai';
import { BiSolidEditAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const CoffeeItem = ({data}) => {
    return (
        <div className="bg-[#f5f4f17a]  py-6 pl-4 pr-10 rounded-md flex justify-between items-center">
            <div>
                <img src={data.photoUrl} alt="" />
            </div>

            <div className="space-y-2">
                <p><span className="font-bold">Name:</span> {data.name}</p>
                <p><span className="font-bold">Chef:</span> {data.chef}</p>
                <p><span className="font-bold">Price:</span> 800 Taka</p>
            </div>

            <div className="flex flex-col gap-4">
                <Link className="text-2xl text-white p-2 bg-[#E3B577] rounded-md"><AiFillEye className=""></AiFillEye></Link>
                <Link className="text-2xl text-white p-2 bg-[#3C393B] rounded-md"><BiSolidEditAlt className=""></BiSolidEditAlt></Link>
                <Link className="text-2xl text-white p-2 bg-[#EA4744] rounded-md"><MdDelete className=""></MdDelete></Link>
            </div>
        </div>
    );
};

export default CoffeeItem;

CoffeeItem.propTypes = {
    data: PropTypes.object
}