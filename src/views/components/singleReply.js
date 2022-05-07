function singleReply(postedBy, postBody, idOfComment) {
  return `
    <div class='singleReply' id="${idOfComment}">
        <p>${postedBy.split("@")[0]}:</p>
        <p>${postBody}</p>
    </div>
    `;
}

export default singleReply;
