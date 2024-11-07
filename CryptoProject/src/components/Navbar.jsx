import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex items-center gap-x-5 w-fit  border-b-2 border-gray-300 pb-2 -mt-2 ">
      <FaBitcoin color="blue" size={40} />
      <h1 className="font-bold">Crypto Hub</h1>
      {showMenu && (
        <div className="menu-content text-black absolute top-16 right-0 left-40  lg:left-[60rem] bg-white p-4  shadow-lg h-max rounded-2xl border border-black z-50 mr-1 justify-center flex ">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-800">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-blue-800">About</a>
            </li>

            <li className="hover:text-blue-800">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}
      <MdOutlineMenu
        className="ml-[80vw] hover:bg-blue-400 p-1 rounded-lg"
        size={35}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
    </nav>
  );
}

export default Navbar;
