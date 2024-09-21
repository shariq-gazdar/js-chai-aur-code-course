let heading = document.querySelector(".heading");
let color = "rgb(157,54,255)";

let removePx = (num) => {
  let res = num.replace(/[^\d]/g, ""); // gives "-12345.50"
  return res;
};
document.addEventListener("wheel", handlemouse);
var div = document.querySelectorAll("div");
function handlemouse(event) {
  // console.log(event);
  let oldSize = removePx(heading.style.height);
  console.log(oldSize, "Old size");

  div[1].innerHTML = `X: ${event.clientX}`;
  div[2].innerHTML = `Y: ${event.clientY}`;
  div[0].style.position = "absolute";
  div[0].style.top = `${event.clientY - 50}px`;
  div[0].style.left = `${event.clientX - 50}px`;
  console.log(event);

  // console.log(event.deltaY, "event I want ");

  console.log(event.deltaY);
  let updateSize = oldSize + parseInt(event.deltaY);
  oldSize = updateSize;
  console.log(updateSize, "Update Size");

  if (oldSize < 100000) {
    heading.style.height = `${updateSize + 1}px`;
    heading.style.color = `rgb(157,54,${event.clientX / 5})`;
  } else {
    oldSize = 100;
  }

  // console.log(heading);

  // console.log(event.clientX);
}
