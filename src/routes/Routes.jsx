import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../pages/AddToy/AddToy";
import Bolg from "../pages/Blog/Bolg";
import SingleToyDetails from "../pages/Shared/SingleToyDetails";
import ErrorPage from "../pages/Shared/ErrorPage";
import UpdateToy from "../pages/MyToys/UpdateToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'all-toys',
                element: <AllToys />,
                loader: () => fetch('https://ph-assignment-11-server-marufbroh.vercel.app/alltoys')
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><SingleToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ph-assignment-11-server-marufbroh.vercel.app/toy/${params.id}`)
            },
            {
                path: 'my-toys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: 'add-toy',
                element: <PrivateRoute><AddToy /></PrivateRoute>
            },
            {
                path: 'update-toy/:id',
                element: <PrivateRoute><UpdateToy /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ph-assignment-11-server-marufbroh.vercel.app/toy/${params.id}`)
            },
            {
                path: 'blog',
                element: <Bolg />
            }
        ]
    },
]);

export default router;