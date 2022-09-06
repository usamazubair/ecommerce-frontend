import React, { useState, useEffect } from "react";
import { useUserContext } from "store/contexts/userContext";
import { Routes, Route, Navigate } from "react-router-dom";
import shopRoutes from "shopRoutes";
import "assets/scss/component/shop.scss";
import { ShopContext } from "store/contexts/shopContext";
import AdminService from "services/AdminService";
import ShopNavbar from "components/ShopNavbar/ShopNavbar";
import Footer from "components/Footer/Footer";

export default function Shop() {
  const { userRole } = useUserContext();
  const [allCategories, setCategories] = useState([]);

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
      {shopRoutes.map((prop, key) => {
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
        element={<Navigate replace to={userRole === 2 ? "/admin/*" : "home"} />}
      />
    </Routes>
  );

  return (
    <ShopContext.Provider
      value={{
        allCategories,
        setCategories,
      }}
    >
      <div>
        <ShopNavbar />
        <div>{switchRoutes}</div>
        <Footer />
      </div>
    </ShopContext.Provider>
  );
}
