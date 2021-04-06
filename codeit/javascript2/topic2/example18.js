// 구조 분해 (Destructuring)

const rank = ['유나', '효준', '민환', '재하', ' 규식'];

// const mackbook = {
//   title: '맥북 프로 16형',
//   price: 3690000,
//   memory: '16 GB',
//   storage: '1TB SSD 저장장치',
//   display: '16형 Retina 디스플레이',
// };

// const macbook = rank[0]; //  효준
// const ipad = rank[1]; // 유나
// const airpods = rank[2]; // 민환
// const coupon = rank[3]; // 재하
const [macbook, ipad, airpods, ...coupon] = rank;

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);
