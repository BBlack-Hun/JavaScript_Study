// 맴버 변수

class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A("Mark", 37));

// class field는 런타임 확인(12.11.1 버전에서는 undefine이라고 출력)

class B {
    name;
    age;
}

console.log(new B());

class C {
    name = "no name";
    age = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new C('Mark', 37));