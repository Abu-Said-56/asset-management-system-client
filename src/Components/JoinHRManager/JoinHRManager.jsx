import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


const JoinHRManager = () => {
    const { createUser, GoogleLogin } = useContext(AuthContext);

    const handleHRManager = e => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value
        const companyName = form.companyName.value
        const companylogo = form.companylogo.value
        const email = form.email.value
        const password = form.password.value
        const dateofbirth = form.dateofbirth.value
        console.log(fullName, companyName, companylogo, email, password, dateofbirth);

        const HrManagerInfo = {
            displayName: fullName,
            email,
            companyName,
            companylogo,
            password,
            role: "HRManager",
            dateofbirth
        }
        console.log("Hrmanager Info : ", HrManagerInfo);
        createUser(email, password)
            .then(res => {
                console.log("sign in : ", res)
                //sent to backend
                axios.post("https://asset-management-system-server-three.vercel.app/users", HrManagerInfo)
                    .then(res => {
                        console.log(" post = ", res)
                        form.reset();
                    })
                    .catch(error => {
                        console.error(error);
                    })
            })
            .catch(error => {
                console.error(error);
            })

    }
    // Google Login
    const handleGoogleSignIn = () => {
        GoogleLogin()
            .then(result => {
                // console.log(result.user)

                const employeeInfo = {
                    displayName: result?.user?.displayName,
                    email: result?.user?.email,
                    role: "HRManager",
                    photoUrl: result?.user?.photoUrl,
                    companyName,
                    companylogo,

                }
                //sent to backend
                axios.post("https://asset-management-system-server-three.vercel.app/users", employeeInfo)
                    .then(res => {
                        // console.log(" post = ", res);

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
            <div className="hero-content mx-auto flex-col lg:flex-row">
                <div className=" w-full bg-green-100 p-3 rounded-xl max-w-lg mx-auto shrink-0 border-8 border-sky-400 ">
                    <h1 className="text-4xl font-bold text-center py-4"> Join HR Manager </h1>
                    <hr />
                    <form onSubmit={handleHRManager} className="">
                        <div className="flex gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="fullName" placeholder="Full Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input type="text" name="companyName" placeholder="Company Name" className="input input-bordered" required/>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Logo</span>
                                </label>
                                <input type="text" name="companylogo" placeholder="Company Logo" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                        </div>

                        <div className="flex gap-2">
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
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                    <div className="mx-auto text-center pt-2"> 
                        <button onClick={handleGoogleSignIn} className="btn bg-indigo-400 px-7 mx-auto text-center"><span className="text-4xl"><FcGoogle></FcGoogle></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinHRManager;