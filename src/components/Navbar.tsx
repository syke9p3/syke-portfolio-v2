import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/navItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import useTheme from "../hooks/useTheme";


const Navbar: React.FC = () => {

  const [isOpened, setIsOpened] = useState(false);
  const { theme, toggleTheme } = useTheme();

  console.log(isOpened);

  return (
    <nav className="py-6 px-[5%] w-full ">
      <div className="container flex justify-between items-center mx-auto uppercase">
        <div className="flex justify-between items-center w-full">
          <NavLink
            to="/"
            className="text-2xl"
          >
            <p className="text-transparent bg-clip-text text-gradient lowercase">syke9p3</p>
          </NavLink>

          <div className="md:hidden">
            <button
              className="flex items-center px-3 py-2 scale-[150%] text-catppuccinText"
              onClick={() => setIsOpened(!isOpened)}
            >
              <RxHamburgerMenu />
            </button>
          </div>

          {/* DESKTOP VIEW */}
          <ul className="hidden md:flex">
            {navItems.map((item, i) => (
              <NavLink
                to={item.link}
                key={i}
                className="animate hover:bg-catppuccinCrust grid relative place-items-center px-4 py-6 w-full rounded nav-item md:w-auto md:py-0 text-catppuccinSubtext1 aria-[current=page]:text-blue-500"
              >
                <li className="font-medium">{item.name}</li>
              </NavLink>
            ))}
            <div className="ml-2 aspect-square min-w-10 rounded-md animate hover:bg-catppuccinCrust">
              <button onClick={toggleTheme} className="aspect-square min-w-10 rounded-md text-catppuccinText">
                <span className="text-2xl grid place-items-center">
                  {theme === 'light' ? (<MdOutlineWbSunny />) : (<IoMoonOutline />)}
                </span>
              </button>
            </div>
          </ul>

          {/* MOBILE VIEW */}
          <ul
            className={`rounded-xl md:hidden absolute top-20 z-[40]  flex-col shadow-lg bg-catppuccinMantle p-4 transition-all duration-300 ease-in-out right-5 ${!isOpened ? "hidden" : "flex"}`}
          >
            <div className="text-center ">
              <button onClick={toggleTheme} className="py-4 animate hover:bg-catppuccinCrust w-full min-w-10 rounded-md text-catppuccinText">
                <span className="text-2xl grid place-items-center">
                  {theme === 'light' ? (<MdOutlineWbSunny />) : (<IoMoonOutline />)}
                </span>
              </button>
            </div>
            {navItems.map((item, i) => (
              <NavLink
                to={item.link}
                key={i}
                className="animate hover:bg-catppuccinCrust grid relative place-items-center px-6 py-4 w-full rounded nav-item md:w-auto md:py-0 text-catppuccinSubtext1 hover:text-blue-500 aria-[current=page]:text-blue-400"
              >
                <li className="font-medium">{item.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
