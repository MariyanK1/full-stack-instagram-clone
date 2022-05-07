import handleLogin from "./handleLogin.js";
import handleRegister from "./handleRegister.js";
import handleEdit from "./handleEdit.js";
import handleFeed from "./handleFeed.js";
import User from "../models/User.js";
import Post from "../models/Post.js";

function handleSubmit(e) {
  e.preventDefault();

  const user = new User(e.target).data;
  const post = new Post(e.target).data;

  const routes = {
    "#login": () => handleLogin(user),
    "#register": () => handleRegister(user),
    "#edit": () => handleEdit(user, e),
    "#feed": () => handleFeed(post, e),
  };

  routes[location.hash]();
}

export default handleSubmit;
