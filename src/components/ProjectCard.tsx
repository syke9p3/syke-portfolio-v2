import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";

interface Project {
  id: number;
  name: string;
  date: string;
  imgSrc: string;
  link: string;
  description: string;
  type: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 col-span-1 gap-8 p-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl max-h-[250px]">
          <img
            src={props.project.imgSrc}
            alt=""
            className="object-cover col-span-1 transition-all duration-150 ease-in cursor-pointer md:h-full"
          />
        </div>
        <div className="flex flex-col col-span-1 gap-8">
          <div>
            <span className={`px-2 py-1 text-sm font-semibold bg-blue-500 rounded-full`}>
              Software
            </span>
          </div>
          <h1 className="text-2xl font-semibold">{props.project.name}</h1>
          <p className="max-w-md text-sm text-catppuccinSubtext1">
            {props.project.description}
          </p>
          <div className="flex gap-2">
            <Link to={"/"}>
              <BsGithub size={24} />
            </Link>
            <Link to={"/"}>
              <FaFacebook size={24} />
            </Link>
            <Link to={"/"}>
              <BsTwitter size={24} />
            </Link>
            {/* <Link to={'/'}> */}
            {/* TODO: create custom icon component  */}
            {/* </Link> */}
          </div>
          <p className="mt-auto text-xs text-catppuccinSubtext0">
            September 16, 2023
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
