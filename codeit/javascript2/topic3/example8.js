// 캡슐화

class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  set email(address) {
    if (address.includes('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }
}

const item = {
  name: '스웨터',
  price: 30000,
};
const user1 = new User('chris123@google.com', '1992-03-21');
user1.email = 'chris robert';

console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);
