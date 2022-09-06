import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "store/contexts/userContext";

export default function AppAdmin() {
  const { userRole } = useUserContext();

  console.log("here");
  console.log(userRole);

  return <Navigate replace to={userRole === 2 ? "/admin" : "/user"} />;
}
