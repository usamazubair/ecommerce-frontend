import React from "react";
import { useUserContext } from "store/contexts/userContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function ShopNavbar({ cart }) {
  const { setIsAuthenticated } = useUserContext();

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    setIsAuthenticated(false);
  };

  return (
    <div className="shopNavbar">
      <div>Logo</div>
      <div className="rightSide">
        <Link to={`/user/cart`}>
          <div className="cartValue">
            {cart && <span>{cart?.Products?.length}</span>}
            <ShoppingCartIcon />
          </div>
        </Link>
        <div className="clickable" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
}
