const feedSkeleton = `
    <div class='posts'>
        <h4>What's on your mind?</h4>
        <form class='posts-form'>
            <div class="mb-1">
             <div class="form__group" data-formgroup>
                <textarea required name='postBody' class="form-control" rows="3"></textarea>
                <span class="form__error" data-error="email"></span>
            </div>
             </div>
             <div class="mb-1">
                <div class="form__group" data-formgroup>
                <input name='postImage' class="form-control" type="file" accept=".jpg, .jpeg, .png" required/>
                <span class="form__error" data-error="email"></span>
            </div>
             </div>
      <button type="submit" class="btn btn-primary mt-3">Post</button>
      <h4 class='mb-5 mt-5'>Latest posts:</h4>
      <div class="spinner-border visually-hidden" style='margin-bottom: 2em' id='spinner' role="status"></div>
        </form>
        <div class="latest-posts"></div>
    </div>
    `;

export default feedSkeleton;
