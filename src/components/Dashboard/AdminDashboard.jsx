import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='p-10 flex flex-col w-screen min-h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
