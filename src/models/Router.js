import { paths } from "../routing/paths.js";

class Router {
  routes = [];
  mode = "hash";

  add = (path, callback) => {
    this.routes.push({ path, callback });
  };

  remove = (path) => {
    this.routes = this.routes.filter((route) => route.path !== path);
  };

  flush = () => {
    this.routes = [];
  };

  navigate = (path) => {
    this.routes.forEach((route) => {
      if (route.path === path) {
        route.callback();
      }
    });
  };

  listen = () => {
    window.addEventListener("hashchange", () => {
      this.add(location.hash, paths[location.hash.slice(1)]);
      this.navigate(location.hash);
      this.flush();
    });
  };
}

export default Router;
