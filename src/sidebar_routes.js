import Products from "views/AdminDashboard/Products/Products";
import Customers from "views/AdminDashboard/Customers/Customers";
import Reviews from "views/AdminDashboard/Reviews/Reviews";
import Orders from "views/AdminDashboard/Orders/Orders";

const sidebarRoutes = [
  {
    path: "/products",
    name: "products",
    icon: "",
    component: <Products />,
    layout: "",
  },
  {
    path: "/customers",
    name: "customers",
    icon: "",
    component: <Customers />,
    layout: "",
  },
  {
    path: "/reviews",
    name: "reviews",
    icon: "",
    component: <Reviews />,
    layout: "",
  },
  {
    path: "/orders",
    name: "orders",
    icon: "",
    component: <Orders />,
    layout: "",
  },
];

export default sidebarRoutes;
