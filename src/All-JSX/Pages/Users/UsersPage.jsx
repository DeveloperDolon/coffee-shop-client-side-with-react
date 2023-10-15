import { useLoaderData } from "react-router-dom";
import { BiSolidEditAlt } from 'react-icons/bi';
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { MyContext } from "../../ContextProvider/DataContext";

const UsersPage = () => {
    const {deleteUserAccount} = useContext(MyContext);
    const users = useLoaderData();
    const [updatedUsers, setUpdatedUsers] = useState(users);
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    const handleUserDelete = (id) => {

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

                deleteUserAccount()
                .then(() => console.log("User deleted")).catch(err => {
                    console.log(err);
                    return;
                })

                fetch(`https://coffee-store-server-side-express-mongodb-fi47k6txb.vercel.app/users/${id}`, {
                    method: 'DELETE',
                })
                .then(() => {
                    const newUsers = updatedUsers.filter(user => {
                        return user._id !== id;
                    });
                    setUpdatedUsers(newUsers);
                }).catch((err) => {
                    console.log(err);
                    return;
                })

              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
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
        <div className="max-w-7xl mx-auto my-28">
            <div className="overflow-x-auto md:w-[70%] mx-auto w-auto">

                <h1 className="title-text text-center text-4xl mb-10 font-bold">All Users</h1>

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            updatedUsers.map((user, idx) =><>
                            <tr key={idx}
                                className="bg-base-200 cursor-pointer duration-150 hover:bg-slate-300">
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.lastSignInTime}</td>
                                <td className="flex gap-2">
                                    <button
                                        onClick={() => document.getElementById('my_modal_5').showModal()}
                                        title="Edit" className="text-lg w-fit block text-white p-1 bg-[#3C393B] rounded-md"><BiSolidEditAlt className=""></BiSolidEditAlt></button>

                                    <button
                                        onClick={() => handleUserDelete(user._id)}
                                        title="Delete"
                                        className="text-lg text-white p-1 bg-[#EA4744] rounded-md"><MdDelete className=""></MdDelete></button>
                                </td>
                            </tr>

                            <div>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">

                                            <form className="grid grid-cols-1 gap-5">
                                                <label htmlFor="name">Name <br />
                                                    <input defaultValue={user.name} className="bg-slate-100 px-5 w-full py-3 rounded-lg" type="text" name="name" id="" />
                                                </label>

                                                <label htmlFor="email">Email <br />
                                                    <input defaultValue={user.email} className="bg-slate-100 px-5 w-full py-3 rounded-lg" type="email" name="email" id="" />
                                                </label>
                                            </form>

                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersPage;