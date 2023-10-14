
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import CoffeeAdding from "../Pages/Coffee-adding/Coffee-Adding";

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
            }
        ]
    }
  ]);