// 변수, 함수 추가 및 오버라이딩

class Parent {
    name = 'Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 37;
    
    // 부모의 함수를 오버라이딩한 함수
    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();

console.log(p, c);
c.hello();
c.name = 'Anna';
c.hello();