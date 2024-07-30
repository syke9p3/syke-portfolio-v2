import { motion } from "framer-motion";
import Terminal from "../components/Window";
import { CgChevronRight, CgFile } from "react-icons/cg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import Fancybox from "../components/Fancybox";
import socials from "../data/socials";
import avatar from "../assets/syke-0.jpg"
import ResumeButton from "../components/ResumeButton";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kenth Saya-ang</title>
      </Helmet>
      <Hero />
    </>
  );
};

const Hero = () => {
  return (
    <>
      <main className="min-h-[900px] container mx-auto bg-cover bg-center bg-no-repeat">
        <section id="hero" className="grid py-12 mx-4 xl:grid-cols-2 px-6">
          <BannerText />
          {/* <div className="flex flex-col gap-6 items-start md:space-y-12 md:flex-row"> */}
          <div className="flex relative flex-col justify-center items-center w-full min-h-72">
            <div className="relative w-full md:w-[70%]">
              <PersonalInfoWindow />
            </div>
            <div className="relative w-full md:w-[75%] mt-8 lg:-mt-8 lg:ml-16">
              <SocialsWindow />
            </div>
          </div>
        </section>
      </main>


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
          Hello I'm <span className="text-gradient">Kenth</span>!
        </p>
        {/* <hr className="mb-2 opacity-20" /> */}
        <Selection />
        <div className="flex flex-col text-lg mt-4 max-w-md leading-relaxed text-catppuccinSubtext1">
          4th year Computer Science student at PUP-Manila aspiring to be full stack developer.
        </div>
        <span>
          <ResumeButton />
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
      color: 'catppuccinRed'
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
        <a href={`/#projects?category=${selection.link}`} className='text-lg border-white border-opacity-20'>
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
                <span className="text-catppuccinSapphire">
                  {selection.name}
                </span>

              ) :
                selection.link == 'ui' ? (
                  <span className="text-catppuccinSapphire">
                    {selection.name}
                  </span>

                ) :
                  selection.link == 'graphic' ? (
                    <span className="text-catppuccinSapphire">
                      {selection.name}
                    </span>
                  ) : ('')
            }

          </div>
        </a>
      ))
      }
    </div >
  )
}



const PersonalInfoWindow = () => {
  return (
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
      <Terminal header="personal information" delay={0.3}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="items-center p-1 leading-[1.6em]"
          style={{ fontFamily: "Fira Code" }}
        >
          <span className="ml-6"><b className=" text-catppuccinGreen font-normal">@syke9p3:~$ </b> <i>biofetch</i> </span>

          <div className="flex gap-3 pl-6 mt-6">

            <a href={avatar}
              className="aspect-square w-24 h-24"
              data-fancybox="gallery">
              <img
                src={avatar}
                alt=""
                className="object-cover w-24 h-24 rounded-md border-white"
              />
            </a>

            <div className="overflow-hidden relative rounded-md aspect-square">
              <img
                src="https://avatars.githubusercontent.com/u/75114627?v=4"
                alt=""
                className="object-cover absolute w-full h-full rounded-md border-white"
              />
            </div>
            <div className="grid">
              <div>
                <p className="text-catppuccinGreen">@syke9p3</p>
                <p>------------- </p>
              </div>
              <div className="flex overflow-x-scroll gap-2 pb-4">
                <div>
                  <div className="flex w-[800px] gap-8 overflow-x-scroll">
                    <div>
                      <p>
                        <b className="text-catppuccinGreen">Name</b>: Kenth G. Saya-ang{" "}
                      </p>
                      <p>
                        <b className="text-catppuccinGreen">Birthday</b>: Sept 16, 2001{" "}
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
              </div>
            </div>
          </div>
        </motion.div>

        <div className="pb-4 lg:pb-12">

        </div>

        <div className="grid p-1 max-h-64 md:grid-cols-12">
          <div className="col-span-4 max-w-full"></div>

        </div>
      </Terminal>
    </Fancybox>

  );
};

const SocialsWindow = () => {

  const delays = [1, 5];

  return (
    <Terminal header="contacts" delay={delays[0]}>
      <div
        className="items-center p-1 leading-[1.6em] relative"
        style={{ fontFamily: "Fira Code" }}
      >

        <div className="flex gap-1 p-4  ">
          <div className=" overflow-x-scroll gap-2 pb-4 w-full">
            <p>
              <b className="text-catppuccinGreen font-normal">@syke9p3:~/contacts$ </b>  <i>ls -a links</i>
            </p>
            {/* <p>
                  <b className="text-catppuccinGreen">github: </b>syke9p3
                </p>
                <p>
                  <b className="text-catppuccinGreen">linkedin: </b>/kenthsaya-ang
                </p>
                <p>
                  <b className="text-catppuccinGreen">facebook: </b>: Kenth Saya-ang
                </p> */}

            {/* Icons */}
            <section className="flex flex-wrap flex-col items-start justify-start mt-3 px-2">
              {socials.map((social, i) => (
                <Link to={social.link} target="_blank" key={i} className=" flex group/stack rounded-xl text-gray-500 gap-2 place-items-center w-full justify-between">
                  <div className="py-1 px-2 text-center flex justify-start items-center gap-2  group-hover/stack:text-catppuccinGreen ">
                    <div className={`  `}>{social.icon}</div> {/*  style={{ color: tech.color }} */}
                    <p className="text-gray-500  group-hover/stack:text-catppuccinGreen">{social.name}</p>
                  </div>
                  <p className="text-gray-500  group-hover/stack:text-catppuccinGreen pr-2">{social.user}</p>
                </Link>
              ))}
            </section>
          </div>
        </div>
      </div>
    </Terminal >
  );
};


export default Home;
