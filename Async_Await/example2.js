// await 를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

(async function main() {
    // 비동기 처리가 끝날 떄 까지 기다린 후에 그 다음에 진행을 하게 된다.
    // 비동기 처리가 밑으로 흘러갈 수 있도록 처리 하는데 도움이 되는 Async
    const ms = await p(1000);
    console.log(`${ms} ms 후에 실행된다.`);
})();