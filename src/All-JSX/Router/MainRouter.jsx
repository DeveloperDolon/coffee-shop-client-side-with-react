
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import CoffeeAdding from "../Pages/Coffee-adding/Coffee-Adding";
import Preview from "../Components/Preview/Preview";
import Edit from "../Pages/EditPage/Edit";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/Signup/SignUp";
import UsersPage from "../Pages/Users/UsersPage";

 export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("https://coffee-store-server-side-express-mongodb-fi47k6txb.vercel.app/coffees"),
                element: <Home></Home>
            },
            {
                path: "/coffee-adding",
                element: <CoffeeAdding></CoffeeAdding>
            },
            {
                path: "/preview/:id",
                loader: ({params}) => fetch(`https://coffee-store-server-side-express-mongodb-fi47k6txb.vercel.app/coffees/${params.id}`),
                element: <Preview></Preview>
            },
            {
                path: "/*",
                element: "Sorry! Your request in not found!",
            },
            {
                path: "/edit/:id",
                loader: ({params}) => fetch(`https://coffee-store-server-side-express-mongodb-fi47k6txb.vercel.app/coffees/${params.id}`),
                element: <Edit></Edit>
            },
            {
                path: "/login",
                element: <SignIn></SignIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }, 
            {
                path: "/users",
                loader: () => fetch("https://coffee-store-server-side-express-mongodb-fi47k6txb.vercel.app/users"),
                element: <UsersPage></UsersPage>    
            }
        ]
    }
  ]);