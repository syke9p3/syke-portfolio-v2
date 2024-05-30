import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import navItems from "../data/navItems";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent propagation
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav className="py-6 px-[5%] w-full z-50">
      <div className="container flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          {/* <img src="src/assets/logo5.png" className="h-[80px]" alt="Syke" /> */}
          <p className="tracking-wid">syke9p3</p>
        </Link>
        <button
          className="grid place-items-center px-2 py-2 md:hidden"
          onClick={handleToggle}
        >
          <p>
            <FaBars />
          </p>
        </button>

        <div
          className={`h-[100dvh] px-[1%] md:h-auto fixed max-w-xs md:max-w-none items-center top-0 py-6 transition-all duration-75 ease-out md:static md:left-auto md:right-auto md:mt-0 bg-catppuccinCrust md:bg-transparent md:py-0 ${
            menuOpen ? `right-0` : `-right-96`
          }`}
        >
          <div className="flex flex-col px-6 transition-none md:gap-0">
            <button
              className="grid place-items-center px-2 py-4 md:hidden hover:bg-slate-800"
              onClick={handleToggle}
            >
              <p>{<FaBars />}</p>
            </button>
            <hr className="opacity-10 md:hidden" />
            <ul className="flex flex-col items-center md:gap-6 md:flex-row max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item, i) => (
                <Link
                  to={item.link}
                  key={i}
                  className="grid place-items-center py-3 w-full rounded md:w-auto md:py-0 text-catppuccinSubtext1 hover:bg-slate-800"
                >
                  <li className="font-medium">{item.name}</li>
                </Link>
              ))}
              <li className="py-2 mt-1 w-full md:w-auto md:py-0 md:mt-0">
                {/* <button className="px-6 py-2 w-full font-semibold tracking-tight text-white bg-red-500 md:w-auto md:rounded-full">
                  My Resume
                </button> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
