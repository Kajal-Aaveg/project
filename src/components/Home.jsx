import React, { useState } from 'react'

function Home() {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        mobileno: "",
        project: ""
    })
    const [tableData, setTableData] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [editIndex, setEditIndex] = useState("")
    const handleChange = (e) => {
        setInputs(
            {
                ...inputs,
                [e.target.name]: e.target.value,
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("inputs", inputs);
        if (editClick) {
            const tempTableData = tableData;
            Object.assign(tempTableData[editIndex], inputs);
            setTableData([...tempTableData]);
            setEditClick(false);
            setInputs(
                {
                    name: "",
                    email: "",
                    mobileno: "",
                    project: ""
                }
            )
        } else {
            setTableData([...tableData, inputs])
            setInputs(
                {
                    name: "",
                    email: "",
                    mobileno: "",
                    project: ""
                }
            )
        }
    }
    const handleDelete = (index) => {
        const filterData = tableData.filter((item, i) => i !== index)
        setTableData(filterData);
    }

    const handleEdit = (index) => {
        const temData = tableData[index];
        setInputs({
            name: temData.name,
            email: temData.email,
            mobileno: temData.mobileno,
            project: temData.project
        })
        setEditClick(true)
        setEditIndex(index)
    }

    // console.log(tableData);

    return (
        <div className='min-h-screen bg-slate-500'>
            <h1 className='text-center text-[20px] font-bold' >Crud App</h1>
            <div className='bg-[#dcd9d9] max-w-fit m-auto p-10 '>
                <form onSubmit={handleSubmit}>
                    <div>
                        <lable>First Name</lable><br />
                        <input type="text" name="name" value={inputs.name} onChange={handleChange} />
                    </div>
                    <div>
                        <lable>Email</lable><br />
                        <input type="text" name="email" value={inputs.email} onChange={handleChange} />
                    </div>
                    <div>
                        <lable>Mobile Number</lable><br />
                        <input type="number" name='mobileno' value={inputs.mobileno} onChange={handleChange} />
                    </div>
                    <div>
                        <lable>Project</lable><br />
                        <input type="text" name='project' value={inputs.project} onChange={handleChange} />
                    </div>
                    <button type="submit" className='w-[50%] bg-blue-900 text-white mt-3' >{editClick ? "Update" : "Create Client"}</button>
                </form>
            </div>
            <div>
                <table className='w-full text-center'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Project</th>
                            <th>Edit/Delete</th>

                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {
                            tableData.map((item, i) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobileno}</td>
                                    <td>{item.project}</td>
                                    <td>
                                        <button onClick={() => handleEdit(i)} className='mr-3 text-blue-300'>Edit</button>
                                        <button onClick={() => handleDelete(i)} className='mr-3 text-red-400'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home