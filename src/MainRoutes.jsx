import Checklist from "./Checklist";
import Search from "./Search";

const mainRoutes = [
  {
    path: "/checklist",
    name: "Checklist",
    component: Checklist
  },
  
  {
    path: "/checklist",
    name: "Search",
    component: Search
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default mainRoutes;
