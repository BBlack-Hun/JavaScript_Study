// get, set

class A {
    _name = 'no name'; // _를 쓰는 경우는, 내부에서 사용하게 된다. 직접 변수를 변경하는 것이 아닌, getter와 setter를 사용하는 편

    get name() {
        return this._name + '@@@';
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
a.name = 'Mark';
console.log(a);
console.log(a.name);
console.log(a._name);

// readonly

class B {
    _name = 'no name';  // 앞에 _가 존재하는 경우, 외부에서 값을 바꾸지 말자라는 의미!

    get name() {
        return this_name + '@@@';
    }
}

const b = new B();
console.log(b);
b.name = 'Mark';
console.log(b);