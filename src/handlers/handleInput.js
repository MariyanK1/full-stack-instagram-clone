import errorChecker from "../helpers/errorChecker.js";
import storeUserData from "../dataFunctions/storeUserData.js";

function handleInput(e) {
  const el = e.target;
  const errorValue = errorChecker(el)[el.name]();
  const errorEl = el.closest("[data-formgroup")?.querySelector("[data-error]");

  if (errorEl) {
    if (typeof errorValue === "string") {
      errorEl.innerText = errorValue;
      errorEl.classList = "showError";
      return storeUserData("error", true);
    }
    errorEl.classList = "hidden";
    storeUserData("error", false);
  }
}

export default handleInput;
