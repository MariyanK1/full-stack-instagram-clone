const commentsInput = `
<div class="commentsInput">
  <div class='showComments'><p>Show All Comments</p></div>
  <div class='comments'></div>
<div class="input-group" data-formgroup data-comment-input>
  <input type="text" class="form-control" name='commentsInput' placeholder="Say something.." />
  <div class='pick-emoji'><img src='../../public/images/icons/emoji.png'></div>
  <div class="post">
  <button class="btn btn-outline-secondary" type="button">Post</button>
  </div>
  </div>
  <span class="showError" data-error="commentsInput"></span>
</div>
`;
export default commentsInput;
