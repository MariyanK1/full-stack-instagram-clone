function welcomeBackMessage(email) {
  return `
  <h3 class="titleContent">
    Welcome back, <span class='valueRegUser'>${email.split("@")[0]}</span>!
  </h3>
    `;
}

export default welcomeBackMessage;
