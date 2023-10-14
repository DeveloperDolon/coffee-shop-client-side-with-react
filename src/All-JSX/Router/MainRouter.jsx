
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import CoffeeAdding from "../Pages/Coffee-adding/Coffee-Adding";
import Preview from "../Components/Preview/Preview";
import Edit from "../Pages/EditPage/Edit";

 export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:5000/coffees"),
                element: <Home></Home>
            },
            {
                path: "/coffee-adding",
                element: <CoffeeAdding></CoffeeAdding>
            },
            {
                path: "/preview/:id",
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
                element: <Preview></Preview>
            },
            {
                path: "/*",
                element: "Sorry! Your request in not found!",
            },
            {
                path: "/edit/:id",
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
                element: <Edit></Edit>
            }
        ]
    }
  ]);