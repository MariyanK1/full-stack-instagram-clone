import { createOrChangeData, getData } from "../dataFunctions/apiFunctions.js";
import removeFadeOut from "../helpers/removeFadeOut.js";
import getUserData from "../dataFunctions/getUserData.js";
import commentsInput from "../views/components/commentsInput.js";
import singleComment from "../views/components/singleComment.js";
import replyInput from "../views/components/replyInput.js";
import singleReply from "../views/components/singleReply.js";

function handleCRUDPosts(e) {
  const elClass = e.target.parentElement.className;
  const parent = e.target.closest(".singlePost");
  const loggedUser = getUserData("loggedUser");

  const operations = {
    delete: async () => {
      const buttonsContainer = parent.querySelector(".crud-icons");
      await createOrChangeData("/delete-post", "delete", { id: parent.id });
      buttonsContainer.remove();
      removeFadeOut(parent, 1000);
    },
    comment: () => {
      const input = parent.querySelector(".commentsInput");

      if (input) {
        return input.remove();
      }
      const singlePost = e.target.closest(".singlePost");
      singlePost.innerHTML += commentsInput;
    },
    post: async () => {
      const postInput = parent.querySelector("[data-comment-input] > input");
      const error = parent.querySelector(".commentsInput > .showError");
      const commentsSection = parent.querySelector(".comments");

      if (postInput.value.length <= 0) {
        return (error.innerHTML = "Please write something");
      }

      error.innerHTML = "";

      await createOrChangeData("/comment", "post", {
        idOfThePost: parent.id,
        comment: postInput.value,
        commentedBy: loggedUser,
        isReply: false,
      });

      commentsSection.innerHTML += singleComment(
        loggedUser.split("@")[0],
        postInput
      );
      postInput.value = "";
    },
    showComments: async () => {
      const target = e.target;
      const commentsContainer = parent.querySelector(".comments");
      commentsContainer.innerHTML = "";

      if (target.innerText.includes(`Hide`)) {
        commentsContainer.innerHTML = "";
        return (target.innerText = `Show All Comments`);
      }

      const comments = await getData("/comment");
      const filteredComments = comments.filter((e) => !e.isReply);

      for (const y of filteredComments) {
        if (y.idOfThePost === parent.id) {
          commentsContainer.innerHTML += singleComment(
            y.commentedBy.split("@")[0],
            y.comment,
            y._id
          );
        }
      }
      target.innerText = `Hide All Comments`;
    },
    edit: () => {
      console.log("edit");
    },
    like: async () => {
      const likesContainer = parent.querySelector(".likedBy > p");

      if (!e.target.src.includes("heart-red")) {
        e.target.src = "../../public/images/icons/heart-red.png";
        likesContainer.innerText += ` ${loggedUser.split("@")[0]}, `;
        await createOrChangeData(`/post/like`, "put", {
          id: parent.id,
          like: loggedUser,
        });
        return;
      }

      const username = loggedUser.split("@")[0];

      likesContainer.innerText = likesContainer.innerText.replace(
        `${username},`,
        ""
      );
      e.target.src = "../../public/images/icons/heart.png";
      await createOrChangeData(`/post/dislike`, "put", {
        id: parent.id,
        dislike: loggedUser,
      });
    },
    "pick-emoji": () => {
      const input = parent.querySelector(".commentsInput > .input-group");

      if (parent.querySelector("emoji-picker")) {
        return parent.querySelector("emoji-picker").remove();
      }
      const el = document.createElement("emoji-picker");
      const style = document.createElement("style");
      el.shadowRoot.appendChild(style);
      el.classList.add("light");
      style.textContent = ".search-row, .pad-top { display: none; }";
      input.prepend(el);

      el.addEventListener("emoji-click", (e) => {
        const commentInput = e.path[3].querySelector(".input-group > input");
        commentInput.value += e.detail.unicode;
      });
    },
    "post-reply": async () => {
      const replyInput = e.path[2].querySelector("input");
      const comment = e.path[3].previousSibling;

      if (replyInput.value <= 0) {
        return alert("Empty input.");
      }

      const data = {
        idOfThePost: comment.id,
        commentedBy: loggedUser,
        comment: replyInput.value,
        isReply: "true",
      };

      await createOrChangeData("/comment", "post", data);

      const singleReply = document.createElement("div");
      singleReply.classList.add("singleReply");
      singleReply.innerHTML = `
        <p>${loggedUser.split("@")[0]}:</p>
        <p>${replyInput.value}</p>
      `;

      replyInput.parentElement.insertAdjacentElement(
        "beforebegin",
        singleReply
      );

      replyInput.value = "";
    },
    "show-replies": async () => {
      const commentContainer = e.path[2];

      e.target.innerText = "Hide Replies";
      e.target.parentElement.style = "display:block;";
      if (commentContainer.nextSibling?.className.includes("replies")) {
        e.target.innerText = "Show Replies";
        e.target.parentElement.style = "";

        return commentContainer.nextSibling.remove();
      }
      const replies = await getData("/comment");
      const filteredReplies = replies.filter(
        (e) => e.idOfThePost === commentContainer.id && e.isReply
      );

      const repliesContainer = document.createElement("div");
      repliesContainer.classList.add("repliesContainer");

      for (const { commentedBy, comment, idOfThePost } of filteredReplies) {
        repliesContainer.innerHTML += singleReply(
          commentedBy,
          comment,
          idOfThePost
        );
      }

      repliesContainer.innerHTML += replyInput(
        commentContainer.querySelector("h4").innerText.split(" :")[0]
      );

      commentContainer.insertAdjacentElement("afterend", repliesContainer);
    },
  };

  try {
    operations[elClass]();
  } catch (error) {
    console.log(error);
  }
}

export default handleCRUDPosts;
