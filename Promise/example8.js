/**
 * p 라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행된다.
 */

const p = new Promise((resolve, reject) => {
    /* pending */
    // 지정한 ms 이후에 실행될 함수를 지정해 줄 수 있다.
    setTimeout(() => {
        resolve();  /* fulfilled */
    }, 1000);
});

// resolve 함수가 실행 된 이후에, then 이라는 문장이 실행. (1초 후 실행)
p.then(/* callback */);
