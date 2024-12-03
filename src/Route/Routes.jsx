import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import JoinEmployee from "../Components/JoinEmployee/JoinEmployee";
import JoinHRManager from "../Components/JoinHRManager/JoinHRManager";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/joinemployee",
            element:<JoinEmployee></JoinEmployee>,
        },
        {
            path:"/joinHRManager",
            element:<JoinHRManager></JoinHRManager>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    },
  ]);
