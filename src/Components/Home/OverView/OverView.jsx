
const OverView = () => {
    return (
        <div className='my-5 bg-orange-50 py-4 border border-gray-200'>
            <div className='text-center py-4'>
                <p className='text-red-500 font-bold text-2xl py-4'>Overview</p>
                <h1 className='text-4xl font-bold'>All-in-One HR Solution for Growing Businesses</h1>
            </div>


            <div className=''>
                {/* First Three Card */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto w-fit pb-6'>
                {/* First Card */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://i.ibb.co.com/4VG1k4z/overview-01.jpg"
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Effortless Job Listings
                    </h2>
                    <p>Simplify your recruitment efforts by creating and managing job postings</p>
                   
                </div>
            </div>
            {/* Second Card */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://i.ibb.co.com/bK6RycB/overview-02.jpg"
                       />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Real-Time Analytics
                    </h2>
                    <p>Access insights on employee performance, attendance, and more.</p>
                    
                </div>
            </div>
            {/* Third Card */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://i.ibb.co.com/tp64pXc/overview-03.jpg"
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Candidate Tracking
                    </h2>
                    <p>Streamline and manage your entire hiring pipeline with ease</p>
                    
                </div>
            </div>
            </div>
            {/* Second Three Card */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto w-fit'>
                {/* Fourth Card */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://i.ibb.co.com/0fz1XcL/overview-04.jpg"
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Customizable Theme Settings
                    </h2>
                    <p>Adjust and customize your platform with intuitive theme settings</p>
                    
                </div>
            </div>
            {/* Fifth Card */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='h-[200px] w-full'
                        src="https://i.ibb.co.com/dBsxy7v/overview-5.jpg"
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Candidate Tracking
                    </h2>
                    <p>Its managing applicants through the hiring process, from application to hiring.</p>
                    
                </div>
            </div>
            {/* Six number Card */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='h-[200px] w-full'
                        src="https://i.ibb.co.com/8gh7Kgn/overview-06.jpg"
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       Asset Calculation
                    </h2>
                    <p>Its determining the value of assets, including property,or investments.</p>
                    
                </div>
            </div>
            </div>
            </div>

        </div>
    );
};

export default OverView;