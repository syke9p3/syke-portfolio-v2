import { Link } from "react-router-dom";
import navItems from "../data/navItems";
import socials from "../data/socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="px-[5%] bg-catppuccinMantle py-6">
      <Contact />
      <div className="container grid grid-cols-6 gap-12 mx-auto lg:grid-cols-12">
        <div className="flex flex-col flex-1 col-span-3 gap-2 md:col-span-2">
          <h3 className="text-lg font-bold">Links</h3>
          <ul className="text-sm">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link to={item.link} className="text-[#89b3e9]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col flex-1 col-span-2 gap-2">
          <h3 className="text-lg font-bold">Socials</h3>
          <ul className="text-sm">
            {socials.map((item, i) => (
              <li key={i}>
                <Link to={item.link} target="_blank" className="text-[#89b3e9]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col col-span-8 gap-2">
          <h3 className="text-lg font-bold">About Me</h3>
          <p className="mb-12 text-sm text-catppuccinSubtext1">
            I'm passionate with learning anything I find interesting.
          </p>
          <p className="mt-auto text-xs italic text-catppuccinSubtext0">
            Powered by GitHub Pages © 2024 • Syke Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="container flex flex-col gap-6 py-6 mx-auto my-6">
      <h1 className="text-2xl font-bold">Contact</h1>
      <div className="grid grid-cols-1 gap-12 place-content-center md:grid-cols-4">
        <div className="grid grid-cols-2 col-span-2 gap-3">
          <input
            className="col-span-1 p-3"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            className="col-span-1 p-3"
            type="text"
            name=""
            id=""
            placeholder="Email Address"
          />
          <textarea
            className="col-span-2 px-3 py-2"
            name=""
            id=""
            placeholder="Message"
          ></textarea>
          <button className="p-3 font-semibold text-white bg-red-500">
            Submit
          </button>
        </div>
        <div className="">
          <div className="grid gap-4">
            <div className="grid grid-cols-8 gap-8">
              <i className="grid col-span-1 place-items-center">
                <MdLocationPin />
              </i>
              <div className="col-span-7">
                <h1 className="font-bold">Address</h1>
                <p className="text-sm">Taguig City</p>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-8">
              <i className="grid col-span-1 place-items-center">
                <FaPhoneAlt />
              </i>
              <div className="col-span-7">
                <h1 className="font-bold">Phone</h1>
                <p className="text-sm">09814365377</p>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-8">
              <i className="grid col-span-1 place-items-center">
                <IoMdMail />
              </i>
              <div className="col-span-7">
                <h1 className="font-bold">Email</h1>
                <p className="text-sm">gargarkenth93@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
