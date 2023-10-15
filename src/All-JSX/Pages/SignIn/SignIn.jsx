import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../ContextProvider/DataContext";
import Swal from "sweetalert2";
import SocialLogIn from "../../Components/SocialLogin/SocialLogIn";

const SignIn = () => {

    const {loginWithEmailPassword} = useContext(MyContext);

    const handleLogIn = (e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginWithEmailPassword(email, password)
        .then(res => {
            const lastSignInTime = res.user.metadata.lastSignInTime;

            fetch("http://localhost:5000/users", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, lastSignInTime})
            })
            .then(res => res.json())
            .then(() => {
                Swal.fire(
                    'Log out sucessfully!',
                    'You clicked the button!',
                    'success'
                )
            });
        }).catch(err => console.log(err));
    } 

    return (
        <div className="max-w-7xl mx-auto lg:p-0 p-5">
            <div className="md:w-[70%] bg-slate-100 mx-auto md:py-20 my-20 rounded-lg py-10 md:px-32 px-5">
               <SocialLogIn/>
                <h1 className="text-center mb-5">or</h1>
                <form onSubmit={handleLogIn} className="space-y-5">
                    <label className="block w-full" htmlFor="email">Email <br />
                        <input className="block w-full py-4 px-7 rounded-lg mt-4" name="email" type="email" required placeholder="Input your email" />
                    </label>
                    
                    <label className="block w-full" htmlFor="password">Password <br />
                        <input className="block w-full py-4 px-7 rounded-lg mt-4" name="password" type="password" required placeholder="Input your password" />
                    </label>

                    <input className="block rounded-lg cursor-pointer w-full bg-neutral-600 text-white py-4" type="submit" value="Login" />

                    <div>
                        <h3 className="text-center">or</h3>

                        <Link to="/signup" className="block w-fit mt-5 font-semibold underline mx-auto">Create an account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;