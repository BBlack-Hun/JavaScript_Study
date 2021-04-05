// this

console.log(this);

const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function () {
    return `${user.firstName} ${user.lastName}`;
  },
};

console.log(user.getFullName());

console.log('-------------------------------------------------');
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

const user2 = {
  fisrName: 'Tess',
  lastName: 'Jang',
  getFullName: getFullName,
};

const admin = {
  firstName: 'Alex',
  lastName: 'Kim',
  getFullName: getFullName,
};

console.log(user2.getFullName());
console.log(admin.getFullName());

console.log(this);

// function printThis() {
//   console.log(this);
// }

// this 객체의 메소드를 만들떈, Arrow function은 지양된다.
const printThis = () => {
  console.log(this);
};

const myObj = {
  content: 'myObj',
  printThis: printThis,
};

const otherObj = {
  content: 'oterhObj',
  printThis: printThis,
};

myObj.printThis();
otherObj.printThis();
