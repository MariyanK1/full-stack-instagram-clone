import { createOrChangeData } from "../dataFunctions/apiFunctions.js";
import storeUserData from "../dataFunctions/storeUserData.js";

async function handleCRUD(e) {
  const container = e.target.closest(".registeredUser");
  const email = container.querySelector("p > .valueRegUser").innerText;

  const operations = {
    Delete: async () => {
      location.hash = "#logout";
      container.remove();
      await createOrChangeData(`api/users/${email}`, "delete", { email });
      await createOrChangeData("/avatars", "delete", { holder: email });
    },
    Edit: () => {
      storeUserData("clickedUser", email);
    },
    Gallery: () => {
      storeUserData("clickedUser", email);
    },
    Close: () => {
      console.log("Close modal");
    },
  };

  try {
    if (typeof operations[e.target.innerText] === "function") {
      return operations[e.target.innerText]();
    }
  } catch (error) {
    console.error(error);
  }
}

export default handleCRUD;
