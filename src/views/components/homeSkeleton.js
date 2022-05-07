function homeSkeleton(username) {
  return `
    <div class='welcome-message'>
        <h3 class="titleContent">
        Welcome back, <span class='valueRegUser'>${
          username.split("@")[0]
        }</span>!
        </h3>
    </div>
    <div class='registeredUsersWrapper'>
        <h5>Registered users:</h5>
    </div>
    `;
}

export default homeSkeleton;
