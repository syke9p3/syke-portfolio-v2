import { Helmet } from "react-helmet";
import Terminal from "../components/Window";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ResumeButton from "../components/ResumeButton";
import { CgFile, CgHome } from "react-icons/cg";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found | Kenth Saya-ang</title>
      </Helmet>
      <main className="container mx-auto bg-cover bg-center bg-no-repeat min-h-[80dvh] grid place-items-center">
        <section className="m-4">
          <NotFoundTerminal />
        </section>
      </main>
    </>
  );
};

const NotFoundTerminal = () => {

  const location = useLocation();
  const [pathName, setPathName] = useState('')

  useEffect(() => {
    setPathName(location.pathname)
  }, [location]);

  return (
    <Terminal header="page not found">
      <div
        className="items-center p-1 leading-[1.6em] relative"
        style={{ fontFamily: "Fira Code" }}
      >

        <div className="flex gap-1 p-4">
          <section className="overflow-x-scroll gap-2 pb-4 w-full">
            <p className=" opacity-45">
              <b className="text-catppuccinGreen font-normal">@syke9p3:~$ </b>
              <i>find &lt;page&gt; .{pathName} </i>
            </p>
            <div className="mt-8">
              <h1 className="mt-4 font-bold text-3xl">404</h1>
              <p className="my-4 text-sm">The page you are looking for does not exist.</p>
              <Link to={'/'} className="inline-block my-4 rounded-full">
                <button className="flex gap-2 items-center px-4 py-3 text-sm font-semibold bg-gradient rounded-full group text-catppuccinBase">
                  <div className="group-hover:" ><CgHome size={20} /></div>
                  Return to Home Page
                </button>
              </Link>
            </div>



          </section>
        </div>
      </div>
    </Terminal >
  );
};

export default NotFound;
