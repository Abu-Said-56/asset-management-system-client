import { key } from "localforage";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AssetList = () => {
    // for delete operation
    const user = useLoaderData();
    const [removes, setRemove] = useState(user);

    const [asset, setAsset] = useState([])
    useEffect(() => {
        fetch('https://asset-management-system-server-three.vercel.app/assets')
            .then(res => res.json())
            .then(data => 
                setAsset(data))
    }, [])
    // console.log(employee)
    //  const onlyAsset = asset.filter(item => item?.role === "employee")
    console.log("filtered ; ", asset)


    const handleRemove = (_id) => {
        console.log('remove : ', _id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://asset-management-system-server-three.vercel.app/assets/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success"
                            });
                            const remaining = asset.filter(remove => remove._id !== _id);
                            setAsset(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mx-auto w-fit">

            {
                asset.map((list, idx) =>
                    <div key={idx} className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={list?.AImage}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {list.Pname}
                            </h2>
                            <p>{list?.Ptype}</p>
                            <p>{list?.Pquantity}</p>
                            <p>{list?.Ptype}</p>
                        </div>
                        <button onClick={ ()=> handleRemove (list?._id)} className="btn btn-primary">Remove</button>
                    </div>

                )
            }
        </div>
    );
};

export default AssetList;