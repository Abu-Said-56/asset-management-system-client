
const JoinHRManager = () => {

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
                            <input type="text" name="companylogo" placeholder="Company Logo" className="input input-bordered"/>
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
                </div>
            </div>
        </div>
    );
};

export default JoinHRManager;