import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  return (
    <div className="mt-6 bg-[#1c1c1c] rounded-lg p-5 shadow-md">

      <div className="bg-emerald-600/90 text-white py-2 px-4 rounded-md flex text-sm font-semibold tracking-wide">
        <h2 className="w-1/5">Employee</h2>
        <h3 className="w-1/5 text-center">New</h3>
        <h3 className="w-1/5 text-center">Active</h3>
        <h3 className="w-1/5 text-center">Completed</h3>
        <h3 className="w-1/5 text-center">Failed</h3>
      </div>

      {authData.employees.map((elem, idx) => {
        return <div key={idx} className="mt-2 py-2 px-4 flex items-center text-sm text-gray-300 border-b border-gray-700 hover:bg-[#2a2a2a] rounded-md transition">
          <h2 className="w-1/5 font-medium text-white">{elem.firstName}</h2>
          <h3 className="w-1/5 text-center">{elem.taskCounts.newTask}</h3>
          <h3 className="w-1/5 text-center">{elem.taskCounts.active}</h3>
          <h3 className="w-1/5 text-center text-green-400">{elem.taskCounts.completed}</h3>
          <h3 className="w-1/5 text-center text-red-400">{elem.taskCounts.failed}</h3>
        </div>
      })}

    </div>
  )
}

export default AllTask
