import React, { useEffect, useState } from "react";
import routes from "routes";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import "assets/scss/component/timeline.scss";
import sidebarRoutes from "sidebar_routes";
import Navbar from "components/Navbar/Navbar";
import AdminService from "services/AdminService";
import { AdminContext } from "store/contexts/adminContext";
import { useUserContext } from "store/contexts/userContext";

export default function Admin() {
  const [allCategories, setCategories] = useState(null);
  const [adminRoutes] = useState([...routes, ...sidebarRoutes]);
  const { userRole } = useUserContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await AdminService.getAllCategories();
        setCategories(response.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const switchRoutes = (
    <Routes>
      {adminRoutes.map((prop, key) => {
        return (
          <Route
            path={prop.layout + prop?.path}
            element={prop?.component}
            key={key}
          />
        );
      })}
      <Route
        path="/*"
        element={
          <Navigate replace to={userRole === 3 ? "/user/*" : "dashboard"} />
        }
      />
    </Routes>
  );

  return (
    <AdminContext.Provider
      value={{
        allCategories,
        setCategories,
      }}
    >
      <Navbar />
      <div className="adminRoot">
        <Sidebar routes={adminRoutes} />
        {switchRoutes}
      </div>
    </AdminContext.Provider>
  );
}
