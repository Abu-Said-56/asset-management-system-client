import axios from "axios";

const AddAsset = () => {
    const handleJoinEmploye = e => {
        e.preventDefault();
        const form = e.target;
        const Pname = form.Pname.value
        const Ptype = form.Ptype.value
        const Pquantity = form.Pquantity.value
        const AImage = form.AImage.value
        const asset = {Pname, Ptype, Pquantity, AImage}
        // console.log(asset);
      
        axios.post('https://asset-management-system-server-three.vercel.app/assets',asset)
        .then(res => console.log(res.data))
        .catch(error => {
            // console.error(error)
        })
    }
    return (
        <div className="hero bg-blue-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card w-full p-6 max-w-lg shrink-0 border-8 bg-blue-100 border-sky-400 ">
                    <h1 className="text-4xl font-bold text-center">Add an Asset</h1>
                    <form onSubmit={handleJoinEmploye} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="Pname" placeholder="Product Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <input type="text" name="Ptype" placeholder="Product Type" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <input type="number" name="Pquantity" placeholder="Product Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Asset Image</span>
                            </label>
                            <input type="text" name="AImage" placeholder="Asset photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Add an Asset</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAsset;