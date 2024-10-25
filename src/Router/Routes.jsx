import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../App/Home/Home";
import Dashboard from "../App/Admin/Dashboard";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
]);

export default Routes;