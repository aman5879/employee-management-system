import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({ data }) => {
  if (!data?.tasks) return null;

  return (
    <div className="mt-10">
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible no-scrollbar snap-x md:snap-none snap-mandatory pb-4">

        {data.tasks.map((elem, idx) => {
          if (elem.active) {
            return <AcceptTask data={elem} key={idx} />
          }
          if (elem.completed) {
            return <CompleteTask data={elem} key={idx} />
          }
          if (elem.failed) {
            return <FailedTask data={elem} key={idx} />
          }
          if (elem.newTask) {
            return <NewTask data={elem} key={idx} />
          }
          return null;
        })}

      </div>
    </div>
  )
}

export default TaskList
