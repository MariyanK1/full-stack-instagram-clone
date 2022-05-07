import getUserData from "../dataFunctions/getUserData.js";
import storeUserData from "../dataFunctions/storeUserData.js";
import { getData } from "../dataFunctions/apiFunctions.js";
import { content } from "../helpers/constants.js";
import errorMessage from "../views/components/errorMessage.js";

async function handleLogin(user) {
  const userRequest = await getData(`api/users/${user.email}`);
  const errors = getUserData("error");

  if (!errors && userRequest.message !== "User not found") {
    storeUserData("loggedUser", userRequest.email);
    return (location.hash = "#home");
  }
  content.innerHTML = errorMessage(false);
  setTimeout(() => {
    location.hash = "#register";
  }, 2500);
}

export default handleLogin;
