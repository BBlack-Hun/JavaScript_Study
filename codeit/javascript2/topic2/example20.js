// 구조분해 (Destructuring)

const macbook = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16GB',
  storage: '1TB SSD 저장 장치',
  display: '16형 Retina 디스플레이',
  'serial-num': 'ABCDEFGHIJKL',
};

// const titile = macbook.title;
// const price = macbook.price;
// const { title, color} = macbook;
// const { title: product, ...rest } = macbook;
// const { title: product, 'serial-num': serialNum } = macbook;

// // title로 출력시 오류가 발생!
// // console.log(title);
// console.log(product);
// console.log(serialNum);
// console.log(rest);

const propertyName = 'title';
const { [propertyName]: product } = macbook;

console.log(product);
