
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo1.png";
import { useContext, useState } from "react";
import { MyContext } from "../../ContextProvider/DataContext";

const Header = () => {

    const {user} = useContext(MyContext);

    const defalutImageLink = "data:image/png;base64,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";

    const [showOption, setShowOption] = useState(false);
 
    window.onclick = (e) => {
        if(e.target.name !== "userImg" && !e.target.classList.contains("userInfo")) {
            setShowOption(false);
        }
    }

    const handleLogOut = () => {
        alert("hello world.")
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
    </>

    return (
        <div className="bg-[#331A15]">
            <div className="max-w-7xl mx-auto">
                <div className="navbar text-white">
                    <div className="navbar-start">
                        <div className="dropdown text-black">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="sm:w-16 w-10" src={logo} alt="" />
                            <h1 className="title-text text-white sm:text-4xl font-light text-2xl">Espresso Emporium</h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <>
                            <div className="relative">
                                <img onClick={() => setShowOption(!showOption)} className="w-11 rounded-full object-cover cursor-pointer" name="userImg" src={user.photoURL ? user.photoURL : defalutImageLink} alt="" />

                                <div className={`w-fit duration-300 ${showOption ? "" : "invisible opacity-0"} absolute bg-slate-700 rounded-lg  p-5 -right-1 userInfo`}>
                                    <ul className="space-y-2 userInfo">
                                        <li className="text-sm border-b userInfo">
                                            {user.displayName}
                                        </li>
                                        <li className="text-sm border-b userInfo">
                                            <button onClick={handleLogOut} className="userInfo">Log Out</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </> : 
                            <NavLink  to="/login" className="btn">Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;