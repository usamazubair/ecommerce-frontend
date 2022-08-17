import React from "react";
import Login from "views/Auth/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "views/Auth/Register/Register";
import Admin from "./Admin";
import UnAuthenticatedRoute from "components/UnAuthenticatedRoute/UnAuthenticatedRoute";
import AuthenticatedRoute from "components/AuthenticatedRoute/AuthenticatedRoute";
// import { useUserContext } from "store/contexts/userContext";


export default function App() {
  // const { setUser, isAuthenticated, setIsAuthenticated } = useUserContext();
  
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <UnAuthenticatedRoute exact="true" path="/login">
                <Login />
              </UnAuthenticatedRoute>
            }
          />
          <Route
            exact
            path="/*"
            element={
              <AuthenticatedRoute>
                <Admin />
              </AuthenticatedRoute>
            }
          />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}
