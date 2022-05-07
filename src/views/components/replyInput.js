function replyInput(username) {
  return `
  <div class="input-group mb-3" data-formgroup>
    <input type="text" class="form-control" name='replyInput' placeholder="Reply to @${username}" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <div class="post-reply">
      <button class="btn btn-outline-secondary" type="button">Post Reply</button>
    </div>
  </div>
  `;
}

export default replyInput;
