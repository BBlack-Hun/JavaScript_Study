function calculateChange(payment, cost) {
  let change = payment - cost;
  let oMan=0, Man=0, oChean=0, Chean=0;
  if (change / 50000) {
    oMan = Math.floor(change / 50000);
    change -= (Math.floor(oMan) * 50000);
    
  } else {
    oMan = 0;
  }
  if (change % 10000 > 0) {
    Man = Math.floor(change / 10000);
    change -= (Math.floor(Man) * 10000);
  } else {
    Man = 0;
  }
  
  if (change / 5000) {
    oChean = Math.floor(change / 5000);
    change -= (Math.floor(oChean) * 5000);
  } else {
    oChean = 0;
  }

  if (change / 1000) {
    Chean = Math.floor(change / 1000);
    change -= (Chean * 1000);
  } else {
    Chean = 0;
  }
  console.log('50000원 지폐: ' + oMan + '장');
  console.log('10000원 지폐: ' + Man + '장');
  console.log('5000원 지폐: ' + oChean + '장');
  console.log('1000원 지폐: ' + Chean + '장');
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);