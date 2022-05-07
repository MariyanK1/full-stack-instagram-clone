import getUserData from "../../dataFunctions/getUserData.js";
import commentsInput from "./commentsInput.js";

function singlePost({ email, postImage, postBody, _id, likes }, avatarName) {
  const loggedUser = getUserData("loggedUser");
  const trashImage = `<img src='../../../public/images/icons/delete.png' >`;
  const editImage = `<img src='../../../public/images/icons/edit.png' >`;
  const crudImages = `<div class='crud-icons'><div class='delete'>${trashImage}</div><div class='edit'>${editImage}</div></div>`;
  const likeOrDislike = likes.includes(loggedUser)
    ? `heart-red.png`
    : `heart.png`;

  const userName = email.split("@")[0];
  let likedBy = "";

  likes.forEach((like) => {
    likedBy += `${like.split("@")[0]}, `;
  });

  return `
    <div class='singlePost' id="${_id}">
      <div class='poster'>
        <div class='posterInfo'>
          <img src='../../public/images/avatars/${avatarName}' >
          <p>${userName}</p>
        </div>
          ${email === loggedUser ? crudImages : ""}
      </div>
      <div class='postImage'>
       <img class="w-100" src="../../../public/images/posts/${postImage}" />
       </div>
       <div class='communication'>
        <div class='like'><img src=../../public/images/icons/${likeOrDislike} ></div>
        <div class='comment'><img src='../../public/images/icons/comment.png' ></div>
        <div class='share'><img src='../../public/images/icons/share.png' ></div>
       </div>
       <div class='likedBy'><p>Liked by: ${likedBy}</p></div>
       <div class='postBody'>
       <p class='postEmail'>${userName}
       <p class='postText'>${postBody}</p>
       </div>
       ${commentsInput}
    </div>
    `;
}

export default singlePost;
