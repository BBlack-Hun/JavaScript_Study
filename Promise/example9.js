/**
 * p.then 으로 callback 함수를 설정했기 때문에, fulfilled 되면서 callback 이 실행됩니다.
 */

const p = new Promise((resolve, reject) => {
    /* pending */
    // 지정한 ms 이후에 실행될 함수를 지정해 줄 수 있다.
    setTimeout(() => {
        resolve();  /* fulfilled */
    }, 1000);
});

// resolve 함수가 실행 된 이후에, then 이라는 문장이 실행. (1초 후 실행)
p.then(() => {
    console.log('1000ms 후에 fulfilled 됩니다.');
});
