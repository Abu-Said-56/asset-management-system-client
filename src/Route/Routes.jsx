import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import JoinEmployee from "../Components/JoinEmployee/JoinEmployee";
import JoinHRManager from "../Components/JoinHRManager/JoinHRManager";
import Home from "../Components/Home/Home/Home";
import MyAsset from "../Components/MyAsset/MyAsset";
import MyTeam from "../Components/MyTeam/MyTeam";
import Profile from "../Components/Profile/Profile";
import RequestForAsset from "../Components/RequestForAsset/RequestForAsset";
import AssetList from "../Components/AssetList/AssetList";
import AddAsset from "../Components/AddAsset/AddAsset";
import AllRequest from "../Components/AllRequest/AllRequest";
import MyEmployeelist from "../Components/MyEmployeelist/MyEmployeelist";
import AddEmployee from "../Components/AddEmployee/AddEmployee";

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
            path:"/profile",
            element:<Profile></Profile>
        },
        
        // For Join An Employee route
        {
            path:"/myasset",
            element:<MyAsset></MyAsset>
        },
        {
            path:"/myteam",
            element:<MyTeam></MyTeam>
        },
        {
            path:"/requestforasset",
            element:<RequestForAsset></RequestForAsset>
        },

        // For HR Manager route
        {
            path:"/assetlist",
            element:<AssetList></AssetList>
        },
        {
            path:"/addasset",
            element:<AddAsset></AddAsset>
        },
        {
            path:"/allrequest",
            element:<AllRequest></AllRequest>
        },
        {
            path:"/myemployelist",
            element:<MyEmployeelist></MyEmployeelist>
        },
        {
            path:"/addanemploye",
            element:<AddEmployee></AddEmployee>
        },
      ]
    },
  ]);
