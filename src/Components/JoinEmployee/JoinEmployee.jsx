import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import app from "../../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";


const JoinEmployee = () => {
    const auth = getAuth(app);

    const { GoogleLogin } = useContext(AuthContext)
    const { createUser } = useContext(AuthContext);

    const handleJoinEmploye = e => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value
        const email = form.email.value
        const password = form.password.value
        const dateofbirth = form.dateofbirth.value
        console.log(fullName, email, password, dateofbirth);

        const employeeInfo = {
            displayName: fullName,
            email,
            password,
            role: "employee",
            dateofbirth,        
        }
        console.log(employeeInfo)

        createUser(email, password)
            .then(res => {
                console.log("sign in : ", res)
                //sent to backend
                axios.post("https://asset-management-system-server-three.vercel.app/users", employeeInfo)
                    .then(res => {
                        console.log(" post = ", res);
                        form.reset();
                    })
                    .catch(error => {
                        console.error(error);
                    })
                    Swal.fire("User Login Successfuly");
            })
            .catch(error => {
                console.error(error);
                Swal.fire("User Already Exists");
            })
            form.reset();
    }

    // Google Login
    const handleGoogleSignIn = () => {
        GoogleLogin(auth, GoogleLogin)
            .then(result => {
                // console.log(result.user)

                const employeeInfo = {
                    displayName: result?.user?.displayName,
                    email: result?.user?.email,
                    role: "employee",
                    photoUrl: result?.user?.photoUrl
                    
                }
                 //sent to backend
                 axios.post("https://asset-management-system-server-three.vercel.app/users", employeeInfo)
                 .then(res => {
                     console.log(" post = ", res);                   
                 })
                 .catch(error => {
                     console.error(error);
                 })
                Swal.fire("User Login Successfuly");
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className="hero bg-blue-100 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-full p-4 rounded-lg max-w-lg shrink-0 border-8 bg-orange-50 border-sky-400 ">
                    <h1 className="text-5xl font-bold pb-2">Join Employee</h1>
                    <hr />
                    <form onSubmit={handleJoinEmploye}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="fullName" placeholder="Full Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date Of Birth</span>
                            </label>
                            <input type="date" name="dateofbirth" placeholder="Date Of Birth" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">SignUp</button>
                        </div>

                    </form>
                    <div className="mx-auto pt-2 text-center"> 
                        <button onClick={handleGoogleSignIn} className="btn bg-sky-300 px-7 mx-auto text-center"><span className="text-4xl"><FcGoogle></FcGoogle></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinEmployee;