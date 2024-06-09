import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  date: string;
  imgSrc: string;
  link: string;
  description: string;
  type: string;
}

const ProjectCard = ({ project }: { project: Project }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
    >

      <div className="grid grid-cols-1 col-span-1 gap-8 sm:p-8">
        <Link to={project.link} target="_blank" className="rounded-md">
          <img
            src={project.imgSrc}
            alt=""
            className="col-span-1 transition-all duration-150 ease-in cursor-pointer max-h-[400px]"
          />
        </Link>
        <div>
          <div className="flex flex-col col-span-1">
            <p className="mt-auto text-xs text-catppuccinSubtext0">
              {project.date}
            </p>
            <h1 className="mt-4 mb-6 text-2xl font-semibold">{project.name}</h1>
            <p className="text-sm leading-relaxed text-catppuccinSubtext1">
              {project.description}
            </p>
            <div className="my-8">
              {
                project.type == 'software' ? (
                  <span className="px-2 py-1 text-sm font-semibold bg-blue-500 rounded-full">
                    Software
                  </span>

                ) :
                  project.type == 'ui' ? (
                    <span className="px-2 py-1 text-sm font-semibold bg-orange-400 rounded-full">
                      UI Design
                    </span>

                  ) :
                    project.type == 'graphics' ? (
                      <span className="px-2 py-1 text-sm font-semibold bg-teal-400 rounded-full">
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
