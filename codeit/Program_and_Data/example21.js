// 투표 결과 리스트
let votes = [
    '이재식',
    '이재식',
    '이규하',
    '이규하',
    '이규하',
    '이재식',
    '이재식',
    '이규하',
    '이규하',
    '이재식',
    '이규하',
    '이규하',
    '이규하',
    '이규하',
    '이재식',
    '이재식',
    '이규하',
    '이재식',
    '이재식',
    '이재식',
    '이재식',
    '이재식',
    '이규하',
    '이규하',
    '이규하',
    '이규하',
    '이규하',
    '이재식',
    '이규하',
    '이규하',
    '이규하',
    '이규하',
    '이재식',
    '이규하',
    '이규하',
    '이규하',
    '이재식',
    '이재식',
    '이재식',
    '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};
let cnt1 = 0;
let cnt2 = 0;

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
    if (name in voteCounter) {
        voteCounter[name] += 1;
    } else {
        voteCounter[name] = 0;
    }
}

// 후보별 득표수 출력
console.log(voteCounter);
