// arguments

function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log('--------------------');
}

printArguments('Young', 'Mark', 'Koby');
printArguments('Captain');
printArguments('Jayden', 'Scott');
printArguments('Suri', 'Jack', 'Joy', 'Noel');

function printArguments2(a, b, c) {
  for (const arg of arguments) {
    console.log(arg);
  }
  console.log('--------------------------');
}

printArguments2('Young', 'Mark', 'Koby');
printArguments2('Captain');
printArguments2('Jayden', 'Scott');
printArguments2('Suri', 'Jack', 'Joy', 'Noel');
