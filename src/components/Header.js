import React from "react";
import { NavLink } from "react-router-dom"

function Header(){
    return(
        <nav className="hover:text-gray-700 relative px-8 py-4 shadow-lg w-full items-center justify-between flex flex-wrap">
            <h1 className="text-4xl text-yellow-400 text-left">Catty</h1>
            <div className="space-x-4 text-2xl text-yellow-400">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {/* <NavLink to="/addacat">Add A Cat</NavLink> */}
            </div>

        </nav>
    );
}


export default Header;