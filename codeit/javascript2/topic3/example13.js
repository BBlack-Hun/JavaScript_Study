// 부모 클래스의 메소드가 필요하다면

class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  get email() {
    return this._email;
  }

  set email(address) {
    if (address.includes('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }
}

class PreminumUser extends User {
  constructor(email, birthdate, level, point) {
    super(email, birthdate);
    this.level = level;
    this.point = point;
  }

  buy(item) {
    super.buy(item);
    this.point += item.price * 0.05;
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = new User('tommy123@google.com', '1997-12-07');
const user2 = new User('rachel@google.com', '1988-05-16');
const user3 = new User('brian@google.com', '2005-11-24');

const pUser1 = new PreminumUser('chris123@google.com', '1992-03-21', 5);
const pUser2 = new PreminumUser('helloMike@google.com', '1990-09-15');
const pUser3 = new PreminumUser('aliceKimg@google.com', '2000-07-22');

// user1.buy(item);
// pUser1.buy(item);
// user2n .buy(item);
// pUser2.buy(item);
// user3.buy(item);
// pUser3.buy(item);

const users = [user1, pUser1, user2, pUser2, user3, pUser3];

users.forEach((user) => {
  user.buy(item);
});
