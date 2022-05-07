function singleComment(postedBy, commentBody, id = "") {
  return `<div class='singleComment' id="${id}">
        <h4>${postedBy} :</h4>
        <p>${commentBody.value ? commentBody.value : commentBody}</p>
        <div class='show-replies'>
        <button type="button" class="btn btn-secondary btn-sm">Show Replies</button>
        </div>
    </div>`;
}

export default singleComment;
