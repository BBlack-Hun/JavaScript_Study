/*
p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.
*/

new Promise((resolve, reject) => {
    /* pending */
    // 지정한 ms 이후에 실행될 함수를 지정해 줄 수 있다.
    setTimeout(() => {
        resolve();  /** fulfilled */
    }, 1000);
})