import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
const route = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '/home',
        element: <HomePage></HomePage>,
        // children: [
        //     {
        //         path:'/home',
        //         element: <>
        //         <NavBar></NavBar>
        //         </>
        //     }
        // ]
    }
])
export default route;