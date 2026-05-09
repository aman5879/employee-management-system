import { React, createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

// localStorage.clear();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ admin: [], employees: [] });

  useEffect(() => {
    const data = getLocalStorage();
    setUserData(data);
  }, []);

  // const [userData, setUserData] = useState('');

  // useEffect(() => {
  //   const { admin, employees } = getLocalStorage();
  //   setUserData({ admin, employees });
  // }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
