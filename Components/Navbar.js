import NavItems from "./NavItems";
import Link from "next/link";

const Navbar = () => {
    const navItems = ["Home", "Service", "Our Mission", "About", "Results", "Client Stories", "Credentials", "Contact Us"];
    return(
    <div className="flex justify-around cursor-pointer" id="navbar">

        {navItems.map((single, index) => {
            return(<div key={index}>
                    <NavItems item = {single}/>
    </div>)
        })}
    </div>)
};

export default Navbar;