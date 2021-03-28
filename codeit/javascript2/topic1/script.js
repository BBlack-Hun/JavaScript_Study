const myNumberTag = document.getElementById('myNumber');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function () {
  myNumber--;
  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function () {
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName('color-btn');

for (let btn of colorBtns) {
  console.log(btn.dataset.color);
  btn.onclick = function () {
    myNumberTag.style.color = btn.dataset.color;
  };
}
