
import logo from "../../../assets/logo1.png";

const Header = () => {
    return (
        <div className="bg-[#331A15] flex justify-center items-center gap-5 py-2">
            <img className="sm:w-16 w-10" src={logo} alt="" />
            <h1 className="title-text text-white sm:text-4xl font-light text-2xl">Espresso Emporium</h1>
        </div>
    );
};

export default Header;