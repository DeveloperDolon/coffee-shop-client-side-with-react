import { useContext } from "react";
import { MyContext } from "../../ContextProvider/DataContext";
import Swal from "sweetalert2";

const SocialLogIn = () => {

    const {googleLogin} = useContext(MyContext);


    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {

            Swal.fire(
                'Successfully user Login!',
                'You clicked the button!',
                'success'
              )
        }).catch(err => console.log(err));
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:px-36 md:px-10 px-0 mb-5 gap-3 items-center">
                <button onClick={handleGoogleLogin} className="btn bg-yellow-500">Sign with Google</button>
            </div>
        </>
    );
};

export default SocialLogIn;