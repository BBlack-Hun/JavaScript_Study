// new Date(milliseconds)

let myDate = new Date(1000);

console.log(myDate);

var date = new Date(2018, 4, 18, 19, 11, 16);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

// 지금 이순간
let Ndate = new Date();

console.log(Ndate.toLocaleString());