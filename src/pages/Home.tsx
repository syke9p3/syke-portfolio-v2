import { motion } from "framer-motion";
import Window from "../components/Window";
import { CgChevronRight } from "react-icons/cg";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kenth Saya-ang Portfolio</title>
      </Helmet>
      <main className="min-h-[400px] container mx-auto 80)] bg-cover bg-center bg-no-repeat">
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
        <div className="flex flex-col justify-center items-center my-12 sm:flex-row">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <p className="text-5xl font-bold lg:text-6xl">
              Hello I'm <span className="text-catppuccinRed">Kenth</span>!
            </p>
            <p className="max-w-sm text-sm leading-relaxed lg:text-md text-catppuccinSubtext1">
              aspiring <span className="text-cat text-catppuccinBlue">software developer</span> | <span className="m text-catppuccinYellow">ui designer</span>
            </p>
            <div className="flex mt-8 max-w-sm text-sm leading-relaxed">
              <span className="pt-1 pr-2 -ml-2 text-catppuccinRed">
                <CgChevronRight />
              </span>
              Better description of what I do (im a web developer with React,
              Tailwind CSS)
            </div>
          </motion.div>
        </div>

        {/* <div className="flex flex-col gap-6 items-start md:space-y-12 md:flex-row"> */}
        <div className="flex relative flex-col justify-center items-center w-full min-h-72">
          <div className="relative w-[70%]">
            <PersonalInfoWindow />
          </div>
          <div className="relative w-[70%] mt-8 lg:-mt-8 lg:ml-16">
            <AboutMeWindow />
          </div>
        </div>
      </section>
    </>
  );
};

const AboutMeWindow = () => {
  return (
    <Window header="About me">
      <div
        className="items-center p-1 leading-[1.6em] relative"
        style={{ fontFamily: "Fira Code" }}
      >
        <div className="">
          <div className="px-2 mb-2 align-middle text-catppuccinBase bg-catppuccinSubtext0">
            GNU Nano
          </div>
        </div>
        <div className="flex gap-1 p-4">
          <span className="pt-1">
            <CgChevronRight />
          </span>
          <div className="grid gap-2">
            <div>
              I'm quite passionate about learning anything I find interesting.
            </div>
            <div>
              Recently, I've been new to the world of{" "}
              <span className="text-catppuccinRed">open-source</span> and would
              like to contribute to more repositories soon.
              <span className="w-12 text-transparent bg-red-500 animate-blink">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

const PersonalInfoWindow = () => {
  return (
    <Window header="Personal Information">
      <div
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
              className="object-cover h-36 rounded"
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
      </div>

      <div className="pb-12"></div>

      <div className="grid p-1 max-h-64 md:grid-cols-12">
        <div className="col-span-4 max-w-full"></div>
      </div>
    </Window>
  );
};

const Grid = () => {
  return (
    <section
      id="hero"
      className="grid grid-cols-8 md:grid-cols-12 gap-4 h-[70vh] bg-black "
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid col-span-12 row-span-2 place-items-center rounded-xl border border-white hover:animate-pulse bg-slate-600"
      >
        1
      </motion.div>
      <div
        // initial={{
        //   // visibility: 'hidden',
        //   scale: 0
        // }}
        // animate={{
        //   // visibility: 'visible',
        //   scale: 1
        // }}
        // exit={{
        //   rotate:'180deg',
        // }}
        // transition={{
        //   duration: 1,
        //   type: 'spring'
        // }}

        className="grid col-span-4 place-items-center rounded-xl border border-white bg-slate-600 hover:animate-pulse"
      >
        1
      </div>
      <div className="grid col-span-4 place-items-center rounded-xl border border-white bg-slate-600 hover:animate-pulse">
        1
      </div>
      <div className="grid col-span-4 place-items-center rounded-xl border border-white bg-slate-600 hover:animate-pulse">
        1
      </div>
      <div className="grid col-span-4 place-items-center rounded-xl border border-white bg-slate-600 hover:animate-pulse">
        1
      </div>
    </section>
  );
};

export default Home;
