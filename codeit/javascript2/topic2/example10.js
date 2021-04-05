// 여기에 코드를 작성해 주세요.
function ignoreFisrt(first, second, ...rest) {
  console.log(second);
  for (const arg of rest) {
    console.log(arg);
  }
}

ignoreFisrt('1세대', '2세대', '3세대');
ignoreFisrt('곰팡이', '강아지', '고양이');
ignoreFisrt(20, 9, 18, 19, 30, 34, 40);
