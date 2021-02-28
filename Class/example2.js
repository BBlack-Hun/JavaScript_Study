// constructor

class A {}

console.log(new A());

class B {
    constructor() {
        console.log('constructor');
    }
}

console.log(new B());

class C {
    constructor(name, age) {
        console.log('constructor', name, age);
    }
}

console.log(new C('mark', 37));
console.log(new C()); // 값이 없는 경우 undefined가 출력 된다.