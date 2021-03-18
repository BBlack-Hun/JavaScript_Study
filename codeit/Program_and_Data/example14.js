let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성해 주세요.
for (let i in celsiusTemps) {
    let f = (celsiusTemps[i] * 9) / 5 + 32;
    fahrenheitTemps[i] = f;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);
