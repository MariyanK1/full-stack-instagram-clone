function storeUserData(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export default storeUserData;
