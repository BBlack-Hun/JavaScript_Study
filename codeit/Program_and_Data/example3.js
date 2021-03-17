// 객체

let codeit = {
    name: "코드잇",
    bornYear: "2017",
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: "자바스크립트 프로그래밍 기초",
        language: "JavaScript"
    }
};



console.log(codeit.name);
codeit.name = "codeit";
console.log(codeit.name);

console.log(codeit.ceo);
codeit.ceo = "강영훈";
console.log(codeit.ceo);

console.log(codeit.worstCourse !== undefined);

// 'propertyName' in object
console.log('worstCourse' in codeit);

if ('name' in codeit) {
    console.log(`name값은 ${codeit.name}입니다.`);
} else {
    console.log('name 프로퍼티는 존재하지 않습니다.');
}