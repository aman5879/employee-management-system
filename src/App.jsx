import { useEffect, useState, useContext } from 'react'
import './App.css'
import { AuthContext } from './context/AuthProvider';
import Login from './components/Auth/Login'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    // setLocalStorage();
    const storedUser = localStorage.getItem('loggedInUser');
    const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

    if (loggedInUser?.role === 'admin') {
      setUser('admin');
      setLoggedInUserData(loggedInUser.data);
    } else if (loggedInUser?.role === 'employee') {
      setUser('employee');
      setLoggedInUserData(loggedInUser.data);
    }
  }, []);

  const handelLogin = (email, password) => {
    console.log('authData:', authData);
    const admin = authData?.admin?.find(
      (e) => email === e.email && password === e.password
    );

    const employee = authData?.employees?.find(
      (e) => email === e.email && password === e.password
    );

    if (admin) {
      setUser('admin');
      setLoggedInUserData(admin);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
    }
    else if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
    }
    else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {!user && <Login handelLogin={handelLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} data={loggedInUserData} />}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
      {/* <Login /> */}
      {/* <AdminDashboard /> */}
      {/* <EmployeeDashboard /> */}
    </>
  )
}

export default App
