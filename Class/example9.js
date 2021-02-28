// super

class Parent {
    name;

    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor(name, age) {
        // 부모 클래스의 변수를 사용하는 경우, super를 통해 선언한 뒤 사용해야 한다.
        super(name);
        this.age = age;
    }

    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent('Mark');
const c = new Child('Mark', 37);
console.log(p, c);
c.hello();