import Products from "views/AdminDashboard/Products/Products";
import Categories from "views/AdminDashboard/Categories/Categories";
import Reviews from "views/AdminDashboard/Reviews/Reviews";
import Orders from "views/AdminDashboard/Orders/Orders";

const sidebarRoutes = [
  {
    path: "products",
    name: "products",
    icon: "",
    component: <Products />,
    layout: "",
  },
  {
    path: "categories",
    name: "categories",
    icon: "",
    component: <Categories />,
    layout: "",
  },
  {
    path: "reviews",
    name: "reviews",
    icon: "",
    component: <Reviews />,
    layout: "",
  },
  {
    path: "orders",
    name: "orders",
    icon: "",
    component: <Orders />,
    layout: "",
  },
];

export default sidebarRoutes;
