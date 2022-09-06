import React, { useState } from "react";

import { UserContext } from "./contexts/userContext";

export default function Store({ children }) {
  const userData = localStorage.getItem("user");
  const tokenData = localStorage.getItem("token");

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    tokenData && userData ? true : false
  );
  const [userRole, setUserRole] = useState(
    userData && tokenData ? JSON.parse(localStorage.getItem("role")) : null
  );

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        setUserRole,
        userRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
