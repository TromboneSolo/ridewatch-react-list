import Checklist from "./Checklist";
import Search from "./Search";

const mainRoutes = [
  {
    path: "/checklist",
    name: "Checklist",
    icon: "checklist-icon",
    component: Checklist,
    page: Checklist
  },

  {
    path: "/search",
    name: "Search",
    icon: "search-icon",
    component: Search,
    page: Search
  },
  { redirect: true, path: "/", to: "/checklist", name: "Checklist" }
];

export default mainRoutes;
