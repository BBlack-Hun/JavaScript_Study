// static 변수, 함수

class A {
    static age = 37;
    static hello() {
        console.log(A.age); // 내부 스테틱 변수에 접근할 때는, 클래스.변수로 접근
    }
}

console.log(A, A.age);
A.hello();

class B {
    age = 37;
    static hello() {
        console.log(this.age);
    }
}

console.log(B, B.age);
B.hello();
// new B().hello();

class C {
    static name = "이 클래스의 이름을 C가 아니다."; // 클래스 변수가 name으로 선언될 경우, 그 함수(클래스)의 이름이 된다.
}

console.log(C);