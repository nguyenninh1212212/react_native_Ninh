import React, { createContext, useState } from "react";

// Tạo Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [success,setSuccess]=useState(false)
  
    
  const login = async (username, password) => {
    setUser({ username });
    setPass({ password });
    if(username==password){
      setSuccess(true)
    }
    return success
  };
  const logout = () => {
    setUser(null);
    setPass(null);
     setSuccess(false)
    return success
  };

  return (
    <AuthContext.Provider value={{ user, pass,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
