import { Link } from "react-router-dom";
import { IProject } from "../data/projectList";

const ProjectCard = ({ project, category }: { project: IProject, category: string }) => {

  return (
    <div
      key={category}
      // initial={{ opacity: 0, y: -50 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-lg md:rounded-xl border-2 border-catppuccinSurface0 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center col-span-1">
        {/* <Link to={`/portfolio/details/${project.id}`} className="group/card"> */}
        <Link to={project.link} target="_blank" className="group/card">
          <div className="rounded-md grid grid-cols-1 col-span-1 border border-transparent hover:bg-catppuccinMantles r">
            <div className="grid place-items-center bg-catppuccinSurface0">
              <img
                src={project.imgSrc}
                alt=""
                className="col-span-1 transition-all duration-150 ease-in cursor-pointer max-h-[400px] rounded-t-lg md:rounded-t-xl"
              />
            </div>
            <div className="px-3 py-2 pb-6">
              <div className="text-sm rounded-md px-4 grid gap-3 pt-6">
                <h1 className="mt-0 mb-3 text-2xl font-semibold leading-tight group-hover/card:text-blue-500 animate">{project.name}</h1>
                <p className=" text-catppuccinSubtext1">
                  {project.description}
                </p>
                <p className="text-sm text-catppuccinSapphire">
                  {project.stack}
                </p>
              </div>
            </div>
            {/* TODO: Customizable Badge Component */}
          </div>
        </Link>
        <div className="px-6 w-full flex justify-between pb-6">
          <Badge type={project.type} />
          <div className="gap-2 flex" onClick={(e) => e.stopPropagation()}>
            {project.links && project.links.map((link, i) => (
              <i>
                <Link key={i} to={link.url} target="_blank" title={link.title} className={`hover:text-blue-500 aspect-square`}>
                  {link.icon}
                </Link>
              </i>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );


};

const Badge = ({ type }: { type: string }) => {
  return <div>
    {type == 'software' ? (
      <span className="px-2 py-1 text-sm font-semibold bg-blue-500 text-white  rounded-full">
        Software
      </span>
    ) :
      type == 'ui' ? (
        <span className="px-2 py-1 text-sm font-semibold bg-teal-500  text-white rounded-full">
          UI Design
        </span>
      ) :
        type == 'graphics' ? (
          <span className="px-2 py-1 text-sm font-semibold bg-indigo-500  text-white rounded-full">
            Illustration
          </span>
        ) : 'Not any'}
  </div>;
}

export default ProjectCard;
