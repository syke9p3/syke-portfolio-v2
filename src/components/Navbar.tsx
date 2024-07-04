import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgFile } from "react-icons/cg";
import { navItems } from "../data/navItems";


const Navbar: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  console.log(isOpened);

  return (
    <nav className="py-6 px-[5%] w-full ">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex justify-between items-center w-full">
          {/* <div id="nav-logo" className="relative text-4xl">K<span className="absolute top-2 left-5 text-teal-400">S</span></div> */}
          <Link
            to="/"
            className="text-2xl font-bold"
          >
            {/* <img src="src/assets/logo5.png" className="h-[80px]" alt="Syke" /> */}
            <p className="tracking-wid">syke9p3</p>
          </Link>

          <div className="md:hidden">
            <button
              className="flex items-center px-3 py-2  scale-[150%]"
              onClick={() => setIsOpened(!isOpened)}
            >
              <svg
                className="h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  fill="#fff"
                  d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"
                />
              </svg>
            </button>
          </div>

          <ul className="gap-6 hidden md:flex">
            {navItems.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="grid relative place-items-center px-1 py-6 w-full rounded nav-item md:w-auto md:py-0 text-catppuccinSubtext1 hover:text-blue-500"
              >
                <li className="font-medium">{item.name}</li>
              </Link>
            ))}
            <Link to={'/files/Saya-ang,Kenth_Resume.pdf'} target="_blank" className="inline-block my-4">
              <button className="flex gap-2 items-center px-4 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group hover:from-cyan-400 hover:to-blue-400 text-catppuccinBase">
                <div className="group-hover:" ><CgFile size={20} /></div>
                My Resume
              </button>
            </Link>

          </ul>

          <ul
            className={`md:hidden absolute top-20 z-[40]  flex-col gap-3 shadow-md bg-[#181825] p-4 transition-all duration-300 ease-in-out right-5 ${!isOpened ? "hidden" : "flex"}`}
          >
            {navItems.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="grid relative place-items-center px-6 py-3 w-full rounded nav-item md:w-auto md:py-0 text-catppuccinSubtext1 hover:text-blue-500"
              >
                <li className="font-medium">{item.name}</li>
              </Link>
            ))}
            <Link to={'/files/Saya-ang,Kenth_Resume.pdf'} target="_blank" className="inline-block my-4">
              <button className="flex gap-2 items-center px-4 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group hover:from-cyan-400 hover:to-blue-400 text-catppuccinBase">
                <div className="group-hover:" ><CgFile size={20} /></div>
                My Resume
              </button>
            </Link>

          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
