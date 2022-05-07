import getUserData from "../../dataFunctions/getUserData.js";
import editModal from "./editModal.js";
import galleryModal from "./galleryModal.js";
import userCRUDBtns from "./userCRUDBtns.js";

function singleUserElement(arr, avatarName) {
  const [email, registeredAt, sex] = arr;
  const loggedUser = getUserData("loggedUser");

  return `
        <div class='registeredUser'>
            ${editModal}
            ${galleryModal}
            <img class="avatar" src="./public/images/avatars/${avatarName}" alt=${email}-avatar title=${email}-avatar />
            <p>Email: <span class='valueRegUser'>${email}</span></p>
            <p>Registered at: <span class='valueRegUser'>${registeredAt}</span></p>
            <p>Sex: <span class='valueRegUser'>${sex}</span></p>
            <div style='display: flex; justify-content: center; gap: 1em;'>
            <a href="#gallery"><button class="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#galleryModal">Gallery</button></a>
                ${loggedUser === email ? userCRUDBtns : ""}
            </div>
        </div>
    `;
}

export default singleUserElement;
