const element = document.querySelector(".counter");
var count = 10;
setInterval(function () {
  element.innerHTML = count;
  count--;
  if (count < 0) {
    five.classList.add("hide");
    ten.classList.add("hide");
    fifteen.classList.add("hide");
    count = 0;
  }
}, 1000);
const buttons = document.querySelectorAll("buttons");
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");

five.addEventListener("click", (evt) => {
  count += 5;
});
fifteen.addEventListener("click", (ev) => {
  count += 15;
});
ten.addEventListener("click", (e) => {
  count += 10;
});
