import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";

const ViewUser = () => {

  const [data  , setData] = useState([])

  const readUser = async() => {
    await axios.get("http://localhost:3001/users").then((data) => setData(data.data))
  }

  const deleteUser = async(id) => {
    await axios.delete(`http://localhost:3001/users/${id}`)
  }

  console.log(data);

  useEffect(() => {
    readUser()
  } , [])
  


  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Email
            </th>
             <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((u) => {
              return(
          <tr key={u.id} className="bg-neutral-primary border-b border-default">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-heading whitespace-nowrap"
            >
              {u.name}
            </th>
            <td className="px-6 py-4">{u.email}</td>
            <td>
              <div className="flex gap-6">
                <button className="p-2 bg-blue-500 text-white">Edit</button>
                <button  className="p-2 bg-blue-500 text-white" onClick={() => deleteUser(u.id)}>Delete</button>
              </div>
            </td>
          </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ViewUser;
