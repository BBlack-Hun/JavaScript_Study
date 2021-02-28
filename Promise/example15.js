/**
 * fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 이다면, .finally()를 설정하고, 함수를 인자로 넣습니다.
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
    })
    .finally(() => {
        console.log('end');
    });