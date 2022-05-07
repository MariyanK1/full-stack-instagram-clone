function getUserData(key) {
  const x = localStorage.getItem(key);
  return JSON.parse(x);
}

export default getUserData;
