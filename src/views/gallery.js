import { getData } from "../dataFunctions/apiFunctions.js";
import getUserData from "../dataFunctions/getUserData.js";

async function gallery() {
  const clickedUser = getUserData("clickedUser");
  const posts = await getData("/getAllPosts");
  const postsByClickedUser = posts.filter((e) => e.email === clickedUser);
  const container = document.querySelector(".gallery-container");

  for (const post of postsByClickedUser) {
    container.innerHTML += `<img class='userImage' title='${post.postBody}' src="../../public/images/posts/${post.postImage}" >`;
  }
}

export default gallery;
