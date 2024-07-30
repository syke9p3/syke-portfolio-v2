import { BsPerson } from "react-icons/bs"
import PageLayout from "../components/PageLayout"
import { Link, useParams } from "react-router-dom"
import { IProject, projects } from "../data/projectList"
import { useEffect, useState } from "react"
import Fancybox from "../components/Fancybox"
import { motion } from "framer-motion";
import avatar from "../assets/syke-0.jpg";
import NotFound from "./NotFound"
import Markdown from "../content/Markdown"

const Blog = () => {

  const { projectId } = useParams();

  const [project, setProject] = useState<IProject | null>();
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all projects or not

  const toggleShowProjects = () => {
    setShowAll(prevShowAll => !prevShowAll); // Toggle the showAll state
  };

  useEffect(() => {
    const selectedProject = projects.find(proj => proj.id === projectId)
    setProject(selectedProject)

    window.scrollTo(0, 0);

  }, [projectId, projects])

  if (!project) return (
    <NotFound />
  )


  return (
    <>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
          Thumbs: {
            type: "classic",
          },
        }}
      >
        <Ads />
        {/* <div className="grid place-items-center w-full h-64 text-center  bg-[url('https://images.unsplash.com/photo-1576502200916-3808e07386a5?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover">
        <h1 className="text-3xl font-semibold tracking-wide text-white lg:text-5xl font-poppins">How To Make a Blog Web Page</h1>
      </div> */}
        <PageLayout title={project?.name as string}>


          {/* <div id="ad" className="relative my-8 w-full h-40"> */}
          {/* <img id="ad"
          src="https://infiniteingenuity.wordpress.com/wp-content/uploads/2015/03/leaderboard.jpg"
          alt=""
          className="my-8 w-full h-full border-white"
        /> */}
          {/* </div> */}
          <div className="grid grid-cols-1 gap-8 px-8 m-auto my-12 xl:grid-cols-12">
            {/* STICKY CONTENT */}
            {/* <div className="">
              <ul className="sticky top-16 p-8 my-12 bg-catppuccinMantle">
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
                <p>E</p>
              </ul>
            </div> */}

            {/* BLOG CONTENT */}
            <motion.div className="md:col-span-8"
              key={projectId}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} >
              {/* Header */}
              <div className="px-6">
                {/* Project Name */}
                <h1 className="text-4xl font-semibold text-gradient">{project?.name}</h1>
                <div className="flex gap-6 mt-4 font-semibold tracking-wide uppercase">
                  <div className="flex gap-2 items-center">
                    <p className="text-catppuccinSubtext0">{project?.date}</p>
                  </div>
                  <div className="flex gap-2 items-center text-catppuccinSubtext0">
                    <BsPerson />
                    <p className="text-catppuccinSubtext0">Kenth Saya-ang</p>
                  </div>
                </div>
              </div>
              {/* Banner Image */}
              <a href={project?.imgSrc} data-fancybox="gallery">
                <div className="my-8 rounded-xl relative w-full overflow-hidden" title="Click image to view expanded">
                  {/* <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover absolute top-0 left-0 w-full h-full" /> */}
                  <img
                    src={project?.imgSrc}
                    alt={project?.name}
                    className="w-full h-full" />
                </div>
              </a>
              <p className="px-6 my-6 tracking-wide leading-8 font-poppins">
                {/* {article.content} */}

                <Markdown />
              </p>
            </motion.div>
            <div className="relative space-y-8 text-sm xl:col-span-4">
              {/* OTHER PROJECTS */}
              <motion.div
                className="top-10 p-8 pb-4 rounded-xl border border-gray-600 -xl:sticky ">
                <p className="pb-6 text-2xl font-semibold">Other Projects</p>
                <motion.div
                  key={projectId}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="divide-y">

                  {projects.filter((proj) => (proj.id !== project?.id)).slice(0, showAll ? projects.length : 3).map((proj) => (
                    <Link to={`/portfolio/details/${proj.id}`} className="flex items-start py-4 border-gray-600 group/item">
                      <div className="relative h-16 aspect-video">
                        <img
                          src={proj.imgSrc}
                          alt=""
                          className="object-cover absolute w-full h-full rounded-md border-white"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="px-4 tracking-wide font-bold group-hover/item:text-blue-400">
                          {proj.name}
                        </h2>
                        <div className=" overflow-hidden max-h-16 nowrap"
                        >
                          <p className="px-4 text-xs opacity-70 text-ellipsis">{proj.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
                <button onClick={toggleShowProjects} className="w-full mt-4 text-blue-300">
                  {showAll ? 'Hide other projects' : 'More projects'}
                </button>

              </motion.div>

              {/* ABOUT ME */}
              <div className="p-8 rounded-xl border border-gray-600">
                <p className="pb-6 text-2xl font-semibold">About Me</p>
                <div className="grid place-items-center">
                  <div className="overflow-hidden relative mb-6 h-36 rounded-full bordser-4 border-white aspect-square">
                    <img
                      src={avatar}
                      alt=""
                      className="object-cover absolute w-full h-full rounded-md border-white"
                    />
                  </div>
                </div>

                <h5 className="mb-6 text-xl font-semibold tracking-wide text-center text-blue-400">Kenth Saya-ang</h5>
                <p className="leading-relaxed text-center">
                  I'm quite passionate when it comes to learning stuff in a wide range of interests - web design, UI/UX designs, graphic illustrations, animation.
                </p>
              </div>


            </div>
          </div>
        </PageLayout>
      </Fancybox >
    </>
  )
}

const Ads = () => {
  return (
    <>
      {/* <div className="ads">
        <div id="ad" className="flex fixed top-8 left-8 z-50 flex-col justify-end">
          <div className="flex justify-between bg-white">
            <p className="p-1 text-xs text-[blue] font-poppins">Sponsored by: Coca Cola</p>
            <button className="px-2">x</button>
          </div>
          <img
            src="https://xpressprintinganddesign.com/wp-content/uploads/2017/06/Coke-Vertical-Banner-pdf.jpg"
            alt=""
            className="h-[600px] border-white"
          />
        </div>
        <div id="ad" className="flex fixed right-8 bottom-8 z-50 flex-col justify-end">
          <div className="flex justify-between bg-white">
            <p className="p-1 text-xs text-[blue] font-poppins">Sponsored by: Gilette</p>
            <button className="px-2">x</button>
          </div>
          <img
            src="https://wp.disruptiveadvertising.com/wp-content/uploads/2014/07/Screen-Shot-2014-07-29-at-5.00.32-PM.png"
            alt=""
            className="h-[320px] border-white"
          />
        </div>
        <div id="ad" className="flex fixed bottom-0 left-20 z-50 flex-col justify-end">
          <div className="flex justify-between bg-white">
            <p className="p-1 text-xs text-[blue] font-poppins">Sponsored by: Microhard</p>
            <button className="px-2">x</button>
          </div>
          <img
            src="https://www.viruspup.com/wp-content/uploads/2021/09/fake-popup-2-e1632557814512.jpg"
            alt=""
            className="h-[320px] border-white"
          />
        </div>
        <div id="ad" className="flex fixed right-10 top-12 z-50 flex-col justify-end">
          <div className="flex justify-between bg-white">
            <p className="p-1 text-xs text-[blue] font-poppins">Sponsored by: Weebs</p>
            <button className="px-2">x</button>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/super-sale-banner-with-anime-style_150972-1368.jpg"
            alt=""
            className="h-[320px] border-white"
          />
        </div>
      </div> */}</>
  )
}

export default Blog