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

const apples = devices.filter((el) => el.brand === 'Apple');

console.log(apples);
