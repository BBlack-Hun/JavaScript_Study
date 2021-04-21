const PI = 3.14;
let author = 'codeit teacher';

function add(x, y) {
  return x + y;
}

let test = {
  date: '2020-09-20',
  types: ['safetyTest', 'performanceTest'],
  printTyeps() {
    for (const i in this.types) {
      console.log(this.types[i]);
    }
  },
};

exports.PI = PI;
exports.author = author;
exports.add = add;
exports.test = test;
