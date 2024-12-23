
const AddEmployee = () => {
    const handlePurchase = event => {
        event.preventDefault();
        const form = event.target;
        const Ename = form.Ename.value;
        const quantity = form.quantity.value;
        const EphotoURL = form.EphotoURL.value;
        const addFoodItems = { Ename, quantity, EphotoURL };

        console.log(addFoodItems);
    }
    return (
        <div className="hero bg-blue-100">
            <div className="hero-content flex-col">
                <h1 className="text-4xl font-bold text-center">Add an Employee</h1>
                <div className="card bg-base-100 w-fit">
                    <form onSubmit={handlePurchase} className="card-body border-[5px] border-sky-500 rounded-xl">
                        {/* <div className="flex gap-4"> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Employee Name</span>
                                </label>
                                <input type="text" name="Ename" placeholder="Employee Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" required/>
                            </div>
                        {/* </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Employee Image</span>
                            </label>
                            <input type="text" name="EphotoURL" placeholder="Employee Photo" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add an Employee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;