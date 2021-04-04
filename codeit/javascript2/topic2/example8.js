// Rest Prarameter
function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
  console.log('------------------------');
}

printArguments('Young', 'Mark', 'Koby');
printArguments('Captain');
printArguments('Jayden', 'Scott');
printArguments('Suri', 'Jack', 'Joy', 'Noel');

// function printArguments2(...args) {
//   console.log(args.splice(0, 2));
//   // 오류가 출력됨 (아래)
//   console.log(arguments.splice(0, 2));
//   console.log('------------------------');
// }

// printArguments2('Young', 'Mark', 'Koby');
// printArguments2('Captain');
// printArguments2('Jayden', 'Scott');
// printArguments2('Suri', 'Jack', 'Joy', 'Noel');

function printRank(first, second, ...others) {
  console.log('코드잇 레이스 최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

printRank('Phil', 'Won', 'Emma', 'Min', 'Luke');
