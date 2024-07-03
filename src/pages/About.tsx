import { motion } from "framer-motion";

import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { GrReactjs } from "react-icons/gr";
import { SiHtml5 } from "react-icons/si";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Kenth Saya-ang Portfolio</title>
      </Helmet>
      <main className="flex flex-col min-h-[90vh] py-8 container mx-auto">
        <div className="gap-6">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-12 mb-16">
            <h1 className="text-5xl font-bold text-blue-500 uppercase md:text-5xl xl:text-6xl">
              ABOUT ME
            </h1>
            <p className="max-w-md leading-relaxed text-catppuccinSubtext1">
              This section is about me: my tech stack, list of education, etc
            </p>
          </motion.div>
          <TechPill icon={<SiHtml5 />} text="HTML" bgColor="#e34f26" />
          <section>
            <h2>Tech Stack</h2>
            <p>Web Dev List of web tech here</p>
            <p>Education</p>
            <p>Two ways I can approach this:</p>
            <p>1. Icon squares</p>
            <p>2. Icon Badges</p>
          </section>
          <section className="grid grid-cols-3 gap-2">
            <div className="rounded-xl text-gray-500 bg-black aspect-square size-16 grid place-items-center">
              <GrReactjs size={24} />
              {/* <p className="text-xs">React</p> */}
            </div>
            <div className="rounded-xl text-gray-500 bg-black aspect-square size-16 grid place-items-center">
              <GrReactjs size={24} />
              {/* <p className="text-xs">React</p> */}
            </div>
            <div className="rounded-xl text-gray-500 bg-black aspect-square size-16 grid place-items-center">
              <GrReactjs size={24} />
              {/* <p className="text-xs">React</p> */}
            </div>

          </section>
        </div>
      </main>
    </>
  );
};

const TechPill = ({ icon, text, bgColor }: { icon: ReactElement, text: string, bgColor: string }) => {
  return (
    <button className={`flex gap-2 items-center px-2 py-1 font-semibold tracking-wider bg-[${bgColor}] text-ca`}>
      <p>{icon}</p>
      <p>{text}</p>
    </button>
  )
}

export default About;
