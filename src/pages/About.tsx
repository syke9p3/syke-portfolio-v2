import { motion } from "framer-motion";

import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { stack } from "../data/stack";
import Window from "../components/Window";


const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Kenth Saya-ang Portfolio</title>
      </Helmet>
      <main className="flex flex-col min-h-[90vh] py-8 container mx-auto">
        <div className="gap-6 mx-6">
          <div className="md:flex md:pl-12">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} className="flex flex-col gap-6 mt-0 mb-8 pt-8 justify-center items-center md:justify-start md:items-start text-center md:text-left">
              <h2 className="text-2xl font-bold text-catppuccinSapphire uppercase md:text-4xl xl:text-5xl">
                Skills
              </h2>
              <p className="leading-relaxed text-catppuccinSubtext0 text-sm max-w-md md:max-w-max">
                Languages, technologies, tools, and platforms I have experienced and applied in my past projects.
              </p>
            </motion.div>
            <section className="flex flex-wrap gap-2 mt-0 px-6 pb-12 items-center justify-center md:justify-start">

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
          <div className="mt-12"></div>

        </div>
      </main >
    </>
  );
};





export default About;
