/**
 * executor의 reject 함수를 실행할때, 인자를 넣어 실행하면, then 의 callback 함수의 인자로 받을 수 있습니다.
 * reject('error');
 * then((reason) => {...})
 */

function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        // 지정한 ms 이후에 실행될 함수를 지정해 줄 수 있다.
        setTimeout(() => {
            // 문자열 또는 데이터를 인자로 담아 넘길 수 있다.
            reject(new Error('bad')); 
        }, 1000);
    });
}

p()
    .then((message) => {
        console.log('1000ms 후에 fulfilled 됩니다.', message);
    })
    .catch(error => {
        console.log('1000ms 후에 rejected 됩니다.', error);
    });