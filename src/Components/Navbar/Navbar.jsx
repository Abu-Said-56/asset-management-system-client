import { Link, NavLink, useNavigate } from "react-router-dom";
import useUserData from "../../hooks/useUserdata";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const userData = useUserData();
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = ()=>{
        logOut()
        navigate('/')
    }

    const navlinks = <>
        <li className="text-lg "><NavLink to="/">Home</NavLink></li>
        <>
            {
                user ?
                    <>
                        {
                            userData?.role === "employee" ?
                                <>
                                    <li className="text-lg "><NavLink to="/myasset">My Assets</NavLink></li>
                                    <li className="text-lg "><NavLink to="/myteam">My Team</NavLink></li>
                                    <li className="text-lg "><NavLink to="/requestforasset">Request for an Asset</NavLink></li>
                                </>
                                :
                                <>
                                    <li className="text-lg "><NavLink to="/assetlist">Asset List</NavLink></li>
                                    <li className="text-lg "><NavLink to="/addasset">Add Asset</NavLink></li>
                                    <li className="text-lg "><NavLink to="/requestforasset">All Requests</NavLink></li>
                                    <li className="text-lg "><NavLink to="/myemployelist">My Employee List</NavLink></li>
                                    <li className="text-lg "><NavLink to="/addanemploye">Add an Employee</NavLink></li>
                                </>
                        }
                        <li className="text-lg "><NavLink to="/profile">Profile</NavLink></li>
                    </>
                    :
                    <>
                        <li className="text-lg "><NavLink to="/joinemployee">Join Employee</NavLink></li>
                        <li className="text-lg "><NavLink to="/joinHRManager">Join HR Manager</NavLink></li>
                    </>
            }
        </>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className="h-7" src="https://i.ibb.co.com/WzTWBFp/gradient-accounting-logo-23-2148837587.jpg"/>
                    Assets Management</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ?
                        <div>
                            <button onClick={handleLogout} className="btn btn-secondary">LogOut</button>
                        </div>
                        :
                        <div>
                            {/* <button className="btn btn-primary">Register</button> */}
                           {/*  */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <div >
                                        <NavLink> <button className="btn btn-outline text-xl  " >Login</button> </NavLink>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    
                                    <Link to="/joinemployee" ><li  className=" mt-1 btn btn-outline btn-sm w-full" >Join Employee</li></Link>
                                    <Link to="/joinHRManager" ><li  className=" mt-1 btn btn-outline btn-sm w-full " >Join HR Manager</li></Link>

                                </ul>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;