import React, { createContext, useState, useEffect } from 'react'

const LoggedinContext = createContext()

export function LoggedinProvider({ children }) {
  const [user, setUser] = useState(
    [
        {
            id: 1,
            name: 'Admin User',
            email: 'admin@gmail.com',
            password: 'password123'
        }
    ]
  );

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <LoggedinContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoggedinContext.Provider>
  )
}

export { LoggedinContext }