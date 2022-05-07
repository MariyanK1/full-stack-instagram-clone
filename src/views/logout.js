import storeUserData from "../dataFunctions/storeUserData.js";

function logout() {
  storeUserData("loggedUser", false);
  location.hash = "#login";
}

export default logout;
