import { BsGithub } from 'react-icons/bs';

interface NavItem {
  name: string;
  link: string;
  icon: JSX.Element;
}


const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/",
    icon: <BsGithub />
  },
  {
    name: "About",
    link: "/about",
    icon: <BsGithub />
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <BsGithub />
  },
  {
    name: "Contacts",
    link: "/contacts",
    icon: <BsGithub />
  },
  // {
  //   name: "Blogs",
  //   link: "/blogs",
  //   icon: <BsGithub/>
  // },

];

export default navItems;