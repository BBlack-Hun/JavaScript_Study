// 피보나치 수열

let cnt = 0;
let i = 0;
let a = 1;
let result = 0;
while (1) {
  if (cnt == 50)
    break;
  result = a;
  a += i;
  i = result;
  console.log(result);
  cnt++;

}