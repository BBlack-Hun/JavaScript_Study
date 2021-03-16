// 옵셔널 파라미터 (Optional Parameters)
function sayHello(name) {
    console.log(`안녕하세요. ${name}님!`);
}

sayHello('코드잇');
sayHello('좋아요');
sayHello('사랑해');
sayHello();

let x;
console.log(x);
console.log(sayHello('코드잇 최고!'));


function introduce(name, age, nationality = '한국') {
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`나이는 ${age} 이고,`);
    console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇', '미국', 4);
console.log(' ');
introduce('코드잇', 4);