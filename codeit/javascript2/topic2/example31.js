//filter와 find
const devices = [
  { name: 'GalaxyNote', brand: 'Samsung' },
  { name: 'macbookPro', brand: 'Apple' },
  { name: 'iPad', brand: 'Apple' },
  { name: 'GalaxyWatch', brand: 'Samsung' },
  { name: 'iMac', brand: 'Apple' },
  { name: 'GalaxyBuds', brand: 'Samsung' },
  { name: 'Gram', brand: 'LG' },
  { name: 'GalaxyBook', brand: 'Samsung' },
  { name: 'SurfacePro', brand: 'Microsoft' },
  { name: 'ZenBook', brand: 'Asus' },
  { name: 'MacBookAir', brand: 'Apple' },
];

const apples = devices.filter((el, i) => {
  console.log(i);
  return el.brand === 'Apple';
});

console.log(apples);

// 배열로 반환 (해당하는 내용이 있는 한 계속 반복)
const myLaptop = devices.filter((el) => el.name === 'Gram');

console.log(myLaptop);

// 하나의 값을 반환
const myLabtop2 = devices.find((el) => el.name === 'Gram');

console.log(myLabtop2);

// 가장 먼저 발견한 값을 반환하고 종료.
const myLabtop3 = devices.find((el, i) => {
  console.log(i);
  return el.brand === 'Apple';
});

console.log(myLabtop3);
