import getUserData from "../dataFunctions/getUserData.js";
import home from "../views/home.js";
import login from "../views/login.js";

function handleLoadedContent() {
  if (getUserData("loggedUser")) {
    return home();
  }
  login();
}

export default handleLoadedContent;
