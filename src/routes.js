
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import HomePage from "views/examples/HomePage.js";
import TagsPage from "views/examples/TagsPage.js";
import QuestionPage from "views/examples/QuestionPage.js";

var routes = [
  {
    path: "/index",
    name: "Questions",
    icon: "ni ni-tv-2 text-primary",
    component: HomePage,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Tags",
    icon: "ni ni-planet text-blue",
    component: TagsPage,
    layout: "/admin",
  },

  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/question",
    name: "question",
    icon: "ni ni-circle-08 text-pink",
    component: QuestionPage,
    layout: "/admin",
  },
];
export default routes;
