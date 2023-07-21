const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const ul = document.querySelector("ul");
addBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  const value = input.value;
  //   const li = document.createElement("li");
  //   li.innerText = value;
  const element = document.querySelector(".item");
  const copy = element.cloneNode(true);
  const span = copy.querySelector("#txt");
  span.innerHTML = value;
  ul.appendChild(copy);
  const deleteBtns = document.querySelectorAll(".btn");
  deleteBtns.forEach((elmt) => {
    elmt.addEventListener("click", (evt) => {
      evt.target.parentNode.remove();
    });
  });

  const checkBoxes = document.querySelectorAll("#check");
  checkBoxes.forEach((elmt) => {
    elmt.addEventListener("click", (e) => {
      if (e.target.checked == true) {
        e.target.nextElementSibling.classList.add("line-through");
      } else {
        e.target.nextElementSibling.classList.remove("line-through");
      }
    });
  });
});
