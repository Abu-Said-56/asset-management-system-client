import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import useAuth from "./useAuth";
import { AuthContext } from "../Provider/AuthProvider";


const useUserData = () => {
    const {user, loading} = useContext(AuthContext)
    const [userData, setUserData] = useState({})
    // console.log("in hook user", user)

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await axios.get(`https://asset-management-system-server-three.vercel.app/users/${user?.email}`);
                setUserData(res?.data)
    
                
                console.log("in hook res ", res.data)
            } catch (error) {
                console.error(error)
            }
            
        }
        if(user?.email && !loading ){
            fetchData();
        }

    },[user,loading,])
//   console.log("in hook", userData)
return userData;
   
};

export default useUserData;