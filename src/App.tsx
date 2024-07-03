import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
// import Blog from "./pages/Blog";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[90vh]">
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
            // {
            //     path: "/blogs",
            //     element: <Blog />,
            // },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/*",
                element: <NotFound />,
            },

        ],
    },
]);


const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
