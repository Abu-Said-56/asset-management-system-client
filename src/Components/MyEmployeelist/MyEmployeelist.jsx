import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyEmployeelist = () => {
    // for delete operation
    // const user = useLoaderData();
    // const [removes, setRemove] = useState(user);
    // const { _id, displayName, role } = user;

    const [employee, setEmployee] = useState([])
    useEffect(() => {
        fetch('https://asset-management-system-server-three.vercel.app/all-users')
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [])
    // console.log(employee)
    const onlyEmploye = employee.filter(item => item?.role === "employee")
    console.log("filtered ; ", onlyEmploye)

    const handleRemove = (_id) =>{
        console.log('remove : ',_id)
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

                fetch(`https://asset-management-system-server-three.vercel.app/all-users/${_id}`, {
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
                            const remaining = employee.filter(remove => remove._id !== _id);
                            setEmployee(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="bg-orange-50">
            <div>
                <h1 className="text-center text-4xl font-bold mt-4 pb-3 ">My Employee List Page</h1>
            </div>
            <div className="overflow-x-auto mx-auto w-fit p-8 border-4 border-blue-500 rounded-lg bg-stone-200">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Member Image</th>
                            <th>Name Of The Member</th>
                            <th>Member Type</th>
                            <th>Remove Member</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            onlyEmploye.map((user, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <div className="">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">Name : {user?.displayName}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">Type : {user?.role}</div>
                                    </td>

                                    <th>
                                        <button onClick={() => handleRemove(user?._id)} className="btn btn-accent">Remove</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    );
};

export default MyEmployeelist;