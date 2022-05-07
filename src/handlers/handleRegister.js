import { emailRegex, content } from "../helpers/constants.js";
import { getData, createOrChangeData } from "../dataFunctions/apiFunctions.js";
import getUserData from "../dataFunctions/getUserData.js";
import successMessage from "../views/components/successMessage.js";
import errorMessage from "../views/components/errorMessage.js";

async function handleRegister(user) {
  const { email, password, sex, repeatPassword, registeredAt } = user;
  const errors = getUserData("error");
  const avatarInput = document.querySelector(".avatarInput");

  if (emailRegex.test(email) && !errors) {
    const userDB = await getData(`api/users/${email}`);

    if (userDB.message === "User not found") {
      await createOrChangeData("/avatars", "post", {
        name: avatarInput.value.replace(/.*[\/\\]/, ""),
        holder: email,
      });

      const data = {
        email,
        password,
        sex,
        registeredAt,
        repeatPassword,
      };

      await createOrChangeData("api/users", "post", data);

      content.innerHTML = successMessage;
      return setTimeout(() => {
        location.hash = "#login";
      }, 2500);
    }

    content.innerHTML = errorMessage(true);
    setTimeout(() => {
      location.hash = "#login";
    }, 2500);
  }
}

export default handleRegister;
