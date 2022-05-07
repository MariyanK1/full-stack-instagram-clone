import { content, nav } from "../helpers/constants.js";
import indexNav from "./components/indexNav.js";
import loginForm from "./components/loginForm.js";

function login() {
  content.innerHTML = loginForm;
  nav.innerHTML = indexNav;
  location.hash = "#login";
}

export default login;
