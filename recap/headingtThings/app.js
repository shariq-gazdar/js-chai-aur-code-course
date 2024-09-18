let heading = document.querySelector(".heading");
let color = "rgb(157,54,255)";
document.addEventListener("mousemove", handlemouse);
var div = document.querySelectorAll("div");
function handlemouse(event) {
  // console.log(event);
  div[1].innerHTML = `X: ${event.clientX}`;
  div[2].innerHTML = `Y: ${event.clientY}`;
  div[0].style.position = "absolute";
  div[0].style.top = `${event.clientY - 50}px`;
  div[0].style.left = `${event.clientX - 50}px`;
  heading.style.fontSize = `${(event.clientX + event.clientY) / 5}px`;

  heading.style.color = `rgb(157,54,${event.clientX / 5})`;
  console.log(heading);

  console.log(event.clientX);
}
