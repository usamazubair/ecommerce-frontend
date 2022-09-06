import React from "react";
import Login from "views/Auth/Login/Login";
import { Routes, Route } from "react-router-dom";
import Register from "views/Auth/Register/Register";
import Admin from "./Admin";
import AppAdmin from "./AppAdmin";
import UnAuthenticatedRoute from "components/UnAuthenticatedRoute/UnAuthenticatedRoute";
import AuthenticatedRoute from "components/AuthenticatedRoute/AuthenticatedRoute";
import User from "./Shop";
// import { useUserContext } from "store/contexts/userContext";

export default function App() {
  // const { setUser, isAuthenticated, setIsAuthenticated } = useUserContext();

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <UnAuthenticatedRoute>
              <Login />
            </UnAuthenticatedRoute>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <UnAuthenticatedRoute>
              <Register />
            </UnAuthenticatedRoute>
          }
        />
        <Route
          exact
          path="/*"
          element={
            <AuthenticatedRoute>
              <AppAdmin />
            </AuthenticatedRoute>
          }
        />
        <Route
          exact
          path="/admin/*"
          element={
            <AuthenticatedRoute role={2}>
              <Admin />
            </AuthenticatedRoute>
          }
        />
        <Route
          exact
          path="/user/*"
          element={
            <AuthenticatedRoute role={3}>
              <User />
            </AuthenticatedRoute>
          }
        />
      </Routes>
    </div>
  );
}
