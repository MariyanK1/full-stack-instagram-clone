class Post {
  constructor(postObj) {
    this.postBody = postObj.postBody;
    this.postImage = postObj.postImage;
    this.data = {};
    for (const [key, value] of new FormData(postObj)) {
      this.data[key] = value;
    }
  }
}

export default Post;
