import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useUserData from "../../hooks/useUserdata";

const Profile = () => {
    // const {user} = useContext(AuthContext);
     const userData = useUserData();

    return (
        <div className="card bg-sky-300 w-96 border-[8px] border-blue-500 mx-auto mt-14 shadow-xl">
            <div className="py-2"> 
                {
                    userData?.role === "HRManager"  ? 
                    <div className="text-center">
                        <img className="w-40 h-40 mx-auto pt-4" src={userData?.companylogo}/>
                        <h1 className="text-lg">CompanyName : {userData?.companyName}</h1>
                    </div>
                    : " "
                }
            </div>
            <figure>
                <img className="w-full h-auto" src={userData?.photoURL} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">HRM Name : {userData?.displayName}</h2>
                <p>Email : {userData?.email}</p>
            </div>
            
        </div>
    );
};

export default Profile;