import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); // 'admin', 'customer', or null
  const [username, setUsernamel] = useState(''); 

  return (
    <UserContext.Provider value={{ userRole, setUserRole, username, setUsernamel }}>
      {children}
    </UserContext.Provider>
  );
};
