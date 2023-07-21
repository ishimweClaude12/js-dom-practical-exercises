const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const errorSection = document.querySelector("#error");

input2.addEventListener("input", (evt) => {
  const value1 = input1.value;
  const value2 = evt.target.value;
  if (value1 < value2) {
    error.innerHTML = "Second number is larger";
  } else if (value1 > value2) {
    error.innerHTML = "First number is larger";
  } else {
    error.innerHTML = null;
  }
});
