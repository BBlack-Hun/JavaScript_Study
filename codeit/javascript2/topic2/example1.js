// AND와 OR의 연상 방식
console.log('Codeit' && 'JavaScript');

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('\n');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('\n');
console.log(null && undefined);
console.log(0 || true);
console.log('0' && NaN);
console.log({} || 123);
console.log('\n');
function print(value) {
  const message = value || 'Codeit';

  console.log(message);
}

print();
print('JavaScript');
