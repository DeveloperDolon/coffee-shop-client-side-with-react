import { AiFillEye } from 'react-icons/ai';
import { BiSolidEditAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import Swal from 'sweetalert2';

const CoffeeItem = ({data}) => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

    const handleRemoveItem = (id) => {

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-side-express-mongodb-fi47k6txb.vercel.app/coffees/${id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => console.log(data))

              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              window.location.reload();
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }

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
                <Link to={`/preview/${data._id}`} className="text-2xl text-white p-2 bg-[#E3B577] rounded-md"><AiFillEye className=""></AiFillEye></Link>
                <Link
                to={`/edit/${data._id}`}
                className="text-2xl text-white p-2 bg-[#3C393B] rounded-md"><BiSolidEditAlt className=""></BiSolidEditAlt></Link>
                <button
                onClick={() => handleRemoveItem(data._id)}
                className="text-2xl text-white p-2 bg-[#EA4744] rounded-md"><MdDelete className=""></MdDelete></button>
            </div>
        </div>
    );
};

export default CoffeeItem;

CoffeeItem.propTypes = {
    data: PropTypes.object
}