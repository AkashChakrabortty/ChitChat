import { createBrowserRouter, Outlet } from "react-router-dom";
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
    }
])
export default route;