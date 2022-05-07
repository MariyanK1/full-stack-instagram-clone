import { content } from "../helpers/constants.js";
import { getData } from "../dataFunctions/apiFunctions.js";
import singlePost from "./components/singlePost.js";
import feedSkeleton from "./components/feedSkeleton.js";
import handleCRUDPosts from "../handlers/handleCRUDPosts.js";

async function feed() {
  const allPosts = await getData("/getAllPosts");
  const avatars = await getData("/avatars");
  content.innerHTML = feedSkeleton;
  const latestPosts = document.querySelector(".latest-posts");
  latestPosts.addEventListener("click", handleCRUDPosts);

  for (const post of allPosts) {
    for (const { name, holder } of avatars) {
      if (holder === post.email) {
        latestPosts.innerHTML += singlePost(post, name);
        break;
      }
    }
  }
}

export default feed;
