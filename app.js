const excuse = document.querySelector("#excuse");
const button = document.querySelector("#generate-btn");

const updateExcuse = () => {
  excuse.innerHTML = generateExcuse();
};
window.onload = () => {
  updateExcuse();
};
button.addEventListener("click", updateExcuse);

const phrases = [
  ["the", "our"],
  ["great", "big"],
  ["jogger", "racoon"],
  [".com", ".es", ".net"]
];

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const generateExcuse = () => {
  let dominioParts = [];
  for (let i = 0; i < phrases.length; i++) {
    for (let j = 0; j < 1; j++) {
      dominioParts.push(phrases[i][getRandomIndex(phrases[i])]);
    }
  }
  return dominioParts.join("");
};
