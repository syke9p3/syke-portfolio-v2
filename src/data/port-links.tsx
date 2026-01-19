import { FaGithub } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export enum CategoryType {
    ALL = '',
    UI = 'ui',
    SOFTWARE = 'software',
    GRAPHICS = 'graphics'
}

type DisplayNames = "everything!" | "software" | "ui designs" | "illustrations"

export interface ProjectCategory {
    displayName: DisplayNames;
    link: CategoryType;
    icon: React.ReactNode;
    role?: string;
}

export const categories: ProjectCategory[] = [
    {
        displayName: "everything!",
        icon: <FaGithub />,
        link: CategoryType.ALL,
        role: undefined
    },
    {
        displayName: "software",
        icon: <BiLogoVisualStudio />,
        link: CategoryType.SOFTWARE,
        role: "software developer",
    },
    {
        displayName: "ui designs",
        icon: <FiFigma />,
        link: CategoryType.UI,
        role: "ui designer",
    },
    {
        displayName: "illustrations",
        icon: <SiAdobephotoshop />,
        link: CategoryType.GRAPHICS,
        role: "illustrator",
    }
]