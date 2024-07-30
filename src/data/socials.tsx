import React from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

interface ISocial {
  user: string;
  name: string;
  link: string;
  icon: React.ReactNode;
}

const socials: ISocial[] = [
  {
    user: "/kenthsaya-ang",
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/kenthsaya-ang/",
  },
  {
    user: "/syke9p3",
    name: "GitHub",
    icon: <SiGithub />,
    link: "https://github.com/syke9p3",
  },
  {
    user: "/kgsayaang",
    name: "Facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/kgsayaang/",
  },
];

export default socials;