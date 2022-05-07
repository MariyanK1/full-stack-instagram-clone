import handleInput from "../src/handlers/handleInput.js";
import handleLoadedContent from "../src/handlers/handleLoadedContent.js";
import handleSlideshow from "../src/handlers/handleSlideshow.js";
import handleSubmit from "../src/handlers/handleSubmit.js";
import Router from "../src/models/Router.js";

window.addEventListener("hide.bs.modal", () => (location.hash = "#home"));
window.addEventListener("load", handleLoadedContent);
window.addEventListener("submit", handleSubmit);
window.addEventListener("input", handleInput);
new Router().listen();
handleSlideshow();
