import Checklist from "./Checklist";
import Search from "./Search";

const mainRoutes = [
  {
    path: "/checklist",
    name: "Checklist",
    katakana: "リスト",
    icon: "checklist-icon",
    component: Checklist,
    page: Checklist
  },

  {
    path: "/search",
    name: "Search",
    katakana: "探索",
    icon: "search-icon",
    component: Search,
    page: Search
  },
  { redirect: true, path: "/", to: "/checklist", name: "Checklist" }
];

export default mainRoutes;
