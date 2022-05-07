import { uploadImage } from "../dataFunctions/apiFunctions.js";
import { emailRegex, passwordRegex } from "./constants.js";

function errorChecker(input) {
  const value = input.value;
  return {
    email: () => {
      if (!value) {
        return input.dataset.emailEmptyMessage;
      }
      if (!emailRegex.test(value)) {
        return input.dataset.emailMessage;
      }
    },
    password: () => {
      if (!value) {
        return input.dataset.emptyMessage;
      }
      if (!value.match(passwordRegex)) {
        return input.dataset.lengthMessage;
      }
    },

    repeatPassword: () => {
      const valueOfPassword = document.querySelector("[name='password']").value;

      if (!value) {
        return input.dataset.emptyMessage;
      }

      if (value !== valueOfPassword) {
        return input.dataset.matchMessage;
      }
    },

    currentPassword: () => {
      if (!value) {
        return input.dataset.emptyMessage;
      }

      if (!value.match(passwordRegex)) {
        return input.dataset.lengthMessage;
      }
    },
    avatar: async () => {
      const avatarInput = document.querySelector(".avatarInput");
      const labelAvatar = document.querySelector(".labelAvatar");
      const message = document.querySelector(".uploaded");

      const res = await uploadImage(`/upload`, "avatar", avatarInput.files[0]);

      if (res.upload === "successful") {
        avatarInput.classList.add("hidden");
        labelAvatar.classList.add("hidden");
        message.classList.replace("hidden", "success");
      }
    },
    postImage: () => {
      return "";
    },
    sex: () => {
      return "";
    },
    dateEditModal: () => {
      console.log("date in modal");
    },
    editAvatar: async () => {
      await uploadImage(`/upload`, "avatar", input.files[0]);
    },
    postBody: () => {
      return "";
    },
    commentsInput: () => {
      return "";
    },
    replyInput: () => {
      return "";
    },
  };
}

export default errorChecker;
