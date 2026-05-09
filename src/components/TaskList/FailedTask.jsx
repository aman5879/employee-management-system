import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="min-w-[280px] md:min-w-0 snap-start bg-gradient-to-br from-green-600 to-green-800 text-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <span className="px-3 py-1 bg-green-400 text-black rounded-full text-xs font-semibold">{data.category}</span>
        <p className="text-xs text-gray-200">{data.taskDate}</p>
      </div>
      <h3 className="mt-3 text-lg md:text-xl font-bold tracking-wide">{data.taskTitle}</h3>
      <p className="text-sm text-gray-200 mt-2 leading-relaxed">{data.taskDescription}</p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3">
        <button className="text-sm font-medium bg-[#129490] hover:bg-[#065143] text-white px-4 py-2 rounded-lg shadow-sm transition-all duration-200 active:scale-95">
          Failed ⛔
        </button>
      </div>
    </div>
  )
}

export default FailedTask
