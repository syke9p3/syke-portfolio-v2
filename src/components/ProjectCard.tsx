import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Project } from "../data/projectList";

const ProjectCard = ({ project }: { project: Project }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    // whileInView={{ opacity: 1, y: 0 }}
    >

      <div className="grid grid-cols-1 col-span-1 gap-8 sm:p-8 ">
        <a href={project.imgSrc} data-fancybox="gallery" className="rounded-md">
          <img
            src={project.imgSrc}
            alt=""
            className="col-span-1 transition-all duration-150 ease-in cursor-pointer max-h-[400px] rounded-md"
          />
        </a>
        <div>
          <ul className="flex flex-wrap gap-2 pt-0 pb-4" onClick={(e) => e.stopPropagation()}>
            {project.links && project.links.map((link, i) => (
              <Link key={i} to={link.url} target="_blank" title={link.title}>
                {link.icon}
              </Link>
            ))
            }
          </ul>
          <div className="flex flex-col col-span-1">
            <p className="mb-4 text-sm text-catppuccinSapphire">
              {project.stack}
            </p>
            <h1 className="mt-0 mb-6 text-2xl font-semibold leading-tight">{project.name}</h1>
            <p className="text-sm text-catppuccinSubtext1">
              {project.description}
            </p>


            {/* TODO: Customizable Badge Component */}
            <div className="my-8">
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
