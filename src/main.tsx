import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Bio from "./pages/Bio";
import NotFound from "./pages/NotFound";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="px-[5%] min-h-[90vh]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <Bio />,
      },
      {
        path: "/*",
        element: <NotFound/> ,
      },
   
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
