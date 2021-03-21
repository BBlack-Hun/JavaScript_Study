function isPalindrome(word) {
  let index = [];
  let reverse = [];
  
  for (i of word) {
    index.push(i);
  }
  reverse = index.slice().reverse();

  let cnt = 0;
  let flag;

  for (i in word) {
    if (index[i] != reverse[i]) {
      flag = 0;
      break;
    } else {
      cnt++;
      if (cnt == index.length) {
        flag = 1;
        break;
      }
    }
  }

  if (flag == 0) {
    return false;
  }
   else {
     return true;
   }
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));