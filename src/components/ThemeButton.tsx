import useTheme from "../hooks/useTheme";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const ThemeButton = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="aspect-square min-w-10 rounded-md text-catppuccinText">
            <span className="text-2xl grid place-items-center">
                {theme === 'light' ? (<MdOutlineWbSunny />) : (<IoMoonOutline />)}
            </span>
        </button>
    )
}

export default ThemeButton