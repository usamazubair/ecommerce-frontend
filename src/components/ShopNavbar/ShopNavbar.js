import React from "react";
import { useUserContext } from "store/contexts/userContext";

export default function ShopNavbar() {
  const { setIsAuthenticated } = useUserContext();

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    setIsAuthenticated(false);
  };

  return (
    <div className="shopNavbar">
      <div>Logo</div>
      <div className="clickable" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}
