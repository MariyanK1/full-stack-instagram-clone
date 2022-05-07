function removeFadeOut(el, speed) {
  const seconds = speed / 1000;
  el.style.transition = "opacity " + seconds + "s ease";

  el.style.opacity = 0;
  setTimeout(() => el.remove(), speed);
}

export default removeFadeOut;
