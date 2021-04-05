// Arrow Function

const getTwice = function (number) {
  return number * 2;
};

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function () {
  console.log('button is clicked!');
});

const getTwice2 = (number) => {
  return number * 2;
};

const myBtn2 = document.querySelector('#myBtn2');

myBtn2.addEventListener('click', () => {
  console.log('button is clicked!');
});

const getTwice3 = (number) => number * 2;

console.log(getTwice3(6));

// 파라미터가 2개이상이거나 없을때는, 소괄호를 꼭 작성해줘야 한다. 1개 일때는, 생략 가능.
const sum = (a, b) => {
  const result = a + b;
  return result;
};

const getCodeit = () => ({ name: 'Codeit' });

console.log(sum(10, 5));
console.log(getCodeit());

// Arrow function은 arguments 객체가 없다.
