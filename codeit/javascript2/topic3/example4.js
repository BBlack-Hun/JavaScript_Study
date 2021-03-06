// 객체 만들기 3 Class

class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const item = {
  name: '스웨터',
  price: 30000,
};
const user1 = new User('chris123@google.com', '1992-03-21');

console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);

const user2 = new User('jerry99@google.com', '1995-07-19');

console.log(user2.email);
console.log(user2.birthdate);
user2.buy(item);
