import { useEffect, useState } from "react";

const MyEmployeelist = () => {

    const [employee, setEmployee] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/all-users')
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [])

    // console.log(employee)
    const onlyEmploye = employee.filter(item => item?.role === "employee")

    // console.log("filtered ; ", onlyEmploye)

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
                                        <button className="btn btn-accent">Remove</button>
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