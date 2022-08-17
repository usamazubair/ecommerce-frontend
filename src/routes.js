import AdminDashboard from "views/AdminDashboard/Dashboard/Dashboard";
import Profile from "views/AdminDashboard/Profile/Profile";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    icon: "",
    component: <AdminDashboard/>,
    layout: "",
  },
  {
    path: "/profile",
    name: "profile",
    icon: "",
    component: <Profile/>,
    layout: "",
  },
];

export default dashboardRoutes;
