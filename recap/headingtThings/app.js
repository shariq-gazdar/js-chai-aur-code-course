let heading = document.querySelector(".heading");
let color = "rgb(157,54,255)";
document.addEventListener("mousemove", handlemouse);
var divtag = document.querySelectorAll("div");
function handlemouse(event) {
  // console.log(event);
  divtag[1].innerHTML = `X: ${event.clientX}`;
  divtag[2].innerHTML = `Y: ${event.clientY}`;
  divtag[0].style.position = "absolute";
  divtag[0].style.top = `${event.clientY - 50}px`;
  divtag[0].style.left = `${event.clientX - 50}px`;
  heading.style.fontSize = `${(event.clientX + event.clientY) / 5}px`;

  heading.style.color = `rgb(157,54,${event.clientX / 5})`;
  console.log(heading);

  console.log(event.clientX);
}
