import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "store/contexts/userContext";

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useUserContext();

  return (
    <div {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Navigate to={`/login?redirect=${pathname}${search}`} />
      )}
    </div>
  );
}
