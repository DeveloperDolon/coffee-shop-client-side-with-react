
import logo from "../../../assets/logo1.png";

const Header = () => {
    return (
        <div className="bg-[#331A15] flex justify-center items-center gap-5 py-2">
            <img className="w-16" src={logo} alt="" />
            <h1 className="title-text text-white text-4xl font-light">Espresso Emporium</h1>
        </div>
    );
};

export default Header;