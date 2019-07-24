import Checklist from "views/Checklist/Checklist.jsx";
import Search from "/views/Search/Search.jsx";

const mainRoutes = [
  {
    path: "/checklist",
    name: "Checklist",
    icon: "pe-7s-graph",
    component: Checklist
  },
  
  {
    path: "/checklist",
    name: "Search",
    icon: "pe-7s-note2",
    component: Search
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default mainRoutes;
