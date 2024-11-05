let image = document.querySelector(".heading");
let color = "rgb(157,54,255)";
let blank = document.querySelector(".blank");

let removePx = (num) => {
  let res = num.replace(/[^\d]/g, ""); // gives "-12345.50"
  return res;
};
window.addEventListener("wheel", handlemouse);

function handlemouse(event) {
  // if (condition) {
  // }
  console.log(window.scrollY);
  let scale = window.scrollY;
  if (window.scrollY < 800) {
    image.style.height = `${window.scrollY}px`;
  }
  if (window.scrollY == 0) {
    image.style.height = "50px";
  }
}
