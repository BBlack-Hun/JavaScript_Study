// 참조형 복사하기 (Reference Type Copy)
let number1 = [1,2,3];
// 1,2 둘다 변경됨
//let number2 = number1;
// 2만 변겯됨
let number2 = number1.slice();

number2.push(4);

console.log(number1);
console.log(number2);

let course1 = {
    title: '파이썬 프로그래밍 기초',
    language: 'python'
};

let course2 = {};
for (let key in course1) {
    course2[key] = course1[key];
}

// let course2 = Object.assign({}, course1);

// course2.title = "알고리즘의 정석";
course2.title = '자료 구조'

console.log(course1);
console.log(course2)

console.log('--------------------------');

function cloneObject(object) {
    let temp = {};

    for (let key in object) {
        temp[key] = object[key];
    }

    return temp;
}

let course3 = {
    title: '파이썬 프로그래밍 기초',
    language: 'Python'
};

let course4 = cloneObject(course3);
let course5 = cloneObject(course3);

course2.title = '자료구조';
course3.title = "객체 지향 프로그래밍";

console.log(course3);
console.log(course4)

console.log('--------------------------');

function cloneObject(object) {
    let temp = {};

    for (let key in object) {
        temp[key] = object[key];
    }

    return temp;
}

let course6 = {
    title: '파이썬 프로그래밍 기초',
    language: 'Python',
    prerequisite: [],
};

let course7 = cloneObject(course6);

course7.title = '알고리즘의 정석';
course7.prerequisite.push('파이썬 프로그래밍 기초');

console.log(course6);
console.log(course7);