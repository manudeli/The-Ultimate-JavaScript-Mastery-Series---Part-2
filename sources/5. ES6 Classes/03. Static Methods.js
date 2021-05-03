// There are 2 different ways to define Methods in classes
// What's different ?

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // 1. Instance Method
  draw() {}

  // 2. Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse(`{"radius": 1}`);
console.log(circle);
