import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../ContextProvider/DataContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const SignUp = () => {

    const {createUserWithEmailPassword} = useContext(MyContext);

    const handleCreateUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailPassword(email, password)
        .then(res => {
            
            const lastSignInTime = res.user.metadata.lastSignInTime;

            updateProfile(res.user, {
                displayName: name,
            })
            .then()
            .catch(err => console.error(err));

            fetch("http://localhost:5000/users",  {
                method: "POSt", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email, lastSignInTime})
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged) {
                    Swal.fire(
                        'Successfully user Registered!',
                        'You clicked the button!',
                        'success'
                      )
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                      })
                }
            });
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
                footer: '<a href="">Why do I have this issue?</a>'
              })
        })
    }

    return (
        <div className="max-w-7xl mx-auto lg:p-0 p-5">
            <div className="md:w-[70%] bg-slate-100 mx-auto md:py-20 my-20 rounded-lg py-10 md:px-32 px-5">
                <div className="grid grid-cols-1 lg:px-36 md:px-10 px-0 mb-5 gap-3 items-center">
                    <button className="btn bg-yellow-500">Sign with Google</button>
                    <button className="btn bg-yellow-500">Sign with Twitter</button>
                    <button className="btn bg-yellow-500">Sign with Github</button>
                </div>
                <h1 className="text-center mb-5">or</h1>
                <form onSubmit={handleCreateUser} className="space-y-5">
                    <label className="block w-full" htmlFor="name">Username <br />
                        <input className="block w-full py-4 px-7 rounded-lg mt-4" name="name" type="text" required placeholder="Input your name" />
                    </label> 
                    
                    <label className="block w-full" htmlFor="email">Email <br />
                        <input className="block w-full py-4 px-7 rounded-lg mt-4" name="email" type="email" required placeholder="Input your email" />
                    </label>

                    <label className="block w-full" htmlFor="password">Password <br />
                        <input className="block w-full py-4 px-7 rounded-lg mt-4" name="password" type="password" required placeholder="Input your email" />
                    </label>

                    <input className="block rounded-lg cursor-pointer w-full bg-neutral-600 text-white py-4" type="submit" value="Sign Up" />

                    <div>
                        <h3 className="text-center">or</h3>

                        <Link to="/login" className="block w-fit mt-5 font-semibold underline mx-auto">Login account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;