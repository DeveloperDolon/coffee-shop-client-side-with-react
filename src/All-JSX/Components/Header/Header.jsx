
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo1.png";

const Header = () => {

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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
                        <NavLink  to="/login" className="btn">Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;