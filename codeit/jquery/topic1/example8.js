// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
  var count = 0;
  var str = word;
  str = str.toUpperCase();
  for (let i in str) {
    if (str[i] == ch) {
      count++;
    }
  }

  return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
  var cnt = 0;
  for (let i of word) {
    if (i == 'A' || i == 'a') {
      cnt++;
    }
  }
  return cnt;
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));
