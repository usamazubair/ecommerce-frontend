import React, { useState } from "react";

import { UserContext } from "./contexts/userContext";

export default function Store({ children }) {
  const userData = localStorage.getItem("email");
  const tokenData = localStorage.getItem("token");

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    tokenData && userData ? true : false
  );

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
