import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Project } from "../data/projectList";

const ProjectCard = ({ project }: { project: Project }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-xl overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center col-span-1  bg-catppuccinCrust">
        <div className="rounded-md grid grid-cols-1 col-span-1 border border-transparent group/card hover:border-gray-800 hover:bg-catppuccinMantles r">
          <a href={project.imgSrc} data-fancybox="gallery" className="grid place-items-center bg-gray-50">
            <img
              src={project.imgSrc}
              alt=""
              className="col-span-1 transition-all duration-150 ease-in cursor-pointer max-h-[400px]"
            />
          </a>
          <div className="px-3 py-2 pb-6">
            <div className="text-sm rounded-md px-4 grid gap-3 pt-6">
              <h1 className="mt-0 mb-3 text-2xl font-semibold leading-tight">{project.name}</h1>
              <p className=" text-catppuccinSubtext1">
                {project.description}
              </p>
              <p className="text-sm text-catppuccinSapphire">
                {project.stack}
              </p>
              <div className="w-full flex justify-between py-3">
                <div className="">
                  {
                    project.type == 'software' ? (
                      <span className="px-2 py-1 text-sm font-semibold bg-blue-500 text-white  rounded-full">
                        Software
                      </span>
                    ) :
                      project.type == 'ui' ? (
                        <span className="px-2 py-1 text-sm font-semibold bg-orange-400  text-white rounded-full">
                          UI Design
                        </span>
                      ) :
                        project.type == 'graphics' ? (
                          <span className="px-2 py-1 text-sm font-semibold bg-teal-400  text-white rounded-full">
                            Illustration
                          </span>
                        ) : 'Not any'
                  }
                </div>
                <div className="gap-2 flex" onClick={(e) => e.stopPropagation()}>
                  {project.links && project.links.map((link, i) => (
                    <i>
                      <Link key={i} to={link.url} target="_blank" title={link.title} className="hover:text-indigo-400 aspect-square">
                        {link.icon}
                      </Link>
                    </i>
                  ))
                  }
                </div>

              </div>
            </div>


            {/* TODO: Customizable Badge Component */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
