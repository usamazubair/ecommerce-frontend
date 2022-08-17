import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "store/contexts/userContext";

function querystring(name, url = window.location.href) {
  const paramName = name.replace(/[[]]/g, "\\$&");
  const regex = new RegExp(`[?&]${paramName}(=([^&#]*)|&|#|$)`, "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }

  if (!results[2]) {
    return "";
  }

  if (results[2] === "/logout") {
    return null;
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function UnauthenticatedRoute({ children, ...rest }) {
  const { isAuthenticated } = useUserContext();
  const redirect = querystring("redirect");

  return (
    <div>
      {!isAuthenticated && children}
      {isAuthenticated && (
        <Navigate to={redirect === "" || redirect === null ? "/" : redirect} />
      )}
    </div>
  );
}
