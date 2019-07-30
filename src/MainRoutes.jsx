import Checklist from "./Checklist";
import Search from "./Search";

const mainRoutes = [
  {
    path: "/checklist",
    name: "Checklist",
    icon: "checklist-icon",
    component: Checklist
  },

  {
    path: "/search",
    name: "Search",
    icon: "search-icon",
    component: Search
  },
  { redirect: true, path: "/", to: "/checklist", name: "Checklist" }
];

export default mainRoutes;
