
const Packages = () => {
    return (
        <div className="m-8 mx-auto w-fit">
            <div >
                <h1 className="text-center text-4xl font-bold py-3">Our Packages</h1>
                <p className="text-center py-3">Explore flexible subscription plans tailored to your business needs. <br /> Choose from three affordable packages designed to support teams <br /> of varying sizes, ensuring seamless asset management for up to 20 employees.</p>
            </div>
            {/* three card for three section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto w-fit">
                {/* first card */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="w-64 h-64"
                            src="https://i.ibb.co.com/bm0WyQt/images-1.png"
                             />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Maximum 5 employees $5
                        </h2>
                        <p>This package includes essential asset management features to help track and organize assets effectively for up to 5 employees.</p>
                        
                    </div>
                </div>
                {/* second card */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="w-64 h-64"
                            src="https://i.ibb.co.com/z4Rjh4k/17283.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Maximum 10 employees $8
                        </h2>
                        <p>Designed for growing businesses, this package offers enhanced functionality and support for up to 10 employees.</p>
                      
                    </div>
                </div>
                {/* third card */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="w-64 h-64"
                            src="https://i.ibb.co.com/LSfWNyj/download-1.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Maximum 20 employees $15
                        </h2>
                        <p>Perfect for mid-sized businesses, this plan supports up to 20 employees and includes advanced tools for asset tracking.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;