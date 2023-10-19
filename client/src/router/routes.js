import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import NotFound from "../Partials/NotFound";

const allRoutes = createBrowserRouter([
    {
        path: '/auth/login',
        element: <Login />
    },
    {
        path: '/auth/register',
        element: <Register />
    },
    {
        path: '/dashbord',
        element: <Main />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default allRoutes;