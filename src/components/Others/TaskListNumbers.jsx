import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      <div className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl w-full py-5 px-6 rounded-2xl text-white">
        <h2 className="text-3xl font-bold">{data.taskCounts.newTask}</h2>
        <h3 className="text-lg font-medium opacity-90">New Task</h3>
      </div>

      <div className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-2xl w-full py-5 px-6 rounded-2xl text-white">
        <h2 className="text-3xl font-bold">{data.taskCounts.active}</h2>
        <h3 className="text-lg font-medium opacity-90">Active</h3>
      </div>

      <div className="bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-2xl w-full py-5 px-6 rounded-2xl text-white">
        <h2 className="text-3xl font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-lg font-medium opacity-90">Completed</h3>
      </div>

      <div className="bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-2xl w-full py-5 px-6 rounded-2xl text-white">
        <h2 className="text-3xl font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-lg font-medium opacity-90">Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
