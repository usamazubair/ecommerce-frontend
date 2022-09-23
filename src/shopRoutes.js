import Home from "views/ShoppingMall/Home/Home";
import AllItems from "views/ShoppingMall/AllItems/AllItems";
import Cart from "views/ShoppingMall/Cart/Cart";
import Checkout from "views/ShoppingMall/Checkout/Checkout";

const dashboardRoutes = [
  {
    path: "home",
    name: "Home",
    icon: "",
    component: <Home />,
    layout: "",
  },
  {
    path: "mall/:categoryId",
    name: "Mall",
    icon: "",
    component: <AllItems />,
    layout: "",
  },
  {
    path: "cart",
    name: "Cart",
    icon: "",
    component: <Cart />,
    layout: "",
  },
  {
    path: "checkout",
    name: "Checkout",
    icon: "",
    component: <Checkout />,
    layout: "",
  },
];

export default dashboardRoutes;
