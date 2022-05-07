import { nav, content } from "../helpers/constants.js";
import { getData } from "../dataFunctions/apiFunctions.js";
import getUserData from "../dataFunctions/getUserData.js";
import homeNav from "./components/homeNav.js";
import singleUserElement from "./components/singleUserElement.js";
import homeSkeleton from "./components/homeSkeleton.js";
import handleCRUD from "../handlers/handleCRUD.js";

async function home() {
  const users = await getData("api/users");
  const avatars = await getData("/avatars");
  const email = getUserData("loggedUser");
  content.innerHTML = homeSkeleton(email);
  nav.innerHTML = homeNav;
  const containerUsers = document.querySelector(".registeredUsersWrapper");
  containerUsers.addEventListener("click", handleCRUD);

  for (const user of users) {
    const singleUser = [user.email, user.registeredAt, user.sex, user.avatar];
    for (const { name, holder } of avatars) {
      if (holder === user.email) {
        containerUsers.innerHTML += singleUserElement(singleUser, name);
        break;
      }
    }
  }
  location.hash = "#home";
}

export default home;
