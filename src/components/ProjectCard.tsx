import { Link } from "react-router-dom";
import { IProject, ProjectType } from "../data/projectList";
import clsx from "clsx";

const ProjectCard = ({ project }: { project: IProject, category: string }) => {

  return (
    <div
      className=" rounded-lg md:rounded-xl border-2 border-catppuccinSurface0 hover:border-catppuccinSurface1 animate overflow-hidden relative"
    >
      <div className="flex flex-col justify-center items-center col-span-1">
        {/* <Link to={`/portfolio/details/${project.id}`} className="group/card"> */}
        <Link to={project.link} target="_blank" className="group/card">
          <div className="rounded-md grid grid-cols-1 col-span-1 border border-transparent hover:bg-catppuccinMantles r">
            <div className="grid place-items-center overflow-hidden">
              <img
                src={project.imgSrc}
                alt=""
                className="animate col-span-1  cursor-pointer max-h-[400px] rounded-t-lg md:rounded-t-xl"
              />
            </div>
            <div className="px-3 py-2 pb-6">
              <div className="text-sm rounded-md px-4 grid gap-3 pt-6">
                <h1 className="mt-0 mb-3 text-2xl font-semibold leading-tight animate">{project.name}</h1>
                <p className=" text-catppuccinSubtext1 text-base">
                  {project.description}
                </p>
                <ul className="text-sm flex flex-wrap gap-2 my-4">
                  {project.stack.map((s, i) => (
                    <span key={i} className="tracking-wide px-4 py-2 border border-catppuccinSurface0 rounded-md">
                      {s}
                    </span>
                  ))}
                </ul>
              </div>
            </div>
            {/* TODO: Customizable Badge Component */}
          </div>
        </Link>

      </div>
      <div className="px-6 flex w-full justify-between items-center absolute z-50 top-5">
        <Badge type={project.type} />
        <div className="gap-2 absolute right-5 flex bg-catppuccinBase p-2 rounded-md shadow-xl" onClick={(e) => e.stopPropagation()}>
          {project.links && project.links.map((link, i) => (
            <i key={i} >
              <Link to={link.url} target="_blank" title={link.title} className={`hover:text-blue-500 aspect-square`}>
                {link.icon}
              </Link>
            </i>
          ))
          }
        </div>
      </div>
    </div>
  );


};

const Badge = ({ type }: { type: string }) => {

  return <div>

    <span className={clsx("px-2 py-1 text-sm font-semibold text-white  rounded-full shadow-xl",
      {
        'bg-blue-500': type === ProjectType.SOFTWARE,
        'bg-teal-500': type === ProjectType.UI,
        'bg-amber-500': type === ProjectType.GRAPHICS,
      }
    )}>
      {type === ProjectType.SOFTWARE && "Software"}
      {type === ProjectType.UI && "UI Design"}
      {type === ProjectType.GRAPHICS && "Illustration"}
    </span>


  </div>;
}

export default ProjectCard;
