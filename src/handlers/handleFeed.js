import { uploadImage } from "../dataFunctions/apiFunctions.js";
import { createOrChangeData, getData } from "../dataFunctions/apiFunctions.js";
import getUserData from "../dataFunctions/getUserData.js";

async function handleFeed(post, e) {
  const loggedUser = getUserData("loggedUser");
  const userInfo = await getData(`api/users/${loggedUser}`);
  const spinner = document.getElementById("spinner");
  location.hash = "#postfeed";
  spinner.className = "spinner-border";

  e.target.querySelector("button").setAttribute("disabled", "");

  const data = {
    postBody: post.postBody,
    postImage: post.postImage.name,
    avatar: userInfo.avatar,
    email: loggedUser,
  };

  await uploadImage(`/post-image`, "post", post.postImage);
  await createOrChangeData("/post", "post", data);
  setTimeout(() => {
    location.hash = "#feed";
  }, 1500);
}

export default handleFeed;
