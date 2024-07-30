import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { stack } from "../data/stack";
import Window from "../components/Window";
import { CgChevronRight } from "react-icons/cg";
import TextAnim from "../components/animation/CursorBlinker";
import avatar from "../assets/syke-1.jpeg"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Kenth Saya-ang</title>
      </Helmet>
      <main className="flex flex-col min-h-[90vh] py-8 container mx-auto " id="about">
        <AboutMeWindow />
        {/* <Certifications /> */}
        <Skills />
        <Timeline />
      </main >
    </>
  );
};

const AboutMeWindow = () => {

  const delays = [1, 5];

  return (
    <>
      <div className="w-full mx-auto px-4 md:px-6 ">
        <div className="w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-12 mb-16 text-center items-center">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 uppercase md:text-6xl xl:text-7xl">
              About Me
            </h1>
            <p className="max-w-md leading-relaxed text-catppuccinSubtext1">

            </p>
          </motion.div>
          <Window header="description.txt" delay={delays[0]}>
            <div
              className="items-center p-1 leading-[1.6em] relative"
              style={{ fontFamily: "Fira Code" }}
            >
              <div className="px-4 mb-2 align-middle text-catppuccinBase bg-catppuccinSubtext0">
                GNU Nano
              </div>
              <div className="flex">
                <div
                  className="ml-4 my-4 aspect-square w-24 h-24 max-w-[600px]"
                  data-fancybox="gallery">
                  <img
                    src={avatar}
                    alt=""
                    className="object-cover w-24 h-24 rounded-md border-white"
                  />
                </div>
                <div className="flex gap-1 p-4">
                  <span className="pt-1">
                    <CgChevronRight />
                  </span>
                  <div className="grid gap-2">
                    <div className="leading-relaxed">
                      <TextAnim baseText={"I'm quite passionate about learning anything I find interesting."} delay={delays[0]} blinkDelay={0} removeCursor removeCursorDelay={0} />
                      <div className="inline-block h-5 w-[10px] translate-y-1 bg-transparent" />
                      <TextAnim baseText={"Recently, I've been exploring the world of open source software and is looking repositories to contribute to."} delay={delays[0] + delays[1]} blinkDelay={delays[1]} removeCursor removeCursorDelay={3} />
                    </div>
                    <div className="leading-relaxed">
                      <div className="inline-block h-5 w-[10px] translate-y-1 bg-transparent" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Window>
        </div>
      </div>
    </>
  )
}

const Timeline = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-0 mb-8 pt-8 justify-center items-center md:justify-start md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold text-catppuccinSapphire  uppercase md:text-4xl xl:text-4xl">
              Educational History
            </h2>
            <p className="leading-relaxed text-catppuccinSubtext0 text-sm max-w-md md:max-w-max">
              Schools/university entered in junior high, senior high, and college including the course/strand taken.
            </p>
          </motion.div>
          <div className="w-full max-w-3xl mx-auto">

            <div className="mt-12 px-12 bg-s">
              {/* <!-- Item #1 --> */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                {/* <!-- Purple label --> */}
                {/* <h1 className="font-caveat text-sm   font-bold text-indigo-400 mb-1 sm:mb-0">college</h1> */}
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-700 bg-catppuccinLavender rounded-full">2020-2024</time>
                  <div className="text-2xl font-bold text-indigo-500">Bachelor of Science in Computer Science</div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-400">Polytechnic University of the Philippines </div>
              </div>
              {/* <!-- Item #2 --> */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                {/* <!-- Purple label --> */}
                <h1 className="font-caveat text-sm  font-bold text-indigo-400 mb-1 sm:mb-0">senior high school</h1>
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-700 bg-catppuccinLavender rounded-full">2018-2020</time>
                  <div className="text-xl font-bold text-indigo-500">Science, Technology, Engineering, Mathematics (STEM) </div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-400">Polytechnic University of the Philippines </div>
              </div>
              {/* <!-- Item #3 --> */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                {/* <!-- Purple label --> */}
                <h1 className="font-caveat text-sm  font-bold text-indigo-600 mb-1 sm:mb-0">junior high school</h1>
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-700 bg-catppuccinLavender rounded-full">2014-2018</time>
                  <div className="text-xl font-bold text-indigo-400"></div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-400">Dr Arcadio Santos National High School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// const Certifications = () => {
//   return (
//     <>
//       <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
//         <div className="w-full max-w-3xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-0 mb-8 pt-8 justify-center items-center md:justify-start md:items-start text-center md:text-left">
//             <h2 className="text-3xl font-bold text-catppuccinSapphire uppercase md:text-4xl xl:text-4xl">
//               Certifications
//             </h2>
//             <p className="leading-relaxed text-catppuccinSubtext0 text-sm max-w-md md:max-w-max">
//               Online courses taken and certificates received.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   )
// }

const Skills = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-0 mb-8 pt-8 justify-center items-center md:justify-start md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold text-catppuccinSapphire uppercase md:text-4xl xl:text-4xl">
              Skills
            </h2>
            <p className="leading-relaxed text-catppuccinSubtext0 text-sm max-w-md md:max-w-max">
              Languages, technologies, tools, and platforms both experienced and applied in past projects.
            </p>
          </motion.div>
          <section className="flex flex-wrap gap-2 mt-0 md:pl-6 items-center justify-center md:justify-start">
            {stack.map((tech, i) => (
              <button key={i} className="group/stack rounded-xl text-gray-500 bg-[##181825] aspect-square min-w-24 gap-2 grid place-items-center">
                <div className="text-center flex justify-center items-center flex-col gap-2">
                  <div className={`animate group-hover:text-[${tech.color}] group-hover/stack:text-blue-500`}>{tech.icon}</div> {/*  style={{ color: tech.color }} */}
                  <p className="text-xs text-gray-500">{tech.name}</p>
                </div>
              </button>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}

export default About;
