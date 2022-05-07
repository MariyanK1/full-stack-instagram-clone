const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const today = new Date().toISOString().split("T")[0];
const adImage = document.querySelector(".ad-image");
const content = document.querySelector(".content");
const nav = document.querySelector(".navigation");

export { nav, today, content, adImage, emailRegex, passwordRegex };
