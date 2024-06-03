import { motion } from "framer-motion";
import Window from "../components/Window";
import { CgChevronRight, CgFile } from "react-icons/cg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TextAnim from "../components/animation/CursorBlinker";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kenth Saya-ang Portfolio</title>
      </Helmet>

      <main className="min-h-[400px] container mx-auto bg-cover bg-center bg-no-repeat">
        <Hero />
        {/* <Grid /> */}
      </main>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <section id="hero" className="grid py-12 lg:grid-cols-2">
        <BannerText />
        {/* <div className="flex flex-col gap-6 items-start md:space-y-12 md:flex-row"> */}
        <div className="flex relative flex-col justify-center items-center w-full min-h-72">
          <div className="relative w-full md:w-[70%]">
            <PersonalInfoWindow />
          </div>
          <div className="relative w-full md:w-[75%] mt-8 lg:-mt-8 lg:ml-16">
            <AboutMeWindow />
          </div>
        </div>

      </section>
      {/* <div className="flex justify-center py-6 mt-12">
        <p className="text-xs leading-relaxed text-[#9fa4b3c4] opacity-80">My website was inspired from <span className="text-catppuccinYellow">Catpuccin Mocha</span> theme and my <span className="text-catppuccinGreen">Linux Mint</span> setup.</p>
      </div> */}
    </>
  );
};

const BannerText = () => {
  return (
    <div className="grid relative flex-col place-content-center py-12 pb-24 sm:flex sm:flex-row">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex relative flex-col gap-3"
      >
        {/* <div className="b">
          <span className="p-1 my-2">@syke9p3</span>
        </div> */}
        <p className="text-5xl font-bold lg:text-6xl">
          Hello I'm <span className="text-catppuccinRed">Kenth</span>!
        </p>
        {/* <hr className="mb-2 opacity-20" /> */}
        <Selection />
        <div className="flex flex-col mt-4 max-w-md leading-relaxed text-catppuccinSubtext1">
          Computer Science Student (im a web developer with React,
          Tailwind CSS) I'm quite passionate about learning anything I find
          interesting.
        </div>
        <span>
          <Link to={'/files/resume.pdf'} target="_blank" className="inline-block my-4">
            <button className="flex gap-2 items-center px-4 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group hover:from-cyan-400 hover:to-blue-400 text-catppuccinBase">
              <div className="group-hover:" ><CgFile size={20} /></div>
              My Resume
            </button>
          </Link>
        </span>
      </motion.div>

    </div>

  )
}


const Selection = () => {

  const [hovered, setHovered] = useState<number | null>(null);

  const selections = [
    {
      name: 'software developer',
      link: 'software',
      color: 'catppuccinBlue'
    },
    {
      name: 'ui designer',
      link: 'ui',
      color: 'catppuccinYellow'
    },
    {
      name: 'illustrator',
      link: 'graphic',
      color: 'catppuccinTeal'
    },
  ]

  return (
    <div className="flex gap-2 leading-relaxed -translate-x-6 lg:text-md text-catppuccinSubtext1">
      {selections && selections.map((selection, i) => (
        <Link to={`/projects?category=${selection.link}`} className='border-white border-opacity-20'>
          <div className="flex gap-2 pr-2 pb-3 h-full group" key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >

            <motion.span
              initial={{ x: 5 }}
              animate={{ x: -3 }}
              transition={{
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
                duration: 0.5
              }}
              className={`mt-1 ${(!hovered && i === 0) ? `opacity-100` : `opacity-0`} group-hover:opacity-100`}>
              <CgChevronRight className="scale-125" />
            </motion.span>

            {
              selection.link == 'software' ? (
                <span className="text-catppuccinBlue">
                  {selection.name}
                </span>

              ) :
                selection.link == 'ui' ? (
                  <span className="text-catppuccinYellow">
                    {selection.name}
                  </span>

                ) :
                  selection.link == 'graphic' ? (
                    <span className="text-catppuccinTeal">
                      {selection.name}
                    </span>
                  ) : ('')
            }

          </div>
        </Link>
      ))
      }
    </div >
  )
}



const PersonalInfoWindow = () => {
  return (
    <Window header="Personal Information" delay={0.3}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="items-center p-1 leading-[1.6em]"
        style={{ fontFamily: "Fira Code" }}
      >
        <span className="mr-3">
          <span className="px-4 bg-[#0087af] inline-block align-middle font-semibold text-white">
            syke9p3
          </span>
          <span className="px-4 bg-[#585858] inline-block align-middle font-semibold text-white">
            ~
          </span>
        </span>
        biofetch
        <div className="flex gap-6 pl-6 mt-6">
          <div className="grid place-items-center">
            <img
              src="https://avatars.githubusercontent.com/u/75114627?v=4"
              alt=""
              className="object-cover h-36 rounded-full"
            />
          </div>
          <div>
            <p className="text-catppuccinGreen">@syke9p3</p>
            <p>------------- </p>
            <p>
              <b className="text-catppuccinGreen">Name</b>: Kenth Saya-ang{" "}
            </p>
            <p>
              <b className="text-catppuccinGreen">Age</b>: 22{" "}
            </p>
            <p>
              <b className="text-catppuccinGreen">Location</b>: Taguig City{" "}
            </p>
            <p>
              <b className="text-catppuccinGreen"> Gender</b>: Male{" "}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="pb-12">

      </div>

      <div className="grid p-1 max-h-64 md:grid-cols-12">
        <div className="col-span-4 max-w-full"></div>

      </div>
    </Window>
  );
};



const AboutMeWindow = () => {

  const delays = [1, 5];

  return (
    <Window header="about_me.txt" delay={delays[0]}>
      <div
        className="items-center p-1 leading-[1.6em] relative"
        style={{ fontFamily: "Fira Code" }}
      >
        <div
          className="">
          <div className="px-2 mb-2 align-middle text-catppuccinBase bg-catppuccinSubtext0">
            GNU Nano
          </div>
        </div>
        <div className="flex gap-1 p-4">
          <span className="pt-1">
            <CgChevronRight />
          </span>
          <div className="grid gap-2">
            <div className="leading-relaxed">
              <TextAnim baseText={"I'm quite passionate about learning anything I find interesting."} delay={delays[0]} blinkDelay={0} removeCursor removeCursorDelay={0} />
              <div className="inline-block h-5 w-[10px] translate-y-1 bg-transparent" />
            </div>
            <div className="leading-relaxed">
              <TextAnim baseText={"Recently, I've been exploring the world of open source software and is looking repositories to contribute to."} delay={delays[0] + delays[1]} blinkDelay={delays[1]} removeCursor removeCursorDelay={3} />
              <div className="inline-block h-5 w-[10px] translate-y-1 bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};


// const Grid = () => {
//   return (
//     <section
//       id="hero"
//       className="grid grid-cols-8 md:grid-cols-12 gap-4 h-[70vh] bg-black "
//     >
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="grid col-span-12 row-span-2 place-items-center rounded-xl border border-white hover:animate-pulse bg-slate-600"
//       >
//         1
//       </motion.div>
//       <div
//         // initial={{
//         //   // visibility: 'hidden',
//         //   scale: 0
//         // }}
//         // animate={{
//         //   // visibility: 'visible',
//         //   scale: 1
//         // }}
//         // exit={{
//         //   rotate:'180deg',
//         // }}
//         // transition={{
//         //   duration: 1,
//         //   type: 'spring'
//         // }}

//         className="grid col-span-4 place-items-center rounded-xl border border-white bg-slate-600 hover:animate-pulse"
//       >
//         1
//       </div>
//       <div className="grid col-span-4 place-items-center rounded-xl border border-white bg-slate-600 hover:animate-pulse">
//         1
//       </div>
//       <div className="grid col-span-4 place-items-center rounded-xl border border-white bg-slate-600 hover:animate-pulse">
//         1
//       </div>
//       <div className="grid col-span-4 place-items-center rounded-xl border border-white bg-slate-600 hover:animate-pulse">
//         1
//       </div>
//     </section>
//   );
// };

export default Home;
