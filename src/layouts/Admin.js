import React, { useState } from "react";
import routes from "routes";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import "assets/scss/component/timeline.scss";
import sidebarRoutes from "sidebar_routes";
import Navbar from "components/Navbar/Navbar";

export default function Admin() {
  const [adminRoutes] = useState([...routes, ...sidebarRoutes]);

  const switchRoutes = (
    <Routes>
      {adminRoutes.map((prop, key) => {
        return (
          <Route
            path={prop.layout + prop?.path}
            element={prop?.component}
            key={key}
            exact={prop.name}
          />
        );
      })}
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  );

  return (
    <>
      <Navbar />
      <div className="adminRoot">
        <Sidebar routes={adminRoutes} />
        {switchRoutes}
      </div>
    </>
  );
}
