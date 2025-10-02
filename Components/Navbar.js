'use client';
import { useState } from "react";
import NavItems from "./NavItems";
import Link from "next/link";

const Navbar = () => {
    const navItems = ["Home", "Service", "Our Mission", "About", "Results", "Client Stories", "Credentials", "Contact Us"];
    const [visibleMenu, setVisibleMenu] = useState(false);

    const clickHandle = () => {
        setVisibleMenu(!visibleMenu);
    };

    return(
        <div>

            <div className="mx-0 sm:block sm:mx-10
            md:hidden">
                <svg className="cursor-pointer" onClick={() => clickHandle()} width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
                {visibleMenu && 
                <ul className="bg-gray-100 rounded-4xl p-2">
                {visibleMenu && navItems.map((single) => {
                    return(<li className=" cursor-pointer">{single}</li>)
                })}
                </ul>}
            </div>

            <div className="hidden
            md:flex md:justify-around md:cursor-pointer md:bg-gray-100 md:py-3 md:mt-5 md:mx-10 md:rounded-2xl"
            id="navbar">

            {navItems.map((single, index) => {
                return(<div key={index}>
                        <NavItems item = {single}/>
            </div>)
            })}

        </div>
    </div>)
};

export default Navbar;