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
                axios.post("http://localhost:5001/users", HrManagerInfo)
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
                console.log(result.user)

                const employeeInfo = {
                    displayName: result?.user?.displayName,
                    email: result?.user?.email,
                    role: "HRManager",
                    photoUrl: result?.user?.photoUrl,
                    companyName,
                    companylogo,

                }
                //sent to backend
                axios.post("http://localhost:5001/users", employeeInfo)
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
        <div className="hero bg-blue-200 min-h-screen">

            <div className="hero-content flex-col lg:flex-row">

                <div className="card w-full p-2 max-w-lg shrink-0 border-8 bg-orange-100 border-sky-400 ">
                    <h1 className="text-5xl font-bold text-center"> Join HR Manager </h1>
                    <form onSubmit={handleHRManager} className="card-body">
                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="fullName" placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input type="text" name="companyName" placeholder="Company Name" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Logo</span>
                                </label>
                                <input type="text" name="companylogo" placeholder="Company Logo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date Of Birth</span>
                                </label>
                                <input type="date" name="dateofbirth" placeholder="Date Of Birth" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                    <div className="mx-auto text-center"> 
                        <button onClick={handleGoogleSignIn} className="btn bg-indigo-400 px-5 mx-auto text-center"><span className="text-4xl"><FcGoogle></FcGoogle></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinHRManager;