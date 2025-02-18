import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "datas";
import { useSearchProvider } from "contexts/searchContext";
import { useNavigate } from "react-router-dom";
import { MdMovie } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [providedInput, setProvidedInput] = useState("");
  const { searchedKey, updateSearchedKey } = useSearchProvider();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full flex items-center justify-between space-x-5 p-5 bg-black">
        <Link to="/" className="flex items-center space-x-2">
        <MdMovie className="text-white text-3xl" />
          <h4 className="uppercase font-AtypDisplayBold text-blue-300" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>
            CineCenter
          </h4>
        </Link>
        <div className="justify-between w-full space-x-5 hidden lg:flex">
          <ul className="flex items-center justify-center space-x-5">
            {navItems.map((singleNavItem) => {
              return (
                <NavLink
                  key={singleNavItem.providedLink}
                  to={singleNavItem.providedLink}
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  <li>{singleNavItem.title}</li>
                </NavLink>
              );
            })}
          </ul>
          <div className="flex bg-gray-800 overflow-hidden rounded-md">
            <input
              type="text"
              className="px-8 py-3 border-none outline-none bg-transparent"
              placeholder="Search any movie..."
              onChange={(e) => {
                setProvidedInput(e.target.value);
              }}
            />
            <button
              className="bg-blue-200 px-5 text-gray-900"
              onClick={() => {
                updateSearchedKey(providedInput);
                navigate("/search");
              }}
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div
  className="text-2xl flex items-center justify-center p-3 lg:hidden cursor-pointer select-none bg-gray-800 text-white rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
  onClick={toggleMenu}>
  <GiHamburgerMenu />
</div>

      </div>
      {isOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 h-full bg-black/90 w-full -z-10 py-20 px-5 flex">
          <ul className="flex flex-col justify-center">
            {navItems.map((singleNavItem) => {
              return (
                <NavLink
                  key={singleNavItem.providedLink}
                  to={singleNavItem.providedLink}
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  <li className="custom-minor-title py-4">
                    {singleNavItem.title}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
