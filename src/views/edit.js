import getUserData from "../dataFunctions/getUserData.js";

function edit() {
  const input = document.querySelector(
    "#editUserModal > div > div > div.submitForm > form > div.modal-body > div:nth-child(2) > input"
  );
  const clickedUser = getUserData("clickedUser");

  input.value = clickedUser;
}

export default edit;
