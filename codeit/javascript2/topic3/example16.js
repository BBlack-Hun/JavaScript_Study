// static Property와 static method

class Math {
  static PI = 3.14;

  static getCircleArea(radius) {
    return Math.PI * radius * radius;
  }
}

Math.PI = 3.141592;
Math.getRectangleArea = function (width, height) {
  return width * height;
};

console.log(Math.PI);
console.log(Math.getCircleArea(5));
console.log(Math.getRectangleArea(4, 5));

console.log(Date.now);
