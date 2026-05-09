import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [taskTittle, setTaskTittle] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [discription, setDiscription] = useState('');

  const [newTask, setNewTask] = useState('');


  const formSubmitted = (e) => {
    e.preventDefault();

    const task = {
      taskTitle: taskTittle,
      taskDescription: discription,
      taskDate: date,
      category,
      active: true,
      newTask: true,
      failed: false,
      completed: false,
    };

    const userData = JSON.parse(localStorage.getItem("employees"));

    const updatedData = userData.map((elem) => {
      if (assignTo === elem.firstName) {

        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskCounts: {
            ...elem.taskCounts,
            active: elem.taskCounts.active + 1,
            newTask: elem.taskCounts.newTask + 1,
          }
        };
      }
      return elem;
    });

    
    localStorage.setItem("employees", JSON.stringify(updatedData));

    
    setTaskTittle('');
    setDate('');
    setAssignTo('');
    setCategory('');
    setDiscription('');
  };


  return (
    <div className="mt-6 bg-[#1c1c1c] rounded-lg p-6 shadow-md">

      <h3 className="text-xl font-semibold tracking-wide text-white mb-4 ">
        Create Task
      </h3>

      <form onSubmit={formSubmitted} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="flex flex-col gap-3">
          <div>
            <label className="text-sm text-gray-400">Task Title</label>
            <input
              value={taskTittle}
              onChange={(e) => {
                setTaskTittle(e.target.value);
              }}
              type="text"
              placeholder="UI design"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[#2a2a2a] text-sm text-white outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Date</label>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[#2a2a2a] text-sm text-white outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="Employee"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[#2a2a2a] text-sm text-white outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Category</label>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="Design / Dev"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[#2a2a2a] text-sm text-white outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col h-full">
            <label className="text-sm text-gray-400">Description</label>
            <textarea
              value={discription}
              onChange={(e) => {
                setDiscription(e.target.value);
              }}
              placeholder="Write what's on your mind..."
              className="w-full mt-1 p-3 rounded-lg bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-red-500 h-full min-h-[150px]"
            ></textarea>
          </div>
          <button
            className="bg-red-600 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 active:scale-95 transition-all duration-200"
          >
            Create
          </button>

        </div>

      </form>
    </div>
  )
}

export default CreateTask
