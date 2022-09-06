import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "store/contexts/userContext";

export default function UserRoleRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated, userRole } = useUserContext();
  console.log('here');

  return (
    isAuthenticated && (
      <Navigate replace to={userRole === 2 ? "/admin" : "/user"} />
    )
  );
}
