// 은행 클래스
class BankAccount {
  // 생성자 - 계좌주, 계좌(현재 잔액)
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }
  // 입금
  deposit(money) {
    this.balance += money;
  }

  // 출금
  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }
  // 송금
  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
}
