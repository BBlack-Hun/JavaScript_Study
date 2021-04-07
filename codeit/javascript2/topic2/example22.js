// 구조 분해 (Destructuring)

// function getArray() {
//   return ['컴퓨터', '냉장고', '세탁기'];
// }

// const [el1, el2, el3] = getArray();

// console.log(el1);
// console.log(el2);
// console.log(el3);

// function printWinners(...arg) {
//   const [macbook, ipad, airpods, ...coupon] = arg;

//   console.log('이벤트 결과를 알려드립니다!');
//   console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
//   console.log(`아이패드의 주인공은 '${ipad}'님 입니다.`);
//   console.log(`에어팟의 주인공은 '${airpods}'님 입니다.`);
//   console.log('코드잇 3개월 수강권 주인공은');

//   for (let user of coupon) {
//     console.log(`'${user}'님`);
//   }
//   console.log(`이상 총 ${coupon.length}명 입니다.`);
// }

// printWinners('효준', '효신', '재훈', '소원', '현승', '종훈');

// Destructuring을 이용한 예
// function printWinners([macbook, ipad, airpods, ...coupon]) {
//   console.log('이벤트 결과를 알려드립니다!');
//   console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
//   console.log(`아이패드의 주인공은 '${ipad}'님 입니다.`);
//   console.log(`에어팟의 주인공은 '${airpods}'님 입니다.`);
//   console.log('코드잇 3개월 수강권 주인공은');

//   for (let user of coupon) {
//     console.log(`'${user}'님`);
//   }
//   console.log(`이상 총 ${coupon.length}명 입니다.`);
// }

// const ranks = ['효준', '효신', '재훈', '소원', '현승', '종훈'];

// printWinners(ranks);

// function getObject() {
//   return {
//     name: '코드잇',
//     birth: 2017,
//     job: '프로그래밍 강사',
//   };
// }

// const { name: brand, birth, job } = getObject();

// console.log(brand);
// console.log(birth);
// console.log(job);

const macbook = {
  title: '맥북 프로 16형',
  price: 3690000,
  color: 'silver',
  memory: '16GB',
  storage: '1TB SSD 저장 장치',
  display: '16형 Retina 디스플레이',
};

// function pritnSummary(object) {
//   console.log(`선택한 상품은 '${object.title}'입니다`);
//   console.log(`색상은 '${object.color}'이며,`);
//   console.log(`가격은 ${object.price}원 입니다.`);
// }

// function pritnSummary(object) {
//   const { title, color, price } = object;
//   console.log(`선택한 상품은 '${title}'입니다`);
//   console.log(`색상은 '${color}'이며,`);
//   console.log(`가격은 ${price}원 입니다.`);
// }

function pritnSummary({ title, color, price }) {
  console.log(`선택한 상품은 '${title}'입니다`);
  console.log(`색상은 '${color}'이며,`);
  console.log(`가격은 ${price}원 입니다.`);
}

pritnSummary(macbook);

// html DOM 이벤트 처리에도 사용될 수 있다.

const btn = document.querySelector('#btn');
btn.addEventListener(
  ('click',
  (event) => {
    event.target.classList.toggle('checked');
  }),
);

// Destructuring을 사용한 예
btn.addEventListener(
  ('click',
  ({ target }) => {
    target.classList.toggle('checked');
  }),
);

// Destructuring을 사용한 예2
btn.addEventListener(
  ('click',
  ({ target: { classList } }) => {
    classList.toggle('checked');
  }),
);

// Destructuring을 사용한 예3
btn.addEventListener(
  ('click',
  ({ target }) => {
    const { classList } = target;
    classList.toggle('checked');
  }),
);

// 중섭 객체 구조 분해 ( Nested Object Destructuring)
