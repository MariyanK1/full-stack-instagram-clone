function errorMessage(isRegister) {
  const message = isRegister
    ? `<h3 class="titleContent">User already exists!</h3>`
    : `<h3 class="titleContent">User does not exist!</h3>`;
  return message;
}

export default errorMessage;
