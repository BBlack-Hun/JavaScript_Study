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

// 점표기법 (objectName.propertyName)
console.log(codeit.bornYear);

// 대괄호 표기법 (objectName['propertyName'])
let propertyName = 'name';
console.log(codeit[propertyName]);

console.log(codeit.bestCourse['title']);

// 존재하지 않는 속성에 접근하려고 하면 undefined라고 출력됨

console.log(codeit.bestCourse['teacher']);