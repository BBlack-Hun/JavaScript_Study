/*
executor 함수 인자 중 하나인 resolve 함수를 싱행하면, fulfilled (이행) 상태가 된다.
*/

new Promise((resolve, rejcet) => {
    // 
    // ..
    resolve();  // fulfilled
});