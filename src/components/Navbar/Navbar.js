import React from "react";
import "assets/scss/component/navbar.scss";
import { useUserContext } from "store/contexts/userContext";

export default function Navbar() {
  const { setIsAuthenticated } = useUserContext();

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    setIsAuthenticated(false);
  };

  return (
    <div className="navbarRoot">
      <div>Shopping Mall</div>
      <div className="clickable" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}
