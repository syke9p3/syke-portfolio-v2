import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { stack } from "../data/stack";
import Window from "../components/Window";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Kenth Saya-ang Portfolio</title>
      </Helmet>
      <main className="flex flex-col min-h-[90vh] py-8 container mx-auto " id="about">
        <div className="mx-6 md:mx-12">
          <Window header="Skills">
            {/* <div className="mt-12"></div> */}
            <div className="gap-6 mx-3 md:mx-6">
              <div className="md:flex md:pl-12">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-0 mb-8 pt-8 justify-center items-center md:justify-start md:items-start text-center md:text-left">
                  <h2 className="text-2xl font-bold text-catppuccinSapphire uppercase md:text-4xl xl:text-5xl">
                    Skills
                  </h2>
                  <p className="leading-relaxed text-catppuccinSubtext0 text-sm max-w-md md:max-w-max">
                    Languages, technologies, tools, and platforms both experienced and applied in past projects.
                  </p>
                </motion.div>
                <section className="flex flex-wrap gap-2 mt-0 md:pl-6 pb-12 items-center justify-center md:justify-start">
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
          </Window>
        </div>
        <Timeline />
      </main >
    </>
  );
};




const Timeline = () => {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-12 pt-8 px-12 text-center items-center">
        <h2 className="text-2xl font-bold text-blue-500 uppercase md:text-2xl xl:text-2xl">
          Skills
        </h2>
        <p className="max-w-md leading-relaxed text-catppuccinSubtext0 text-sm">
          Languages, technologies, tools, and platforms I have experienced and applied in my past projects.
        </p>
      </motion.div> */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-0 mb-8 pt-8 justify-center items-center md:justify-start md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold text-catppuccinMauve uppercase md:text-4xl xl:text-4xl">
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

export default About;
