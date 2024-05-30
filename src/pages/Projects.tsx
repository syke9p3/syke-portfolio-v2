import { useState } from "react";
import ProjectCard from "../components/ProjectCard.tsx";
import { BsSearch } from "react-icons/bs";
import projects from "../data/projects.ts";
import Window from "../components/Window.tsx";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowRotateRight,
  FaGithub,
} from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { DiHtml5 } from "react-icons/di";
import { SiAdobephotoshop } from "react-icons/si";
import { Helmet } from 'react-helmet';

const categories = [
  {
    key: "all",
    name: "Everything",
    icon: <FaGithub />,
  },
  {
    key: "web",
    name: "Websites",
    icon: <DiHtml5 />,
  },
  {
    key: "ui",
    name: "UI Designs",
    icon: <FiFigma />,
  },
  {
    key: "illustration",
    name: "Illustrations",
    icon: <SiAdobephotoshop />,
  },
];

const Projects = () => {
  const [category, setCategory] = useState(0);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [category])

  return (
    <>
    <Helmet>
      <title>Project | Kenth Saya-ang Portfolio</title>
    </Helmet>
      <main className="flex flex-col min-h-[90vh] py-8 container mx-auto">
        <div className="flex flex-col gap-6">
          <Window header="Syke9p3 - Projects">
            {/* Filter */}
            {/* <div className="grid grid-cols-2 px-1 pt-3 rounded-xl md:grid-cols-4 bg-[#21133d]"> */}
            <div className="grid grid-cols-2 md:flex px-1 bg-[#21133d] gap-1 p-1">
              {categories.map((item, i) => (
                <button
                  onClick={() => setCategory(i)}
                  className={`px-3 py-2 border duration-75 ease-out leading-tight rounded-sm  hover:bg-[#3f2b66] ${
                    i == category
                      ? `x-text-catppuccinMantle text-white bg-[#3c1f7b] hover:bg-[#3c1f7b]  border-[#ac70ff] `
                      : `text-catppuccinText border-transparent `
                  } `}
                  key={i}
                >
                  <div className="flex gap-4 justify-between items-center text-sm font-semibold transition-all">
                    <div className="flex gap-2 justify-between items-center">
                      <i>{item.icon}</i>
                      {item.name}
                    </div>
                    <i className="opacity-50">
                      <CgClose />
                    </i>
                  </div>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="py-2 bg-[#281d4e] px-6 gap-6 flex items-center">
              <div className="hidden gap-5 opacity-50 md:flex">
                <div className="px-1">
                  <FaArrowLeft />
                </div>
                <div className="px-1">
                  <FaArrowRight />
                </div>
                <div className="px-1">
                  <FaArrowRotateRight />
                </div>
              </div>
              <div className="flex overflow-hidden items-center px-4 rounded-md bg-[#2d245b] w-full ">
                <BsSearch size={16} />
                <input
                  type="text"
                  className="p-2 w-full outline-none bg-[#2d245b]"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center px-3 pt-12 mx-8">
              {/* <h1 className="text-7xl font-bold text-catppuccinRed">Projects</h1> */}
              <h1 className="text-5xl font-bold text-blue-500 uppercase md:text-5xl xl:text-6xl">
                Projects
              </h1>
              <p className="max-w-xl leading-relaxed text-center text-catppuccinSubtext1">
                These are some of the best projects I have worked on as a
                computer science student.
              </p>
            </div>

            <ul className="flex flex-wrap gap-4 p-12 rounded-xl bg-catppuccinMantle">
              {projects.map((project, i) => (
                  <Window key={i}>
                    {project && <ProjectCard project={project} />}
                  </Window>
              ))}
            </ul>
          </Window>
        </div>
      </main>
    </>
  );
};

export default Projects;
