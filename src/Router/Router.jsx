import { createBrowserRouter } from "react-router-dom";
import Home from './../page/Home/Home';
import About from "../page/About/About";
import MainLayout from "../layout/MainLayout";
import Login from "../page/Login/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])
export default Router