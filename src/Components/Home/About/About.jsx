
const About = () => {
    return (
        <div className="my-5 bg-slate-100 border border-gray-200">
            <div>
                <h1 className="text-center text-5xl font-semibold py-4">About Page</h1>
            </div>
            {/* Three Card */}

            {/* First card */}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://i.ibb.co.com/dkpbbgT/ass.jpg"
                        className="w-[550px] h-auto rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold py-4">Asset Managemet !</h1>
                        <p className="">
                        A streamlined and user-friendly platform designed to track, organize, and manage physical and digital assets efficiently. It offers features like inventory tracking, maintenance scheduling, asset lifecycle management, reporting, and real-time updates, ensuring businesses can optimize resource utilization and reduce operational costs.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;