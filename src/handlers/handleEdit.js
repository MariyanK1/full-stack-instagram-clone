import { createOrChangeData } from "../dataFunctions/apiFunctions.js";
import getUserData from "../dataFunctions/getUserData.js";

async function handleEdit(user, e) {
  const email = document.querySelector(".emailInput").value;
  const closeBtn = document.querySelector(".modal-footer").children[0];
  const errors = getUserData("error");
  const avatarInput = e.path[0].querySelector(
    "#editUserModal > div > div > div.submitForm > form > div.modal-body > div:nth-child(7) > input"
  );
  if (!errors) {
    await createOrChangeData(`api/users/${email}`, "put", {
      password: user.password,
      repeatPassword: user.repeatPassword,
      registeredAt: user.dateEditModal,
      sex: user.sex,
      email,
    });

    await createOrChangeData("/avatars", "put", {
      holder: email,
      name: avatarInput.value.replace(/.*[\/\\]/, ""),
    });

    closeBtn.click();
  }
}

export default handleEdit;
