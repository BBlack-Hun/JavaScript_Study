// 구조분해 (Destructuring)

const macbook = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16GB',
  storage: '1TB SSD 저장 장치',
  display: '16형 Retina 디스플레이',
};

// const titile = macbook.title;
// const price = macbook.price;
const { title, ...rest } = macbook;

console.log(title);
console.log(rest);
