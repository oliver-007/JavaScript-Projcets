// set initial value
let count = 0;

//  select value and button
const value = document.getElementById("value");
const btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnId = e.currentTarget.id;
    if (btnId == "decrease") {
      count--;
    } else if (btnId == "increase") {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "limegreen";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
