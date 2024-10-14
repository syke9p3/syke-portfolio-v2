import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ProjectCard from "../components/ProjectCard.tsx";
import Terminal from "../components/Terminal.tsx";
import { projects, IProject } from "../data/projectList.tsx";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowRotateRight,
  FaBars,
  FaGithub,
} from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { SiAdobephotoshop, SiVisualstudiocode } from "react-icons/si";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { entranceVariants } from "../components/animation/animationVariants.ts";

interface ICategory {
  name: string;
  icon: React.ReactNode;
}

const variant = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 100,
    y: 50,
    transition: {
      duration: 0.5,
      delay: 0.05,
    }
  },

}


const categories: Record<string, ICategory> = {
  all: {
    name: "everything!",
    icon: <FaGithub />,
  },
  software: {
    name: "software",
    icon: <SiVisualstudiocode />,
  },
  ui: {
    name: "ui designs",
    icon: <FiFigma />,
  },
  graphics: {
    name: "illustrations",
    icon: <SiAdobephotoshop />,
  },
}

type CategoryKey = keyof typeof categories;

const Portfolio = () => {

  return (
    <>
      <Helmet>
        <title>Portfolio | Kenth Saya-ang</title>
      </Helmet>
      <main className="flex flex-col min-h-[90vh] py-8 container mx-auto px-6  " id="projects">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-12 mb-16 text-center items-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 uppercase md:text-6xl xl:text-7xl">
            Portfolio
          </h1>
          <p className="max-w-md leading-relaxed text-catppuccinSubtext1">
            Some of the best projects I have worked on both personal and academic.
          </p>
        </motion.div>
        <Browser />
      </main>
    </>
  );
};

const filterData = (projects: IProject[], searchTerm: string, category: CategoryKey) => {
  const search = searchTerm.toLowerCase();
  return projects.filter((project) => {
    const name = project.name.toLowerCase();
    const description = project.description.toLowerCase();
    const type = project.type.toLowerCase();
    const stack = project.stack.map((s) => {
      return s.toLowerCase();
    });

    // stack is an array with lowercased words inside 
    // for each string in stack, check if the string contains the key search term
    const stackHasSearchTerm = stack.some((s) => s.includes(search))
    // console.log(`stack includes(${search}) is `, stackHasSearchTerm)

    return (
      (name.includes(search) || description.includes(search) || description.includes(search) || stackHasSearchTerm) &&
      (category === 'all' || type === category)
    );
  });
}


const Browser = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState<CategoryKey>(searchParams.get('category') as CategoryKey || 'all');

  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeCategory = (item: string) => {
    setCategory(item)
    setSearchParams({ category: item });
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const filteredData = useMemo(() => filterData(projects, searchTerm, category), [searchTerm, category]);

  return (
    <motion.div
      variants={entranceVariants}
      initial="hidden"
      animate="shown"
    >
      <Terminal header="Syke9p3 - Projects">
        {/* Filter */}
        <div className="grid sm:grid-cols-2 md:flex bg-[#21133d] gap-1 ">
          {categories && Object.keys(categories).map((item, i) => (
            <button
              onClick={() => { handleChangeCategory(item) }}
              className={`px-3 py-2 border duration-75 ease-out leading-tight rounded-sm  hover:bg-[#3f2b66] ${item == category
                ? `x-text-catppuccinMantle text-white bg-[#3c1f7b] hover:bg-[#3c1f7b]  border-[#ac70ff] `
                : `border-transparent text-white opacity-80`
                } `}
              key={i}
            >
              <div className="flex gap-4 justify-between items-center text-sm font-semibold transition-all">
                <div className="flex gap-2 justify-between items-center">
                  <i className="">{categories[item].icon}</i>
                  {categories[item].name}
                </div>
                <i className="opacity-50">
                  <CgClose />
                </i>
              </div>
            </button>
          ))}
        </div>
        {/* Search */}
        <div className="py-2 bg-[#281d4e] px-2 md:px-6 gap-6 flex items-center">
          <div className="hidden gap-5 md:flex">
            <div className="px-1 opacity-50 ">
              <FaArrowLeft />
            </div>
            <div className="px-1 opacity-50 ">
              <FaArrowRight />
            </div>
            <button className={`px-1 ${!searchTerm ? `opacity-50` : `opacity-100`}`}
              onClick={() => setSearchTerm('')}
            >
              <FaArrowRotateRight />
            </button>
          </div>
          <div className="flex overflow-hidden items-center px-4 rounded-md bg-[#2d245b] w-full ">
            <BsSearch size={16} />
            <input
              type="text"
              className="p-2 w-full outline-none bg-[#2d245b]"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="hidden gap-5 opacity-50 md:flex">
            <div className="px-1 scale-125">
              <FaBars />
            </div>
          </div>
        </div>
        <div className="p-4 md:p-16 group/container">
          <div className="text-center mb-12 opacity-70">
            {/* {`${numberOfProjects} item${numberOfProjects > 1 ? 's' : ''}`} */}
          </div>
          <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 1024: 2, 1280: 3 }}>
            <Masonry>
              {filteredData.map((project, i) => (
                <motion.div
                  key={i + category}
                  variants={variant}
                  initial="initial"
                  whileInView="animate"

                  whileTap="tap"
                  viewport={{
                    once: true
                  }}
                  custom={i}
                  className="md:mx-4 my-6 rounded-xl bg-catppuccinMantle hover:bg-catppuccinCrust group group-hover/container:scale-50 scale-50 "
                >{project && <ProjectCard key={i + category} category={category} project={project} />}</motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Terminal >
    </motion.div>
  )
}

export default Portfolio;
