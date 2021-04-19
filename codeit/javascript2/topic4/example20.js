// 직접 만들어보는 Promise 객체

const p = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('success');
  // }, 2000);
  setTimeout(() => {
    reject(new Error('fail'));
  }, 2000);
});
p.then((result) => {
  console.log(result);
});
